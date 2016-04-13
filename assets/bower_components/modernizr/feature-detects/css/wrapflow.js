/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "https://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(A,e,n,t,i){A.addTest("wrapflow",function(){var A=e("wrapFlow");if(!A||i)return!1;var d=A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"),o=t("div"),a=t("div"),w=t("span");a.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+d+":end;",w.innerText="X",o.appendChild(a),o.appendChild(w),n.appendChild(o);var r=w.offsetLeft;return n.removeChild(o),a=w=o=void 0,150==r})});