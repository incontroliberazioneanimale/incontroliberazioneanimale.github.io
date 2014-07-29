define.skin('wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTransparentSkin', function (SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.compParts({
        "image": {
            "skin": "mobile.core.skins.ImageSkin"
        }
    });

    def.skinParams([
        {
            "id": "brdTrans",
            "type": Constants.SkinParamTypes.COLOR_ALPHA,
            "defaultTheme": "color_15",
            "lang": "brd"
        },
        {
            "id": "ttlTrans",
            "type": Constants.SkinParamTypes.COLOR,
            "defaultTheme": "color_18",
            "lang": "ttl"
        },
        {
            "id": "txtTrans",
            "type": Constants.SkinParamTypes.COLOR,
            "defaultTheme": "color_15",
            "lang": "descriptionTextColor"
        },
        {
            "id": "ttlhTrans",
            "type": Constants.SkinParamTypes.COLOR_ALPHA,
            "defaultTheme": "color_18",
            "lang": "ttlh"
        },
        {
            "id": "txthTrans",
            "type": Constants.SkinParamTypes.COLOR_ALPHA,
            "defaultTheme": "color_15",
            "lang": "dscrh"
        },
        {
            "id": "brw",
            "type": Constants.SkinParamTypes.SIZE,
            "defaultValue": "10px"
        },
        {
            "id": "rd",
            "type": Constants.SkinParamTypes.BORDER_RADIUS,
            "defaultValue": "0px"
        },
        {
            "id": "shd",
            "type": Constants.SkinParamTypes.BOX_SHADOW,
            "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);",
            "styleDefaults": {
                "boxShadowToggleOn": "false"
            }
        },
        {
            "id": "fntt",
            "type": Constants.SkinParamTypes.FONT,
            "defaultTheme": "font_7"
        },
        {
            "id": "fntdsTrans",
            "type": Constants.SkinParamTypes.FONT,
            "defaultTheme": "font_9",
            "lang": "fntds"
        },
        {
            "id": "pos",
            "type": Constants.SkinParamTypes.OTHER,
            "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
        },
        {
            "id": "optrans",
            "type": Constants.SkinParamTypes.TRANSITION,
            "defaultValue": "opacity 0.4s ease 0s"
        },
        {
            "id": "bgtrans",
            "type": Constants.SkinParamTypes.TRANSITION,
            "defaultValue": "background-color 0.4s ease 0s"
        },
        {
            "id": "coltrans",
            "type": Constants.SkinParamTypes.TRANSITION,
            "defaultValue": "color 0.4s ease 0s"
        }
    ]);

    def.html(
        '<div skinPart="imageWrapper">' +
            '<div class="imgBorder">' +
                '<div skinPart="image"></div>' +
                '<div skinPart="zoom">' +
                    '<div class="table">' +
                        '<div class="inner">' +
                            '<div skinPart="title"></div>' +
                            '<div skinPart="description"></div>' +
                            '<a skinPart="link">Go to link</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>');

    def.css([
        '%imageWrapper% {[pos] [shd] [rd]}',
        '%.imgBorder% { [pos] [rd] border:solid [brw] [brdTrans]; [bgtrans]; overflow: hidden }',
        '%image% { [rd] filter: alpha(opacity=0); opacity: 0; [optrans] }',
        '%image% img { filter: alpha(opacity=0) }',
        '%zoom% { [pos] [rd] padding: 10px; background-image: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7") }',
        '%title% { [fntt] color: [ttlTrans]; [coltrans]; white-space: nowrap; }',
        '%description% { [fntdsTrans] color: [txtTrans]; [coltrans]; white-space: pre-line; }',
        '%link% { [fntdsTrans] color:[txtTrans]; [coltrans]; display: block; text-decoration:underline !important; white-space:nowrap; line-height: 1.8em; }',
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
        ':hover %image% { filter: alpha(opacity=100); opacity: 1; [optrans] }',
        ':hover %image% img { filter: alpha(opacity=100) }',
        ':hover %.imgBorder% { background-color: [brdTrans]; [bgtrans] }',
        ':hover %title% { color: [ttlhTrans]; [coltrans] }',
        ':hover %description% { color: [txthTrans]; [coltrans] }',
        ':hover %link% { color:[txthTrans]; [coltrans] }',
        '%.table% { display: table; height: 100%; table-layout: fixed; width: 100%; }',
        '%.inner% { vertical-align: middle; display: table-cell; }'
    ]);

});