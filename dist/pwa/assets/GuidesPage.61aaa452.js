import{Q as g}from"./QImg.3681086f.js";import{_,r as Q,o as h,V as c,W as m,X as i,a4 as x,a5 as y,d as e,a2 as v,a3 as d,a0 as w,Y as V,F as $}from"./index.1a517530.js";import{Q as B,a as k,b as u}from"./QCard.a030d12c.js";import{Q as C}from"./QSeparator.338ee71c.js";import{Q as b}from"./QPage.1187f8cd.js";import{u as L,a as p}from"./use-quasar.95f0d917.js";import"./format.801e7424.js";import"./use-dark.2e525ed8.js";const M={name:"GuidesPage",async mounted(){console.log(await this.$fetch.get_posts())},setup(){const o=L(),a=Q(null);function r(){p.get("/posts").then(s=>{a.value=s.data}).catch(()=>{console.log("server error!")})}function n(s){p.get(`/comments?post=${s}`).then(l=>{l.data.forEach(function(t){o.notify(t.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return h(()=>{r()}),{data:a,loadData:r,getComments:n}}},P={class:"row no-wrap items-center"},S={class:"col text-h6 ellipsis"},q={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"};function D(o,a,r,n,s,l){return c(),m(b,null,{default:i(()=>[(c(!0),x($,null,y(n.data,t=>(c(),m(B,{key:t.id,class:"my-card"},{default:i(()=>[e(g,{src:t.fimg_url},null,8,["src"]),e(u,null,{default:i(()=>[e(v,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),d("div",P,[d("div",S,w(t.title.rendered),1),d("div",q,[e(V,{name:"place"})])]),e(k,{modelValue:o.stars,"onUpdate:modelValue":a[0]||(a[0]=f=>o.stars=f),max:5,size:"32px"},null,8,["modelValue"])]),_:2},1024),e(u,{innerHTML:t.content.rendered},null,8,["innerHTML"]),e(C)]),_:2},1024))),128))]),_:1})}var R=_(M,[["render",D]]);export{R as default};
