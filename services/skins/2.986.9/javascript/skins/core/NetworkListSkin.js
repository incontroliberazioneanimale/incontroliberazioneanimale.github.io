define.skin('skins.core.NetworkListSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        "itemSkinClassName": "mobile.core.skins.NetworkItemSkin"
    });

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
            "id": "border",
            "type": "CSSString",
            "defaultTheme": "borderContainer",
            "name": ""
        },
        {
            "id": "$BorderRadius",
            "type": "cssBorderRadius",
            "defaultTheme": "radiusContainer",
            "name": ""
        },
        {
            "id": "padding",
            "type": "CSSString",
            "defaultTheme": "padding1",
            "name": ""
        },
        {
            "id": "componentSpacing",
            "type": "CSSString",
            "defaultTheme": "componentSpacing",
            "name": ""
        }
    ]);

    def.html('<div skinPart="bg"></div>'
           + '<div skinPart="itemsContainer"></div>');

    def.css([
        '{position:relative; margin-bottom:[componentSpacing]; [$BorderRadius]}',
        '%bg% {position:absolute; width:100%; height:100%; [$bgColor] [$BorderRadius] background-image:url([themeDir]inlineShadow.png); background-repeat:repeat-x;}',
        '%itemsContainer% {position:relative; padding:[padding]; [$BorderRadius] border:[border];}'
    ]);

});