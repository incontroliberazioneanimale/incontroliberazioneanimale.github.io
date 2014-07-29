define.skin('wysiwyg.viewer.skins.SoundCloudWidgetSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    }
	]);

	def.html('<div skinPart="iFrameHolder"></div>');

	def.css([
		'[state=noContent] { background-image:url([tdr]soundcloud_placeholder.png);background-repeat:no-repeat; }'
	]);

});