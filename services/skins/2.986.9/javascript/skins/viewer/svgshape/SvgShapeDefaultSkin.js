define.skin('skins.viewer.svgshape.SvgShapeDefaultSkin', function (def) {
    def.inherits('core.managers.skin.BaseSkin2');
    def.skinParams([
        {'id': 'strokewidth', 'type': Constants.SkinParamTypes.SIZE, 'defaultValue': '1px'},
        {'id': 'fillcolor', 'type': Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_11'},
        {'id': 'stroke', 'type': Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme': 'color_15'}
    ]);
    def.html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">' +
            '<g>' +
            '<polygon points="298.185,264.061 149.092,352.082 0,264.061 0,88.021 149.092,0 298.185,88.021 "/>' +
            '</g>' +
            '</svg>'
    );
    def.css([
        'svg {width: 100%; height: 100%; position: absolute; left:0; top:0; right:0; bottom:0; margin:auto;}',
        'polygon {fill: [fillcolor]; stroke: [stroke]; stroke-width:[strokewidth];}'
    ]);
});
