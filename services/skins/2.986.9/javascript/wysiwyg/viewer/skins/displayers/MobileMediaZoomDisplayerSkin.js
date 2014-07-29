define.skin('wysiwyg.viewer.skins.displayers.MobileMediaZoomDisplayerSkin', function(skinDefinition){
    /**@type core.managers.skin.SkinDefinition*/
    var def = skinDefinition;
    def.inherits('mobile.core.skins.BaseSkin');
    def.compParts({
        image: {skin:'mobile.core.skins.ImageSkin' }
    });

    def.skinParams([
        {'id':'tdr','type':Constants.SkinParamTypes.URL, 'defaultTheme':'BASE_THEME_DIRECTORY'},
        {'id': 'img','type': Constants.SkinParamTypes.OTHER, 'defaultValue': 'background-size:cover !important; background-position:50% 50% !important;'},
        {'id': 'imgPadding', 'type': Constants.SkinParamTypes.OTHER, 'defaultValue': '10'}
    ]);

    def.html(
        '<div skinPart="imageWrapper">' +
            '<div skinPart="image"></div>' +
        '</div>'+
        '<div class="gradient"></div>' +
        '<div skinPart="panel">' +

            '<div class="meta">' +
                '<h3 skinPart="title" class="displayerText"></h3>' +
                '<p skinPart="description" class="displayerText"></p>' +
                '<div skinPart="notAllDescriptionPresentedIndicator"></div>' +
                '<a skinPart="link" class="displayerText">Go to link</a>'+
            '</div>' +
        '</div>'
    );

    def.css([
        '{text-align:left; font:12px "Helvetica Neue","HelveticaNeueW01-55Roma","HelveticaNeueW02-55Roma","HelveticaNeueW10-55Roma",Helvetica,Arial,sans-serif;}',
        '%imageWrapper% {background:#000; text-align:center; position:relative;}' ,

        '%.gradient% {display:none; position:fixed; top:70%; bottom:0; left:0; right:0;' +

           'background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%);'+
           'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.75)));'+
           'background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%);'+
           'background: -o-linear-gradient(top, rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.75) 100%);'+
           'background: -ms-linear-gradient(top, rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.75) 100%);'+
           'background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%);}',

        '%panel% {position:fixed; bottom:0; left:0; right:0; padding:10px; font:bold 4em arial, sans-serif;}',
        '%image% {[img]margin:0 auto; }',
        '%comments% {margin-top: 10px; position: relative;}',

        // "max-height: 1000000px" fixes MOB-121, this workaround disables font-boosting (see: http://stackoverflow.com/questions/15261315/calculated-font-size-on-nexus-7-chrome-is-different-from-css-font-size)
        '%description% {cursor:pointer; overflow:hidden; max-height: 1000000px; font-size:1.2em;}',
        '%title% {font-size:1.8em;}',
        '%.meta% {color:#fff;}',
        '%notAllDescriptionPresentedIndicator% {height:1em; width:2.5em; background:url([tdr]three_dots.png) no-repeat;  background-size:cover}',

        '[state~=showLimitedDescription] %.gradient% {display:block}',
        '[state~=dontShowPanelText] %.gradient% {display:none}',
        '[state~=dontShowPanelText] %panel% {display:none}',

        '[state~=showLink] %link% {display: inline-block; font-size:1.4em; padding: 10px 0 15px; margin: 5px 0;color: #fff;}',
        '[state~=showLink] %link%:active {color: #333; background: #fff;}',
        '[state~=hideLink] %link% {display: none}'
    ]);
});


