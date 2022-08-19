import{Q as U,a as R}from"./QCard.f398b143.js";import{f as J,r as k,w as W,o as K,l as $,h as P,j as ee,aa as G,p as te,ab as X,_ as se,M as d,V as _,X as s,d as t,O as o,W as c,F as g,Z as ae,$ as oe,Y as q,N as C,S as V}from"./index.094b65b8.js";import{g as ne}from"./scroll.41089a36.js";import{Q as S}from"./QSeparator.3746340f.js";import{Q as v,a as f}from"./QCarousel.fa6fd02d.js";import{Q as w}from"./QImg.f0a8f889.js";import{_ as le}from"./circ.d7499ef0.js";import"./use-dark.16e1792e.js";import"./selection.9fa20267.js";import"./use-ratio.16cd554b.js";function O(l){let a=!1,x,n;function u(){n=arguments,a!==!0&&(a=!0,x=requestAnimationFrame(()=>{l.apply(this,n),n=void 0,a=!1}))}return u.cancel=()=>{window.cancelAnimationFrame(x),a=!1},u}const{passive:B}=te;var E=J({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:l=>l>=0&&l<=1},scrollTarget:{default:void 0},onScroll:Function},setup(l,{slots:a,emit:x}){const n=k(0),u=k(null),T=k(null),e=k(null);let p,i,D,Q,y,m;W(()=>l.height,()=>{p===!0&&b()}),W(()=>l.scrollTarget,()=>{p===!0&&(N(),M())});let z=r=>{n.value=r,l.onScroll!==void 0&&x("scroll",r)};function b(){let r,L,j;m===window?(r=0,j=L=window.innerHeight):(r=X(m).top,L=G(m),j=r+L);const A=X(u.value).top,Z=A+l.height;if(y!==void 0||Z>r&&A<j){const Y=(j-A)/(l.height+L);I((D-l.height)*Y*l.speed),z(Y)}}let I=r=>{i.style.transform=`translate3d(-50%,${Math.round(r)}px,0)`};function H(){D=i.naturalHeight||i.videoHeight||G(i),p===!0&&b()}function M(){p=!0,m=ne(u.value,l.scrollTarget),m.addEventListener("scroll",b,B),window.addEventListener("resize",Q,B),b()}function N(){p===!0&&(p=!1,m.removeEventListener("scroll",b,B),window.removeEventListener("resize",Q,B),m=void 0,I.cancel(),z.cancel(),Q.cancel())}return K(()=>{I=O(I),z=O(z),Q=O(H),i=a.media!==void 0?T.value.children[0]:e.value,i.onload=i.onloadstart=i.loadedmetadata=H,H(),i.style.display="initial",window.IntersectionObserver!==void 0?(y=new IntersectionObserver(r=>{(r[0].isIntersecting===!0?M:N)()}),y.observe(u.value)):M()}),$(()=>{N(),y!==void 0&&y.disconnect(),i.onload=i.onloadstart=i.loadedmetadata=null}),()=>P("div",{ref:u,class:"q-parallax",style:{height:`${l.height}px`}},[P("div",{ref:T,class:"q-parallax__media absolute-full"},a.media!==void 0?a.media():[P("img",{ref:e,src:l.src})]),P("div",{class:"q-parallax__content absolute-full column flex-center"},a.content!==void 0?a.content({percentScrolled:n.value}):ee(a.default))])}}),F="/assets/kislovodsk.15683c6e.jpg",ie="/assets/lyg.9ccd7984.jpeg",re="/assets/artclip.b6e6e696.jpeg";const de={setup(){function l(a){window.location.href=a}return{goto:l,slide:k(1),info:k("first"),eventsDark:[{id:1,icon:new URL("/assets/harp.259e70de.png",self.location).href,link:"https://kursal.ru/",name:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F"},{id:2,icon:new URL("/assets/painting.b2261059.png",self.location).href,link:"https://afisha7.ru/kislovodsk/vystavki",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/cinema.eed4dbb7.png",self.location).href,link:"https://kino-movietheater.business.site/",name:"\u041A\u0438\u043D\u043E"}],food:[{id:1,icon:new URL("/assets/restraunt.e63d8c26.png",self.location).href,link:"restraunt",name:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"},{id:2,icon:new URL("/assets/cafe.fa2107ba.png",self.location).href,link:"cafe",name:"\u041A\u0430\u0444\u0435"},{id:3,icon:new URL("/assets/canteen.e287237f.png",self.location).href,link:"canteen",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u044B\u0435 "},{id:4,icon:new URL("/assets/fastfood.d484c1a7.png",self.location).href,link:"fastfood",name:"\u0424\u0430\u0441\u0442-\u0444\u0443\u0434"}],home:[{id:1,icon:new URL("/assets/hotel.48311715.png",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/Gostinitsa.72e08783.png",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:3,icon:new URL("/assets/motel.8271edca.png",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:4,icon:new URL("/assets/flat.3152b289.png",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/child.f287c099.png",self.location).href,link:"child",name:"\u0414\u0435\u0442\u044F\u043C"},{id:2,icon:new URL("/assets/cexcursionfe.4347bf77.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("/assets/acropolis.e22c67bd.png",self.location).href,link:"acropolis",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"},{id:4,icon:new URL("/assets/kick.1cba1701.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"}],clothes:[{id:1,icon:new URL("/assets/boutique.f83d9efb.png",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:2,icon:new URL("/assets/sport.2311a863.png",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:3,icon:new URL("/assets/fur.0c8f859d.png",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/gift.6a2c77c0.png",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"}],services:[{id:1,icon:new URL("/assets/video.68409141.png",self.location).href,link:"video",name:"\u0412\u0438\u0434\u0435\u043E"},{id:2,icon:new URL("/assets/cat.9c8bb014.png",self.location).href,link:"pets",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B"},{id:3,icon:new URL("/assets/laptop.256df84e.png",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"},{id:4,icon:new URL("/assets/hair-cut.39c4f034.png",self.location).href,link:"hair-cut",name:"\u0411\u044C\u044E\u0442\u0438"}],transport:[{id:1,icon:new URL("/assets/car-wash.7f5a6eb1.png",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.454ee43a.png",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.61afdd05.png",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/van.642ff995.png",self.location).href,link:"van",name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442 "}]}}},h=l=>(ae("data-v-38442986"),l=l(),oe(),l),ce={class:"q-pa-md"},ue={class:"mtt"},fe=h(()=>s("h2",{class:"aLine"},"\u041B\u0423\u0427\u0428\u0415\u0415 \u0412 \u041A\u0418\u0421\u041B\u041E\u0412\u041E\u0414\u0421\u041A\u0415",-1)),me=[fe],he={class:"mtt"},pe=h(()=>s("h2",{class:"aLine"},"\u041C\u0415\u0420\u041E\u041F\u0420\u0418\u042F\u0422\u0418\u042F",-1)),_e=[pe],ge={class:"mtt"},ve=h(()=>s("h2",{class:"aLine"},"\u0417\u0414\u041E\u0420\u041E\u0412\u042C\u0415",-1)),we=[ve],ke={class:"mtt"},xe=h(()=>s("h2",{class:"aLine"},"\u0422\u0423\u0420\u0418\u0417\u041C",-1)),ye=[xe],be={class:"q-pa-md"},Le={class:"q-pa-md"},Ue={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Re={class:"textCard"},qe={class:"q-pa-md mt"},Ce={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ve={class:"textCard"},Se={class:"q-pa-md mt"},Qe={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},ze={class:"textCard"},Ie={class:"q-pa-md mt"},je={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Pe={class:"textCard"},Be={class:"q-pa-md mt"},Ee={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Fe={class:"textCard"},Te={class:"mmt"},He=h(()=>s("h1",null," \u041D\u0430\u0448\u0438 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u044B",-1)),Me={class:"q-pa-md row items-start q-gutter-md"},Ne=h(()=>s("div",null,[s("h1",null," \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B")],-1)),Ae=h(()=>s("br",null,null,-1)),Oe={class:"row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap horisintal"};function De(l,a,x,n,u,T){return d(),_(g,null,[s("div",ce,[s("div",ue,[t(U,{class:"my-card bg-blur"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[0]||(a[0]=e=>{this.$router.push("/best")})},me)])]),_:1})]),_:1})]),_:1})]),s("div",he,[t(U,{class:"my-card"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[1]||(a[1]=e=>{this.$router.push("/event")})},_e)])]),_:1})]),_:1})]),_:1})]),s("div",ge,[t(U,{class:"my-card"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[2]||(a[2]=e=>{this.$router.push("/health")})},we)])]),_:1})]),_:1})]),_:1})]),s("div",ke,[t(U,{class:"my-card"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[3]||(a[3]=e=>{this.$router.push("/tour")})},ye)])]),_:1})]),_:1})]),_:1})])]),t(S,{color:"white",inset:""}),s("div",be,[t(v,{autoplay:"",swipeable:"",animated:"",modelValue:n.info,"onUpdate:modelValue":a[5]||(a[5]=e=>n.info=e),arrows:"",infinite:"",height:"220px",class:"shadow-3"},{default:o(()=>[t(f,{name:"first","img-src":ie}),t(f,{name:"second","img-src":le,onClick:a[4]||(a[4]=e=>n.goto("https://circus-kislovodsk.ru/"))}),t(f,{name:"third","img-src":"https://www.pnp.ru/upload/entities/2018/04/13/article/detailPicture/28/ce/08/65/7fd4366d350fc6f53f49ac3a3b7d1ffe.jpg"})]),_:1},8,["modelValue"])]),t(S,{color:"white",inset:""}),s("div",Le,[t(v,{class:"div_bg",style:{"margin-top":"-5px"},modelValue:n.slide,"onUpdate:modelValue":a[6]||(a[6]=e=>n.slide=e),animated:"",arrows:"",height:"150px"},{default:o(()=>[t(S,{dark:""}),t(f,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Ue,[(d(!0),_(g,null,q(n.food,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Re,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1}),t(S,{dark:""})]),_:1},8,["modelValue"])]),s("div",qe,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[7]||(a[7]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(f,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Ce,[(d(!0),_(g,null,q(n.home,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Ve,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",Se,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[8]||(a[8]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(f,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Qe,[(d(!0),_(g,null,q(n.services,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",ze,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",Ie,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[9]||(a[9]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(f,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",je,[(d(!0),_(g,null,q(n.clothes,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Pe,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",Be,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[10]||(a[10]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(f,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Ee,[(d(!0),_(g,null,q(n.transport,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Fe,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"]),s("div",Te,[He,t(c,{push:"",class:"cardColor",href:"https://artclip.ru/"},{default:o(()=>[t(w,{class:"partner",src:re})]),_:1},8,["href"])])]),t(S,{color:"white",inset:""}),s("div",Me,[t(U,{class:"my-card text-white",style:{background:"radial-gradient(circle, #9c4dcc 0%, #38006b 90%)"}},{default:o(()=>[t(R,{style:{"text-align":"center"}},{default:o(()=>[Ne,Ae,s("div",Oe,[t(c,{push:"",dense:"",icon:"fa-brands fa-vk","aria-label":"Fa-brands fa-vk",color:"blue",size:"1em",href:"//vk.com/id711311713"},null,8,["href"]),t(c,{push:"",dense:"",icon:"fa-brands fa-instagram","aria-label":"Fa-brands fa-instagram",color:"red",size:"1em",href:"https://instagram.com/heart_city_kissloveodsk?igshid=YmMyMTA2M2Y="},null,8,["href"]),t(c,{push:"",dense:"",icon:"email","aria-label":"Email",color:"dark blue",size:"1em",href:"mailto:davidov05101996@gmail.com"},null,8,["href"]),t(c,{push:"",dense:"",icon:"phone","aria-label":"Phone",color:"green",size:"1em",href:"tel:89620031286"})])]),_:1})]),_:1})])],64)}var st=se(de,[["render",De],["__scopeId","data-v-38442986"]]);export{st as default};
