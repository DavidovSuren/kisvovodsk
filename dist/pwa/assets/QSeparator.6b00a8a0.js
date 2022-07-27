var le=Object.defineProperty,se=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var J=(e,n,o)=>n in e?le(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,b=(e,n)=>{for(var o in n||(n={}))ce.call(n,o)&&J(e,o,n[o]);if(Y)for(var o of Y(n))ve.call(n,o)&&J(e,o,n[o]);return e},q=(e,n)=>se(e,ue(n));import{A as de,x as F,m as fe,B as me,C as z,D as R,I as G,y as O,J as W,r as K,c as v,w as B,g as Q,h as g,a8 as ge,a9 as pe,aa as he,j as U,n as ye,f as X,v as xe,ab as be,o as ae,l as oe,H as Z,L as Ce,P as Pe,ac as _e,a3 as j}from"./index.ca1f830d.js";import{u as ie,a as re}from"./use-dark.fa8c8068.js";import{g as ee,s as te,c as qe}from"./selection.4b5a9e97.js";function Se(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,u)=>{const r=parseFloat(o);r&&(n[u]=r)}),n}var $e=de({name:"touch-swipe",beforeMount(e,{value:n,arg:o,modifiers:u}){if(u.mouse!==!0&&F.has.touch!==!0)return;const r=u.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Se(o),direction:ee(u),noop:fe,mouseStart(i){te(i,t)&&me(i)&&(z(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(te(i,t)){const l=i.target;z(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,l){F.is.firefox===!0&&R(e,!0);const d=G(i);t.event={x:d.left,y:d.top,time:Date.now(),mouse:l===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){O(i);return}const l=Date.now()-t.event.time;if(l===0)return;const d=G(i),p=d.left-t.event.x,s=Math.abs(p),h=d.top-t.event.y,f=Math.abs(h);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(i);return}}else if(s<t.sensitivity[2]&&f<t.sensitivity[2])return;const y=s/l,C=f/l;t.direction.vertical===!0&&s<f&&s<100&&C>t.sensitivity[0]&&(t.event.dir=h<0?"up":"down"),t.direction.horizontal===!0&&s>f&&f<100&&y>t.sensitivity[0]&&(t.event.dir=p<0?"left":"right"),t.direction.up===!0&&s<f&&h<0&&s<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<f&&h>0&&s<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>f&&p<0&&f<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>f&&p>0&&f<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(O(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qe(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(P,50):P()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:s,y:f}})):t.end(i)},end(i){t.event!==void 0&&(W(t,"temp"),F.is.firefox===!0&&R(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&O(i),t.event=void 0)}};e.__qtouchswipe=t,u.mouse===!0&&z(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]]),F.has.touch===!0&&z(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchswipe;o!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&o.end(),o.handler=n.value),o.direction=ee(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(W(n,"main"),W(n,"temp"),F.is.firefox===!0&&R(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function we(){const e=new Map;return{getCache:function(n,o){return e[n]===void 0?e[n]=o:e[n]},getCacheWithFn:function(n,o){return e[n]===void 0?e[n]=o():e[n]}}}const ke={name:{required:!0},disable:Boolean},ne={setup(e,{slots:n}){return()=>g("div",{class:"q-panel scroll",role:"tabpanel"},U(n.default))}},Ie={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Be=["update:modelValue","before-transition","transition"];function Ae(){const{props:e,emit:n,proxy:o}=Q(),{getCacheWithFn:u}=we();let r,t;const i=K(null),l=K(null);function d(a){const c=e.vertical===!0?"up":"left";_((o.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const p=v(()=>[[$e,d,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),s=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),h=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),f=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);B(()=>e.modelValue,(a,c)=>{const x=S(a)===!0?T(a):-1;t!==!0&&I(x===-1?0:x<T(c)?-1:1),i.value!==x&&(i.value=x,n("before-transition",a,c),ye(()=>{n("transition",a,c)}))});function P(){_(1)}function M(){_(-1)}Object.assign(o,{next:P,previous:M,goTo:A});function A(a){n("update:modelValue",a)}function S(a){return a!=null&&a!==""}function T(a){return r.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function V(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function I(a){const c=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?s.value:h.value):null;l.value!==c&&(l.value=c)}function _(a,c=i.value){let x=c+a;for(;x>-1&&x<r.length;){const w=r[x];if(w!==void 0&&w.props.disable!==""&&w.props.disable!==!0){I(a),t=!0,n("update:modelValue",w.props.name),setTimeout(()=>{t=!1});return}x+=a}e.infinite===!0&&r.length>0&&c!==-1&&c!==r.length&&_(a,a===-1?r.length:-1)}function E(){const a=T(e.modelValue);return i.value!==a&&(i.value=a),!0}function L(){const a=S(e.modelValue)===!0&&E()&&r[i.value];return e.keepAlive===!0?[g(pe,C.value,[g(k.value===!0?u(y.value,()=>q(b({},ne),{name:y.value})):ne,{key:y.value,style:f.value},()=>a)])]:[g("div",{class:"q-panel scroll",style:f.value,key:y.value,role:"tabpanel"},[a])]}function m(){if(r.length!==0)return e.animated===!0?[g(ge,{name:l.value},L)]:L()}function $(a){return r=he(U(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&S(c.props.name)===!0),r.length}function D(){return r}return{panelIndex:i,panelDirectives:p,updatePanelsList:$,updatePanelIndex:E,getPanelContent:m,getEnabledPanels:V,getPanels:D,isValidPanelName:S,keepAliveProps:C,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:_,goToPanel:A,nextPanel:P,previousPanel:M}}var Re=X({name:"QCarouselSlide",props:q(b({},ke),{imgSrc:String}),setup(e,{slots:n}){const o=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>g("div",{class:"q-carousel__slide",style:o.value},U(n.default))}});let N=0;const Te={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ee=["update:fullscreen","fullscreen"];function De(){const e=Q(),{props:n,emit:o,proxy:u}=e;let r,t,i;const l=K(!1);xe(e)===!0&&B(()=>u.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&s()}),B(()=>n.fullscreen,h=>{l.value!==h&&d()}),B(l,h=>{o("update:fullscreen",h),o("fullscreen",h)});function d(){l.value===!0?s():p()}function p(){l.value!==!0&&(l.value=!0,i=u.$el.parentNode,i.replaceChild(t,u.$el),document.body.appendChild(u.$el),N++,N===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:s},Z.add(r))}function s(){l.value===!0&&(r!==void 0&&(Z.remove(r),r=void 0),i.replaceChild(u.$el,t),l.value=!1,N=Math.max(0,N-1),N===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),u.$el.scrollIntoView!==void 0&&setTimeout(()=>{u.$el.scrollIntoView()})))}return be(()=>{t=document.createElement("span")}),ae(()=>{n.fullscreen===!0&&p()}),oe(s),Object.assign(u,{toggleFullscreen:d,setFullscreen:p,exitFullscreen:s}),{inFullscreen:l,toggleFullscreen:d}}const Fe=["top","right","bottom","left"],Ne=["regular","flat","outline","push","unelevated"];var Oe=X({name:"QCarousel",props:q(b(b(b({},ie),Ie),Te),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ne.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Fe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...Ee,...Be],setup(e,{slots:n}){const{proxy:{$q:o}}=Q(),u=re(e,o);let r,t;const{updatePanelsList:i,getPanelContent:l,panelDirectives:d,goToPanel:p,previousPanel:s,nextPanel:h,getEnabledPanels:f,panelIndex:y}=Ae(),{inFullscreen:C}=De(),k=v(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=v(()=>e.vertical===!0?"vertical":"horizontal"),M=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(u.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${V.value}`:"")),A=v(()=>{const m=[e.prevIcon||o.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||o.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&o.lang.rtl===!0?m.reverse():m}),S=v(()=>e.navigationIcon||o.iconSet.carousel.navigationIcon),T=v(()=>e.navigationActiveIcon||S.value),V=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),I=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));B(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),_())}),B(()=>e.autoplay,m=>{m?_():clearInterval(r)});function _(){const m=_e(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(m>=0?h:s,Math.abs(m))}ae(()=>{e.autoplay&&_()}),oe(()=>{clearInterval(r)});function E(m,$){return g("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${V.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[g("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map($))])}function L(){const m=[];if(e.navigation===!0){const $=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>g(j,q(b({key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`},a.btnProps),{onClick:a.onClick})),D=t-1;m.push(E("buttons",(a,c)=>{const x=a.props.name,w=y.value===c;return $({index:c,maxIndex:D,name:x,active:w,btnProps:b({icon:w===!0?T.value:S.value,size:"sm"},I.value),onClick:()=>{p(x)}})}))}else if(e.thumbnails===!0){const $=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(E("thumbnails",D=>{const a=D.props;return g("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+$,src:a.imgSrc||a["img-src"],onClick:()=>{p(a.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&m.push(g("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[g(j,q(b({icon:A.value[0]},I.value),{onClick:s}))])),(e.infinite===!0||y.value<t-1)&&m.push(g("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[g(j,q(b({icon:A.value[1]},I.value),{onClick:h}))]))),Pe(n.control,m)}return()=>(t=i(n),g("div",{class:M.value,style:k.value},[Ce("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>d.value)].concat(L())))}});const Me={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},H={xs:2,sm:4,md:8,lg:16,xl:24};var We=X({name:"QSeparator",props:q(b({},ie),{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(e){const n=Q(),o=re(e,n.proxy.$q),u=v(()=>e.vertical===!0?"vertical":"horizontal"),r=v(()=>` q-separator--${u.value}`),t=v(()=>e.inset!==!1?`${r.value}-${Me[e.inset]}`:""),i=v(()=>`q-separator${r.value}${t.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),l=v(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const p=e.spaced===!0?`${H.md}px`:e.spaced in H?`${H[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${s[0]}`]=d[`margin${s[1]}`]=p}return d});return()=>g("hr",{class:i.value,style:l.value,"aria-orientation":u.value})}});export{Oe as Q,We as a,Re as b};
