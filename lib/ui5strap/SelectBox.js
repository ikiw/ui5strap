/*
 * 
 * UI5Strap
 *
 * SelectBox
 * 
 * Author: Jan Philipp Knöller
 * 
 * Copyright (c) 2013 Jan Philipp Knöller
 * 
 * http://pksoftware.de
 *
 * Get the latest version: https://github.com/pks5/ui5strap
 * 
 * Released under Apache2 license: http://www.apache.org/licenses/LICENSE-2.0.txt
 * 
 */

(function(){

	jQuery.sap.declare("ui5strap.SelectBox");
	jQuery.sap.require("ui5strap.library");

	sap.ui.core.Control.extend("ui5strap.SelectBox", {
		metadata : {

			defaultAggregation : "items",

			library : "ui5strap",
			
			properties : { 
				value : {
					type:"string", 
					defaultValue:""
				},
				size : {
					type: "ui5strap.Size", 
					defaultValue: ui5strap.Size.Default
				},
				disabled : {
					type:"boolean", 
					defaultValue:false
				},
				align : {
					type:"ui5strap.Alignment",
					defaultValue:ui5strap.Alignment.Default
				},
				trail : {
					type:"ui5strap.TrailHtml", 
					defaultValue:ui5strap.TrailHtml.Space
				}
			},

			aggregations : { 
				items : {
					type : "ui5strap.Item",
					singularName: "items"
				} 
			}

		}
	});
	
	var _getInputValue = function(_this){
		return _this.$().val();
	};
	
	var _onChange = function(_this){
		return function(ev){
			var inputValue = _getInputValue(_this);
			if(inputValue !== _this.getValue()){ 
				_this.setProperty("value", inputValue, true);
			}
		}
	};

	ui5strap.SelectBox.prototype.onAfterRendering = function(){
		this.$().on('change', _onChange(this));
	};

	ui5strap.SelectBox.prototype.onBeforeRendering = function() {
		if (this.getDomRef()) {
			this.$().off();
			//this._curpos = this._$input.cursorPos();
		}
	};

	ui5strap.SelectBox.prototype.setValue = function(sValue) {
		sValue = this.validateProperty("value", sValue);
		
		if (sValue != this.getValue()) {
			this.setProperty("value", sValue, true);
			if (this.getDomRef() && this.$().val() != sValue) {
				this.$().val(sValue);
				//this._curpos = this._$input.cursorPos();
			}
		}
		return this;
	};


}());