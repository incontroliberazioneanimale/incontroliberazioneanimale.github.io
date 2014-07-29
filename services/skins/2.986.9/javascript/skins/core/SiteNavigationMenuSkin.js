define.skin('skins.core.SiteNavigationMenuSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        "itemSkinClassName": "mobile.core.skins.SimpleButtonSkin"
    });

    def.inherits('mobile.core.skins.BaseSkin');

});