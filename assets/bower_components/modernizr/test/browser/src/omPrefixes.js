describe("omPrefixes",function(){var e,t;before(function(n){var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["omPrefixes","cleanup"],function(i,r){e=i,t=r,n()})}),it("returns a string",function(){expect(e).to.be.a("string"),expect(e.length).to.not.be(0)}),after(function(){t()})});