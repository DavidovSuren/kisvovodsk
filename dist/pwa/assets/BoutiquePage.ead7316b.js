import{Q as g}from"./QImg.d2de48cf.js";import{_,r as Q,o as h,V as i,W as d,X as c,a4 as x,a5 as y,d as t,a2 as v,a3 as m,a0 as B,Y as w,F as V}from"./index.ab538d42.js";import{Q as $}from"./QRating.1d5efdd4.js";import{Q as k,a as u}from"./QCard.2533ea21.js";import{Q as q}from"./QSeparator.5a93a18a.js";import{Q as C}from"./QPage.005bafa2.js";import{a as p}from"./axios.c5c52fdd.js";import{u as L}from"./use-quasar.3b204a90.js";import"./format.801e7424.js";import"./use-dark.00e15276.js";const M={name:"BoutiquePage",async mounted(){console.log(await this.$fetch.get_posts())},setup(){const o=L(),a=Q(null);function s(){p.get("/posts?categories=24").then(r=>{a.value=r.data}).catch(()=>{console.log("server error!")})}function n(r){p.get(`/comments?post=${r}`).then(l=>{l.data.forEach(function(e){o.notify(e.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return h(()=>{s()}),{data:a,loadData:s,getComments:n}}},P={class:"row no-wrap items-center"},S={class:"col text-h6 ellipsis"},b={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"};function D(o,a,s,n,r,l){return i(),d(C,null,{default:c(()=>[(i(!0),x(V,null,y(n.data,e=>(i(),d(k,{key:e.id,class:"my-card"},{default:c(()=>[t(g,{src:e.fimg_url},null,8,["src"]),t(u,null,{default:c(()=>[t(v,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),m("div",P,[m("div",S,B(e.title.rendered),1),m("div",b,[t(w,{name:"place"})])]),t($,{modelValue:o.stars,"onUpdate:modelValue":a[0]||(a[0]=f=>o.stars=f),max:5,size:"32px"},null,8,["modelValue"])]),_:2},1024),t(u,{innerHTML:e.content.rendered},null,8,["innerHTML"]),t(q)]),_:2},1024))),128))]),_:1})}var X=_(M,[["render",D]]);export{X as default};
