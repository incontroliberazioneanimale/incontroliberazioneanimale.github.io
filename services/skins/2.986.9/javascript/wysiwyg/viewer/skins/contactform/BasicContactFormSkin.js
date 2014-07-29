define.skin('wysiwyg.viewer.skins.contactform.BasicContactFormSkin', function (SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        hidePlaceholders: false
    });

    def.inherits('core.managers.skin.BaseSkin2');

    def.skinParams([
        {'id': 'bg1', 'type': Constants.SkinParamTypes.BG_COLOR, 'defaultTheme': 'color_11', lang: 'fieldBg'},
        {'id': 'txt1', 'type': Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_15', lang: 'fieldTxt'},
        {'id': 'bg2', 'type': Constants.SkinParamTypes.BG_COLOR, 'defaultTheme': 'color_18', lang: 'buttonBg'},
        {'id': 'txt2', 'type': Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_15', lang: 'buttonTxt'},
        {'id': 'labelTxt', 'type': Constants.SkinParamTypes.COLOR, 'defaultValue': 'rgba(169,169,169,1)', enableEdit: true},
        {'id': 'txtError', 'type': Constants.SkinParamTypes.COLOR, 'defaultValue': 'rgba(139,0,0,1)', enableEdit: true},
        {'id': 'txtSuccess', 'type': Constants.SkinParamTypes.COLOR, 'defaultValue': 'rgba(186,218,85,1)', enableEdit: true},
        {'id': 'brd', 'type': Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_15'},
        {'id': 'brw', 'type': Constants.SkinParamTypes.SIZE, 'defaultValue': '0px'},
        {'id': 'fnt', 'type': Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_7', lang: 'fieldFont'},
        {'id': 'fnt2', 'type': Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_7', lang: 'buttonFont'},
        {'id': 'rd', 'type': Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '5px'},
        {'id': 'shd', 'type': Constants.SkinParamTypes.BOX_SHADOW, 'defaultValue': '0 1px 4px rgba(0, 0, 0, 0.6);'},
        {'id': 'box', 'type': Constants.SkinParamTypes.OTHER, 'defaultValue': '-moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box;'}
    ]);

    def.html(
        '<div skinpart="wrapper">'
            + '<input type="text" skinpart="name"/>'
            + '<input type="text" skinpart="email"/>'
            + '<input type="text" skinpart="phone"/>'
            + '<input type="text" skinpart="address"/>'
            + '<input type="text" skinpart="subject"/>'
            + '<textarea skinpart="message"></textarea>'
            + '<button skinpart="submit">submit</button>'
            + '<span skinpart="notifications"></span>'
            + '</div>'
    );

    def.css([
        '%wrapper% { position: absolute; width:100%;}',
        'span     { float:left; max-width:60%; color:[txt1]; font: normal 14px "Helvetica Neue", Helvetica, sans-serif;}',
        'button   { float:right; max-width:35%; [rd][shd][bg2][fnt2] color:[txt2]; padding:5px; border:none; cursor:pointer; margin:0; }',
        'input    { [rd][shd][bg1][fnt] color:[txt1]; padding:5px; margin:0 0 5px 0;  border:[brw] solid [brd]; width:100%; -webkit-appearance: none;}',
        'textarea { [rd][shd][bg1][fnt] color:[txt1]; padding:5px; margin:0 0 5px 0;  border:[brw] solid [brd]; width:100%; min-height:130px; resize: none; -webkit-appearance: none;}',
        'span.success                { color: [txtSuccess]; }',
        'span.error                  { color: [txtError];   }',
        'input.error, textarea.error { color: [txtError]; [fnt] border:1px solid [txtError]; }',

        ' input:-moz-placeholder, textarea:-moz-placeholder{ color:[labelTxt]; }',
        ' input.isPlaceholder, textarea.isPlaceholder{ color:[labelTxt]; }',
        ' input::-moz-placeholder, textarea::-moz-placeholder{ color:[labelTxt]; }',
        ' input:-ms-input-placeholder, textarea:-ms-input-placeholder { color:[labelTxt]; }',
        ' input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{ color:[labelTxt]; }',

        '[state~=mobile] input:-moz-placeholder  { color:[labelTxt]; font-size: 16px; }',
        '[state~=mobile] input                   { color:[txt1]; font-size: 16px; margin: 0 0 15px;  height: 45px; line-height: 45px; padding:0 5px;}',
        '[state~=mobile] textarea                { color:[txt1]; font-size: 16px; margin: 0 0 10px; height:150px; }',
        '[state~=mobile] .isPlaceholder          { color:aqua; font-size: 16px; }',
        '[state~=mobile] ::-moz-placeholder      { color:[labelTxt]; font-size: 16px; };',
        '[state~=mobile] :-ms-input-placeholder  { color:[labelTxt]; font-size: 16px; };',
        '[state~=mobile] ::-webkit-input-placeholder { font-size: 16px; };',

        '[state~=right]          { direction:rtl; text-align: right; }',
        '[state~=left]           { direction:ltr; text-align: left; }',
        '[state~=right] span     { float:right; }',
        '[state~=right] button   { float:left; }',
        '[state~=left] span      { float:left; }',
        '[state~=left] button    { float:right; }',
        '[state~=hidden] %wrapper% {visibility: hidden;}',
        '[state~=visible] %wrapper% {visibility: visible;}'
    ]);

});