import{Q as U,a as R}from"./QCard.19919064.js";import{f as J,r as k,w as G,o as K,l as $,h as I,j as ee,aa as W,p as te,ab as X,_ as se,O as d,X as g,Z as s,d as t,Q as o,Y as c,F as _,a0 as ae,a1 as oe,$ as q,P as C,V}from"./index.88925c5d.js";import{b as ne}from"./scroll.6cc4d4aa.js";import{Q as S}from"./QSeparator.6d5fb6fb.js";import{Q as v,a as u}from"./QCarousel.703b9477.js";import{Q as w}from"./QImg.972636eb.js";import"./use-dark.02131422.js";import"./selection.8bd626a8.js";function O(i){let a=!1,x,n;function f(){n=arguments,a!==!0&&(a=!0,x=requestAnimationFrame(()=>{i.apply(this,n),n=void 0,a=!1}))}return f.cancel=()=>{window.cancelAnimationFrame(x),a=!1},f}const{passive:B}=te;var E=J({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:i=>i>=0&&i<=1},scrollTarget:{default:void 0},onScroll:Function},setup(i,{slots:a,emit:x}){const n=k(0),f=k(null),T=k(null),e=k(null);let p,l,D,Q,y,m;G(()=>i.height,()=>{p===!0&&b()}),G(()=>i.scrollTarget,()=>{p===!0&&(M(),A())});let j=r=>{n.value=r,i.onScroll!==void 0&&x("scroll",r)};function b(){let r,L,z;m===window?(r=0,z=L=window.innerHeight):(r=X(m).top,L=W(m),z=r+L);const N=X(f.value).top,Z=N+i.height;if(y!==void 0||Z>r&&N<z){const Y=(z-N)/(i.height+L);P((D-i.height)*Y*i.speed),j(Y)}}let P=r=>{l.style.transform=`translate3d(-50%,${Math.round(r)}px,0)`};function H(){D=l.naturalHeight||l.videoHeight||W(l),p===!0&&b()}function A(){p=!0,m=ne(f.value,i.scrollTarget),m.addEventListener("scroll",b,B),window.addEventListener("resize",Q,B),b()}function M(){p===!0&&(p=!1,m.removeEventListener("scroll",b,B),window.removeEventListener("resize",Q,B),m=void 0,P.cancel(),j.cancel(),Q.cancel())}return K(()=>{P=O(P),j=O(j),Q=O(H),l=a.media!==void 0?T.value.children[0]:e.value,l.onload=l.onloadstart=l.loadedmetadata=H,H(),l.style.display="initial",window.IntersectionObserver!==void 0?(y=new IntersectionObserver(r=>{(r[0].isIntersecting===!0?A:M)()}),y.observe(f.value)):A()}),$(()=>{M(),y!==void 0&&y.disconnect(),l.onload=l.onloadstart=l.loadedmetadata=null}),()=>I("div",{ref:f,class:"q-parallax",style:{height:`${i.height}px`}},[I("div",{ref:T,class:"q-parallax__media absolute-full"},a.media!==void 0?a.media():[I("img",{ref:e,src:i.src})]),I("div",{class:"q-parallax__content absolute-full column flex-center"},a.content!==void 0?a.content({percentScrolled:n.value}):ee(a.default))])}}),F="/assets/kislovodsk.15683c6e.jpg",ie="/assets/circ.d2111a26.jpeg",le="/assets/artclip.b6e6e696.jpeg";const re={setup(){function i(a){window.location.href=a}return{goto:i,slide:k(1),info:k("first"),eventsDark:[{id:1,icon:new URL("/assets/harp.259e70de.png",self.location).href,link:"https://kursal.ru/",name:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F"},{id:2,icon:new URL("/assets/painting.b2261059.png",self.location).href,link:"https://afisha7.ru/kislovodsk/vystavki",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/cinema.eed4dbb7.png",self.location).href,link:"https://kino-movietheater.business.site/",name:"\u041A\u0438\u043D\u043E"}],food:[{id:1,icon:new URL("/assets/restraunt.e63d8c26.png",self.location).href,link:"restraunt",name:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"},{id:2,icon:new URL("/assets/cafe.fa2107ba.png",self.location).href,link:"cafe",name:"\u041A\u0430\u0444\u0435"},{id:3,icon:new URL("/assets/canteen.e287237f.png",self.location).href,link:"canteen",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u044B\u0435 "},{id:4,icon:new URL("/assets/fastfood.d484c1a7.png",self.location).href,link:"fastfood",name:"\u0424\u0430\u0441\u0442-\u0444\u0443\u0434"}],home:[{id:1,icon:new URL("/assets/hotel.48311715.png",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/sanatoriums.8f4559d5.png",self.location).href,link:"sanatoriums",name:"\u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0438"},{id:3,icon:new URL("/assets/Gostinitsa.72e08783.png",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:4,icon:new URL("/assets/motel.8271edca.png",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.3152b289.png",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/child.f287c099.png",self.location).href,link:"child",name:"\u0414\u0435\u0442\u044F\u043C"},{id:2,icon:new URL("/assets/cexcursionfe.4347bf77.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("/assets/acropolis.e22c67bd.png",self.location).href,link:"acropolis",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"},{id:4,icon:new URL("/assets/kick.1cba1701.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"}],clothes:[{id:1,icon:new URL("/assets/boutique.f83d9efb.png",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:2,icon:new URL("/assets/sport.2311a863.png",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:3,icon:new URL("/assets/fur.0c8f859d.png",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/gift.6a2c77c0.png",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"}],services:[{id:1,icon:new URL("/assets/video.68409141.png",self.location).href,link:"video",name:"\u0412\u0438\u0434\u0435\u043E"},{id:2,icon:new URL("/assets/cat.9c8bb014.png",self.location).href,link:"pets",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B"},{id:3,icon:new URL("/assets/hair-cut.39c4f034.png",self.location).href,link:"hair-cut",name:"\u0411\u044C\u044E\u0442\u0438"},{id:4,icon:new URL("/assets/SPA.6433707f.png",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:5,icon:new URL("/assets/fitness.c3b90587.png",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:6,icon:new URL("/assets/laptop.256df84e.png",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"}],transport:[{id:1,icon:new URL("/assets/car-wash.7f5a6eb1.png",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.454ee43a.png",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.61afdd05.png",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/van.642ff995.png",self.location).href,link:"van",name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442 "}]}}},h=i=>(ae("data-v-15a8c004"),i=i(),oe(),i),de={class:"q-pa-md"},ce={class:"mtt"},fe=h(()=>s("h2",{class:"aLine"},"\u041B\u0423\u0427\u0428\u0415\u0415",-1)),ue=[fe],me={class:"mtt"},he=h(()=>s("h2",{class:"aLine"},"\u041C\u0415\u0420\u041E\u041F\u0420\u0418\u042F\u0422\u0418\u042F",-1)),pe=[he],ge={class:"mtt"},_e=h(()=>s("h2",{class:"aLine"},"\u0417\u0414\u041E\u0420\u041E\u0412\u042C\u0415",-1)),ve=[_e],we={class:"mtt"},ke=h(()=>s("h2",{class:"aLine"},"\u0422\u0423\u0420\u0418\u0417\u041C",-1)),xe=[ke],ye={class:"q-pa-md"},be={class:"q-pa-md"},Le={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ue={class:"textCard"},Re={class:"q-pa-md mt"},qe={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ce={class:"textCard"},Ve={class:"q-pa-md mt"},Se={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Qe={class:"textCard"},je={class:"q-pa-md mt"},Pe={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},ze={class:"textCard"},Ie={class:"q-pa-md mt"},Be={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ee={class:"textCard"},Fe={class:"mmt"},Te=h(()=>s("h1",null," \u041D\u0430\u0448\u0438 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u044B",-1)),He={class:"q-pa-md row items-start q-gutter-md"},Ae=h(()=>s("div",null,[s("h1",null," \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B")],-1)),Me=h(()=>s("br",null,null,-1)),Ne={class:"row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap horisintal"};function Oe(i,a,x,n,f,T){return d(),g(_,null,[s("div",de,[s("div",ce,[t(U,{class:"my-card bg-blur"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[0]||(a[0]=e=>{this.$router.push("/")})},ue)])]),_:1})]),_:1})]),_:1})]),s("div",me,[t(U,{class:"my-card"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[1]||(a[1]=e=>{this.$router.push("/event")})},pe)])]),_:1})]),_:1})]),_:1})]),s("div",ge,[t(U,{class:"my-card"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[2]||(a[2]=e=>{this.$router.push("/")})},ve)])]),_:1})]),_:1})]),_:1})]),s("div",we,[t(U,{class:"my-card"},{default:o(()=>[t(E,{src:F,height:135},{default:o(()=>[t(R,null,{default:o(()=>[s("div",null,[s("a",{size:"xl",onClick:a[3]||(a[3]=e=>{this.$router.push("/tour")})},xe)])]),_:1})]),_:1})]),_:1})])]),t(S,{color:"white",inset:""}),s("div",ye,[t(v,{autoplay:"",swipeable:"",animated:"",modelValue:n.info,"onUpdate:modelValue":a[5]||(a[5]=e=>n.info=e),arrows:"",infinite:"",height:"220px",class:"shadow-3"},{default:o(()=>[t(u,{name:"first","img-src":"https://www.pnp.ru/upload/entities/2018/04/13/article/detailPicture/28/ce/08/65/7fd4366d350fc6f53f49ac3a3b7d1ffe.jpg"}),t(u,{name:"second","img-src":ie,onClick:a[4]||(a[4]=e=>n.goto("https://circus-kislovodsk.ru/"))}),t(u,{name:"third","img-src":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d9/2f/2b/photo0jpg.jpg?w=700&h=500&s=1"})]),_:1},8,["modelValue"])]),t(S,{color:"white",inset:""}),s("div",be,[t(v,{class:"div_bg",style:{"margin-top":"-5px"},modelValue:n.slide,"onUpdate:modelValue":a[6]||(a[6]=e=>n.slide=e),animated:"",arrows:"",height:"150px"},{default:o(()=>[t(S,{dark:""}),t(u,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Le,[(d(!0),g(_,null,q(n.food,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Ue,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1}),t(S,{dark:""})]),_:1},8,["modelValue"])]),s("div",Re,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[7]||(a[7]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(u,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",qe,[(d(!0),g(_,null,q(n.home,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Ce,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",Ve,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[8]||(a[8]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(u,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Se,[(d(!0),g(_,null,q(n.services,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Qe,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",je,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[9]||(a[9]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(u,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Pe,[(d(!0),g(_,null,q(n.clothes,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",ze,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),s("div",Ie,[t(v,{style:{"margin-top":"20px"},modelValue:n.slide,"onUpdate:modelValue":a[10]||(a[10]=e=>n.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:o(()=>[t(u,{name:1,class:"column no-wrap"},{default:o(()=>[s("div",Be,[(d(!0),g(_,null,q(n.transport,e=>(d(),C(c,{push:"",key:e.id,to:e.link,class:"cardColor"},{default:o(()=>[t(w,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),s("p",Ee,V(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"]),s("div",Fe,[Te,t(c,{push:"",class:"cardColor",href:"https://artclip.ru/"},{default:o(()=>[t(w,{class:"partner",src:le})]),_:1},8,["href"])])]),t(S,{color:"white",inset:""}),s("div",He,[t(U,{class:"my-card text-white",style:{background:"radial-gradient(circle, #9c4dcc 0%, #38006b 90%)"}},{default:o(()=>[t(R,{style:{"text-align":"center"}},{default:o(()=>[Ae,Me,s("div",Ne,[t(c,{push:"",dense:"",icon:"fa-brands fa-vk","aria-label":"Fa-brands fa-vk",color:"blue",size:"1em",href:"//vk.com/id711311713"},null,8,["href"]),t(c,{push:"",dense:"",icon:"fa-brands fa-instagram","aria-label":"Fa-brands fa-instagram",color:"red",size:"1em",href:"https://instagram.com/heart_city_kissloveodsk?igshid=YmMyMTA2M2Y="},null,8,["href"]),t(c,{push:"",dense:"",icon:"email","aria-label":"Email",color:"dark blue",size:"1em",href:"mailto:davidov05101996@gmail.com"},null,8,["href"]),t(c,{push:"",dense:"",icon:"phone","aria-label":"Phone",color:"green",size:"1em",href:"tel:89620031286"})])]),_:1})]),_:1})])],64)}var $e=se(re,[["render",Oe],["__scopeId","data-v-15a8c004"]]);export{$e as default};
