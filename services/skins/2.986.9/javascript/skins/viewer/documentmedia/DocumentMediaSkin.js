define.skin('skins.viewer.documentmedia.DocumentMediaSkin', function (SkinDefinition) {
    var def = SkinDefinition;

    def.inherits('core.managers.skin.BaseSkin2');
    def.compParts({
        'img': { skin: 'skins.core.ImageNewSkin' }
    });

    def.skinParams([
        {'id': 'txth', 'type': Constants.SkinParamTypes.COLOR, 'defaultTheme': 'color_13'},
        {'id': 'txt', 'type': Constants.SkinParamTypes.COLOR, 'defaultTheme': 'color_15'},
        {'id': 'fnt', 'type': Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_8'},

        {'id': 'brw', 'type': Constants.SkinParamTypes.SIZE, 'defaultValue': '5px', 'noshow': true},

        {'id': 'contentPaddingLeft', 'type': Constants.SkinParamTypes.SIZE, 'sumParams': ['brw'], 'usedInLogic': true},
        {'id': 'contentPaddingRight', 'type': Constants.SkinParamTypes.SIZE, 'sumParams': ['brw'], 'usedInLogic': true},
//        {'id': 'contentPaddingBottom','type':Constants.SkinParamTypes.SIZE, 'sumParams': ['brw'], 'usedInLogic': true},
        {'id': 'contentPaddingTop', 'type': Constants.SkinParamTypes.SIZE, 'sumParams': ['brw'], 'usedInLogic': true}
    ]);

    def.html(
        '<a skinPart="link">' +
            '<div skinPart="img" skin="mobile.core.skins.ImageNewSkin"></div>' +
            '<span skinPart="label"></span>' +
        '</a>'
    );

    def.css([
        '{text-align: center;}',
        '%link% {cursor: pointer !important; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }',
        '%img% {margin: 0 auto; overflow: hidden;}',
        '%img% img {margin: 0 !important; vertical-align: middle;}',
        '%label% {[fnt] color:[txt]; white-space: nowrap; transition: color 0.5s ease 0s; -moz-transition: color 0.5s ease 0s; -webkit-transition: color 0.5s ease 0s;}',
        ':hover %label% {color:[txth]}'
    ]);
});
