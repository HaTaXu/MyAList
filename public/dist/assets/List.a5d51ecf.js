import{cB as $,e as t,ad as l,K as k,r as h,aK as b,cT as m,S as f,aI as w,c1 as j,au as y,ak as A,at as p,b1 as a,c5 as C,cm as S,ac as v,a as I,k as d,w as O,cU as P,cV as z,cW as M,D as u,E as B,a0 as E,a3 as L}from"./index.0f128fa7.js";import{b as T}from"./Folder.4623396d.js";import{u as D}from"./index.3b69ca99.js";import{q as W}from"./index.36085931.js";import{g as F,O as H}from"./icon.5050d1a7.js";import"./Layout.3b42fc3e.js";import"./index.a01b3991.js";import"./FolderTree.b23f4d91.js";import"./video_box.97f67260.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.2bc97737.js";import"./index.0da933e0.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],K=e=>{const{isHide:o}=$();if(o(e.obj))return null;const{setPathAs:c}=D(),{show:s}=T({id:1});return t(v.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:k()}},as:W,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(y,{class:"icon",boxSize:"$6",get color(){return A()},get as(){return F(e.obj)},mr:"$1","on:click":r=>{e.obj.type===H.IMAGE&&(r.stopPropagation(),r.preventDefault(),p.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return C(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return S(e.obj.modified)}})]}})}})},ee=()=>{const e=I(),[o,c]=d(),[s,r]=d(!1);O(()=>{o()&&P(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(L,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return z()},get indeterminate(){return M()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(B,{get each(){return E.objs},children:(i,x)=>t(K,{obj:i,get index(){return x()}})})]}})};export{ee as default};