define.skin('wysiwyg.viewer.skins.photo.NoSkinPhoto', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

    def.compParts({
        'img': { skin:'skins.core.ImageNewSkinZoomable' }
    });

	def.skinParams([
	    {
	        "id": "contentPaddingLeft",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px",
	        "noshow": true,
	        "usedInLogic": true
	    },
	    {
	        "id": "contentPaddingRight",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px",
	        "noshow": true,
	        "usedInLogic": true
	    },
	    {
	        "id": "contentPaddingBottom",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px",
	        "noshow": true,
	        "usedInLogic": true
	    },
	    {
	        "id": "contentPaddingTop",
	        "type": Constants.SkinParamTypes.SIZE,
	        "defaultValue": "0px",
	        "noshow": true,
	        "usedInLogic": true
	    }
	]);

	def.html(
		'<a skinPart="link">' +
		'<div skinPart="img" skin="mobile.core.skins.ImageNewSkin">' +
		'</div>' +
		'</a>');

	def.css([
		'%link% { display:block; overflow:hidden;}'
	]);

});