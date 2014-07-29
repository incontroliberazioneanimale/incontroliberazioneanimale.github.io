define.skin('wysiwyg.viewer.skins.page.BasicPageSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position: absolute; top: 0; bottom: 0; left: 0; right: 0;",
	        "noshow": true
	    }
	]);

	def.html(
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>');

	def.css([
        '%bg% { overflow: hidden; [pos][bg] }',
        '[state~="mobileView"] %bg% {left:10px; right:10px}',
        '%inlineContent% {[pos] bottom:20px;}'
	]);

});