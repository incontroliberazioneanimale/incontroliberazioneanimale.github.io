define.skin('wysiwyg.viewer.skins.menubutton.SeparateBasicMenuButtonSkin', function(SkinDefinition) {

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
	        "defaultValue": "0"
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
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11"
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
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "10px"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "background-color 0.4s ease 0s"
	    },
	    {
	        "id": "trans2",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s"
	    },
	    {
	        "id": "trans3",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "border-color 0.4s ease 0s"
	    }
	]);

	def.html(
		'<div class="wrapper">' +
		'<div skinPart="borderWrapper">' +
		'<div skinPart="bg">' +
		'<div skinPart="label">' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>');

	def.css([
		'{ display:inline-block; padding: 0 [pad]; }',
		'%.wrapper% { cursor:pointer; [bg] [rd] [shd] [trans] }',
		'%borderWrapper% { border: solid [brw] [brd]; [rd] [trans3] }',
		'%label% { padding:0 10px; [fnt] color:[txt]; [trans2] }',
		':first-child { padding-left: 0;}',
		':last-child  { padding-right: 0;}',
		':hover %.wrapper% { [bgh] [trans] }',
		':hover %borderWrapper% { border-color:[brdh]; [trans3] }',
		':hover %label% { color:[txth]; [trans2] }',
		'[state=selected] %.wrapper% { [bgs] [trans] }',
		'[state=selected] %borderWrapper% { border-color:[brds]; [trans3] }',
		'[state=selected] %label% { color:[txts]; [trans2] }'
	]);

});