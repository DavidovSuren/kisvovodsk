import{z as ee,v as E,m as te,A as ne,B as M,C as L,G as j,x as z,I as O,r as R,c as f,w as k,g as K,h as m,a8 as oe,a9 as ae,aa as ie,j as W,n as re,f as G,a3 as le,ab as ue,o as J,l as Z,H,K as se,O as ce,ac as ve,$ as Q}from"./index.aee0458e.js";import{u as de,a as fe}from"./use-dark.0c251164.js";import{g as U,s as X,c as me}from"./selection.c20c9e22.js";function pe(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,c)=>{const i=parseFloat(r);i&&(o[c]=i)}),o}var ge=ee({name:"touch-swipe",beforeMount(e,{value:o,arg:r,modifiers:c}){if(c.mouse!==!0&&E.has.touch!==!0)return;const i=c.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:pe(r),direction:U(c),noop:te,mouseStart(a){X(a,t)&&ne(a)&&(M(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(X(a,t)){const l=a.target;M(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,l){E.is.firefox===!0&&L(e,!0);const g=j(a);t.event={x:g.left,y:g.top,time:Date.now(),mouse:l===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){z(a);return}const l=Date.now()-t.event.time;if(l===0)return;const g=j(a),h=g.left-t.event.x,u=Math.abs(h),p=g.top-t.event.y,v=Math.abs(p);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(a);return}}else if(u<t.sensitivity[2]&&v<t.sensitivity[2])return;const y=u/l,b=v/l;t.direction.vertical===!0&&u<v&&u<100&&b>t.sensitivity[0]&&(t.event.dir=p<0?"up":"down"),t.direction.horizontal===!0&&u>v&&v<100&&y>t.sensitivity[0]&&(t.event.dir=h<0?"left":"right"),t.direction.up===!0&&u<v&&p<0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<v&&p>0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>v&&h<0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>v&&h>0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(z(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),me(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(C,50):C()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:u,y:v}})):t.end(a)},end(a){t.event!==void 0&&(O(t,"temp"),E.is.firefox===!0&&L(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&z(a),t.event=void 0)}};e.__qtouchswipe=t,c.mouse===!0&&M(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]]),E.has.touch===!0&&M(t,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const r=e.__qtouchswipe;r!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&r.end(),r.handler=o.value),r.direction=U(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(O(o,"main"),O(o,"temp"),E.is.firefox===!0&&L(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function he(){const e=new Map;return{getCache:function(o,r){return e[o]===void 0?e[o]=r:e[o]},getCacheWithFn:function(o,r){return e[o]===void 0?e[o]=r():e[o]}}}const ye={name:{required:!0},disable:Boolean},Y={setup(e,{slots:o}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},W(o.default))}},xe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},be=["update:modelValue","before-transition","transition"];function Ce(){const{props:e,emit:o,proxy:r}=K(),{getCacheWithFn:c}=he();let i,t;const a=R(null),l=R(null);function g(n){const s=e.vertical===!0?"up":"left";P((r.$q.lang.rtl===!0?-1:1)*(n.direction===s?1:-1))}const h=f(()=>[[ge,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);k(()=>e.modelValue,(n,s)=>{const x=_(n)===!0?A(n):-1;t!==!0&&$(x===-1?0:x<A(s)?-1:1),a.value!==x&&(a.value=x,o("before-transition",n,s),re(()=>{o("transition",n,s)}))});function C(){P(1)}function N(){P(-1)}Object.assign(r,{next:C,previous:N,goTo:I});function I(n){o("update:modelValue",n)}function _(n){return n!=null&&n!==""}function A(n){return i.findIndex(s=>s.props.name===n&&s.props.disable!==""&&s.props.disable!==!0)}function D(){return i.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function $(n){const s=n!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(n===-1?u.value:p.value):null;l.value!==s&&(l.value=s)}function P(n,s=a.value){let x=s+n;for(;x>-1&&x<i.length;){const S=i[x];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){$(n),t=!0,o("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}x+=n}e.infinite===!0&&i.length>0&&s!==-1&&s!==i.length&&P(n,n===-1?i.length:-1)}function T(){const n=A(e.modelValue);return a.value!==n&&(a.value=n),!0}function V(){const n=_(e.modelValue)===!0&&T()&&i[a.value];return e.keepAlive===!0?[m(ae,b.value,[m(w.value===!0?c(y.value,()=>({...Y,name:y.value})):Y,{key:y.value,style:v.value},()=>n)])]:[m("div",{class:"q-panel scroll",style:v.value,key:y.value,role:"tabpanel"},[n])]}function d(){if(i.length!==0)return e.animated===!0?[m(oe,{name:l.value},V)]:V()}function q(n){return i=ie(W(n.default,[])).filter(s=>s.props!==null&&s.props.slot===void 0&&_(s.props.name)===!0),i.length}function B(){return i}return{panelIndex:a,panelDirectives:h,updatePanelsList:q,updatePanelIndex:T,getPanelContent:d,getEnabledPanels:D,getPanels:B,isValidPanelName:_,keepAliveProps:b,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:P,goToPanel:I,nextPanel:C,previousPanel:N}}var Ae=G({name:"QCarouselSlide",props:{...ye,imgSrc:String},setup(e,{slots:o}){const r=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:r.value},W(o.default))}});let F=0;const Pe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},_e=["update:fullscreen","fullscreen"];function qe(){const e=K(),{props:o,emit:r,proxy:c}=e;let i,t,a;const l=R(!1);le(e)===!0&&k(()=>c.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&u()}),k(()=>o.fullscreen,p=>{l.value!==p&&g()}),k(l,p=>{r("update:fullscreen",p),r("fullscreen",p)});function g(){l.value===!0?u():h()}function h(){l.value!==!0&&(l.value=!0,a=c.$el.parentNode,a.replaceChild(t,c.$el),document.body.appendChild(c.$el),F++,F===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:u},H.add(i))}function u(){l.value===!0&&(i!==void 0&&(H.remove(i),i=void 0),a.replaceChild(c.$el,t),l.value=!1,F=Math.max(0,F-1),F===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return ue(()=>{t=document.createElement("span")}),J(()=>{o.fullscreen===!0&&h()}),Z(u),Object.assign(c,{toggleFullscreen:g,setFullscreen:h,exitFullscreen:u}),{inFullscreen:l,toggleFullscreen:g}}const Se=["top","right","bottom","left"],we=["regular","flat","outline","push","unelevated"];var Te=G({name:"QCarousel",props:{...de,...xe,...Pe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>we.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Se.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[..._e,...be],setup(e,{slots:o}){const{proxy:{$q:r}}=K(),c=fe(e,r);let i,t;const{updatePanelsList:a,getPanelContent:l,panelDirectives:g,goToPanel:h,previousPanel:u,nextPanel:p,getEnabledPanels:v,panelIndex:y}=Ce(),{inFullscreen:b}=qe(),w=f(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=f(()=>e.vertical===!0?"vertical":"horizontal"),N=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(c.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${D.value}`:"")),I=f(()=>{const d=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?d.reverse():d}),_=f(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),A=f(()=>e.navigationActiveIcon||_.value),D=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),$=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));k(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(i),P())}),k(()=>e.autoplay,d=>{d?P():clearInterval(i)});function P(){const d=ve(e.autoplay)===!0?e.autoplay:5e3;i=setTimeout(d>=0?p:u,Math.abs(d))}J(()=>{e.autoplay&&P()}),Z(()=>{clearInterval(i)});function T(d,q){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${d} q-carousel__navigation--${D.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(q))])}function V(){const d=[];if(e.navigation===!0){const q=o["navigation-icon"]!==void 0?o["navigation-icon"]:n=>m(Q,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),B=t-1;d.push(T("buttons",(n,s)=>{const x=n.props.name,S=y.value===s;return q({index:s,maxIndex:B,name:x,active:S,btnProps:{icon:S===!0?A.value:_.value,size:"sm",...$.value},onClick:()=>{h(x)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";d.push(T("thumbnails",B=>{const n=B.props;return m("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+q,src:n.imgSrc||n["img-src"],onClick:()=>{h(n.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&d.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[m(Q,{icon:I.value[0],...$.value,onClick:u})])),(e.infinite===!0||y.value<t-1)&&d.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[m(Q,{icon:I.value[1],...$.value,onClick:p})]))),ce(o.control,d)}return()=>(t=a(o),m("div",{class:N.value,style:w.value},[se("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>g.value)].concat(V())))}});export{Te as Q,Ae as a};
