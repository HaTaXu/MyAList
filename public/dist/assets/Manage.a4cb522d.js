import{a as C,b as D,aR as x,b4 as g,k as b,cA as $,e,ab as u,B as c,as as y,at as E,a6 as S,cB as I,cC as M,cD as w,E as m,cE as _,cF as P,cG as i,b5 as h,n as k,S as R,a3 as H,aA as W,aB as z,ad as J}from"./index.9e7fda1e.js";import{D as K}from"./DeletePopover.0b1d26b4.js";import{W as N}from"./Wether.ebaca957.js";import{J as O,K as V}from"./index.b7e62051.js";const X=s=>{const l=C(),d=t=>`$${t?"success":"danger"}9`;return e(u,{spacing:"$0_5",get children(){return e(m,{each:W,children:(t,n)=>e(z,{get label(){return l(`users.permissions.${t}`)},get children(){return e(S,{boxSize:"$2",rounded:"$full",get bg(){return d(J.can(s.user,n()))}})}})})}})},Z=()=>{const s=C(),{to:l,params:d,back:t}=D(),{user_group_name:n}=d,[B,T]=x(()=>g.get(`/admin/user/listByUserGroup?userGroupName=${n}`)),[U,L]=b([]),o=async()=>{const r=await T();h(r,a=>L(a.content))};o();const[v,F]=$(r=>g.post(`/admin/user/delete?id=${r}`)),[G,A]=$(r=>g.post(`/admin/user/cancel_2fa?id=${r}`)),[p,f]=b("false");return e(H,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(u,{spacing:"$2",get children(){return[e(c,{colorScheme:"success",onClick:()=>{t()},onMouseEnter:()=>f("true"),onMouseLeave:()=>f("false"),css:{".display":{display:"none"}},get children(){return e(u,{spacing:"$3",get children(){return[e(y,{get classList(){return{display:p()==="true"}},height:"1.4em",width:"1.4em",as:O}),e(y,{get classList(){return{display:p()==="false"}},height:"1.4em",width:"1.4em",as:V}),E(()=>s(n))]}})}}),e(c,{colorScheme:"accent",get loading(){return B()},onClick:o,get children(){return s("global.refresh")}}),e(c,{onClick:()=>{l("/@manage/users/add")},get children(){return s("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(I,{highlightOnHover:!0,dense:!0,get children(){return[e(M,{get children(){return e(w,{get children(){return[e(m,{each:["username","base_path","permission","available"],children:r=>e(_,{get children(){return s(`users.${r}`)}})}),e(_,{get children(){return s("global.operations")}})]}})}}),e(P,{get children(){return e(m,{get each(){return U()},children:r=>e(w,{get children(){return[e(i,{get children(){return r.username}}),e(i,{get children(){return r.base_path}}),e(i,{get children(){return e(X,{user:r})}}),e(i,{get children(){return e(N,{get yes(){return!r.disabled}})}}),e(i,{get children(){return e(u,{spacing:"$2",get children(){return[e(c,{onClick:()=>{l(`/@manage/userGroups/manage/${n}/${r.id}`)},get children(){return s("global.edit")}}),e(c,{colorScheme:"accent",get loading(){return G()===r.id},onClick:async()=>{const a=await A(r.id);h(a,()=>{k.success(s("users.cancel_2fa_success")),o()})},get children(){return s("users.cancel_2fa")}}),e(R,{get when(){return r.role==0},get children(){return e(K,{get name(){return r.username},get loading(){return v()===r.id},onClick:async()=>{const a=await F(r.id);h(a,()=>{k.success(s("global.delete_success")),o()})}})}})]}})}})]}})})}})]}})}})]}})};export{Z as default};
