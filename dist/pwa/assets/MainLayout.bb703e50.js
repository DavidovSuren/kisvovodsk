import{f as Q,c as f,h as S,j as ee,r as k,k as He,o as N,n as J,l as X,m as we,g as R,p as pe,a as _e,w as b,q as it,s as te,t as lt,u as I,v as rt,x as U,y as ce,z as $e,A as de,B as ge,C as fe,D as st,E as ut,G as Le,H as Fe,I as ct,J as K,b as dt,K as ft,L as Re,_ as We,M as A,N as Z,O as $,d as x,Q as Ie,P as vt,R as ze,S as Te,U as Be,V as Oe,W as ae,X as ht,Y as mt,F as pt,Z as gt,$ as yt,a0 as bt}from"./index.de5a0afc.js";import{Q as Ee,a as ye,b as wt,c as _t}from"./QItem.f94cc6b6.js";import{Q as Ct}from"./QSeparator.3e2b6733.js";import{u as St,a as kt,b as qt}from"./use-timeout.5bc963d2.js";import{u as xt,a as $t,b as Lt}from"./use-model-toggle.7d5458ad.js";import{u as zt,a as Tt}from"./use-dark.3708964e.js";import{g as Pe,s as De,c as Bt,a as Ot,b as Et,d as Pt,e as ve}from"./selection.6c603f3f.js";import{b as G}from"./format.573576cb.js";var Dt=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:i.value},ee(r.default))}}),Mt=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:i.value},ee(r.default))}});function Qt(){const e=k(!He.value);return e.value===!1&&N(()=>{e.value=!0}),e}const Ae=typeof ResizeObserver!="undefined",Me=Ae===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var be=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let i=null,l,t={width:-1,height:-1};function n(s){s===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(clearTimeout(i),i=null,l){const{offsetWidth:s,offsetHeight:a}=l;(s!==t.width||a!==t.height)&&(t={width:s,height:a},r("resize",t))}}const v=R();if(Object.assign(v.proxy,{trigger:n}),Ae===!0){let s;return N(()=>{J(()=>{l=v.proxy.$el.parentNode,l&&(s=new ResizeObserver(n),s.observe(l),u())})}),X(()=>{clearTimeout(i),s!==void 0&&(s.disconnect!==void 0?s.disconnect():l&&s.unobserve(l))}),we}else{let C=function(){clearTimeout(i),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",n,pe.passive),a=void 0)},g=function(){C(),l&&l.contentDocument&&(a=l.contentDocument.defaultView,a.addEventListener("resize",n,pe.passive),u())};const s=Qt();let a;return N(()=>{J(()=>{l=v.proxy.$el,l&&g()})}),X(C),()=>{if(s.value===!0)return S("object",{style:Me.style,tabindex:-1,type:"text/html",data:Me.url,"aria-hidden":"true",onLoad:g})}}}}),Vt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:i}){const{proxy:{$q:l}}=R(),t=_e(te,()=>{console.error("QHeader needs to be child of QLayout")}),n=k(parseInt(e.heightHint,10)),u=k(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),s=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?n.value:0;const d=n.value-t.scroll.value.position;return d>0?d:0}),a=f(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),C=f(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),g=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=f(()=>{const d=t.rows.value.top,L={};return d[0]==="l"&&t.left.space===!0&&(L[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(L[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function c(d,L){t.update("header",d,L)}function w(d,L){d.value!==L&&(d.value=L)}function q({height:d}){w(n,d),c("size",d)}function p(d){C.value===!0&&w(u,!0),i("focusin",d)}b(()=>e.modelValue,d=>{c("space",d),w(u,!0),t.animate()}),b(s,d=>{c("offset",d)}),b(()=>e.reveal,d=>{d===!1&&w(u,e.modelValue)}),b(u,d=>{t.animate(),i("reveal",d)}),b(t.scroll,d=>{e.reveal===!0&&w(u,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const E={};return t.instances.header=E,e.modelValue===!0&&c("size",n.value),c("space",e.modelValue),c("offset",s.value),X(()=>{t.instances.header===E&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const d=it(r.default,[]);return e.elevated===!0&&d.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(S(be,{debounce:0,onResize:q})),S("header",{class:g.value,style:y.value,onFocusin:p},d)}}});function he(e,r,i){const l=ge(e);let t,n=l.left-r.event.x,u=l.top-r.event.y,v=Math.abs(n),s=Math.abs(u);const a=r.direction;a.horizontal===!0&&a.vertical!==!0?t=n<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?t=u<0?"up":"down":a.up===!0&&u<0?(t="up",v>s&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.down===!0&&u>0?(t="down",v>s&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.left===!0&&n<0?(t="left",v<s&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down"))):a.right===!0&&n>0&&(t="right",v<s&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down")));let C=!1;if(t===void 0&&i===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,C=!0,t==="left"||t==="right"?(l.left-=n,v=0,n=0):(l.top-=u,s=0,u=0)}return{synthetic:C,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:l,direction:t,isFirst:r.event.isFirst,isFinal:i===!0,duration:Date.now()-r.event.time,distance:{x:v,y:s},offset:{x:n,y:u},delta:{x:l.left-r.event.lastX,y:l.top-r.event.lastY}}}}let Ht=0;var me=lt({name:"touch-pan",beforeMount(e,{value:r,modifiers:i}){if(i.mouse!==!0&&I.has.touch!==!0)return;function l(n,u){i.mouse===!0&&u===!0?st(n):(i.stop===!0&&de(n),i.prevent===!0&&$e(n))}const t={uid:"qvtp_"+Ht++,handler:r,modifiers:i,direction:Pe(i),noop:we,mouseStart(n){De(n,t)&&rt(n)&&(U(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(De(n,t)){const u=n.target;U(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(I.is.firefox===!0&&ce(e,!0),t.lastEvt=n,u===!0||i.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const a=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&$e(a),n.cancelBubble===!0&&de(a),Object.assign(a,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:a}}de(n)}const{left:v,top:s}=ge(n);t.event={x:v,y:s,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:s}},move(n){if(t.event===void 0)return;const u=ge(n),v=u.left-t.event.x,s=u.top-t.event.y;if(v===0&&s===0)return;t.lastEvt=n;const a=t.event.mouse===!0,C=()=>{l(n,a),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Bt(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{w(),c()},50):w()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(n,t.event.mouse);const{payload:c,synthetic:w}=he(n,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&C(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=w===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||a===!0&&t.modifiers.mouseAllDir===!0){C(),t.event.detected=!0,t.move(n);return}const g=Math.abs(v),y=Math.abs(s);g!==y&&(t.direction.horizontal===!0&&g>y||t.direction.vertical===!0&&g<y||t.direction.up===!0&&g<y&&s<0||t.direction.down===!0&&g<y&&s>0||t.direction.left===!0&&g>y&&v<0||t.direction.right===!0&&g>y&&v>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(fe(t,"temp"),I.is.firefox===!0&&ce(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(he(n===void 0?t.lastEvt:n,t).payload);const{payload:v}=he(n===void 0?t.lastEvt:n,t,!0),s=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,i.mouse===!0&&U(t,"main",[[e,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),I.has.touch===!0&&U(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const i=e.__qtouchpan;i!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&i.end(),i.handler=r.value),i.direction=Pe(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),fe(r,"main"),fe(r,"temp"),I.is.firefox===!0&&ce(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});const Qe=150;var Ft=Q({name:"QDrawer",inheritAttrs:!1,props:{...xt,...zt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...$t,"on-layout","mini-state"],setup(e,{slots:r,emit:i,attrs:l}){const t=R(),{proxy:{$q:n}}=t,u=Tt(e,n),{preventBodyScroll:v}=qt(),{registerTimeout:s}=St(),a=_e(te,()=>{console.error("QDrawer needs to be child of QLayout")});let C,g,y;const c=k(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),w=f(()=>e.mini===!0&&c.value!==!0),q=f(()=>w.value===!0?e.miniWidth:e.width),p=k(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),E=f(()=>e.persistent!==!0&&(c.value===!0||Ne.value===!0));function d(o,m){if(O(),o!==!1&&a.animate(),B(0),c.value===!0){const z=a.instances[j.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),D(1),a.isContainer.value!==!0&&v(!0)}else D(0),o!==!1&&re(!1);s(()=>{o!==!1&&re(!0),m!==!0&&i("show",o)},Qe)}function L(o,m){V(),o!==!1&&a.animate(),D(0),B(H.value*q.value),se(),m!==!0&&s(()=>{i("hide",o)},Qe)}const{show:h,hide:_}=Lt({showing:p,hideOnRouteChange:E,handleShow:d,handleHide:L}),{addToHistory:O,removeFromHistory:V}=kt(p,_,E),P={belowBreakpoint:c,hide:_},T=f(()=>e.side==="right"),H=f(()=>(n.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),Se=k(0),F=k(!1),ne=k(!1),ke=k(q.value*H.value),j=f(()=>T.value===!0?"left":"right"),oe=f(()=>p.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),ie=f(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(T.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),W=f(()=>e.overlay===!1&&p.value===!0&&c.value===!1),Ne=f(()=>e.overlay===!0&&p.value===!0&&c.value===!1),Xe=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&F.value===!1?" hidden":"")),je=f(()=>({backgroundColor:`rgba(0,0,0,${Se.value*.4})`})),qe=f(()=>T.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Ye=f(()=>T.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ue=f(()=>{const o={};return a.header.space===!0&&qe.value===!1&&(ie.value===!0?o.top=`${a.header.offset}px`:a.header.space===!0&&(o.top=`${a.header.size}px`)),a.footer.space===!0&&Ye.value===!1&&(ie.value===!0?o.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(o.bottom=`${a.footer.size}px`)),o}),Ke=f(()=>{const o={width:`${q.value}px`,transform:`translateX(${ke.value}px)`};return c.value===!0?o:Object.assign(o,Ue.value)}),Ge=f(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Je=f(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${w.value===!0?"mini":"standard"}`+(ie.value===!0||W.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(qe.value===!0?" q-drawer--top-padding":""))),Ze=f(()=>{const o=n.lang.rtl===!0?e.side:j.value;return[[me,nt,void 0,{[o]:!0,mouse:!0}]]}),et=f(()=>{const o=n.lang.rtl===!0?j.value:e.side;return[[me,xe,void 0,{[o]:!0,mouse:!0}]]}),tt=f(()=>{const o=n.lang.rtl===!0?j.value:e.side;return[[me,xe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function le(){ot(c,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}b(c,o=>{o===!0?(C=p.value,p.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(p.value===!0?(B(0),D(0),se()):h(!1))}),b(()=>e.side,(o,m)=>{a.instances[m]===P&&(a.instances[m]=void 0,a[m].space=!1,a[m].offset=0),a.instances[o]=P,a[o].size=q.value,a[o].space=W.value,a[o].offset=oe.value}),b(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&le()}),b(()=>e.behavior+e.breakpoint,le),b(a.isContainer,o=>{p.value===!0&&v(o!==!0),o===!0&&le()}),b(a.scrollbarWidth,()=>{B(p.value===!0?0:void 0)}),b(oe,o=>{M("offset",o)}),b(W,o=>{i("on-layout",o),M("space",o)}),b(T,()=>{B()}),b(q,o=>{B(),ue(e.miniToOverlay,o)}),b(()=>e.miniToOverlay,o=>{ue(o,q.value)}),b(()=>n.lang.rtl,()=>{B()}),b(()=>e.mini,()=>{e.modelValue===!0&&(at(),a.animate())}),b(w,o=>{i("mini-state",o)});function B(o){o===void 0?J(()=>{o=p.value===!0?0:q.value,B(H.value*o)}):(a.isContainer.value===!0&&T.value===!0&&(c.value===!0||Math.abs(o)===q.value)&&(o+=H.value*a.scrollbarWidth.value),ke.value=o)}function D(o){Se.value=o}function re(o){const m=o===!0?"remove":a.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function at(){clearTimeout(g),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,g=setTimeout(()=>{ne.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function nt(o){if(p.value!==!1)return;const m=q.value,z=G(o.distance.x,0,m);if(o.isFinal===!0){z>=Math.min(75,m)===!0?h():(a.animate(),D(0),B(H.value*m)),F.value=!1;return}B((n.lang.rtl===!0?T.value!==!0:T.value)?Math.max(m-z,0):Math.min(0,z-m)),D(G(z/m,0,1)),o.isFirst===!0&&(F.value=!0)}function xe(o){if(p.value!==!0)return;const m=q.value,z=o.direction===e.side,Y=(n.lang.rtl===!0?z!==!0:z)?G(o.distance.x,0,m):0;if(o.isFinal===!0){Math.abs(Y)<Math.min(75,m)===!0?(a.animate(),D(1),B(0)):_(),F.value=!1;return}B(H.value*Y),D(G(1-Y/m,0,1)),o.isFirst===!0&&(F.value=!0)}function se(){v(!1),re(!0)}function M(o,m){a.update(e.side,o,m)}function ot(o,m){o.value!==m&&(o.value=m)}function ue(o,m){M("size",o===!0?e.miniWidth:m)}return a.instances[e.side]=P,ue(e.miniToOverlay,q.value),M("space",W.value),M("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),N(()=>{i("on-layout",W.value),i("mini-state",w.value),C=e.showIfAbove===!0;const o=()=>{(p.value===!0?d:L)(!1,!0)};if(a.totalWidth.value!==0){J(o);return}y=b(a.totalWidth,()=>{y(),y=void 0,p.value===!1&&e.showIfAbove===!0&&c.value===!1?h(!1):o()})}),X(()=>{y!==void 0&&y(),clearTimeout(g),p.value===!0&&se(),a.instances[e.side]===P&&(a.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const o=[];c.value===!0&&(e.noSwipeOpen===!1&&o.push(ut(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ze.value)),o.push(Le("div",{ref:"backdrop",class:Xe.value,style:je.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>tt.value)));const m=w.value===!0&&r.mini!==void 0,z=[S("div",{...l,key:""+m,class:[Ge.value,l.class]},m===!0?r.mini():ee(r.default))];return e.elevated===!0&&p.value===!0&&z.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Le("aside",{ref:"content",class:Je.value,style:Ke.value},z,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>et.value)),S("div",{class:"q-drawer-container"},o)}}}),Rt=Q({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:i}}=R(),l=_e(te,()=>{console.error("QPageContainer needs to be child of QLayout")});Fe(ct,!0);const t=f(()=>{const n={};return l.header.space===!0&&(n.paddingTop=`${l.header.size}px`),l.right.space===!0&&(n[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(n.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(n[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),n});return()=>S("div",{class:"q-page-container",style:t.value},ee(r.default))}});const{passive:Ve}=pe,Wt=["both","horizontal","vertical"];var It=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Wt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,n;b(()=>e.scrollTarget,()=>{s(),v()});function u(){l!==null&&l();const g=Math.max(0,Et(t)),y=Pt(t),c={top:g-i.position.top,left:y-i.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const w=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:g,left:y},i.directionChanged=i.direction!==w,i.delta=c,i.directionChanged===!0&&(i.direction=w,i.inflectionPoint=i.position),r("scroll",{...i})}function v(){t=Ot(n,e.scrollTarget),t.addEventListener("scroll",a,Ve),a(!0)}function s(){t!==void 0&&(t.removeEventListener("scroll",a,Ve),t=void 0)}function a(g){if(g===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[y,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{c(y),l=null}}}const C=R();return N(()=>{n=C.proxy.$el.parentNode,v()}),X(()=>{l!==null&&l(),s()}),Object.assign(C.proxy,{trigger:a,getPosition:()=>i}),we}}),At=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:i}){const{proxy:{$q:l}}=R(),t=k(null),n=k(l.screen.height),u=k(e.container===!0?0:l.screen.width),v=k({position:0,direction:"down",inflectionPoint:0}),s=k(0),a=k(He.value===!0?0:ve()),C=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=f(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=f(()=>a.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=f(()=>a.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function w(h){if(e.container===!0||document.qScrollPrevented!==!0){const _={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};v.value=_,e.onScroll!==void 0&&i("scroll",_)}}function q(h){const{height:_,width:O}=h;let V=!1;n.value!==_&&(V=!0,n.value=_,e.onScrollHeight!==void 0&&i("scroll-height",_),E()),u.value!==O&&(V=!0,u.value=O),V===!0&&e.onResize!==void 0&&i("resize",h)}function p({height:h}){s.value!==h&&(s.value=h,E())}function E(){if(e.container===!0){const h=n.value>s.value?ve():0;a.value!==h&&(a.value=h)}}let d;const L={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:n,containerHeight:s,scrollbarWidth:a,totalWidth:f(()=>u.value+a.value),rows:f(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:K({size:0,offset:0,space:!1}),right:K({size:300,offset:0,space:!1}),footer:K({size:0,offset:0,space:!1}),left:K({size:300,offset:0,space:!1}),scroll:v,animate(){d!==void 0?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),d=void 0},155)},update(h,_,O){L[h][_]=O}};if(Fe(te,L),ve()>0){let O=function(){h=null,_.classList.remove("hide-scrollbar")},V=function(){if(h===null){if(_.scrollHeight>l.screen.height)return;_.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(O,300)},P=function(T){h!==null&&T==="remove"&&(clearTimeout(h),O()),window[`${T}EventListener`]("resize",V)},h=null;const _=document.body;b(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),dt(()=>{P("remove")})}return()=>{const h=ft(r.default,[S(It,{onScroll:w}),S(be,{onResize:q})]),_=S("div",{class:C.value,style:g.value,ref:e.container===!0?void 0:t,tabindex:-1},h);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(be,{onResize:p}),S("div",{class:"absolute-full",style:y.value},[S("div",{class:"scroll",style:c.value},[_])])]):_}}});const Nt=Re({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Xt(e,r,i,l,t,n){return A(),Z(wt,{clickable:"",tag:"a",to:e.link},{default:$(()=>[e.icon?(A(),Z(Ee,{key:0,avatar:""},{default:$(()=>[x(Ie,{name:e.icon},null,8,["name"])]),_:1})):vt("",!0),x(Ee,null,{default:$(()=>[x(ye,null,{default:$(()=>[ze(Te(e.title),1)]),_:1}),x(ye,{caption:""},{default:$(()=>[ze(Te(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var jt=We(Nt,[["render",Xt]]),Yt="/assets/bitmap.3a69beaa.png";const Ut=[{title:"\u041E \u043D\u0430\u0441",icon:"help",link:"/info"},{title:"\u041F\u043E\u043C\u043E\u0449\u044C",caption:"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u0437\u044F\u044C",icon:"accessibility",link:"/help"}],Kt=Re({name:"MainLayout",components:{EssentialLink:jt},setup(){const e=k(!1),r=k(!0);return setTimeout(()=>{r.value=!1},3e3),{essentialLinks:Ut,leftDrawerOpen:e,intro:r,toggleLeftDrawer(){e.value=!e.value}}}}),Ce=e=>(gt("data-v-fc16148e"),e=e(),yt(),e),Gt=Ce(()=>ae("div",{style:{"margin-bottom":"-3px"}},"\u0421\u0435\u0440\u0434\u0446\u0435 \u041A\u0438\u0441\u043B\u043E\u0432\u043E\u0434\u0441\u043A\u0430\xA0 ",-1)),Jt=Ce(()=>ae("img",{src:Yt},null,-1)),Zt=Ce(()=>ae("h1",null," \u041C\u0435\u043D\u044E",-1)),ea={class:"mt"};function ta(e,r,i,l,t,n){const u=Be("EssentialLink"),v=Be("router-view");return A(),Z(At,{view:"lHh Lpr lFf"},{default:$(()=>[x(Vt,{elevated:"",class:"bgHeader"},{default:$(()=>[x(Mt,null,{default:$(()=>[x(Oe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,color:"indigo-10"},null,8,["onClick"]),x(Dt,{onClick:r[0]||(r[0]=s=>{this.$router.push("/")})},{default:$(()=>[Gt]),_:1}),x(Oe,{onClick:r[1]||(r[1]=s=>{this.$router.push("/")}),flat:"",dense:""},{default:$(()=>[x(Ie,{size:"30px"},{default:$(()=>[Jt]),_:1})]),_:1})]),_:1})]),_:1}),x(Ft,{class:"bbg","show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[2]||(r[2]=s=>e.leftDrawerOpen=s),side:"left",bordered:""},{default:$(()=>[x(_t,{color:"white"},{default:$(()=>[x(ye,{header:""},{default:$(()=>[Zt]),_:1}),x(Ct,{color:"white",inset:""}),ae("div",ea,[(A(!0),ht(pt,null,mt(e.essentialLinks,s=>(A(),Z(u,bt({key:s.title},s,{class:"menuText"}),null,16))),128))])]),_:1})]),_:1},8,["modelValue"]),x(Rt,null,{default:$(()=>[x(v)]),_:1})]),_:1})}var da=We(Kt,[["render",ta],["__scopeId","data-v-fc16148e"]]);export{da as default};
