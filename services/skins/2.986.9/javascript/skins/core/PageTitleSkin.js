define.skin('skins.core.PageTitleSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {
            "id": "$font",
            "type": "cssFont",
            "defaultTheme": "fontTitle",
            "name": ""
        },
        {
            "id": "fontColor",
            "type": "color",
            "defaultTheme": "headerTextColor",
            "name": ""
        },
        {
            "id": "spacing",
            "type": "CSSString",
            "defaultTheme": "componentSpacing",
            "name": ""
        }
    ]);

    def.css([
        '{[$font] color:[fontColor]; padding:[spacing] 0; margin-bottom:[spacing];}'
    ]);

});