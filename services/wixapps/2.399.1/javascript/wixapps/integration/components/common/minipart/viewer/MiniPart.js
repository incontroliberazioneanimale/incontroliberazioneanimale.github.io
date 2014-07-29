/** @class wixapps.integration.components.common.minipart.viewer.MiniPart */
define.component("wixapps.integration.components.common.minipart.viewer.MiniPart", function (componentDefinition) {
    /**@type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    def.inherits("core.components.base.BaseComp");

    def.resources(['W.Apps2']);

    def.binds([
        '_retrieveData',
        '_reportError'
    ]);

    def.utilize([
        "wixapps.integration.managers.ViewHolder"
    ]);

    def.states({
        "phase": ["loading", "error", "content"]
    });

    def.dataTypes(["MiniPart"]);

    def.fields({
        /** @type CompositeDataItem */
        _formData: null,

        /** @type wixapps.core.apprepo.MiniPartDefinition */
        _partDefinition: null,

        /** @type wixapps.core.data.selectors.base.BaseDataSelector */
        _dataSelector: null,

        /** @type String */
        _forType: null,

        /** @type wixapps.core.utils.WixAppsLogger */
        _logger: null,

        /** @type {wixapps.integration.managers.ViewHolder} */
        _viewHolder: null
    });

    /**
     * @lends wixapps.integration.components.common.minipart.viewer.MiniPart
     */
    def.methods({
        initialize: function (compId, viewNode, args) {
            this.parent.apply(this, arguments);
            this.on(this.INVALIDATIONS.DATA_CHANGE, this, this._onDataChanged);
        },

        /**
         * @return {ApplicationInstance2}
         */
        getAppInstance: function () {
            return this._appInstance;
        },

        getShowOnAllPagesChangeability: function() {
            return false;
        },

        /**
         * @return {CompositeDataItem}
         */
        getFormData: function () {
            return this._formData;
        },

        /**
         * @return {wixapps.core.apprepo.MiniPartDefinition}
         */
        getMiniPartDefinition: function () {
            return this._partDefinition;
        },

        /**
         * @param {wixapps.core.apprepo.MiniPartDefinition} partDefinition The definition of the mini part.
         */
        setMiniPartDefinition: function (partDefinition) {
            this._partDefinition = partDefinition;
        },

        /**
         * Gets the used data selector.
         * @returns {wixapps.core.data.selectors.base.BaseDataSelector}
         */
        getDataSelector: function () {
            return this._dataSelector;
        },

        /**
         * Gets the type name of this MiniPart
         * @returns {String} The name of the selector type.
         */
        getType: function() {
            return this._forType;
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

        _onDataChanged: function () {
            this.resources.W.Apps2.getApplicationInstance(this._data.get('appInnerID'), function (appInstance) {
                //TODO: Handle errors in AppInstance.

                var viewDefRepo = appInstance.getViewDefinitions();
                var dataItemFactory = appInstance.getDataItemFactory();
                var typesManager = appInstance.getTypesManager();
                this._viewHolder = new this.imports.ViewHolder(dataItemFactory, typesManager, viewDefRepo, appInstance.resolveResourcePath, "", true, this);
                this._viewHolder.getEventDispatcher().addEvent(Constants.WixAppEvents.APP_VIEW_CREATED, function () {
                    this.setState('content');
                    this.setHeight(this._getMinPhysicalHeight(), false, false);
                }.bind(this));

                this._initPart(appInstance);
            }.bind(this));
        },

        _onRender: function (renderEvent) {
            var invalidations = renderEvent.data.invalidations;

            if (invalidations.isInvalidated([this.INVALIDATIONS.FIRST_RENDER])) {
                this._viewHolder.setContainer(this._skinParts.inlineContent);
                if (this._formData) {
                    this._viewHolder.setupViewHolder(this._formData, this._viewName, this._formatName);
                }
            }
        },

        _initPart: function (appInstance) {
            this._appInstance = appInstance;
            this._logger = appInstance.getLogger();

            var miniPartDefinitions = appInstance.getMiniPartDefinitions();
            var formDefinitions = appInstance.getFormDefinitions();
            var dataSelectorRepo = appInstance.getDataSelectors();

            var miniPartId = this._data.get("partId");
            if (!miniPartDefinitions.exists(miniPartId)) {
                // TODO: Add error BI
                return;
            }

            this._miniPartDefinition = miniPartDefinitions.getById(miniPartId);

            var formId = this._miniPartDefinition.getFormId();
            if (!formDefinitions.exists(formId)) {
                // TODO: Add error BI
                return;
            }

            this._formDefinition = formDefinitions.getById(formId);
            this._dataSelector = dataSelectorRepo.getById(this._formDefinition.getDataSelectorId());
            if (this._dataSelector.isListSelector()) {
                // TODO: Add error BI
                return;
            }

            this._forType = this._formDefinition.getType();
            this._viewName = this._miniPartDefinition.getViewName();
            this._formatName = this._isDeviceMobile ? "Mobile" : "";
            this._dataSelector.getData(this._retrieveData, this._reportError);
        },

        _retrieveData: function (data) {
            if (this._isExterminated) { // if data is available after dispose, ignore
                return;
            }

//            this._reportLoaded();
            this._formData = data;
            if (!this._viewHolder.getRootProxy()) {
                this._viewHolder.setupViewHolder(this._formData, this._viewName, this._formatName, null);
            }
        },

        /**
         * Updates the vars on the root proxy or set new one if the var doesn't exists on the view.
         * @param {Object} vars The vars to update.
         */
        updateVars: function (vars) {
            var rootProxy = this._viewHolder.getRootProxy();
            if (rootProxy) {
                var environment = rootProxy.getViewContext().getEnvironment();
                _.each(vars, function (value, key) {
                    environment.setVar(key, value);
                });
            }
        },

        /**
         * Get all the vars that the root proxy holds.
         * @returns {Object} The vars.
         */
        getVars: function () {
            var rootProxy = this._viewHolder.getRootProxy();
            if (rootProxy) {
                var environment = rootProxy.getViewContext().getEnvironment();
                return environment.getVars();
            }

            return {};
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
                var params = {
                    c1: this._appInstance.getInstanceId(), // APP INSTANCE
                    c2: this._formDefinition.getId(), // PART ID
                    g2: rendererModel && rendererModel.userId, // USER UNIQUE ID
                    i1: JSON.stringify(error) // ERROR
                };

                this._logger.reportEvent(this._logger.Events.FORM_ERROR, params);
            }
        },

        exterminate: function () {
            if (!this._isExterminated) {
                this._appInstance = null;
                this._formDefinition.setUsed(false);
                this._formDefinition = null;
                this._dataSelector = null;
                this._formData = null;
            }
            this.parent();
        }
    });
});
