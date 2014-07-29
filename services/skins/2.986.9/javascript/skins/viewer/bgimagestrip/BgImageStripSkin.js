define.skin('skins.viewer.bgimagestrip.BgImageStripSkin', function(SkinDefinition) {
    var def = SkinDefinition;
    def.inherits('core.managers.skin.BaseSkin2');
    def.skinParams([
        {'id':'bg',  'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_11'},
        {'id':'brd', 'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'},
        {'id':'brwt', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue':'0px'},
        {'id':'brwb', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue':'0px'},
        { "id": "shd", "type": Constants.SkinParamTypes.BOX_SHADOW, "defaultValue": "0 0 5px rgba(0, 0, 0, 0.7)", "styleDefaults": { "boxShadowToggleOn": "false" }},
        {'id':'pos','type':Constants.SkinParamTypes.OTHER, 'defaultValue':'position:absolute; left:0; right:0; top:0; bottom:0;'}
    ]);
    def.html(
        '<div skinpart="bg"></div>' +
            '<div skinpart="inlineContent"></div>'
    );
    def.css([
        '%bg%{ [bg] [shd] box-sizing: border-box; position:absolute; left:0; right:0; top:0; bottom:0; border-top:[brwt] solid [brd]; border-bottom:[brwb] solid [brd]; }',
        '%inlineContent%  {[pos]}'
    ]);
});
