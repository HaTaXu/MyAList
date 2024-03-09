import{e as t,E as O,a3 as y,j as x,ad as $,ae as T,bH as m,$ as D,Z as M,b as f,a as _,L as W,N as U,K as S,S as p,as as E,bI as h,k as z,bJ as I,ab as d,a6 as l,ax as N,U as n,V as o,bK as P,aM as H,bL as j,bM as Y,aE as F,W as w,ah as R,bN as J,bO as K,n as X,bh as Q,b9 as Z,ba as q,bb as G,bc as ee,bd as te,aw as v,bf as C,bg as V,bP as ne,bQ as oe,bR as re}from"./index.f43af9c9.js";import{d as ae,e as ie,f as se,g as le,h as ce,i as ue,j as me,k as de,l as ge,m as _e,b as he,n as pe,o as Ee,c as fe}from"./index.8ac80dfc.js";import{A as Ie,e as ve,f as be,g as Ae,h as Le,i as $e}from"./index.439fb41c.js";import{S as Te}from"./index.31053e22.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e))(i||{}),De=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(De||{});const Pe=e=>{const r=x(()=>{if(!$.is_admin(T())){if(e.role===void 0)return!1;if(e.role===m.GENERAL&&!$.is_general(T()))return!1}return!0});return t(M,{get fallback(){return t(Re,e)},get children(){return[t(D,{get when(){return!r()},children:null}),t(D,{get when(){return e.children},get children(){return t(Oe,e)}})]}})},Re=e=>{const{pathname:r}=f(),a=_(),c=()=>r()===e.to;return t(Ie,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:u=>{var L;if(k(),e.refresh){(L=u.stopPropagation)==null||L.call(u);let g=e.to;g.startsWith("http")||(g=U(g)),window.open(g,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":S(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},Oe=e=>{const{pathname:r}=f(),[a,c]=z(r().includes(e.to)),u=_();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:S()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(d,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return u(e.title)}})]}}),t(E,{as:ve,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(O,{get each(){return e.items},children:r=>t(Pe,r)})}});function Se(e){return N({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>o(()=>import("./Common.623b820f.js"),["assets/Common.623b820f.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/SettingItem.4b530c21.js","assets/item_type.be442da4.js","assets/index.439fb41c.js","assets/ResponsiveGrid.27fb6a0c.js","assets/index.31053e22.js"])),A=[{title:"manage.sidemenu.profile",icon:ae,to:"/@manage",role:m.GUEST,component:n(()=>o(()=>import("./Profile.d1d074e2.js"),["assets/Profile.d1d074e2.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/index.439fb41c.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:ie,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:se,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:le,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:ce,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:ue,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:P,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:P,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.other",icon:me,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.789fe21f.js"),["assets/Other.789fe21f.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/SettingItem.4b530c21.js","assets/item_type.be442da4.js","assets/index.439fb41c.js","assets/index.31053e22.js"]))}]},{title:"manage.sidemenu.tasks",icon:Se,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:H,to:"/@manage/tasks/aria2",component:n(()=>o(()=>import("./offline_download.76c13f8a.js"),["assets/offline_download.76c13f8a.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/Tasks.36fc77fb.js","assets/Paginator.26ebd9e6.js","assets/index.439fb41c.js"]))},{title:"manage.sidemenu.upload",icon:de,to:"/@manage/tasks/upload",component:n(()=>o(()=>import("./Upload.558c51fb.js"),["assets/Upload.558c51fb.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/Tasks.36fc77fb.js","assets/Paginator.26ebd9e6.js","assets/index.439fb41c.js"]))},{title:"manage.sidemenu.copy",icon:j,to:"/@manage/tasks/copy",component:n(()=>o(()=>import("./Copy.bbc7b2ea.js"),["assets/Copy.bbc7b2ea.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/Tasks.36fc77fb.js","assets/Paginator.26ebd9e6.js","assets/index.439fb41c.js"]))}]},{title:"manage.sidemenu.users",icon:ge,to:"/@manage/users",component:n(()=>o(()=>import("./Users.2cd5a43c.js"),["assets/Users.2cd5a43c.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/DeletePopover.f7eb1824.js","assets/Wether.59066c3e.js"]))},{title:"manage.sidemenu.user_groups",icon:_e,to:"/@manage/groups",component:n(()=>o(()=>import("./UserGroups.8ba52a18.js"),["assets/UserGroups.8ba52a18.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/user_group.fea77ba8.js","assets/DeletePopover.f7eb1824.js","assets/Wether.59066c3e.js"]))},{title:"manage.sidemenu.storages",icon:be,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.02b35a25.js"),["assets/Storages.02b35a25.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/DeletePopover.f7eb1824.js"]))},{title:"manage.sidemenu.metas",icon:Te,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.4e2369ff.js"),["assets/Metas.4e2369ff.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/DeletePopover.f7eb1824.js","assets/Wether.59066c3e.js"]))},{title:"manage.sidemenu.indexes",icon:he,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.ff973be0.js"),["assets/indexes.ff973be0.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/Common.623b820f.js","assets/index.8ac80dfc.js","assets/SettingItem.4b530c21.js","assets/item_type.be442da4.js","assets/index.439fb41c.js","assets/ResponsiveGrid.27fb6a0c.js","assets/index.31053e22.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Ae,component:n(()=>o(()=>import("./backup-restore.d59a1b17.js"),["assets/backup-restore.d59a1b17.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:pe,to:"/@manage/about",role:m.GUEST,component:n(()=>o(()=>import("./About.f41dea14.js"),["assets/About.f41dea14.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js"]))},{title:"manage.sidemenu.docs",icon:Le,to:"https://alist.nn.ci",role:m.GUEST,external:!0},{title:"manage.sidemenu.home",icon:Y,to:"/",role:m.GUEST,refresh:!0}],{isOpen:we,onOpen:Ce,onClose:k}=F(),Ve=()=>{const e=_(),{to:r}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return w("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(d,{spacing:"$2",get children(){return[t(R,{"aria-label":"menu",get icon(){return t($e,{})},display:{"@sm":"none"},onClick:Ce,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(d,{spacing:"$1",get children(){return t(R,{"aria-label":"logout",get icon(){return t(J,{})},onClick:()=>{K(),X.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(Q,{get opened(){return we()},placement:"left",onClose:k,get children(){return[t(Z,{}),t(q,{get children(){return[t(G,{}),t(ee,{color:"$info9",get children(){return e("manage.title")}}),t(te,{get children(){return[t(b,{items:A}),t(v,{get children(){return t(d,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(V,{})]}})}})]}})]}})]}})]}})},ke=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.362a748b.js"),["assets/AddOrEdit.362a748b.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.27fb6a0c.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.362a748b.js"),["assets/AddOrEdit.362a748b.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.27fb6a0c.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.a97cdea9.js"),["assets/AddOrEdit.a97cdea9.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/FolderTree.1226396f.js","assets/index.439fb41c.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/add",component:n(()=>o(()=>import("./AddOrEdit.b4531342.js"),["assets/AddOrEdit.b4531342.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/FolderTree.1226396f.js","assets/index.439fb41c.js","assets/user_group.fea77ba8.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.a97cdea9.js"),["assets/AddOrEdit.a97cdea9.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/FolderTree.1226396f.js","assets/index.439fb41c.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.b4531342.js"),["assets/AddOrEdit.b4531342.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/FolderTree.1226396f.js","assets/index.439fb41c.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/manage/:id",component:n(()=>o(()=>import("./Manage.e9b9f5f0.js"),["assets/Manage.e9b9f5f0.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/DeletePopover.f7eb1824.js","assets/Wether.59066c3e.js"]))},{to:"/userGroups/manage/:id/:id",component:n(()=>o(()=>import("./AddOrEdit.a97cdea9.js"),["assets/AddOrEdit.a97cdea9.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/index.8ac80dfc.js","assets/FolderTree.1226396f.js","assets/index.439fb41c.js","assets/user_group.fea77ba8.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.94b946c1.js"),["assets/AddOrEdit.94b946c1.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/FolderTree.1226396f.js","assets/index.439fb41c.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.94b946c1.js"),["assets/AddOrEdit.94b946c1.js","assets/index.f43af9c9.js","assets/index.15d8d646.css","assets/FolderTree.1226396f.js","assets/index.439fb41c.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.b0b8d0e3.js"),["assets/2fa.b0b8d0e3.js","assets/index.f43af9c9.js","assets/index.15d8d646.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.1e246b3f.js"),["assets/Messenger.1e246b3f.js","assets/index.f43af9c9.js","assets/index.15d8d646.css"]))}],Be=e=>(Ee(e.title),t(v,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:ne(a.to,"/@manage"),component:a.component||(()=>t(Be,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),ye=B(A).concat(ke),xe=()=>{const e=_();return fe(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ve,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return w("$background","$neutral2")()},overflowY:"auto",get children(){return[t(b,{items:A}),t(v,{get children(){return t(d,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(V,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(oe,{get children(){return t(O,{each:ye,children:r=>t(re,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Ne=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));export{De as F,i as G,Ne as i};