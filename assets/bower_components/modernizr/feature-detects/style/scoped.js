/*!
{
  "name": "style[scoped]",
  "property": "stylescoped",
  "caniuse": "style-scoped",
  "tags": ["dom"],
  "builderAliases": ["style_scoped"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#attr-style-scoped"
  }],
  "polyfills": ["scoped-styles"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("stylescoped","scoped"in e("style"))});