define.skin('wysiwyg.viewer.skins.MediaZoomSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "imageItem": {
	        "skin": "wysiwyg.viewer.skins.displayers.MediaZoomDisplayerSkin"
	    }
	});

	def.skinParams([
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "mutators": [
	            "alpha",
	            75
	        ],
	        "defaultValue": "#000"
	    },
	    {
	        "id": "trns",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0.5s ease 0s"
	    },
	    {
	        "id": "$marginIncludingArrow",
	        "type": "OTHER",
	        "defaultValue": "120",
	        "usedInLogic": true
	    }
	]);

	def.html(
		'<div skinPart="blockingLayer">' +
		'<div skinPart="buttonPrev" class="btn zoomPrevNext">' +
		'prev</div>' +
		'<div skinPart="buttonNext" class="btn zoomPrevNext">' +
		'next</div>' +
		'<div skinPart="virtualContainer">' +
		'</div>' +
		'<div class="z-dialog" skinPart="dialogBox">' +
		'<div skinPart="xButton">' +
		'</div>' +
		'<div skinPart="itemsContainer">' +
		'</div>' +
		'<div skinPart="counter">' +
		'</div>' +
		'</div>' +
		'</div>');

    def.css([
        '{ position:fixed; width:100%; height:100%; z-index:99;}',
        '%blockingLayer% { [bg] position:fixed; top:0; bottom:0; left:0; right:0; visibility:visible; zoom:1; overflow: auto; }',
        '%dialogBox%     { margin:auto; background:#fff; text-align:right; position:relative;}',
        '%xButton%    { display:inline-block; right:-25px; width:25px; height:25px; background:#fff url([tdr]close.gif) no-repeat 50% 50%; cursor:pointer; position:absolute; }',
        '%itemsContainer%{}',
        '%.btn% { position:fixed; top: 0px; width:100px; height:100%; background:url([tdr]arrows_white.png) no-repeat; overflow:hidden; text-indent:-9999px; cursor:pointer; opacity:0.3;[trns]}',
        '%buttonNext% {  right:20px; background-position:-30px 40%; }',
        '%buttonPrev% {  left:20px;  background-position:70px 40%; }',
        '%.btn%:hover { opacity:1; }',
        '%counter% {position:absolute; top:25px; right:-40px; width:40px; padding:10px 0; background:#fff; color:#000; text-align:center; display:none;}',
        '%virtualContainer% {position: absolute; top: -5000px;}'
    ]);

});