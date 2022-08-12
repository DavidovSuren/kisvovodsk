import{Q as d,a as r}from"./QCarousel.49fc867e.js";import{Q as c}from"./QImg.2b3ddc6c.js";import{_ as x,r as v,Q as l,Z as f,a0 as o,d as s,S as a,$ as n,F as m,a8 as y,a9 as U,W as p,a1 as u,R as h,X as g}from"./index.f9ff2942.js";import{Q as k}from"./QSeparator.8761c62a.js";import{Q as L,a as R}from"./QCard.ae68bf48.js";import"./use-dark.4eade3ae.js";import"./selection.9cd9d161.js";var b="/assets/circ.d2111a26.jpeg",V="/assets/artclip.b6e6e696.jpeg";const q={setup(){function w(i){window.location.href=i}return{goto:w,slide:v(1),info:v("first"),eventsDark:[{id:1,icon:new URL("/assets/harp.259e70de.png",self.location).href,link:"https://kursal.ru/",name:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F"},{id:2,icon:new URL("/assets/painting.b2261059.png",self.location).href,link:"https://afisha7.ru/kislovodsk/vystavki",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/cinema.eed4dbb7.png",self.location).href,link:"https://kino-movietheater.business.site/",name:"\u041A\u0438\u043D\u043E"}],food:[{id:1,icon:new URL("/assets/restraunt.e63d8c26.png",self.location).href,link:"restraunt",name:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"},{id:2,icon:new URL("/assets/cafe.fa2107ba.png",self.location).href,link:"cafe",name:"\u041A\u0430\u0444\u0435"},{id:3,icon:new URL("/assets/canteen.e287237f.png",self.location).href,link:"canteen",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u044B\u0435 "},{id:4,icon:new URL("/assets/fastfood.d484c1a7.png",self.location).href,link:"fastfood",name:"\u0424\u0430\u0441\u0442-\u0444\u0443\u0434"}],home:[{id:1,icon:new URL("/assets/hotel.48311715.png",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/sanatoriums.8f4559d5.png",self.location).href,link:"sanatoriums",name:"\u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0438"},{id:3,icon:new URL("/assets/Gostinitsa.72e08783.png",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:4,icon:new URL("/assets/motel.8271edca.png",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.3152b289.png",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/child.f287c099.png",self.location).href,link:"child",name:"\u0414\u0435\u0442\u044F\u043C"},{id:2,icon:new URL("/assets/cexcursionfe.4347bf77.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("/assets/acropolis.e22c67bd.png",self.location).href,link:"acropolis",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"},{id:4,icon:new URL("/assets/kick.1cba1701.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"}],clothes:[{id:1,icon:new URL("/assets/boutique.f83d9efb.png",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:2,icon:new URL("/assets/sport.2311a863.png",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:3,icon:new URL("/assets/fur.0c8f859d.png",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/gift.6a2c77c0.png",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"}],services:[{id:1,icon:new URL("/assets/video.68409141.png",self.location).href,link:"video",name:"\u0412\u0438\u0434\u0435\u043E"},{id:2,icon:new URL("/assets/cat.9c8bb014.png",self.location).href,link:"pets",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B"},{id:3,icon:new URL("/assets/hair-cut.39c4f034.png",self.location).href,link:"hair-cut",name:"\u0411\u044C\u044E\u0442\u0438"},{id:4,icon:new URL("/assets/SPA.6433707f.png",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:5,icon:new URL("/assets/fitness.c3b90587.png",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:6,icon:new URL("/assets/laptop.256df84e.png",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"}],transport:[{id:1,icon:new URL("/assets/car-wash.7f5a6eb1.png",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.454ee43a.png",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.61afdd05.png",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/van.642ff995.png",self.location).href,link:"van",name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442 "}]}}},_=w=>(y("data-v-1dc1ee22"),w=w(),U(),w),j={class:"q-pa-md"},Q={class:"q-pa-md mt"},S={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},I={class:"q-pa-md"},C={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"},P={class:"q-pa-md mt"},B={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},z={class:"q-pa-md mt"},F={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},D={class:"q-pa-md mt"},M={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},N={class:"q-pa-md mt"},A={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},E={class:"q-pa-md mt"},T={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Y=_(()=>o("br",null,null,-1)),G={class:"text-h4"},W=p("\u041D\u0430\u0448\u0438 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u044B "),X=_(()=>o("br",null,null,-1)),Z={class:"q-pa-md row items-start q-gutter-md"},H=_(()=>o("div",{class:"text-h5"},"\u0421\u0412\u042F\u0416\u0418\u0422\u0415\u0421\u042C \u0421 \u041D\u0410\u041C\u0418:",-1)),J=_(()=>o("br",null,null,-1));function K(w,i,O,t,$,ee){return l(),f(m,null,[o("div",j,[s(d,{autoplay:"",swipeable:"",animated:"",modelValue:t.info,"onUpdate:modelValue":i[1]||(i[1]=e=>t.info=e),arrows:"",infinite:"",height:"220px",class:"shadow-3"},{default:a(()=>[s(r,{name:"first","img-src":"https://www.pnp.ru/upload/entities/2018/04/13/article/detailPicture/28/ce/08/65/7fd4366d350fc6f53f49ac3a3b7d1ffe.jpg"}),s(r,{name:"second","img-src":b,onClick:i[0]||(i[0]=e=>t.goto("https://circus-kislovodsk.ru/"))}),s(r,{name:"third","img-src":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d9/2f/2b/photo0jpg.jpg?w=700&h=500&s=1"})]),_:1},8,["modelValue"])]),o("div",Q,[s(d,{style:{"margin-top":"20px"},modelValue:t.slide,"onUpdate:modelValue":i[2]||(i[2]=e=>t.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:a(()=>[s(r,{name:1,class:"column no-wrap"},{default:a(()=>[o("div",S,[(l(!0),f(m,null,u(t.eventsDark,e=>(l(),h(n,{class:"bg-white",key:e.id,href:e.link},{default:a(()=>[s(c,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["href"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",I,[s(k,{dark:""}),s(d,{class:"div_bg",style:{"margin-top":"-30px"},modelValue:t.slide,"onUpdate:modelValue":i[3]||(i[3]=e=>t.slide=e),animated:"",arrows:"",height:"150px"},{default:a(()=>[s(k,{dark:""}),s(r,{name:1,class:"column no-wrap"},{default:a(()=>[o("div",C,[(l(!0),f(m,null,u(t.food,e=>(l(),h(n,{key:e.id,to:e.link,class:"bg-white"},{default:a(()=>[s(c,{class:"circle-borders col-3 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1}),s(k,{dark:""})]),_:1},8,["modelValue"])]),o("div",P,[s(d,{style:{"margin-top":"20px"},modelValue:t.slide,"onUpdate:modelValue":i[4]||(i[4]=e=>t.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:a(()=>[s(r,{name:1,class:"column no-wrap"},{default:a(()=>[o("div",B,[(l(!0),f(m,null,u(t.home,e=>(l(),h(n,{class:"bg-white",key:e.id,to:e.link},{default:a(()=>[s(c,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",z,[s(d,{style:{"margin-top":"20px"},modelValue:t.slide,"onUpdate:modelValue":i[5]||(i[5]=e=>t.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:a(()=>[s(r,{name:1,class:"column no-wrap"},{default:a(()=>[o("div",F,[(l(!0),f(m,null,u(t.tour,e=>(l(),h(n,{class:"bg-white",key:e.id,to:e.link},{default:a(()=>[s(c,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",D,[s(d,{style:{"margin-top":"20px"},modelValue:t.slide,"onUpdate:modelValue":i[6]||(i[6]=e=>t.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:a(()=>[s(r,{name:1,class:"column no-wrap"},{default:a(()=>[o("div",M,[(l(!0),f(m,null,u(t.services,e=>(l(),h(n,{class:"bg-white",key:e.id,to:e.link},{default:a(()=>[s(c,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",N,[s(d,{style:{"margin-top":"20px"},modelValue:t.slide,"onUpdate:modelValue":i[7]||(i[7]=e=>t.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:a(()=>[s(r,{name:1,class:"column no-wrap"},{default:a(()=>[o("div",A,[(l(!0),f(m,null,u(t.clothes,e=>(l(),h(n,{class:"bg-white",key:e.id,to:e.link},{default:a(()=>[s(c,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",E,[s(d,{style:{"margin-top":"20px"},modelValue:t.slide,"onUpdate:modelValue":i[8]||(i[8]=e=>t.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:a(()=>[s(r,{name:1,class:"column no-wrap"},{default:a(()=>[o("div",T,[(l(!0),f(m,null,u(t.transport,e=>(l(),h(n,{class:"bg-white",key:e.id,to:e.link},{default:a(()=>[s(c,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"]),Y,o("div",G,[W,X,s(n,{href:"https://artclip.ru/"},{default:a(()=>[s(c,{class:"partner",src:V})]),_:1},8,["href"])])]),o("div",Z,[s(L,{class:"my-card text-white",style:{background:"radial-gradient(circle, #9c4dcc 0%, #38006b 90%)"}},{default:a(()=>[s(R,{style:{"text-align":"center"}},{default:a(()=>[H,J,s(n,{dense:"",icon:"fa-brands fa-vk","aria-label":"Fa-brands fa-vk",color:"blue",size:"1em",href:"//vk.com/id711311713"},null,8,["href"]),s(n,{dense:"",icon:"fa-brands fa-instagram","aria-label":"Fa-brands fa-instagram",color:"red",size:"1em",href:"https://instagram.com/heart_city_kissloveodsk?igshid=YmMyMTA2M2Y="},null,8,["href"]),s(n,{dense:"",icon:"email","aria-label":"Email",color:"dark blue",size:"1em",href:"mailto:davidov05101996@gmail.com"},null,8,["href"]),s(n,{dense:"",icon:"phone","aria-label":"Phone",color:"green",size:"1em",href:"tel:89620031286"})]),_:1})]),_:1})])],64)}var re=x(q,[["render",K],["__scopeId","data-v-1dc1ee22"]]);export{re as default};
