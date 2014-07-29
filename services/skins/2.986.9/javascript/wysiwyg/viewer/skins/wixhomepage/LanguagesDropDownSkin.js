define.skin('wysiwyg.viewer.skins.wixhomepage.LanguagesDropDownSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "dropShadow",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "2px 2px 7px 0px #3f3f3f",
	        "noshow": true
	    },
	    {
	        "id": "trans1",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "max-height 0.5s ease-out 0s"
	    },
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_1"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#3D3D3D",
	        "enableEdit": true
	    }
	]);

	def.html(
		'<ul skinpart="options">' +
		'</ul>' +
		'<p skinpart="select">' +
		'...</p>');

	def.css([
		' { display:inline-block; text-align:left; cursor: pointer; color:[txt]; [fnt] }',
		' %options% li { padding:0 4px; line-height:28px; [rd] } ',
		' %options% li:hover { background:#09f; color:#fff; } ',
		' %options% li.selected { display:none; } ',
		' %options% { position:absolute; top:0; background:#fff; border:solid 1px #cfcfcf; [rd] [dropShadow] padding:39px 5px 1px 5px; top:0; height:28px; max-height:28px; width:100%; overflow:hidden; -ms-opacity:0; opacity:0; [trans1] }',
		':hover %options% { max-height:1000px; height:auto; -ms-opacity:1; opacity:1; }',
		' %options%:after { content:""; position:absolute; top:31px; right:5px; left:5px; height:2px; border-top: solid 1px #808080; } ',
		' %select% { line-height:23px; padding:4px 12px 4px 30px; width:100%; height:28px; box-sizing:border-box; -moz-box-sizing: border-box;overflow:hidden; white-space:nowrap; text-overflow:ellipsis; position:absolute; top:2px; left:2px; } ',
		' %select%:before { content:""; position:absolute; width:20px; height:20px; top:4px; left:5px; background:transparent url([tdr]langs_dropdown_bg.png) -6px -5px no-repeat; } ',
		' %select%:after { content:""; position:absolute; width:11px; height:10px; top:9px; right:9px; background:transparent url([tdr]langs_dropdown_bg.png) -114px -10px no-repeat; } '
	]);

});