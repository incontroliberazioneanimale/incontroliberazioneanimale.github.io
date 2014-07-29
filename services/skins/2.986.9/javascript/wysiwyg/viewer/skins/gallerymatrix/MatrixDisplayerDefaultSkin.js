define.skin('wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerDefaultSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "image": {
	        "skin": "mobile.core.skins.ImageSkin"
	    }
	});

	def.skinParams([
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_17",
	        "styleDefaults": {
	            "alpha": 0.5
	        }
	    },
	    {
	        "id": "ttl",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
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
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
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
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
	    },
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0.4s ease 0s"
	    }
	]);

	def.html(
		'<div skinPart="imageWrapper">' +
		    '<div class="imgBorder">' +
		        '<div skinPart="image"></div>' +
		        '<div skinPart="zoom">' +
		            '<div skinPart="title"></div>' +
		            '<div skinPart="description"></div>' +
		            '<a skinPart="link">Go to link</a>' +
		        '</div>' +
    		'</div>' +
		'</div>');

	def.css([
		'%imageWrapper% {[pos] [shd] [rd]}',
		'%.imgBorder% { [pos][rd] border:solid [brw] [brd]; background:[brd];}',
		'%image% { [rd] }',
		'%zoom% { [pos] background: [bgh]; [rd] padding:10px; filter: alpha(opacity=0); opacity: 0; [trans] overflow:hidden; }',
		'%title% { [fntt] color: [ttl]; white-space:nowrap; }',
		'%description% { color: [txt]; [fntds] white-space: pre-line; }',
		'%link% { color:[txt]; [fntds] position:absolute; left:10px; right:10px; bottom:10px; text-decoration: underline !important; white-space:nowrap; }',
		'[state~=alignLeft] %title% { text-align:left;}',
		'[state~=alignCenter] %title% { text-align:center; }',
		'[state~=alignRight] %title% { text-align:right; }',
		'[state~=alignLeft] %description% { text-align:left }',
		'[state~=alignCenter] %description% { text-align:center; }',
		'[state~=alignRight] %description% { text-align:right; }',
        '[state~=alignLeft] %link% { text-align:left; }',
        '[state~=alignCenter] %link% { text-align:center; }',
        '[state~=alignRight] %link% { text-align:right; }',
		'[state~=noLink] %link% { display: none; }',
		':hover %zoom% { filter: alpha(opacity=100); opacity: 1; [trans] }'
	]);

});