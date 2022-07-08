var _e=Object.defineProperty,we=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var ue=(e,n,l)=>n in e?_e(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,q=(e,n)=>{for(var l in n||(n={}))ye.call(n,l)&&ue(e,l,n[l]);if(re)for(var l of re(n))ke.call(n,l)&&ue(e,l,n[l]);return e},A=(e,n)=>we(e,xe(n));import{A as be,x as K,m as qe,B as Ce,C as te,D as ne,I as ce,y as oe,J as ae,r as G,c as g,w as z,g as le,h,a8 as Pe,a9 as Se,aa as Ve,j as se,n as Le,f as pe,v as Ue,ab as Re,o as ge,l as he,H as de,L as Ie,P as Ae,ac as Be,a2 as L,_ as Te,V as k,a4 as B,a3 as m,d as u,X as f,F as T,a5 as D,W as j,$ as M,a0 as $}from"./index.1220f4f7.js";import{g as fe,s as me,c as Ee}from"./selection.8369243c.js";import{u as Ne,a as Fe}from"./use-dark.698d8ad9.js";import{Q as ie}from"./QSeparator.c115b1ef.js";import{Q}from"./QImg.5cb76145.js";function De(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,i)=>{const s=parseFloat(l);s&&(n[i]=s)}),n}var je=be({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:i}){if(i.mouse!==!0&&K.has.touch!==!0)return;const s=i.mouseCapture===!0?"Capture":"",o={handler:n,sensitivity:De(l),direction:fe(i),noop:qe,mouseStart(t){me(t,o)&&Ce(t)&&(te(o,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),o.start(t,!0))},touchStart(t){if(me(t,o)){const r=t.target;te(o,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),o.start(t)}},start(t,r){K.is.firefox===!0&&ne(e,!0);const w=ce(t);o.event={x:w.left,y:w.top,time:Date.now(),mouse:r===!0,dir:!1}},move(t){if(o.event===void 0)return;if(o.event.dir!==!1){oe(t);return}const r=Date.now()-o.event.time;if(r===0)return;const w=ce(t),x=w.left-o.event.x,c=Math.abs(x),_=w.top-o.event.y,v=Math.abs(_);if(o.event.mouse!==!0){if(c<o.sensitivity[1]&&v<o.sensitivity[1]){o.end(t);return}}else if(c<o.sensitivity[2]&&v<o.sensitivity[2])return;const y=c/r,C=v/r;o.direction.vertical===!0&&c<v&&c<100&&C>o.sensitivity[0]&&(o.event.dir=_<0?"up":"down"),o.direction.horizontal===!0&&c>v&&v<100&&y>o.sensitivity[0]&&(o.event.dir=x<0?"left":"right"),o.direction.up===!0&&c<v&&_<0&&c<100&&C>o.sensitivity[0]&&(o.event.dir="up"),o.direction.down===!0&&c<v&&_>0&&c<100&&C>o.sensitivity[0]&&(o.event.dir="down"),o.direction.left===!0&&c>v&&x<0&&v<100&&y>o.sensitivity[0]&&(o.event.dir="left"),o.direction.right===!0&&c>v&&x>0&&v<100&&y>o.sensitivity[0]&&(o.event.dir="right"),o.event.dir!==!1?(oe(t),o.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ee(),o.styleCleanup=N=>{o.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};N===!0?setTimeout(P,50):P()}),o.handler({evt:t,touch:o.event.mouse!==!0,mouse:o.event.mouse,direction:o.event.dir,duration:r,distance:{x:c,y:v}})):o.end(t)},end(t){o.event!==void 0&&(ae(o,"temp"),K.is.firefox===!0&&ne(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(!0),t!==void 0&&o.event.dir!==!1&&oe(t),o.event=void 0)}};e.__qtouchswipe=o,i.mouse===!0&&te(o,"main",[[e,"mousedown","mouseStart",`passive${s}`]]),K.has.touch===!0&&te(o,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=fe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(ae(n,"main"),ae(n,"temp"),K.is.firefox===!0&&ne(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Me(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const $e={name:{required:!0},disable:Boolean},ve={setup(e,{slots:n}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},se(n.default))}},Qe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ze=["update:modelValue","before-transition","transition"];function Oe(){const{props:e,emit:n,proxy:l}=le(),{getCacheWithFn:i}=Me();let s,o;const t=G(null),r=G(null);function w(a){const d=e.vertical===!0?"up":"left";S((l.$q.lang.rtl===!0?-1:1)*(a.direction===d?1:-1))}const x=g(()=>[[je,w,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),_=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),N=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);z(()=>e.modelValue,(a,d)=>{const b=U(a)===!0?W(a):-1;o!==!0&&F(b===-1?0:b<W(d)?-1:1),t.value!==b&&(t.value=b,n("before-transition",a,d),Le(()=>{n("transition",a,d)}))});function P(){S(1)}function J(){S(-1)}Object.assign(l,{next:P,previous:J,goTo:O});function O(a){n("update:modelValue",a)}function U(a){return a!=null&&a!==""}function W(a){return s.findIndex(d=>d.props.name===a&&d.props.disable!==""&&d.props.disable!==!0)}function Z(){return s.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function F(a){const d=a!==0&&e.animated===!0&&t.value!==-1?"q-transition--"+(a===-1?c.value:_.value):null;r.value!==d&&(r.value=d)}function S(a,d=t.value){let b=d+a;for(;b>-1&&b<s.length;){const I=s[b];if(I!==void 0&&I.props.disable!==""&&I.props.disable!==!0){F(a),o=!0,n("update:modelValue",I.props.name),setTimeout(()=>{o=!1});return}b+=a}e.infinite===!0&&s.length>0&&d!==-1&&d!==s.length&&S(a,a===-1?s.length:-1)}function X(){const a=W(e.modelValue);return t.value!==a&&(t.value=a),!0}function ee(){const a=U(e.modelValue)===!0&&X()&&s[t.value];return e.keepAlive===!0?[h(Se,C.value,[h(N.value===!0?i(y.value,()=>A(q({},ve),{name:y.value})):ve,{key:y.value,style:v.value},()=>a)])]:[h("div",{class:"q-panel scroll",style:v.value,key:y.value,role:"tabpanel"},[a])]}function p(){if(s.length!==0)return e.animated===!0?[h(Pe,{name:r.value},ee)]:ee()}function R(a){return s=Ve(se(a.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&U(d.props.name)===!0),s.length}function H(){return s}return{panelIndex:t,panelDirectives:x,updatePanelsList:R,updatePanelIndex:X,getPanelContent:p,getEnabledPanels:Z,getPanels:H,isValidPanelName:U,keepAliveProps:C,needsUniqueKeepAliveWrapper:N,goToPanelByOffset:S,goToPanel:O,nextPanel:P,previousPanel:J}}var V=pe({name:"QCarouselSlide",props:A(q({},$e),{imgSrc:String}),setup(e,{slots:n}){const l=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:l.value},se(n.default))}});let Y=0;const We={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Xe=["update:fullscreen","fullscreen"];function He(){const e=le(),{props:n,emit:l,proxy:i}=e;let s,o,t;const r=G(!1);Ue(e)===!0&&z(()=>i.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&c()}),z(()=>n.fullscreen,_=>{r.value!==_&&w()}),z(r,_=>{l("update:fullscreen",_),l("fullscreen",_)});function w(){r.value===!0?c():x()}function x(){r.value!==!0&&(r.value=!0,t=i.$el.parentNode,t.replaceChild(o,i.$el),document.body.appendChild(i.$el),Y++,Y===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:c},de.add(s))}function c(){r.value===!0&&(s!==void 0&&(de.remove(s),s=void 0),t.replaceChild(i.$el,o),r.value=!1,Y=Math.max(0,Y-1),Y===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return Re(()=>{o=document.createElement("span")}),ge(()=>{n.fullscreen===!0&&x()}),he(c),Object.assign(i,{toggleFullscreen:w,setFullscreen:x,exitFullscreen:c}),{inFullscreen:r,toggleFullscreen:w}}const Ke=["top","right","bottom","left"],Ye=["regular","flat","outline","push","unelevated"];var E=pe({name:"QCarousel",props:A(q(q(q({},Ne),Qe),We),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ye.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ke.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...Xe,...ze],setup(e,{slots:n}){const{proxy:{$q:l}}=le(),i=Fe(e,l);let s,o;const{updatePanelsList:t,getPanelContent:r,panelDirectives:w,goToPanel:x,previousPanel:c,nextPanel:_,getEnabledPanels:v,panelIndex:y}=Oe(),{inFullscreen:C}=He(),N=g(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=g(()=>e.vertical===!0?"vertical":"horizontal"),J=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Z.value}`:"")),O=g(()=>{const p=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?p.reverse():p}),U=g(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),W=g(()=>e.navigationActiveIcon||U.value),Z=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),F=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));z(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(s),S())}),z(()=>e.autoplay,p=>{p?S():clearInterval(s)});function S(){const p=Be(e.autoplay)===!0?e.autoplay:5e3;s=setTimeout(p>=0?_:c,Math.abs(p))}ge(()=>{e.autoplay&&S()}),he(()=>{clearInterval(s)});function X(p,R){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${p} q-carousel__navigation--${Z.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(R))])}function ee(){const p=[];if(e.navigation===!0){const R=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>h(L,A(q({key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`},a.btnProps),{onClick:a.onClick})),H=o-1;p.push(X("buttons",(a,d)=>{const b=a.props.name,I=y.value===d;return R({index:d,maxIndex:H,name:b,active:I,btnProps:q({icon:I===!0?W.value:U.value,size:"sm"},F.value),onClick:()=>{x(b)}})}))}else if(e.thumbnails===!0){const R=e.controlColor!==void 0?` text-${e.controlColor}`:"";p.push(X("thumbnails",H=>{const a=H.props;return h("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+R,src:a.imgSrc||a["img-src"],onClick:()=>{x(a.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&p.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[h(L,A(q({icon:O.value[0]},F.value),{onClick:c}))])),(e.infinite===!0||y.value<o-1)&&p.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[h(L,A(q({icon:O.value[1]},F.value),{onClick:_}))]))),Ae(n.control,p)}return()=>(o=t(n),h("div",{class:J.value,style:N.value},[Ie("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>w.value)].concat(ee())))}});const Ge={setup(){return{slide:G(1),info:G("first"),food:[{id:1,icon:new URL("/assets/restraunt.e63d8c26.png",self.location).href,link:"restraunt",name:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"},{id:2,icon:new URL("/assets/cafe.fa2107ba.png",self.location).href,link:"cafe",name:"\u041A\u0430\u0444\u0435"},{id:3,icon:new URL("/assets/canteen.e287237f.png",self.location).href,link:"canteen",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u044B\u0435"},{id:4,icon:new URL("/assets/fastfood.d484c1a7.png",self.location).href,link:"fastfood",name:"\u0424\u0430\u0441\u0442-\u0444\u0443\u0434"}],home:[{id:1,icon:new URL("/assets/hotel.48311715.png",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/sanatoriums.8f4559d5.png",self.location).href,link:"sanatoriums",name:"\u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0438"},{id:3,icon:new URL("/assets/Gostinitsa.72e08783.png",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:4,icon:new URL("/assets/motel.8271edca.png",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.3152b289.png",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/events.3eeaebd1.png",self.location).href,link:"events",name:"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0438"},{id:2,icon:new URL("/assets/cexcursionfe.4347bf77.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("/assets/acropolis.e22c67bd.png",self.location).href,link:"acropolis",name:"\u0412\u0438\u0434\u044B"},{id:4,icon:new URL("/assets/guides.b39dd1ee.png",self.location).href,link:"guides",name:"\u0413\u0438\u0434\u044B"}],clothes:[{id:1,icon:new URL("/assets/fashion.df86b974.png",self.location).href,link:"fashion",name:"\u0421\u0435\u0442\u0435\u0432\u044B\u0435"},{id:2,icon:new URL("/assets/boutique.f83d9efb.png",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:3,icon:new URL("/assets/sport.2311a863.png",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:4,icon:new URL("/assets/fur.0c8f859d.png",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"}],services:[{id:1,icon:new URL("/assets/gift.6a2c77c0.png",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"},{id:2,icon:new URL("/assets/hair-cut.39c4f034.png",self.location).href,link:"hair-cut",name:"\u041F\u0430\u0440\u0438\u043A\u043C\u0430\u0445\u0435\u0441\u043A\u0438\u0435"},{id:3,icon:new URL("/assets/SPA.6433707f.png",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:4,icon:new URL("/assets/fitness.c3b90587.png",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:5,icon:new URL("/assets/laptop.256df84e.png",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"}],transport:[{id:1,icon:new URL("/assets/car-wash.7f5a6eb1.png",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.454ee43a.png",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.61afdd05.png",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/van.642ff995.png",self.location).href,link:"van",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043A\u0438 "}]}}},Je={class:"q-pa-md"},Ze=m("div",{class:"text-h4",style:{color:"bisque"}},"\u041A\u0438\u0441\u043B\u043E\u0432\u043E\u0434\u0441\u043A",-1),et={class:"q-pa-md",style:{"margin-top":"-40px"}},tt=m("h2",null,"\u041F\u0418\u0422\u0410\u041D\u0418\u0415",-1),nt={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"},ot={class:"q-pa-md mt"},at=m("h2",null,"\u0416\u0418\u041B\u042C\u0401",-1),it={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},lt={class:"q-pa-md mt"},st=m("h2",null,"\u0422\u0423\u0420\u0418\u0417\u041C",-1),rt={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},ut={class:"q-pa-md mt"},ct=m("h2",null,"\u041E\u0414\u0415\u0416\u0414\u0410",-1),dt={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},ft={class:"q-pa-md mt"},mt=m("h2",null,"\u0423\u0421\u041B\u0423\u0413\u0418",-1),vt={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},pt={class:"q-pa-md mt"},gt=m("h2",null,"\u0422\u0420\u0410\u041D\u0421\u041F\u041E\u0420\u0422",-1),ht={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"};function _t(e,n,l,i,s,o){return k(),B(T,null,[m("div",Je,[u(E,{swipeable:"",animated:"",modelValue:i.info,"onUpdate:modelValue":n[0]||(n[0]=t=>i.info=t),arrows:"",infinite:"",height:"200px",class:"shadow-3"},{default:f(()=>[u(V,{name:"first","img-src":"https://www.hotevents.ru/img/m/gloriajeans/gj_2013-03-18.jpg"}),u(V,{name:"second","img-src":"https://www.belcitymall.ru/images/wss/sale/zolla/18.03.2021.jpg"}),u(V,{name:"third","img-src":"https://stv24.tv/wp-content/uploads/2020/08/02/star-kis5.jpg"},{default:f(()=>[Ze]),_:1})]),_:1},8,["modelValue"])]),m("div",et,[u(ie,{dark:""}),tt,u(E,{class:"div_bg",style:{"margin-top":"-40px"},modelValue:i.slide,"onUpdate:modelValue":n[1]||(n[1]=t=>i.slide=t),animated:"",arrows:"",height:"150px"},{default:f(()=>[u(ie,{dark:""}),u(V,{name:1,class:"column no-wrap"},{default:f(()=>[m("div",nt,[(k(!0),B(T,null,D(i.food,t=>(k(),j(L,{key:t.id,to:t.link,class:"bg-white"},{default:f(()=>[u(Q,{class:"circle-borders col-3 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),M($(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1}),u(ie,{dark:""})]),_:1},8,["modelValue"])]),m("div",ot,[at,u(E,{style:{"margin-top":"-40px"},modelValue:i.slide,"onUpdate:modelValue":n[2]||(n[2]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:f(()=>[u(V,{name:1,class:"column no-wrap"},{default:f(()=>[m("div",it,[(k(!0),B(T,null,D(i.home,t=>(k(),j(L,{class:"bg-white",key:t.id,to:t.link},{default:f(()=>[u(Q,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),M($(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),m("div",lt,[st,u(E,{style:{"margin-top":"-40px"},modelValue:i.slide,"onUpdate:modelValue":n[3]||(n[3]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:f(()=>[u(V,{name:1,class:"column no-wrap"},{default:f(()=>[m("div",rt,[(k(!0),B(T,null,D(i.tour,t=>(k(),j(L,{class:"bg-white",key:t.id,to:t.link},{default:f(()=>[u(Q,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),M($(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),m("div",ut,[ct,u(E,{style:{"margin-top":"-40px"},modelValue:i.slide,"onUpdate:modelValue":n[4]||(n[4]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:f(()=>[u(V,{name:1,class:"column no-wrap"},{default:f(()=>[m("div",dt,[(k(!0),B(T,null,D(i.clothes,t=>(k(),j(L,{class:"bg-white",key:t.id,to:t.link},{default:f(()=>[u(Q,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),M($(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),m("div",ft,[mt,u(E,{style:{"margin-top":"-40px"},modelValue:i.slide,"onUpdate:modelValue":n[5]||(n[5]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:f(()=>[u(V,{name:1,class:"column no-wrap"},{default:f(()=>[m("div",vt,[(k(!0),B(T,null,D(i.services,t=>(k(),j(L,{class:"bg-white",key:t.id,to:t.link},{default:f(()=>[u(Q,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),M($(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),m("div",pt,[gt,u(E,{style:{"margin-top":"-40px"},modelValue:i.slide,"onUpdate:modelValue":n[6]||(n[6]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:f(()=>[u(V,{name:1,class:"column no-wrap"},{default:f(()=>[m("div",ht,[(k(!0),B(T,null,D(i.transport,t=>(k(),j(L,{class:"bg-white",key:t.id,to:t.link},{default:f(()=>[u(Q,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),M($(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])])],64)}var Ct=Te(Ge,[["render",_t]]);export{Ct as default};
