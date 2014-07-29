define.skin('wysiwyg.viewer.skins.AppPartSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {
            "id": "bg",
            "type": Constants.SkinParamTypes.BG_COLOR,
            "mutators": [
                "alpha",
                25
            ],
            "defaultValue": "#000"
        },
        {
            "id": "rd",
            "type": Constants.SkinParamTypes.BORDER_RADIUS,
            "defaultValue": "7px"
        },
        {
            "id": "pos",
            "type": Constants.SkinParamTypes.OTHER,
            "defaultValue": "position:absolute; top:0; right:0; bottom:0; left:0; "
        },
        {
            "id": "videoThumbBg",
            "type": Constants.SkinParamTypes.BG_COLOR,
            "mutators": [
                "alpha",
                40
            ],
            "defaultValue": "#000",
            "noshow": true
        },
        {
            "id": "videoThumbColor",
            "type": Constants.SkinParamTypes.COLOR_ALPHA,
            "mutators": [
                "alpha",
                70
            ],
            "defaultValue": "#FFFFFF",
            "noshow": true
        },
        {
            "id": "videoThumbCorners",
            "type": Constants.SkinParamTypes.BORDER_RADIUS,
            "defaultValue": "7px",
            "noshow": true
        },
        {
            "id": "themeDir",
            "type": "themeUrl",
            "defaultTheme": "THEME_DIRECTORY",
            "name": ""
        }
    ]);

    def.html(
        '<div skinPart="inlineContent"></div>' +
            '<div skinPart="error">An error has occurred</div>' +
            '<div skinPart="loading">' +
            '<p></p>' +
        '</div>');

    def.css([
        '[state~="content"] %error% { display:none;}',
        '[state~="content"] %loading% { display:none;}',
        '[state~="error"] %inlineContent% { display:none;}',
        '[state~="error"] %loading% { display:none;}',
        '[state~="loading"] %loading% { [pos] }',
        '[state~="rendering"] %loading% { [pos]  }',
        '[state~="loading"] %loading% p { color:#fff; font-size:16px; font-weight:bold; text-align:center; line-height:50px; letter-spacing:1px; height:100px; width:200px; position:absolute; top:50%; margin-top:-50px; left:50%; margin-left:-100px; [rd]background:transparent url([themeDir]wixapps_preloader.gif) center 42px no-repeat }',
        '[state~="loading"] %error% { display:none;}',
        '[state~="rendering"] %inlineContent%  { opacity: 0;}',
        '[state~="rendering"] %error% { display: none;}',
        '[state~="rendering"] %loading% p { display: none;}',
        '[state~="content"] %inlineContent% { opacity: 1;}',
        '%inlineContent% > div { width: 100%; }',
        ' .singleLine { white-space:nowrap; display:block; overflow:hidden; text-overflow:ellipsis; word-wrap:normal; }',
        ' .videoIndicator > div:before {content:""; position:absolute; top:50%; left:50%; margin-top:-15px; margin-left:-20px; width:40px; height:30px;[videoThumbBg][videoThumbCorners]  }',
        ' .videoIndicator > div:after {content:""; position:absolute; top:50%; left:50%; width:0; height:0; margin-top:-10px; margin-left:-9px; border:10px solid transparent; border-left:18px solid [videoThumbColor] }',
        ' a.wixAppsLink img {cursor: pointer;}',
        '[state~=shrink0] * { flex-shrink: 0; }'
    ]);

});