define.skin('wysiwyg.viewer.skins.line.VerticalSolidLine', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

	def.skinParams([
	    {
	        "id": "lnw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "3px"
	    },
	    {
	        "id": "mrg",
	        "type": Constants.SkinParamTypes.SIZE,
	        "mutators": [
	            "multiply",
	            -0.5
	        ],
	        "defaultParam": "lnw"
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
		'{ border-left:[lnw] solid [brd]; margin-left:[mrg]; width:0 !important; min-width:0 !important;}'
	]);

});