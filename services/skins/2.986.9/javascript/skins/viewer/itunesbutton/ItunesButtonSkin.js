define.skin('skins.viewer.itunesbutton.ItunesButtonSkin', function(SkinDefinition) {
    var def = SkinDefinition;
    def.inherits('core.managers.skin.BaseSkin2');

    def.skinParams([
    ]);

    def.html(
        '<div skinPart="downloadButton">' +
            '<img skinPart="itunesImg" src="" alt=""/>' +
        '</div>'
    );

    def.css([
        '{cursor:pointer;}',
        '%itunesImg% {width:100%;height:100%}'
    ]);
});
