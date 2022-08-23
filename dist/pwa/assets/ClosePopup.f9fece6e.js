import{l as j,n as ae,r as y,w,c as p,an as ne,b as Ye,h as q,ao as Je,ap as Ze,aq as et,a3 as ye,u as we,f as be,ac as ve,j as _e,g as ue,ar as Le,z as ke,x as qe,o as tt,C as nt,p as ge,B as ot,D as it,t as lt}from"./index.47d472db.js";import{u as De,a as at,b as ut}from"./use-timeout.f8b2eeb3.js";import{u as We,a as Oe,b as Fe}from"./use-model-toggle.efe65124.js";import{c as st,e as rt,a as ct}from"./selection.814f682e.js";import{u as dt,a as ft}from"./use-dark.876ee7c2.js";function Re(){let e;return j(()=>{e=void 0}),{registerTick(t){e=t,ae(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}const $e={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ht(e,t){const o=y(t.value);return w(t,l=>{ae(()=>{o.value=l})}),{transition:p(()=>"q-transition--"+(o.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let I=[],Q=[];function ze(e){Q=Q.filter(t=>t!==e)}function mt(e){ze(e),Q.push(e)}function Te(e){ze(e),Q.length===0&&I.length>0&&(I[I.length-1](),I=[])}function Ae(e){Q.length===0?e():I.push(e)}const W=[];function vt(e){return W.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function Ie(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return ne(e)}else if(e.__qPortalInnerRef!==void 0){const o=ne(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=ne(e)}while(e!=null)}function gt(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(o--,e.$options.name==="QMenu"){e=Ie(e,t);continue}e.hide(t)}e=ne(e)}}function pt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Qe(e,t,o,l){const i=y(!1),s=y(!1);let n=null;const h={},d=l===!0&&pt(e);function c(m){if(m===!0){Te(h),s.value=!0;return}s.value=!1,i.value===!1&&(d===!1&&n===null&&(n=Ze()),i.value=!0,W.push(e.proxy),mt(h))}function r(m){if(s.value=!1,m!==!0)return;Te(h),i.value=!1;const g=W.indexOf(e.proxy);g>-1&&W.splice(g,1),n!==null&&(et(n),n=null)}return Ye(()=>{r(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:c,hidePortal:r,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>d===!0?o():i.value===!0?[q(Je,{to:n},o())]:void 0}}const P=[];let O;function xt(e){O=e.keyCode===27}function yt(){O===!0&&(O=!1)}function wt(e){O===!0&&(O=!1,ye(e,27)===!0&&P[P.length-1](e))}function je(e){window[e]("keydown",xt),window[e]("blur",yt),window[e]("keyup",wt),O=!1}function Ke(e){we.is.desktop===!0&&(P.push(e),P.length===1&&je("addEventListener"))}function oe(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&je("removeEventListener"))}const H=[];function Ne(e){H[H.length-1](e)}function Ve(e){we.is.desktop===!0&&(H.push(e),H.length===1&&document.body.addEventListener("focusin",Ne))}function pe(e){const t=H.indexOf(e);t>-1&&(H.splice(t,1),H.length===0&&document.body.removeEventListener("focusin",Ne))}let te=0;const bt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ee={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var kt=be({name:"QDialog",inheritAttrs:!1,props:{...We,...$e,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Oe,"shake","click","escape-key"],setup(e,{slots:t,emit:o,attrs:l}){const i=ue(),s=y(null),n=y(!1),h=y(!1),d=y(!1);let c,r=null,m,g;const a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:x}=ut(),{registerTimeout:v,removeTimeout:b}=De(),{registerTick:K,removeTick:F}=Re(),{showPortal:N,hidePortal:V,portalIsAccessible:G,renderPortal:se}=Qe(i,s,S,!0),{hide:M}=Fe({showing:n,hideOnRouteChange:a,handleShow:he,handleHide:J,processOnMount:!0}),{addToHistory:T,removeFromHistory:re}=at(n,M,a),U=p(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${bt[e.position]}`+(d.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),X=p(()=>"q-transition--"+(e.transitionShow===void 0?Ee[e.position][0]:e.transitionShow)),Y=p(()=>"q-transition--"+(e.transitionHide===void 0?Ee[e.position][1]:e.transitionHide)),ce=p(()=>h.value===!0?Y.value:X.value),_=p(()=>`--q-transition-duration: ${e.transitionDuration}ms`),L=p(()=>n.value===!0&&e.seamless!==!0),de=p(()=>e.autoClose===!0?{onClick:me}:{}),fe=p(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${L.value===!0?"modal":"seamless"}`,l.class]);w(n,f=>{ae(()=>{h.value=f})}),w(()=>e.maximized,f=>{n.value===!0&&D(f)}),w(L,f=>{x(f),f===!0?(Ve(E),Ke($)):(pe(E),oe($))});function he(f){b(),F(),T(),r=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,D(e.maximized),N(),d.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),K(k)),v(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:u,bottom:C}=document.activeElement.getBoundingClientRect(),{innerHeight:ee}=window,A=window.visualViewport!==void 0?window.visualViewport.height:ee;u>0&&C>A/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-A,C>=ee?1/0:Math.ceil(document.scrollingElement.scrollTop+C-A/2))),document.activeElement.scrollIntoView()}g=!0,s.value.click(),g=!1}N(!0),d.value=!1,o("show",f)},e.transitionDuration)}function J(f){b(),F(),re(),z(!0),d.value=!0,V(),r!==null&&(r.focus(),r=null),v(()=>{V(!0),d.value=!1,o("hide",f)},e.transitionDuration)}function k(f){Ae(()=>{let u=s.value;u===null||u.contains(document.activeElement)===!0||(u=u.querySelector(f||"[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function R(){k(),o("shake");const f=s.value;f!==null&&(f.classList.remove("q-animate--scale"),f.classList.add("q-animate--scale"),clearTimeout(c),c=setTimeout(()=>{s.value!==null&&(f.classList.remove("q-animate--scale"),k())},170))}function $(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&R():(o("escape-key"),M()))}function z(f){clearTimeout(c),(f===!0||n.value===!0)&&(D(!1),e.seamless!==!0&&(x(!1),pe(E),oe($))),f!==!0&&(r=null)}function D(f){f===!0?m!==!0&&(te<1&&document.body.classList.add("q-body--dialog"),te++,m=!0):m===!0&&(te<2&&document.body.classList.remove("q-body--dialog"),te--,m=!1)}function me(f){g!==!0&&(M(f),o("click",f))}function Z(f){e.persistent!==!0&&e.noBackdropDismiss!==!0?M(f):e.noShake!==!0&&R()}function E(f){e.allowFocusOutside!==!0&&G.value===!0&&Le(s.value,f.target)!==!0&&k('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:k,shake:R,__updateRefocusTarget(f){r=f||null}}),j(z);function S(){return q("div",{...l,class:fe.value},[q(ve,{name:"q-transition--fade",appear:!0},()=>L.value===!0?q("div",{class:"q-dialog__backdrop fixed-full",style:_.value,"aria-hidden":"true",onMousedown:Z}):null),q(ve,{name:ce.value,appear:!0},()=>n.value===!0?q("div",{ref:s,class:U.value,style:_.value,tabindex:-1,...de.value},_e(t.default)):null)])}return se}});const Ge={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ue({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:l,proxy:i,emit:s}=ue(),n=y(null);let h;function d(a){return n.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};o===void 0&&(Object.assign(c,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ye(a,13)===!0&&c.toggle(a)},contextClick(a){i.hide(a),ke(a),ae(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:ke,mobileTouch(a){if(c.mobileCleanup(a),d(a)!==!0)return;i.hide(a),n.value.classList.add("non-selectable");const x=a.target;qe(c,"anchor",[[x,"touchmove","mobileCleanup","passive"],[x,"touchend","mobileCleanup","passive"],[x,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){n.value.classList.remove("non-selectable"),clearTimeout(h),e.value===!0&&a!==void 0&&st()}}),o=function(a=l.contextMenu){if(l.noParentEvent===!0||n.value===null)return;let x;a===!0?i.$q.platform.is.mobile===!0?x=[[n.value,"touchstart","mobileTouch","passive"]]:x=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:x=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],qe(c,"anchor",x)});function r(){nt(c,"anchor")}function m(a){for(n.value=a;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;o()}function g(){if(l.target===!1||l.target===""||i.$el.parentNode===null)n.value=null;else if(l.target===!0)m(i.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(n.value=a.$el||a,o()):(n.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return w(()=>l.contextMenu,a=>{n.value!==null&&(r(),o(a))}),w(()=>l.target,()=>{n.value!==null&&r(),g()}),w(()=>l.noParentEvent,a=>{n.value!==null&&(a===!0?r():o())}),tt(()=>{g(),t!==!0&&l.modelValue===!0&&n.value===null&&s("update:modelValue",!1)}),j(()=>{clearTimeout(h),r()}),{anchorEl:n,canShow:d,anchorEvents:c}}function qt(e,t){const o=y(null);let l;function i(h,d){const c=`${d!==void 0?"add":"remove"}EventListener`,r=d!==void 0?d:l;h!==window&&h[c]("scroll",r,ge.passive),window[c]("scroll",r,ge.passive),l=d}function s(){o.value!==null&&(i(o.value),o.value=null)}const n=w(()=>e.noParentEvent,()=>{o.value!==null&&(s(),t())});return j(n),{localScrollTarget:o,unconfigureScrollTarget:s,changeScrollEvent:i}}let Xe;const{notPassiveCapture:ie}=ge,B=[];function le(e){clearTimeout(Xe);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=W.length-1;for(;o>=0;){const l=W[o].$;if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;o--}for(let l=B.length-1;l>=0;l--){const i=B[l];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Tt(e){B.push(e),B.length===1&&(document.addEventListener("mousedown",le,ie),document.addEventListener("touchstart",le,ie))}function Se(e){const t=B.findIndex(o=>o===e);t>-1&&(B.splice(t,1),B.length===0&&(clearTimeout(Xe),document.removeEventListener("mousedown",le,ie),document.removeEventListener("touchstart",le,ie)))}let Ce,Pe;function He(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Et(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const xe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{xe[`${e}#ltr`]=e,xe[`${e}#rtl`]=e});function Be(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:xe[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function St(e,t){let{top:o,left:l,right:i,bottom:s,width:n,height:h}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],l-=t[0],s+=t[1],i+=t[0],n+=t[0],h+=t[1]),{top:o,left:l,right:i,bottom:s,width:n,height:h,middle:l+(i-l)/2,center:o+(s-o)/2}}function Ct(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Pt(e){if(we.is.ios===!0&&window.visualViewport!==void 0){const h=document.body.style,{offsetLeft:d,offsetTop:c}=window.visualViewport;d!==Ce&&(h.setProperty("--q-pe-left",d+"px"),Ce=d),c!==Pe&&(h.setProperty("--q-pe-top",c+"px"),Pe=c)}let t;const{scrollLeft:o,scrollTop:l}=e.el;if(e.absoluteOffset===void 0)t=St(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:h,left:d}=e.anchorEl.getBoundingClientRect(),c=h+e.absoluteOffset.top,r=d+e.absoluteOffset.left;t={top:c,left:r,width:1,height:1,right:r+1,center:c,middle:r,bottom:c+1}}let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=t.width+"px",e.cover===!0&&(i.minHeight=t.height+"px")),Object.assign(e.el.style,i);const s=Ct(e.el),n={top:t[e.anchorOrigin.vertical]-s[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-s[e.selfOrigin.horizontal]};Ht(n,t,s,e.anchorOrigin,e.selfOrigin),i={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(i.maxHeight=n.maxHeight+"px",t.height>n.maxHeight&&(i.minHeight=i.maxHeight)),n.maxWidth!==void 0&&(i.maxWidth=n.maxWidth+"px",t.width>n.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function Ht(e,t,o,l,i){const s=o.bottom,n=o.right,h=rt(),d=window.innerHeight-h,c=document.body.clientWidth;if(e.top<0||e.top+s>d)if(i.vertical==="center")e.top=t[l.vertical]>d/2?Math.max(0,d-s):0,e.maxHeight=Math.min(s,d);else if(t[l.vertical]>d/2){const r=Math.min(d,l.vertical==="center"?t.center:l.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,r),e.top=Math.max(0,r-s)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,d-e.top);if(e.left<0||e.left+n>c)if(e.maxWidth=Math.min(n,c),i.horizontal==="middle")e.left=t[l.horizontal]>c/2?Math.max(0,c-n):0;else if(t[l.horizontal]>c/2){const r=Math.min(c,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(n,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(n,c-e.left)}var Bt=be({name:"QMenu",inheritAttrs:!1,props:{...Ge,...We,...dt,...$e,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:He},self:{type:String,validator:He},offset:{type:Array,validator:Et},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Oe,"click","escape-key"],setup(e,{slots:t,emit:o,attrs:l}){let i=null,s,n,h;const d=ue(),{proxy:c}=d,{$q:r}=c,m=y(null),g=y(!1),a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),x=ft(e,r),{registerTick:v,removeTick:b}=Re(),{registerTimeout:K,removeTimeout:F}=De(),{transition:N,transitionStyle:V}=ht(e,g),{localScrollTarget:G,changeScrollEvent:se,unconfigureScrollTarget:M}=qt(e,D),{anchorEl:T,canShow:re}=Ue({showing:g}),{hide:U}=Fe({showing:g,canShow:re,handleShow:R,handleHide:$,hideOnRouteChange:a,processOnMount:!0}),{showPortal:X,hidePortal:Y,renderPortal:ce}=Qe(d,m,f),_={anchorEl:T,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&g.value===!0)return U(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&it(u),!0}},L=p(()=>Be(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),de=p(()=>e.cover===!0?L.value:Be(e.self||"top start",r.lang.rtl)),fe=p(()=>(e.square===!0?" q-menu--square":"")+(x.value===!0?" q-menu--dark q-dark":"")),he=p(()=>e.autoClose===!0?{onClick:me}:{}),J=p(()=>g.value===!0&&e.persistent!==!0);w(J,u=>{u===!0?(Ke(E),Tt(_)):(oe(E),Se(_))});function k(){Ae(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function R(u){if(b(),F(),i=e.noRefocus===!1?document.activeElement:null,Ve(Z),X(),D(),s=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const C=ot(u);if(C.left!==void 0){const{top:ee,left:A}=T.value.getBoundingClientRect();s={left:C.left-A,top:C.top-ee}}}n===void 0&&(n=w(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,S)),e.noFocus!==!0&&document.activeElement.blur(),v(()=>{S(),e.noFocus!==!0&&k()}),K(()=>{r.platform.is.ios===!0&&(h=e.autoClose,m.value.click()),S(),X(!0),o("show",u)},e.transitionDuration)}function $(u){b(),F(),Y(),z(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(i.focus(),i=null),K(()=>{Y(!0),o("hide",u)},e.transitionDuration)}function z(u){s=void 0,n!==void 0&&(n(),n=void 0),(u===!0||g.value===!0)&&(pe(Z),M(),Se(_),oe(E)),u!==!0&&(i=null)}function D(){(T.value!==null||e.scrollTarget!==void 0)&&(G.value=ct(T.value,e.scrollTarget),se(G.value,S))}function me(u){h!==!0?(Ie(c,u),o("click",u)):h=!1}function Z(u){J.value===!0&&e.noFocus!==!0&&Le(m.value,u.target)!==!0&&k()}function E(u){o("escape-key"),U(u)}function S(){const u=m.value;u===null||T.value===null||Pt({el:u,offset:e.offset,anchorEl:T.value,anchorOrigin:L.value,selfOrigin:de.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function f(){return q(ve,{name:N.value,appear:!0},()=>g.value===!0?q("div",{...l,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+fe.value,l.class],style:[l.style,V.value],...he.value},_e(t.default)):null)}return j(z),Object.assign(c,{focus:k,updatePosition:S}),ce}}),Ot=be({name:"QPopupProxy",props:{...Ge,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:t,emit:o,attrs:l}){const{proxy:i}=ue(),{$q:s}=i,n=y(!1),h=y(null),d=p(()=>parseInt(e.breakpoint,10)),{canShow:c}=Ue({showing:n});function r(){return s.screen.width<d.value||s.screen.height<d.value?"dialog":"menu"}const m=y(r()),g=p(()=>m.value==="menu"?{maxHeight:"99vh"}:{});w(()=>r(),v=>{n.value!==!0&&(m.value=v)}),Object.assign(i,{show(v){c(v)===!0&&h.value.show(v)},hide(v){h.value.hide(v)},toggle(v){h.value.toggle(v)}});function a(v){n.value=!0,o("show",v)}function x(v){n.value=!1,m.value=r(),o("hide",v)}return()=>{const v={ref:h,...g.value,...l,onShow:a,onHide:x};let b;return m.value==="dialog"?b=kt:(b=Bt,Object.assign(v,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),q(b,v,t.default)}}});function Me(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Ft=lt({name:"close-popup",beforeMount(e,{value:t}){const o={depth:Me(t),handler(l){o.depth!==0&&setTimeout(()=>{const i=vt(e);i!==void 0&&gt(i,l,o.depth)})},handlerKey(l){ye(l,13)===!0&&o.handler(l)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=Me(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Ft as C,Ot as Q};
