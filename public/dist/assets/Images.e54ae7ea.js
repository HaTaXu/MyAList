import{cz as p,e,ai as c,as as x,k as $,j as h,aG as k,a4 as I,a3 as b,r as _,aJ as C,cR as u,aw as v,S as o,b_ as y,aq as M,ar as S,aI as E,a as G,E as g,a0 as d,cr as L,l as m,bI as z,bJ as O}from"./index.59c56048.js";import{b as A}from"./Folder.84eeec3f.js";import{u as F}from"./index.92464de9.js";import{I as H}from"./ImageWithError.3322e31b.js";import{O as J,g as P}from"./icon.6577af6e.js";import{G as T}from"./GridItem.88692ca0.js";import"./Layout.85a7489f.js";import"./index.65b547cf.js";import"./index.96977aab.js";import"./FolderTree.b6f9763a.js";import"./video_box.a6c14928.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.e3ff6815.js";import"./index.e3bcca9a.js";const W=t=>{const{isHide:i}=p();if(i(t.obj)||t.obj.type!==J.IMAGE)return null;const{setPathAs:n}=F(),r=e(x,{get color(){return c()},boxSize:"$12",get as(){return P(t.obj)}}),[a,l]=$(!1),f=h(()=>k()&&(a()||t.obj.selected)),{show:w}=A({id:1}),{rawLink:j}=I();return e(E.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return e(b,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${c()}`}},onMouseEnter:()=>{l(!0),n(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:()=>{l(!1)},onContextMenu:s=>{_(()=>{C(!1),u(t.index,!0,!0)}),w(s,{props:t.obj})},get children(){return e(v,{w:"$full",pos:"relative",get children(){return[e(o,{get when(){return f()},get children(){return e(y,{pos:"absolute",left:"$1",top:"$1",get checked(){return t.obj.selected},onChange:s=>{u(t.index,s.target.checked)}})}}),e(H,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return e(M,{size:"lg"})},fallbackErr:r,get src(){return j(t.obj)},loading:"lazy",onClick:()=>{S.emit("gallery",t.obj.name)}})]}})}})}})},re=t=>{const i=G(),n=h(()=>e(L,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return e(g,{get each(){return d.objs.filter(r=>r.is_dir)},children:(r,a)=>e(T,{obj:r,get index(){return a()}})})}}));return e(b,{spacing:"$2",w:"$full",get children(){return[e(o,{get when(){return m.show_folder_in_image_view==="top"},get children(){return n()}}),e(o,{get when(){return t.images.length>0},get fallback(){return e(z,{m:"$2",get children(){return i("home.no_images")}})},get children(){return e(O,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return e(g,{get each(){return d.objs},children:(r,a)=>e(W,{obj:r,get index(){return a()}})})}})}}),e(o,{get when(){return m.show_folder_in_image_view==="bottom"},get children(){return n()}})]}})};export{re as default};
