import{Q as r,a as w}from"./QCard.1b66dd12.js";import{Q as V}from"./QSeparator.c6012145.js";import{Q as $,a as C}from"./QCarousel.56e2a166.js";import{u as P,Q as S,a as m}from"./use-quasar.7674f6aa.js";import{ae as k,r as n,o as B,Q as _,R as g,S as t,d as l,a0 as o,X as f,W as L,Z as M,a1 as N,F as T}from"./index.aee0458e.js";import"./use-dark.0c251164.js";import"./selection.c20c9e22.js";const b={class:"text-h6"},q=["href"],E={class:"text-h6"},F=["href"],H=["innerHTML"],I={__name:"PostPage",setup(R){const Q=P(),d=k().params.id,h=n(null),u=n(null),c=n(null),i=n(null),x=/( |<([^>]+)>)/ig,p=n([]),v=n("style");function y(){m.get(`/posts/${d}`).then(e=>{h.value=e.data.title.rendered,i.value=e.data.content.rendered,u.value=e.data.acf.\u0430\u0434\u0440\u0435\u0441,c.value=e.data.acf.\u0442\u0435\u043B\u0435\u0444\u043E\u043D,i.value=e.data.acf.card_content}).catch(e=>{console.log(e)}),m.get(`/media?parent=${d}`).then(e=>{p.value=e.data}).catch(e=>{console.log(e)}),m.get(`/comments?post=${d}`).then(e=>{function s(a){return a.replace(x," ")}e.data.forEach(a=>{Q.notify(s(a.content.rendered))})}).catch(e=>{console.log(e)})}return B(()=>{y()}),(e,s)=>(_(),g(S,null,{default:t(()=>[l(w,{flat:"",bordered:"",class:"my-card"},{default:t(()=>[l(r,null,{default:t(()=>[o("div",b,[o("h1",null,f(h.value),1)])]),_:1}),l(r,{class:"q-pt-none"},{default:t(()=>[L(f(u.value)+" ",1),o("div",null,[o("a",{href:`https://www.google.com/maps/dir//${u.value}`},"\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442",8,q)])]),_:1}),l(r,null,{default:t(()=>[o("div",E,[o("a",{href:`tel:${c.value}`},f(c.value),9,F)])]),_:1}),l(V,{inset:""}),l($,{autoplay:"",swipeable:"",animated:"",modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=a=>v.value=a),arrows:"",infinite:"",height:"500px",class:"shadow-3"},{default:t(()=>[(_(!0),M(T,null,N(p.value,a=>(_(),g(C,{key:a.id,name:a.id,"img-src":a.guid.rendered},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"]),l(r,null,{default:t(()=>[o("div",{innerHTML:i.value},null,8,H)]),_:1})]),_:1})]),_:1}))}};export{I as default};
