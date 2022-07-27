import{Q as r,a as w,b as l}from"./QSeparator.6b00a8a0.js";import{Q as f}from"./QImg.3e9894f2.js";import{_,r as k,V as o,a2 as d,a4 as i,d as s,X as t,F as c,a5 as m,W as p,$ as u,a0 as h,a3 as g}from"./index.ca1f830d.js";import"./use-dark.fa8c8068.js";import"./selection.4b5a9e97.js";const x={setup(){return{slide:k(1),info:k("first"),eventsDark:[{id:1,icon:new URL("/assets/Prosh.7bce7581.png",self.location).href,link:"past",name:"\u0410\u0444\u0438\u0448\u0430"},{id:2,icon:new URL("/assets/Nast.084557c0.png",self.location).href,link:"thepresent",name:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F"},{id:3,icon:new URL("/assets/Bud.14bddfad.png",self.location).href,link:"future",name:"\u0424\u043E\u0442\u043E\u043E\u0442\u0447\u0435\u0442\u044B"}],food:[{id:1,icon:new URL("/assets/restraunt.e63d8c26.png",self.location).href,link:"restraunt",name:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"},{id:2,icon:new URL("/assets/cafe.fa2107ba.png",self.location).href,link:"cafe",name:"\u041A\u0430\u0444\u0435"},{id:3,icon:new URL("/assets/canteen.e287237f.png",self.location).href,link:"canteen",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u044B\u0435 "},{id:4,icon:new URL("/assets/fastfood.d484c1a7.png",self.location).href,link:"fastfood",name:"\u0424\u0430\u0441\u0442-\u0444\u0443\u0434"}],home:[{id:1,icon:new URL("/assets/hotel.48311715.png",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/sanatoriums.8f4559d5.png",self.location).href,link:"sanatoriums",name:"\u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0438"},{id:3,icon:new URL("/assets/Gostinitsa.72e08783.png",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:4,icon:new URL("/assets/motel.8271edca.png",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.3152b289.png",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/child.f287c099.png",self.location).href,link:"child",name:"\u0414\u0435\u0442\u044F\u043C"},{id:2,icon:new URL("/assets/cexcursionfe.4347bf77.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("/assets/acropolis.e22c67bd.png",self.location).href,link:"acropolis",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"},{id:4,icon:new URL("/assets/guides.b39dd1ee.png",self.location).href,link:"guides",name:"\u0413\u0438\u0434\u044B"},{id:5,icon:new URL("/assets/kick.1cba1701.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"}],clothes:[{id:1,icon:new URL("/assets/boutique.f83d9efb.png",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:2,icon:new URL("/assets/sport.2311a863.png",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:3,icon:new URL("/assets/fur.0c8f859d.png",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/gift.6a2c77c0.png",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"}],services:[{id:1,icon:new URL("/assets/cat.9c8bb014.png",self.location).href,link:"fashion",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B"},{id:2,icon:new URL("/assets/hair-cut.39c4f034.png",self.location).href,link:"hair-cut",name:"\u0411\u044C\u044E\u0442\u0438"},{id:3,icon:new URL("/assets/SPA.6433707f.png",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:4,icon:new URL("/assets/fitness.c3b90587.png",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:5,icon:new URL("/assets/laptop.256df84e.png",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"}],transport:[{id:1,icon:new URL("/assets/car-wash.7f5a6eb1.png",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.454ee43a.png",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.61afdd05.png",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/van.642ff995.png",self.location).href,link:"van",name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442 "}]}}},U={class:"q-pa-md"},L={class:"q-pa-md mt"},y={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},R={class:"q-pa-md mt"},b={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},q={class:"q-pa-md"},V={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"},v={class:"q-pa-md mt"},j={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},A={class:"q-pa-md mt"},N={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Q={class:"q-pa-md mt"},P={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},B={class:"q-pa-md mt"},S={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"};function C(D,n,G,a,I,F){return o(),d(c,null,[i("div",U,[s(r,{autoplay:"",swipeable:"",animated:"",modelValue:a.info,"onUpdate:modelValue":n[0]||(n[0]=e=>a.info=e),arrows:"",infinite:"",height:"250px",class:"shadow-3"},{default:t(()=>[s(l,{name:"first","img-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtiI1zTmPNOiGNOpj7XfsXWSFlKOhDleE1A&usqp=CAU"}),s(l,{name:"second","img-src":"https://xn--35-jlc3but5b.xn--p1ai/media/k2/items/cache/9ecd376e5371efaef9aad9bc9143aed8_L.jpg"}),s(l,{name:"third","img-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUbdbALL8s1dPZtHnJQsSNPxRb0nTDhIjhA&usqp=CAU"})]),_:1},8,["modelValue"])]),i("div",L,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":n[1]||(n[1]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[i("div",y,[(o(!0),d(c,null,m(a.eventsDark,e=>(o(),p(g,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(f,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),u(h(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),i("div",R,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":n[2]||(n[2]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[i("div",b,[(o(!0),d(c,null,m(a.tour,e=>(o(),p(g,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(f,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),u(h(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),i("div",q,[s(w,{dark:""}),s(r,{class:"div_bg",style:{"margin-top":"-30px"},modelValue:a.slide,"onUpdate:modelValue":n[3]||(n[3]=e=>a.slide=e),animated:"",arrows:"",height:"150px"},{default:t(()=>[s(w,{dark:""}),s(l,{name:1,class:"column no-wrap"},{default:t(()=>[i("div",V,[(o(!0),d(c,null,m(a.food,e=>(o(),p(g,{key:e.id,to:e.link,class:"bg-white"},{default:t(()=>[s(f,{class:"circle-borders col-3 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),u(h(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1}),s(w,{dark:""})]),_:1},8,["modelValue"])]),i("div",v,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":n[4]||(n[4]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[i("div",j,[(o(!0),d(c,null,m(a.home,e=>(o(),p(g,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(f,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),u(h(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),i("div",A,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":n[5]||(n[5]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[i("div",N,[(o(!0),d(c,null,m(a.services,e=>(o(),p(g,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(f,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),u(h(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),i("div",Q,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":n[6]||(n[6]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[i("div",P,[(o(!0),d(c,null,m(a.clothes,e=>(o(),p(g,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(f,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),u(h(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),i("div",B,[s(r,{style:{"margin-top":"20px"},modelValue:a.slide,"onUpdate:modelValue":n[7]||(n[7]=e=>a.slide=e),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:t(()=>[s(l,{name:1,class:"column no-wrap"},{default:t(()=>[i("div",S,[(o(!0),d(c,null,m(a.transport,e=>(o(),p(g,{class:"bg-white",key:e.id,to:e.link},{default:t(()=>[s(f,{class:"rounded-borders col-6 full-height",src:e.icon,width:"80px",height:"50px"},null,8,["src"]),u(h(e.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])])],64)}var z=_(x,[["render",C]]);export{z as default};
