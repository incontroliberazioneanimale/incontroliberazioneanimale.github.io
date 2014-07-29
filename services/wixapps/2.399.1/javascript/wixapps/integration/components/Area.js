/** @class wixapps.integration.components.Area */
define.component("wixapps.integration.components.Area", function(componentDefinition) {
	/**@type core.managers.component.ComponentDefinition */
	var def = componentDefinition;

    def.inherits("core.components.ContainerOBC");

	def.skinParts({
		inlineContent: { type: 'htmlElement'}
	});

	/**
	 * @lends wixapps.integration.components.Area
	 */
	def.methods({

		initialize: function(compId, viewNode, args) {
			this.parent(compId, viewNode, args);
			if (args.styleNS === "default") {
				this._styleNameSpace = "core.components.Container";
			}
		},

		setStyle: function(newStyle) {
			this._setStyleInProgress = true;
			this.parent(newStyle);
			this._setStyleInProgress = false;
			this.fireEvent(Constants.DisplayEvents.SKIN_CHANGE);
		},

		_replaceSkin: function(SkinClass) {
			this.parent(SkinClass);
			if (!this._setStyleInProgress) {
				this.fireEvent(Constants.DisplayEvents.SKIN_CHANGE);
			}
		}
	});
});
