!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var h={};function d(){}function p(){}function g(){}var y={};s(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(E([])));m&&m!==r&&n.call(m,a)&&(y=m);var w=g.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function o(i,a,u,c){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,s(w,"constructor",g),s(g,"constructor",p),p.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(_.prototype),s(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.0750148c.js","./index-legacy.1b5a1ff3.js","./index-legacy.35d1bb8a.js","./webauthn-json.browser-ponyfill-legacy.8ddd819a.js"],(function(t){"use strict";var e,n,i,c,s,l,f,h,d,p,g,y,v,m,w,b,_,x,O,j,L,E,k,S,$,P,I,C,A,N,T,G,D,F,U,B,R,Y,J,M;return{setters:[function(t){e=t.a,n=t.aR,i=t.b4,c=t.k,s=t.e,l=t.cs,f=t.a3,h=t.bI,d=t.B,p=t.b5,g=t.n,y=t.S,v=t.b,m=t.ae,w=t.ct,b=t.d,_=t.ad,x=t.aD,O=t.cu,j=t.cv,L=t.cw,E=t.cx,k=t.ab,S=t.b0,$=t.cy,P=t.bu,I=t.bi,C=t.I,A=t.F,N=t.at,T=t.a7,G=t.E,D=t.bB,F=t.aA,U=t.c1},function(t){B=t.o},function(t){R=t.L},function(t){Y=t.s,J=t.c,M=t.b}],execute:function(){var X=function(t){var r=e(),v=u(n((function(){return i.post("/authn/delete_authn",{id:t.id})})),2),m=v[0],w=v[1],b=u(c(!1),2),_=b[0],x=b[1];return s(y,{get when(){return!_()},get children(){return s(l,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[s(f,{w:"$full",alignItems:"start",spacing:"$1",get children(){return s(h,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+t.fingerprint+"\tID: "+t.id}})}}),s(l,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return s(d,{colorScheme:"danger",get loading(){return m()},onClick:(t=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,p(e,(function(){g.success(r("global.delete_success")),x(!0)}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return r("global.delete")}});var t}})]}})}})},q=function(t){return s(U,{get colorScheme(){return t.can?"success":"danger"},get children(){return t.children}})};t("default",(function(){var t=e();B("manage.sidemenu.profile");var l=v(),U=l.searchParams,z=l.to,H=u(c(m().username),2),K=H[0],Q=H[1],V=u(c(""),2),W=V[0],Z=V[1],tt=u(c(""),2),et=tt[0],rt=tt[1],nt=x("sso_compatibility_mode"),ot=n((function(t){return i.post("/me/update",{username:t?m().username:K(),password:t?"":W(),sso_id:m().sso_id})})),it=u(ot,2),at=it[0],ut=it[1],ct=u(n((function(){return i.get("/authn/getcredentials")})),2),st=ct[0],lt=ct[1],ft=u(n((function(){return i.get("/authn/webauthn_begin_registration")})),2)[1],ht=n((function(t,e){return i.post("/authn/webauthn_finish_registration",JSON.stringify(e),{headers:{session:t}})})),dt=u(ht,2),pt=dt[0],gt=dt[1],yt=function(){var e=a(o().mark((function e(n){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W()||W()===et()){e.next=3;break}return g.warning(t("users.confirm_password_not_same")),e.abrupt("return");case 3:return e.next=5,ut(n);case 5:i=e.sent,p(i,(function(){w(r(r({},m()),{},{username:K()})),n?z(""):(g.success(t("users.update_profile_success")),z("/@login?redirect=".concat(encodeURIComponent(location.pathname))))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),vt=U.sso_id;function mt(t){var e=t.data;e.sso_id&&(w(r(r({},m()),{},{sso_id:e.sso_id})),yt(!0))}vt&&(w(r(r({},m()),{},{sso_id:vt})),yt(!0)),window.addEventListener("message",mt),b((function(){window.removeEventListener("message",mt)}));var wt=u(c([]),2),bt=wt[0],_t=wt[1],xt=function(){var t=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,lt();case 2:e=t.sent,D(e,_t);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Y()&&!_.is_guest(m())&&x("webauthn_login_enabled")&&xt(),s(f,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[s(y,{get when(){return!_.is_guest(m())},get fallback(){return[s(O,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[s(j,{mr:"$2_5"}),s(L,{mr:"$2_5",get children(){return t("users.guest-tips")}}),s(E,{get children(){return t("users.modify_nothing")}})]}}),s(k,{spacing:"$2",get children(){return[s(S,{get children(){return t("global.have_account")}}),s(S,{color:"$info9",as:R,get href(){return"/@login?redirect=".concat(encodeURIComponent(location.pathname))},get children(){return t("global.go_login")}})]}})]},get children(){return[s(h,{get children(){return t("users.update_profile")}}),s($,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return s(P,{get children(){return[s(I,{for:"username",get children(){return t("users.change_username")}}),s(C,{id:"username",get value(){return K()},onInput:function(t){Q(t.currentTarget.value)}})]}})}}),s($,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(P,{get children(){return[s(I,{for:"password",get children(){return t("users.change_password")}}),s(C,{id:"password",type:"password",placeholder:"********",get value(){return W()},onInput:function(t){Z(t.currentTarget.value)}}),s(A,{get children(){return t("users.change_password-tips")}})]}}),s(P,{get children(){return[s(I,{for:"confirm-password",get children(){return t("users.confirm_password")}}),s(C,{id:"confirm-password",type:"password",placeholder:"********",get value(){return et()},onInput:function(t){rt(t.currentTarget.value)}}),s(A,{get children(){return t("users.confirm_password-tips")}})]}})]}}),s(k,{spacing:"$2",get children(){return[s(d,{get loading(){return at()},onClick:[yt,!1],get children(){return t("global.save")}}),s(y,{get when(){return!m().otp},get children(){return s(d,{colorScheme:"accent",onClick:function(){z("/@manage/2fa")},get children(){return t("users.enable_2fa")}})}})]}})]}}),s(y,{get when(){return N((function(){return!!x("sso_login_enabled")}),!0)()&&!_.is_guest(m())},get children(){return[s(h,{get children(){return t("users.sso_login")}}),s(k,{spacing:"$2",get children(){return s(y,{get when(){return m().sso_id},get fallback(){return s(d,{onClick:function(){var t=i.getUri()+"/auth/sso?method=get_sso_id";nt?window.location.href=t:window.open(t,"authPopup","width=500,height=600")},get children(){return t("users.connect_sso")}})},get children(){return s(d,{colorScheme:"danger",get loading(){return at()},onClick:function(){w(r(r({},m()),{},{sso_id:""})),yt(!0)},get children(){return t("users.disconnect_sso")}})}})}})]}}),s(y,{get when(){return N((function(){return!_.is_guest(m())}),!0)()&&x("webauthn_login_enabled")},get children(){return[s(h,{get children(){return t("users.webauthn")}}),s(k,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return s(T,{get loading(){return st()},get children(){return s(G,{get each(){return bt()},children:function(t){return s(X,{get id(){return t.id},get fingerprint(){return t.fingerprint}})}})}})}}),s(d,{get loading(){return pt()},onClick:(e=a(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y()){e.next=3;break}return g.error(t("users.webauthn_not_supported")),e.abrupt("return");case 3:return e.next=5,ft();case 5:r=e.sent,D(r,function(){var e=a(o().mark((function e(r){var n,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=J(r.options),i=r.session,e.prev=2,e.next=5,M(n);case 5:return a=e.sent,e.t0=p,e.next=9,gt(i,a);case 9:e.t1=e.sent,e.t2=function(){g.success(t("users.add_webauthn_success"))},(0,e.t0)(e.t1,e.t2),e.next=17;break;case 14:e.prev=14,e.t3=e.catch(2),e.t3 instanceof Error&&g.error(e.t3.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return t("users.add_webauthn")}})];var e}}),s(k,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return s(G,{each:F,children:function(e,r){return s(q,{get can(){return _.can(m(),r())},get children(){return t("users.permissions.".concat(e))}})}})}})]}})}))}}}))}();
