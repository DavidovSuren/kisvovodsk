import{Q as f}from"./QImg.d2de48cf.js";import{Q as x}from"./QRating.1d5efdd4.js";import{a as h,Q as v}from"./QCard.2533ea21.js";import{Q}from"./QPage.005bafa2.js";import{a as _}from"./axios.c5c52fdd.js";import{u as V}from"./use-quasar.3b204a90.js";import{_ as q,r as y,o as $,a1 as k,V as m,a4 as u,d as e,X as n,F as C,a5 as B,W as N,a3 as a,a0 as p,$ as S}from"./index.ab538d42.js";import"./format.801e7424.js";import"./use-dark.00e15276.js";const w={name:"CafeName",setup(){const d=V(),r=y(null);function s(){_.get("/posts?categories=23").then(o=>{r.value=o.data}).catch(()=>{console.log("server error!")})}function i(o){_.get(`/comments?post=${o}`).then(l=>{l.data.forEach(function(c){d.notify(c.content.rendered)}),console.log(l.data)}).catch(()=>{console.log("server error!")})}return $(()=>{s()}),{data:r,loadData:s,getComments:i}}},z={class:"q-pa-md"},L={class:"card-content"},M=["innerHTML"],P={class:"text-caption text-grey"};function T(d,r,s,i,o,l){const c=k("router-link");return m(),u("div",z,[e(Q,{class:""},{default:n(()=>[(m(!0),u(C,null,B(i.data,t=>(m(),N(v,{class:"mmt",key:t.id},{default:n(()=>[e(c,{to:`/post/${t.id}`},{default:n(()=>[e(h,{horizontal:""},{default:n(()=>[e(f,{src:t.fimg_url},null,8,["src"]),a("div",L,[a("div",null,p(t.title.rendered),1),a("div",{class:"text-caption text-grey",innerHTML:t.excerpt.rendered},null,8,M),a("div",P,[a("p",null,"\u0410\u0434\u0440\u0435\u0441: "+p(t.acf.\u0430\u0434\u0440\u0435\u0441),1)]),e(x,{modelValue:t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433,"onUpdate:modelValue":g=>t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433=g,max:5,size:"15px"},null,8,["modelValue","onUpdate:modelValue"]),S(" \xA0"+p(t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433),1)])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])}var j=q(w,[["render",T]]);export{j as default};
