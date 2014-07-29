define.skin('skins.core.TwitterTweetSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.html('<div skinPart="twitter" />');

    def.css([
        '%twitter% {}'
    ]);

});