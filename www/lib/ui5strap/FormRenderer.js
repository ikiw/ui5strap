/*
 * 
 * UI5Strap
 *
 * ui5strap.FormRenderer
 * 
 * @author Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Homepage: http://ui5strap.com
 *
 * Copyright (c) 2013-2014 Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * Released under Apache2 license: http://www.apache.org/licenses/LICENSE-2.0.txt
 * 
 */

(function(){

	jQuery.sap.declare("ui5strap.FormRenderer");

	ui5strap.FormRenderer = {

		typeToClass : {
			"Horizontal" : 'form-horizontal',
			"Inline" : 'form-inline',
		}
	};

	ui5strap.FormRenderer.render = function(rm, oControl) {
		var content = oControl.getContent(),
			action = oControl.getAction(),
			method = oControl.getMethod(),
			type = oControl.getType();

		rm.write("<form");
		
		rm.writeControlData(oControl);
		rm.writeAttribute('role', 'form');
		if('' !== action){
			rm.writeAttribute('action', action);
		}
		if(ui5strap.FormMethod.Default !== method && ui5strap.FormMethod.None !== method){
			rm.writeAttribute('method', method);
		}
		if(ui5strap.FormType.Default !== type){
			rm.addClass(this.typeToClass[type]);
		}
		
		ui5strap.RenderUtils.alignment(rm, oControl, 'navbar-form');

		rm.writeClasses();
		rm.write(">");
		
		for(var i = 0; i < content.length; i++){ 
			rm.renderControl(content[i]);
		}
		
		rm.write("</form>");
	};

}());
