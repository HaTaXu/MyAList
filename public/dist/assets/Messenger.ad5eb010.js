import{e,bI as i,ap as w,a as y,n as R,k as b,aR as r,b4 as c,c0 as k,d as C,a3 as o,E as T,am as x,D as B,I as D,ab as F,B as g,bB as H,cQ as L,aT as N}from"./index.40209596.js";const W=n=>e(i,{get children(){return n.content}}),z=n=>e(w,{get src(){return n.content}}),E={string:W,image:z},P=()=>{const n=y();R.info(n("manage.messenger-tips"));const[a,l]=b(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=k([]),s=async()=>{const t=await u();H(t,f=>{S(L($=>$.push(f)))})},I=async()=>{const t=await m();N(t)},v=setInterval(s,1e3);return C(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(T,{each:h,children:t=>e(x,B({get component(){return E[t.type]}},t))})]}}),e(D,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:I,get children(){return n("manage.send")}})]}})]}})};export{P as Messenger,E as Shower,P as default};
