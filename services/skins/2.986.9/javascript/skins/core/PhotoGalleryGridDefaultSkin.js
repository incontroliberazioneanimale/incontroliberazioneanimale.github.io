define.skin('skins.core.PhotoGalleryGridDefaultSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        "_comps": [
            {
                "id": "repeater",
                "skin": "mobile.core.skins.ImageSkin",
                "styleGroup": "inherit"
            },
            {
                "id": "fullScreen",
                "skin": "mobile.core.skins.PhotoGalleryFullScreenDefaultSkin",
                "styleGroup": "inherit"
            }
        ],
        "itemSkinClassName": "mobile.core.skins.ImageSkin",
        "fullScreenViewSkinClassName": "mobile.core.skins.PhotoGalleryFullScreenDefaultSkin"
    });

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {
            "id": "thumbSpacing",
            "type": "CSSString",
            "defaultTheme": "thumbSpacing",
            "name": ""
        },
        {
            "id": "$thumbBorderRadius",
            "type": "cssBorderRadius",
            "defaultTheme": "radiusThumb",
            "name": ""
        },
        {
            "id": "borderThumb",
            "type": "CSSString",
            "defaultTheme": "borderThumb",
            "name": ""
        },
        {
            "id": "componentSpacing",
            "type": "CSSString",
            "defaultTheme": "componentSpacing",
            "name": ""
        }
    ]);

    def.html('<span skinPart="imagesContainer"></span>');

    def.css([
        '{text-align:center; overflow:hidden; margin-bottom:[componentSpacing]}',
        '%imagesContainer% {margin:0 auto;}',
        '%imagesContainer% div{float:left;}',
        '%imagesContainer% div[comp="core.components.Image"] {margin:0 [thumbSpacing] [thumbSpacing] [thumbSpacing]; [$thumbBorderRadius] border:[borderThumb];}'
    ]);

});