"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,d=n.version;e["default"]=t["default"].extend({version:d,name:r})}),define("dummy/components/facebook-feed",["exports","ember-cli-facebook-feed/components/facebook-feed"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,d=n.version;e["default"]={name:"App Version",initialize:t["default"](r,d)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("no-feed")}),e["default"]=n}),define("dummy/routes/no-feed",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","title");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/aethermx/ember-cli-facebook-feed");var r=e.createTextNode("\n    ember-cli-facebook-feed");e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("nav"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2]),r=new Array(3);return r[0]=e.createMorphAt(n,1,1),r[1]=e.createMorphAt(n,3,3),r[2]=e.createMorphAt(t,4,4,a),r},statements:[["inline","link-to",["show feed","index"],["id","feed"],["loc",[null,[6,2],[6,43]]]],["inline","link-to",["no feed","no-feed"],["id","nofeed"],["loc",[null,[7,2],[7,45]]]],["content","outlet",["loc",[null,[10,0],[10,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:17,column:2},end:{line:19,column:2}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","fb-page"),e.setAttribute(a,"data-href","https://www.facebook.com/emberjavascript"),e.setAttribute(a,"data-small-header","true"),e.setAttribute(a,"data-adapt-container-width","true"),e.setAttribute(a,"data-hide-cover","true"),e.setAttribute(a,"data-show-facepile","true"),e.setAttribute(a,"data-show-posts","true");var n=e.createElement("div");e.setAttribute(n,"class","fb-xfbml-parse-ignore");var r=e.createElement("blockquote");e.setAttribute(r,"cite","https://www.facebook.com/emberjavascript");var d=e.createElement("a");e.setAttribute(d,"href","https://www.facebook.com/emberjavascript");var o=e.createTextNode("Ember.js");e.appendChild(d,o),e.appendChild(r,d),e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:21,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("p"),n=e.createTextNode("\n  In your template:\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("pre");e.setAttribute(a,"class","code");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createTextNode('{{#facebook-feed appId=\'759777254104976\'}}\n    <div class="fb-page" data-href="https://www.facebook.com/emberjavascript" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/emberjavascript"><a href="https://www.facebook.com/emberjavascript">Ember.js</a></blockquote></div></div>\n');e.appendChild(a,n);var n=e.createTextNode("{{/facebook-feed}}\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n  Result:\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","text_center");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[6]),1,1),n},statements:[["block","facebook-feed",[],["appId","759777254104976"],0,null,["loc",[null,[17,2],[19,20]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/no-feed",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"dummy/templates/no-feed.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("p"),n=e.createTextNode("\n  Transition back to the route with the facebook-feed component and it should\n  reload the widget.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-facebook-feed",version:"0.1.0+e4be4418"});