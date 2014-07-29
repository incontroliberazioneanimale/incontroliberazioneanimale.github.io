define.skin('skins.core.HeaderSkin', function(SkinDefinition) {

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
            "id": "headerSpacing",
            "type": "number",
            "defaultTheme": "headerSpacing",
            "name": ""
        },
        {
            "id": "$bgColor",
            "type": "cssBgColor",
            "defaultTheme": "headerBgColor",
            "name": ""
        },
        {
            "id": "$font",
            "type": "cssFont",
            "defaultTheme": "fontHeader",
            "name": ""
        },
        {
            "id": "fontColor",
            "type": "color",
            "defaultTheme": "headerTextColor",
            "name": ""
        }
    ]);

    def.html('<div class="bg">' + '</div>' + '<div skinPart="image" class="mediumHeaderImage">' + '</div>' + '<h1 skinPart="title">' + '</h1>');

    def.css([
        '{position:relative; margin-top:[headerSpacing]; overflow:hidden;  padding:1em 0px 2em; word-wrap:break-word;}', ' .bg{position:absolute; width:100%; height:100%; left:0; top:0; [$bgColor] background-image:url([themeDir]headerBg.png); background-position:bottom; background-repeat:repeat;}', '> h1 {position:relative; display:inline; color:[fontColor]; [$font] word-wrap:break-word;}', '[state="showImage"] {text-align: left;}', '[state="showImage"]> [skinPart="image"] {margin:0 1em;}', '[state="hideImage"] {text-align: center;}', '[state="hideImage"]> [skinPart="image"] {display:none}', '> [skinPart="image"] {position:relative; margin:0 1em; float:left;}', '> [skinPart="image"].smallHeaderImage {width:3em; height:3em;}', '> [skinPart="image"].mediumHeaderImage {width:5em; height:5em;}', '> [skinPart="image"].largeHeaderImage {width:7em; height:7em;}'
    ]);

});