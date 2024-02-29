import{a as h,e,W as G,ai as H,ab as o,b0 as v,c1 as V,at as W,a6 as x,a3 as D,cG as l,cD as p,b as B,aR as C,b4 as c,B as i,aT as j,b5 as u,n as L,k,j as A,bZ as E,S as P,bk as X,bl as Z,bm as q,bn as N,bo as z,bp as J,bq as K,E as d,br as Q,bs as U,bt as Y,cj as ee,Z as re,$ as _,cr as te,cB as ne,cC as ae,cE as y,cF as se}from"./index.59c56048.js";import{o as le}from"./index.65b547cf.js";import{D as oe}from"./DeletePopover.cabb465d.js";function O(r){const n=h(),{to:g}=B(),[b,m]=C(()=>c.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,a]=C(()=>c.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(i,{onClick:()=>{g(`/@manage/storages/edit/${r.storage.id}`)},get children(){return n("global.edit")}}),e(i,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await a();j(s,()=>{r.refresh()})},get children(){return n(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return b()},onClick:async()=>{const s=await m();u(s,()=>{L.success(n("global.delete_success")),r.refresh()})}})]}function ce(r){const n=h();return e(D,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return G("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${H()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(V,{colorScheme:"info",get children(){return n(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[W(()=>n("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(O,r)}})]}})}function ie(r){const n=h();return e(p,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return n(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(O,r)}})}})]}})}const be=()=>{const r=h();le("manage.sidemenu.storages");const{to:n}=B(),[g,b]=C(()=>c.get("/admin/storage/list")),[m,S]=k([]),a=async()=>{const t=await b();u(t,w=>S(w.content))},[s,M]=k([]),[$,I]=k([]);(async()=>{const t=await c.get("/admin/driver/names");u(t,w=>M(w))})(),a();const R=async()=>{const t=await c.post("/admin/storage/load_all");u(t,()=>{L.success(r("storages.other.start_load_success"))})},T=A(()=>m().filter(t=>$().length===0?!0:$().includes(t.driver))),[f,F]=E("storages-layout","grid");return e(D,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(i,{colorScheme:"accent",get loading(){return g()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{n("/@manage/storages/add")},get children(){return r("global.add")}}),e(i,{colorScheme:"warning",get loading(){return g()},onClick:R,get children(){return r("storages.other.load_all")}}),e(P,{get when(){return s().length>0},get children(){return e(X,{multiple:!0,get value(){return $()},onChange:I,get children(){return[e(Z,{get children(){return[e(q,{get children(){return r("storages.other.filter_by_driver")}}),e(N,{}),e(z,{})]}}),e(J,{get children(){return e(K,{get children(){return e(d,{get each(){return s()},children:t=>e(Q,{value:t,get children(){return[e(U,{get children(){return r(`drivers.drivers.${t}`)}}),e(Y,{})]}})})}})}})]}})}}),e(ee,{get checked(){return f()==="table"},onChange:t=>{F(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(_,{get when(){return f()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return T()},children:t=>e(ce,{storage:t,refresh:a})})}})}}),e(_,{get when(){return f()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ne,{highlightOnHover:!0,dense:!0,get children(){return[e(ae,{get children(){return e(p,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(y,{get children(){return r(`storages.common.${t}`)}})}),e(y,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return T()},children:t=>e(ie,{storage:t,refresh:a})})}})]}})}})}})]}})]}})};export{be as default};
