!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),a(t),t}:a(jQuery)}(function(O){"use strict";var d=/\r?\n/g,h={},X=(h.fileapi=void 0!==O('<input type="file">').get(0).files,h.formdata=void 0!==window.FormData,!!O.fn.prop);function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),O(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,a=O(t);if(!a.is("[type=submit],[type=image]")){var r=a.closest("[type=submit]");if(0===r.length)return;t=r[0]}var n=t.form;"image"===(n.clk=t).type&&(void 0!==e.offsetX?(n.clk_x=e.offsetX,n.clk_y=e.offsetY):"function"==typeof O.fn.offset?(r=a.offset(),n.clk_x=e.pageX-r.left,n.clk_y=e.pageY-r.top):(n.clk_x=e.pageX-t.offsetLeft,n.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){n.clk=n.clk_x=n.clk_y=null},100)}function C(){var e;O.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}O.fn.attr2=function(){var e;return X&&((e=this.prop.apply(this,arguments))&&e.jquery||"string"==typeof e)?e:this.attr.apply(this,arguments)},O.fn.ajaxSubmit=function(F,e,t,a){if(this.length){var E,L=this,e=("function"==typeof F?F={success:F}:"string"==typeof F||!1===F&&0<arguments.length?(F={url:F,data:e,dataType:t},"function"==typeof a&&(F.success=a)):void 0===F&&(F={}),E=F.method||F.type||this.attr2("method"),t=(t=(t="string"==typeof(e=F.url||this.attr2("action"))?O.trim(e):"")||window.location.href||"")&&(t.match(/^([^#]+)/)||[])[1],a=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",F=O.extend(!0,{url:t,success:O.ajaxSettings.success,type:E||O.ajaxSettings.type,iframeSrc:a},F),{});if(this.trigger("form-pre-serialize",[this,F,e]),e.veto)C("ajaxSubmit: submit vetoed via form-pre-serialize trigger");else if(F.beforeSerialize&&!1===F.beforeSerialize(this,F))C("ajaxSubmit: submit aborted via beforeSerialize callback");else{var t=F.traditional,M=(void 0===t&&(t=O.ajaxSettings.traditional),[]),r=this.formToArray(F.semantic,M,F.filtering);if(F.data&&(a=O.isFunction(F.data)?F.data(r):F.data,F.extraData=a,l=O.param(a,t)),F.beforeSubmit&&!1===F.beforeSubmit(r,this,F))C("ajaxSubmit: submit aborted via beforeSubmit callback");else if(this.trigger("form-submit-validate",[r,this,F,e]),e.veto)C("ajaxSubmit: submit vetoed via form-submit-validate trigger");else{var o,n,i,a=O.param(r,t),s=(l&&(a=a?a+"&"+l:l),"GET"===F.type.toUpperCase()?(F.url+=(0<=F.url.indexOf("?")?"&":"?")+a,F.data=null):F.data=a,[]);F.resetForm&&s.push(function(){L.resetForm()}),F.clearForm&&s.push(function(){L.clearForm(F.includeHidden)}),!F.dataType&&F.target?(o=F.success||function(){},s.push(function(e,t,a){var r=arguments,n=F.replaceTarget?"replaceWith":"html";O(F.target)[n](e).each(function(){o.apply(this,r)})})):F.success&&(O.isArray(F.success)?O.merge(s,F.success):s.push(F.success)),F.success=function(e,t,a){for(var r=F.context||this,n=0,o=s.length;n<o;n++)s[n].apply(r,[e,t,a||L,L])},F.error&&(n=F.error,F.error=function(e,t,a){var r=F.context||this;n.apply(r,[e,t,a,L])}),F.complete&&(i=F.complete,F.complete=function(e,t){var a=F.context||this;i.apply(a,[e,t,L])});var c,e=0<O("input[type=file]:enabled",this).filter(function(){return""!==O(this).val()}).length,t="multipart/form-data",l=L.attr("enctype")===t||L.attr("encoding")===t,a=h.fileapi&&h.formdata;C("fileAPI :"+a),!1!==F.iframe&&(F.iframe||(e||l)&&!a)?F.closeKeepAlive?O.get(F.closeKeepAlive,function(){c=f(r)}):c=f(r):c=(e||l)&&a?function(e){for(var a=new FormData,t=0;t<e.length;t++)a.append(e[t].name,e[t].value);if(F.extraData){var r=function(e){var t,a,r=O.param(e,F.traditional).split("&"),n=r.length,o=[];for(t=0;t<n;t++)r[t]=r[t].replace(/\+/g," "),a=r[t].split("="),o.push([decodeURIComponent(a[0]),decodeURIComponent(a[1])]);return o}(F.extraData);for(t=0;t<r.length;t++)r[t]&&a.append(r[t][0],r[t][1])}F.data=null;var n=O.extend(!0,{},O.ajaxSettings,F,{contentType:!1,processData:!1,cache:!1,type:E||"POST"});F.uploadProgress&&(n.xhr=function(){var e=O.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,a=e.loaded||e.position,r=e.total;e.lengthComputable&&(t=Math.ceil(a/r*100)),F.uploadProgress(e,a,r,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){F.formData?t.data=F.formData:t.data=a,o&&o.call(this,e,t)},O.ajax(n)}(r):O.ajax(F),L.removeData("jqxhr").data("jqxhr",c);for(var u=0;u<M.length;u++)M[u]=null;this.trigger("form-submit-notify",[this,F])}}}else C("ajaxSubmit: skipping submit process - no element selected");return this;function f(e){var t,a,l,u,f,d,m,p,h,o=L[0],g=O.Deferred();if(g.abort=function(e){m.abort(e)},e)for(a=0;a<M.length;a++)t=O(M[a]),X?t.prop("disabled",!1):t.removeAttr("disabled");(l=O.extend(!0,{},O.ajaxSettings,F)).context=l.context||l;var v,x,r,y,b,T,j,w,i,S,s="jqFormIO"+(new Date).getTime(),c=o.ownerDocument,k=L.closest("body");return l.iframeTarget?(r=(f=O(l.iframeTarget,c)).attr2("name"))?s=r:f.attr2("name",s):(f=O('<iframe name="'+s+'" src="'+l.iframeSrc+'" />',c)).css({position:"absolute",top:"-1000px",left:"-1000px"}),d=f[0],m={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";C("aborting upload... "+t),this.aborted=1;try{d.contentWindow.document.execCommand&&d.contentWindow.document.execCommand("Stop")}catch(e){}f.attr("src",l.iframeSrc),m.error=t,l.error&&l.error.call(l.context,m,t,e),u&&O.event.trigger("ajaxError",[m,l,t]),l.complete&&l.complete.call(l.context,m,t)}},(u=l.global)&&0==O.active++&&O.event.trigger("ajaxStart"),u&&O.event.trigger("ajaxSend",[m,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,m,l)?(l.global&&O.active--,g.reject()):m.aborted?g.reject():((e=o.clk)&&(r=e.name)&&!e.disabled&&(l.extraData=l.extraData||{},l.extraData[r]=e.value,"image"===e.type)&&(l.extraData[r+".x"]=o.clk_x,l.extraData[r+".y"]=o.clk_y),v=1,x=2,e=O("meta[name=csrf-token]").attr("content"),(r=O("meta[name=csrf-param]").attr("content"))&&e&&(l.extraData=l.extraData||{},l.extraData[r]=e),l.forceSync?n():setTimeout(n,10),T=50,w=O.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},i=O.parseJSON||function(e){return window.eval("("+e+")")},S=function(e,t,a){var r=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=r.indexOf("xml"),e=n?e.responseXML:e.responseText;return n&&"parsererror"===e.documentElement.nodeName&&O.error&&O.error("parsererror"),"string"==typeof(e=a&&a.dataFilter?a.dataFilter(e,t):e)&&(("json"===t||!t)&&0<=r.indexOf("json")?e=i(e):("script"===t||!t)&&0<=r.indexOf("javascript")&&O.globalEval(e)),e}),g;function D(t){var a=null;try{t.contentWindow&&(a=t.contentWindow.document)}catch(e){C("cannot get iframe.contentWindow document: "+e)}if(!a)try{a=t.contentDocument||t.document}catch(e){C("cannot get iframe.contentDocument: "+e),a=t.document}return a}function n(){var e=L.attr2("target"),t=L.attr2("action"),a=L.attr("enctype")||L.attr("encoding")||"multipart/form-data";o.setAttribute("target",s),E&&!/post/i.test(E)||o.setAttribute("method","POST"),t!==l.url&&o.setAttribute("action",l.url),l.skipEncodingOverride||E&&!/post/i.test(E)||L.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(h=setTimeout(function(){p=!0,A(v)},l.timeout));var r=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(O.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?r.push(O('<input type="hidden" name="'+l.extraData[n].name+'">',c).val(l.extraData[n].value).appendTo(o)[0]):r.push(O('<input type="hidden" name="'+n+'">',c).val(l.extraData[n]).appendTo(o)[0]));l.iframeTarget||f.appendTo(k),d.attachEvent?d.attachEvent("onload",A):d.addEventListener("load",A,!1),setTimeout(function e(){try{var t=D(d).readyState;C("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){C("Server abort: ",e," (",e.name,")"),A(x),h&&clearTimeout(h),h=void 0}},15);try{o.submit()}catch(e){document.createElement("form").submit.apply(o)}}finally{o.setAttribute("action",t),o.setAttribute("enctype",a),e?o.setAttribute("target",e):L.removeAttr("target"),O(r).remove()}}function A(t){if(!m.aborted&&!j)if((b=D(d))||(C("cannot access response document"),t=x),t===v&&m)m.abort("timeout"),g.reject(m,"timeout");else if(t===x&&m)m.abort("server abort"),g.reject(m,"error","server abort");else if(b&&b.location.href!==l.iframeSrc||p){d.detachEvent?d.detachEvent("onload",A):d.removeEventListener("load",A,!1);var a,t="success";try{if(p)throw"timeout";var e="xml"===l.dataType||b.XMLDocument||O.isXMLDoc(b);if(C("isXml="+e),!e&&window.opera&&(null===b.body||!b.body.innerHTML)&&--T)return C("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var r,n,o,i=b.body||b.documentElement,s=(m.responseText=i?i.innerHTML:null,m.responseXML=b.XMLDocument||b,e&&(l.dataType="xml"),m.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},i&&(m.status=Number(i.getAttribute("status"))||m.status,m.statusText=i.getAttribute("statusText")||m.statusText),(l.dataType||"").toLowerCase()),c=/(json|script|text)/.test(s);c||l.textarea?(r=b.getElementsByTagName("textarea")[0])?(m.responseText=r.value,m.status=Number(r.getAttribute("status"))||m.status,m.statusText=r.getAttribute("statusText")||m.statusText):c&&(n=b.getElementsByTagName("pre")[0],o=b.getElementsByTagName("body")[0],n?m.responseText=n.textContent||n.innerText:o&&(m.responseText=o.textContent||o.innerText)):"xml"===s&&!m.responseXML&&m.responseText&&(m.responseXML=w(m.responseText));try{y=S(m,s,l)}catch(e){t="parsererror",m.error=a=e||t}}catch(e){C("error caught: ",e),t="error",m.error=a=e||t}m.aborted&&(C("upload aborted"),t=null),"success"===(t=m.status?200<=m.status&&m.status<300||304===m.status?"success":"error":t)?(l.success&&l.success.call(l.context,y,"success",m),g.resolve(m.responseText,"success",m),u&&O.event.trigger("ajaxSuccess",[m,l])):t&&(void 0===a&&(a=m.statusText),l.error&&l.error.call(l.context,m,t,a),g.reject(m,"error",a),u)&&O.event.trigger("ajaxError",[m,l,a]),u&&O.event.trigger("ajaxComplete",[m,l]),u&&!--O.active&&O.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,m,t),j=!0,l.timeout&&clearTimeout(h),setTimeout(function(){l.iframeTarget?f.attr("src",l.iframeSrc):f.remove(),m.responseXML=null},100)}}}},O.fn.ajaxForm=function(e,t,a,r){var n;return("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:a},"function"==typeof r)&&(e.success=r),(e=e||{}).delegation=e.delegation&&O.isFunction(O.fn.on),e.delegation||0!==this.length?e.delegation?(O(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i)):(n={s:this.selector,c:this.context},!O.isReady&&n.s?(C("DOM not ready, queuing ajaxForm"),O(function(){O(n.s,n.c).ajaxForm(e)})):C("terminating; zero elements found by selector"+(O.isReady?"":" (DOM not ready)")),this)},O.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},O.fn.formToArray=function(e,t,a){var r=[];if(0!==this.length){var n=this[0],o=this.attr("id"),i=(i=e||void 0===n.elements?n.getElementsByTagName("*"):n.elements)&&O.makeArray(i);if((i=o&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=O(':input[form="'+o+'"]').get()).length?(i||[]).concat(o):i)&&i.length){for(var s,c,l,u,f,d=0,m=(i=O.isFunction(a)?O.map(i,a):i).length;d<m;d++)if((f=(l=i[d]).name)&&!l.disabled)if(e&&n.clk&&"image"===l.type)n.clk===l&&(r.push({name:f,value:O(l).val(),type:l.type}),r.push({name:f+".x",value:n.clk_x},{name:f+".y",value:n.clk_y}));else if((c=O.fieldValue(l,!0))&&c.constructor===Array)for(t&&t.push(l),s=0,u=c.length;s<u;s++)r.push({name:f,value:c[s]});else if(h.fileapi&&"file"===l.type){t&&t.push(l);var p=l.files;if(p.length)for(s=0;s<p.length;s++)r.push({name:f,value:p[s],type:l.type});else r.push({name:f,value:"",type:l.type})}else null!=c&&(t&&t.push(l),r.push({name:f,value:c,type:l.type,required:l.required}));!e&&n.clk&&(f=(a=(o=O(n.clk))[0]).name)&&!a.disabled&&"image"===a.type&&(r.push({name:f,value:o.val()}),r.push({name:f+".x",value:n.clk_x},{name:f+".y",value:n.clk_y}))}}return r},O.fn.formSerialize=function(e){return O.param(this.formToArray(e))},O.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=O.fieldValue(this,n);if(t&&t.constructor===Array)for(var a=0,r=t.length;a<r;a++)o.push({name:e,value:t[a]});else null!=t&&o.push({name:this.name,value:t})}}),O.param(o)},O.fn.fieldValue=function(e){for(var t=[],a=0,r=this.length;a<r;a++){var n=this[a],n=O.fieldValue(n,e);null==n||n.constructor===Array&&!n.length||(n.constructor===Array?O.merge(t,n):t.push(n))}return t},O.fieldValue=function(e,t){var a=e.name,r=e.type,n=e.tagName.toLowerCase();if((t=void 0===t?!0:t)&&(!a||e.disabled||"reset"===r||"button"===r||("checkbox"===r||"radio"===r)&&!e.checked||("submit"===r||"image"===r)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return O(e).val().replace(d,"\r\n");t=e.selectedIndex;if(t<0)return null;for(var o=[],i=e.options,s="select-one"===r,c=s?t+1:i.length,l=s?t:0;l<c;l++){var u=i[l];if(u.selected&&!u.disabled){var f=(f=u.value)||(u.attributes&&u.attributes.value&&!u.attributes.value.specified?u.text:u.value);if(s)return f;o.push(f)}}return o},O.fn.clearForm=function(e){return this.each(function(){O("input,select,textarea",this).clearFields(e)})},O.fn.clearFields=O.fn.clearInputs=function(a){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();r.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?O(this).replaceWith(O(this).clone(!0)):O(this).val(""):a&&(!0===a&&/hidden/.test(e)||"string"==typeof a&&O(this).is(a))&&(this.value="")})},O.fn.resetForm=function(){return this.each(function(){var t=O(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=O(t.attr("for")),r=t.find("input,select,textarea");return a[0]&&r.unshift(a[0]),r.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},O.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},O.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var e=this.type;"checkbox"===e||"radio"===e?this.checked=t:"option"===this.tagName.toLowerCase()&&(e=O(this).parent("select"),t&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=t)})},O.fn.ajaxSubmit.debug=!1});