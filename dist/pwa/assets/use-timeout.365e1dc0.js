import{l as b,a4 as w,u as c,p as s,D as L,a5 as E}from"./index.26f986df.js";import{d as S,b as P,h as H}from"./selection.b9681cbb.js";function X(t,e,r){let o;function i(){o!==void 0&&(w.remove(o),o=void 0)}return b(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){o={condition:()=>r.value===!0,handler:e},w.add(o)}}}let d=0,v,p,a,m=!1,h,y,n;function q(t){x(t)&&L(t)}function x(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=E(t),r=t.shiftKey&&!t.deltaX,o=!r&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=r||o?t.deltaY:t.deltaX;for(let f=0;f<e.length;f++){const l=e[f];if(H(l,o))return o?i<0&&l.scrollTop===0?!0:i>0&&l.scrollTop+l.clientHeight===l.scrollHeight:i<0&&l.scrollLeft===0?!0:i>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function g(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function u(t){m!==!0&&(m=!0,requestAnimationFrame(()=>{m=!1;const{height:e}=t.target,{clientHeight:r,scrollTop:o}=document.scrollingElement;(a===void 0||e!==window.innerHeight)&&(a=r-e,document.scrollingElement.scrollTop=o),o>a&&(document.scrollingElement.scrollTop-=Math.ceil((o-a)/8))}))}function T(t){const e=document.body,r=window.visualViewport!==void 0;if(t==="add"){const{overflowY:o,overflowX:i}=window.getComputedStyle(e);v=S(window),p=P(window),h=e.style.left,y=e.style.top,e.style.left=`-${v}px`,e.style.top=`-${p}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,c.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",u,s.passiveCapture),window.visualViewport.addEventListener("scroll",u,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",g,s.passiveCapture))}c.is.desktop===!0&&c.is.mac===!0&&window[`${t}EventListener`]("wheel",q,s.notPassive),t==="remove"&&(c.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",u,s.passiveCapture),window.visualViewport.removeEventListener("scroll",u,s.passiveCapture)):window.removeEventListener("scroll",g,s.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=h,e.style.top=y,window.scrollTo(v,p),a=void 0)}function C(t){let e="add";if(t===!0){if(d++,n!==void 0){clearTimeout(n),n=void 0;return}if(d>1)return}else{if(d===0||(d--,d>0))return;if(e="remove",c.is.ios===!0&&c.is.nativeMobile===!0){clearTimeout(n),n=setTimeout(()=>{T(e),n=void 0},100);return}}T(e)}function Y(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,C(e))}}}function z(){let t;return b(()=>{clearTimeout(t)}),{registerTimeout(e,r){clearTimeout(t),t=setTimeout(e,r)},removeTimeout(){clearTimeout(t)}}}export{X as a,Y as b,z as u};
