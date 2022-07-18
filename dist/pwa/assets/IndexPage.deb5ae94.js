var ye=Object.defineProperty,ke=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var de=(e,n,l)=>n in e?ye(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,q=(e,n)=>{for(var l in n||(n={}))qe.call(n,l)&&de(e,l,n[l]);if(ce)for(var l of ce(n))Ce.call(n,l)&&de(e,l,n[l]);return e},V=(e,n)=>ke(e,be(n));import{A as Pe,x as K,m as Se,B as Le,C as te,D as ae,I as fe,y as oe,J as ie,r as G,c as f,w as Q,g as ne,h,a8 as Ue,a9 as Ve,aa as Re,j as re,n as Ie,f as ue,v as Be,ab as $e,o as he,l as we,H as me,L as Ae,P as Te,ac as Ee,a3 as U,_ as Ne,V as k,a2 as $,a4 as _,d as c,X as m,F as A,a5 as D,W as F,$ as j,a0 as M}from"./index.4d175518.js";import{g as ve,s as pe,c as De}from"./selection.d9bcfa55.js";import{u as xe,a as _e}from"./use-dark.f35de9a9.js";import{Q as z}from"./QImg.ec46a63f.js";function Fe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,i)=>{const s=parseFloat(l);s&&(n[i]=s)}),n}var je=Pe({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:i}){if(i.mouse!==!0&&K.has.touch!==!0)return;const s=i.mouseCapture===!0?"Capture":"",a={handler:n,sensitivity:Fe(l),direction:ve(i),noop:Se,mouseStart(t){pe(t,a)&&Le(t)&&(te(a,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(t,!0))},touchStart(t){if(pe(t,a)){const r=t.target;te(a,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),a.start(t)}},start(t,r){K.is.firefox===!0&&ae(e,!0);const v=fe(t);a.event={x:v.left,y:v.top,time:Date.now(),mouse:r===!0,dir:!1}},move(t){if(a.event===void 0)return;if(a.event.dir!==!1){oe(t);return}const r=Date.now()-a.event.time;if(r===0)return;const v=fe(t),w=v.left-a.event.x,u=Math.abs(w),x=v.top-a.event.y,p=Math.abs(x);if(a.event.mouse!==!0){if(u<a.sensitivity[1]&&p<a.sensitivity[1]){a.end(t);return}}else if(u<a.sensitivity[2]&&p<a.sensitivity[2])return;const y=u/r,C=p/r;a.direction.vertical===!0&&u<p&&u<100&&C>a.sensitivity[0]&&(a.event.dir=x<0?"up":"down"),a.direction.horizontal===!0&&u>p&&p<100&&y>a.sensitivity[0]&&(a.event.dir=w<0?"left":"right"),a.direction.up===!0&&u<p&&x<0&&u<100&&C>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&u<p&&x>0&&u<100&&C>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&u>p&&w<0&&p<100&&y>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&u>p&&w>0&&p<100&&y>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(oe(t),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),De(),a.styleCleanup=E=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};E===!0?setTimeout(P,50):P()}),a.handler({evt:t,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:r,distance:{x:u,y:p}})):a.end(t)},end(t){a.event!==void 0&&(ie(a,"temp"),K.is.firefox===!0&&ae(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),t!==void 0&&a.event.dir!==!1&&oe(t),a.event=void 0)}};e.__qtouchswipe=a,i.mouse===!0&&te(a,"main",[[e,"mousedown","mouseStart",`passive${s}`]]),K.has.touch===!0&&te(a,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=ve(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(ie(n,"main"),ie(n,"temp"),K.is.firefox===!0&&ae(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Me(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const ze={name:{required:!0},disable:Boolean},ge={setup(e,{slots:n}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},re(n.default))}},Qe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Oe=["update:modelValue","before-transition","transition"];function We(){const{props:e,emit:n,proxy:l}=ne(),{getCacheWithFn:i}=Me();let s,a;const t=G(null),r=G(null);function v(o){const d=e.vertical===!0?"up":"left";S((l.$q.lang.rtl===!0?-1:1)*(o.direction===d?1:-1))}const w=f(()=>[[je,v,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),E=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Q(()=>e.modelValue,(o,d)=>{const b=R(o)===!0?W(o):-1;a!==!0&&N(b===-1?0:b<W(d)?-1:1),t.value!==b&&(t.value=b,n("before-transition",o,d),Ie(()=>{n("transition",o,d)}))});function P(){S(1)}function J(){S(-1)}Object.assign(l,{next:P,previous:J,goTo:O});function O(o){n("update:modelValue",o)}function R(o){return o!=null&&o!==""}function W(o){return s.findIndex(d=>d.props.name===o&&d.props.disable!==""&&d.props.disable!==!0)}function Z(){return s.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function N(o){const d=o!==0&&e.animated===!0&&t.value!==-1?"q-transition--"+(o===-1?u.value:x.value):null;r.value!==d&&(r.value=d)}function S(o,d=t.value){let b=d+o;for(;b>-1&&b<s.length;){const B=s[b];if(B!==void 0&&B.props.disable!==""&&B.props.disable!==!0){N(o),a=!0,n("update:modelValue",B.props.name),setTimeout(()=>{a=!1});return}b+=o}e.infinite===!0&&s.length>0&&d!==-1&&d!==s.length&&S(o,o===-1?s.length:-1)}function X(){const o=W(e.modelValue);return t.value!==o&&(t.value=o),!0}function ee(){const o=R(e.modelValue)===!0&&X()&&s[t.value];return e.keepAlive===!0?[h(Ve,C.value,[h(E.value===!0?i(y.value,()=>V(q({},ge),{name:y.value})):ge,{key:y.value,style:p.value},()=>o)])]:[h("div",{class:"q-panel scroll",style:p.value,key:y.value,role:"tabpanel"},[o])]}function g(){if(s.length!==0)return e.animated===!0?[h(Ue,{name:r.value},ee)]:ee()}function I(o){return s=Re(re(o.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&R(d.props.name)===!0),s.length}function H(){return s}return{panelIndex:t,panelDirectives:w,updatePanelsList:I,updatePanelIndex:X,getPanelContent:g,getEnabledPanels:Z,getPanels:H,isValidPanelName:R,keepAliveProps:C,needsUniqueKeepAliveWrapper:E,goToPanelByOffset:S,goToPanel:O,nextPanel:P,previousPanel:J}}var L=ue({name:"QCarouselSlide",props:V(q({},ze),{imgSrc:String}),setup(e,{slots:n}){const l=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:l.value},re(n.default))}});let Y=0;const Xe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},He=["update:fullscreen","fullscreen"];function Ke(){const e=ne(),{props:n,emit:l,proxy:i}=e;let s,a,t;const r=G(!1);Be(e)===!0&&Q(()=>i.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),Q(()=>n.fullscreen,x=>{r.value!==x&&v()}),Q(r,x=>{l("update:fullscreen",x),l("fullscreen",x)});function v(){r.value===!0?u():w()}function w(){r.value!==!0&&(r.value=!0,t=i.$el.parentNode,t.replaceChild(a,i.$el),document.body.appendChild(i.$el),Y++,Y===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:u},me.add(s))}function u(){r.value===!0&&(s!==void 0&&(me.remove(s),s=void 0),t.replaceChild(i.$el,a),r.value=!1,Y=Math.max(0,Y-1),Y===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return $e(()=>{a=document.createElement("span")}),he(()=>{n.fullscreen===!0&&w()}),we(u),Object.assign(i,{toggleFullscreen:v,setFullscreen:w,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:v}}const Ye=["top","right","bottom","left"],Ge=["regular","flat","outline","push","unelevated"];var T=ue({name:"QCarousel",props:V(q(q(q({},xe),Qe),Xe),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ge.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ye.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...He,...Oe],setup(e,{slots:n}){const{proxy:{$q:l}}=ne(),i=_e(e,l);let s,a;const{updatePanelsList:t,getPanelContent:r,panelDirectives:v,goToPanel:w,previousPanel:u,nextPanel:x,getEnabledPanels:p,panelIndex:y}=We(),{inFullscreen:C}=Ke(),E=f(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=f(()=>e.vertical===!0?"vertical":"horizontal"),J=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Z.value}`:"")),O=f(()=>{const g=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?g.reverse():g}),R=f(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),W=f(()=>e.navigationActiveIcon||R.value),Z=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),N=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Q(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(s),S())}),Q(()=>e.autoplay,g=>{g?S():clearInterval(s)});function S(){const g=Ee(e.autoplay)===!0?e.autoplay:5e3;s=setTimeout(g>=0?x:u,Math.abs(g))}he(()=>{e.autoplay&&S()}),we(()=>{clearInterval(s)});function X(g,I){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${g} q-carousel__navigation--${Z.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},p().map(I))])}function ee(){const g=[];if(e.navigation===!0){const I=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>h(U,V(q({key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`},o.btnProps),{onClick:o.onClick})),H=a-1;g.push(X("buttons",(o,d)=>{const b=o.props.name,B=y.value===d;return I({index:d,maxIndex:H,name:b,active:B,btnProps:q({icon:B===!0?W.value:R.value,size:"sm"},N.value),onClick:()=>{w(b)}})}))}else if(e.thumbnails===!0){const I=e.controlColor!==void 0?` text-${e.controlColor}`:"";g.push(X("thumbnails",H=>{const o=H.props;return h("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+I,src:o.imgSrc||o["img-src"],onClick:()=>{w(o.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&g.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[h(U,V(q({icon:O.value[0]},N.value),{onClick:u}))])),(e.infinite===!0||y.value<a-1)&&g.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[h(U,V(q({icon:O.value[1]},N.value),{onClick:x}))]))),Te(n.control,g)}return()=>(a=t(n),h("div",{class:J.value,style:E.value},[Ae("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>v.value)].concat(ee())))}});const Je={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},le={xs:2,sm:4,md:8,lg:16,xl:24};var se=ue({name:"QSeparator",props:V(q({},xe),{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(e){const n=ne(),l=_e(e,n.proxy.$q),i=f(()=>e.vertical===!0?"vertical":"horizontal"),s=f(()=>` q-separator--${i.value}`),a=f(()=>e.inset!==!1?`${s.value}-${Je[e.inset]}`:""),t=f(()=>`q-separator${s.value}${a.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),r=f(()=>{const v={};if(e.size!==void 0&&(v[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const w=e.spaced===!0?`${le.md}px`:e.spaced in le?`${le[e.spaced]}px`:e.spaced,u=e.vertical===!0?["Left","Right"]:["Top","Bottom"];v[`margin${u[0]}`]=v[`margin${u[1]}`]=w}return v});return()=>h("hr",{class:t.value,style:r.value,"aria-orientation":i.value})}});const Ze={setup(){return{slide:G(1),info:G("first"),food:[{id:1,icon:new URL("/assets/restraunt.e63d8c26.png",self.location).href,link:"restraunt",name:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"},{id:2,icon:new URL("/assets/cafe.fa2107ba.png",self.location).href,link:"cafe",name:"\u041A\u0430\u0444\u0435"},{id:3,icon:new URL("/assets/canteen.e287237f.png",self.location).href,link:"canteen",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u044B\u0435 "},{id:4,icon:new URL("/assets/fastfood.d484c1a7.png",self.location).href,link:"fastfood",name:"\u0424\u0430\u0441\u0442-\u0444\u0443\u0434"}],home:[{id:1,icon:new URL("/assets/hotel.48311715.png",self.location).href,link:"hotel",name:"\u041E\u0442\u0435\u043B\u0438"},{id:2,icon:new URL("/assets/sanatoriums.8f4559d5.png",self.location).href,link:"sanatoriums",name:"\u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0438"},{id:3,icon:new URL("/assets/Gostinitsa.72e08783.png",self.location).href,link:"gostinitsa",name:"\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B"},{id:4,icon:new URL("/assets/motel.8271edca.png",self.location).href,link:"motel",name:"\u0425\u043E\u0441\u0442\u0435\u043B\u044B"},{id:5,icon:new URL("/assets/flat.3152b289.png",self.location).href,link:"flat",name:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"}],tour:[{id:1,icon:new URL("/assets/events.3eeaebd1.png",self.location).href,link:"events",name:"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F"},{id:2,icon:new URL("/assets/cexcursionfe.4347bf77.png",self.location).href,link:"cexcursionfe",name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"},{id:3,icon:new URL("/assets/acropolis.e22c67bd.png",self.location).href,link:"acropolis",name:"\u0412\u0438\u0434\u044B"},{id:4,icon:new URL("/assets/guides.b39dd1ee.png",self.location).href,link:"guides",name:"\u0413\u0438\u0434\u044B"}],clothes:[{id:1,icon:new URL("/assets/fashion.df86b974.png",self.location).href,link:"fashion",name:"\u0421\u0435\u0442\u0435\u0432\u044B\u0435"},{id:2,icon:new URL("/assets/boutique.f83d9efb.png",self.location).href,link:"boutique",name:"\u0411\u0443\u0442\u0438\u043A\u0438"},{id:3,icon:new URL("/assets/sport.2311a863.png",self.location).href,link:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435"},{id:4,icon:new URL("/assets/fur.0c8f859d.png",self.location).href,link:"fur",name:"\u041C\u0435\u0445\u043E\u0432\u044B\u0435"}],services:[{id:1,icon:new URL("/assets/horse.0599b809.png",self.location).href,link:"horse",name:"\u041B\u043E\u0448\u0430\u0434\u0438"},{id:2,icon:new URL("/assets/kick.1cba1701.png",self.location).href,link:"extreme",name:"\u042D\u043A\u0441\u0442\u0440\u0438\u043C"},{id:3,icon:new URL("/assets/gift.6a2c77c0.png",self.location).href,link:"gift",name:"\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u044B"},{id:4,icon:new URL("/assets/hair-cut.39c4f034.png",self.location).href,link:"hair-cut",name:"\u041F\u0430\u0440\u0438\u043A\u043C\u0430\u0445\u0435\u0440\u0441\u043A\u0438\u0435"},{id:5,icon:new URL("/assets/SPA.6433707f.png",self.location).href,link:"spa",name:"\u0421\u041F\u0410"},{id:6,icon:new URL("/assets/fitness.c3b90587.png",self.location).href,link:"fitness",name:"\u0424\u0438\u0442\u043D\u0435\u0441"},{id:7,icon:new URL("/assets/laptop.256df84e.png",self.location).href,link:"laptop",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"}],transport:[{id:1,icon:new URL("/assets/car-wash.7f5a6eb1.png",self.location).href,link:"car-wash",name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0439\u043A\u0438"},{id:2,icon:new URL("/assets/parking.454ee43a.png",self.location).href,link:"parking",name:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0438"},{id:3,icon:new URL("/assets/repair.61afdd05.png",self.location).href,link:"repair",name:"\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"},{id:4,icon:new URL("/assets/van.642ff995.png",self.location).href,link:"van",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043A\u0438 "}]}}},et={class:"q-pa-md"},tt=_("div",{class:"text-h4",style:{color:"bisque"}},"\u041A\u0438\u0441\u043B\u043E\u0432\u043E\u0434\u0441\u043A",-1),nt={class:"q-pa-md"},at={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"},ot={class:"q-pa-md mt"},it={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},lt={class:"q-pa-md mt"},st={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},rt={class:"q-pa-md mt"},ut={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},ct={class:"q-pa-md mt"},dt={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"},ft={class:"q-pa-md mt"},mt={class:"row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"};function vt(e,n,l,i,s,a){return k(),$(A,null,[_("div",et,[c(T,{autoplay:"",swipeable:"",animated:"",modelValue:i.info,"onUpdate:modelValue":n[0]||(n[0]=t=>i.info=t),arrows:"",infinite:"",height:"200px",class:"shadow-3"},{default:m(()=>[c(L,{name:"first","img-src":"https://www.hotevents.ru/img/m/gloriajeans/gj_2013-03-18.jpg"}),c(L,{name:"second","img-src":"https://www.belcitymall.ru/images/wss/sale/zolla/18.03.2021.jpg"}),c(L,{name:"third","img-src":"https://stv24.tv/wp-content/uploads/2020/08/02/star-kis5.jpg"},{default:m(()=>[tt]),_:1})]),_:1},8,["modelValue"])]),_("div",nt,[c(se,{dark:""}),c(T,{class:"div_bg",style:{"margin-top":"-30px"},modelValue:i.slide,"onUpdate:modelValue":n[1]||(n[1]=t=>i.slide=t),animated:"",arrows:"",height:"150px"},{default:m(()=>[c(se,{dark:""}),c(L,{name:1,class:"column no-wrap"},{default:m(()=>[_("div",at,[(k(!0),$(A,null,D(i.food,t=>(k(),F(U,{key:t.id,to:t.link,class:"bg-white"},{default:m(()=>[c(z,{class:"circle-borders col-3 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),j(M(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1}),c(se,{dark:""})]),_:1},8,["modelValue"])]),_("div",ot,[c(T,{style:{"margin-top":"20px"},modelValue:i.slide,"onUpdate:modelValue":n[2]||(n[2]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:m(()=>[c(L,{name:1,class:"column no-wrap"},{default:m(()=>[_("div",it,[(k(!0),$(A,null,D(i.home,t=>(k(),F(U,{class:"bg-white",key:t.id,to:t.link},{default:m(()=>[c(z,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),j(M(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_("div",lt,[c(T,{style:{"margin-top":"20px"},modelValue:i.slide,"onUpdate:modelValue":n[3]||(n[3]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:m(()=>[c(L,{name:1,class:"column no-wrap"},{default:m(()=>[_("div",st,[(k(!0),$(A,null,D(i.tour,t=>(k(),F(U,{class:"bg-white",key:t.id,to:t.link},{default:m(()=>[c(z,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),j(M(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_("div",rt,[c(T,{style:{"margin-top":"20px"},modelValue:i.slide,"onUpdate:modelValue":n[4]||(n[4]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:m(()=>[c(L,{name:1,class:"column no-wrap"},{default:m(()=>[_("div",ut,[(k(!0),$(A,null,D(i.clothes,t=>(k(),F(U,{class:"bg-white",key:t.id,to:t.link},{default:m(()=>[c(z,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),j(M(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_("div",ct,[c(T,{style:{"margin-top":"20px"},modelValue:i.slide,"onUpdate:modelValue":n[5]||(n[5]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:m(()=>[c(L,{name:1,class:"column no-wrap"},{default:m(()=>[_("div",dt,[(k(!0),$(A,null,D(i.services,t=>(k(),F(U,{class:"bg-white",key:t.id,to:t.link},{default:m(()=>[c(z,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),j(M(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_("div",ft,[c(T,{style:{"margin-top":"20px"},modelValue:i.slide,"onUpdate:modelValue":n[6]||(n[6]=t=>i.slide=t),animated:"","control-color":"primary",arrows:"",height:"150px"},{default:m(()=>[c(L,{name:1,class:"column no-wrap"},{default:m(()=>[_("div",mt,[(k(!0),$(A,null,D(i.transport,t=>(k(),F(U,{class:"bg-white",key:t.id,to:t.link},{default:m(()=>[c(z,{class:"rounded-borders col-6 full-height",src:t.icon,width:"80px",height:"50px"},null,8,["src"]),j(M(t.name),1)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1},8,["modelValue"])])],64)}var _t=Ne(Ze,[["render",vt]]);export{_t as default};
