var Bt=Object.defineProperty,zt=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var We=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var Re=(e,o,n)=>o in e?Bt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,R=(e,o)=>{for(var n in o||(o={}))Vt.call(o,n)&&Re(e,n,o[n]);if(We)for(var n of We(o))Ot.call(o,n)&&Re(e,n,o[n]);return e},J=(e,o)=>zt(e,Pt(o));import{f as P,c as m,h as L,j as N,r as x,k as lt,o as U,n as K,l as A,m as Be,g as H,p as O,a as ze,w as k,q as rt,s as ue,H as Fe,v as Mt,t as Ae,u as Ht,x as V,y as Pe,z as Dt,A as Qt,B as Wt,C as ne,D as pe,E as Ne,G as be,I as xe,J as ye,K as Rt,L as Ie,M as ut,N as Ft,O as ie,b as At,P as Nt,Q as It,R as Xt,S as Yt,U as st,_ as ct,V as j,W as Te,X as $,d as T,Y as dt,Z as ft,$ as Se,a0 as Xe,a1 as Ye,a2 as ge,F as je,a3 as Ue,a4 as vt,a5 as jt,a6 as Ut}from"./index.8cde8121.js";import{u as Ve,a as Oe}from"./use-dark.1d768c25.js";import{g as Ke,s as Ge,c as Kt}from"./selection.1a1d6ba6.js";import{b as ae}from"./format.801e7424.js";var Gt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:n.value},N(o.default))}}),Jt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:n.value},N(o.default))}});function Zt(){const e=x(!lt.value);return e.value===!1&&U(()=>{e.value=!0}),e}const mt=typeof ResizeObserver!="undefined",Je=mt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(clearTimeout(n),n=null,l){const{offsetWidth:c,offsetHeight:i}=l;(c!==t.width||i!==t.height)&&(t={width:c,height:i},o("resize",t))}}const v=H();if(Object.assign(v.proxy,{trigger:a}),mt===!0){let c;return U(()=>{K(()=>{l=v.proxy.$el.parentNode,l&&(c=new ResizeObserver(a),c.observe(l),s())})}),A(()=>{clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),Be}else{let w=function(){clearTimeout(n),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,O.passive),i=void 0)},b=function(){w(),l&&l.contentDocument&&(i=l.contentDocument.defaultView,i.addEventListener("resize",a,O.passive),s())};const c=Zt();let i;return U(()=>{K(()=>{l=v.proxy.$el,l&&b()})}),A(w),()=>{if(c.value===!0)return L("object",{style:Je.style,tabindex:-1,type:"text/html",data:Je.url,"aria-hidden":"true",onLoad:b})}}}}),eo=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=ze(ue,()=>{console.error("QHeader needs to be child of QLayout")}),a=x(parseInt(e.heightHint,10)),s=x(!0),v=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?a.value:0;const u=a.value-t.scroll.value.position;return u>0?u:0}),i=m(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),w=m(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),b=m(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=m(()=>{const u=t.rows.value.top,C={};return u[0]==="l"&&t.left.space===!0&&(C[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(C[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function d(u,C){t.update("header",u,C)}function p(u,C){u.value!==C&&(u.value=C)}function _({height:u}){p(a,u),d("size",u)}function g(u){w.value===!0&&p(s,!0),n("focusin",u)}k(()=>e.modelValue,u=>{d("space",u),p(s,!0),t.animate()}),k(c,u=>{d("offset",u)}),k(()=>e.reveal,u=>{u===!1&&p(s,e.modelValue)}),k(s,u=>{t.animate(),n("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&p(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const E={};return t.instances.header=E,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",c.value),A(()=>{t.instances.header===E&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=rt(o.default,[]);return e.elevated===!0&&u.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(L(Ee,{debounce:0,onResize:_})),L("header",{class:b.value,style:y.value,onFocusin:g},u)}}}),$e=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=m(()=>parseInt(e.lines,10)),l=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=m(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>L("div",{style:t.value,class:l.value},N(o.default))}}),to=P({name:"QList",props:J(R({},Ve),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:o}){const n=H(),l=Oe(e,n.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L("div",{class:t.value},N(o.default))}});function oo(e,o,n){let l;function t(){l!==void 0&&(Fe.remove(l),l=void 0)}return A(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},Fe.add(l)}}}const no={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},io=["before-show","show","before-hide","hide"];function ao({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:a}){const s=H(),{props:v,emit:c,proxy:i}=s;let w;function b(u){e.value===!0?p(u):y(u)}function y(u){if(v.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!0),w=u,K(()=>{w===u&&(w=void 0)})),(v.modelValue===null||C===!1)&&d(u)}function d(u){e.value!==!0&&(e.value=!0,c("before-show",u),l!==void 0?l(u):c("show",u))}function p(u){if(v.disable===!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!1),w=u,K(()=>{w===u&&(w=void 0)})),(v.modelValue===null||C===!1)&&_(u)}function _(u){e.value!==!1&&(e.value=!1,c("before-hide",u),t!==void 0?t(u):c("hide",u))}function g(u){v.disable===!0&&u===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?d:_)(w)}k(()=>v.modelValue,g),n!==void 0&&Mt(s)===!0&&k(()=>i.$route.fullPath,()=>{n.value===!0&&e.value===!0&&p()}),a===!0&&U(()=>{g(v.modelValue)});const E={show:y,hide:p,toggle:b};return Object.assign(i,E),E}const lo=[null,document,document.body,document.scrollingElement,document.documentElement];function ro(e,o){let n=Ht(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return lo.includes(n)?window:n}function ht(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function pt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function we(){if(le!==void 0)return le;const e=document.createElement("p"),o=document.createElement("div");Ae(e,{width:"100%",height:"200px"}),Ae(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),le=n-l,le}function uo(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,qe,ke,ee,Ce=!1,Ze,et,Y;function so(e){co(e)&&Pe(e)}function co(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Dt(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const s=o[a];if(uo(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function tt(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(ee===void 0||o!==window.innerHeight)&&(ee=n-o,document.scrollingElement.scrollTop=l),l>ee&&(document.scrollingElement.scrollTop-=Math.ceil((l-ee)/8))}))}function ot(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);qe=pt(window),ke=ht(window),Ze=o.style.left,et=o.style.top,o.style.left=`-${qe}px`,o.style.top=`-${ke}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,O.passiveCapture),window.visualViewport.addEventListener("scroll",re,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",tt,O.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",so,O.notPassive),e==="remove"&&(V.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",re,O.passiveCapture),window.visualViewport.removeEventListener("scroll",re,O.passiveCapture)):window.removeEventListener("scroll",tt,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ze,o.style.top=et,window.scrollTo(qe,ke),ee=void 0)}function fo(e){let o="add";if(e===!0){if(Z++,Y!==void 0){clearTimeout(Y),Y=void 0;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){clearTimeout(Y),Y=setTimeout(()=>{ot(o),Y=void 0},100);return}}ot(o)}function vo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,fo(o))}}}function mo(){let e;return A(()=>{clearTimeout(e)}),{registerTimeout(o,n){clearTimeout(e),e=setTimeout(o,n)},removeTimeout(){clearTimeout(e)}}}function Le(e,o,n){const l=xe(e);let t,a=l.left-o.event.x,s=l.top-o.event.y,v=Math.abs(a),c=Math.abs(s);const i=o.direction;i.horizontal===!0&&i.vertical!==!0?t=a<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?t=s<0?"up":"down":i.up===!0&&s<0?(t="up",v>c&&(i.left===!0&&a<0?t="left":i.right===!0&&a>0&&(t="right"))):i.down===!0&&s>0?(t="down",v>c&&(i.left===!0&&a<0?t="left":i.right===!0&&a>0&&(t="right"))):i.left===!0&&a<0?(t="left",v<c&&(i.up===!0&&s<0?t="up":i.down===!0&&s>0&&(t="down"))):i.right===!0&&a>0&&(t="right",v<c&&(i.up===!0&&s<0?t="up":i.down===!0&&s>0&&(t="down")));let w=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,w=!0,t==="left"||t==="right"?(l.left-=a,v=0,a=0):(l.top-=s,c=0,s=0)}return{synthetic:w,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:v,y:c},offset:{x:a,y:s},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let ho=0;var _e=Qt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&V.has.touch!==!0)return;function l(a,s){n.mouse===!0&&s===!0?Pe(a):(n.stop===!0&&be(a),n.prevent===!0&&Ne(a))}const t={uid:"qvtp_"+ho++,handler:o,modifiers:n,direction:Ke(n),noop:Be,mouseStart(a){Ge(a,t)&&Wt(a)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ge(a,t)){const s=a.target;ne(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(V.is.firefox===!0&&pe(e,!0),t.lastEvt=a,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const i=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ne(i),a.cancelBubble===!0&&be(i),Object.assign(i,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:i}}be(a)}const{left:v,top:c}=xe(a);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const s=xe(a),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const i=t.event.mouse===!0,w=()=>{l(a,i),n.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Kt(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,n.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),i===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{p(),d()},50):p()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:d,synthetic:p}=Le(a,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&w(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=p===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||i===!0&&t.modifiers.mouseAllDir===!0){w(),t.event.detected=!0,t.move(a);return}const b=Math.abs(v),y=Math.abs(c);b!==y&&(t.direction.horizontal===!0&&b>y||t.direction.vertical===!0&&b<y||t.direction.up===!0&&b<y&&c<0||t.direction.down===!0&&b<y&&c>0||t.direction.left===!0&&b>y&&v<0||t.direction.right===!0&&b>y&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ye(t,"temp"),V.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=Le(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,n.mouse===!0&&ne(t,"main",[[e,"mousedown","mouseStart",`passive${n.mouseCapture===!0?"Capture":""}`]]),V.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ke(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ye(o,"main"),ye(o,"temp"),V.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const nt=150;var po=P({name:"QDrawer",inheritAttrs:!1,props:J(R(R({},no),Ve),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...io,"on-layout","mini-state"],setup(e,{slots:o,emit:n,attrs:l}){const t=H(),{proxy:{$q:a}}=t,s=Oe(e,a),{preventBodyScroll:v}=vo(),{registerTimeout:c}=mo(),i=ze(ue,()=>{console.error("QDrawer needs to be child of QLayout")});let w,b,y;const d=x(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),p=m(()=>e.mini===!0&&d.value!==!0),_=m(()=>p.value===!0?e.miniWidth:e.width),g=x(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),E=m(()=>e.persistent!==!0&&(d.value===!0||bt.value===!0));function u(r,h){if(M(),r!==!1&&i.animate(),z(0),d.value===!0){const S=i.instances[te.value];S!==void 0&&S.belowBreakpoint===!0&&S.hide(!1),Q(1),i.isContainer.value!==!0&&v(!0)}else Q(0),r!==!1&&ve(!1);c(()=>{r!==!1&&ve(!0),h!==!0&&n("show",r)},nt)}function C(r,h){F(),r!==!1&&i.animate(),Q(0),z(I.value*_.value),me(),h!==!0&&c(()=>{n("hide",r)},nt)}const{show:f,hide:q}=ao({showing:g,hideOnRouteChange:E,handleShow:u,handleHide:C}),{addToHistory:M,removeFromHistory:F}=oo(g,q,E),D={belowBreakpoint:d,hide:q},B=m(()=>e.side==="right"),I=m(()=>(a.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),Me=x(0),X=x(!1),se=x(!1),He=x(_.value*I.value),te=m(()=>B.value===!0?"left":"right"),ce=m(()=>g.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),de=m(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(B.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),G=m(()=>e.overlay===!1&&g.value===!0&&d.value===!1),bt=m(()=>e.overlay===!0&&g.value===!0&&d.value===!1),yt=m(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&X.value===!1?" hidden":"")),gt=m(()=>({backgroundColor:`rgba(0,0,0,${Me.value*.4})`})),De=m(()=>B.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),wt=m(()=>B.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),qt=m(()=>{const r={};return i.header.space===!0&&De.value===!1&&(de.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&wt.value===!1&&(de.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),kt=m(()=>{const r={width:`${_.value}px`,transform:`translateX(${He.value}px)`};return d.value===!0?r:Object.assign(r,qt.value)}),Ct=m(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Lt=m(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(de.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),_t=m(()=>{const r=a.lang.rtl===!0?e.side:te.value;return[[_e,Et,void 0,{[r]:!0,mouse:!0}]]}),xt=m(()=>{const r=a.lang.rtl===!0?te.value:e.side;return[[_e,Qe,void 0,{[r]:!0,mouse:!0}]]}),Tt=m(()=>{const r=a.lang.rtl===!0?te.value:e.side;return[[_e,Qe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){$t(d,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}k(d,r=>{r===!0?(w=g.value,g.value===!0&&q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),Q(0),me()):f(!1))}),k(()=>e.side,(r,h)=>{i.instances[h]===D&&(i.instances[h]=void 0,i[h].space=!1,i[h].offset=0),i.instances[r]=D,i[r].size=_.value,i[r].space=G.value,i[r].offset=ce.value}),k(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),k(()=>e.behavior+e.breakpoint,fe),k(i.isContainer,r=>{g.value===!0&&v(r!==!0),r===!0&&fe()}),k(i.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),k(ce,r=>{W("offset",r)}),k(G,r=>{n("on-layout",r),W("space",r)}),k(B,()=>{z()}),k(_,r=>{z(),he(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{he(r,_.value)}),k(()=>a.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.modelValue===!0&&(St(),i.animate())}),k(p,r=>{n("mini-state",r)});function z(r){r===void 0?K(()=>{r=g.value===!0?0:_.value,z(I.value*r)}):(i.isContainer.value===!0&&B.value===!0&&(d.value===!0||Math.abs(r)===_.value)&&(r+=I.value*i.scrollbarWidth.value),He.value=r)}function Q(r){Me.value=r}function ve(r){const h=r===!0?"remove":i.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function St(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,b=setTimeout(()=>{se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Et(r){if(g.value!==!1)return;const h=_.value,S=ae(r.distance.x,0,h);if(r.isFinal===!0){S>=Math.min(75,h)===!0?f():(i.animate(),Q(0),z(I.value*h)),X.value=!1;return}z((a.lang.rtl===!0?B.value!==!0:B.value)?Math.max(h-S,0):Math.min(0,S-h)),Q(ae(S/h,0,1)),r.isFirst===!0&&(X.value=!0)}function Qe(r){if(g.value!==!0)return;const h=_.value,S=r.direction===e.side,oe=(a.lang.rtl===!0?S!==!0:S)?ae(r.distance.x,0,h):0;if(r.isFinal===!0){Math.abs(oe)<Math.min(75,h)===!0?(i.animate(),Q(1),z(0)):q(),X.value=!1;return}z(I.value*oe),Q(ae(1-oe/h,0,1)),r.isFirst===!0&&(X.value=!0)}function me(){v(!1),ve(!0)}function W(r,h){i.update(e.side,r,h)}function $t(r,h){r.value!==h&&(r.value=h)}function he(r,h){W("size",r===!0?e.miniWidth:h)}return i.instances[e.side]=D,he(e.miniToOverlay,_.value),W("space",G.value),W("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("on-layout",G.value),n("mini-state",p.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?u:C)(!1,!0)};if(i.totalWidth.value!==0){K(r);return}y=k(i.totalWidth,()=>{y(),y=void 0,g.value===!1&&e.showIfAbove===!0&&d.value===!1?f(!1):r()})}),A(()=>{y!==void 0&&y(),clearTimeout(b),g.value===!0&&me(),i.instances[e.side]===D&&(i.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Rt(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),_t.value)),r.push(Ie("div",{ref:"backdrop",class:yt.value,style:gt.value,"aria-hidden":"true",onClick:q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Tt.value)));const h=p.value===!0&&o.mini!==void 0,S=[L("div",J(R({},l),{key:""+h,class:[Ct.value,l.class]}),h===!0?o.mini():N(o.default))];return e.elevated===!0&&g.value===!0&&S.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ie("aside",{ref:"content",class:Lt.value,style:kt.value},S,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>xt.value)),L("div",{class:"q-drawer-container"},r)}}}),bo=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=H(),l=ze(ue,()=>{console.error("QPageContainer needs to be child of QLayout")});ut(Ft,!0);const t=m(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>L("div",{class:"q-page-container",style:t.value},N(o.default))}});const{passive:it}=O,yo=["both","horizontal","vertical"];var go=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>yo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;k(()=>e.scrollTarget,()=>{c(),v()});function s(){l!==null&&l();const b=Math.max(0,ht(t)),y=pt(t),d={top:b-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const p=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:b,left:y},n.directionChanged=n.direction!==p,n.delta=d,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),o("scroll",R({},n))}function v(){t=ro(a,e.scrollTarget),t.addEventListener("scroll",i,it),i(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",i,it),t=void 0)}function i(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[y,d]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{d(y),l=null}}}const w=H();return U(()=>{a=w.proxy.$el.parentNode,v()}),A(()=>{l!==null&&l(),c()}),Object.assign(w.proxy,{trigger:i,getPosition:()=>n}),Be}}),wo=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=x(null),a=x(l.screen.height),s=x(e.container===!0?0:l.screen.width),v=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),i=x(lt.value===!0?0:we()),w=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=m(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=m(()=>i.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=m(()=>i.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function p(f){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};v.value=q,e.onScroll!==void 0&&n("scroll",q)}}function _(f){const{height:q,width:M}=f;let F=!1;a.value!==q&&(F=!0,a.value=q,e.onScrollHeight!==void 0&&n("scroll-height",q),E()),s.value!==M&&(F=!0,s.value=M),F===!0&&e.onResize!==void 0&&n("resize",f)}function g({height:f}){c.value!==f&&(c.value=f,E())}function E(){if(e.container===!0){const f=a.value>c.value?we():0;i.value!==f&&(i.value=f)}}let u;const C={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:i,totalWidth:m(()=>s.value+i.value),rows:m(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:v,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(f,q,M){C[f][q]=M}};if(ut(ue,C),we()>0){let M=function(){f=null,q.classList.remove("hide-scrollbar")},F=function(){if(f===null){if(q.scrollHeight>l.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(M,300)},D=function(B){f!==null&&B==="remove"&&(clearTimeout(f),M()),window[`${B}EventListener`]("resize",F)},f=null;const q=document.body;k(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),At(()=>{D("remove")})}return()=>{const f=Nt(o.default,[L(go,{onScroll:p}),L(Ee,{onResize:_})]),q=L("div",{class:w.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},f);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(Ee,{onResize:g}),L("div",{class:"absolute-full",style:y.value},[L("div",{class:"scroll",style:d.value},[q])])]):q}}}),at=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:n.value},N(o.default))}}),qo=P({name:"QItem",props:J(R(R({},Ve),It),{tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=Oe(e,l),{hasRouterLink:a,hasLink:s,linkProps:v,linkClass:c,linkTag:i,navigateToRouterLink:w}=Xt(),b=x(null),y=x(null),d=m(()=>e.clickable===!0||s.value===!0||e.tag==="label"),p=m(()=>e.disable!==!0&&d.value===!0),_=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?c.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=m(()=>{if(e.insetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function E(f){p.value===!0&&(y.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===b.value?y.value.focus():document.activeElement===y.value&&b.value.focus()),a.value===!0&&w(f),n("click",f))}function u(f){if(p.value===!0&&Yt(f,13)===!0){Pe(f),f.qKeyEvent=!0;const q=new MouseEvent("click",f);q.qKeyEvent=!0,b.value.dispatchEvent(q)}n("keyup",f)}function C(){const f=rt(o.default,[]);return p.value===!0&&f.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:y})),f}return()=>{const f={ref:b,class:_.value,style:g.value,onClick:E,onKeyup:u};return p.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,v.value)):d.value===!0&&(f["aria-disabled"]="true"),L(i.value,f,C())}}});const ko=st({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Co(e,o,n,l,t,a){return j(),Te(qo,{clickable:"",tag:"a",to:e.link},{default:$(()=>[e.icon?(j(),Te(at,{key:0,avatar:""},{default:$(()=>[T(dt,{name:e.icon},null,8,["name"])]),_:1})):ft("",!0),T(at,null,{default:$(()=>[T($e,null,{default:$(()=>[Se(Xe(e.title),1)]),_:1}),T($e,{caption:""},{default:$(()=>[Se(Xe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Lo=ct(ko,[["render",Co]]),_o="/assets/intro.b970e847.mp4",xo="/assets/bitmap.3a69beaa.png";const To=[{title:"\u041E \u043D\u0430\u0441",icon:"help",link:"/info"},{title:"\u041F\u043E\u043C\u043E\u0449\u044C",caption:"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u0437\u044F\u044C",icon:"accessibility",link:"https://awesome.quasar.dev"},{title:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",caption:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",icon:"phone",link:"https://awesome.quasar.dev"}],So=st({name:"MainLayout",components:{EssentialLink:Lo},setup(){const e=x(!1),o=x(!0);return setTimeout(()=>{o.value=!1},3e3),{essentialLinks:To,leftDrawerOpen:e,intro:o,toggleLeftDrawer(){e.value=!e.value}}}}),Eo={key:0,src:_o,autoplay:"",muted:"",style:{width:"100%",height:"100%",position:"absolute","z-index":"10000","object-fit":"cover"}},$o={style:{"font-family":"cursive","margin-bottom":"-3px"}},Bo=Se("\u0421\u0415\u0420\u0414\u0426\u0415 \u0413\u041E\u0420\u041E\u0414\u0410\xA0 "),zo=vt("img",{src:xo},null,-1);function Po(e,o,n,l,t,a){const s=Ye("EssentialLink"),v=Ye("router-view");return j(),ge(je,null,[e.intro?(j(),ge("video",Eo)):ft("",!0),T(wo,{view:"lHh Lpr lFf"},{default:$(()=>[T(eo,{elevated:"",style:{background:"linear-gradient(234deg, rgba(158,105,215,0.7231267507002801) 11%, rgba(30,162,175,0.7262255243894433) 40%, rgba(63,76,167,0.4321078773306197) 57%, rgba(166,107,238,0.38448882971157217) 72%, rgba(238,111,107,0.47692580450148814) 89%)","backdrop-filter":"blur(10px)"}},{default:$(()=>[T(Jt,null,{default:$(()=>[T(Ue,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,color:"dark blue"},null,8,["onClick"]),T(Gt,{onClick:o[0]||(o[0]=c=>{this.$router.push("/")}),style:{color:"black"}},{default:$(()=>[vt("div",$o,[Bo,T(dt,{size:"25px"},{default:$(()=>[zo]),_:1})])]),_:1}),T(Ue,{onClick:o[1]||(o[1]=c=>{this.$router.push("/")}),flat:"",dense:"",icon:"home","aria-label":"Home",color:"dark blue"})]),_:1})]),_:1}),T(po,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=c=>e.leftDrawerOpen=c),side:"left",bordered:""},{default:$(()=>[T(to,null,{default:$(()=>[T($e,{header:""}),(j(!0),ge(je,null,jt(e.essentialLinks,c=>(j(),Te(s,Ut({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),T(bo,null,{default:$(()=>[T(v)]),_:1})]),_:1})],64)}var Wo=ct(So,[["render",Po]]);export{Wo as default};
