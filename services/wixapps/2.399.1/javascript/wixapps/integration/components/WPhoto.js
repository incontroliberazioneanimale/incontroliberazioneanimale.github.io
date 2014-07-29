/** @class wixapps.integration.components.WPhoto */
define.component('wixapps.integration.components.WPhoto', function (componentDefinition) {
    /**@type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    def.inherits("wysiwyg.viewer.components.WPhotoOBC");

    def.utilize([]);

    def.traits([]);

    def.skinParts( {
        'link':{ type:'htmlElement' },
        'img':{ 'type':'core.components.image.ImageNew', 'dataRefField':'*', 'hookMethod': '_setImageArgs'}
    });

    def.dataTypes(['Image']);

    def.propertiesSchemaType('WPhotoProperties');

    def.resources(["W.Config", "W.Utils"]);

    /**
     * @lends wixapps.integration.components.WPhoto
     */
    def.methods({

        initialize:function (compId, viewNode, args) {
            this.parent(compId, viewNode, args);
            args = args || {};
            this._showZoom = args.showZoom || false;

        },

        getStyleNameSpace: function() {
            return this._styleNameSpace || "wysiwyg.viewer.components.WPhoto";
        },

        _onAllSkinPartsReady: function () {
            this.parent();
            this._skinParts.link.setStyles({
                "box-sizing": "border-box"
            });
        },

        _setSkinPartElements: function(rawSkinParts) {
            if (rawSkinParts.link && rawSkinParts.link.tagName.toLowerCase() === "a") {
                var fakeLink = new Element('div');
                if(this.resources.W.Utils.isIE()) {
                    fakeLink.clearAttributes();
                    fakeLink.mergeAttributes(rawSkinParts.link);
                    fakeLink.removeAttribute('uid');
                }

                if(rawSkinParts.link.attributes){
                    for (var i = 0; i < rawSkinParts.link.attributes.length; i++) {
                        var attrib = rawSkinParts.link.attributes[i];
                        if (attrib.specified) {
                            // If the attribute is a method use it as a value of the attribute's name which (in IE8) will be a string representation of the function.
                            var func = rawSkinParts.link[attrib.name];
                            var value = typeof func === "function" ? func : attrib.value;
                            fakeLink.setAttribute(attrib.name, value);
                        }
                    }
                }

                fakeLink.setStyles(rawSkinParts.link.getStyles());

                while (rawSkinParts.link.children.length>0) {
                    fakeLink.appendChild(rawSkinParts.link.removeChild(rawSkinParts.link.firstChild));
                }
                fakeLink.className = rawSkinParts.link.className;
                rawSkinParts.link.parentNode.replaceChild(fakeLink,rawSkinParts.link);
                rawSkinParts.link = fakeLink;
            }
            // Validate skin parts
            this._validateSkinParts(rawSkinParts);
            // Save skin parts elements map and notify them of DOM parent attachment
            this._skinPartElements = rawSkinParts;
//			if (rawSkinParts) {
//				var view = this._view;
//				for (var key in rawSkinParts) {
//					var node = rawSkinParts[key];
//					if (node != view) {
//						node.attachToParentNode(view);
//					}
//				}
//			}
            // Try to create component parts
            this._tryCreatingComponentParts();
        },

        /**
         * @override
         */
        _setImageArgs: function(definition){
            var result = this.parent(definition);
            if(result && result.argObject && result.argObject.requestExactSize === true) {
                var uri = this._data && this._data._data.uri && this._data._data.uri || "";
                if(uri.indexOf("http://") === 0 && uri.indexOf(this.resources.W.Config.getMediaStaticUrl()) !== 0) {
                    result.argObject.requestExactSize = false;
                }
            }
            return result;
        },

        _renderImage:function () {
            // this._sizeDefined enables us to postpone the image rendering after the size has been set by the
            // ResizableProxyTrait
            if (!this._layoutInitialized || !this._sizeDefined) {
                return;
            }
            var image = this._skinParts.img;
            if (!image || !image.getOriginalClassName) {
                return;
            }

            var settings = this._getImageSettings();
            image.setSettings(settings);
            var imgSize = image.getSize();
            if (imgSize) {
                if (settings.getCropMode() == settings.CropModes.FIT_WIDTH) {
                    this.setHeight(imgSize.y + this._getContentPaddingSize().y, false, false, true);

                } else if (settings.getCropMode() == settings.CropModes.FIT_HEIGHT) {
                    this.setWidth(imgSize.x + this._getContentPaddingSize().x, false, false, true);
                }
            }

            this._fireAutoSize();
            if (this._showZoom) {
                if (!image || !image.getOriginalClassName) {
                    return;
                }
                image.setZoom(true);
                image.fireEvent("resize", image.isOriginalImageSmallerThanWrapper());
                //this action required duo to issue ECOM-1790
                image.setSettings(settings);
            }
        }
    });
});
