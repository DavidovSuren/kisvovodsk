import{Q}from"./QCardSection.38e78038.js";import{f as K,r as v,w as O,o as ee,l as te,h as $,j as se,aa as Y,p as oe,ab as W,_ as X,ac as Z,M as d,X as _,d as n,O as l,F as g,Y as U,N as L,W as o,S as m,ad as ne,U as ae,V as h,Z as le,$ as ie}from"./index.de5a0afc.js";import{a as re}from"./selection.6c603f3f.js";import{Q as M}from"./QCard.8e75baa5.js";import{Q as G}from"./QSeparator.3e2b6733.js";import{Q as y}from"./QImg.691068a4.js";import{Q as R,a as C}from"./QCarousel.600686b3.js";import"./use-dark.3708964e.js";import"./use-ratio.a77f2d46.js";function B(a){let e=!1,u,s;function f(){s=arguments,e!==!0&&(e=!0,u=requestAnimationFrame(()=>{a.apply(this,s),s=void 0,e=!1}))}return f.cancel=()=>{window.cancelAnimationFrame(u),e=!1},f}const{passive:H}=oe;var D=K({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:a=>a>=0&&a<=1},scrollTarget:{default:void 0},onScroll:Function},setup(a,{slots:e,emit:u}){const s=v(0),f=v(null),j=v(null),i=v(null);let t,r,F,q,k,p;O(()=>a.height,()=>{t===!0&&x()}),O(()=>a.scrollTarget,()=>{t===!0&&(z(),T())});let S=c=>{s.value=c,a.onScroll!==void 0&&u("scroll",c)};function x(){let c,b,V;p===window?(c=0,V=b=window.innerHeight):(c=W(p).top,b=Y(p),V=c+b);const E=W(f.value).top,J=E+a.height;if(k!==void 0||J>c&&E<V){const A=(V-E)/(a.height+b);I((F-a.height)*A*a.speed),S(A)}}let I=c=>{r.style.transform=`translate3d(-50%,${Math.round(c)}px,0)`};function P(){F=r.naturalHeight||r.videoHeight||Y(r),t===!0&&x()}function T(){t=!0,p=re(f.value,a.scrollTarget),p.addEventListener("scroll",x,H),window.addEventListener("resize",q,H),x()}function z(){t===!0&&(t=!1,p.removeEventListener("scroll",x,H),window.removeEventListener("resize",q,H),p=void 0,I.cancel(),S.cancel(),q.cancel())}return ee(()=>{I=B(I),S=B(S),q=B(P),r=e.media!==void 0?j.value.children[0]:i.value,r.onload=r.onloadstart=r.loadedmetadata=P,P(),r.style.display="initial",window.IntersectionObserver!==void 0?(k=new IntersectionObserver(c=>{(c[0].isIntersecting===!0?T:z)()}),k.observe(f.value)):T()}),te(()=>{z(),k!==void 0&&k.disconnect(),r.onload=r.onloadstart=r.loadedmetadata=null}),()=>$("div",{ref:f,class:"q-parallax",style:{height:`${a.height}px`}},[$("div",{ref:j,class:"q-parallax__media absolute-full"},e.media!==void 0?e.media():[$("img",{ref:i,src:a.src})]),$("div",{class:"q-parallax__content absolute-full column flex-center"},e.content!==void 0?e.content({percentScrolled:s.value}):se(e.default))])}});const de={setup(){const a=Z();function e(s){window.location.href=s}function u(s){s.slice(0,4)==="http"?window.location.href=s:a.push(s)}return{goto:e,goToIf:u,slide:v("first"),sliderImg:[{id:1,name:"first",url:new URL("/assets/bannerchoco.f58173a7.jpeg",self.location).href,link:"post/1729",eventDate:1,eventMounth:"\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",eventStartHours:18,eventDurationHours:3,eventName:"\u0414\u0435\u043D\u044C \u041C\u043E\u043B\u043E\u0434\u043E\u0433\u043E \u0412\u0438\u043D\u0430"},{id:2,name:"second",url:new URL("/assets/bannerr.62cc2112.jpeg",self.location).href,link:"post/303",eventDate:2,eventMounth:"\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",eventStartHours:10,eventDurationHours:3,eventName:"\u0423\u0442\u0440\u043E \u0431\u043E\u0434\u0440\u043E\u0433\u043E \u043D\u0430\u0440\u0437\u0430\u043D\u0430"}]}}},ce={class:"loadingEvents"},ue={class:"custom-caption topLeft"},fe={class:"text-h5"},he={class:"text-subtitle1"},me={class:"custom-caption topRight"},pe={class:"text-h5"},_e={class:"custom-caption bottLeft"},ve={class:"text-h5"};function ge(a,e,u,s,f,j){return d(),_("div",ce,[n(R,{autoplay:"",swipeable:"",modelValue:s.slide,"onUpdate:modelValue":e[1]||(e[1]=i=>s.slide=i),arrows:"",infinite:"",animated:"",height:"220px",onMouseenter:e[2]||(e[2]=i=>a.autoplay=!1),onMouseleave:e[3]||(e[3]=i=>a.autoplay=!0)},{default:l(()=>[(d(!0),_(g,null,U(s.sliderImg,i=>(d(),L(C,{key:i.id,name:i.id,"img-src":i.url,onClick:ne(t=>s.goto(i.link),["self"])},{default:l(()=>[o("div",ue,[o("div",fe,m(i.eventDate),1),o("div",he,m(i.eventMounth),1)]),o("div",me,[o("div",pe,m(i.eventStartHours)+":00",1)]),o("div",_e,[o("div",ve,m(i.eventName),1)]),o("div",{class:"bottRight",onClick:e[0]||(e[0]=t=>s.goto("/best"))})]),_:2},1032,["name","img-src","onClick"]))),128))]),_:1},8,["modelValue"])])}var we=X(de,[["render",ge],["__scopeId","data-v-e97719fc"]]),N="/assets/kislovodsk.f2e28672.jpg",ke="/assets/artclip.b6e6e696.jpeg";const xe={components:{eventsCasrusel:we},setup(){const a=Z();function e(s){window.location.href=s}function u(s){s.slice(0,4)==="http"?window.location.href=s:a.push(s)}return{goto:e,goToIf:u,slide:v(1),info:v("first"),eventsDark:[{id:1,icon:new URL("../assets/icons/eventss/harp.png",self.location).href,link:"https://kursal.ru/",name:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F"},{id:2,icon:new URL("../assets/icons/eventss/painting.png",self.location).href,link:"https://afisha7.ru/kislovodsk/vystavki",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0438"}],home:[{id:1,icon:new URL("/assets/hotel.e2ed0eeb.jpg",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/Gostinitsa.148ff20f.jpg",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:3,icon:new URL("/assets/SPA.ff862e60.jpg",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:4,icon:new URL("/assets/motel.16c08b34.jpg",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.38a2f8e0.jpg",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/child.1cc81708.jpg",self.location).href,link:"child",name:"\u0414\u0435\u0442\u044F\u043C"},{id:2,icon:new URL("../assets/icons/tourism/cexcursionfe.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("../assets/icons/tourism/acropolis.png",self.location).href,link:"acropolis",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"},{id:4,icon:new URL("../assets/icons/services/kick.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"}],clothes:[{id:1,icon:new URL("/assets/boutique.2a2a3535.jpg",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:2,icon:new URL("/assets/sport.075822d9.jpg",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:3,icon:new URL("/assets/fur.0ab305fd.jpg",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/gift.223fd274.jpg",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"}],services:[{id:1,icon:new URL("/assets/fitness.5017642e.jpg",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:2,icon:new URL("/assets/cat.8e45096e.jpg",self.location).href,link:"pets",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B"},{id:3,icon:new URL("/assets/laptop.47114be9.jpg",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"},{id:4,icon:new URL("/assets/hair-cut.eebfee73.jpg",self.location).href,link:"hair-cut",name:"\u0411\u044C\u044E\u0442\u0438"}],transport:[{id:1,icon:new URL("/assets/car-wash.92ce20b6.jpg",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.771b37cb.jpeg",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.90dbbb71.jpg",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/BUS.20266bb7.webp",self.location).href,link:"https://yandex.ru/maps/11062/kislovodsk/transport/minibuses/?l=masstransit&ll=42.716822%2C43.904244&z=13.34/",name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"}]}}},w=a=>(le("data-v-3ab62925"),a=a(),ie(),a),be={class:"q-pa-md"},ye={class:"mtt"},Ue=w(()=>o("a",null,[o("h2",null,"\u0421\u0410\u041D\u0410\u0422\u041E\u0420\u0418\u0418")],-1)),Le={class:"mtt"},Re=w(()=>o("a",null,[o("h2",null,"\u0422\u0423\u0420\u0418\u0417\u041C")],-1)),Ce={class:"mtt"},je=w(()=>o("a",null,[o("h2",null,"\u0417\u0410\u0412\u0415\u0414\u0415\u041D\u0418\u042F")],-1)),qe={class:"q-pa-md mt"},Se={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ie={class:"textCard"},Ve={class:"q-pa-md mt"},Qe={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},$e={class:"textCard"},Me={class:"q-pa-md mt"},He={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Pe={class:"textCard"},Te={class:"q-pa-md mt"},ze={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},Ee={class:"textCard"},Be={class:"mmt"},De=w(()=>o("h1",{style:{color:"black"}}," \u041D\u0430\u0448\u0438 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u044B",-1)),Ne={class:"q-pa-md row items-start q-gutter-md"},Fe=w(()=>o("div",null,[o("h1",{style:{color:"black"}}," \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B")],-1)),Ae=w(()=>o("br",null,null,-1)),Oe={class:"row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap horisintal"};function Ye(a,e,u,s,f,j){const i=ae("eventsCasrusel");return d(),_(g,null,[o("div",be,[n(i),o("div",ye,[n(M,null,{default:l(()=>[n(D,{src:N,height:135,onClick:e[0]||(e[0]=t=>{this.$router.push("/sanatoriums")})},{default:l(()=>[n(Q,null,{default:l(()=>[Ue]),_:1})]),_:1})]),_:1})]),o("div",Le,[n(M,null,{default:l(()=>[n(D,{src:N,height:135,onClick:e[1]||(e[1]=t=>{this.$router.push("/tour")})},{default:l(()=>[n(Q,null,{default:l(()=>[Re]),_:1})]),_:1})]),_:1})]),o("div",Ce,[n(M,null,{default:l(()=>[n(D,{src:N,height:135,onClick:e[2]||(e[2]=t=>{this.$router.push("/health")})},{default:l(()=>[n(Q,null,{default:l(()=>[je]),_:1})]),_:1})]),_:1})])]),n(G,{color:"white",inset:""}),o("div",qe,[n(R,{style:{"margin-top":"60px"},modelValue:s.slide,"onUpdate:modelValue":e[3]||(e[3]=t=>s.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:l(()=>[n(C,{name:1,class:"column no-wrap"},{default:l(()=>[o("div",Se,[(d(!0),_(g,null,U(s.home,t=>(d(),L(h,{push:"",key:t.id,to:t.link,class:"cardColor"},{default:l(()=>[n(y,{class:"rounded-borders col-6 full-height",src:t.icon,width:"130px",height:"100px"},null,8,["src"]),o("p",Ie,m(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",Ve,[n(R,{style:{"margin-top":"20px"},modelValue:s.slide,"onUpdate:modelValue":e[4]||(e[4]=t=>s.slide=t),animated:"","control-color":"primary",arrows:"",height:"180px"},{default:l(()=>[n(C,{name:1,class:"column no-wrap"},{default:l(()=>[o("div",Qe,[(d(!0),_(g,null,U(s.services,t=>(d(),L(h,{push:"",key:t.id,to:t.link,class:"cardColor"},{default:l(()=>[n(y,{class:"rounded-borders col-6 full-height",src:t.icon,width:"130px",height:"100px"},null,8,["src"]),o("p",$e,m(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",Me,[n(R,{style:{"margin-top":"20px"},modelValue:s.slide,"onUpdate:modelValue":e[5]||(e[5]=t=>s.slide=t),animated:"","control-color":"primary",arrows:"",height:"180px"},{default:l(()=>[n(C,{name:1,class:"column no-wrap"},{default:l(()=>[o("div",He,[(d(!0),_(g,null,U(s.clothes,t=>(d(),L(h,{push:"",key:t.id,to:t.link,class:"cardColor"},{default:l(()=>[n(y,{class:"rounded-borders col-6 full-height",src:t.icon,width:"130px",height:"100px"},null,8,["src"]),o("p",Pe,m(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),o("div",Te,[n(R,{style:{"margin-top":"20px"},modelValue:s.slide,"onUpdate:modelValue":e[6]||(e[6]=t=>s.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:l(()=>[n(C,{name:1,class:"column no-wrap"},{default:l(()=>[o("div",ze,[(d(!0),_(g,null,U(s.transport,t=>(d(),L(h,{push:"",key:t.id,onClick:r=>s.goToIf(t.link),class:"cardColor"},{default:l(()=>[n(y,{class:"rounded-borders col-6 full-height",src:t.icon,width:"130px",height:"100px"},null,8,["src"]),o("p",Ee,m(t.name),1)]),_:2},1032,["onClick"]))),128))])]),_:1})]),_:1},8,["modelValue"]),o("div",Be,[De,n(h,{push:"",class:"cardColor",href:"https://artclip.ru/"},{default:l(()=>[n(y,{class:"partner",src:ke})]),_:1},8,["href"])])]),n(G,{color:"white",inset:""}),o("div",Ne,[n(M,{class:"my-card text-white",style:{background:"rgb(236, 236, 208)"}},{default:l(()=>[n(Q,{style:{"text-align":"center"}},{default:l(()=>[Fe,Ae,o("div",Oe,[n(h,{push:"",dense:"",icon:"fa-brands fa-vk","aria-label":"Fa-brands fa-vk",color:"blue",size:"1em",href:"//vk.com/id711311713"},null,8,["href"]),n(h,{push:"",dense:"",icon:"fa-brands fa-instagram","aria-label":"Fa-brands fa-instagram",color:"red",size:"1em",href:"https://instagram.com/heart_city_kissloveodsk?igshid=YmMyMTA2M2Y="},null,8,["href"]),n(h,{push:"",dense:"",icon:"email","aria-label":"Email",color:"dark blue",size:"1em",href:"mailto:davidov05101996@gmail.com"},null,8,["href"]),n(h,{push:"",dense:"",icon:"phone","aria-label":"Phone",color:"green",size:"1em",href:"tel:89620031286"})])]),_:1})]),_:1})])],64)}var ot=X(xe,[["render",Ye],["__scopeId","data-v-3ab62925"]]);export{ot as default};
