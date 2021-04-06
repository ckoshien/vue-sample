(function(e){function t(t){for(var r,u,l=t[0],i=t[1],s=t[2],c=0,f=[];c<l.length;c++)u=l[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dfd79bb1"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-sample/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"139c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],u=n("2877"),l={},i=Object(u["a"])(l,o,a,!1,null,null,null),s=i.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.setupDone?n("div",[n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"打率",active:""}},[n("vue-good-table",{attrs:{columns:e.columns,rows:e.result.averageTop10,"sort-options":{enabled:!0,initialSortBy:{field:"average",type:"desc"}}}})],1),n("b-tab",{attrs:{title:"打点"}},[n("vue-good-table",{attrs:{columns:e.columns,rows:e.result.rbiTop10,"sort-options":{enabled:!0,initialSortBy:{field:"rbi",type:"desc"}}}})],1),n("b-tab",{attrs:{title:"Disabled"}},[n("p",[e._v("I'm a disabled tab!")])])],1)],1):e._e()])},f=[],b=n("1da1"),d=n("d4ec"),v=n("bee2"),m=n("262e"),h=n("2caf"),y=(n("96cf"),n("9ab4")),g=(n("b680"),function(e){return isNaN(e)?null:e.toFixed(3)}),j=[{field:"name",label:"選手名",type:"string",html:!0},{field:"tpa",label:"打席数",type:"number"},{field:"at_bats",label:"打数",type:"number"},{field:"hit",label:"安打数",type:"number"},{field:"rbi",label:"打点",type:"number"},{field:"average",label:"打率",type:"number",formatFn:g}],w=n("1b40"),O=function(e){Object(m["a"])(n,e);var t=Object(h["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.setupDone=!1,e}return Object(v["a"])(n,[{key:"mounted",value:function(){console.log(),this.getData()}},{key:"getData",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jcbl-score.com/api/v2/league/cap_baseball/season/14");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setupDone=!0,this.columns=j,this.result=n,console.log(this.result);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(w["b"]);O=Object(y["a"])([Object(w["a"])({components:{"vue-good-table":n("f617").VueGoodTable}})],O);var _=O,x=_,k=Object(u["a"])(x,p,f,!1,null,null,null),P=k.exports;r["default"].use(c["a"]);var T=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=new c["a"]({mode:"history",base:"/vue-sample/",routes:T}),D=S,E=(n("dac4"),n("f9e3"),n("2dd8"),n("139c"),n("5f5b"));r["default"].config.productionTip=!1,r["default"].use(E["a"]),new r["default"]({router:D,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.69b22be7.js.map