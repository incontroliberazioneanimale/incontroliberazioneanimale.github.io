define.skin('skins.core.GooglePlusOneSkin', function(SkinDefinition) {

    /** @type core.managers.skin.SkinDefinition */

    var def = SkinDefinition;

    def.inherits('mobile.core.skins.BaseSkin');

    def.skinParams([
        {
            "id": "tdr",
            "type": Constants.SkinParamTypes.URL,
            "defaultTheme": "BASE_THEME_DIRECTORY"
        }
    ]);

    def.html('<div skinPart="googlePlus">' + '</div>');

    def.css([
        '[state~="small_bubble"] { background:url([tdr]google-plus-small-bubble.png) no-repeat }', '[state~="small_none"] { background:url([tdr]google-plus-small-none.png) no-repeat  }', '[state~="small_inline"] { background:url([tdr]google-plus-small-inline.png) no-repeat  }', '[state~="medium_bubble"] {  background:url([tdr]google-plus-medium-bubble.png) no-repeat  }', '[state~="medium_none"] {  background:url([tdr]google-plus-medium-none.png) no-repeat }', '[state~="medium_inline"] { background:url([tdr]google-plus-medium-inline.png) no-repeat  }', '[state~="standard_bubble"] {background:url([tdr]google-plus-standard-bubble.png) no-repeat  }', '[state~="standard_none"] { background:url([tdr]google-plus-standard-none.png) no-repeat }', '[state~="standard_inline"] { background:url([tdr]google-plus-standard-inline.png) no-repeat  }', '[state~="tall_bubble"] { background:url([tdr]google-plus-tall-bubble.png) no-repeat }', '[state~="tall_none"] { background:url([tdr]google-plus-tall-none.png) no-repeat }', '[state~="tall_inline"] { background:url([tdr]google-plus-tall-inline.png) no-repeat }'
    ]);

});