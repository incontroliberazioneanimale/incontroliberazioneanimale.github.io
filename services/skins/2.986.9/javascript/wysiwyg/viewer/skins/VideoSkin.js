define.skin('wysiwyg.viewer.skins.VideoSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.html(
		'<div skinPart="videoFrame">' +
		'</div>' +
		'<div skinPart="preview">' +
		'</div>');

	def.css([
		'%videoFrame%{position: relative; width:100% !important; height:100% !important; }',
		'%.hidden% {display:none!important;}'
	]);

});