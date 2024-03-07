function vn(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Kt(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:vn(e[n])&&vn(t[n])&&Object.keys(e[n]).length>0&&Kt(t[n],e[n])})}const ri={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Se(){const t=typeof document<"u"?document:{};return Kt(t,ri),t}const Es={document:ri,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function F(){const t=typeof window<"u"?window:{};return Kt(t,Es),t}function Ts(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function _s(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Mt(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Qe(){return Date.now()}function Is(t){const e=F();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Cs(t,e){e===void 0&&(e="x");const n=F();let i,s,r;const o=Is(t);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),r=new n.WebKitCSSMatrix(s==="none"?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?s=r.m41:i.length===16?s=parseFloat(i[12]):s=parseFloat(i[4])),e==="y"&&(n.WebKitCSSMatrix?s=r.m42:i.length===16?s=parseFloat(i[13]):s=parseFloat(i[5])),s||0}function ze(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function As(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function U(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(i!=null&&!As(i)){const s=Object.keys(Object(i)).filter(r=>e.indexOf(r)<0);for(let r=0,o=s.length;r<o;r+=1){const a=s[r],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(ze(t[a])&&ze(i[a])?i[a].__swiper__?t[a]=i[a]:U(t[a],i[a]):!ze(t[a])&&ze(i[a])?(t[a]={},i[a].__swiper__?t[a]=i[a]:U(t[a],i[a])):t[a]=i[a])}}}return t}function He(t,e,n){t.style.setProperty(e,n)}function oi(t){let{swiper:e,targetPosition:n,side:i}=t;const s=F(),r=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const d=n>r?"next":"prev",f=(g,v)=>d==="next"&&g>=v||d==="prev"&&g<=v,u=()=>{a=new Date().getTime(),o===null&&(o=a);const g=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(g*Math.PI)/2;let p=r+v*(n-r);if(f(p,n)&&(p=n),e.wrapperEl.scrollTo({[i]:p}),f(p,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:p})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(u)};u()}function j(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function Ze(t){try{console.warn(t);return}catch{}}function et(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:Ts(e)),n}function Os(t,e){const n=[];for(;t.previousElementSibling;){const i=t.previousElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function Ps(t,e){const n=[];for(;t.nextElementSibling;){const i=t.nextElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function oe(t,e){return F().getComputedStyle(t,null).getPropertyValue(e)}function wn(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function xs(t,e){const n=[];let i=t.parentElement;for(;i;)e?i.matches(e)&&n.push(i):n.push(i),i=i.parentElement;return n}function yn(t,e,n){const i=F();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function K(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function Rs(t,e,n,i){return t.params.createElements&&Object.keys(i).forEach(s=>{if(!n[s]&&n.auto===!0){let r=j(t.el,`.${i[s]}`)[0];r||(r=et("div",i[s]),r.className=i[s],t.el.append(r)),n[s]=r,e[s]=r}}),n}function Hd(t){let{swiper:e,extendParams:n,on:i,emit:s}=t;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m.length>1&&e.el.querySelectorAll(p).length===1&&(m=e.el.querySelector(p))),p&&!m?p:m)}function o(p,m){const T=e.params.navigation;p=K(p),p.forEach(b=>{b&&(b.classList[m?"add":"remove"](...T.disabledClass.split(" ")),b.tagName==="BUTTON"&&(b.disabled=m),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](T.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function d(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function f(){const p=e.params.navigation;if(e.params.navigation=Rs(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=r(p.nextEl),T=r(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:T}),m=K(m),T=K(T);const b=(O,A)=>{O&&O.addEventListener("click",A==="next"?d:l),!e.enabled&&O&&O.classList.add(...p.lockClass.split(" "))};m.forEach(O=>b(O,"next")),T.forEach(O=>b(O,"prev"))}function u(){let{nextEl:p,prevEl:m}=e.navigation;p=K(p),m=K(m);const T=(b,O)=>{b.removeEventListener("click",O==="next"?d:l),b.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(b=>T(b,"next")),m.forEach(b=>T(b,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?v():(f(),a())}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{u()}),i("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=K(p),m=K(m),e.enabled){a();return}[...p,...m].filter(T=>!!T).forEach(T=>T.classList.add(e.params.navigation.lockClass))}),i("click",(p,m)=>{let{nextEl:T,prevEl:b}=e.navigation;T=K(T),b=K(b);const O=m.target;if(e.params.navigation.hideOnClick&&!b.includes(O)&&!T.includes(O)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===O||e.pagination.el.contains(O)))return;let A;T.length?A=T[0].classList.contains(e.params.navigation.hiddenClass):b.length&&(A=b[0].classList.contains(e.params.navigation.hiddenClass)),s(A===!0?"navigationShow":"navigationHide"),[...T,...b].filter(P=>!!P).forEach(P=>P.classList.toggle(e.params.navigation.hiddenClass))}});const g=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),a()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:g,disable:v,update:a,init:f,destroy:u})}let vt;function Ls(){const t=F(),e=Se();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function ai(){return vt||(vt=Ls()),vt}let wt;function ks(t){let{userAgent:e}=t===void 0?{}:t;const n=ai(),i=F(),s=i.navigator.platform,r=e||i.navigator.userAgent,o={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,d=r.match(/(Android);?[\s\/]+([\d.]+)?/);let f=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),g=!f&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=s==="Win32";let p=s==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&p&&n.touch&&m.indexOf(`${a}x${l}`)>=0&&(f=r.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),p=!1),d&&!v&&(o.os="android",o.android=!0),(f||g||u)&&(o.os="ios",o.ios=!0),o}function li(t){return t===void 0&&(t={}),wt||(wt=ks(t)),wt}let yt;function Ms(){const t=F(),e=li();let n=!1;function i(){const a=t.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(t.navigator.userAgent);if(a.includes("Version/")){const[l,d]=a.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=l<16||l===16&&d<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),r=i(),o=r||s&&e.ios;return{isSafari:n||r,needPerspectiveFix:n,need3dFix:o,isWebView:s}}function Ns(){return yt||(yt=Ms()),yt}function Ds(t){let{swiper:e,on:n,emit:i}=t;const s=F();let r=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(u=>{o=s.requestAnimationFrame(()=>{const{width:g,height:v}=e;let p=g,m=v;u.forEach(T=>{let{contentBoxSize:b,contentRect:O,target:A}=T;A&&A!==e.el||(p=O?O.width:(b[0]||b).inlineSize,m=O?O.height:(b[0]||b).blockSize)}),(p!==g||m!==v)&&a()})}),r.observe(e.el))},d=()=>{o&&s.cancelAnimationFrame(o),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},f=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){l();return}s.addEventListener("resize",a),s.addEventListener("orientationchange",f)}),n("destroy",()=>{d(),s.removeEventListener("resize",a),s.removeEventListener("orientationchange",f)})}function Bs(t){let{swiper:e,extendParams:n,on:i,emit:s}=t;const r=[],o=F(),a=function(f,u){u===void 0&&(u={});const g=o.MutationObserver||o.WebkitMutationObserver,v=new g(p=>{if(e.__preventObserver__)return;if(p.length===1){s("observerUpdate",p[0]);return}const m=function(){s("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});v.observe(f,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const f=xs(e.hostEl);for(let u=0;u<f.length;u+=1)a(f[u])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},d=()=>{r.forEach(f=>{f.disconnect()}),r.splice(0,r.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",d)}var Us={on(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const s=n?"unshift":"push";return t.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][s](e)}),i},once(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function s(){i.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];e.apply(i,o)}return s.__emitterProxy=e,i.on(t,s,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const i=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[i](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(i=>{typeof e>"u"?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach((s,r)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&n.eventsListeners[i].splice(r,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,i;for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],n=r.slice(1,r.length),i=t):(e=r[0].events,n=r[0].data,i=r[0].context||t),n.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(d=>{d.apply(i,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(d=>{d.apply(i,n)})}),t}};function Fs(){const t=this;let e,n;const i=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=i.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=i.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(oe(i,"padding-left")||0,10)-parseInt(oe(i,"padding-right")||0,10),n=n-parseInt(oe(i,"padding-top")||0,10)-parseInt(oe(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function zs(){const t=this;function e(S,C){return parseFloat(S.getPropertyValue(t.getDirectionLabel(C))||0)}const n=t.params,{wrapperEl:i,slidesEl:s,size:r,rtlTranslate:o,wrongRTL:a}=t,l=t.virtual&&n.virtual.enabled,d=l?t.virtual.slides.length:t.slides.length,f=j(s,`.${t.params.slideClass}, swiper-slide`),u=l?t.virtual.slides.length:f.length;let g=[];const v=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(t));let T=n.slidesOffsetAfter;typeof T=="function"&&(T=n.slidesOffsetAfter.call(t));const b=t.snapGrid.length,O=t.slidesGrid.length;let A=n.spaceBetween,P=-m,x=0,E=0;if(typeof r>"u")return;typeof A=="string"&&A.indexOf("%")>=0?A=parseFloat(A.replace("%",""))/100*r:typeof A=="string"&&(A=parseFloat(A)),t.virtualSize=-A,f.forEach(S=>{o?S.style.marginLeft="":S.style.marginRight="",S.style.marginBottom="",S.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(He(i,"--swiper-centered-offset-before",""),He(i,"--swiper-centered-offset-after",""));const _=n.grid&&n.grid.rows>1&&t.grid;_?t.grid.initSlides(f):t.grid&&t.grid.unsetSlides();let c;const h=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(S=>typeof n.breakpoints[S].slidesPerView<"u").length>0;for(let S=0;S<u;S+=1){c=0;let C;if(f[S]&&(C=f[S]),_&&t.grid.updateSlide(S,C,f),!(f[S]&&oe(C,"display")==="none")){if(n.slidesPerView==="auto"){h&&(f[S].style[t.getDirectionLabel("width")]="");const w=getComputedStyle(C),I=C.style.transform,R=C.style.webkitTransform;if(I&&(C.style.transform="none"),R&&(C.style.webkitTransform="none"),n.roundLengths)c=t.isHorizontal()?yn(C,"width",!0):yn(C,"height",!0);else{const k=e(w,"width"),V=e(w,"padding-left"),ys=e(w,"padding-right"),pn=e(w,"margin-left"),mn=e(w,"margin-right"),gn=w.getPropertyValue("box-sizing");if(gn&&gn==="border-box")c=k+pn+mn;else{const{clientWidth:bs,offsetWidth:Ss}=C;c=k+V+ys+pn+mn+(Ss-bs)}}I&&(C.style.transform=I),R&&(C.style.webkitTransform=R),n.roundLengths&&(c=Math.floor(c))}else c=(r-(n.slidesPerView-1)*A)/n.slidesPerView,n.roundLengths&&(c=Math.floor(c)),f[S]&&(f[S].style[t.getDirectionLabel("width")]=`${c}px`);f[S]&&(f[S].swiperSlideSize=c),p.push(c),n.centeredSlides?(P=P+c/2+x/2+A,x===0&&S!==0&&(P=P-r/2-A),S===0&&(P=P-r/2-A),Math.abs(P)<1/1e3&&(P=0),n.roundLengths&&(P=Math.floor(P)),E%n.slidesPerGroup===0&&g.push(P),v.push(P)):(n.roundLengths&&(P=Math.floor(P)),(E-Math.min(t.params.slidesPerGroupSkip,E))%t.params.slidesPerGroup===0&&g.push(P),v.push(P),P=P+c+A),t.virtualSize+=c+A,x=c,E+=1}}if(t.virtualSize=Math.max(t.virtualSize,r)+T,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${t.virtualSize+A}px`),n.setWrapperSize&&(i.style[t.getDirectionLabel("width")]=`${t.virtualSize+A}px`),_&&t.grid.updateWrapperSize(c,g),!n.centeredSlides){const S=[];for(let C=0;C<g.length;C+=1){let w=g[C];n.roundLengths&&(w=Math.floor(w)),g[C]<=t.virtualSize-r&&S.push(w)}g=S,Math.floor(t.virtualSize-r)-Math.floor(g[g.length-1])>1&&g.push(t.virtualSize-r)}if(l&&n.loop){const S=p[0]+A;if(n.slidesPerGroup>1){const C=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),w=S*n.slidesPerGroup;for(let I=0;I<C;I+=1)g.push(g[g.length-1]+w)}for(let C=0;C<t.virtual.slidesBefore+t.virtual.slidesAfter;C+=1)n.slidesPerGroup===1&&g.push(g[g.length-1]+S),v.push(v[v.length-1]+S),t.virtualSize+=S}if(g.length===0&&(g=[0]),A!==0){const S=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");f.filter((C,w)=>!n.cssMode||n.loop?!0:w!==f.length-1).forEach(C=>{C.style[S]=`${A}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let S=0;p.forEach(w=>{S+=w+(A||0)}),S-=A;const C=S-r;g=g.map(w=>w<=0?-m:w>C?C+T:w)}if(n.centerInsufficientSlides){let S=0;if(p.forEach(C=>{S+=C+(A||0)}),S-=A,S<r){const C=(r-S)/2;g.forEach((w,I)=>{g[I]=w-C}),v.forEach((w,I)=>{v[I]=w+C})}}if(Object.assign(t,{slides:f,snapGrid:g,slidesGrid:v,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){He(i,"--swiper-centered-offset-before",`${-g[0]}px`),He(i,"--swiper-centered-offset-after",`${t.size/2-p[p.length-1]/2}px`);const S=-t.snapGrid[0],C=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(w=>w+S),t.slidesGrid=t.slidesGrid.map(w=>w+C)}if(u!==d&&t.emit("slidesLengthChange"),g.length!==b&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),v.length!==O&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const S=`${n.containerModifierClass}backface-hidden`,C=t.el.classList.contains(S);u<=n.maxBackfaceHiddenSlides?C||t.el.classList.add(S):C&&t.el.classList.remove(S)}}function Hs(t){const e=this,n=[],i=e.virtual&&e.params.virtual.enabled;let s=0,r;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const a=e.activeIndex+r;if(a>e.slides.length&&!i)break;n.push(o(a))}else n.push(o(e.activeIndex));for(r=0;r<n.length;r+=1)if(typeof n[r]<"u"){const a=n[r].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function Vs(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(t.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-n-t.cssOverflowAdjustment()}function js(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:i,rtlTranslate:s,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;s&&(o=t),i.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const d=i[l];let f=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=i[0].swiperSlideOffset);const u=(o+(n.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+a),g=(o-r[0]+(n.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+a),v=-(o-f),p=v+e.slidesSizesGrid[l],m=v>=0&&v<=e.size-e.slidesSizesGrid[l];(v>=0&&v<e.size-1||p>1&&p<=e.size||v<=0&&p>=e.size)&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(l),i[l].classList.add(n.slideVisibleClass)),m&&i[l].classList.add(n.slideFullyVisibleClass),d.progress=s?-u:u,d.originalProgress=s?-g:g}}function $s(t){const e=this;if(typeof t>"u"){const f=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*f||0}const n=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=e;const l=r,d=o;if(i===0)s=0,r=!0,o=!0;else{s=(t-e.minTranslate())/i;const f=Math.abs(t-e.minTranslate())<1,u=Math.abs(t-e.maxTranslate())<1;r=f||s<=0,o=u||s>=1,f&&(s=0),u&&(s=1)}if(n.loop){const f=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),g=e.slidesGrid[f],v=e.slidesGrid[u],p=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(t);m>=g?a=(m-g)/p:a=(m+p-v)/p,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),r&&!l&&e.emit("reachBeginning toEdge"),o&&!d&&e.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}function Gs(){const t=this,{slides:e,params:n,slidesEl:i,activeIndex:s}=t,r=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=u=>j(i,`.${n.slideClass}${u}, swiper-slide${u}`)[0];e.forEach(u=>{u.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,d,f;if(r)if(n.loop){let u=s-t.virtual.slidesBefore;u<0&&(u=t.virtual.slides.length+u),u>=t.virtual.slides.length&&(u-=t.virtual.slides.length),l=a(`[data-swiper-slide-index="${u}"]`)}else l=a(`[data-swiper-slide-index="${s}"]`);else o?(l=e.filter(u=>u.column===s)[0],f=e.filter(u=>u.column===s+1)[0],d=e.filter(u=>u.column===s-1)[0]):l=e[s];l&&(l.classList.add(n.slideActiveClass),o?(f&&f.classList.add(n.slideNextClass),d&&d.classList.add(n.slidePrevClass)):(f=Ps(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=e[0]),f&&f.classList.add(n.slideNextClass),d=Os(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=e[e.length-1]),d&&d.classList.add(n.slidePrevClass))),t.emitSlidesClasses()}const $e=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,i=e.closest(n());if(i){let s=i.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(i.shadowRoot?s=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(s=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},bt=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Nt=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const i=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=s,a=[o-e];a.push(...Array.from({length:e}).map((l,d)=>o+i+d)),t.slides.forEach((l,d)=>{a.includes(l.column)&&bt(t,d)});return}const r=s+i-1;if(t.params.rewind||t.params.loop)for(let o=s-e;o<=r+e;o+=1){const a=(o%n+n)%n;(a<s||a>r)&&bt(t,a)}else for(let o=Math.max(s-e,0);o<=Math.min(r+e,n-1);o+=1)o!==s&&(o>r||o<s)&&bt(t,o)};function Ws(t){const{slidesGrid:e,params:n}=t,i=t.rtlTranslate?t.translate:-t.translate;let s;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?s=r:i>=e[r]&&i<e[r+1]&&(s=r+1):i>=e[r]&&(s=r);return n.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function qs(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:o,snapIndex:a}=e;let l=t,d;const f=v=>{let p=v-e.virtual.slidesBefore;return p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),p};if(typeof l>"u"&&(l=Ws(e)),i.indexOf(n)>=0)d=i.indexOf(n);else{const v=Math.min(s.slidesPerGroupSkip,l);d=v+Math.floor((l-v)/s.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),l===r&&!e.params.loop){d!==a&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(l);return}const u=e.grid&&s.grid&&s.grid.rows>1;let g;if(e.virtual&&s.virtual.enabled&&s.loop)g=f(l);else if(u){const v=e.slides.filter(m=>m.column===l)[0];let p=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(p)&&(p=Math.max(e.slides.indexOf(v),0)),g=Math.floor(p/s.grid.rows)}else if(e.slides[l]){const v=e.slides[l].getAttribute("data-swiper-slide-index");v?g=parseInt(v,10):g=l}else g=l;Object.assign(e,{previousSnapIndex:a,snapIndex:d,previousRealIndex:o,realIndex:g,previousIndex:r,activeIndex:l}),e.initialized&&Nt(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==g&&e.emit("realIndexChange"),e.emit("slideChange"))}function Ks(t,e){const n=this,i=n.params;let s=t.closest(`.${i.slideClass}, swiper-slide`);!s&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!s&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(s=a)});let r=!1,o;if(s){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===s){r=!0,o=a;break}}if(s&&r)n.clickedSlide=s,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}i.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Xs={updateSize:Fs,updateSlides:zs,updateAutoHeight:Hs,updateSlidesOffset:Vs,updateSlidesProgress:js,updateProgress:$s,updateSlidesClasses:Gs,updateActiveIndex:qs,updateClickedSlide:Ks};function Js(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:i,translate:s,wrapperEl:r}=e;if(n.virtualTranslate)return i?-s:s;if(n.cssMode)return s;let o=Cs(r,t);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function Ys(t,e){const n=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:o}=n;let a=0,l=0;const d=0;n.isHorizontal()?a=i?-t:t:l=t,s.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,s.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:s.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),r.style.transform=`translate3d(${a}px, ${l}px, ${d}px)`);let f;const u=n.maxTranslate()-n.minTranslate();u===0?f=0:f=(t-n.minTranslate())/u,f!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function Qs(){return-this.snapGrid[0]}function Zs(){return-this.snapGrid[this.snapGrid.length-1]}function er(t,e,n,i,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),i===void 0&&(i=!0);const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),d=r.maxTranslate();let f;if(i&&t>l?f=l:i&&t<d?f=d:f=t,r.updateProgress(f),o.cssMode){const u=r.isHorizontal();if(e===0)a[u?"scrollLeft":"scrollTop"]=-f;else{if(!r.support.smoothScroll)return oi({swiper:r,targetPosition:-f,side:u?"left":"top"}),!0;a.scrollTo({[u?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(f),n&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(f),n&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(g){!r||r.destroyed||g.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var tr={getTranslate:Js,setTranslate:Ys,minTranslate:Qs,maxTranslate:Zs,translateTo:er};function nr(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function ci(t){let{swiper:e,runCallbacks:n,direction:i,step:s}=t;const{activeIndex:r,previousIndex:o}=e;let a=i;if(a||(r>o?a="next":r<o?a="prev":a="reset"),e.emit(`transition${s}`),n&&r!==o){if(a==="reset"){e.emit(`slideResetTransition${s}`);return}e.emit(`slideChangeTransition${s}`),a==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`)}}function ir(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),ci({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function sr(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;n.animating=!1,!i.cssMode&&(n.setTransition(0),ci({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var rr={setTransition:nr,transitionStart:ir,transitionEnd:sr};function or(t,e,n,i,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const r=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:d,previousIndex:f,activeIndex:u,rtlTranslate:g,wrapperEl:v,enabled:p}=r;if(r.animating&&a.preventInteractionOnTransition||!p&&!i&&!s||r.destroyed)return!1;const m=Math.min(r.params.slidesPerGroupSkip,o);let T=m+Math.floor((o-m)/r.params.slidesPerGroup);T>=l.length&&(T=l.length-1);const b=-l[T];if(a.normalizeSlideIndex)for(let A=0;A<d.length;A+=1){const P=-Math.floor(b*100),x=Math.floor(d[A]*100),E=Math.floor(d[A+1]*100);typeof d[A+1]<"u"?P>=x&&P<E-(E-x)/2?o=A:P>=x&&P<E&&(o=A+1):P>=x&&(o=A)}if(r.initialized&&o!==u&&(!r.allowSlideNext&&(g?b>r.translate&&b>r.minTranslate():b<r.translate&&b<r.minTranslate())||!r.allowSlidePrev&&b>r.translate&&b>r.maxTranslate()&&(u||0)!==o))return!1;o!==(f||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(b);let O;if(o>u?O="next":o<u?O="prev":O="reset",g&&-b===r.translate||!g&&b===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),a.effect!=="slide"&&r.setTranslate(b),O!=="reset"&&(r.transitionStart(n,O),r.transitionEnd(n,O)),!1;if(a.cssMode){const A=r.isHorizontal(),P=g?b:-b;if(e===0){const x=r.virtual&&r.params.virtual.enabled;x&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),x&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[A?"scrollLeft":"scrollTop"]=P})):v[A?"scrollLeft":"scrollTop"]=P,x&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return oi({swiper:r,targetPosition:P,side:A?"left":"top"}),!0;v.scrollTo({[A?"left":"top"]:P,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(b),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(n,O),e===0?r.transitionEnd(n,O):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(P){!r||r.destroyed||P.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,O))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function ar(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;if(s.destroyed)return;const r=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let a;if(r){const g=o*s.params.grid.rows;a=s.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===g)[0].column}else a=s.getSlideIndexByData(o);const l=r?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:d}=s.params;let f=s.params.slidesPerView;f==="auto"?f=s.slidesPerViewDynamic():(f=Math.ceil(parseFloat(s.params.slidesPerView,10)),d&&f%2===0&&(f=f+1));let u=l-a<f;if(d&&(u=u||a<Math.ceil(f/2)),u){const g=d?a<s.activeIndex?"prev":"next":a-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?a+1:a-l+1,slideRealIndex:g==="next"?s.realIndex:void 0})}if(r){const g=o*s.params.grid.rows;o=s.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===g)[0].column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,n,i)}),s}function lr(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const i=this,{enabled:s,params:r,animating:o}=i;if(!s||i.destroyed)return i;let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:a,d=i.virtual&&r.virtual.enabled;if(r.loop){if(o&&!d&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,t,e,n)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,t,e,n):i.slideTo(i.activeIndex+l,t,e,n)}function cr(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const i=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:d}=i;if(!l||i.destroyed)return i;const f=i.virtual&&s.virtual.enabled;if(s.loop){if(d&&!f&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const u=a?i.translate:-i.translate;function g(b){return b<0?-Math.floor(Math.abs(b)):Math.floor(b)}const v=g(u),p=r.map(b=>g(b));let m=r[p.indexOf(v)-1];if(typeof m>"u"&&s.cssMode){let b;r.forEach((O,A)=>{v>=O&&(b=A)}),typeof b<"u"&&(m=r[b>0?b-1:b])}let T=0;if(typeof m<"u"&&(T=o.indexOf(m),T<0&&(T=i.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(T=T-i.slidesPerViewDynamic("previous",!0)+1,T=Math.max(T,0))),s.rewind&&i.isBeginning){const b=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(b,t,e,n)}else if(s.loop&&i.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(T,t,e,n)}),!0;return i.slideTo(T,t,e,n)}function dr(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const i=this;if(!i.destroyed)return i.slideTo(i.activeIndex,t,e,n)}function ur(t,e,n,i){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),i===void 0&&(i=.5);const s=this;if(s.destroyed)return;let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const d=s.snapGrid[a],f=s.snapGrid[a+1];l-d>(f-d)*i&&(r+=s.params.slidesPerGroup)}else{const d=s.snapGrid[a-1],f=s.snapGrid[a];l-d<=(f-d)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,t,e,n)}function fr(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,i=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.clickedIndex,r;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;r=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<t.loopedSlides-i/2||s>t.slides.length-t.loopedSlides+i/2?(t.loopFix(),s=t.getSlideIndex(j(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),Mt(()=>{t.slideTo(s)})):t.slideTo(s):s>t.slides.length-i?(t.loopFix(),s=t.getSlideIndex(j(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),Mt(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var hr={slideTo:or,slideToLoop:ar,slideNext:lr,slidePrev:cr,slideReset:dr,slideToClosest:ur,slideToClickedSlide:fr};function pr(t){const e=this,{params:n,slidesEl:i}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const s=()=>{j(i,`.${n.slideClass}, swiper-slide`).forEach((u,g)=>{u.setAttribute("data-swiper-slide-index",g)})},r=e.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(r?n.grid.rows:1),a=e.slides.length%o!==0,l=r&&e.slides.length%n.grid.rows!==0,d=f=>{for(let u=0;u<f;u+=1){const g=e.isElement?et("swiper-slide",[n.slideBlankClass]):et("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(g)}};if(a){if(n.loopAddBlankSlides){const f=o-e.slides.length%o;d(f),e.recalcSlides(),e.updateSlides()}else Ze("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(l){if(n.loopAddBlankSlides){const f=n.grid.rows-e.slides.length%n.grid.rows;d(f),e.recalcSlides(),e.updateSlides()}else Ze("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function mr(t){let{slideRealIndex:e,slideTo:n=!0,direction:i,setTranslate:s,activeSlideIndex:r,byController:o,byMousewheel:a}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:d,allowSlidePrev:f,allowSlideNext:u,slidesEl:g,params:v}=l,{centeredSlides:p}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=f,l.allowSlideNext=u,l.emit("loopFix");return}let m=v.slidesPerView;m==="auto"?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(v.slidesPerView,10)),p&&m%2===0&&(m=m+1));const T=v.slidesPerGroupAuto?m:v.slidesPerGroup;let b=T;b%T!==0&&(b+=T-b%T),b+=v.loopAdditionalSlides,l.loopedSlides=b;const O=l.grid&&v.grid&&v.grid.rows>1;d.length<m+b?Ze("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):O&&v.grid.fill==="row"&&Ze("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const A=[],P=[];let x=l.activeIndex;typeof r>"u"?r=l.getSlideIndex(d.filter(I=>I.classList.contains(v.slideActiveClass))[0]):x=r;const E=i==="next"||!i,_=i==="prev"||!i;let c=0,h=0;const S=O?Math.ceil(d.length/v.grid.rows):d.length,w=(O?d[r].column:r)+(p&&typeof s>"u"?-m/2+.5:0);if(w<b){c=Math.max(b-w,T);for(let I=0;I<b-w;I+=1){const R=I-Math.floor(I/S)*S;if(O){const k=S-R-1;for(let V=d.length-1;V>=0;V-=1)d[V].column===k&&A.push(V)}else A.push(S-R-1)}}else if(w+m>S-b){h=Math.max(w-(S-b*2),T);for(let I=0;I<h;I+=1){const R=I-Math.floor(I/S)*S;O?d.forEach((k,V)=>{k.column===R&&P.push(V)}):P.push(R)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),_&&A.forEach(I=>{d[I].swiperLoopMoveDOM=!0,g.prepend(d[I]),d[I].swiperLoopMoveDOM=!1}),E&&P.forEach(I=>{d[I].swiperLoopMoveDOM=!0,g.append(d[I]),d[I].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():O&&(A.length>0&&_||P.length>0&&E)&&l.slides.forEach((I,R)=>{l.grid.updateSlide(R,I,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(A.length>0&&_){if(typeof e>"u"){const I=l.slidesGrid[x],k=l.slidesGrid[x+c]-I;a?l.setTranslate(l.translate-k):(l.slideTo(x+Math.ceil(c),0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-k,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-k))}else if(s){const I=O?A.length/v.grid.rows:A.length;l.slideTo(l.activeIndex+I,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(P.length>0&&E)if(typeof e>"u"){const I=l.slidesGrid[x],k=l.slidesGrid[x-h]-I;a?l.setTranslate(l.translate-k):(l.slideTo(x-h,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-k,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-k))}else{const I=O?P.length/v.grid.rows:P.length;l.slideTo(l.activeIndex-I,0,!1,!0)}}if(l.allowSlidePrev=f,l.allowSlideNext=u,l.controller&&l.controller.control&&!o){const I={slideRealIndex:e,direction:i,setTranslate:s,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...I,slideTo:R.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...I,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function gr(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const i=[];t.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;i[r]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),i.forEach(s=>{n.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var vr={loopCreate:pr,loopFix:mr,loopDestroy:gr};function wr(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function yr(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var br={setGrabCursor:wr,unsetGrabCursor:yr};function Sr(t,e){e===void 0&&(e=this);function n(i){if(!i||i===Se()||i===F())return null;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(t);return!s&&!i.getRootNode?null:s||n(i.getRootNode().host)}return n(e)}function bn(t,e,n){const i=F(),{params:s}=t,r=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return r&&(n<=o||n>=i.innerWidth-o)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function Er(t){const e=this,n=Se();let i=t;i.originalEvent&&(i=i.originalEvent);const s=e.touchEventsData;if(i.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==i.pointerId)return;s.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(s.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){bn(e,i,i.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:a}=e;if(!a||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=i.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in i&&i.which===3||"button"in i&&i.button>0||s.isTouched&&s.isMoved)return;const d=!!r.noSwipingClass&&r.noSwipingClass!=="",f=i.composedPath?i.composedPath():i.path;d&&i.target&&i.target.shadowRoot&&f&&(l=f[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,g=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(g?Sr(u,l):l.closest(u))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const v=o.currentX,p=o.currentY;if(!bn(e,i,v))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=p,s.touchStartTime=Qe(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let m=!0;l.matches(s.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const T=m&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||T)&&!l.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Tr(t){const e=Se(),n=this,i=n.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:a}=n;if(!a||!s.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let d;if(l.type==="touchmove"){if(d=[...l.changedTouches].filter(E=>E.identifier===i.touchId)[0],!d||d.identifier!==i.touchId)return}else d=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l);return}const f=d.pageX,u=d.pageY;if(l.preventedByNestedSwiper){r.startX=f,r.startY=u;return}if(!n.allowTouchMove){l.target.matches(i.focusableElements)||(n.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:f,startY:u,currentX:f,currentY:u}),i.touchStartTime=Qe());return}if(s.touchReleaseOnEdges&&!s.loop){if(n.isVertical()){if(u<r.startY&&n.translate<=n.maxTranslate()||u>r.startY&&n.translate>=n.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(f<r.startX&&n.translate<=n.maxTranslate()||f>r.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,n.allowClick=!1;return}i.allowTouchCallbacks&&n.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=f,r.currentY=u;const g=r.currentX-r.startX,v=r.currentY-r.startY;if(n.params.threshold&&Math.sqrt(g**2+v**2)<n.params.threshold)return;if(typeof i.isScrolling>"u"){let E;n.isHorizontal()&&r.currentY===r.startY||n.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:g*g+v*v>=25&&(E=Math.atan2(Math.abs(v),Math.abs(g))*180/Math.PI,i.isScrolling=n.isHorizontal()?E>s.touchAngle:90-E>s.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;n.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let p=n.isHorizontal()?g:v,m=n.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(p=Math.abs(p)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),r.diff=p,p*=s.touchRatio,o&&(p=-p,m=-m);const T=n.touchesDirection;n.swipeDirection=p>0?"prev":"next",n.touchesDirection=m>0?"prev":"next";const b=n.params.loop&&!s.cssMode,O=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!i.isMoved){if(b&&O&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const E=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(E)}i.allowMomentumBounce=!1,s.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let A;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&T!==n.touchesDirection&&b&&O&&Math.abs(p)>=1){Object.assign(r,{startX:f,startY:u,currentX:f,currentY:u,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=p+i.startTranslate;let P=!0,x=s.resistanceRatio;if(s.touchReleaseOnEdges&&(x=0),p>0?(b&&O&&!A&&i.allowThresholdMove&&i.currentTranslate>(s.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(P=!1,s.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+p)**x))):p<0&&(b&&O&&!A&&i.allowThresholdMove&&i.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(s.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(P=!1,s.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-p)**x))),P&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(i.currentTranslate=i.startTranslate),s.threshold>0)if(Math.abs(p)>s.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=n.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function _r(t){const e=this,n=e.touchEventsData;let i=t;i.originalEvent&&(i=i.originalEvent);let s;if(i.type==="touchend"||i.type==="touchcancel"){if(s=[...i.changedTouches].filter(x=>x.identifier===n.touchId)[0],!s||s.identifier!==n.touchId)return}else{if(n.touchId!==null||i.pointerId!==n.pointerId)return;s=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:d,enabled:f}=e;if(!f||!o.simulateTouch&&i.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",i),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=Qe(),g=u-n.touchStartTime;if(e.allowClick){const x=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(x&&x[0]||i.target,x),e.emit("tap click",i),g<300&&u-n.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(n.lastClickTime=Qe(),Mt(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(o.followFinger?v=l?e.translate:-e.translate:v=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:v});return}const p=v>=-e.maxTranslate()&&!e.params.loop;let m=0,T=e.slidesSizesGrid[0];for(let x=0;x<d.length;x+=x<o.slidesPerGroupSkip?1:o.slidesPerGroup){const E=x<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[x+E]<"u"?(p||v>=d[x]&&v<d[x+E])&&(m=x,T=d[x+E]-d[x]):(p||v>=d[x])&&(m=x,T=d[d.length-1]-d[d.length-2])}let b=null,O=null;o.rewind&&(e.isBeginning?O=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(b=0));const A=(v-d[m])/T,P=m<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(g>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(A>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?b:m+P):e.slideTo(m)),e.swipeDirection==="prev"&&(A>1-o.longSwipesRatio?e.slideTo(m+P):O!==null&&A<0&&Math.abs(A)>o.longSwipesRatio?e.slideTo(O):e.slideTo(m))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(m+P):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(b!==null?b:m+P),e.swipeDirection==="prev"&&e.slideTo(O!==null?O:m))}}function Sn(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=i,t.params.watchOverflow&&r!==t.snapGrid&&t.checkOverflow()}function Ir(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function Cr(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:i}=t;if(!i)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const r=t.maxTranslate()-t.minTranslate();r===0?s=0:s=(t.translate-t.minTranslate())/r,s!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Ar(t){const e=this;$e(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Or(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const di=(t,e)=>{const n=Se(),{params:i,el:s,wrapperEl:r,device:o}=t,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",d=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),s[l]("touchstart",t.onTouchStart,{passive:!1}),s[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[l]("click",t.onClick,!0),i.cssMode&&r[l]("scroll",t.onScroll),i.updateOnWindowResize?t[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Sn,!0):t[d]("observerUpdate",Sn,!0),s[l]("load",t.onLoad,{capture:!0})};function Pr(){const t=this,{params:e}=t;t.onTouchStart=Er.bind(t),t.onTouchMove=Tr.bind(t),t.onTouchEnd=_r.bind(t),t.onDocumentTouchStart=Or.bind(t),e.cssMode&&(t.onScroll=Cr.bind(t)),t.onClick=Ir.bind(t),t.onLoad=Ar.bind(t),di(t,"on")}function xr(){di(this,"off")}var Rr={attachEvents:Pr,detachEvents:xr};const En=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Lr(){const t=this,{realIndex:e,initialized:n,params:i,el:s}=t,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=t.getBreakpoint(r,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in r?r[o]:void 0)||t.originalParams,d=En(t,i),f=En(t,l),u=i.enabled;d&&!f?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),t.emitContainerClasses()):!d&&f&&(s.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&s.classList.add(`${i.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(b=>{if(typeof l[b]>"u")return;const O=i[b]&&i[b].enabled,A=l[b]&&l[b].enabled;O&&!A&&t[b].disable(),!O&&A&&t[b].enable()});const g=l.direction&&l.direction!==i.direction,v=i.loop&&(l.slidesPerView!==i.slidesPerView||g),p=i.loop;g&&n&&t.changeDirection(),U(t.params,l);const m=t.params.enabled,T=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),u&&!m?t.disable():!u&&m&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),n&&(v?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!p&&T?(t.loopCreate(e),t.updateSlides()):p&&!T&&t.loopDestroy()),t.emit("breakpoint",l)}function kr(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let i=!1;const s=F(),r=e==="window"?s.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:r*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:d}=o[a];e==="window"?s.matchMedia(`(min-width: ${d}px)`).matches&&(i=l):d<=n.clientWidth&&(i=l)}return i||"max"}var Mr={setBreakpoint:Lr,getBreakpoint:kr};function Nr(t,e){const n=[];return t.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(s=>{i[s]&&n.push(e+s)}):typeof i=="string"&&n.push(e+i)}),n}function Dr(){const t=this,{classNames:e,params:n,rtl:i,el:s,device:r}=t,o=Nr(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),s.classList.add(...e),t.emitContainerClasses()}function Br(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var Ur={addClasses:Dr,removeClasses:Br};function Fr(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:i}=n;if(i){const s=t.slides.length-1,r=t.slidesGrid[s]+t.slidesSizesGrid[s]+i*2;t.isLocked=t.size>r}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var zr={checkOverflow:Fr},Tn={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Hr(t,e){return function(i){i===void 0&&(i={});const s=Object.keys(i)[0],r=i[s];if(typeof r!="object"||r===null){U(e,i);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in r)){U(e,i);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),U(e,i)}}const St={eventsEmitter:Us,update:Xs,translate:tr,transition:rr,slide:hr,loop:vr,grabCursor:br,events:Rr,breakpoints:Mr,checkOverflow:zr,classes:Ur},Et={};class H{constructor(){let e,n;for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?n=s[0]:[e,n]=s,n||(n={}),n=U({},n),e&&!n.el&&(n.el=e);const o=Se();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const f=[];return o.querySelectorAll(n.el).forEach(u=>{const g=U({},n,{el:u});f.push(new H(g))}),f}const a=this;a.__swiper__=!0,a.support=ai(),a.device=li({userAgent:n.userAgent}),a.browser=Ns(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(f=>{f({params:n,swiper:a,extendParams:Hr(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const d=U({},Tn,l);return a.params=U({},d,Et,n),a.originalParams=U({},a.params),a.passedParams=U({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(f=>{a.on(f,a.params.on[f])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:i}=this,s=j(n,`.${i.slideClass}, swiper-slide`),r=wn(s[0]);return wn(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:i}=e;e.slides=j(n,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const i=this;e=Math.min(Math.max(e,0),1);const s=i.minTranslate(),o=(i.maxTranslate()-s)*e+s;i.translateTo(o,typeof n>"u"?0:n),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(i=>{const s=e.getSlideClasses(i);n.push({slideEl:i,classNames:s}),e.emit("_slideClass",i,s)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const i=this,{params:s,slides:r,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:d}=i;let f=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let u=r[d]?Math.ceil(r[d].swiperSlideSize):0,g;for(let v=d+1;v<r.length;v+=1)r[v]&&!g&&(u+=Math.ceil(r[v].swiperSlideSize),f+=1,u>l&&(g=!0));for(let v=d-1;v>=0;v-=1)r[v]&&!g&&(u+=r[v].swiperSlideSize,f+=1,u>l&&(g=!0))}else if(e==="current")for(let u=d+1;u<r.length;u+=1)(n?o[u]+a[u]-o[d]<l:o[u]-o[d]<l)&&(f+=1);else for(let u=d-1;u>=0;u-=1)o[d]-o[u]<l&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&$e(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)s(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(o.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||s()}i.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const i=this,s=i.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${s}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),n&&i.update()),i}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let i=e||n.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=n,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const s=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(s()):j(i,s())[0])();return!o&&n.params.createElements&&(o=et("div",n.params.wrapperClass),i.append(o),j(i,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:i,wrapperEl:o,slidesEl:n.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:n.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||oe(i,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||oe(i,"direction")==="rtl"),wrongRTL:oe(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const s=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(r=>{r.complete?$e(n,r):r.addEventListener("load",o=>{$e(n,o.target)})}),Nt(n),n.initialized=!0,Nt(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const i=this,{params:s,el:r,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),n&&(i.removeClasses(),r.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el.swiper=null,_s(i)),i.destroyed=!0),null}static extendDefaults(e){U(Et,e)}static get extendedDefaults(){return Et}static get defaults(){return Tn}static installModule(e){H.prototype.__modules__||(H.prototype.__modules__=[]);const n=H.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>H.installModule(n)),H):(H.installModule(e),H)}}Object.keys(St).forEach(t=>{Object.keys(St[t]).forEach(e=>{H.prototype[e]=St[t][e]})});H.use([Ds,Bs]);function ui(t,e){return function(){return t.apply(e,arguments)}}const{toString:Vr}=Object.prototype,{getPrototypeOf:Xt}=Object,ct=(t=>e=>{const n=Vr.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),q=t=>(t=t.toLowerCase(),e=>ct(e)===t),dt=t=>e=>typeof e===t,{isArray:Ee}=Array,Ae=dt("undefined");function jr(t){return t!==null&&!Ae(t)&&t.constructor!==null&&!Ae(t.constructor)&&z(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const fi=q("ArrayBuffer");function $r(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&fi(t.buffer),e}const Gr=dt("string"),z=dt("function"),hi=dt("number"),ut=t=>t!==null&&typeof t=="object",Wr=t=>t===!0||t===!1,Ge=t=>{if(ct(t)!=="object")return!1;const e=Xt(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},qr=q("Date"),Kr=q("File"),Xr=q("Blob"),Jr=q("FileList"),Yr=t=>ut(t)&&z(t.pipe),Qr=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||z(t.append)&&((e=ct(t))==="formdata"||e==="object"&&z(t.toString)&&t.toString()==="[object FormData]"))},Zr=q("URLSearchParams"),eo=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Le(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Ee(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function pi(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const mi=t=>!Ae(t)&&t!=={};function Dt(){const{caseless:t}=mi(this)&&this||{},e={},n=(i,s)=>{const r=t&&pi(e,s)||s;Ge(e[r])&&Ge(i)?e[r]=Dt(e[r],i):Ge(i)?e[r]=Dt({},i):Ee(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Le(arguments[i],n);return e}const to=(t,e,n,{allOwnKeys:i}={})=>(Le(e,(s,r)=>{n&&z(s)?t[r]=ui(s,n):t[r]=s},{allOwnKeys:i}),t),no=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),io=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},so=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Xt(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ro=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},oo=t=>{if(!t)return null;if(Ee(t))return t;let e=t.length;if(!hi(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},ao=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Xt(Uint8Array)),lo=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},co=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},uo=q("HTMLFormElement"),fo=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),_n=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ho=q("RegExp"),gi=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Le(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},po=t=>{gi(t,(e,n)=>{if(z(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(z(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mo=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Ee(t)?i(t):i(String(t).split(e)),n},go=()=>{},vo=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Tt="abcdefghijklmnopqrstuvwxyz",In="0123456789",vi={DIGIT:In,ALPHA:Tt,ALPHA_DIGIT:Tt+Tt.toUpperCase()+In},wo=(t=16,e=vi.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function yo(t){return!!(t&&z(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const bo=t=>{const e=new Array(10),n=(i,s)=>{if(ut(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=Ee(i)?[]:{};return Le(i,(o,a)=>{const l=n(o,s+1);!Ae(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return n(t,0)},So=q("AsyncFunction"),Eo=t=>t&&(ut(t)||z(t))&&z(t.then)&&z(t.catch),y={isArray:Ee,isArrayBuffer:fi,isBuffer:jr,isFormData:Qr,isArrayBufferView:$r,isString:Gr,isNumber:hi,isBoolean:Wr,isObject:ut,isPlainObject:Ge,isUndefined:Ae,isDate:qr,isFile:Kr,isBlob:Xr,isRegExp:ho,isFunction:z,isStream:Yr,isURLSearchParams:Zr,isTypedArray:ao,isFileList:Jr,forEach:Le,merge:Dt,extend:to,trim:eo,stripBOM:no,inherits:io,toFlatObject:so,kindOf:ct,kindOfTest:q,endsWith:ro,toArray:oo,forEachEntry:lo,matchAll:co,isHTMLForm:uo,hasOwnProperty:_n,hasOwnProp:_n,reduceDescriptors:gi,freezeMethods:po,toObjectSet:mo,toCamelCase:fo,noop:go,toFiniteNumber:vo,findKey:pi,global:{},isContextDefined:mi,ALPHABET:vi,generateString:wo,isSpecCompliantForm:yo,toJSONObject:bo,isAsyncFn:So,isThenable:Eo};function M(t,e,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s)}y.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wi=M.prototype,yi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{yi[t]={value:t}});Object.defineProperties(M,yi);Object.defineProperty(wi,"isAxiosError",{value:!0});M.from=(t,e,n,i,s,r)=>{const o=Object.create(wi);return y.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),M.call(o,t.message,e,n,i,s),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};const To=null;function Bt(t){return y.isPlainObject(t)||y.isArray(t)}function bi(t){return y.endsWith(t,"[]")?t.slice(0,-2):t}function Cn(t,e,n){return t?t.concat(e).map(function(s,r){return s=bi(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function _o(t){return y.isArray(t)&&!t.some(Bt)}const Io=y.toFlatObject(y,{},null,function(e){return/^is[A-Z]/.test(e)});function ft(t,e,n){if(!y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,T){return!y.isUndefined(T[m])});const i=n.metaTokens,s=n.visitor||f,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(e);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(y.isDate(p))return p.toISOString();if(!l&&y.isBlob(p))throw new M("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(p)||y.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function f(p,m,T){let b=p;if(p&&!T&&typeof p=="object"){if(y.endsWith(m,"{}"))m=i?m:m.slice(0,-2),p=JSON.stringify(p);else if(y.isArray(p)&&_o(p)||(y.isFileList(p)||y.endsWith(m,"[]"))&&(b=y.toArray(p)))return m=bi(m),b.forEach(function(A,P){!(y.isUndefined(A)||A===null)&&e.append(o===!0?Cn([m],P,r):o===null?m:m+"[]",d(A))}),!1}return Bt(p)?!0:(e.append(Cn(T,m,r),d(p)),!1)}const u=[],g=Object.assign(Io,{defaultVisitor:f,convertValue:d,isVisitable:Bt});function v(p,m){if(!y.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));u.push(p),y.forEach(p,function(b,O){(!(y.isUndefined(b)||b===null)&&s.call(e,b,y.isString(O)?O.trim():O,m,g))===!0&&v(b,m?m.concat(O):[O])}),u.pop()}}if(!y.isObject(t))throw new TypeError("data must be an object");return v(t),e}function An(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Jt(t,e){this._pairs=[],t&&ft(t,this,e)}const Si=Jt.prototype;Si.append=function(e,n){this._pairs.push([e,n])};Si.toString=function(e){const n=e?function(i){return e.call(this,i,An)}:An;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Co(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ei(t,e,n){if(!e)return t;const i=n&&n.encode||Co,s=n&&n.serialize;let r;if(s?r=s(e,n):r=y.isURLSearchParams(e)?e.toString():new Jt(e,n).toString(i),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class Ao{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){y.forEach(this.handlers,function(i){i!==null&&e(i)})}}const On=Ao,Ti={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Oo=typeof URLSearchParams<"u"?URLSearchParams:Jt,Po=typeof FormData<"u"?FormData:null,xo=typeof Blob<"u"?Blob:null,Ro={isBrowser:!0,classes:{URLSearchParams:Oo,FormData:Po,Blob:xo},protocols:["http","https","file","blob","url","data"]},_i=typeof window<"u"&&typeof document<"u",Lo=(t=>_i&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),ko=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Mo=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_i,hasStandardBrowserEnv:Lo,hasStandardBrowserWebWorkerEnv:ko},Symbol.toStringTag,{value:"Module"})),$={...Mo,...Ro};function No(t,e){return ft(t,new $.classes.URLSearchParams,Object.assign({visitor:function(n,i,s,r){return $.isNode&&y.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Do(t){return y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Bo(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Ii(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&y.isArray(s)?s.length:o,l?(y.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!y.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&y.isArray(s[o])&&(s[o]=Bo(s[o])),!a)}if(y.isFormData(t)&&y.isFunction(t.entries)){const n={};return y.forEachEntry(t,(i,s)=>{e(Do(i),s,n,0)}),n}return null}function Uo(t,e,n){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Yt={transitional:Ti,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=y.isObject(e);if(r&&y.isHTMLForm(e)&&(e=new FormData(e)),y.isFormData(e))return s?JSON.stringify(Ii(e)):e;if(y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return No(e,this.formSerializer).toString();if((a=y.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ft(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),Uo(e)):e}],transformResponse:[function(e){const n=this.transitional||Yt.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&y.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?M.from(a,M.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$.classes.FormData,Blob:$.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch"],t=>{Yt.headers[t]={}});const Qt=Yt,Fo=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zo=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&Fo[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Pn=Symbol("internals");function Ie(t){return t&&String(t).trim().toLowerCase()}function We(t){return t===!1||t==null?t:y.isArray(t)?t.map(We):String(t)}function Ho(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Vo=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function _t(t,e,n,i,s){if(y.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!y.isString(e)){if(y.isString(i))return e.indexOf(i)!==-1;if(y.isRegExp(i))return i.test(e)}}function jo(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function $o(t,e){const n=y.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}class ht{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,d){const f=Ie(l);if(!f)throw new Error("header name must be a non-empty string");const u=y.findKey(s,f);(!u||s[u]===void 0||d===!0||d===void 0&&s[u]!==!1)&&(s[u||l]=We(a))}const o=(a,l)=>y.forEach(a,(d,f)=>r(d,f,l));return y.isPlainObject(e)||e instanceof this.constructor?o(e,n):y.isString(e)&&(e=e.trim())&&!Vo(e)?o(zo(e),n):e!=null&&r(n,e,i),this}get(e,n){if(e=Ie(e),e){const i=y.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return Ho(s);if(y.isFunction(n))return n.call(this,s,i);if(y.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ie(e),e){const i=y.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||_t(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Ie(o),o){const a=y.findKey(i,o);a&&(!n||_t(i,i[a],a,n))&&(delete i[a],s=!0)}}return y.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||_t(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return y.forEach(this,(s,r)=>{const o=y.findKey(i,r);if(o){n[o]=We(s),delete n[r];return}const a=e?jo(r):String(r).trim();a!==r&&delete n[r],n[a]=We(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return y.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&y.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Pn]=this[Pn]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Ie(o);i[a]||($o(s,o),i[a]=!0)}return y.isArray(e)?e.forEach(r):r(e),this}}ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(ht.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});y.freezeMethods(ht);const Y=ht;function It(t,e){const n=this||Qt,i=e||n,s=Y.from(i.headers);let r=i.data;return y.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Ci(t){return!!(t&&t.__CANCEL__)}function ke(t,e,n){M.call(this,t??"canceled",M.ERR_CANCELED,e,n),this.name="CanceledError"}y.inherits(ke,M,{__CANCEL__:!0});function Go(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wo=$.hasStandardBrowserEnv?{write(t,e,n,i,s,r){const o=[t+"="+encodeURIComponent(e)];y.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),y.isString(i)&&o.push("path="+i),y.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function qo(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ko(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ai(t,e){return t&&!qo(e)?Ko(t,e):e}const Xo=$.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function s(r){let o=r;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=s(window.location.href),function(o){const a=y.isString(o)?s(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Jo(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Yo(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const d=Date.now(),f=i[r];o||(o=d),n[s]=l,i[s]=d;let u=r,g=0;for(;u!==s;)g+=n[u++],u=u%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),d-o<e)return;const v=f&&d-f;return v?Math.round(g*1e3/v):void 0}}function xn(t,e){let n=0;const i=Yo(50,250);return s=>{const r=s.loaded,o=s.lengthComputable?s.total:void 0,a=r-n,l=i(a),d=r<=o;n=r;const f={loaded:r,total:o,progress:o?r/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&d?(o-r)/l:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const Qo=typeof XMLHttpRequest<"u",Zo=Qo&&function(t){return new Promise(function(n,i){let s=t.data;const r=Y.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function d(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let f;if(y.isFormData(s)){if($.hasStandardBrowserEnv||$.hasStandardBrowserWebWorkerEnv)r.setContentType(!1);else if((f=r.getContentType())!==!1){const[m,...T]=f?f.split(";").map(b=>b.trim()).filter(Boolean):[];r.setContentType([m||"multipart/form-data",...T].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",T=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(m+":"+T))}const g=Ai(t.baseURL,t.url);u.open(t.method.toUpperCase(),Ei(g,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function v(){if(!u)return;const m=Y.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:t,request:u};Go(function(A){n(A),d()},function(A){i(A),d()},b),u=null}if("onloadend"in u?u.onloadend=v:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(v)},u.onabort=function(){u&&(i(new M("Request aborted",M.ECONNABORTED,t,u)),u=null)},u.onerror=function(){i(new M("Network Error",M.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let T=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const b=t.transitional||Ti;t.timeoutErrorMessage&&(T=t.timeoutErrorMessage),i(new M(T,b.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,t,u)),u=null},$.hasStandardBrowserEnv&&(a&&y.isFunction(a)&&(a=a(t)),a||a!==!1&&Xo(g))){const m=t.xsrfHeaderName&&t.xsrfCookieName&&Wo.read(t.xsrfCookieName);m&&r.set(t.xsrfHeaderName,m)}s===void 0&&r.setContentType(null),"setRequestHeader"in u&&y.forEach(r.toJSON(),function(T,b){u.setRequestHeader(b,T)}),y.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",xn(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",xn(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=m=>{u&&(i(!m||m.type?new ke(null,t,u):m),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const p=Jo(g);if(p&&$.protocols.indexOf(p)===-1){i(new M("Unsupported protocol "+p+":",M.ERR_BAD_REQUEST,t));return}u.send(s||null)})},Ut={http:To,xhr:Zo};y.forEach(Ut,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Rn=t=>`- ${t}`,ea=t=>y.isFunction(t)||t===null||t===!1,Oi={getAdapter:t=>{t=y.isArray(t)?t:[t];const{length:e}=t;let n,i;const s={};for(let r=0;r<e;r++){n=t[r];let o;if(i=n,!ea(n)&&(i=Ut[(o=String(n)).toLowerCase()],i===void 0))throw new M(`Unknown adapter '${o}'`);if(i)break;s[o||"#"+r]=i}if(!i){const r=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(Rn).join(`
`):" "+Rn(r[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Ut};function Ct(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ke(null,t)}function Ln(t){return Ct(t),t.headers=Y.from(t.headers),t.data=It.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Oi.getAdapter(t.adapter||Qt.adapter)(t).then(function(i){return Ct(t),i.data=It.call(t,t.transformResponse,i),i.headers=Y.from(i.headers),i},function(i){return Ci(i)||(Ct(t),i&&i.response&&(i.response.data=It.call(t,t.transformResponse,i.response),i.response.headers=Y.from(i.response.headers))),Promise.reject(i)})}const kn=t=>t instanceof Y?t.toJSON():t;function we(t,e){e=e||{};const n={};function i(d,f,u){return y.isPlainObject(d)&&y.isPlainObject(f)?y.merge.call({caseless:u},d,f):y.isPlainObject(f)?y.merge({},f):y.isArray(f)?f.slice():f}function s(d,f,u){if(y.isUndefined(f)){if(!y.isUndefined(d))return i(void 0,d,u)}else return i(d,f,u)}function r(d,f){if(!y.isUndefined(f))return i(void 0,f)}function o(d,f){if(y.isUndefined(f)){if(!y.isUndefined(d))return i(void 0,d)}else return i(void 0,f)}function a(d,f,u){if(u in e)return i(d,f);if(u in t)return i(void 0,d)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(d,f)=>s(kn(d),kn(f),!0)};return y.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=l[f]||s,g=u(t[f],e[f],f);y.isUndefined(g)&&u!==a||(n[f]=g)}),n}const Pi="1.6.7",Zt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Zt[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Mn={};Zt.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Pi+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new M(s(o," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!Mn[o]&&(Mn[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};function ta(t,e,n){if(typeof t!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new M("option "+r+" must be "+l,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+r,M.ERR_BAD_OPTION)}}const Ft={assertOptions:ta,validators:Zt},ee=Ft.validators;class tt{constructor(e){this.defaults=e,this.interceptors={request:new On,response:new On}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=we(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Ft.assertOptions(i,{silentJSONParsing:ee.transitional(ee.boolean),forcedJSONParsing:ee.transitional(ee.boolean),clarifyTimeoutError:ee.transitional(ee.boolean)},!1),s!=null&&(y.isFunction(s)?n.paramsSerializer={serialize:s}:Ft.assertOptions(s,{encode:ee.function,serialize:ee.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&y.merge(r.common,r[n.method]);r&&y.forEach(["delete","get","head","post","put","patch","common"],p=>{delete r[p]}),n.headers=Y.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const d=[];this.interceptors.response.forEach(function(m){d.push(m.fulfilled,m.rejected)});let f,u=0,g;if(!l){const p=[Ln.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,d),g=p.length,f=Promise.resolve(n);u<g;)f=f.then(p[u++],p[u++]);return f}g=a.length;let v=n;for(u=0;u<g;){const p=a[u++],m=a[u++];try{v=p(v)}catch(T){m.call(this,T);break}}try{f=Ln.call(this,v)}catch(p){return Promise.reject(p)}for(u=0,g=d.length;u<g;)f=f.then(d[u++],d[u++]);return f}getUri(e){e=we(this.defaults,e);const n=Ai(e.baseURL,e.url);return Ei(n,e.params,e.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(e){tt.prototype[e]=function(n,i){return this.request(we(i||{},{method:e,url:n,data:(i||{}).data}))}});y.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(we(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}tt.prototype[e]=n(),tt.prototype[e+"Form"]=n(!0)});const qe=tt;class en{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new ke(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new en(function(s){e=s}),cancel:e}}}const na=en;function ia(t){return function(n){return t.apply(null,n)}}function sa(t){return y.isObject(t)&&t.isAxiosError===!0}const zt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zt).forEach(([t,e])=>{zt[e]=t});const ra=zt;function xi(t){const e=new qe(t),n=ui(qe.prototype.request,e);return y.extend(n,qe.prototype,e,{allOwnKeys:!0}),y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return xi(we(t,s))},n}const D=xi(Qt);D.Axios=qe;D.CanceledError=ke;D.CancelToken=na;D.isCancel=Ci;D.VERSION=Pi;D.toFormData=ft;D.AxiosError=M;D.Cancel=D.CanceledError;D.all=function(e){return Promise.all(e)};D.spread=ia;D.isAxiosError=sa;D.mergeConfig=we;D.AxiosHeaders=Y;D.formToJSON=t=>Ii(y.isHTMLForm(t)?new FormData(t):t);D.getAdapter=Oi.getAdapter;D.HttpStatusCode=ra;D.default=D;const Vd=D;var Ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ri={exports:{}};(function(t,e){(function(n,i){t.exports=i(n)})(typeof Ve<"u"?Ve:window||Ve.window||Ve.global,function(n){var i={},s="iziToast";document.querySelector("body");var r=!!/Mobi/.test(navigator.userAgent),o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),a=typeof InstallTrigger<"u",l="ontouchstart"in document.documentElement,d=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],f={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},u=568,g={};i.children={};var v={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var p=function(E,_){_=_||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(E,_.bubbles,_.cancelable,_.detail),c};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(E,_,c){if(Object.prototype.toString.call(E)==="[object Object]")for(var h in E)Object.prototype.hasOwnProperty.call(E,h)&&_.call(c,E[h],h,E);else if(E)for(var S=0,C=E.length;S<C;S++)_.call(c,E[S],S,E)},T=function(E,_){var c={};return m(E,function(h,S){c[S]=E[S]}),m(_,function(h,S){c[S]=_[S]}),c},b=function(E){var _=document.createDocumentFragment(),c=document.createElement("div");for(c.innerHTML=E;c.firstChild;)_.appendChild(c.firstChild);return _},O=function(E){var _=btoa(encodeURIComponent(E));return _.replace(/=/g,"")},A=function(E){return E.substring(0,1)=="#"||E.substring(0,3)=="rgb"||E.substring(0,3)=="hsl"},P=function(E){try{return btoa(atob(E))==E}catch{return!1}},x=function(){return{move:function(E,_,c,h){var S,C=.3,w=180;h!==0&&(E.classList.add(s+"-dragged"),E.style.transform="translateX("+h+"px)",h>0?(S=(w-h)/w,S<C&&_.hide(T(c,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),E,"drag")):(S=(w+h)/w,S<C&&_.hide(T(c,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),E,"drag")),E.style.opacity=S,S<C&&((o||a)&&(E.style.left=h+"px"),E.parentNode.style.opacity=C,this.stopMoving(E,null)))},startMoving:function(E,_,c,h){h=h||window.event;var S=l?h.touches[0].clientX:h.clientX,C=E.style.transform.replace("px)","");C=C.replace("translateX(","");var w=S-C;c.transitionIn&&E.classList.remove(c.transitionIn),c.transitionInMobile&&E.classList.remove(c.transitionInMobile),E.style.transition="",l?document.ontouchmove=function(I){I.preventDefault(),I=I||window.event;var R=I.touches[0].clientX,k=R-w;x.move(E,_,c,k)}:document.onmousemove=function(I){I.preventDefault(),I=I||window.event;var R=I.clientX,k=R-w;x.move(E,_,c,k)}},stopMoving:function(E,_){l?document.ontouchmove=function(){}:document.onmousemove=function(){},E.style.opacity="",E.style.transform="",E.classList.contains(s+"-dragged")&&(E.classList.remove(s+"-dragged"),E.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){E.style.transition=""},400))}}}();return i.setSetting=function(E,_,c){i.children[E][_]=c},i.getSetting=function(E,_){return i.children[E][_]},i.destroy=function(){m(document.querySelectorAll("."+s+"-overlay"),function(E,_){E.remove()}),m(document.querySelectorAll("."+s+"-wrapper"),function(E,_){E.remove()}),m(document.querySelectorAll("."+s),function(E,_){E.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),g={}},i.settings=function(E){i.destroy(),g=E,v=T(v,E||{})},m(f,function(E,_){i[_]=function(c){var h=T(g,c||{});h=T(E,h||{}),this.show(h)}}),i.progress=function(E,_,c){var h=this,S=_.getAttribute("data-iziToast-ref"),C=T(this.children[S],E||{}),w=_.querySelector("."+s+"-progressbar div");return{start:function(){typeof C.time.REMAINING>"u"&&(_.classList.remove(s+"-reseted"),w!==null&&(w.style.transition="width "+C.timeout+"ms "+C.progressBarEasing,w.style.width="0%"),C.time.START=new Date().getTime(),C.time.END=C.time.START+C.timeout,C.time.TIMER=setTimeout(function(){clearTimeout(C.time.TIMER),_.classList.contains(s+"-closing")||(h.hide(C,_,"timeout"),typeof c=="function"&&c.apply(h))},C.timeout),h.setSetting(S,"time",C.time))},pause:function(){if(typeof C.time.START<"u"&&!_.classList.contains(s+"-paused")&&!_.classList.contains(s+"-reseted")){if(_.classList.add(s+"-paused"),C.time.REMAINING=C.time.END-new Date().getTime(),clearTimeout(C.time.TIMER),h.setSetting(S,"time",C.time),w!==null){var I=window.getComputedStyle(w),R=I.getPropertyValue("width");w.style.transition="none",w.style.width=R}typeof c=="function"&&setTimeout(function(){c.apply(h)},10)}},resume:function(){typeof C.time.REMAINING<"u"?(_.classList.remove(s+"-paused"),w!==null&&(w.style.transition="width "+C.time.REMAINING+"ms "+C.progressBarEasing,w.style.width="0%"),C.time.END=new Date().getTime()+C.time.REMAINING,C.time.TIMER=setTimeout(function(){clearTimeout(C.time.TIMER),_.classList.contains(s+"-closing")||(h.hide(C,_,"timeout"),typeof c=="function"&&c.apply(h))},C.time.REMAINING),h.setSetting(S,"time",C.time)):this.start()},reset:function(){clearTimeout(C.time.TIMER),delete C.time.REMAINING,h.setSetting(S,"time",C.time),_.classList.add(s+"-reseted"),_.classList.remove(s+"-paused"),w!==null&&(w.style.transition="none",w.style.width="100%"),typeof c=="function"&&setTimeout(function(){c.apply(h)},10)}}},i.hide=function(E,_,c){typeof _!="object"&&(_=document.querySelector(_));var h=this,S=T(this.children[_.getAttribute("data-iziToast-ref")],E||{});S.closedBy=c||null,delete S.time.REMAINING,_.classList.add(s+"-closing"),function(){var I=document.querySelector("."+s+"-overlay");if(I!==null){var R=I.getAttribute("data-iziToast-ref");R=R.split(",");var k=R.indexOf(String(S.ref));k!==-1&&R.splice(k,1),I.setAttribute("data-iziToast-ref",R.join()),R.length===0&&(I.classList.remove("fadeIn"),I.classList.add("fadeOut"),setTimeout(function(){I.remove()},700))}}(),S.transitionIn&&_.classList.remove(S.transitionIn),S.transitionInMobile&&_.classList.remove(S.transitionInMobile),r||window.innerWidth<=u?S.transitionOutMobile&&_.classList.add(S.transitionOutMobile):S.transitionOut&&_.classList.add(S.transitionOut);var C=_.parentNode.offsetHeight;_.parentNode.style.height=C+"px",_.style.pointerEvents="none",(!r||window.innerWidth>u)&&(_.parentNode.style.transitionDelay="0.2s");try{var w=new CustomEvent(s+"-closing",{detail:S,bubbles:!0,cancelable:!0});document.dispatchEvent(w)}catch(I){console.warn(I)}setTimeout(function(){_.parentNode.style.height="0px",_.parentNode.style.overflow="",setTimeout(function(){delete h.children[S.ref],_.parentNode.remove();try{var I=new CustomEvent(s+"-closed",{detail:S,bubbles:!0,cancelable:!0});document.dispatchEvent(I)}catch(R){console.warn(R)}typeof S.onClosed<"u"&&S.onClosed.apply(null,[S,_,c])},1e3)},200),typeof S.onClosing<"u"&&S.onClosing.apply(null,[S,_,c])},i.show=function(E){var _=this,c=T(g,E||{});if(c=T(v,c),c.time={},c.id===null&&(c.id=O(c.title+c.message+c.color)),c.displayMode===1||c.displayMode=="once")try{if(document.querySelectorAll("."+s+"#"+c.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+c.id+". Try to set an valid id.")}if(c.displayMode===2||c.displayMode=="replace")try{m(document.querySelectorAll("."+s+"#"+c.id),function(w,I){_.hide(c,w,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+c.id+". Try to set an valid id.")}c.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),i.children[c.ref]=c;var h={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:c.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};h.toast.setAttribute("data-iziToast-ref",c.ref),h.toast.appendChild(h.toastBody),h.toastCapsule.appendChild(h.toast),function(){if(h.toast.classList.add(s),h.toast.classList.add(s+"-opening"),h.toastCapsule.classList.add(s+"-capsule"),h.toastBody.classList.add(s+"-body"),h.toastTexts.classList.add(s+"-texts"),r||window.innerWidth<=u?c.transitionInMobile&&h.toast.classList.add(c.transitionInMobile):c.transitionIn&&h.toast.classList.add(c.transitionIn),c.class){var w=c.class.split(" ");m(w,function(I,R){h.toast.classList.add(I)})}c.id&&(h.toast.id=c.id),c.rtl&&(h.toast.classList.add(s+"-rtl"),h.toast.setAttribute("dir","rtl")),c.layout>1&&h.toast.classList.add(s+"-layout"+c.layout),c.balloon&&h.toast.classList.add(s+"-balloon"),c.maxWidth&&(isNaN(c.maxWidth)?h.toast.style.maxWidth=c.maxWidth:h.toast.style.maxWidth=c.maxWidth+"px"),(c.theme!==""||c.theme!=="light")&&h.toast.classList.add(s+"-theme-"+c.theme),c.color&&(A(c.color)?h.toast.style.background=c.color:h.toast.classList.add(s+"-color-"+c.color)),c.backgroundColor&&(h.toast.style.background=c.backgroundColor,c.balloon&&(h.toast.style.borderColor=c.backgroundColor))}(),function(){c.image&&(h.cover.classList.add(s+"-cover"),h.cover.style.width=c.imageWidth+"px",P(c.image.replace(/ /g,""))?h.cover.style.backgroundImage="url(data:image/png;base64,"+c.image.replace(/ /g,"")+")":h.cover.style.backgroundImage="url("+c.image+")",c.rtl?h.toastBody.style.marginRight=c.imageWidth+10+"px":h.toastBody.style.marginLeft=c.imageWidth+10+"px",h.toast.appendChild(h.cover))}(),function(){c.close?(h.buttonClose=document.createElement("button"),h.buttonClose.type="button",h.buttonClose.classList.add(s+"-close"),h.buttonClose.addEventListener("click",function(w){w.target,_.hide(c,h.toast,"button")}),h.toast.appendChild(h.buttonClose)):c.rtl?h.toast.style.paddingLeft="18px":h.toast.style.paddingRight="18px"}(),function(){c.progressBar&&(h.progressBar=document.createElement("div"),h.progressBarDiv=document.createElement("div"),h.progressBar.classList.add(s+"-progressbar"),h.progressBarDiv.style.background=c.progressBarColor,h.progressBar.appendChild(h.progressBarDiv),h.toast.appendChild(h.progressBar)),c.timeout&&(c.pauseOnHover&&!c.resetOnHover&&(h.toast.addEventListener("mouseenter",function(w){_.progress(c,h.toast).pause()}),h.toast.addEventListener("mouseleave",function(w){_.progress(c,h.toast).resume()})),c.resetOnHover&&(h.toast.addEventListener("mouseenter",function(w){_.progress(c,h.toast).reset()}),h.toast.addEventListener("mouseleave",function(w){_.progress(c,h.toast).start()})))}(),function(){c.iconUrl?(h.icon.setAttribute("class",s+"-icon"),h.icon.setAttribute("src",c.iconUrl)):c.icon&&(h.icon.setAttribute("class",s+"-icon "+c.icon),c.iconText&&h.icon.appendChild(document.createTextNode(c.iconText)),c.iconColor&&(h.icon.style.color=c.iconColor)),(c.icon||c.iconUrl)&&(c.rtl?h.toastBody.style.paddingRight="33px":h.toastBody.style.paddingLeft="33px",h.toastBody.appendChild(h.icon))}(),function(){c.title.length>0&&(h.strong=document.createElement("strong"),h.strong.classList.add(s+"-title"),h.strong.appendChild(b(c.title)),h.toastTexts.appendChild(h.strong),c.titleColor&&(h.strong.style.color=c.titleColor),c.titleSize&&(isNaN(c.titleSize)?h.strong.style.fontSize=c.titleSize:h.strong.style.fontSize=c.titleSize+"px"),c.titleLineHeight&&(isNaN(c.titleSize)?h.strong.style.lineHeight=c.titleLineHeight:h.strong.style.lineHeight=c.titleLineHeight+"px")),c.message.length>0&&(h.p=document.createElement("p"),h.p.classList.add(s+"-message"),h.p.appendChild(b(c.message)),h.toastTexts.appendChild(h.p),c.messageColor&&(h.p.style.color=c.messageColor),c.messageSize&&(isNaN(c.titleSize)?h.p.style.fontSize=c.messageSize:h.p.style.fontSize=c.messageSize+"px"),c.messageLineHeight&&(isNaN(c.titleSize)?h.p.style.lineHeight=c.messageLineHeight:h.p.style.lineHeight=c.messageLineHeight+"px")),c.title.length>0&&c.message.length>0&&(c.rtl?h.strong.style.marginLeft="10px":c.layout!==2&&!c.rtl&&(h.strong.style.marginRight="10px"))}(),h.toastBody.appendChild(h.toastTexts);var S;(function(){c.inputs.length>0&&(h.inputs.classList.add(s+"-inputs"),m(c.inputs,function(w,I){h.inputs.appendChild(b(w[0])),S=h.inputs.childNodes,S[I].classList.add(s+"-inputs-child"),w[3]&&setTimeout(function(){S[I].focus()},300),S[I].addEventListener(w[1],function(R){var k=w[2];return k(_,h.toast,this,R)})}),h.toastBody.appendChild(h.inputs))})(),function(){c.buttons.length>0&&(h.buttons.classList.add(s+"-buttons"),m(c.buttons,function(w,I){h.buttons.appendChild(b(w[0]));var R=h.buttons.childNodes;R[I].classList.add(s+"-buttons-child"),w[2]&&setTimeout(function(){R[I].focus()},300),R[I].addEventListener("click",function(k){k.preventDefault();var V=w[1];return V(_,h.toast,this,k,S)})})),h.toastBody.appendChild(h.buttons)}(),c.message.length>0&&(c.inputs.length>0||c.buttons.length>0)&&(h.p.style.marginBottom="0"),(c.inputs.length>0||c.buttons.length>0)&&(c.rtl?h.toastTexts.style.marginLeft="10px":h.toastTexts.style.marginRight="10px",c.inputs.length>0&&c.buttons.length>0&&(c.rtl?h.inputs.style.marginLeft="8px":h.inputs.style.marginRight="8px")),function(){h.toastCapsule.style.visibility="hidden",setTimeout(function(){var w=h.toast.offsetHeight,I=h.toast.currentStyle||window.getComputedStyle(h.toast),R=I.marginTop;R=R.split("px"),R=parseInt(R[0]);var k=I.marginBottom;k=k.split("px"),k=parseInt(k[0]),h.toastCapsule.style.visibility="",h.toastCapsule.style.height=w+k+R+"px",setTimeout(function(){h.toastCapsule.style.height="auto",c.target&&(h.toastCapsule.style.overflow="visible")},500),c.timeout&&_.progress(c,h.toast).start()},100)}(),function(){var w=c.position;if(c.target)h.wrapper=document.querySelector(c.target),h.wrapper.classList.add(s+"-target"),c.targetFirst?h.wrapper.insertBefore(h.toastCapsule,h.wrapper.firstChild):h.wrapper.appendChild(h.toastCapsule);else{if(d.indexOf(c.position)==-1){console.warn("["+s+`] Incorrect position.
It can be › `+d);return}r||window.innerWidth<=u?c.position=="bottomLeft"||c.position=="bottomRight"||c.position=="bottomCenter"?w=s+"-wrapper-bottomCenter":c.position=="topLeft"||c.position=="topRight"||c.position=="topCenter"?w=s+"-wrapper-topCenter":w=s+"-wrapper-center":w=s+"-wrapper-"+w,h.wrapper=document.querySelector("."+s+"-wrapper."+w),h.wrapper||(h.wrapper=document.createElement("div"),h.wrapper.classList.add(s+"-wrapper"),h.wrapper.classList.add(w),document.body.appendChild(h.wrapper)),c.position=="topLeft"||c.position=="topCenter"||c.position=="topRight"?h.wrapper.insertBefore(h.toastCapsule,h.wrapper.firstChild):h.wrapper.appendChild(h.toastCapsule)}isNaN(c.zindex)?console.warn("["+s+"] Invalid zIndex."):h.wrapper.style.zIndex=c.zindex}(),function(){c.overlay&&(document.querySelector("."+s+"-overlay.fadeIn")!==null?(h.overlay=document.querySelector("."+s+"-overlay"),h.overlay.setAttribute("data-iziToast-ref",h.overlay.getAttribute("data-iziToast-ref")+","+c.ref),!isNaN(c.zindex)&&c.zindex!==null&&(h.overlay.style.zIndex=c.zindex-1)):(h.overlay.classList.add(s+"-overlay"),h.overlay.classList.add("fadeIn"),h.overlay.style.background=c.overlayColor,h.overlay.setAttribute("data-iziToast-ref",c.ref),!isNaN(c.zindex)&&c.zindex!==null&&(h.overlay.style.zIndex=c.zindex-1),document.querySelector("body").appendChild(h.overlay)),c.overlayClose?(h.overlay.removeEventListener("click",{}),h.overlay.addEventListener("click",function(w){_.hide(c,h.toast,"overlay")})):h.overlay.removeEventListener("click",{}))}(),function(){if(c.animateInside){h.toast.classList.add(s+"-animateInside");var w=[200,100,300];(c.transitionIn=="bounceInLeft"||c.transitionIn=="bounceInRight")&&(w=[400,200,400]),c.title.length>0&&setTimeout(function(){h.strong.classList.add("slideIn")},w[0]),c.message.length>0&&setTimeout(function(){h.p.classList.add("slideIn")},w[1]),(c.icon||c.iconUrl)&&setTimeout(function(){h.icon.classList.add("revealIn")},w[2]);var I=150;c.buttons.length>0&&h.buttons&&setTimeout(function(){m(h.buttons.childNodes,function(R,k){setTimeout(function(){R.classList.add("revealIn")},I),I=I+150})},c.inputs.length>0?150:0),c.inputs.length>0&&h.inputs&&(I=150,m(h.inputs.childNodes,function(R,k){setTimeout(function(){R.classList.add("revealIn")},I),I=I+150}))}}(),c.onOpening.apply(null,[c,h.toast]);try{var C=new CustomEvent(s+"-opening",{detail:c,bubbles:!0,cancelable:!0});document.dispatchEvent(C)}catch(w){console.warn(w)}setTimeout(function(){h.toast.classList.remove(s+"-opening"),h.toast.classList.add(s+"-opened");try{var w=new CustomEvent(s+"-opened",{detail:c,bubbles:!0,cancelable:!0});document.dispatchEvent(w)}catch(I){console.warn(I)}c.onOpened.apply(null,[c,h.toast])},1e3),c.drag&&(l?(h.toast.addEventListener("touchstart",function(w){x.startMoving(this,_,c,w)},!1),h.toast.addEventListener("touchend",function(w){x.stopMoving(this,w)},!1)):(h.toast.addEventListener("mousedown",function(w){w.preventDefault(),x.startMoving(this,_,c,w)},!1),h.toast.addEventListener("mouseup",function(w){w.preventDefault(),x.stopMoving(this,w)},!1))),c.closeOnEscape&&document.addEventListener("keyup",function(w){w=w||window.event,w.keyCode==27&&_.hide(c,h.toast,"esc")}),c.closeOnClick&&h.toast.addEventListener("click",function(w){_.hide(c,h.toast,"toast")}),_.toast=h.toast},i})})(Ri);var aa=Ri.exports;const jd=oa(aa);/**
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
 */const Li=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},la=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ki={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,d=l?t[s+2]:0,f=r>>2,u=(r&3)<<4|a>>4;let g=(a&15)<<2|d>>6,v=d&63;l||(v=64,o||(g=64)),i.push(n[f],n[u],n[g],n[v])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Li(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):la(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||d==null||u==null)throw new ca;const g=r<<2|a>>4;if(i.push(g),d!==64){const v=a<<4&240|d>>2;if(i.push(v),u!==64){const p=d<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ca extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const da=function(t){const e=Li(t);return ki.encodeByteArray(e,!0)},Mi=function(t){return da(t).replace(/\./g,"")},Ni=function(t){try{return ki.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ua(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fa=()=>ua().__FIREBASE_DEFAULTS__,ha=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pa=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ni(t[1]);return e&&JSON.parse(e)},tn=()=>{try{return fa()||ha()||pa()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ma=t=>{var e,n;return(n=(e=tn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Di=()=>{var t;return(t=tn())===null||t===void 0?void 0:t.config},Bi=t=>{var e;return(e=tn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ga{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function va(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function wa(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ya(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ba(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ea(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ta="FirebaseError";class ce extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ta,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Me.prototype.create)}}class Me{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?_a(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ce(s,a,i)}}function _a(t,e){return t.replace(Ia,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ia=/\{\$([^}]+)}/g;function Ca(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Nn(r)&&Nn(o)){if(!nt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Nn(t){return t!==null&&typeof t=="object"}/**
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
 */function Ne(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Aa(t,e){const n=new Oa(t,e);return n.subscribe.bind(n)}class Oa{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Pa(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=At),s.error===void 0&&(s.error=At),s.complete===void 0&&(s.complete=At);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pa(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function At(){}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class ye{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const de="[DEFAULT]";/**
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
 */class xa{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ga;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(La(e))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=de){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=de){return this.instances.has(e)}getOptions(e=de){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ra(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=de){return this.component?this.component.multipleInstances?e:de:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ra(t){return t===de?void 0:t}function La(t){return t.instantiationMode==="EAGER"}/**
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
 */class ka{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const Ma={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Na=N.INFO,Da={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ba=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Da[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ui{constructor(e){this.name=e,this._logLevel=Na,this._logHandler=Ba,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ma[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Ua=(t,e)=>e.some(n=>t instanceof n);let Dn,Bn;function Fa(){return Dn||(Dn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function za(){return Bn||(Bn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fi=new WeakMap,Ht=new WeakMap,zi=new WeakMap,Ot=new WeakMap,nn=new WeakMap;function Ha(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ae(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fi.set(n,t)}).catch(()=>{}),nn.set(e,t),e}function Va(t){if(Ht.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ht.set(t,e)}let Vt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ht.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ae(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ja(t){Vt=t(Vt)}function $a(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Pt(this),e,...n);return zi.set(i,e.sort?e.sort():[e]),ae(i)}:za().includes(t)?function(...e){return t.apply(Pt(this),e),ae(Fi.get(this))}:function(...e){return ae(t.apply(Pt(this),e))}}function Ga(t){return typeof t=="function"?$a(t):(t instanceof IDBTransaction&&Va(t),Ua(t,Fa())?new Proxy(t,Vt):t)}function ae(t){if(t instanceof IDBRequest)return Ha(t);if(Ot.has(t))return Ot.get(t);const e=Ga(t);return e!==t&&(Ot.set(t,e),nn.set(e,t)),e}const Pt=t=>nn.get(t);function Wa(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ae(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ae(o.result),l.oldVersion,l.newVersion,ae(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const qa=["get","getKey","getAll","getAllKeys","count"],Ka=["put","add","delete","clear"],xt=new Map;function Un(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xt.get(e))return xt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ka.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||qa.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&l.done]))[0]};return xt.set(e,r),r}ja(t=>({...t,get:(e,n,i)=>Un(e,n)||t.get(e,n,i),has:(e,n)=>!!Un(e,n)||t.has(e,n)}));/**
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
 */class Xa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ja(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ja(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jt="@firebase/app",Fn="0.9.28";/**
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
 */const fe=new Ui("@firebase/app"),Ya="@firebase/app-compat",Qa="@firebase/analytics-compat",Za="@firebase/analytics",el="@firebase/app-check-compat",tl="@firebase/app-check",nl="@firebase/auth",il="@firebase/auth-compat",sl="@firebase/database",rl="@firebase/database-compat",ol="@firebase/functions",al="@firebase/functions-compat",ll="@firebase/installations",cl="@firebase/installations-compat",dl="@firebase/messaging",ul="@firebase/messaging-compat",fl="@firebase/performance",hl="@firebase/performance-compat",pl="@firebase/remote-config",ml="@firebase/remote-config-compat",gl="@firebase/storage",vl="@firebase/storage-compat",wl="@firebase/firestore",yl="@firebase/firestore-compat",bl="firebase",Sl="10.8.1";/**
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
 */const $t="[DEFAULT]",El={[jt]:"fire-core",[Ya]:"fire-core-compat",[Za]:"fire-analytics",[Qa]:"fire-analytics-compat",[tl]:"fire-app-check",[el]:"fire-app-check-compat",[nl]:"fire-auth",[il]:"fire-auth-compat",[sl]:"fire-rtdb",[rl]:"fire-rtdb-compat",[ol]:"fire-fn",[al]:"fire-fn-compat",[ll]:"fire-iid",[cl]:"fire-iid-compat",[dl]:"fire-fcm",[ul]:"fire-fcm-compat",[fl]:"fire-perf",[hl]:"fire-perf-compat",[pl]:"fire-rc",[ml]:"fire-rc-compat",[gl]:"fire-gcs",[vl]:"fire-gcs-compat",[wl]:"fire-fst",[yl]:"fire-fst-compat","fire-js":"fire-js",[bl]:"fire-js-all"};/**
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
 */const it=new Map,Gt=new Map;function Tl(t,e){try{t.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Oe(t){const e=t.name;if(Gt.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Gt.set(e,t);for(const n of it.values())Tl(n,t);return!0}function Hi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _l={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},le=new Me("app","Firebase",_l);/**
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
 */class Il{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
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
 */const De=Sl;function Cl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$t,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw le.create("bad-app-name",{appName:String(s)});if(n||(n=Di()),!n)throw le.create("no-options");const r=it.get(s);if(r){if(nt(n,r.options)&&nt(i,r.config))return r;throw le.create("duplicate-app",{appName:s})}const o=new ka(s);for(const l of Gt.values())o.addComponent(l);const a=new Il(n,i,o);return it.set(s,a),a}function Al(t=$t){const e=it.get(t);if(!e&&t===$t&&Di())return Cl();if(!e)throw le.create("no-app",{appName:t});return e}function me(t,e,n){var i;let s=(i=El[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(a.join(" "));return}Oe(new ye(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ol="firebase-heartbeat-database",Pl=1,Pe="firebase-heartbeat-store";let Rt=null;function Vi(){return Rt||(Rt=Wa(Ol,Pl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pe)}catch(n){console.warn(n)}}}}).catch(t=>{throw le.create("idb-open",{originalErrorMessage:t.message})})),Rt}async function xl(t){try{const n=(await Vi()).transaction(Pe),i=await n.objectStore(Pe).get(ji(t));return await n.done,i}catch(e){if(e instanceof ce)fe.warn(e.message);else{const n=le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(n.message)}}}async function zn(t,e){try{const i=(await Vi()).transaction(Pe,"readwrite");await i.objectStore(Pe).put(e,ji(t)),await i.done}catch(n){if(n instanceof ce)fe.warn(n.message);else{const i=le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(i.message)}}}function ji(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rl=1024,Ll=30*24*60*60*1e3;class kl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hn();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ll}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hn(),{heartbeatsToSend:i,unsentEntries:s}=Ml(this._heartbeatsCache.heartbeats),r=Mi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Hn(){return new Date().toISOString().substring(0,10)}function Ml(t,e=Rl){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Vn(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Nl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sa()?Ea().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vn(t){return Mi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dl(t){Oe(new ye("platform-logger",e=>new Xa(e),"PRIVATE")),Oe(new ye("heartbeat",e=>new kl(e),"PRIVATE")),me(jt,Fn,t),me(jt,Fn,"esm2017"),me("fire-js","")}Dl("");var Bl="firebase",Ul="10.8.1";/**
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
 */me(Bl,Ul,"app");function sn(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function $i(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fl=$i,Gi=new Me("auth","Firebase",$i());/**
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
 */const st=new Ui("@firebase/auth");function zl(t,...e){st.logLevel<=N.WARN&&st.warn(`Auth (${De}): ${t}`,...e)}function Ke(t,...e){st.logLevel<=N.ERROR&&st.error(`Auth (${De}): ${t}`,...e)}/**
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
 */function Q(t,...e){throw rn(t,...e)}function G(t,...e){return rn(t,...e)}function Hl(t,e,n){const i=Object.assign(Object.assign({},Fl()),{[e]:n});return new Me("auth","Firebase",i).create(e,{appName:t.name})}function rn(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Gi.create(t,...e)}function L(t,e,...n){if(!t)throw rn(e,...n)}function X(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ke(e),new Error(e)}function Z(t,e){t||X(e)}/**
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
 */function Wt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vl(){return jn()==="http:"||jn()==="https:"}function jn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vl()||wa()||"connection"in navigator)?navigator.onLine:!0}function $l(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Be{constructor(e,n){this.shortDelay=e,this.longDelay=n,Z(n>e,"Short delay should be less than long delay!"),this.isMobile=va()||ya()}get(){return jl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function on(t,e){Z(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wi{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;X("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;X("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;X("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wl=new Be(3e4,6e4);function an(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _e(t,e,n,i,s={}){return qi(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ne(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Wi.fetch()(Ki(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function qi(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Gl),e);try{const s=new Kl(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw je(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw je(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw je(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw je(t,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hl(t,f,d);Q(t,f)}}catch(s){if(s instanceof ce)throw s;Q(t,"network-request-failed",{message:String(s)})}}async function ql(t,e,n,i,s={}){const r=await _e(t,e,n,i,s);return"mfaPendingCredential"in r&&Q(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ki(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?on(t.config,s):`${t.config.apiScheme}://${s}`}class Kl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(G(this.auth,"network-request-failed")),Wl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function je(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=G(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Xl(t,e){return _e(t,"POST","/v1/accounts:delete",e)}async function Jl(t,e){return _e(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ce(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yl(t,e=!1){const n=Te(t),i=await n.getIdToken(e),s=ln(i);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ce(Lt(s.auth_time)),issuedAtTime:Ce(Lt(s.iat)),expirationTime:Ce(Lt(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Lt(t){return Number(t)*1e3}function ln(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ke("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ni(n);return s?JSON.parse(s):(Ke("Failed to decode base64 JWT payload"),null)}catch(s){return Ke("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ql(t){const e=ln(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xe(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ce&&Zl(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Zl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ec{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ce(this.lastLoginAt),this.creationTime=Ce(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rt(t){var e;const n=t.auth,i=await t.getIdToken(),s=await xe(t,Jl(n,{idToken:i}));L(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ic(r.providerUserInfo):[],a=nc(t.providerData,o),l=t.isAnonymous,d=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Xi(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function tc(t){const e=Te(t);await rt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nc(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ic(t){return t.map(e=>{var{providerId:n}=e,i=sn(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function sc(t,e){const n=await qi(t,{},async()=>{const i=Ne({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Ki(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wi.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rc(t,e){return _e(t,"POST","/v2/accounts:revokeToken",an(t,e))}/**
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
 */class Re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ql(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await sc(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Re;return i&&(L(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(L(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Re,this.toJSON())}_performRefresh(){return X("not implemented")}}/**
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
 */function te(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=sn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ec(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await xe(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yl(this,e)}reload(){return tc(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await rt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xe(this,Xl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,d,f;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(d=n.createdAt)!==null&&d!==void 0?d:void 0,O=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:P,isAnonymous:x,providerData:E,stsTokenManager:_}=n;L(A&&_,e,"internal-error");const c=Re.fromJSON(this.name,_);L(typeof A=="string",e,"internal-error"),te(u,e.name),te(g,e.name),L(typeof P=="boolean",e,"internal-error"),L(typeof x=="boolean",e,"internal-error"),te(v,e.name),te(p,e.name),te(m,e.name),te(T,e.name),te(b,e.name),te(O,e.name);const h=new ue({uid:A,auth:e,email:g,emailVerified:P,displayName:u,isAnonymous:x,photoURL:p,phoneNumber:v,tenantId:m,stsTokenManager:c,createdAt:b,lastLoginAt:O});return E&&Array.isArray(E)&&(h.providerData=E.map(S=>Object.assign({},S))),T&&(h._redirectEventId=T),h}static async _fromIdTokenResponse(e,n,i=!1){const s=new Re;s.updateFromServerResponse(n);const r=new ue({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await rt(r),r}}/**
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
 */const $n=new Map;function J(t){Z(t instanceof Function,"Expected a class definition");let e=$n.get(t);return e?(Z(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$n.set(t,e),e)}/**
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
 */class Ji{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ji.type="NONE";const Gn=Ji;/**
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
 */function Xe(t,e,n){return`firebase:${t}:${e}:${n}`}class ge{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Xe(this.userKey,s.apiKey,r),this.fullPersistenceKey=Xe("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ge(J(Gn),e,i);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||J(Gn);const o=Xe(i,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(o);if(f){const u=ue._fromJSON(e,f);d!==r&&(a=u),r=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ge(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new ge(r,e,i))}}/**
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
 */function Wn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ts(e))return"Blackberry";if(ns(e))return"Webos";if(cn(e))return"Safari";if((e.includes("chrome/")||Qi(e))&&!e.includes("edge/"))return"Chrome";if(es(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Yi(t=B()){return/firefox\//i.test(t)}function cn(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qi(t=B()){return/crios\//i.test(t)}function Zi(t=B()){return/iemobile/i.test(t)}function es(t=B()){return/android/i.test(t)}function ts(t=B()){return/blackberry/i.test(t)}function ns(t=B()){return/webos/i.test(t)}function pt(t=B()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oc(t=B()){var e;return pt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ac(){return ba()&&document.documentMode===10}function is(t=B()){return pt(t)||es(t)||ns(t)||ts(t)||/windows phone/i.test(t)||Zi(t)}function lc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ss(t,e=[]){let n;switch(t){case"Browser":n=Wn(B());break;case"Worker":n=`${Wn(B())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${De}/${i}`}/**
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
 */class cc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function dc(t,e={}){return _e(t,"GET","/v2/passwordPolicy",an(t,e))}/**
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
 */const uc=6;class fc{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uc,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class hc{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qn(this),this.idTokenSubscription=new qn(this),this.beforeStateQueue=new cc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=J(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$l()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Te(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(J(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dc(this),n=new fc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Me("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await rc(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&J(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[J(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ss(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zl(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dn(t){return Te(t)}class qn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aa(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let un={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pc(t){un=t}function mc(t){return un.loadJS(t)}function gc(){return un.gapiScript}function vc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function wc(t,e){const n=Hi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(nt(r,e??{}))return s;Q(s,"already-initialized")}return n.initialize({options:e})}function yc(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(J);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function bc(t,e,n){const i=dn(t);L(i._canInitEmulator,i,"emulator-config-failed"),L(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=rs(e),{host:o,port:a}=Sc(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ec()}function rs(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sc(t){const e=rs(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Kn(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Kn(o)}}}function Kn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ec(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class os{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return X("not implemented")}_getIdTokenResponse(e){return X("not implemented")}_linkToIdToken(e,n){return X("not implemented")}_getReauthenticationResolver(e){return X("not implemented")}}/**
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
 */async function ve(t,e){return ql(t,"POST","/v1/accounts:signInWithIdp",an(t,e))}/**
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
 */const Tc="http://localhost";class he extends os{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new he(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Q("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=sn(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new he(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ve(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ve(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ve(e,n)}buildRequest(){const e={requestUri:Tc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ne(n)}return e}}/**
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
 */class as{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ue extends as{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ne extends Ue{constructor(){super("facebook.com")}static credential(e){return he._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";ne.PROVIDER_ID="facebook.com";/**
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
 */class ie extends Ue{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return he._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ie.credential(n,i)}catch{return null}}}ie.GOOGLE_SIGN_IN_METHOD="google.com";ie.PROVIDER_ID="google.com";/**
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
 */class se extends Ue{constructor(){super("github.com")}static credential(e){return he._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return se.credential(e.oauthAccessToken)}catch{return null}}}se.GITHUB_SIGN_IN_METHOD="github.com";se.PROVIDER_ID="github.com";/**
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
 */class re extends Ue{constructor(){super("twitter.com")}static credential(e,n){return he._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return re.credential(n,i)}catch{return null}}}re.TWITTER_SIGN_IN_METHOD="twitter.com";re.PROVIDER_ID="twitter.com";/**
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
 */class be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await ue._fromIdTokenResponse(e,i,s),o=Xn(i);return new be({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Xn(i);return new be({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Xn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ot extends ce{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ot.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ot(e,n,i,s)}}function ls(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ot._fromErrorAndOperation(t,r,e,i):r})}async function _c(t,e,n=!1){const i=await xe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return be._forOperation(t,"link",i)}/**
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
 */async function Ic(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await xe(t,ls(i,s,e,t),n);L(r.idToken,i,"internal-error");const o=ln(r.idToken);L(o,i,"internal-error");const{sub:a}=o;return L(t.uid===a,i,"user-mismatch"),be._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Q(i,"user-mismatch"),r}}/**
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
 */async function Cc(t,e,n=!1){const i="signIn",s=await ls(t,i,e),r=await be._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Ac(t,e,n,i){return Te(t).onIdTokenChanged(e,n,i)}function Oc(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}const at="__sak";/**
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
 */class cs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(at,"1"),this.storage.removeItem(at),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pc(){const t=B();return cn(t)||pt(t)}const xc=1e3,Rc=10;class ds extends cs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pc()&&lc(),this.fallbackToPolling=is(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);ac()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Rc):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},xc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ds.type="LOCAL";const Lc=ds;/**
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
 */class us extends cs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}us.type="SESSION";const fs=us;/**
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
 */function kc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new mt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async d=>d(n.origin,r)),l=await kc(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mt.receivers=[];/**
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
 */function fn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Mc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const d=fn("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const g=u;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function W(){return window}function Nc(t){W().location.href=t}/**
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
 */function hs(){return typeof W().WorkerGlobalScope<"u"&&typeof W().importScripts=="function"}async function Dc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Uc(){return hs()?self:null}/**
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
 */const ps="firebaseLocalStorageDb",Fc=1,lt="firebaseLocalStorage",ms="fbase_key";class Fe{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gt(t,e){return t.transaction([lt],e?"readwrite":"readonly").objectStore(lt)}function zc(){const t=indexedDB.deleteDatabase(ps);return new Fe(t).toPromise()}function qt(){const t=indexedDB.open(ps,Fc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(lt,{keyPath:ms})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(lt)?e(i):(i.close(),await zc(),e(await qt()))})})}async function Jn(t,e,n){const i=gt(t,!0).put({[ms]:e,value:n});return new Fe(i).toPromise()}async function Hc(t,e){const n=gt(t,!1).get(e),i=await new Fe(n).toPromise();return i===void 0?null:i.value}function Yn(t,e){const n=gt(t,!0).delete(e);return new Fe(n).toPromise()}const Vc=800,jc=3;class gs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>jc)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mt._getInstance(Uc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Dc(),!this.activeServiceWorker)return;this.sender=new Mc(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qt();return await Jn(e,at,"1"),await Yn(e,at),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jn(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Hc(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=gt(s,!1).getAll();return new Fe(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gs.type="LOCAL";const $c=gs;new Be(3e4,6e4);/**
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
 */function Gc(t,e){return e?J(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hn extends os{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ve(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ve(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wc(t){return Cc(t.auth,new hn(t),t.bypassAuthState)}function qc(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Ic(n,new hn(t),t.bypassAuthState)}async function Kc(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),_c(n,new hn(t),t.bypassAuthState)}/**
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
 */class vs{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wc;case"linkViaPopup":case"linkViaRedirect":return Kc;case"reauthViaPopup":case"reauthViaRedirect":return qc;default:Q(this.auth,"internal-error")}}resolve(e){Z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Xc=new Be(2e3,1e4);class pe extends vs{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,pe.currentPopupAction&&pe.currentPopupAction.cancel(),pe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Z(this.filter.length===1,"Popup operations only handle one event");const e=fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(G(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(G(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(G(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xc.get())};e()}}pe.currentPopupAction=null;/**
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
 */const Jc="pendingRedirect",Je=new Map;class Yc extends vs{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Je.get(this.auth._key());if(!e){try{const i=await Qc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Je.set(this.auth._key(),e)}return this.bypassAuthState||Je.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qc(t,e){const n=td(e),i=ed(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Zc(t,e){Je.set(t._key(),e)}function ed(t){return J(t._redirectPersistence)}function td(t){return Xe(Jc,t.config.apiKey,t.name)}async function nd(t,e,n=!1){const i=dn(t),s=Gc(i,e),o=await new Yc(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const id=10*60*1e3;class sd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ws(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(G(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=id&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}saveEventToCache(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}function Qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ws({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ws(t);default:return!1}}/**
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
 */async function od(t,e={}){return _e(t,"GET","/v1/projects",e)}/**
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
 */const ad=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ld=/^https?/;async function cd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await od(t);for(const n of e)try{if(dd(n))return}catch{}Q(t,"unauthorized-domain")}function dd(t){const e=Wt(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!ld.test(n))return!1;if(ad.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ud=new Be(3e4,6e4);function Zn(){const t=W().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fd(t){return new Promise((e,n)=>{var i,s,r;function o(){Zn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zn(),n(G(t,"network-request-failed"))},timeout:ud.get()})}if(!((s=(i=W().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=W().gapi)===null||r===void 0)&&r.load)o();else{const a=vc("iframefcb");return W()[a]=()=>{gapi.load?o():n(G(t,"network-request-failed"))},mc(`${gc()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ye=null,e})}let Ye=null;function hd(t){return Ye=Ye||fd(t),Ye}/**
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
 */const pd=new Be(5e3,15e3),md="__/auth/iframe",gd="emulator/auth/iframe",vd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yd(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?on(e,gd):`https://${t.config.authDomain}/${md}`,i={apiKey:e.apiKey,appName:t.name,v:De},s=wd.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ne(i).slice(1)}`}async function bd(t){const e=await hd(t),n=W().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:yd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vd,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=G(t,"network-request-failed"),a=W().setTimeout(()=>{r(o)},pd.get());function l(){W().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Sd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ed=500,Td=600,_d="_blank",Id="http://localhost";class ei{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cd(t,e,n,i=Ed,s=Td){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sd),{width:i.toString(),height:s.toString(),top:r,left:o}),d=B().toLowerCase();n&&(a=Qi(d)?_d:n),Yi(d)&&(e=e||Id,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,p])=>`${g}${v}=${p},`,"");if(oc(d)&&a!=="_self")return Ad(e||"",a),new ei(null);const u=window.open(e||"",a,f);L(u,t,"popup-blocked");try{u.focus()}catch{}return new ei(u)}function Ad(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Od="__/auth/handler",Pd="emulator/auth/handler",xd=encodeURIComponent("fac");async function ti(t,e,n,i,s,r){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:De,eventId:s};if(e instanceof as){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ca(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(r||{}))o[f]=u}if(e instanceof Ue){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),d=l?`#${xd}=${encodeURIComponent(l)}`:"";return`${Rd(t)}?${Ne(a).slice(1)}${d}`}function Rd({config:t}){return t.emulator?on(t,Pd):`https://${t.authDomain}/${Od}`}/**
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
 */const kt="webStorageSupport";class Ld{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fs,this._completeRedirectFn=nd,this._overrideRedirectResult=Zc}async _openPopup(e,n,i,s){var r;Z((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ti(e,n,i,Wt(),s);return Cd(e,o,fn())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await ti(e,n,i,Wt(),s);return Nc(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Z(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await bd(e),i=new sd(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kt,{type:kt},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[kt];o!==void 0&&n(!!o),Q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return is()||cn()||pt()}}const kd=Ld;var ni="@firebase/auth",ii="1.6.1";/**
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
 */class Md{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dd(t){Oe(new ye("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ss(t)},d=new hc(i,s,r,l);return yc(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Oe(new ye("auth-internal",e=>{const n=dn(e.getProvider("auth").getImmediate());return(i=>new Md(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),me(ni,ii,Nd(t)),me(ni,ii,"esm2017")}/**
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
 */const Bd=5*60,Ud=Bi("authIdTokenMaxAge")||Bd;let si=null;const Fd=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Ud)return;const s=n==null?void 0:n.token;si!==s&&(si=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $d(t=Al()){const e=Hi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wc(t,{popupRedirectResolver:kd,persistence:[$c,Lc,fs]}),i=Bi("authTokenSyncURL");if(i){const r=Fd(i);Oc(n,r,()=>r(n.currentUser)),Ac(n,o=>r(o))}const s=ma("auth");return s&&bc(n,`http://${s}`),n}function zd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pc({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=G("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",zd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dd("Browser");export{Hd as N,H as S,Vd as a,Cl as b,$d as g,jd as i};
//# sourceMappingURL=vendor-85b191d9.js.map
