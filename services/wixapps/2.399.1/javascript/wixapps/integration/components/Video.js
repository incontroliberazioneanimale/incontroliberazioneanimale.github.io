/** @class wixapps.integration.components.Video */
define.component('wixapps.integration.components.Video', function (componentDefinition) {
    /**@type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    def.inherits("wysiwyg.viewer.components.Video");

    /**
     * @lends wixapps.integration.components.Video
     */
    def.methods({
        _renderIframe:function () {
            this._options.videoType = this._getVideoType();
            this._options.videoId = this._getVideoId();

            if (!this._options.videoId || !this._options.videoType) {
                return;
            }

            this._skinParts.videoFrame.uncollapse();
            this._skinParts.preview.collapse();

            if (!this._iframe || !this._skinParts.videoFrame.hasChildNodes()) {
                // If no iframe, create it
                this._createIframe(this._getUrl(), this.getWidth(), this.getHeight());
            } else {
                // Else update url (if changed) and dimensions of the iframe
                this._updateIframe(this._getUrl(), this.getWidth(), this.getHeight());
            }

            this._iframe.setStyles({
                "height":"100%",
                "width":"100%"
            });

        }
    });
});
