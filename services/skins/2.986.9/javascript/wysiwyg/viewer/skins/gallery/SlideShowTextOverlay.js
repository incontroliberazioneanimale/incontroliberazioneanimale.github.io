define.skin('wysiwyg.viewer.skins.gallery.SlideShowTextOverlay', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "imageItem": {
	        "skin": "wysiwyg.viewer.skins.displayers.SlideTextOverlayDisplayer",
	        "styleGroup": "inherit"
	    }
	});

	def.skinParams([
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "0px"
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
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; top:0; right:0; bottom:0; left:0; "
	    },
	    {
	        "id": "arial",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "font-family: arial, helvetica,sans-serif; font-size:12px;"
	    },
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    }
	]);

	def.html(
		'<div class="border">' +
		'</div>' +
		'<div skinPart="itemsContainer">' +
		'</div>' +
		'<div class="buttons">' +
		'<div class="btn" skinPart="buttonPrev">' +
		'</div>' +
		'<div class="btn" skinPart="buttonNext">' +
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
		'{[rd][shd]overflow:hidden;background:[brd];}',
		'%.border% { [pos][rd]border:[brw] solid [brd]; pointer-events:none; background:none !important }',
		'%itemsContainer% { [pos][rd]overflow:hidden;-o-transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);}',
		'%.btn% { [trns] opacity:0.4; filter: alpha(opacity=40); height:70px; background:url([tdr]arrows_white_new3.png) no-repeat; width:45px; position:absolute; top:50%; margin-top:-35px; cursor: pointer; }',
		'[state~=mobile] %.btn% { opacity:1; }',
		'%buttonPrev%  { left:20px;   background-position:0 0; }',
		'%buttonNext%  { right:20px;  background-position:100% 0; }',
		'%.helpers% { [trns] opacity:0; filter: alpha(opacity=0); position:absolute; right:[brw]; bottom:[brw]; padding:0 10px 10px 0; width:60px; text-align:right;}',
		'%counter%  { display:inline-block; color:[txt];[arial] padding-left:5px;}',
		'%autoplay% { display:inline-block; padding-left:10px; width:20px; min-height:10px; position:relative; text-align:center; }',
		'%autoplay% > span { display:inline-block; position:relative; z-index:0; }',
		'[state~=autoplayOff] %autoplay% > span {border:5px solid transparent; border-left:5px solid [txt]; width:0; height:0px;  }',
		'[state~=autoplayOn]  %autoplay% > span {border-left:2px solid [txt];  border-right:2px solid [txt]; height:10px; width:1px; margin-right:5px;}',
		'%.buttons%   { [trns] opacity:0; filter: alpha(opacity=0); }',
		'[state~=mobile] %.buttons%   { opacity:1;}',
		':hover > %.buttons%   { opacity:1; filter: alpha(opacity=100); }',
		':hover > %.helpers%   { opacity:1; filter: alpha(opacity=100); }',
		':hover .pnl { opacity:1; filter: alpha(opacity=100); }',
		'[state~=showTextPanel] .pnl { opacity:1; filter: alpha(opacity=100); }',
		'%.btn%:hover {opacity:1; filter: alpha(opacity=100);}',
		'[state~=touchRollOver] %.buttons%   { opacity:1; filter: alpha(opacity=100); }',
		'[state~=touchRollOver] %.helpers%   { opacity:1; filter: alpha(opacity=100); }',
		'[state~=touchRollOver] .pnl { opacity:1; filter: alpha(opacity=100); }',
		'[state~=touchRollOver] %.btn% {opacity:1; filter: alpha(opacity=100);}',
		'[state~=showButtons]  %.buttons%   { opacity:1; filter: alpha(opacity=100); }'
	]);

});