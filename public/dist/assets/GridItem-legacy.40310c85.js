!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.0750148c.js","./Folder-legacy.94a34d63.js","./index-legacy.bed995a3.js","./index-legacy.35d1bb8a.js","./ImageWithError-legacy.ae338957.js","./icon-legacy.e97b9f2b.js"],(function(t){"use strict";var n,r,o,i,a,l,u,c,s,f,g,d,b,h,y,m,p,j,w,v,$,x,S,A,k;return{setters:[function(e){n=e.cz,r=e.e,o=e.ai,i=e.as,a=e.k,l=e.j,u=e.aG,c=e.a3,s=e.K,f=e.r,g=e.aJ,d=e.cR,b=e.aw,h=e.ar,y=e.S,m=e.b_,p=e.aq,j=e.b0,w=e.aI},function(e){v=e.b},function(e){$=e.u},function(e){x=e.p},function(e){S=e.I},function(e){A=e.g,k=e.O}],execute:function(){t("G",(function(t){if((0,n().isHide)(t.obj))return null;var I=$().setPathAs,z=r(i,{get color(){return o()},boxSize:"$12",get as(){return A(t.obj)}}),E=e(a(!1),2),M=E[0],C=E[1],O=l((function(){return u()&&(M()||t.obj.selected)})),G=v({id:1}).show;return r(w.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(c,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:s()}},as:x,get href(){return t.obj.name},onMouseEnter:function(){C(!0),I(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){C(!1)},onContextMenu:function(e){f((function(){g(!1),d(t.index,!0,!0)})),G(e,{props:t.obj})},get children(){return[r(b,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===k.IMAGE&&(e.stopPropagation(),e.preventDefault(),h.emit("gallery",t.obj.name))},pos:"relative",get children(){return[r(y,{get when(){return O()},get children(){return r(m,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){d(t.index,e.target.checked)}})}}),r(y,{get when(){return t.obj.thumb},fallback:z,get children(){return r(S,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(p,{size:"lg"})},fallbackErr:z,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),r(j,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})}))}}}))}();
