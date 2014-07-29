define.skin('wysiwyg.viewer.skins.area.ArrowRightRibbon', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

	def.skinParams([
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "rb",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_14",
	        "lang": "foldL"
	    },
	    {
	        "id": "d",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; content:\"\"; overflow:hidden; border-style:solid; width:100%;"
	    }
	]);

	def.html(
		'<div skinPart="bg">' +
		'</div>' +
		'<div skinPart="inlineContent">' +
		'</div>');

	def.css([
		':before { border-width:0 20px 15px 0; bottom:0; position:absolute; content:""; left:0; border-style:solid; border-color:transparent [rb] transparent transparent;}',
		'%inlineContent% { position:absolute; top:0; left:0; right:0; bottom: 0;}',
		'%bg%        { position:absolute; top:0; bottom:15px; left:0; right:0; overflow:hidden;}',
		'%bg%:after  { border-width:0 350px 500px 0; bottom:50%; position:absolute; content:""; overflow:hidden; right:0; width:100%; border-style:solid; border-color:[bg] transparent [bg] transparent; }',
		'%bg%:before { border-width:500px 350px 0 0; top:50%;    position:absolute; content:""; overflow:hidden; right:0; width:100%; border-style:solid; border-color:[bg] transparent [bg] transparent; }',
		'{ -webkit-transform: scale(0.999); }'
	]);

});