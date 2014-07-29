define.skin('skins.viewer.gallery.SlideShowCleanAndSimple2', function(skinDefinition){
    //@type core.managers.skin.SkinDefinition
    var def = skinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.compParts({
        imageItem: {skin:'skins.viewer.displayers.SlideCleanAndSimple2Displayer', styleGroup:'inherit' }
    });

    def.skinParams([
        {'id':'brd','type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_15'},
        {'id':'abg','type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_14'},
        {'id':'abgh','type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_15'},
        {'id':'txt','type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_11'},
        {'id':'brw','type':Constants.SkinParamTypes.SIZE, 'defaultValue': '0px'},
        {'id':'rd',  'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '0px'},
        {'id':'shd', 'type':Constants.SkinParamTypes.BOX_SHADOW, 'defaultValue':'0 1px 3px rgba(0, 0, 0, 0.5);'},
        {'id':'trns','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'opacity 0.5s ease 0s'},
        {'id':'pos',  'type':Constants.SkinParamTypes.OTHER, 'defaultValue': 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'},
        {'id':'arial','type':Constants.SkinParamTypes.OTHER,'defaultValue': 'font-family: arial, helvetica,sans-serif; font-size: 12px;'},
        {'id':'tdr', 'type':Constants.SkinParamTypes.URL, 'defaultTheme':'BASE_THEME_DIRECTORY'}
    ]);

    def.html(
        '<div class="border"></div>'+
            '<div skinPart="itemsContainer"></div>' +
            '<div class="buttons">' +
            '<div class="btn" skinPart="buttonPrev">' +
                '<div class="arrowLeft arrow"></div>' +
            '</div>' +
            '<div class="btn" skinPart="buttonNext">' +
                '<div class="arrowRight arrow"></div>' +
            '</div>' +
        '</div>'+
        '<div class="helpers">'+
            '<div skinPart="autoplay"><span></span></div>'+
            '<div skinPart="counter"></div>' +
        '</div>'
    );

    def.css([
        '{[rd] [shd] overflow: hidden;background: [brd];}',
        '%.border% {[pos] [rd] border: [brw] solid [brd]; pointer-events: none; background: none !important;}',
        '%itemsContainer% {[pos] [rd] overflow: hidden; -o-transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);}',
        '%.btn% {[trns] position: absolute; top: 0; bottom: 0; margin: auto; width: 40px; height: 40px; background: [abg]; cursor: pointer;}',
        '%.arrow% {background: url([tdr]tiny_arrows.png) no-repeat; position: absolute; top: 0; bottom: 0; margin: auto; width: 8px; height: 16px;}',
        '[state~=mobile] %.btn% {opacity: 1;}',
        '%buttonPrev% {left: 20px;}',
        '%buttonNext% {right: 20px;}',
        '%.arrowLeft% {background-position: 0 0; left: 50%; margin-left: -4px;}',
        '%.arrowRight% {background-position: 100% 0; right: 50%; margin-right: -4px;}',
        '%.helpers% {[trns] opacity: 0; filter: alpha(opacity=0); position:absolute; right: [brw]; padding: 10px 10px 10px 0; width: 60px; text-align:right;}',
        '%counter% {display: inline-block; color: [txt]; [arial] padding-left: 5px;}',
        '%autoplay% {display: inline-block; padding-left: 10px; width: 20px; min-height: 10px; position: relative; text-align: center;}',
        '%autoplay% > span {display: inline-block; position: relative; z-index: 0;}',
        '[state~=autoplayOff] %autoplay% > span {border: 5px solid transparent; border-left: 5px solid [txt]; width: 0; height: 0px;}',
        '[state~=autoplayOn] %autoplay% > span {border-left: 2px solid [txt]; border-right: 2px solid [txt]; height: 10px; width: 1px; margin-right: 5px;}',
        '%.buttons% {[trns]}',
        '[state~=mobile] %.buttons% {opacity: 1;}',
        ':hover > %.buttons% {background: [abgh]; [trns]}',
        ':hover > %.helpers% {opacity: 1; filter: alpha(opacity=100);}',
        ':hover .pnl {opacity: 1; filter: alpha(opacity=100);}',
        '[state~=showTextPanel] .pnl {opacity: 1; filter: alpha(opacity=100);}',
        '%.btn%:hover {background: [abgh]; [trns]}',
        '[state~=touchRollOver] %.buttons% {background: [abgh]; [trns]}',
        '[state~=touchRollOver] %.helpers% {opacity: 1; filter: alpha(opacity=100);}',
        '[state~=touchRollOver] .pnl {opacity: 1; filter: alpha(opacity=100);}',
        '[state~=touchRollOver] %.btn% {background: [abgh];}',
        '[state~=showButtons] %.buttons% {opacity: 1; filter: alpha(opacity=100);}'
    ]);
});