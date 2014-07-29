define.skin('wysiwyg.viewer.skins.TwitterFeedSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {'id':'bg', 'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_11'},
        {'id':'bg2', 'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_12'},
        {'id':'txt','type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_15'},
        {'id':'tdr', 'type':Constants.SkinParamTypes.URL, 'defaultTheme':'BASE_THEME_DIRECTORY'},
        {'id':'rd', 'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '5px'}
    ]);

    def.html(

        '<div skinPart="header">' +
            '<a class="tw" href="https://twitter.com"></a>' +
            '<a href="" skinPart="link">' +
            '<span skinPart="label"></span>' +
            '</a>' +
            '</div>' +
            '<div skinPart="content"></div>'

    );

    def.css([

        '{[bg2][rd] position:absolute; top:0; bottom: 0; right: 0; left: 0;}',
        '%content% { [bg] position:absolute; top:60px; bottom:60px; right:0; left:0; [rd] padding:10px; }',
        '%header% {height:50px; overflow:hidden; padding:5px; }',
        '%label% {  color:[txt]; display:inline-block; margin-right:10px; font-family:lucida grande, lucida, tahoma, helvetica, arial, sans-serif; font-size:16px; font-weight:bold;}',
        '%.tw% {display:inline-block; background:url([tdr]widget-bird.png) no-repeat 0 0; width:18px; height:16px; }'
    ]);

});