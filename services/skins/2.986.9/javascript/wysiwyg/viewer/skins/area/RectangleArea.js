define.skin('wysiwyg.viewer.skins.area.RectangleArea', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

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
		'%inlineContent% {[pos]}'
	]);

});