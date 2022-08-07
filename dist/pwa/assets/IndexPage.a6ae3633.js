import{Q as r,a as l}from"./QCarousel.a48c2a18.js";import{Q as d}from"./QImg.3f9f6000.js";import{_ as k,r as _,Q as o,Z as c,a0 as n,d as s,S as t,$ as f,F as m,W as p,a1 as u,R as h,X as g}from"./index.26d368e8.js";import{Q as w}from"./QSeparator.6ae523a2.js";import"./use-dark.81034252.js";import"./selection.662faa60.js";var x="/assets/artclip.b6e6e696.jpeg";const U={setup(){return{slide:_(1),info:_("first"),eventsDark:[{id:1,icon:new URL("/assets/harp.259e70de.png",self.location).href,link:"https://kursal.ru/",name:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F"},{id:2,icon:new URL("/assets/painting.b2261059.png",self.location).href,link:"https://afisha7.ru/kislovodsk/vystavki",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/cinema.eed4dbb7.png",self.location).href,link:"https://kino-movietheater.business.site/",name:"\u041A\u0438\u043D\u043E"}],food:[{id:1,icon:new URL("/assets/restraunt.e63d8c26.png",self.location).href,link:"restraunt",name:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"},{id:2,icon:new URL("/assets/cafe.fa2107ba.png",self.location).href,link:"cafe",name:"\u041A\u0430\u0444\u0435"},{id:3,icon:new URL("/assets/canteen.e287237f.png",self.location).href,link:"canteen",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u044B\u0435 "},{id:4,icon:new URL("/assets/fastfood.d484c1a7.png",self.location).href,link:"fastfood",name:"\u0424\u0430\u0441\u0442-\u0444\u0443\u0434"}],home:[{id:1,icon:new URL("/assets/hotel.48311715.png",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/sanatoriums.8f4559d5.png",self.location).href,link:"sanatoriums",name:"\u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0438"},{id:3,icon:new URL("/assets/Gostinitsa.72e08783.png",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:4,icon:new URL("/assets/motel.8271edca.png",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.3152b289.png",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/child.f287c099.png",self.location).href,link:"child",name:"\u0414\u0435\u0442\u044F\u043C"},{id:2,icon:new URL("/assets/cexcursionfe.4347bf77.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("/assets/acropolis.e22c67bd.png",self.location).href,link:"acropolis",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"},{id:4,icon:new URL("/assets/kick.1cba1701.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"}],clothes:[{id:1,icon:new URL("/assets/boutique.f83d9efb.png",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:2,icon:new URL("/assets/sport.2311a863.png",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:3,icon:new URL("/assets/fur.0c8f859d.png",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/gift.6a2c77c0.png",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"}],services:[{id:1,icon:new URL("/assets/video.68409141.png",self.location).href,link:"video",name:"\u0412\u0438\u0434\u0435\u043E"},{id:2,icon:new URL("/assets/cat.9c8bb014.png",self.location).href,link:"pets",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B"},{id:3,icon:new URL("/assets/hair-cut.39c4f034.png",self.location).href,link:"hair-cut",name:"\u0411\u044C\u044E\u0442\u0438"},{id:4,icon:new URL("/assets/SPA.6433707f.png",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:5,icon:new URL("/assets/fitness.c3b90587.png",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:6,icon:new URL("/assets/laptop.256df84e.png",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"}],transport:[{id:1,icon:new URL("/assets/car-wash.7f5a6eb1.png",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.454ee43a.png",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.61afdd05.png",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/van.642ff995.png",self.location).href,link:"van",name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442 "}]}}},v={class:"q-pa-md"},y={class:"q-pa-md mt"},L={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},R={class:"q-pa-md mt"},V={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},q={class:"q-pa-md"},b={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"},j={class:"q-pa-md mt"},Q={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},N={class:"q-pa-md mt"},S={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},A={class:"q-pa-md mt"},B={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},C={class:"q-pa-md mt"},D={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},I=n("br",null,null,-1),P={class:"text-h4"},F=p("\u041D\u0430\u0448\u0438 \u043F\u0430\u0440\u043D\u0442\u0451\u0440\u044B "),G=n("br",null,null,-1);function O(X,i,E,a,T,W){return o(),c(m,null,[n("div",v,[s(r,{autoplay:"",swipeable:"",animated:"",modelValue:a.info,"onUpdate:modelValue":i[0]||(i[0]=e=>a.info=e),arrows:"",infinite:"",height:"250px",class:"shadow-3"},{default:t(()=>[s(l,{name:"first","img-src":"https://xn--35-jlc3but5b.xn--p1ai/media/k2/items/cache/9ecd376e5371efaef9aad9bc9143aed8_L.jpg"}),s(l,{name:"second","img-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtiI1zTmPNOiGNOpj7XfsXWSFlKOhDleE1A&usqp=CAU"})]),_:1},8,["modelValue"])]),n("div",y,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":i[1]||(i[1]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[n("div",L,[(o(!0),c(m,null,u(a.eventsDark,e=>(o(),h(f,{class:"bg-white",key:e.id,href:e.link},{default:t(()=>[s(d,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["href"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),n("div",R,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":i[2]||(i[2]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[n("div",V,[(o(!0),c(m,null,u(a.tour,e=>(o(),h(f,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(d,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),n("div",q,[s(w,{dark:""}),s(r,{class:"div_bg",style:{"margin-top":"-30px"},modelValue:a.slide,"onUpdate:modelValue":i[3]||(i[3]=e=>a.slide=e),animated:"",arrows:"",height:"150px"},{default:t(()=>[s(w,{dark:""}),s(l,{name:1,class:"column no-wrap"},{default:t(()=>[n("div",b,[(o(!0),c(m,null,u(a.food,e=>(o(),h(f,{key:e.id,to:e.link,class:"bg-white"},{default:t(()=>[s(d,{class:"circle-borders col-3 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1}),s(w,{dark:""})]),_:1},8,["modelValue"])]),n("div",j,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":i[4]||(i[4]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[n("div",Q,[(o(!0),c(m,null,u(a.home,e=>(o(),h(f,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(d,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),n("div",N,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":i[5]||(i[5]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[n("div",S,[(o(!0),c(m,null,u(a.services,e=>(o(),h(f,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(d,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),n("div",A,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":i[6]||(i[6]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[n("div",B,[(o(!0),c(m,null,u(a.clothes,e=>(o(),h(f,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(d,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),n("div",C,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":i[7]||(i[7]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[n("div",D,[(o(!0),c(m,null,u(a.transport,e=>(o(),h(f,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(d,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),p(g(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"]),I,n("div",P,[F,G,s(f,{href:"https://artclip.ru/"},{default:t(()=>[s(d,{class:"partner",src:x})]),_:1},8,["href"])])])],64)}var Y=k(U,[["render",O]]);export{Y as default};
