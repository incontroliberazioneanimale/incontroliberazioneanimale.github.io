define.skin('wysiwyg.viewer.skins.photo.PolaroidPhoto', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

    def.compParts({
        'img': { skin:'skins.core.ImageNewSkinZoomable' }
    });

	def.skinParams([
	    {
	        "id": "rd",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "5px"
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
	        "defaultValue": "0 1px 3px rgba(0, 0, 0, 0.5);"
	    },
	    {
	        "id": "pbtm",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "30px",
	        "noshow": true
	    },
	    {
	        "id": "contentPaddingLeft",
	        "type": Constants.SkinParamTypes.SIZE,
	        "sumParams": [
	            "brw"
	        ],
	        "usedInLogic": true
	    },
	    {
	        "id": "contentPaddingRight",
	        "type": Constants.SkinParamTypes.SIZE,
	        "sumParams": [
	            "brw"
	        ],
	        "usedInLogic": true
	    },
	    {
	        "id": "contentPaddingBottom",
	        "type": Constants.SkinParamTypes.SIZE,
	        "sumParams": [
	            "brw",
	            "pbtm"
	        ],
	        "usedInLogic": true
	    },
	    {
	        "id": "contentPaddingTop",
	        "type": Constants.SkinParamTypes.SIZE,
	        "sumParams": [
	            "brw"
	        ],
	        "usedInLogic": true
	    }
	]);

	def.html(
		'<a skinPart="link">' +
		'<div skinPart="img" skin="mobile.core.skins.ImageNewSkin">' +
		'</div>' +
		'</a>');

	def.css([
		'%link% { display:block; [rd] [shd] background-color:[brd]; border:[brw] solid [brd]; overflow:hidden; padding: 0px 0px [pbtm] 0px;}',
		'%img%  { [rd]; }'
	]);

});