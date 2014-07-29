define.skin('wysiwyg.viewer.skins.PayPalButtonSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "clr",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_1"
	    }
	]);

	def.html(
		'<div skinPart="buttonContainer">' +
		'</div>');

	def.css([
		'%text% { color: [clr]; position:absolute; top:48%; left:30%;}'
	]);

});