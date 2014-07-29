define.skin('wysiwyg.viewer.skins.LinkBarNoBGSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "imageItem": {
	        "skin": "wysiwyg.viewer.skins.displayers.LinkBarItemNoBGSkin",
	        "styleGroup": "displayer"
	    }
	});

	def.html(
		'<div skinPart="itemsContainer">' +
		'</div>');

	def.css([
		'%itemsContainer% { position:absolute; width:100%; height:100%}'
	]);

});