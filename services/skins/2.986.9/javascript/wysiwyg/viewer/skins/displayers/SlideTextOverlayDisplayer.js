define.skin('wysiwyg.viewer.skins.displayers.SlideTextOverlayDisplayer', function(SkinDefinition) {

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
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_15",
	        "styleDefaults": {
	            "alpha": 0.8
	        }
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
	        "id": "s",
	        "type": Constants.SkinParamTypes.SIZE,
	        "mutators": [
	            "decrease",
	            1
	        ],
	        "defaultParam": "brw"
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
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "0px"
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
        '<div class="pnl" skinPart="panel">' +
            '<h3 skinPart="title">' +
            '</h3>' +
            '<p  skinPart="description">' +
            '</p>' +
            '<a  skinPart="link" >' +
            'Go to link</a>' +
        '</div>'
    );

	def.css([
        '%imageWrapper% { position:absolute; }',
        '%panel% { [rd][bg][trns] opacity:0; filter: alpha(opacity=0); position:absolute; right:[brw]; left:[brw]; bottom:[brw]; padding:10px 100px 10px 10px;min-height:18px;-moz-border-top-left-radius: 0 !important; -moz-border-top-right-radius: 0 !important; -webkit-border-top-left-radius: 0 !important; -webkit-border-top-right-radius: 0 !important; border-top-left-radius: 0 !important; border-top-right-radius: 0 !important; }',
        '%zoom%  { position:absolute; top:[brw]; right:[brw]; bottom:[brw]; left:[brw];  }',
        '%image% { [rd] }',
        '%title%       { [fntt] color:[txt]; }',
        '%description% { [fntds]color:[txt]; white-space: pre-line;  }',
        '%link%        { [fntds]color:[txt]; }',
        '[state~=transOut] %panel% { opacity:0; filter: alpha(opacity=0);}',
        '[state~=transIn]  %panel% { opacity:0; filter: alpha(opacity=0);}',
        '[state~=link]   %link%  { text-decoration:underline; cursor:pointer; [fntds]color:[txt];  }',
        '[state~=noLink] %link%  { display:none; }'
	]);

});