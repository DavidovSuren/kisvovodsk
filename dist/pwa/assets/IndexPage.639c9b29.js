import{Q as y}from"./QCardSection.0f6c31b4.js";import{f as J,r as v,w as G,o as K,l as $,h as Q,j as ee,aa as W,p as te,ab as X,_ as se,ac as ae,L as c,M as _,N as s,d as t,Q as l,X as d,F as g,Z as oe,$ as le,Y as b,P as U,V as P}from"./index.fc89c5e4.js";import{a as ne}from"./selection.12765b2c.js";import{Q as L}from"./QCard.78bb2f6d.js";import{Q as N}from"./QSeparator.bde1beca.js";import{Q as R,a as j}from"./QCarousel.c81c2386.js";import{Q as q}from"./QImg.063f56f4.js";import"./use-dark.143aec6f.js";import"./use-ratio.19aa50c4.js";function D(n){let a=!1,h,o;function u(){o=arguments,a!==!0&&(a=!0,h=requestAnimationFrame(()=>{n.apply(this,o),o=void 0,a=!1}))}return u.cancel=()=>{window.cancelAnimationFrame(h),a=!1},u}const{passive:z}=te;var T=J({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:n=>n>=0&&n<=1},scrollTarget:{default:void 0},onScroll:Function},setup(n,{slots:a,emit:h}){const o=v(0),u=v(null),E=v(null),e=v(null);let f,i,O,C,w,m;G(()=>n.height,()=>{f===!0&&k()}),G(()=>n.scrollTarget,()=>{f===!0&&(M(),H())});let V=r=>{o.value=r,n.onScroll!==void 0&&h("scroll",r)};function k(){let r,x,I;m===window?(r=0,I=x=window.innerHeight):(r=X(m).top,x=W(m),I=r+x);const A=X(u.value).top,Z=A+n.height;if(w!==void 0||Z>r&&A<I){const Y=(I-A)/(n.height+x);S((O-n.height)*Y*n.speed),V(Y)}}let S=r=>{i.style.transform=`translate3d(-50%,${Math.round(r)}px,0)`};function F(){O=i.naturalHeight||i.videoHeight||W(i),f===!0&&k()}function H(){f=!0,m=ne(u.value,n.scrollTarget),m.addEventListener("scroll",k,z),window.addEventListener("resize",C,z),k()}function M(){f===!0&&(f=!1,m.removeEventListener("scroll",k,z),window.removeEventListener("resize",C,z),m=void 0,S.cancel(),V.cancel(),C.cancel())}return K(()=>{S=D(S),V=D(V),C=D(F),i=a.media!==void 0?E.value.children[0]:e.value,i.onload=i.onloadstart=i.loadedmetadata=F,F(),i.style.display="initial",window.IntersectionObserver!==void 0?(w=new IntersectionObserver(r=>{(r[0].isIntersecting===!0?H:M)()}),w.observe(u.value)):H()}),$(()=>{M(),w!==void 0&&w.disconnect(),i.onload=i.onloadstart=i.loadedmetadata=null}),()=>Q("div",{ref:u,class:"q-parallax",style:{height:`${n.height}px`}},[Q("div",{ref:E,class:"q-parallax__media absolute-full"},a.media!==void 0?a.media():[Q("img",{ref:e,src:n.src})]),Q("div",{class:"q-parallax__content absolute-full column flex-center"},a.content!==void 0?a.content({percentScrolled:o.value}):ee(a.default))])}}),B="/assets/kislovodsk.f2e28672.jpg",ie="/assets/artclip.b6e6e696.jpeg";const re={setup(){const n=ae();function a(o){window.location.href=o}function h(o){o.slice(0,4)==="http"?window.location.href=o:n.push(o)}return{goto:a,goToIf:h,slide:v(1),info:v("first"),sliderImg:[{id:1,name:"first",url:new URL("/assets/bannerchoco.f58173a7.jpeg",self.location).href,link:"cafe/"},{id:2,name:"second",url:new URL("/assets/bannerr.62cc2112.jpeg",self.location).href,link:"cafe/"}],eventsDark:[{id:1,icon:new URL("../assets/icons/eventss/harp.png",self.location).href,link:"https://kursal.ru/",name:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F"},{id:2,icon:new URL("../assets/icons/eventss/painting.png",self.location).href,link:"https://afisha7.ru/kislovodsk/vystavki",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0438"}],home:[{id:1,icon:new URL("/assets/hotel.e2ed0eeb.jpg",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/Gostinitsa.148ff20f.jpg",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:3,icon:new URL("/assets/SPA.ff862e60.jpg",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:4,icon:new URL("/assets/motel.16c08b34.jpg",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.38a2f8e0.jpg",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/child.1cc81708.jpg",self.location).href,link:"child",name:"\u0414\u0435\u0442\u044F\u043C"},{id:2,icon:new URL("../assets/icons/tourism/cexcursionfe.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("../assets/icons/tourism/acropolis.png",self.location).href,link:"acropolis",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"},{id:4,icon:new URL("../assets/icons/services/kick.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"}],clothes:[{id:1,icon:new URL("/assets/boutique.2a2a3535.jpg",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:2,icon:new URL("/assets/sport.51d4b2e1.jpg",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:3,icon:new URL("/assets/fur.a1fc7fb6.jpg",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/gift.223fd274.jpg",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"}],services:[{id:1,icon:new URL("/assets/fitness.9083e32d.jpg",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:2,icon:new URL("/assets/cat.8e45096e.jpg",self.location).href,link:"pets",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B"},{id:3,icon:new URL("/assets/laptop.47114be9.jpg",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"},{id:4,icon:new URL("/assets/hair-cut.2eac2ca6.webp",self.location).href,link:"hair-cut",name:"\u0411\u044C\u044E\u0442\u0438"}],transport:[{id:1,icon:new URL("/assets/car-wash.61f5bc92.jpg",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.acfcc2e5.webp",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.fbe95805.jpg",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/BUS.20266bb7.webp",self.location).href,link:"https://yandex.ru/maps/11062/kislovodsk/transport/minibuses/?l=masstransit&ll=42.716822%2C43.904244&z=13.34/",name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"}]}}},p=n=>(oe("data-v-7297edd9"),n=n(),le(),n),ce={class:"q-pa-md"},de={class:"mtt"},ue=p(()=>s("a",null,[s("h2",null,"\u0410\u0424\u0418\u0428\u0410")],-1)),fe={class:"mtt"},he=p(()=>s("a",null,[s("h2",null,"\u0421\u0410\u041D\u0410\u0422\u041E\u0420\u0418\u0418")],-1)),me={class:"mtt"},pe=p(()=>s("a",null,[s("h2",null,"\u0422\u0423\u0420\u0418\u0417\u041C")],-1)),_e={class:"mtt"},ge=p(()=>s("a",null,[s("h2",null,"\u0417\u0410\u0412\u0415\u0414\u0415\u041D\u0418\u042F")],-1)),ve={class:"q-pa-md"},we={class:"q-pa-md mt"},ke={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},xe={class:"textCard"},ye={class:"q-pa-md mt"},be={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ue={class:"textCard"},Le={class:"q-pa-md mt"},Re={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},je={class:"textCard"},qe={class:"q-pa-md mt"},Ce={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ve={class:"textCard"},Se={class:"mmt"},Ie=p(()=>s("h1",{style:{color:"black"}}," \u041D\u0430\u0448\u0438 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u044B",-1)),Qe={class:"q-pa-md row items-start q-gutter-md"},Pe=p(()=>s("div",null,[s("h1",{style:{color:"black"}}," \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B")],-1)),ze=p(()=>s("br",null,null,-1)),Te={class:"row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap horisintal"};function Be(n,a,h,o,u,E){return c(),_(g,null,[s("div",ce,[s("div",de,[t(L,null,{default:l(()=>[t(T,{src:B,height:135,onClick:a[0]||(a[0]=e=>{this.$router.push("/best")})},{default:l(()=>[t(y,null,{default:l(()=>[ue]),_:1})]),_:1})]),_:1})]),s("div",fe,[t(L,null,{default:l(()=>[t(T,{src:B,height:135,onClick:a[1]||(a[1]=e=>{this.$router.push("/sanatoriums")})},{default:l(()=>[t(y,null,{default:l(()=>[he]),_:1})]),_:1})]),_:1})]),s("div",me,[t(L,null,{default:l(()=>[t(T,{src:B,height:135,onClick:a[2]||(a[2]=e=>{this.$router.push("/tour")})},{default:l(()=>[t(y,null,{default:l(()=>[pe]),_:1})]),_:1})]),_:1})]),s("div",_e,[t(L,null,{default:l(()=>[t(T,{src:B,height:135,onClick:a[3]||(a[3]=e=>{this.$router.push("/health")})},{default:l(()=>[t(y,null,{default:l(()=>[ge]),_:1})]),_:1})]),_:1})])]),t(N,{color:"white",inset:""}),s("div",ve,[t(R,{autoplay:"",swipeable:"",animated:"",modelValue:o.info,"onUpdate:modelValue":a[4]||(a[4]=e=>o.info=e),arrows:"",infinite:"",height:"220px",class:"shadow-3"},{default:l(()=>[(c(!0),_(g,null,b(o.sliderImg,e=>(c(),U(j,{key:e.id,name:e.id,"img-src":e.url,onClick:f=>o.goto(e.link)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["modelValue"])]),t(N,{color:"white",inset:""}),s("div",we,[t(R,{style:{"margin-top":"60px"},modelValue:o.slide,"onUpdate:modelValue":a[5]||(a[5]=e=>o.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:l(()=>[t(j,{name:1,class:"column no-wrap"},{default:l(()=>[s("div",ke,[(c(!0),_(g,null,b(o.home,e=>(c(),U(d,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:l(()=>[t(q,{class:"rounded-borders col-6 full-height",src:e.icon,width:"130px",height:"100px"},null,8,["src"]),s("p",xe,P(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",ye,[t(R,{style:{"margin-top":"20px"},modelValue:o.slide,"onUpdate:modelValue":a[6]||(a[6]=e=>o.slide=e),animated:"","control-color":"primary",arrows:"",height:"180px"},{default:l(()=>[t(j,{name:1,class:"column no-wrap"},{default:l(()=>[s("div",be,[(c(!0),_(g,null,b(o.services,e=>(c(),U(d,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:l(()=>[t(q,{class:"rounded-borders col-6 full-height",src:e.icon,width:"130px",height:"100px"},null,8,["src"]),s("p",Ue,P(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",Le,[t(R,{style:{"margin-top":"20px"},modelValue:o.slide,"onUpdate:modelValue":a[7]||(a[7]=e=>o.slide=e),animated:"","control-color":"primary",arrows:"",height:"180px"},{default:l(()=>[t(j,{name:1,class:"column no-wrap"},{default:l(()=>[s("div",Re,[(c(!0),_(g,null,b(o.clothes,e=>(c(),U(d,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:l(()=>[t(q,{class:"rounded-borders col-6 full-height",src:e.icon,width:"130px",height:"100px"},null,8,["src"]),s("p",je,P(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",qe,[t(R,{style:{"margin-top":"20px"},modelValue:o.slide,"onUpdate:modelValue":a[8]||(a[8]=e=>o.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:l(()=>[t(j,{name:1,class:"column no-wrap"},{default:l(()=>[s("div",Ce,[(c(!0),_(g,null,b(o.transport,e=>(c(),U(d,{push:"",key:e.id,onClick:f=>o.goToIf(e.link),class:"cardColor"},{default:l(()=>[t(q,{class:"rounded-borders col-6 full-height",src:e.icon,width:"130px",height:"100px"},null,8,["src"]),s("p",Ve,P(e.name),1)]),_:2},1032,["onClick"]))),128))])]),_:1})]),_:1},8,["modelValue"]),s("div",Se,[Ie,t(d,{push:"",class:"cardColor",href:"https://artclip.ru/"},{default:l(()=>[t(q,{class:"partner",src:ie})]),_:1},8,["href"])])]),t(N,{color:"white",inset:""}),s("div",Qe,[t(L,{class:"my-card text-white",style:{background:"rgb(236, 236, 208)"}},{default:l(()=>[t(y,{style:{"text-align":"center"}},{default:l(()=>[Pe,ze,s("div",Te,[t(d,{push:"",dense:"",icon:"fa-brands fa-vk","aria-label":"Fa-brands fa-vk",color:"blue",size:"1em",href:"//vk.com/id711311713"},null,8,["href"]),t(d,{push:"",dense:"",icon:"fa-brands fa-instagram","aria-label":"Fa-brands fa-instagram",color:"red",size:"1em",href:"https://instagram.com/heart_city_kissloveodsk?igshid=YmMyMTA2M2Y="},null,8,["href"]),t(d,{push:"",dense:"",icon:"email","aria-label":"Email",color:"dark blue",size:"1em",href:"mailto:davidov05101996@gmail.com"},null,8,["href"]),t(d,{push:"",dense:"",icon:"phone","aria-label":"Phone",color:"green",size:"1em",href:"tel:89620031286"})])]),_:1})]),_:1})])],64)}var Ge=se(re,[["render",Be],["__scopeId","data-v-7297edd9"]]);export{Ge as default};
