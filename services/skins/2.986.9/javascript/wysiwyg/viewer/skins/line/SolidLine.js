define.skin('wysiwyg.viewer.skins.line.SolidLine', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

	def.skinParams([
	    {
	        "id": "lnw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "2px"
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    }
	]);

	def.html(
		'<div skinPart="line">' +
		'</div>');

	def.css([
		'{  border-bottom:[lnw] solid [brd]; height:0 !important; min-height:0 !important;}'
	]);

});