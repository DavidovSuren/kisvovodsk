import{Q as v}from"./QImg.75ce1a4f.js";import{a as p,Q as y}from"./axios.56daa46f.js";import{Q as x}from"./QCardSection.9aaac2a4.js";import{Q}from"./QCard.625007d4.js";import{f as C,a as _,c as m,h as $,j as H,g as P,s as U,I as V,_ as k,r as F,o as M,U as q,M as d,X as g,d as r,O as u,F as B,Y as L,N,W as i,S as h,R as S}from"./index.b20cc2a3.js";import{u as T}from"./use-quasar.cdb71aae.js";import"./use-ratio.772969c2.js";import"./use-form.73ab5637.js";import"./format.573576cb.js";import"./use-dark.25dbf1ba.js";var z=C({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:l}){const{proxy:{$q:o}}=P(),e=_(U);_(V,()=>{console.error("QPage needs to be child of QPageContainer")});const c=m(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const t=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,t)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),s=m(()=>`q-page ${n.padding===!0?" q-layout-padding":""}`);return()=>$("main",{class:s.value,style:c.value},H(l.default))}});const j={name:"UniName",props:{categoryId:String},setup(n){const l=T(),o=F(null);function e(){p.get(`/posts?categories=${n.categoryId}`).then(s=>{o.value=s.data}).catch(()=>{console.log("server error!")})}function c(s){p.get(`/comments?post=${s}`).then(a=>{a.data.forEach(function(t){l.notify(t.content.rendered)}),console.log(a.data)}).catch(()=>{console.log("server error!")})}return M(()=>{e()}),{data:o,loadData:e,getComments:c}}},D={class:"q-pa-md"},E={class:"card-content"},K=["innerHTML"],R=["innerHTML"],b={class:"text-caption text-grey"};function w(n,l,o,e,c,s){const a=q("router-link");return d(),g("div",D,[r(z,null,{default:u(()=>[(d(!0),g(B,null,L(e.data,t=>(d(),N(Q,{class:"mmt cardColor",key:t.id},{default:u(()=>[r(a,{to:`/post/${t.id}`},{default:u(()=>[r(x,{horizontal:""},{default:u(()=>[r(v,{src:t.fimg_url},null,8,["src"]),i("div",E,[i("div",{innerHTML:t.title.rendered},null,8,K),i("div",{class:"text-caption text-grey",innerHTML:t.excerpt.rendered},null,8,R),i("div",b,[i("p",null,"\u0410\u0434\u0440\u0435\u0441: "+h(t.acf.\u0430\u0434\u0440\u0435\u0441),1)]),r(y,{modelValue:t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433,"onUpdate:modelValue":f=>t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433=f,max:5,size:"15px"},null,8,["modelValue","onUpdate:modelValue"]),S(" \xA0"+h(t.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433),1)])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])}var te=k(j,[["render",w],["__scopeId","data-v-706f2a6e"]]);export{te as default};
