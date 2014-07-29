define.skin('wysiwyg.viewer.skins.area.AppleArea', function(SkinDefinition) {

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
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "1px"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
	    },
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": " position:absolute; top:0; bottom:0; left:0; right:0;"
	    },
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    }
	]);

	def.html(
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>');

	def.css([
		'%bg% { [pos][bg][rd][shd] border:[brw] solid [brd]; background-image:url([tdr]apple_box.png); background-repeat: repeat-x; background-position: 0 0; }',
		'%inlineContent% { position:absolute; width:100%; height:100%; }'
	]);

});