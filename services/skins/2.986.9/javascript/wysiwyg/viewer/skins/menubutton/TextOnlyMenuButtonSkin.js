define.skin('wysiwyg.viewer.skins.menubutton.TextOnlyMenuButtonSkin', function(SkinDefinition) {

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
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s"
	    }
	]);

	def.html(
		'<div class="gapper">' +
		'<div skinPart="bg">' +
		'<div skinPart="label">' +
		'</div>' +
		'</div>' +
		'</div>');

	def.css([
		'{ display:inline-block; cursor:pointer; color:[txt]; [fnt] [trans] }',
		'%.gapper% { padding: 0 [pad]; }',
		'%label% { padding:0 10px; }',
		':hover  { color: [txth]; [trans] }',
		'[state=selected] { color: [txts]; [trans] }'
	]);

});