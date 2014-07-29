define.skin('wysiwyg.viewer.skins.gallerymatrix.PolaroidDisplayerCustomHeightSkin', function(skinDefinition, experimentStrategy) {

    /** @type core.managers.skin.SkinDefinition */

    var def = skinDefinition;
    var strategy = experimentStrategy;
    def.statics({
        "customDiff": "panel",
        "heightDiff": 80,
        "m_heightDiff": 40
    });

    def.inherits('mobile.core.skins.BaseSkin');

    def.compParts({
        "image": { "skin": "mobile.core.skins.ImageSkin"}
    });

    def.skinParams([
        { "id": "imgHeightDiff", "type": Constants.SkinParamTypes.SIZE,     "defaultValue": "80px", "range": { "min":50, "max":200}, "usedInLogic": true},
        //{ "id": "hgDiff", "type": Constants.SkinParamTypes.SIZE, "defaultParam": "hg",   "mutators": [ "increase", 30]},
        { "id": "imagePadding", "type": Constants.SkinParamTypes.SIZE, "defaultValue": "0px" },
        { "id": "paddingSize", "type": Constants.SkinParamTypes.SIZE, "defaultValue": "10px" },
        { "id": "paddingBottom", "type": Constants.SkinParamTypes.SIZE, "mutators":["increase", 20], "defaultParam": "paddingSize" },
        { "id": "paddingTop", "type": Constants.SkinParamTypes.SIZE, "mutators":["decrease", 5], "defaultParam": "paddingSize" },
        { "id": "rd", "type": Constants.SkinParamTypes.BORDER_RADIUS, "defaultValue": "0px" },
        { "id": "shd", "type": Constants.SkinParamTypes.BOX_SHADOW, "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);" },
        { "id": "bg", "type": Constants.SkinParamTypes.COLOR_ALPHA, "defaultTheme": "color_11" },
        { "id": "bgh", "type": Constants.SkinParamTypes.COLOR_ALPHA, "defaultTheme": "color_11", "styleDefaults": { "alpha": 0.6 } },
        { "id": "ttl", "type": Constants.SkinParamTypes.COLOR, "defaultTheme": "color_15" },
        { "id": "lnk", "type": Constants.SkinParamTypes.COLOR, "defaultTheme": "color_15" },
        { "id": "txt", "type": Constants.SkinParamTypes.COLOR, "defaultTheme": "color_15", "lang": "descriptionTextColor" },
        { "id": "fntt", "type": Constants.SkinParamTypes.FONT, "defaultTheme": "font_6" },
        { "id": "fntds", "type": Constants.SkinParamTypes.FONT, "defaultTheme": "font_8" },
        { "id": "pos", "type": Constants.SkinParamTypes.OTHER, "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;" },
        { "id": "trans", "type": Constants.SkinParamTypes.TRANSITION, "defaultValue": "opacity 0.4s ease 0s" }
    ]);

    def.html(
        '<div skinPart="imageWrapper"><div class="imgBorder"><div skinPart="image"></div></div><div skinPart="zoom"></div></div>' +
        '<div class="panel" skinpart="panel">' +
            '<div class="panelWrap">' +
                '<h6 skinPart="title"></h6>' +
                '<span skinPart="description"></span>' +
            '</div>'+
            '<a skinPart="link">Go to link</a>' +
        '</div>'
    );

    def.css([
        ' { [pos] [rd] [shd] background: [bg];  overflow:hidden;}',
        ' %imageWrapper% { [pos] [rd] }',
        ' %.imgBorder% { [pos] [rd] padding: [imagePadding] [imagePadding] 0 [imagePadding]; border-bottom-left-radius:0px !important;border-bottom-right-radius:0px !important }',
        ' %image% { [rd] border-bottom-left-radius:0px !important;border-bottom-right-radius:0px !important }',
        ' %zoom% { position:absolute; top:[imagePadding]; bottom:[imagePadding]; left:[imagePadding]; right:[imagePadding]; background: [bgh]; [rd] filter: alpha(opacity=0); opacity: 0; [trans] border-bottom-left-radius:0px !important;border-bottom-right-radius:0px !important}',

        ' %.panel%     { height: [imgHeightDiff]; position:absolute; bottom:0; left:0; right:0; overflow:hidden; box-sizing:border-box;}',
        ' %.panelWrap% { position:absolute; left:[paddingSize]; right:[paddingSize]; top:[paddingTop]; bottom:[paddingBottom]; overflow:hidden;}',

        ' a    { position:absolute; left:[paddingSize]; right:[paddingSize]; bottom:[paddingSize]; overflow:hidden; text-decoration: underline !important; color:[lnk]; [fntds] background: [bg]; display: block;}',
        ' h6   { [fntt] color: [ttl]; display: block; white-space:nowrap;}',
        ' span { color: [txt]; [fntds] display: block;}',

        '[state~=alignLeft] %title% { text-align:left;}',
        '[state~=alignCenter] %title% { text-align:center; }',
        '[state~=alignRight] %title% { text-align:right; }',
        '[state~=alignLeft] %description% { text-align:left }',
        '[state~=alignCenter] %description% { text-align:center; }',
        '[state~=alignRight] %description% { text-align:right; }',
        '[state~=alignLeft] %link% { text-align:left; }',
        '[state~=alignCenter] %link% { text-align:center; }',
        '[state~=alignRight] %link% { text-align:right; }',

//        ' [state~=mobileView] %.panel% { height: auto; position:absolute; bottom:0; left:0; right:0; overflow:hidden; box-sizing:border-box; min-height: 30px;}',
//
//        ' [state~=mobileView] %.panelWrap%   { position:absolute; left:10px; right:10px; top:5px; bottom:10px; overflow:visible; min-height: 100%;}',
//        ' [state~=mobileView] h6             { min-height:100%; }',
//
//        ' [state~=mobileView] %description%  { display:none; }',
//        ' [state~=mobileView] %link%         { display:none; }',
        ' [state~=noLink] %link%             { display: none; }',

        ' [state~=noLink] %.panelWrap%     { bottom:[paddingSize];}',

        ':hover %zoom% { filter: alpha(opacity=100); opacity: 1; [trans] }'
    ]);

});