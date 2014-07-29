define.skin('skins.core.PhotoGalleryFullScreenDefaultSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        "imageSkinClassName": "mobile.core.skins.ImageSkin"
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
            "id": "padding",
            "type": "CSSString",
            "defaultTheme": "padding1",
            "name": ""
        },
        {
            "id": "$overlayBgColor",
            "type": "cssBgColor",
            "defaultValue": "0,0,0,0.8",
            "name": ""
        },
        {
            "id": "overlayFontColor",
            "type": "color",
            "defaultValue": "255,255,255,1",
            "name": ""
        },
        {
            "id": "$fontTitle",
            "type": "cssFont",
            "defaultTheme": "fontSubTitle",
            "name": ""
        },
        {
            "id": "$fontDesc",
            "type": "cssFont",
            "defaultTheme": "fontText",
            "name": ""
        }
    ]);

    def.html('<div skinPart="imagesContainer"></div>'
        + '<div class="nav">'
        + '<a skinPart="nextButton">'
        + '</a>'
        + '<a skinPart="prevButton">'
        + '</a>'
        + '</div>'
        + '<div skinPart="controls" class="hidden">'
        + '<div class="opac">'
        + '</div>'
        + '<div class="holder">'
        + '<div class="hide">'
        + '<a >'
        + '<img style="width:5.5em; height:2.5em;" skinPart="exitButton" />'
        + '</a>'
        + '</div>'
        + '<div class="meta">'
        + '<h2 skinPart="title">'
        + '</h2>'
        + '<div skinPart="description">'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>');

    def.css([
        '{width: 100%; height: 100%; overflow:hidden;}',
        '%imagesContainer% {position:absolute;}',
        '%imagesContainer% > div {margin:0; padding:0; position:absolute!important;}',
        '%.nav% {position:relative; height:100%;}',
        '%.nav% a {position:absolute; top:0; bottom:0; width:50px}',
        '%nextButton% {right:0; background:url([themeDir]gallery-arrow-right.png) no-repeat center;}',
        '%prevButton% {left:0; background:url([themeDir]gallery-arrow-left.png) no-repeat center;}',
        '%controls% {position:absolute; top:0; width:100%; height:100%;}',
        '%.opac%{position:absolute; width:100%; height:100%; [$overlayBgColor]}',
        '%.holder% {position:relative; padding:[padding];}',
        '%.meta% {color:[overlayFontColor];}',
        '%title% {[$fontTitle] }',
        '%description% {[$fontDesc]}'
    ]);

});