describe("iframe context",function(){this.timeout(2e4);var e,t;before(function(n){var i="./iframe.html?id=modernizrIframeContext";t=$("<iframe>"),$(document.body).append(t),t.css({height:10,width:10,position:"absolute",top:0,left:0}).attr({src:i,id:"modernizrIframeContext"}).on("lockedAndLoaded",function(){e=$(this)[0].contentWindow,n()})}),it("is able to be loaded in an iframe",function(t){e.$.getScript("../dist/modernizr-build.js").done(function(n,i){expect(i).to.equal("success"),expect(e.Modernizr).to.not.be(void 0),t()}).fail(function(e,n,i){i&&i.message?expect(i.message).to.be(void 0):expect(n).to.be(void 0),t()})}),after(function(){t.remove(),e=t=void 0})});