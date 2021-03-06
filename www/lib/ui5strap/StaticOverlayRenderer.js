/*
 * 
 * UI5Strap
 *
 * ui5strap.OverlayRenderer
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

	jQuery.sap.declare("ui5strap.StaticOverlayRenderer");

	ui5strap.StaticOverlayRenderer = {};

	ui5strap.StaticOverlayRenderer.render = function(rm, oControl) {
		var content = oControl.getContent();
		
		rm.write("<div");
		rm.writeControlData(oControl);
		rm.addClass("ui5strap-sttic-overlay");
		rm.writeClasses();
		rm.write(">");
		
		if(oControl.getBackdrop()){
			rm.write('<div class="ui5strap-static-overlay-backdrop" id="' + oControl.getId() + '--backdrop"></div>');
		}
		
		for(var i = 0; i < content.length; i++){
			rm.renderControl(content[i]);
		}
		
		rm.write("</div>");

	};

}());