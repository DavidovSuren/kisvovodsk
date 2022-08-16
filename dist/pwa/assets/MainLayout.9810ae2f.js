import{f as M,c,h as b,j as ae,r as T,k as Ie,o as K,n as oe,l as W,m as Ae,g as j,p as B,a as _e,w as g,q as vt,s as le,H as $e,t as A,u as mt,v as ht,x as gt,y as ze,z as Ne,A as yt,B as Z,b as pt,C as bt,D as je,_ as Ue,E as N,G as be,I as x,d as w,Q as Xe,J as Ye,K as Ce,L as Pe,M as Be,N as ve,F as Oe,O as Ee,P as ie,R as wt,S as Tt,U as _t,V as St}from"./index.61739497.js";import{u as Lt,a as xt,b as kt,Q as Qe,c as we,d as qt,e as $t}from"./QItem.937688f9.js";import{Q as zt}from"./QSeparator.1c6de9e1.js";import{g as Ke,a as Ge,h as Ct,b as Pt,c as me}from"./scroll.ed7701ca.js";import{u as Bt,a as Ot}from"./use-dark.6a78e37a.js";import{T as he}from"./TouchPan.697ea4cd.js";import{b as ee}from"./format.573576cb.js";import"./selection.e64cecdb.js";var Et=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const n=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>b("div",{class:n.value},ae(a.default))}}),Qt=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const n=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>b("div",{class:n.value},ae(a.default))}});function Vt(){const e=T(!Ie.value);return e.value===!1&&K(()=>{e.value=!0}),e}const Je=typeof ResizeObserver!="undefined",Ve=Je===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Te=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let n=null,l,i={width:-1,height:-1};function s(f){f===!0||e.debounce===0||e.debounce==="0"?d():n===null&&(n=setTimeout(d,e.debounce))}function d(){if(clearTimeout(n),n=null,l){const{offsetWidth:f,offsetHeight:o}=l;(f!==i.width||o!==i.height)&&(i={width:f,height:o},a("resize",i))}}const p=j();if(Object.assign(p.proxy,{trigger:s}),Je===!0){let f;return K(()=>{oe(()=>{l=p.proxy.$el.parentNode,l&&(f=new ResizeObserver(s),f.observe(l),d())})}),W(()=>{clearTimeout(n),f!==void 0&&(f.disconnect!==void 0?f.disconnect():l&&f.unobserve(l))}),Ae}else{let z=function(){clearTimeout(n),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",s,B.passive),o=void 0)},L=function(){z(),l&&l.contentDocument&&(o=l.contentDocument.defaultView,o.addEventListener("resize",s,B.passive),d())};const f=Vt();let o;return K(()=>{oe(()=>{l=p.proxy.$el,l&&L()})}),W(z),()=>{if(f.value===!0)return b("object",{style:Ve.style,tabindex:-1,type:"text/html",data:Ve.url,"aria-hidden":"true",onLoad:L})}}}}),Ht=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:n}){const{proxy:{$q:l}}=j(),i=_e(le,()=>{console.error("QHeader needs to be child of QLayout")}),s=T(parseInt(e.heightHint,10)),d=T(!0),p=c(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||l.platform.is.ios&&i.isContainer.value===!0),f=c(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return d.value===!0?s.value:0;const r=s.value-i.scroll.value.position;return r>0?r:0}),o=c(()=>e.modelValue!==!0||p.value===!0&&d.value!==!0),z=c(()=>e.modelValue===!0&&o.value===!0&&e.reveal===!0),L=c(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(o.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=c(()=>{const r=i.rows.value.top,q={};return r[0]==="l"&&i.left.space===!0&&(q[l.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),r[2]==="r"&&i.right.space===!0&&(q[l.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),q});function u(r,q){i.update("header",r,q)}function _(r,q){r.value!==q&&(r.value=q)}function S({height:r}){_(s,r),u("size",r)}function h(r){z.value===!0&&_(d,!0),n("focusin",r)}g(()=>e.modelValue,r=>{u("space",r),_(d,!0),i.animate()}),g(f,r=>{u("offset",r)}),g(()=>e.reveal,r=>{r===!1&&_(d,e.modelValue)}),g(d,r=>{i.animate(),n("reveal",r)}),g(i.scroll,r=>{e.reveal===!0&&_(d,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const E={};return i.instances.header=E,e.modelValue===!0&&u("size",s.value),u("space",e.modelValue),u("offset",f.value),W(()=>{i.instances.header===E&&(i.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const r=vt(a.default,[]);return e.elevated===!0&&r.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(b(Te,{debounce:0,onResize:S})),b("header",{class:L.value,style:k.value,onFocusin:h},r)}}});function Mt(e,a,n){let l;function i(){l!==void 0&&($e.remove(l),l=void 0)}return W(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>n.value===!0,handler:a},$e.add(l)}}}let X=0,ge,ye,Y,pe=!1,He,Me,I;function Dt(e){Wt(e)&&mt(e)}function Wt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const a=ht(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=n||l?e.deltaY:e.deltaX;for(let s=0;s<a.length;s++){const d=a[s];if(Ct(d,l))return l?i<0&&d.scrollTop===0?!0:i>0&&d.scrollTop+d.clientHeight===d.scrollHeight:i<0&&d.scrollLeft===0?!0:i>0&&d.scrollLeft+d.clientWidth===d.scrollWidth}return!0}function De(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function te(e){pe!==!0&&(pe=!0,requestAnimationFrame(()=>{pe=!1;const{height:a}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(Y===void 0||a!==window.innerHeight)&&(Y=n-a,document.scrollingElement.scrollTop=l),l>Y&&(document.scrollingElement.scrollTop-=Math.ceil((l-Y)/8))}))}function We(e){const a=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(a);ge=Ke(window),ye=Ge(window),He=a.style.left,Me=a.style.top,a.style.left=`-${ge}px`,a.style.top=`-${ye}px`,i!=="hidden"&&(i==="scroll"||a.scrollWidth>window.innerWidth)&&a.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||a.scrollHeight>window.innerHeight)&&a.classList.add("q-body--force-scrollbar-y"),a.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,A.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",te,B.passiveCapture),window.visualViewport.addEventListener("scroll",te,B.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",De,B.passiveCapture))}A.is.desktop===!0&&A.is.mac===!0&&window[`${e}EventListener`]("wheel",Dt,B.notPassive),e==="remove"&&(A.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",te,B.passiveCapture),window.visualViewport.removeEventListener("scroll",te,B.passiveCapture)):window.removeEventListener("scroll",De,B.passiveCapture)),a.classList.remove("q-body--prevent-scroll"),a.classList.remove("q-body--force-scrollbar-x"),a.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,a.style.left=He,a.style.top=Me,window.scrollTo(ge,ye),Y=void 0)}function Rt(e){let a="add";if(e===!0){if(X++,I!==void 0){clearTimeout(I),I=void 0;return}if(X>1)return}else{if(X===0||(X--,X>0))return;if(a="remove",A.is.ios===!0&&A.is.nativeMobile===!0){clearTimeout(I),I=setTimeout(()=>{We(a),I=void 0},100);return}}We(a)}function Ft(){let e;return{preventBodyScroll(a){a!==e&&(e!==void 0||a===!0)&&(e=a,Rt(a))}}}function It(){let e;return W(()=>{clearTimeout(e)}),{registerTimeout(a,n){clearTimeout(e),e=setTimeout(a,n)},removeTimeout(){clearTimeout(e)}}}const Re=150;var At=M({name:"QDrawer",inheritAttrs:!1,props:{...Lt,...Bt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...xt,"on-layout","mini-state"],setup(e,{slots:a,emit:n,attrs:l}){const i=j(),{proxy:{$q:s}}=i,d=Ot(e,s),{preventBodyScroll:p}=Ft(),{registerTimeout:f}=It(),o=_e(le,()=>{console.error("QDrawer needs to be child of QLayout")});let z,L,k;const u=T(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),_=c(()=>e.mini===!0&&u.value!==!0),S=c(()=>_.value===!0?e.miniWidth:e.width),h=T(e.showIfAbove===!0&&u.value===!1?!0:e.modelValue===!0),E=c(()=>e.persistent!==!0&&(u.value===!0||Ze.value===!0));function r(t,m){if(O(),t!==!1&&o.animate(),P(0),u.value===!0){const $=o.instances[G.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),V(1),o.isContainer.value!==!0&&p(!0)}else V(0),t!==!1&&ce(!1);f(()=>{t!==!1&&ce(!0),m!==!0&&n("show",t)},Re)}function q(t,m){D(),t!==!1&&o.animate(),V(0),P(R.value*S.value),de(),m!==!0&&f(()=>{n("hide",t)},Re)}const{show:v,hide:y}=kt({showing:h,hideOnRouteChange:E,handleShow:r,handleHide:q}),{addToHistory:O,removeFromHistory:D}=Mt(h,y,E),Q={belowBreakpoint:u,hide:y},C=c(()=>e.side==="right"),R=c(()=>(s.lang.rtl===!0?-1:1)*(C.value===!0?1:-1)),Le=T(0),F=T(!1),ne=T(!1),xe=T(S.value*R.value),G=c(()=>C.value===!0?"left":"right"),re=c(()=>h.value===!0&&u.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),se=c(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(C.value?"R":"L")>-1||s.platform.is.ios===!0&&o.isContainer.value===!0),U=c(()=>e.overlay===!1&&h.value===!0&&u.value===!1),Ze=c(()=>e.overlay===!0&&h.value===!0&&u.value===!1),et=c(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&F.value===!1?" hidden":"")),tt=c(()=>({backgroundColor:`rgba(0,0,0,${Le.value*.4})`})),ke=c(()=>C.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),ot=c(()=>C.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),at=c(()=>{const t={};return o.header.space===!0&&ke.value===!1&&(se.value===!0?t.top=`${o.header.offset}px`:o.header.space===!0&&(t.top=`${o.header.size}px`)),o.footer.space===!0&&ot.value===!1&&(se.value===!0?t.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(t.bottom=`${o.footer.size}px`)),t}),lt=c(()=>{const t={width:`${S.value}px`,transform:`translateX(${xe.value}px)`};return u.value===!0?t:Object.assign(t,at.value)}),it=c(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),nt=c(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(u.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(se.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ke.value===!0?" q-drawer--top-padding":""))),rt=c(()=>{const t=s.lang.rtl===!0?e.side:G.value;return[[he,dt,void 0,{[t]:!0,mouse:!0}]]}),st=c(()=>{const t=s.lang.rtl===!0?G.value:e.side;return[[he,qe,void 0,{[t]:!0,mouse:!0}]]}),ut=c(()=>{const t=s.lang.rtl===!0?G.value:e.side;return[[he,qe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){ft(u,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}g(u,t=>{t===!0?(z=h.value,h.value===!0&&y(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(h.value===!0?(P(0),V(0),de()):v(!1))}),g(()=>e.side,(t,m)=>{o.instances[m]===Q&&(o.instances[m]=void 0,o[m].space=!1,o[m].offset=0),o.instances[t]=Q,o[t].size=S.value,o[t].space=U.value,o[t].offset=re.value}),g(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),g(()=>e.behavior+e.breakpoint,ue),g(o.isContainer,t=>{h.value===!0&&p(t!==!0),t===!0&&ue()}),g(o.scrollbarWidth,()=>{P(h.value===!0?0:void 0)}),g(re,t=>{H("offset",t)}),g(U,t=>{n("on-layout",t),H("space",t)}),g(C,()=>{P()}),g(S,t=>{P(),fe(e.miniToOverlay,t)}),g(()=>e.miniToOverlay,t=>{fe(t,S.value)}),g(()=>s.lang.rtl,()=>{P()}),g(()=>e.mini,()=>{e.modelValue===!0&&(ct(),o.animate())}),g(_,t=>{n("mini-state",t)});function P(t){t===void 0?oe(()=>{t=h.value===!0?0:S.value,P(R.value*t)}):(o.isContainer.value===!0&&C.value===!0&&(u.value===!0||Math.abs(t)===S.value)&&(t+=R.value*o.scrollbarWidth.value),xe.value=t)}function V(t){Le.value=t}function ce(t){const m=t===!0?"remove":o.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function ct(){clearTimeout(L),i.proxy&&i.proxy.$el&&i.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,L=setTimeout(()=>{ne.value=!1,i&&i.proxy&&i.proxy.$el&&i.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(t){if(h.value!==!1)return;const m=S.value,$=ee(t.distance.x,0,m);if(t.isFinal===!0){$>=Math.min(75,m)===!0?v():(o.animate(),V(0),P(R.value*m)),F.value=!1;return}P((s.lang.rtl===!0?C.value!==!0:C.value)?Math.max(m-$,0):Math.min(0,$-m)),V(ee($/m,0,1)),t.isFirst===!0&&(F.value=!0)}function qe(t){if(h.value!==!0)return;const m=S.value,$=t.direction===e.side,J=(s.lang.rtl===!0?$!==!0:$)?ee(t.distance.x,0,m):0;if(t.isFinal===!0){Math.abs(J)<Math.min(75,m)===!0?(o.animate(),V(1),P(0)):y(),F.value=!1;return}P(R.value*J),V(ee(1-J/m,0,1)),t.isFirst===!0&&(F.value=!0)}function de(){p(!1),ce(!0)}function H(t,m){o.update(e.side,t,m)}function ft(t,m){t.value!==m&&(t.value=m)}function fe(t,m){H("size",t===!0?e.miniWidth:m)}return o.instances[e.side]=Q,fe(e.miniToOverlay,S.value),H("space",U.value),H("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),K(()=>{n("on-layout",U.value),n("mini-state",_.value),z=e.showIfAbove===!0;const t=()=>{(h.value===!0?r:q)(!1,!0)};if(o.totalWidth.value!==0){oe(t);return}k=g(o.totalWidth,()=>{k(),k=void 0,h.value===!1&&e.showIfAbove===!0&&u.value===!1?v(!1):t()})}),W(()=>{k!==void 0&&k(),clearTimeout(L),h.value===!0&&de(),o.instances[e.side]===Q&&(o.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const t=[];u.value===!0&&(e.noSwipeOpen===!1&&t.push(gt(b("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),rt.value)),t.push(ze("div",{ref:"backdrop",class:et.value,style:tt.value,"aria-hidden":"true",onClick:y},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>ut.value)));const m=_.value===!0&&a.mini!==void 0,$=[b("div",{...l,key:""+m,class:[it.value,l.class]},m===!0?a.mini():ae(a.default))];return e.elevated===!0&&h.value===!0&&$.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ze("aside",{ref:"content",class:nt.value,style:lt.value},$,"contentclose",e.noSwipeClose!==!0&&u.value===!0,()=>st.value)),b("div",{class:"q-drawer-container"},t)}}}),Nt=M({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:n}}=j(),l=_e(le,()=>{console.error("QPageContainer needs to be child of QLayout")});Ne(yt,!0);const i=c(()=>{const s={};return l.header.space===!0&&(s.paddingTop=`${l.header.size}px`),l.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(s.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),s});return()=>b("div",{class:"q-page-container",style:i.value},ae(a.default))}});const{passive:Fe}=B,jt=["both","horizontal","vertical"];var Ut=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,i,s;g(()=>e.scrollTarget,()=>{f(),p()});function d(){l!==null&&l();const L=Math.max(0,Ge(i)),k=Ke(i),u={top:L-n.position.top,left:k-n.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const _=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";n.position={top:L,left:k},n.directionChanged=n.direction!==_,n.delta=u,n.directionChanged===!0&&(n.direction=_,n.inflectionPoint=n.position),a("scroll",{...n})}function p(){i=Pt(s,e.scrollTarget),i.addEventListener("scroll",o,Fe),o(!0)}function f(){i!==void 0&&(i.removeEventListener("scroll",o,Fe),i=void 0)}function o(L){if(L===!0||e.debounce===0||e.debounce==="0")d();else if(l===null){const[k,u]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];l=()=>{u(k),l=null}}}const z=j();return K(()=>{s=z.proxy.$el.parentNode,p()}),W(()=>{l!==null&&l(),f()}),Object.assign(z.proxy,{trigger:o,getPosition:()=>n}),Ae}}),Xt=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:n}){const{proxy:{$q:l}}=j(),i=T(null),s=T(l.screen.height),d=T(e.container===!0?0:l.screen.width),p=T({position:0,direction:"down",inflectionPoint:0}),f=T(0),o=T(Ie.value===!0?0:me()),z=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),L=c(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),k=c(()=>o.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),u=c(()=>o.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function _(v){if(e.container===!0||document.qScrollPrevented!==!0){const y={position:v.position.top,direction:v.direction,directionChanged:v.directionChanged,inflectionPoint:v.inflectionPoint.top,delta:v.delta.top};p.value=y,e.onScroll!==void 0&&n("scroll",y)}}function S(v){const{height:y,width:O}=v;let D=!1;s.value!==y&&(D=!0,s.value=y,e.onScrollHeight!==void 0&&n("scroll-height",y),E()),d.value!==O&&(D=!0,d.value=O),D===!0&&e.onResize!==void 0&&n("resize",v)}function h({height:v}){f.value!==v&&(f.value=v,E())}function E(){if(e.container===!0){const v=s.value>f.value?me():0;o.value!==v&&(o.value=v)}}let r;const q={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:i,height:s,containerHeight:f,scrollbarWidth:o,totalWidth:c(()=>d.value+o.value),rows:c(()=>{const v=e.view.toLowerCase().split(" ");return{top:v[0].split(""),middle:v[1].split(""),bottom:v[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:p,animate(){r!==void 0?clearTimeout(r):document.body.classList.add("q-body--layout-animate"),r=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),r=void 0},155)},update(v,y,O){q[v][y]=O}};if(Ne(le,q),me()>0){let O=function(){v=null,y.classList.remove("hide-scrollbar")},D=function(){if(v===null){if(y.scrollHeight>l.screen.height)return;y.classList.add("hide-scrollbar")}else clearTimeout(v);v=setTimeout(O,300)},Q=function(C){v!==null&&C==="remove"&&(clearTimeout(v),O()),window[`${C}EventListener`]("resize",D)},v=null;const y=document.body;g(()=>e.container!==!0?"add":"remove",Q),e.container!==!0&&Q("add"),pt(()=>{Q("remove")})}return()=>{const v=bt(a.default,[b(Ut,{onScroll:_}),b(Te,{onResize:S})]),y=b("div",{class:z.value,style:L.value,ref:e.container===!0?void 0:i,tabindex:-1},v);return e.container===!0?b("div",{class:"q-layout-container overflow-hidden",ref:i},[b(Te,{onResize:h}),b("div",{class:"absolute-full",style:k.value},[b("div",{class:"scroll",style:u.value},[y])])]):y}}});const Yt=je({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Kt(e,a,n,l,i,s){return N(),be(qt,{clickable:"",tag:"a",to:e.link},{default:x(()=>[e.icon?(N(),be(Qe,{key:0,avatar:""},{default:x(()=>[w(Xe,{name:e.icon},null,8,["name"])]),_:1})):Ye("",!0),w(Qe,null,{default:x(()=>[w(we,null,{default:x(()=>[Ce(Pe(e.title),1)]),_:1}),w(we,{caption:""},{default:x(()=>[Ce(Pe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Gt=Ue(Yt,[["render",Kt]]),Jt="/assets/intro.276f3199.mp4",Zt="/assets/bitmap.3a69beaa.png";const eo=[{title:"\u041E \u043D\u0430\u0441",icon:"help",link:"/info"},{title:"\u041F\u043E\u043C\u043E\u0449\u044C",caption:"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u0437\u044F\u044C",icon:"accessibility",link:"/help"}],to=je({name:"MainLayout",components:{EssentialLink:Gt},setup(){const e=T(!1),a=T(!0);return setTimeout(()=>{a.value=!1},3e3),{essentialLinks:eo,leftDrawerOpen:e,intro:a,toggleLeftDrawer(){e.value=!e.value}}}}),Se=e=>(Tt("data-v-7819016e"),e=e(),_t(),e),oo={key:0,src:Jt,autoplay:"",muted:"",style:{width:"100%",height:"100%",position:"absolute","z-index":"10000","object-fit":"cover"}},ao=Se(()=>ie("div",{style:{"margin-bottom":"-3px"}},"\u0421\u0435\u0440\u0434\u0446\u0435 \u041A\u0438\u0441\u043B\u043E\u0432\u043E\u0434\u0441\u043A\u0430\xA0 ",-1)),lo=Se(()=>ie("img",{src:Zt},null,-1)),io=Se(()=>ie("h1",null," \u041C\u0435\u043D\u044E",-1)),no={class:"mt"};function ro(e,a,n,l,i,s){const d=Be("EssentialLink"),p=Be("router-view");return N(),ve(Oe,null,[e.intro?(N(),ve("video",oo)):Ye("",!0),w(Xt,{view:"lHh Lpr lFf"},{default:x(()=>[w(Ht,{elevated:"",class:"bgHeader"},{default:x(()=>[w(Qt,null,{default:x(()=>[w(Ee,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,color:"indigo-10"},null,8,["onClick"]),w(Et,{onClick:a[0]||(a[0]=f=>{this.$router.push("/")})},{default:x(()=>[ao]),_:1}),w(Ee,{onClick:a[1]||(a[1]=f=>{this.$router.push("/")}),flat:"",dense:""},{default:x(()=>[w(Xe,{size:"30px"},{default:x(()=>[lo]),_:1})]),_:1})]),_:1})]),_:1}),w(At,{class:"bbg","show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[2]||(a[2]=f=>e.leftDrawerOpen=f),side:"left",bordered:""},{default:x(()=>[w($t,{color:"white"},{default:x(()=>[w(we,{header:""},{default:x(()=>[io]),_:1}),w(zt,{color:"white",inset:""}),ie("div",no,[(N(!0),ve(Oe,null,wt(e.essentialLinks,f=>(N(),be(d,St({key:f.title},f,{class:"menuText"}),null,16))),128))])]),_:1})]),_:1},8,["modelValue"]),w(Nt,null,{default:x(()=>[w(p)]),_:1})]),_:1})],64)}var po=Ue(to,[["render",ro],["__scopeId","data-v-7819016e"]]);export{po as default};