/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(e,t,n,i){"use strict";function r(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}var o=function(t){for(var n=t.length,i=e("head");n--;)0===i.has("."+t[n]).length&&i.append('<meta class="'+t[n]+'" />')};o(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var s=function(t,i){if("string"==typeof t){if(i){var r;if(i.jquery){if(r=i[0],!r)return i}else r=i;return e(r.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,i)},a=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},c=function(e){for(var t=e.split("-"),n=t.length,i=[];n--;)0!==n?i.push(t[n]):this.namespace.length>0?i.push(this.namespace,t[n]):i.push(t[n]);return i.reverse().join("-")},u=function(t,n){var i=this,r=!s(this).data(this.attr_name(!0));return s(this.scope).is("["+this.attr_name()+"]")?(s(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope)))),r&&this.events(this.scope)):s("["+this.attr_name()+"]",this.scope).each(function(){var r=!s(this).data(i.attr_name(!0)+"-init");s(this).data(i.attr_name(!0)+"-init",e.extend({},i.settings,n||t,i.data_options(s(this)))),r&&i.events(this)}),"string"==typeof t?this[t].call(this,n):void 0},l=function(e,t){function n(){t(e[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():i.call(e)):void n()};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,i=n.firstElementChild||n.firstChild,r=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,i),t=42===o.offsetWidth,n.removeChild(r),{matches:t,media:e}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(e){function n(){i&&(s(n),c&&jQuery.fx.tick())}for(var i,r=0,o=["webkit","moz"],s=t.requestAnimationFrame,a=t.cancelAnimationFrame,c="undefined"!=typeof jQuery.fx;r<o.length&&!s;r++)s=t[o[r]+"RequestAnimationFrame"],a=a||t[o[r]+"CancelAnimationFrame"]||t[o[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=a,c&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!i&&(i=!0,n())},jQuery.fx.stop=function(){i=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),o=t.setTimeout(function(){e(n+i)},i);return r=n+i,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.4.7",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(e,n,i,r,o){var a=[e,i,r,o],c=[];if(this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&c.push(this.init_lib(n,a));else for(var u in this.libs)c.push(this.init_lib(u,n));return s(t).load(function(){s(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=a,e.add_namespace=c,e.bindings=u,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(e[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===i?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===i||/false/i.test(t)?"":t},libs:{},utils:{S:s,throttle:function(e,t){var n=null;return function(){var i=this,r=arguments;null==n&&(n=setTimeout(function(){e.apply(i,r),n=null},t))}},debounce:function(e,t,n){var i,r;return function(){var o=this,s=arguments,a=function(){i=null,n||(r=e.apply(o,s))},c=n&&!i;return clearTimeout(i),i=setTimeout(a,t),c&&(r=e.apply(o,s)),r}},data_options:function(t,n){function i(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function r(t){return"string"==typeof t?e.trim(t):t}n=n||"options";var o,s,a,c={},u=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},l=u(t);if("object"==typeof l)return l;for(a=(l||":").split(";"),o=a.length;o--;)s=a[o].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),i(s[1])&&(-1===s[1].indexOf(".")?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),2===s.length&&s[0].length>0&&(c[r(s[0])]=r(s[1]));return c},register_media:function(t,n){Foundation.media_queries[t]===i&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=r(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},image_loaded:function(e,t){var n=this,i=e.length;0===i&&t(e),e.each(function(){l(n.S(this),function(){i-=1,0===i&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document);