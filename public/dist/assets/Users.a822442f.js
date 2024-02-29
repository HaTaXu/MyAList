import{a as _,b as y,aR as B,b4 as d,k as v,cA as p,e,ab as h,B as o,a6 as S,cB as F,cC as R,cD as b,E as m,cE as f,cF as x,cG as s,b5 as g,n as $,S as D,a3 as P,c1 as A,aA as E,aB as H,ad as I}from"./index.ee6b2a7d.js";import{o as L}from"./index.7f6feb3f.js";import{D as M}from"./DeletePopover.6b7d5bbe.js";import{W}from"./Wether.4bb1739e.js";const z=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(A,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},G=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:E,children:(a,u)=>e(H,{get label(){return t(`users.permissions.${a}`)},get children(){return e(S,{boxSize:"$2",rounded:"$full",get bg(){return i(I.can(n.user,u()))}})}})})}})},q=()=>{const n=_();L("manage.sidemenu.users");const{to:t}=y(),[i,a]=B(()=>d.get("/admin/user/list")),[u,T]=v([]),l=async()=>{const r=await a();g(r,c=>T(c.content))};l();const[k,w]=p(r=>d.post(`/admin/user/delete?id=${r}`)),[C,U]=p(r=>d.post(`/admin/user/cancel_2fa?id=${r}`));return e(P,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(F,{highlightOnHover:!0,dense:!0,get children(){return[e(R,{get children(){return e(b,{get children(){return[e(m,{each:["username","user_group_name","base_path","role","permission","available"],children:r=>e(f,{get children(){return n(`users.${r}`)}})}),e(f,{get children(){return n("global.operations")}})]}})}}),e(x,{get children(){return e(m,{get each(){return u()},children:r=>e(b,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.user_group}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(z,{get role(){return r.role}})}}),e(s,{get children(){return e(G,{user:r})}}),e(s,{get children(){return e(W,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(o,{colorScheme:"accent",get loading(){return C()===r.id},onClick:async()=>{const c=await U(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}}),e(D,{get when(){return r.role==0},get children(){return e(M,{get name(){return r.username},get loading(){return k()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}})}})]}})}})]}})})}})]}})}})]}})};export{q as default};
