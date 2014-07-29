define.skin('skins.core.RichTextImageSkin', function(SkinDefinition) {

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
            "id": "$fontTitle",
            "type": "cssFont",
            "defaultTheme": "fontSubTitle",
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
            "id": "$bgColor",
            "type": "cssBgColor",
            "defaultTheme": "areaBgColor",
            "name": ""
        },
        {
            "id": "bgColor",
            "type": "color",
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
            "id": "itemSpacing",
            "type": "CSSString",
            "defaultTheme": "itemSpacing",
            "name": ""
        },
        {
            "id": "moreFontColor",
            "type": "color",
            "defaultTheme": "areaBgColor",
            "name": ""
        },
        {
            "id": "$moreBgColor",
            "type": "cssBgColor",
            "defaultTheme": "textColor",
            "name": ""
        }
    ]);

    def.html('<div class="bg">' + '</div>' + '<div class="content">' + '<div skinPart="image" class="image">' + '</div>' + '<div skinPart="text" class="text">' + '</div>' + '</div>');

    def.css([
        '{position:relative; margin-bottom:[itemSpacing]; [$borderRadius] border:[border];}', '> .bg{position:absolute; [$borderRadius] [$bgColor] left:0; width:100%; height:100%;}', '> .content{position:relative;}', '> .content> .image{float:left; [$borderRadius] padding:0!important; margin:0!important;}', '> .content> .image img{[$borderRadius] padding:0!important; margin:0!important;}', '> .content> .text{[$font] color:[fontColor]; padding:0 1em 1em;}', '[state=imageOnLeft]> .content> .image { float: left; }', '[state=imageOnRight]> .content> .image { float: right; }', '[state=noImage]> .content> .image { display:none }'
    ]);

});