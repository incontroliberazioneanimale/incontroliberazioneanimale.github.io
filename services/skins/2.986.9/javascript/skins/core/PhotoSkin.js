define.skin('skins.core.PhotoSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.html('<div skinPart="img" skin="mobile.core.skins.ImageSkin">' + '</div>' + '<div skinPart="photoFullScreen" skin="mobile.core.skins.PhotoFullScreenSkin">' + '</div>');

    def.css([
        '{margin: 7px auto; width:70%}', '%img% { margin: 0 auto }', '[state=small]  { width:50% }', '[state=medium] { width:70% }', '[state=large]  { width:100% }'
    ]);

});