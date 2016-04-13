window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function i(e,t){return typeof e===t}var o,a,s,u="2.6.2",c={},l=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),h=p.style,A={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),g={svg:"http://www.w3.org/2000/svg"},v={},y=[],b=y.slice,w=function(e,n,r,i){var o,a,s,u,c=t.createElement("div"),l=t.body,p=l||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:d+(r+1),c.appendChild(s);return o=["&#173;",'<style id="s',d,'">',e,"</style>"].join(""),c.id=d,(l?c:p).innerHTML+=o,p.appendChild(c),l||(p.style.background="",p.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),a=n(c,e),l?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),f.style.overflow=u),!!a},x=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return w("@media "+t+" { #"+d+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},E={}.hasOwnProperty;s=i(E,"undefined")||i(E.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return E.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=b.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(b.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(b.call(arguments)))};return r}),v.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",m.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},v.svg=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect},v.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==g.svg},v.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(A.call(t.createElementNS(g.svg,"clipPath")))};for(var C in v)s(v,C)&&(a=C.toLowerCase(),c[a]=v[C](),y.push((c[a]?"":"no-")+a));return c.addTest=function(e,t){if("object"==typeof e)for(var r in e)s(e,r)&&c.addTest(r,e[r]);else{if(e=e.toLowerCase(),c[e]!==n)return c;t="function"==typeof t?t():t,"undefined"!=typeof l&&l&&(f.className+=" "+(t?"":"no-")+e),c[e]=t}return c},r(""),p=o=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=m[e[h]];return t||(t={},A++,e[h]=A,m[A]=t),t}function o(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!d.test(e)?r.frag.appendChild(o):o}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function u(e){e||(e=t);var r=i(e);return g.shivCSS&&!c&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||s(e,r),e}var c,l,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",A=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,l=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};e.html5=g,u(t)}(this,t),c._version=u,c._prefixes=m,c.mq=x,c.testStyles=w,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+y.join(" "):""),c}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=g.shift();v=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):v=0}function u(e,n,r,i,o,u,c){function l(t){if(!p&&a(f.readyState)&&(y.r=p=1,!v&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in k[n])k[n].hasOwnProperty(r)&&k[n][r].onload()}}var c=c||d.errorTimeout,f=t.createElement(e),p=0,m=0,y={t:r,s:n,e:o,a:u,x:c};1===k[n]&&(m=1,k[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,m)},g.splice(i,0,y),"img"!=e&&(m||2===k[n]?(w.insertBefore(f,b?null:A),h(l,c)):k[n].push(f))}function c(e,t,n,r,o){return v=0,t=t||"j",i(e)?u("c"==t?E:x,e,t,this.i++,n,r,o):(g.splice(this.i++,0,e),1==g.length&&s()),this}function l(){var e=d;return e.loader={load:c,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,A=t.getElementsByTagName("script")[0],m={}.toString,g=[],v=0,y="MozAppearance"in p.style,b=y&&!!t.createRange().compareNode,w=b?p:A.parentNode,p=e.opera&&"[object Opera]"==m.call(e.opera),p=!!t.attachEvent&&!p,x=y?"object":p?"script":"img",E=p?"script":x,C=Array.isArray||function(e){return"[object Array]"==m.call(e)},T=[],k={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),i=T.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=S[r.shift()])&&(o=t(o,r));for(n=0;i>n;n++)o=T[n](o);return o}function a(e,i,o,a,s){var u=t(e),c=u.autoCallback;u.url.split(".").pop().split("?").shift(),u.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),u.instead?u.instead(e,i,o,a,s):(k[u.url]?u.noexec=!0:k[u.url]=1,o.load(u.url,u.forceCSS||!u.forceJS&&"css"==u.url.split(".").pop().split("?").shift()?"c":n,u.noexec,u.attrs,u.timeout),(r(i)||r(c))&&o.load(function(){l(),i&&i(u.origUrl,s,a),c&&c(u.origUrl,s,a),k[u.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,c);else if(Object(e)===e)for(u in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(u)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[u]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[u])),a(e[u],f,t,u,c))}else!n&&p()}var s,u,c=!!e.test,l=e.load||e.both,f=e.callback||o,d=f,p=e.complete||o;n(c?e.yep:e.nope,!!l),l&&n(l)}var u,c,f=this.yepnope.loader;if(i(e))a(e,0,f,0);else if(C(e))for(u=0;u<e.length;u++)c=e[u],i(c)?a(c,0,f,0):C(c)?d(c):Object(c)===c&&s(c,f);else Object(e)===e&&s(e,f)},d.addPrefix=function(e,t){S[e]=t},d.addFilter=function(e){T.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,u,c){var l,f,p=t.createElement("script"),i=i||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=c?s:n||o,p.onreadystatechange=p.onload=function(){!l&&a(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},h(function(){l||(l=1,n(1))},i),u?p.onload():A.parentNode.insertBefore(p,A)},e.yepnope.injectCss=function(e,n,r,i,a,u){var c,i=t.createElement("link"),n=u?s:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(c in r)i.setAttribute(c,r[c]);a||(A.parentNode.insertBefore(i,A),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});