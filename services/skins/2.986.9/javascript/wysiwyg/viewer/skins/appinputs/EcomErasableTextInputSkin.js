define.skin('wysiwyg.viewer.skins.appinputs.EcomErasableTextInputSkin', function(skinDefinition) {

    var def = skinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        { 'id':'bg',  'type':Constants.SkinParamTypes.BG_COLOR,'defaultValue':'#e3e3e3', enableEdit:true },
        { 'id':'brd', 'type':Constants.SkinParamTypes.COLOR, 'defaultValue':'#e3e3e3', enableEdit:true },
        { 'id':'txt', 'type':Constants.SkinParamTypes.COLOR, 'defaultValue':'#000000', enableEdit:true },
        { 'id':'brw', 'type':Constants.SkinParamTypes.SIZE,  'defaultValue':'1px', enableEdit:true},
        { 'id':'fnt', 'type':Constants.SkinParamTypes.FONT,         'defaultTheme':'font_8' },
        { 'id':'rd',  'type':Constants.SkinParamTypes.BORDER_RADIUS,'defaultValue':'0px' },
        { 'id':'trns','type':Constants.SkinParamTypes.TRANSITION,   'defaultValue':'opacity 0.5s ease 0s, border 0.5s ease 0s, color 0.5s ease 0s' },
        { 'id':'box', 'type':Constants.SkinParamTypes.OTHER, 'defaultValue':'box-sizing:border-box !important; -moz-box-sizing:border-box !important; -ms-box-sizing:border-box !important; -webkit-box-sizing:border-box !important;' }
    ]);

    def.html('<label skinpart="label"></label>' +
             '<input skinpart="input" type="text" />' +
             '<span skinpart="erase">✖</span>' +
             '<p skinpart="message"></p>');

    def.css([
        '{ position: relative; }',
        '%input% { [bg][rd][box][fnt][trns] color:[txt]; border:[brw] solid [brd]; padding:6px; margin:0; width:100%; min-height:100%;}',

        'input ::-ms-clear { display: none; }',

        '%erase% { position: absolute; font-size:12px; top: 5px; right: 5px; cursor: pointer; width:20px; height: 20px; text-align: center; line-height:20px; color:[txt]; }',

        '%message% { margin-top:13px; color: #d00; }',

        '[state~="showButton"] %erase% { display: block; }',
        '[state~="showButton"] %input% { padding-right: 30px; }',
        '[state~="hideButton"] %erase% { display: none; }',

        '[state~="invalid"] %input% { border-color:#d00; }'
    ]);

});
