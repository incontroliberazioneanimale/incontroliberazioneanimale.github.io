define.skin('skins.core.PhotoFullScreenSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {
            "id": "themeDir",
            "type": "themeUrl",
            "defaultTheme": "THEME_DIRECTORY",
            "name": ""
        },
        {
            "id": "padding",
            "type": "CSSString",
            "defaultTheme": "padding1",
            "name": ""
        },
        {
            "id": "$overlayBgColor",
            "type": "cssBgColor",
            "defaultValue": "0,0,0,0.8",
            "name": ""
        },
        {
            "id": "overlayFontColor",
            "type": "color",
            "defaultValue": "255,255,255,1",
            "name": ""
        },
        {
            "id": "$fontTitle",
            "type": "cssFont",
            "defaultTheme": "fontSubTitle",
            "name": ""
        },
        {
            "id": "$fontDesc",
            "type": "cssFont",
            "defaultTheme": "fontText",
            "name": ""
        }
    ]);

    def.html('<div skinPart="img" skin="mobile.core.skins.ImageSkin">' + '</div>' + '<div skinPart="controls" class="hidden">' + '<div class="opacity">' + '</div>' + '<div class="holder">' + '<h2 skinPart="title">' + '</h2>' + '<div skinPart="description">' + '</div>' + '</div>' + '</div>' + '<img skinPart="infoButton" />' + '<img skinPart="exitButton" />');

    def.css([
        '{position:relative; width:100%; height:100%; overflow:hidden;}', '%img% {position:absolute;}', '%img% > div {margin:0; padding:0; position:absolute!important;}', '%controls% {position:absolute; bottom:0; width:100%; height:100%; }', '%.opacity%{position:absolute; width:100%; height:100%; [$overlayBgColor]}', '%.holder% {position:absolute; bottom:0; padding:[padding];color:[overlayFontColor];}', '%infoButton% {position:absolute; top:5px; right:5px; width:2.5em; height:2.5em;}', '%exitButton% {position:absolute; top:5px; left:5px; width:2.5em; height:2.5em;}', '%title% {[$fontTitle] }', '%description% {[$fontDesc]}'
    ]);

});