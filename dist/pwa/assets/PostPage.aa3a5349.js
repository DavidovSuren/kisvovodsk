import{Q as q,a as s}from"./QCard.c64905b0.js";import{Q as p}from"./QSeparator.16c9e8a6.js";import{Q as I,a as N}from"./QCarousel.6a657289.js";import{u as j,a as g,Q as D}from"./use-quasar.e94b5ee0.js";import{f as U,c as W,h as C,_ as A,ai as O,r as l,o as X,M as y,V as $,d as a,O as n,X as t,F as Y,Y as Z,S as c,W as r,E as G,Z as J,$ as K,R as ee,N as ae}from"./index.09a9b99b.js";import{Q as te,C as le}from"./ClosePopup.9112b99b.js";import{u as ne,a as oe}from"./use-ratio.c8c877e2.js";import"./use-dark.562001ce.js";import"./selection.4a6077ee.js";import"./use-form.edb5be42.js";import"./format.573576cb.js";import"./use-timeout.70a5d78d.js";import"./scroll.d60d7b3d.js";import"./use-model-toggle.95178c72.js";var se=U({name:"QVideo",props:{...ne,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(o){const h=oe(o),w=W(()=>"q-video"+(o.ratio!==void 0?" q-video--responsive":""));return()=>C("div",{class:w.value,style:h.value},[C("iframe",{src:o.src,title:o.title,fetchpriority:o.fetchpriority,loading:o.loading,referrerpolicy:o.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});const f=o=>(J("data-v-6968477e"),o=o(),K(),o),ie={class:"q-pa-md"},re=["innerHTML"],ue=["innerHTML"],ce={class:"pRating"},de=f(()=>t("p",{style:{"text-align":"center",margin:"0"}}," \u041C\u0435\u043D\u044E",-1)),pe=f(()=>t("h1",{class:"txtMenu"},"\u041C\u0435\u043D\u044E",-1)),fe={class:"txtMenu"},he={class:"pTime"},me={class:"pAdr"},_e={class:"pWay"},ve=["href"],ge={class:"pTel"},ye=ee(" \u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),we=["href"],xe=f(()=>t("h1",{class:"contentTitle"},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",-1)),be=["innerHTML"],Qe=f(()=>t("h1",{style:{"line-height":"2rem","padding-top":"40px","text-align":"center"}},"\u0412\u0438\u0434\u0435\u043E",-1)),Se={class:"row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap horisintal mmtt"},Me={__name:"PostPage",setup(o){const h=j(),m=O().params.id,x=l(null),_=l(null),d=l(null),b=l(null),v=l(null),Q=l(null),S=l(null),M=l(null),L=l(null),P=l(null),V=l(null),R=l(null),T=l(null),H=l(null),B=l(null),E=/( |<([^>]+)>)/ig,z=l([]),k=l("style");function F(){g.get(`/posts/${m}`).then(e=>{x.value=e.data.title.rendered,v.value=e.data.content.rendered,_.value=e.data.acf.\u0430\u0434\u0440\u0435\u0441,d.value=e.data.acf.\u0442\u0435\u043B\u0435\u0444\u043E\u043D,b.value=e.data.acf.\u0432\u0440\u0435\u043C\u044F_\u0440\u0430\u0431\u043E\u0442\u044B,v.value=e.data.acf.card_content,Q.value=e.data.acf.\u0440\u0435\u0439\u0442\u0438\u043D\u0433,S.value=e.data.excerpt.rendered,M.value=e.data.acf.\u0432\u0438\u0434\u0435\u043E,L.value=e.data.acf.\u043D\u043E\u043C\u0435\u0440_\u043F\u043E\u0437\u0438\u0446\u0438\u0438,P.value=e.data.acf.\u0438\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C,V.value=e.data.acf.\u0432\u043A,R.value=e.data.acf.\u041F\u043E\u0447\u0442\u0430,T.value=e.data.acf.\u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C,H.value=e.data.acf.whatsapp,B.value=e.data.acf.\u043D\u0430\u0433\u0440\u0430\u0434\u044B}).catch(e=>{console.log(e)}),g.get(`/media?parent=${m}`).then(e=>{z.value=e.data}).catch(e=>{console.log(e)}),g.get(`/comments?post=${m}`).then(e=>{function u(i){return i.replace(E," ")}e.data.forEach(i=>{h.notify(u(i.content.rendered))})}).catch(e=>{console.log(e)})}return X(()=>{F()}),(e,u)=>(y(),$("div",ie,[a(q,{style:{background:"none"}},{default:n(()=>[a(s,null,{default:n(()=>[t("div",null,[t("h1",{style:{"line-height":"2rem","padding-top":"25px","text-align":"center"},innerHTML:x.value},null,8,re)])]),_:1}),a(p,{class:"separ",color:"white"}),a(s,null,{default:n(()=>[a(s,null,{default:n(()=>[t("p",{class:"sTitle",innerHTML:S.value},null,8,ue)]),_:1})]),_:1}),a(I,{autoplay:"",swipeable:"",animated:"",modelValue:k.value,"onUpdate:modelValue":u[0]||(u[0]=i=>k.value=i),arrows:"",infinite:"",height:"250px",class:"shadow-3"},{default:n(()=>[(y(!0),$(Y,null,Z(z.value,i=>(y(),ae(N,{key:i.id,name:i.id,"img-src":i.guid.rendered},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"]),a(s,{style:{display:"flex","justify-content":"space-between"},horizontal:""},{default:n(()=>[t("div",null,[a(s,{horizontal:"",class:"cardSectionRating"},{default:n(()=>[t("p",ce,c(Q.value),1),a(D,{readonly:"",modelValue:e.ratin,"onUpdate:modelValue":u[1]||(u[1]=i=>e.ratin=i),max:5,size:"25px"},null,8,["modelValue"])]),_:1})]),t("div",null,[a(s,null,{default:n(()=>[a(r,{class:"btnMenu",push:""},{default:n(()=>[de,a(te,null,{default:n(()=>[a(q,{class:"cardMenu"},{default:n(()=>[pe,t("p",fe,c(e.menu),1),G(a(r,{icon:"left",label:"\u041D\u0430\u0437\u0430\u0434",color:"positive",flat:""},null,512),[[le]])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),a(s,null,{default:n(()=>[t("p",he,"\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: "+c(b.value),1)]),_:1}),a(s,{horizontal:""},{default:n(()=>[t("div",null,[a(s,{class:"q-pt-none"},{default:n(()=>[t("p",me,"\u0410\u0434\u0440\u0435\u0441: "+c(_.value),1),t("div",null,[t("p",_e,[t("a",{href:`https://www.google.com/maps/dir//${_.value}`},"\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442",8,ve)])])]),_:1}),a(s,null,{default:n(()=>[t("div",null,[t("p",ge,[ye,t("a",{href:`tel:${d.value}`},c(d.value),9,we)])])]),_:1})])]),_:1}),a(p,{color:"white"}),a(s,null,{default:n(()=>[t("div",null,[xe,t("p",{class:"descrip",innerHTML:v.value},null,8,be)]),a(p,{class:"mmtt",inset:"",color:"white"}),Qe,a(se,{class:"mmtt",src:M.value},null,8,["src"])]),_:1}),a(p,{class:"mmtt",color:"white"}),a(s,null,{default:n(()=>[t("div",Se,[a(r,{push:"",dense:"",icon:"fa-brands fa-vk","aria-label":"Fa-brands fa-vk",color:"positive",size:"18px",href:V.value},null,8,["href"]),a(r,{push:"",dense:"",icon:"fa-brands fa-instagram","aria-label":"Fa-brands fa-instagram",color:"positive",size:"18px",href:P.value},null,8,["href"]),a(r,{push:"",dense:"",icon:"email","aria-label":"Email",color:"positive",size:"18px",href:e.email},null,8,["href"]),a(r,{push:"",dense:"",icon:"telegram","aria-label":"Phone",color:"positive",size:"18px",href:T.value},null,8,["href"]),a(r,{push:"",dense:"",icon:"phone","aria-label":"Phone",color:"positive",size:"18px",href:`tel:${d.value}`},null,8,["href"])])]),_:1})]),_:1})]))}};var Ne=A(Me,[["__scopeId","data-v-6968477e"]]);export{Ne as default};
