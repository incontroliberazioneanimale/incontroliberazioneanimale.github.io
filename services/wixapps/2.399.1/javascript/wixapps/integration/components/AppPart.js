/** @class wixapps.integration.components.AppPart */
define.component("wixapps.integration.components.AppPart", function (componentDefinition) {
	/**@type core.managers.component.ComponentDefinition */
	var def = componentDefinition;

	def.inherits("mobile.core.components.base.BaseComponent");

	def.utilize([
		'wixapps.core.utils.WixAppsLogger',
		'wixapps.core.views.ViewsCustomizer',
		'wixapps.core.views.ViewDefinitionsOverrideRepository',
		'wixapps.core.dataservice.ItemCache',
		'wixapps.core.dataservice.DataService',
		'wixapps.core.events.ProxyEventBus',
		'wixapps.core.views.ProxyFactory',
		'wixapps.integration.proxies.ProxyMap',
		'wixapps.integration.managers.AppResizeHandler',
		'wixapps.integration.managers.LifecycleManager',
        'wixapps.integration.managers.StylesheetManager'
	]);

	def.traits(["wixapps.integration.components.traits.SizeRefreshHandler"]);

	def.resources(["W.Viewer", "W.Config", "W.Commands"]);

	def.binds(['_onLogicLoaded', '_onContentResize', '_onAppPartRenderComplete', 'showView']);

	def.skinParts({
		inlineContent: { type: 'htmlElement'}
	});

	def.states(["loading", "error", "rendering", "content"]);

	def.dataTypes(["AppPart"]);
    def.propertiesSchemaType("AppPartProperties");

	def.fields({
		_eventDispatcher : null,
		_resizeHandler : null,

		EDITOR_META_DATA:{
			general:{
				help        : false,
				settings    : true,
				design      : false
			},

			custom:[
				{
					label   : 'EDIT_DATA_BUTTON',
					command : 'WAppsEditorCommands.OpenEditDataDialog',
					commandParameter : {}
				}
			],

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
	 * @lends wixapps.integration.components.AppPart
	 */
	def.methods({
		initialize: function(compId, viewNode, args, propertiesNode) {
			this.parent(compId, viewNode, args);
			this._logger = new this.imports.WixAppsLogger();
			this._appInstance = null;
			this._eventDispatcher = new this.imports.ProxyEventBus();
			this.setState('loading');
			this._resizeHandler = new this.imports.AppResizeHandler();
			this._lifecycleManager = new this.imports.LifecycleManager(this._eventDispatcher, true);
			this._formatName = "";

			this._eventDispatcher.addEvent(Constants.WixAppEvents.APP_CONTENT_RESIZE, this._onContentResize);
			this.injects().Commands.registerCommand('WViewerCommands.AppDataChange', true);
			this.setMaxH(8000);
		},

		render: function() {
			try {
				this.getAppInstance(); // ensuring that the instance is loaded
			}
			catch (e) {
				this.setState('error');
				var l = this._logger;
				l.reportError(l.Errors.APP_INSTANCE_NOT_LOADED,
					this.$className, 'render', l.SubCategory.CORE_WIRING);
			}
		},

		initApp: function() {
			if (this._isDisposed) {
                return;
            }
            this._appInstance.addEvent(Constants.WixAppEvents.INVALIDATE_PART_DATA, this._onContentResize);
			this._customizations = new this.imports.ViewsCustomizer(this._appInstance.getDataItemFactory());
			this._viewDefinitions = new this.imports.ViewDefinitionsOverrideRepository(
				this._appInstance.getViewDefRepo(), this._customizations, this._appInstance.getDataItemFactory());

			// set correct format
			if (this._isMobile()) {
				this._formatName = "Mobile";
			}

			// load and apply customizations
			this._applyCustomizationRulesToDefinitions();
			this._initializeProxyFactory();
			this._partDef = this._appInstance.getPartDefinition(this._data.get('appPartName'));
			if (!this._partDef) {
				throw new Error("AppPart.initApp partName [" + this._data.get('appPartName') + "] not found in app descriptor");
			}
			//this._allowHeightResize = this._partDef.allowHeightResize || false;
            this._allowHeightResize = this._configByFormat('allowHeightResize', false);

			if(!this._allowHeightResize) {
				this._resizableSides = [Constants.BaseComponent.ResizeSides.LEFT, Constants.BaseComponent.ResizeSides.RIGHT];
			}

            var minWidth = this._configByFormat('minWidth', 0);

			if(0 < minWidth){
				this.setMinW(minWidth);
			}
			this._loadPartLogic();

			// set part id for testing purposes
			this._view.set('partid', this._appInstance.getPackageName() + '_' + this._partDef.id);
		},

        _configByFormat: function(paramName, defaultValue) {

            var resultValue = defaultValue;

            if(this._partDef.configByFormat &&
               this._formatName in this._partDef.configByFormat &&
               paramName in this._partDef.configByFormat[this._formatName]) {

                resultValue = this._partDef.configByFormat[this._formatName][paramName];

            } else if(paramName in this._partDef) {

                resultValue = this._partDef[paramName];

            }

            return resultValue;

        },

        _initializeProxyFactory: function(){
            this._stylesheetManager = new this.imports.StylesheetManager("#" + this.getViewNode().get('id'));
            this._proxyFactory = new this.imports.ProxyFactory(
                this._appInstance.getDataItemFactory(), this._appInstance.getTypesManager(), this._viewDefinitions,
                this._eventDispatcher, this._appInstance.resolveResourcePath, this._appInstance.getPackageName(), this._lifecycleManager, this, this._stylesheetManager, this._appInstance.getAppVars());
            (new this.imports.ProxyMap()).registerComponentProxies(this._proxyFactory);
        },

		/**
		 * This method brings the default value of a customization before any app part customization was set. If the
		 * value is not set, returns undefined
		 */
		getCustomizationDefaultValue: function(typeName, viewName, formatName, fieldId, key) {
			var rule = {
				forType: typeName,
				viewName: viewName,
				format: formatName,
				fieldId: fieldId,
				key: key
			};
			var appViewRepo = this._appInstance.getViewDefRepo();
			var viewDef = appViewRepo.getViewDefinition(typeName, viewName, formatName);
			if (!viewDef) { throw "View " + typeName + "|" + viewName + "|" + formatName + " not found in repository"; }
			viewDef = viewDef.getValue(0); // get raw value
			return this._customizations.getCurrentValue(viewDef, rule);
		},

        isDeleteable: function () {
            if (this._partDef && this._partDef.hasOwnProperty("allowPartDelete")) {
                return this._partDef.allowPartDelete;
            }
            return this.parent();
        },

        isDuplicatable: function () {
            if (this._partDef && this._partDef.hasOwnProperty("allowPartDuplicate")) {
                return this._partDef.allowPartDuplicate;
            }
            return this.parent();
        },

        getShowOnAllPagesChangeability: function() {
            if (this._partDef && this._partDef.hasOwnProperty("allowShowOnAllPages")) {
                return this._partDef.allowShowOnAllPages;
            }
            return this.parent();
        },

		getFormatName: function() {
			return this._formatName;
		},

		setFormatName: function(formatName) {
			if (formatName == this._formatName) {
				return;
			}

			this._formatName = formatName;
			this.reRenderView();
		},

		_applyCustomizationRulesToDefinitions : function () {
			this._customizations.clearRules();
            var rules = this._data.get('appLogicCustomizations');
            rules.forEach(function(rule) {
                if (rule.key == "value" && !rule.format) {
                    rule.format = "*";
                }
            });
			this._customizations.addRules(rules);
			var appViewRepo = this._appInstance.getViewDefRepo();
			this._viewDefinitions.getAllViewDefinitions().forEach(function(viewDef) { // apply app-part customizations
				var view = appViewRepo.getViewDefinition(
					viewDef.getChildValue('forType'),
					viewDef.getChildValue('name'),
					viewDef.getChildValue('format') || ""
				).getValue(0);
				this._customizations.applyAll(view);
				viewDef.setValue(view);
			}.bind(this));
			this.fireEvent('customizationApplied');
		},

		getPartDef: function(){
			return this._partDef;
		},
		getHelpId: function(){
            var helpId = this._configByFormat('helpId', '');
			if(!!helpId) {
				return helpId;
			}
			return this._appInstance.getAppDescriptor().helpId;
		},
		getAppPartViewDefRepo:function(){
			return this._viewDefinitions;
		},
		getViewDef: function(){
			if(!this._mainProxy) {
				return;
			}
			return this._mainProxy.getViewDefinition();
		},
		getViewsCustomizer: function() {
			return this._customizations;
		},
		getMainProxy:function(){
			return this._mainProxy;
		},

		getAppInstance: function(){
			if (!this._appInstance) {
				this._appInstance = W.Apps.getApp(this._data.get('appInnerID'));
				this._appInstance.registerAppPart(this);
			}
			return this._appInstance;
		},
		getLogger: function() {
			return this._logger;
		},
		getLogicParams: function() {
			// create the logic params
			var ret = {};

			// get the default options
			if (this._partDef.logic.display.options) {
				Object.each(this._partDef.logic.display.options, function(value, key) {
					ret[key] = value;
				});
			}

			// check if this is the first loading of the app part (to aid recovery of wrong params)
			var isFirstLoad = false;

			// get the saved options
			var savedParams = this._data.get('appLogicParams');
			Object.each(savedParams, function(value, key) { // the value is of type { type: 'AppPartParam', value: 'Real Value' }
				if (key === "wixapps:first-load-after-add-to-stage") {
					isFirstLoad = true;
					ret["wixapps:first-load-after-add-to-stage"] = true;
				}
				else {
					ret[key] = value.value;
				}
			});

			if  (isFirstLoad) {
				delete savedParams["wixapps:first-load-after-add-to-stage"];
			}

			return ret;
		},
		getEnvironment: function() {
			if (!this._environment) {
				var that = this;
				this._environment = {
					_context: [{
						dataService: null,
						itemCache: that._appInstance.getItemCache(),
						dataItemFactory: that._appInstance.getDataItemFactory()
					}],
					getProxyFactory: function() { return that._proxyFactory; },
					getDataItemFactory: function() { return this._getContext().dataItemFactory; },
					getTypesManager: function() { return that._appInstance.getTypesManager(); },
					getDataService: function() { return this._getContext().dataService || that._appInstance.getDataService(); },
					getItemCache: function() { return this._getContext().itemCache; },
					getAppPart: function(){ return that; },
					getAppInstance: function(){ return that._appInstance; },
					getViewDefRepo: function() { return that._appInstance.getViewDefRepo(); },
					getLogger: function() { return that.getLogger(); },
                    isMobile: function() { return that._isMobile(); },
					_getContext: function() { return this._context[this._context.length - 1]; },

					/**
					 * Creates a new data service context to work with
					 */
					newDataServiceContext: function() {
						var oldDs = this.getDataService();
						var dif = oldDs.getDataItemFactory().clone();
						var ic = new that.imports.ItemCache(dif);
						var newDs = new that.imports.DataService( that._appInstance.getDataServiceTransport(), dif, ic);
						this._context.push({ dataService: newDs, itemCache: ic, dataItemFactory: dif });
					},

					/**
					 * Removes the last data service context and returns it
					 * @return {DataService} the removed data service
					 */
					popDataServiceContext: function() {
						if (this._context.length < 2) { throw 'no data service context to pop'; }
						return this._context.pop().dataService;
					}
				};
			}
			return this._environment;
		},

		_loadPartLogic: function() {
            this.resources.W.Commands.executeCommand('ApplicationPerformanceSpy.logPhase', { step: 'loadLogic', appPart: this });

            W.Classes.get(this._partDef.logic.display.type, this._onLogicLoaded);
		},
		_onLogicLoaded: function(LogicCls) {
            this.resources.W.Commands.executeCommand('ApplicationPerformanceSpy.logPhase', { step: 'logicLoaded', appPart: this });

			var environment = this.getEnvironment();

			// dispose old logic, if exists
			this._disposeLogic();

			// call the logic
			this._logic = new LogicCls(environment);
			this.fireEvent('logicLoaded');
			this.getViewNode().fireEvent('logicLoaded');

			this._runLogic();
            this.fireEvent('logicReady');
		},

        _isMobile: function() {
            return this.resources.W.Config.env.$viewingDevice === Constants.ViewerTypesParams.TYPES.MOBILE;
        },

        getFriendlyName: function() {
            var appLogic = this.getAppPartLogic();
            var dataEditMetaData = (appLogic && appLogic.getDataEditingMetaInfo ? appLogic.getDataEditingMetaInfo() : {});
            var partDef = this.getPartDef() || {};
            return dataEditMetaData.title || partDef.name || "";
        },

        isDomDisplayReadyOnReady: function(){
            return false;
        },

		/**
		 * Asks the part to show a certain view.
		 * @param dataItem The data item to show
		 * @param viewName The view name with which to present the item
		 * @param [eventHandlers={}] A map of event names and the corresponding handler to register to the view
		 * @param [vars={}] A map of variables to set to the view
		 */
		showView: function(dataItem, viewName, eventHandlers, vars) {
			if (this._isDisposed) {
				return;
			}
            var self = this;
			
			// save current argument for other re-rendering
			this._currenetViewArguments = arguments;

            // cleanup old app event handlers
            if (this._appEventHandlers) {
                _.forEach(this._appEventHandlers, function(fn, type) {
                    this._eventDispatcher.removeEvent(type, fn);
                }, this);
            }
            this._appEventHandlers = null;

			this.setState('rendering');
			if (this._mainProxy) {
				this._mainProxy.dispose();
				if(this._stylesheetManager) {
					this._stylesheetManager.reset();
				}
			}

            // adding the "direction" var for inner components to use as they wish.
            vars = vars || {};
            vars["partDirection"] = this.getComponentProperty("direction");

            if(this._partDef.forceFlexCompute){
                //force certain slow views NOT to use firefox flex and use jiri's computed flex algorithm
                vars["forceFlexCompute"] = this._partDef.forceFlexCompute;
            }

            this._appEventHandlers = eventHandlers;
			this._mainProxy = this._proxyFactory.createView(dataItem, viewName, this._formatName, vars);
			_.forEach(eventHandlers, function(fn, type) {
				this._mainProxy.addEvent(type, fn);
			}, this);

			this._lifecycleManager.reset();
			this._mainComponent = this._mainProxy.createComponent();
			this._skinParts.inlineContent.set('html', '');
			this._skinParts.inlineContent.adopt(this._mainComponent);
			if(this._allowHeightResize) {
				this._mainProxy.getElement().setStyle('height',this.getHeight());
			}

			this._mainProxy.setupProxy();
			window.requestAnimFrame(function () {
				self._lifecycleManager.performAction(self._onAppPartRenderComplete);
			});

			this._setupMainProxyListeners.call(this, this._mainProxy);
		},

		reRenderView: function() {
			if (this._mainProxy && this._currenetViewArguments) {
				this.showView.apply(this, this._currenetViewArguments);
			}
		},

		_runLogic: function() {
			var params = this.getLogicParams();
			var that = this;
			var callbacks = {
				/**
				 * Asks the part to show a certain view.
				 * @param dataItem The data item to show
				 * @param viewName The view name with which to present the item
				 * @param [eventHandlers={}] A map of event names and the corresponding handler to register to the view
				 * @param [vars={}] A map of variables to set to the view
				 */
				showView: that.showView,
				showLoadingIndicator: function() {
					that.setState('loading');
				},
				hideLoadingIndicator: function () {
					that.setState('content');
				},
				showErrorIndicator: function(errorCode, errorDescription) {
					errorCode = errorCode || -1;
					errorDescription = errorDescription || 'Unspecified error';
					that.setState('error');
					var l = that._logger;
					l.reportError({code:errorCode,description:errorDescription},
						this.$className, 'showErrorIndicator', l.SubCategory.APP_LOGIC);
				}
			};
			var viewName = this._data.get('viewName');
			if (!viewName) {
				viewName = this._partDef.views[0];
				this._data.set('viewName', viewName, true);
			}
			this._logic.run(viewName, params, callbacks, this._extraLogicParams);
		},

        _onAppPartRenderComplete: function () {
            this.resources.W.Commands.executeCommand('ApplicationPerformanceSpy.logPhase', { step: 'displayed', appPart: this });

            this._stylesheetManager.updateDocumentStylesheet();
            this.fireEvent('proxyDisplayed', this._mainProxy);
            this._eventDispatcher.fireEvent(Constants.WixAppEvents.APP_VIEW_READY);
            this.fireEvent('autoSized');
            this.setState('content');
            window.requestAnimFrame(function () {
                if (this._isDisposed) {
                    return;
                }
                this._updateHeight();
            }.bind(this));

            if ((this.resources.W.Config.isCapturing() || this.resources.W.Config.isLoadedFromStatic()) && !this._isDisposed){
                this._view.fireEvent(Constants.ComponentEvents.DOM_DISPLAY_READY);
            }
        },

        _setupMainProxyListeners: function (mainProxy) {
            var that = this;

            mainProxy.removeEvent('wix:zoom-link:open-zoom');
            mainProxy.removeEvent('wix:edit-link:open-editor');
            mainProxy.removeEvent('wix:app-link:navigate');

            mainProxy.addEvent('wix:zoom-link:open-zoom', function(event){
                var zoomParams = event.zoomParams;
                var zoomPartName = that.getPartDef().zoomPartName;
                //zoom extra params come from part definition
                var zoomPartDef = that._appInstance.getPartDefinition(zoomPartName);
                var zoomExtraParams = that._isMobile() ? zoomPartDef.mobileZoomExtraParams: zoomPartDef.zoomExtraParams;
                var extraParams = Object.merge(zoomParams.extraParams, zoomExtraParams);
                that.getAppInstance().getZoomHandler().openZoomForItemsList(zoomParams.list, zoomParams.selectedIndex, zoomPartName, extraParams);
            });
            mainProxy.addEvent('wix:edit-link:open-editor', function(event){
                var zoomParams = event.zoomParams;
                var zoomPartName = that.getPartDef().zoomPartName;
                that.getAppInstance().getZoomHandler().openZoomForItemsList(zoomParams.list, zoomParams.selectedIndex, zoomPartName);
            });

            mainProxy.addEvent('wix:app-link:navigate', function(event){
                // is you want to do something here - write it again...
                throw "Is there anybody out there..?";
            });
        },

        hideContent: function(){
            this.setState('loading');
            this._skinParts.inlineContent.collapse();
        },

        showContent: function() {
            this.setState('content');
            this._skinParts.inlineContent.uncollapse();
        },

		_getMinPhysicalHeight: function(){
			var ret = 0;
			if(this._mainProxy && this._mainProxy.getElement()) {
				ret = this._mainProxy.getElement().getSize().y;
			} else {
                ret = parseInt(this._view.get("height") || 0, 10);
            }
			return ret;
		},

		_onAllSkinPartsReady : function() {
            this._activateHandlers();
			this._skinParts.inlineContent.setStyles({
				"position" : "relative",
                "direction": this.getComponentProperty("direction")
            });
            if(Browser.firefox) {
                // This little heap of sadness fixes a weird bug in firefox -moz-box (legacy)
                this._skinParts.inlineContent.setStyles({
                    "white-space": "pre-wrap"
                });
            }
		},

        _activateHandlers : function () {
            this._resizeHandler.activateResizeHandler(this._eventDispatcher, this._skinParts.inlineContent);
        },

		hasChildren: function()
		{
			return false;
		},
		isContainer: function(){
			return false;
		},
		/** @override */
        _onDataChange: function(dataObj, propertyName, val) {
            if(this._ignoreUpdate) {
                return;
            }
            if(propertyName === 'appLogicCustomizations') {
                return;
            }
            if (dataObj.getType() === "AppPartProperties") {
                this._skinParts.inlineContent.setStyle("direction", dataObj.get("direction"));
                if (this._mainProxy) {
                    this._mainProxy.getViewContext().getEnvironment().setVar("partDirection", dataObj.get("direction"));
                }
                return;
            }
            if (this._appInstance) { this._runLogic(); }
        },
		getAppPartLogic:function(){
			return this._logic;
		},
		_ruleFits:function(rule, exampleRule){
			var fits = true;
			for(var each in exampleRule)
			{
				if(exampleRule[each]!=rule[each])
				{
					fits = false;
				}
			}
			return fits;
		},
		getCustomization: function(exampleRule){
			var retArr = [];
			if(!exampleRule){
				return this._data.get('appLogicCustomizations');
			}else
			{
				var currentRules = this._data.get('appLogicCustomizations');
				for(var i=currentRules.length-1;i>-1;i--)
				{
					if(this._ruleFits(currentRules[i], exampleRule))
					{
						retArr.push(currentRules[i]);
					}
				}
			}
			return retArr;
		},
		clearCustomizations: function(exampleRule, requiresRerender){
			if(!exampleRule){
				this._data.set('appLogicCustomizations',[]);
			}
			else{
				var currentRules = this._data.get('appLogicCustomizations');
				for(var i=currentRules.length-1;i>-1;i--)
				{
					if(this._ruleFits(currentRules[i], exampleRule))
					{
						currentRules.splice(i,1);
					}
				}
			}
			this._ignoreUpdate = !requiresRerender;
			this._data.fireDataChangeEvent();
			this._ignoreUpdate = false;
			this._applyCustomizationRulesToDefinitions();
			this._eventDispatcher.fireEvent(Constants.WixAppEvents.APP_PART_RESIZE);
			window.requestAnimFrame(function () { this.fireEvent('autoSized');}.bind(this));
		},

        setCustomizationRule: function (rule, overrideIfExists) {
            if (rule.fieldId == "appVars") {
                this._appInstance.setAppVar(rule.key, rule.value);
                return false;
            }
            var ruleList = this._data.get('appLogicCustomizations');
            var item;
            var oldRuleArray = [];

            rule.type = "AppPartCustomization";

            var i = 0;
            while (i < ruleList.length) {
                item = ruleList[i];
                // If we find a rule that fits
                if (item.forType === rule.forType && item.view === rule.view &&
                    item.fieldId === rule.fieldId && item.key === rule.key &&
                    ((item.format || "") === (rule.format || "") ||
                        ((!item.format || item.format === "") && rule.format === "*"))) {
                        oldRuleArray.push(ruleList.splice(i,1)[0]);
                }
                else {
                    i++;
                }
            }

            if (rule.format === "*") {
                ruleList.unshift(rule);
            }
            else {
                ruleList.push(rule);
            }
            return oldRuleArray;
        },

		applyCustomizationRule : function(rule, requiresRerender) {
            var oldRuleArray = this.setCustomizationRule(rule, true);
            if (oldRuleArray === false) {
                return;
            }

            this._ignoreUpdate = !requiresRerender;

            var oldRule = (oldRuleArray && oldRuleArray.length>0) ? oldRuleArray[0] : undefined;

            var customizationDefaultValue = this.getCustomizationDefaultValue(rule.forType, rule.view, rule.format || "", rule.fieldId, rule.key);
            var shouldNotifyAppDataChanged = !oldRule ? (customizationDefaultValue != rule.value) : !this.injects().Utils.areObjectsEqual(rule, oldRule);
            if (shouldNotifyAppDataChanged) {
                this.injects().Commands.executeCommand('WViewerCommands.AppDataChange', [rule, oldRule, this]);
            }
            this._data.fireDataChangeEvent('appLogicCustomizations', rule, oldRule, this, true);

            this._ignoreUpdate = false;

            this._applyCustomizationRulesToDefinitions();
            this._eventDispatcher.fireEvent(Constants.WixAppEvents.APP_CONTENT_RESIZE);
            this._eventDispatcher.fireEvent(Constants.WixAppEvents.APP_PART_RESIZE);
            window.requestAnimFrame(function () {
                this.fireEvent('autoSized');
            }.bind(this));
        },

        _onResize : function () {
            if(!this._mainProxy) {
                return this.parent();
            }
            if(this._allowHeightResize === false)
            {
                this.setHeight(this._getMinPhysicalHeight(),false,false);
            }
            else if(this._mainProxy)
            {
                this._mainProxy.getElement().setStyle('height',this.getHeight());//
            }
            this.parent();
            this._eventDispatcher.fireEvent(Constants.WixAppEvents.APP_PART_RESIZE);
        },

        _onContentResize: function () {
            if (this._isDisposed) {
                return;
            }
            this._lifecycleManager.performAction(function () {
                this._updateHeight();
            }.bind(this));
        },

        _updateHeight: function () {
            if(this._allowHeightResize === false) {
                this.setHeight(this._getMinPhysicalHeight(),false,false);
                this.fireEvent('autoSizeChange');
                this.fireEvent('autoSized');
            }
        },

        setExtraLogicParams: function(extraLogicParams){
           this._extraLogicParams = extraLogicParams;
        },

        /**
         * @return {ProxyEventBus}
         */
        getEventDispatcher: function () {
            return this._eventDispatcher;
        },
        _disposeLogic: function () {
            if (this._logic && this._logic.dispose) {
                this._logic.dispose();
            }
        },

        dispose: function() {
            if(this._mainProxy) {
                this._mainProxy.dispose();
            }
            if(this._stylesheetManager) {
                this._stylesheetManager.dispose();
            }
			this._disposeLogic();
			this.parent();
        }
    });
});
