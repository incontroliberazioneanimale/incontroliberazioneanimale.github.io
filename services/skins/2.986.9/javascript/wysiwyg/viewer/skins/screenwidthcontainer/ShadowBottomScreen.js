define.skin('wysiwyg.viewer.skins.screenwidthcontainer.ShadowBottomScreen', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "bgctr",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "brwt",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px"
	    },
	    {
	        "id": "brwb",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)"
	    },
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; left:0px; right:0px; top:0px; bottom:0px;"
	    }
	]);

	def.html(
		'<div class="left ln">' +
		'</div>' +
		'<div class="center ln">' +
		'</div>' +
		'<div class="right ln">' +
		'</div>' +
		'<div skinPart="screenWidthBackground">' +
		'<div class="bg">' +
		'</div>' +
		'</div>' +
		'<div skinPart="centeredContent">' +
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>' +
		'</div>');

	def.css([
        '%.ln%        { bottom:-14px; height:14px; min-height:14px; background-image:url( [tdr]shadowbottom.png); position:absolute; }',
        '%.left%      { background-position:0 -29px;     width:100px; left:0; }',
        '%.right%     { background-position:100% -29px;  width:100px; right:0; }',
        '%.center%    { background-position:0 0; right:100px; left:100px; }',
        '%screenWidthBackground% {[pos] }',
        '%.bg% {[pos][bg][shd] border-top:[brwt] solid [brd]; border-bottom:[brwb] solid [brd]; }',
        '%bg%             { position:absolute; left:0px; right:0px; top:[brwt]; bottom:[brwb];[bgctr]}',
        '%inlineContent%  { [pos]}',
        '%centeredContent%{ [pos] }',
        '[state~="mobileView"] %bg% {left:10px; right:10px}'
	]);

});