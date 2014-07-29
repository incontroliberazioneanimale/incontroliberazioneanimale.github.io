define.skin('skins.core.ServiceListSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        "itemSkinClassName": "mobile.core.skins.ServiceItemSkin"
    });

    def.inherits('mobile.core.skins.BaseSkin');

    def.html('<div skinPart="itemsContainer"></div>');

});