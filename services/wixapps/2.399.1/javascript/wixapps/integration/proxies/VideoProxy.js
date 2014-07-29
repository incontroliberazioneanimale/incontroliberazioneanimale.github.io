/** @class wixapps.integration.proxies.VideoProxy */
define.Class('wixapps.integration.proxies.VideoProxy', function(classDefinition) {
	/** @type bootstrap.managers.classmanager.ClassDefinition */
	var def = classDefinition;

	def.inherits('wixapps.integration.proxies.WProxy');
	def.traits(['wixapps.integration.components.traits.ResizableProxyTrait']);

	/** @lends wixapps.integration.proxies.VideoProxy */
	def.methods({
        createComponent: function() {
            var rawData = this._createRawData(this._data.getValue()),
                properties = {
                    type: "Video"
                };

            return this._createWixComponent(
                'wixapps.integration.components.Video',
                rawData,
                undefined,
                properties
            );
        },

		_createRawData: function(data) {
			var raw = {
				type: 'Video',
				videoId: data.videoId,
				videoType: data.videoType
			};
			return raw;
		},

		_getPropSchemaName: function() {
			return 'VideoProperties';
		},

		_setupPropertyHandlers: function() {
			this.parent();
            var setterFunc = function(value){
                return (value === true) || (value == "true");
            };
            this._mapToCompProperty('autoplay', 'autoplay', setterFunc);
            this._mapToCompProperty('showinfo', 'showinfo', setterFunc);
            this._mapToCompProperty('loop', 'loop', setterFunc);
            this._mapToCompProperty('lightTheme', 'lightTheme', setterFunc);
            this._mapToCompProperty('showControls', 'showControls');
		},

		_onDataChanged: function(evt) {
			if (this._componentLogic && !this._ignoreUpdate) {
				var appsData = this._data.getValue();
				var dataItem = this._componentLogic.getDataItem();

				dataItem.set("videoId", appsData.videoId, true);
				dataItem.set("videoType", appsData.videoType, true);
				dataItem.fireDataChangeEvent();
			}
        },

		_getDefaultSkinName: function() {
			return 'wysiwyg.viewer.skins.video.VideoDefault';
		},

		_getDefaultStyleName: function() {
			return "vl";
		}
	});
});