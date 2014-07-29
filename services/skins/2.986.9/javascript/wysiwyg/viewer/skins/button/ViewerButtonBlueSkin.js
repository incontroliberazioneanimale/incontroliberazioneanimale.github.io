define.skin('wysiwyg.viewer.skins.button.ViewerButtonBlueSkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.skinParams([
	    {
	        "id": "$borderRadius",
	        "type": Constants.SkinParamTypes.BORDER_RADIUS,
	        "defaultValue": "4px"
	    },
	    {
	        "id": "shadowColor",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "0,0,0,.2"
	    },
	    {
	        "id": "shadowInsetColor",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "0,0,0,.7"
	    },
	    {
	        "id": "shadowInsetColorOver",
	        "type": Constants.SkinParamTypes.COLOR_ALPHA,
	        "defaultValue": "68,175,233,.7"
	    },
	    {
	        "id": "borderColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#5b8fa7"
	    },
	    {
	        "id": "borderColorOver",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#237aa7"
	    },
	    {
	        "id": "bgColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#2aa7ea"
	    },
	    {
	        "id": "bgColorOver",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#179ce1"
	    },
	    {
	        "id": "labelColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#ffffff"
	    },
	    {
	        "id": "borderGrayColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#c4c4c4"
	    },
	    {
	        "id": "borderGrayColorOver",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#89a4af"
	    },
	    {
	        "id": "bgGrayColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#f9fafc"
	    },
	    {
	        "id": "bgGrayColorOver",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#f2f3f5"
	    },
	    {
	        "id": "labelGrayColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#24a0c4"
	    },
	    {
	        "id": "borderDisabledColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#d5d5d5"
	    },
	    {
	        "id": "bgDisabledColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#f9fafc"
	    },
	    {
	        "id": "labelDisabledColor",
	        "type": Constants.SkinParamTypes.COLOR,
	        "defaultValue": "#c4c4c4"
	    }
	]);

	def.html(
		'<div skinpart="caption">' +
		'</div>');

	def.css([
		'{padding: 0 8px; border: 1px solid [borderColor]; [$borderRadius]; background-color: [bgColor] ; position:relative; text-align: center; cursor: pointer}',
		'[state~=over] {border: 1px solid [borderColorOver]; background: [bgColorOver] none; box-shadow: 0 2px 3px 0 [shadowColor], 0 1px 2px 0 [shadowInsetColorOver] inset}',
		'[state~="pressed"] {background: [bgColor] none; border-color: transparent; box-shadow: 0 1px 3px 0 [shadowInsetColor] inset}',
		'%caption% {color: [labelColor]; height:1.8em; line-height:1.8em;}',
		'[state~=grayed] {border-color: [borderGrayColor]; background-color: [bgGrayColor] }',
		'[state~=grayed][state~=over] {border-color: [borderGrayColorOver]; background-color: [bgGrayColorOver]; box-shadow: 0 2px 3px 0 [shadowColor], 0 1px 2px 0 #ffffff inset}',
		'[state~=grayed][state~=pressed] {border-color: transparent; background-color: [bgGrayColor]}',
		'[state~=grayed] %caption% {color: [labelGrayColor];}',
		'[disabled] {border-color: [borderDisabledColor]; background-color: [bgDisabledColor] }',
		'[disabled] %caption% {color: [labelDisabledColor];}'
	]);

});