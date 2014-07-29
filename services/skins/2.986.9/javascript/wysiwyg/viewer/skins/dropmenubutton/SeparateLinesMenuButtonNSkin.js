define.skin('wysiwyg.viewer.skins.dropmenubutton.SeparateLinesMenuButtonNSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_1"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txts",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "pad",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "1px"
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "brdh",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "brds",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_17"
	    },
	    {
	        "id": "bgs",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_18"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "0px"
	    },
	    {
	        "id": "rdTop",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "mutators": [
	            "square",
	            [
	                "bl",
	                "br"
	            ]
	        ],
	        "defaultParam": "rd"
	    },
	    {
	        "id": "rdBottom",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "mutators": [
	            "square",
	            [
	                "tl",
	                "tr"
	            ]
	        ],
	        "defaultParam": "rd"
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "background-color 0.4s ease 0s, border-color 0.4s ease 0s"
	    },
	    {
	        "id": "trans2",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s"
	    }
	]);

	def.html(
		'<div class="gapper">' +
		'<div skinPart="borderWrapper">' +
		'<div skinPart="bg">' +
		'<p skinPart="label">' +
		'</p>' +
		'</div>' +
		'</div>' +
		'</div>');

	def.css([
		'{ display:inline-block; }',
		'%.gapper% { padding: 0 [pad]; }',
		'%borderWrapper% { border-bottom:solid [brw] [brd]; border-top:solid [brw] [brd]; cursor:pointer; color:[txt]; background:transparent; [fnt] [trans] }',
		'%label% { display:inline-block; color:[txt]; [fnt] [trans2] }',
		'[listposition=left] %.gapper% { padding-left:0; }',
		'[listposition=right]  %.gapper% { padding-right:0; }',
		'[listposition=lonely] %.gapper% { padding:0; }',
		'[container=drop] { width:100%; display:block; }',
		'[container=drop] %.gapper% { padding:0; }',
		'[container=drop] %borderWrapper% { border:none; }',
		'[container=drop] %label% { padding:0 0.5em; }',
		'[listposition=dropLonely] %borderWrapper% { [rd] }',
		'[listposition=top] %borderWrapper% { [rdTop] }',
		'[listposition=bottom] %borderWrapper% { [rdBottom] }',
		'[state=over] %borderWrapper% { border-color:[brdh]; [bgh] [trans] }',
		'[state=over] %label% { display:inline-block; color: [txth]; }',
		'[state=selected] %borderWrapper% { border-color:[brds]; [bgs] [trans] }',
		'[state=selected] %label% { display:inline-block; color: [txts]; }'
	]);

});