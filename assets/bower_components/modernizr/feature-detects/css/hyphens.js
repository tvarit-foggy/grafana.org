/*!
{
  "name": "CSS Hyphens",
  "caniuse": "css-hyphens",
  "property": ["csshyphens", "softhyphens", "softhyphensfind"],
  "tags": ["css"],
  "builderAliases": ["css_hyphens"],
  "async" : true,
  "authors": ["David Newton"],
  "warnings": [
    "These tests currently require document.body to be present",
    "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
    "This is very large – only include it if you absolutely need it"
    ],
  "notes": [{
    "name": "The Current State of Hyphenation on the Web.",
    "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
  },{
    "name": "Hyphenation Test Page",
    "href": "http://davidnewton.ca/demos/hyphenation/test.html"
  },{
    "name": "Hyphenation is Language Specific",
    "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
  },{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/312"
  }]
}
!*/
define(["Modernizr","prefixes","createElement","testAllProps","addTest"],function(e,t,i,n,o){e.addAsyncTest(function(){function e(){function a(){try{var e=i("div"),n=i("span"),o=e.style,r=0,a=0,s=!1,d=document.body.firstElementChild||document.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(e,d),o.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,a=n.offsetWidth,o.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+t.join("hyphens:auto; "),s=n.offsetHeight!=r||n.offsetWidth!=a,document.body.removeChild(e),e.removeChild(n),s}catch(l){return!1}}function s(e,t){try{var n=i("div"),o=i("span"),r=n.style,a=0,s=!1,d=!1,l=!1,u=document.body.firstElementChild||document.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(o),document.body.insertBefore(n,u),o.innerHTML="mm",a=o.offsetHeight,o.innerHTML="m"+e+"m",d=o.offsetHeight>a,t?(o.innerHTML="m<br />m",a=o.offsetWidth,o.innerHTML="m"+e+"m",l=o.offsetWidth>a):l=!0,d===!0&&l===!0&&(s=!0),document.body.removeChild(n),n.removeChild(o),s}catch(c){return!1}}function d(e){try{var t,n=i("input"),o=i("div"),r="lebowski",a=!1,s=document.body.firstElementChild||document.body.firstChild;if(o.innerHTML=r+e+r,document.body.insertBefore(o,s),document.body.insertBefore(n,o),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(t=n.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select()),window.find)a=window.find(r+r);else try{t=window.self.document.body.createTextRange(),a=t.findText(r+r)}catch(d){a=!1}return document.body.removeChild(o),document.body.removeChild(n),a}catch(d){return!1}}return document.body||document.getElementsByTagName("body")[0]?(o("csshyphens",function(){if(!n("hyphens","auto",!0))return!1;try{return a()}catch(e){return!1}}),o("softhyphens",function(){try{return s("&#173;",!0)&&s("&#8203;",!1)}catch(e){return!1}}),void o("softhyphensfind",function(){try{return d("&#173;")&&d("&#8203;")}catch(e){return!1}})):void setTimeout(e,r)}var r=300;setTimeout(e,r)})});