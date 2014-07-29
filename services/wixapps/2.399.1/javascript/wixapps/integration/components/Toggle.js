define.component('wixapps.integration.components.Toggle', function(def){
    def.inherits('mobile.core.components.base.BaseComponent');
    def.skinParts(
        {
            'on': {'type': 'htmlElement'},
            'off': { 'type': 'htmlElement' }
        }
    );
    def.binds([ 'toggle']);
    def.states(["on", "off"]);
    def.methods({
        initialize: function(compId, viewNode, args){
            this.parent(compId, viewNode, args);
            this._createOnHook = args.createOnHook;
            this._createOffHook = args.createOffHook;
            this._initialState = args.initialState;
            this._listensToPartsClick = args.listensToPartsClick;
        },

        _onAllSkinPartsReady: function (parts) {

            if (this._listensToPartsClick) {
                parts.on.addEvent("click", this.toggle);
                parts.off.addEvent("click", this.toggle);
            }

            this._createOnHook( parts.on );
            this._createOffHook( parts.off );

            this.setState( this._initialState == "on"? "on" : "off" );
        },

        turnOn: function() {
            this.setState("on");
        },

        turnOff: function() {
            this.setState("off");
        },

        toggle: function() {
            if (this.getState() == "on") {
                this.turnOff();
            }
            else {
                this.turnOn();
            }

            this.fireEvent("wix:toggle", {
                state: this.getState()
            });
        },

        /**
         * @override
         */
        _onResize: function(){
            this.parent();
        }
    });
});

