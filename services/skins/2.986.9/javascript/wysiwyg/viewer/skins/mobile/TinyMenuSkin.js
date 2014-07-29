define.skin('wysiwyg.viewer.skins.mobile.TinyMenuSkin', function(skinDefinition){
    /**@type core.managers.skin.SkinDefinition*/
    var def = skinDefinition;
    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {'id':'bg',   'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'},
        {'id':'bgs',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_18'},
        {'id':'txts', 'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_11'},
        {'id':'txt',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_11'}
    ]);

    def.html(
        '<div skinPart="menuButton" >' +
        '</div>'+
        '<div skinPart="menuContainer"></div>'
    );

    def.css([
        '%menuButton% { position:relative; width: 50px; height: 50px; background-color: [bg]; border: solid 1px [txt]; border-radius: 4px; cursor: pointer; z-index:2; box-sizing:border-box; -moz-box-sizing:border-box;}',
        '%menuButton%:after { position: absolute; content: "≡"; color:[txt]; width: 100%; line-height: 50px; font-size:34px; text-align: center;}',
        '%menuButton%.tiny-menu-open:after{ position: absolute; content: "✕"; color:[txt]; width: 100%; line-height: 50px; font-size:24px; text-align: center;}',
        '%menuContainer% {position:absolute; z-index:2; font-size: 16px; border: solid 1px [txt];}',
        '%menuContainer% .tiny-menu-top-menu{overflow-y:auto;overflow-x:hidden;display:none;}',
        '%menuContainer% .tiny-menu-top-menu.tiny-menu-open{display:block;}',
        '%menuContainer% li{opacity:0.95;height:48px;line-height:48px;background-color:[bg];border-bottom:1px solid [txt];cursor:pointer;position:relative; color:[txt]}',
        '%menuContainer% li:last-child{border-bottom:none;}',
        '%menuContainer% li.tiny-menu-open{height:auto;}',
        '%menuContainer% li.tiny-menu-open>a{border-bottom:1px solid [txt];}',
        '%menuContainer% li.tiny-menu-open>.tiny-menu-toggle-items{background: [bgs]}',
        '%menuContainer% ul.tiny-menu-sub-menu{display:none;clear:both;}',
        '%menuContainer% li.tiny-menu-open>.tiny-menu-toggle-items+.tiny-menu-sub-menu{display:block;}',
        '%menuContainer% ul.tiny-menu-sub-menu li{background-color: [bg];}',
        '%menuContainer% a.tiny-menu-current-page{background-color: [bgs]; color: [txts];}',

        '%menuContainer% li > a {padding:0 17px;float:left;width:100%;display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; box-sizing:border-box; -moz-box-sizing:border-box;color:[txt]}',
        '[state=left] %menuContainer% li > a {text-align:left}',
        '[state=right] %menuContainer% li > a {text-align:right}',
        '[state=center] %menuContainer% li > a {text-align:center}',

        '[state=left] %menuContainer% .hasChildren span:after {width:50px; text-align: center; line-height: 48px; content: "∨"; -webkit-transform: rotate(0deg); transform: rotate(0deg); position: absolute; font-size: 30px; color:[txt]}',
        '[state=center] %menuContainer% .hasChildren span:after {width:50px; text-align: center; line-height: 48px; content: "∨"; -webkit-transform: rotate(0deg); transform: rotate(0deg); position: absolute; font-size: 30px; color:[txt]; right:0}',
        '[state=right] %menuContainer% .hasChildren span:before {width:50px; text-align: center; line-height: 48px; content: "∨"; -webkit-transform: rotate(0deg); transform: rotate(0deg); position: absolute; font-size: 30px; color:[txt]; left:0}',
        '[state=right] %menuContainer% .hasChildren span:after {content:""}',

        '[state=left] %menuContainer% li.hasChildren>a{padding-right:67px; padding-left:17px}',
        '[state=right] %menuContainer% li.hasChildren>a{padding-left:67px; padding-right:17px}',
        '[state=center] %menuContainer% li.hasChildren>a{padding:0 17px}',

        '[state=left] %menuContainer% ul.tiny-menu-sub-menu a{padding-left: 34px}',
        '[state=right] %menuContainer% ul.tiny-menu-sub-menu a{padding-right: 34px}',
        '[state=center] %menuContainer% ul.tiny-menu-sub-menu a{padding:0}',

        '[state=left] .tiny-menu-toggle-items {width:50px;height:48px;display:block;position:absolute;top:0;right:0;border-left:1px solid [txt];background: [bg];}',
        '[state=center] .tiny-menu-toggle-items {width:50px;height:48px;display:block;position:absolute;top:0;right:0;border-left:1px solid [txt];background: [bg];}',
        '[state=right] .tiny-menu-toggle-items {width:50px;height:48px;display:block;position:absolute;top:0;left:0;border-right:1px solid [txt];background: [bg];}'

    ]);

});


