import{Q as g}from"./QImg.e69abd5a.js";import{_,r as h,o as Q,V as c,W as m,X as i,a4 as x,a5 as y,d as e,a2 as v,a3 as d,a0 as w,Y as V,F as $}from"./index.00680462.js";import{Q as B,a as k,b as p}from"./QCard.c0da39cf.js";import{Q as C}from"./QSeparator.f58006d5.js";import{Q as F}from"./QPage.ad50558c.js";import{u as b,a as u}from"./use-quasar.46c873a0.js";import"./format.801e7424.js";import"./use-dark.e80f9a0b.js";const L={name:"FashionPage",async mounted(){console.log(await this.$fetch.get_posts())},setup(){const o=b(),a=h(null);function r(){u.get("/posts").then(s=>{a.value=s.data}).catch(()=>{console.log("server error!")})}function n(s){u.get(`/comments?post=${s}`).then(l=>{l.data.forEach(function(t){o.notify(t.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return Q(()=>{r()}),{data:a,loadData:r,getComments:n}}},M={class:"row no-wrap items-center"},P={class:"col text-h6 ellipsis"},S={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"};function q(o,a,r,n,s,l){return c(),m(F,null,{default:i(()=>[(c(!0),x($,null,y(n.data,t=>(c(),m(B,{key:t.id,class:"my-card"},{default:i(()=>[e(g,{src:t.fimg_url},null,8,["src"]),e(p,null,{default:i(()=>[e(v,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),d("div",M,[d("div",P,w(t.title.rendered),1),d("div",S,[e(V,{name:"place"})])]),e(k,{modelValue:o.stars,"onUpdate:modelValue":a[0]||(a[0]=f=>o.stars=f),max:5,size:"32px"},null,8,["modelValue"])]),_:2},1024),e(p,{innerHTML:t.content.rendered},null,8,["innerHTML"]),e(C)]),_:2},1024))),128))]),_:1})}var U=_(L,[["render",q]]);export{U as default};
