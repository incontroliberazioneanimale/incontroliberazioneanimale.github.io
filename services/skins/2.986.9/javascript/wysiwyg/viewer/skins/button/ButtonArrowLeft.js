define.skin('wysiwyg.viewer.skins.button.ButtonArrowLeft', function(skinDefinition){
    /** @type core.managers.skin.SkinDefinition */
    var def = skinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.fields({
        maxH:100
    });

    def.skinParams([
        {'id':'bg',   'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_17'},
        {'id':'bgh',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_18'},
        {'id':'txth', 'type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_15'},
        {'id':'txt',  'type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_15'},
        {'id':'fnt',  'type':Constants.SkinParamTypes.FONT,'defaultTheme':'font_5'}
    ]);

    def.html(
        '<div class="arr top"></div>' +
        '<div class="arr bottom"></div>' +
        '<div class="bg"></div>' +
        '<a skinPart="link"><span skinPart="label"></span></a>'
    );

    def.css([
        '{ overflow: hidden; -webkit-transform: rotate(360deg); }',
        '%.bg% { background: [bg]; position: absolute; top: 0; bottom: 0; left: 50px; right: 0; }',
        '%link% { position: absolute; top: 0; bottom: 0; left: 0; right: 0; cursor: pointer !important; }',
        '%label% { [fnt]; color: [txt]; white-space: nowrap; display: inline-block; position: relative; }',
        '%.top%    { position: absolute; left: 0; bottom: 50%; border-bottom: 50px solid [bg]; border-left: 50px solid transparent; border-right: 0;}',
        '%.bottom% { position: absolute; left: 0;    top: 50%;    border-top: 50px solid [bg]; border-left: 50px solid transparent; border-right: 0;}',

        ':hover %.bg% { background: [bgh];}',
        ':hover %label% { color: [txth]; }',
        ':hover %.top% {border-bottom-color: [bgh];}',
        ':hover %.bottom% {border-top-color: [bgh];}'
    ]);



});
//https://wixpresss.atlassian.net/browse/WOH-898
