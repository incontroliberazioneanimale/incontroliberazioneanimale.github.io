/** @class wixapps.integration.components.inputs.CheckBoxGroupInput */
define.component('wixapps.integration.components.inputs.CheckBoxGroupInput', function (componentDefinition) {
	/**@type core.managers.component.ComponentDefinition */
	var def = componentDefinition;

	def.inherits("mobile.core.components.base.BaseComponent");

	def.traits(["wysiwyg.viewer.components.traits.ValidationSettings"]);

	def.binds(["_handleSingleCheckboxClick"]);

	def.skinParts({
		'collection': {type: Constants.ComponentPartTypes.HTML_ELEMENT},
		'errorMessage': {type: Constants.ComponentPartTypes.HTML_ELEMENT, optional: "true"}
	});

	def.dataTypes(["MultiSelectableList"]);

	def.states({ 'validity': ['valid', 'invalid'] });

	def.fields({

	});

	/**
	 * @lends wixapps.integration.components.inputs.CheckBoxGroupInput
	 */
	def.methods({
		initialize: function(compId, viewNode, argsObject){
			this.parent(compId, viewNode, argsObject);
			this.addEvent(this.VALID_STATE_CHANGED_EVENT, function(isValid){
				this.setState(isValid ? 'valid': 'invalid', 'validity');
			}.bind(this));

			this._checkboxGroupName = argsObject.checkboxGroupName || "cbGroup";
		},

		_onAllSkinPartsReady: function(){
			this._createCheckboxGroup();
		},

		_createCheckboxGroup:function(){
			var bindToData = function(list){
				this._optionsData = Object.values(list);
				this._bindCheckboxGroupToData(this._skinParts.collection);
			}.bind(this);

			this._selectedOptions = this.getDataItem().get('selected');

			var options = this.getDataItem().get('items').filter(function(option){
				return option.get('enabled');
			});
			if(options.length > 0 && typeof(options[0]) === 'string'){
				this.injects().Data.getDataByQueryList(options, bindToData);
			} else {
				bindToData(options);
			}
		},

		_bindCheckboxGroupToData: function(checkboxGroupEl){
			checkboxGroupEl.empty();

			for(var i=0; i < this._optionsData.length; i++){
				var optionData = this._optionsData[i];
				var value = optionData.get('value');
				var checkboxEl = new Element("Input", {
					"type"  : "checkbox",
					"name":  this._checkboxGroupName,
					"value" :  value,
					"idInData": i
				});

//                 if ( this._isSelectedByValue(value) )
//                    checkboxEl.setAttribute("checked", "checked");

				checkboxGroupEl.grab(checkboxEl , 'bottom');
				checkboxGroupEl.addEvent("click", this._handleSingleCheckboxClick);
				checkboxGroupEl.innerHTML += optionData.get('text') + "<BR/>";
			}

			this._setSelected(checkboxGroupEl);
		},

		_setSelected: function(checkboxGroupEl){
			var selectedOptions = this.getDataItem().get('selected');
			var checkboxes = checkboxGroupEl.getElements('input[name="' +  this._checkboxGroupName + '"]');
			if(selectedOptions){
				Array.each( selectedOptions, function( data ) {
					var ind = this._optionsData.indexOf(data);
					if(ind > -1 && ind < checkboxes.length){
						checkboxes[ind].set('checked', 'checked');
					}
				}.bind(this));
			}
		},

		_handleSingleCheckboxClick: function( evt ) {
			var chkBoxEl = evt.target;
			var selectedOptions = this.getDataItem().get('selected');
			var ind = chkBoxEl.getAttribute("idInData");
			var optionData = this._optionsData[ind];

			if (chkBoxEl.checked) {
				selectedOptions.push( optionData );
			}
			else {
				selectedOptions.erase( optionData );
			}

			this.getDataItem().set('selected', selectedOptions);
			this.getDataItem().fireDataChangeEvent("selected", selectedOptions);

			this.fireEvent('selectionChanged', optionData);
		},

		setError: function ( message ) {
			this.setValidationState(false);
			if (this._skinParts.errorMessage) {
				this._skinParts.errorMessage.set("text", message);
			}
		}
	});
});