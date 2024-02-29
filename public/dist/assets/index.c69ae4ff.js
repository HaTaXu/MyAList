import{e as t,E as O,a3 as y,j as x,ad as $,ae as T,bH as m,$ as D,Z as M,b as f,a as _,L as W,N as U,K as S,S as p,as as E,bI as h,k as z,bJ as I,ab as g,a6 as l,ax as N,U as n,V as o,bK as P,aM as H,bL as j,bM as Y,aE as F,W as w,ah as R,bN as J,bO as K,n as X,bh as Q,b9 as Z,ba as q,bb as G,bc as ee,bd as te,aw as v,bf as C,bg as V,bP as ne,bQ as oe,bR as re}from"./index.59c56048.js";import{d as ae,e as ie,f as se,g as le,h as ce,i as ue,j as me,k as ge,l as de,m as _e,b as he,n as pe,o as Ee,c as fe}from"./index.65b547cf.js";import{A as Ie,e as ve,f as be,g as Ae,h as Le,i as $e}from"./index.96977aab.js";import{S as Te}from"./index.e3bcca9a.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e))(i||{}),De=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(De||{});const Pe=e=>{const r=x(()=>{if(!$.is_admin(T())){if(e.role===void 0)return!1;if(e.role===m.GENERAL&&!$.is_general(T()))return!1}return!0});return t(M,{get fallback(){return t(Re,e)},get children(){return[t(D,{get when(){return!r()},children:null}),t(D,{get when(){return e.children},get children(){return t(Oe,e)}})]}})},Re=e=>{const{pathname:r}=f(),a=_(),c=()=>r()===e.to;return t(Ie,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:u=>{var L;if(k(),e.refresh){(L=u.stopPropagation)==null||L.call(u);let d=e.to;d.startsWith("http")||(d=U(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":S(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},Oe=e=>{const{pathname:r}=f(),[a,c]=z(r().includes(e.to)),u=_();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:S()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return u(e.title)}})]}}),t(E,{as:ve,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(O,{get each(){return e.items},children:r=>t(Pe,r)})}});function Se(e){return N({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>o(()=>import("./Common.bffc550f.js"),["assets/Common.bffc550f.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/SettingItem.54b86ba4.js","assets/item_type.be442da4.js","assets/index.96977aab.js","assets/ResponsiveGrid.2b120000.js","assets/index.e3bcca9a.js"])),A=[{title:"manage.sidemenu.profile",icon:ae,to:"/@manage",role:m.GUEST,component:n(()=>o(()=>import("./Profile.88aac96c.js"),["assets/Profile.88aac96c.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/index.96977aab.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:ie,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:se,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:le,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:ce,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:ue,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:P,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:P,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.other",icon:me,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.4d687712.js"),["assets/Other.4d687712.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/SettingItem.54b86ba4.js","assets/item_type.be442da4.js","assets/index.96977aab.js","assets/index.e3bcca9a.js"]))}]},{title:"manage.sidemenu.tasks",icon:Se,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:H,to:"/@manage/tasks/aria2",component:n(()=>o(()=>import("./offline_download.e3dc797a.js"),["assets/offline_download.e3dc797a.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/Tasks.6a69b429.js","assets/Paginator.e3ff6815.js","assets/index.96977aab.js"]))},{title:"manage.sidemenu.upload",icon:ge,to:"/@manage/tasks/upload",component:n(()=>o(()=>import("./Upload.7aeed363.js"),["assets/Upload.7aeed363.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/Tasks.6a69b429.js","assets/Paginator.e3ff6815.js","assets/index.96977aab.js"]))},{title:"manage.sidemenu.copy",icon:j,to:"/@manage/tasks/copy",component:n(()=>o(()=>import("./Copy.15c26718.js"),["assets/Copy.15c26718.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/Tasks.6a69b429.js","assets/Paginator.e3ff6815.js","assets/index.96977aab.js"]))}]},{title:"manage.sidemenu.users",icon:de,to:"/@manage/users",component:n(()=>o(()=>import("./Users.f2d69bc1.js"),["assets/Users.f2d69bc1.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/DeletePopover.cabb465d.js","assets/Wether.38a642e7.js"]))},{title:"manage.sidemenu.user_groups",icon:_e,to:"/@manage/groups",component:n(()=>o(()=>import("./UserGroups.d2df8cc3.js"),["assets/UserGroups.d2df8cc3.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/user_group.fea77ba8.js","assets/DeletePopover.cabb465d.js","assets/Wether.38a642e7.js"]))},{title:"manage.sidemenu.storages",icon:be,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.95437e51.js"),["assets/Storages.95437e51.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/DeletePopover.cabb465d.js"]))},{title:"manage.sidemenu.metas",icon:Te,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.d85a8e2a.js"),["assets/Metas.d85a8e2a.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/DeletePopover.cabb465d.js","assets/Wether.38a642e7.js"]))},{title:"manage.sidemenu.indexes",icon:he,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.7ed83eac.js"),["assets/indexes.7ed83eac.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/Common.bffc550f.js","assets/index.65b547cf.js","assets/SettingItem.54b86ba4.js","assets/item_type.be442da4.js","assets/index.96977aab.js","assets/ResponsiveGrid.2b120000.js","assets/index.e3bcca9a.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Ae,component:n(()=>o(()=>import("./backup-restore.6422b1b5.js"),["assets/backup-restore.6422b1b5.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:pe,to:"/@manage/about",role:m.GUEST,component:n(()=>o(()=>import("./About.f383ba84.js"),["assets/About.f383ba84.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js"]))},{title:"manage.sidemenu.docs",icon:Le,to:"https://alist.nn.ci",role:m.GUEST,external:!0},{title:"manage.sidemenu.home",icon:Y,to:"/",role:m.GUEST,refresh:!0}],{isOpen:we,onOpen:Ce,onClose:k}=F(),Ve=()=>{const e=_(),{to:r}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return w("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(R,{"aria-label":"menu",get icon(){return t($e,{})},display:{"@sm":"none"},onClick:Ce,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(R,{"aria-label":"logout",get icon(){return t(J,{})},onClick:()=>{K(),X.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(Q,{get opened(){return we()},placement:"left",onClose:k,get children(){return[t(Z,{}),t(q,{get children(){return[t(G,{}),t(ee,{color:"$info9",get children(){return e("manage.title")}}),t(te,{get children(){return[t(b,{items:A}),t(v,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(V,{})]}})}})]}})]}})]}})]}})},ke=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.6e51c9a5.js"),["assets/AddOrEdit.6e51c9a5.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.2b120000.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.6e51c9a5.js"),["assets/AddOrEdit.6e51c9a5.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.2b120000.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.f46a8938.js"),["assets/AddOrEdit.f46a8938.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/FolderTree.b6f9763a.js","assets/index.96977aab.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/add",component:n(()=>o(()=>import("./AddOrEdit.a2bdfe94.js"),["assets/AddOrEdit.a2bdfe94.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/FolderTree.b6f9763a.js","assets/index.96977aab.js","assets/user_group.fea77ba8.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.f46a8938.js"),["assets/AddOrEdit.f46a8938.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/FolderTree.b6f9763a.js","assets/index.96977aab.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.a2bdfe94.js"),["assets/AddOrEdit.a2bdfe94.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/FolderTree.b6f9763a.js","assets/index.96977aab.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/manage/:user_group_name",component:n(()=>o(()=>import("./Manage.820083bd.js"),["assets/Manage.820083bd.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/DeletePopover.cabb465d.js","assets/Wether.38a642e7.js","assets/index.65b547cf.js"]))},{to:"/userGroups/manage/:user_group_name/:id",component:n(()=>o(()=>import("./AddOrEdit.f46a8938.js"),["assets/AddOrEdit.f46a8938.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.65b547cf.js","assets/FolderTree.b6f9763a.js","assets/index.96977aab.js","assets/user_group.fea77ba8.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.c0954807.js"),["assets/AddOrEdit.c0954807.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/FolderTree.b6f9763a.js","assets/index.96977aab.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.c0954807.js"),["assets/AddOrEdit.c0954807.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/FolderTree.b6f9763a.js","assets/index.96977aab.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.8f279058.js"),["assets/2fa.8f279058.js","assets/index.59c56048.js","assets/index.15d8d646.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.04df8c43.js"),["assets/Messenger.04df8c43.js","assets/index.59c56048.js","assets/index.15d8d646.css"]))}],Be=e=>(Ee(e.title),t(v,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:ne(a.to,"/@manage"),component:a.component||(()=>t(Be,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),ye=B(A).concat(ke),xe=()=>{const e=_();return fe(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ve,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return w("$background","$neutral2")()},overflowY:"auto",get children(){return[t(b,{items:A}),t(v,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(V,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(oe,{get children(){return t(O,{each:ye,children:r=>t(re,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Ne=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));export{De as F,i as G,Ne as i};
