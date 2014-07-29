define.skin('wysiwyg.viewer.skins.input.RadioGroupInputSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_7"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "#ffffff",
	        "enableEdit": true
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "#999999",
	        "enableEdit": true
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "2px",
	        "enableEdit": true
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 0px 0px rgba(0, 0, 0, 0.0)",
	        "enableEdit": true
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "50%",
	        "enableEdit": true
	    },
	    {
	        "id": "trns",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0.5s ease 0s, border 0.5s ease 0s, color 0.5s ease 0s"
	    },
	    {
	        "id": "app",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "-webkit-appearance:none !important; -moz-appearance:none !important; appearance:none !important;"
	    },
	    {
	        "id": "box",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -webkit-box-sizing:border-box;"
	    }
	]);

	def.html(
		'<div>' +
		'<fieldset skinpart="collection">' +
		'</fieldset>' +
		'<p skinpart="errorMessage">' +
		'</p>' +
		'</div>');

	def.css([
		'{ position:relative;}',
		'fieldset input[type="radio"]               { width:16px; height:16px; [app][box][rd][shd] border:[brw] solid [brd]; background-color:[bg]; margin:0px; cursor:pointer; position:relative; }',
		'fieldset input[type="radio"]:checked:after { position:absolute; top:-7px; color:[txt]; content:"●"; text-align:center; font-size: 19px;}',
		'%collection% { [fnt] color:[txt] }',
		'p       { [trns][rd] opacity:0; position:absolute; right:0; bottom:18px; width:140px; padding:10px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.6) }',
		'p:after { content:"▼"; position:absolute; bottom:-12px; right:10px; color:#fff; text-shadow:0 1px 3px rgba(0,0,0,0.6);  }',
		'[state~="invalid"] :hover + p {  opacity:1; color:#d00; }'
	]);

});