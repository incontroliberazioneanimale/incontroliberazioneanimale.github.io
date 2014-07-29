define.skin('skins.core.SimpleButtonSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.html('<div skinPart="hitArea">'
           + ' <span skinPart="label"></span>'
           + '</div>');

});