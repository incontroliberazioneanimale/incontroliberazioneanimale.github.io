/** @class wixapps.integration.proxies.LabelProxy */
define.Class("wixapps.integration.proxies.LabelProxy", function(classDefinition) {
	/** @type bootstrap.managers.classmanager.ClassDefinition */
	var def = classDefinition;

	def.inherits("wixapps.integration.proxies.WProxy");

	def.binds(["_onAppPartResize"]);

	def.traits(["wixapps.integration.proxies.traits.AppsLinkTrait"]);

    def.utilize(['wysiwyg.common.utils.TextMigrationHandler', 'wysiwyg.common.utils.TextMigrationDomHelper']);

    def.resources(['W.Theme', 'W.Utils']);

	/** @lends wixapps.integration.proxies.LabelProxy */
	def.fields({
		_styleString: ""
	});


	/** @lends wixapps.integration.proxies.LabelProxy */
	def.methods({

        initialize: function(viewContext, data, def, fieldId) {
            this.parent(viewContext, data, def, fieldId);
            this._migrationHandler = new this.imports.TextMigrationHandler();
            this._migrationDomHelper = new this.imports.TextMigrationDomHelper();
        },

        createComponent: function() {
            this.useSkinsInsteadOfStyles();
            var rawData = this._createRawData();

            return this._createWixComponent(
                this._getCompName(),
                rawData
            );
        },

		_setupPropertyHandlers: function() {
			this._handleProperties(["postfix", "prefix", "disableLinks", "lineThrough", "underline", "singleLine", "color", "bold", "noWrap", "style", "italic"], function() {
				this._componentLogic.getDataItem().set("text", this._createFormattedText());
			});
		},

        _createRawData: function() {
            return {
                type: "StyledText",
                text: this._createFormattedText()
            };
        },

        _createFormattedText: function(){
            var txt = this._getInnerText();
            txt = this._prepareLinks(txt);
            var txtElement = this._getTextAsRichTextElement(txt);
            txtElement = this._applyDefaultStyleOnText(txtElement);
            if (this._isSingleLine()) {
                var element = txtElement.getFirst() || txtElement;
                element.addClass("singleLine");
                var colorName = this._def.getChildValue("color");
                if (colorName) {
                    if (this._isCustomColor(colorName)) {
                        element.setStyle("color", colorName);
                    }
                    else {
                        element.addClass(colorName);
                    }
                }
            }
            return txtElement.innerHTML;
        },

        _prepareLinks: function(txt){
            if (W.Editor || this._def.getChildValue("disableLinks")) {
                //if in the editor remove links from text
                txt = txt.replace(/<a\b[^>]*>(.*?)<\/a>/ig, "$1");
            }
            else {
                this._updateLinkDataItems();
            }
            return txt;
        },

        /**
         * wraps the text value with prefix and postfix
         * @return {String}
         * @private
         */
        _getInnerText: function() {
            var text = "";

            if (this._data.getTypeName() === "wix:RichText") {
                // We do not allow the usage of "prefix" and "postfix" on RichText elements
                var hasPreOrPostFix = this._def.getChildrenRefs().some(function (ref) {
                    return [ "prefix", "postfix" ].contains(ref);
                });
                if (hasPreOrPostFix) {
                    throw "Warning:: type [wix:RichText] does not support [prefix] or [postfix].";
                }
                // all good here..
                this._migrateHtml();
                text = this._data.getChildValue("text");
            }
            else {
                var prefix = this._def.getChildValue("prefix");
                var postfix = this._def.getChildValue("postfix");
                var valueText = this._data.getValue();

                if (prefix) {
                    text += prefix;
                }
                if (valueText) {
                    text += String(valueText).trim();
                }
                if (postfix) {
                    text += postfix;
                }
            }

            return text;
        },

        /**
         * will wrap String and Number with default style place holder, and take only first block for single line
         * @param {String} text
         * @return {Element}
         * @private
         */
        _getTextAsRichTextElement: function(text){
            if (this._isSingleLine()) {
                text = String(text);
                //if it's rich text only the br is relevant
                text = text.replace(/(<p>|<\/p>|<br\/?>)/ig, "");
            }

            var temp = new Element('div');

            if(this._data.getTypeName() !== "wix:RichText"){
                // IE8 doesn't like to set innerHTML with 'hatul' tag, so we need to create an element 'hatul'
                // and grab it as an element not text and fool the evil browser - MUHAHAHAHAHAHA
                var placeholder = new Element(this._getDefaultStylePlaceHolderTag());
                placeholder.set("html", text);
                temp.grab(placeholder);

                //if number or string wrap wrap with the default style placeholder
                //text = "<{0}>{1}</{0}>".substitute([this._getDefaultStylePlaceHolderTag(), text]);
            }
            else {
                temp.set("html", text);
            }

            if (this._isSingleLine()) {
                //we don't apply the single line here because there is a chance that the element is the default style place holder
                //and then it will be replaced
                var firstBlock = temp.getFirst();
                if (firstBlock !== null) {
                    temp.empty();
                    temp.grab(firstBlock);
                }
//                else {
//                    // TODO - add "have you seen my cat" image here
//                }
//                if (/^(ol|ul)$/i.test(firstBlock.tagName)) {
//                    var li = firstBlock.getFirst();
//                    firstBlock.empty();
//                    firstBlock.grab(li);
//                }
            }
            return temp;
        },

        _applyDefaultStyleOnText: function(textElement){
            var defaultStyledElements = textElement.getElements(this._getDefaultStylePlaceHolderTag());
            defaultStyledElements.forEach(function(defaultStyledElement){
                this._replaceDefaultStyledElement(defaultStyledElement);
            }, this);
            return textElement;
        },

        _replaceDefaultStyledElement: function(elementToReplace){
            //TODO: maybe we should create the element once and clone.. or work with strings
            var defaultStyleElement = this._getDefaultStyleElement();
            defaultStyleElement.innerElement.innerHTML = elementToReplace.innerHTML;
            this._copyAttributesFromOneElementToAnother(elementToReplace, defaultStyleElement);
            this._copyStylesFromOneElementToAnother(elementToReplace, defaultStyleElement);

            elementToReplace.parentNode.replaceChild(defaultStyleElement.outerElement, elementToReplace);
        },

        _getDefaultStyleElement: function(){
            var styleClass = Constants.WixApps.TEXT_STYLES[this._def.getChildValue("style")] || this._getDefaultStyleName();
            var rootElement = this._getBlockDefaultStyledElement(styleClass);
            var innerElement = rootElement;
            var bold = this._def.getChildValue("bold") === true || this._def.getChildValue("bold") === "true";
            var italic = this._def.getChildValue("italic") === true || this._def.getChildValue("italic") === "true";
            var lineThrough = this._def.getChildValue("lineThrough") === true || this._def.getChildValue("lineThrough") === "true";
            var underline = this._def.getChildValue("underline") === true || this._def.getChildValue("underline") === "true";
            var lineHeight = parseFloat(this._def.getChildValue("line-height"));
            var colorElement = this._getDefaultColorElement();
            var fontSize = parseFloat(this._def.getChildValue("fontSize"));
            if (!isNaN(lineHeight)) {
                rootElement.setStyle("line-height", lineHeight + "em");
            }
            if (colorElement) {
                innerElement = this._insertElementToParentElement(innerElement, colorElement);
            }
            if (bold) {
                innerElement = this._insertElementToParentElement(innerElement, new Element('strong'));
            }
            if (italic) {
                innerElement = this._insertElementToParentElement(innerElement, new Element('em'));
            }
            if (lineThrough) {
                innerElement = this._insertElementToParentElement(innerElement, new Element('strike'));
            }
            if (underline) {
                innerElement = this._insertElementToParentElement(innerElement, new Element('u'));
            }
            if (!isNaN(fontSize)) {
                var sizeElement = new Element('span');
                sizeElement.setStyle('font-size', fontSize + 'px');
                innerElement = this._insertElementToParentElement(innerElement, sizeElement);
            }
            return {
                'outerElement': rootElement,
                'innerElement': innerElement
            };
        },

        /**
         *
         * @private
         * @return the inner element
         */
        _insertElementToParentElement: function(parentElement, innerElement){
            parentElement.grab(innerElement);
            return innerElement;
        },

        _getBlockDefaultStyledElement: function(styleClass){
            var styleTag = this._getSeoTagForStyleCssClass(styleClass);
            var element = new Element(styleTag, {'class': styleClass});
            return element;
        },

        _getDefaultColorElement: function(){
            var element = null;
            var colorName = this._def.getChildValue("color");
            if (colorName) {
                element = new Element('span');
                if (this._isCustomColor(colorName)) {
                    element.setStyle("color", colorName);
                }
                else {
                    element.addClass(colorName);
                }
            }
            return element;
        },

        /**
         * called only when type is rich text
         * @private
         */
        _migrateHtml: function(){
            var rawData = this._data.getValue();
            var dataChanged = false;
            // RichText needs to be migrated if it has no version or its version is 1.
            if (!rawData.hasOwnProperty("version") || rawData.version === 1) {
                rawData.text = this._migrationHandler.migrateText(rawData.text, this._getDefaultStylePlaceHolderTag(), this._getDefaultStyleName());
                rawData.version = 2;
                dataChanged = true;
            }
            if (/hasproxy=.true/mi.test(rawData.text)) {
                // when copy-pasting wix content into the ck-editor we don't sanitize the input and get bad data
                // for now only remove "hasproxy", "vcfield", "vcview", "vctype" and "pos"
                var getAttributeMatcher = function (attributeName) {
                    return new RegExp(attributeName + "=['\"].*?['\"]", "mgi");
                };
                _.each([ "hasproxy", "vcfield", "vcview", "vctype", "pos" ], function (attrName) {
                    rawData.text = rawData.text.replace(getAttributeMatcher(attrName), "");
                });
                // should we trim?
                //rawData.text = this._trimText(rawData.text);
                dataChanged = true;
            }
            if (dataChanged) {
                this._data.setValue(rawData);
            }
        },

        _copyAttributesFromOneElementToAnother: function(fromElement, toElement) {
            var oldAttributeNodes = this._migrationDomHelper.getAllAttributes(fromElement);
            for( var i =0; i < oldAttributeNodes.length; i++){
                var attrNode = oldAttributeNodes[i];
                var attrName = attrNode.name;
                if (attrName === "style" || attrName === "class") {
                    continue;
                }
                var attrValue = fromElement.getAttribute(attrName);
                if (attrValue) {
                    toElement.outerElement.setAttribute(attrName, attrValue);
                }
            }
        },

        _copyStylesFromOneElementToAnother: function(fromElement, toElement) {
            var oldStyleMap = this._createElementStyleMap(fromElement);
            var newStyleMap = this._createElementStyleMap(toElement.outerElement);

            for (var oldProp in oldStyleMap) {
                newStyleMap[oldProp] = oldStyleMap[oldProp];
            }

            toElement.outerElement.setStyles(newStyleMap);
        },

        _createElementStyleMap: function(element) {
            var styleMap = {};
            var properties = [];

            var styleString = element.getAttribute('style');
            if (styleString) {
                //remove the last semi colon
                if (styleString.trim().lastIndexOf(';') === styleString.length-1) {
                    styleString = styleString.substring(0, styleString.length-1);
                }
                properties = styleString.split(';');
            }
            properties.forEach(function(property) {
                var keyValuePair = property.split(':');
                if (keyValuePair.length != 2) { return; }
                styleMap[keyValuePair[0].trim()] = keyValuePair[1].trim();
            });
            return styleMap;
        },

        _trimText: function(text) {
            return text.replace(/\s+/mgi, ' ').replace(/^\s*/, '').replace(/\s*$/, '');
        },

		_isSingleLine: function() {
			if (this._def == null) { return false; }
			var defVal = this._def.getChildValue("singleLine");
			return defVal === true || defVal == "true";
		},

        getStyleString: function(){
            var styleClass = Constants.WixApps.TEXT_STYLES[this._def.getChildValue("style")] || this._getDefaultStyleName();
            var colorName = this._def.getChildValue("color");
            if (colorName) {
                return styleClass + " " + colorName;
            }
            return styleClass;
        },

        _onComponentWixified: function() {
            this._viewContext.getEnvironment().getEventsDispatcher().addEvent(Constants.WixAppEvents.APP_PART_RESIZE, this._onAppPartResize);
            if (this._componentLogic && !this._componentLogic.getIsDisposed() && this._componentLogic._setLinksDataToElements) {
                this._componentLogic._setLinksDataToElements("VIEW");
            }
            this._onAppPartResize();

            // SRY - this is because the span is invisible at this time (under the grey panel, i think)
            // and the ellipsis did not work yet.
            window.setTimeout(this._setTooltip.bind(this), 100);

            var noWrap = this._def.getChildValue("noWrap");
            if (noWrap === true || noWrap === "true") {
                this._element.setStyle("white-space", "nowrap");
            } else {
                this._element.setStyle("white-space", "normal");
            }
        },

		_onDataChanged: function(evt) {
			if (this._componentLogic && !this._componentLogic.getIsDisposed()) {
				this._componentLogic.getDataItem().set("text", this._createFormattedText());
                if(this.resources.W.Utils.isIE()) {
                    this._viewContext.getEnvironment().getEventsDispatcher().fireEvent(Constants.WixAppEvents.PROXY_SIZE_INVALID);
                }
			}
		},

		_onAppPartResize: function() {
			if (!this._disposed) {
				this._setTooltip();
			}
		},

        _setTooltip: function() {
            if (!this._element) {
                return;
            }
            if (this._shouldShowTooltip(this._element)) {
                var text = this._getInnerText();
                //leaves only plain text
                text = new Element('div').set('html', text).get('text');
                this._element.setAttribute("title", this._trimText(text));
            }
            else {
                this._element.removeAttribute("title");
            }
        },

		_shouldShowTooltip: function(element) {
            if (!this._def) {
                return false;
            }

            var showTooltip = this._def.getChildValue("showTooltip");

            if (this._isSingleLine() && (showTooltip === "true" || showTooltip === true)) {
                var el = element;
                if (element.getFirst()) {
                    el = element.getFirst();
                }
                return el.scrollWidth > el.offsetWidth;
            }
			return false;
		},

		_isCustomColor: function(colorName) {
			return colorName.slice(0, 1) === "#";
		},

		/**
		 * Might be overridden in proxies extending LabelProxy
		 */
		_getCompName: function() {
			return "wysiwyg.viewer.components.WRichText";
		},

        _getSeoTagForStyleCssClass: function(cssClass){
            //TODO: think where to get the data from in the viewer...
            return 'p';
        },

		_getDefaultStyleName: function() {
			return "font_8";
		},

        _getDefaultStylePlaceHolderTag: function(){
            //TODO: think where to get the data from in the viewer...
            return "hatul";
        },

        _getDefaultSkinName: function() {
            return  "wysiwyg.viewer.skins.WRichTextNewSkin";
        },

		_getAcceptableDataTypes: function() {
			return ["String", "wix:RichText", "Number"];
		},

		/**
		 * @override
		 */
		getProxyMetaTags: function() {
			return ["text"];
		},
        _preventReflowCssClass: function() {
            return null;
        }
	});
});

