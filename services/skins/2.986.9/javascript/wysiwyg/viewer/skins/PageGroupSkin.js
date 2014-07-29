define.skin('wysiwyg.viewer.skins.PageGroupSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');

    def.skinParams([
        {
            "id": "pos",
            "type": Constants.SkinParamTypes.OTHER,
            "defaultValue": "position:absolute; top:0; bottom:0; left:0; right:0;"
        },
        {
            "id": "$overlayColor",
            "type": "cssBgColor",
            "defaultValue": "rgba(0,0,0,0.664)", //#000000AA //changed to rgba() to be compatible with sass compiler
            "name": ""
        }
    ]);

    def.html(
        '<div skinPart="inlineContent"></div>' +
        '<div skinPart="overlay"></div>'
    );

    def.css([
        '{height:100px; width:100px}',
        '%overlay% {[pos] [$overlayColor]}',
        '%inlineContent% {[pos]}'
    ]);
});
