define.skin('wysiwyg.viewer.skins.table.TableComponentDefaultSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "trans",
	        "type": Constants.SkinParamTypes.TRANSITION,
	        "defaultValue": "all 0.5s ease 0s"
	    },
	    {
	        "id": "bg",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_11"
	    },
	    {
	        "id": "brw",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px"
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultTheme": "color_16"
	    },
	    {
	        "id": "bgh",
	        "type": Constants.SkinParamTypes.BG_COLOR,
	        "defaultTheme": "color_13"
	    },
	    {
	        "id": "brd",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultTheme": "color_14"
	    },
	    {
	        "id": "box",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "box-sizing:border-box !important; -moz-box-sizing:border-box !important; -ms-box-sizing:border-box !important; -webkit-box-sizing:border-box !important;"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "0 0 3px rgba(0, 0, 0, 0.5);"
	    }
	]);

	def.html(
		'<table skinpart="table" >' +
		'<thead skinPart="tableHeader">' +
		'</thead>' +
		'<tbody skinPart="tableBody">' +
		'</tbody>' +
		'<tfoot skinPart="tableFooter">' +
		'</tfoot>' +
		'</table>');

	def.css([
		'{ [shd][bg][box] padding:20px; border:solid [brd] [brw];}',
		' table   { width:100%; border-collapse:collapse; font-family:"Arial"; font-size:11px;  } ',
		' table * { vertical-align:middle; }',
		' tbody   { vertical-align:middle; }',
		'tbody td { [bg] border-bottom:solid 1px [brd]; padding:5px; [trans]}',
		' tbody input[type="number"] { max-width:60px; max-width:50px; text-align:center; }',
		' tbody tr:hover td { [bgh] }',
		' tbody tr.spacer:hover td { [bg] }',
		' tr.spacer {height: 100%;}',
		' tr.spacer td { padding:0px !important; border:0 none !important;  }'
	]);

});