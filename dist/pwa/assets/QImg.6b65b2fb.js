import{f as B,r,c as g,w as I,l as Q,h as l,ad as N,j as $,ai as E}from"./index.708e5225.js";import{u as F,a as H}from"./use-ratio.44bf3298.js";const L=16/9;var P=B({name:"QImg",props:{...F,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:L},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:d,emit:f}){const m=r(e.initialRatio),v=H(e,m);let t;const n=[r(null),r(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],u=r(0),o=r(!1),s=r(!1),b=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),q=g(()=>({width:e.width,height:e.height})),C=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),w=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));I(()=>h(),S);function h(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(i){if(clearTimeout(t),s.value=!1,i===null){o.value=!1,n[0].value=null,n[1].value=null;return}o.value=!0,n[u.value].value=i}function T({target:i}){t!==null&&(clearTimeout(t),m.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,y(i,1))}function y(i,a){t===null||a===1e3||(i.complete===!0?z(i):t=setTimeout(()=>{y(i,a+1)},50))}function z(i){t!==null&&(u.value=u.value===1?0:1,n[u.value].value=null,o.value=!1,s.value=!1,f("load",i.currentSrc||i.src))}function R(i){clearTimeout(t),o.value=!1,s.value=!0,n[0].value=null,n[1].value=null,f("error",i)}function j(i,a){return l("div",{class:"q-img__container absolute-full",key:i},a)}function _(i){const a=n[i].value,c={key:"img_"+i,class:C.value,style:w.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...a};return u.value===i?(c.class+=" q-img__image--waiting",Object.assign(c,{onLoad:T,onError:R})):c.class+=" q-img__image--loaded",j("img"+i,l("img",c))}function k(){return o.value!==!0?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},$(d[s.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},d.loading!==void 0?d.loading():e.noSpinner===!0?void 0:[l(E,{color:e.spinnerColor,size:e.spinnerSize})])}return S(h()),Q(()=>{clearTimeout(t),t=null}),()=>{const i=[];return v.value!==null&&i.push(l("div",{key:"filler",style:v.value})),s.value!==!0&&(n[0].value!==null&&i.push(_(0)),n[1].value!==null&&i.push(_(1))),i.push(l(N,{name:"q-transition--fade"},k)),l("div",{class:b.value,style:q.value,role:"img","aria-label":e.alt},i)}}});export{P as Q};
