!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function n(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};l(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==n&&o.call(m,a)&&(v=m);var b=y.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,n){function r(i,a,c,u){var l=s(e[i],e,a);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=y,l(b,"constructor",y),l(y,"constructor",d),d.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new j(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.e8931afe.js"],(function(t){"use strict";var e,a,c,u,l,f,s,h,p,d,y,v,g,m,b,w,j,O,x,S,E,k,L,T,P,A,I;return{setters:[function(t){e=t.c$,a=t.k,c=t.e,u=t.a7,l=t.o,f=t.w,s=t.d,h=t.a6,p=t.d0,d=t.d1,y=t.q,v=t.j,g=t.cV,m=t.cb,b=t.b,w=t.cW,j=t.a,O=t.aR,x=t.b4,S=t.S,E=t.cX,k=t.a0,L=t.aK,T=t.B,P=t.a3,A=t.b5,I=t.n}],execute:function(){function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function F(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function G(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}function U(t){return function e(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e.apply(n,[].concat(o,r))}}}function $(t){return{}.toString.call(t).includes("Object")}function z(t){return"function"==typeof t}var K=U((function(t,e){throw new Error(t[e]||t.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),B={changes:function(t,e){return $(e)||K("changeType"),Object.keys(e).some((function(e){return n=t,r=e,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&K("changeField"),e},selector:function(t){z(t)||K("selectorType")},handler:function(t){z(t)||$(t)||K("handlerType"),$(t)&&Object.values(t).some((function(t){return!z(t)}))&&K("handlersType")},initial:function(t){var e;t||K("initialIsRequired"),$(t)||K("initialType"),e=t,Object.keys(e).length||K("initialContent")}};function V(t,e){return z(e)?e(t.current):e}function Y(t,e){return t.current=N(N({},t.current),e),e}function H(t,e,n){return z(e)?e(t.current):Object.keys(n).forEach((function(n){var r;return null===(r=e[n])||void 0===r?void 0:r.call(e,t.current[n])})),n}var W={create:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};B.initial(t),B.handler(e);var n={current:t},r=U(H)(n,e),o=U(Y)(n),i=U(B.changes)(t),a=U(V)(n);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return t};return B.selector(t),t(n.current)}function u(t){G(r,o,i,a)(t)}return[c,u]}};var X,J={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},Q=(X=function(t,e){throw new Error(t[e]||t.default)},function t(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length>=X.length?X.apply(this,r):function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t.apply(e,[].concat(r,o))}})(J),Z={config:function(t){var e;return t||Q("configIsRequired"),e=t,{}.toString.call(e).includes("Object")||Q("configType"),t.urls?(console.warn(J.deprecation),{paths:{vs:t.urls.monacoBase}}):t}};function tt(t,e){return Object.keys(e).forEach((function(n){e[n]instanceof Object&&t[n]&&Object.assign(e[n],tt(t[n],e[n]))})),D(D({},t),e)}var et={type:"cancelation",msg:"operation is manually canceled"};function nt(t){var e=!1,n=new Promise((function(n,r){t.then((function(t){return e?r(et):n(t)})),t.catch(r)}));return n.cancel=function(){return e=!0},n}var rt,ot,it=W.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}),at=(ot=2,function(t){if(Array.isArray(t))return t}(rt=it)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(rt,ot)||function(t,e){if(t){if("string"==typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(t,e):void 0}}(rt,ot)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),ct=at[0],ut=at[1];function lt(t){return document.body.appendChild(t)}function ft(t){var e,n,r=ct((function(t){return{config:t.config,reject:t.reject}})),o=(e="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),e&&(n.src=e),n);return o.onload=function(){return t()},o.onerror=r.reject,o}function st(){var t=ct((function(t){return{config:t.config,resolve:t.resolve,reject:t.reject}})),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],(function(e){ht(e),t.resolve(e)}),(function(e){t.reject(e)}))}function ht(t){ct().monaco||ut({monaco:t})}var pt,dt=new Promise((function(t,e){return ut({resolve:t,reject:e})})),yt={config:function(t){var e=Z.config(t),n=e.monaco,r=F(e,["monaco"]);ut((function(t){return{config:tt(t.config,r),monaco:n}}))},init:function(){var t=ct((function(t){return{monaco:t.monaco,isInitialized:t.isInitialized,resolve:t.resolve}}));if(!t.isInitialized){if(ut({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),nt(dt);if(window.monaco&&window.monaco.editor)return ht(window.monaco),t.resolve(window.monaco),nt(dt);!function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}(lt,ft)(st)}return nt(dt)},__getMonacoInstance:function(){return ct((function(t){return t.monaco}))}};yt.config({paths:{vs:e}});var vt=function(t){var e=i(a(!0),2),n=e[0],r=e[1];return yt.init().then((function(t){pt=t,r(!1)})),c(u,{get loading(){return n()},get children(){return c(gt,t)}})},gt=function(t){var e,n,r;return l((function(){n=pt.editor.create(e,{value:t.value,theme:t.theme}),r=pt.editor.createModel(t.value,t.language,t.path?pt.Uri.parse(t.path):void 0),n.setModel(r),n.onDidChangeModelContent((function(){var e;null===(e=t.onChange)||void 0===e||e.call(t,n.getValue())}))})),f((function(){n.setValue(t.value)})),f((function(){pt.editor.setTheme(t.theme)})),s((function(){r&&r.dispose(),n&&n.dispose()})),c(h,{w:"$full",h:"70vh",ref:function(t){"function"==typeof e?e(t):e=t}})},mt=function(t,e){return t===e||t.length===e.length&&t.every((function(t,n){return t===e[n]}))},bt=s;function wt(t,e,n,r){return t.addEventListener(e,n,r),bt(t.removeEventListener.bind(t,e,n,r))}function jt(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d(),o=0;return function(){return o++,s((function(){o--,queueMicrotask((function(){!o&&n&&(n(),n=e=void 0)}))})),n||p((function(r){return e=t(n=r)}),r),e}}function Ot(t,e){for(var n=t.length-1;n>=0;n--){var r=e.slice(0,n+1);if(!mt(t[n],r))return!1}return!0}var xt=jt((function(){var t=i(a(null),2),e=t[0],n=t[1];return wt(window,"keydown",(function(t){n(t),setTimeout((function(){return n(null)}))})),e})),St=jt((function(){var t=i(a([]),2),e=t[0],n=t[1],c=function(){return n([])},u=xt();return wt(window,"keydown",(function(t){if(!t.repeat&&"string"==typeof t.key){var r=t.key.toUpperCase(),i=e();if(!i.includes(r)){var a=[].concat(o(i),[r]);0===i.length&&"ALT"!==r&&"CONTROL"!==r&&"META"!==r&&"SHIFT"!==r&&(t.shiftKey&&a.unshift("SHIFT"),t.altKey&&a.unshift("ALT"),t.ctrlKey&&a.unshift("CONTROL"),t.metaKey&&a.unshift("META")),n(a)}}})),wt(window,"keyup",(function(t){if("string"==typeof t.key){var e=t.key.toUpperCase();n((function(t){return t.filter((function(t){return t!==e}))}))}})),wt(window,"blur",c),wt(window,"contextmenu",(function(t){t.defaultPrevented||c()})),e[0]=e,e[1]={event:u},e[Symbol.iterator]=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e[0];case 2:return t.next=4,e[1];case 4:case"end":return t.stop()}}),t)})),e})),Et=jt((function(){var t=St();return v((function(e){return 0===t().length?[]:[].concat(o(e),[t()])}),[])}));function kt(t){var e=m().colorMode,o=v((function(){return"light"===e()?"vs":"vs-dark"})),u=b().pathname,l=w(t.data),s=l.isString,h=l.text,p=i(a("utf-8"),2),d=p[0],g=p[1],C=i(a(h(d())),2),_=C[0],D=C[1],F=j(),R=i(O((function(){return x.put("/fs/put",_(),{headers:{"File-Path":encodeURIComponent(u()),"Content-Type":t.contentType||"text/plain"}})})),2),q=R[0],M=R[1];function N(){return G.apply(this,arguments)}function G(){return(G=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M();case 2:e=t.sent,A(e,(function(){I.success(F("global.save_success"))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return f(y(d,(function(t){D(h(t)),console.log(_())}))),function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t.length){t=t.map((function(t){return t.toUpperCase()}));var r=n.preventDefault,o=void 0===r||r,i=xt(),a=Et(),c=!1,u=function(n){if(!n.length)return c=!1;if(!c){var r=i();n.length<t.length?Ot(n,t.slice(0,n.length))?o&&r&&r.preventDefault():c=!0:(c=!0,Ot(n,t)&&(o&&r&&r.preventDefault(),e(r)))}},l=function(n){var r=n.at(-1);if(r){var a=i();if(o&&r.length<t.length)mt(r,t.slice(0,t.length-1))&&a&&a.preventDefault();else if(mt(r,t)){var c=n.at(-2);c&&!mt(c,t.slice(0,t.length-1))||(o&&a&&a.preventDefault(),e(a))}}};f(y(a,n.requireReset?u:l))}}(["Control","S"],N),c(P,{w:"$full",alignItems:"start",spacing:"$2",pos:"relative",get children(){return[c(S,{when:!s,get children(){return c(E,{get encoding(){return d()},setEncoding:g})}}),c(vt,{get value(){return _()},get theme(){return o()},get path(){return k.obj.name},onChange:function(t){D(t)}}),c(S,{get when(){return L("write")||k.write},get children(){return c(T,{get loading(){return q()},onClick:N,get children(){return F("global.save")}})}})]}})}t("default",(function(){var t=i(g(),1)[0];return c(u,{get loading(){return t.loading},get children(){return c(kt,{get data(){var e;return null===(e=t())||void 0===e?void 0:e.content},get contentType(){var e;return null===(e=t())||void 0===e?void 0:e.contentType}})}})}))}}}))}();
