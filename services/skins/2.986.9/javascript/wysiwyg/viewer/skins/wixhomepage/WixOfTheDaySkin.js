define.skin('wysiwyg.viewer.skins.wixhomepage.WixOfTheDaySkin', function(SkinDefinition) {

	/** @type core.managers.skin.SkinDefinition */

	var def=SkinDefinition;

	def.inherits('mobile.core.skins.BaseSkin');

	def.compParts({
	    "img": {
	        "skin": "mobile.core.skins.ImageNewSkin",
	        "styleGroup": "inherit"
	    }
	});

	def.skinParams([
	    {
	        "id": "tdr",
	        "type": Constants.SkinParamTypes.URL,
	        "defaultTheme": "BASE_THEME_DIRECTORY"
	    },
	    {
	        "id": "fnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultValue": "normal normal normal 34px/1em Helvetica+Neue+Thin"
	    },
	    {
	        "id": "lnkFnt",
	        "type": Constants.SkinParamTypes.FONT,
	        "defaultValue": "normal normal normal 14px/1em Helvetica"
	    },
	    {
	        "id": "shd",
	        "type": Constants.SkinParamTypes.BOX_SHADOW,
	        "defaultValue": "2px 2px 4px rgba(0, 0, 0, 0.5);"
	    }
	]);

	def.html(
		'<a skinPart="link">' +
		'<div skinPart="img">' +
		'</div>' +
		'</a>' +
		'<div class="textOfTheDay">' +
		'<div skinPart="introContainer">' +
		'<h3>' +
		'<span skinPart="introPreTitle">' +
		'GET INSPIRED WITH</span>' +
		'<br />' +
		'<span class="logo">' +
		'</span>' +
		'<span skinPart="introTitle">' +
		'OF THE DAY</span>' +
		'</h3>' +
		'<p skinPart="introText">' +
		'Everyday we feature an amazing new website built with Wix. Want your website featured? Submit your URL to <a href="mailto:wixofday@wix.com">' +
		'wixofday@wix.com</a>' +
		'</p>' +
		'<p skinPart="shortDescriptionText">' +
		'</p>' +
		'<a skinPart="readOn">' +
		'Read on</a>' +
		'</div>' +
		'<div skinPart="descriptionContainer">' +
		'<p skinPart="descriptionText">' +
		'Studio C, a hair and makeup salon based in the Pakistani capital of Karachi, maximizes different features of the website builder to create a highly aesthetic, image-centered website. Navigation links, a Facebook button and contact details are set in a full-width toolbar along the top – a familiar location for most website visitor. The header includes two visible, glossy buttons entitled “Deals” and “Loyalty Card” for quick access, while the footer of each page includes testimonials, telephone numbers and opening hours. Large, beautiful images display different hair arrangements and make-up artistry, while short text paragraphs outline the studio’s areas of expertise and services it offers. The “Services” page displays a visual hierarchy that helps visitors rapidly scan each service or product offered, alongside an illustrative image. The “Loyalty Card” sub-category includes a fully-customized contact form, a feature also available under the “Appointments” page. The “Brides@Cistres” page showcases hairdos and makeup design in an easy-to-update, thumbnail grid-styled portfolio, with linkable images on hover to give visitors an enlarged image of each image.</p>' +
		'<a skinPart="closeDescription">' +
		'Close</a>' +
		'</div>' +
		'</div>');

	def.css([
		'{[fnt];}',
		'%img% { float:left; width:344px; height:274px; [shd]}',
		'%img% img {  width:344px; height:274px; }',
		' .textOfTheDay { padding-left:390px;}',
		' %introContainer% {padding-top: 60px;}',
		' %descriptionContainer% {padding-top: 10px;}',
		' %.logo% {width: 87px; height: 35px; background:url([tdr]wixlogoD.png) no-repeat; background-size:87px 35px; display: inline-block;}',
		' a {color:#231F20;}',
		' a%readOn% { color:#09F; padding-left: 3px; text-decoration:underline; [lnkFnt] }',
		' a%closeDescription% { color:#09F; text-decoration:underline; [lnkFnt] }',
		' %descriptionText% {display: inline-block; font-size:14px; color:#363636; padding:0px; margin:0px; line-height: 17px;}',
		' %shortDescriptionText% {display: inline-block; font-size:14px; color:#363636; padding:0px; margin:0px; line-height: 17px;}',
		' %shortDescriptionText% {display: inline-block; width: 80%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}',
		' h3 { font-weight:normal;}',
		'%introPreTitle% {font-size:24px; line-height:24px; color:#231F20;}',
		'%introTitle% {font-size:50px; line-height:50px; margin-left:5px; font-weight:bold; color:#231F20;}',
		'%introText% {line-height: 20px; padding-top: 15px;}',
		' p {font-size:16px;}',
		'p%descriptionText% {font-size:14px;}',
		'%temp% {}'
	]);

});