!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(I){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=_(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}r.wrap=s;var h={};function p(){}function d(){}function g(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y($([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=g.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,u,c){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(h).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=g,l(w,"constructor",g),l(g,"constructor",d),d.displayName=l(g,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=$,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.903c0097.js","./index-legacy.3d15c04e.js","./webauthn-json.browser-ponyfill-legacy.8ddd819a.js"],(function(t){"use strict";var r,i,a,u,c,l,s,f,h,p,d,g,v,y,m,w,b,x,_,k,S,C,$,L,I,E,j,G,O,N,P,T,A,U,z,R,D,F,M,K,Y,Z,B,J,W,V,X;return{setters:[function(t){r=t.bS,i=t.D,a=t.bT,u=t.bU,c=t.af,l=t.W,s=t.e,f=t.a6,h=t.aD,p=t.R,d=t.b,g=t.bO,v=t.bV,y=t.d,m=t.as,w=t.b4,b=t.bK,x=t.bW,_=t.bX,k=t.bY,S=t.a,C=t.j,$=t.k,L=t.bZ,I=t.aR,E=t.a3,j=t.bJ,G=t.ap,O=t.bI,N=t.S,P=t.I,T=t.b_,A=t.b0,U=t.ab,z=t.B,R=t.bf,D=t.bg,F=t.b$,M=t.aw,K=t.bB,Y=t.n,Z=t.b5},function(t){B=t.p,J=t.c},function(t){W=t.s,V=t.g,X=t.a}],execute:function(){var q=c('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),H=function(t){var e,r,n,o=i({startColor:"#28aff0",endColor:"#120fc4"},t);return e=q.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,n=r.nextSibling,a((function(t){var e=o.startColor,i=o.endColor;return e!==t._v$&&u(r,"stop-color",t._v$=e),i!==t._v$2&&u(n,"stop-color",t._v$2=i),t}),{_v$:void 0,_v$2:void 0}),e},Q=c('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),tt=function(t){var e,r,n,o=i({startColor:"#28aff0",endColor:"#120fc4"},t);return e=Q.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,n=r.nextSibling,a((function(t){var e=o.startColor,i=o.endColor;return e!==t._v$&&u(r,"stop-color",t._v$=e),i!==t._v$2&&u(n,"stop-color",t._v$2=i),t}),{_v$:void 0,_v$2:void 0}),e},et=function(){var t=l("#a9c6ff","#062b74");return s(f,{get bgColor(){return t()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[s(f,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return s(tt,{})}}),s(f,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return s(H,{})}})]}})},rt=function(){var t=h("sso_login_enabled"),e=p("sso_login_platform"),r=h("sso_compatibility_mode"),n=d(),o=n.searchParams,i=n.to,a=o.token;function u(t){var e=t.data;e.token&&(g(e.token),i(decodeURIComponent(o.redirect||v||"/"),!0))}if(null!=a&&""!=a&&(g(a),i(decodeURIComponent(o.redirect||v||"/"),!0)),window.addEventListener("message",u),y((function(){window.removeEventListener("message",u)})),t){var c;switch(e){case"Github":c=k;break;case"Microsoft":c=B;break;case"Google":c=_;break;case"Dingtalk":c=x;break;default:c=b}return s(m,{cursor:"pointer",boxSize:"$8",as:c,p:"$0_5",onclick:function(){var t=w.getUri()+"/auth/sso?method=sso_get_token";r?window.location.href=t:window.open(t,"authPopup","width=500,height=600")}})}};t("default",(function(){var t=p("logo").split("\n"),i=l(t[0],t.pop()),a=S(),u=C((function(){return"".concat(a("login.login_to")," ").concat(p("site_title"))}));J(u);var c=l("white","$neutral1"),f=o($(localStorage.getItem("username")||""),2),y=f[0],b=f[1],x=o($(localStorage.getItem("password")||""),2),_=x[0],k=x[1],B=o($(""),2),q=B[0],H=B[1],Q=o($(!1),2),tt=Q[0],nt=Q[1],ot=o(L("remember-pwd","false"),2),it=ot[0],at=ot[1],ut=o($(!1),2),ct=ut[0],lt=ut[1],st=o(I(n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ct()){t.next=4;break}return t.abrupt("return",w.post("/auth/login/ldap",{username:y(),password:_(),otp_code:q()}));case 4:return t.abrupt("return",w.post("/auth/login/hash",{username:y(),password:(e=_(),r("".concat(e,"-").concat("https://github.com/alist-org/alist"))),otp_code:q()}));case 5:case"end":return t.stop()}var e}),t)})))),2),ft=st[0],ht=st[1],pt=I((function(t,e,r){return w.post("/authn/webauthn_finish_login?username="+r,JSON.stringify(e),{headers:{session:t}})})),dt=o(pt,2)[1],gt=I((function(t){return w.get("/authn/webauthn_begin_login?username="+t)})),vt=o(gt,2)[1],yt=d(),mt=yt.searchParams,wt=yt.to,bt=h("webauthn_login_enabled"),xt=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:nt(!tt());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_t=function(){var t=n(e().mark((function t(){var r,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(tt()){t.next=8;break}return"true"===it()?(localStorage.setItem("username",y()),localStorage.setItem("password",_())):(localStorage.removeItem("username"),localStorage.removeItem("password")),t.next=4,ht();case 4:r=t.sent,K(r,(function(t){Y.success(a("login.success")),g(t.token),wt(decodeURIComponent(mt.redirect||v||"/"),!0)}),(function(t,e){St()||402!==e?Y.error(t):Ct(!0)})),t.next=17;break;case 8:if(W()){t.next=11;break}return Y.error(a("users.webauthn_not_supported")),t.abrupt("return");case 11:return g(),"true"===it()?localStorage.setItem("username",y()):localStorage.removeItem("username"),t.next=15,vt(y());case 15:o=t.sent,Z(o,function(){var t=n(e().mark((function t(r){var n,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=V(r.options),t.next=3,X(n);case 3:return o=t.sent,t.next=6,dt(r.session,o,y());case 6:i=t.sent,K(i,(function(t){Y.success(a("login.success")),g(t.token),wt(decodeURIComponent(mt.redirect||v||"/"),!0)}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),kt=o($(!1),2),St=kt[0],Ct=kt[1],$t=h("ldap_login_enabled"),Lt=p("ldap_login_tips");return $t&&lt(!0),s(M,{zIndex:"1",w:"$full",h:"100vh",get children(){return[s(E,{get bgColor(){return c()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[s(j,{alignItems:"center",justifyContent:"space-around",get children(){return[s(G,{mr:"$2",boxSize:"$12",get src(){return i()}}),s(O,{color:"$info9",fontSize:"$2xl",get children(){return u()}})]}}),s(N,{get when(){return!St()},get fallback(){return s(P,{id:"totp",name:"otp",get placeholder(){return a("login.otp-tips")},get value(){return q()},onInput:function(t){return H(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&_t()}})},get children(){return[s(P,{name:"username",get placeholder(){return a("login.username-tips")},get value(){return y()},onInput:function(t){return b(t.currentTarget.value)}}),s(N,{get when(){return!tt()},get children(){return s(P,{name:"password",get placeholder(){return a("login.password-tips")},type:"password",get value(){return _()},onInput:function(t){return k(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&_t()}})}}),s(j,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[s(T,{get checked(){return"true"===it()},onChange:function(){return at("true"===it()?"false":"true")},get children(){return a("login.remember")}}),s(A,{as:"a",target:"_blank",get href(){return a("login.forget_url")},get children(){return a("login.forget")}})]}})]}}),s(U,{w:"$full",spacing:"$2",get children(){return[s(N,{get when(){return!tt()},get children(){return s(z,{colorScheme:"primary",w:"$full",onClick:function(){St()?H(""):(b(""),k(""))},get children(){return a("login.clear")}})}}),s(z,{w:"$full",get loading(){return ft()},onClick:_t,get children(){return a("login.login")}})]}}),s(N,{when:$t,get children(){return s(T,{w:"$full",get checked(){return!0===ct()},onChange:function(){return lt(!ct())},children:Lt})}}),s(z,{w:"$full",colorScheme:"accent",onClick:function(){g(),wt(decodeURIComponent(mt.redirect||v||"/"),!0)},get children(){return a("login.use_guest")}}),s(j,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[s(R,{}),s(D,{}),s(rt,{}),s(N,{when:bt,get children(){return s(m,{cursor:"pointer",boxSize:"$8",as:F,p:"$0_5",onclick:xt})}})]}})]}}),s(et,{})]}})}))}}}))}();
