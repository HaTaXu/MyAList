!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.30e086c2.js","./index-legacy.fd89b619.js","./index-legacy.79bcb61c.js","./index-legacy.2dbae1f7.js"],(function(n,t){"use strict";var r,o,i,u,a,c,l,s,g,d,m,f,p,h,b,v,y,$,E,j,A,S,w,C,O,k,I,x,L,_,G,T,P,R,D,U,N,z,B,M,V,Y,W,H,K,X,F,Q,Z,q,J,ee,ne,te,re,oe,ie,ue,ae,ce,le,se,ge,de,me,fe,pe;return{setters:[function(e){r=e.e,o=e.E,i=e.a3,u=e.j,a=e.af,c=e.ag,l=e.bK,s=e.$,g=e.Z,d=e.b,m=e.a,f=e.L,p=e.N,h=e.K,b=e.S,v=e.au,y=e.bL,$=e.k,E=e.bM,j=e.ad,A=e.a6,S=e.az,w=e.U,C=e.V,O=e.bN,k=e.aN,I=e.bO,x=e.bP,L=e.aG,_=e.W,G=e.aj,T=e.bQ,P=e.bR,R=e.n,D=e.bi,U=e.ba,N=e.bb,z=e.bc,B=e.bd,M=e.be,V=e.ay,Y=e.bg,W=e.bh,H=e.bS,K=e.bT,X=e.bU},function(e){F=e.d,Q=e.e,Z=e.f,q=e.g,J=e.h,ee=e.i,ne=e.j,te=e.k,re=e.l,oe=e.m,ie=e.b,ue=e.n,ae=e.o,ce=e.c},function(e){le=e.A,se=e.f,ge=e.g,de=e.h,me=e.i,fe=e.j},function(e){pe=e.S}],execute:function(){var he=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e}(he||{})),be=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(be||{})),ve=function(e){var n=u((function(){if(!a.is_admin(c())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!a.is_general(c()))return!1}return!0}));return r(g,{get fallback(){return r(ye,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r($e,e)}})]}})},ye=function(e){var n=d().pathname,t=m(),o=function(){return n()===e.to};return r(le,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(Oe(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},$e=function(n){var t=d().pathname,o=e($(t().includes(n.to)),2),i=o[0],u=o[1],a=m();return r(A,{w:"$full",get children(){return[r(E,{justifyContent:"space-between",onClick:function(){u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(j,{get children(){return[r(b,{get when(){return n.icon},get children(){return r(v,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return a(n.title)}})]}}),r(v,{as:se,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r(A,{pl:"$2",get children(){return r(Ee,{get items(){return n.children}})}})}})]}})},Ee=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(ve,e)}})}})};var je=w((function(){return C((function(){return t.import("./Common-legacy.456362b2.js")}),void 0)})),Ae=[{title:"manage.sidemenu.profile",icon:F,to:"/@manage",role:l.GUEST,component:w((function(){return C((function(){return t.import("./Profile-legacy.49e4bc72.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:Q,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Z,to:"/@manage/settings/site",component:function(){return r(je,{get group(){return he.SITE}})}},{title:"manage.sidemenu.style",icon:q,to:"/@manage/settings/style",component:function(){return r(je,{get group(){return he.STYLE}})}},{title:"manage.sidemenu.preview",icon:J,to:"/@manage/settings/preview",component:function(){return r(je,{get group(){return he.PREVIEW}})}},{title:"manage.sidemenu.global",icon:ee,to:"/@manage/settings/global",component:function(){return r(je,{get group(){return he.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:O,to:"/@manage/settings/sso",component:function(){return r(je,{get group(){return he.SSO}})}},{title:"manage.sidemenu.ldap",icon:O,to:"/@manage/settings/ldap",component:function(){return r(je,{get group(){return he.LDAP}})}},{title:"manage.sidemenu.other",icon:ne,to:"/@manage/settings/other",component:w((function(){return C((function(){return t.import("./Other-legacy.da1d6ef9.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return S({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:k,to:"/@manage/tasks/aria2",component:w((function(){return C((function(){return t.import("./offline_download-legacy.5338239e.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:te,to:"/@manage/tasks/upload",component:w((function(){return C((function(){return t.import("./Upload-legacy.298879f3.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:I,to:"/@manage/tasks/copy",component:w((function(){return C((function(){return t.import("./Copy-legacy.9542edd3.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:re,to:"/@manage/users",component:w((function(){return C((function(){return t.import("./Users-legacy.074d4810.js")}),void 0)}))},{title:"manage.sidemenu.user_groups",icon:oe,to:"/@manage/groups",component:w((function(){return C((function(){return t.import("./UserGroups-legacy.f99a15ef.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:ge,to:"/@manage/storages",component:w((function(){return C((function(){return t.import("./Storages-legacy.10b05f0b.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:pe,to:"/@manage/metas",component:w((function(){return C((function(){return t.import("./Metas-legacy.372b70ec.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:ie,to:"/@manage/indexes",component:w((function(){return C((function(){return t.import("./indexes-legacy.8d1fcd0a.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:de,component:w((function(){return C((function(){return t.import("./backup-restore-legacy.2bde1abe.js")}),void 0)}))},{title:"manage.sidemenu.about",icon:ue,to:"/@manage/about",role:l.GUEST,component:w((function(){return C((function(){return t.import("./About-legacy.8afcacbc.js")}),void 0)}))},{title:"manage.sidemenu.docs",icon:me,to:"https://alist.nn.ci",role:l.GUEST,external:!0},{title:"manage.sidemenu.home",icon:x,to:"/",role:l.GUEST,refresh:!0}],Se=L(),we=Se.isOpen,Ce=Se.onOpen,Oe=Se.onClose,ke=function(){var e=m(),n=d().to;return r(A,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return _("$background","$neutral2")()},get children(){return[r(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(j,{spacing:"$2",get children(){return[r(G,{"aria-label":"menu",get icon(){return r(fe,{})},display:{"@sm":"none"},onClick:Ce,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(j,{spacing:"$1",get children(){return r(G,{"aria-label":"logout",get icon(){return r(T,{})},onClick:function(){P(),R.success(e("manage.logout_success")),n("/@login")},size:"sm"})}})]}}),r(D,{get opened(){return we()},placement:"left",onClose:Oe,get children(){return[r(U,{}),r(N,{get children(){return[r(z,{}),r(B,{color:"$info9",get children(){return e("manage.title")}}),r(M,{get children(){return[r(Ee,{items:Ae}),r(V,{get children(){return r(j,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(Y,{}),r(W,{})]}})}})]}})]}})]}})]}})},Ie=[{to:"/storages/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.17a010f0.js")}),void 0)}))},{to:"/storages/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.17a010f0.js")}),void 0)}))},{to:"/users/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.59c2b651.js")}),void 0)}))},{to:"/userGroups/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.2bb9db3d.js")}),void 0)}))},{to:"/users/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.59c2b651.js")}),void 0)}))},{to:"/userGroups/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.2bb9db3d.js")}),void 0)}))},{to:"/userGroups/manage/:user_group_name",component:w((function(){return C((function(){return t.import("./Manage-legacy.d2e22102.js")}),void 0)}))},{to:"/userGroups/manage/:user_group_name/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.59c2b651.js")}),void 0)}))},{to:"/metas/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.eaaa2211.js")}),void 0)}))},{to:"/metas/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.eaaa2211.js")}),void 0)}))},{to:"/2fa",component:w((function(){return C((function(){return t.import("./2fa-legacy.e14fbec6.js")}),void 0)}))},{to:"/messenger",component:w((function(){return C((function(){return t.import("./Messenger-legacy.e97d6d82.js")}),void 0)}))}],xe=function(e){return ae(e.title),r(V,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},Le=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:H(n.to,"/@manage"),component:n.component||function(){return r(xe,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(Ae).concat(Ie),_e=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=m();return ce((function(){return e("manage.title")})),r(A,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(ke,{}),r(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(A,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return _("$background","$neutral2")()},overflowY:"auto",get children(){return[r(Ee,{items:Ae}),r(V,{get children(){return r(j,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(Y,{}),r(W,{})]}})}})]}}),r(A,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(K,{get children(){return r(o,{each:Le,children:function(e){return r(X,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",_e)}}}))}();
