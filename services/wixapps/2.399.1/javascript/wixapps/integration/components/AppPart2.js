/** @class wixapps.integration.components.AppPart2 */
define.component("wixapps.integration.components.AppPart2", function (componentDefinition) {
    /**@type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    def.inherits("mobile.core.components.base.BaseComponent");

    def.utilize([
        "wixapps.integration.managers.ViewHolder",
        "wixapps.integration.utils.GeometryUtils",
        "wixapps.core.utils.WixAppsLogger",
        "wixapps.integration.utils.FunctionCallThrottle",
        "wixapps.integration.utils.FlexShrinkBugDetector"
    ]);

    def.traits(["wixapps.integration.components.traits.SizeRefreshHandler"]);

    def.resources(["W.Utils", "W.Viewer", "W.Commands", "W.Config"]);

    def.binds(['_onError', '_onAppViewReady', '_initApp', '_retrieveData', '_onContentResize', '_onResizeEnd',
        '_onViewDefinitionsChanged', '_onAppDataChanged', 'checkSizeLimits','_updateHeightToMinPhysicalHeight','_updateHeight', '_setupViewHolder']);

    def.skinParts({
        inlineContent: { type: 'htmlElement'},
        //error: { type: 'htmlElement'},
        loading: { type: 'htmlElement'}
    });

    def.states({
        "phase":["loading", "error", "rendering", "content"],
        "flexFix": ["shrink1_legacy", "shrink0"]
    });

    def.dataTypes(["AppBuilderComponent"]);

//	def.propertiesSchemaType();

    def.fields({
        /**
         * @type {wixapps.integration.managers.ViewHolder}
         */
        _viewHolder: null,

        _allowHeightResize: false,

        /**
         * @type {wixapps.core.apprepo.AppPartDefinition}
         */
        _appPartDefinition: null,

        /**
         * @type {wixapps.core.apprepo.ApplicationInstance2}
         */
        _appInstance: null,

        /** @type DataItem */
        _appPartData: null,

        isWixApps2: true,

        /** @type wixapps.integration.utils.GeometryUtils */
        _geometryUtils: null,

        _needsDuplication: false,

        EDITOR_META_DATA:{
            mobile: {
                custom: [
                    {
                        label:'FPP_SETTINGS_LABEL',
                        command: 'EditorUI.OpenPropertyPanel'
                    }
                ],
                disablePropertySplit: true
            }
        }
    });

    /**
     * @lends wixapps.integration.components.AppPart2
     */
    def.methods({
        initialize: function (compId, viewNode, args, propertiesNode) {
            this.parent.apply(this, arguments);
            this._logger = new this.imports.WixAppsLogger();
            this._utils = this.resources.W.Utils.AppsUtils;
            this._geometryUtils = new this.imports.GeometryUtils();
            this.setState('loading');
            this.addEvent('resizeEnd', this._onResizeEnd);
            this.setMaxH(8000);
            this._formatName = "";

            this._checkSizeLimitsDebounce = this.imports.FunctionCallThrottle.debounceFunction(function () {
                if (this._viewHolder) {
                    this._viewHolder.performActionWhenReadyLate(this.checkSizeLimits);
                }
            }.bind(this),500);

            if(W.Config.env.$isEditorViewerFrame) {
                this.setState("shrink0");
            }

            this.resources.W.Commands.executeCommand('ApplicationPerformanceSpy.logPhase2', { step: 'initialized', appPart: this });
        },

        /**
         * Show erroneous AppPart2
         * @param [error]
         * @private
         */
        _itsDeadJim: function (error) {
            this.setState("error");
            this._logger.reportError(this._logger.Errors.APP_PART2_FAILED_TO_LOAD, this.$className, "_onAllSkinPartsReady", this._logger.SubCategory.APP_BUILDER);

            if(W.Config.env.$isPublicViewerFrame) {
                // TODO - maybe hide the part?
                // this._view.collapse();
                return;
            }

            // disable common editor functions
            this._resizableSides = [];
            //this.isDraggable = function () { return false; }; // Yuval wanted it to be draggable
            this.getShowOnAllPagesChangeability = function () { return false; };
            this.isDuplicatable = function () { return false; };
            //this.shouldBeFixedPosition = function () { return true; }; // doesn't work

            // get the empty app instance that will be used by all dead parts
            this._appInstance = W.Apps2.getErroneousAppInstance(this._data.get("appInnerID"), error);

            var appPartDefinitions = this._appInstance.getAppPartDefinitions();
            var dataSelectorRepo = this._appInstance.getDataSelectors();
            var viewDefRepo = this._appInstance.getViewDefinitions();
            var dataItemFactory = this._appInstance.getDataItemFactory();
            var typesManager = this._appInstance.getTypesManager();
            var dataProvider = this._appInstance.getDataProviders().getWixDbDataProvider();

            this._viewHolder = new this.imports.ViewHolder(dataItemFactory, typesManager, viewDefRepo, this._appInstance.resolveResourcePath, "", true, this);
            this._viewHolder.setContainer(this._skinParts.inlineContent);

            this._appPartDefinition = appPartDefinitions.getById("errAppPartDef");
            this._forType = "wix:Object";
            this._viewName = "SadPartErrorView";
            this._formatName = "";
            this._dataSelector = dataSelectorRepo.createInstance("IB.StaticItem", dataProvider, "wix:Object", { item: { errCode: error && error.code } });

            this._dataSelector.getItem(function (data) {
                this._setupViewHolder(data);
            }.bind(this));
        },

        _onAllSkinPartsReady: function (parts) {
            if (parts.error) {
                parts.error.exterminate();
            }
            W.Apps2.getApplicationInstance(this._data.get('appInnerID'), function (appInstance) {
                if (!appInstance) {
                    this._itsDeadJim();
                    return;
                }
                if (appInstance.getError()) {
                    this._itsDeadJim(appInstance.getError());
                    return;
                }

                var viewDefRepo = appInstance.getViewDefinitions();
                var dataItemFactory = appInstance.getDataItemFactory();
                var typesManager = appInstance.getTypesManager();

                this._appInstance = appInstance;

                viewDefRepo.addEvent(Constants.DataItemEvents.CHANGE, this._onViewDefinitionsChanged);

                this._viewHolder = new this.imports.ViewHolder(dataItemFactory, typesManager, viewDefRepo, appInstance.resolveResourcePath, "", true, this);
                this._viewHolder.setContainer(this._skinParts.inlineContent);
                this._viewHolder.getEventDispatcher().addEvent(Constants.WixAppEvents.APP_CONTENT_RESIZE, this._onContentResize);

                this._initApp();
            }.bind(this));
        },

        _initApp: function () {
            var appPartDefinitions = this._appInstance.getAppPartDefinitions();
            var dataSelectorRepo = this._appInstance.getDataSelectors();
            var viewDefRepo = this._appInstance.getViewDefinitions();

            var appPartName = this._data.get("appPartName");
            if (!appPartDefinitions.exists(appPartName)) {
                this._logger.reportEvent(this.imports.WixAppsLogger.Events.APP_PART2_FAILED_TO_LOAD_PART_DEFINITION, { c1: appPartName });
                this._itsDeadJim();
                return;
            }
            this._appPartDefinition = appPartDefinitions.getById(appPartName);

            var selectorId = this._appPartDefinition.getDataSelectorId();
            if (!dataSelectorRepo.exists(selectorId)) {
                this._logger.reportEvent(this.imports.WixAppsLogger.Events.APP_PART2_FAILED_TO_LOAD_DATA_SELECTOR, { c1: selectorId });
                this._itsDeadJim();
                return;
            }

            this._resizableSides = [Constants.BaseComponent.ResizeSides.LEFT, Constants.BaseComponent.ResizeSides.RIGHT];
            this._dataSelector = dataSelectorRepo.getById(selectorId);
            this._forType = this._appPartDefinition.getType();
            this._viewName = this._appPartDefinition.getViewName();
            this._formatName = this._isMobile() ? "Mobile" : "";

            this._verifyRequiredViewDefinitions(viewDefRepo, this._forType, this._viewName, this._formatName);

            this.resources.W.Commands.executeCommand('ApplicationPerformanceSpy.logPhase2', { step: 'requesting items from server', appPart: this });
            if (this._dataSelector.isListSelector()) {
                this._dataSelector.getItems(this._retrieveData, this._onError);
            } else {
                this._dataSelector.getItem(this._retrieveData, this._onError);
            }

            this._appPartDefinition.setUsed(true);
        },

        _verifyRequiredViewDefinitions: function (viewDefRepo, forType, viewName, formatName) {
            var viewBuilder = this._appInstance.getViewBuilder();
            if (!viewDefRepo.hasViewDefinition(forType, viewName, formatName)) {
                var itemViewDef = viewBuilder.getBlankListItemViewTemplateDefinition(forType, viewName);
                itemViewDef.format = formatName;
                this._appInstance.addViewDefinition(itemViewDef);
            }
            if (this._dataSelector.isListSelector() && !viewDefRepo.hasViewDefinition("Array", viewName, formatName)) {
                var listViewDef = viewBuilder.getListViewTemplateDefinition(viewName);
                listViewDef.format = formatName;
                this._appInstance.addViewDefinition(listViewDef);
            }
        },

        _retrieveData: function (data) {
            this.resources.W.Commands.executeCommand('ApplicationPerformanceSpy.logPhase2', { step: 'items loaded', appPart: this });

            if (this._isDisposed) { // if data is available after dispose, ignore
                return;
            }

            // Actually, it is not that simple, the data is Virtual data item...
            this._appPartData = data;
            this.setState('rendering');
            this._viewHolder.getEventDispatcher().addEvent(Constants.WixAppEvents.APP_VIEW_CREATED, this._onAppViewReady);
            this._setupViewHolder(data);
            data.addEvent(Constants.DataItemEvents.CHANGE, this._onAppDataChanged);
        },

        reportDeleteComponentToBI: function () {
            var l = this._appInstance.getLogger();
            if (this._appPartDefinition && this._appInstance.getInstanceId()) {
                var params = {
                    c1: this._appInstance.getInstanceId(), // APP INSTANCE
                    c2: this._appPartDefinition.getId() // PART ID
                };
                l.reportEvent(l.Events.APP_BUILDER_DELETED, params);
            }
        },

	    reRenderView: function() {
		    if (this._appPartData && this._viewName) {
			    this._setupViewHolder(this._appPartData);
		    }
	    },

        isDomDisplayReadyOnReady: function(){
            return false;
        },

        _onError: function (error) {
            this.setState('error');
            this._reportError(error);
        },

        getEventDispatcher: function () {
            if (this._viewHolder && this._viewHolder.getEventDispatcher) {
                return this._viewHolder.getEventDispatcher();
            }
            return null;
        },

        _onAppViewReady: function () {
            this.setState('content');
            if (this._allowHeightResize === true) {
                this._viewHolder.setContentHeight(this.getHeight());
            } else {
                this.fireEvent('autoSized');
            }
            this._view.fireEvent(Constants.WixAppEvents.APP_VIEW_READY);
            this.fireEvent(Constants.WixAppEvents.APP_VIEW_READY);
            this._reportLoaded();

            if(!this._flexShrinkBUgDetector) {
                this._flexShrinkBUgDetector = new this.imports.FlexShrinkBugDetector();
                this._flexShrinkBUgDetector.start(this);
            }

            this.resources.W.Commands.executeCommand('ApplicationPerformanceSpy.logPhase2', { step: 'displayed', appPart: this });
            if (this.resources.W.Config.isCapturing() || this.resources.W.Config.isLoadedFromStatic()){
                this._view.fireEvent(Constants.ComponentEvents.DOM_DISPLAY_READY);
            }
        },

        _onResize: function () {
            if (this._viewHolder) {
                if (this._allowHeightResize === false) {
                    this._viewHolder.performActionWhenReady(this._updateHeightToMinPhysicalHeight);
                } else if (this._viewHolder) {
                    this._viewHolder.setContentHeight(this.getHeight());
                }
                this.parent();
                this._viewHolder.getEventDispatcher().fireEvent(Constants.WixAppEvents.APP_PART_RESIZE);

                this._wCheckForSizeChangeAndFireAutoSized(3);
            }
        },

        _onContentResize: function () {
            this._viewHolder.performActionWhenReady(this._updateHeight);
        },

        _updateHeight: function () {
            if (!this._isDisposed) {
                if(this._allowHeightResize === false) {
                    this.setHeight(this._getMinPhysicalHeight(),false,false);
                    this.fireEvent('autoSizeChange');
                    this.fireEvent('autoSized');
                }
            }
        },

        _updateHeightToMinPhysicalHeight: function () {
            this.setHeight(this._getMinPhysicalHeight(), false, false);
        },

        _getMinPhysicalHeight: function () {
            if (this._viewHolder) {
                var rootProxy = this._viewHolder.getRootProxy();
                if (rootProxy && rootProxy.getElement()) {
                    return rootProxy.getElement().getSize().y;
                }
            }
            return parseInt(this._view.get("height") || 0, 10);
        },

        _isMobile: function() {
            return this.resources.W.Config.env.$viewingDevice === Constants.ViewerTypesParams.TYPES.MOBILE;
        },

        getFriendlyName: function() {
            var partDef = this.getAppPartDefinition();
            var displayName = (partDef && partDef.getDisplayName()) || "";
            return displayName;
        },

        _onResizeEnd: function () {
            this.checkSizeLimits();
        },

        _onViewDefinitionsChanged: function (event) {
            if (this._isDisposed) {
                return;
            }
            this._viewHolder.performActionWhenReady(this._checkSizeLimitsDebounce);
        },

        _onAppDataChanged: function (event) {
            if (this._isDisposed) {
                return;
            }
            this._viewHolder.performActionWhenReady(this._checkSizeLimitsDebounce);
        },

        /**
         * Searches for inner container "leaks" (containers whose content is in overflow) with the assumption that
         * these are caused by the appPart being to narrow.
         * It tries to incrementally increase the width of the appPart so that the "leaks" disappear.
         *
         * @param [lastOverflowCount]   Used internally to prevent infinite recursion in case the leaks are not resolved
         *                              by width increase.
         */
        checkSizeLimits: function (lastOverflowCount) {
            var self = this;
            var shouldSkipToNextIteration = false;
            if (this._isDisposed || this.resources.W.Config.env.$isPublicViewerFrame) {
                return;
            }
            lastOverflowCount = (lastOverflowCount === undefined ? 0 : lastOverflowCount);

            // Reset the size cache
            this._viewHolder.getGeometryMap().reset();

            // Retrieve the "leaking" regions within the apppart
            var overflowRegions = this._geometryUtils.getOverflowRegions(this._skinParts.inlineContent, this._viewHolder.getGeometryMap());

            // Only in case there are some "leaking" regions and we are not getting into infinite recursion:
            if (overflowRegions.length > 0 && overflowRegions.length !== lastOverflowCount) {

                // if element still in creation - has the preventReflow class, skip to the next iteration
                overflowRegions.forEach(function(region) {
                    if (region.container.className.contains("wixAppsInRenderPreventReflow")) {
                        shouldSkipToNextIteration = true;
                    }
                });

                if (shouldSkipToNextIteration) {
                    window.requestAnimFrame(function () {
                        self.checkSizeLimits(lastOverflowCount);
                    }.bind(this));
                    return;
                }

                // Find the biggest "leak" and increase the width accordingly
                var worstOverflow = overflowRegions.reduce(function (acc, overflowInfo) {
                    return Math.max(acc, overflowInfo.left + overflowInfo.right);
                }, -Infinity);
                this.setWidth(this.getWidth() + worstOverflow);

                // Next iteration
                if (overflowRegions.length > 1) {
                    window.requestAnimFrame(function () {
                        this.checkSizeLimits(overflowRegions.length);
                    }.bind(this));
                    return;
                }
            }
            this._viewHolder.invalidateSize();
        },

        /**
         * @return {ApplicationInstance2}
         */
        getAppInstance: function () {
            return this._appInstance;
        },

        /**
         * @return {DataItem}
         */
        getAppPartData: function () {
            return this._appPartData;
        },

        /**
         * @return {AppPartDefinition}
         */
        getAppPartDefinition: function () {
            return this._appPartDefinition;
        },

        /**
         * @param appPartDefinition
         */
        setAppPartDefinition: function (appPartDefinition) {
            this._appPartDefinition = appPartDefinition;
        },

        getViewDefinition: function () {
            return this._appInstance.getViewDefinitions().getViewDefinition(this._forType, this._viewName, this._formatName);
        },

	    getFormatName: function() {
			return this._formatName;
	    },

	    setFormatName: function(formatName) {
		    this._formatName = formatName;
		    this.reRenderView();
	    },

        getViewHolder: function () {
            return this._viewHolder;
        },

        _setupViewHolder: function (data){
            this._viewHolder.setupViewHolder(data, this._viewName, this._formatName);
        },

        /**
         * @param {String} fieldName
         * @param {String} displayName
         * @return {String}
         */
        getUniqueFieldName: function (fieldName, displayName) {
            return this.getAppInstance().getTypesManager().getUniqueFieldName(this._forType, fieldName, displayName);
        },

        /**
         *
         * @type {BaseDataSelector}
         */
        getDataSelector: function () {
            return this._dataSelector;
        },

        getEnvironment: function () {
            var that = this;
            return {
                getAppInstance: function () {
                    return that._appInstance;
                },
                getForType: function () {
                    return that._forType;
                }
            };
        },

        isDuplicatable: function () {
            return this.getDataSelector() && !this.getDataSelector().isPageBased();
        },

        isDeleteable: function () {
            return !this.getDataSelector() || !this.getDataSelector().isPageBased();
        },

        getShowOnAllPagesChangeability: function () {
            return this.getDataSelector() && !this.getDataSelector().isPageBased();
        },

        markNeedsDuplication: function () {
            this._needsDuplication = true;
        },

        /**
         * REPORTED PARAMS:
         * - app instance id
         * - site owner id
         * - part id
         *
         * NOTE: Reporting only in published mode
         * @private
         */
        _reportLoaded: function () {
            if (this.resources.W.Config.env.$isPublicViewerFrame) {
                var l = this._appInstance.getLogger();
                var params = {
                    c1: this._appInstance.getInstanceId(), // APP INSTANCE
                    c2: this._appPartDefinition.getId(), // PART ID
                    g2: rendererModel && rendererModel.userId // USER UNIQUE ID
                };

                l.reportEvent(l.Events.APP_BUILDER_PART_LOADED, params);
            }
        },

        /**
         * REPORTED PARAMS:
         * - app instance id
         * - part id
         * - site owner id
         * - error
         *
         * NOTE: Reporting only in published mode
         * @private
         */
        _reportError: function (error) {
            if (this.resources.W.Config.env.$isPublicViewerFrame) {
                var l = this._appInstance.getLogger();
                var params = {
                    c1: this._appInstance.getInstanceId(), // APP INSTANCE
                    c2: this._appPartDefinition.getId(), // PART ID
                    g2: rendererModel && rendererModel.userId, // USER UNIQUE ID
                    i1: JSON.stringify(error) // ERROR
                };

                l.reportEvent(l.Events.APP_BUILDER_PART_ERROR, params);
            }
        },

        dispose: function () {
            if (this._appInstance) {
                if (this._appInstance.getViewDefinitions()) {
                    this._appInstance.getViewDefinitions().removeEvent(Constants.DataItemEvents.CHANGE, this._onViewDefinitionsChanged);
                }
                if (this._appPartData) {
                    this._appPartData.removeEvent(Constants.DataItemEvents.CHANGE, this._onAppDataChanged);
                }
                if (this._viewHolder) {
                    if (this._viewHolder.getEventDispatcher()) {
                        this._viewHolder.getEventDispatcher().removeEvent(Constants.WixAppEvents.APP_VIEW_READY, this._onAppViewReady);
                        this._viewHolder.getEventDispatcher().removeEvent(Constants.WixAppEvents.APP_CONTENT_RESIZE, this._onContentResize);
                    }
                    this._viewHolder.dispose();
                }
            }
            if (this._appPartDefinition) {
                this._appPartDefinition.setUsed(false);
            }
            this._viewHolder = null;
            this._dataSelector = null;
            this.parent();
        }
    });
});