define.skin('skins.core.InlineSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;
    def.inherits('mobile.core.skins.BaseSkin');
    def.methods({
        _buildSkin: function() {
            return {'view': this._viewNode, 'inlineContent': this._viewNode};
        }
    });
});