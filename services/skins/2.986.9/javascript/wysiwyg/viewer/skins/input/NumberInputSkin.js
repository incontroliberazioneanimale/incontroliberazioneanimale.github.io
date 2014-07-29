define.skin('wysiwyg.viewer.skins.input.NumberInputSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#000000",
	        "enableEdit": true
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#cccccc",
	        "enableEdit": true
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultValue": "#ffffff",
	        "enableEdit": true
	    }
	]);

	def.html(
		'<input skinPart="input" type="number" step="1"/>' +
		'<p skinpart="errorMessage"/>');

	def.css([
		'input  { position:relative; padding:5px; border:1px solid [brd]; color:[txt]; [bg] width:100%}'
	]);

});