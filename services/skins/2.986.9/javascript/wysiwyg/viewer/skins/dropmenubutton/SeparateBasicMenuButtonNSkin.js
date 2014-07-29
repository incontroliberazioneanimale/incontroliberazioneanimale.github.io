define.skin('wysiwyg.viewer.skins.dropmenubutton.SeparateBasicMenuButtonNSkin', function(SkinDefinition) {

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
	        "defaultValue": "0"
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
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11"
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
	        "defaultValue": "10px"
	    },
	    {
	        "id": "rdDrop",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "10px"
	    },
	    {
	        "id": "nord",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "0",
	        "noshow": true
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
	        "defaultParam": "rdDrop"
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
	        "defaultParam": "rdDrop"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
	    },
	    {
	        "id": "noshd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "none;",
	        "noshow": true
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "background-color 0.4s ease 0s"
	    },
	    {
	        "id": "trans2",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "color 0.4s ease 0s"
	    },
	    {
	        "id": "trans3",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "border-color 0.4s ease 0s"
	    }
	]);

	def.html(
		'<div class="wrapper">' +
		'<div skinPart="borderWrapper">' +
		'<div skinPart="bg">' +
		'<p skinPart="label">' +
		'</p>' +
		'</div>' +
		'</div>' +
		'</div>');

	def.css([
		'{ display:inline-block; margin:0 [pad];  }',
		'%label%         { [trans2][fnt]color:[txt]; display:inline-block; }',
		'%.wrapper%      { [trans][rd][bg][shd] cursor:pointer; }',
		'%borderWrapper% { [trans3][rd] border:solid [brw] [brd];  }',
		'[container=drop]                     { display:block; margin:0; }',
		'[container=drop] %.wrapper%          { background-color:transparent; [trans] [noshd] [nord] }',
		'[container=drop] %borderWrapper%     { border:none; }',
		'[listposition=top] %.wrapper%        { [rdTop] }',
		'[listposition=bottom] %.wrapper%     { [rdBottom] }',
		'[listposition=dropLonely] %.wrapper% { [rdDrop] }',
		'[state=over] %label%                 { color:[txth]; [trans2] }',
		'[state=over] %.wrapper%              { [bgh] [trans] }',
		'[state=over] %borderWrapper%         { border-color:[brdh]; [trans3] }',
		'[state=selected] %.wrapper%          { [bgs] [trans] }',
		'[state=selected] %borderWrapper%     { border-color:[brds]; [trans3] }',
		'[state=selected] %label%             { color:[txts]; [trans2] }'
	]);

});