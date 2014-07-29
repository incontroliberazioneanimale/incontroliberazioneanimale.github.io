define.skin('wysiwyg.viewer.skins.input.ComboBoxInputSkinNoValidation', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultValue": "#ffffff",
	        "enableEdit": true
	    },
	    {
	        "id": "bg2",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultValue": "#aaaaaa",
	        "enableEdit": true
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#888888",
	        "enableEdit": true
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#888888",
	        "enableEdit": true
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "2px"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "arb",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "content:\"▼\";  position:absolute;"
	    },
	    {
	        "id": "app",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "-webkit-appearance:none; -moz-appearance:button !important; -ms-appearance:none !important; appearance:none;"
	    }
	]);

	def.html(
		'<select skinpart="collection">' +
		'</select>' +
		'<div class="err">' +
		'</div>');

	def.css([
		'{ position:relative; display:inline-block !important; }',
		'select { [rd][app][bg] color:[txt]; border:solid [brw] [brd]; padding:5px 18px 5px 5px; margin:0 !important; cursor:pointer; position:relative; min-width:100%; min-height:100%;}',
		':after {[arb][rd][bg2] top:1px; bottom:1px; right:1px; width:35px; pointer-events:none; color:#fff;text-align:center; font:10px; line-height:30px; border-bottom-left-radius:0; border-top-left-radius:0;}',
		'.err { position:absolute; top:50%; left:0; height:1px;width:1px;}',
		'[state~="invalid"] .err:before { color:#fff; background:#d00; border:2px solid #fff; border-radius:50%; box-shadow:0 1px 3px rgba(0, 0, 0, 0.5); text-align:center; font-size:12px;content:"!"; position:absolute; top:5px; left:-15px; width:20px; height:20px; line-height:20px !important;}',
		'[state~="invalid"] .err:after { color:#fff; font-size:10px; text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);content:"►"; position:absolute; top:10px; left:8px;}'
	]);

});