import{Q as g}from"./QImg.cb84a19c.js";import{_,r as Q,o as h,V as c,W as m,X as i,a4 as x,a5 as y,d as e,a2 as v,a3 as d,a0 as w,Y as C,F as V}from"./index.441507e1.js";import{Q as $,a as B,b as p}from"./QCard.00dad096.js";import{Q as k}from"./QSeparator.331e22a3.js";import{Q as b}from"./QPage.38ee9553.js";import{u as L,a as u}from"./use-quasar.27577fa2.js";import"./format.801e7424.js";import"./use-dark.ad29e03f.js";const M={name:"CanteenPage",async mounted(){console.log(await this.$fetch.get_posts())},setup(){const o=L(),a=Q(null);function r(){u.get("/posts").then(s=>{a.value=s.data}).catch(()=>{console.log("server error!")})}function n(s){u.get(`/comments?post=${s}`).then(l=>{l.data.forEach(function(t){o.notify(t.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return h(()=>{r()}),{data:a,loadData:r,getComments:n}}},P={class:"row no-wrap items-center"},S={class:"col text-h6 ellipsis"},q={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"};function D(o,a,r,n,s,l){return c(),m(b,null,{default:i(()=>[(c(!0),x(V,null,y(n.data,t=>(c(),m($,{key:t.id,class:"my-card"},{default:i(()=>[e(g,{src:t.fimg_url},null,8,["src"]),e(p,null,{default:i(()=>[e(v,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),d("div",P,[d("div",S,w(t.title.rendered),1),d("div",q,[e(C,{name:"place"})])]),e(B,{modelValue:o.stars,"onUpdate:modelValue":a[0]||(a[0]=f=>o.stars=f),max:5,size:"32px"},null,8,["modelValue"])]),_:2},1024),e(p,{innerHTML:t.content.rendered},null,8,["innerHTML"]),e(k)]),_:2},1024))),128))]),_:1})}var U=_(M,[["render",D]]);export{U as default};
