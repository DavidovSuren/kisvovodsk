import{Q as g}from"./QImg.d2de48cf.js";import{_,r as Q,o as h,V as c,W as d,X as i,a4 as x,a5 as y,d as t,a2 as V,a3 as m,a0 as v,Y as w,F as $}from"./index.ab538d42.js";import{Q as B}from"./QRating.1d5efdd4.js";import{Q as k,a as p}from"./QCard.2533ea21.js";import{Q as C}from"./QSeparator.5a93a18a.js";import{Q as L}from"./QPage.005bafa2.js";import{a as u}from"./axios.c5c52fdd.js";import{u as M}from"./use-quasar.3b204a90.js";import"./format.801e7424.js";import"./use-dark.00e15276.js";const P={name:"VanPage",async mounted(){console.log(await this.$fetch.get_posts())},setup(){const o=M(),a=Q(null);function s(){u.get("/posts?categories=10").then(r=>{a.value=r.data}).catch(()=>{console.log("server error!")})}function n(r){u.get(`/comments?post=${r}`).then(l=>{l.data.forEach(function(e){o.notify(e.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return h(()=>{s()}),{data:a,loadData:s,getComments:n}}},S={class:"row no-wrap items-center"},b={class:"col text-h6 ellipsis"},q={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"};function D(o,a,s,n,r,l){return c(),d(L,null,{default:i(()=>[(c(!0),x($,null,y(n.data,e=>(c(),d(k,{key:e.id,class:"my-card"},{default:i(()=>[t(g,{src:e.fimg_url},null,8,["src"]),t(p,null,{default:i(()=>[t(V,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),m("div",S,[m("div",b,v(e.title.rendered),1),m("div",q,[t(w,{name:"place"})])]),t(B,{modelValue:o.stars,"onUpdate:modelValue":a[0]||(a[0]=f=>o.stars=f),max:5,size:"32px"},null,8,["modelValue"])]),_:2},1024),t(p,{innerHTML:e.content.rendered},null,8,["innerHTML"]),t(C)]),_:2},1024))),128))]),_:1})}var X=_(P,[["render",D]]);export{X as default};
