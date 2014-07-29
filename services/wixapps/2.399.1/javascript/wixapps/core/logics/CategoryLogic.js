/** @class wixapps.core.logics.CategoryLogic */
define.Class('wixapps.core.logics.CategoryLogic', function(classDefinition) {
	/** @type bootstrap.managers.classmanager.ClassDefinition */
	var def = classDefinition;

	def.inherits('wixapps.core.logics.SingleItemLogic');

	/** @lends wixapps.core.logics.CategoryLogic */
	def.methods({
		// descriptor Data Selection Param
		_dsp: function(param, defaultVal) {
			return this._environment.getAppInstance().getDescriptorValue([ "dataEditing", "logicParams", "dataSelection", param ]) || defaultVal;
		},

		_getDescriptorValue: function(pathArray) {
			return this._environment.getAppInstance().getDescriptorValue(pathArray);
		},

		generateDataSelectorPanel: function(panel, partData, params) {
			this.generateSelectionList(panel, partData, params);
		},

		generateSelectionList: function(panel, partData, params, label, onListCreated) {
			var collectionId = this._getItemsCollection(params);
			var filter = this._dsp("categoriesSelectionFilter", null);
			var sort = this._dsp("categoriesSelectionSort", null);
			var skip = this._dsp("categoriesSelectionSkip", null);
			var limit = this._dsp("categoriesSelectionLimit", null);

			this._environment.getDataService().query(collectionId, filter, sort, skip, limit,false, function(result) {
				var addButtonText;

				if (result.length === 0) {
					panel.addLabel(this._dsp("noCategoriesLabel", "No categories found"));
					addButtonText = this._dsp("addFirstCategoryLabel", "Create a new category");
				}
				else {
					panel.addLabel(this._dsp("inlineHelp", "Pick which category you'd like to appear and click OK."));

					addButtonText = this._dsp("anotherCategoryLabel", "No thanks, I'd like to create a new category");

					var combo = this._generateCategoriesComboSection(result, panel, partData, params);
					combo.runWhenReady(function(comboLogic) {
						if (onListCreated) {
							onListCreated.apply(this, [ comboLogic ]);
						}
					});
				}

                if (!params.dontShowCreateNew) {
                    var newMenu = panel.addButtonField(null, addButtonText, null, null, "withArrow");
                    newMenu.addEvent(Constants.CoreEvents.CLICK, function() {
                        this._createNewListAndSelect(panel, partData, params);
                    }.bind(this));
                }
			}.bind(this));
		},

		_createCategoryListData: function(result) {
			var collectionId = this._getItemsCollection(this._logicParams);
			var catList = [],
				resObj;
			for (var i = 0; i < result.length; i++) {
				resObj = result[i].getValue();
				catList.push({
					value: collectionId + "/" + resObj._iid,
					label: resObj.title
				});
			}
			return catList;
		},

		_generateCategoriesComboSection: function(result, panel, partData, params) {
			panel.addBreakLine(20);
			return this._generateCategoriesCombo(result, panel, partData, params);
		},
		_generateCategoriesCombo: function(result, panel, partData, params) {
			var sectionList = this._createCategoryListData(result);
			var combo = panel.addComboBoxField("", sectionList);

			combo.addEvent("inputChanged", function(ev) {
				this._changeSelectedCategory(partData, ev.value);
			}.bind(this));

			if (params.collectionId && params.itemId) {
				var selected = params.collectionId + "/" + params.itemId;
				var foundInIndex = -1;
				for (var k = 0; k < sectionList.length; k++) {
					if (sectionList[k].value == selected) {
						foundInIndex = k;
						break;
					}
				}
				if (foundInIndex != -1) {
					combo.setValue(selected);
				} else {
					if (sectionList.length > 0) {
						this._changeSelectedCategory(partData, sectionList[0].value);
					}
				}
			}

			return combo;
		},

		_createNewListAndSelect: function(panel, partData, params) {

			var editorManagers = panel.injects();

			// if not saved, ask to save first
			if (editorManagers.Config.siteNeverSavedBefore()) {
				editorManagers.EditorDialogs.openWixAppsSiteMustBeSaved();
			}
			else {
				// create new menu
				var newCategoryType = this._dsp("newItemType", "Category");
				var newCategoryCollection = this._dsp("newItemCollection", "Categories");
				var newCategory = this.getDataEditingModel().getItemTemplate(newCategoryType, true);
				var newCategoryOverrides = this._dsp("newItemOverrides", {title: "New Category"});
				Object.each(newCategoryOverrides, function(val, key) {
					newCategory.getChildByRef(key).setValue(val);
				});

				// save menu
				this._environment.getDataService().createItem(newCategoryCollection, newCategory,
					function(item) {

						// change menu for the AppPart
						this._changeSelectedCategory(partData, newCategoryCollection + "/" + item.getChildValue("_iid"));
						panel._dialogWindow.closeDialog();

						// open the edit dialog
						editorManagers.Commands.executeCommand("WAppsEditorCommands.OpenEditDataDialog", { selectedComp: this._environment.getAppPart() });
					}.bind(this),
					function(error) {
						// show error
						editorManagers.EditorDialogs.openErrorDialog(
							this._dsp("newItemErrorTitle", "Error creating new category"),
							this._dsp("newItemErrorDescription", "Please try again in a few minutes"),
							error.code + "\n" + error.description,
							null);
					}.bind(this));
			}
		},

		_changeSelectedCategory: function(partData, collectionItemString) {
			this._fixingItemNotFound = false; // this already fixes item not found, so it should be ignored
			var partLogicParams = partData.get("appLogicParams");
			var collectionId = collectionItemString.split("/")[0];
			var itemId = collectionItemString.split("/")[1];

			var oldAppPartData = {};
			oldAppPartData = Object.merge(oldAppPartData, partData._data);

			partLogicParams.itemId = {
				type: "AppPartParam",
				value: itemId
			};

			partLogicParams.collectionId = {
				type: "AppPartParam",
				value: collectionId
			};

			var newAppPartData = {};
			newAppPartData = Object.merge(newAppPartData, partData._data);
			partData.fireDataChangeEvent(undefined, newAppPartData, oldAppPartData);
		},

		getSelectedIId: function(partData, params) {
			return params.itemId;
		},

		getDataEditingMetaInfo: function() {
			var appInstance = this._environment.getAppInstance();
			var dataSelectionLabel = appInstance.getDescriptorValue(["dataEditing", "dataSelectionLabel"]) || "Choose Category";
			var dataEditingLabel = appInstance.getDescriptorValue(["dataEditing", "dataEditingLabel"]) || "Edit Data";
			var titleLabel = this._environment.getAppPart().getPartDef().name;
            var useCategoryTitle = appInstance.getDescriptorValue(["dataEditing", "useCategoryTitle"]);
            if (useCategoryTitle === undefined || useCategoryTitle === null) {
                useCategoryTitle = true;
            }
            if (useCategoryTitle)
            {
                var category = (this._logicParams ? this._environment.getDataService().deReference(this._logicParams.collectionId, this._logicParams.itemId) : null);
                if (category) {
                titleLabel = titleLabel + " - " + category.getChildValue("title");
                if (titleLabel.length > 35) {
                        titleLabel = titleLabel.substr(0, 35) + "...";
                    }
                }
            }
            var baseParams = this.parent();

			return _.merge(baseParams, {
				title: titleLabel,
				hasDataEdit: true,
				hasDataSelection: true,
				dataSelectionLabel: dataSelectionLabel,
				dataEditingLabel: dataEditingLabel
			});
		}
	});
});