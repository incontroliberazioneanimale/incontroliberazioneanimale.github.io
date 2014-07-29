define.skin('wysiwyg.viewer.skins.gallerymatrix.PolaroidCustomHeightSkin', function(SkinDefinition, experimentStrategy) {
    /** @type core.managers.skin.SkinDefinition */
    var def = SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');
    def.statics({"heightDiff": 25});

    def.compParts({
        "imageItem": {
            "skin": "wysiwyg.viewer.skins.gallerymatrix.PolaroidDisplayerCustomHeightSkin",
            "styleGroup": "inherit"
        }
    });

    def.skinParams([
        { "id": "imgHeightDiff", "type": Constants.SkinParamTypes.SIZE,     "defaultValue": "80px", "range": { "min":50, "max":200}, "usedInLogic": true},
        { "id": "imagePadding", "type": Constants.SkinParamTypes.SIZE, "defaultValue": "0px", "range": {"min":0,"max":25} },
        { "id": "paddingSize", "type": Constants.SkinParamTypes.SIZE, "defaultValue": "10px" ,"range": {"min":0, "max":25} },
        { "id": "showMoreColor", "type": Constants.SkinParamTypes.COLOR, "defaultTheme": "color_13" },
        { "id": "fntds", "type": Constants.SkinParamTypes.FONT, "defaultTheme": "font_8" }
    ]);

    def.html(
        '<div skinPart="itemsContainer"></div>' +
        '<div skinPart="showMore">Show More</div>'
    );

    def.css([
        '%itemsContainer% { position: absolute; left: 0; right: 0; top: 0; bottom: 25px; }',
        '%showMore% { color:[showMoreColor]; [fntds] position: absolute; left: 0; right: 0; bottom: 0; text-align:center; text-decoration: underline !important;}',
        '[state~=fullView] %showMore% { display: none }'
    ]);
});