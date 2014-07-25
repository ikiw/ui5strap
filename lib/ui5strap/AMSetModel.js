/*
 * 
 * ui5strap
 *
 * AMSetModel
 * 
 * Author: Jan Philipp Knöller
 * 
 * Copyright (c) 2013 Philipp Knöller Software
 * 
 * http://ui5strap.com
 *
 * Released under Apache2 license: http://www.apache.org/licenses/LICENSE-2.0.txt
 * 
 */

(function(){

	jQuery.sap.declare("ui5strap.AMSetModel");

	ui5strap.ActionModule.extend("ui5strap.AMSetModel");

	var AMSetModelProto = ui5strap.AMSetModel.prototype;

	/*
	* @Override
	*/
	AMSetModelProto.namespace = 'setModel';

	/*
	* @Override
	*/
	AMSetModelProto.parameters = {
		"controlId" : {
			"required" : false, 
			"defaultValue" : null, 
			"type" : "string"
		},
		"modelName" : {
			"required" : true, 
			"defaultValue" : null, 
			"type" : "string"
		},
		"modelScope" : {
			"required" : false, 
			"defaultValue" : "VIEW", 
			"type" : "string"
		},
		"parameterName" : {
			"required" : true, 
			"type" : "string"
		}
	};

	/*
	* @Override
	*/
	AMSetModelProto.run = function(){ 
			var parameterName = this.getParameter("parameterName"),
				modelName = this.getParameter("modelName"),
				controlId = this.getParameter("controlId"),
				scope = this.getParameter("modelScope"),
				data = this.context._getParameter(parameterName),
				oModel = new sap.ui.model.json.JSONModel(data),
				theControl = null;
			
			if("GLOBAL" === scope){ 
				theControl = sap.ui.getCore();
			}
			else if("VIEW" === scope){ 
				theControl = this.context.controller.getView();
			}
			
			if(null !== controlId){
				theControl = this.context.app.getControl(controlId);
			}
			
			if(null !== theControl){
				theControl.setModel(oModel, modelName);
			}

			this.context._log.debug("Model '" + modelName + "' (parameterName: '" + parameterName + "', scope: '" + scope + "') set.");
	};

}());