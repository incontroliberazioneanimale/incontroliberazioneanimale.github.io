define.skin('wysiwyg.viewer.skins.menu.SeparateBasicMenuSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "repeaterButton": {
	        "skin": "wysiwyg.viewer.skins.menubutton.SeparateBasicMenuButtonSkin",
	        "styleGroup": "inherit"
	    },
	    "moreButton": {
	        "skin": "wysiwyg.viewer.skins.menubutton.SeparateBasicMenuButtonSkin",
	        "styleGroup": "inherit"
	    }
	});

	def.skinParams([
	    {
	        "id": "pad",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "5px"
	    }
	]);

	def.html(
		'<div skinPart="itemsContainer">' +
		'</div>' +
		'<div skinPart="moreButton">' +
		'</div>' +
		'<div skinPart="moreContainer">' +
		'</div>');

	def.css([
		'* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }',
		'%itemsContainer% { position:relative; overflow:hidden;}',
		'%moreContainer%{ position:absolute; z-index:99999;}',
		'%moreContainer% > * { margin-top: 10px; padding: 0 [pad] !important; }'
	]);

});