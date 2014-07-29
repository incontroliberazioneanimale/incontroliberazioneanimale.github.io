define.skin('wysiwyg.viewer.skins.button.LoginButtonSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_14"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_7"
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s"
	    }
	]);

	def.html(
		'<DIV skinPart="container">' +
		'<DIV class="memberLine">' +
		'<DIV skinPart="memberTitle">' +
		'</DIV>' +
		'</DIV>' +
		'<DIV class="actionLine">' +
		'   <DIV skinPart="actionTitle">' +
		'</DIV>' +
		'</DIV>' +
		'</DIV>');

	def.css([
		'{ overflow:hidden; }',
		'%container% {display:inline-block; [fnt] color:[txt]; }',
		'%.memberLine% { display:inline-block;}',
		'%memberTitle% {display: inline-block; cursor:pointer;  white-space:nowrap; text-overflow: ellipsis; overflow: hidden;  text-align: center; [trans]}',
		'[state~="auth"]    %.memberLine%{ display:inline-block }',
		'[state~="no_auth"] %.memberLine%{ display:none; }',
		'%.actionLine% { display:inline-block; }',
		'%actionTitle%:hover  { color:[txth]; }',
		'%actionTitle% { display:inline-block; cursor:pointer;  white-space:nowrap; text-overflow: ellipsis; overflow: hidden; text-align: center; [trans] }'
	]);

});