define.skin('skins.core.GlobalMenuSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        "itemSkinClassName": "mobile.core.skins.MenuButtonSkin"
    });

    def.inherits('mobile.core.skins.BaseSkin');

    def.html('<div class="linksList" skinPart="itemsContainer"></div>');

});