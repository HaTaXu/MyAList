!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,c,o=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);u=!0);}catch(l){i=!0,c=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw c}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}System.register(["./index-legacy.68a4403b.js","./index-legacy.3cda9d2e.js"],(function(r){"use strict";var n,t,c,o,u,i,l,a,h,f,g;return{setters:[function(e){n=e.D,t=e.c0,c=e.j,o=e.e,u=e.ab,i=e.S,l=e.B,a=e.ah,h=e.E},function(e){f=e.l,g=e.m}],execute:function(){r("P",(function(r){var m,d=n({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},r),s=e(t({pageSize:d.defaultPageSize,current:d.defaultCurrent}),2),S=s[0],y=s[1];null===(m=d.setResetCallback)||void 0===m||m.call(d,(function(){y("current",d.defaultCurrent)}));var p=c((function(){return Math.ceil(d.total/S.pageSize)})),v=c((function(){var e=S.current,r=Math.max(2,e-Math.floor(d.maxShowPage/2));return Array.from({length:e-r},(function(e,n){return r+n}))})),b=c((function(){var e=S.current,r=Math.min(p()-1,e+Math.floor(d.maxShowPage/2));return Array.from({length:r-e},(function(r,n){return e+1+n}))})),x={"@initial":"sm","@md":"md"},w=function(e){var r;y("current",e),null===(r=d.onChange)||void 0===r||r.call(d,e)};return o(i,{get when(){return!d.hideOnSinglePage||p()>1},get children(){return o(u,{spacing:"$1",get children(){return[o(i,{get when(){return 1!==S.current},get children(){return[o(l,{size:x,get colorScheme(){return d.colorScheme},onClick:function(){w(1)},px:"$3",children:"1"}),o(a,{size:x,get icon(){return o(f,{})},"aria-label":"Previous",get colorScheme(){return d.colorScheme},onClick:function(){w(S.current-1)},w:"2rem !important"})]}}),o(h,{get each(){return v()},children:function(e){return o(l,{size:x,get colorScheme(){return d.colorScheme},onClick:function(){w(e)},px:e>10?"$2_5":"$3",children:e})}}),o(l,{size:x,get colorScheme(){return d.colorScheme},variant:"solid",get px(){return S.current>10?"$2_5":"$3"},get children(){return S.current}}),o(h,{get each(){return b()},children:function(e){return o(l,{size:x,get colorScheme(){return d.colorScheme},onClick:function(){w(e)},px:e>10?"$2_5":"$3",children:e})}}),o(i,{get when(){return S.current!==p()},get children(){return[o(a,{size:x,get icon(){return o(g,{})},"aria-label":"Next",get colorScheme(){return d.colorScheme},onClick:function(){w(S.current+1)},w:"2rem !important"}),o(l,{size:x,get colorScheme(){return d.colorScheme},onClick:function(){w(p())},get px(){return p()>10?"$2_5":"$3"},get children(){return p()}})]}})]}})}})}))}}}))}();
