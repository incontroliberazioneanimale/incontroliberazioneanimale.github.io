define.skin('wysiwyg.viewer.skins.dropmenubutton.ArrowRightMenuButtonNSkin', function(SkinDefinition) {

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
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txts",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_17"
	    },
	    {
	        "id": "bgs",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_18"
	    },
	    {
	        "id": "pad",
	        "type": Constants.SkinParamTypes.SIZE,
	        "mutators": [
	            "decrease",
	            70
	        ],
	        "defaultValue": "1"
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
	        "id": "rdRight",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "mutators": [
	            "square",
	            [
	                "bl",
	                "tl"
	            ]
	        ],
	        "defaultParam": "rd"
	    },
	    {
	        "id": "rdLeft",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "mutators": [
	            "square",
	            [
	                "br",
	                "tr"
	            ]
	        ],
	        "defaultParam": "rd"
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
	        "id": "w1",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "70px"
	    },
	    {
	        "id": "w2",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "140px"
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
		'<div class="arrow">' +
		'<div class="tail">' +
		'<div class="tailTop">' +
		'</div>' +
		'<div class="tailBottom">' +
		'</div>' +
		'</div>' +
		'<div class="sq dropSizeTarget">' +
		'</div>' +
		'<div class="head dropSizeTarget">' +
		'<div class="headTop">' +
		'</div>' +
		'<div class="headBottom">' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div skinPart="bg">' +
		'<p skinPart="label">' +
		'</p>' +
		'</div>' +
		'<div skinPart="hitArea">' +
		'&nbsp;</div>');

	def.css([
		'{ display:inline-block; position:relative; margin-left:[pad]; }',
		'%bg% { height:100%; position:relative; }',
		'%label% { display:inline-block; margin: 0 20px; padding: 0 10px; [fnt] color:[txt]; [trans2] text-indent:60px; }',
		'%hitArea% { position:absolute; top:0; left:[w1]; bottom:0; right:0; cursor:pointer; z-index:9999;  /*   this is a fix for ie z-index   */ background:#fff; opacity:0; filter: alpha(opacity=0); -moz-opacity:0; -khtml-opacity: 0;}',
		'%.arrow% { position:absolute; top:0; left:0; bottom:0; right:0; }',
		'%.sq% { position:absolute; top:0; left:[w1]; bottom:0; right:[w1]; background-color:[bg]; [trans] }',
		'%.tail% { background-color:transparent; [trans] width:[w1]; position:absolute; top:0; left:0; bottom:0; overflow:hidden;}',
		'%.tailTop% { border-top: [w2] solid [bg]; border-left: [w1] solid transparent; width:0; height:0; position:absolute; bottom:50%; right:0; [trans3]}',
		'%.tailBottom% { border-bottom: [w2] solid [bg]; border-left: [w1] solid transparent; width:0; height:0; position:absolute; top:50%; right:0; [trans3] }',
		'%.head% { background-color:transparent; [trans] width:[w1]; position:absolute; top:0; right:0; bottom:0; overflow:hidden; }',
		'%.headTop% { border-bottom: [w2] solid [bg]; border-right: [w1] solid transparent; width:0; height:0; position:absolute; bottom:50%; left:0; [trans3] }',
		'%.headBottom% { border-top: [w2] solid [bg]; border-right: [w1] solid transparent; width:0; height:0; position:absolute; top:50%; left:0; [trans3] }',
		'[listposition=left] { margin-left:0; }',
		'[listposition=left] %label% { display:inline-block; text-indent:0; }',
		'[listposition=left] %.tail% { background-color:[bg]; [rdLeft] width:auto; right:[w1]; }',
		'[listposition=left] %.tailTop%, [listposition=left] %.tailBottom% { display:none;}',
		'[listposition=left] %hitArea% { left:0;  border: solid 1px red; }',
		'[listposition=right] %.head% { background-color:[bg]; [rdRight] }',
		'[listposition=right] %.headTop%, [listposition=right] %.headBottom% {  display:none; }',
		'[state=over][listposition=right] %.head% { background-color:[bgh]; [trans] }',
		'[state=selected][listposition=right] %.head% { background-color:[bgs]; [trans] }',
		'[container=drop] { display:block; background-color: [bg]; [trans]  margin:0 !important; background-color:transparent; overflow:hidden; }',
		'[container=drop] %label% { display:inline-block; padding:0 0.5em; text-indent:0  !important; margin:0  !important; }',
		'[container=drop] %.arrow% { display:none  !important;}',
		'[container=drop] %.head% { display:none;}',
		'[container=drop] %hitArea% { position:absolute; top:0; left:0; bottom:0; right:0; }',
		'[listposition=dropLonely] { [rdDrop] }',
		'[listposition=top] { [rdTop] }',
		'[listposition=bottom] { [rdBottom] }',
		'[container=drop][state=over] { [trans] background-color:[bgh]; }',
		'[container=drop][state=selected] { [trans] background-color:[bgs]; }',
		'[state=over] %.sq% { background-color:[bgh]; [trans]}',
		'[state=over] %.tailTop% { border-top-color: [bgh]; [trans3] }',
		'[state=over] %.tailBottom% { border-bottom-color: [bgh]; [trans3] }',
		'[state=over] %.headTop% { border-bottom-color: [bgh]; [trans3] }',
		'[state=over] %.headBottom% { border-top-color: [bgh]; [trans3] }',
		'[state=over] %label% { display:inline-block; color:[txth]; [trans2] }',
		'[listposition=left][state=over] %.tail% { background-color:[bgh]; [trans] }',
		'[state=selected] %.sq% { background-color:[bgs]; [trans] }',
		'[state=selected] %.tailTop% { border-top-color: [bgs]; [trans3] }',
		'[state=selected] %.tailBottom% { border-bottom-color: [bgs]; [trans3] }',
		'[state=selected] %.headTop% { border-bottom-color: [bgs]; [trans3] }',
		'[state=selected] %.headBottom% { border-top-color: [bgs]; [trans3] }',
		'[state=selected] %label% { display:inline-block; color:[txts]; [trans2] }',
		'[state=selected][listposition=left] %.tail% { background-color:[bgs]; [trans] }'
	]);

});