define.skin('skins.viewer.facebookshare.FacebookShareSkin', function(SkinDefinition) {
    var def = SkinDefinition;
    def.inherits('core.managers.skin.BaseSkin2');
    def.skinParams([
        {'id':'tdr', 'type':Constants.SkinParamTypes.URL, 'defaultTheme':'BASE_THEME_DIRECTORY'}
    ]);
    def.html(
        '<div skinPart="facebookShareButton">' +
            '<div skinPart="shareButton">' +
                '<span skinpart="icon"></span>' +
                '<span skinpart="label"></span>' +
            '</div>' +
        '</div>'
    );

    def.css([
        '%facebookShareButton% {border: 1px solid #2d4565; border-radius: 3px; cursor: pointer; min-width: 24px; white-space: nowrap;}',
        '%shareButton% {height: 20px; border-radius: 2px; border-width: 1px; border-style: solid; border-color: #9aabc6 #6f83ad #6176a3 #6f83ad; background: url([tdr]bg_fbshare.png) 0 0 repeat-x; }',
        '%shareButton%:hover {box-shadow: inset 0 8px 13px -4px rgba(255,255,255,0.4);}',
        '%shareButton%:active {box-shadow: inset 5px 5px 10px -4px rgba(0,0,0,0.4);}',
        '%icon% {width:21px; height: 21px; background :url([tdr]facebooklogo.png) 5px 3px no-repeat; border-right: 1px solid #425e85; position:absolute;}',
        '%label% {line-height: 21px; margin-left: 22px; padding: 3px 6px; color: #fff; font-size: 12px; text-shadow: 1px 1px 1px #304871; border-left: 1px solid #6176a3;}'
    ]);
});
