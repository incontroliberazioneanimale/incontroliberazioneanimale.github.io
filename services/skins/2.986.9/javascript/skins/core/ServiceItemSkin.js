define.skin('skins.core.ServiceItemSkin', function(SkinDefinition) {

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

    def.html('<div class="bg">' + '</div>' + '<div class="btnIcon" skinPart="icon">' + '</div>' + '<div skinPart="allText" class="info">' + '<div skinPart="label" class="label">' + '</div>' + '<div class="richTextContainer" skinPart="description">' + '</div>' + '</div>' + '<div class="readMore">' + '<div class="topCornerFix">' + '</div>' + '<div skinPart="readMore">' + '</div>' + '</div>');

    def.css([
        '{position:relative; padding:0.5em;-moz-transition: all 0.3s; -webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;min-height:7.5em;max-height:1000%; overflow:hidden; margin-bottom:[itemSpacing]; border:[border]; [$borderRadius]}', '> .bg {position:absolute; left:0; top:0px; width:100%; height:100%; [$bgColor] background-image:url([themeDir]inlineShadow.png); background-repeat:repeat-x; [$borderRadius]}', '> .btnIcon {z-index:1; position:relative; float:left; overflow:hidden; vertical-align:top; margin-right:0.5em; width:6em; height:6em;}', '> .btnIcon img {[$borderRadius] padding:0!important; margin:0!important;}', '> .info {position:relative; [$borderRadius] min-height:7em; margin-top:0em; margin-bottom:1em}', '> .info > .label {color:[fontColor]; [$fontTitle]; margin-bottom: 0.1em;}', '> .info > .richTextContainer {display:block; [$font] color:[fontColor]; word-wrap: break-word;}', '> .info > .richTextContainer p {[$font] color:[fontColor]! important;}', '> .info > .richTextContainer span {[$font] color:[fontColor]! important; }', '> .readMore {position:absolute; left:0; bottom:0; width:100%; cursor:pointer; [$moreBgColor] [$borderRadius]}', '> .readMore> div[skinPart="readMore"]{position:relative; [$font] font-weight:bold; text-align:center; color:[moreFontColor]; padding:0.25em 0;}', '> .readMore> div.topCornerFix{position:absolute; [$moreBgColor]; height:50%; width:100%; border-top:2px solid [bgColor];}', '[state=cutClosed] {max-height:7.5em;height:7.5em;}', '[state=cutOpened] {padding-bottom:1.5em;}', '[state=uncut] .info { min-height:0!important;}', '[state=uncut] { min-height:0!important;}', '[state=uncut] .readMore {display:none;}'
    ]);

});