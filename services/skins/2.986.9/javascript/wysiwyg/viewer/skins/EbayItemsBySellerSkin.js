define.skin('wysiwyg.viewer.skins.EbayItemsBySellerSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.statics({
	    "minW": 515,
	    "minH": 180,
	    "maxW": 820
	});

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "fontColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_9",
	        "usedInLogic": true
	    },
	    {
	        "id": "borderColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_4",
	        "usedInLogic": true
	    },
	    {
	        "id": "headerColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_5",
	        "usedInLogic": true
	    },
	    {
	        "id": "backgroundColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_1",
	        "usedInLogic": true
	    },
	    {
	        "id": "linkColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_2",
	        "usedInLogic": true
	    }
	]);

	def.html('<div skinPart="iFrameHolder"></div>');

	def.css([
		'[state=noContent] { background-image:url([tdr]eBayPlaceHolder.png);background-repeat:no-repeat;}',
		'%iFrameHolder% > iframe { position:absolute; }'
	]);

});