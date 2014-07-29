define.skin('wysiwyg.viewer.skins.VerticalRepeaterEmptySkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.html(
		'<div skinPart="inlineContent">' +
		'</div>');

});