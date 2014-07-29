define.skin('wysiwyg.viewer.skins.screenwidthcontainer.BlankScreen', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "pos",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; left:0px; right:0px; top:0px; bottom:0px;"
	    }
	]);

	def.html(
		'<div skinPart="screenWidthBackground">' +
		'</div>' +
		'<div skinPart="centeredContent">' +
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>' +
		'</div>');

	def.css([
		'%screenWidthBackground% {[pos]}',
		'%bg%                    {[pos]}',
		'%inlineContent%         {[pos]}',
		'%centeredContent%       {[pos]}'
	]);

});