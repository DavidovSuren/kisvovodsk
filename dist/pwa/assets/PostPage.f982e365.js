import{Q as u}from"./QPage.01c4b452.js";import{ae as d,r as t,o as i,V as p,W as _,X as f,a4 as r,a0 as s,$ as m}from"./index.4d175518.js";import{a as v}from"./axios.c5c52fdd.js";const h=["innerHTML"],V={__name:"PostPage",setup(g){const l=d().params.id,a=t(null),o=t(null),n=t(null);function c(){v.get(`/posts/${l}`).then(e=>{a.value=e.data.title.rendered,n.value=e.data.content.rendered,o.value=e.data.acf.\u0430\u0434\u0440\u0435\u0441}).catch(()=>{console.log("server error!")})}return i(()=>{c()}),(e,B)=>(p(),_(u,null,{default:f(()=>[r("h1",null,s(a.value),1),m(" "+s(o.value)+" ",1),r("div",{innerHTML:n.value},null,8,h)]),_:1}))}};export{V as default};