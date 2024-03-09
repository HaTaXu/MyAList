import{e,ar as L,au as b,ak as S,a0 as a,a3 as l,bL as A,b1 as D,av as E,c5 as j,cm as V,a as m,j as f,cn as R,a4 as y,aq as M,ai as C,B as p,am as F,E as z,an as B,cf as P,S as v,aE as U,ad as d,b as W,ci as X,K as H,co as q,U as n,V as o,cj as G,cp as K,af as _,ag as g,k as Y,$ as O,b8 as Z,X as k,Y as T,ao as I,Z as J}from"./index.0f128fa7.js";import{g as N,O as u}from"./icon.5050d1a7.js";import{o as Q}from"./index.36085931.js";import{T as ee}from"./Layout.3b42fc3e.js";const $=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(L,{boxSize:"$20",get fallback(){return e(b,{get color(){return S()},boxSize:"$20",get as(){return N(a.obj)}})},get src(){return a.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(A,{size:"lg",css:{wordBreak:"break-all"},get children(){return a.obj.name}}),e(D,{color:"$neutral10",size:"sm",get children(){return[E(()=>j(a.obj.size))," \xB7 ",E(()=>V(a.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),x=()=>{const r=m(),t=f(()=>R(a.obj.name)),{currentObjLink:c}=y();return e(v,{get when(){return t().length},get children(){return e(M,{get children(){return[e(C,{as:p,colorScheme:"success",get rightIcon(){return e(b,{as:Q})},get children(){return r("home.preview.open_with")}}),e(F,{get children(){return e(z,{get each(){return t()},children:s=>e(B,{as:"a",target:"_blank",get href(){return P(s.value,{raw_url:a.raw_url,name:a.obj.name,d_url:c(!0)})},get children(){return s.key}})})}})]}})}})},h=r=>{const t=m(),{copyCurrentRawLink:c}=U();return e($,{get children(){return[e(d,{spacing:"$2",get children(){return[e(p,{colorScheme:"accent",onClick:()=>c(!0),get children(){return t("home.toolbar.copy_link")}}),e(p,{as:"a",get href(){return a.raw_url},target:"_blank",get children(){return t("home.preview.download")}})]}}),e(v,{get when(){return r.openWith},get children(){return e(x,{})}})]}})},re=Object.freeze(Object.defineProperty({__proto__:null,Download:h,default:h},Symbol.toStringTag,{value:"Module"})),te=()=>{const r=m(),{back:t}=W();return e($,{get children(){return e(l,{spacing:"$6",get children(){return[e(d,{spacing:"$2",get children(){return r("\u6682\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u65E0\u6CD5\u5728\u7EBF\u9884\u89C8")}}),e(d,{spacing:"$2",get children(){return e(p,{colorScheme:"accent",onClick:()=>t(),get children(){return r("home.toolbar.go_back")}})}})]}})}})},ne=r=>{const{currentObjLink:t}=y(),c=f(()=>P(r.scheme,{raw_url:a.raw_url,name:a.obj.name,d_url:t(!0),ts:!0}));return e(q,{w:"$full",h:"70vh",get children(){return[e(X.iframe,{w:"$full",h:"$full",get src(){return c()}}),e(b,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:ee,onClick:()=>{window.open(c(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return H()},p:"$1",boxSize:"$7"})]}})},oe=r=>()=>e(ne,{scheme:r}),ae=[{name:"HTML render",exts:["html"],component:n(()=>o(()=>import("./html.cfc90cbb.js"),["assets/html.cfc90cbb.js","assets/index.0f128fa7.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:n(()=>o(()=>import("./aliyun_video.eae1cbfe.js"),["assets/aliyun_video.eae1cbfe.js","assets/index.0f128fa7.js","assets/index.15d8d646.css","assets/icon.5050d1a7.js","assets/index.a01b3991.js","assets/index.36085931.js","assets/Layout.3b42fc3e.js","assets/index.3b69ca99.js","assets/FolderTree.b23f4d91.js","assets/index.0da933e0.js","assets/video_box.97f67260.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.2549cca8.js"]))},{name:"Markdown",type:u.TEXT,component:n(()=>o(()=>import("./markdown.2d6cc999.js"),["assets/markdown.2d6cc999.js","assets/index.0f128fa7.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:n(()=>o(()=>import("./markdown_with_word_wrap.73302aeb.js"),["assets/markdown_with_word_wrap.73302aeb.js","assets/index.0f128fa7.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:n(()=>o(()=>import("./url.ed81714e.js"),["assets/url.ed81714e.js","assets/index.0f128fa7.js","assets/index.15d8d646.css","assets/icon.5050d1a7.js","assets/index.a01b3991.js","assets/index.36085931.js","assets/Layout.3b42fc3e.js","assets/index.3b69ca99.js","assets/FolderTree.b23f4d91.js","assets/index.0da933e0.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:n(()=>o(()=>import("./text-editor.2394bc00.js"),["assets/text-editor.2394bc00.js","assets/index.0f128fa7.js","assets/index.15d8d646.css"]))},{name:"Image",type:u.IMAGE,component:n(()=>o(()=>import("./image.447f1584.js"),["assets/image.447f1584.js","assets/index.0f128fa7.js","assets/index.15d8d646.css","assets/ImageWithError.d68dbc69.js"]))},{name:"Video",type:u.VIDEO,component:n(()=>o(()=>import("./video.1eff970e.js"),["assets/video.1eff970e.js","assets/index.0f128fa7.js","assets/index.15d8d646.css","assets/icon.5050d1a7.js","assets/index.a01b3991.js","assets/index.36085931.js","assets/Layout.3b42fc3e.js","assets/index.3b69ca99.js","assets/FolderTree.b23f4d91.js","assets/index.0da933e0.js","assets/video_box.97f67260.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.2549cca8.js"]))},{name:"Audio",type:u.AUDIO,component:n(()=>o(()=>import("./audio.94ba8131.js"),["assets/audio.94ba8131.js","assets/audio.e5b5af14.css","assets/index.0f128fa7.js","assets/index.15d8d646.css","assets/icon.5050d1a7.js","assets/index.a01b3991.js","assets/index.36085931.js","assets/Layout.3b42fc3e.js","assets/index.3b69ca99.js","assets/FolderTree.b23f4d91.js","assets/index.0da933e0.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:n(()=>o(()=>import("./ipa.5072884a.js"),["assets/ipa.5072884a.js","assets/index.0f128fa7.js","assets/index.15d8d646.css","assets/icon.5050d1a7.js","assets/index.a01b3991.js","assets/index.36085931.js","assets/Layout.3b42fc3e.js","assets/index.3b69ca99.js","assets/FolderTree.b23f4d91.js","assets/index.0da933e0.js"]))},{name:"Plist",exts:["plist"],component:n(()=>o(()=>import("./plist.a8a24563.js"),["assets/plist.a8a24563.js","assets/index.0f128fa7.js","assets/index.15d8d646.css","assets/icon.5050d1a7.js","assets/index.a01b3991.js","assets/index.36085931.js","assets/Layout.3b42fc3e.js","assets/index.3b69ca99.js","assets/FolderTree.b23f4d91.js","assets/index.0da933e0.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:n(()=>o(()=>import("./aliyun_office.3bc4e015.js"),["assets/aliyun_office.3bc4e015.js","assets/index.0f128fa7.js","assets/index.15d8d646.css"]))},{name:"Asciinema",exts:["cast"],component:n(()=>o(()=>import("./asciinema.5cffda14.js"),["assets/asciinema.5cffda14.js","assets/asciinema.53412307.css","assets/index.0f128fa7.js","assets/index.15d8d646.css"]))}],ie=r=>{const t=[],c=m();return ae.forEach(i=>{var w;i.provider&&!i.provider.test(r.provider)||(i.type===r.type||i.exts==="*"||((w=i.exts)==null?void 0:w.includes(G(r.name).toLowerCase())))&&t.push({name:i.name,component:i.component})}),K(r.name).forEach(i=>{t.push({name:i.key,component:oe(i.value)})}),!_.is_guest(g())&&_.can(g(),3)&&t.push({name:c("home.preview.download"),component:n(()=>o(()=>Promise.resolve().then(()=>re),void 0))}),t},ce=()=>{m();const r=f(()=>ie({...a.obj,provider:a.provider})),[t,c]=Y(r()[0]);return e(J,{get fallback(){return e(te,{})},get children(){return[e(O,{get when(){return r().length>1},get children(){return[e(l,{w:"$full",spacing:"$2",get children(){return e(d,{w:"$full",spacing:"$2",get children(){return[e(Z,{alwaysShowBorder:!0,get value(){return t().name},onChange:s=>{c(r().find(i=>i.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(x,{})]}})}}),e(k,{get fallback(){return e(T,{})},get children(){return e(I,{get component(){return t().component}})}})]}}),e(O,{get when(){return r().length==1},get children(){return e(v,{get when(){return!_.is_admin(g())},get fallback(){return e(h,{})},get children(){return e(k,{get fallback(){return e(T,{})},get children(){return e(I,{get component(){return t().component}})}})}})}})]}})},pe=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{$ as F,pe as a};