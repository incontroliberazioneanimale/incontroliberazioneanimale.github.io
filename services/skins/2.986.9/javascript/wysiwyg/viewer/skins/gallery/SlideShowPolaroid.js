define.skin('wysiwyg.viewer.skins.gallery.SlideShowPolaroid', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "imageItem": {
	        "skin": "wysiwyg.viewer.skins.displayers.SlideShowPolaroidDisplayer",
	        "styleGroup": "inherit"
	    }
	});

	def.skinParams([
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "s",
	        "type": Constants.SkinParamTypes.SIZE,
	        "mutators": [
	            "decrease",
	            15
	        ],
	        "defaultParam": "brw"
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5);"
	    },
	    {
	        "id": "trns",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0.5s ease 0s"
	    },
	    {
	        "id": "zrb",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "border-bottom-right-radius: 0 !important;"
	    },
	    {
	        "id": "zrt",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "border-top-right-radius: 0 !important;"
	    },
	    {
	        "id": "zlb",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "border-bottom-left-radius: 0 !important;"
	    },
	    {
	        "id": "zlt",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "border-top-left-radius: 0 !important;"
	    },
	    {
	        "id": "arial",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "font-family: arial, helvetica,sans-serif; font-size:12px;"
	    }
	]);

	def.html(
		'<div skinPart="itemsContainer">' +
		'</div>' +
		'<div class="btn">' +
		'<div skinPart="buttonPrev">' +
		'<span>' +
		'</span>' +
		'</div>' +
		'<div skinPart="buttonNext">' +
		'<span>' +
		'</span>' +
		'</div>' +
		'</div>' +
		'<div class="helpers">' +
		'<div skinPart="autoplay">' +
		'<span>' +
		'</span>' +
		'</div>' +
		'<div skinPart="counter">' +
		'</div>' +
		'</div>');

	def.css([
		'{ [bg][shd][rd] }',
		'%.btn% div { height:40px; line-height:45px; width:50px; [bg][rd] position:absolute; top:50%; margin-top:-30px; cursor: pointer; text-align:center; }',
		'%buttonPrev%  { [trns]opacity:0; filter: alpha(opacity=0); left:[s];  [rd][zlb][zlt] -moz-[zlb]-moz-[zlt] -webkit-[zlb]-webkit-[zlt] }',
		'[state~=mobile] %buttonPrev%  {opacity:1;}',
		'%buttonNext%  { [trns]opacity:0; filter: alpha(opacity=0); right:[s]; [rd][zrb][zrt] -moz-[zrb]-moz-[zrt] -webkit-[zrb]-webkit-[zrt] }',
		'[state~=mobile] %buttonNext%  {opacity:1;}',
		'%.btn% span { display:inline-block; border:5px solid transparent; }',
		'%buttonNext% span  { border-left:  10px solid [txt]; margin-right:5px; }',
		'%buttonPrev% span  { border-right: 10px solid [txt]; margin-left:5px;}',
		':hover %.btn% div  { opacity:1; filter: alpha(opacity=100); }',
		'[state~=touchRollOver] %.btn% div  { opacity:1; filter: alpha(opacity=100); }',
		'%.helpers% { position:absolute; bottom:45px; right:10px; text-align:right; color:[txt];  }',
		'%counter%  { display:inline-block; padding-left:5px; [arial] }',
		'%autoplay% { display:inline-block; width:10px; height:10px; line-height:10px; padding:5px; cursor:pointer;  text-align:center; }',
		'[state~=autoplayOff] %autoplay% > span { display:inline-block; border:5px solid transparent; border-left:5px solid [txt]; width:0; height:0px;}',
		'[state~=autoplayOn]  %autoplay% > span { display:inline-block; border-left:2px solid [txt];  border-right:2px solid [txt]; height:10px; width:1px; margin-right:5px;  }',
		'[state~=showButtons] %.btn% div  { opacity:1; filter: alpha(opacity=100); }'
	]);

});