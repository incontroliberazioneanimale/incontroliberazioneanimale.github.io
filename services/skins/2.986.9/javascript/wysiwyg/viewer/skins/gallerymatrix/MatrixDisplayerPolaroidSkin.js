define.skin('wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerPolaroidSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        "heightDiff": 80,
        "m_heightDiff": 40
    });

    def.inherits('mobile.core.skins.BaseSkin');

    def.compParts({
        "image": {
            "skin": "mobile.core.skins.ImageSkin"
        }
    });

    def.skinParams([
        {
            "id": "brw",
            "type": Constants.SkinParamTypes.SIZE,
            "defaultValue": "5px"
        },
        {
            "id": "rd",
            "type": Constants.SkinParamTypes.BORDER_RADIUS,
            "defaultValue": "0px"
        },
        {
            "id": "shd",
            "type": Constants.SkinParamTypes.BOX_SHADOW,
            "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
        },
        {
            "id": "bg",
            "type": Constants.SkinParamTypes.COLOR_ALPHA,
            "defaultTheme": "color_11"
        },
        {
            "id": "bgh",
            "type": Constants.SkinParamTypes.COLOR_ALPHA,
            "defaultTheme": "color_17",
            "styleDefaults": {
                "alpha": 0.6
            }
        },
        {
            "id": "ttl",
            "type": Constants.SkinParamTypes.COLOR,
            "defaultTheme": "color_15"
        },
        {
            "id": "txt",
            "type": Constants.SkinParamTypes.COLOR,
            "defaultTheme": "color_15"
        },
        {
            "id": "fntt",
            "type": Constants.SkinParamTypes.FONT,
            "defaultTheme": "font_6"
        },
        {
            "id": "fntds",
            "type": Constants.SkinParamTypes.FONT,
            "defaultTheme": "font_8"
        },
        {
            "id": "pos",
            "type": Constants.SkinParamTypes.OTHER,
            "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
        },
        {
            "id": "wrp",
            "type": Constants.SkinParamTypes.OTHER,
            "defaultValue": "white-space:nowrap;"
        },
        {
            "id": "flw",
            "type": Constants.SkinParamTypes.OTHER,
            "defaultValue": "overflow:hidden;"
        },
        {
            "id": "trans",
            "type": Constants.SkinParamTypes.TRANSITION,
            "defaultValue": "opacity 0.4s ease 0s"
        }
    ]);

    def.html('<div skinPart="imageWrapper">' + '<div class="imgBorder">' + '<div skinPart="image">' + '</div>' + '</div>' + '<div skinPart="zoom">' + '</div>' + '</div>' + '<ul class="panel">' + '<li class="ttl">' + '<h6 skinPart="title">' + '</h6>' + '</li>' + '<li class="desc">' + '<p skinPart="description">' + '</p>' + '</li>' + '<li class="lnk">' + '<a skinPart="link">' + 'Go to link</a>' + '</li>' + '</ul>');

    def.css([
        '{ [pos] [rd] [shd] background: [bg]; }',
        '%imageWrapper% { [pos] [rd] }',
        '%.imgBorder% { [pos] [rd] padding: [brw] [brw] 0 [brw]; }',
//        '[state~=mobileView] %.imgBorder% { [pos] [rd] padding: [brw] [brw] [brw] [brw]; }',
        '%image% { [rd] }',
        '%zoom% { position:absolute; top:[brw]; bottom:0; left:[brw]; right:[brw]; background: [bgh]; [rd] filter: alpha(opacity=0); opacity: 0; [trans] }',
        '%.panel% { height: 60px; position:absolute; bottom:0; left:0; right:0; padding: 0 10px; }',
        '%title% { [fntt] color: [ttl]; [wrp] [flw] position:absolute; bottom:44px; left:10px; right:10px; height: auto;}',
        '[state~=mobileView] %title% {bottom:10px}',

        '%description% { color: [txt]; white-space: pre-line; [fntds] [flw] position:absolute; bottom:28px; left:10px; right:10px; height: 1.2em;}',
        '[state~=mobileView] %description% {display:none}',

        '%link% { color:[txt]; [fntds] position:absolute; left:10px; right:10px; bottom:10px; left:10px; right:10px; text-decoration: underline !important; [wrp] [flw] height:1.2em; }',
        '[state~=alignLeft] %title% { text-align:left;}',
        '[state~=alignCenter] %title% { text-align:center; }',
        '[state~=alignRight] %title% { text-align:right; }',
        '[state~=alignLeft] %description% { text-align:left }',
        '[state~=alignCenter] %description% { text-align:center; }',
        '[state~=alignRight] %description% { text-align:right; }',
        '[state~=alignLeft] %link% { text-align:left; }',
        '[state~=alignCenter] %link% { text-align:center; }',
        '[state~=alignRight] %link% { text-align:right; }',
        '[state~=noLink] %link% { display: none; }',
        '[state~=rollover] :hover %zoom% { filter: alpha(opacity=100); opacity: 1; [trans] }'
    ]);

});