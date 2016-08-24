!function(e,t,n,i){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.4.7",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,opened:function(){},closed:function(){}},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(n){var i=this,r=i.S;r(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var n=r(this).data(i.attr_name(!0)+"-init")||i.settings;(!n.is_hover||Modernizr.touch)&&(t.preventDefault(),i.toggle(e(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t,n,o=r(this);clearTimeout(i.timeout),o.data(i.data_attr())?(t=r("#"+o.data(i.data_attr())),n=o):(t=o,n=r("["+i.attr_name()+"='"+t.attr("id")+"']"));var a=n.data(i.attr_name(!0)+"-init")||i.settings;r(e.target).data(i.data_attr())&&a.is_hover&&i.closeall.call(i),a.is_hover&&i.open.apply(i,[t,n])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=r(this);i.timeout=setTimeout(function(){if(t.data(i.data_attr())){var e=t.data(i.data_attr(!0)+"-init")||i.settings;e.is_hover&&i.close.call(i,r("#"+t.data(i.data_attr())))}else{var n=r("["+i.attr_name()+'="'+r(this).attr("id")+'"]'),e=n.data(i.attr_name(!0)+"-init")||i.settings;e.is_hover&&i.close.call(i,t)}}.bind(this),150)}).on("click.fndtn.dropdown",function(t){var n=r(t.target).closest("["+i.attr_name()+"-content]");if(!(r(t.target).closest("["+i.attr_name()+"]").length>0))return!r(t.target).data("revealId")&&n.length>0&&(r(t.target).is("["+i.attr_name()+"-content]")||e.contains(n.first()[0],t.target))?void t.stopPropagation():void i.close.call(i,r("["+i.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+i.attr_name()+"-content]",function(){i.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+i.attr_name()+"-content]",function(){i.settings.closed.call(this)}),r(t).off(".dropdown").on("resize.fndtn.dropdown",i.throttle(function(){i.resize.call(i)},50)),this.resize()},close:function(t){var n=this;t.each(function(){var i=e("["+n.attr_name()+"="+t[0].id+"]")||e("aria-controls="+t[0].id+"]");i.attr("aria-expanded","false"),n.S(this).hasClass(n.settings.active_class)&&(n.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(n.settings.active_class).prev("["+n.attr_name()+"]").removeClass(n.settings.active_class).removeData("target"),n.S(this).trigger("closed").trigger("closed.fndtn.dropdown",[t]))})},closeall:function(){var t=this;e.each(t.S("["+this.attr_name()+"-content]"),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),e.data("target",t.get(0)).trigger("opened").trigger("opened.fndtn.dropdown",[e,t]),e.attr("aria-hidden","false"),t.attr("aria-expanded","true"),e.focus()},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(e){if(!e.hasClass(this.settings.disabled_class)){var t=this.S("#"+e.data(this.data_attr()));0!==t.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==e.get(0)&&this.open.call(this,t,e)):this.open.call(this,t,e))}},resize:function(){var e=this.S("["+this.attr_name()+"-content].open"),t=this.S("["+this.attr_name()+"='"+e.attr("id")+"']");e.length&&t.length&&this.css(e,t)},css:function(e,t){var n=Math.max((t.width()-e.width())/2,8),i=t.data(this.attr_name(!0)+"-init")||this.settings;if(this.clear_idx(),this.small()){var r=this.dirs.bottom.call(e,t,i);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:r.top}),e.css(Foundation.rtl?"right":"left",n)}else this.style(e,t,i);return e},style:function(t,n,i){var r=e.extend({position:"absolute"},this.dirs[i.align].call(t,n,i));t.attr("style","").css(r)},dirs:{_base:function(e){var t=this.offsetParent(),n=t.offset(),i=e.offset();return i.top-=n.top,i.left-=n.left,i},top:function(e,t){var n=Foundation.libs.dropdown,i=n.dirs._base.call(this,e);return this.addClass("drop-top"),(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,i),Foundation.rtl?{left:i.left-this.outerWidth()+e.outerWidth(),top:i.top-this.outerHeight()}:{left:i.left,top:i.top-this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,i=n.dirs._base.call(this,e);return(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,i),n.rtl?{left:i.left-this.outerWidth()+e.outerWidth(),top:i.top+e.outerHeight()}:{left:i.left,top:i.top+e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-left"),{left:n.left-this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-right"),{left:n.left+e.outerWidth(),top:n.top}}},adjust_pip:function(e,t,n,i){var r=Foundation.stylesheet,o=8;e.hasClass(n.mega_class)?o=i.left+t.outerWidth()/2-8:this.small()&&(o+=i.left-8),this.rule_idx=r.cssRules.length;var a=".f-dropdown.open:before",s=".f-dropdown.open:after",c="left: "+o+"px;",u="left: "+(o-1)+"px;";r.insertRule?(r.insertRule([a,"{",c,"}"].join(" "),this.rule_idx),r.insertRule([s,"{",u,"}"].join(" "),this.rule_idx+1)):(r.addRule(a,c,this.rule_idx),r.addRule(s,u,this.rule_idx+1))},clear_idx:function(){var e=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document);