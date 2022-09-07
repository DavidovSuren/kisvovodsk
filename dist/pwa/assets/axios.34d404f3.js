import{f as je,al as Ne,am as Pe,r as ke,c as $,an as Le,h as F,K as Te,Q as Ue,g as Be,D as M}from"./index.5026b775.js";import{u as qe,a as De,b as He}from"./use-form.289c2282.js";import{b as Ie}from"./format.573576cb.js";var pt=je({name:"QRating",props:{...Ne,...qe,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(r,{slots:e,emit:t}){const{proxy:{$q:n}}=Be(),a=Pe(r),i=De(r),s=He(i),u=ke(0);let o={};const y=$(()=>r.readonly!==!0&&r.disable!==!0),A=$(()=>`q-rating row inline items-center q-rating--${y.value===!0?"":"non-"}editable`+(r.noDimming===!0?" q-rating--no-dimming":"")+(r.disable===!0?" disabled":"")+(r.color!==void 0&&Array.isArray(r.color)===!1?` text-${r.color}`:"")),h=$(()=>{const m=Array.isArray(r.icon)===!0?r.icon.length:0,f=Array.isArray(r.iconSelected)===!0?r.iconSelected.length:0,w=Array.isArray(r.iconHalf)===!0?r.iconHalf.length:0,R=Array.isArray(r.color)===!0?r.color.length:0,c=Array.isArray(r.colorSelected)===!0?r.colorSelected.length:0,x=Array.isArray(r.colorHalf)===!0?r.colorHalf.length:0;return{iconLen:m,icon:m>0?r.icon[m-1]:r.icon,selIconLen:f,selIcon:f>0?r.iconSelected[f-1]:r.iconSelected,halfIconLen:w,halfIcon:w>0?r.iconHalf[f-1]:r.iconHalf,colorLen:R,color:R>0?r.color[R-1]:r.color,selColorLen:c,selColor:c>0?r.colorSelected[c-1]:r.colorSelected,halfColorLen:x,halfColor:x>0?r.colorHalf[x-1]:r.colorHalf}}),d=$(()=>{const m=[],f=h.value,w=Math.ceil(r.modelValue),R=r.iconHalf===void 0||w===r.modelValue?-1:w;for(let c=1;c<=r.max;c++){const x=u.value===0&&r.modelValue>=c||u.value>0&&u.value>=c,k=R===c&&u.value<c,te=u.value>0&&(k===!0?w:r.modelValue)>=c&&u.value<c,ne=k===!0?c<=f.halfColorLen?r.colorHalf[c-1]:f.halfColor:f.selColor!==void 0&&x===!0?c<=f.selColorLen?r.colorSelected[c-1]:f.selColor:c<=f.colorLen?r.color[c-1]:f.color;m.push({name:(k===!0?c<=f.halfIconLen?r.iconHalf[c-1]:f.halfIcon:f.selIcon!==void 0&&(x===!0||te===!0)?c<=f.selIconLen?r.iconSelected[c-1]:f.selIcon:c<=f.iconLen?r.icon[c-1]:f.icon)||n.iconSet.rating.icon,classes:"q-rating__icon"+(x===!0||k===!0?" q-rating__icon--active":"")+(te===!0?" q-rating__icon--exselected":"")+(u.value===c?" q-rating__icon--hovered":"")+(ne!==void 0?` text-${ne}`:"")})}return m}),l=$(()=>{if(r.disable===!0)return{"aria-disabled":"true"};if(r.readonly===!0)return{"aria-readonly":"true"}}),E=$(()=>y.value===!0?0:null);function g(m){if(y.value===!0){const f=Ie(parseInt(m,10),1,parseInt(r.max,10)),w=r.noReset!==!0&&r.modelValue===f?0:f;w!==r.modelValue&&t("update:modelValue",w),u.value=0}}function C(m){y.value===!0&&(u.value=m)}function $e(m,f){switch(m.keyCode){case 13:case 32:return g(f),M(m);case 37:case 40:return o[`rt${f-1}`]&&o[`rt${f-1}`].$el.focus(),M(m);case 39:case 38:return o[`rt${f+1}`]&&o[`rt${f+1}`].$el.focus(),M(m)}}function re(){u.value=0}return Le(()=>{o={}}),()=>{const m=[];return d.value.forEach(({classes:f,name:w},R)=>{const c=R+1;m.push(F("div",{key:c,ref:x=>{o[`rt${c}`]=x},class:"q-rating__icon-container flex flex-center",tabindex:E.value,onClick(){g(c)},onMouseover(){C(c)},onMouseout:re,onFocus(){C(c)},onBlur:re,onKeyup(x){$e(x,c)}},Te(e[`tip-${c}`],[F(Ue,{class:f,name:w})])))}),r.name!==void 0&&r.disable!==!0&&s(m,"push"),F("div",{class:A.value,style:a.value,...l.value},m)}}}),X={exports:{}},me=function(e,t){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return e.apply(t,a)}},Fe=me,O=Object.prototype.toString;function Q(r){return O.call(r)==="[object Array]"}function K(r){return typeof r=="undefined"}function Me(r){return r!==null&&!K(r)&&r.constructor!==null&&!K(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function _e(r){return O.call(r)==="[object ArrayBuffer]"}function Ve(r){return typeof FormData!="undefined"&&r instanceof FormData}function Je(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function ze(r){return typeof r=="string"}function Ke(r){return typeof r=="number"}function ve(r){return r!==null&&typeof r=="object"}function U(r){if(O.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function We(r){return O.call(r)==="[object Date]"}function Xe(r){return O.call(r)==="[object File]"}function Qe(r){return O.call(r)==="[object Blob]"}function pe(r){return O.call(r)==="[object Function]"}function Ge(r){return ve(r)&&pe(r.pipe)}function Ye(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Ze(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function er(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function G(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Q(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.call(null,r[a],a,r)}function W(){var r={};function e(a,i){U(r[i])&&U(a)?r[i]=W(r[i],a):U(a)?r[i]=W({},a):Q(a)?r[i]=a.slice():r[i]=a}for(var t=0,n=arguments.length;t<n;t++)G(arguments[t],e);return r}function rr(r,e,t){return G(e,function(a,i){t&&typeof a=="function"?r[i]=Fe(a,t):r[i]=a}),r}function tr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var b={isArray:Q,isArrayBuffer:_e,isBuffer:Me,isFormData:Ve,isArrayBufferView:Je,isString:ze,isNumber:Ke,isObject:ve,isPlainObject:U,isUndefined:K,isDate:We,isFile:Xe,isBlob:Qe,isFunction:pe,isStream:Ge,isURLSearchParams:Ye,isStandardBrowserEnv:er,forEach:G,merge:W,extend:rr,trim:Ze,stripBOM:tr},j=b;function ae(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ye=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(j.isURLSearchParams(t))a=t.toString();else{var i=[];j.forEach(t,function(o,y){o===null||typeof o=="undefined"||(j.isArray(o)?y=y+"[]":o=[o],j.forEach(o,function(h){j.isDate(h)?h=h.toISOString():j.isObject(h)&&(h=JSON.stringify(h)),i.push(ae(y)+"="+ae(h))}))}),a=i.join("&")}if(a){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},nr=b;function D(){this.handlers=[]}D.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};D.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};D.prototype.forEach=function(e){nr.forEach(this.handlers,function(n){n!==null&&e(n)})};var ar=D,or=b,ir=function(e,t){or.forEach(e,function(a,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[i])})},be=function(e,t,n,a,i){return e.config=t,n&&(e.code=n),e.request=a,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},sr=be,ge=function(e,t,n,a,i){var s=new Error(e);return sr(s,t,n,a,i)},ur=ge,lr=function(e,t,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(ur("Request failed with status code "+n.status,n.config,null,n.request,n))},L=b,cr=L.isStandardBrowserEnv()?function(){return{write:function(t,n,a,i,s,u){var o=[];o.push(t+"="+encodeURIComponent(n)),L.isNumber(a)&&o.push("expires="+new Date(a).toGMTString()),L.isString(i)&&o.push("path="+i),L.isString(s)&&o.push("domain="+s),u===!0&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),fr=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},dr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},hr=fr,mr=dr,vr=function(e,t){return e&&!hr(t)?mr(e,t):t},_=b,pr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],yr=function(e){var t={},n,a,i;return e&&_.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),n=_.trim(u.substr(0,i)).toLowerCase(),a=_.trim(u.substr(i+1)),n){if(t[n]&&pr.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([a]):t[n]=t[n]?t[n]+", "+a:a}}),t},oe=b,br=oe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function a(i){var s=i;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=a(window.location.href),function(s){var u=oe.isString(s)?a(s):s;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),T=b,gr=lr,wr=cr,xr=ye,Sr=vr,Er=yr,Ar=br,V=ge,ie=function(e){return new Promise(function(n,a){var i=e.data,s=e.headers,u=e.responseType;T.isFormData(i)&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",A=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(y+":"+A)}var h=Sr(e.baseURL,e.url);o.open(e.method.toUpperCase(),xr(h,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function d(){if(!!o){var E="getAllResponseHeaders"in o?Er(o.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?o.responseText:o.response,C={data:g,status:o.status,statusText:o.statusText,headers:E,config:e,request:o};gr(n,a,C),o=null}}if("onloadend"in o?o.onloadend=d:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(d)},o.onabort=function(){!o||(a(V("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){a(V("Network Error",e,null,o)),o=null},o.ontimeout=function(){var g="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),a(V(g,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},T.isStandardBrowserEnv()){var l=(e.withCredentials||Ar(h))&&e.xsrfCookieName?wr.read(e.xsrfCookieName):void 0;l&&(s[e.xsrfHeaderName]=l)}"setRequestHeader"in o&&T.forEach(s,function(g,C){typeof i=="undefined"&&C.toLowerCase()==="content-type"?delete s[C]:o.setRequestHeader(C,g)}),T.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(g){!o||(o.abort(),a(g),o=null)}),i||(i=null),o.send(i)})},v=b,se=ir,Cr=be,Rr={"Content-Type":"application/x-www-form-urlencoded"};function ue(r,e){!v.isUndefined(r)&&v.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Or(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ie),r}function $r(r,e,t){if(v.isString(r))try{return(e||JSON.parse)(r),v.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var H={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Or(),transformRequest:[function(e,t){return se(t,"Accept"),se(t,"Content-Type"),v.isFormData(e)||v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)?e:v.isArrayBufferView(e)?e.buffer:v.isURLSearchParams(e)?(ue(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):v.isObject(e)||t&&t["Content-Type"]==="application/json"?(ue(t,"application/json"),$r(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||a&&v.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(i)throw s.name==="SyntaxError"?Cr(s,this,"E_JSON_PARSE"):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};H.headers={common:{Accept:"application/json, text/plain, */*"}};v.forEach(["delete","get","head"],function(e){H.headers[e]={}});v.forEach(["post","put","patch"],function(e){H.headers[e]=v.merge(Rr)});var Y=H,jr=b,Nr=Y,Pr=function(e,t,n){var a=this||Nr;return jr.forEach(n,function(s){e=s.call(a,e,t)}),e},we=function(e){return!!(e&&e.__CANCEL__)},le=b,J=Pr,kr=we,Lr=Y;function z(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var Tr=function(e){z(e),e.headers=e.headers||{},e.data=J.call(e,e.data,e.headers,e.transformRequest),e.headers=le.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),le.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var t=e.adapter||Lr.adapter;return t(e).then(function(a){return z(e),a.data=J.call(e,a.data,a.headers,e.transformResponse),a},function(a){return kr(a)||(z(e),a&&a.response&&(a.response.data=J.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},p=b,xe=function(e,t){t=t||{};var n={},a=["url","method","data"],i=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function o(d,l){return p.isPlainObject(d)&&p.isPlainObject(l)?p.merge(d,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function y(d){p.isUndefined(t[d])?p.isUndefined(e[d])||(n[d]=o(void 0,e[d])):n[d]=o(e[d],t[d])}p.forEach(a,function(l){p.isUndefined(t[l])||(n[l]=o(void 0,t[l]))}),p.forEach(i,y),p.forEach(s,function(l){p.isUndefined(t[l])?p.isUndefined(e[l])||(n[l]=o(void 0,e[l])):n[l]=o(void 0,t[l])}),p.forEach(u,function(l){l in t?n[l]=o(e[l],t[l]):l in e&&(n[l]=o(void 0,e[l]))});var A=a.concat(i).concat(s).concat(u),h=Object.keys(e).concat(Object.keys(t)).filter(function(l){return A.indexOf(l)===-1});return p.forEach(h,y),n};const Ur="axios",Br="0.21.4",qr="Promise based HTTP client for the browser and node.js",Dr="index.js",Hr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Ir={type:"git",url:"https://github.com/axios/axios.git"},Fr=["xhr","http","ajax","promise","node"],Mr="Matt Zabriskie",_r="MIT",Vr={url:"https://github.com/axios/axios/issues"},Jr="https://axios-http.com",zr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Kr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Wr="dist/axios.min.js",Xr="dist/axios.min.js",Qr="./index.d.ts",Gr={"follow-redirects":"^1.14.0"},Yr=[{path:"./dist/axios.min.js",threshold:"5kB"}];var Zr={name:Ur,version:Br,description:qr,main:Dr,scripts:Hr,repository:Ir,keywords:Fr,author:Mr,license:_r,bugs:Vr,homepage:Jr,devDependencies:zr,browser:Kr,jsdelivr:Wr,unpkg:Xr,typings:Qr,dependencies:Gr,bundlesize:Yr},Se=Zr,Z={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){Z[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var ce={},et=Se.version.split(".");function Ee(r,e){for(var t=e?e.split("."):et,n=r.split("."),a=0;a<3;a++){if(t[a]>n[a])return!0;if(t[a]<n[a])return!1}return!1}Z.transitional=function(e,t,n){var a=t&&Ee(t);function i(s,u){return"[Axios v"+Se.version+"] Transitional option '"+s+"'"+u+(n?". "+n:"")}return function(s,u,o){if(e===!1)throw new Error(i(u," has been removed in "+t));return a&&!ce[u]&&(ce[u]=!0,console.warn(i(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,u,o):!0}};function rt(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),a=n.length;a-- >0;){var i=n[a],s=e[i];if(s){var u=r[i],o=u===void 0||s(u,i,r);if(o!==!0)throw new TypeError("option "+i+" must be "+o);continue}if(t!==!0)throw Error("Unknown option "+i)}}var tt={isOlderVersion:Ee,assertOptions:rt,validators:Z},Ae=b,nt=ye,fe=ar,de=Tr,I=xe,Ce=tt,N=Ce.validators;function P(r){this.defaults=r,this.interceptors={request:new fe,response:new fe}}P.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=I(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&Ce.assertOptions(t,{silentJSONParsing:N.transitional(N.boolean,"1.0.0"),forcedJSONParsing:N.transitional(N.boolean,"1.0.0"),clarifyTimeoutError:N.transitional(N.boolean,"1.0.0")},!1);var n=[],a=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(e)===!1||(a=a&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var i=[];this.interceptors.response.forEach(function(d){i.push(d.fulfilled,d.rejected)});var s;if(!a){var u=[de,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(i),s=Promise.resolve(e);u.length;)s=s.then(u.shift(),u.shift());return s}for(var o=e;n.length;){var y=n.shift(),A=n.shift();try{o=y(o)}catch(h){A(h);break}}try{s=de(o)}catch(h){return Promise.reject(h)}for(;i.length;)s=s.then(i.shift(),i.shift());return s};P.prototype.getUri=function(e){return e=I(this.defaults,e),nt(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ae.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(t,n){return this.request(I(n||{},{method:e,url:t,data:(n||{}).data}))}});Ae.forEach(["post","put","patch"],function(e){P.prototype[e]=function(t,n,a){return this.request(I(a||{},{method:e,url:t,data:n}))}});var at=P;function ee(r){this.message=r}ee.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ee.prototype.__CANCEL__=!0;var Re=ee,ot=Re;function q(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var t=this;r(function(a){t.reason||(t.reason=new ot(a),e(t.reason))})}q.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};q.source=function(){var e,t=new q(function(a){e=a});return{token:t,cancel:e}};var it=q,st=function(e){return function(n){return e.apply(null,n)}},ut=function(e){return typeof e=="object"&&e.isAxiosError===!0},he=b,lt=me,B=at,ct=xe,ft=Y;function Oe(r){var e=new B(r),t=lt(B.prototype.request,e);return he.extend(t,B.prototype,e),he.extend(t,e),t}var S=Oe(ft);S.Axios=B;S.create=function(e){return Oe(ct(S.defaults,e))};S.Cancel=Re;S.CancelToken=it;S.isCancel=we;S.all=function(e){return Promise.all(e)};S.spread=st;S.isAxiosError=ut;X.exports=S;X.exports.default=S;var dt=X.exports;const yt=dt.create({baseURL:"https://content.kissloveodsk.ru/wp-json/wp/v2"});export{pt as Q,yt as a};
