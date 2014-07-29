define.skin('skins.core.FacebookLikeSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {'id': 'themeDir', 'type':'themeUrl', 'defaultTheme':'THEME_DIRECTORY', 'name': ''}
    ]);
    def.html('<div skinPart="facebook">' + '</div>');

    def.css([
        '%facebook% {}', '[state="loading"] > [skinPart="loadingAnimation"]{width:100%; height:100%; display:block; background:transparent url([themeDir]gif_preloader.gif) center no-repeat}', '[state="loaded"] > [skinPart="loadingAnimation"]{display:none;}'
    ]);

});