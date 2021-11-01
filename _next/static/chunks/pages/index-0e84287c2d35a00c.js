(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7432)}])},7432:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return H}});var r=t(5666),o=t.n(r),i=t(5893),s=t(9008),c=t(7294),u=t(7852),a=t.n(u);function d(e,n,t,r,o,i,s){try{var c=e[i](s),u=c.value}catch(a){return void t(a)}c.done?n(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){d(i,r,o,s,c,"next",e)}function c(e){d(i,r,o,s,c,"throw",e)}s(void 0)}))}}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}var h=new function e(){var n=this,t=this,r=this,i=this,s=this,c=this,u=this,a=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"init",(function(){var e=n;return new Promise((function(n){var t=e,r=e;e.requset=window.indexedDB.open(e.dbName,e.dbVersion),e.requset.onupgradeneeded=function(){t.db=t.requset.result,t.createTodosStore()},e.requset.onsuccess=function(e){r.db=e.target.result,n()},e.requset.onerror=function(e){console.error({error:e})}}))})),f(this,"createTodosStore",(function(){var e=t.db.createObjectStore(t.stores.TODOS,{keyPath:"id",autoIncrement:!0});e.createIndex("name","name"),e.createIndex("completed","completed")})),f(this,"getTodosObjectStore",(function(){var e=r.db.transaction([r.stores.TODOS],"readwrite");return e.onerror=function(e){console.error({error:e})},e.objectStore(r.stores.TODOS)})),f(this,"getAll",(function(){var e=i;return new Promise((function(n,t){var r=e.getTodosObjectStore().openCursor(),o=[];r.onsuccess=function(e){var t=e.target.result;t?(o.push(t.value),t.continue()):n(o)},r.onerror=function(e){t(e)}}))})),f(this,"add",(function(e){var n=s;return new Promise((function(t,r){var i=n.getTodosObjectStore().put({name:e,completed:!1});i.onsuccess=l(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAll();case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e,this)})).bind(n)).bind(n),i.onerror=function(e){r(e)}}))})),f(this,"updateById",(function(e,n){var t=c;return new Promise((function(r,i){var s=t,c=t.getTodosObjectStore(),u=IDBKeyRange.only(e),a=c.openCursor(u);a.onsuccess=function(){var e=a.result,t=m({},e.value,n),c=e.update(t);c.onsuccess=l(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getAll(),r(n);case 2:case"end":return e.stop()}}),e,this)})).bind(s)).bind(s),c.onerror=function(e){i(e)}},a.onerror=function(e){console.log("Item on check error",{error:e})}}))})),f(this,"toggleCompleted",(function(e){var n=u;return new Promise((function(t,r){var i=n,s=n.getTodosObjectStore(),c=IDBKeyRange.only(e),u=s.openCursor(c);u.onsuccess=function(){var e=u.result,n=e.value,s=m({},n,{completed:!n.completed}),c=e.update(s);c.onsuccess=l(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAll();case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e,this)})).bind(i)).bind(i),c.onerror=function(e){r(e)}},u.onerror=function(e){console.log("Item on check error",{error:e})}}))})),f(this,"deleteById",(function(e){var n=a;return new Promise((function(t,r){var i=n.getTodosObjectStore().delete(e);i.onsuccess=l(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAll();case 2:r=e.sent,t(r);case 4:case"end":return e.stop()}}),e,this)})).bind(n)).bind(n),i.onerror=function(e){r(e)}}))})),this.db={},this.dbName="todos",this.dbVersion=3,this.stores={TODOS:"todos"},this.requset=null},v=t(6242),p=t(4267),x=t(6886),j=t(5861),b=t(9653),w=t(2023),g=t(1057),y=t(3946),_=t(666),P=t(251),O=t(7357),Z=t(4604),S=t(2283),k=t(5496),T=t(4231);function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}var D=function(e){var n=e.submit,t=e.initialValues,r=T.Ry().shape({name:T.Z_().required("todo is required")}),o=(0,S.cI)({resolver:(0,k.X)(r),defaultValues:(0,c.useMemo)((function(){return t}),[t])}),s=o.register,u=o.handleSubmit,a=o.reset,d=o.formState.errors;return(0,i.jsxs)(O.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:u((function(e){n(null===e||void 0===e?void 0:e.name),a()})),children:[(0,i.jsxs)(x.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,i.jsx)(x.ZP,{flex:"auto",item:!0,children:(0,i.jsx)(Z.Z,I({style:{width:"100%"},size:"small",required:!0,id:"name",name:"name",label:"todo"},s("name"),{error:!!(null===d||void 0===d?void 0:d.name)}))}),(0,i.jsx)(x.ZP,{item:!0,children:(0,i.jsx)(g.Z,{type:"submit",variant:"contained",color:"primary",children:"save"})})]}),(0,i.jsx)("br",{})]})},E=function(e){var n=e.item,t=e.editTodo,r=e.deleteTodo,o=e.toggleTodo,s=(0,c.useState)(!1),u=s[0],a=s[1];return(0,i.jsxs)(v.Z,{sx:{width:"100%"},children:[(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)(x.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(x.ZP,{children:(0,i.jsxs)(j.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:["#",null===n||void 0===n?void 0:n.id]})}),(0,i.jsx)(x.ZP,{children:(0,i.jsx)(b.Z,{checked:null===n||void 0===n?void 0:n.completed,onChange:function(e){o(null===n||void 0===n?void 0:n.id)}})})]}),u&&(0,i.jsx)(D,{initialValues:n,submit:function(e){t(null===n||void 0===n?void 0:n.id,{name:e,completed:null===n||void 0===n?void 0:n.completed}),a(!1)}}),!u&&(0,i.jsx)(j.Z,{variant:"h5",component:"div",children:null===n||void 0===n?void 0:n.name})]}),(0,i.jsx)(w.Z,{children:(0,i.jsxs)(x.ZP,{container:!0,justifyContent:"flex-end",children:[u&&(0,i.jsx)(x.ZP,{item:!0,children:(0,i.jsx)(g.Z,{color:"primary",onClick:function(){a(!1)},children:"Cancel"})}),!u&&(0,i.jsx)(x.ZP,{item:!0,children:(0,i.jsx)(y.Z,{color:"primary",onClick:function(){a(!0)},children:(0,i.jsx)(_.Z,{})})}),(0,i.jsx)(x.ZP,{item:!0,children:(0,i.jsx)(y.Z,{color:"error",onClick:function(){r(null===n||void 0===n?void 0:n.id)},children:(0,i.jsx)(P.Z,{})})})]})})]})};function N(e,n,t,r,o,i,s){try{var c=e[i](s),u=c.value}catch(a){return void t(a)}c.done?n(u):Promise.resolve(u).then(r,o)}function B(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){N(i,r,o,s,c,"next",e)}function c(e){N(i,r,o,s,c,"throw",e)}s(void 0)}))}}function H(){var e=(0,c.useState)([]),n=e[0],t=e[1],r=null!==(r=(0,c.useState)({}))?r:function(e){throw e}(new TypeError("Cannot destructure undefined"));(0,c.useEffect)((function(){u()}),[]);var u=function(){h.init().then(B(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAll();case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)}))))},d=B(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.add(n);case 2:r=e.sent,t(r);case 4:case"end":return e.stop()}}),e)}))),l=B(o().mark((function e(n,r){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.updateById(n,r);case 2:i=e.sent,t(i);case 4:case"end":return e.stop()}}),e)}))),f=B(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.deleteById(n);case 2:r=e.sent,t(r);case 4:case"end":return e.stop()}}),e)}))),m=B(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.toggleCompleted(n);case 2:r=e.sent,t(r);case 4:case"end":return e.stop()}}),e)})));return(0,i.jsxs)("div",{className:a().container,children:[(0,i.jsxs)(s.default,{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:a().main,children:[(0,i.jsxs)("h1",{className:a().title,children:["Welcome to ",(0,i.jsx)("a",{href:"https://nextjs.org",children:"Next.js & IndexedDB!"})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(x.ZP,{container:!0,justifyContent:"flex-start",spacing:{xs:2,md:3},children:(0,i.jsx)(x.ZP,{item:!0,xs:12,sm:12,md:12,children:(0,i.jsx)(D,{submit:d})})}),(0,i.jsx)(x.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:12,sm:12,md:12},children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,i.jsx)(x.ZP,{item:!0,xs:12,sm:12,md:12,children:(0,i.jsx)(E,{item:e,editTodo:l,deleteTodo:f,toggleTodo:m})},n)}))})]})]})}},7852:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},function(e){e.O(0,[774,50,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);