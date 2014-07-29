define.skin('wysiwyg.viewer.skins.displayers.SlideShowPolaroidDisplayer', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.statics({
	    "heightDiff": 70
	});

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "image": {
	        "skin": "mobile.core.skins.ImageSkin"
	    }
	});

	def.skinParams([
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "5px"
	    },
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
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
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "trns",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "opacity 0.5s ease 0s"
	    }
	]);

	def.html(
        '<div skinPart="imageWrapper">' +
            '<div skinPart="zoom">' +
                '<div skinPart="image">' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div skinPart="panel">' +
            '<h3 skinPart="title">' +
            '</h3>' +
            '<p skinPart="description">' +
            '</p>' +
            '<a skinPart="link">' +
            'Go to link</a>' +
        '</div>'
    );

	def.css([
        '%imageWrapper% { position:absolute; }',
        '%zoom%  { height: 100%; position:absolute; top:[brw]; right:[brw]; bottom:70px; left:[brw];[rd] }',
        '%image% { [rd] }',
        '%panel% { [trns] position:absolute; right:90px; bottom:10px; left:10px; height:50px;  }',
        '%title%       { [fntt] color:[txt]; white-space:nowrap;}',
        '%description% { [fntds]color:[txt]; white-space:pre-line;}',
        '%link%        { [fntds]color:[txt]; white-space:nowrap; text-decoration:underline; cursor:pointer;}',
        '[state~=transOut] %panel% { opacity:0; filter: alpha(opacity=0);}',
        '[state~=transIn] %panel%  { opacity:0; filter: alpha(opacity=0);}',
        '[state~=noLink]   %link%  { display:none; }'
	]);

});