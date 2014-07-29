define.skin('wysiwyg.viewer.skins.FlickrBadgeWidgetSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.statics({
	    "minW": 130,
	    "minH": 130
	});

	def.inherits('mobile.core.skins.BaseSkin');

	def.html(
		'<a skinPart="overlayClick" target="_blank">' +
		'<div skinPart="overlay">' +
		'</div>' +
		'</a>' +
		'<iframe skinPart="iframe">' +
		'</iframe>');

	def.css([
		'%overlay%{position: absolute; height:100%; width:100%;opacity:0;background:rgba(255, 255, 255, 0.3);}'
	]);

});