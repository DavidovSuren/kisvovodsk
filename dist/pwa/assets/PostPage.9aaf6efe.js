import{Q as r,a as b}from"./QCard.163c72f0.js";import{Q}from"./QSeparator.f84feceb.js";import{Q as x,a as y}from"./QCarousel.857defe3.js";import{ae as C,r as l,o as V,V as d,W as h,X as t,d as e,a4 as o,a0 as u,$ as v,a2 as $,a5 as B,F as P,a3 as S}from"./index.a3a770e3.js";import{Q as N,a as f}from"./axios.b9c7701c.js";import"./use-dark.ed317950.js";import"./selection.7c4f02eb.js";const F={class:"text-h6"},j=["href"],q={class:"text-h6"},D=["href"],E=v("\u041D\u0410\u0417\u0410\u0414"),L={data(){},methods:{back(){this.$router.go(-1)}}},G=Object.assign(L,{__name:"PostPage",setup(M){const c=C().params.id,m=l(null),i=l(null),s=l(null),w=l(null),p=l([]),_=l("style");function k(){f.get(`/posts/${c}`).then(a=>{m.value=a.data.title.rendered,w.value=a.data.content.rendered,i.value=a.data.acf.\u0430\u0434\u0440\u0435\u0441,s.value=a.data.acf.\u0442\u0435\u043B\u0435\u0444\u043E\u043D}).catch(a=>{console.log(a)}),f.get(`/media?parent=${c}`).then(a=>{p.value=a.data}).catch(a=>{console.log(a)})}return V(()=>{k()}),(a,g)=>(d(),h(N,null,{default:t(()=>[e(b,{flat:"",bordered:"",class:"my-card"},{default:t(()=>[e(r,null,{default:t(()=>[o("div",F,[o("h1",null,u(m.value),1)])]),_:1}),e(r,{class:"q-pt-none"},{default:t(()=>[v(u(i.value)+" ",1),o("div",null,[o("a",{href:`https://www.google.com/maps/dir//${i.value}`},"\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442",8,j)])]),_:1}),e(r,null,{default:t(()=>[o("div",q,[o("a",{href:`tel:${s.value}`},u(s.value),9,D)])]),_:1}),e(Q,{inset:""}),e(x,{autoplay:"",swipeable:"",animated:"",modelValue:_.value,"onUpdate:modelValue":g[0]||(g[0]=n=>_.value=n),arrows:"",infinite:"",height:"500px",class:"shadow-3"},{default:t(()=>[(d(!0),$(P,null,B(p.value,n=>(d(),h(y,{key:n.id,name:n.id,"img-src":n.guid.rendered},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[o("div",null,[e(S,{"background-color":"white",onClick:a.back},{default:t(()=>[E]),_:1},8,["onClick"])])]),_:1})]),_:1}))}});export{G as default};
