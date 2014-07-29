define.skin('wysiwyg.viewer.skins.area.LiftedShadowArea', function(SkinDefinition) {

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
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "1px"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
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
		'<div class="left shd">' +
		'</div>' +
		'<div class="right shd">' +
		'</div>' +
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>');

	def.css([
		'%bg% {[pos][bg][rd] border:[brw] solid [brd];}',
		'%inlineContent% {[pos]}',
		'%.shd%  { position:absolute; bottom:-26px; width:165px; height:26px; background:url([tdr]liftedshadow_medium.png)no-repeat; }',
		'%.left% { left:-20px;  background-position:0 0; }',
		'%.right%{ right:-20px; background-position:100% 0; }'
	]);

});