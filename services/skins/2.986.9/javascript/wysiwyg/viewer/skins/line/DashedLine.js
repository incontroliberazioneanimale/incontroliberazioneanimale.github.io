define.skin('wysiwyg.viewer.skins.line.DashedLine', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.statics({
	    "_maxHeight": 2
	});

    def.inherits('core.managers.skin.BaseSkin2');

	def.skinParams([
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "lnw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "2px"
	    }
	]);

	def.html(
		'<div skinPart="line"></div>');

	def.css([
		'{  border-bottom:[lnw] dashed [brd];  height:0 !important; min-height:0 !important;}'
	]);

});