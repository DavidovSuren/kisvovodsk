import{Q as g}from"./QImg.5cb76145.js";import{_,r as Q,o as h,V as c,W as m,X as i,a4 as x,a5 as y,d as e,a2 as v,a3 as d,a0 as w,Y as V,F as $}from"./index.1220f4f7.js";import{Q as B,a as k,b as p}from"./QCard.97f7e2c2.js";import{Q as C}from"./QSeparator.c115b1ef.js";import{Q as F}from"./QPage.67623948.js";import{u as b,a as u}from"./use-quasar.4c9ec8c7.js";import"./format.801e7424.js";import"./use-dark.698d8ad9.js";const L={name:"FitnessPage",async mounted(){console.log(await this.$fetch.get_posts())},setup(){const s=b(),a=Q(null);function r(){u.get("/posts").then(o=>{a.value=o.data}).catch(()=>{console.log("server error!")})}function n(o){u.get(`/comments?post=${o}`).then(l=>{l.data.forEach(function(t){s.notify(t.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return h(()=>{r()}),{data:a,loadData:r,getComments:n}}},M={class:"row no-wrap items-center"},P={class:"col text-h6 ellipsis"},S={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"};function q(s,a,r,n,o,l){return c(),m(F,null,{default:i(()=>[(c(!0),x($,null,y(n.data,t=>(c(),m(B,{key:t.id,class:"my-card"},{default:i(()=>[e(g,{src:t.fimg_url},null,8,["src"]),e(p,null,{default:i(()=>[e(v,{fab:"",color:"primary",icon:"place",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),d("div",M,[d("div",P,w(t.title.rendered),1),d("div",S,[e(V,{name:"place"})])]),e(k,{modelValue:s.stars,"onUpdate:modelValue":a[0]||(a[0]=f=>s.stars=f),max:5,size:"32px"},null,8,["modelValue"])]),_:2},1024),e(p,{innerHTML:t.content.rendered},null,8,["innerHTML"]),e(C)]),_:2},1024))),128))]),_:1})}var U=_(L,[["render",q]]);export{U as default};
