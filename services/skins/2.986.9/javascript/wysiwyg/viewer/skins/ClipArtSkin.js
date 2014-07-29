define.skin('wysiwyg.viewer.skins.ClipArtSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.html(
		'<div skinPart="outerFrame">' +
            '<a skinPart="link">' +
                '<div skinPart="wrp"><div skinPart="img" skin="mobile.core.skins.ImageNewSkin"></div></div>' +
		    '</a>' +
		'</div>');

	def.css([
		'%wrp% { position:absolute; top:0;bottom:0;left:0;right:0;}',
		'%img% {height:100%;}'
	]);

});