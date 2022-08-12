import{f as Q,c as f,h as T,j as le,r as S,k as Ze,o as K,n as ie,l as F,m as Ee,g as Y,p as O,a as $e,w as b,q as St,s as re,H as Me,t as He,u as qt,v as P,x as et,y as kt,z as xt,A as _t,B as Z,C as me,D as De,E as he,G as Se,I as pe,J as Et,K as Ve,L as tt,M as $t,N as ee,b as zt,O as Pt,P as ot,_ as nt,Q as X,R as qe,S as E,d as k,U as it,V as lt,W as ke,X as Qe,Y as We,Z as ye,F as Fe,$ as Re,a0 as rt,a1 as Ot,a2 as Bt}from"./index.eee1e31d.js";import{u as Mt,a as Ht,b as Dt,Q as Ae,c as xe,d as Vt,e as Qt}from"./QItem.dbe2285e.js";import{u as Wt,a as Ft}from"./use-dark.4d0bce30.js";import{g as Ne,s as Xe,c as Rt}from"./selection.a01cfacc.js";import{b as te}from"./format.801e7424.js";var At=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:l.value},le(o.default))}}),Nt=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:l.value},le(o.default))}});function Xt(){const e=S(!Ze.value);return e.value===!1&&K(()=>{e.value=!0}),e}const at=typeof ResizeObserver!="undefined",Ye=at===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var _e=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let l=null,r,t={width:-1,height:-1};function i(u){u===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(clearTimeout(l),l=null,r){const{offsetWidth:u,offsetHeight:n}=r;(u!==t.width||n!==t.height)&&(t={width:u,height:n},o("resize",t))}}const v=Y();if(Object.assign(v.proxy,{trigger:i}),at===!0){let u;return K(()=>{ie(()=>{r=v.proxy.$el.parentNode,r&&(u=new ResizeObserver(i),u.observe(r),s())})}),F(()=>{clearTimeout(l),u!==void 0&&(u.disconnect!==void 0?u.disconnect():r&&u.unobserve(r))}),Ee}else{let L=function(){clearTimeout(l),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",i,O.passive),n=void 0)},y=function(){L(),r&&r.contentDocument&&(n=r.contentDocument.defaultView,n.addEventListener("resize",i,O.passive),s())};const u=Xt();let n;return K(()=>{ie(()=>{r=v.proxy.$el,r&&y()})}),F(L),()=>{if(u.value===!0)return T("object",{style:Ye.style,tabindex:-1,type:"text/html",data:Ye.url,"aria-hidden":"true",onLoad:y})}}}}),Yt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:r}}=Y(),t=$e(re,()=>{console.error("QHeader needs to be child of QLayout")}),i=S(parseInt(e.heightHint,10)),s=S(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),u=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?i.value:0;const d=i.value-t.scroll.value.position;return d>0?d:0}),n=f(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),L=f(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),y=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=f(()=>{const d=t.rows.value.top,x={};return d[0]==="l"&&t.left.space===!0&&(x[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(x[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function c(d,x){t.update("header",d,x)}function w(d,x){d.value!==x&&(d.value=x)}function q({height:d}){w(i,d),c("size",d)}function p(d){L.value===!0&&w(s,!0),l("focusin",d)}b(()=>e.modelValue,d=>{c("space",d),w(s,!0),t.animate()}),b(u,d=>{c("offset",d)}),b(()=>e.reveal,d=>{d===!1&&w(s,e.modelValue)}),b(s,d=>{t.animate(),l("reveal",d)}),b(t.scroll,d=>{e.reveal===!0&&w(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const M={};return t.instances.header=M,e.modelValue===!0&&c("size",i.value),c("space",e.modelValue),c("offset",u.value),F(()=>{t.instances.header===M&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const d=St(o.default,[]);return e.elevated===!0&&d.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(T(_e,{debounce:0,onResize:q})),T("header",{class:y.value,style:g.value,onFocusin:p},d)}}});function It(e,o,l){let r;function t(){r!==void 0&&(Me.remove(r),r=void 0)}return F(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>l.value===!0,handler:o},Me.add(r)}}}const jt=[null,document,document.body,document.scrollingElement,document.documentElement];function Ut(e,o){let l=qt(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return jt.includes(l)?window:l}function st(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ut(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let oe;function ge(){if(oe!==void 0)return oe;const e=document.createElement("p"),o=document.createElement("div");He(e,{width:"100%",height:"200px"}),He(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let r=e.offsetWidth;return l===r&&(r=o.clientWidth),o.remove(),oe=l-r,oe}function Kt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let j=0,be,we,U,Ce=!1,Ie,je,N;function Gt(e){Jt(e)&&et(e)}function Jt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=kt(e),l=e.shiftKey&&!e.deltaX,r=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||r?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const s=o[i];if(Kt(s,r))return r?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ue(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ne(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:r}=document.scrollingElement;(U===void 0||o!==window.innerHeight)&&(U=l-o,document.scrollingElement.scrollTop=r),r>U&&(document.scrollingElement.scrollTop-=Math.ceil((r-U)/8))}))}function Ke(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(o);be=ut(window),we=st(window),Ie=o.style.left,je=o.style.top,o.style.left=`-${be}px`,o.style.top=`-${we}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,P.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ne,O.passiveCapture),window.visualViewport.addEventListener("scroll",ne,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ue,O.passiveCapture))}P.is.desktop===!0&&P.is.mac===!0&&window[`${e}EventListener`]("wheel",Gt,O.notPassive),e==="remove"&&(P.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",ne,O.passiveCapture),window.visualViewport.removeEventListener("scroll",ne,O.passiveCapture)):window.removeEventListener("scroll",Ue,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ie,o.style.top=je,window.scrollTo(be,we),U=void 0)}function Zt(e){let o="add";if(e===!0){if(j++,N!==void 0){clearTimeout(N),N=void 0;return}if(j>1)return}else{if(j===0||(j--,j>0))return;if(o="remove",P.is.ios===!0&&P.is.nativeMobile===!0){clearTimeout(N),N=setTimeout(()=>{Ke(o),N=void 0},100);return}}Ke(o)}function eo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Zt(o))}}}function to(){let e;return F(()=>{clearTimeout(e)}),{registerTimeout(o,l){clearTimeout(e),e=setTimeout(o,l)},removeTimeout(){clearTimeout(e)}}}function Le(e,o,l){const r=Se(e);let t,i=r.left-o.event.x,s=r.top-o.event.y,v=Math.abs(i),u=Math.abs(s);const n=o.direction;n.horizontal===!0&&n.vertical!==!0?t=i<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=s<0?"up":"down":n.up===!0&&s<0?(t="up",v>u&&(n.left===!0&&i<0?t="left":n.right===!0&&i>0&&(t="right"))):n.down===!0&&s>0?(t="down",v>u&&(n.left===!0&&i<0?t="left":n.right===!0&&i>0&&(t="right"))):n.left===!0&&i<0?(t="left",v<u&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down"))):n.right===!0&&i>0&&(t="right",v<u&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down")));let L=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,L=!0,t==="left"||t==="right"?(r.left-=i,v=0,i=0):(r.top-=s,u=0,s=0)}return{synthetic:L,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:r,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:v,y:u},offset:{x:i,y:s},delta:{x:r.left-o.event.lastX,y:r.top-o.event.lastY}}}}let oo=0;var Te=xt({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&P.has.touch!==!0)return;function r(i,s){l.mouse===!0&&s===!0?et(i):(l.stop===!0&&he(i),l.prevent===!0&&De(i))}const t={uid:"qvtp_"+oo++,handler:o,modifiers:l,direction:Ne(l),noop:Ee,mouseStart(i){Xe(i,t)&&_t(i)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Xe(i,t)){const s=i.target;Z(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(P.is.firefox===!0&&me(e,!0),t.lastEvt=i,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const n=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&De(n),i.cancelBubble===!0&&he(n),Object.assign(n,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:n}}he(i)}const{left:v,top:u}=Se(i);t.event={x:v,y:u,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:u}},move(i){if(t.event===void 0)return;const s=Se(i),v=s.left-t.event.x,u=s.top-t.event.y;if(v===0&&u===0)return;t.lastEvt=i;const n=t.event.mouse===!0,L=()=>{r(i,n),l.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Rt(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,l.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{w(),c()},50):w()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(i,t.event.mouse);const{payload:c,synthetic:w}=Le(i,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&L(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=w===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){L(),t.event.detected=!0,t.move(i);return}const y=Math.abs(v),g=Math.abs(u);y!==g&&(t.direction.horizontal===!0&&y>g||t.direction.vertical===!0&&y<g||t.direction.up===!0&&y<g&&u<0||t.direction.down===!0&&y<g&&u>0||t.direction.left===!0&&y>g&&v<0||t.direction.right===!0&&y>g&&v>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(pe(t,"temp"),P.is.firefox===!0&&me(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(i===void 0?t.lastEvt:i,t).payload);const{payload:v}=Le(i===void 0?t.lastEvt:i,t,!0),u=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(u):u()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,l.mouse===!0&&Z(t,"main",[[e,"mousedown","mouseStart",`passive${l.mouseCapture===!0?"Capture":""}`]]),P.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Ne(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),pe(o,"main"),pe(o,"temp"),P.is.firefox===!0&&me(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Ge=150;var no=Q({name:"QDrawer",inheritAttrs:!1,props:{...Mt,...Wt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ht,"on-layout","mini-state"],setup(e,{slots:o,emit:l,attrs:r}){const t=Y(),{proxy:{$q:i}}=t,s=Ft(e,i),{preventBodyScroll:v}=eo(),{registerTimeout:u}=to(),n=$e(re,()=>{console.error("QDrawer needs to be child of QLayout")});let L,y,g;const c=S(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),w=f(()=>e.mini===!0&&c.value!==!0),q=f(()=>w.value===!0?e.miniWidth:e.width),p=S(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),M=f(()=>e.persistent!==!0&&(c.value===!0||ct.value===!0));function d(a,h){if(B(),a!==!1&&n.animate(),z(0),c.value===!0){const _=n.instances[G.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),D(1),n.isContainer.value!==!0&&v(!0)}else D(0),a!==!1&&de(!1);u(()=>{a!==!1&&de(!0),h!==!0&&l("show",a)},Ge)}function x(a,h){W(),a!==!1&&n.animate(),D(0),z(R.value*q.value),fe(),h!==!0&&u(()=>{l("hide",a)},Ge)}const{show:m,hide:C}=Dt({showing:p,hideOnRouteChange:M,handleShow:d,handleHide:x}),{addToHistory:B,removeFromHistory:W}=It(p,C,M),H={belowBreakpoint:c,hide:C},$=f(()=>e.side==="right"),R=f(()=>(i.lang.rtl===!0?-1:1)*($.value===!0?1:-1)),ze=S(0),A=S(!1),ae=S(!1),Pe=S(q.value*R.value),G=f(()=>$.value===!0?"left":"right"),se=f(()=>p.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),ue=f(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf($.value?"R":"L")>-1||i.platform.is.ios===!0&&n.isContainer.value===!0),I=f(()=>e.overlay===!1&&p.value===!0&&c.value===!1),ct=f(()=>e.overlay===!0&&p.value===!0&&c.value===!1),dt=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&A.value===!1?" hidden":"")),ft=f(()=>({backgroundColor:`rgba(0,0,0,${ze.value*.4})`})),Oe=f(()=>$.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),vt=f(()=>$.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),mt=f(()=>{const a={};return n.header.space===!0&&Oe.value===!1&&(ue.value===!0?a.top=`${n.header.offset}px`:n.header.space===!0&&(a.top=`${n.header.size}px`)),n.footer.space===!0&&vt.value===!1&&(ue.value===!0?a.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(a.bottom=`${n.footer.size}px`)),a}),ht=f(()=>{const a={width:`${q.value}px`,transform:`translateX(${Pe.value}px)`};return c.value===!0?a:Object.assign(a,mt.value)}),pt=f(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),yt=f(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${w.value===!0?"mini":"standard"}`+(ue.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),gt=f(()=>{const a=i.lang.rtl===!0?e.side:G.value;return[[Te,Lt,void 0,{[a]:!0,mouse:!0}]]}),bt=f(()=>{const a=i.lang.rtl===!0?G.value:e.side;return[[Te,Be,void 0,{[a]:!0,mouse:!0}]]}),wt=f(()=>{const a=i.lang.rtl===!0?G.value:e.side;return[[Te,Be,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){Tt(c,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}b(c,a=>{a===!0?(L=p.value,p.value===!0&&C(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(p.value===!0?(z(0),D(0),fe()):m(!1))}),b(()=>e.side,(a,h)=>{n.instances[h]===H&&(n.instances[h]=void 0,n[h].space=!1,n[h].offset=0),n.instances[a]=H,n[a].size=q.value,n[a].space=I.value,n[a].offset=se.value}),b(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),b(()=>e.behavior+e.breakpoint,ce),b(n.isContainer,a=>{p.value===!0&&v(a!==!0),a===!0&&ce()}),b(n.scrollbarWidth,()=>{z(p.value===!0?0:void 0)}),b(se,a=>{V("offset",a)}),b(I,a=>{l("on-layout",a),V("space",a)}),b($,()=>{z()}),b(q,a=>{z(),ve(e.miniToOverlay,a)}),b(()=>e.miniToOverlay,a=>{ve(a,q.value)}),b(()=>i.lang.rtl,()=>{z()}),b(()=>e.mini,()=>{e.modelValue===!0&&(Ct(),n.animate())}),b(w,a=>{l("mini-state",a)});function z(a){a===void 0?ie(()=>{a=p.value===!0?0:q.value,z(R.value*a)}):(n.isContainer.value===!0&&$.value===!0&&(c.value===!0||Math.abs(a)===q.value)&&(a+=R.value*n.scrollbarWidth.value),Pe.value=a)}function D(a){ze.value=a}function de(a){const h=a===!0?"remove":n.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function Ct(){clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,y=setTimeout(()=>{ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Lt(a){if(p.value!==!1)return;const h=q.value,_=te(a.distance.x,0,h);if(a.isFinal===!0){_>=Math.min(75,h)===!0?m():(n.animate(),D(0),z(R.value*h)),A.value=!1;return}z((i.lang.rtl===!0?$.value!==!0:$.value)?Math.max(h-_,0):Math.min(0,_-h)),D(te(_/h,0,1)),a.isFirst===!0&&(A.value=!0)}function Be(a){if(p.value!==!0)return;const h=q.value,_=a.direction===e.side,J=(i.lang.rtl===!0?_!==!0:_)?te(a.distance.x,0,h):0;if(a.isFinal===!0){Math.abs(J)<Math.min(75,h)===!0?(n.animate(),D(1),z(0)):C(),A.value=!1;return}z(R.value*J),D(te(1-J/h,0,1)),a.isFirst===!0&&(A.value=!0)}function fe(){v(!1),de(!0)}function V(a,h){n.update(e.side,a,h)}function Tt(a,h){a.value!==h&&(a.value=h)}function ve(a,h){V("size",a===!0?e.miniWidth:h)}return n.instances[e.side]=H,ve(e.miniToOverlay,q.value),V("space",I.value),V("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),K(()=>{l("on-layout",I.value),l("mini-state",w.value),L=e.showIfAbove===!0;const a=()=>{(p.value===!0?d:x)(!1,!0)};if(n.totalWidth.value!==0){ie(a);return}g=b(n.totalWidth,()=>{g(),g=void 0,p.value===!1&&e.showIfAbove===!0&&c.value===!1?m(!1):a()})}),F(()=>{g!==void 0&&g(),clearTimeout(y),p.value===!0&&fe(),n.instances[e.side]===H&&(n.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const a=[];c.value===!0&&(e.noSwipeOpen===!1&&a.push(Et(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),gt.value)),a.push(Ve("div",{ref:"backdrop",class:dt.value,style:ft.value,"aria-hidden":"true",onClick:C},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>wt.value)));const h=w.value===!0&&o.mini!==void 0,_=[T("div",{...r,key:""+h,class:[pt.value,r.class]},h===!0?o.mini():le(o.default))];return e.elevated===!0&&p.value===!0&&_.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Ve("aside",{ref:"content",class:yt.value,style:ht.value},_,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>bt.value)),T("div",{class:"q-drawer-container"},a)}}}),io=Q({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=Y(),r=$e(re,()=>{console.error("QPageContainer needs to be child of QLayout")});tt($t,!0);const t=f(()=>{const i={};return r.header.space===!0&&(i.paddingTop=`${r.header.size}px`),r.right.space===!0&&(i[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(i.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(i[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),i});return()=>T("div",{class:"q-page-container",style:t.value},le(o.default))}});const{passive:Je}=O,lo=["both","horizontal","vertical"];var ro=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>lo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,i;b(()=>e.scrollTarget,()=>{u(),v()});function s(){r!==null&&r();const y=Math.max(0,st(t)),g=ut(t),c={top:y-l.position.top,left:g-l.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const w=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";l.position={top:y,left:g},l.directionChanged=l.direction!==w,l.delta=c,l.directionChanged===!0&&(l.direction=w,l.inflectionPoint=l.position),o("scroll",{...l})}function v(){t=Ut(i,e.scrollTarget),t.addEventListener("scroll",n,Je),n(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",n,Je),t=void 0)}function n(y){if(y===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[g,c]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{c(g),r=null}}}const L=Y();return K(()=>{i=L.proxy.$el.parentNode,v()}),F(()=>{r!==null&&r(),u()}),Object.assign(L.proxy,{trigger:n,getPosition:()=>l}),Ee}}),ao=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:r}}=Y(),t=S(null),i=S(r.screen.height),s=S(e.container===!0?0:r.screen.width),v=S({position:0,direction:"down",inflectionPoint:0}),u=S(0),n=S(Ze.value===!0?0:ge()),L=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),g=f(()=>n.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${n.value}px`}:null),c=f(()=>n.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${n.value}px`,width:`calc(100% + ${n.value}px)`}:null);function w(m){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};v.value=C,e.onScroll!==void 0&&l("scroll",C)}}function q(m){const{height:C,width:B}=m;let W=!1;i.value!==C&&(W=!0,i.value=C,e.onScrollHeight!==void 0&&l("scroll-height",C),M()),s.value!==B&&(W=!0,s.value=B),W===!0&&e.onResize!==void 0&&l("resize",m)}function p({height:m}){u.value!==m&&(u.value=m,M())}function M(){if(e.container===!0){const m=i.value>u.value?ge():0;n.value!==m&&(n.value=m)}}let d;const x={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:i,containerHeight:u,scrollbarWidth:n,totalWidth:f(()=>s.value+n.value),rows:f(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:v,animate(){d!==void 0?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),d=void 0},155)},update(m,C,B){x[m][C]=B}};if(tt(re,x),ge()>0){let B=function(){m=null,C.classList.remove("hide-scrollbar")},W=function(){if(m===null){if(C.scrollHeight>r.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(B,300)},H=function($){m!==null&&$==="remove"&&(clearTimeout(m),B()),window[`${$}EventListener`]("resize",W)},m=null;const C=document.body;b(()=>e.container!==!0?"add":"remove",H),e.container!==!0&&H("add"),zt(()=>{H("remove")})}return()=>{const m=Pt(o.default,[T(ro,{onScroll:w}),T(_e,{onResize:q})]),C=T("div",{class:L.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},m);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(_e,{onResize:p}),T("div",{class:"absolute-full",style:g.value},[T("div",{class:"scroll",style:c.value},[C])])]):C}}});const so=ot({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function uo(e,o,l,r,t,i){return X(),qe(Vt,{clickable:"",tag:"a",to:e.link},{default:E(()=>[e.icon?(X(),qe(Ae,{key:0,avatar:""},{default:E(()=>[k(it,{name:e.icon},null,8,["name"])]),_:1})):lt("",!0),k(Ae,null,{default:E(()=>[k(xe,null,{default:E(()=>[ke(Qe(e.title),1)]),_:1}),k(xe,{caption:""},{default:E(()=>[ke(Qe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var co=nt(so,[["render",uo]]),fo="/assets/intro.276f3199.mp4",vo="/assets/bitmap.3a69beaa.png";const mo=[{title:"\u041E \u043D\u0430\u0441",icon:"help",link:"/info"},{title:"\u041F\u043E\u043C\u043E\u0449\u044C",caption:"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u0437\u044F\u044C",icon:"accessibility",link:"/help"},{title:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",caption:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",icon:"phone",link:"/contact"}],ho=ot({name:"MainLayout",components:{EssentialLink:co},setup(){const e=S(!1),o=S(!0);return setTimeout(()=>{o.value=!1},3e3),{essentialLinks:mo,leftDrawerOpen:e,intro:o,toggleLeftDrawer(){e.value=!e.value}}}}),po={key:0,src:fo,autoplay:"",muted:"",style:{width:"100%",height:"100%",position:"absolute","z-index":"10000","object-fit":"cover"}},yo={style:{"margin-bottom":"-3px"}},go=ke("\u0421\u0435\u0440\u0434\u0446\u0435 \u041A\u0438\u0441\u043B\u043E\u0432\u043E\u0434\u0441\u043A\u0430\xA0 "),bo=rt("img",{src:vo},null,-1);function wo(e,o,l,r,t,i){const s=We("EssentialLink"),v=We("router-view");return X(),ye(Fe,null,[e.intro?(X(),ye("video",po)):lt("",!0),k(ao,{view:"lHh Lpr lFf"},{default:E(()=>[k(Yt,{elevated:"",style:{background:"linear-gradient(234deg, rgba(158,105,215,0.7231267507002801) 11%, rgba(30,162,175,0.7262255243894433) 40%, rgba(63,76,167,0.4321078773306197) 57%, rgba(166,107,238,0.38448882971157217) 72%, rgba(238,111,107,0.47692580450148814) 89%)","backdrop-filter":"blur(10px)"}},{default:E(()=>[k(Nt,null,{default:E(()=>[k(Re,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,color:"dark blue"},null,8,["onClick"]),k(At,{onClick:o[0]||(o[0]=u=>{this.$router.push("/")}),style:{color:"black"}},{default:E(()=>[rt("div",yo,[go,k(it,{size:"25px"},{default:E(()=>[bo]),_:1})])]),_:1}),k(Re,{onClick:o[1]||(o[1]=u=>{this.$router.push("/")}),flat:"",dense:"",icon:"home","aria-label":"Home",color:"dark blue"})]),_:1})]),_:1}),k(no,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[2]||(o[2]=u=>e.leftDrawerOpen=u),side:"left",bordered:""},{default:E(()=>[k(Qt,null,{default:E(()=>[k(xe,{header:""}),(X(!0),ye(Fe,null,Ot(e.essentialLinks,u=>(X(),qe(s,Bt({key:u.title},u),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),k(io,null,{default:E(()=>[k(v)]),_:1})]),_:1})],64)}var xo=nt(ho,[["render",wo]]);export{xo as default};