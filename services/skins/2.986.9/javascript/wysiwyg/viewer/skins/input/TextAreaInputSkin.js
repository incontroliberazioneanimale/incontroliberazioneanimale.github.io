define.skin('wysiwyg.viewer.skins.input.TextAreaInputSkin', function(SkinDefinition) {

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
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultValue": "#ffffff",
	        "enableEdit": true
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "#e3e3e3",
	        "enableEdit": true
	    },
	    {
	        "id": "brdh",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "#a3d9f6",
	        "enableEdit": true
	    },
	    {
	        "id": "brdf",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "#19a0e9",
	        "enableEdit": true
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "0px"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "1px"
	    },
	    {
	        "id": "box",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "-webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;"
	    }
	]);

	def.html(
		'<textarea skinPart="textarea">' +
		'</textarea>' +
		'<p skinPart="errorMessage">' +
		'</p>');

	def.css([
		'{ position:relative; }',
		'textarea { [box][bg][rd] position:relative; resize:none; width:100%; min-height:100px; height:100%; overflow:auto; font-size:14px; border:[brw] solid [brd]; color:[txt];}',
		'textarea:hover {border-color: [brdh]; }',
		'textarea:focus {border-color: [brdf]; }',
		'p { display:none; top:0;bottom:50%;left:0;right:100%; position:absolute; margin:0; padding:0; }',
		'[state~="invalid"] p { display:block; }',
		'[state~="invalid"] p:before { content:"!"; visibility:visible; position:absolute; text-align:center; bottom:50%; left:-20px; width:20px; height:20px; line-height:20px !important; margin-bottom:-11px; color:#fff; background:#f00; border:2px solid #fff; border-radius:50%; box-shadow:0 1px 3px rgba(0, 0, 0, 0.5); font-size:12px; font-weight:bold; }',
		'[state~="invalid"] p:after  { content:"►"; visibility:visible;  position:absolute; bottom:50%; left:3px; margin:0 0 -7px -2px; color:#fff; text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5); font-size:10px; }',
		'[state~="invalid"] textarea:focus + p:before { content:""; visibility:hidden; }',
		'[state~="invalid"] textarea:focus + p:after  { content:""; visibility:hidden; }'
	]);

});