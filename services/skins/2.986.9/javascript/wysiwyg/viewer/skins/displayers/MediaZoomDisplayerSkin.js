define.skin('wysiwyg.viewer.skins.displayers.MediaZoomDisplayerSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "image": {
	        "skin": "mobile.core.skins.ImageSkin"
	    }
	});

	def.skinParams([
	    {
	        "id": "img",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "background-size:cover !important; background-position:50% 50% !important;"
	    },
	    {
	        "id": "imgPadding",
	        "type": Constants.SkinParamTypes.OTHER,
	        "defaultValue": "10"
	    }
	]);

	def.html(
		'<div skinPart="imageWrapper">' +
		'<div skinPart="image">' +
		'</div>' +
		'</div>' +
		'<div skinPart="panel">' +
		'<div class="meta">' +
		'<h3 skinPart="title">' +
		'</h3>' +
		'<p skinPart="description">' +
		'</p>' +
		'<a skinPart="link">' +
		'Go to link</a>' +
		'</div>' +
		'</div>');

	def.css([
		'{text-align:left; font:12px "Helvetica Neue","HelveticaNeueW01-55Roma","HelveticaNeueW02-55Roma","HelveticaNeueW10-55Roma",Helvetica,Arial,sans-serif;}',
		'%imageWrapper% {padding:[imgPadding]px [imgPadding]px 0 [imgPadding]px; background:#fff; text-align:center;}',
		'%panel% {padding:10px; background:#fff; font:bold 12px arial, sans-serif;}',
		'%image% {[img]margin:0 auto; }',
		'%title% {font-size:14px;}',
		'%comments% {margin-top: 10px; position: relative;}',
		'%description% {white-space: pre-line;}',
		'[state~=showLink] %link% {display: block}',
		'[state~=hideLink] %link% {display: none}'
	]);

});