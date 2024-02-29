!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(O){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var h={};function d(){}function p(){}function g(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=g.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,c,u){var l=f(r[i],r,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,l(w,"constructor",g),l(g,"constructor",p),p.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void e(l)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.0750148c.js","./index-legacy.1b5a1ff3.js","./DeletePopover-legacy.8f4deed5.js","./Wether-legacy.d3db21fb.js"],(function(t){"use strict";var e,i,a,c,u,l,s,f,h,d,p,g,y,v,m,w,b,x,L,_,E,S,j,k,O,A,$,G;return{setters:[function(t){e=t.a,i=t.b,a=t.aR,c=t.b4,u=t.k,l=t.cA,s=t.e,f=t.ab,h=t.B,d=t.a6,p=t.cB,g=t.cC,y=t.cD,v=t.E,m=t.cE,w=t.cF,b=t.cG,x=t.b5,L=t.n,_=t.S,E=t.a3,S=t.c1,j=t.aA,k=t.aB,O=t.ad},function(t){A=t.o},function(t){$=t.D},function(t){G=t.W}],execute:function(){var P=function(t){var r=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return s(S,{get colorScheme(){return r[t.role].color},get children(){return r[t.role].name}})},N=function(t){var r=e();return s(f,{spacing:"$0_5",get children(){return s(v,{each:j,children:function(e,n){return s(k,{get label(){return r("users.permissions.".concat(e))},get children(){return s(d,{boxSize:"$2",rounded:"$full",get bg(){return r=O.can(t.user,n()),"$".concat(r?"success":"danger","9");var r}})}})}})}})};t("default",(function(){var t=e();A("manage.sidemenu.users");var S=i().to,j=o(a((function(){return c.get("/admin/user/list")})),2),k=j[0],O=j[1],C=o(u([]),2),I=C[0],F=C[1],T=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:e=t.sent,x(e,(function(t){return F(t.content)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();T();var B=o(l((function(t){return c.post("/admin/user/delete?id=".concat(t))})),2),D=B[0],W=B[1],Y=o(l((function(t){return c.post("/admin/user/cancel_2fa?id=".concat(t))})),2),z=Y[0],H=Y[1];return s(E,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[s(f,{spacing:"$2",get children(){return[s(h,{colorScheme:"accent",get loading(){return k()},onClick:T,get children(){return t("global.refresh")}}),s(h,{onClick:function(){S("/@manage/users/add")},get children(){return t("global.add")}})]}}),s(d,{w:"$full",overflowX:"auto",get children(){return s(p,{highlightOnHover:!0,dense:!0,get children(){return[s(g,{get children(){return s(y,{get children(){return[s(v,{each:["username","user_group_name","base_path","role","permission","available"],children:function(r){return s(m,{get children(){return t("users.".concat(r))}})}}),s(m,{get children(){return t("global.operations")}})]}})}}),s(w,{get children(){return s(v,{get each(){return I()},children:function(e){return s(y,{get children(){return[s(b,{get children(){return e.username}}),s(b,{get children(){return e.user_group}}),s(b,{get children(){return e.base_path}}),s(b,{get children(){return s(P,{get role(){return e.role}})}}),s(b,{get children(){return s(N,{user:e})}}),s(b,{get children(){return s(G,{get yes(){return!e.disabled}})}}),s(b,{get children(){return s(f,{spacing:"$2",get children(){return[s(h,{onClick:function(){S("/@manage/users/edit/".concat(e.id))},get children(){return t("global.edit")}}),s(h,{colorScheme:"accent",get loading(){return z()===e.id},onClick:(o=n(r().mark((function n(){var o;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H(e.id);case 2:o=r.sent,x(o,(function(){L.success(t("users.cancel_2fa_success")),T()}));case 4:case"end":return r.stop()}}),n)}))),function(){return o.apply(this,arguments)}),get children(){return t("users.cancel_2fa")}}),s(_,{get when(){return 0==e.role},get children(){return s($,{get name(){return e.username},get loading(){return D()===e.id},onClick:(o=n(r().mark((function n(){var o;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,W(e.id);case 2:o=r.sent,x(o,(function(){L.success(t("global.delete_success")),T()}));case 4:case"end":return r.stop()}}),n)}))),function(){return o.apply(this,arguments)})});var o}})];var o}})}})]}})}})}})]}})}})]}})}))}}}))}();
