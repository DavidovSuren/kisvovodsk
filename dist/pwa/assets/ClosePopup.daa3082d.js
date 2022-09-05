import{l as I,n as ie,r as y,w as b,c as p,an as ee,b as Ge,h as q,ao as Ue,ap as Xe,aq as Ye,a3 as pe,u as xe,f as ye,ac as he,j as Be,g as le,ar as Me,z as be,x as we,o as Je,C as Ze,p as me,B as et,D as tt,t as nt}from"./index.5e1444ea.js";import{u as _e,a as ot,b as it}from"./use-timeout.8639efae.js";import{u as Le,a as De,b as We}from"./use-model-toggle.db4a7c61.js";import{r as ke,a as lt,b as Oe}from"./focus-manager.32f8d49a.js";import{c as at,e as ut,a as st}from"./selection.a8f4f752.js";import{u as rt,a as ct}from"./use-dark.c12fcc1a.js";function Re(){let e;return I(()=>{e=void 0}),{registerTick(t){e=t,ie(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}const $e={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function dt(e,t){const o=y(t.value);return b(t,l=>{ie(()=>{o.value=l})}),{transition:p(()=>"q-transition--"+(o.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const W=[];function ft(e){return W.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function ze(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return ee(e)}else if(e.__qPortalInnerRef!==void 0){const o=ee(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=ee(e)}while(e!=null)}function ht(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(o--,e.$options.name==="QMenu"){e=ze(e,t);continue}e.hide(t)}e=ee(e)}}function mt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Fe(e,t,o,l){const i=y(!1),s=y(!1);let n=null;const h={},d=l===!0&&mt(e);function c(m){if(m===!0){ke(h),s.value=!0;return}s.value=!1,i.value===!1&&(d===!1&&n===null&&(n=Xe()),i.value=!0,W.push(e.proxy),lt(h))}function r(m){if(s.value=!1,m!==!0)return;ke(h),i.value=!1;const g=W.indexOf(e.proxy);g>-1&&W.splice(g,1),n!==null&&(Ye(n),n=null)}return Ge(()=>{r(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:c,hidePortal:r,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>d===!0?o():i.value===!0?[q(Ue,{to:n},o())]:void 0}}const P=[];let O;function vt(e){O=e.keyCode===27}function gt(){O===!0&&(O=!1)}function pt(e){O===!0&&(O=!1,pe(e,27)===!0&&P[P.length-1](e))}function Ae(e){window[e]("keydown",vt),window[e]("blur",gt),window[e]("keyup",pt),O=!1}function Ie(e){xe.is.desktop===!0&&(P.push(e),P.length===1&&Ae("addEventListener"))}function te(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&Ae("removeEventListener"))}const H=[];function Qe(e){H[H.length-1](e)}function je(e){xe.is.desktop===!0&&(H.push(e),H.length===1&&document.body.addEventListener("focusin",Qe))}function ve(e){const t=H.indexOf(e);t>-1&&(H.splice(t,1),H.length===0&&document.body.removeEventListener("focusin",Qe))}let Z=0;const xt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},qe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var yt=ye({name:"QDialog",inheritAttrs:!1,props:{...Le,...$e,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...De,"shake","click","escape-key"],setup(e,{slots:t,emit:o,attrs:l}){const i=le(),s=y(null),n=y(!1),h=y(!1),d=y(!1);let c,r=null,m,g;const a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:x}=it(),{registerTimeout:v,removeTimeout:w}=_e(),{registerTick:Q,removeTick:R}=Re(),{showPortal:j,hidePortal:K,portalIsAccessible:N,renderPortal:ae}=Fe(i,s,S,!0),{hide:M}=We({showing:n,hideOnRouteChange:a,handleShow:de,handleHide:X,processOnMount:!0}),{addToHistory:T,removeFromHistory:ue}=ot(n,M,a),V=p(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${xt[e.position]}`+(d.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),G=p(()=>"q-transition--"+(e.transitionShow===void 0?qe[e.position][0]:e.transitionShow)),U=p(()=>"q-transition--"+(e.transitionHide===void 0?qe[e.position][1]:e.transitionHide)),se=p(()=>h.value===!0?U.value:G.value),_=p(()=>`--q-transition-duration: ${e.transitionDuration}ms`),L=p(()=>n.value===!0&&e.seamless!==!0),re=p(()=>e.autoClose===!0?{onClick:fe}:{}),ce=p(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${L.value===!0?"modal":"seamless"}`,l.class]);b(n,f=>{ie(()=>{h.value=f})}),b(()=>e.maximized,f=>{n.value===!0&&D(f)}),b(L,f=>{x(f),f===!0?(je(E),Ie(z)):(ve(E),te(z))});function de(f){w(),R(),T(),r=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,D(e.maximized),j(),d.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),Q(k)),v(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:u,bottom:C}=document.activeElement.getBoundingClientRect(),{innerHeight:J}=window,A=window.visualViewport!==void 0?window.visualViewport.height:J;u>0&&C>A/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-A,C>=J?1/0:Math.ceil(document.scrollingElement.scrollTop+C-A/2))),document.activeElement.scrollIntoView()}g=!0,s.value.click(),g=!1}j(!0),d.value=!1,o("show",f)},e.transitionDuration)}function X(f){w(),R(),ue(),F(!0),d.value=!0,K(),r!==null&&(r.focus(),r=null),v(()=>{K(!0),d.value=!1,o("hide",f)},e.transitionDuration)}function k(f){Oe(()=>{let u=s.value;u===null||u.contains(document.activeElement)===!0||(u=u.querySelector(f||"[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function $(){k(),o("shake");const f=s.value;f!==null&&(f.classList.remove("q-animate--scale"),f.classList.add("q-animate--scale"),clearTimeout(c),c=setTimeout(()=>{s.value!==null&&(f.classList.remove("q-animate--scale"),k())},170))}function z(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&$():(o("escape-key"),M()))}function F(f){clearTimeout(c),(f===!0||n.value===!0)&&(D(!1),e.seamless!==!0&&(x(!1),ve(E),te(z))),f!==!0&&(r=null)}function D(f){f===!0?m!==!0&&(Z<1&&document.body.classList.add("q-body--dialog"),Z++,m=!0):m===!0&&(Z<2&&document.body.classList.remove("q-body--dialog"),Z--,m=!1)}function fe(f){g!==!0&&(M(f),o("click",f))}function Y(f){e.persistent!==!0&&e.noBackdropDismiss!==!0?M(f):e.noShake!==!0&&$()}function E(f){e.allowFocusOutside!==!0&&N.value===!0&&Me(s.value,f.target)!==!0&&k('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:k,shake:$,__updateRefocusTarget(f){r=f||null}}),I(F);function S(){return q("div",{...l,class:ce.value},[q(he,{name:"q-transition--fade",appear:!0},()=>L.value===!0?q("div",{class:"q-dialog__backdrop fixed-full",style:_.value,"aria-hidden":"true",onMousedown:Y}):null),q(he,{name:se.value,appear:!0},()=>n.value===!0?q("div",{ref:s,class:V.value,style:_.value,tabindex:-1,...re.value},Be(t.default)):null)])}return ae}});const Ke={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ne({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:l,proxy:i,emit:s}=le(),n=y(null);let h;function d(a){return n.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};o===void 0&&(Object.assign(c,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){pe(a,13)===!0&&c.toggle(a)},contextClick(a){i.hide(a),be(a),ie(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:be,mobileTouch(a){if(c.mobileCleanup(a),d(a)!==!0)return;i.hide(a),n.value.classList.add("non-selectable");const x=a.target;we(c,"anchor",[[x,"touchmove","mobileCleanup","passive"],[x,"touchend","mobileCleanup","passive"],[x,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){n.value.classList.remove("non-selectable"),clearTimeout(h),e.value===!0&&a!==void 0&&at()}}),o=function(a=l.contextMenu){if(l.noParentEvent===!0||n.value===null)return;let x;a===!0?i.$q.platform.is.mobile===!0?x=[[n.value,"touchstart","mobileTouch","passive"]]:x=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:x=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],we(c,"anchor",x)});function r(){Ze(c,"anchor")}function m(a){for(n.value=a;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;o()}function g(){if(l.target===!1||l.target===""||i.$el.parentNode===null)n.value=null;else if(l.target===!0)m(i.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(n.value=a.$el||a,o()):(n.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return b(()=>l.contextMenu,a=>{n.value!==null&&(r(),o(a))}),b(()=>l.target,()=>{n.value!==null&&r(),g()}),b(()=>l.noParentEvent,a=>{n.value!==null&&(a===!0?r():o())}),Je(()=>{g(),t!==!0&&l.modelValue===!0&&n.value===null&&s("update:modelValue",!1)}),I(()=>{clearTimeout(h),r()}),{anchorEl:n,canShow:d,anchorEvents:c}}function bt(e,t){const o=y(null);let l;function i(h,d){const c=`${d!==void 0?"add":"remove"}EventListener`,r=d!==void 0?d:l;h!==window&&h[c]("scroll",r,me.passive),window[c]("scroll",r,me.passive),l=d}function s(){o.value!==null&&(i(o.value),o.value=null)}const n=b(()=>e.noParentEvent,()=>{o.value!==null&&(s(),t())});return I(n),{localScrollTarget:o,unconfigureScrollTarget:s,changeScrollEvent:i}}let Ve;const{notPassiveCapture:ne}=me,B=[];function oe(e){clearTimeout(Ve);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=W.length-1;for(;o>=0;){const l=W[o].$;if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;o--}for(let l=B.length-1;l>=0;l--){const i=B[l];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function wt(e){B.push(e),B.length===1&&(document.addEventListener("mousedown",oe,ne),document.addEventListener("touchstart",oe,ne))}function Te(e){const t=B.findIndex(o=>o===e);t>-1&&(B.splice(t,1),B.length===0&&(clearTimeout(Ve),document.removeEventListener("mousedown",oe,ne),document.removeEventListener("touchstart",oe,ne)))}let Ee,Se;function Ce(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function kt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ge={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ge[`${e}#ltr`]=e,ge[`${e}#rtl`]=e});function Pe(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:ge[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function qt(e,t){let{top:o,left:l,right:i,bottom:s,width:n,height:h}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],l-=t[0],s+=t[1],i+=t[0],n+=t[0],h+=t[1]),{top:o,left:l,right:i,bottom:s,width:n,height:h,middle:l+(i-l)/2,center:o+(s-o)/2}}function Tt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Et(e){if(xe.is.ios===!0&&window.visualViewport!==void 0){const h=document.body.style,{offsetLeft:d,offsetTop:c}=window.visualViewport;d!==Ee&&(h.setProperty("--q-pe-left",d+"px"),Ee=d),c!==Se&&(h.setProperty("--q-pe-top",c+"px"),Se=c)}let t;const{scrollLeft:o,scrollTop:l}=e.el;if(e.absoluteOffset===void 0)t=qt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:h,left:d}=e.anchorEl.getBoundingClientRect(),c=h+e.absoluteOffset.top,r=d+e.absoluteOffset.left;t={top:c,left:r,width:1,height:1,right:r+1,center:c,middle:r,bottom:c+1}}let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=t.width+"px",e.cover===!0&&(i.minHeight=t.height+"px")),Object.assign(e.el.style,i);const s=Tt(e.el),n={top:t[e.anchorOrigin.vertical]-s[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-s[e.selfOrigin.horizontal]};St(n,t,s,e.anchorOrigin,e.selfOrigin),i={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(i.maxHeight=n.maxHeight+"px",t.height>n.maxHeight&&(i.minHeight=i.maxHeight)),n.maxWidth!==void 0&&(i.maxWidth=n.maxWidth+"px",t.width>n.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function St(e,t,o,l,i){const s=o.bottom,n=o.right,h=ut(),d=window.innerHeight-h,c=document.body.clientWidth;if(e.top<0||e.top+s>d)if(i.vertical==="center")e.top=t[l.vertical]>d/2?Math.max(0,d-s):0,e.maxHeight=Math.min(s,d);else if(t[l.vertical]>d/2){const r=Math.min(d,l.vertical==="center"?t.center:l.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,r),e.top=Math.max(0,r-s)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,d-e.top);if(e.left<0||e.left+n>c)if(e.maxWidth=Math.min(n,c),i.horizontal==="middle")e.left=t[l.horizontal]>c/2?Math.max(0,c-n):0;else if(t[l.horizontal]>c/2){const r=Math.min(c,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(n,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(n,c-e.left)}var Ct=ye({name:"QMenu",inheritAttrs:!1,props:{...Ke,...Le,...rt,...$e,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ce},self:{type:String,validator:Ce},offset:{type:Array,validator:kt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...De,"click","escape-key"],setup(e,{slots:t,emit:o,attrs:l}){let i=null,s,n,h;const d=le(),{proxy:c}=d,{$q:r}=c,m=y(null),g=y(!1),a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),x=ct(e,r),{registerTick:v,removeTick:w}=Re(),{registerTimeout:Q,removeTimeout:R}=_e(),{transition:j,transitionStyle:K}=dt(e,g),{localScrollTarget:N,changeScrollEvent:ae,unconfigureScrollTarget:M}=bt(e,D),{anchorEl:T,canShow:ue}=Ne({showing:g}),{hide:V}=We({showing:g,canShow:ue,handleShow:$,handleHide:z,hideOnRouteChange:a,processOnMount:!0}),{showPortal:G,hidePortal:U,renderPortal:se}=Fe(d,m,f),_={anchorEl:T,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&g.value===!0)return V(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&tt(u),!0}},L=p(()=>Pe(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),re=p(()=>e.cover===!0?L.value:Pe(e.self||"top start",r.lang.rtl)),ce=p(()=>(e.square===!0?" q-menu--square":"")+(x.value===!0?" q-menu--dark q-dark":"")),de=p(()=>e.autoClose===!0?{onClick:fe}:{}),X=p(()=>g.value===!0&&e.persistent!==!0);b(X,u=>{u===!0?(Ie(E),wt(_)):(te(E),Te(_))});function k(){Oe(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function $(u){if(w(),R(),i=e.noRefocus===!1?document.activeElement:null,je(Y),G(),D(),s=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const C=et(u);if(C.left!==void 0){const{top:J,left:A}=T.value.getBoundingClientRect();s={left:C.left-A,top:C.top-J}}}n===void 0&&(n=b(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,S)),e.noFocus!==!0&&document.activeElement.blur(),v(()=>{S(),e.noFocus!==!0&&k()}),Q(()=>{r.platform.is.ios===!0&&(h=e.autoClose,m.value.click()),S(),G(!0),o("show",u)},e.transitionDuration)}function z(u){w(),R(),U(),F(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(i.focus(),i=null),Q(()=>{U(!0),o("hide",u)},e.transitionDuration)}function F(u){s=void 0,n!==void 0&&(n(),n=void 0),(u===!0||g.value===!0)&&(ve(Y),M(),Te(_),te(E)),u!==!0&&(i=null)}function D(){(T.value!==null||e.scrollTarget!==void 0)&&(N.value=st(T.value,e.scrollTarget),ae(N.value,S))}function fe(u){h!==!0?(ze(c,u),o("click",u)):h=!1}function Y(u){X.value===!0&&e.noFocus!==!0&&Me(m.value,u.target)!==!0&&k()}function E(u){o("escape-key"),V(u)}function S(){const u=m.value;u===null||T.value===null||Et({el:u,offset:e.offset,anchorEl:T.value,anchorOrigin:L.value,selfOrigin:re.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function f(){return q(he,{name:j.value,appear:!0},()=>g.value===!0?q("div",{...l,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+ce.value,l.class],style:[l.style,K.value],...de.value},Be(t.default)):null)}return I(F),Object.assign(c,{focus:k,updatePosition:S}),se}}),Dt=ye({name:"QPopupProxy",props:{...Ke,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:t,emit:o,attrs:l}){const{proxy:i}=le(),{$q:s}=i,n=y(!1),h=y(null),d=p(()=>parseInt(e.breakpoint,10)),{canShow:c}=Ne({showing:n});function r(){return s.screen.width<d.value||s.screen.height<d.value?"dialog":"menu"}const m=y(r()),g=p(()=>m.value==="menu"?{maxHeight:"99vh"}:{});b(()=>r(),v=>{n.value!==!0&&(m.value=v)}),Object.assign(i,{show(v){c(v)===!0&&h.value.show(v)},hide(v){h.value.hide(v)},toggle(v){h.value.toggle(v)}});function a(v){n.value=!0,o("show",v)}function x(v){n.value=!1,m.value=r(),o("hide",v)}return()=>{const v={ref:h,...g.value,...l,onShow:a,onHide:x};let w;return m.value==="dialog"?w=yt:(w=Ct,Object.assign(v,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),q(w,v,t.default)}}});function He(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Wt=nt({name:"close-popup",beforeMount(e,{value:t}){const o={depth:He(t),handler(l){o.depth!==0&&setTimeout(()=>{const i=ft(e);i!==void 0&&ht(i,l,o.depth)})},handlerKey(l){pe(l,13)===!0&&o.handler(l)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=He(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Wt as C,Dt as Q};
