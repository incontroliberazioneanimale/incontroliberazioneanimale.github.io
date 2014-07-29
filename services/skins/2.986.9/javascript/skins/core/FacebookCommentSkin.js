define.skin('skins.core.FacebookCommentSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {
            "id": "tdr",
            "type": Constants.SkinParamTypes.URL,
            "defaultTheme": "BASE_THEME_DIRECTORY"
        }
    ]);

    def.html('<div id="fb-root">' + '</div>' + ' <div skinPart="facebook">' + '</div>');

    def.css([
        '#fb-root {display:none}',
        '[state~="dark"] { background:url([tdr]dark-facebook-comments.png) no-repeat }',
        '[state~="light"] { background:url([tdr]bright-facebook-comments.png) no-repeat }',
        '[state~=mobileView][state~="dark"] { background:url([tdr]mobile-dark-facebook-comments.jpg) no-repeat }',
        '[state~=mobileView][state~="light"] { background:url([tdr]mobile-bright-facebook-comments.jpg) no-repeat }',
        '[state~=disabled] { pointer-events: none }'
    ]);

});