(function(t){function e(e){for(var o,i,a=e[0],u=e[1],c=e[2],d=0,f=[];d<a.length;d++)i=a[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todoapp"},[n("header",{staticClass:"header"},[n("h1",[t._v("TODO LIST")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTODO,expression:"newTODO"}],staticClass:"new-todo",attrs:{type:"text",placeholder:"add todo"},domProps:{value:t.newTODO},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTODO=e.target.value)}}})]),n("section",{staticClass:"section"},[n("ul",{staticClass:"todo-list"},t._l(t.todoLists,function(e,o){return n("li",{key:o,staticClass:"todo",class:{completed:e.done}},[n("div",{staticClass:"view"},[n("input",{staticClass:"toggle",attrs:{type:"checkbox"},on:{click:function(e){return t.toggleTodo(o)}}}),n("label",[t._v(t._s(e.name))]),n("button",{staticClass:"destroy",on:{click:function(e){return t.deleteTodo(o)}}})])])}),0)]),n("footer",{staticClass:"footer"},[n("div",{staticClass:"todo-count"},[t._v("一共有"+t._s(t.todoCount)+"个todo事件")]),n("button",{staticClass:"clear-completed",on:{click:t.clearAll}},[t._v("点击清除事件")])])])},s=[],i={data:function(){return{newTODO:"",todoLists:[{name:"吃饭",done:!1},{name:"睡觉",done:!1},{name:"打豆豆",done:!1}]}},computed:{todoCount:function(){return this.todoLists.length}},methods:{addTodo:function(){this.newTODO&&(this.todoLists.push({name:this.newTODO,done:!1}),this.newTODO="")},deleteTodo:function(t){this.todoLists.splice(t,1)},clearAll:function(){this.todoLists=[]},toggleTodo:function(t){return this.todoLists[t].done=!this.todoLists[t].done}}},a=i,u=(n("034f"),n("2877")),c=Object(u["a"])(a,r,s,!1,null,null,null),l=c.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.48dff674.js.map