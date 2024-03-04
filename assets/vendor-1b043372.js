function xi(n,e){return function(){return n.apply(e,arguments)}}const{toString:$r}=Object.prototype,{getPrototypeOf:un}=Object,Nt=(n=>e=>{const t=$r.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),re=n=>(n=n.toLowerCase(),e=>Nt(e)===n),St=n=>e=>typeof e===n,{isArray:Be}=Array,Xe=St("undefined");function Xr(n){return n!==null&&!Xe(n)&&n.constructor!==null&&!Xe(n.constructor)&&Q(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const wi=re("ArrayBuffer");function qr(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&wi(n.buffer),e}const Kr=St("string"),Q=St("function"),vi=St("number"),Ct=n=>n!==null&&typeof n=="object",Gr=n=>n===!0||n===!1,dt=n=>{if(Nt(n)!=="object")return!1;const e=un(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Jr=re("Date"),Yr=re("File"),Qr=re("Blob"),Zr=re("FileList"),eo=n=>Ct(n)&&Q(n.pipe),to=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Q(n.append)&&((e=Nt(n))==="formdata"||e==="object"&&Q(n.toString)&&n.toString()==="[object FormData]"))},no=re("URLSearchParams"),io=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ye(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Be(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const o=t?Object.getOwnPropertyNames(n):Object.keys(n),s=o.length;let c;for(i=0;i<s;i++)c=o[i],e.call(null,n[c],c,n)}}function ki(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const _i=n=>!Xe(n)&&n!=={};function Yt(){const{caseless:n}=_i(this)&&this||{},e={},t=(i,r)=>{const o=n&&ki(e,r)||r;dt(e[o])&&dt(i)?e[o]=Yt(e[o],i):dt(i)?e[o]=Yt({},i):Be(i)?e[o]=i.slice():e[o]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Ye(arguments[i],t);return e}const ro=(n,e,t,{allOwnKeys:i}={})=>(Ye(e,(r,o)=>{t&&Q(r)?n[o]=xi(r,t):n[o]=r},{allOwnKeys:i}),n),oo=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),so=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},ao=(n,e,t,i)=>{let r,o,s;const c={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),o=r.length;o-- >0;)s=r[o],(!i||i(s,n,e))&&!c[s]&&(e[s]=n[s],c[s]=!0);n=t!==!1&&un(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},co=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},lo=n=>{if(!n)return null;if(Be(n))return n;let e=n.length;if(!vi(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},uo=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&un(Uint8Array)),fo=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const o=r.value;e.call(n,o[0],o[1])}},po=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},mo=re("HTMLFormElement"),ho=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),Mn=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),go=re("RegExp"),Ei=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Ye(t,(r,o)=>{let s;(s=e(r,o,n))!==!1&&(i[o]=s||r)}),Object.defineProperties(n,i)},bo=n=>{Ei(n,(e,t)=>{if(Q(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Q(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},yo=(n,e)=>{const t={},i=r=>{r.forEach(o=>{t[o]=!0})};return Be(n)?i(n):i(String(n).split(e)),t},xo=()=>{},wo=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Ut="abcdefghijklmnopqrstuvwxyz",zn="0123456789",Ii={DIGIT:zn,ALPHA:Ut,ALPHA_DIGIT:Ut+Ut.toUpperCase()+zn},vo=(n=16,e=Ii.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function ko(n){return!!(n&&Q(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const _o=n=>{const e=new Array(10),t=(i,r)=>{if(Ct(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const o=Be(i)?[]:{};return Ye(i,(s,c)=>{const l=t(s,r+1);!Xe(l)&&(o[c]=l)}),e[r]=void 0,o}}return i};return t(n,0)},Eo=re("AsyncFunction"),Io=n=>n&&(Ct(n)||Q(n))&&Q(n.then)&&Q(n.catch),m={isArray:Be,isArrayBuffer:wi,isBuffer:Xr,isFormData:to,isArrayBufferView:qr,isString:Kr,isNumber:vi,isBoolean:Gr,isObject:Ct,isPlainObject:dt,isUndefined:Xe,isDate:Jr,isFile:Yr,isBlob:Qr,isRegExp:go,isFunction:Q,isStream:eo,isURLSearchParams:no,isTypedArray:uo,isFileList:Zr,forEach:Ye,merge:Yt,extend:ro,trim:io,stripBOM:oo,inherits:so,toFlatObject:ao,kindOf:Nt,kindOfTest:re,endsWith:co,toArray:lo,forEachEntry:fo,matchAll:po,isHTMLForm:mo,hasOwnProperty:Mn,hasOwnProp:Mn,reduceDescriptors:Ei,freezeMethods:bo,toObjectSet:yo,toCamelCase:ho,noop:xo,toFiniteNumber:wo,findKey:ki,global:{},isContextDefined:_i,ALPHABET:Ii,generateString:vo,isSpecCompliantForm:ko,toJSONObject:_o,isAsyncFn:Eo,isThenable:Io};function C(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}m.inherits(C,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:m.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ni=C.prototype,Si={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Si[n]={value:n}});Object.defineProperties(C,Si);Object.defineProperty(Ni,"isAxiosError",{value:!0});C.from=(n,e,t,i,r,o)=>{const s=Object.create(Ni);return m.toFlatObject(n,s,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),C.call(s,n.message,e,t,i,r),s.cause=n,s.name=n.name,o&&Object.assign(s,o),s};const No=null;function Qt(n){return m.isPlainObject(n)||m.isArray(n)}function Ci(n){return m.endsWith(n,"[]")?n.slice(0,-2):n}function Bn(n,e,t){return n?n.concat(e).map(function(r,o){return r=Ci(r),!t&&o?"["+r+"]":r}).join(t?".":""):e}function So(n){return m.isArray(n)&&!n.some(Qt)}const Co=m.toFlatObject(m,{},null,function(e){return/^is[A-Z]/.test(e)});function Tt(n,e,t){if(!m.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=m.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,D){return!m.isUndefined(D[b])});const i=t.metaTokens,r=t.visitor||h,o=t.dots,s=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&m.isSpecCompliantForm(e);if(!m.isFunction(r))throw new TypeError("visitor must be a function");function f(y){if(y===null)return"";if(m.isDate(y))return y.toISOString();if(!l&&m.isBlob(y))throw new C("Blob is not supported. Use a Buffer instead.");return m.isArrayBuffer(y)||m.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function h(y,b,D){let P=y;if(y&&!D&&typeof y=="object"){if(m.endsWith(b,"{}"))b=i?b:b.slice(0,-2),y=JSON.stringify(y);else if(m.isArray(y)&&So(y)||(m.isFileList(y)||m.endsWith(b,"[]"))&&(P=m.toArray(y)))return b=Ci(b),P.forEach(function(z,_e){!(m.isUndefined(z)||z===null)&&e.append(s===!0?Bn([b],_e,o):s===null?b:b+"[]",f(z))}),!1}return Qt(y)?!0:(e.append(Bn(D,b,o),f(y)),!1)}const p=[],N=Object.assign(Co,{defaultVisitor:h,convertValue:f,isVisitable:Qt});function S(y,b){if(!m.isUndefined(y)){if(p.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));p.push(y),m.forEach(y,function(P,V){(!(m.isUndefined(P)||P===null)&&r.call(e,P,m.isString(V)?V.trim():V,b,N))===!0&&S(P,b?b.concat(V):[V])}),p.pop()}}if(!m.isObject(n))throw new TypeError("data must be an object");return S(n),e}function Un(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function dn(n,e){this._pairs=[],n&&Tt(n,this,e)}const Ti=dn.prototype;Ti.append=function(e,t){this._pairs.push([e,t])};Ti.toString=function(e){const t=e?function(i){return e.call(this,i,Un)}:Un;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function To(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ri(n,e,t){if(!e)return n;const i=t&&t.encode||To,r=t&&t.serialize;let o;if(r?o=r(e,t):o=m.isURLSearchParams(e)?e.toString():new dn(e,t).toString(i),o){const s=n.indexOf("#");s!==-1&&(n=n.slice(0,s)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Ro{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){m.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Fn=Ro,Ai={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ao=typeof URLSearchParams<"u"?URLSearchParams:dn,Oo=typeof FormData<"u"?FormData:null,Po=typeof Blob<"u"?Blob:null,Lo={isBrowser:!0,classes:{URLSearchParams:Ao,FormData:Oo,Blob:Po},protocols:["http","https","file","blob","url","data"]},Oi=typeof window<"u"&&typeof document<"u",Do=(n=>Oi&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),Mo=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),zo=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Oi,hasStandardBrowserEnv:Do,hasStandardBrowserWebWorkerEnv:Mo},Symbol.toStringTag,{value:"Module"})),te={...zo,...Lo};function Bo(n,e){return Tt(n,new te.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,o){return te.isNode&&m.isBuffer(t)?(this.append(i,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function Uo(n){return m.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Fo(n){const e={},t=Object.keys(n);let i;const r=t.length;let o;for(i=0;i<r;i++)o=t[i],e[o]=n[o];return e}function Pi(n){function e(t,i,r,o){let s=t[o++];if(s==="__proto__")return!0;const c=Number.isFinite(+s),l=o>=t.length;return s=!s&&m.isArray(r)?r.length:s,l?(m.hasOwnProp(r,s)?r[s]=[r[s],i]:r[s]=i,!c):((!r[s]||!m.isObject(r[s]))&&(r[s]=[]),e(t,i,r[s],o)&&m.isArray(r[s])&&(r[s]=Fo(r[s])),!c)}if(m.isFormData(n)&&m.isFunction(n.entries)){const t={};return m.forEachEntry(n,(i,r)=>{e(Uo(i),r,t,0)}),t}return null}function Wo(n,e,t){if(m.isString(n))try{return(e||JSON.parse)(n),m.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const fn={transitional:Ai,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,o=m.isObject(e);if(o&&m.isHTMLForm(e)&&(e=new FormData(e)),m.isFormData(e))return r?JSON.stringify(Pi(e)):e;if(m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e))return e;if(m.isArrayBufferView(e))return e.buffer;if(m.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Bo(e,this.formSerializer).toString();if((c=m.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Tt(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Wo(e)):e}],transformResponse:[function(e){const t=this.transitional||fn.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&m.isString(e)&&(i&&!this.responseType||r)){const s=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(c){if(s)throw c.name==="SyntaxError"?C.from(c,C.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:te.classes.FormData,Blob:te.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};m.forEach(["delete","get","head","post","put","patch"],n=>{fn.headers[n]={}});const pn=fn,Ho=m.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jo=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(s){r=s.indexOf(":"),t=s.substring(0,r).trim().toLowerCase(),i=s.substring(r+1).trim(),!(!t||e[t]&&Ho[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},Wn=Symbol("internals");function Ve(n){return n&&String(n).trim().toLowerCase()}function ft(n){return n===!1||n==null?n:m.isArray(n)?n.map(ft):String(n)}function Vo(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const $o=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Ft(n,e,t,i,r){if(m.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!m.isString(e)){if(m.isString(i))return e.indexOf(i)!==-1;if(m.isRegExp(i))return i.test(e)}}function Xo(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function qo(n,e){const t=m.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,o,s){return this[i].call(this,e,r,o,s)},configurable:!0})})}class Rt{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function o(c,l,f){const h=Ve(l);if(!h)throw new Error("header name must be a non-empty string");const p=m.findKey(r,h);(!p||r[p]===void 0||f===!0||f===void 0&&r[p]!==!1)&&(r[p||l]=ft(c))}const s=(c,l)=>m.forEach(c,(f,h)=>o(f,h,l));return m.isPlainObject(e)||e instanceof this.constructor?s(e,t):m.isString(e)&&(e=e.trim())&&!$o(e)?s(jo(e),t):e!=null&&o(t,e,i),this}get(e,t){if(e=Ve(e),e){const i=m.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Vo(r);if(m.isFunction(t))return t.call(this,r,i);if(m.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ve(e),e){const i=m.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Ft(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function o(s){if(s=Ve(s),s){const c=m.findKey(i,s);c&&(!t||Ft(i,i[c],c,t))&&(delete i[c],r=!0)}}return m.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const o=t[i];(!e||Ft(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const t=this,i={};return m.forEach(this,(r,o)=>{const s=m.findKey(i,o);if(s){t[s]=ft(r),delete t[o];return}const c=e?Xo(o):String(o).trim();c!==o&&delete t[o],t[c]=ft(r),i[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return m.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&m.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Wn]=this[Wn]={accessors:{}}).accessors,r=this.prototype;function o(s){const c=Ve(s);i[c]||(qo(r,s),i[c]=!0)}return m.isArray(e)?e.forEach(o):o(e),this}}Rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);m.reduceDescriptors(Rt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});m.freezeMethods(Rt);const ue=Rt;function Wt(n,e){const t=this||pn,i=e||t,r=ue.from(i.headers);let o=i.data;return m.forEach(n,function(c){o=c.call(t,o,r.normalize(),e?e.status:void 0)}),r.normalize(),o}function Li(n){return!!(n&&n.__CANCEL__)}function Qe(n,e,t){C.call(this,n??"canceled",C.ERR_CANCELED,e,t),this.name="CanceledError"}m.inherits(Qe,C,{__CANCEL__:!0});function Ko(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new C("Request failed with status code "+t.status,[C.ERR_BAD_REQUEST,C.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const Go=te.hasStandardBrowserEnv?{write(n,e,t,i,r,o){const s=[n+"="+encodeURIComponent(e)];m.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),m.isString(i)&&s.push("path="+i),m.isString(r)&&s.push("domain="+r),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Jo(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Yo(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Di(n,e){return n&&!Jo(e)?Yo(n,e):e}const Qo=te.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(o){let s=o;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(s){const c=m.isString(s)?r(s):s;return c.protocol===i.protocol&&c.host===i.host}}():function(){return function(){return!0}}();function Zo(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function es(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,o=0,s;return e=e!==void 0?e:1e3,function(l){const f=Date.now(),h=i[o];s||(s=f),t[r]=l,i[r]=f;let p=o,N=0;for(;p!==r;)N+=t[p++],p=p%n;if(r=(r+1)%n,r===o&&(o=(o+1)%n),f-s<e)return;const S=h&&f-h;return S?Math.round(N*1e3/S):void 0}}function Hn(n,e){let t=0;const i=es(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,c=o-t,l=i(c),f=o<=s;t=o;const h={loaded:o,total:s,progress:s?o/s:void 0,bytes:c,rate:l||void 0,estimated:l&&s&&f?(s-o)/l:void 0,event:r};h[e?"download":"upload"]=!0,n(h)}}const ts=typeof XMLHttpRequest<"u",ns=ts&&function(n){return new Promise(function(t,i){let r=n.data;const o=ue.from(n.headers).normalize();let{responseType:s,withXSRFToken:c}=n,l;function f(){n.cancelToken&&n.cancelToken.unsubscribe(l),n.signal&&n.signal.removeEventListener("abort",l)}let h;if(m.isFormData(r)){if(te.hasStandardBrowserEnv||te.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((h=o.getContentType())!==!1){const[b,...D]=h?h.split(";").map(P=>P.trim()).filter(Boolean):[];o.setContentType([b||"multipart/form-data",...D].join("; "))}}let p=new XMLHttpRequest;if(n.auth){const b=n.auth.username||"",D=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";o.set("Authorization","Basic "+btoa(b+":"+D))}const N=Di(n.baseURL,n.url);p.open(n.method.toUpperCase(),Ri(N,n.params,n.paramsSerializer),!0),p.timeout=n.timeout;function S(){if(!p)return;const b=ue.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),P={data:!s||s==="text"||s==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:b,config:n,request:p};Ko(function(z){t(z),f()},function(z){i(z),f()},P),p=null}if("onloadend"in p?p.onloadend=S:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(S)},p.onabort=function(){p&&(i(new C("Request aborted",C.ECONNABORTED,n,p)),p=null)},p.onerror=function(){i(new C("Network Error",C.ERR_NETWORK,n,p)),p=null},p.ontimeout=function(){let D=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const P=n.transitional||Ai;n.timeoutErrorMessage&&(D=n.timeoutErrorMessage),i(new C(D,P.clarifyTimeoutError?C.ETIMEDOUT:C.ECONNABORTED,n,p)),p=null},te.hasStandardBrowserEnv&&(c&&m.isFunction(c)&&(c=c(n)),c||c!==!1&&Qo(N))){const b=n.xsrfHeaderName&&n.xsrfCookieName&&Go.read(n.xsrfCookieName);b&&o.set(n.xsrfHeaderName,b)}r===void 0&&o.setContentType(null),"setRequestHeader"in p&&m.forEach(o.toJSON(),function(D,P){p.setRequestHeader(P,D)}),m.isUndefined(n.withCredentials)||(p.withCredentials=!!n.withCredentials),s&&s!=="json"&&(p.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&p.addEventListener("progress",Hn(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",Hn(n.onUploadProgress)),(n.cancelToken||n.signal)&&(l=b=>{p&&(i(!b||b.type?new Qe(null,n,p):b),p.abort(),p=null)},n.cancelToken&&n.cancelToken.subscribe(l),n.signal&&(n.signal.aborted?l():n.signal.addEventListener("abort",l)));const y=Zo(N);if(y&&te.protocols.indexOf(y)===-1){i(new C("Unsupported protocol "+y+":",C.ERR_BAD_REQUEST,n));return}p.send(r||null)})},Zt={http:No,xhr:ns};m.forEach(Zt,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const jn=n=>`- ${n}`,is=n=>m.isFunction(n)||n===null||n===!1,Mi={getAdapter:n=>{n=m.isArray(n)?n:[n];const{length:e}=n;let t,i;const r={};for(let o=0;o<e;o++){t=n[o];let s;if(i=t,!is(t)&&(i=Zt[(s=String(t)).toLowerCase()],i===void 0))throw new C(`Unknown adapter '${s}'`);if(i)break;r[s||"#"+o]=i}if(!i){const o=Object.entries(r).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=e?o.length>1?`since :
`+o.map(jn).join(`
`):" "+jn(o[0]):"as no adapter specified";throw new C("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return i},adapters:Zt};function Ht(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Qe(null,n)}function Vn(n){return Ht(n),n.headers=ue.from(n.headers),n.data=Wt.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Mi.getAdapter(n.adapter||pn.adapter)(n).then(function(i){return Ht(n),i.data=Wt.call(n,n.transformResponse,i),i.headers=ue.from(i.headers),i},function(i){return Li(i)||(Ht(n),i&&i.response&&(i.response.data=Wt.call(n,n.transformResponse,i.response),i.response.headers=ue.from(i.response.headers))),Promise.reject(i)})}const $n=n=>n instanceof ue?n.toJSON():n;function Me(n,e){e=e||{};const t={};function i(f,h,p){return m.isPlainObject(f)&&m.isPlainObject(h)?m.merge.call({caseless:p},f,h):m.isPlainObject(h)?m.merge({},h):m.isArray(h)?h.slice():h}function r(f,h,p){if(m.isUndefined(h)){if(!m.isUndefined(f))return i(void 0,f,p)}else return i(f,h,p)}function o(f,h){if(!m.isUndefined(h))return i(void 0,h)}function s(f,h){if(m.isUndefined(h)){if(!m.isUndefined(f))return i(void 0,f)}else return i(void 0,h)}function c(f,h,p){if(p in e)return i(f,h);if(p in n)return i(void 0,f)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c,headers:(f,h)=>r($n(f),$n(h),!0)};return m.forEach(Object.keys(Object.assign({},n,e)),function(h){const p=l[h]||r,N=p(n[h],e[h],h);m.isUndefined(N)&&p!==c||(t[h]=N)}),t}const zi="1.6.7",mn={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{mn[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Xn={};mn.transitional=function(e,t,i){function r(o,s){return"[Axios v"+zi+"] Transitional option '"+o+"'"+s+(i?". "+i:"")}return(o,s,c)=>{if(e===!1)throw new C(r(s," has been removed"+(t?" in "+t:"")),C.ERR_DEPRECATED);return t&&!Xn[s]&&(Xn[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,s,c):!0}};function rs(n,e,t){if(typeof n!="object")throw new C("options must be an object",C.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const o=i[r],s=e[o];if(s){const c=n[o],l=c===void 0||s(c,o,n);if(l!==!0)throw new C("option "+o+" must be "+l,C.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new C("Unknown option "+o,C.ERR_BAD_OPTION)}}const en={assertOptions:rs,validators:mn},me=en.validators;class yt{constructor(e){this.defaults=e,this.interceptors={request:new Fn,response:new Fn}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const o=r.stack?r.stack.replace(/^.+\n/,""):"";i.stack?o&&!String(i.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+o):i.stack=o}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Me(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:o}=t;i!==void 0&&en.assertOptions(i,{silentJSONParsing:me.transitional(me.boolean),forcedJSONParsing:me.transitional(me.boolean),clarifyTimeoutError:me.transitional(me.boolean)},!1),r!=null&&(m.isFunction(r)?t.paramsSerializer={serialize:r}:en.assertOptions(r,{encode:me.function,serialize:me.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&m.merge(o.common,o[t.method]);o&&m.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),t.headers=ue.concat(s,o);const c=[];let l=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(t)===!1||(l=l&&b.synchronous,c.unshift(b.fulfilled,b.rejected))});const f=[];this.interceptors.response.forEach(function(b){f.push(b.fulfilled,b.rejected)});let h,p=0,N;if(!l){const y=[Vn.bind(this),void 0];for(y.unshift.apply(y,c),y.push.apply(y,f),N=y.length,h=Promise.resolve(t);p<N;)h=h.then(y[p++],y[p++]);return h}N=c.length;let S=t;for(p=0;p<N;){const y=c[p++],b=c[p++];try{S=y(S)}catch(D){b.call(this,D);break}}try{h=Vn.call(this,S)}catch(y){return Promise.reject(y)}for(p=0,N=f.length;p<N;)h=h.then(f[p++],f[p++]);return h}getUri(e){e=Me(this.defaults,e);const t=Di(e.baseURL,e.url);return Ri(t,e.params,e.paramsSerializer)}}m.forEach(["delete","get","head","options"],function(e){yt.prototype[e]=function(t,i){return this.request(Me(i||{},{method:e,url:t,data:(i||{}).data}))}});m.forEach(["post","put","patch"],function(e){function t(i){return function(o,s,c){return this.request(Me(c||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}yt.prototype[e]=t(),yt.prototype[e+"Form"]=t(!0)});const pt=yt;class hn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const i=this;this.promise.then(r=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](r);i._listeners=null}),this.promise.then=r=>{let o;const s=new Promise(c=>{i.subscribe(c),o=c}).then(r);return s.cancel=function(){i.unsubscribe(o)},s},e(function(o,s,c){i.reason||(i.reason=new Qe(o,s,c),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new hn(function(r){e=r}),cancel:e}}}const os=hn;function ss(n){return function(t){return n.apply(null,t)}}function as(n){return m.isObject(n)&&n.isAxiosError===!0}const tn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tn).forEach(([n,e])=>{tn[e]=n});const cs=tn;function Bi(n){const e=new pt(n),t=xi(pt.prototype.request,e);return m.extend(t,pt.prototype,e,{allOwnKeys:!0}),m.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Bi(Me(n,r))},t}const H=Bi(pn);H.Axios=pt;H.CanceledError=Qe;H.CancelToken=os;H.isCancel=Li;H.VERSION=zi;H.toFormData=Tt;H.AxiosError=C;H.Cancel=H.CanceledError;H.all=function(e){return Promise.all(e)};H.spread=ss;H.isAxiosError=as;H.mergeConfig=Me;H.AxiosHeaders=ue;H.formToJSON=n=>Pi(m.isHTMLForm(n)?new FormData(n):n);H.getAdapter=Mi.getAdapter;H.HttpStatusCode=cs;H.default=H;const Ql=H;var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ls(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ui={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof jt>"u"?typeof window>"u"?jt:window:jt,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t,i,r,o,s,c=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,l='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',f={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},h={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},p={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},N={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},S={Show:"Show",Ask:"Ask",Prompt:"Prompt"},y={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},b={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},D={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},P={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},V={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},z=function(a){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+a+c)},_e=function(a){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+a+c)},oe=function(a){return a||(a="head"),e.document[a]!==null||(z(`
Notiflix needs to be appended to the "<`+a+'>" element, but you called it before the "<'+a+'>" element has been created.'),!1)},se=function(a,u){if(!oe("head"))return!1;if(a()!==null&&!e.document.getElementById(u)){var d=e.document.createElement("style");d.id=u,d.innerHTML=a(),e.document.head.appendChild(d)}},O=function(){var a={},u=!1,d=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(u=arguments[0],d++);for(var x=function(v){for(var I in v)Object.prototype.hasOwnProperty.call(v,I)&&(a[I]=u&&Object.prototype.toString.call(v[I])==="[object Object]"?O(a[I],v[I]):v[I])};d<arguments.length;d++)x(arguments[d]);return a},$=function(a){var u=e.document.createElement("div");return u.innerHTML=a,u.textContent||u.innerText||""},We=function(a,u){a||(a="110px"),u||(u="#32c682");var d='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+a+'" height="'+a+'" fill="'+u+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return d},Dt=function(a,u){a||(a="110px"),u||(u="#ff5549");var d='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+a+'" height="'+a+'" fill="'+u+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return d},Tr=function(a,u){a||(a="110px"),u||(u="#eebf31");var d='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+a+'" height="'+a+'" fill="'+u+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return d},Rr=function(a,u){a||(a="110px"),u||(u="#26c0d3");var d='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+a+'" height="'+a+'" fill="'+u+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return d},In=function(a,u){a||(a="60px"),u||(u="#32c682");var d='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+u+'" width="'+a+'" height="'+a+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return d},Nn=function(a,u){a||(a="60px"),u||(u="#32c682");var d='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+u+'" width="'+a+'" height="'+a+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return d},Sn=function(a,u){a||(a="60px"),u||(u="#32c682");var d='<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+a+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+a+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+a+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+u+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return d},Cn=function(a,u){a||(a="60px"),u||(u="#32c682");var d='<svg xmlns="http://www.w3.org/2000/svg" fill="'+u+'" width="'+a+'" height="'+a+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return d},Tn=function(a,u){a||(a="60px"),u||(u="#32c682");var d='<svg xmlns="http://www.w3.org/2000/svg" fill="'+u+'" width="'+a+'" height="'+a+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return d},Rn=function(a,u){a||(a="60px"),u||(u="#32c682");var d='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+u+'" width="'+a+'" height="'+a+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return d},Ar=function(a,u,d){a||(a="60px"),u||(u="#f8f8f8"),d||(d="#32c682");var x='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+a+'" height="'+a+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+u+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+d+'" stroke="'+d+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return x},Or=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},st=0,at=function(a,u,d,x){if(!oe("body"))return!1;t||K.Notify.init({});var v=O(!0,t,{});if(typeof d=="object"&&!Array.isArray(d)||typeof x=="object"&&!Array.isArray(x)){var I={};typeof d=="object"?I=d:typeof x=="object"&&(I=x),t=O(!0,t,I)}var _=t[a.toLocaleLowerCase("en")];st++,typeof u!="string"&&(u="Notiflix "+a),t.plainText&&(u=$(u)),!t.plainText&&u.length>t.messageMaxLength&&(t=O(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),t.fontAwesomeIconStyle==="shadow"&&(_.fontAwesomeIconColor=_.background),t.cssAnimation||(t.cssAnimationDuration=0);var g=e.document.getElementById(h.wrapID)||e.document.createElement("div");if(g.id=h.wrapID,g.style.width=t.width,g.style.zIndex=t.zindex,g.style.opacity=t.opacity,t.position==="center-center"?(g.style.left=t.distance,g.style.top=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):t.position==="center-top"?(g.style.left=t.distance,g.style.right=t.distance,g.style.top=t.distance,g.style.bottom="auto",g.style.margin="auto"):t.position==="center-bottom"?(g.style.left=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.margin="auto"):t.position==="right-bottom"?(g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.left="auto"):t.position==="left-top"?(g.style.left=t.distance,g.style.top=t.distance,g.style.right="auto",g.style.bottom="auto"):t.position==="left-bottom"?(g.style.left=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=t.distance,g.style.top=t.distance,g.style.left="auto",g.style.bottom="auto"),t.backOverlay){var T=e.document.getElementById(h.overlayID)||e.document.createElement("div");T.id=h.overlayID,T.style.width="100%",T.style.height="100%",T.style.position="fixed",T.style.zIndex=t.zindex-1,T.style.left=0,T.style.top=0,T.style.right=0,T.style.bottom=0,T.style.background=_.backOverlayColor||t.backOverlayColor,T.className=t.cssAnimation?"nx-with-animation":"",T.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(h.overlayID)||e.document.body.appendChild(T)}e.document.getElementById(h.wrapID)||e.document.body.appendChild(g);var w=e.document.createElement("div");w.id=t.ID+"-"+st,w.className=t.className+" "+_.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&typeof d!="function"?"nx-with-close-button":"")+" "+(typeof d=="function"?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=t.fontSize,w.style.color=_.textColor,w.style.background=_.background,w.style.borderRadius=t.borderRadius,w.style.pointerEvents="all",t.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+t.fontFamily+'", '+l,t.cssAnimation&&(w.style.animationDuration=t.cssAnimationDuration+"ms");var L="";if(t.closeButton&&typeof d!="function"&&(L='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+_.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!t.useIcon)w.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?L:"");else if(t.useFontAwesome)w.innerHTML='<i style="color:'+_.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+_.fontAwesomeClassName+" "+(t.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?L:"");else{var F="";a===f.Success?F='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===f.Failure?F='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===f.Warning?F='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===f.Info&&(F='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=F+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?L:"")}if(t.position==="left-bottom"||t.position==="right-bottom"){var j=e.document.getElementById(h.wrapID);j.insertBefore(w,j.firstChild)}else e.document.getElementById(h.wrapID).appendChild(w);var U=e.document.getElementById(w.id);if(U){var R,W,A=function(){U.classList.add("nx-remove");var E=e.document.getElementById(h.overlayID);E&&0>=g.childElementCount&&E.classList.add("nx-remove"),clearTimeout(R)},Z=function(){if(U&&U.parentNode!==null&&U.parentNode.removeChild(U),0>=g.childElementCount&&g.parentNode!==null){g.parentNode.removeChild(g);var E=e.document.getElementById(h.overlayID);E&&E.parentNode!==null&&E.parentNode.removeChild(E)}clearTimeout(W)};if(t.closeButton&&typeof d!="function"){var ee=e.document.getElementById(w.id).querySelector("span.nx-close-button");ee.addEventListener("click",function(){A();var E=setTimeout(function(){Z(),clearTimeout(E)},t.cssAnimationDuration)})}if((typeof d=="function"||t.clickToClose)&&U.addEventListener("click",function(){typeof d=="function"&&d(),A();var E=setTimeout(function(){Z(),clearTimeout(E)},t.cssAnimationDuration)}),!t.closeButton&&typeof d!="function"){var G=function(){R=setTimeout(function(){A()},t.timeout),W=setTimeout(function(){Z()},t.timeout+t.cssAnimationDuration)};G(),t.pauseOnHover&&(U.addEventListener("mouseenter",function(){U.classList.add("nx-paused"),clearTimeout(R),clearTimeout(W)}),U.addEventListener("mouseleave",function(){U.classList.remove("nx-paused"),G()}))}}if(t.showOnlyTheLastOne&&0<st)for(var J,B=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+st+"])"),pe=0;pe<B.length;pe++)J=B[pe],J.parentNode!==null&&J.parentNode.removeChild(J);t=O(!0,t,v)},Pr=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ct=function(a,u,d,x,v,I){if(!oe("body"))return!1;i||K.Report.init({});var _={};if(typeof v=="object"&&!Array.isArray(v)||typeof I=="object"&&!Array.isArray(I)){var g={};typeof v=="object"?g=v:typeof I=="object"&&(g=I),_=O(!0,i,{}),i=O(!0,i,g)}var T=i[a.toLocaleLowerCase("en")];typeof u!="string"&&(u="Notiflix "+a),typeof d!="string"&&(a===p.Success?d='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':a===p.Failure?d='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':a===p.Warning?d='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':a===p.Info&&(d='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof x!="string"&&(x="Okay"),i.plainText&&(u=$(u),d=$(d),x=$(x)),i.plainText||(u.length>i.titleMaxLength&&(u="Possible HTML Tags Error",d='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',x="Okay"),d.length>i.messageMaxLength&&(u="Possible HTML Tags Error",d='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',x="Okay"),x.length>i.buttonMaxLength&&(u="Possible HTML Tags Error",d='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',x="Okay")),u.length>i.titleMaxLength&&(u=u.substring(0,i.titleMaxLength)+"..."),d.length>i.messageMaxLength&&(d=d.substring(0,i.messageMaxLength)+"..."),x.length>i.buttonMaxLength&&(x=x.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var w=e.document.createElement("div");w.id=N.ID,w.className=i.className,w.style.zIndex=i.zindex,w.style.borderRadius=i.borderRadius,w.style.fontFamily='"'+i.fontFamily+'", '+l,i.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.alignItems="center",w.style.justifyContent="center";var L="",F=i.backOverlayClickToClose===!0;i.backOverlay&&(L='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(F?" nx-report-click-to-close":"")+'" style="background:'+(T.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var j="";if(a===p.Success?j=We(i.svgSize,T.svgColor):a===p.Failure?j=Dt(i.svgSize,T.svgColor):a===p.Warning?j=Tr(i.svgSize,T.svgColor):a===p.Info&&(j=Rr(i.svgSize,T.svgColor)),w.innerHTML=L+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+j+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+T.titleColor+';">'+u+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+T.messageColor+';">'+d+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+T.buttonBackground+"; color:"+T.buttonColor+';">'+x+"</a></div>",!e.document.getElementById(w.id)){e.document.body.appendChild(w);var U=function(){var A=e.document.getElementById(w.id);A.classList.add("nx-remove");var Z=setTimeout(function(){A.parentNode!==null&&A.parentNode.removeChild(A),clearTimeout(Z)},i.cssAnimationDuration)},R=e.document.getElementById("NXReportButton");if(R.addEventListener("click",function(){typeof v=="function"&&v(),U()}),L&&F){var W=e.document.querySelector(".nx-report-click-to-close");W.addEventListener("click",function(){U()})}}i=O(!0,i,_)},Lr=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Mt=function(a,u,d,x,v,I,_,g,T){if(!oe("body"))return!1;r||K.Confirm.init({});var w=O(!0,r,{});typeof T!="object"||Array.isArray(T)||(r=O(!0,r,T)),typeof u!="string"&&(u="Notiflix Confirm"),typeof d!="string"&&(d="Do you agree with me?"),typeof v!="string"&&(v="Yes"),typeof I!="string"&&(I="No"),typeof _!="function"&&(_=void 0),typeof g!="function"&&(g=void 0),r.plainText&&(u=$(u),d=$(d),v=$(v),I=$(I)),r.plainText||(u.length>r.titleMaxLength&&(u="Possible HTML Tags Error",d='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',v="Okay",I="..."),d.length>r.messageMaxLength&&(u="Possible HTML Tags Error",d='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',v="Okay",I="..."),(v.length||I.length)>r.buttonsMaxLength&&(u="Possible HTML Tags Error",d='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',v="Okay",I="...")),u.length>r.titleMaxLength&&(u=u.substring(0,r.titleMaxLength)+"..."),d.length>r.messageMaxLength&&(d=d.substring(0,r.messageMaxLength)+"..."),v.length>r.buttonsMaxLength&&(v=v.substring(0,r.buttonsMaxLength)+"..."),I.length>r.buttonsMaxLength&&(I=I.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var L=e.document.createElement("div");L.id=y.ID,L.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),L.style.zIndex=r.zindex,L.style.padding=r.distance,r.rtl&&(L.setAttribute("dir","rtl"),L.classList.add("nx-rtl-on"));var F=typeof r.position=="string"?r.position.trim():"center";L.classList.add("nx-position-"+F),L.style.fontFamily='"'+r.fontFamily+'", '+l;var j="";r.backOverlay&&(j='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var U="";typeof _=="function"&&(U='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+I+"</a>");var R="",W=null,A=void 0;if(a===S.Ask||a===S.Prompt){W=x||"";var Z=a===S.Ask||200<W.length?Math.ceil(1.5*W.length):250,ee=a===S.Prompt?'value="'+W+'"':"";R='<div><input id="NXConfirmValidationInput" type="text" '+ee+' maxlength="'+Z+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(L.innerHTML=j+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+u+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+d+R+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof _=="function"?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+v+"</a>"+U+"</div></div>",!e.document.getElementById(L.id)){e.document.body.appendChild(L);var G=e.document.getElementById(L.id),J=e.document.getElementById("NXConfirmButtonOk"),B=e.document.getElementById("NXConfirmValidationInput");if(B&&(B.focus(),B.setSelectionRange(0,(B.value||"").length),B.addEventListener("keyup",function(E){var Ae=E.target.value;if(a===S.Ask&&Ae!==W)E.preventDefault(),B.classList.add("nx-validation-failure"),B.classList.remove("nx-validation-success");else{a===S.Ask&&(B.classList.remove("nx-validation-failure"),B.classList.add("nx-validation-success"));var He=(E.key||"").toLocaleLowerCase("en")==="enter"||E.keyCode===13;He&&J.dispatchEvent(new Event("click"))}})),J.addEventListener("click",function(E){if(a===S.Ask&&W&&B){var Ae=(B.value||"").toString();if(Ae!==W)return B.focus(),B.classList.add("nx-validation-failure"),E.stopPropagation(),E.preventDefault(),E.returnValue=!1,E.cancelBubble=!0,!1;B.classList.remove("nx-validation-failure")}typeof _=="function"&&(a===S.Prompt&&B&&(A=B.value||""),_(A)),G.classList.add("nx-remove");var He=setTimeout(function(){G.parentNode!==null&&(G.parentNode.removeChild(G),clearTimeout(He))},r.cssAnimationDuration)}),typeof _=="function"){var pe=e.document.getElementById("NXConfirmButtonCancel");pe.addEventListener("click",function(){typeof g=="function"&&(a===S.Prompt&&B&&(A=B.value||""),g(A)),G.classList.add("nx-remove");var E=setTimeout(function(){G.parentNode!==null&&(G.parentNode.removeChild(G),clearTimeout(E))},r.cssAnimationDuration)})}}r=O(!0,r,w)},Dr=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ae=function(a,u,d,x,v){if(!oe("body"))return!1;o||K.Loading.init({});var I=O(!0,o,{});if(typeof u=="object"&&!Array.isArray(u)||typeof d=="object"&&!Array.isArray(d)){var _={};typeof u=="object"?_=u:typeof d=="object"&&(_=d),o=O(!0,o,_)}var g="";if(typeof u=="string"&&0<u.length&&(g=u),x){g=g.length>o.messageMaxLength?$(g).toString().substring(0,o.messageMaxLength)+"...":$(g).toString();var T="";0<g.length&&(T='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+g+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var w="";if(a===b.Standard)w=In(o.svgSize,o.svgColor);else if(a===b.Hourglass)w=Nn(o.svgSize,o.svgColor);else if(a===b.Circle)w=Sn(o.svgSize,o.svgColor);else if(a===b.Arrows)w=Cn(o.svgSize,o.svgColor);else if(a===b.Dots)w=Tn(o.svgSize,o.svgColor);else if(a===b.Pulse)w=Rn(o.svgSize,o.svgColor);else if(a===b.Custom&&o.customSvgCode!==null&&o.customSvgUrl===null)w=o.customSvgCode||"";else if(a===b.Custom&&o.customSvgUrl!==null&&o.customSvgCode===null)w='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(a===b.Custom&&(o.customSvgUrl===null||o.customSvgCode===null))return z('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;w=Ar(o.svgSize,"#f8f8f8","#32c682")}var L=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),F=e.innerWidth,j=L>=F?F-40+"px":L+"px",U='<div style="width:'+j+"; height:"+j+';" class="'+o.className+"-icon"+(0<g.length?" nx-with-message":"")+'">'+w+"</div>",R=e.document.createElement("div");if(R.id=D.ID,R.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=o.zindex,R.style.background=o.backgroundColor,R.style.animationDuration=o.cssAnimationDuration+"ms",R.style.fontFamily='"'+o.fontFamily+'", '+l,R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",o.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=U+T,!e.document.getElementById(R.id)&&(e.document.body.appendChild(R),o.clickToClose)){var W=e.document.getElementById(R.id);W.addEventListener("click",function(){R.classList.add("nx-remove");var ee=setTimeout(function(){R.parentNode!==null&&(R.parentNode.removeChild(R),clearTimeout(ee))},o.cssAnimationDuration)})}}else if(e.document.getElementById(D.ID))var A=e.document.getElementById(D.ID),Z=setTimeout(function(){A.classList.add("nx-remove");var ee=setTimeout(function(){A.parentNode!==null&&(A.parentNode.removeChild(A),clearTimeout(ee))},o.cssAnimationDuration);clearTimeout(Z)},v);o=O(!0,o,I)},Mr=function(a){typeof a!="string"&&(a="");var u=e.document.getElementById(D.ID);if(u)if(0<a.length){a=a.length>o.messageMaxLength?$(a).substring(0,o.messageMaxLength)+"...":$(a);var d=u.getElementsByTagName("p")[0];if(d)d.innerHTML=a;else{var x=e.document.createElement("p");x.id=o.messageID,x.className="nx-loading-message nx-loading-message-new",x.style.color=o.messageColor,x.style.fontSize=o.messageFontSize,x.innerHTML=a,u.appendChild(x)}}else z("Where is the new message?")},zr=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},zt=0,Ee=function(a,u,d,x,v,I){var _;if(Array.isArray(d)){if(1>d.length)return z("Array of HTMLElements should contains at least one HTMLElement."),!1;_=d}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,d)){if(1>d.length)return z("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;_=Array.prototype.slice.call(d)}else{var g=typeof d!="string"||1>(d||"").length||(d||"").length===1&&((d||"")[0]==="#"||(d||"")[0]===".");if(g)return z("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var T=e.document.querySelectorAll(d);if(1>T.length)return z('You called the "Notiflix.Block..." function with "'+d+'" selector, but there is no such element(s) in the document.'),!1;_=T}s||K.Block.init({});var w=O(!0,s,{});if(typeof x=="object"&&!Array.isArray(x)||typeof v=="object"&&!Array.isArray(v)){var L={};typeof x=="object"?L=x:typeof v=="object"&&(L=v),s=O(!0,s,L)}var F="";typeof x=="string"&&0<x.length&&(F=x),s.cssAnimation||(s.cssAnimationDuration=0);var j=V.className;typeof s.className=="string"&&(j=s.className.trim());var U=typeof s.querySelectorLimit=="number"?s.querySelectorLimit:200,R=(_||[]).length>=U?U:_.length,W="nx-block-temporary-position";if(a){for(var A,Z=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],ee=0;ee<R;ee++)if(A=_[ee],A){if(-1<Z.indexOf(A.tagName.toLocaleLowerCase("en")))break;var G=A.querySelectorAll("[id^="+V.ID+"]");if(1>G.length){var J="";u&&(u===P.Hourglass?J=Nn(s.svgSize,s.svgColor):u===P.Circle?J=Sn(s.svgSize,s.svgColor):u===P.Arrows?J=Cn(s.svgSize,s.svgColor):u===P.Dots?J=Tn(s.svgSize,s.svgColor):u===P.Pulse?J=Rn(s.svgSize,s.svgColor):J=In(s.svgSize,s.svgColor));var B='<span class="'+j+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+J+"</span>",pe="";0<F.length&&(F=F.length>s.messageMaxLength?$(F).substring(0,s.messageMaxLength)+"...":$(F),pe='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+j+'-message">'+F+"</span>"),zt++;var E=e.document.createElement("div");E.id=V.ID+"-"+zt,E.className=j+(s.cssAnimation?" nx-with-animation":""),E.style.position=s.position,E.style.zIndex=s.zindex,E.style.background=s.backgroundColor,E.style.animationDuration=s.cssAnimationDuration+"ms",E.style.fontFamily='"'+s.fontFamily+'", '+l,E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",s.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=B+pe;var Ae=e.getComputedStyle(A).getPropertyValue("position"),He=typeof Ae=="string"?Ae.toLocaleLowerCase("en"):"relative",An=Math.round(1.25*parseInt(s.svgSize))+40,Br=A.offsetHeight||0,Bt="";An>Br&&(Bt="min-height:"+An+"px;");var On="";On=A.getAttribute("id")?"#"+A.getAttribute("id"):A.classList[0]?"."+A.classList[0]:(A.tagName||"").toLocaleLowerCase("en");var Pn="",Ln=-1>=["absolute","relative","fixed","sticky"].indexOf(He);if(Ln||0<Bt.length){if(!oe("head"))return!1;Ln&&(Pn="position:relative!important;");var Ur='<style id="Style-'+V.ID+"-"+zt+'">'+On+"."+W+"{"+Pn+Bt+"}</style>",Dn=e.document.createRange();Dn.selectNode(e.document.head);var Fr=Dn.createContextualFragment(Ur);e.document.head.appendChild(Fr),A.classList.add(W)}A.appendChild(E)}}}else var Wr=function(X){var Y=setTimeout(function(){X.parentNode!==null&&X.parentNode.removeChild(X);var je=X.getAttribute("id"),lt=e.document.getElementById("Style-"+je);lt&&lt.parentNode!==null&&lt.parentNode.removeChild(lt),clearTimeout(Y)},s.cssAnimationDuration)},Hr=function(X){if(X&&0<X.length)for(var Y,je=0;je<X.length;je++)Y=X[je],Y&&(Y.classList.add("nx-remove"),Wr(Y));else _e(typeof d=="string"?'"Notiflix.Block.remove();" function called with "'+d+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+d+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},jr=function(X){var Y=setTimeout(function(){X.classList.remove(W),clearTimeout(Y)},s.cssAnimationDuration+300)},Vr=setTimeout(function(){for(var X,Y=0;Y<R;Y++)X=_[Y],X&&(jr(X),G=X.querySelectorAll("[id^="+V.ID+"]"),Hr(G));clearTimeout(Vr)},I);s=O(!0,s,w)},K={Notify:{init:function(a){t=O(!0,h,a),se(Or,"NotiflixNotifyInternalCSS")},merge:function(a){return t?void(t=O(!0,t,a)):(z("You have to initialize the Notify module before call Merge function."),!1)},success:function(a,u,d){at(f.Success,a,u,d)},failure:function(a,u,d){at(f.Failure,a,u,d)},warning:function(a,u,d){at(f.Warning,a,u,d)},info:function(a,u,d){at(f.Info,a,u,d)}},Report:{init:function(a){i=O(!0,N,a),se(Pr,"NotiflixReportInternalCSS")},merge:function(a){return i?void(i=O(!0,i,a)):(z("You have to initialize the Report module before call Merge function."),!1)},success:function(a,u,d,x,v){ct(p.Success,a,u,d,x,v)},failure:function(a,u,d,x,v){ct(p.Failure,a,u,d,x,v)},warning:function(a,u,d,x,v){ct(p.Warning,a,u,d,x,v)},info:function(a,u,d,x,v){ct(p.Info,a,u,d,x,v)}},Confirm:{init:function(a){r=O(!0,y,a),se(Lr,"NotiflixConfirmInternalCSS")},merge:function(a){return r?void(r=O(!0,r,a)):(z("You have to initialize the Confirm module before call Merge function."),!1)},show:function(a,u,d,x,v,I,_){Mt(S.Show,a,u,null,d,x,v,I,_)},ask:function(a,u,d,x,v,I,_,g){Mt(S.Ask,a,u,d,x,v,I,_,g)},prompt:function(a,u,d,x,v,I,_,g){Mt(S.Prompt,a,u,d,x,v,I,_,g)}},Loading:{init:function(a){o=O(!0,D,a),se(Dr,"NotiflixLoadingInternalCSS")},merge:function(a){return o?void(o=O(!0,o,a)):(z("You have to initialize the Loading module before call Merge function."),!1)},standard:function(a,u){ae(b.Standard,a,u,!0,0)},hourglass:function(a,u){ae(b.Hourglass,a,u,!0,0)},circle:function(a,u){ae(b.Circle,a,u,!0,0)},arrows:function(a,u){ae(b.Arrows,a,u,!0,0)},dots:function(a,u){ae(b.Dots,a,u,!0,0)},pulse:function(a,u){ae(b.Pulse,a,u,!0,0)},custom:function(a,u){ae(b.Custom,a,u,!0,0)},notiflix:function(a,u){ae(b.Notiflix,a,u,!0,0)},remove:function(a){typeof a!="number"&&(a=0),ae(null,null,null,!1,a)},change:function(a){Mr(a)}},Block:{init:function(a){s=O(!0,V,a),se(zr,"NotiflixBlockInternalCSS")},merge:function(a){return s?void(s=O(!0,s,a)):(z('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(a,u,d){Ee(!0,P.Standard,a,u,d)},hourglass:function(a,u,d){Ee(!0,P.Hourglass,a,u,d)},circle:function(a,u,d){Ee(!0,P.Circle,a,u,d)},arrows:function(a,u,d){Ee(!0,P.Arrows,a,u,d)},dots:function(a,u,d){Ee(!0,P.Dots,a,u,d)},pulse:function(a,u,d){Ee(!0,P.Pulse,a,u,d)},remove:function(a,u){typeof u!="number"&&(u=0),Ee(!1,null,a,null,null,u)}}};return typeof e.Notiflix=="object"?O(!0,e.Notiflix,{Notify:K.Notify,Report:K.Report,Confirm:K.Confirm,Loading:K.Loading,Block:K.Block}):{Notify:K.Notify,Report:K.Report,Confirm:K.Confirm,Loading:K.Loading,Block:K.Block}})})(Ui);var us=Ui.exports;const Zl=ls(us);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},ds=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],s=n[t++],c=n[t++],l=((r&7)<<18|(o&63)<<12|(s&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],s=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Wi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const o=n[r],s=r+1<n.length,c=s?n[r+1]:0,l=r+2<n.length,f=l?n[r+2]:0,h=o>>2,p=(o&3)<<4|c>>4;let N=(c&15)<<2|f>>6,S=f&63;l||(S=64,s||(N=64)),i.push(t[h],t[p],t[N],t[S])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ds(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const f=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||f==null||p==null)throw new fs;const N=o<<2|c>>4;if(i.push(N),f!==64){const S=c<<4&240|f>>2;if(i.push(S),p!==64){const y=f<<6&192|p;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ps=function(n){const e=Fi(n);return Wi.encodeByteArray(e,!0)},Hi=function(n){return ps(n).replace(/\./g,"")},ji=function(n){try{return Wi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=()=>ms().__FIREBASE_DEFAULTS__,gs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ji(n[1]);return e&&JSON.parse(e)},gn=()=>{try{return hs()||gs()||bs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ys=n=>{var e,t;return(t=(e=gn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Vi=()=>{var n;return(n=gn())===null||n===void 0?void 0:n.config},$i=n=>{var e;return(e=gn())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ws(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function vs(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ks(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _s(){const n=q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Es(){try{return typeof indexedDB=="object"}catch{return!1}}function Is(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="FirebaseError";class ke extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ns,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ze.prototype.create)}}class Ze{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?Ss(o,i):"Error",c=`${this.serviceName}: ${s} (${r}).`;return new ke(r,c,i)}}function Ss(n,e){return n.replace(Cs,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Cs=/\{\$([^}]+)}/g;function Ts(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const o=n[r],s=e[r];if(qn(o)&&qn(s)){if(!xt(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function qn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Rs(n,e){const t=new As(n,e);return t.subscribe.bind(t)}class As{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Os(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Vt),r.error===void 0&&(r.error=Vt),r.complete===void 0&&(r.complete=Vt);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Os(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n){return n&&n._delegate?n._delegate:n}class ze{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new xs;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ds(e))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=Ie){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ie){return this.instances.has(e)}getOptions(e=Ie){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&s.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ls(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ie){return this.component?this.component.multipleInstances?e:Ie:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ls(n){return n===Ie?void 0:n}function Ds(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ps(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const zs={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Bs=M.INFO,Us={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Fs=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Us[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xi{constructor(e){this.name=e,this._logLevel=Bs,this._logHandler=Fs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Ws=(n,e)=>e.some(t=>n instanceof t);let Kn,Gn;function Hs(){return Kn||(Kn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function js(){return Gn||(Gn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qi=new WeakMap,nn=new WeakMap,Ki=new WeakMap,$t=new WeakMap,bn=new WeakMap;function Vs(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",s)},o=()=>{t(we(n.result)),r()},s=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&qi.set(t,n)}).catch(()=>{}),bn.set(e,n),e}function $s(n){if(nn.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",s),n.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",s),n.addEventListener("abort",s)});nn.set(n,e)}let rn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ki.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return we(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xs(n){rn=n(rn)}function qs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Xt(this),e,...t);return Ki.set(i,e.sort?e.sort():[e]),we(i)}:js().includes(n)?function(...e){return n.apply(Xt(this),e),we(qi.get(this))}:function(...e){return we(n.apply(Xt(this),e))}}function Ks(n){return typeof n=="function"?qs(n):(n instanceof IDBTransaction&&$s(n),Ws(n,Hs())?new Proxy(n,rn):n)}function we(n){if(n instanceof IDBRequest)return Vs(n);if($t.has(n))return $t.get(n);const e=Ks(n);return e!==n&&($t.set(n,e),bn.set(e,n)),e}const Xt=n=>bn.get(n);function Gs(n,e,{blocked:t,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(n,e),c=we(s);return i&&s.addEventListener("upgradeneeded",l=>{i(we(s.result),l.oldVersion,l.newVersion,we(s.transaction),l)}),t&&s.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Js=["get","getKey","getAll","getAllKeys","count"],Ys=["put","add","delete","clear"],qt=new Map;function Jn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qt.get(e))return qt.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Ys.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Js.includes(t)))return;const o=async function(s,...c){const l=this.transaction(s,r?"readwrite":"readonly");let f=l.store;return i&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),r&&l.done]))[0]};return qt.set(e,o),o}Xs(n=>({...n,get:(e,t,i)=>Jn(e,t)||n.get(e,t,i),has:(e,t)=>!!Jn(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zs(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Zs(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const on="@firebase/app",Yn="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new Xi("@firebase/app"),ea="@firebase/app-compat",ta="@firebase/analytics-compat",na="@firebase/analytics",ia="@firebase/app-check-compat",ra="@firebase/app-check",oa="@firebase/auth",sa="@firebase/auth-compat",aa="@firebase/database",ca="@firebase/database-compat",la="@firebase/functions",ua="@firebase/functions-compat",da="@firebase/installations",fa="@firebase/installations-compat",pa="@firebase/messaging",ma="@firebase/messaging-compat",ha="@firebase/performance",ga="@firebase/performance-compat",ba="@firebase/remote-config",ya="@firebase/remote-config-compat",xa="@firebase/storage",wa="@firebase/storage-compat",va="@firebase/firestore",ka="@firebase/firestore-compat",_a="firebase",Ea="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]",Ia={[on]:"fire-core",[ea]:"fire-core-compat",[na]:"fire-analytics",[ta]:"fire-analytics-compat",[ra]:"fire-app-check",[ia]:"fire-app-check-compat",[oa]:"fire-auth",[sa]:"fire-auth-compat",[aa]:"fire-rtdb",[ca]:"fire-rtdb-compat",[la]:"fire-fn",[ua]:"fire-fn-compat",[da]:"fire-iid",[fa]:"fire-iid-compat",[pa]:"fire-fcm",[ma]:"fire-fcm-compat",[ha]:"fire-perf",[ga]:"fire-perf-compat",[ba]:"fire-rc",[ya]:"fire-rc-compat",[xa]:"fire-gcs",[wa]:"fire-gcs-compat",[va]:"fire-fst",[ka]:"fire-fst-compat","fire-js":"fire-js",[_a]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Map,an=new Map;function Na(n,e){try{n.container.addComponent(e)}catch(t){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qe(n){const e=n.name;if(an.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;an.set(e,n);for(const t of wt.values())Na(t,n);return!0}function Gi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ve=new Ze("app","Firebase",Sa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=Ea;function Ta(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:sn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ve.create("bad-app-name",{appName:String(r)});if(t||(t=Vi()),!t)throw ve.create("no-options");const o=wt.get(r);if(o){if(xt(t,o.options)&&xt(i,o.config))return o;throw ve.create("duplicate-app",{appName:r})}const s=new Ms(r);for(const l of an.values())s.addComponent(l);const c=new Ca(t,i,s);return wt.set(r,c),c}function Ra(n=sn){const e=wt.get(n);if(!e&&n===sn&&Vi())return Ta();if(!e)throw ve.create("no-app",{appName:n});return e}function Pe(n,e,t){var i;let r=(i=Ia[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const c=[`Unable to register library "${r}" with version "${e}":`];o&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(c.join(" "));return}qe(new ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="firebase-heartbeat-database",Oa=1,Ke="firebase-heartbeat-store";let Kt=null;function Ji(){return Kt||(Kt=Gs(Aa,Oa,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ke)}catch(t){console.warn(t)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),Kt}async function Pa(n){try{const t=(await Ji()).transaction(Ke),i=await t.objectStore(Ke).get(Yi(n));return await t.done,i}catch(e){if(e instanceof ke)Se.warn(e.message);else{const t=ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Se.warn(t.message)}}}async function Qn(n,e){try{const i=(await Ji()).transaction(Ke,"readwrite");await i.objectStore(Ke).put(e,Yi(n)),await i.done}catch(t){if(t instanceof ke)Se.warn(t.message);else{const i=ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Se.warn(i.message)}}}function Yi(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=1024,Da=30*24*60*60*1e3;class Ma{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ba(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zn();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const c=new Date(s.date).valueOf();return Date.now()-c<=Da}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zn(),{heartbeatsToSend:i,unsentEntries:r}=za(this._heartbeatsCache.heartbeats),o=Hi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Zn(){return new Date().toISOString().substring(0,10)}function za(n,e=La){const t=[];let i=n.slice();for(const r of n){const o=t.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),ei(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ei(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Ba{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Es()?Is().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pa(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ei(n){return Hi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){qe(new ze("platform-logger",e=>new Qs(e),"PRIVATE")),qe(new ze("heartbeat",e=>new Ma(e),"PRIVATE")),Pe(on,Yn,n),Pe(on,Yn,"esm2017"),Pe("fire-js","")}Ua("");var Fa="firebase",Wa="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(Fa,Wa,"app");function yn(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Qi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ha=Qi,Zi=new Ze("auth","Firebase",Qi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Xi("@firebase/auth");function ja(n,...e){vt.logLevel<=M.WARN&&vt.warn(`Auth (${tt}): ${n}`,...e)}function mt(n,...e){vt.logLevel<=M.ERROR&&vt.error(`Auth (${tt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,...e){throw xn(n,...e)}function ne(n,...e){return xn(n,...e)}function Va(n,e,t){const i=Object.assign(Object.assign({},Ha()),{[e]:t});return new Ze("auth","Firebase",i).create(e,{appName:n.name})}function xn(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Zi.create(n,...e)}function k(n,e,...t){if(!n)throw xn(e,...t)}function ce(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mt(e),new Error(e)}function fe(n,e){n||ce(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $a(){return ti()==="http:"||ti()==="https:"}function ti(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($a()||vs()||"connection"in navigator)?navigator.onLine:!0}function qa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.shortDelay=e,this.longDelay=t,fe(t>e,"Short delay should be less than long delay!"),this.isMobile=ws()||ks()}get(){return Xa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n,e){fe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new nt(3e4,6e4);function it(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Re(n,e,t,i,r={}){return tr(n,r,async()=>{let o={},s={};i&&(e==="GET"?s=i:o={body:JSON.stringify(i)});const c=et(Object.assign({key:n.config.apiKey},s)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),er.fetch()(ir(n,n.config.apiHost,t,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function tr(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ka),e);try{const r=new Ya(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ut(n,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const c=o.ok?s.errorMessage:s.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ut(n,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ut(n,"email-already-in-use",s);if(l==="USER_DISABLED")throw ut(n,"user-disabled",s);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Va(n,h,f);de(n,h)}}catch(r){if(r instanceof ke)throw r;de(n,"network-request-failed",{message:String(r)})}}async function nr(n,e,t,i,r={}){const o=await Re(n,e,t,i,r);return"mfaPendingCredential"in o&&de(n,"multi-factor-auth-required",{_serverResponse:o}),o}function ir(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?wn(n.config,r):`${n.config.apiScheme}://${r}`}function Ja(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ya{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ne(this.auth,"network-request-failed")),Ga.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ut(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=ne(n,e,i);return r.customData._tokenResponse=t,r}function ni(n){return n!==void 0&&n.enterprise!==void 0}class Qa{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ja(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Za(n,e){return Re(n,"GET","/v2/recaptchaConfig",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n,e){return Re(n,"POST","/v1/accounts:delete",e)}async function tc(n,e){return Re(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nc(n,e=!1){const t=Ue(n),i=await t.getIdToken(e),r=vn(i);k(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:$e(Gt(r.auth_time)),issuedAtTime:$e(Gt(r.iat)),expirationTime:$e(Gt(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Gt(n){return Number(n)*1e3}function vn(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return mt("JWT malformed, contained fewer than 3 sections"),null;try{const r=ji(t);return r?JSON.parse(r):(mt("Failed to decode base64 JWT payload"),null)}catch(r){return mt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ic(n){const e=vn(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ke&&rc(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function rc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$e(this.lastLoginAt),this.creationTime=$e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Ge(n,tc(t,{idToken:i}));k(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?cc(o.providerUserInfo):[],c=ac(n.providerData,s),l=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),h=l?f:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new rr(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function sc(n){const e=Ue(n);await kt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ac(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function cc(n){return n.map(e=>{var{providerId:t}=e,i=yn(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(n,e){const t=await tr(n,{},async()=>{const i=et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,s=ir(n,r,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",er.fetch()(s,{method:"POST",headers:c,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function uc(n,e){return Re(n,"POST","/v2/accounts:revokeToken",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ic(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:o}=await lc(e,t);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:o}=t,s=new Je;return i&&(k(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(k(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(k(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Je,this.toJSON())}_performRefresh(){return ce("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ne{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rr(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ge(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nc(this,e)}reload(){return sc(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await kt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ge(this,ec(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,s,c,l,f,h;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,N=(r=t.email)!==null&&r!==void 0?r:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=t.photoURL)!==null&&s!==void 0?s:void 0,b=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,P=(f=t.createdAt)!==null&&f!==void 0?f:void 0,V=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:z,emailVerified:_e,isAnonymous:oe,providerData:se,stsTokenManager:O}=t;k(z&&O,e,"internal-error");const $=Je.fromJSON(this.name,O);k(typeof z=="string",e,"internal-error"),he(p,e.name),he(N,e.name),k(typeof _e=="boolean",e,"internal-error"),k(typeof oe=="boolean",e,"internal-error"),he(S,e.name),he(y,e.name),he(b,e.name),he(D,e.name),he(P,e.name),he(V,e.name);const We=new Ne({uid:z,auth:e,email:N,emailVerified:_e,displayName:p,isAnonymous:oe,photoURL:y,phoneNumber:S,tenantId:b,stsTokenManager:$,createdAt:P,lastLoginAt:V});return se&&Array.isArray(se)&&(We.providerData=se.map(Dt=>Object.assign({},Dt))),D&&(We._redirectEventId=D),We}static async _fromIdTokenResponse(e,t,i=!1){const r=new Je;r.updateFromServerResponse(t);const o=new Ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await kt(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Map;function le(n){fe(n instanceof Function,"Expected a class definition");let e=ii.get(n);return e?(fe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ii.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}or.type="NONE";const ri=or;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,e,t){return`firebase:${n}:${e}:${t}`}class Le{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=ht(this.userKey,r.apiKey,o),this.fullPersistenceKey=ht("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Le(le(ri),e,i);const r=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=r[0]||le(ri);const s=ht(i,e.config.apiKey,e.name);let c=null;for(const f of t)try{const h=await f._get(s);if(h){const p=Ne._fromJSON(e,h);f!==o&&(c=p),o=f;break}}catch{}const l=r.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Le(o,e,i):(o=l[0],c&&await o._set(s,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(s)}catch{}})),new Le(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ur(e))return"Blackberry";if(dr(e))return"Webos";if(kn(e))return"Safari";if((e.includes("chrome/")||ar(e))&&!e.includes("edge/"))return"Chrome";if(lr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sr(n=q()){return/firefox\//i.test(n)}function kn(n=q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ar(n=q()){return/crios\//i.test(n)}function cr(n=q()){return/iemobile/i.test(n)}function lr(n=q()){return/android/i.test(n)}function ur(n=q()){return/blackberry/i.test(n)}function dr(n=q()){return/webos/i.test(n)}function At(n=q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dc(n=q()){var e;return At(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fc(){return _s()&&document.documentMode===10}function fr(n=q()){return At(n)||lr(n)||dr(n)||ur(n)||/windows phone/i.test(n)||cr(n)}function pc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n,e=[]){let t;switch(n){case"Browser":t=oi(q());break;case"Worker":t=`${oi(q())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((s,c)=>{try{const l=e(o);s(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(n,e={}){return Re(n,"GET","/v2/passwordPolicy",it(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=6;class bc{constructor(e){var t,i,r,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=s.minPasswordLength)!==null&&t!==void 0?t:gc,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,o,s,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new si(this),this.idTokenSubscription=new si(this),this.beforeStateQueue=new mc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Le.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===c)&&(l!=null&&l.user)&&(r=l.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ue(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hc(this),t=new bc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ze("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await uc(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await Le.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let s=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(c,this,"internal-error"),c.then(()=>{s||o(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{s=!0,l()}}else{const l=e.addObserver(t);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ja(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Fe(n){return Ue(n)}class si{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rs(t=>this.observer=t)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ot={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xc(n){Ot=n}function mr(n){return Ot.loadJS(n)}function wc(){return Ot.recaptchaEnterpriseScript}function vc(){return Ot.gapiScript}function kc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const _c="recaptcha-enterprise",Ec="NO_RECAPTCHA";class Ic{constructor(e){this.type=_c,this.auth=Fe(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,c)=>{Za(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new Qa(l);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,s(f.siteKey)}}).catch(l=>{c(l)})})}function r(o,s,c){const l=window.grecaptcha;ni(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(f=>{s(f)}).catch(()=>{s(Ec)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{i(this.auth).then(c=>{if(!t&&ni(window.grecaptcha))r(c,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=wc();l.length!==0&&(l+=c),mr(l).then(()=>{r(c,o,s)}).catch(f=>{s(f)})}}).catch(c=>{s(c)})})}}async function ai(n,e,t,i=!1){const r=new Ic(n);let o;try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const s=Object.assign({},e);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Nc(n,e,t,i){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ai(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await ai(n,e,t,t==="getOobCode");return i(n,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,e){const t=Gi(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(xt(o,e??{}))return r;de(r,"already-initialized")}return t.initialize({options:e})}function Cc(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(le);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Tc(n,e,t){const i=Fe(n);k(i._canInitEmulator,i,"emulator-config-failed"),k(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),o=hr(e),{host:s,port:c}=Rc(e),l=c===null?"":`:${c}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ac()}function hr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Rc(n){const e=hr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:ci(i.substr(o.length+1))}}else{const[o,s]=i.split(":");return{host:o,port:ci(s)}}}function ci(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ac(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ce("not implemented")}_getIdTokenResponse(e){return ce("not implemented")}_linkToIdToken(e,t){return ce("not implemented")}_getReauthenticationResolver(e){return ce("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(n,e){return nr(n,"POST","/v1/accounts:signInWithIdp",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="http://localhost";class Ce extends gr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):de("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,o=yn(t,["providerId","signInMethod"]);if(!i||!r)return null;const s=new Ce(i,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return De(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,De(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,De(e,t)}buildRequest(){const e={requestUri:Oc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=et(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends rt{constructor(){super("facebook.com")}static credential(e){return Ce._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ge.credential(e.oauthAccessToken)}catch{return null}}}ge.FACEBOOK_SIGN_IN_METHOD="facebook.com";ge.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ce._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return be.credential(t,i)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends rt{constructor(){super("github.com")}static credential(e){return Ce._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com";ye.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends rt{constructor(){super("twitter.com")}static credential(e,t){return Ce._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return xe.credential(t,i)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(n,e){return nr(n,"POST","/v1/accounts:signUp",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const o=await Ne._fromIdTokenResponse(e,i,r),s=li(i);return new Te({user:o,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=li(i);return new Te({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function li(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ke{constructor(e,t,i,r){var o;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,_t.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new _t(e,t,i,r)}}function yr(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_t._fromErrorAndOperation(n,o,e,i):o})}async function Lc(n,e,t=!1){const i=await Ge(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Te._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const o=await Ge(n,yr(i,r,e,n),t);k(o.idToken,i,"internal-error");const s=vn(o.idToken);k(s,i,"internal-error");const{sub:c}=s;return k(n.uid===c,i,"user-mismatch"),Te._forOperation(n,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&de(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(n,e,t=!1){const i="signIn",r=await yr(n,i,e),o=await Te._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(n){const e=Fe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eu(n,e,t){const i=Fe(n),s=await Nc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pc).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zc(n),l}),c=await Te._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(c.user),c}function Bc(n,e,t,i){return Ue(n).onIdTokenChanged(e,t,i)}function Uc(n,e,t){return Ue(n).beforeAuthStateChanged(e,t)}const Et="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Et,"1"),this.storage.removeItem(Et),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){const n=q();return kn(n)||At(n)}const Wc=1e3,Hc=10;class wr extends xr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fc()&&pc(),this.fallbackToPolling=fr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,c,l)=>{this.notifyListeners(s,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(i);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const s=this.storage.getItem(i);!t&&this.localCache[i]===s||this.notifyListeners(i,s)},o=this.storage.getItem(i);fc()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Hc):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Wc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wr.type="LOCAL";const jc=wr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends xr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vr.type="SESSION";const kr=vr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Pt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:o}=t.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(s).map(async f=>f(t.origin,o)),l=await Vc(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((c,l)=>{const f=_n("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(p){const N=p;if(N.data.eventId===f)switch(N.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(N.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return window}function Xc(n){ie().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return typeof ie().WorkerGlobalScope<"u"&&typeof ie().importScripts=="function"}async function qc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kc(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gc(){return _r()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="firebaseLocalStorageDb",Jc=1,It="firebaseLocalStorage",Ir="fbase_key";class ot{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lt(n,e){return n.transaction([It],e?"readwrite":"readonly").objectStore(It)}function Yc(){const n=indexedDB.deleteDatabase(Er);return new ot(n).toPromise()}function ln(){const n=indexedDB.open(Er,Jc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(It,{keyPath:Ir})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(It)?e(i):(i.close(),await Yc(),e(await ln()))})})}async function ui(n,e,t){const i=Lt(n,!0).put({[Ir]:e,value:t});return new ot(i).toPromise()}async function Qc(n,e){const t=Lt(n,!1).get(e),i=await new ot(t).toPromise();return i===void 0?null:i.value}function di(n,e){const t=Lt(n,!0).delete(e);return new ot(t).toPromise()}const Zc=800,el=3;class Nr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ln(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>el)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _r()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pt._getInstance(Gc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qc(),!this.activeServiceWorker)return;this.sender=new $c(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ln();return await ui(e,Et,"1"),await di(e,Et),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ui(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Qc(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>di(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Lt(r,!1).getAll();return new ot(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nr.type="LOCAL";const tl=Nr;new nt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n,e){return e?le(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends gr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return De(e,this._buildIdpRequest())}_linkToIdToken(e,t){return De(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return De(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function il(n){return Mc(n.auth,new En(n),n.bypassAuthState)}function rl(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),Dc(t,new En(n),n.bypassAuthState)}async function ol(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),Lc(t,new En(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:o,error:s,type:c}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return il;case"linkViaPopup":case"linkViaRedirect":return ol;case"reauthViaPopup":case"reauthViaRedirect":return rl;default:de(this.auth,"internal-error")}}resolve(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new nt(2e3,1e4);class Oe extends Sr{constructor(e,t,i,r,o){super(e,t,r,o),this.provider=i,this.authWindow=null,this.pollId=null,Oe.currentPopupAction&&Oe.currentPopupAction.cancel(),Oe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){fe(this.filter.length===1,"Popup operations only handle one event");const e=_n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sl.get())};e()}}Oe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="pendingRedirect",gt=new Map;class cl extends Sr{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=gt.get(this.auth._key());if(!e){try{const i=await ll(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}gt.set(this.auth._key(),e)}return this.bypassAuthState||gt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ll(n,e){const t=fl(e),i=dl(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function ul(n,e){gt.set(n._key(),e)}function dl(n){return le(n._redirectPersistence)}function fl(n){return ht(al,n.config.apiKey,n.name)}async function pl(n,e,t=!1){const i=Fe(n),r=nl(i,e),s=await new cl(i,r,t).execute();return s&&!t&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=10*60*1e3;class hl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Cr(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ne(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ml&&this.cachedEventUids.clear(),this.cachedEventUids.has(fi(e))}saveEventToCache(e){this.cachedEventUids.add(fi(e)),this.lastProcessedEventTime=Date.now()}}function fi(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(n,e={}){return Re(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xl=/^https?/;async function wl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bl(n);for(const t of e)try{if(vl(t))return}catch{}de(n,"unauthorized-domain")}function vl(n){const e=cn(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const s=new URL(n);return s.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===i}if(!xl.test(t))return!1;if(yl.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new nt(3e4,6e4);function pi(){const n=ie().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _l(n){return new Promise((e,t)=>{var i,r,o;function s(){pi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pi(),t(ne(n,"network-request-failed"))},timeout:kl.get()})}if(!((r=(i=ie().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=ie().gapi)===null||o===void 0)&&o.load)s();else{const c=kc("iframefcb");return ie()[c]=()=>{gapi.load?s():t(ne(n,"network-request-failed"))},mr(`${vc()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw bt=null,e})}let bt=null;function El(n){return bt=bt||_l(n),bt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new nt(5e3,15e3),Nl="__/auth/iframe",Sl="emulator/auth/iframe",Cl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rl(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wn(e,Sl):`https://${n.config.authDomain}/${Nl}`,i={apiKey:e.apiKey,appName:n.name,v:tt},r=Tl.get(n.config.apiHost);r&&(i.eid=r);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${et(i).slice(1)}`}async function Al(n){const e=await El(n),t=ie().gapi;return k(t,n,"internal-error"),e.open({where:document.body,url:Rl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cl,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const s=ne(n,"network-request-failed"),c=ie().setTimeout(()=>{o(s)},Il.get());function l(){ie().clearTimeout(c),r(i)}i.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pl=500,Ll=600,Dl="_blank",Ml="http://localhost";class mi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zl(n,e,t,i=Pl,r=Ll){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Ol),{width:i.toString(),height:r.toString(),top:o,left:s}),f=q().toLowerCase();t&&(c=ar(f)?Dl:t),sr(f)&&(e=e||Ml,l.scrollbars="yes");const h=Object.entries(l).reduce((N,[S,y])=>`${N}${S}=${y},`,"");if(dc(f)&&c!=="_self")return Bl(e||"",c),new mi(null);const p=window.open(e||"",c,h);k(p,n,"popup-blocked");try{p.focus()}catch{}return new mi(p)}function Bl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="__/auth/handler",Fl="emulator/auth/handler",Wl=encodeURIComponent("fac");async function hi(n,e,t,i,r,o){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const s={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:tt,eventId:r};if(e instanceof br){e.setDefaultLanguage(n.languageCode),s.providerId=e.providerId||"",Ts(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(o||{}))s[h]=p}if(e instanceof rt){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}n.tenantId&&(s.tid=n.tenantId);const c=s;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),f=l?`#${Wl}=${encodeURIComponent(l)}`:"";return`${Hl(n)}?${et(c).slice(1)}${f}`}function Hl({config:n}){return n.emulator?wn(n,Fl):`https://${n.authDomain}/${Ul}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="webStorageSupport";class jl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kr,this._completeRedirectFn=pl,this._overrideRedirectResult=ul}async _openPopup(e,t,i,r){var o;fe((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await hi(e,t,i,cn(),r);return zl(e,s,_n())}async _openRedirect(e,t,i,r){await this._originValidation(e);const o=await hi(e,t,i,cn(),r);return Xc(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(fe(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Al(e),i=new hl(e);return t.register("authEvent",r=>(k(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jt,{type:Jt},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[Jt];s!==void 0&&t(!!s),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fr()||kn()||At()}}const Vl=jl;var gi="@firebase/auth",bi="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ql(n){qe(new ze("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:c}=i.options;k(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:s,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pr(n)},f=new yc(i,r,o,l);return Cc(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),qe(new ze("auth-internal",e=>{const t=Fe(e.getProvider("auth").getImmediate());return(i=>new $l(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(gi,bi,Xl(n)),Pe(gi,bi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=5*60,Gl=$i("authIdTokenMaxAge")||Kl;let yi=null;const Jl=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Gl)return;const r=t==null?void 0:t.token;yi!==r&&(yi=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function tu(n=Ra()){const e=Gi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Sc(n,{popupRedirectResolver:Vl,persistence:[tl,jc,kr]}),i=$i("authTokenSyncURL");if(i){const o=Jl(i);Uc(t,o,()=>o(t.currentUser)),Bc(t,s=>o(s))}const r=ys("auth");return r&&Tc(t,`http://${r}`),t}function Yl(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xc({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const o=ne("internal-error");o.customData=r,t(o)},i.type="text/javascript",i.charset="UTF-8",Yl().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ql("Browser");export{Zl as N,Ql as a,eu as c,tu as g,Ta as i,us as n};
//# sourceMappingURL=vendor-1b043372.js.map
