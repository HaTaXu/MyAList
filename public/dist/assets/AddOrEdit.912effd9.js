import{a as q,b as ee,aR as x,b4 as y,k as d,c0 as re,e,a3 as te,bI as se,S as f,ad as U,bu as c,bi as p,I as G,a7 as T,ab as k,at as C,as as I,bk as ne,bl as ae,aF as j,B as S,bp as oe,bq as ie,br as D,E as J,bs as le,bt as ce,bJ as ue,aA as de,b_ as O,b5 as v,n as pe,af as L}from"./index.9e7fda1e.js";import{G as ge,H as he,I as me}from"./index.b7e62051.js";import{F as fe}from"./FolderTree.651d9762.js";import{a as _e}from"./user_group.fea77ba8.js";import"./index.5b454a97.js";const M=L('<input type="password" hidden autocomplete="new-password">'),be=L('<span class="hope-select__placeholder hope-c-gYjErV hope-c-cNask hope-c-PJLV hope-c-PJLV-ijhzIfm-css"></span>'),we=L('<div class="hope-select__value hope-c-gYjErV hope-c-PJLV hope-c-PJLV-ijhzIfm-css"></div>'),$e=t=>{const _=q();return e(c,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(p,{mb:"0",get children(){return _(`users.permissions.${t.name}`)}}),e(O,{get checked(){return t.can},onChange:()=>t.onChange(!t.can)})]}})},Le=()=>{const t=q(),{params:_,back:P}=ee(),{id:g}=_,[R,z]=x(()=>y.get("/admin/user_group/list")),[i,A]=d([]),[Y,H]=d([]),N=[],E=new Map([]),V=new Map([]);(async()=>{const r=await z();v(r,s=>A(s.content));for(let s=0;s<i().length;s++)N.push(i()[s].user_group_name),E.set(i()[s].user_group_name,i()[s].base_path),V.set(i()[s].user_group_name,i()[s].permission);H(N)})();const[u,b]=d(""),[n,a]=re({id:0,username:"",password:"",user_group:"",base_path:"/",role:0,permission:0,disabled:!1,sso_id:""}),[w,$]=d(""),[h,m]=d(0),[X,K]=x(()=>y.get(`/admin/user/get?id=${g}`));g&&(async()=>{const r=await K();v(r,a),b(n.user_group),$(n.base_path),m(n.permission)})();const[Q,W]=x(()=>y.post(`/admin/user/${g?"update":"create"}`,n)),[B,F]=d("false");return e(T,{get loading(){return X()},get children(){return e(te,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(se,{get children(){return t(`global.${g?"edit":"add"}`)}}),e(f,{get when(){return!U.is_guest(n)},get children(){return[e(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(p,{for:"username",display:"flex",alignItems:"center",get children(){return t("users.username")}}),M.cloneNode(!0),e(G,{id:"username",get value(){return n.username},onInput:r=>a("username",r.currentTarget.value)})]}}),e(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(p,{for:"password",display:"flex",alignItems:"center",get children(){return t("users.password")}}),M.cloneNode(!0),e(G,{id:"password",type:"password",placeholder:"********",get value(){return n.password},onInput:r=>a("password",r.currentTarget.value)})]}})]}}),e(f,{get when(){return!U.is_admin(n)},get children(){return[e(T,{get loading(){return R()},get children(){return e(c,{w:"$full",display:"flex",flexDirection:"column",get children(){return[e(p,{for:"user_group",get children(){return e(k,{spacing:"$2",get children(){return[C(()=>t("users.select_user_group")),e(f,{get when(){return C(()=>u()!="",!0)()&&!Y().includes(u())},get children(){return e(k,{color:"$danger9",spacing:"$1",get children(){return[e(I,{as:ge}),C(()=>t("users.user_group_not_exist"))]}})}})]}})}}),e(ne,{id:"user_group",onChange:function(r){b(r),a("user_group",u);const s=E.get(u()),o=V.get(u());s!=null&&o!=null&&($(s),m(o),a("base_path",w),a("permission",h))},get children(){return[e(ae,{css:{".hope-c-gYjErV":{flexGrow:"1",flexShrink:"1",textAlign:"start",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},".hope-c-cNask":{color:"var(--hope-colors-neutral9)",opacity:"1"}},get children(){return[e(f,{get when(){return n.user_group==""},get fallback(){return(()=>{const r=we.cloneNode(!0);return j(r,()=>n.user_group),r})()},get children(){const r=be.cloneNode(!0);return j(r,()=>t("global.choose")),r}}),e(S,{height:"1.4em",width:"1.4em",borderRadius:"0.7em",paddingLeft:"0",paddingRight:"0",colorScheme:"neutral",onMouseEnter:()=>F("true"),onMouseLeave:()=>F("false"),onClick:function(r){r.stopPropagation(),b(""),$("/"),m(0),a("user_group",u),a("base_path",w),a("permission",h);const s=document.getElementById("user_group-trigger"),o=s.firstChild;if(o!=null&&o.nodeName=="DIV"){const l=document.createElement("span"),Z=document.createTextNode("\u9009\u62E9");l.setAttribute("class","hope-select__placeholder hope-c-gYjErV hope-c-cNask hope-c-PJLV hope-c-PJLV-ijhzIfm-css"),l.appendChild(Z),s.replaceChild(l,o)}},css:{".display":{display:"none"}},get children(){return[e(I,{get classList(){return{display:B()==="true"}},height:"1.4em",width:"1.4em",as:he}),e(I,{get classList(){return{display:B()==="false"}},height:"1.4em",width:"1.4em",as:me})]}})]}}),e(oe,{get children(){return e(ie,{get children(){return[e(D,{get value(){return n.user_group},display:"none",get children(){return t(n.user_group)}}),e(J,{get each(){return i()},children:r=>e(D,{get value(){return r.user_group_name},get disabled(){return r.disabled},get children(){return[e(le,{get children(){return t(r.user_group_name)}}),e(ce,{})]}})})]}})}})]}})]}})}}),e(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(p,{for:"base_path",display:"flex",alignItems:"center",get children(){return t("users.base_path")}}),e(fe,{id:"base_path",get value(){return w()},onChange:r=>a("base_path",r),onlyFolder:!0})]}}),e(c,{w:"$full",required:!0,get children(){return[e(p,{display:"flex",alignItems:"center",get children(){return t("users.permission")}}),e(ue,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(J,{each:de,children:(r,s)=>e($e,{name:r,get can(){return _e.can(h(),s())},onChange:o=>{let l=h();o?l|=1<<s():l&=~(1<<s()),m(l),a("permission",h)}})})}})]}}),e(c,{w:"fit-content",display:"flex",get children(){return e(O,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:r=>a("disabled",r.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.disabled},get children(){return t("users.disabled")}})}})]}}),e(k,{spacing:"$2",get children(){return[e(S,{colorScheme:"accent",get loading(){return Q()},onClick:async()=>{const r=await W();v(r,()=>{pe.success(t("global.save_success")),P()})},get children(){return t(`global.${g?"save":"add"}`)}}),e(S,{onClick:async()=>{P()},get children(){return t("global.back")}})]}})]}})}})};export{Le as default};
