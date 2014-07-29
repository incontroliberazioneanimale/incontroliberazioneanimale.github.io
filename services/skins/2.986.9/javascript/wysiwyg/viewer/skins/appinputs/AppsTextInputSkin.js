define.skin('wysiwyg.viewer.skins.appinputs.AppsTextInputSkin', function(SkinDefinition) {

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
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultValue": "#ffffff",
	        "enableEdit": true
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#e3e3e3",
	        "enableEdit": true
	    },
	    {
	        "id": "brdh",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#a3d9f6",
	        "enableEdit": true
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#000000",
	        "enableEdit": true
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "1px",
	        "enableEdit": true
	    },
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_8"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "0px"
	    },
	    {
	        "id": "trns",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0.5s ease 0s, border 0.5s ease 0s, color 0.5s ease 0s"
	    },
	    {
	        "id": "box",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "box-sizing:border-box !important; -moz-box-sizing:border-box !important; -ms-box-sizing:border-box !important; -webkit-box-sizing:border-box !important;"
	    }
	]);

	def.html(
		'<label skinpart="label">' +
		'</label>' +
		'<input skinpart="input" type="text" />' +
		'<p skinpart="message">' +
		'</p>');

	def.css([
		'{ position:relative; min-height:25px; }',
		'%input% { [bg][rd][box][fnt][trns] color:[txt]; border:[brw] solid [brd]; padding:3px; margin:0;  min-width:100%; min-height:100%;}',
		'%input%:hover { border-color: [brdh]; [bgh]; }',
		'%input%:focus { border-color: [brdh]; [bgh]; }',
		'[state~="invalid"] %input% { border-color:#d00; background: url([tdr]error.png) no-repeat 100% 50%; [bg] padding-right:40px; }',
		'[state~="invalid"] %input%:hover + p {  opacity:1;  }',
		'[state~="invalid"] p             {  color:#d00; }',
		'p { [trns] opacity:0;[rd] display:inline-block; position:absolute; right:0; bottom:100%; width:140px; padding:10px; font-size:13px; line-height:16px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.6) }',
		'p:after { content:"▼"; position:absolute; bottom:-12px; right:10px; color:#fff; text-shadow:0 1px 3px rgba(0,0,0,0.6); [rd] }'
	]);

});