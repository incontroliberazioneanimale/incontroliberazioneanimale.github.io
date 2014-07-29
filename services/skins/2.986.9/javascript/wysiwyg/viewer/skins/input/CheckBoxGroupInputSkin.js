define.skin('wysiwyg.viewer.skins.input.CheckBoxGroupInputSkin', function(SkinDefinition) {

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
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
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
	        "defaultValue": "1px",
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
	        "defaultValue": "3px",
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
		'<fieldset skinpart="collection">' +
		'</fieldset>' +
		'<p skinpart="errorMessage">' +
		'</p>');

	def.css([
		'{ position:relative;}',
		'fieldset input[type="checkbox"]         { [app][box][rd][shd] width:18px; height:18px; border:[brw] solid [brd]; background:[bg] url([tdr]vi.png) no-repeat -999px -999px; margin:0px; cursor:pointer; }',
		'fieldset input[type="checkbox"]:checked { background-position: 50% 50%; }',
		'%collection% { [fnt] color:[txt] }',
		'p       { [trns][rd] opacity:0; position:absolute; right:0; bottom:18px; width:140px; padding:10px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.6) }',
		'p:after { content:"?"; position:absolute; bottom:-12px; right:10px; color:#fff; text-shadow:0 1px 3px rgba(0,0,0,0.6);  }',
		'[state~="invalid"] :hover + p {  opacity:1; color:#d00; }'
	]);

});