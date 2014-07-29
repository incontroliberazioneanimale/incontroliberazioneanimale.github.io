define.skin('skins.core.ContactItemSkin', function(SkinDefinition) {

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

    def.html('<div class="btnIcon"><img skinPart="icon"/></div>'
           + '<div class="btnInfo">'
           + '  <div skinPart="label" class="btnText"></div>'
           + '  <div skinPart="description" class="btnText2"></div>'
           + '</div>');

    def.css([
        '{position:relative; color:[fontColor]; margin-bottom:[itemSpacing];}', '[class~=lastItem] {margin-bottom:0;}', '> .btnIcon {position:absolute; vertical-align:top; left:0; top:0; [$ButtonIconBgColor]}', '> .btnIcon img {width:[iconSize]em; display:block}', '> .btnInfo {position:relative; overflow:visible; padding-left:3.6em; padding-bottom:0.2em;}', '> .btnInfo> .btnText {[$font] font-weight:bold; margin-left:1em; line-height:1.2em !important; word-wrap:break-word}', '> .btnInfo> .btnText2 {[$font] font-weight:normal; margin-left:1em; line-height:1.15em !important; word-wrap:break-word}'
    ]);

});