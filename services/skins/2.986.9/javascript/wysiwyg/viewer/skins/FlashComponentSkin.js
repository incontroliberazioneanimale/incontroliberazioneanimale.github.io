define.skin('wysiwyg.viewer.skins.FlashComponentSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "webThemeDir",
	        "type": "themeUrl",
	        "defaultTheme": "WEB_THEME_DIRECTORY"
	    }
	]);

	def.html(
		'<a skinPart="link">' +
		'<div skinPart="noFlashImgContainer">' +
		'<div skinPart="noFlashImg" skin="mobile.core.skins.ImageSkin">' +
		'</div>' +
		'</div>' +
		'<div skinPart="flashContainer">' +
		'</div>' +
		'<div skinPart="mouseEventCatcher">' +
		'</div>' +
		'</a>');

	def.css([
		'%mouseEventCatcher% {display:block; height:100%; width:100%; position:absolute; top:0px; left:0px;  background:url([webThemeDir]transparent.gif) repeat;}',
		'%noFlashImgContainer% { display:block; height:100%; width:100%; position:absolute; top:0px; left:0px;}',
		'[state~="noLink"] %mouseEventCatcher% { display:none; }',
		'%flashContainer% {width:100%; height:100%}'
	]);

});