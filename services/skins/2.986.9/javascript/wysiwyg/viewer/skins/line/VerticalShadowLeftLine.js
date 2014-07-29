define.skin('wysiwyg.viewer.skins.line.VerticalShadowLeftLine', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

	def.skinParams([
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "s",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; left:-14px; width:29px; content:\"\";"
	    }
	]);

	def.html(
		'<div skinPart="line">' +
		'</div>');

	def.css([
		':before { background-image:url( [tdr]fadelinevertical.png); background-position:0 0;    [s] top:0;     height:100px; }',
		':after  { background-image:url( [tdr]fadelinevertical.png); background-position:0 100%; [s] bottom:0;  height:100px; }',
		'%line%  { background-image:url( [tdr]fadelinevertical.png); background-position:87px 0; [s] top:100px; bottom:100px; }'
	]);

});