import{Q as v}from"./QImg.e4c24963.js";import{u as y,a as p,Q as x}from"./use-quasar.109d51f2.js";import{a as Q,Q as C}from"./QCard.dbe1f53f.js";import{f as $,a as _,c as g,h as P,j as V,g as H,s as U,K as k,_ as F,r as q,o as B,W as L,O as d,X as m,d as r,Q as u,F as M,$ as T,P as z,Z as l,V as h,U as N}from"./index.27cc6e91.js";import"./format.801e7424.js";import"./use-dark.17cdfac9.js";var S=$({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:c}){const{proxy:{$q:n}}=H(),e=_(U);_(k,()=>{console.error("QPage needs to be child of QPageContainer")});const i=g(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof o.styleFn=="function"){const t=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return o.styleFn(a,t)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":n.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":n.screen.height-a+"px"}}),s=g(()=>`q-page ${o.padding===!0?" q-layout-padding":""}`);return()=>P("main",{class:s.value,style:i.value},V(c.default))}});const K={name:"UniName",props:{categoryId:String},setup(o){const c=y(),n=q(null);function e(){p.get(`/posts?categories=${o.categoryId}`).then(s=>{n.value=s.data}).catch(()=>{console.log("server error!")})}function i(s){p.get(`/comments?post=${s}`).then(a=>{a.data.forEach(function(t){c.notify(t.content.rendered)}),console.log(a.data)}).catch(()=>{console.log("server error!")})}return B(()=>{e()}),{data:n,loadData:e,getComments:i}}},j={class:"q-pa-md"},D={class:"card-content"},E=["innerHTML"],b=["innerHTML"],w={class:"text-caption text-grey"};function O(o,c,n,e,i,s){const a=L("router-link");return d(),m("div",j,[r(S,null,{default:u(()=>[(d(!0),m(M,null,T(e.data,t=>(d(),z(C,{class:"mmt cardColor",key:t.id},{default:u(()=>[r(a,{to:`/post/${t.id}`},{default:u(()=>[r(Q,{horizontal:""},{default:u(()=>[r(v,{src:t.fimg_url},null,8,["src"]),l("div",D,[l("div",{innerHTML:t.title.rendered},null,8,E),l("div",{class:"text-caption text-grey",innerHTML:t.excerpt.rendered},null,8,b),l("div",w,[l("p",null,"\u0410\u0434\u0440\u0435\u0441: "+h(t.acf.\u0430\u0434\u0440\u0435\u0441),1)]),r(x,{modelValue:t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433,"onUpdate:modelValue":f=>t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433=f,max:5,size:"15px"},null,8,["modelValue","onUpdate:modelValue"]),N(" \xA0"+h(t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433),1)])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])}var J=F(K,[["render",O],["__scopeId","data-v-706f2a6e"]]);export{J as default};
