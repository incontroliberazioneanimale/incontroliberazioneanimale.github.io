define.skin("wysiwyg.viewer.skins.MobileTryAgainMessageViewSkin", function(skinDefinition){
    /** @type core.managers.skin.SkinDefinition */
    var def = skinDefinition;

    def.inherits("mobile.core.skins.BaseSkin");
    def.skinParams([
        {'id':'bg', 'type':Constants.SkinParamTypes.BG_COLOR, 'mutators':['alpha',75], 'defaultValue':'#000000'},
        {'id':'rd', 'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue':'5px'}
    ]);
    def.html(
        '<div skinPart="blockingLayer">' +
            '<div skinPart="dialog">'+
                '<strong skinPart="title"></strong>'+
                '<p skinPart="description"></p>'+
                '<div skinPart="okButton" skin="wysiwyg.viewer.skins.button.ViewerButtonBlueSkin"></div>' +
                '<div skinpart="backButton"></div>' +
            '</div>' +
        '</div>'
    );
    def.css([
        '{ position:fixed; width:100%; height:100%; z-index:99; color:#404040; font-size: 14px; font-family: "Helvetica Neue","HelveticaNeueW01-55Roma","HelveticaNeueW02-55Roma","HelveticaNeueW10-55Roma", Helvetica, Arial, sans-serif;}',
        '%blockingLayer% { [bg] position:fixed; top:0; bottom:0; left:0; right:0; visibility:visible; zoom:1; overflow: auto; }',
        '%dialog% { [rd] position:absolute; top:35%; left:50%; margin-left:-140px; width: 280px; background: #fdfdfd; }',
        '%title% { padding: 0 10px; line-height: 34px; border-bottom: 1px solid #ccc; display:block; font-size: 15px; font-style: normal; font-variant: normal; font-weight: 700;}',
        '%description% { max-height: 650px; min-height: 10px; height: auto; padding: 10px;}',
        '%okButton% { float:right; margin:10px;}',
        '%backButton% { float:left; margin:10px; text-decoration: underline; cursor: pointer;}'
    ]);
});
