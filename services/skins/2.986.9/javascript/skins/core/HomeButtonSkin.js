define.skin('skins.core.HomeButtonSkin', function(SkinDefinition) {

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
            "id": "$font",
            "type": "cssFont",
            "defaultTheme": "fontButton",
            "name": ""
        },
        {
            "id": "fontColor",
            "type": "color",
            "defaultTheme": "textColor",
            "name": ""
        },
        {
            "id": "ButtonBorder",
            "type": "CSSString",
            "defaultTheme": "borderButton",
            "name": ""
        },
        {
            "id": "$ButtonBgColor",
            "type": "cssBgColor",
            "defaultTheme": "areaBgColor",
            "name": ""
        },
        {
            "id": "componentSpacing",
            "type": "CSSString",
            "defaultTheme": "componentSpacing",
            "name": ""
        },
        {
            "id": "$BorderRadius",
            "type": "cssBorderRadius",
            "defaultTheme": "radiusButton",
            "name": ""
        },
        {
            "id": "padding",
            "type": "CSSString",
            "defaultTheme": "padding2",
            "name": ""
        },
        {
            "id": "sitePadding",
            "type": "CSSString",
            "defaultTheme": "padding1",
            "name": ""
        }
    ]);

    def.html('<div class="bg">' + '</div>' + '<div skinPart="text">' + '</div>');

    def.css([
        '{position:relative; border:[ButtonBorder]; overflow:hidden; margin:[sitePadding]; margin-top:[componentSpacing]; margin-bottom:[componentSpacing]; [$BorderRadius]}', '%.bg% {position:absolute; width:100%; height:100%; [$ButtonBgColor] background-image:url([themeDir]inlineShadow.png); background-repeat:repeat-x; [$BorderRadius]}', '%text% {position:relative; padding:[padding]; color:[fontColor]; [$font]}'
    ]);

});