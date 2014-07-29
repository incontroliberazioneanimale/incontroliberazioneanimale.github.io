define.skin('wysiwyg.viewer.skins.area.CenterRibbon', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

	def.skinParams([
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "rb1",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_14",
	        "lang": "foldL"
	    },
	    {
	        "id": "rb2",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_14",
	        "lang": "foldR"
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_15"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "2px"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 1px 4px rgba(0, 0, 0, 0.6);"
	    },
	    {
	        "id": "s0",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "10px"
	    },
	    {
	        "id": "s1",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "20px"
	    },
	    {
	        "id": "s2",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "40px"
	    },
	    {
	        "id": "s3",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "60px"
	    },
	    {
	        "id": "s4",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "80px"
	    },
	    {
	        "id": "s5",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "100px"
	    },
	    {
	        "id": "d",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; content:\"\"; overflow:hidden;"
	    },
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
	    }
	]);

    def.html(
        '<div class="container">' +
            '<div class="top"></div>' +
            '<div class="bot"></div>' +
            '<div skinPart="bg"></div>' +
            '<div skinPart="inlineContent"></div>' +
            '</div>');

    def.css([
        '%.container% { [pos] min-width:[s4] !important;}',
        '%bg%            { [pos] margin:0 [s2]; [shd] background:[bg]; border:[brw] solid [brd];}',
        '%inlineContent% { [pos]}',
        '%.top%           { overflow:hidden; position:absolute; left:0; right:0; top:0; bottom:50%;  margin-top   :[s0];}',
        '%.bot%           { overflow:hidden; position:absolute; left:0; right:0; top:50%;  bottom:0; margin-bottom:[s0];}',
        '%.top%:after     { [d] top:0; left :0; border-top:[s5] solid [rb1]; border-left :[s3] solid transparent;  border-right:0; }',
        '%.top%:before    { [d] top:0; right:0; border-top:[s5] solid [rb2]; border-right:[s3] solid transparent; border-left:0;  }',
        '%.bot%:after     { [d] bottom:0; left :0; border-bottom:[s5] solid [rb1]; border-left :[s3] solid transparent;  border-right:0; }',
        '%.bot%:before    { [d] bottom:0; right:0; border-bottom:[s5] solid [rb2]; border-right:[s3] solid transparent; border-left:0; }'
    ]);

});