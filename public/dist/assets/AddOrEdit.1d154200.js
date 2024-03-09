import{a as f,b as x,c3 as C,aS as g,b5 as _,e,a3 as S,bL as I,bw as s,ad as i,bj as c,c1 as o,I as F,bM as G,E as T,B as h,b6 as m,n as v,a7 as z}from"./index.0f128fa7.js";import{a as B}from"./FolderTree.b23f4d91.js";import{U as L,a as U}from"./user_group.fea77ba8.js";import"./index.36085931.js";const E=t=>{const u=f();return e(s,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(c,{mb:"0",get children(){return u(`users.permissions.${t.name}`)}}),e(o,{get checked(){return t.can},onChange:()=>t.onChange(!t.can)})]}})},R=()=>{const t=f(),{params:u,back:d}=x(),{id:l}=u,[n,a]=C({id:0,user_group_name:"",ugn_apply_to_all:!1,size:0,base_path:"/",bp_apply_to_all:!1,permission:0,pms_apply_to_all:!1,disabled:!1}),[b,y]=g(()=>_.get(`/admin/user_group/get?id=${l}`));l&&(async()=>{const r=await y();m(r,a)})();const[$,w]=g(()=>_.post(`/admin/user_group/${l?"update":"create"}`,n));return e(z,{get loading(){return b()},get children(){return e(S,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(I,{get children(){return t(`global.${l?"edit":"add"}`)}}),e(s,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(i,{spacing:"$3",get children(){return[e(c,{for:"user_group_name",display:"flex",alignItems:"center",get children(){return t("users.user_group_name")}}),e(s,{w:"fit-content",display:"flex",get children(){return e(o,{css:{whiteSpace:"nowrap"},id:"ugn_apply_to_all",onChange:r=>a("ugn_apply_to_all",r.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.ugn_apply_to_all},marginBottom:"$1",get children(){return t("users.apply_to_all")}})}})]}}),e(F,{id:"user_group_name",get value(){return n.user_group_name},onInput:r=>a("user_group_name",r.currentTarget.value)})]}}),e(s,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(i,{spacing:"$3",get children(){return[e(c,{for:"base_path",display:"flex",alignItems:"center",get children(){return t("users.base_path")}}),e(s,{w:"fit-content",display:"flex",get children(){return e(o,{css:{whiteSpace:"nowrap"},id:"bp_apply_to_all",onChange:r=>a("bp_apply_to_all",r.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.bp_apply_to_all},marginBottom:"$1",get children(){return t("users.apply_to_all")}})}})]}}),e(B,{id:"base_path",get value(){return n.base_path},onChange:r=>a("base_path",r),onlyFolder:!0})]}}),e(s,{w:"$full",get children(){return[e(i,{spacing:"3.2rem",get children(){return[e(c,{display:"flex",alignItems:"center",get children(){return t("users.permission")}}),e(s,{w:"fit-content",display:"flex",get children(){return e(o,{css:{whiteSpace:"nowrap"},id:"pms_apply_to_all",onChange:r=>a("pms_apply_to_all",r.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.pms_apply_to_all},marginBottom:"$1",get children(){return t("users.apply_to_all")}})}})]}}),e(G,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(T,{each:L,children:(r,p)=>e(E,{name:r,get can(){return U.can(n.permission,p())},onChange:k=>{k?a("permission",n.permission|=1<<p()):a("permission",n.permission&=~(1<<p()))}})})}})]}}),e(s,{w:"fit-content",display:"flex",get children(){return e(o,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:r=>a("disabled",r.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.disabled},get children(){return t("users.disabled")}})}}),e(i,{spacing:"$2",get children(){return[e(h,{colorScheme:"accent",get loading(){return $()},onClick:async()=>{const r=await w();m(r,()=>{v.success(t("global.save_success")),d()})},get children(){return t(`global.${l?"save":"add"}`)}}),e(h,{onClick:async()=>{d()},get children(){return t("global.back")}})]}})]}})}})};export{R as default};