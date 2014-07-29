define.skin('wysiwyg.viewer.skins.area.RibbonAreaSkin', function(SkinDefinition) {

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
	        "id": "elm",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15",
	        "lang": "foldR"
	    },
	    {
	        "id": "elm2",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15",
	        "lang": "foldL"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "6px"
	    },
	    {
	        "id": "els",
	        "type": Constants.SkinParamTypes.SIZE,
	        "mutators": [
	            "increase",
	            10
	        ],
	        "defaultValue": "0",
	        "lang": "fold"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
	    }
	]);

	def.html(
		'<div class="fl ribbon">' +
		'</div>' +
		'<div class="fr ribbon">' +
		'</div>' +
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>');

	def.css([
		'%bg% { [bg][shd] border:[brw] solid [brd]; position:absolute; top:0; bottom:[els]; left:0; right:0px; }',
		'%.ribbon%{ position:absolute; bottom:-[els]; height:0; width:0; border:[els] solid transparent; }',
		'%.fr% { border-top-color:[elm]; border-left-width:0; right:0; }',
		'%.fl% { border-top-color:[elm2]; border-right-width:0; left:0;}',
		'%inlineContent% {  position:absolute; top:0px; left:0px; bottom:[els]; right:0px; }'
	]);

});