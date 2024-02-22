import{a as N,aR as p,b4 as i,k as m,e,cs as L,a3 as W,bI as v,B as o,b5 as x,n as c,S as u,b as re,ae as n,ct as b,d as te,ad as g,aD as $,cu as ne,cv as se,cw as ae,cx as ie,ab as h,b0 as R,cy as E,bu as S,bi as C,I,F as U,at as A,a7 as oe,E as M,bB as D,aA as ce,c1 as ue}from"./index.f43af9c9.js";import{o as le}from"./index.8ac80dfc.js";import{L as de}from"./index.439fb41c.js";import{s as H,c as ge,b as he}from"./webauthn-json.browser-ponyfill.1c672167.js";const pe=r=>{const w=N(),[l,d]=p(()=>i.post("/authn/delete_authn",{id:r.id})),[y,a]=m(!1);return e(u,{get when(){return!y()},get children(){return e(L,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(W,{w:"$full",alignItems:"start",spacing:"$1",get children(){return e(v,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+r.fingerprint+"	ID: "+r.id}})}}),e(L,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(o,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const k=await d();x(k,()=>{c.success(w("global.delete_success")),a(!0)})},get children(){return w("global.delete")}})}})]}})}})},me=r=>e(ue,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),$e=()=>{const r=N();le("manage.sidemenu.profile");const{searchParams:w,to:l}=re(),[d,y]=m(n().username),[a,k]=m(""),[B,J]=m(""),O=$("sso_compatibility_mode"),[F,j]=p(t=>i.post("/me/update",{username:t?n().username:d(),password:t?"":a(),sso_id:n().sso_id})),[q,G]=p(()=>i.get("/authn/getcredentials")),[,V]=p(()=>i.get("/authn/webauthn_begin_registration")),[X,z]=p((t,s)=>i.post("/authn/webauthn_finish_registration",JSON.stringify(s),{headers:{session:t}})),_=async t=>{if(a()&&a()!==B()){c.warning(r("users.confirm_password_not_same"));return}const s=await j(t);x(s,()=>{b({...n(),username:d()}),t?l(""):(c.success(r("users.update_profile_success")),l(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})},P=w.sso_id;P&&(b({...n(),sso_id:P}),_(!0));function T(t){const s=t.data;s.sso_id&&(b({...n(),sso_id:s.sso_id}),_(!0))}window.addEventListener("message",T),te(()=>{window.removeEventListener("message",T)});const[K,Q]=m([]),Y=async()=>{const t=await G();D(t,Q)};return H()&&!g.is_guest(n())&&$("webauthn_login_enabled")&&Y(),e(W,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!g.is_guest(n())},get fallback(){return[e(ne,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(se,{mr:"$2_5"}),e(ae,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(ie,{get children(){return r("users.modify_nothing")}})]}}),e(h,{spacing:"$2",get children(){return[e(R,{get children(){return r("global.have_account")}}),e(R,{color:"$info9",as:de,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(v,{get children(){return r("users.update_profile")}}),e(E,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(S,{get children(){return[e(C,{for:"username",get children(){return r("users.change_username")}}),e(I,{id:"username",get value(){return d()},onInput:t=>{y(t.currentTarget.value)}})]}})}}),e(E,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(S,{get children(){return[e(C,{for:"password",get children(){return r("users.change_password")}}),e(I,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:t=>{k(t.currentTarget.value)}}),e(U,{get children(){return r("users.change_password-tips")}})]}}),e(S,{get children(){return[e(C,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(I,{id:"confirm-password",type:"password",placeholder:"********",get value(){return B()},onInput:t=>{J(t.currentTarget.value)}}),e(U,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(h,{spacing:"$2",get children(){return[e(o,{get loading(){return F()},onClick:[_,!1],get children(){return r("global.save")}}),e(u,{get when(){return!n().otp},get children(){return e(o,{colorScheme:"accent",onClick:()=>{l("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(u,{get when(){return A(()=>!!$("sso_login_enabled"),!0)()&&!g.is_guest(n())},get children(){return[e(v,{get children(){return r("users.sso_login")}}),e(h,{spacing:"$2",get children(){return e(u,{get when(){return n().sso_id},get fallback(){return e(o,{onClick:()=>{const t=i.getUri()+"/auth/sso?method=get_sso_id";if(O){window.location.href=t;return}window.open(t,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(o,{colorScheme:"danger",get loading(){return F()},onClick:()=>{b({...n(),sso_id:""}),_(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(u,{get when(){return A(()=>!g.is_guest(n()),!0)()&&$("webauthn_login_enabled")},get children(){return[e(v,{get children(){return r("users.webauthn")}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(oe,{get loading(){return q()},get children(){return e(M,{get each(){return K()},children:t=>e(pe,{get id(){return t.id},get fingerprint(){return t.fingerprint}})})}})}}),e(o,{get loading(){return X()},onClick:async()=>{if(!H()){c.error(r("users.webauthn_not_supported"));return}const t=await V();D(t,async s=>{const Z=ge(s.options),ee=s.session;try{const f=await he(Z);x(await z(ee,f),()=>{c.success(r("users.add_webauthn_success"))})}catch(f){f instanceof Error&&c.error(f.message)}})},get children(){return r("users.add_webauthn")}})]}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(M,{each:ce,children:(t,s)=>e(me,{get can(){return g.can(n(),s())},get children(){return r(`users.permissions.${t}`)}})})}})]}})};export{$e as default};
