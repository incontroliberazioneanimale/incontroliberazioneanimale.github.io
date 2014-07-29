define.skin('wysiwyg.viewer.skins.menubutton.SeparateLinesMenuButtonSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_1"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txts",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "pad",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "1px"
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "brdh",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "brds",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_17"
	    },
	    {
	        "id": "bgs",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_18"
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s, background-color 0.4s ease 0s, border-color 0.4s ease 0s"
	    }
	]);

	def.html(
		'<div class="gapper">' +
		'<div skinPart="borderWrapper">' +
		'<div class="wrapper">' +
		'<div skinPart="bg">' +
		'<div skinPart="label">' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>');

	def.css([
		'{ display:inline-block; }',
		'%.gapper% { padding: 0 [pad]; }',
		'%borderWrapper% { border-bottom:solid [brw] [brd]; border-top:solid [brw] [brd]; }',
		'%.wrapper% { cursor:pointer; color:[txt]; background:transparent; [fnt] [trans] }',
		':first-child { padding-left: 0;}',
		':last-child  { padding-right: 0;}',
		':hover %.wrapper% { color: [txth]; border-color:[brdh]; [bgh] [trans] }',
		'[state=selected] %.wrapper% { color: [txts]; border-color:[brds]; [bgs] [trans] }'
	]);

});