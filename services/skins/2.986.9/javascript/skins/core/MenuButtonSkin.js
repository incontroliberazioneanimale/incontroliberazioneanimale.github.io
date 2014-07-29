define.skin('skins.core.MenuButtonSkin', function(SkinDefinition) {

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
            "id": "$ButtonBgColor",
            "type": "cssBgColor",
            "defaultTheme": "areaBgColor",
            "name": ""
        },
        {
            "id": "ButtonBorder",
            "type": "CSSString",
            "defaultTheme": "borderButton",
            "name": ""
        },
        {
            "id": "ItemSpacing",
            "type": "CSSString",
            "defaultTheme": "itemSpacing",
            "name": ""
        },
        {
            "id": "$BorderRadius",
            "type": "cssBorderRadius",
            "defaultTheme": "radiusButton",
            "name": ""
        },
        {
            "id": "$ButtonIconBgColor",
            "type": "cssBgColor",
            "defaultTheme": "iconBgColor",
            "name": ""
        },
        {
            "id": "$ButtonIconBorderRadius",
            "type": "cssBorderRadius",
            "defaultTheme": "radiusIcon",
            "name": ""
        },
        {
            "id": "$ButtonIconBorder",
            "type": "CSSString",
            "defaultTheme": "borderIcon",
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
            "id": "bulletSize",
            "type": "number",
            "defaultTheme": "bulletSize",
            "name": ""
        },
        {
            "id": "iconSize",
            "type": "number",
            "defaultTheme": "iconSize",
            "name": ""
        }
    ]);

    def.html('<div class="bg">' + '</div>' + '<div class="btnIcon">' + '<img skinPart="icon"/>' + '</div>' + '<div class="btnBullet">' + '<div>' + '<div>' + '<div>' + '&nbsp;</div>' + '</div>' + '</div>' + '</div>' + '<div class="btnText" skinPart="label">' + '</div>');

    def.css([
        '{position:relative; border:[ButtonBorder]; overflow: hidden; margin:[ItemSpacing] 0; [$BorderRadius]; min-height: [iconSize]em; color: [fontColor]}', '> .bg {position:absolute; top:0; left:0; width:100%; height:100%; [$ButtonBgColor] [$BorderRadius] background-image:url([themeDir]inlineShadow.png); background-repeat:repeat-x}', '> .btnIcon {z-index: 1; position:absolute; top:0; bottom:0; left:0; border-right:[$ButtonIconBorder]; [$ButtonIconBgColor] [$ButtonIconBorderRadius]}', '> .btnIcon img {position:relative; [$ButtonIconBorderRadius] width:[iconSize]em; height:[iconSize]em}', '> .btnBullet {z-index:1; position:absolute; top:0; bottom:0; right:0.3em; line-height:inherit}', '> .btnBullet> div {display:table; height:100%;}', '> .btnBullet> div> div {display:table-cell; vertical-align:middle}', '> .btnBullet> div> div> div {background: url([themeDir]rightPointer.png) no-repeat right center; height:[iconSize]em; width:[bulletSize]em}', '> .btnText {[$font] position:relative; padding:0 [bulletSize]em 0 [iconSize]em; word-wrap:break-word}'
    ]);

});