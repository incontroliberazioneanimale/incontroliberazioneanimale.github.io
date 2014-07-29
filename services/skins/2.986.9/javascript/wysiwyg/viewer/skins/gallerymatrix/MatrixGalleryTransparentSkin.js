define.skin('wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTransparentSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.statics({
	    "heightDiff": 25
	});

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "imageItem": {
	        "skin": "wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTransparentSkin",
	        "styleGroup": "inherit"
	    }
	});

	def.skinParams([
        {
            "id": "fntdsTrans",
            "type": Constants.SkinParamTypes.FONT,
            "defaultTheme": "font_9",
            "lang": "fntds"
        },
        {
            "id": "showMoreColor",
            "type": Constants.SkinParamTypes.COLOR,
            "defaultTheme": "color_13"
        }
	]);

	def.html(
		'<div skinPart="itemsContainer">' +
		'</div>' +
		'<div class="pos">' +
		'<div skinPart="showMore" hightDiff="true">' +
		'Show More</div>' +
		'</div>');

	def.css([
		'%.pos% { height: 2.3em; position:absolute; right:0; bottom:0; left:0; text-align:center; }',
		'%showMore% { cursor: pointer; display:inline-block; line-height: 2.3em !important;  padding: 0 10px; text-decoration: underline !important; color:[showMoreColor]; [fntdsTrans] }',
		'%itemsContainer% { position: absolute; left: 0; right: 0; top: 0; bottom: 2.3em; }',
		'%showMore%:hover { }',
		'[state~=fullView] %showMore% { display: none }'
	]);

});