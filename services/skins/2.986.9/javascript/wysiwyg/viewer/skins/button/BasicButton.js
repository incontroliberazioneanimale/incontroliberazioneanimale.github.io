define.skin('wysiwyg.viewer.skins.button.BasicButton', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
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
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_17"
	    },
	    {
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_18"
	    },
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "0"
	    },
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_5"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
	    },
	    {
	        "id": "trans1",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "border-color 0.4s ease 0s ,background-color 0.4s ease 0s"
	    },
	    {
	        "id": "trans2",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s"
	    },
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
	    }
	]);

	def.html(
		'<a skinPart="link">' +
		'<span skinPart="label">' +
		'</span>' +
		'</a>');

	def.css([
		'%link% { [rd][pos][bg][trans1] [shd] border:solid [brd] [brw]; cursor:pointer !important; }',
		'%label% { [fnt][trans2] color:[txt]; white-space:nowrap; margin:-[brw] [brw] 0 [brw]; display:inline-block; position:relative;}',
		':hover %link% { [bgh] border-color:[brdh]; [trans1] }',
		':hover %label% { color:[txth]; [trans2] }'
	]);

});