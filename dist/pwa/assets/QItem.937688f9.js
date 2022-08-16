import{f as B,c,h as k,j as x,g as L,w as C,W as M,o as R,n as Q,X as T,Y as P,r as w,Z as S,u as $,q as j}from"./index.61739497.js";import{u as E,a as I}from"./use-dark.6a78e37a.js";var A=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=c(()=>parseInt(e.lines,10)),i=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),d=c(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>k("div",{style:d.value,class:i.value},x(n.default))}}),D=B({name:"QList",props:{...E,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:n}){const l=L(),i=I(e,l.proxy.$q),d=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k("div",{class:d.value},x(n.default))}});const F={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},N=["before-show","show","before-hide","hide"];function W({showing:e,canShow:n,hideOnRouteChange:l,handleShow:i,handleHide:d,processOnMount:p}){const b=L(),{props:u,emit:o,proxy:h}=b;let s;function m(t){e.value===!0?r(t):v(t)}function v(t){if(u.disable===!0||t!==void 0&&t.qAnchorHandled===!0||n!==void 0&&n(t)!==!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(o("update:modelValue",!0),s=t,Q(()=>{s===t&&(s=void 0)})),(u.modelValue===null||f===!1)&&q(t)}function q(t){e.value!==!0&&(e.value=!0,o("before-show",t),i!==void 0?i(t):o("show",t))}function r(t){if(u.disable===!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(o("update:modelValue",!1),s=t,Q(()=>{s===t&&(s=void 0)})),(u.modelValue===null||f===!1)&&y(t)}function y(t){e.value!==!1&&(e.value=!1,o("before-hide",t),d!==void 0?d(t):o("hide",t))}function g(t){u.disable===!0&&t===!0?u["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!1):t===!0!==e.value&&(t===!0?q:y)(s)}C(()=>u.modelValue,g),l!==void 0&&M(b)===!0&&C(()=>h.$route.fullPath,()=>{l.value===!0&&e.value===!0&&r()}),p===!0&&R(()=>{g(u.modelValue)});const _={show:v,hide:r,toggle:m};return Object.assign(h,_),_}var H=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:l.value},x(n.default))}}),O=B({name:"QItem",props:{...E,...T,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:i}}=L(),d=I(e,i),{hasRouterLink:p,hasLink:b,linkProps:u,linkClass:o,linkTag:h,navigateToRouterLink:s}=P(),m=w(null),v=w(null),q=c(()=>e.clickable===!0||b.value===!0||e.tag==="label"),r=c(()=>e.disable!==!0&&q.value===!0),y=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(d.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?o.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=c(()=>{if(e.insetLevel===void 0)return null;const a=i.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function _(a){r.value===!0&&(v.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===m.value?v.value.focus():document.activeElement===v.value&&m.value.focus()),p.value===!0&&s(a),l("click",a))}function t(a){if(r.value===!0&&S(a,13)===!0){$(a),a.qKeyEvent=!0;const V=new MouseEvent("click",a);V.qKeyEvent=!0,m.value.dispatchEvent(V)}l("keyup",a)}function f(){const a=j(n.default,[]);return r.value===!0&&a.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:v})),a}return()=>{const a={ref:m,class:y.value,style:g.value,onClick:_,onKeyup:t};return r.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,u.value)):q.value===!0&&(a["aria-disabled"]="true"),k(h.value,a,f())}}});export{H as Q,N as a,W as b,A as c,O as d,D as e,F as u};
