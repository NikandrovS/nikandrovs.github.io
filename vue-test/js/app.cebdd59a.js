(function(e){function t(t){for(var r,o,c=t[0],s=t[1],a=t[2],i=0,l=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(_,o)&&_[o]&&l.push(_[o][0]),_[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==_[c]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},_={app:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-00f5d4a9":"8ca2c06a","chunk-44f965ee":"abceb880","chunk-f491bcd0":"fed8eff7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-00f5d4a9":1,"chunk-44f965ee":1,"chunk-f491bcd0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-00f5d4a9":"de70fa56","chunk-44f965ee":"c26e0fdb","chunk-f491bcd0":"ef5aa7f8"}[e]+".css",_=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var a=u[c],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===r||i===_))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){a=l[c],i=a.getAttribute("data-href");if(i===r||i===_)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||_,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=_;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=_[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=_[e]=[t,n]}));t.push(r[2]=u);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=_[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}_[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3b1d":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a9e3"),core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8ba4"),core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("b680"),core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);__webpack_exports__["a"]={state:{input:"",memory:""},mutations:{inputEntry:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!parseInt(e.input)&&"0"===t)return!1;e.input+=t,e.memory+=t},clearInput:function(e){e.input="",e.memory=""},action:function(e,t){if(e.input)switch(e.input="",t){case"+":e.memory+="+";break;case"−":e.memory+="-";break;case"×":e.memory+="*";break;case"÷":e.memory+="/";break;default:break}},result:function result(state){if(state.memory){var result=eval(state.memory);Number.isInteger(result)||(result=result.toFixed(2)),state.input=result.toString()}}},actions:{},getters:{currentValue:function(e){return e.input}}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},_=Object(r["f"])("Home"),u=Object(r["f"])(" | "),c=Object(r["f"])("Todo List"),s=Object(r["f"])(" | "),a=Object(r["f"])("Posts"),i=Object(r["f"])(" | "),l=Object(r["f"])("Calculator");function d(e,t,n,d,f,p){var m=Object(r["w"])("router-link"),b=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["g"])(m,{to:"/"},{default:Object(r["D"])((function(){return[_]})),_:1}),u,Object(r["g"])(m,{to:"/todo"},{default:Object(r["D"])((function(){return[c]})),_:1}),s,Object(r["g"])(m,{to:"/posts"},{default:Object(r["D"])((function(){return[a]})),_:1}),i,Object(r["g"])(m,{to:"/calculator"},{default:Object(r["D"])((function(){return[l]})),_:1})]),Object(r["g"])(b)],64)}n("64be");const f={};f.render=d;var p=f,m=(n("d3b7"),n("6c02")),b=n("cf05"),h=n.n(b),O={class:"home"},g=Object(r["g"])("img",{alt:"Vue logo",src:h.a},null,-1),j=Object(r["g"])("h1",null,"Welcome to my Vue.js app",-1);function E(e,t,n,o,_,u){return Object(r["p"])(),Object(r["d"])("div",O,[g,j])}var v={name:"Home",components:{}};v.render=E;var P=v,y=[{path:"/",name:"Home",component:P},{path:"/todo",name:"Todo",component:function(){return n.e("chunk-00f5d4a9").then(n.bind(null,"a3b3"))}},{path:"/calculator",name:"Calc",component:function(){return n.e("chunk-44f965ee").then(n.bind(null,"39c1"))}},{path:"/posts",name:"Posts",component:function(){return n.e("chunk-f491bcd0").then(n.bind(null,"17c3"))}}],k=Object(m["a"])({history:Object(m["b"])("/"),routes:y}),D=k,w=n("5502"),M=(n("4de4"),{state:{todos:[{id:1,title:"Купить молоко",completed:!1},{id:2,title:"Купить хлеб",completed:!1},{id:3,title:"Купить бананы",completed:!0},{id:4,title:"Купить молоко",completed:!1}]},mutations:{add:function(e,t){e.todos.unshift(t)},remove:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t}))}},actions:{},getters:{getTodos:function(e){return e.todos}}}),T=(n("96cf"),n("1da1")),C={state:{posts:[],loading:!0},mutations:{updatePosts:function(e,t){e.loading=!1,e.posts=t},createPost:function(e,t){e.posts.unshift(t)}},actions:{fetchPosts:function(e){var t=arguments;return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,o,_;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:3,n.next=3,fetch("https://jsonplaceholder.typicode.com/posts?_limit="+r);case 3:return o=n.sent,n.next=6,o.json();case 6:_=n.sent,setTimeout((function(){e.commit("updatePosts",_)}),1e3);case 8:case"end":return n.stop()}}),n)})))()}},getters:{allPosts:function(e){return e.posts},validPosts:function(e){return e.posts.filter((function(e){return e.title&&e.body}))},loadingStatus:function(e){return e.loading},postsCount:function(e,t){return t.validPosts.length}}},A=n("3b1d"),L=Object(w["a"])({modules:{todos:M,post:C,calculator:A["a"]}});Object(r["c"])(p).use(L).use(D).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},c894:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.cebdd59a.js.map