import{Q as g}from"./QImg.3681086f.js";import{_,r as Q,o as h,V as c,W as m,X as i,a4 as x,a5 as y,d as e,a2 as v,a3 as d,a0 as k,Y as w,F as V}from"./index.1a517530.js";import{Q as $,a as B,b as p}from"./QCard.a030d12c.js";import{Q as P}from"./QSeparator.338ee71c.js";import{Q as C}from"./QPage.1187f8cd.js";import{u as b,a as u}from"./use-quasar.95f0d917.js";import"./format.801e7424.js";import"./use-dark.2e525ed8.js";const L={name:"ParkingPage",async mounted(){console.log(await this.$fetch.get_posts())},setup(){const o=b(),a=Q(null);function s(){u.get("/posts").then(r=>{a.value=r.data}).catch(()=>{console.log("server error!")})}function n(r){u.get(`/comments?post=${r}`).then(l=>{l.data.forEach(function(t){o.notify(t.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return h(()=>{s()}),{data:a,loadData:s,getComments:n}}},M={class:"row no-wrap items-center"},S={class:"col text-h6 ellipsis"},q={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"};function D(o,a,s,n,r,l){return c(),m(C,null,{default:i(()=>[(c(!0),x(V,null,y(n.data,t=>(c(),m($,{key:t.id,class:"my-card"},{default:i(()=>[e(g,{src:t.fimg_url},null,8,["src"]),e(p,null,{default:i(()=>[e(v,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),d("div",M,[d("div",S,k(t.title.rendered),1),d("div",q,[e(w,{name:"place"})])]),e(B,{modelValue:o.stars,"onUpdate:modelValue":a[0]||(a[0]=f=>o.stars=f),max:5,size:"32px"},null,8,["modelValue"])]),_:2},1024),e(p,{innerHTML:t.content.rendered},null,8,["innerHTML"]),e(P)]),_:2},1024))),128))]),_:1})}var U=_(L,[["render",D]]);export{U as default};
