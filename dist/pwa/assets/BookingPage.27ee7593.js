import{a as Be,w as z,l as te,az as xe,g as Z,al as Ce,f as le,am as we,c as p,h as k,aA as Ee,r as O,aB as $e,aC as Ie,an as Oe,D as X,n as K,aD as Se,aE as Ve,o as ce,k as Pe,z as G,j as W,Q as re,ai as Te,ad as ze,aF as je,u as Ne,A as fe,aG as H,K as De,H as Le,_ as Ue,M as Ke,X as Ze,d as Q,O as Qe,W as ne,V as ve}from"./index.5026b775.js";import{u as qe,a as _e}from"./use-dark.15c915b5.js";import{b as He}from"./format.573576cb.js";import{u as We}from"./uid.42677368.js";import{b as de,c as Xe}from"./focus-manager.32f8d49a.js";import{u as Me,c as Ge,b as Je}from"./use-form.289c2282.js";import{u as Ye}from"./use-quasar.11704b70.js";function et({validate:e,resetValidation:t,requiresQForm:l}){const n=Be(xe,!1);if(n!==!1){const{props:s,proxy:f}=Z();Object.assign(f,{validate:e,resetValidation:t}),z(()=>s.disable,a=>{a===!0?(typeof t=="function"&&t(),n.unbindComponent(f)):n.bindComponent(f)}),s.disable!==!0&&n.bindComponent(f),te(()=>{s.disable!==!0&&n.unbindComponent(f)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,he=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,J=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Y=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,be={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>he.test(e),rgbColor:e=>J.test(e),rgbaColor:e=>Y.test(e),rgbOrRgbaColor:e=>J.test(e)||Y.test(e),hexOrRgbColor:e=>me.test(e)||J.test(e),hexaOrRgbaColor:e=>ge.test(e)||Y.test(e),anyColor:e=>he.test(e)||J.test(e)||Y.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const tt={...Ce,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ue=50,Re=2*ue,Fe=Re*Math.PI,lt=Math.round(Fe*1e3)/1e3;le({name:"QCircularProgress",props:{...tt,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=Z(),n=we(e),s=p(()=>{const q=(l.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-q}deg)`:`rotate3d(0, 0, 1, ${q-90}deg)`}}),f=p(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),a=p(()=>Re/(1-e.thickness/2)),_=p(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),w=p(()=>He(e.value,e.min,e.max)),C=p(()=>Fe*(1-(w.value-e.min)/(e.max-e.min))),E=p(()=>e.thickness/2*a.value);function M({thickness:q,offset:h,color:x,cls:P}){return k("circle",{class:"q-circular-progress__"+P+(x!==void 0?` text-${x}`:""),style:f.value,fill:"transparent",stroke:"currentColor","stroke-width":q,"stroke-dasharray":lt,"stroke-dashoffset":h,cx:a.value,cy:a.value,r:ue})}return()=>{const q=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&q.push(k("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ue-E.value/2,cx:a.value,cy:a.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&q.push(M({cls:"track",thickness:E.value,offset:0,color:e.trackColor})),q.push(M({cls:"circle",thickness:E.value,offset:C.value,color:e.color}));const h=[k("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:_.value,"aria-hidden":"true"},q)];return e.showValue===!0&&h.push(k("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[k("div",w.value)])),k("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:n.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:w.value},Ee(t.internal,h))}}});const ot=["rejected"],nt=[...ot,"start","finish","added","removed"],at=()=>!0;function rt(e){const t={};return e.forEach(l=>{t[l]=at}),t}rt(nt);const ut=[!0,!1,"ondemand"],it={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ut.includes(e)}};function st(e,t){const{props:l,proxy:n}=Z(),s=O(!1),f=O(null),a=O(null);et({validate:x,resetValidation:h});let _=0,w;const C=p(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length>0),E=p(()=>l.disable!==!0&&C.value===!0),M=p(()=>l.error===!0||s.value===!0),q=p(()=>typeof l.errorMessage=="string"&&l.errorMessage.length>0?l.errorMessage:f.value);z(()=>l.modelValue,()=>{P()}),z(()=>l.reactiveRules,I=>{I===!0?w===void 0&&(w=z(()=>l.rules,()=>{P(!0)})):w!==void 0&&(w(),w=void 0)},{immediate:!0}),z(e,I=>{I===!0?a.value===null&&(a.value=!1):a.value===!1&&(a.value=!0,E.value===!0&&l.lazyRules!=="ondemand"&&t.value===!1&&F())});function h(){_++,t.value=!1,a.value=null,s.value=!1,f.value=null,F.cancel()}function x(I=l.modelValue){if(E.value!==!0)return!0;const $=++_;t.value!==!0&&l.lazyRules!==!0&&(a.value=!0);const S=(V,o)=>{s.value!==V&&(s.value=V);const u=o||void 0;f.value!==u&&(f.value=u),t.value=!1},A=[];for(let V=0;V<l.rules.length;V++){const o=l.rules[V];let u;if(typeof o=="function"?u=o(I):typeof o=="string"&&be[o]!==void 0&&(u=be[o](I)),u===!1||typeof u=="string")return S(!0,u),!1;u!==!0&&u!==void 0&&A.push(u)}return A.length===0?(S(!1),!0):(t.value=!0,Promise.all(A).then(V=>{if(V===void 0||Array.isArray(V)===!1||V.length===0)return $===_&&S(!1),!0;const o=V.find(u=>u===!1||typeof u=="string");return $===_&&S(o!==void 0,o),o===void 0},V=>($===_&&(console.error(V),S(!0)),!1)))}function P(I){E.value===!0&&l.lazyRules!=="ondemand"&&(a.value===!0||l.lazyRules!==!0&&I!==!0)&&F()}const F=$e(x,0);return te(()=>{w!==void 0&&w(),F.cancel()}),Object.assign(n,{resetValidation:h,validate:x}),Ie(n,"hasError",()=>M.value),{isDirtyModel:a,hasRules:C,hasError:M,errorMessage:q,validate:x,resetValidation:h}}const pe=/^on[A-Z]/;function ct(e,t){const l={listeners:O({}),attributes:O({})};function n(){const s={},f={};for(const a in e)a!=="class"&&a!=="style"&&pe.test(a)===!1&&(s[a]=e[a]);for(const a in t.props)pe.test(a)===!0&&(f[a]=t.props[a]);l.attributes.value=s,l.listeners.value=f}return Oe(n),n(),l}function ie(e){return e===void 0?`f_${We()}`:e}function se(e){return e!=null&&(""+e).length>0}const dt={...qe,...it,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ft=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function vt(){const{props:e,attrs:t,proxy:l,vnode:n}=Z();return{isDark:_e(e,l.$q),editable:p(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:ct(t,n),targetUid:O(ie(e.for)),rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function mt(e){const{props:t,emit:l,slots:n,attrs:s,proxy:f}=Z(),{$q:a}=f;let _;e.hasValue===void 0&&(e.hasValue=p(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{l("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:v,onFocusout:m}),Object.assign(e,{clearValue:c,onControlFocusin:v,onControlFocusout:m,focus:u}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,y=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:w,hasRules:C,hasError:E,errorMessage:M,resetValidation:q}=st(e.focused,e.innerLoading),h=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),x=p(()=>t.bottomSlots===!0||t.hint!==void 0||C.value===!0||t.counter===!0||t.error!==null),P=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),F=p(()=>`q-field row no-wrap items-start q-field--${P.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(h.value===!0?" q-field--float":"")+($.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(E.value===!0?" q-field--error":"")+(E.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&x.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),I=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(E.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),$=p(()=>t.labelSlot===!0||t.label!==void 0),S=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&E.value!==!0?` text-${t.labelColor}`:"")),A=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:h.value,modelValue:t.modelValue,emitValue:e.emitValue})),V=p(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});z(()=>t.for,r=>{e.targetUid.value=ie(r)});function o(){const r=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(r===null||r.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==r&&y.focus({preventScroll:!0}))}function u(){de(o)}function g(){Xe(o);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function v(r){clearTimeout(_),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",r))}function m(r,y){clearTimeout(_),_=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,l("blur",r)),y!==void 0&&y())})}function c(r){X(r),a.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),K(()=>{q(),a.platform.is.mobile!==!0&&(w.value=!1)})}function d(){const r=[];return n.prepend!==void 0&&r.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},n.prepend())),r.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),E.value===!0&&t.noErrorIcon===!1&&r.push(j("error",[k(re,{name:a.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(j("inner-loading-append",n.loading!==void 0?n.loading():[k(Te,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(j("inner-clearable-append",[k(re,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||a.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:c})])),n.append!==void 0&&r.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},n.append())),e.getInnerAppend!==void 0&&r.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function b(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):n.rawControl!==void 0?r.push(n.rawControl()):n.control!==void 0&&r.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(A.value))),$.value===!0&&r.push(k("div",{class:S.value},W(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(W(n.default))}function R(){let r,y;E.value===!0?M.value!==null?(r=[k("div",{role:"alert"},M.value)],y=`q--slot-error-${M.value}`):(r=W(n.error),y="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[k("div",t.hint)],y=`q--slot-hint-${t.hint}`):(r=W(n.hint),y="q--slot-hint"));const i=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&i===!1&&r===void 0)return;const B=k("div",{key:y,class:"q-field__messages col"},r);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?B:k(ze,{name:"q-transition--field-message"},()=>B),i===!0?k("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function j(r,y){return y===null?null:k("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}Object.assign(f,{focus:u,blur:g});let D=!1;return Se(()=>{D=!0}),Ve(()=>{D===!0&&t.autofocus===!0&&f.focus()}),ce(()=>{Pe.value===!0&&t.for===void 0&&(e.targetUid.value=ie()),t.autofocus===!0&&f.focus()}),te(()=>{clearTimeout(_)}),function(){const y=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...V.value}:V.value;return k("label",{ref:e.rootRef,class:[F.value,s.class],style:s.style,...y},[n.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},n.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:I.value,tabindex:-1,...e.controlEvents},d()),x.value===!0?R():null]),n.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},n.after()):null])}}const ye={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ee={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ae=Object.keys(ee);Ae.forEach(e=>{ee[e].regex=new RegExp(ee[e].pattern)});const gt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ae.join("")+"])|(.)","g"),ke=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),ht={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function bt(e,t,l,n){let s,f,a,_;const w=O(null),C=O(M());function E(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,h),z(()=>e.mask,o=>{if(o!==void 0)x(C.value,!0);else{const u=A(C.value);h(),e.modelValue!==u&&t("update:modelValue",u)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&x(C.value,!0)}),z(()=>e.unmaskedValue,()=>{w.value===!0&&x(C.value)});function M(){if(h(),w.value===!0){const o=$(A(e.modelValue));return e.fillMask!==!1?V(o):o}return e.modelValue}function q(o){if(o<s.length)return s.slice(-o);let u="",g=s;const v=g.indexOf(T);if(v>-1){for(let m=o-g.length;m>0;m--)u+=T;g=g.slice(0,v)+u+g.slice(v)}return g}function h(){if(w.value=e.mask!==void 0&&e.mask.length>0&&E(),w.value===!1){_=void 0,s="",f="";return}const o=ye[e.mask]===void 0?e.mask:ye[e.mask],u=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",g=u.replace(ke,"\\$&"),v=[],m=[],c=[];let d=e.reverseFillMask===!0,b="",R="";o.replace(gt,(y,i,B,L,U)=>{if(L!==void 0){const N=ee[L];c.push(N),R=N.negate,d===!0&&(m.push("(?:"+R+"+)?("+N.pattern+"+)?(?:"+R+"+)?("+N.pattern+"+)?"),d=!1),m.push("(?:"+R+"+)?("+N.pattern+")?")}else if(B!==void 0)b="\\"+(B==="\\"?"":B),c.push(B),v.push("([^"+b+"]+)?"+b+"?");else{const N=i!==void 0?i:U;b=N==="\\"?"\\\\\\\\":N.replace(ke,"\\\\$&"),c.push(N),v.push("([^"+b+"]+)?"+b+"?")}});const j=new RegExp("^"+v.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?$"),D=m.length-1,r=m.map((y,i)=>i===0&&e.reverseFillMask===!0?new RegExp("^"+g+"*"+y):i===D?new RegExp("^"+y+"("+(R===""?".":R)+"+)?"+(e.reverseFillMask===!0?"$":g+"*")):new RegExp("^"+y));a=c,_=y=>{const i=j.exec(y);i!==null&&(y=i.slice(1).join(""));const B=[],L=r.length;for(let U=0,N=y;U<L;U++){const oe=r[U].exec(N);if(oe===null)break;N=N.slice(oe.shift().length),B.push(...oe)}return B.length>0?B.join(""):y},s=c.map(y=>typeof y=="string"?y:T).join(""),f=s.split(T).join(u)}function x(o,u,g){const v=n.value,m=v.selectionEnd,c=v.value.length-m,d=A(o);u===!0&&h();const b=$(d),R=e.fillMask!==!1?V(b):b,j=C.value!==R;v.value!==R&&(v.value=R),j===!0&&(C.value=R),document.activeElement===v&&K(()=>{if(R===f){const r=e.reverseFillMask===!0?f.length:0;v.setSelectionRange(r,r,"forward");return}if(g==="insertFromPaste"&&e.reverseFillMask!==!0){const r=m-1;F.right(v,r,r);return}if(["deleteContentBackward","deleteContentForward"].indexOf(g)>-1){const r=e.reverseFillMask===!0?m===0?R.length>b.length?1:0:Math.max(0,R.length-(R===f?0:Math.min(b.length,c)+1))+1:m;v.setSelectionRange(r,r,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const r=Math.max(0,R.length-(R===f?0:Math.min(b.length,c+1)));r===1&&m===1?v.setSelectionRange(r,r,"forward"):F.rightReverse(v,r,r)}else{const r=R.length-c;v.setSelectionRange(r,r,"backward")}else if(j===!0){const r=Math.max(0,s.indexOf(T),Math.min(b.length,m)-1);F.right(v,r,r)}else{const r=m-1;F.right(v,r,r)}});const D=e.unmaskedValue===!0?A(R):R;String(e.modelValue)!==D&&l(D,!0)}function P(o,u,g){const v=$(A(o.value));u=Math.max(0,s.indexOf(T),Math.min(v.length,u)),o.setSelectionRange(u,g,"forward")}const F={left(o,u,g,v){const m=s.slice(u-1).indexOf(T)===-1;let c=Math.max(0,u-1);for(;c>=0;c--)if(s[c]===T){u=c,m===!0&&u++;break}if(c<0&&s[u]!==void 0&&s[u]!==T)return F.right(o,0,0);u>=0&&o.setSelectionRange(u,v===!0?g:u,"backward")},right(o,u,g,v){const m=o.value.length;let c=Math.min(m,g+1);for(;c<=m;c++)if(s[c]===T){g=c;break}else s[c-1]===T&&(g=c);if(c>m&&s[g-1]!==void 0&&s[g-1]!==T)return F.left(o,m,m);o.setSelectionRange(v?u:g,g,"forward")},leftReverse(o,u,g,v){const m=q(o.value.length);let c=Math.max(0,u-1);for(;c>=0;c--)if(m[c-1]===T){u=c;break}else if(m[c]===T&&(u=c,c===0))break;if(c<0&&m[u]!==void 0&&m[u]!==T)return F.rightReverse(o,0,0);u>=0&&o.setSelectionRange(u,v===!0?g:u,"backward")},rightReverse(o,u,g,v){const m=o.value.length,c=q(m),d=c.slice(0,g+1).indexOf(T)===-1;let b=Math.min(m,g+1);for(;b<=m;b++)if(c[b-1]===T){g=b,g>0&&d===!0&&g--;break}if(b>m&&c[g-1]!==void 0&&c[g-1]!==T)return F.leftReverse(o,m,m);o.setSelectionRange(v===!0?u:g,g,"forward")}};function I(o){if(je(o)===!0)return;const u=n.value,g=u.selectionStart,v=u.selectionEnd;if(o.keyCode===37||o.keyCode===39){const m=F[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];o.preventDefault(),m(u,g,v,o.shiftKey)}else o.keyCode===8&&e.reverseFillMask!==!0&&g===v?F.left(u,g,v,!0):o.keyCode===46&&e.reverseFillMask===!0&&g===v&&F.rightReverse(u,g,v,!0)}function $(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const u=a;let g=0,v="";for(let m=0;m<u.length;m++){const c=o[g],d=u[m];if(typeof d=="string")v+=d,c===d&&g++;else if(c!==void 0&&d.regex.test(c))v+=d.transform!==void 0?d.transform(c):c,g++;else return v}return v}function S(o){const u=a,g=s.indexOf(T);let v=o.length-1,m="";for(let c=u.length-1;c>=0&&v>-1;c--){const d=u[c];let b=o[v];if(typeof d=="string")m=d+m,b===d&&v--;else if(b!==void 0&&d.regex.test(b))do m=(d.transform!==void 0?d.transform(b):b)+m,v--,b=o[v];while(g===c&&b!==void 0&&d.regex.test(b));else return m}return m}function A(o){return typeof o!="string"||_===void 0?typeof o=="number"?_(""+o):o:_(o)}function V(o){return f.length-o.length<=0?o:e.reverseFillMask===!0&&o.length>0?f.slice(0,-o.length)+o:o+f.slice(o.length)}return{innerValue:C,hasMask:w,moveCursorForPaste:P,updateMaskValue:x,onMaskedKeydown:I}}function pt(e,t){function l(){const n=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(f=>{s.items.add(f)}),{files:s.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return l()}):p(l)}const yt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,kt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,xt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ct=/[a-z0-9_ -]$/i;function wt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(Ne.is.firefox===!0?Ct.test(l.data)===!1:yt.test(l.data)===!0||kt.test(l.data)===!0||xt.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var ae=le({name:"QInput",inheritAttrs:!1,props:{...dt,...ht,...Me,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ft,"paste","change"],setup(e,{emit:t,attrs:l}){const n={};let s=NaN,f,a,_,w;const C=O(null),E=Ge(e),{innerValue:M,hasMask:q,moveCursorForPaste:h,updateMaskValue:x,onMaskedKeydown:P}=bt(e,t,d,C),F=pt(e,!0),I=p(()=>se(M.value)),$=wt(c),S=vt(),A=p(()=>e.type==="textarea"||e.autogrow===!0),V=p(()=>A.value===!0||["text","search","url","tel","password"].includes(e.type)),o=p(()=>{const i={...S.splitAttrs.listeners.value,onInput:c,onPaste:m,onChange:R,onBlur:j,onFocus:fe};return i.onCompositionstart=i.onCompositionupdate=i.onCompositionend=$,q.value===!0&&(i.onKeydown=P),e.autogrow===!0&&(i.onAnimationend=b),i}),u=p(()=>{const i={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:E.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return A.value===!1&&(i.type=e.type),e.autogrow===!0&&(i.rows=1),i});z(()=>e.type,()=>{C.value&&(C.value.value=e.modelValue)}),z(()=>e.modelValue,i=>{if(q.value===!0){if(a===!0&&(a=!1,String(i)===s))return;x(i)}else M.value!==i&&(M.value=i,e.type==="number"&&n.hasOwnProperty("value")===!0&&(f===!0?f=!1:delete n.value));e.autogrow===!0&&K(b)}),z(()=>e.autogrow,i=>{i===!0?K(b):C.value!==null&&l.rows>0&&(C.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&K(b)});function g(){de(()=>{const i=document.activeElement;C.value!==null&&C.value!==i&&(i===null||i.id!==S.targetUid.value)&&C.value.focus({preventScroll:!0})})}function v(){C.value!==null&&C.value.select()}function m(i){if(q.value===!0&&e.reverseFillMask!==!0){const B=i.target;h(B,B.selectionStart,B.selectionEnd)}t("paste",i)}function c(i){if(!i||!i.target)return;if(e.type==="file"){t("update:modelValue",i.target.files);return}const B=i.target.value;if(i.target.qComposing===!0){n.value=B;return}if(q.value===!0)x(B,!1,i.inputType);else if(d(B),V.value===!0&&i.target===document.activeElement){const{selectionStart:L,selectionEnd:U}=i.target;L!==void 0&&U!==void 0&&K(()=>{i.target===document.activeElement&&B.indexOf(i.target.value)===0&&i.target.setSelectionRange(L,U)})}e.autogrow===!0&&b()}function d(i,B){w=()=>{e.type!=="number"&&n.hasOwnProperty("value")===!0&&delete n.value,e.modelValue!==i&&s!==i&&(s=i,B===!0&&(a=!0),t("update:modelValue",i),K(()=>{s===i&&(s=NaN)})),w=void 0},e.type==="number"&&(f=!0,n.value=i),e.debounce!==void 0?(clearTimeout(_),n.value=i,_=setTimeout(w,e.debounce)):w()}function b(){const i=C.value;if(i!==null){const B=i.parentNode.style,{overflow:L}=i.style;B.marginBottom=i.scrollHeight-1+"px",i.style.height="1px",i.style.overflow="hidden",i.style.height=i.scrollHeight+"px",i.style.overflow=L,B.marginBottom=""}}function R(i){$(i),clearTimeout(_),w!==void 0&&w(),t("change",i.target.value)}function j(i){i!==void 0&&fe(i),clearTimeout(_),w!==void 0&&w(),f=!1,a=!1,delete n.value,e.type!=="file"&&setTimeout(()=>{C.value!==null&&(C.value.value=M.value!==void 0?M.value:"")})}function D(){return n.hasOwnProperty("value")===!0?n.value:M.value!==void 0?M.value:""}te(()=>{j()}),ce(()=>{e.autogrow===!0&&b()}),Object.assign(S,{innerValue:M,fieldClass:p(()=>`q-${A.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:C,emitValue:d,hasValue:I,floatingLabel:p(()=>I.value===!0||se(e.displayValue)),getControl:()=>k(A.value===!0?"textarea":"input",{ref:C,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...u.value,...o.value,...e.type!=="file"?{value:D()}:F.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(A.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},D()),k("span",e.shadowText)])});const r=mt(S),y=Z();return Object.assign(y.proxy,{focus:g,select:v,getNativeElement:()=>C.value}),r}});function St(e,t){const l=O(null),n=p(()=>e.disable===!0?null:k("span",{ref:l,class:"no-outline",tabindex:-1}));function s(f){const a=t.value;f!==void 0&&f.type.indexOf("key")===0?a!==null&&document.activeElement!==a&&a.contains(document.activeElement)===!0&&a.focus():l.value!==null&&(f===void 0||a!==null&&a.contains(f.target)===!0)&&l.value.focus()}return{refocusTargetEl:n,refocusTarget:s}}var Vt={xs:30,sm:35,md:40,lg:50,xl:60};const qt={...qe,...Ce,...Me,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},_t=["update:modelValue"];function Mt(e,t){const{props:l,slots:n,emit:s,proxy:f}=Z(),{$q:a}=f,_=_e(l,a),w=O(null),{refocusTargetEl:C,refocusTarget:E}=St(l,w),M=we(l,Vt),q=p(()=>l.val!==void 0&&Array.isArray(l.modelValue)),h=p(()=>{const d=H(l.val);return q.value===!0?l.modelValue.findIndex(b=>H(b)===d):-1}),x=p(()=>q.value===!0?h.value>-1:H(l.modelValue)===H(l.trueValue)),P=p(()=>q.value===!0?h.value===-1:H(l.modelValue)===H(l.falseValue)),F=p(()=>x.value===!1&&P.value===!1),I=p(()=>l.disable===!0?-1:l.tabindex||0),$=p(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(_.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),S=p(()=>{const d=x.value===!0?"truthy":P.value===!0?"falsy":"indet",b=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?x.value===!0:P.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${d}${b}`}),A=p(()=>{const d={type:"checkbox"};return l.name!==void 0&&Object.assign(d,{"^checked":x.value===!0?"checked":void 0,name:l.name,value:q.value===!0?l.val:l.trueValue}),d}),V=Je(A),o=p(()=>{const d={tabindex:I.value,role:"checkbox","aria-label":l.label,"aria-checked":F.value===!0?"mixed":x.value===!0?"true":"false"};return l.disable===!0&&(d["aria-disabled"]="true"),d});function u(d){d!==void 0&&(X(d),E(d)),l.disable!==!0&&s("update:modelValue",g(),d)}function g(){if(q.value===!0){if(x.value===!0){const d=l.modelValue.slice();return d.splice(h.value,1),d}return l.modelValue.concat([l.val])}if(x.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(P.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function v(d){(d.keyCode===13||d.keyCode===32)&&X(d)}function m(d){(d.keyCode===13||d.keyCode===32)&&u(d)}const c=t(x,F);return Object.assign(f,{toggle:u}),()=>{const d=c();l.disable!==!0&&V(d,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const b=[k("div",{class:S.value,style:M.value},d)];C.value!==null&&b.push(C.value);const R=l.label!==void 0?De(n.default,[l.label]):W(n.default);return R!==void 0&&b.push(k("div",{class:`q-${e}__label q-anchor--skip`},R)),k("div",{ref:w,class:$.value,...o.value,onClick:u,onKeydown:v,onKeyup:m},b)}}var Rt=le({name:"QToggle",props:{...qt,icon:String,iconColor:String},emits:_t,setup(e){function t(l,n){const s=p(()=>(l.value===!0?e.checkedIcon:n.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),f=p(()=>l.value===!0?e.iconColor:null);return()=>[k("div",{class:"q-toggle__track"}),k("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},s.value!==void 0?[k(re,{name:s.value,color:f.value})]:void 0)]}return Mt("toggle",t)}}),Ft=le({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:t,emit:l}){const n=Z(),s=O(null);let f=0;const a=[];function _(h){const x=[],P=typeof h=="boolean"?h:e.noErrorFocus!==!0,F=++f,I=($,S)=>{l("validation-"+($===!0?"success":"error"),S)};for(let $=0;$<a.length;$++){const S=a[$],A=S.validate();if(typeof A.then=="function")x.push(A.then(V=>({valid:V,comp:S}),V=>({valid:!1,comp:S,err:V})));else if(A!==!0){if(e.greedy===!1)return I(!1,S),P===!0&&typeof S.focus=="function"&&S.focus(),Promise.resolve(!1);x.push({valid:!1,comp:S})}}return x.length===0?(I(!0),Promise.resolve(!0)):Promise.all(x).then($=>{const S=$.filter(u=>u.valid!==!0);if(S.length===0)return F===f&&I(!0),!0;const{valid:A,comp:V,err:o}=S[0];return F===f&&(o!==void 0&&console.error(o),I(!1,V),P===!0&&A!==!0&&typeof V.focus=="function"&&V.focus()),!1})}function w(){f++,a.forEach(h=>{typeof h.resetValidation=="function"&&h.resetValidation()})}function C(h){h!==void 0&&X(h);const x=f+1;_().then(P=>{x===f&&P===!0&&(e.onSubmit!==void 0?l("submit",h):h!==void 0&&h.target!==void 0&&typeof h.target.submit=="function"&&h.target.submit())})}function E(h){h!==void 0&&X(h),l("reset"),K(()=>{w(),e.autofocus===!0&&e.noResetFocus!==!0&&M()})}function M(){de(()=>{if(s.value===null)return;const h=s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),x=>x.tabIndex>-1);h!=null&&h.focus({preventScroll:!0})})}Le(xe,{bindComponent(h){a.push(h)},unbindComponent(h){const x=a.indexOf(h);x>-1&&a.splice(x,1)}});let q=!1;return Se(()=>{q=!0}),Ve(()=>{q===!0&&e.autofocus===!0&&M()}),ce(()=>{e.autofocus===!0&&M()}),Object.assign(n.proxy,{validate:_,resetValidation:w,submit:C,reset:E,focus:M,getValidationComponents:()=>a}),()=>k("form",{class:"q-form",ref:s,onSubmit:C,onReset:E},W(t.default))}});const At={setup(){const e=Ye(),t=O(null),l=O(null),n=O(null),s=O(!1);return{name:t,age:l,phone:n,accept:s,onSubmit(){s.value!==!0?e.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u043E\u043B\u044C\u0437. \u0441\u043E\u0433\u043B\u0430\u0448. \u0438 \u043F\u043E\u043B\u0438\u0442. \u043A\u043E\u043D\u0444\u0438\u0434."}):e.notify({color:"green-4",textColor:"white",icon:"done",message:"\u041F\u0440\u0438\u043D\u044F\u0442\u043E, \u0436\u0434\u0451\u043C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"})},onReset(){t.value=null,l.value=null,n.value=null,s.value=!1}}}},Bt={class:"q-pa-md"},Et={class:"q-pa-md"},$t={class:"q-pa-md",style:{"margin-left":"-20px"}};function It(e,t,l,n,s,f){return Ke(),Ze("div",Bt,[Q(Ft,{onSubmit:n.onSubmit,onReset:n.onReset,class:"bg-none"},{default:Qe(()=>[ne("div",Et,[Q(ae,{color:"accent",filled:"",modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=a=>n.name=a),label:"\u0424\u0418\u041E*","lazy-rules":"",rules:[a=>a&&a.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041E"]},null,8,["modelValue","rules"]),Q(ae,{color:"accent",class:"mmtt",filled:"",type:"number",modelValue:n.age,"onUpdate:modelValue":t[1]||(t[1]=a=>n.age=a),label:"\u041F\u043E\u043B\u043D\u044B\u0445 \u043B\u0435\u0442*","lazy-rules":"",rules:[a=>a!==null&&a!==""||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043E\u0437\u0440\u0430\u0441\u0442",a=>a>0&&a<100||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442"]},null,8,["modelValue","rules"]),Q(ae,{color:"accent",class:"mmtt",filled:"",type:"tel",modelValue:n.phone,"onUpdate:modelValue":t[2]||(t[2]=a=>n.phone=a),label:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430*","lazy-rules":"",rules:[a=>a!==null&&a!==""||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"]},null,8,["modelValue","rules"]),ne("div",$t,[Q(Rt,{color:"accent",modelValue:n.accept,"onUpdate:modelValue":t[3]||(t[3]=a=>n.accept=a),label:"\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"},null,8,["modelValue"])]),ne("div",null,[Q(ve,{label:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",type:"submit",color:"positive"}),Q(ve,{label:"\u0417\u0430\u043D\u043E\u0432\u043E",type:"reset",color:"white",flat:"",class:"q-ml-sm"})])])]),_:1},8,["onSubmit","onReset"])])}var Lt=Ue(At,[["render",It]]);export{Lt as default};
