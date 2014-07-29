define.skin('wysiwyg.viewer.skins.button.AdminLoginButtonSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_1"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_9"
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s"
	    },
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px;"
	    }
	]);

	def.html(
		'<a skinPart="link">' +
		'<span skinPart="label">' +
		'</span>' +
		'</a>');

	def.css([
		'%link%    { [pos] }',
		'%label%   { cursor:pointer; [fnt] color:[txt]; white-space:nowrap; [trans] }',
		':hover %label%   { color:[txth]; [trans] }'
	]);

});