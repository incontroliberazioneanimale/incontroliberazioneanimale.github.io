define.skin('skins.core.RichTextSkin', function(SkinDefinition) {

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
            "id": "$bgColor",
            "type": "cssBgColor",
            "defaultTheme": "areaBgColor",
            "name": ""
        },
        {
            "id": "$borderRadius",
            "type": "cssBorderRadius",
            "defaultTheme": "radiusContainer",
            "name": ""
        },
        {
            "id": "border",
            "type": "CSSString",
            "defaultTheme": "borderContainer",
            "name": ""
        },
        {
            "id": "padding",
            "type": "CSSString",
            "defaultTheme": "padding1",
            "name": ""
        },
        {
            "id": "$font",
            "type": "cssFont",
            "defaultTheme": "fontText",
            "name": ""
        },
        {
            "id": "fontColor",
            "type": "color",
            "defaultTheme": "textColor",
            "name": ""
        },
        {
            "id": "componentSpacing",
            "type": "CSSString",
            "defaultTheme": "componentSpacing",
            "name": ""
        }
    ]);

    def.html('<div skinPart="bg">' + '</div>' + '<div skinPart="richTextContainer" class="richTextContainer">' + '</div>');

    def.css([
        '{position:relative; [$borderRadius] border:[border]; margin-bottom:[componentSpacing]}', '%bg% {position:absolute; width:100%; height:100%; [$bgColor] background-image:url([themeDir]inlineShadow.png); background-repeat:repeat-x; [$borderRadius]}', '%richTextContainer% {position:relative; padding:[padding]; color:[fontColor]!important;}', 'p,li {[$font] color:[fontColor]!important;}', 'span {[$font] color:[fontColor]!important; display:inline;}'
    ]);

});