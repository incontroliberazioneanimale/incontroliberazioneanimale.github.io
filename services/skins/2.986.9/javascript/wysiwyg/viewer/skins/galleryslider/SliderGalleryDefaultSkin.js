define.skin('wysiwyg.viewer.skins.galleryslider.SliderGalleryDefaultSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.statics({
	    "widthDiff": 0,
	    "heightDiff": 0
	});

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
        imageItem: {skin:'wysiwyg.viewer.skins.galleryslider.SliderDisplayerDefaultSkin', styleGroup:'inherit' }
	});

	def.skinParams([
        {'id':'tdr','type':Constants.SkinParamTypes.URL, 'defaultTheme':'BASE_THEME_DIRECTORY'},
	    {"id": "trans", "type": Constants.SkinParamTypes.TRANSITION, "defaultValue": "opacity 0.4s ease 0s"},
        {'id': 'img','type': Constants.SkinParamTypes.OTHER, 'defaultValue': 'background-size:cover !important; background-position:50% 50% !important;'}

    ]);

    def.html(
        '<div skinPart="itemsContainer"></div>'+
            '<div skinPart="counter"></div>' +
            '<div skinPart="swipeLeftHitArea" class="arr"></div><div skinPart="swipeRightHitArea" class="arr"></div>' +
            '<div skinPart="autoplay">AUTOPLAY</div>'
    );

	def.css([
        '%itemsContainer% { position:absolute; left:35px !important; right:35px !important; top:0px; bottom:0px; border: solid 1px red; }',
        '[state~=mobileView] %itemsContainer% { position:absolute; left:0 !important; right:0 !important; top:0px; bottom:0px; border: solid 1px red; }',
        '%.arr% { position:absolute; top:20%;  bottom:20%; width:45px; background:url([tdr]arrows_white_new3.png) no-repeat;  cursor:pointer;}',
        '%swipeLeftHitArea%  { left:-5px; background-position: 0 50%; filter: alpha(opacity=50); opacity: 0.5; [trans] }',
        '%swipeRightHitArea% { right:-5px; background-position: 100% 50%; filter: alpha(opacity=50); opacity: 0.5; [trans] }',
        '%swipeLeftHitArea%:hover  { filter: alpha(opacity=100); opacity: 1; [trans] }',
        '%swipeRightHitArea%:hover { filter: alpha(opacity=100); opacity: 1; [trans] }',
        '%autoplay% { display:none }',
        '[state~=mobileView] %swipeRightHitArea% { background-position: 100% 50%; filter: alpha(opacity=50); opacity: 0.5; [trans] }',
        '[state~=mobileView] %swipeLeftHitArea%  { background-position: 0 50%; filter: alpha(opacity=50); opacity: 0.5; [trans] }'
	]);

});