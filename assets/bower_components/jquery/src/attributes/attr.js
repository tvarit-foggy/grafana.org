define(["../core","../var/rnotwhite","../var/strundefined","../core/access","./support","../selector"],function(t,e,n,i,r){var o,s,a=t.expr.attrHandle;t.fn.extend({attr:function(e,n){return i(this,t.attr,e,n,arguments.length>1)},removeAttr:function(e){return this.each(function(){t.removeAttr(this,e)})}}),t.extend({attr:function(e,i,r){var a,c,l=e.nodeType;if(e&&3!==l&&8!==l&&2!==l)return typeof e.getAttribute===n?t.prop(e,i,r):(1===l&&t.isXMLDoc(e)||(i=i.toLowerCase(),a=t.attrHooks[i]||(t.expr.match.bool.test(i)?s:o)),void 0===r?a&&"get"in a&&null!==(c=a.get(e,i))?c:(c=t.find.attr(e,i),null==c?void 0:c):null!==r?a&&"set"in a&&void 0!==(c=a.set(e,r,i))?c:(e.setAttribute(i,r+""),r):void t.removeAttr(e,i))},removeAttr:function(n,i){var r,o,s=0,a=i&&i.match(e);if(a&&1===n.nodeType)for(;r=a[s++];)o=t.propFix[r]||r,t.expr.match.bool.test(r)&&(n[o]=!1),n.removeAttribute(r)},attrHooks:{type:{set:function(e,n){if(!r.radioValue&&"radio"===n&&t.nodeName(e,"input")){var i=e.value;return e.setAttribute("type",n),i&&(e.value=i),n}}}}}),s={set:function(e,n,i){return n===!1?t.removeAttr(e,i):e.setAttribute(i,i),i}},t.each(t.expr.match.bool.source.match(/\w+/g),function(e,n){var i=a[n]||t.find.attr;a[n]=function(t,e,n){var r,o;return n||(o=a[e],a[e]=r,r=null!=i(t,e,n)?e.toLowerCase():null,a[e]=o),r}})});