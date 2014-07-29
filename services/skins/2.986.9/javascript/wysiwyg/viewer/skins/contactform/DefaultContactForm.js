define.skin('wysiwyg.viewer.skins.contactform.DefaultContactForm', function (SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.statics({
        hidePlaceholders: false
    });

    def.inherits('core.managers.skin.BaseSkin2');

    def.skinParams([
        {'id': 'bg1', 'type': Constants.SkinParamTypes.BG_COLOR, 'defaultTheme': 'color_11', lang: 'fieldBg'},
        {'id': 'bg2', 'type': Constants.SkinParamTypes.BG_COLOR, 'defaultTheme': 'color_18', lang: 'buttonBg'},
        {'id': 'txt1', 'type': Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_15', lang: 'fieldTxt'},
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

        '<div skinpart="wrapper">' +
            '<ul class="row form">' +
            '<li class="col left">' +
            '<input type="text" skinpart="name" name="name">' +
            '<input type="text" skinpart="email" name="email">' +
            '<input type="text" skinpart="phone" name="phone">' +
            '<input type="text" skinpart="address" name="address">' +
            '<input type="text" skinpart="subject" name="subject">' +
            '</li>' +
            '<li class="col right">' +
            '<textarea skinpart="message" name="message"></textarea>' +
            '</li>' +
            '</ul>' +
            '<div class="foot">' +
            '<span skinpart="notifications"></span>' +
            '<button skinpart="submit">send</button>' +
            '</div>' +
            '</div>'
    );

    def.css([
        '%wrapper%     { position: absolute; width:100%;}',
        'li                         { [box] position:relative;}',
        'ul                         { [box] position:relative;}',
        '[state~=desktop]               li        { width:50%; }',
        '[state~=desktop][state~=left]  li.left   { margin:0; }',
        '[state~=desktop][state~=right] li.left   { margin-left:50%; }',
        '[state~=desktop][state~=left]  li.right   { position:absolute; top:0; bottom:0; right:2px; padding:0 0 5px 5px;}',
        '[state~=desktop][state~=right] li.right   { position:absolute; top:0; bottom:0; left:2px;  padding:0 5px 5px 0;}',
        '[state~=mobile]                li        { width:100%; display:block;}',
        ' .foot  { position:relative; min-height:50px;}',
        'span                        { position: absolute; top:0; color: [txt1]; font: normal 14px "Helvetica Neue", Helvetica, sans-serif; }',
        'button                      { position: absolute; top:0; color: [txt2]; [bg2][fnt2] [box][rd][shd] padding:5px; border:none; cursor:pointer; }',
        'input                       { color: [txt1]; [bg1][fnt]  [box][rd][shd] border:[brw] solid [brd]; padding:5px; margin:0 0 5px 0; width:100%; -webkit-appearance: none;}',
        'textarea                    { color: [txt1]; [bg1][fnt]  [box][rd][shd] border:[brw] solid [brd]; padding:5px; margin:0 0 5px 0; width:100%; height:100%; resize: none; -webkit-appearance: none;}',
        '[state~=mobile] input       { line-height:45px; height:45px; font-size:16px; margin-bottom:15px; }',
        '[state~=mobile] textarea    { font-size:16px; height:130px; }',
        'span.success                { color: [txtSuccess]; }',
        'span.error                  { color: [txtError];   }',
        'input.error, textarea.error { color: [txtError]; [fnt] border:1px solid [txtError]; }',
        '[state~=mobile] ::-webkit-input-placeholder { line-height:45px; font-size:16px; }',
        '[state~=mobile] ::-moz-placeholder          { line-height:45px; font-size:16px; }',
        '[state~=mobile] :-ms-input-placeholder      { line-height:45px; font-size:16px; }',
        '[state~=mobile] .isPlaceholder              { line-height:45px; font-size:16px; }',
        '.isPlaceholder, ::-webkit-input-placeholder, ::-moz-placeholder, :-ms-input-placeholder                         { color: [labelTxt]; [fnt] }',
        '.isPlaceholder.error, .error::-webkit-input-placeholder, .error::-moz-placeholder, .error:-ms-input-placeholder { color: [txtError]; [fnt] }',
        '[state~=right]        { direction:rtl; text-align: right; }',
        '[state=left]          { direction:ltr; text-align: left; }',
        '[state~=left]  button  { right:0; }',
        '[state~=right]  button { left:0;  }',
        '[state~=left]  span    { right: 100px; left: 0;}',
        '[state~=right]  span   { left: 100px; right: 0;}',
        '[state~=hidden] %wrapper% {visibility: hidden;}',
        '[state~=visible] %wrapper% {visibility: visible;}'
    ]);
});