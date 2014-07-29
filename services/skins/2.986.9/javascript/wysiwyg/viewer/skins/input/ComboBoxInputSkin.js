define.skin('wysiwyg.viewer.skins.input.ComboBoxInputSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11",
	        "defaultValue": "#fff",
	        "enableEdit": true
	    },
	    {
	        "id": "bg2",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_14",
	        "defaultValue": "#aaa",
	        "enableEdit": true
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_13",
	        "defaultValue": "#1ab1ab",
	        "enableEdit": true
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15",
	        "defaultValue": "#333",
	        "enableEdit": true
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "2px"
	    },
	    {
	        "id": "apr",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "-webkit-appearance:none; -moz-appearance:none; appearance:none;"
	    },
	    {
	        "id": "box",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "box-sizing:border-box !important; -moz-box-sizing:border-box !important; -ms-box-sizing:border-box !important; -webkit-box-sizing:border-box !important;"
	    }
	]);

	def.html(
		'<select skinpart="collection">' +
		'</select>' +
		'<p skinpart="errorMessage">' +
		'some error ms</p>');

	def.css([
		'{position:relative; display:inline-block; padding:0; margin:0;}',
		'select { color:[txt]; border:solid [brw] [brd]; padding:5px 40px 5px 5px; [rd][box][apr][bg] position:relative; cursor:pointer; }',
		'option { border:solid [brw] [brd]; [bg] padding:5px; }',
		':after { content:"▼"; position:absolute; top:2px; bottom:2px; right:0; width:35px; pointer-events:none; [rd][box][bg2] border:[brw] solid [brd];  color:#fff;text-align:center; font-size:10px; line-height:30px; text-shadow:inset 0 1px 2px rgba(0,0,0,0.6);  cursor:pointer !important; border-bottom-left-radius:0; border-top-left-radius:0; }',
		'[state~="invalid"] select { border-color:#d00; color:#d00; }',
		'[state~="invalid"] :after { content:"▼"; position:absolute; top:2px; bottom:2px; right:0; width:35px; pointer-events:none; [rd][box][bg2] border:#d00 solid [brd];  color:#d00;text-align:center; font-size:10px; line-height:30px; text-shadow:inset 0 1px 2px rgba(0,0,0,0.6);  cursor:pointer !important; border-bottom-left-radius:0; border-top-left-radius:0; }',
		'[state~="invalid"] :hover + p {  opacity:1; color:#d00; }',
		'p { [rd] opacity:0; display:inline-block; position:absolute; left:0; bottom:100%; width:140px; padding:10px; font-size:13px; line-height:16px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.6) }',
		'p:after { content:"▼"; position:absolute; bottom:-12px; left:10px; color:#fff; text-shadow:0 1px 3px rgba(0,0,0,0.6); [rd] }'
	]);

});