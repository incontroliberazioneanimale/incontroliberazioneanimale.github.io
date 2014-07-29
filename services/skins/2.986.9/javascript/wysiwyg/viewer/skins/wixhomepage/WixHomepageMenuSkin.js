define.skin('wysiwyg.viewer.skins.wixhomepage.WixHomepageMenuSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultTheme": "font_1"
	    },
	    {
	        "id": "txt",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#3D3D3D",
	        "enableEdit": true
	    },
	    {
	        "id": "txth",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#000000",
	        "enableEdit": true
	    },
	    {
	        "id": "pad",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "5px"
	    }
	]);

	def.html(
		'<li skinPart="buttonTemplate" isTemplate="true">' +
		'<a class="buttonLink">' +
		'BUTTON_LABEL</a>' +
		'</li>' +
		'<ul skinPart="buttonsContainer">' +
		'</ul>');

	def.css([
		'[state~=bottomMenu] %buttonsContainer% {text-align:center;}',
		'%buttonTemplate%[isTemplate=true]  { display:none; }',
		'%buttonTemplate% {display:inline-block; cursor:pointer; padding:0px [pad]; border-left:1px solid [txt]; [fnt]}',
		'%buttonTemplate% .buttonLink {color: [txt];}',
		'%buttonTemplate% .buttonLink:hover {color: [txth];}',
		'%buttonTemplate%:hover {text-decoration:underline;}',
		'%buttonTemplate%:first-child { padding-left:0px; border-left:0px}',
		'%buttonTemplate%:last-child  { padding-right:0px; }'
	]);

});