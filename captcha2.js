!function(){"use strict";var n,d={},u={},a="object"==typeof window.mtcaptchaConfig&&null!=window.mtcaptchaConfig?window.mtcaptchaConfig:{},o=0,g=[],r="",e="CDN";if(window.addEventListener?n=window.addEventListener:window.attachEvent&&(n=window.attachEvent),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}),!document.getElementsByClassName){var l=[].indexOf||function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1},t=function(a,i){return document.querySelectorAll?i.querySelectorAll("."+a):function(){for(var e=i.getElementsByTagName("*"),t=[],n=0;n<e.length;n++)e[n].className&&-1<(" "+e[n].className+" ").indexOf(" "+a+" ")&&-1===l.call(t,e[n])&&t.push(e[n]);return t}()};document.getElementsByClassName=function(e){return t(e,document)},Element&&(Element.prototype.getElementsByClassName=function(e){return t(e,this)})}Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError;var t,n,a=Object(this),i=a.length>>>0;if(0==i)return-1;if(t=0,1<arguments.length&&((t=Number(arguments[1]))!=t?t=0:0!=t&&t!=1/0&&t!=-1/0&&(t=(0<t||-1)*Math.floor(Math.abs(t)))),i<=t)return-1;for(n=0<=t?t:Math.max(i-Math.abs(t),0);n<i;n++)if(n in a&&a[n]===e)return n;return-1}),u.log={logLevel:2,debug:function(e){this.rawlog(4,"MTCAP-DBG",e)},info:function(e){this.rawlog(3,"MTCAP-INFO",e)},warn:function(e){this.rawlog(2,"MTCAP-WRN",e)},error:function(e){this.rawlog(1,"MTCAP-ERR",e)},rawlog:function(e,t,n){this.logLevel<e||(console||(console={log:function(){}}),console.log(t+": "+n))}},u.conf={defaultConfig:{sitekey:"",widgetSize:"standard",theme:"basic",lang:"en",challengeType:"standard",enableTestMode:"",customStyle:{},customLangText:{},action:"",renderQueue:[],domId:"",autoFormValidate:!1,autoFadeOuterText:!1,render:"auto",waitForDom:125,textLength:0,lowFrictionInvisible:"",testmode_lowFrictionInvisible:"","loaded-callback":function(e){},"rendered-callback":function(e){},"verified-callback":function(e){},"verifyexpired-callback":function(e){},"error-callback":function(e){}},overlayConfig:function(e,t,n){var a=u.util.assign(this.defaultConfig),i=this.confCheck(e);return u.conf.overlapConfHighToLow(a,i),void 0!==n&&u.conf.overlapConfHighToLow(a,n),a},confCheck:function(e){var t="";if(e.sitekey&&((t=/^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g).test(e.sitekey)?120<e.sitekey.length&&(e.sitekey=this.defaultConfig.sitekey,u.log.warn("Entered characters in sitekey exceeds maximum allowed characters limit of 120")):(e.sitekey=this.defaultConfig.sitekey,u.log.warn("Entered invalid characters in sitekey"))),e.enableTestMode&&((t=/^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g).test(e.enableTestMode)?120<e.enableTestMode.length&&(e.enableTestMode=this.defaultConfig.enableTestMode,u.log.warn("Entered characters in enableTestMode exceeds maximum allowed characters limit of 120")):(e.enableTestMode=this.defaultConfig.enableTestMode,u.log.warn("Entered invalid characters in enableTestMode"))),e.theme&&((t=/^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g).test(e.theme)?30<e.theme.length&&(e.theme=this.defaultConfig.theme,u.log.warn("Entered characters in theme exceeds maximum allowed characters limit of 30")):(e.theme=this.defaultConfig.theme,u.log.warn("Entered invalid characters in theme"))),e.domId&&((t=/^[0-9A-Za-z-\_,]+[0-9A-Za-z-\_,]*$/g).test(e.domId)?90<e.domId.length&&(e.domId=this.defaultConfig.domId,u.log.warn("Entered characters in domId exceeds maximum allowed characters limit of 90")):(e.domId=this.defaultConfig.domId,u.log.warn("Entered invalid characters in domId"))),e.challengeType&&((t=/^[A-Za-z]+[A-Za-z]*$/g).test(e.challengeType)?120<e.challengeType.length&&(e.challengeType=this.defaultConfig.challengeType,u.log.warn("Entered characters in challengeType exceeds maximum allowed characters limit of 30")):(e.challengeType=this.defaultConfig.challengeType,u.log.warn("Entered invalid characters in challengeType"))),e.autoFormValidate&&((t=/^[A-Za-z]+[A-Za-z]*$/g).test(e.autoFormValidate)?5<e.autoFormValidate.length?(e.autoFormValidate=this.defaultConfig.autoFormValidate,u.log.warn("Entered characters in autoFormValidate exceeds maximum allowed characters limit of 5")):"true"==e.autoFormValidate?e.autoFormValidate=!0:"false"==e.autoFormValidate?e.autoFormValidate=!1:"boolean"!=typeof e.autoFormValidate&&(e.autoFormValidate=this.defaultConfig.autoFormValidate,u.log.warn("autoFormValidate can either only be true or false")):(e.autoFormValidate=this.defaultConfig.autoFormValidate,u.log.warn("Entered invalid characters in autoFormValidate"))),e.autoFadeOuterText&&((t=/^[A-Za-z]+[A-Za-z]*$/g).test(e.autoFadeOuterText)?5<e.autoFadeOuterText.length&&(e.autoFadeOuterText=this.defaultConfig.autoFadeOuterText,u.log.warn("Entered characters in autoFadeOuterText exceeds maximum allowed characters limit of 5")):(e.autoFadeOuterText=this.defaultConfig.autoFadeOuterText,u.log.warn("Entered invalid characters in autoFadeOuterText"))),e.render&&((t=/^[A-Za-z]+[A-Za-z]*$/g).test(e.render)?30<e.render.length?(e.render=this.defaultConfig.render,u.log.warn("Entered characters in render exceeds maximum allowed characters limit of 30")):"auto"!==e.render&&"explicit"!==e.render&&(e.render=this.defaultConfig.render,u.log.warn("render can only be `explicit` or `auto`")):(e.render=this.defaultConfig.render,u.log.warn("Entered invalid characters in render"))),e.action&&((t=/^[0-9A-Za-z-\_\,\.]+[0-9A-Za-z-\_\,\.]*$/g).test(e.action)?30<e.action.length&&(e.action=this.defaultConfig.action,u.log.warn("Entered characters in action exceeds maximum allowed characters limit of 30")):(e.action=this.defaultConfig.action,u.log.warn("Entered invalid characters in action"))),e.lang&&((t=/^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g).test(e.lang)?8<e.lang.length&&(e.lang=this.defaultConfig.lang,u.log.warn("Entered characters in lang exceeds maximum allowed characters limit of 8")):(e.lang=this.defaultConfig.lang,u.log.warn("Entered invalid characters in lang"))),e.textLength&&((t=/^[0-9]+[0-9]*$/g).test(e.textLength)||(e.textLength=this.defaultConfig.textLength,u.log.warn("Entered invalid characters in textLength"))),e.lowFrictionInvisible&&((t=/^[A-Za-z-]+[A-Za-z-]*$/g).test(e.lowFrictionInvisible)?30<e.lowFrictionInvisible.length&&(e.lowFrictionInvisible=this.defaultConfig.lowFrictionInvisible,u.log.warn("Entered characters in lowFrictionInvisible exceeds maximum allowed characters limit of 30")):(e.lowFrictionInvisible=this.defaultConfig.lowFrictionInvisible,u.log.warn("Entered invalid characters in lowFrictionInvisible"))),e.testmode_lowFrictionInvisible&&((t=/^[A-Za-z-]+[A-Za-z-]*$/g).test(e.testmode_lowFrictionInvisible)?30<e.testmode_lowFrictionInvisible.length&&(e.testmode_lowFrictionInvisible=this.defaultConfig.testmode_lowFrictionInvisible,u.log.warn("Entered characters in testmode_lowFrictionInvisible exceeds maximum allowed characters limit of 30")):(e.testmode_lowFrictionInvisible=this.defaultConfig.testmode_lowFrictionInvisible,u.log.warn("Entered invalid characters in testmode_lowFrictionInvisible"))),e["jsloaded-callback"]){var n=!1;"function"==typeof e["jsloaded-callback"]?n=!0:"string"==typeof e["jsloaded-callback"]&&/^([a-zA-Z0-9\_\$]{1,})$/.test(e["jsloaded-callback"])&&(n=!0),n||(e["jsloaded-callback"]=this.defaultConfig["jsloaded-callback"],u.log.warn("Callback function is not valid"))}if(e["rendered-callback"]){n=!1;"function"==typeof e["rendered-callback"]?n=!0:"string"==typeof e["rendered-callback"]&&/^([a-zA-Z0-9\_\$]{1,})$/.test(e["rendered-callback"])&&(n=!0),n||(e["rendered-callback"]=this.defaultConfig["rendered-callback"],u.log.warn("Callback function is not valid"))}if(e["verified-callback"]){n=!1;"function"==typeof e["verified-callback"]?n=!0:"string"==typeof e["verified-callback"]&&/^([a-zA-Z0-9\_\$]{1,})$/.test(e["verified-callback"])&&(n=!0),n||(e["verified-callback"]=this.defaultConfig["verified-callback"],u.log.warn("Callback function is not valid"))}if(e["verifyexpired-callback"]){n=!1;"function"==typeof e["verifyexpired-callback"]?n=!0:"string"==typeof e["verifyexpired-callback"]&&/^([a-zA-Z0-9\_\$]{1,})$/.test(e["verifyexpired-callback"])&&(n=!0),n||(e["verifyexpired-callback"]=this.defaultConfig["verifyexpired-callback"],u.log.warn("Callback function is not valid"))}if(e["error-callback"]){n=!1;"function"==typeof e["error-callback"]?n=!0:"string"==typeof e["error-callback"]&&/^([a-zA-Z0-9\_\$]{1,})$/.test(e["error-callback"])&&(n=!0),n||(e["error-callback"]=this.defaultConfig["error-callback"],u.log.warn("Callback function is not valid"))}if(e.renderQueue)if("Array"==e.renderQueue.constructor.name){for(var a=!1,i=0;i<e.renderQueue.length;i++)(t=/^[0-9A-Za-z-\_\,\.]+[0-9A-Za-z-\_\,\.]*$/g).test(e.renderQueue[i])?90<=e.renderQueue[i].length&&(a=!(e.renderQueue[i]=""),u.log.warn("Maximum allowed renderQueue id is 90 characters")):a=!0;a&&(e.renderQueue=this.defaultConfig.renderQueue,u.log.warn("Entered invalid characters in renderQueue"))}else e.renderQueue=this.defaultConfig.renderQueue,u.log.warn("'renderQueue' must be array of dom id's");if(e.customStyle)if(u.util.isObject(e.customStyle)){for(a=!1,i=0;i<Object.keys(e.customStyle).length;i++){t=/^[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]+[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]*$/g;var o=e.customStyle[Object.keys(e.customStyle)[i]];if(u.util.isString(o))t.test(o)?90<o.length&&(u.log.warn("Maximum allowed customStyle value is 90 characters"),o=o.substring(0,90)):a=!0;else if(u.util.isObject(o))for(var r=0;r<Object.keys(o).length;r++)u.util.isString(o[Object.keys(o)[r]])?(t=/^[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]+[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]*$/g).test(o[Object.keys(o)[r]])?90<o[Object.keys(o)[r]].length&&(u.log.warn("Maximum allowed customStyle value is 90 characters"),o[Object.keys(o)[r]]=o[Object.keys(o)[r]].substring(0,90)):a=!0:u.util.isBolean(o)||(a=!0);else u.util.isBolean(o)||(a=!0)}a&&(e.customStyle=this.defaultConfig.customStyle,u.log.warn("Entered invalid characters in customStyle"))}else e.customStyle=this.defaultConfig.customStyle,u.log.warn("Entered invalid characters in customStyle");if(e.customLangText)if(u.util.isObject(e.customLangText)){for(a=!1,i=0;i<Object.keys(e.customLangText).length;i++){var l=e.customLangText[Object.keys(e.customLangText)[i]];if(u.util.isObject(l)){var c=Object.keys(l);for(r=0;r<c.length;r++){var s=l[c[r]];u.util.isString(s)?90<s.length?(u.log.warn("Maximum allowed customLangText value is 90 characters"),l[c[r]]=s.replace(/</g,"").replace(/>/g,"").replace(/\//g,"").substring(0,90)):l[c[r]]=s.replace(/</g,"").replace(/>/g,"").replace(/\//g,""):a=!0}}else a=!0}a&&(e.customLangText=this.defaultConfig.customLangText,u.log.warn("Entered invalid characters in customLangText"))}else e.customLangText=this.defaultConfig.customLangText,u.log.warn("Entered invalid characters in customLangText");return e},overlapConfHighToLow:function(e,t){for(var n in e)if(void 0!==t[n])if("function"==typeof e[n]&&"string"==typeof t[n]){var a=t[n]+"";e[n]=u.conf.executeCallbackFunctionByName(a,n)}else e[n]=t[n]},getDomConfFromElementAttrs:function(e){var t=u.util.assign(this.defaultConfig);for(var n in delete t.domId,delete t.customLangText,delete t.render,delete t.waitForDom,t){var a=e.getAttribute("data-"+n),i=typeof t[n];if(null==a||""==a)delete t[n];else if("string"==i)t[n]=a;else if("number"==i)a=parseInt(a),isNaN(a)?u.log.warn("Entered the invalid number for data-"+n):t[n]=a;else if("boolean"==i)"true"==(a=a.toLowerCase())||"t"==a||"1"==a||!0===a?t[n]=!0:"false"==a||"f"==a||"0"==a||!1===a?t[n]=!1:u.log.warn("Entered the invalid boolean value for data-"+n);else if("object"==i)try{a.replace(/[\']/g,'"'),a=JSON.parse(a),t[n]=a}catch(e){u.log.warn(e+" for data-"+n)}else"function"==i&&(t[n]=u.conf.executeCallbackFunctionByName(a,null))}return t},executeCallbackFunctionByName:function(o,r){return function(e){for(var t=o.split("."),n=t.pop(),a=window,i=0;i<t.length;i++){if("object"!=typeof a[t[i]]){a=null;break}a=a[t[i]]}null!==a&&"function"==typeof a[n]?a[n](e):u.log.warn("Unable to find callback function by name: '"+o+"' for "+r)}}},u.widget={bodyLoadedTS:-1,generalConfig:null,tryRenderPendingQueue:function(){if(!(g.length<1)){for(var e=u.widget.generalConfig,t=g,n=!0,a=0;a<t.length;a++){var i=t[a],o=i.name,r=i.config,l=u.util.getDOM(o);if(null!=l){if(o="class:mtcaptcha"==o?"mtcaptcha":o,u.util.isAlreadyLoadedMTCap(o,l))u.log.warn("Captcha Already Rendered");else{var c=u.conf.getDomConfFromElementAttrs(l);d[o]=u.conf.overlayConfig(e,r,c),u.widget.doRender(o,l)}g.splice(a,1)}else n=!1}if(!n)if(0<e.waitForDom){var s=Date.now();u.widget.bodyLoadedTS<1&&"complete"===document.readyState&&(u.widget.bodyLoadedTS=s),(u.widget.bodyLoadedTS<1||u.widget.bodyLoadedTS+1e3*e.waitForDom>s)&&setTimeout(u.widget.tryRenderPendingQueue,330)}else u.util.domNtFound("DOM not found")}},doRender:function(e,t){if(d[e].widgetInstance=e,d[e].counter=++o,d[e].domElement=t,!u.util.isValidSitekey(d[e].sitekey))return d[e].sCode=2402,void d[e]["error-callback"](u.util.constructStatus(d[e],"Bad SiteKey"));if(t.innerHTML="",!u.util.isCookieEnabled()){var n=document.createElement("iframe"),a="https://"+r+"/mtcv1/client/cookie.html?v=2019-10-29.11.59.34";return u.util.setAttributes(n,{style:" width:100%; height:182px; border: 0;padding: 0;margin: 0;background: transparent;",src:a,title:"mtcaptcha",frameborder:0,scrolling:"no"}),t.appendChild(n),void n.addEventListener("load",function(){u.util.getIframeDoc(n).getElementById("mtcap-cookie").addEventListener("click",function(){mtcaptcha.renderUI(e,mtcaptcha.getConfiguration(e))})},!1)}t.setAttribute("mtcapwid",d[e].widgetInstance+"-"+d[e].counter);var i=u.util.findParentElement(t,"form");d[e].autoFormValidate&&(null!==i?u.UI.attachFormValidateEvent(i,e):u.log.warn("Captcha implemented outside of form, Auto Validation on submit cannot be done")),d[e].custom=0<Object.keys(d[e].customLangText).length||0<Object.keys(d[e].customStyle).length,u.UI.generateIframe(e)}},u.util={isBolean:function(e){return"boolean"==typeof e},isEmpty:function(e){return null==e||0===e.length},isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e},iterationCopy:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},setServiceDomain:function(){switch(e){case"CDN":r="service.mtcaptcha.com";break;case"PROXY":r="service2.mtcaptcha.com"}},findParentElement:function(e,t,n){var a=e.parentNode;for(null==n&&(n="body");!u.util.selectorMatches(a,n)&&!u.util.selectorMatches(a,t);)a=a.parentNode;return u.util.selectorMatches(a,n)&&(a=null),a},getIframeDoc:function(e){var t=e.document;return e.contentDocument?t=e.contentDocument:e.contentWindow&&(t=e.contentWindow.document),t},selectorMatches:function(e,t){var n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(e){return-1!==Array.prototype.indexOf.call(document.querySelectorAll(e),this)}).call(e,t)},IsJsonString:function(e){try{JSON.parse(e)}catch(e){return!1}return!0},domNtFound:function(e){u.log.error(e);var t=u.util.constructStatus({sCode:2400},e);void 0!==a&&void 0!==a["error-callback"]&&u.util.executeCallbackBeforeRender("error-callback",t)},constructStatus:function(e,t,n){var a={};return void 0!==e&&(a.element=null!=e.widgetInstance?u.util.getDOM(e.widgetInstance):null,a.domID=e.widgetInstance||"",a.statusCode=e.sCode||n||0,a.verifiedToken=2100==e.sCode?e.verifiedToken:null,a.isVerified=2100==e.sCode,a.statusDesc=t||""),a},isCookieEnabled:function(){var e=!!navigator.cookieEnabled;return void 0!==navigator.cookieEnabled||e||(document.cookie="mtcapTestCookie; secure; httponly",e=-1!=document.cookie.indexOf("mtcapTestCookie")),e},jsonToURLParameter:function(e,t){var n="";for(var a in e){var i=e[a];n+=encodeURIComponent(a)+"="+encodeURIComponent(i)+"&"}return 0<n.length&&(n=n.substring(0,n.length-1)),t+"?"+n},validateSelector:function(e){if(void 0===e||""==e)e=Object.keys(d)[0];else if("string"!=typeof e)return void u.util.domNtFound("Invalid Selector Passed");return void 0!==e&&(e=u.util.cleanXSSVulnerableString(e)),e},assign:function(e){var t=JSON.parse(JSON.stringify(e,function(e,t){return"function"==typeof t?t.toString():t}));for(var n in t)"string"==typeof t[n]&&0<=t[n].indexOf("function")&&(t[n]=new Function("return ("+t[n]+")")());return t},setIframeDimension:function(e,t){var n="minimodern"==e?{width:"315px",height:"96px"}:{width:"100%",height:"0px"};this.setAttributes(t,n)},setAttributes:function(e,t){for(var n in t)e.setAttribute(n,t[n])},getObject:function(e){if(void 0!==d[e])return d[e]},isValidSitekey:function(e){var t=!0;return""===e||null==e?(u.log.error("Missing Required Parameter: sitekey"),t=!1):200<e.length&&(u.log.error("Sitekey Provided is Invalid"),t=!1),t},getDOM:function(e){var t=null;return"class:mtcaptcha"==e||"mtcaptcha"==e?t=document.getElementsByClassName("mtcaptcha")[0]:null!=document.getElementById(e)&&(t=document.getElementById(e)),t},executeCallbackBeforeRender:function(e,t){"string"==typeof a[e]?u.conf.executeCallbackFunctionByName(a[e],null)(t):"function"==typeof a[e]?a[e]():u.log.warn("Unable to execute the callback - Please pass mtcaptchaConfig.jsloaded-callback with function name or function type")},isAlreadyLoadedMTCap:function(e,t){var n=!1;return d.hasOwnProperty(e)&&t.hasAttribute("mtcapwid")&&(n=!0),n},cleanXSSVulnerableString:function(e){return e=(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"")).replace(/"/g," ").replace(/'/g," ").replace(/{/g,"").replace(/}/g,"")}},u.interface={postMessage:function(e,t,n){try{var a={mtcap:2,widgetInstance:e.widgetInstance,event:t,eventinfo:n},i=document.getElementById(e.iframeInstanceid);a=JSON.stringify(a),i.contentWindow.postMessage(a,"https://"+r)}catch(e){u.log.warn(e)}},postCustomConfigToIframe:function(e){var t={};0<Object.keys(e.customLangText).length&&(t.customLangText=e.customLangText),0<Object.keys(e.customStyle).length&&(t.customStyle=e.customStyle),this.postMessage(e,"setConfigCustom",t)}},u.UI={renderUI:function(e,t){u.util.isEmpty(e)&&(e=a.domId||"class:mtcaptcha"),u.util.isString(e)&&(e=u.util.cleanXSSVulnerableString(e)),!u.util.isEmpty(e)&&u.util.isString(e)?("object"!=typeof t&&null==t&&null==t&&(t={}),g.push({name:e,config:t}),u.widget.tryRenderPendingQueue()):u.util.domNtFound("Invalid Selector Passed to render the captcha")},resetUI:function(e){var t=Date.now();if(null==e||null==e||""==e)e=Object.keys(d)[0];else{if(!u.util.isString(e))return void u.util.domNtFound("Invalid Selector Passed");if(e=u.util.cleanXSSVulnerableString(e),!d.hasOwnProperty(e))return void u.util.domNtFound("Invalid Selector Passed")}if(null==e)return u.log.warn("Unable to reset the captcha. No captcha is rendered for the id specified."),!1;u.UI.generateIframe(e,t)},remove:function(e){if(null==e||null==e||""==e)e=Object.keys(d)[0];else{if(!u.util.isString(e))return void u.util.domNtFound("Invalid Selector Passed");if(e=u.util.cleanXSSVulnerableString(e),!d.hasOwnProperty(e))return void u.util.domNtFound("Invalid Selector Passed")}d[e].status.element.innerHTML="",delete d[e]},focus:function(e){if(null==e||null==e||""==e)e=Object.keys(d)[0];else{if(!u.util.isString(e))return void u.util.domNtFound("Invalid Selector Passed");if(e=u.util.cleanXSSVulnerableString(e),!d.hasOwnProperty(e))return void u.util.domNtFound("Invalid Selector Passed")}var t=u.util.getObject(e);u.interface.postMessage(t,"focus",{msg:e})},attachFormValidateEvent:function(e,n){var t=function(e){var t=u.util.getObject(n);2100!=t.status.statusCode&&(e.preventDefault(),u.interface.postMessage(t,"showRequired",{msg:"Validation Not Completed"}))};e.addEventListener?e.addEventListener("submit",t,!0):e.attachEvent("onsubmit",t)},generateIframe:function(e,t){var n=document.createElement("iframe");d[e].iframeInstanceid=d[e].widgetInstance+"-iframe-"+d[e].counter,window.location.origin||(window.location.origin="https://"+window.location.hostname+(window.location.port?":"+window.location.port:""));var a={v:"2019-10-29.11.59.34",sitekey:d[e].sitekey,iframeId:d[e].iframeInstanceid,widgetSize:d[e].widgetSize,custom:d[e].custom,widgetInstance:d[e].widgetInstance,challengeType:d[e].challengeType,theme:d[e].theme,lang:d[e].lang,action:d[e].action,autoFadeOuterText:d[e].autoFadeOuterText,host:window.location.origin,hostname:window.location.host,serviceDomain:r,textLength:d[e].textLength,lowFrictionInvisible:d[e].lowFrictionInvisible};null!=t&&(a.resetTS=t),null!=d[e].testmode_lowFrictionInvisible&&""!=d[e].testmode_lowFrictionInvisible&&(a.testmode_lowFrictionInvisible=d[e].testmode_lowFrictionInvisible),d[e].domElement.innerHTML="";var i=u.util.jsonToURLParameter(a,"https://"+r+"/mtcv1/client/iframe.html");u.util.setAttributes(n,{id:d[e].iframeInstanceid,style:"display: none; border: 0;padding: 0;margin: 0;background: transparent;",src:i,title:"mtcaptcha",frameborder:0,scrolling:"no",sandbox:" allow-forms allow-popups allow-same-origin allow-scripts allow-modals allow-popups-to-escape-sandbox"}),u.util.setIframeDimension(d[e].widgetSize,n),d[e].domElement.appendChild(n);var o=document.createElement("input");u.util.setAttributes(o,{type:"hidden",class:"mtcaptcha-verifiedtoken",name:"mtcaptcha-verifiedtoken",id:d[e].widgetInstance+"-verifiedtoken-"+d[e].counter,readonly:"readonly",value:""}),d[e].domElement.appendChild(o)},getStatus:function(e){var t={element:null,domID:"",statusCode:0,verifiedToken:"",isVerified:!1,isVisible:!1,statusDesc:"Not Found or Not Yet Rendered"};e=u.util.validateSelector(e);var n=u.util.getObject(e);return void 0!==n&&void 0!==n.status&&(u.interface.postMessage(n,"getStatus",{msg:n.status.statusDesc}),u.conf.overlapConfHighToLow(t,u.util.iterationCopy(n.status))),t},getVerifiedToken:function(e){return e=u.util.validateSelector(e),u.util.getObject(e).status.verifiedToken},enableTestMode:function(e,t){if(null==t||null==t||""==t)t=Object.keys(d)[0];else{if(!u.util.isString(t))return void u.util.domNtFound("Invalid Selector Passed");if(t=u.util.cleanXSSVulnerableString(t),!d.hasOwnProperty(t))return void u.util.domNtFound("Invalid Selector Passed")}var n=d[t];if("string"!=typeof e||""==e)return n.sCode=2450,n["error-callback"](u.util.constructStatus(n,"enableTestMode Key Incorrect")),void u.log.error("Invalid testkey Passed");e=u.util.cleanXSSVulnerableString(e),n.enableTestMode=e,u.interface.postMessage(n,"enableTestMode",{enableTestMode:e})},showMandatory:function(e){var t;if(null==(t=null==e||null==e||""==e?Object.keys(d)[0]:d.hasOwnProperty(e)?e:Object.keys(d)[0]))return u.log.warn("Unable to show mandatory. No captcha is rendered for the id specified."),!1;var n=u.util.getObject(t);if(2100==n.status.statusCode)return u.log.warn("Captcha Verified Already."),!1;u.interface.postMessage(n,"showRequired",{msg:"Validation Not Completed"});var a=u.util.findParentElement(n.domElement,"form");return u.UI.attachFormValidateEvent(a,t),!0},getConfiguration:function(e){null!=e&&null!=e&&""!=e&&"undefined"!=e&&"null"!=e||(e=Object.keys(d)[0]);var t=u.util.getObject(e);if(null==t||null==t)return null;var n=u.util.iterationCopy(u.conf.defaultConfig);return u.conf.overlapConfHighToLow(n,t),n}},u.eventEmitter={events:{error:function(){var e=u.util.getObject(this.widgetInstance);u.log.error(this.eventinfo.msg),e["error-callback"](u.UI.getStatus(e.widgetInstance)),document.getElementById(e.iframeInstanceid).style.display="inline-block",u.interface.postMessage(e,"widgetheightchange",{msg:"widgetheightchange"})},warning:function(){u.log.warn(this.eventinfo.msg)},waitConfigCustom:function(){var e=u.util.getObject(this.widgetInstance);u.interface.postCustomConfigToIframe(e)},showCaptcha:function(){var e=u.util.getObject(this.widgetInstance);document.getElementById(e.iframeInstanceid).style.display="inline-block",u.interface.postMessage(e,"widgetheightchange",{msg:"widgetheightchange"})},rendered:function(){var e=u.util.getObject(this.widgetInstance);u.interface.postMessage(e,"widgetheightchange",{msg:"widgetheightchange"}),2200==e.status.statusCode&&e["rendered-callback"](u.UI.getStatus(e.widgetInstance))},loaded:function(){var e=u.util.getObject(this.widgetInstance);null!=d[this.widgetInstance].enableTestMode&&""!=d[this.widgetInstance].enableTestMode&&u.UI.enableTestMode(d[this.widgetInstance].enableTestMode,this.widgetInstance),1201==e.status.statusCode&&e["loaded-callback"](u.UI.getStatus(e.widgetInstance))},widgetheightchange:function(){var e=u.util.getObject(this.widgetInstance),t=document.getElementById(e.iframeInstanceid);t.style.height=this.eventinfo.h,t.setAttribute("height",this.eventinfo.h)},verifystatuschange:function(){var e=u.util.getObject(this.widgetInstance);switch(this.eventinfo.msg){case"Verified":document.getElementById(e.widgetInstance+"-verifiedtoken-"+e.counter).setAttribute("value",e.status.verifiedToken),e.status.isLowFriction&&(document.getElementById(e.iframeInstanceid).style.height="0px"),e["verified-callback"](u.UI.getStatus(e.widgetInstance));break;case"verifyexpired":document.getElementById(e.widgetInstance+"-verifiedtoken-"+e.counter).setAttribute("value",""),e["verifyexpired-callback"](u.UI.getStatus(e.widgetInstance))}}},trigger:function(e,t){this.events[e]&&this.events[e].apply(t)}},u.init=function(){u.util.setServiceDomain(),void 0!==a&&void 0!==a["jsloaded-callback"]&&u.util.executeCallbackBeforeRender("jsloaded-callback");var e=[];void 0!==a&&null!=a.renderQueue&&0<a.renderQueue.length&&("object"==typeof a.renderQueue&&Array.isArray(a.renderQueue)?e=a.renderQueue:u.log.warn("RenderQueue should be Array.")),null===u.widget.generalConfig&&(u.widget.generalConfig=u.conf.overlayConfig(a)),a.renderQueue=[],a.renderQueue.push=function(e,t){u.widget.generalConfig=u.conf.overlayConfig(a),u.UI.renderUI(e,t)},"auto"==u.widget.generalConfig.render&&(null!=a.domId&&e.push(a.domId),0==e.length&&e.push("class:mtcaptcha"));for(var t=0;t<e.length;t++)u.UI.renderUI(e[t]);n("message",function(e){if(u.util.IsJsonString(e.data)){var t=JSON.parse(e.data);if(1==t.mtcap)t.status.element=u.util.getDOM(t.status.element),u.util.getObject(t.widgetInstance).status=t.status,u.eventEmitter.trigger(t.event,t)}},!1)},void 0===window.mtcaptcha&&(window.mtcaptcha2={renderUI:u.UI.renderUI,resetUI:u.UI.resetUI,remove:u.UI.remove,enableTestMode:u.UI.enableTestMode,getStatus:u.UI.getStatus,getVerifiedToken:u.UI.getVerifiedToken,showMandatory:u.UI.showMandatory,getConfiguration:u.UI.getConfiguration,focus:u.UI.focus},setTimeout(function(){null==window.mtcaptcha&&(window.mtcaptcha=window.mtcaptcha2,e="PROXY",u.init()),window.mtcaptcha2=void 0},50))}();