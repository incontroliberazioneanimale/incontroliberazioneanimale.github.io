define.skin('wysiwyg.viewer.skins.page.TransparentPageSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
	    }
	]);

	def.html(
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>');

	def.css([
        '%bg% {[pos]}',
        '[state~="mobileView"] %bg% {left:10px; right:10px}',
        '%inlineContent% {[pos]}'
	]);

});