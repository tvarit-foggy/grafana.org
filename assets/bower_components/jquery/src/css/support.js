define(["../core","../var/document","../var/documentElement","../var/support"],function(e,t,n,r){return function(){function i(){l.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",l.innerHTML="",n.appendChild(u);var e=window.getComputedStyle(l);o="1%"!==e.top,c="2px"===e.marginLeft,a="4px"===e.width,l.style.marginRight="50%",s="4px"===e.marginRight,n.removeChild(u)}var o,a,s,c,u=t.createElement("div"),l=t.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",r.clearCloneStyle="content-box"===l.style.backgroundClip,u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",u.appendChild(l),e.extend(r,{pixelPosition:function(){return i(),o},boxSizingReliable:function(){return null==a&&i(),a},pixelMarginRight:function(){return null==a&&i(),s},reliableMarginLeft:function(){return null==a&&i(),c},reliableMarginRight:function(){var e,r=l.appendChild(t.createElement("div"));return r.style.cssText=l.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",l.style.width="1px",n.appendChild(u),e=!parseFloat(window.getComputedStyle(r).marginRight),n.removeChild(u),l.removeChild(r),e}}))}(),r});