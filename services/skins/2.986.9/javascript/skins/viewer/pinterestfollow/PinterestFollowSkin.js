define.skin('skins.viewer.pinterestfollow.PinterestFollowSkin', function(SkinDefinition) {
    var def = SkinDefinition;
    def.inherits('core.managers.skin.BaseSkin2');
    def.skinParams([
        {'id':'tdr', 'type':Constants.SkinParamTypes.URL, 'defaultTheme':'BASE_THEME_DIRECTORY'}
    ]);
    def.html(
        '<a target="_blank" skinPart="followButton">' +
            '<div skinPart="followButtonTag"></div>' +
            '<div class="icon"></div>' +
        '</a>'
    );

    def.css([
        '%followButtonTag% {color: #444; font: bold normal normal 11px/20px "Helvetica Neue",helvetica,arial,san-serif!important; height: 16px; margin: 0; padding: 0px 4px 2px 22px; border-radius: 3px; position: relative; text-decoration: none; vertical-align: baseline; background: rgba(0, 0, 0, 0) url([tdr]pinterest_follow.jpg) 0 0 repeat-x; border: 1px solid #c9c9c5; white-space: nowrap;}',
        '%.icon%{position: absolute; top: 3px; left: 5px; height: 14px; width: 14px; background-size: 14px 14px; background-image: url([tdr]log1.png);}',
        ':hover %followButtonTag% {border: 1px solid #aaaaaa;}',
        ':active %followButtonTag% { background: rgba(0, 0, 0, 0) url([tdr]pinterest_follow_down.jpg) 0 0 repeat-x;}'
    ]);
});
