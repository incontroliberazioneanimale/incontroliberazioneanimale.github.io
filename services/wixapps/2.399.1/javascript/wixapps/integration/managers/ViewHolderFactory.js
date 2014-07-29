/** @class wixapps.integration.managers.ViewHolderFactory */
define.Class("wixapps.integration.managers.ViewHolderFactory", function (classDefinition) {
    /**@type bootstrap.managers.classmanager.ClassDefinition */
    var def = classDefinition;

    def.utilize([
        'wixapps.integration.managers.ViewHolder',
        'wixapps.core.data.DataItemFactory',
        'wixapps.core.managers.TypesManager',
        'wixapps.core.views.ViewDefinitionsRepository'
    ]);

    /**
     * @lends wixapps.integration.managers.ViewHolderFactory
     */
    def.methods({
        intialize: function () {

        },

        createViewHolder: function (parentNode, view, data, format) {
            var dataItemFactory = new this.imports.DataItemFactory();
            var typesManager = new this.imports.TypesManager();
            var viewDefRepo = new this.imports.ViewDefinitionsRepository(dataItemFactory);

            this._fillMissingIdsForItem(view, 0);

            var systemTypes = Constants.WixAppsSystemTypes;
            for (var i = 0; i < systemTypes.length; i++) {
                typesManager.registerType(systemTypes[i]);
            }

            view.name = "TheGreatView";
            view.forType = (view.forType != "Array" ? "wix:Object" : "Array");
            view.vars = view.vars || {};

            viewDefRepo.setViewDefinition(view, false);

            var viewHolder = new this.imports.ViewHolder(
                dataItemFactory,
                typesManager,
                viewDefRepo,
                function () {},
                "",
                false,
                {
                    getAppPageUrl: function () { return ""; }
                });
            viewHolder.setContainer(parentNode);
            var dataItem = dataItemFactory.createDataItem(data);
            viewHolder.setupViewHolder(dataItem, "TheGreatView", format);
            return viewHolder;
        },

        _fillMissingIdsForItem: function(itemDef, indexAtView) {

            itemDef.id = itemDef.id || itemDef.data || 'def_' + indexAtView;
            var ret = indexAtView + 1;
            var self = this;

            // look for other item definitions recursively (in inner layout objects)
            if (itemDef.comp && itemDef.comp.items && itemDef.comp.items.forEach) {
                itemDef.comp.items.forEach(function(item, i) {
                    ret = self._fillMissingIdsForItem(item, ret);
                });
            }
            // .. and in template cases
            if (itemDef.comp && itemDef.comp.templates) {
                Object.each(itemDef.comp.templates, function(value) {
                    ret = self._fillMissingIdsForItem(value, ret);
                });
            }
            // .. and in switch cases
            if (itemDef.comp && itemDef.comp.cases) {
                Object.each(itemDef.comp.cases, function(value) {
                    if (typeOf(value) === "array") {
                        value.forEach(function (item) {
                            ret = self._fillMissingIdsForItem(item, ret);
                        });
                    } else {
                        ret = self._fillMissingIdsForItem(value, ret);
                    }
                });
            }
            // ... and deal with the table layout which was coded while on acid...
            if (itemDef.comp && itemDef.comp.columns && itemDef.comp.name == 'Table') {
                itemDef.comp.columns.forEach(function(columnItem, i) {
                    Array.forEach(['item', 'header', 'footer'], function(propName) {
                        if (columnItem[propName] !== undefined) {
                            ret = self._fillMissingIdsForItem(columnItem[propName], ret);
                        }
                    });
                });
            }

            return ret;
        }

    });
});
