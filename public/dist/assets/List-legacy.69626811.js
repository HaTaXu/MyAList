!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.903c0097.js","./Folder-legacy.469c3605.js","./index-legacy.9c2f9429.js","./index-legacy.cbd844dd.js","./icon-legacy.9d797fb3.js","./Layout-legacy.b7cc0aa4.js","./index-legacy.3d15c04e.js","./FolderTree-legacy.385ed495.js","./video_box-legacy.d3e686ba.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.5171d274.js","./index-legacy.e1a889bc.js"],(function(n){"use strict";var t,r,i,o,c,a,l,u,s,g,d,f,m,h,b,y,j,p,w,x,v,A,$,S,k,z,C,I,_,E,M,O;return{setters:[function(e){t=e.cz,r=e.e,i=e.ab,o=e.K,c=e.r,a=e.aJ,l=e.cR,u=e.S,s=e.aG,g=e.b_,d=e.as,f=e.ai,m=e.ar,h=e.b0,b=e.c2,y=e.ck,j=e.aI,p=e.a,w=e.k,x=e.w,v=e.cS,A=e.cT,$=e.cU,S=e.D,k=e.E,z=e.a0,C=e.a3},function(e){I=e.b},function(e){_=e.u},function(e){E=e.p},function(e){M=e.g,O=e.O},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var P=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],T=function(e){if((0,t().isHide)(e.obj))return null;var n=_().setPathAs,p=I({id:1}).show;return r(j.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(i,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:o()}},as:E,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){c((function(){a(!1),l(e.index,!0,!0)})),p(n,{props:e.obj})},get children(){return[r(i,{class:"name-box",spacing:"$1",get w(){return P[0].w},get children(){return[r(u,{get when(){return s()},get children(){return r(g,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){l(e.index,n.target.checked)}})}}),r(d,{class:"icon",boxSize:"$6",get color(){return f()},get as(){return M(e.obj)},mr:"$1","on:click":function(n){e.obj.type===O.IMAGE&&(n.stopPropagation(),n.preventDefault(),m.emit("gallery",e.obj.name))}}),r(h,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),r(h,{class:"size",get w(){return P[1].w},get textAlign(){return P[1].textAlign},get children(){return b(e.obj.size)}}),r(h,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return P[2].w},get textAlign(){return P[2].textAlign},get children(){return y(e.obj.modified)}})]}})}})};n("default",(function(){var n=p(),t=e(w(),2),o=t[0],l=t[1],d=e(w(!1),2),f=d[0],m=d[1];x((function(){o()&&v(o(),f())}));var b=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===o()?m(!f()):c((function(){l(e.name),m(!1)}))}}};return r(C,{class:"list",w:"$full",spacing:"$1",get children(){return[r(i,{class:"title",w:"$full",p:"$2",get children(){return[r(i,{get w(){return P[0].w},spacing:"$1",get children(){return[r(u,{get when(){return s()},get children(){return r(g,{get checked(){return A()},get indeterminate(){return $()},onChange:function(e){a(e.target.checked)}})}}),r(h,S((function(){return b(P[0])}),{get children(){return n("home.obj.".concat(P[0].name))}}))]}}),r(h,S({get w(){return P[1].w}},(function(){return b(P[1])}),{get children(){return n("home.obj.".concat(P[1].name))}})),r(h,S({get w(){return P[2].w}},(function(){return b(P[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(P[2].name))}}))]}}),r(k,{get each(){return z.objs},children:function(e,n){return r(T,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
