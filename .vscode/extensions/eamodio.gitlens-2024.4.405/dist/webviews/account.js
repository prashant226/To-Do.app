var e={d:(t,r)=>{for(var i in r)e.o(r,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:r[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{r:()=>AccountApp});var r=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(r||{});function i(e,t){return o(e.plan.effective.expiresOn,t)}function o(e,t){return null!=e?function(e,t,r,i){const o=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=i??Math.floor;switch(r){case"days":return s(o/864e5);case"hours":return s(o/36e5);case"minutes":return s(o/6e4);case"seconds":return s(o/1e3);default:return o}}(Date.now(),new Date(e),t,Math.round):void 0}class IpcMessageType{constructor(e,t=!1,r=!1){this.method=e,this.reset=t,this.pack=r}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function s(e,t,r){e.method===t.method&&r(t.params,e)}const a=new IpcCommandType("webview/ready"),l=new IpcCommandType("webview/focus"),c=new IpcCommandType("command/execute");new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const u=new IpcNotificationType("subscription/didChange");function d(e,t,r){let i,o,s,a,l;function c(e){const r=e-(o??0);return null==o||r>=t||r<0}function u(){const e=Date.now();if(c(e))d();else{l=setTimeout(u,t-(e-(o??0)))}}function d(){return l=void 0,i?function(){const t=i,r=s;return i=s=void 0,a=e.apply(r,t),a}():(i=void 0,s=void 0,a)}function h(...e){const d=Date.now(),h=c(d);return i=null!=r&&i?r(i,e):e,s=this,o=d,h&&null==l?(l=setTimeout(u,t),a):(null==l&&(l=setTimeout(u,t)),a)}return h.cancel=function(){null!=l&&clearTimeout(l),i=void 0,o=void 0,s=void 0,l=void 0},h.flush=function(){return null==l?a:(clearTimeout(l),d())},h.pending=function(){return null!=l},h}const h=",",p="=",g="{",f="(",m=")",v=/\(([\s\S]*)\)/,y=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,_=/\s?=.*$/;const w=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,r=!1){this.provider=e,this._isDebugging=r,this.logLevel=t}enabled(e){return this.level>=$(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=$(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let r;"string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...r){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,r)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let r;"string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let r;"string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const r=this.provider.toLoggable?.(e);if(null!=r)return r;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const r=t.map((e=>this.toLoggable(e))).join(", ");return 0!==r.length?` — ${r}`:""}};function $(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function A(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const r=t.indexOf("_");return-1===r?t:t.substr(r+1)}const x={enabled:e=>w.enabled(e)||w.isDebugging,log:(e,t,r,...i)=>{switch(e){case"error":w.error("",t,r,...i);break;case"warn":w.warn(t,r,...i);break;case"info":w.log(t,r,...i);break;default:w.debug(t,r,...i)}}};var S,P;(P=S||(S={})).on=function(e,t,r,i){let o=!1;if("string"==typeof e){const s=function(t){const i=t?.target?.closest(e);null!=i&&r(t,i)};return document.addEventListener(t,s,i??!0),{dispose:()=>{o||(o=!0,document.removeEventListener(t,s,i??!0))}}}const s=function(e){r(e,this)};return e.addEventListener(t,s,i??!1),{dispose:()=>{o||(o=!0,e.removeEventListener(t,s,i??!1))}}},P.insertTemplate=function(e,t,r){const i=document.getElementById(e);if(t.replaceChildren(i?.content.cloneNode(!0)),t.className=i.className,null!=r?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(r.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=r?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const i=r.bindings[e];null!=i&&(t.textContent=String(i))}}},P.resetSlot=function(e){e.replaceChildren(),e.className=""};function C(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}function E(e){const t=.001*performance.now();let r=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],i-=e[1],i<0&&(r--,i+=1e9)),[r,i]}const T=500,D=C(),z=new Map;function U(e){z.delete(e)}function O(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const r=D.next();return{scopeId:r,prefix:`[${String(r).padStart(5)}] ${e}`}}Error;Error;var B=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(B||{});const{fromCharCode:N}=String;new TextEncoder;function F(e){const[t,r]=E(e);return 1e3*t+Math.floor(r/1e6)}function G(e,t,r){if(null==r)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:r.plural??`${e}s`;return r.only?i:`${0===t?r.zero??t:r.format?.(t)??t}${r.infix??" "}${i}`}const j=Symbol("logInstanceNameFn");function q(e){return function(e,t=!1){let r,i,o,s,a,l=0,c=!1,u=!1,d=!0;null!=e&&({args:r,if:i,enter:o,exit:s,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:u=!1,timed:d=!0}=e);l>0&&(u=!0,d=!0);d&&(c=!0);const $=w.isDebugging,x=t?w.debug:w.log,S=$?"debug":"info";return(e,t,P)=>{let C,O;if("function"==typeof P.value?(C=P.value,O="value"):"function"==typeof P.get&&(C=P.get,O="get"),null==C||null==O)throw new Error("Not supported");const B=!1!==r?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(y,"")||t,t=t.slice(0,t.indexOf(g));let r=t.indexOf(f),i=t.indexOf(m);r=r>=0?r+1:0,i=i>0?i:t.indexOf(p),t=t.slice(r,i),t=`(${t})`;const o=v.exec(t);return null!=o?o[1].split(h).map((e=>e.trim().replace(_,""))):[]}(C):[];P[O]=function(...e){if(!$&&!w.enabled(S)||null!=i&&!i.apply(this,e))return C.apply(this,e);const h=D.next(),p=null!=this?this.constructor?.[j]?.(this,A(this))??A(this):void 0;let g,f=p?c?`[${h.toString(16).padStart(5)}] ${p}.${t}`:`${p}.${t}`:t;null!=a&&(f=a({id:h,instance:this,instanceName:p??"",name:t,prefix:f},...e)),c&&(g={scopeId:h,prefix:f},function(e,t){z.set(e,t)}(h,g));const m=null!=o?o(...e):"";let v;if(!1===r||0===e.length)v="",u||x.call(w,`${f}${m}`);else{let t;v="";let i,o,s,a=-1;for(s of e){if(i=B[++a],t=r?.[a],null!=t){if("boolean"==typeof t)continue;if(v.length>0&&(v+=", "),"string"==typeof t){v+=t;continue}o=String(t(s))}else v.length>0&&(v+=", "),o=w.toLoggable(s);v+=i?`${i}=${o}`:o}u||x.call(w,v?`${f}${m}(${v})`:`${f}${m}`)}if(u||d||null!=s){const t=d?E():void 0,r=e=>{const r=void 0!==t?` [${F(t)}ms]`:"";u?w.error(e,v?`${f}${m}(${v})`:`${f}${m}`,g?.exitDetails?`failed${g.exitDetails}${r}`:`failed${r}`):w.error(e,f,g?.exitDetails?`failed${g.exitDetails}${r}`:`failed${r}`),c&&U(h)};let i;try{i=C.apply(this,e)}catch(e){throw r(e),e}const o=e=>{let r,i,o,a;if(null!=t?(r=F(t),r>T?(i=w.warn,o=` [*${r}ms] (slow)`):(i=x,o=` [${r}ms]`)):(o="",i=x),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${w.toLoggable(e)}`);else g?.exitFailed?(a=g.exitFailed,i=w.error):a="completed";u?(0===l||r>l)&&i.call(w,v?`${f}${m}(${v}) ${a}${g?.exitDetails||""}${o}`:`${f}${m} ${a}${g?.exitDetails||""}${o}`):i.call(w,v?`${f}(${v}) ${a}${g?.exitDetails||""}${o}`:`${f} ${a}${g?.exitDetails||""}${o}`),c&&U(h)};return null!=i&&(null!=(y=i)&&(y instanceof Promise||"function"==typeof y?.then))?i.then(o,r):o(i),i}var y;return C.apply(this,e)}}}(e,!0)}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...r){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:O(e??""),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??x,this._time=E(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=E(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=E(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[r,i]=E(this._time),o=1e3*r+Math.floor(i/1e6),s=e?.message??"";this.logProvider.log(o>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${o}ms]${e?.suffix??""}`)}}const W=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,r)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),o={dispose:()=>{o.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(r)&&r.push(o),o}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};W._noop=function(){};let K=W;const Y={done:!0,value:void 0},Q=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};Q.Undefined=new Q(void 0);let Z=Q;class LinkedList{constructor(){this._first=Z.Undefined,this._last=Z.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Z.Undefined}clear(){this._first=Z.Undefined,this._last=Z.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const r=new Z(e);if(this._first===Z.Undefined)this._first=r,this._last=r;else if(t){const e=this._last;this._last=r,r.prev=e,e.next=r}else{const e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(r))}}shift(){if(this._first===Z.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Z.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Z.Undefined&&e.next!==Z.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Z.Undefined&&e.next===Z.Undefined?(this._first=Z.Undefined,this._last=Z.Undefined):e.next===Z.Undefined?(this._last=this._last.prev,this._last.next=Z.Undefined):e.prev===Z.Undefined&&(this._first=this._first.next,this._first.prev=Z.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Z.Undefined?Y:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Z.Undefined;t=t.next)e.push(t.element);return e}}var J=Object.defineProperty,X=Object.getOwnPropertyDescriptor,ee=(e,t,r,i)=>{for(var o,s=i>1?void 0:i?X(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&J(t,r,s),s};let te;function re(){return te??=acquireVsCodeApi()}const ie=C();function oe(){return`webview:${ie.next()}`}let ne=class{constructor(e){this.appName=e,this._onReceiveMessage=new K,this._api=re(),this._disposable=S.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=z.get(D.current),r=e.data;if(r.packed&&r.params instanceof Uint8Array){const i=function(e,t,...r){return(t?.provider??x).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...r):void 0}(O(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,r.params=JSON.parse(this._textDecoder.decode(r.params)),i?.stop()}this._onReceiveMessage.fire(r)}sendCommand(e,t){const r=oe();this.postMessage({id:r,method:e.method,params:t})}async sendCommandWithCompletion(e,t,r){const i=oe(),o=new Promise(((e,t)=>{let o;const a=[S.on(window,"message",(t=>{s(r,t.data,(r=>{t.data.completionId===i&&(a.forEach((e=>e.dispose())),queueMicrotask((()=>e(r))))}))})),{dispose:function(){null!=o&&(clearTimeout(o),o=void 0)}}];o=setTimeout((()=>{o=void 0,a.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${r.method}`))}),6e4)}));return this.postMessage({id:i,method:e.method,params:t,completionId:i}),o}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var se;function ae(e,t){const r=e+t,i=t<0?r<0?0:r:r>255?255:r;return Math.round(i)}function le(e,t){return ce(e,-t)}function ce(e,t){const r=function(e){const t=ye(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==r)return e;const[i,o,s,a]=r,l=255*t/100;return`rgba(${ae(i,l)}, ${ae(o,l)}, ${ae(s,l)}, ${a})`}function ue(e,t){const r=be.from(e);return null==r?e:r.transparent(t/100).toString()}ee([q({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],ne.prototype,"onMessageReceived",1),ee([q({args:{0:e=>e.method,1:!1}})],ne.prototype,"sendCommand",1),ee([q({args:{0:e=>e.method,1:!1,2:!1}})],ne.prototype,"sendCommandWithCompletion",1),ee([q({args:{0:e=>`${e.id}, method=${e.method}`}})],ne.prototype,"postMessage",1),ne=ee([(se=(e,t)=>`${e.appName}(${t})`,e=>{e[j]=se})],ne);function de(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}class RGBA{constructor(e,t,r,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=de(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,r,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=de(Math.max(Math.min(1,t),0),3),this.l=de(Math.max(Math.min(1,r),0),3),this.a=de(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,r=e.g/255,i=e.b/255,o=e.a,s=Math.max(t,r,i),a=Math.min(t,r,i);let l=0,c=0;const u=(a+s)/2,d=s-a;if(d>0){switch(c=Math.min(u<=.5?d/(2*u):d/(2-2*u),1),s){case t:l=(r-i)/d+(r<i?6:0);break;case r:l=(i-t)/d+2;break;case i:l=(t-r)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,c,u,o)}static _hue2rgb(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){const t=e.h/360,{s:r,l:i,a:o}=e;let s,a,l;if(0===r)s=a=l=i;else{const e=i<.5?i*(1+r):i+r-i*r,o=2*i-e;s=HSLA._hue2rgb(o,e,t+1/3),a=HSLA._hue2rgb(o,e,t),l=HSLA._hue2rgb(o,e,t-1/3)}return new RGBA(Math.round(255*s),Math.round(255*a),Math.round(255*l),o)}}class HSVA{constructor(e,t,r,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=de(Math.max(Math.min(1,t),0),3),this.v=de(Math.max(Math.min(1,r),0),3),this.a=de(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(t,r,i),s=o-Math.min(t,r,i),a=0===o?0:s/o;let l;return l=0===s?0:o===t?((r-i)/s%6+6)%6:o===r?(i-t)/s+2:(t-r)/s+4,new HSVA(Math.round(60*l),a,o,e.a)}static toRGBA(e){const{h:t,s:r,v:i,a:o}=e,s=i*r,a=s*(1-Math.abs(t/60%2-1)),l=i-s;let[c,u,d]=[0,0,0];return t<60?(c=s,u=a):t<120?(c=a,u=s):t<180?(u=s,d=a):t<240?(u=a,d=s):t<300?(c=a,d=s):t<=360&&(c=s,d=a),c=Math.round(255*(c+l)),u=Math.round(255*(u+l)),d=Math.round(255*(d+l)),new RGBA(c,u,d,o)}}function he(e,t){return t.getPropertyValue(e).trim()}const pe=class _Color{static from(e){return e instanceof _Color?e:ye(e)||_Color.red}static fromCssVariable(e,t){return ye(he(e,t))||_Color.red}static fromHex(e){return _e(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return de(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new be(new RGBA(0,0,0,e.rgba.a));if(1===t)return new be(new RGBA(255,255,255,e.rgba.a));const r=e.getRelativeLuminance();let i=20;const o=(e,r)=>{const s=e.mix(r,.5),a=s.getRelativeLuminance();return Math.abs(t-a)<1e-7||!i--?s:a>t?o(e,s):o(s,r)},s=(r>t?o(be.black,e):o(e,be.white)).rgba;return new be(new RGBA(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:r,b:i,a:o}=this.rgba;return new _Color(new RGBA(t,r,i,o*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,r=this.rgba.a,i=t.a,o=r+i*(1-r);if(o<1e-6)return _Color.transparent;const s=this.rgba.r*r/o+t.r*i*(1-r)/o,a=this.rgba.g*r/o+t.g*i*(1-r)/o,l=this.rgba.b*r/o+t.b*i*(1-r)/o;return new _Color(new RGBA(s,a,l,o))}mix(e,t){return function(e,t,r){const i=e.rgba,o=t.rgba;return new be(new RGBA(i.r+r*(o.r-i.r),i.g+r*(o.g-i.g),i.b+r*(o.b-i.b),i.a+r*(o.a-i.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:r,b:i,a:o}=this.rgba;return new _Color(new RGBA(e.rgba.r-o*(e.rgba.r-t),e.rgba.g-o*(e.rgba.g-r),e.rgba.b-o*(e.rgba.b-i),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const r=1-e.rgba.a;return new _Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return me(e);return ge(e)}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;const i=e.getRelativeLuminance(),o=t.getRelativeLuminance();return r=r*(o-i)/o,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;const i=e.getRelativeLuminance();return r=r*(i-t.getRelativeLuminance())/i,e.darken(r)}};pe.white=new pe(new RGBA(255,255,255,1)),pe.black=new pe(new RGBA(0,0,0,1)),pe.red=new pe(new RGBA(255,0,0,1)),pe.blue=new pe(new RGBA(0,0,255,1)),pe.green=new pe(new RGBA(0,255,0,1)),pe.cyan=new pe(new RGBA(0,255,255,1)),pe.lightgrey=new pe(new RGBA(211,211,211,1)),pe.transparent=new pe(new RGBA(0,0,0,0));let be=pe;function ge(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function fe(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function me(e){return`#${fe(e.rgba.r)}${fe(e.rgba.g)}${fe(e.rgba.b)}`}const ve=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function ye(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===B.Hash)return _e(e);const t=ve.exec(e);if(null==t)return null;const r=t[1];let i;switch(r){case"rgb":case"hsl":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(r){case"rgb":case"rgba":return new be(new RGBA(i[0],i[1],i[2],i[3]));case"hsl":case"hsla":return new be(new HSLA(i[0],i[1],i[2],i[3]))}return be.red}function _e(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==B.Hash)return null;switch(t){case 7:{const t=16*we(e.charCodeAt(1))+we(e.charCodeAt(2)),r=16*we(e.charCodeAt(3))+we(e.charCodeAt(4)),i=16*we(e.charCodeAt(5))+we(e.charCodeAt(6));return new be(new RGBA(t,r,i,1))}case 9:{const t=16*we(e.charCodeAt(1))+we(e.charCodeAt(2)),r=16*we(e.charCodeAt(3))+we(e.charCodeAt(4)),i=16*we(e.charCodeAt(5))+we(e.charCodeAt(6)),o=16*we(e.charCodeAt(7))+we(e.charCodeAt(8));return new be(new RGBA(t,r,i,o/255))}case 4:{const t=we(e.charCodeAt(1)),r=we(e.charCodeAt(2)),i=we(e.charCodeAt(3));return new be(new RGBA(16*t+t,16*r+r,16*i+i))}case 5:{const t=we(e.charCodeAt(1)),r=we(e.charCodeAt(2)),i=we(e.charCodeAt(3)),o=we(e.charCodeAt(4));return new be(new RGBA(16*t+t,16*r+r,16*i+i,(16*o+o)/255))}default:return null}}function we(e){switch(e){case B.Digit0:return 0;case B.Digit1:return 1;case B.Digit2:return 2;case B.Digit3:return 3;case B.Digit4:return 4;case B.Digit5:return 5;case B.Digit6:return 6;case B.Digit7:return 7;case B.Digit8:return 8;case B.Digit9:return 9;case B.a:case B.A:return 10;case B.b:case B.B:return 11;case B.c:case B.C:return 12;case B.d:case B.D:return 13;case B.e:case B.E:return 14;case B.f:case B.F:return 15}return 0}const $e=new K,Ae=$e.event;function ke(e){const t=document.documentElement,r=window.getComputedStyle(t),i=document.body.classList,o=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),s=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=t.style,l=he("--vscode-editor-background",r);let c=he("--vscode-editor-foreground",r);c||(c=he("--vscode-foreground",r));let u=he("--color-background",r);return a.setProperty("--color-background--lighten-05",ce(u,5)),a.setProperty("--color-background--darken-05",le(u,5)),a.setProperty("--color-background--lighten-075",ce(u,7.5)),a.setProperty("--color-background--darken-075",le(u,7.5)),a.setProperty("--color-background--lighten-10",ce(u,10)),a.setProperty("--color-background--darken-10",le(u,10)),a.setProperty("--color-background--lighten-15",ce(u,15)),a.setProperty("--color-background--darken-15",le(u,15)),a.setProperty("--color-background--lighten-30",ce(u,30)),a.setProperty("--color-background--darken-30",le(u,30)),a.setProperty("--color-background--lighten-50",ce(u,50)),a.setProperty("--color-background--darken-50",le(u,50)),u=he("--color-button-background",r),a.setProperty("--color-button-background--darken-30",le(u,30)),u=he("--color-highlight",r),a.setProperty("--color-highlight--75",ue(u,75)),a.setProperty("--color-highlight--50",ue(u,50)),a.setProperty("--color-highlight--25",ue(u,25)),u=he("--color-button-secondary-background",r),a.setProperty("--color-button-secondary-background--darken-30",le(u,30)),u=he("--color-foreground",r),a.setProperty("--color-foreground--85",ue(u,85)),a.setProperty("--color-foreground--75",ue(u,75)),a.setProperty("--color-foreground--65",ue(u,65)),a.setProperty("--color-foreground--50",ue(u,50)),u=he("--color-link-foreground",r),a.setProperty("--color-link-foreground--darken-20",le(u,20)),a.setProperty("--color-link-foreground--lighten-20",ce(u,20)),u=he("--color-alert-infoBackground",r),a.setProperty("--color-alert-infoHoverBackground",o?le(u,5):ce(u,5)),u=he("--color-alert-warningBackground",r),a.setProperty("--color-alert-warningHoverBackground",o?le(u,5):ce(u,5)),u=he("--color-alert-errorBackground",r),a.setProperty("--color-alert-errorHoverBackground",o?le(u,5):ce(u,5)),u=o?le(l,5):ce(l,5),a.setProperty("--color-alert-neutralBackground",u),a.setProperty("--color-alert-neutralHoverBackground",o?le(u,5):ce(u,5)),{colors:{background:l,foreground:c},computedStyle:r,isLightTheme:o,isHighContrastTheme:s,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],r=ke();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(r),t.push(Ae(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",w.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=re(),this._hostIpc=new ne(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{$e.fire(ke(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>this.onMessageReceived(e)))),this.sendCommand(a,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(S.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=d((e=>{this.sendCommand(l,e)}),150);this.bindDisposables.push(S.on(document,"focusin",(t=>{const r=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===r||(this._focused=!0,this._inputFocused=r,e({focused:!0,inputFocused:r}))})),S.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?w.log(e,...t):w.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendCommandWithCompletion(e,t,r){return this._hostIpc.sendCommandWithCompletion(e,t,r)}setState(e){this._api.setState(e)}}const xe=globalThis,Se=xe.ShadowRoot&&(void 0===xe.ShadyCSS||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pe=Symbol(),Ce=new WeakMap;class n{constructor(e,t,r){if(this._$cssResult$=!0,r!==Pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Se&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=Ce.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ce.set(t,e))}return e}toString(){return this.cssText}}const Ee=e=>new n("string"==typeof e?e:e+"",void 0,Pe),Re=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new n(r,e,Pe)},Te=Se?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ee(t)})(e):e,{is:Me,defineProperty:Le,getOwnPropertyDescriptor:De,getOwnPropertyNames:ze,getOwnPropertySymbols:Ue,getPrototypeOf:Oe}=Object,Be=globalThis,Ie=Be.trustedTypes,He=Ie?Ie.emptyScript:"",Ne=Be.reactiveElementPolyfillSupport,Fe=(e,t)=>e,Ge={toAttribute(e,t){switch(t){case Boolean:e=e?He:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},je=(e,t)=>!Me(e,t),qe={attribute:!0,type:String,converter:Ge,reflect:!1,hasChanged:je};Symbol.metadata??=Symbol("metadata"),Be.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=qe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Le(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=De(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const s=i?.call(this);o.call(this,t),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qe}static _$Ei(){if(this.hasOwnProperty(Fe("elementProperties")))return;const e=Oe(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fe("properties"))){const e=this.properties,t=[...ze(e),...Ue(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(Te(e))}else void 0!==e&&t.push(Te(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Se)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=xe.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:Ge).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ge;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??je)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[Fe("elementProperties")]=new Map,b[Fe("finalized")]=new Map,Ne?.({ReactiveElement:b}),(Be.reactiveElementVersions??=[]).push("2.0.4");const Ve=globalThis,We=Ve.trustedTypes,Ke=We?We.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ye="$lit$",Qe=`lit$${(Math.random()+"").slice(9)}$`,Ze="?"+Qe,Je=`<${Ze}>`,Xe=document,et=()=>Xe.createComment(""),tt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,rt=Array.isArray,it=e=>rt(e)||"function"==typeof e?.[Symbol.iterator],ot="[ \t\n\f\r]",nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,at=/>/g,lt=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,ut=/"/g,dt=/^(?:script|style|textarea|title)$/i,ht=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),pt=ht(1),bt=(ht(2),Symbol.for("lit-noChange")),gt=Symbol.for("lit-nothing"),ft=new WeakMap,mt=Xe.createTreeWalker(Xe,129);function vt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ke?Ke.createHTML(t):t}const yt=(e,t)=>{const r=e.length-1,i=[];let o,s=2===t?"<svg>":"",a=nt;for(let t=0;t<r;t++){const r=e[t];let l,c,u=-1,d=0;for(;d<r.length&&(a.lastIndex=d,c=a.exec(r),null!==c);)d=a.lastIndex,a===nt?"!--"===c[1]?a=st:void 0!==c[1]?a=at:void 0!==c[2]?(dt.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=lt):void 0!==c[3]&&(a=lt):a===lt?">"===c[0]?(a=o??nt,u=-1):void 0===c[1]?u=-2:(u=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?lt:'"'===c[3]?ut:ct):a===ut||a===ct?a=lt:a===st||a===at?a=nt:(a=lt,o=void 0);const h=a===lt&&e[t+1].startsWith("/>")?" ":"";s+=a===nt?r+Je:u>=0?(i.push(l),r.slice(0,u)+Ye+r.slice(u)+Qe+h):r+Qe+(-2===u?t:h)}return[vt(e,s+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class V{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,u]=yt(e,t);if(this.el=V.createElement(c,r),mt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=mt.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(Ye)){const t=u[s++],r=i.getAttribute(e).split(Qe),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:a[2],strings:r,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),i.removeAttribute(e)}else e.startsWith(Qe)&&(l.push({type:6,index:o}),i.removeAttribute(e));if(dt.test(i.tagName)){const e=i.textContent.split(Qe),t=e.length-1;if(t>0){i.textContent=We?We.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],et()),mt.nextNode(),l.push({type:2,index:++o});i.append(e[t],et())}}}else if(8===i.nodeType)if(i.data===Ze)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(Qe,e+1));)l.push({type:7,index:o}),e+=Qe.length-1}o++}}static createElement(e,t){const r=Xe.createElement("template");return r.innerHTML=e,r}}function _t(e,t,r=e,i){if(t===bt)return t;let o=void 0!==i?r._$Co?.[i]:r._$Cl;const s=tt(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(e),o._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(t=_t(e,o._$AS(e,t.values),o,i)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Xe).importNode(t,!0);mt.currentNode=i;let o=mt.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new M(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new L(o,this,e)),this._$AV.push(t),l=r[++a]}s!==l?.index&&(o=mt.nextNode(),s++)}return mt.currentNode=Xe,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=gt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_t(this,e,t),tt(e)?e===gt||null==e||""===e?(this._$AH!==gt&&this._$AR(),this._$AH=gt):e!==this._$AH&&e!==bt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):it(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==gt&&tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=V.createElement(vt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new lit_html_S(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=ft.get(e.strings);return void 0===t&&ft.set(e.strings,t=new V(e)),t}k(e){rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new M(this.S(et()),this.S(et()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=gt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=gt}_$AI(e,t=this,r,i){const o=this.strings;let s=!1;if(void 0===o)e=_t(this,e,t,0),s=!tt(e)||e!==this._$AH&&e!==bt,s&&(this._$AH=e);else{const i=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=_t(this,i[r+a],t,a),l===bt&&(l=this._$AH[a]),s||=!tt(l)||l!==this._$AH[a],l===gt?e=gt:e!==gt&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}s&&!i&&this.j(e)}j(e){e===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===gt?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==gt)}}class I extends R{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=_t(this,e,t,0)??gt)===bt)return;const r=this._$AH,i=e===gt&&r!==gt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==gt&&(r===gt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){_t(this,e)}}const wt=Ve.litHtmlPolyfillSupport;wt?.(V,M),(Ve.litHtmlVersions??=[]).push("3.1.2");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let o=i._$litPart$;if(void 0===o){const e=r?.renderBefore??null;i._$litPart$=o=new M(t.insertBefore(et(),e),e,void 0,r??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const $t=globalThis.litElementPolyfillSupport;$t?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.4");const At=e=>(t,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},kt={attribute:!0,type:String,converter:Ge,reflect:!1,hasChanged:je},xt=(e=kt,t,r)=>{const{kind:i,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,e),"accessor"===i){const{name:i}=r;return{set(r){const o=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,o,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=r;return function(r){const o=this[i];t.call(this,r),this.requestUpdate(i,o,e)}}throw Error("Unsupported decorator location: "+i)};function St(e){return(t,r)=>"object"==typeof r?xt(e,t,r):((e,t,r)=>{const i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}const Pt=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function Ct(e,t,r){return e?t(e):r?.(e)}Re`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const Et=Re`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Rt=Re`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,Tt=Re`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Et}
	}
	a:hover {
		text-decoration: underline;
	}
`;Re`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var Mt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Dt=(e,t,r,i)=>{for(var o,s=i>1?void 0:i?Lt(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Mt(t,r,s),s};let zt=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return null!=this.href?pt`<a class="control" part="base" tabindex="${!1===this.disabled?-1:0}" href=${this.href}
				><slot></slot
			></a>`:pt`<button class="control" part="base" ?disabled=${this.disabled}><slot></slot></button>`}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};zt.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},zt.styles=[Rt,Re`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-compact-padding: 0.4rem 0.4rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			.control {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${Et}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}
		`],Dt([function(e,t){return(r,i,o)=>{const s=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?r:o??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Pt(r,i,{get(){let r=e.call(this);return void 0===r&&(r=s(this),(null!==r||this.hasUpdated)&&t.call(this,r)),r}})}return Pt(r,i,{get(){return s(this)}})}}(".control")],zt.prototype,"control",2),Dt([St({type:Boolean,reflect:!0})],zt.prototype,"full",2),Dt([St({type:Boolean,reflect:!0})],zt.prototype,"disabled",2),Dt([St({reflect:!0})],zt.prototype,"density",2),Dt([St()],zt.prototype,"href",2),Dt([St({reflect:!0})],zt.prototype,"role",1),Dt([St()],zt.prototype,"appearance",2),zt=Dt([At("gl-button")],zt);var Ut=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Bt=(e,t,r,i)=>{for(var o,s=i>1?void 0:i?Ot(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ut(t,r,s),s};let It=class extends lit_element_s{constructor(){super(...arguments),this.editor=!1}render(){return pt`<div class="group"><slot></slot></div>`}};It.styles=[Rt,Re`
			:host {
				display: block;
				max-width: 30rem;
				margin-right: auto;
				margin-left: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			@media (min-width: 640px) {
				:host(:not([editor])) {
					max-width: 100%;
				}
			}

			.group {
				display: inline-flex;
				gap: 0.4rem;
				width: 100%;
				max-width: 30rem;
			}
		`],Bt([St({type:Boolean})],It.prototype,"editor",2),It=Bt([At("button-container")],It);var Ht=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Ft=(e,t,r,i)=>{for(var o,s=i>1?void 0:i?Nt(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ht(t,r,s),s};const Gt=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-arrow-up-force":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b"});let jt=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};jt.styles=Re`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${Ee(Object.entries(Gt).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,Ft([St()],jt.prototype,"icon",2),Ft([St()],jt.prototype,"modifier",2),Ft([St({type:Number})],jt.prototype,"size",2),jt=Ft([At("code-icon")],jt);var qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Wt=(e,t,r,i)=>{for(var o,s=i>1?void 0:i?Vt(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&qt(t,r,s),s};let Kt=class extends lit_element_s{constructor(){super(...arguments),this.image="",this.name="",this.organizationsCount=0,this.days=0,this.state=r.Free,this.plan="",this.trialReactivationCount=0}get daysRemaining(){return this.days<1?"<1 day":G("day",this.days)}get planName(){switch(this.state){case r.Free:case r.FreePreviewTrialExpired:case r.FreePlusTrialExpired:case r.FreePlusTrialReactivationEligible:return"GitKraken Free";case r.FreeInPreviewTrial:case r.FreePlusInTrial:return"GitKraken Pro (Trial)";case r.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}get daysLeft(){switch(this.state){case r.FreeInPreviewTrial:case r.FreePlusInTrial:return`, ${this.daysRemaining} left`;default:return""}}get hasAccount(){return null!=(e=this.state)&&0!==e&&2!==e&&1!==e;var e}get isReactivatedTrial(){return this.state===r.FreePlusInTrial&&this.trialReactivationCount>0}renderAccountInfo(){return this.hasAccount?pt`
			<div class="account">
				<div class="account__media">
					${this.image?pt`<img src=${this.image} class="account__image" />`:pt`<code-icon icon="account" size="34"></code-icon>`}
				</div>
				<div class="account__details">
					<p class="account__title">${this.name}</p>
					${Ct(0===this.organizationsCount,(()=>pt`<p class="account__access">${this.planName}${this.daysLeft}</p>`))}
				</div>
				<div class="account__signout">
					<gl-button appearance="toolbar" href="command:gitlens.plus.logout"
						><code-icon icon="sign-out" title="Sign Out" aria-label="Sign Out"></code-icon
					></gl-button>
				</div>
			</div>
		`:gt}renderOrganization(){return this.hasAccount&&this.organization?pt`
			<div class="account account--org">
				<div class="account__media">
					<code-icon icon="organization" size="22"></code-icon>
				</div>
				<div class="account__details">
					<p class="account__title">${this.organization}</p>
					<p class="account__access">${this.planName}${this.daysLeft}</p>
				</div>
				${Ct(this.organizationsCount>1,(()=>pt`<div class="account__signout">
							<span class="account__badge">+${this.organizationsCount-1}</span>
							<gl-button appearance="toolbar" href="command:gitlens.gk.switchOrganization"
								><code-icon
									icon="arrow-swap"
									title="Switch Organization"
									aria-label="Switch Organization"
								></code-icon
							></gl-button>
						</div>`))}
			</div>
		`:gt}renderAccountState(){const e=new Date("2023-12-31T07:59:00.000Z").getTime(),t=Date.now()<e;switch(this.state){case r.VerificationRequired:return pt`
					<p>You must verify your email before you can continue.</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.resendVerification"
							>Resend verification email</gl-button
						>
					</button-container>
					<button-container>
						<gl-button full href="command:gitlens.plus.validate">Refresh verification status</gl-button>
					</button-container>
				`;case r.Free:case r.FreeInPreviewTrial:return pt`
					<p>
						Sign up for access to our developer productivity and collaboration services, e.g. Workspaces, or
						<a href="command:gitlens.plus.login">sign in</a>.
					</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.signUp">Sign Up</gl-button>
					</button-container>
					<p>Signing up starts a free 7-day GitKraken trial.</p>
				`;case r.FreePreviewTrialExpired:return pt`
					<p>
						Your 3-day preview has ended. Start a free GitLens Pro trial to get an additional 7 days, or
						<a href="command:gitlens.plus.login">sign in</a>.
					</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.signUp">Start Pro Trial</gl-button>
					</button-container>
					<p>
						Your Pro trial provides access to the entire
						<a href="https://www.gitkraken.com/suite">GitKraken suite</a>, unleashing powerful Git
						visualization & productivity capabilities everywhere you work: IDE, desktop, browser, and
						terminal.
					</p>
				`;case r.FreePlusTrialExpired:return pt`
					<p>
						Your GitLens Pro trial has ended. Please upgrade to continue to use ✨ features on privately
						hosted repos.
					</p>
					${Ct(t,(()=>pt`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/hs23?utm_source=holiday_special&utm_medium=gitlens_banner&utm_campaign=holiday_special_2023"}
									>Holiday Special: 50% off first seat of Pro — only $4/month!</a
								>
							</p>`),(()=>pt`<p style="text-align: center;">
								Special: 50% off first seat of Pro — only $4/month!
							</p>`))}
					<button-container>
						<gl-button full href="command:gitlens.plus.purchase">Get GitLens Pro</gl-button>
					</button-container>
					<p>
						A Pro account provides access to the entire
						<a href="https://www.gitkraken.com/suite">GitKraken suite</a>, unleashing powerful Git
						visualization & productivity capabilities everywhere you work: IDE, desktop, browser, and
						terminal.
					</p>
				`;case r.FreePlusTrialReactivationEligible:return pt`
					<p>
						You're eligible to reactivate your GitLens Pro trial and experience all the new Pro features —
						free for another 7 days!
					</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.reactivateProTrial">Try Pro</gl-button>
					</button-container>
					<p>
						Your Pro trial provides access to the entire
						<a href="https://www.gitkraken.com/suite">GitKraken suite</a>, unleashing powerful Git
						visualization & productivity capabilities everywhere you work: IDE, desktop, browser, and
						terminal.
					</p>
				`;case r.FreePlusInTrial:return pt`
					<p>
						${this.isReactivatedTrial?pt`<a href="https://help.gitkraken.com/gitlens/gitlens-release-notes-current/"
										>See what's new</a
									>
									with
									${G("day",this.days,{infix:" more "})}
									in your GitLens Pro trial.`:`You have\n\t\t\t\t\t\t${this.daysRemaining} remaining in your GitLens Pro trial.`}
						Once your trial ends, you'll need a paid plan to continue using ✨ features.
					</p>
					${Ct(t,(()=>pt`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/hs23?utm_source=holiday_special&utm_medium=gitlens_banner&utm_campaign=holiday_special_2023"}
									>Holiday Special: 50% off first seat of Pro — only $4/month!</a
								>
							</p>`),(()=>pt`<p style="text-align: center;">
								Special: <b>50% off first seat of Pro</b> — only $4/month!
							</p>`))}
					<button-container>
						<gl-button full href="command:gitlens.plus.purchase">Upgrade to Pro</gl-button>
					</button-container>
					<p>
						A Pro account provides access to the entire
						<a href="https://www.gitkraken.com/suite">GitKraken suite</a>, unleashing powerful Git
						visualization & productivity capabilities everywhere you work: IDE, desktop, browser, and
						terminal.
					</p>
				`;case r.Paid:return pt`
					<button-container>
						<gl-button appearance="secondary" full href="command:gitlens.plus.manage"
							>Manage Account</gl-button
						>
					</button-container>
					<p>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</p>
					<p>
						Try our
						<a href="https://www.gitkraken.com/suite">other developer tools</a> also included in your plan.
					</p>
				`}return gt}render(){return pt`${this.renderAccountInfo()}${this.renderOrganization()}${this.renderAccountState()}`}};Kt.styles=[Rt,Tt,Re`
			:host {
				display: block;
				margin-bottom: 1.3rem;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			.account {
				position: relative;
				display: grid;
				gap: 0 0.8rem;
				grid-template-columns: 3.4rem auto min-content;
				grid-auto-flow: column;
				margin-bottom: 1.3rem;
			}

			.account--org {
				font-size: 0.9em;
				line-height: 1.2;
				margin-top: -1rem;
			}

			.account__media {
				grid-column: 1;
				grid-row: 1 / span 2;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.account--org .account__media {
				color: var(--color-foreground--65);
			}

			.account__image {
				width: 100%;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			.account__details {
				grid-row: 1 / span 2;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.account__title {
				font-size: 1.5rem;
				font-weight: 600;
				margin: 0;
			}

			.account--org .account__title {
				font-size: 1.2rem;
				font-weight: normal;
			}

			.account__access {
				position: relative;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.account__signout {
				grid-row: 1 / span 2;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.account__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
			}

			.repo-access {
				font-size: 1.1em;
				margin-right: 0.2rem;
			}
			.repo-access:not(.is-pro) {
				filter: grayscale(1) brightness(0.7);
			}
		`],Wt([St()],Kt.prototype,"image",2),Wt([St()],Kt.prototype,"name",2),Wt([St()],Kt.prototype,"organization",2),Wt([St({type:Number})],Kt.prototype,"organizationsCount",2),Wt([St({type:Number})],Kt.prototype,"days",2),Wt([St({type:Number})],Kt.prototype,"state",2),Wt([St()],Kt.prototype,"plan",2),Wt([St({type:Number})],Kt.prototype,"trialReactivationCount",2),Kt=Wt([At("account-content")],Kt);class AccountApp extends App{constructor(){super("AccountApp")}onInitialize(){this.state=this.getState()??this.state,this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(S.on("[data-action]","click",((e,t)=>this.onDataActionClicked(e,t)))),e}onMessageReceived(e){if(e.method===u.method)s(u,e,(e=>{this.state.subscription=e.subscription,this.state.avatar=e.avatar,this.state.organizationsCount=e.organizationsCount,this.state.timestamp=Date.now(),this.setState(this.state),this.updateState()}));else super.onMessageReceived?.(e)}onDataActionClicked(e,t){const r=t.dataset.action;this.onActionClickedCore(r)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(c,{command:e.slice(8)})}getDaysRemaining(){return this.state.subscription.state!==r.FreePlusInTrial?0:i(this.state.subscription,"days")??0}updateState(){const e=this.getDaysRemaining(),{subscription:t,avatar:r,organizationsCount:i}=this.state,o=document.getElementById("account-content");o.image=r??"",o.name=t.account?.name??"",o.state=t.state,o.organization=t.activeOrganization?.name??"",o.organizationsCount=i??0,o.plan=t.plan.effective.name,o.days=e,o.trialReactivationCount=t.plan.effective.trialReactivationCount}}new AccountApp;var Yt=t.r;export{Yt as AccountApp};