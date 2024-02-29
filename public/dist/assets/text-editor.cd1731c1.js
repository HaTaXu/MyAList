import{c$ as Q,k as y,e as f,a7 as z,o as Z,w as T,d as A,a6 as _,d0 as k,d1 as ee,q as W,j as B,cV as te,cb as ne,b as re,cW as oe,a as ie,aR as ae,b4 as ce,S as M,cX as ue,a0 as R,aK as se,B as le,a3 as fe,b5 as de,n as ge}from"./index.9e7fda1e.js";function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ve(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function pe(e,t){if(e==null)return{};var n=ve(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function me(e,t){return ye(e)||be(e,t)||we(e,t)||Oe()}function ye(e){if(Array.isArray(e))return e}function be(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,i=void 0;try{for(var a=e[Symbol.iterator](),c;!(r=(c=a.next()).done)&&(n.push(c.value),!(t&&n.length===t));r=!0);}catch(u){o=!0,i=u}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw i}}return n}}function we(e,t){if(!!e){if(typeof e=="string")return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}}function q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(r){je(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,i){return i(o)},r)}}function v(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return t.apply(n,[].concat(o,c))}}}function E(e){return{}.toString.call(e).includes("Object")}function Te(e){return!Object.keys(e).length}function b(e){return typeof e=="function"}function Ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Pe(e,t){return E(t)||d("changeType"),Object.keys(t).some(function(n){return!Ee(e,n)})&&d("changeField"),t}function Ce(e){b(e)||d("selectorType")}function Ie(e){b(e)||E(e)||d("handlerType"),E(e)&&Object.values(e).some(function(t){return!b(t)})&&d("handlersType")}function Ae(e){e||d("initialIsRequired"),E(e)||d("initialType"),Te(e)&&d("initialContent")}function De(e,t){throw new Error(e[t]||e.default)}var $e={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},d=v(De)($e),j={changes:Pe,selector:Ce,handler:Ie,initial:Ae};function Me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};j.initial(e),j.handler(t);var n={current:e},r=v(Ke)(n,t),o=v(Le)(n),i=v(j.changes)(e),a=v(Re)(n);function c(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(l){return l};return j.selector(s),s(n.current)}function u(s){Se(r,o,i,a)(s)}return[c,u]}function Re(e,t){return b(t)?t(e.current):t}function Le(e,t){return e.current=F(F({},e.current),t),t}function Ke(e,t,n){return b(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var qe={create:Me},xe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function Fe(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return t.apply(n,[].concat(o,c))}}}function Ue(e){return{}.toString.call(e).includes("Object")}function He(e){return e||U("configIsRequired"),Ue(e)||U("configType"),e.urls?(ze(),{paths:{vs:e.urls.monacoBase}}):e}function ze(){console.warn(V.deprecation)}function We(e,t){throw new Error(e[t]||e.default)}var V={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},U=Fe(We)(V),Be={config:He},Ve=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(i,a){return a(i)},o)}};function N(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],N(e[n],t[n]))}),K(K({},e),t)}var Ne={type:"cancelation",msg:"operation is manually canceled"};function C(e){var t=!1,n=new Promise(function(r,o){e.then(function(i){return t?o(Ne):r(i)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var Ge=qe.create({config:xe,isInitialized:!1,resolve:null,reject:null,monaco:null}),G=me(Ge,2),w=G[0],P=G[1];function Xe(e){var t=Be.config(e),n=t.monaco,r=pe(t,["monaco"]);P(function(o){return{config:N(o.config,r),monaco:n}})}function Ye(){var e=w(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(P({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),C(I);if(window.monaco&&window.monaco.editor)return X(window.monaco),e.resolve(window.monaco),C(I);Ve(Je,Ze)(_e)}return C(I)}function Je(e){return document.body.appendChild(e)}function Qe(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ze(e){var t=w(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),n=Qe("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function _e(){var e=w(function(n){var r=n.config,o=n.resolve,i=n.reject;return{config:r,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){X(n),e.resolve(n)},function(n){e.reject(n)})}function X(e){w().monaco||P({monaco:e})}function ke(){return w(function(e){var t=e.monaco;return t})}var I=new Promise(function(e,t){return P({resolve:e,reject:t})}),Y={config:Xe,init:Ye,__getMonacoInstance:ke};Y.config({paths:{vs:Q}});let p;const et=e=>{const[t,n]=y(!0);return Y.init().then(r=>{p=r,n(!1)}),f(z,{get loading(){return t()},get children(){return f(tt,e)}})},tt=e=>{let t,n,r;return Z(()=>{n=p.editor.create(t,{value:e.value,theme:e.theme}),r=p.editor.createModel(e.value,e.language,e.path?p.Uri.parse(e.path):void 0),n.setModel(r),n.onDidChangeModelContent(()=>{var o;(o=e.onChange)==null||o.call(e,n.getValue())})}),T(()=>{n.setValue(e.value)}),T(()=>{p.editor.setTheme(e.theme)}),A(()=>{r&&r.dispose(),n&&n.dispose()}),f(_,{w:"$full",h:"70vh",ref(o){const i=t;typeof i=="function"?i(o):t=o}})};var S=(e,t)=>e===t||e.length===t.length&&e.every((n,r)=>n===t[r]),nt=A;function m(e,t,n,r){return e.addEventListener(t,n,r),nt(e.removeEventListener.bind(e,t,n,r))}function D(e,t=ee()){let n=0,r,o;return()=>(n++,A(()=>{n--,queueMicrotask(()=>{!n&&o&&(o(),o=r=void 0)})}),o||k(i=>r=e(o=i),t),r)}function H(e,t){for(let n=e.length-1;n>=0;n--){const r=t.slice(0,n+1);if(!S(e[n],r))return!1}return!0}var J=D(()=>{const[e,t]=y(null);return m(window,"keydown",n=>{t(n),setTimeout(()=>t(null))}),e}),rt=D(()=>{const[e,t]=y([]),n=()=>t([]),r=J();return m(window,"keydown",o=>{if(o.repeat||typeof o.key!="string")return;const i=o.key.toUpperCase(),a=e();if(a.includes(i))return;const c=[...a,i];a.length===0&&i!=="ALT"&&i!=="CONTROL"&&i!=="META"&&i!=="SHIFT"&&(o.shiftKey&&c.unshift("SHIFT"),o.altKey&&c.unshift("ALT"),o.ctrlKey&&c.unshift("CONTROL"),o.metaKey&&c.unshift("META")),t(c)}),m(window,"keyup",o=>{if(typeof o.key!="string")return;const i=o.key.toUpperCase();t(a=>a.filter(c=>c!==i))}),m(window,"blur",n),m(window,"contextmenu",o=>{o.defaultPrevented||n()}),e[0]=e,e[1]={event:r},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e}),ot=D(()=>{const e=rt();return B(t=>e().length===0?[]:[...t,e()],[])});function it(e,t,n={}){if(!e.length)return;e=e.map(s=>s.toUpperCase());const{preventDefault:r=!0}=n,o=J(),i=ot();let a=!1;const c=s=>{if(!s.length)return a=!1;if(a)return;const l=o();s.length<e.length?H(s,e.slice(0,s.length))?r&&l&&l.preventDefault():a=!0:(a=!0,H(s,e)&&(r&&l&&l.preventDefault(),t(l)))},u=s=>{const l=s.at(-1);if(!l)return;const g=o();if(r&&l.length<e.length){S(l,e.slice(0,e.length-1))&&g&&g.preventDefault();return}if(S(l,e)){const O=s.at(-2);(!O||S(O,e.slice(0,e.length-1)))&&(r&&g&&g.preventDefault(),t(g))}};T(W(i,n.requireReset?c:u))}function at(e){const{colorMode:t}=ne(),n=B(()=>t()==="light"?"vs":"vs-dark"),{pathname:r}=re(),{isString:o,text:i}=oe(e.data),[a,c]=y("utf-8"),[u,s]=y(i(a())),l=ie(),[g,O]=ae(()=>ce.put("/fs/put",u(),{headers:{"File-Path":encodeURIComponent(r()),"Content-Type":e.contentType||"text/plain"}}));T(W(a,h=>{s(i(h)),console.log(u())}));async function $(){const h=await O();de(h,()=>{ge.success(l("global.save_success"))})}return it(["Control","S"],$),f(fe,{w:"$full",alignItems:"start",spacing:"$2",pos:"relative",get children(){return[f(M,{when:!o,get children(){return f(ue,{get encoding(){return a()},setEncoding:c})}}),f(et,{get value(){return u()},get theme(){return n()},get path(){return R.obj.name},onChange:h=>{s(h)}}),f(M,{get when(){return se("write")||R.write},get children(){return f(le,{get loading(){return g()},onClick:$,get children(){return l("global.save")}})}})]}})}const ut=()=>{const[e]=te();return f(z,{get loading(){return e.loading},get children(){return f(at,{get data(){var t;return(t=e())==null?void 0:t.content},get contentType(){var t;return(t=e())==null?void 0:t.contentType}})}})};export{ut as default};
