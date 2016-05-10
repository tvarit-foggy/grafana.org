/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
define(["Modernizr","domPrefixes","prefixed"],function(e,t,n){e.addTest("fullscreen",!(!n("exitFullscreen",document,!1)&&!n("cancelFullScreen",document,!1)))});