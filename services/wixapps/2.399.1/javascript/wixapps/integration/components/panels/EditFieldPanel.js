/**
 * @class wixapps.integration.components.panels.EditFieldPanel
 */
define.component("wixapps.integration.components.panels.EditFieldPanel", function (componentDefinition) {
    /** @type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    def.inherits("wixapps.integration.components.editor.AppCustomizerBase");

    def.binds([ "_onDeleteClicked", "_onDialogClosing", "_onCustomizationChanged", "_customizeHighlighting", "_onHelpClicked" ]);

    def.resources([
        "W.Config",
        "W.Resources",
        "W.Commands",
        "W.Data",
        "W.Preview",
        "W.Theme",
        "W.EditorDialogs",
        "W.AppsEditor2",
        "W.AppsGUI"
    ]);

    def.utilize([
        "wixapps.integration.gui.CustomizationBinding",
        "core.utils.css.Font",
        "wixapps.core.views.ViewsCustomizer",
        "wixapps.core.utils.WixAppsLogger"
    ]);

    /**
     * @lends wixapps.integration.components.panels.EditFieldPanel
     */
    def.fields({
        /** @type {wixapps.integration.gui.FieldEditPresenter} */
        _presenter: null,

        /** @type WProxy **/
        _bindings: [],

        _isVertical: false,
        _heightMode: "manual",
        _textHeightMode: "auto",
        _helplet: "/node/14835",

        _minWidth: 0,
        _minHeight: 0,

        /**
         * @type {wixapps.integration.managers.FieldHighlightHandler}
         */
        _fieldHighlighter: null,

        /**
         * @type {wixapps.core.types.AppBuilderTypesHelper}
         */
        _typesHelper: null
    });

    /** @lends wixapps.integration.components.panels.EditFieldPanel */
    def.methods({
        initialize: function (compId, viewNode, args) {
            this.parent(compId, viewNode, args);
            this._fieldHighlighter = this.resources.W.AppsEditor2.getFieldHighlighter();
            this._typesHelper = this.resources.W.AppsEditor2.getTypesHelper();
            this._logger = new this.imports.WixAppsLogger();
        },

        /**
         * @param {wixapps.integration.gui.FieldEditPresenter} presenter
         */
        setupPanel: function (presenter) {
            this._presenter = presenter;

            var self = this;
            var learnText = this.resources.W.Resources.get('EDITOR_LANGUAGE', 'HELPLET_LEARN_MORE');
            this.setNumberOfItemsPerLine(3, 20);
            self._addLinkButton(this, learnText, self._onHelpClicked,"linkLeft");
            this.setNumberOfItemsPerLine(1, 0);

            // TODO: if this property is customizable we need to keep track of changes
            this._isVertical = presenter.getBoxOrientation() === "vertical";

            // field selector
            var model = this._presenter.getAppInstance().
                getDataItemFactory().createDataItem(this._presenter.createFieldSelectionModel());

            var selectFieldPresenter = {
                setupPresenter: function () {},
                getModel: function() { return model; },
                fieldSelected: function(evt) {
                    presenter.selectEditedField(evt.data.getValue().selectedValue);
                    model.setValue(self._presenter.createFieldSelectionModel());
                    self._recreateFieldSettings();
                    self._setFieldHighlighting();
                },
                renameField: function() {
                    var newName = model.getChildValue("fieldDisplayName");
                    self._presenter.setFieldDisplayName(newName);
                    model.setValue(self._presenter.createFieldSelectionModel());
                },
                cancelRenameField: function() {
                    model.getChildByRef("mode").setValue("selectField");
                },
                editFieldName: function() {
                    var modelRaw = model.getValue();
                    if (modelRaw.fields.isSelectedMandatory) {
                        return;
                    }
                    modelRaw.fieldDisplayName = presenter.getFieldDisplayName();
                    modelRaw.mode = "editFieldName";
                    model.setValue(modelRaw);
                },
                deleteField: function() {
                    var modelRaw = model.getValue();
                    if (modelRaw.fields.isSelectedMandatory) {
                        return;
                    }
                    self._onDeleteClicked();
                },
                checkForEnterKey: function(evt) {
                    var e = evt.cause || window.event;
                    //"enter" code is 13
                    if (e.code == 13) {
                        selectFieldPresenter.renameField();
                        e.stopPropagation();
                    }
                },
                stopKeyUpPropagation: function(evt) {
                    var e = evt.cause || window.event;
                    e.stopPropagation();
                }
            };
            this.resources.W.AppsGUI.addViewToPanel(
                this._presenter.getAppInstance(),
                this,
                "EditFieldSelectorView",
                selectFieldPresenter);

            this._recreateFieldSettings();
            this._setFieldHighlighting();

            this._dialogWindow.setCloseCallBack(this._onDialogClosing);
            this._dialogWindow.getViewNode().addEvent("dialogClosed", this._onDialogClosing);
            this.resources.W.Commands.registerCommandListenerByName( 'WPreviewCommands.WEditModeChanged', this, this._onEditorModeChanged );
        },

        _recreateFieldSettings: function() {
            if (this._settings) {
                delete this.boxAlign;
                delete this._heightMode;
                delete this.size;
                delete this.spacers;
                this._settings.getViewNode().destroy();
                this._settings.dispose();
            }
            var self = this;
            this.addInputGroupField(function () {
                self._settings = this;
                self._addCustomizationControl(this, self._presenter.getFieldType(), self._presenter.getCompName());
            }, "skinless");
        },

        _loc: function (key, defaultValue) {
            return this.resources.W.AppsEditor2.localize("EDIT_FIELD_PANEL_" + key, defaultValue);
        },

        _addLinkButton: function (panel, text, onClick, skinGroup, callback) {
            panel.addButtonField("", text, false, undefined, skinGroup ? skinGroup : "linkRight", 0, "").runWhenReady(function (logic) {
                logic.addEvent("click", onClick);
                if (callback) {
                    callback(logic);
                }
            });
        },

        /**
         * The main method that gets customizations and builds the panel
         * @override
         */
        _addCustomizationControl: function (panel, fieldType, proxyName) {
            switch (fieldType) {
                case "TextField":
                    return this._addTextFieldCustomizations(panel);
                case "Field":
                    return this._addGenericFieldCustomizations(panel, proxyName);
                default:
                    return this._addGenericFieldCustomizations(panel, proxyName);
            }
        },

        _getTextFieldProxyId: function () {
            return this._presenter.getFieldId() + "_proxy";
        },

        _getFieldProxyId: function () {
            return this._presenter.getFieldId() + "_proxy";
        },

        _onDeleteClicked: function () {
            this.resources.W.Commands.executeCommand("WAppsEditor2Commands.DeleteField", this._getCommandParams());
            this._presenter.updateModel();
            this._removeFieldHighlighting();
            this.closePanel();
        },

        _onHelpClicked: function () {
            W.Commands.executeCommand("WEditorCommands.ShowHelpDialog", this._helplet);
        },

        _getCommandParams: function (onSuccess) {
            return {
                comp: this._presenter.getAppPart(),
                fieldId: this._presenter.getFieldId(),
                fieldName: this._presenter.getFieldName(),
                fieldContainerName: this._presenter.getFieldContainerName(),
                updateModel: onSuccess || this._presenter._updateModel
            };
        },

        /**
         *
         * @param panel
         * @param {wixapps.integration.gui.FieldEditPresenter} fieldEditPresenter
         * @private
         */
        _addFieldNameInput: function (panel, fieldEditPresenter) {
            var self = this;
            var fieldDef = this._presenter.getFieldInfo();
            var isMandatory = this._typesHelper.isMandatoryField(fieldDef);
            var inputField;
            var group = panel.addInputGroupField(function () {
                inputField = this.addInputField(self._loc("FieldNameLabel"));
                inputField.setValue(fieldEditPresenter.getFieldDisplayName());
                inputField.addEvent('blur', function () {
                    fieldEditPresenter.setFieldDisplayName(inputField.getValue());
                });
            });

            group.runWhenReady(function () {
                if (isMandatory) {
                    var logic = inputField.getHtmlElement().getLogic();
                    logic.disable();
                    var label = logic.getSkinPart("label");
                    label.setStyle("opacity", 1);
                }
            });
        },

        ///////////////////////////////////////////////////////////////////////
        //
        // Generic field customizations
        //
        ///////////////////////////////////////////////////////////////////////

        _addGenericFieldCustomizations: function (panel, proxyName) {
            var self = this;
            panel.addInputGroupField(function () {
                switch (proxyName) {
                    case "Image":
                        self._addImageCustomization(this);
                        break;
                    case "Video":
                        self._minWidth = 200;
                        self._minHeight = 220;
                        self._addVideoCustomization(this);
                        break;
                    case "Button2":
                        self._minHeight = 14;
                        self._addButtonCustomization(this);
                        break;
                    default:
                        // TODO: remove the next line when map is correct
                        self._addImageCustomization(this);
                        break;
                }
            });

            this._addGenericSizeAndSpacing(panel);
        },

        _addGenericSizeAndSpacing: function (panel) {
            var self = this;
            panel.addInputGroupField(function () {
                this.addLabel(self._loc("Size"));
                this.addBreakLine(7, "1px solid #E5E5E5", 10);

                self.size = self.size || {};
                self.size.width = self._addSlider(this, self._loc("Width"), {key: "comp.width"}, self._minWidth, 1200, 1);
                self.size.height = self._addSlider(this, self._loc("Height"), {key: "comp.height"}, self._minHeight, 1200, 1);
                if (self._heightMode == "auto") {
                    self.size.height.disable();
                }

                self._addBoxAlign(this, self._loc("SizeAlignmentLabel"));
            });
            self._addSpacing(panel);
        },

        _addCollapsiblePanel: function (panel, title, panelContentFunc) {
            var checkbox = panel.addCheckBoxField(title, null, "toggle");
            checkbox.setValue(false);
            var innerPanel = panel.addInputGroupField(panelContentFunc, "skinless");
            innerPanel.runWhenReady(function (comp) {
                this._dialogWindow._setDialogHeightRelativeToWindowHeight();
                comp.collapseGroup();
            }.bind(this));
            checkbox.addEvent("inputChanged", function (evt) {
                if (evt.value) {
                    innerPanel.runWhenReady(function (comp) {
                        comp.uncollapseGroup();
                    }.bind(this));
                }
                else {
                    innerPanel.runWhenReady(function (comp) {
                        comp.collapseGroup();
                    }.bind(this));
                }
            }.bind(this));
        },

        _addSpacing: function (panel) {
            var self = this;
            panel.addInputGroupField(function () {
                self._addCollapsiblePanel(this, self._loc("SpacingLabel"), function () {

                    self.spacers = self.spacers || {};
                    self.spacers.top = self._addSlider(this, self._loc("Spacing_Top"), {key: self._isVertical ? "comp.spacers.before" : "comp.spacers.xax-before"}, 0, 600, 1);
                    self.spacers.bottom = self._addSlider(this, self._loc("Spacing_Bottom"), {key: self._isVertical ? "comp.spacers.after" : "comp.spacers.xax-after"}, 0, 600, 1);
                    self.spacers.left = self._addSlider(this, self._loc("Spacing_Left"), {key: self._isVertical ? "comp.spacers.xax-before" : "comp.spacers.before"}, 0, 600, 1);
                    self.spacers.right = self._addSlider(this, self._loc("Spacing_Right"), {key: self._isVertical ? "comp.spacers.xax-after" : "comp.spacers.after"}, 0, 600, 1);
                });
            });
        },

        _addBoxAlign: function (panel, label) {
            var self = this;

            var bg = "radiobuttons/radio_button_states.png";
            var bgDimensions = {w: "35px", h: "33px"};
            var alignmentList = [
                {value: "start", image: bg, dimensions: bgDimensions, icon: self._isVertical ? "radiobuttons/alignment/field_align_left.png" : "radiobuttons/alignment/top.png" },
                {value: "center", image: bg, dimensions: bgDimensions, icon: self._isVertical ? "radiobuttons/alignment/field_align_center.png" : "radiobuttons/alignment/middle.png" },
                {value: "end", image: bg, dimensions: bgDimensions, icon: self._isVertical ? "radiobuttons/alignment/field_align_right.png" : "radiobuttons/alignment/bottom.png"}
            ];
            self.boxAlign = panel.addRadioImagesField(label, alignmentList, undefined, undefined, "inline");
            self._bindToCustomization(self.boxAlign, { "key": "comp.box-align" });
        },

        _setHeightMode: function (mode) {
            this._heightMode = mode;
            if (this.size && this.size.height) {
                if (mode == "manual") {
                    this.size.height.enable();
                }
                else {
                    this.size.height.disable();
                }
            }
        },

        ///////////////////////////////////////////////////////////////////////
        //
        // Field specific proxy customizations
        //
        ///////////////////////////////////////////////////////////////////////

        _addImageCustomization: function (panel) {
            var self = this;

            // add modes crop(fill), fit(fitWidth)
            var list = [
                {label: self._loc("ImageMode_Crop"), value: "fill"},
                {label: self._loc("ImageMode_Center"), value: "full"},
                {label: self._loc("ImageMode_Fit"), value: "fitWidth"}
            ];

            var cropMode = panel.addComboBoxField(self._loc("ImageModeLabel"), list, undefined, undefined, "Image_Settings_Image_Scaling_ttid");
            cropMode.addEvent("inputChanged", function (evt) {
                self._setHeightMode(evt.value == "fitWidth" ? "auto" : "manual");
            });
            self._bindToCustomization(
                cropMode,
                { fieldId: self._getFieldProxyId(), "key": "comp.imageMode" }
            );
            self._bindToCustomization(
                cropMode,
                { "key": "comp.heightMode" },
                undefined,
                function (inputVal) {
                    return inputVal == "fitWidth" ? "auto" : "manual";
                },
                function (customizationVal) {
                    return undefined;
                }
            );

            this._addComponentStyleSelector(panel, this._getFieldProxyId());
        },

        _addButtonCustomization: function (panel) {
            var self = this;
            var bg = "radiobuttons/radio_button_states.png";
            var bgDimensions = {w: "35px", h: "33px"};
            var alignmentList = [
                {value: "left", image: bg, dimensions: bgDimensions, icon: "radiobuttons/alignment/left-align-text.png"  },
                {value: "center", image: bg, dimensions: bgDimensions, icon: "radiobuttons/alignment/center-align-text.png" },
                {value: "right", image: bg, dimensions: bgDimensions, icon: "radiobuttons/alignment/right-align-text.png"}
            ];
            var buttonAlign = panel.addRadioImagesField(self._loc("TextHorizontalAlignment"), alignmentList, undefined, undefined, "inline");
            self._bindToCustomization(
                buttonAlign,
                { fieldId: self._getFieldProxyId(), "key": "comp.align" },
                "left"
            );
            var marginSlider = panel.addSliderField(self._loc("Margin"), 0, 300);
            self._bindToCustomization(
                marginSlider,
                { fieldId: self._getFieldProxyId(), "key": "comp.margin" }
            );
            this._addComponentStyleSelector(panel, this._getFieldProxyId());
        },

        _addVideoCustomization: function (panel) {
            var self = this;

            var playerControlOptions = [
                { label: self._loc("VideoControls_Show"), value: "always_show" },
                { label: self._loc("VideoControls_Hide"), value: "always_hide" },
                { label: self._loc("VideoControls_AutoHide"), value: "temp_show" }
            ];

            var playerControlCombo = panel.addComboBoxField(self._loc("VideoControlsLabel"), playerControlOptions);
            self._bindToCustomization(
                playerControlCombo,
                { fieldId: self._getFieldProxyId(), "key": "comp.showControls" },
                "always_show"
            );

            var autoplay = panel.addCheckBoxField(self._loc("VideoAutoPlay"));
            self._bindToCustomization(
                autoplay,
                { fieldId: self._getFieldProxyId(), "key": "comp.autoplay" }
            );

            var loop = panel.addCheckBoxField(self._loc("VideoLoop"));
            self._bindToCustomization(
                loop,
                { fieldId: self._getFieldProxyId(), "key": "comp.loop" }
            );

            var showinfo = panel.addCheckBoxField(self._loc("VideoShowTitleBar"));
            self._bindToCustomization(
                showinfo,
                { fieldId: self._getFieldProxyId(), "key": "comp.showinfo" }
            );

            var lightTheme = panel.addCheckBoxField(self._loc("VideoUseLightControlBar"));
            self._bindToCustomization(
                lightTheme,
                { fieldId: self._getFieldProxyId(), "key": "comp.lightTheme" }
            );

            panel.addBreakLine(15);

            this._addComponentStyleSelector(panel, this._getFieldProxyId());
        },

        ///////////////////////////////////////////////////////////////////////
        //
        // Text customizations
        //
        ///////////////////////////////////////////////////////////////////////

        _addTextFieldCustomizations: function (panel) {
            var self = this;
            panel.addInputGroupField(function () {
                self._addTextCustomizations(this);
            }); // , "skinless");

            this._addTextFieldSizeAndSpacing(panel);
        },

        _addTextCustomizations: function (panel) {
            var self = this;

            var fieldId = self._getTextFieldProxyId();
            this._addTextStyleSelector(panel, fieldId);

            var label = panel.addSubLabel(self._loc("TextProperties"));
            label.getHtmlElement().setStyle("margin-top", "5px");

            var group = panel.addInputGroupField(function () {
                this.setNumberOfItemsPerLine(3);

                self._bindToCustomization(
                    self._addParagraphFormattingButtons(this),
                    { "key": "layout.text-align", fieldId: fieldId },
                    "left"
                );

                self._addBIUFormattingButtons(this, fieldId);

                var colorRule = { "key": "comp.color", fieldId: fieldId };
                var inputProxy = this.addColorSelectorField();
                self._bindToCustomization(
                    inputProxy,
                    colorRule
                );
                inputProxy.getHtmlElement().setStyle("margin-top", "-3px");

                // This ugly hackly is because the genius ColorSelectorField doesn"t know
                // how to work with setValue, only setColor.
                var colorValue = self._getCurrentValue(colorRule) || "#000000";
                var colorSource = colorValue.charAt(0) === "#" ? "value" : "theme";
                inputProxy.runWhenReady(function (logic) {
                    if (logic && logic.setColor) {
                        logic.setColor(colorValue, colorSource);
                    }
                });

            }, "skinless");
            group.getHtmlElement().setStyle("margin-left", "-5px");
            group.getHtmlElement().setStyle("margin-top", "-18px");
        },

        _addTextFieldSizeAndSpacing: function (panel) {
            var self = this;

            panel.addInputGroupField(function () {
                this.addBreakLine(7, "1px solid #E5E5E5", 10);

                self._addBoxAlign(this, self._isVertical ? self._loc("TextHorizontalAlignment") : self._loc("TextVerticalAlignment"));
                self._addTextFieldWidth(this);
                self._addTextFieldHeight(this);
            });
            self._addSpacing(panel);
        },

        _addTextFieldWidth: function (panel) {
            var self = this;

            var customizationInfo = { "key": "comp.width-mode" };

            self._manualWidthToggle = panel.addCheckBoxField(this._isVertical ? self._loc("TextManualWidth") : self._loc("TextFixedWidth"));
            self._bindToCustomization(
                self._manualWidthToggle, customizationInfo, "auto",
                function (inputVal) {
                    return inputVal === true ? "manual" : "auto";
                },
                function (customizationVal) {
                    return customizationVal == "manual";
                }
            );

            self._getWidthLabel = function (widthMode) {
                return widthMode == "auto" && !self._isVertical ? self._loc("MaxWidth") : self._loc("Width");
            };

            var initialWidthMode = this._getCurrentValue(customizationInfo, "auto");
            self._widthSlider = this._addSlider(panel, self._getWidthLabel(initialWidthMode), {key: "comp.width"}, 0, 1200, 1);

            self._manualWidthToggle.addEvent("inputChanged", function (evt) {
                if (evt.value || !self._isVertical) {
                    self._widthSlider.uncollapse();
                    self.boxAlign.uncollapse();
                }
                else {
                    self._widthSlider.collapse();
                    self.boxAlign.collapse();
                }
                // TODO: find a better way to change the label
                self._widthSlider._executeOrAddToQueue("setLabel", [self._getWidthLabel(evt.value ? "manual" : "auto")]);
            });
            if (initialWidthMode == "auto" && this._isVertical) {
                self._widthSlider.collapse();
                self.boxAlign.collapse();
            }
        },

        _migrateHeightMode: function(){
            var heightModeCustomization = this._buildCustomizationRule({ "key": "comp.height-mode" });
            heightModeCustomization.value = "auto";
            this._applyCustomizationRule(heightModeCustomization);
            return heightModeCustomization.value;
        },

        _addTextFieldHeight: function (panel) {
            var self = this;

            self._heightMode = { "key": "comp.height-mode" };
            var maxChars = { "key": "comp.max-chars" };
            var minHeight = { "key": "comp.min-height" };
            var pixelHeight = { "key": "comp.height" };

            var initialHeightMode = this._getCurrentValue(self._heightMode, "auto");

            var widthCustomizationInfo = { "key": "comp.width-mode" };
            var initialWidthMode = this._getCurrentValue(widthCustomizationInfo, "auto");

            //we need to migrate if we are in lines mode - Product request was to return to normal mode!
            if(initialHeightMode === "lines"){
                initialHeightMode = this._migrateHeightMode();
            }

            self._manualHeight = panel.addCheckBoxField(self._loc("TextManualHeight"));
            self._manualHeight.setValue(initialHeightMode !== "auto");

            // Special handling of the text field if the container does not have flex:1 (right or left)
            // If so, activating the manual height feature automatically activated the manual width
            if (self._presenter._containerId === "Left" || self._presenter._containerId === "Right") {
                if (initialHeightMode !== "auto") {
                    if (initialWidthMode === "auto") {
                        var widthRule = self._buildCustomizationRule(widthCustomizationInfo);
                        widthRule.value = "manual";
                        self._applyCustomizationRule(widthRule);

                        self._manualWidthToggle.setValue(true);
                        self._widthSlider.uncollapse();
                        self.boxAlign.uncollapse();
                        // TODO: find a better way to change the label
                        self._widthSlider._executeOrAddToQueue("setLabel", [self._getWidthLabel(true ? "manual" : "auto")]);

                    }

                    self._manualWidthToggle.omitEnableDisableUpdate().runWhenReady(
                        function(logic) {
                            logic.disable();
                        }
                    );
                }
            }

            var manualHeightModeOptions = [
                {value: "fixed-height", label: self._loc("HeightMode_Absolute_Height_Label") },
                {value: "max-chars", label: self._loc("HeightMode_Max_Chars_Label") }
            ];

            var manualHeightModeInput = panel.addComboBoxField(self._loc("HeightMode_Height_Type_Combo"), manualHeightModeOptions);
            self._bindToCustomization(manualHeightModeInput, self._heightMode, "fixed-height");

            var pixelsHeightInput = self._addSlider(panel, self._loc("HeightMode_Pixels_Height"), pixelHeight, 1, 600, 1);
            self._bindToCustomization(pixelsHeightInput, pixelHeight, 100);

            panel.addInputGroupField(function () {
                var minHeightInput = self._addSlider(panel, self._loc("HeightMode_Min_Height"), minHeight, 1, 600, 1);
                self._bindToCustomization(minHeightInput, minHeight, 100);
                var maxCharsInput = self._addSlider(panel,  self._loc("HeightMode_Max_Chars"), maxChars, 1, 600, 1);
                self._bindToCustomization(maxCharsInput, maxChars, 100);

                var setValueAndCustomize = function (input, customizationInfo, value) {
                    input.setValue(value);
                    var rule = self._buildCustomizationRule(customizationInfo);
                    rule.value = value;
                    self._applyCustomizationRule(rule);
                };

                var reportUserChangedHeightModeToBi = function(value){
                    self._logger.reportEvent(self._logger.Events.APP_BUILDER_FILTER_APPLIED, {c1: value});
                };

                var showMaxCharactersPicker = function (){
                    manualHeightModeInput.uncollapse();
                    maxCharsInput.uncollapse();
                    minHeightInput.uncollapse();
                    pixelsHeightInput.collapse();
                };

                var showManualPixelPicker = function (){
                    manualHeightModeInput.uncollapse();
                    maxCharsInput.collapse();
                    minHeightInput.collapse();
                    pixelsHeightInput.uncollapse();
                };

                var showDefaultPanel = function(){
                    manualHeightModeInput.collapse();
                    maxCharsInput.collapse();
                    minHeightInput.collapse();
                    pixelsHeightInput.collapse();
                };


                /** Reset the panel on load to the correct appearance **/
                var setVisibilityByHeightMode = function (heightModeValue) {
                    switch (heightModeValue) {
                        case "auto":
                            showDefaultPanel();
                            break;
                        case "max-chars":
                            showMaxCharactersPicker();
                            break;
                        case "fixed-height":
                            showManualPixelPicker();
                            break;
                    }
                };
                setVisibilityByHeightMode(initialHeightMode);
                /********************************************************/

                self._manualHeight.addEvent("inputChanged", function (evt) {
                    W.UndoRedoManager.startTransaction("_manualHeight");
                    var rule = self._buildCustomizationRule(self._heightMode);
                    if (evt.value) {
                        // set the mode to be pixels by default as product requested
                        setValueAndCustomize(manualHeightModeInput, self._heightMode, "fixed-height");
                        showManualPixelPicker();
                        reportUserChangedHeightModeToBi(evt.value);

                        // again, special handling for non flex:1 container
                        if (self._presenter._containerId === "Left" || self._presenter._containerId === "Right") {
                            var widthRule = self._buildCustomizationRule(widthCustomizationInfo);
                            widthRule.value = "manual";
                            self._applyCustomizationRule(widthRule);

                            self._manualWidthToggle.setValue(evt.value);
                            self._manualWidthToggle.disable();
                            self._widthSlider.uncollapse();
                            self.boxAlign.uncollapse();
                            // TODO: find a better way to change the label
                            self._widthSlider._executeOrAddToQueue("setLabel", [self._getWidthLabel(evt.value ? "manual" : "auto")]);
                        }
                    }
                    else {
                        // set the mode to be auto
                        rule.value = "auto";
                        self._applyCustomizationRule(rule);

                        showDefaultPanel();

                        // again, special handling for non flex:1 container
                        if (self._presenter._containerId === "Left" || self._presenter._containerId === "Right") {
                            self._manualWidthToggle.enable();
                        }
                    }

                    W.UndoRedoManager.endTransaction("_manualHeight");
                });

                manualHeightModeInput.addEvent("inputChanged", function (evt) {
                    if (evt.value === "max-chars") {
                        showMaxCharactersPicker();
                        setValueAndCustomize(manualHeightModeInput, self._heightMode, "max-chars");
                    }
                    else {
                        showManualPixelPicker();
                        setValueAndCustomize(manualHeightModeInput, self._heightMode, "fixed-height");
                    }
                });

                maxCharsInput.addEvent("inputChanged", function (evt) {
                    if (evt.value !== maxCharsInput.getValue()) {
                        setValueAndCustomize(maxCharsInput, maxChars, evt.value);
                    }
                });

                minHeightInput.addEvent("inputChanged", function (evt) {
                    if (evt.value !== minHeightInput.getValue()) {
                        setValueAndCustomize(minHeightInput, minHeight, minHeightInput.getValue());
                    }
                });
            }, "skinless");
        },

        _handleWidthHeightDependency: function(panel) {
            // When the section's width is determined by another's flex:1 -
            // when manual height is enabled - manual width is enabled as well
            var self = this;
            var widthCustomizationInfo = { "key": "comp.width-mode" };
            var initialHeightMode = this._getCurrentValue(self._heightMode, "auto");
            var initialWidthMode = this._getCurrentValue(widthCustomizationInfo, "auto");

            if (self._presenter._containerId === "Left" || self._presenter._containerId === "Right") {
                if (initialHeightMode !== "auto") {
                    if (initialWidthMode === "auto") {
                        var widthRule = self._buildCustomizationRule(widthCustomizationInfo);
                        widthRule.value = "manual";
                        self._applyCustomizationRule(widthRule);

                        self._manualWidthToggle.setValue(true);
                        self._widthSlider.uncollapse();
                        self.boxAlign.uncollapse();
                        // TODO: find a better way to change the label
                        self._widthSlider._executeOrAddToQueue("setLabel", [self._getWidthLabel(true ? "manual" : "auto")]);

                    }

                    self._manualWidthToggle.omitEnableDisableUpdate().runWhenReady(
                        function(logic) {
                            logic.disable();
                        }
                    );
                }
                self._manualHeight.addEvent("inputChanged", function (evt) {
                    if (evt.value || !self._isVertical) {
                        var widthRule = self._buildCustomizationRule(widthCustomizationInfo);
                        widthRule.value = "manual";
                        self._applyCustomizationRule(widthRule);

                        self._manualWidthToggle.setValue(evt.value);
                        self._manualWidthToggle.disable();
                        self._widthSlider.uncollapse();
                        self.boxAlign.uncollapse();
                        // TODO: find a better way to change the label
                        self._widthSlider._executeOrAddToQueue("setLabel", [self._getWidthLabel(evt.value ? "manual" : "auto")]);
                    }
                    else {
                        self._manualWidthToggle.enable();
                    }
                });
            }
        },

        _applyCustomizationRule: function (rule) {
            //console.log("EditFieldPanel:: ", JSON.stringify(rule));
            var view = this._presenter.getItemView();
            var viewDef = view.getValue();

            var oldRule = this.imports.ViewsCustomizer.getCurrentRule(viewDef, rule);

            if (!oldRule || oldRule.value !== rule.value){
                var appInstance = this._presenter.getAppInstance();

                this.imports.ViewsCustomizer.applyRule(viewDef, rule);
                view.setValue(viewDef);

                W.UndoRedoManager.startTransaction();

                this.resources.W.Commands.executeCommand("WAppsEditor2Commands.Undo.CustomizationChange", {
                    viewDef: viewDef,
                    viewRepo: appInstance.getViewDefinitions(),
                    newRule: rule,
                    oldRule: oldRule,
                    appPart: this._presenter.getAppPart()
                });

                W.UndoRedoManager.endTransaction();

                this._onCustomizationChanged(oldRule, rule);
            }
        },

        ///////////////////////////////////////////////////////////////////////
        //
        // Text properties
        //
        ///////////////////////////////////////////////////////////////////////

        _addTextStyleSelector: function (panel, fieldId) {
            var self = this;
            var list = [];
            for (var i = 0; i <= 10; i++) {
                var styleName = "font_" + String(i);
                var styleLabelRes = "FONT_" + String(i) + "_LABEL";
                var styleTitle = this.resources.W.Resources.get("EDITOR_LANGUAGE", styleLabelRes);
                list.push({
                    label: styleTitle,
                    value: styleName
                });
            }

            var textStyleSelector = panel.addComboBoxField(self._loc("TextStyleLabel"), list);
            self._bindToCustomization(
                textStyleSelector,
                { "key": "comp.style", fieldId: fieldId },
                "font_8",
                function (styleId) {
                    return Constants.WixApps.TEXT_STYLE_NAMES[styleId];
                },
                function (styleName) {
                    return Constants.WixApps.TEXT_STYLES[styleName];
                }
            );
        },

        _addParagraphFormattingButtons: function (panel) {
            var bg = "radiobuttons/radio_button_states.png";
            var bgDimensions = {w: "32px", h: "33px"};
            var alignmentList = [
                {value: "left", image: bg, dimensions: bgDimensions, icon: "radiobuttons/alignment/left-align-text.png"},
                {value: "center", image: bg, dimensions: bgDimensions, icon: "radiobuttons/alignment/center-align-text.png"},
                {value: "right", image: bg, dimensions: bgDimensions, icon: "radiobuttons/alignment/right-align-text.png"}
            ];
            return panel.addRadioImagesField("", alignmentList, undefined, undefined, "inline");
        },

        _addBIUFormattingButtons: function (panel, fieldId) {
            var biuControls = panel._addField(
                "wixapps.integration.components.inputs.BUISelector",
                "wixapps.integration.skins.inputs.BUISelectorSkin",
                {
                    labelText: undefined,
                    value: {
                        bold: false,
                        underline: false,
                        italic: false
                    }
                }
            );

            var boldRule = { "key": "comp.bold", fieldId: fieldId };
            var underlineRule = { "key": "comp.underline", fieldId: fieldId };
            var italicRule = { "key": "comp.italic", fieldId: fieldId };

            var boldVal = this._getCurrentValue(boldRule, false);
            var underlineVal = this._getCurrentValue(underlineRule, false);
            var italicVal = this._getCurrentValue(italicRule, false);

            var initialState = {
                bold: boldVal,
                underline: underlineVal,
                italic: italicVal
            };

            this._bindToCustomization(biuControls, boldRule, false,
                // input to customization
                function (value) {
                    return value.bold;
                }.bind(this),
                // customization to input
                function (boldValue) {
                    var state = biuControls.getValue() || initialState;
                    state.bold = (boldValue === true || boldValue === "true");
                    return state;
                }.bind(this)
            );

            this._bindToCustomization(biuControls, underlineRule, false,
                // input to customization
                function (value) {
                    return value.underline;
                }.bind(this),
                // customization to input
                function (underlineValue) {
                    var state = biuControls.getValue() || initialState;
                    state.underline = (underlineValue === true || underlineValue === "true");
                    return state;
                }.bind(this)
            );

            this._bindToCustomization(biuControls, italicRule, false,
                // input to customization
                function (value) {
                    return value.italic;
                }.bind(this),
                // customization to input
                function (italicValue) {
                    var state = biuControls.getValue() || initialState;
                    state.italic = (italicValue === true || italicValue === "true");
                    return state;
                }.bind(this)
            );
        },

        ///////////////////////////////////////////////////////////////////////
        //
        // General building blocks
        //
        ///////////////////////////////////////////////////////////////////////

        _onStyleChangeButtonClick: function (compLogic, onStyleChange) {
            var styleMap = this.resources.W.Data.getDataByQuery("#STYLES").get("styleItems");
            var styleList = styleMap[compLogic.getStyleNameSpace()];
            if (styleList && styleList.length > 1) {
                this.resources.W.EditorDialogs.openProxyStyleSelector(
                    compLogic,
                    {
                        left: 100,
                        top: 100,
                        onStyleChanged: onStyleChange
                    }
                );
            }
            else {
                this.resources.W.Commands.executeCommand("WEditorCommands.CustomizeComponentStyle", {
                    onChange: onStyleChange,
                    editedComponent: compLogic
                }, this);
            }
        },

        _addComponentStyleSelector: function (panel, fieldId) {
            var self = this;
            var fieldProxy = this._presenter.getAssociatedProxy();
            var innerProxy = fieldProxy.getInnerProxy();
            var compLogic = innerProxy.getCompLogic();
            if (compLogic) {

                var onStyleChange = function (styleName) {
                    var rule = self._buildCustomizationRule({fieldId: fieldId, key: "comp.style", value: styleName});
                    self._applyCustomizationRule(rule);
                };

                var changeStyle = panel.addButtonField(
                    self._loc("ChangeStyle_" + innerProxy.getViewDefinition().getChildValue("name") + "_Label"),
                    self._loc("ChangeStyle"));
                changeStyle.addEvent("click", function () {
                    self._onStyleChangeButtonClick(compLogic, onStyleChange);
                });
            }
        },

        _addSlider: function (panel, label, customizationInfo, minVal, maxVal, step, unit, updateOnEnd, defaultValue) {
            var slider = panel.addSliderField(label, this._parseNumParam(minVal), this._parseNumParam(maxVal), this._parseNumParam(step), undefined, updateOnEnd);
            this._bindToCustomization(
                slider,
                customizationInfo,
                defaultValue || 0,
                function (inputVal) {
                    return unit ? String(inputVal) + unit : inputVal;
                },
                function (customizationVal) {
                    return parseInt(customizationVal, 10);
                }
            );
            return slider;
        },

        _addVisibilityCondition: function (inputProxy, dependencies, predicate) {
            var testFunc = function () {
                if (predicate() === true) {
                    inputProxy.getHtmlElement().uncollapse();
                } else {
                    inputProxy.getHtmlElement().collapse();
                }
            };
            dependencies.forEach(function (dependency) {
                dependency.addEvent("inputChanged", testFunc);
            });
            testFunc();
        },

        _addTickerField: function (panel, label) {
            return panel._addField(
                "wysiwyg.editor.components.inputs.TickerInput",
                "wysiwyg.editor.skins.inputs.TickerInputSkin",
                {
                    labelText: label
                }
            );
        },

        _bindToCustomization: function (inputProxy, customizationInfo, defaultValue, inputToCustomization, customizationToInput) {
            var customization = this._buildCustomizationRule(customizationInfo);

            /** @type wixapps.integration.gui.CustomizationBinding */
            var binding = new this.imports.CustomizationBinding(this._presenter.getAppPart());
            binding.setupAutoPanelBinding(inputProxy, customization, this._getCurrentValue(customizationInfo, defaultValue), inputToCustomization, customizationToInput);
            binding.setListener(this._customizeHighlighting);
            this._bindings.push(binding);
        },

        _onCustomizationChanged: function (oldRule, rule) {
            this._customizeHighlighting(rule.key, oldRule.value, rule.value);
        },

        _buildCustomizationRule: function (customizationInfo) {
            return Object.merge({}, this._presenter.getCustomizationTemplate(), customizationInfo);
        },

        _getCurrentValue: function (customizationInfo, defaultValue) {
            var found;
            if (customizationInfo.key) {
                var viewDef = this._presenter.getItemView().getValue();
                found = this.imports.ViewsCustomizer.getCurrentValue(
                    viewDef, this._buildCustomizationRule(customizationInfo));
            }
            return found === undefined ? defaultValue : found;
        },

        _onEditorModeChanged: function (editorMode) {
            if (editorMode === "PREVIEW") {
                this._removeFieldHighlighting();
            }
        },

        _onDialogClosing: function (param) {
            this._removeFieldHighlighting();
        },

        _customizeHighlighting: function (key, oldValue, value) {
            if (this._presenter.getFieldType() === "TextField") {
                // TODO: we need to highlight the fields only after the field has rendered (some customizations change it from Label to ClippedParagraph),
                // for the love of god find a better way then this!
                window.setTimeout(function () {
                    this._removeFieldHighlighting();
                    this._setFieldHighlighting();
                }.bind(this), 50);
            }
        },

        _setFieldHighlighting: function () {
            var appPart = this._presenter.getAppPart();
            var fieldId = this._presenter.getFieldId();
            var containerId = this._presenter.getFieldContainerId();
            //this.resources.W.Commands.executeCommand("WAppsEditor2Commands.HighlightField", { appPart: appPart, fieldId: fieldId, containerId: containerId, isInEditPanel: true });
            this._fieldHighlighter.highlightField({ appPart: appPart, fieldId: fieldId, containerId: containerId, isInEditPanel: true });
        },
        _removeFieldHighlighting: function () {
            var appPart = this._presenter.getAppPart();
            //this.resources.W.Commands.executeCommand("WAppsEditor2Commands.RemoveHighlightField", { appPart: appPart, isInEditPanel: true });
            this._fieldHighlighter.removeHighlightField({ appPart: appPart, isInEditPanel: true });
        },

        dispose: function () {
            this.resources.W.Commands.unregisterListener(this);
            this._presenter.dispose();
            this._presenter = null;
            this._bindings.forEach(function (binding) {
                binding.dispose();
            });
            this.parent();
        }
    });
});
