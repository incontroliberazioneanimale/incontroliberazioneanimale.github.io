/** @class wixapps.core.logics.page.SingleItemPageLinkResolver */
define.Class('wixapps.core.logics.page.SingleItemPageLinkResolver', function (classDefinition) {
    /** @type bootstrap.managers.classmanager.ClassDefinition */
    var def = classDefinition;

    def.inherits('wixapps.core.logics.page.PageLinkResolverBase');

    /** @lends wixapps.core.logics.page.SingleItemPageLinkResolver */
    def.methods({

        resolveLinkUrl: function (appPageId, dataItem, logicParams, linkType, callback) {
            var self = this;
            this.getWPageDataPromise(appPageId)
                .then(function (pageData) {
                    var pageId = pageData.get("id");
                    var title = dataItem.getChildValue('title');
                    var itemId = dataItem.getChildValue('_iid') || "";

                    callback(self._hash.getHashPartsString(pageId, title, itemId));

                });
        }
    });
});
