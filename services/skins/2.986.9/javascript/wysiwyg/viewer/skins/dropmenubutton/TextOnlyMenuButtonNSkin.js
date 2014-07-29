define.skin('wysiwyg.viewer.skins.dropmenubutton.TextOnlyMenuButtonNSkin', function(SkinDefinition) {

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
	        "defaultTheme": "color_14"
	    },
	    {
	        "id": "txts",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_14"
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
		'<p skinPart="label">' +
		'</p>' +
		'</div>' +
		'</div>');

	def.css([
		'{ display:inline-block; cursor:pointer; [fnt]  }',
		'%.gapper% { padding: 0 [pad]; }',
		'%label% { display:inline-block; padding:0 10px; color:[txt]; [trans]}',
		'[container=drop] { width:100%; display:block; }',
		'[container=drop] %label% { padding:0 0.5em; }',
		'[state=over] %label% { color:[txth]; [trans] }',
		'[state=selected] %label%{ color:[txts]; [trans] }'
	]);

});