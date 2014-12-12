/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.unified.CalendarRenderer");sap.ui.unified.CalendarRenderer={};
sap.ui.unified.CalendarRenderer.render=function(r,c){c._iMode=0;var d=c._getFocusedDate();var i=c.getId();var t=c.getTooltip_AsString();r.write("<div");r.writeControlData(c);r.addClass("sapUiCal");r.writeClasses();var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified");r.writeAccessibilityState(c,{role:"dialog",label:a.getText("DATEPICKER_DIALOG")});if(t){r.writeAttributeEscaped('title',t)}r.write(">");this.renderHeader(r,c,d);this.renderDayPicker(r,c,d);r.write("<button id=\""+i+"-cancel\" class=\"sapUiCancel\" tabindex=\"-1\">");r.write(a.getText("CALENDAR_CANCEL"));r.write("</button>");r.write("<div id=\""+i+"-end\" tabindex=\"0\" style=\"width:0;height:0;position:absolute;right:0;bottom:0;\"></div>");r.write("</div>")};
sap.ui.unified.CalendarRenderer.renderHeader=function(r,c,d){var l=c._getLocaleData();var i=c.getId();var m=d.getUTCMonth();var y=d.getUTCFullYear();var M=[];if(c._bLongMonth||!c._bNamesLengthChecked){M=l.getMonthsStandAlone("wide")}else{M=l.getMonthsStandAlone("abbreviated")}r.write("<div");r.addClass("sapUiCalHead");r.writeClasses();r.write(">");r.write("<button id=\""+i+"-prev\" class=\"sapUiCalPrev\" tabindex=\"-1\">");r.writeIcon("sap-icon://slim-arrow-left");r.write("</button>");r.write("<button");r.writeAttributeEscaped('id',i+'-month');r.addClass("sapUiCalMonthPick");r.writeAttribute('tabindex',"-1");r.writeClasses();r.write(">");r.write(M[m]);r.write("</button>");r.write("<button");r.writeAttributeEscaped('id',i+'-year');r.addClass("sapUiCalYearPick");r.writeAttribute('tabindex',"-1");r.writeClasses();r.write(">");r.write(y);r.write("</button>");r.write("<button id=\""+i+"-next\" class=\"sapUiCalNext\" tabindex=\"-1\">");r.writeIcon("sap-icon://slim-arrow-right");r.write("</button>");r.write("</div>")};
sap.ui.unified.CalendarRenderer.renderDayPicker=function(r,c,d){var l=c._getLocaleData();var f=l.getFirstDayOfWeek();var I=c.getId();var w=[];if(c._bLongWeekDays||!c._bNamesLengthChecked){w=l.getDaysStandAlone("abbreviated")}else{w=l.getDaysStandAlone("narrow")}for(var i=0;i<7;i++){r.write("<div");r.addClass("sapUiCalWH");if(i==0){r.addClass("sapUiCalFirstWDay")}r.writeClasses();r.write(">");r.write(w[(i+f)%7]);r.write("</div>")}r.write("<div id=\""+I+"-days\" class=\"sapUiCalDays\">");this.renderDays(r,c,d);r.write("</div>")};
sap.ui.unified.CalendarRenderer.renderDays=function(r,c,d){if(!d){d=c._getFocusedDate()}var l=c.getLocale();var L=c._getLocaleData();var m=d.getUTCMonth();var y=d.getUTCFullYear();var f=L.getFirstDayOfWeek();var w=L.getWeekendStart();var W=L.getWeekendEnd();var t=new Date();var i=c.getId();var F=new Date(d.getTime());F.setUTCDate(1);var a=F.getUTCDay();var D=a-f;if(D<0){D=7+D}if(D>0){F.setUTCDate(1-D)}var o=new Date(F.getTime());var Y="";var n=(m+1)%12;var s=0;var T;do{Y=c._oFormatYyyymmdd.format(o,true);a=o.getUTCDay();s=c._checkDateSelected(o);T=c._getDateType(o);r.write("<div");r.writeAttribute("id",i+"-"+Y);r.addClass("sapUiCalDay");r.addClass("sapUiCalWDay"+a);if(a==f){r.addClass("sapUiCalFirstWDay")}if(m!=o.getUTCMonth()){r.addClass("sapUiCalDayOtherMonth")}if(o.getUTCMonth()==t.getMonth()&&o.getUTCFullYear()==t.getFullYear()&&o.getUTCDate()==t.getDate()){r.addClass("sapUiCalDayToday")}if(s>0){r.addClass("sapUiCalDaySel")}if(s==2){r.addClass("sapUiCalDaySelStart")}else if(s==3){r.addClass("sapUiCalDaySelEnd")}else if(s==4){r.addClass("sapUiCalDaySelBetween")}else if(s==5){r.addClass("sapUiCalDaySelStart");r.addClass("sapUiCalDaySelEnd")}if(T){r.addClass("sapUiCalDay"+T.type);if(T.tooltip){r.writeAttributeEscaped('title',T.tooltip)}}if((a>=w&&a<=W)||(W<w&&(a>=w||a<=W))){r.addClass("sapUiCalDayWeekEnd")}r.writeAttribute("tabindex","-1");r.writeAttribute("data-sap-day",Y);r.writeClasses();r.write(">");r.write("<span class=\"sapUiCalDayNum\">");r.write(o.getUTCDate());r.write("</span>");if(a==f){r.write("<span class=\"sapUiCalWeekNum\">");r.write(this.calculateWeekNumber(o,y,l,L));r.write("</span>")}r.write("</div>");o.setUTCDate(o.getUTCDate()+1)}while(o.getUTCMonth()!=n||o.getUTCDay()!=f)};
sap.ui.unified.CalendarRenderer.calculateWeekNumber=function(d,y,l,L){var w=0;var W=0;var f=L.getFirstDayOfWeek();switch(l){case"en-US":var j=new Date(d.getTime());j.setUTCFullYear(y,0,1);W=j.getUTCDay();var c=new Date(d.getTime());c.setUTCDate(c.getUTCDate()-c.getUTCDay()+W);w=Math.round((c.getTime()-j.getTime())/86400000/7)+1;break;default:var t=new Date(d.getTime());t.setUTCDate(t.getUTCDate()-f);W=t.getUTCDay();t.setUTCDate(t.getUTCDate()-W+4);var F=new Date(t.getTime());F.setUTCMonth(0,1);W=F.getUTCDay();var a=0;if(W>4){a=7}var o=new Date(F.getTime());o.setUTCDate(1-W+4+a);w=Math.round((t.getTime()-o.getTime())/86400000/7)+1;break}return w};
sap.ui.unified.CalendarRenderer.renderMonthPicker=function(r,c,d){var l=c._getLocaleData();var I=c.getId();var m=[];if(c._bLongMonth||!c._bNamesLengthChecked){m=l.getMonthsStandAlone("wide")}else{m=l.getMonthsStandAlone("abbreviated")}var M=d.getUTCMonth();r.write("<div id=\""+I+"-months\" class=\"sapUiCalMonths\">");for(var i=0;i<12;i++){r.write("<div");r.writeAttribute("id",I+"-m"+i);r.addClass("sapUiCalMonth");if(i==M){r.addClass("sapUiCalMonthSel")}r.writeAttribute("tabindex","-1");r.writeClasses();r.write(">");r.write(m[i]);r.write("</div>")}r.write("</div>")};
sap.ui.unified.CalendarRenderer.renderYearPicker=function(r,c,d){var I=c.getId();var C=d.getUTCFullYear();var y=0;r.write("<div id=\""+I+"-years\" class=\"sapUiCalYears\">");for(var i=0;i<20;i++){y=C-10+i;r.write("<div");r.writeAttribute("id",I+"-y"+y);r.addClass("sapUiCalYear");if(i==10){r.addClass("sapUiCalYearSel")}r.writeAttribute("tabindex","-1");r.writeClasses();r.write(">");r.write(y);r.write("</div>")}r.write("</div>")};