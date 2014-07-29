define.skin('wysiwyg.viewer.skins.audioplayer.Audio3DPlayer', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "background-color 0.3s ease 0s, color 0.3s ease 0s"
	    },
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_17"
	    },
	    {
	        "id": "bg2",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "mutators": [
	            "alpha",
	            [
	                75
	            ]
	        ],
	        "defaultParam": "bg"
	    },
	    {
	        "id": "bgh2",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "mutators": [
	            "alpha",
	            [
	                75
	            ]
	        ],
	        "defaultParam": "bgh"
	    },
	    {
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_18"
	    },
	    {
	        "id": "icon",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "iconh",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "3px"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
	    },
	    {
	        "id": "shd1",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "inset 0 1px 4px 2px rgba(0, 0, 0, 0.2);",
	        "noshow": true
	    },
	    {
	        "id": "shd2",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "inset 0px 1px 15px -3px rgba(255, 255, 255, 0.6), inset 0 3px 2px -2px rgba(255,255,255,0.7);",
	        "noshow": true
	    },
	    {
	        "id": "box",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "-webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;"
	    },
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
	    },
	    {
	        "id": "sel",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"
	    },
	    {
	        "id": "themeDir",
	        "type": "themeUrl",
	        "defaultTheme": "THEME_DIRECTORY",
	        "name": ""
	    }
	]);

	def.html(
		'<div skinPart="playButton" class="first">' +
		'<div class="second">' +
		'<div class="gradient">' +
		'</div>' +
		'</div>' +
		'<span>' +
		'&#9658;</span>' +
		'</div>' +
		'<div skinPart="pauseButton" class="first">' +
		'<div class="second">' +
		'<div class="gradient">' +
		'</div>' +
		'</div>' +
		'<span>' +
		'</span>' +
		'</div>' +
		'<div skinPart="stopButton">' +
		'<span>' +
		'</span>' +
		'</div>' +
		'<div skinPart="loadingAnimation">' +
		'<span>' +
		'</span>' +
		'</div>');

	def.css([
		'{ [trans][box][bg][rd][shd][sel]  text-align:center; cursor:pointer !important; }',
		'%.first% { [rd] background:transparent url([tdr]indented_bg_inverted2.png) center top repeat-x;}',
		'%.second% { [rd] background:transparent url([tdr]indented_bg_inverted2.png) center bottom repeat-x;}',
		':hover { [bgh]  color:[iconh]; }',
		':hover span { color:[iconh];  }',
		':hover %.gradient% { [bgh2] }',
		':active { [bgh][shd1] background-image: none; }',
		':active %.gradient% { opacity:0;}',
		'div { [pos] min-width: 15px; min-height: 15px;   min-width: 15px; min-height: 15px; } ',
		'span { [box] display:block; line-height:18px; height:14px; position:absolute; top:50%; text-align:center; font-size:16px; font-weight:bold; [trans]; }',
		'%playButton% span { display:block; text-align:center; width:100%; color:[icon]; margin-top:-8px; margin-left:1px; }',
		'%playButton% %.gradient% {[trans] [bg2][rd][shd2] position:absolute; top:3px; left:3px; right:3px; bottom:3px;}',
		'%pauseButton% { display:none;}',
		'%pauseButton% %.gradient% {[trans] [bg2][rd][shd2] position:absolute; top:3px; left:3px; right:3px; bottom:3px;}',
		'%pauseButton% span { border:4px solid [icon]; border-top:0; border-bottom:0; width:11px; left:50%; margin-left:-6px; margin-top:-6px; -moz-box-sizing:border-box;}',
		'%stopButton%  { display:none; }',
		'%loadingAnimation%{display:none;}',
		'[state~=loading] %playButton%  { display:none; }',
		'[state~=loading] %loadingAnimation%{width:100%; height:100%; display:block; background:transparent url([themeDir]gif_preloader.gif) center no-repeat}',
		'[state~=stopped] %playButton%  { display:block; }',
		'[state~=playing] %playButton%  { display:none; }',
		'[state~=playing] %pauseButton% { display:block; }'
	]);

});