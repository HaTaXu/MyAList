import{aE as C,a as f,e,I as O,S as g,B as c,ab as b,M as m,x as $,b8 as T,y as k,z as x,A as F,C as v,k as i,a6 as w,bD as z,aR as D,bE as E,_ as V,bF as A,ai as h,as as H,b0 as P,K as G,at as J,bx as K,a3 as N,E as X,p as j,bG as p,b5 as q}from"./index.59c56048.js";import{e as L}from"./index.96977aab.js";const M=p(),S=t=>{const[r,a]=i("/");return e(w,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(M.Provider,{get value(){var o;return{value:r,onChange:n=>{a(n),t.onChange(n)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(y,{path:"/"})}})}})},y=t=>{const[r,a]=i([]),{value:o,onChange:n,forceRoot:l}=z(M),[_,B]=D(()=>E(t.path,V(),l)),R=async()=>{if(r().length>0)return;const u=await B();q(u,a)},{isOpen:s,onToggle:I}=C(),d=()=>o()===t.path;return e(w,{get children(){return[e(b,{spacing:"$2",get children(){return[e(g,{get when(){return!_()},get fallback(){return e(A,{size:"sm",get color(){return h()}})},get children(){return e(H,{get color(){return h()},as:L,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{I(),s()&&R()}})}}),e(P,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":G()}},onClick:()=>{n(t.path)},get children(){return J(()=>t.path==="/",!0)()?"root":K(t.path)}})]}}),e(g,{get when(){return s()},get children(){return e(N,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(X,{get each(){return r()},children:u=>e(y,{get path(){return j(t.path,u.name)}})})}})}})]}})},W=t=>{var n;const r=f(),[a,o]=i((n=t.defaultValue)!=null?n:"");return e(v,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(m,{}),e($,{get children(){return[e(k,{get children(){return r("home.toolbar.choose_dst_folder")}}),e(x,{get children(){return e(S,{onChange:o})}}),e(F,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return r("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return r("global.ok")}})]}})]}})]}})},Y=t=>{const{isOpen:r,onOpen:a,onClose:o}=C(),n=f();return[e(b,{w:"$full",spacing:"$2",get children(){return[e(O,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return n(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(g,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return n("global.choose")}})}})]}}),e(v,{size:"xl",get opened(){return r()},onClose:o,get children(){return[e(m,{}),e($,{get children(){return[e(T,{}),e(k,{get children(){return n("global.choose_folder")}}),e(x,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(F,{get children(){return e(c,{onClick:o,get children(){return n("global.confirm")}})}})]}})]}})]};export{Y as F,W as M};