import{b as v,aR as c,b4 as u,a as w,k as i,e as t,S as x,a3 as I,bI as g,ap as S,at as k,b0 as T,ai as _,I as $,B as C,a7 as R,ae as d,n as D,b5 as F,aT as L,ct as M}from"./index.3557a6ed.js";const A=()=>{const{back:n}=v(),[l,p]=c(()=>u.post("/auth/2fa/generate")),a=w(),[r,h]=i(),f=async()=>{if(d().otp){D.warning(a("users.2fa_already_enabled")),n();return}const e=await p();F(e,h)},[s,y]=i("");f();const[m,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();L(e,()=>{M({...d(),otp:!0}),n()})};return t(R,{get loading(){return l()},get children(){return t(x,{get when(){return r()},get children(){return t(I,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t(S,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[k(()=>a("users.or_manual")),":"," ",t(T,{get color(){return _()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t($,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(C,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{A as default};
