define.skin('skins.core.NetworkItemSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {
            "id": "itemSpacing",
            "type": "CSSString",
            "defaultTheme": "itemSpacing",
            "name": ""
        },
        {
            "id": "$ButtonIconBgColor",
            "type": "cssBgColor",
            "defaultTheme": "iconBgColor",
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
            "id": "iconSize",
            "type": "number",
            "defaultTheme": "iconSize",
            "name": ""
        }
    ]);

    def.html('<div class="btnIcon">' + '<img skinPart="icon"/>' + '</div>' + '<div class="btnText">' + '<span skinPart="label">' + '</span>' + '</div>');

    def.css([
        '{position:relative; margin-bottom:[itemSpacing];}', '[class~=lastItem] {margin-bottom:0;}', '> .btnIcon {position:absolute; [$ButtonIconBgColor]}', '> .btnIcon img{width:[iconSize]em; display:block;}', '> .btnText {position:relative; [$font] color:[fontColor]; padding-left:3.6em; padding-bottom:0.2em;}'
    ]);

});