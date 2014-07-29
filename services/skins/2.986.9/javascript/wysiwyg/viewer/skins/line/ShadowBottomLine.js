define.skin('wysiwyg.viewer.skins.line.ShadowBottomLine', function(SkinDefinition) {

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
	        "id": "sz",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "29px"
	    },
	    {
	        "id": "s",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "position:absolute; top:0; width:100px; content:\"\";"
	    }
	]);

	def.html(
		'<div skinPart="line">' +
		'</div>');

	def.css([
		':after  { background-image:url( [tdr]fade_line.png);  background-position:0 -87px;     height:[sz]; left:0;  [s]}',
		':before { background-image:url( [tdr]fade_line.png);  background-position:100% -87px;  height:[sz]; right:0; [s]}',
		'%line%  { background-image:url( [tdr]fade_line.png);  background-position:0 58px; margin:0 100px; height:[sz];  }'
	]);

});