import{u as kt,a as k,b as M,s as ee,n as E,c as at,p as X,g as $t,f as vt,_ as lt,l as he,o as it,d as v,e,P as yt,h as Ct,i as xt,j,k as T,m as St,q as Ee,r as Mt,t as Ot,v as Ft,w as st,M as U,x as W,y as V,z as q,S as _,I as _e,T as Rt,F as Tt,A as ne,B as C,C as K,D as ae,E as se,G as It,H as Lt,J as Et,K as ze,L as ct,N as zt,O as Bt,Q as Pt,R as le,U as me,V as pe,W as xe,X as Be,Y as ke,Z as Se,$ as P,a0 as w,a1 as Dt,a2 as y,a3 as G,a4 as At,a5 as Ht,a6 as ie,a7 as jt,a8 as ut,a9 as Vt,aa as Nt,ab as z,ac as Ke,ad as $e,ae as ve,af as fe,ag as Pe,ah as Ut,ai as ge,aj as Re,ak as De,al as te,am as Wt,an as qt,ao as Ae,ap as Kt,aq as Gt,ar as d,as as He,at as Le,au as Jt,av as Te,aw as dt,ax as J,ay as Xt,az as Yt,aA as Qt,aB as gt,aC as Zt,aD as ht,aE as $,aF as Me,aG as en,aH as tn,aI as je,aJ as nn,aK as Ge,aL as rn,aM as on,aN as an,aO as ln,aP as sn,aQ as cn,aR as B,aS as un,aT as D,aU as dn,aV as gn,aW as hn,aX as mn,aY as pn,aZ as fn,a_ as bn,a$ as wn,b0 as ye,b1 as _n,b2 as kn,b3 as Je,b4 as $n,b5 as vn,b6 as yn,b7 as Xe,b8 as Cn,b9 as xn,ba as Sn,bb as Mn,bc as On,bd as Fn,be as Rn,bf as Tn,bg as In,bh as Ln,bi as En,bj as Ye,bk as zn,bl as Bn,bm as Pn,bn as Dn,bo as An,bp as Hn,bq as jn,br as Vn,bs as Nn,bt as Un,bu as Wn,bv as qn,bw as Kn}from"./index.59c56048.js";import{u as Gn,B as mt,a as pt,b as Jn,c as Xn}from"./index.65b547cf.js";import{u as I,r as Yn,a as Qn,b as Zn,R as er}from"./index.92464de9.js";import{A as tr,F as ft,C as nr,a as rr,B as or,b as ar,T as lr,c as Qe,d as ir}from"./index.96977aab.js";import{M as Ve}from"./FolderTree.b6f9763a.js";function we(t){return t==null||t===""}function sr(t){return t==null}async function cr(t,n){let r="/downloads/alist";const o=await at.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(we(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const ur=()=>{const{rawToLinks:t,rawDownloadLinks:n}=kt(),r=k(),{pathname:o}=M();return{batchDownloadSelected:()=>{n(!0).forEach(i=>{window.open(i,"_blank")})},sendToAria2:async()=>{const l=ee(),i=async(a,c)=>{var m;if(c.is_dir){const g=await vt(X(o(),a,c.name),lt());if(g.code!==200)return g.message;const h=[];for(const O of(m=g.data.content)!=null?m:[]){const f=await i(X(a,c.name),O);if(typeof f=="string")return f;h.push(...f)}return h}else return[{path:X(a,c.name),dir:a,url:$t(X(o(),a),c,"direct",!0),name:c.name}]},{aria2_rpc_url:u,aria2_rpc_secret:s}=he;if(!u){E.warning(r("home.toolbar.aria2_not_set"));return}try{let a="/downloads/alist";a=await cr(u,s);let c=!1;E.info(`${r("home.package_download.fetching_struct")}`);for(const m of l){const g=await i("",m);if(typeof g!="object"||g.length===void 0)return E.error(`${r("home.package_download.fetching_struct_failed")}: ${g}`),g;for(let h=0;h<g.length;h++){if(we(g[h].path)||sr(g[h].dir)||we(g[h].url)||we(g[h].name)){E.error(`${r("home.package_download.fetching_struct_failed")}: ${JSON.stringify(g[h])}`);continue}c||(c=!0,E.info(`${r("home.package_download.downloading")}`));const O=await at.post(u,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+s,[g[h].url],{out:g[h].name,dir:a+g[h].dir,"check-certificate":"false"}]});console.log(O)}}E.success(r("home.toolbar.send_aria2_success"))}catch(a){console.error(a),E.error(`failed to send to aria2: ${a}`)}}}},dr=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),gr=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),v(t.removeEventListener.bind(t,"motioncomplete",n,r))},hr=t=>{let{initial:n=!0}=t;it(()=>n=!0);let r=!1,o=[],l=[],i=[];return v(()=>{i.concat(l).forEach(u=>u()),l=i=o=[]}),e(Ft.Provider,{value:{addCleanup:u=>l.push(u),addMount:u=>o.push(u),initial:()=>n},get children(){return e(yt.Provider,{value:void 0,get children(){return Ct(()=>{const u=xt(()=>t.children),s=j(()=>dr(u())),[a,c]=T(),[m,g]=T();return St(Ee(s,f=>{i.push(...l),l=[],Mt(()=>{t.exitBeforeEnter?(c(),O(()=>!r&&h(f))):(h(f),O())})})),[a,m];function h(f){c(f),o.forEach(L=>L()),o=[]}function O(f){var re;const L=()=>{g(),i.forEach(oe=>oe()),i=[],f==null||f()},p=g((re=a())!=null?re:m());if(!p)return L();const x=Ot.get(p);if(!x||!x.getOptions().exit)return L();x.setActive("exit",r=!0),gr(p,()=>{r=!1,L()})}})}})}})},Oe=t=>{var s;const[n,r]=T((s=t.defaultValue)!=null?s:""),o=k();let l;const i=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};st(()=>{l&&(l.focus(),i()),v(()=>{l&&l.setSelectionRange(0,0)})});const u=()=>{var a;if(!n()){E.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n()),r("")};return e(K,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return o(t.title)}}),e(q,{get children(){return[e(_,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(_,{get when(){return t.type==="text"},get fallback(){return e(_e,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i,onKeyDown:a=>{a.key==="Enter"&&u()}})},get children(){return e(Rt,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i})}}),e(_,{get when(){return t.tips},get children(){return e(Tt,{get children(){return t.tips}})}}),e(_,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(ne,{display:"flex",gap:"$2",get children(){return[e(C,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(C,{get loading(){return t.loading},onClick:()=>u(),get children(){return o("global.ok")}})]}})]}})]}})},mr=()=>{const{pathname:t}=M(),n=j(()=>["",...t().split("/").filter(Boolean)]),r=k(),{setPathAs:o}=I(),l=j(()=>{const i={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(he.position_of_header_navbar){case"only_navbar_sticky":return{...i,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...i,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(Pt,ae(l,{background:"$background",class:"nav",w:"$full",get children(){return e(se,{get each(){return n()},children:(i,u)=>{const s=j(()=>u()===n().length-1),a=n().slice(0,u()+1).join("/"),c=It(a);let m=()=>i;return m()===""&&(m=()=>le("home_icon")+r("manage.sidemenu.home")),e(Lt,{class:"nav-item",get children(){return[e(Et,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:ze(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return s()},get as(){return s()?void 0:ct},get href(){return zt(c)},onMouseEnter:()=>o(a),children:m}),e(_,{get when(){return!s()},get children(){return e(Bt,{class:"nav-separator"})}})]}})}})}}))},pr=me(()=>pe(()=>import("./Folder.84eeec3f.js").then(t=>t.F),["assets/Folder.84eeec3f.js","assets/Folder.b511ba9e.css","assets/index.59c56048.js","assets/index.15d8d646.css","assets/icon.6577af6e.js","assets/index.65b547cf.js","assets/index.96977aab.js","assets/index.e3bcca9a.js","assets/video_box.a6c14928.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.92464de9.js","assets/Paginator.e3ff6815.js"])),fr=me(()=>pe(()=>import("./File.041319fd.js").then(t=>t.a),["assets/File.041319fd.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/icon.6577af6e.js","assets/index.65b547cf.js","assets/index.96977aab.js","assets/index.e3bcca9a.js"])),br=me(()=>pe(()=>import("./Password.947e2897.js"),["assets/Password.947e2897.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.92464de9.js","assets/index.96977aab.js"]));let Ze=!0;const wr=()=>{const t=xe("white","$neutral3"),{pathname:n}=M(),{handlePathChange:r}=I();let o=n();return st(Ee(n,l=>{Gn(),Ze||Qn(),Ze=!1,Yn(o,window.scrollY),r(l),o=l})),e(G,{class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return t()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(Be,{get fallback(){return e(ke,{})},get children(){return e(Se,{get children(){return[e(P,{get when(){return w.err},get children(){return e(Dt,{get msg(){return w.err},disableColor:!0})}}),e(P,{get when(){return[y.FetchingObj,y.FetchingObjs].includes(w.state)},get children(){return e(ke,{})}}),e(P,{get when(){return w.state===y.NeedPassword},get children(){return e(br,{})}}),e(P,{get when(){return[y.Folder,y.FetchingMore].includes(w.state)},get children(){return e(pr,{})}}),e(P,{get when(){return w.state===y.File},get children(){return e(fr,{})}})]}})}})}})};function et(t){const n=xe("white","$neutral3"),{proxyLink:r}=At(),{pathname:o}=M(),l=j(Ee(()=>w.state,()=>{if(![y.FetchingMore,y.Folder,y.File].includes(w.state))return"";if([y.FetchingMore,y.Folder].includes(w.state)){const s=w.objs.find(a=>t.files.find(c=>c.toLowerCase()===a.name.toLowerCase()));if(s)return r(s,!0)}return w[t.fromMeta]&&typeof w[t.fromMeta]=="string"?w[t.fromMeta]:""})),i=async s=>{let a={content:s};return/^https?:\/\//g.test(s)&&(a=await Vt(s)),setTimeout(()=>{Zn(o())}),a},[u]=Ht(l,i);return e(_,{get when(){return l()},get children(){return e(ie,{w:"$full",rounded:"$xl",p:"$4",get bgColor(){return n()},shadow:"$lg",get children(){return e(jt,{get loading(){return u.loading},get children(){return e(ut,{get children(){var s;return(s=u())==null?void 0:s.content},readme:!0,toc:!0})}})}})}})}const bt=t=>{const n=le("home_container");return e(Se,{get fallback(){return e(ie,{w:"min(99%, 980px)",get children(){return t.children}})},get children(){return e(P,{when:n==="hope_container",get children(){return e(Nt,{get children(){return t.children}})}})}})},_r=()=>e(bt,{get children(){return e(G,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(et,{files:["header.md","top.md"],fromMeta:"header"}),e(mr,{}),e(wr,{}),e(et,{files:["readme.md","footer.md","bottom.md"],fromMeta:"readme"})]}})}}),kr=fe("<span>|</span>"),$r=()=>{const t=k();return e(G,{class:"footer",w:"$full",py:"$4",color:"#1890ff",get children(){return[e(z,{spacing:"$1",get children(){return[e(Ke,{href:"https://github.com/Xhofe/alist",external:!0,get children(){return t("home.footer.powered_by")}}),kr.cloneNode(!0),e(tr,{as:ct,get href(){return $e.is_guest(ve())?"/@login":"/@manage"},get children(){return t($e.is_guest(ve())?"login.login":"home.footer.manage")}})]}}),e(Ke,{href:"https://beian.miit.gov.cn/",target:"_blank",children:"\u9655ICP\u59072024027119\u53F7"})]}})},tt={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},ce="^\\s*",ue="\\s*$",Y="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Q="([0-9A-Fa-f])",Z="([0-9A-Fa-f]{2})",vr=new RegExp(`${ce}rgb\\s*\\(${Y},${Y},${Y}\\)${ue}`),yr=new RegExp(`${ce}rgba\\s*\\(${Y},${Y},${Y},${Y}\\)${ue}`),Cr=new RegExp(`${ce}#${Q}${Q}${Q}${ue}`),xr=new RegExp(`${ce}#${Z}${Z}${Z}${ue}`),Sr=new RegExp(`${ce}#${Q}${Q}${Q}${Q}${ue}`),Mr=new RegExp(`${ce}#${Z}${Z}${Z}${Z}${ue}`);function S(t){return parseInt(t,16)}function wt(t){try{let n;if(n=xr.exec(t))return[S(n[1]),S(n[2]),S(n[3]),1];if(n=vr.exec(t))return[H(n[1]),H(n[5]),H(n[9]),1];if(n=yr.exec(t))return[H(n[1]),H(n[5]),H(n[9]),Ie(n[13])];if(n=Cr.exec(t))return[S(n[1]+n[1]),S(n[2]+n[2]),S(n[3]+n[3]),1];if(n=Mr.exec(t))return[S(n[1]),S(n[2]),S(n[3]),Ie(S(n[4])/255)];if(n=Sr.exec(t))return[S(n[1]+n[1]),S(n[2]+n[2]),S(n[3]+n[3]),Ie(S(n[4]+n[4])/255)];if(t in tt)return wt(tt[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Or(t){return t>1?1:t<0?0:t}function nt(t,n,r,o){return`rgba(${H(t)}, ${H(n)}, ${H(r)}, ${Or(o)})`}function rt(t,n){const[r,o,l,i=1]=Array.isArray(t)?t:wt(t);return n.alpha?nt(r,o,l,n.alpha):nt(r,o,l,i)}function Ie(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function H(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const Fr={list:ft,grid:mt,image:pt},Rr=()=>{const t=k();return e(Ae,{get children(){return[e(Pe,{as:Ut,get color(){return ge()},get bgColor(){return rt(ge(),{alpha:.15})},get _hover(){return{bgColor:rt(ge(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"lg",get icon(){return e(Se,{get children(){return[e(P,{get when(){return Re()==="list"},get children(){return e(ft,{})}}),e(P,{get when(){return Re()==="grid"},get children(){return e(mt,{})}}),e(P,{get when(){return Re()==="image"},get children(){return e(pt,{})}})]}})}}),e(De,{get children(){return e(se,{get each(){return Object.entries(Fr)},children:n=>e(te,{get icon(){return e(Wt,{get component(){return n[1]}})},onSelect:()=>{qt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})},Tr=()=>{const t=le("logo").split(`
`),n=xe(t[0],t.pop()),r=j(()=>{switch(he.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(dt,ae(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(bt,{get children(){return e(z,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(z,{class:"header-left",h:"44px",get children(){return e(Kt,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(Gt,{})}})}}),e(z,{class:"header-right",spacing:"$2",get children(){return e(_,{get when(){return w.state===y.Folder},get children(){return[e(_,{get when(){return le("search_index")!=="none"},get children(){return e(z,{bg:"$neutral4",w:"$32",p:"$2",rounded:"$md",justifyContent:"space-between",border:"2px solid transparent",cursor:"pointer",_hover:{borderColor:"$info6"},onClick:()=>{d.emit("tool","search")},get children(){return[e(He,{as:Jn}),e(z,{get children(){return[Le(()=>Jt?e(Te,{children:"Cmd"}):e(Te,{children:"Ctrl"})),e(Te,{children:"K"})]}})]}})}}),e(Rr,{})]}})}})]}})}})}}))};function Ir(t){return J({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>'},t)}function Lr(t){return J({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><rect width="12" height="12" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>'},t)}function wo(t){return J({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5"/>'},t)}function Er(t){return J({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 15h6"/><path d="M12.5 17.5L15 15l-2.5-2.5"/>'},t)}function ot(t){return J({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"/>'},t)}function zr(t){return J({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function _o(t){return J({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Br(t){return J({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const N={rename:{icon:nr,color:"$accent9"},copy:{icon:Lr,color:"$success9"},move:{icon:Er,color:"$warning9"},delete:{icon:Xt,color:"$danger9"},copy_link:{icon:ot,color:"$info9"},mkdir:{icon:rr,p:!0},recursive_move:{icon:zr,p:!0},remove_empty_directory:{icon:Br,p:!0},batch_rename:{icon:or,p:!0},new_file:{icon:ar,p:!0},cancel_select:{icon:lr},download:{icon:Yt,color:"$primary9"},go_back:{icon:ot,color:"$info9"}},Ce=t=>{const n=Qt.findIndex(o=>o===t.name);if(n!==-1&&!$e.can(ve(),n))return null;const r=k();return e(gt,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(He,ae({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:ze()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$7",rounded:"$md",get p(){var o;return(o=N[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=N[t.name])==null?void 0:o.icon},get color(){var o;return(o=N[t.name])==null?void 0:o.color}},t))}})},R=t=>{const n=k();return e(gt,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(He,ae({get color(){return ge()},get _hover(){return{bgColor:ge(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Pr=()=>{const t=k(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=Zt(),o="neutral";return e(Ae,{placement:"top",offset:10,get children(){return[e(Pe,{as:Ce,name:"copy_link"}),e(De,{get children(){return[e(te,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(te,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(te,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},Dr=fe("<p></p>"),Ar=()=>{const t=k(),n="neutral",{batchDownloadSelected:r,sendToAria2:o}=ur();return e(Ae,{placement:"top",offset:10,get children(){return[e(Pe,{as:Ce,name:"download"}),e(De,{get children(){return[e(te,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(_,{get when(){return $e.is_admin(ve())||ht("package_download")},get children(){return e(te,{colorScheme:n,onSelect:()=>{d.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}})}}),e(te,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Hr=me(()=>pe(()=>import("./PackageDownload.8a012c49.js"),["assets/PackageDownload.8a012c49.js","assets/index.59c56048.js","assets/index.15d8d646.css"])),jr=()=>{const t=k(),n=s=>{if(s==="package_download"){if(!ht("package_download"))return;o()}};d.on("tool",n),v(()=>{d.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=$(),[i,u]=T("pre_tips");return e(K,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return t("home.toolbar.package_download")}}),e(Be,{get fallback(){return e(ke,{})},get children(){return e(_,{get when(){return i()==="pre_tips"},get fallback(){return e(Hr,{onClose:l})},get children(){return[e(q,{get children(){const s=Dr.cloneNode(!0);return Me(s,()=>t("home.toolbar.pre_package_download-tips")),s}}),e(ne,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(C,{colorScheme:"info",onClick:()=>{u("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},Vr=()=>{const t=j(()=>[y.Folder,y.FetchingMore].includes(w.state)&&en()&&tn());return e(hr,{exitBeforeEnter:!0,get children(){return e(_,{get when(){return t()},get children(){return e(ie,{class:"center-toolbar",pos:"fixed",bottom:"$4",right:"50%",w:"max-content",color:"$neutral11",get as(){return je.div},initial:{opacity:0,scale:.9,x:"50% ",y:10},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:.9},transition:{duration:.2},get children(){return e(z,{p:"$2",get bgColor(){return xe("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(8px)"},get children(){return[e(se,{each:["rename","move","copy","delete"],children:n=>e(Ce,{name:n,onClick:()=>{d.emit("tool",n)}})}),e(Pr,{}),e(Ar,{}),e(Ce,{name:"cancel_select",onClick:()=>{nn(!1)}})]}})}})}})}})},Nr=()=>{const{isOpen:t,onToggle:n}=$({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=j(()=>t()?"$4":"$5"),o=j(()=>w.state===y.Folder),{refresh:l}=I();return e(ie,{class:"left-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(_,{get when(){return t()},get fallback(){return e(R,{class:"toolbar-toggle",as:Qe,onClick:()=>{n()}})},get children(){return e(G,{class:"left-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return je.div},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{duration:.2},get children(){return[e(G,{spacing:"$1",class:"left-toolbar-in",get children(){return[e(_,{get when(){return Le(()=>!!o(),!0)()&&(Ge("write")||w.write)},get children(){return[e(R,{as:er,tips:"refresh",onClick:()=>{l(void 0,!0)}}),e(R,{get as(){return N.new_file.icon},tips:"new_file",onClick:()=>{d.emit("tool","new_file")}}),e(R,{get as(){return N.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{d.emit("tool","mkdir")}}),e(R,{get as(){return N.recursive_move.icon},tips:"recursive_move",onClick:()=>{d.emit("tool","recursiveMove")}}),e(R,{get as(){return N.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{d.emit("tool","removeEmptyDirectory")}}),e(R,{get as(){return N.batch_rename.icon},tips:"batch_rename",onClick:()=>{d.emit("tool","batchRename")}}),e(R,{as:rn,tips:"upload",onClick:()=>{d.emit("tool","upload")}})]}}),e(_,{get when(){return Le(()=>!!o(),!0)()&&Ge("offline_download")},get children(){return e(R,{as:on,pl:"0",tips:"offline_download",onClick:()=>{d.emit("tool","offline_download")}})}}),e(_,{get when(){return an()},get children(){return e(R,{as:ir,tips:"toggle_markdown_toc",onClick:()=>{ln(i=>!i)}})}}),e(R,{tips:"toggle_checkbox",as:Ir,onClick:sn}),e(R,{as:cn,tips:"local_settings",onClick:()=>{d.emit("tool","local_settings")}})]}}),e(R,{tips:"more",as:Qe,onClick:n})]}})}})}})},Ur=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=B(un),{pathname:i}=M(),{refresh:u}=I(),s=a=>{a==="copy"&&n()};return d.on("tool",s),v(()=>{d.off("tool",s)}),e(Ve,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,ee().map(m=>m.name));D(c,()=>{u(),r()})}})},Wr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=B(dn),{pathname:i}=M(),{refresh:u}=I(),s=a=>{a==="move"&&n()};return d.on("tool",s),v(()=>{d.off("tool",s)}),e(Ve,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,ee().map(m=>m.name));D(c,()=>{u(),r()})}})},qr=fe("<p></p>"),Kr=()=>{const t=k(),{isOpen:n,onOpen:r,onClose:o}=$(),[l,i]=B(gn),{refresh:u}=I(),{pathname:s}=M(),a=c=>{c==="delete"&&r()};return d.on("tool",a),v(()=>{d.off("tool",a)}),e(K,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return t("home.toolbar.delete")}}),e(q,{get children(){const c=qr.cloneNode(!0);return Me(c,()=>t("home.toolbar.delete-tips")),c}}),e(ne,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(C,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(s(),ee().map(m=>m.name));D(c,()=>{u(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},Gr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),o=k(),[l,i]=B(hn),{pathname:u}=M(),{refresh:s}=I(),a=c=>{if(c==="rename"){if(!mn()){E.warning(o("home.toolbar.only_one-tips"));return}n()}};return d.on("tool",a),v(()=>{d.off("tool",a)}),e(_,{get when(){return t()},get children(){return e(Oe,{title:"home.toolbar.input_new_name",get isRenamingFile(){return!ee()[0].is_dir},get opened(){return t()},onClose:r,get defaultValue(){var c,m;return(m=(c=ee()[0])==null?void 0:c.name)!=null?m:""},get loading(){return l()},onSubmit:async c=>{const m=await i(X(u(),ee()[0].name),c);D(m,()=>{s(),r()})}})}})},Jr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=B(pn),{refresh:i}=I(),{pathname:u}=M(),s=a=>{a==="new_file"&&n()};return d.on("tool",s),v(()=>{d.off("tool",s)}),e(Oe,{title:"home.toolbar.input_filename",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(X(u(),a),lt());D(c,()=>{i(),r()})}})},Xr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=B(fn),{pathname:i}=M(),{refresh:u}=I(),s=a=>{a==="mkdir"&&n()};return d.on("tool",s),v(()=>{d.off("tool",s)}),e(Oe,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(X(i(),a));D(c,()=>{u(),r()})}})},Yr=fe("<p></p>"),Qr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),{isOpen:o,onOpen:l,onClose:i}=$(),[u,s]=B(bn),{pathname:a}=M(),{refresh:c}=I(),m=h=>{h==="recursiveMove"&&n()};d.on("tool",m),v(()=>{d.off("tool",m)});const g=k();return[e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return g("home.toolbar.recursive_move")}}),e(q,{get children(){const h=Yr.cloneNode(!0);return Me(h,()=>g("home.toolbar.recursive_move_directory-tips")),h}}),e(ne,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>r(),colorScheme:"neutral",get children(){return g("global.cancel")}}),e(C,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return g("global.confirm")}})]}})]}})]}}),e(Ve,{get opened(){return o()},onClose:i,get loading(){return u()},onSubmit:async h=>{const O=await s(a(),h);D(O,()=>{c(),i()})}})]},Zr=fe("<p></p>"),eo=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),{pathname:o}=M(),[l,i]=B(wn),{refresh:u}=I(),s=c=>{c==="removeEmptyDirectory"&&n()};d.on("tool",s),v(()=>{d.off("tool",s)});const a=k();return e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(q,{get children(){const c=Zr.cloneNode(!0);return Me(c,()=>a("home.toolbar.remove_empty_directory-tips")),c}}),e(ne,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(C,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(o());D(c,()=>{u(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},to=t=>e(je.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(z,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:ze()}},get children(){return[e(ye,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(ye,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),no=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),{isOpen:o,onOpen:l,onClose:i}=$(),[u,s]=B(_n),{pathname:a}=M(),{refresh:c}=I(),[m,g]=T("1"),[h,O]=T(""),[f,L]=T(""),[p,x]=T("string"),[re,oe]=T([]),F=k(),Ne=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),Ue=b=>{b==="batchRename"&&l()};d.on("tool",Ue),v(()=>{d.off("tool",Ue)});const Fe=()=>{if(!h()||!f()){E.warning(F("global.empty_input"));return}const b=new RegExp(h(),"g");let de;if(m()==="1")de=w.objs.filter(A=>A.name.match(h())).map(A=>({src_name:A.name,new_name:A.name.replace(b,f())}));else{let A=f();de=w.objs.map(be=>{let We="";const qe=be.name.lastIndexOf(".");qe!==-1&&(We=be.name.substring(qe+1));const _t={src_name:be.name,new_name:h()+A+"."+We};return A=(parseInt(A)+1).toString().padStart(A.length,"0"),_t})}oe(de),n(),i()};return[e(K,{blockScrollOnMount:!1,get opened(){return o()},onClose:i,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(_,{get when(){return m()==="1"},get children(){return e(V,{get children(){return F("home.toolbar.regular_rename")}})}}),e(_,{get when(){return m()==="2"},get children(){return e(V,{get children(){return F("home.toolbar.sequential_renaming_desc")}})}}),e(q,{get children(){return[e(kn,{defaultValue:"1",style:{margin:"20px 0"},onChange:b=>{g(b),b==="1"?x("string"):b==="2"&&x("number")},get children(){return e(z,{spacing:"$4",get children(){return[e(Je,{value:"1",get children(){return F("home.toolbar.regex_rename")}}),e(Je,{value:"2",get children(){return F("home.toolbar.sequential_renaming")}})]}})}}),e(G,{spacing:"$2",get children(){return[e(_e,{id:"modal-input1",type:"string",get value(){return h()},onInput:b=>{O(b.currentTarget.value)},onKeyDown:b=>{b.key==="Enter"&&Fe()}}),e(_e,{id:"modal-input2",get type(){return p()},get value(){return f()},onInput:b=>{L(b.currentTarget.value)},onKeyDown:b=>{b.key==="Enter"&&Fe()}})]}})]}}),e(ne,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>{g("1"),x("string"),i()},colorScheme:"neutral",get children(){return F("global.cancel")}}),e(C,{onClick:()=>Fe(),get disabled(){return!h()||!f()},get children(){return F("global.ok")}})]}})]}})]}}),e(K,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return F("home.toolbar.regex_rename_preview")}}),e(q,{get children(){return e(G,{class:"list",w:"$full",spacing:"$1",get children(){return[e(z,{class:"title",w:"$full",p:"$2",get children(){return[e(ye,ae({w:{"@initial":"50%","@md":"50%"}},Ne,{get children(){return F("home.toolbar.regex_rename_preview_old_name")}})),e(ye,ae({w:{"@initial":"50%","@md":"50%"}},Ne,{get children(){return F("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(se,{get each(){return re()},children:(b,de)=>e(to,{obj:b,get index(){return de()}})})]}})}}),e(ne,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>{oe([]),g("1"),x("string"),r(),i()},colorScheme:"neutral",get children(){return F("global.cancel")}}),e(C,{onClick:()=>{oe([]),r(),l()},colorScheme:"neutral",get children(){return F("global.back")}}),e(C,{get loading(){return u()},onClick:async()=>{const b=await s(a(),re());D(b,()=>{oe([]),O(""),L(""),g("1"),x("string"),c(),i(),r()})},get disabled(){return re().length==0},get children(){return F("global.ok")}})]}})]}})]}})]},ro=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],oo=()=>{const t=k(),[n,r]=T([]),[o,l]=B(()=>$n.get("/public/offline_download_tools")),[i,u]=T(""),[s,a]=T("delete_on_upload_succeed");it(async()=>{const p=await l();vn(p,x=>{r(x),u(x[0])})});const{isOpen:c,onOpen:m,onClose:g}=$(),[h,O]=B(yn),{pathname:f}=M(),L=p=>{p==="offline_download"&&m()};return d.on("tool",L),v(()=>{d.off("tool",L)}),e(Oe,{title:"home.toolbar.offline_download",type:"text",get opened(){return c()},onClose:g,get loading(){return o()||h()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(ie,{mb:"$2",get children(){return e(Xe,{get value(){return i()},onChange:p=>u(p),get options(){return n().map(p=>({value:p,label:p}))}})}})},get bottomSlot(){return e(ie,{mb:"$2",get children(){return e(Xe,{get value(){return s()},onChange:p=>a(p),get options(){return ro.map(p=>({value:p,label:t(`home.toolbar.delete_policy.${p}`)}))}})}})},onSubmit:async p=>{const x=await O(f(),p.split(`
`),i(),s());D(x,()=>{g()})}})},ao=t=>{const n=k(),r=u=>{u===t.name&&l()};d.on("tool",r),v(()=>{d.off("tool",r)});const{isOpen:o,onOpen:l,onClose:i}=$();return e(K,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:i,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(U,{}),e(W,{get children(){return[e(Cn,{}),e(V,{get children(){return n(t.title)}}),e(q,{get children(){return e(_,{get when(){return o()},get children(){return e(Be,{get fallback(){return e(ke,{})},get children(){return t.children}})}})}})]}})]}})};function lo(t){const n=k();return e(Wn,{get children(){return[e(En,{get children(){return n(`home.local_settings.${t.key}`)}}),e(Se,{get fallback(){return e(_e,{get value(){return he[t.key]},onInput:r=>{Ye(t.key,r.currentTarget.value)}})},get children(){return e(P,{get when(){return t.type==="select"},get children(){return e(zn,{get id(){return t.key},get defaultValue(){return he[t.key]},onChange:r=>Ye(t.key,r),get children(){return[e(Bn,{get children(){return[e(Pn,{get children(){return n("global.choose")}}),e(Dn,{}),e(An,{})]}}),e(Hn,{get children(){return e(jn,{get children(){return e(se,{get each(){return t.options},children:r=>e(Vn,{value:r,get children(){return[e(Nn,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(Un,{})]}})})}})}})]}})}})}})]}})}const io=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),o=k(),l=i=>{i==="local_settings"&&n()};return d.on("tool",l),v(()=>{d.off("tool",l)}),e(Ln,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(xn,{}),e(Sn,{get children(){return[e(Mn,{}),e(On,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(Fn,{get children(){return[e(G,{spacing:"$2",get children(){return e(se,{each:Rn,children:i=>e(lo,i)})}}),e(dt,{mt:"$4",get children(){return e(z,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(Tn,{}),e(In,{})]}})}})]}})]}})]}})},so=me(()=>pe(()=>import("./Upload.ecb696f1.js"),["assets/Upload.ecb696f1.js","assets/index.59c56048.js","assets/index.15d8d646.css","assets/index.92464de9.js"])),co=()=>[e(Ur,{}),e(Wr,{}),e(Gr,{}),e(Kr,{}),e(Jr,{}),e(Xr,{}),e(Qr,{}),e(eo,{}),e(no,{}),e(oo,{}),e(jr,{}),e(ao,{name:"upload",title:"home.toolbar.upload",get children(){return e(so,{})}}),e(io,{})],uo=()=>e(Kn,{get children(){return[e(Nr,{}),e(Vr,{}),e(co,{}),e(qn,{})]}}),go=()=>{Xn(le("site_title"));const t=le("announcement");return t&&E.render(()=>e(ut,{children:t})),[e(Tr,{}),e(uo,{}),e(_r,{}),e($r,{})]},ko=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"}));export{_o as I,ko as L,wo as T,N as o,ur as u};
