describe("prefixed()",function(){function e(e,t){var n,o=["Moz","Khtml","Webkit","O","ms"],i=["moz","khtml","webkit","o","ms"],r=document.createElement("div"),c=e.charAt(0).toUpperCase()+e.slice(1);if(t){if(e in t)return e;for(n=i.length;n--;)if(i[n]+c in t)return i[n]+c}else{if(e in r.style)return e;for(n=o.length;n--;)if(o[n]+c in r.style)return o[n]+c}return!1}function t(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}var n=["transition","backgroundSize","boxSizing","borderImage","borderRadius","boxShadow","columnCount"],o=[{prop:"requestAnimationFrame",obj:window},{prop:"querySelectorAll",obj:document},{prop:"matchesSelector",obj:document.createElement("div")}];_.forEach(n,function(t){it("results for "+t+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(t)).to.equal(e(t))})}),_.forEach(n,function(n){it("results for "+n+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(t(n))).to.equal(e(n))})}),_.forEach(o,function(t){it("results for "+t.prop+" match the homebaked prefix finder",function(){var n=Modernizr.prefixed(t.prop,t.obj,!1),o=e(t.prop,t.obj);expect(n).to[_.isString(o)?"contain":"equal"](o)})})});