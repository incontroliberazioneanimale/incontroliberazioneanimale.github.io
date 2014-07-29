define.skin('wysiwyg.viewer.skins.wixhomepage.HomePageLoginSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#0092CC",
	        "enableEdit": true
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#3D3D3D",
	        "enableEdit": true
	    },
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_1"
	    }
	]);

	def.css([
		'%.olo% { position:absolute; text-align:right; white-space:nowrap; text-overflow:ellipsis; overflow:hidden; [fnt]; color:[txt];  }',
		'%memberTitle% { top:0; right:0; }',
		'%actionTitle% { cursor:pointer; bottom:0; right:0;  }',
		'[state~="auth"] %actionTitle% { color:[txth]; }'
	]);

	def.html(
		'<div class="olo" skinPart="memberTitle">' +
		'welcome user</div>' +
		'<div class="olo" skinPart="actionTitle">' +
		'</div>');

});