define.skin('wysiwyg.viewer.skins.menu.TextOnlyMenuSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "repeaterButton": {
	        "skin": "wysiwyg.viewer.skins.menubutton.TextOnlyMenuButtonSkin",
	        "styleGroup": "inherit"
	    },
	    "moreButton": {
	        "skin": "wysiwyg.viewer.skins.menubutton.TextOnlyMenuButtonSkin",
	        "styleGroup": "inherit"
	    }
	});

	def.html(
		'<div skinPart="itemsContainer">' +
		'</div>' +
		'<div skinPart="moreButton">' +
		'</div>' +
		'<div skinPart="moreContainer">' +
		'</div>');

	def.css([
		'%itemsContainer% { position:relative; overflow:hidden;}',
		'%moreContainer%{padding: 10px; position: absolute; z-index: 99999;}'
	]);

});