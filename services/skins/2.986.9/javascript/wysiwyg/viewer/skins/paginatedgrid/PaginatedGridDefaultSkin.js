define.skin('wysiwyg.viewer.skins.paginatedgrid.PaginatedGridDefaultSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_5",
	        "styleDefaults": {
	            "alpha": 0.5
	        }
	    },
	    {
	        "id": "fntt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_6"
	    },
	    {
	        "id": "fntds",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_8"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "linkColor",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "box",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "box-sizing:border-box !important; -moz-box-sizing:border-box !important; -ms-box-sizing:border-box !important; -webkit-box-sizing:border-box !important;"
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0.3s ease 0s"
	    },
	    {
	        "id": "trans2",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0s"
	    },
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    }
	]);

	def.html(
		'<div skinPart="itemsContainer">' +
		'</div>' +
		'<div skinPart="rolloverHolder">' +
		'<h3 skinPart="title">' +
		'</h3>' +
		'<p skinPart="description">' +
		'</p>' +
		'<a skinPart="link">' +
		'Go to link</a>' +
		'</div>' +
		'<div class="buttons">' +
		'<a skinPart="buttonPrev">' +
		'</a>' +
		'<a skinPart="buttonNext">' +
		'</a>' +
		'</div>' +
		'<div class="hlp opc" skinPart="counter">' +
		'</div>' +
		'<div class="hlp opc" skinPart="autoplay">' +
		'<span>' +
		'</span>' +
		'</div>');

	def.css([
		'%.opc%        { [trans] opacity:0; color:[txt]; }',
		':hover %.opc% { opacity:1; }',
		'%itemsContainer% { overflow:hidden; height:100% !important; }',
		'%rolloverHolder% { [box][fntds][bg][trans2] color:[txt]; opacity:0; padding:10px !important; overflow:hidden; cursor:pointer;  }',
		'%rolloverHolder% > div { width: 100% !important }',
		'[state~=rollover] %rolloverHolder% { [trans] opacity:1;}',
		'%title%        { overflow:hidden; text-overflow:ellipsis;  white-space:nowrap; [fntt] }',
		'%description%  { white-space: pre-line; overflow:hidden; max-height:60%; }',
		'%link%         { overflow:hidden; white-space:nowrap; text-decoration:underline; color:[linkColor]; position:absolute; bottom:10px; left:10px; right:10px; }',
		'%.buttons% { [trans] opacity:0; position:absolute; left:0; right:0; top:50%; margin-top:-15px; }',
		' [state~=mobile] %.buttons% {opacity:1; }',
		'%.buttons% a { [trans] opacity:0.6; width:45px; height:65px; background-image:url([tdr]arrows_white_new3.png); background-repeat:no-repeat; cursor:pointer; position:absolute; }',
		'[state~=mobile] %.buttons% a { opacity:1;}',
		'%buttonPrev%  { left:20px;   background-position:0 0; }',
		'%buttonNext%  { right:20px;  background-position:100% 0; }',
		'%buttonPrev%            { left:20px;   background-position:0 0; }',
		'%buttonNext%            { right:20px;  background-position:100% 0; }',
		':hover > %.buttons% { opacity:1; }',
		'%.buttons% a:hover  { opacity:1; }',
		'%.hlp%          { position:absolute; color:[txt]; }',
		'%.hlp% span { display:block; }',
		'%autoplay%  { right:35px; bottom:10px; }',
		'%counter%   { right:10px;  bottom:8px; font-size:13px; }',
		'[state~=noLink]  %link% { display:none; }',
		'[state~=autoplayOff] %autoplay% > span { border:6px solid transparent; border-left:6px solid [txt];   }',
		'[state~=autoplayOn]  %autoplay% > span { border-left:3px solid [txt];  border-right:3px solid [txt]; margin-right: 5px; height:12px; width:1px; }'
	]);

});