var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};function o(e,t,o){let i,n,r,a,l;function c(e){const o=e-(n??0);return null==n||o>=t||o<0}function d(){const e=Date.now();if(c(e))h();else{l=setTimeout(d,t-(e-(n??0)))}}function h(){return l=void 0,i?function(){const t=i,o=r;return i=r=void 0,a=e.apply(o,t),a}():(i=void 0,r=void 0,a)}function u(...e){const h=Date.now(),u=c(h);return i=null!=o&&i?o(i,e):e,r=this,n=h,u&&null==l?(l=setTimeout(d,t),a):(null==l&&(l=setTimeout(d,t)),a)}return u.cancel=function(){null!=l&&clearTimeout(l),i=void 0,n=void 0,r=void 0,l=void 0},u.flush=function(){return null==l?a:(clearTimeout(l),h())},u.pending=function(){return null!=l},u}e.d(t,{L:()=>CommitDetailsApp});const i=",",n="=",r="{",a="(",l=")",c=/\(([\s\S]*)\)/,d=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,h=/\s?=.*$/;const u=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=p(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=p(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function p(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function g(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const m={enabled:e=>u.enabled(e)||u.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":u.error("",t,o,...i);break;case"warn":u.warn(t,o,...i);break;case"info":u.log(t,o,...i);break;default:u.debug(t,o,...i)}}};class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function f(e,t,o){e.method===t.method&&o(t.params,e)}const b=new IpcCommandType("webview/ready"),v=new IpcCommandType("webview/focus"),y=new IpcCommandType("command/execute");new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");var w,_;(_=w||(w={})).on=function(e,t,o,i){let n=!1;if("string"==typeof e){const r=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,r,i??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,r,i??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,i??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,r,i??!1))}}},_.insertTemplate=function(e,t,o){const i=document.getElementById(e);if(t.replaceChildren(i?.content.cloneNode(!0)),t.className=i.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const i=o.bindings[e];null!=i&&(t.textContent=String(i))}}},_.resetSlot=function(e){e.replaceChildren(),e.className=""};function x(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}function k(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}const C=500,A=x(),S=new Map;function E(e){S.delete(e)}function P(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=A.next();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}Error;Error;var O=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(O||{});const{fromCharCode:R}=String;new TextEncoder;function T(e){const[t,o]=k(e);return 1e3*t+Math.floor(o/1e6)}function D(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;return o.only?i:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${i}`}const M=Symbol("logInstanceNameFn");function I(e){return function(e,t=!1){let o,p,m,f,b,v=0,y=!1,w=!1,_=!0;null!=e&&({args:o,if:p,enter:m,exit:f,prefix:b,logThreshold:v=0,scoped:y=!0,singleLine:w=!1,timed:_=!0}=e);v>0&&(w=!0,_=!0);_&&(y=!0);const x=u.isDebugging,P=t?u.debug:u.log,O=x?"debug":"info";return(e,t,R)=>{let D,I;if("function"==typeof R.value?(D=R.value,I="value"):"function"==typeof R.get&&(D=R.get,I="get"),null==D||null==I)throw new Error("Not supported");const L=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(d,"")||t,t=t.slice(0,t.indexOf(r));let o=t.indexOf(a),u=t.indexOf(l);o=o>=0?o+1:0,u=u>0?u:t.indexOf(n),t=t.slice(o,u),t=`(${t})`;const p=c.exec(t);return null!=p?p[1].split(i).map((e=>e.trim().replace(h,""))):[]}(D):[];R[I]=function(...e){if(!x&&!u.enabled(O)||null!=p&&!p.apply(this,e))return D.apply(this,e);const i=A.next(),n=null!=this?this.constructor?.[M]?.(this,g(this))??g(this):void 0;let r,a=n?y?`[${i.toString(16).padStart(5)}] ${n}.${t}`:`${n}.${t}`:t;null!=b&&(a=b({id:i,instance:this,instanceName:n??"",name:t,prefix:a},...e)),y&&(r={scopeId:i,prefix:a},function(e,t){S.set(e,t)}(i,r));const l=null!=m?m(...e):"";let c;if(!1===o||0===e.length)c="",w||P.call(u,`${a}${l}`);else{let t;c="";let i,n,r,d=-1;for(r of e){if(i=L[++d],t=o?.[d],null!=t){if("boolean"==typeof t)continue;if(c.length>0&&(c+=", "),"string"==typeof t){c+=t;continue}n=String(t(r))}else c.length>0&&(c+=", "),n=u.toLoggable(r);c+=i?`${i}=${n}`:n}w||P.call(u,c?`${a}${l}(${c})`:`${a}${l}`)}if(w||_||null!=f){const t=_?k():void 0,o=e=>{const o=void 0!==t?` [${T(t)}ms]`:"";w?u.error(e,c?`${a}${l}(${c})`:`${a}${l}`,r?.exitDetails?`failed${r.exitDetails}${o}`:`failed${o}`):u.error(e,a,r?.exitDetails?`failed${r.exitDetails}${o}`:`failed${o}`),y&&E(i)};let n;try{n=D.apply(this,e)}catch(e){throw o(e),e}const h=e=>{let o,n,d,h;if(null!=t?(o=T(t),o>C?(n=u.warn,d=` [*${o}ms] (slow)`):(n=P,d=` [${o}ms]`)):(d="",n=P),null!=f)if("function"==typeof f)try{h=f(e)}catch(e){h=`@log.exit error: ${e}`}else!0===f&&(h=`returned ${u.toLoggable(e)}`);else r?.exitFailed?(h=r.exitFailed,n=u.error):h="completed";w?(0===v||o>v)&&n.call(u,c?`${a}${l}(${c}) ${h}${r?.exitDetails||""}${d}`:`${a}${l} ${h}${r?.exitDetails||""}${d}`):n.call(u,c?`${a}(${c}) ${h}${r?.exitDetails||""}${d}`:`${a} ${h}${r?.exitDetails||""}${d}`),y&&E(i)};return null!=n&&(null!=(d=n)&&(d instanceof Promise||"function"==typeof d?.then))?n.then(h,o):h(n),n}var d;return D.apply(this,e)}}}(e,!0)}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:P(e??""),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??m,this._time=k(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=k(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=k(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=k(this._time),n=1e3*o+Math.floor(i/1e6),r=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${n}ms]${e?.suffix??""}`)}}const L=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};L._noop=function(){};let N=L;const U={done:!0,value:void 0},B=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};B.Undefined=new B(void 0);let j=B;class LinkedList{constructor(){this._first=j.Undefined,this._last=j.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===j.Undefined}clear(){this._first=j.Undefined,this._last=j.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new j(e);if(this._first===j.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===j.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===j.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==j.Undefined&&e.next!==j.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===j.Undefined&&e.next===j.Undefined?(this._first=j.Undefined,this._last=j.Undefined):e.next===j.Undefined?(this._last=this._last.prev,this._last.next=j.Undefined):e.prev===j.Undefined&&(this._first=this._first.next,this._first.prev=j.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===j.Undefined?U:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==j.Undefined;t=t.next)e.push(t.element);return e}}var H=Object.defineProperty,z=Object.getOwnPropertyDescriptor,F=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?z(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&H(t,o,r),r};let q;function G(){return q??=acquireVsCodeApi()}const W=x();function K(){return`webview:${W.next()}`}let Y=class{constructor(e){this.appName=e,this._onReceiveMessage=new N,this._api=G(),this._disposable=w.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=S.get(A.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??m).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(P(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}this._onReceiveMessage.fire(o)}sendCommand(e,t){const o=K();this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const i=K(),n=new Promise(((e,t)=>{let n;const r=[w.on(window,"message",(t=>{f(o,t.data,(o=>{t.data.completionId===i&&(r.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=n&&(clearTimeout(n),n=void 0)}}];n=setTimeout((()=>{n=void 0,r.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:i,method:e.method,params:t,completionId:i}),n}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Z;function J(e,t){const o=e+t,i=t<0?o<0?0:o:o>255?255:o;return Math.round(i)}function X(e,t){return ee(e,-t)}function ee(e,t){const o=function(e){const t=de(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[i,n,r,a]=o,l=255*t/100;return`rgba(${J(i,l)}, ${J(n,l)}, ${J(r,l)}, ${a})`}function te(e,t){const o=re.from(e);return null==o?e:o.transparent(t/100).toString()}F([I({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Y.prototype,"onMessageReceived",1),F([I({args:{0:e=>e.method,1:!1}})],Y.prototype,"sendCommand",1),F([I({args:{0:e=>e.method,1:!1,2:!1}})],Y.prototype,"sendCommandWithCompletion",1),F([I({args:{0:e=>`${e.id}, method=${e.method}`}})],Y.prototype,"postMessage",1),Y=F([(Z=(e,t)=>`${e.appName}(${t})`,e=>{e[M]=Z})],Y);function oe(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=oe(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oe(Math.max(Math.min(1,t),0),3),this.l=oe(Math.max(Math.min(1,o),0),3),this.a=oe(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,n=e.a,r=Math.max(t,o,i),a=Math.min(t,o,i);let l=0,c=0;const d=(a+r)/2,h=r-a;if(h>0){switch(c=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),r){case t:l=(o-i)/h+(o<i?6:0);break;case o:l=(i-t)/h+2;break;case i:l=(t-o)/h+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,n)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:i,a:n}=e;let r,a,l;if(0===o)r=a=l=i;else{const e=i<.5?i*(1+o):i+o-i*o,n=2*i-e;r=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,o,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oe(Math.max(Math.min(1,t),0),3),this.v=oe(Math.max(Math.min(1,o),0),3),this.a=oe(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,n=Math.max(t,o,i),r=n-Math.min(t,o,i),a=0===n?0:r/n;let l;return l=0===r?0:n===t?((o-i)/r%6+6)%6:n===o?(i-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:o,v:i,a:n}=e,r=i*o,a=r*(1-Math.abs(t/60%2-1)),l=i-r;let[c,d,h]=[0,0,0];return t<60?(c=r,d=a):t<120?(c=a,d=r):t<180?(d=r,h=a):t<240?(d=a,h=r):t<300?(c=a,h=r):t<=360&&(c=r,h=a),c=Math.round(255*(c+l)),d=Math.round(255*(d+l)),h=Math.round(255*(h+l)),new RGBA(c,d,h,n)}}function ie(e,t){return t.getPropertyValue(e).trim()}const ne=class _Color{static from(e){return e instanceof _Color?e:de(e)||_Color.red}static fromCssVariable(e,t){return de(ie(e,t))||_Color.red}static fromHex(e){return he(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return oe(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new re(new RGBA(0,0,0,e.rgba.a));if(1===t)return new re(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let i=20;const n=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!i--?r:a>t?n(e,r):n(r,o)},r=(o>t?n(re.black,e):n(e,re.white)).rgba;return new re(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:i,a:n}=this.rgba;return new _Color(new RGBA(t,o,i,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,i=t.a,n=o+i*(1-o);if(n<1e-6)return _Color.transparent;const r=this.rgba.r*o/n+t.r*i*(1-o)/n,a=this.rgba.g*o/n+t.g*i*(1-o)/n,l=this.rgba.b*o/n+t.b*i*(1-o)/n;return new _Color(new RGBA(r,a,l,n))}mix(e,t){return function(e,t,o){const i=e.rgba,n=t.rgba;return new re(new RGBA(i.r+o*(n.r-i.r),i.g+o*(n.g-i.g),i.b+o*(n.b-i.b),i.a+o*(n.a-i.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:i,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-i),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return le(e);return se(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const i=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-i)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const i=e.getRelativeLuminance();return o=o*(i-t.getRelativeLuminance())/i,e.darken(o)}};ne.white=new ne(new RGBA(255,255,255,1)),ne.black=new ne(new RGBA(0,0,0,1)),ne.red=new ne(new RGBA(255,0,0,1)),ne.blue=new ne(new RGBA(0,0,255,1)),ne.green=new ne(new RGBA(0,255,0,1)),ne.cyan=new ne(new RGBA(0,255,255,1)),ne.lightgrey=new ne(new RGBA(211,211,211,1)),ne.transparent=new ne(new RGBA(0,0,0,0));let re=ne;function se(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function ae(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function le(e){return`#${ae(e.rgba.r)}${ae(e.rgba.g)}${ae(e.rgba.b)}`}const ce=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function de(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===O.Hash)return he(e);const t=ce.exec(e);if(null==t)return null;const o=t[1];let i;switch(o){case"rgb":case"hsl":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new re(new RGBA(i[0],i[1],i[2],i[3]));case"hsl":case"hsla":return new re(new HSLA(i[0],i[1],i[2],i[3]))}return re.red}function he(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==O.Hash)return null;switch(t){case 7:{const t=16*ue(e.charCodeAt(1))+ue(e.charCodeAt(2)),o=16*ue(e.charCodeAt(3))+ue(e.charCodeAt(4)),i=16*ue(e.charCodeAt(5))+ue(e.charCodeAt(6));return new re(new RGBA(t,o,i,1))}case 9:{const t=16*ue(e.charCodeAt(1))+ue(e.charCodeAt(2)),o=16*ue(e.charCodeAt(3))+ue(e.charCodeAt(4)),i=16*ue(e.charCodeAt(5))+ue(e.charCodeAt(6)),n=16*ue(e.charCodeAt(7))+ue(e.charCodeAt(8));return new re(new RGBA(t,o,i,n/255))}case 4:{const t=ue(e.charCodeAt(1)),o=ue(e.charCodeAt(2)),i=ue(e.charCodeAt(3));return new re(new RGBA(16*t+t,16*o+o,16*i+i))}case 5:{const t=ue(e.charCodeAt(1)),o=ue(e.charCodeAt(2)),i=ue(e.charCodeAt(3)),n=ue(e.charCodeAt(4));return new re(new RGBA(16*t+t,16*o+o,16*i+i,(16*n+n)/255))}default:return null}}function ue(e){switch(e){case O.Digit0:return 0;case O.Digit1:return 1;case O.Digit2:return 2;case O.Digit3:return 3;case O.Digit4:return 4;case O.Digit5:return 5;case O.Digit6:return 6;case O.Digit7:return 7;case O.Digit8:return 8;case O.Digit9:return 9;case O.a:case O.A:return 10;case O.b:case O.B:return 11;case O.c:case O.C:return 12;case O.d:case O.D:return 13;case O.e:case O.E:return 14;case O.f:case O.F:return 15}return 0}const pe=new N,ge=pe.event;function me(e){const t=document.documentElement,o=window.getComputedStyle(t),i=document.body.classList,n=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),r=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=t.style,l=ie("--vscode-editor-background",o);let c=ie("--vscode-editor-foreground",o);c||(c=ie("--vscode-foreground",o));let d=ie("--color-background",o);return a.setProperty("--color-background--lighten-05",ee(d,5)),a.setProperty("--color-background--darken-05",X(d,5)),a.setProperty("--color-background--lighten-075",ee(d,7.5)),a.setProperty("--color-background--darken-075",X(d,7.5)),a.setProperty("--color-background--lighten-10",ee(d,10)),a.setProperty("--color-background--darken-10",X(d,10)),a.setProperty("--color-background--lighten-15",ee(d,15)),a.setProperty("--color-background--darken-15",X(d,15)),a.setProperty("--color-background--lighten-30",ee(d,30)),a.setProperty("--color-background--darken-30",X(d,30)),a.setProperty("--color-background--lighten-50",ee(d,50)),a.setProperty("--color-background--darken-50",X(d,50)),d=ie("--color-button-background",o),a.setProperty("--color-button-background--darken-30",X(d,30)),d=ie("--color-highlight",o),a.setProperty("--color-highlight--75",te(d,75)),a.setProperty("--color-highlight--50",te(d,50)),a.setProperty("--color-highlight--25",te(d,25)),d=ie("--color-button-secondary-background",o),a.setProperty("--color-button-secondary-background--darken-30",X(d,30)),d=ie("--color-foreground",o),a.setProperty("--color-foreground--85",te(d,85)),a.setProperty("--color-foreground--75",te(d,75)),a.setProperty("--color-foreground--65",te(d,65)),a.setProperty("--color-foreground--50",te(d,50)),d=ie("--color-link-foreground",o),a.setProperty("--color-link-foreground--darken-20",X(d,20)),a.setProperty("--color-link-foreground--lighten-20",ee(d,20)),d=ie("--color-alert-infoBackground",o),a.setProperty("--color-alert-infoHoverBackground",n?X(d,5):ee(d,5)),d=ie("--color-alert-warningBackground",o),a.setProperty("--color-alert-warningHoverBackground",n?X(d,5):ee(d,5)),d=ie("--color-alert-errorBackground",o),a.setProperty("--color-alert-errorHoverBackground",n?X(d,5):ee(d,5)),d=n?X(l,5):ee(l,5),a.setProperty("--color-alert-neutralBackground",d),a.setProperty("--color-alert-neutralHoverBackground",n?X(d,5):ee(d,5)),{colors:{background:l,foreground:c},computedStyle:o,isLightTheme:n,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=me();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(ge(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",u.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=G(),this._hostIpc=new Y(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{pe.fire(me(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>this.onMessageReceived(e)))),this.sendCommand(b,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(w.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=o((e=>{this.sendCommand(v,e)}),150);this.bindDisposables.push(w.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),w.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?u.log(e,...t):u.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendCommandWithCompletion(e,t,o){return this._hostIpc.sendCommandWithCompletion(e,t,o)}setState(e){this._api.setState(e)}}var fe={408:(e,t)=>{var o=Symbol.for("react.element"),i=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,b={};function v(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||m}function y(){}function w(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var _=w.prototype=new y;_.constructor=w,f(_,v.prototype),_.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,C={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,i){var n,r={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,n)&&!A.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(1===c)r.children=i;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];r.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===r[n]&&(r[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:l,props:r,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+O(c,0):r,x(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),R(a,t,n,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",x(e))for(var d=0;d<e.length;d++){var h=r+O(l=e[d],d);c+=R(l,t,n,h,a)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),d=0;!(l=e.next()).done;)c+=R(l=l.value,t,n,h=r+O(l,d++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,o){if(null==e)return e;var i=[],n=0;return R(e,i,"","",(function(e){return t.call(o,e,n++)})),i}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},I={transition:null},L={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:I,ReactCurrentOwner:C};t.Children={map:T,forEach:function(e,t,o){T(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=n,t.Profiler=a,t.PureComponent=w,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=f({},e.props),r=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=C.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)k.call(t,d)&&!A.hasOwnProperty(d)&&(n[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)n.children=i;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];n.children=c}return{$$typeof:o,type:e.type,key:r,ref:a,props:n,_owner:l}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,o){return M.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,o){return M.current.useReducer(e,t,o)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return M.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},be={};function ve(e){var t=be[e];if(void 0!==t)return t.exports;var o=be[e]={exports:{}};return fe[e](o,o.exports,ve),o.exports}ve.d=(e,t)=>{for(var o in t)ve.o(t,o)&&!ve.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},ve.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var ye={};(()=>{ve.d(ye,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Mt,ud:()=>Ut,wt:()=>Bt,ne:()=>Ht,Ku:()=>qt,FU:()=>Wt,XO:()=>co,Ze:()=>ho,K$:()=>uo,cX:()=>Co,Js:()=>Ao,J9:()=>So,si:()=>ro,sg:()=>Po,hW:()=>Oo,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>To,WV:()=>ae,h4:()=>se,kZ:()=>re});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=i.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(o,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new s(i,e,o)},r=(o,i)=>{if(t)o.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",b=g.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},w=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,i=!1,n){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??w)(i?n:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,b?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.0.0");const x=globalThis,k=x.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,E="?"+S,P=`<${E}>`,O=document,R=()=>O.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,M="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,N=/>/g,U=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,z=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),F=z(1),q=(z(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),W=new WeakMap,K=O.createTreeWalker(O,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=((e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",a=I;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,c=a.exec(o),null!==c);)h=a.lastIndex,a===I?"!--"===c[1]?a=L:void 0!==c[1]?a=N:void 0!==c[2]?(H.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=U):void 0!==c[3]&&(a=U):a===U?">"===c[0]?(a=n??I,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?U:'"'===c[3]?j:B):a===j||a===B?a=U:a===L||a===N?a=I:(a=U,n=void 0);const u=a===U&&e[t+1].startsWith("/>")?" ":"";r+=a===I?o+P:d>=0?(i.push(l),o.slice(0,d)+A+o.slice(d)+S+u):o+S+(-2===d?t:u)}return[Y(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]})(e,t);if(this.el=Q.createElement(c,o),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const t=d[r++],o=i.getAttribute(e).split(S),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?it:"?"===a[1]?rt:"@"===a[1]?st:nt}),i.removeAttribute(e)}else e.startsWith(S)&&(l.push({type:6,index:n}),i.removeAttribute(e));if(H.test(i.tagName)){const e=i.textContent.split(S),t=e.length-1;if(t>0){i.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],R()),K.nextNode(),l.push({type:2,index:++n});i.append(e[t],R())}}}else if(8===i.nodeType)if(i.data===E)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(S,e+1));)l.push({type:7,index:n}),e+=S.length-1}n++}}static createElement(e,t){const o=O.createElement("template");return o.innerHTML=e,o}}function Z(e,t,o=e,i){if(t===q)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=T(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=Z(e,n._$AS(e,t.values),n,i)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??O).importNode(t,!0);K.currentNode=i;let n=K.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new ot(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new at(n,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(n=K.nextNode(),r++)}return K.currentNode=O,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),T(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==G&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(Y(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new et(i,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Q(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new ot(this.k(R()),this.k(R()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=Z(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const i=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=Z(this,i[o+a],t,a),l===q&&(l=this._$AH[a]),r||=!T(l)||l!==this._$AH[a],l===G?e=G:e!==G&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class st extends nt{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??G)===q)return;const o=this._$AH,i=e===G&&o!==G||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==G&&(o===G||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const J=x.litHtmlPolyfillSupport;J?.(Q,ot),(x.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new ot(t.insertBefore(R(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const X=globalThis.litElementPolyfillSupport;X?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ee={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},te=(e=ee,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function oe(e){return(t,o)=>"object"==typeof o?te(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ie=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ne(e,t){return(o,i,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:a}="object"==typeof i?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ie(o,i,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),a.call(this,t)),t}return r(this)}})}return ie(o,i,{get(){return r(this)}})}}class gt extends ct{}const re=n`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,se=n``,ae=n`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,le=Math.min,ce=Math.max,de=Math.round,he=(Math.floor,e=>({x:e,y:e})),ue={left:"right",right:"left",bottom:"top",top:"bottom"},pe={start:"end",end:"start"};function ge(e,t,o){return ce(e,le(t,o))}function me(e,t){return"function"==typeof e?e(t):e}function fe(e){return e.split("-")[0]}function be(e){return e.split("-")[1]}function we(e){return"x"===e?"y":"x"}function _e(e){return"y"===e?"height":"width"}function ke(e){return["top","bottom"].includes(fe(e))?"y":"x"}function Ce(e){return we(ke(e))}function Ae(e){return e.replace(/start|end/g,(e=>pe[e]))}function Ee(e){return e.replace(/left|right|bottom|top/g,(e=>ue[e]))}function Pe(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Oe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Re(e,t,o){let{reference:i,floating:n}=e;const r=ke(t),a=Ce(t),l=_e(a),c=fe(t),d="y"===r,h=i.x+i.width/2-n.width/2,u=i.y+i.height/2-n.height/2,p=i[l]/2-n[l]/2;let g;switch(c){case"top":g={x:h,y:i.y-n.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-n.width,y:u};break;default:g={x:i.x,y:i.y}}switch(be(t)){case"start":g[a]-=p*(o&&d?-1:1);break;case"end":g[a]+=p*(o&&d?-1:1)}return g}async function Te(e,t){var o;void 0===t&&(t={});const{x:i,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=me(t,e),m=Pe(g),f=l[p?"floating"===u?"reference":"floating":u],b=Oe(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(f)))||o?f:f.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),v="floating"===u?{...a.floating,x:i,y:n}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},_=Oe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:c}):v);return{top:(b.top-_.top+m.top)/w.y,bottom:(_.bottom-b.bottom+m.bottom)/w.y,left:(b.left-_.left+m.left)/w.x,right:(_.right-b.right+m.right)/w.x}}const De=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...b}=me(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const v=fe(n),y=fe(l)===l,w=await(null==c.isRTL?void 0:c.isRTL(d.floating)),_=p||(y||!f?[Ee(l)]:function(e){const t=Ee(e);return[Ae(e),t,Ae(t)]}(l));p||"none"===m||_.push(...function(e,t,o,i){const n=be(e);let r=function(e,t,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:i:t?i:n;case"left":case"right":return t?r:a;default:return[]}}(fe(e),"start"===o,i);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(Ae)))),r}(l,f,m,w));const x=[l,..._],k=await Te(t,b),C=[];let A=(null==(i=r.flip)?void 0:i.overflows)||[];if(h&&C.push(k[v]),u){const e=function(e,t,o){void 0===o&&(o=!1);const i=be(e),n=Ce(e),r=_e(n);let a="x"===n?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ee(a)),[a,Ee(a)]}(n,a,w);C.push(k[e[0]],k[e[1]])}if(A=[...A,{placement:n,overflows:C}],!C.every((e=>e<=0))){var S,E;const e=((null==(S=r.flip)?void 0:S.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let o=null==(E=A.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!o)switch(g){case"bestFit":{var P;const e=null==(P=A.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(o=e);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}},Me=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:i}=t,n=await async function(e,t){const{placement:o,platform:i,elements:n}=e,r=await(null==i.isRTL?void 0:i.isRTL(n.floating)),a=fe(o),l=be(o),c="y"===ke(o),d=["left","top"].includes(a)?-1:1,h=r&&c?-1:1,u=me(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*h,y:p*d}:{x:p*d,y:g*h}}(t,e);return{x:o+n.x,y:i+n.y,data:n}}}};function Ie(e){return je(e)?(e.nodeName||"").toLowerCase():"#document"}function Ne(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ue(e){var t;return null==(t=(je(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function je(e){return e instanceof Node||e instanceof Ne(e).Node}function ze(e){return e instanceof Element||e instanceof Ne(e).Element}function Fe(e){return e instanceof HTMLElement||e instanceof Ne(e).HTMLElement}function qe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Ne(e).ShadowRoot)}function Ve(e){const{overflow:t,overflowX:o,overflowY:i,display:n}=Xe(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(n)}function We(e){return["table","td","th"].includes(Ie(e))}function Ke(e){const t=Ye(),o=Xe(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ye(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ze(e){return["html","body","#document"].includes(Ie(e))}function Xe(e){return Ne(e).getComputedStyle(e)}function Qe(e){return ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){if("html"===Ie(e))return e;const t=e.assignedSlot||e.parentNode||qe(e)&&e.host||Ue(e);return qe(t)?t.host:t}function lt(e){const t=tt(e);return Ze(t)?e.ownerDocument?e.ownerDocument.body:e.body:Fe(t)&&Ve(t)?t:lt(t)}function dt(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const n=lt(e),r=n===(null==(i=e.ownerDocument)?void 0:i.body),a=Ne(n);return r?t.concat(a,a.visualViewport||[],Ve(n)?n:[],a.frameElement&&o?dt(a.frameElement):[]):t.concat(n,dt(n,[],o))}function ht(e){const t=Xe(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=Fe(e),r=n?e.offsetWidth:o,a=n?e.offsetHeight:i,l=de(o)!==r||de(i)!==a;return l&&(o=r,i=a),{width:o,height:i,$:l}}function ut(e){return ze(e)?e:e.contextElement}function pt(e){const t=ut(e);if(!Fe(t))return he(1);const o=t.getBoundingClientRect(),{width:i,height:n,$:r}=ht(t);let a=(r?de(o.width):o.width)/i,l=(r?de(o.height):o.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const mt=he(0);function ft(e){const t=Ne(e);return Ye()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:mt}function bt(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const n=e.getBoundingClientRect(),r=ut(e);let a=he(1);t&&(i?ze(i)&&(a=pt(i)):a=pt(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Ne(e))&&t}(r,o,i)?ft(r):he(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,h=n.width/a.x,u=n.height/a.y;if(r){const e=Ne(r),t=i&&ze(i)?Ne(i):i;let o=e.frameElement;for(;o&&i&&t!==e;){const e=pt(o),t=o.getBoundingClientRect(),i=Xe(o),n=t.left+(o.clientLeft+parseFloat(i.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,u*=e.y,c+=n,d+=r,o=Ne(o).frameElement}}return Oe({width:h,height:u,x:c,y:d})}function vt(e){return bt(Ue(e)).left+Qe(e).scrollLeft}function yt(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=Ne(e),i=Ue(e),n=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=Ye();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=Ue(e),o=Qe(e),i=e.ownerDocument.body,n=ce(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=ce(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+vt(e);const l=-o.scrollTop;return"rtl"===Xe(i).direction&&(a+=ce(t.clientWidth,i.clientWidth)-n),{width:n,height:r,x:a,y:l}}(Ue(e));else if(ze(t))i=function(e,t){const o=bt(e,!0,"fixed"===t),i=o.top+e.clientTop,n=o.left+e.clientLeft,r=Fe(e)?pt(e):he(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:i*r.y}}(t,o);else{const o=ft(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Oe(i)}function wt(e,t){const o=tt(e);return!(o===t||!ze(o)||Ze(o))&&("fixed"===Xe(o).position||wt(o,t))}function $t(e,t,o){const i=Fe(t),n=Ue(t),r="fixed"===o,a=bt(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=he(0);if(i||!i&&!r)if(("body"!==Ie(t)||Ve(n))&&(l=Qe(t)),i){const e=bt(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=vt(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function _t(e,t){return Fe(e)&&"fixed"!==Xe(e).position?t?t(e):e.offsetParent:null}function xt(e,t){const o=Ne(e);if(!Fe(e))return o;let i=_t(e,t);for(;i&&We(i)&&"static"===Xe(i).position;)i=_t(i,t);return i&&("html"===Ie(i)||"body"===Ie(i)&&"static"===Xe(i).position&&!Ke(i))?o:i||function(e){let t=tt(e);for(;Fe(t)&&!Ze(t);){if(Ke(t))return t;t=tt(t)}return null}(e)||o}const kt={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:i}=e;const n=Fe(o),r=Ue(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},l=he(1);const c=he(0);if((n||!n&&"fixed"!==i)&&(("body"!==Ie(o)||Ve(r))&&(a=Qe(o)),Fe(o))){const e=bt(o);l=pt(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+c.x,y:t.y*l.y-a.scrollTop*l.y+c.y}},getDocumentElement:Ue,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:n}=e;const r=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let i=dt(e,[],!1).filter((e=>ze(e)&&"body"!==Ie(e))),n=null;const r="fixed"===Xe(e).position;let a=r?tt(e):e;for(;ze(a)&&!Ze(a);){const t=Xe(a),o=Ke(a);o||"fixed"!==t.position||(n=null),(r?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Ve(a)&&!o&&wt(e,a))?i=i.filter((e=>e!==a)):n=t,a=tt(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=r[0],l=r.reduce(((e,o)=>{const i=yt(t,o,n);return e.top=ce(i.top,e.top),e.right=le(i.right,e.right),e.bottom=le(i.bottom,e.bottom),e.left=ce(i.left,e.left),e}),yt(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:xt,getElementRects:async function(e){let{reference:t,floating:o,strategy:i}=e;const n=this.getOffsetParent||xt,r=this.getDimensions;return{reference:$t(t,await n(o),i),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return ht(e)},getScale:pt,isElement:ze,isRTL:function(e){return"rtl"===Xe(e).direction}},Ct=n`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var At=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ae,re,Ct]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Me(6),De(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=me(t,e),d={x:o,y:i},h=await Te(e,c),u=ke(fe(n)),p=we(u);let g=d[p],m=d[u];if(r){const e="y"===p?"bottom":"right";g=ge(g+h["y"===p?"top":"left"],g,g-h[e])}if(a){const e="y"===u?"bottom":"right";m=ge(m+h["y"===u?"top":"left"],m,m-h[e])}const f=l.fn({...e,[p]:g,[u]:m});return{...f,data:{x:f.x-o,y:f.y-i}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=me(e,t)||{};if(null==d)return{};const u=Pe(h),p={x:o,y:i},g=Ce(n),m=_e(g),f=await a.getDimensions(d),b="y"===g,v=b?"top":"left",y=b?"bottom":"right",w=b?"clientHeight":"clientWidth",_=r.reference[m]+r.reference[g]-p[g]-r.floating[m],x=p[g]-r.reference[g],k=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let C=k?k[w]:0;C&&await(null==a.isElement?void 0:a.isElement(k))||(C=l.floating[w]||r.floating[m]);const A=_/2-x/2,S=C/2-f[m]/2-1,E=le(u[v],S),P=le(u[y],S),O=E,R=C-f[m]-P,T=C/2-f[m]/2+A,D=ge(O,T,R),M=!c.arrow&&null!=be(n)&&T!=D&&r.reference[m]/2-(T<O?E:P)-f[m]/2<0,I=M?T<O?T-O:T-R:0;return{[g]:p[g]+I,data:{[g]:D,centerOffset:T-D-I,...M&&{alignmentOffset:I}},reset:M}}}))({element:this.arrowEl})),await((e,t,o)=>{const i=new Map,n={platform:kt,...o},r={...n.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:u}=Re(d,i,c),p=i,g={},m=0;for(let o=0;o<l.length;o++){const{name:r,fn:f}=l[o],{x:b,y:v,data:y,reset:w}=await f({x:h,y:u,initialPlacement:i,placement:p,strategy:n,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=b?b:h,u=null!=v?v:u,g={...g,[r]:{...g[r],...y}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(p=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:h,y:u}=Re(d,p,c))),o=-1)}return{x:h,y:u,placement:p,strategy:n,middlewareData:g}})(e,t,{...n,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:i})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=i.arrow?.x,t=i.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?F`<div part="arrow" class="arrow"></div>`:""}render(){return F`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}At([oe({type:Boolean})],xe.prototype,"arrow",void 0),At([oe({type:Boolean})],xe.prototype,"hover",void 0),At([oe()],xe.prototype,"placement",void 0),At([oe({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),At([oe({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),At([ne('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),At([ne(".popover")],xe.prototype,"popoverEl",void 0),At([ne(".arrow")],xe.prototype,"arrowEl",void 0),At([oe({state:!0,attribute:!1})],xe.prototype,"open",void 0);const St=n`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ae,re,St]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return F`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Et=n`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Et}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return F`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Pt=new Set(["children","localName","ref","style","className"]),Ot=new WeakMap,Rt=(e,t,o,i,n)=>{const r=n?.[t];void 0===r||o===i?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let i=Ot.get(e);void 0===i&&Ot.set(e,i=new Map);let n=i.get(t);void 0!==o?void 0===n?(i.set(t,n={handleEvent:o}),e.addEventListener(t,n)):n.handleEvent=o:void 0!==n&&(i.delete(t),e.removeEventListener(t,n))})(e,r,o)},Tt=({react:e,tagName:t,elementClass:o,events:i,displayName:n})=>{const r=new Set(Object.keys(i??{})),a=e.forwardRef(((n,a)=>{const l=e.useRef(null),c=e.useRef(null),d={},h={};for(const[e,t]of Object.entries(n))Pt.has(e)?d["className"===e?"class":e]=t:r.has(e)||e in o.prototype?h[e]=t:d[e]=t;return e.useLayoutEffect((()=>{if(null!==c.current){for(const e in h)Rt(c.current,e,n[e],l.current?l.current[e]:void 0,i);l.current=n}})),e.useLayoutEffect((()=>{c.current?.removeAttribute("defer-hydration")}),[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e=>{c.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}})}));return a.displayName=n??o.name,a};var Dt=ve(294);const Mt=Tt({react:Dt,tagName:Se.elementName,elementClass:Se}),It=n`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Lt=n`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Nt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class He extends gt{static{this.styles=[ae,It]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?F`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:F`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Nt([oe()],He.prototype,"src",void 0),Nt([oe()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ae,Lt]}render(){return F`<slot class="avatar-group" part="base"></slot>`}}const Ut=Tt({react:Dt,tagName:He.elementName,elementClass:He}),Bt=Tt({react:Dt,tagName:Le.elementName,elementClass:Le}),jt=n`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=jt}static{this.elementName="gk-badge"}render(){return F`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Be.prototype,"variant",void 0);const Ht=Tt({react:Dt,tagName:Be.elementName,elementClass:Be}),zt=n`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Ft=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=zt}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return F`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Ft([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Ft([oe({reflect:!0})],Ge.prototype,"type",void 0),Ft([oe()],Ge.prototype,"variant",void 0);const qt=Tt({react:Dt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Vt=n`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Gt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ae,re,Vt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return F`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>F`<span class="complexity-indicator__box"></span>`))}</div>`}}Gt([oe({type:Number})],Je.prototype,"level",void 0),Gt([oe()],Je.prototype,"label",void 0);const Wt=Tt({react:Dt,tagName:Je.elementName,elementClass:Je}),Kt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Yt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Zt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Jt;const Xt=new Map;let Qt,eo,to;new Map;const oo=["th","st","nd","rd"];function io(e){const t=e%100;return`${e}${oo[(t-20)%10]??oo[t]??oo[0]}`}var no=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ae]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,i,n]of Zt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Jt&&(null!=to?Jt=to.resolvedOptions().locale:null!=eo?Jt=eo.resolvedOptions().locale:(to=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Jt=to.resolvedOptions().locale)),"en"===Jt||Jt?.startsWith("en-")?`${Math.round(r/i)}${n}`:(null==to&&(to=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),to.format(Math.round(o/i),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return F`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,i=!0){const n=`${o??""}:${t=t??void 0}`;let r=Xt.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Yt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Kt))if(null!=t)for(const e in t){const i=t[e];if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}}return o}(t);let a;a=null==o?Qt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),i&&Xt.set(n,r)}if(null==t||Yt.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let n=Xt.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Qt:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,r),i&&Xt.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(Kt,((t,o,i,n,r,c,d,h,u,p,g,m,f,b,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in v){const o=v[t];if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return io(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??i)?.value??""}`}return i?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}no([oe({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),no([oe()],po.prototype,"format",void 0);const ro=Tt({react:Dt,tagName:po.elementName,elementClass:po}),so=n`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ao=n`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,lo=n`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[ae,lo]}static{this.elementName="gk-focus-item"}render(){return F`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[ae,ao]}static{this.elementName="gk-focus-row"}render(){return F`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[ae,ao,lo,so]}static{this.elementName="gk-focus-container"}render(){return F`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const co=Tt({react:Dt,tagName:yo.elementName,elementClass:yo}),ho=Tt({react:Dt,tagName:vo.elementName,elementClass:vo}),uo=Tt({react:Dt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const go=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return q}}),mo=e=>e??G,fo=n`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var wo=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ae,re,fo]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return F`<div class="field"><label class="${go({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${go({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${mo(this.autocomplete)}" autocorrect="${mo(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${mo(this.name)}" part="input" placeholder="${mo(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}wo([oe()],Ro.prototype,"autocomplete",void 0),wo([oe()],Ro.prototype,"autocorrect",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),wo([oe()],Ro.prototype,"label",void 0),wo([oe({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),wo([oe()],Ro.prototype,"name",void 0),wo([oe()],Ro.prototype,"placeholder",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),wo([oe({reflect:!0})],Ro.prototype,"type",void 0),wo([oe()],Ro.prototype,"value",void 0);const _o=n`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,xo=n`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,ko=n`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ae,_o]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let i=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?i=(i-1+o)%o:"ArrowDown"===e.key?i=(i+1)%o:"Home"===e.key?i=0:"End"===e.key&&(i=o-1),this._setCurrentItem(t[i]),t[i].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return F`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([function(e){return(t,o)=>{const{slot:i,selector:n}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return ie(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===n?o:o.filter((e=>e.matches(n)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ae,xo]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return F`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[ae,ko]}static{this.elementName="gk-menu-label"}render(){return F`<slot class="menu-label" part="base"></slot>`}}const Co=Tt({react:Dt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),Ao=Tt({react:Dt,tagName:Do.elementName,elementClass:Do}),So=Tt({react:Dt,tagName:Ho.elementName,elementClass:Ho}),Eo=n`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[ae,Eo]}static{this.elementName="gk-tag"}render(){return F`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Bo.prototype,"variant",void 0);const Po=Tt({react:Dt,tagName:Bo.elementName,elementClass:Bo}),Oo=Tt({react:Dt,tagName:$e.elementName,elementClass:$e});function To(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&To(...e.components))}))}})();var we=ye.Ct,_e=ye.J2,ke=ye.fW;const Ce=globalThis,Ae=Ce.ShadowRoot&&(void 0===Ce.ShadyCSS||Ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ee=Symbol(),Pe=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ae&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Pe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Pe.set(t,e))}return e}toString(){return this.cssText}}const Oe=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Ee),Re=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new css_tag_n(o,e,Ee)},Te=Ae?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Oe(t)})(e):e,{is:De,defineProperty:Me,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:Ne,getOwnPropertySymbols:Ue,getPrototypeOf:je}=Object,ze=globalThis,Fe=ze.trustedTypes,qe=Fe?Fe.emptyScript:"",Ve=ze.reactiveElementPolyfillSupport,We=(e,t)=>e,Ke={toAttribute(e,t){switch(t){case Boolean:e=e?qe:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Ye=(e,t)=>!De(e,t),Ze={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Ye};Symbol.metadata??=Symbol("metadata"),ze.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Me(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=Ie(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ze}static _$Ei(){if(this.hasOwnProperty(We("elementProperties")))return;const e=je(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(We("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(We("properties"))){const e=this.properties,t=[...Ne(e),...Ue(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Te(e))}else void 0!==e&&t.push(Te(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ae)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=Ce.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:Ke).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ke;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Ye)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[We("elementProperties")]=new Map,reactive_element_b[We("finalized")]=new Map,Ve?.({ReactiveElement:reactive_element_b}),(ze.reactiveElementVersions??=[]).push("2.0.4");const Xe=globalThis,Qe=Xe.trustedTypes,tt=Qe?Qe.createPolicy("lit-html",{createHTML:e=>e}):void 0,lt="$lit$",dt=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+dt,ut=`<${ht}>`,pt=document,mt=()=>pt.createComment(""),ft=e=>null===e||"object"!=typeof e&&"function"!=typeof e,bt=Array.isArray,vt=e=>bt(e)||"function"==typeof e?.[Symbol.iterator],yt="[ \t\n\f\r]",wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,_t=/>/g,xt=RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Ct=/"/g,At=/^(?:script|style|textarea|title)$/i,St=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Et=St(1),Pt=(St(2),Symbol.for("lit-noChange")),Ot=Symbol.for("lit-nothing"),Rt=new WeakMap,Tt=pt.createTreeWalker(pt,129);function Dt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tt?tt.createHTML(t):t}const Mt=(e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",a=wt;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,c=a.exec(o),null!==c);)h=a.lastIndex,a===wt?"!--"===c[1]?a=$t:void 0!==c[1]?a=_t:void 0!==c[2]?(At.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=xt):void 0!==c[3]&&(a=xt):a===xt?">"===c[0]?(a=n??wt,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?xt:'"'===c[3]?Ct:kt):a===Ct||a===kt?a=xt:a===$t||a===_t?a=wt:(a=xt,n=void 0);const u=a===xt&&e[t+1].startsWith("/>")?" ":"";r+=a===wt?o+ut:d>=0?(i.push(l),o.slice(0,d)+lt+o.slice(d)+dt+u):o+dt+(-2===d?t:u)}return[Dt(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]};class V{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=Mt(e,t);if(this.el=V.createElement(c,o),Tt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Tt.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(lt)){const t=d[r++],o=i.getAttribute(e).split(dt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?lit_html_k:"?"===a[1]?lit_html_H:"@"===a[1]?lit_html_I:lit_html_R}),i.removeAttribute(e)}else e.startsWith(dt)&&(l.push({type:6,index:n}),i.removeAttribute(e));if(At.test(i.tagName)){const e=i.textContent.split(dt),t=e.length-1;if(t>0){i.textContent=Qe?Qe.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],mt()),Tt.nextNode(),l.push({type:2,index:++n});i.append(e[t],mt())}}}else if(8===i.nodeType)if(i.data===ht)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(dt,e+1));)l.push({type:7,index:n}),e+=dt.length-1}n++}}static createElement(e,t){const o=pt.createElement("template");return o.innerHTML=e,o}}function It(e,t,o=e,i){if(t===Pt)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=ft(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=It(e,n._$AS(e,t.values),n,i)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??pt).importNode(t,!0);Tt.currentNode=i;let n=Tt.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new lit_html_M(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new lit_html_L(n,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(n=Tt.nextNode(),r++)}return Tt.currentNode=pt,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class lit_html_M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=Ot,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=It(this,e,t),ft(e)?e===Ot||null==e||""===e?(this._$AH!==Ot&&this._$AR(),this._$AH=Ot):e!==this._$AH&&e!==Pt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):vt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Ot&&ft(this._$AH)?this._$AA.nextSibling.data=e:this.T(pt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Dt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new lit_html_S(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Rt.get(e.strings);return void 0===t&&Rt.set(e.strings,t=new V(e)),t}k(e){bt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new lit_html_M(this.S(mt()),this.S(mt()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=Ot,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Ot}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=It(this,e,t,0),r=!ft(e)||e!==this._$AH&&e!==Pt,r&&(this._$AH=e);else{const i=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=It(this,i[o+a],t,a),l===Pt&&(l=this._$AH[a]),r||=!ft(l)||l!==this._$AH[a],l===Ot?e=Ot:e!==Ot&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===Ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_k extends lit_html_R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ot?void 0:e}}class lit_html_H extends lit_html_R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ot)}}class lit_html_I extends lit_html_R{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=It(this,e,t,0)??Ot)===Pt)return;const o=this._$AH,i=e===Ot&&o!==Ot||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Ot&&(o===Ot||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lit_html_L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){It(this,e)}}const Lt=Xe.litHtmlPolyfillSupport;Lt?.(V,lit_html_M),(Xe.litHtmlVersions??=[]).push("3.1.2");class lit_element_s extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new lit_html_M(t.insertBefore(mt(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Nt=globalThis.litElementPolyfillSupport;Nt?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.4");const Ut=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Bt={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Ye},jt=(e=Bt,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function Ht(e){return(t,o)=>"object"==typeof o?jt(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function zt(e){return Ht({...e,state:!0,attribute:!1})}const Ft=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function qt(e,t){return(o,i,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ft(o,i,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return Ft(o,i,{get(){return r(this)}})}}function Vt(e){return(t,o)=>{const{slot:i,selector:n}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return Ft(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===n?o:o.filter((e=>e.matches(n)))}})}}function Gt(e,t,o){return e?t(e):o?.(e)}const Wt=new IpcCommandType("commit/actions"),Kt=new IpcCommandType("commit/file/actions"),Yt=new IpcCommandType("commit/file/open"),Zt=new IpcCommandType("commit/file/openOnRemote"),Jt=new IpcCommandType("commit/file/compareWorking"),Xt=new IpcCommandType("commit/file/comparePrevious"),Qt=new IpcCommandType("commit/file/stage"),eo=new IpcCommandType("commit/file/unstage"),to=new IpcCommandType("commit/pickCommit"),oo=new IpcCommandType("commit/searchCommit"),io=new IpcCommandType("commit/switchMode"),no=new IpcCommandType("commit/autolinkSettings"),ro=new IpcCommandType("commit/explain"),so=new IpcCommandType("commit/pin"),ao=new IpcCommandType("commit/navigate"),lo=new IpcCommandType("commit/preferences/update"),co=new IpcCommandType("commit/wip/createPatch"),ho=new IpcCommandType("commit/fetch"),uo=new IpcCommandType("commit/publish"),go=new IpcCommandType("commit/push"),mo=new IpcCommandType("commit/pull"),fo=new IpcCommandType("commit/switch"),wo=new IpcNotificationType("commit/didChange",!0),_o=new IpcNotificationType("commit/didChange/wip"),xo=new IpcNotificationType("commit/didExplain");new IpcNotificationType("org/settings/didChange");var ko=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,Ao=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Co(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&ko(t,o,r),r};const So=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-arrow-up-force":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b"});let Eo=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Eo.styles=Re`
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

		${Oe(Object.entries(So).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,Ao([Ht()],Eo.prototype,"icon",2),Ao([Ht()],Eo.prototype,"modifier",2),Ao([Ht({type:Number})],Eo.prototype,"size",2),Eo=Ao([Ut("code-icon")],Eo);const Po=2;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=Ot,e.type!==Po)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ot||null==e)return this._t=void 0,this.it=e;if(e===Pt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const Oo=(e=>(...t)=>({_$litDirective$:e,values:t}))(unsafe_html_e);function To(e,t,o,i=!1,n){const r={name:"",relativePath:"",children:new Map,descendants:[]};let a=e.reduce(((e,i)=>{let n=e,r="";for(const e of t(i)){r=o(r,e),void 0===n.children&&(n.children=new Map);let t=n.children.get(e);void 0===t&&(t={name:e,relativePath:r,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),void 0===n.descendants&&(n.descendants=[]),n.descendants.push(i),n=t}return n.value=i,e}),r);return i&&(a=Io(a,o,!0,n)),a}function Io(e,t,o=!0,i){if(void 0===e.children)return e;const n=[...e.children.values()];for(const e of n)Io(e,t,!1,i);if(!o&&1===n.length){const o=n[0];(void 0===o.value||i?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}Re`
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
`;const Lo=Re`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,No=Re`
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
`,Uo=(Re`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Lo}
	}
	a:hover {
		text-decoration: underline;
	}
`,Re`
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
`);var jo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,Fo=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?zo(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&jo(t,o,r),r};let qo=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Et`<div class="progress-bar"></div>`}};qo.styles=Re`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,Fo([Ht({reflect:!0})],qo.prototype,"mode",2),Fo([Ht({type:Boolean})],qo.prototype,"active",2),Fo([Ht()],qo.prototype,"position",2),qo=Fo([Ut("progress-indicator")],qo);var Vo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Wo=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Go(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Vo(t,o,r),r};let Ko=class extends lit_element_s{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Et`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Et`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Et`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Ko.styles=[Uo,Re`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],Wo([Ht({type:Boolean,reflect:!0})],Ko.prototype,"collapsable",2),Wo([Ht({type:Boolean,reflect:!0})],Ko.prototype,"expanded",2),Wo([Ht({type:Boolean,reflect:!0})],Ko.prototype,"loading",2),Ko=Wo([Ut("webview-pane")],Ko);var Yo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Jo=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Zo(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Yo(t,o,r),r};let Xo=class extends lit_element_s{constructor(){super(...arguments),this.label="",this.icon="",this.disabled=!1}render(){return Et`
			<a
				role="${this.href?Ot:"button"}"
				type="${this.href?Ot:"button"}"
				aria-label="${this.label}"
				title="${this.label}"
				?disabled=${this.disabled}
			>
				<code-icon icon="${this.icon}"></code-icon>
			</a>
		`}};Xo.styles=Re`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}
	`,Jo([Ht()],Xo.prototype,"href",2),Jo([Ht()],Xo.prototype,"label",2),Jo([Ht()],Xo.prototype,"icon",2),Jo([Ht({type:Boolean})],Xo.prototype,"disabled",2),Xo=Jo([Ut("action-item")],Xo);var Qo=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,ti=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?ei(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Qo(t,o,r),r};let oi=class extends lit_element_s{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return Et`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,i=this.actionNodes.map(((e,i)=>(e.setAttribute("aria-posinset",`${i+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===i?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{i?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let i=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;i=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;i=this.actionNodes[e]}null!=i&&i!==t&&(t.setAttribute("tabindex","-1"),i.setAttribute("tabindex","0"),i.focus())}};oi.styles=Re`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,ti([Vt({flatten:!0})],oi.prototype,"actionNodes",2),oi=ti([Ut("action-nav")],oi);class GlElement extends lit_element_s{fireEvent(e,t){return this.dispatchEvent(new CustomEvent(e,{detail:t}))}}var ii=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,ri=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?ni(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&ii(t,o,r),r};const si={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let ai=class extends lit_element_s{get statusName(){return this.status?si[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return Et`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};ai.styles=[Re`
			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],ri([Ht()],ai.prototype,"status",2),ri([zt()],ai.prototype,"statusName",1),ai=ri([Ut("gl-git-status")],ai);const li=[No,Re``],ci=[No,Re`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			margin-right: 0.6rem;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var di=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,ui=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?hi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&di(t,o,r),r};let pi=class extends lit_element_s{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return Et`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),i=this.treeItems.map((i=>(i.addEventListener("keydown",e,!1),i.addEventListener("gl-tree-item-select",t,!1),i.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){i?.removeEventListener("keydown",e,!1),i?.removeEventListener("gl-tree-item-select",t,!1),i?.removeEventListener("gl-tree-item-selected",o,!1)}})));this._slotSubscriptionsDisposer=()=>{i?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}const o=e.target,i=o.level;let n=o.nextElementSibling;for(;n&&i!==n.level;){const o=t(n);n.parentExpanded=!1!==o?.expanded,n.expanded=e.detail.node.expanded,n=n.nextElementSibling}}};pi.styles=li,ui([Ht({reflect:!0})],pi.prototype,"guides",2),ui([Vt({flatten:!0})],pi.prototype,"treeItems",2),pi=ui([Ut("gl-tree")],pi);var gi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,fi=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?mi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&gi(t,o,r),r};let bi=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return Ot;const t=[];if(e>0)for(let o=0;o<e;o++)t.push(Et`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(Et`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?Et`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:Ot}renderActions(){return Et`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return Et`<slot name="decorations" class="decorations"></slot>`}render(){return Et`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${Gt(this.showIcon,(()=>Et`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.fireEvent("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.fireEvent("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.fireEvent("gl-tree-item-checked",{node:this,checked:this.checked})}};bi.styles=ci,fi([Ht({type:Boolean})],bi.prototype,"branch",2),fi([Ht({type:Boolean})],bi.prototype,"expanded",2),fi([Ht({type:String})],bi.prototype,"path",2),fi([Ht({type:String,attribute:"parent-path"})],bi.prototype,"parentPath",2),fi([Ht({type:Boolean,attribute:"parent-expanded"})],bi.prototype,"parentExpanded",2),fi([Ht({type:Number})],bi.prototype,"level",2),fi([Ht({type:Number})],bi.prototype,"size",2),fi([Ht({type:Number})],bi.prototype,"position",2),fi([Ht({type:Boolean})],bi.prototype,"checkable",2),fi([Ht({type:Boolean})],bi.prototype,"checked",2),fi([Ht({type:Boolean})],bi.prototype,"disableCheck",2),fi([Ht({type:Boolean})],bi.prototype,"showIcon",2),fi([zt()],bi.prototype,"selected",2),fi([zt()],bi.prototype,"focused",2),fi([qt("#button")],bi.prototype,"buttonEl",2),bi=fi([Ut("gl-tree-item")],bi);var vi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,wi=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?yi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&vi(t,o,r),r};let $i=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,o,i)=>(t.push(..._i(o,e,i+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?Ot:"string"==typeof e?Et`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?Ot:Et`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?Ot:t.map((t=>Et`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?Ot:t.map((e=>"icon"===e.type?Et`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?Et`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return Et`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${Gt(null!=e.description,(()=>Et`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return Et`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function _i(e,t=1,o=1){const i={size:t,position:o};for(const[t,o]of Object.entries(e))null!=o&&"children"!==t&&(i[t]=o);const n=[i];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let o=0;o<t;o++)n.push(..._i(e.children[o],t,o+1))}return n}$i.styles=Re`
		:host {
			display: contents;
		}
	`,wi([zt()],$i.prototype,"treeItems",2),wi([Ht({reflect:!0})],$i.prototype,"guides",2),wi([Ht({type:Array,attribute:!1})],$i.prototype,"model",1),$i=wi([Ut("gl-tree-generator")],$i);var xi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Ci=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?ki(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&xi(t,o,r),r};const Ai=-2;class GlDetailsBase extends lit_element_s{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}get filesChangedPaneLabel(){const e=this.files?.length??0;return`${e>0?D("file",e):"Files"} changed`}renderChangedFiles(e,t){const o=this.files?.length??0,i=this.isTree(o);let n="tree",r="list-tree",a="View as Tree";switch(this.fileLayout){case"auto":n="list",r="gl-list-auto",a="View as List";break;case"list":n="tree",r="list-flat",a="View as Tree";break;case"tree":n="auto",r="list-tree",a="View as Auto"}const l=this.createTreeModel(e,this.files??[],i,this.isCompact);return Et`
			<webview-pane collapsable expanded flexible>
				<span slot="title">${this.filesChangedPaneLabel}</span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${a}"
						icon="${r}"
					></action-item>
				</action-nav>

				${this.renderTreeFileModel(l)}
			</webview-pane>
		`}onShareWipChanges(e,t,o){if(!o)return;const i=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(i)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,o=!1,i=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,o,i);const n=[],r=[],a=[];for(const e of t)e.staged?r.push(e):a.push(e);return 0===r.length||0===a.length?n.push(...this.createFileTreeModel(e,t,o,i)):(r.length&&n.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,r,o,i,{level:2}),actions:this.getStagedActions()}),a.length&&n.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,a,o,i,{level:2}),actions:this.getUnstagedActions()})),n}sortChildren(e){return e.sort(((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:e.label>t.label?1:0)),e}createFileTreeModel(e,t,o=!1,i=!0,n={level:1}){if(void 0===n.level&&(n.level=1),!t.length)return[{label:"No changes",path:"",level:n.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];const r=[];if(o){const e=To(t,(e=>e.path.split("/")),((...e)=>e.join("/")),i);if(null!=e.children)for(const t of e.children.values()){const e=this.walkFileTree(t,{level:n.level});r.push(e)}}else for(const e of t){const t=this.fileToTreeModel(e,{level:n.level,branch:!1},!0);r.push(t)}return this.sortChildren(r),r}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const i=[];for(const o of e.children.values()){const e=this.walkFileTree(o,{...t,level:t.level+1});i.push(e)}i.length>0&&(this.sortChildren(i),o.branch=!0,o.children=i)}return o}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,i="/"){const n=e.path.lastIndexOf(i),r=-1!==n?e.path.substring(n+1):e.path,a=o&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:r,description:!0===o?a:void 0,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return Et`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){const o=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(o)}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?Ai:void 0})});this.dispatchEvent(o)}onOpenFileOnRemote(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?Ai:void 0})});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?Ai:void 0})});this.dispatchEvent(o)}onComparePrevious(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?Ai:void 0})});this.dispatchEvent(o)}onMoreActions(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(o)}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?Ai:void 0})});this.dispatchEvent(o)}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?Ai:void 0})});this.dispatchEvent(o)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}}Ci([Ht({type:Array})],GlDetailsBase.prototype,"files",2),Ci([Ht({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),Ci([Ht({type:Object})],GlDetailsBase.prototype,"preferences",2),Ci([Ht({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);var Si=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Pi=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Ei(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Si(t,o,r),r};let Oi=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return null!=this.href?Et`<a class="control" part="base" tabindex="${!1===this.disabled?-1:0}" href=${this.href}
				><slot></slot
			></a>`:Et`<button class="control" part="base" ?disabled=${this.disabled}><slot></slot></button>`}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Oi.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Oi.styles=[No,Re`
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
				${Lo}
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
		`],Pi([qt(".control")],Oi.prototype,"control",2),Pi([Ht({type:Boolean,reflect:!0})],Oi.prototype,"full",2),Pi([Ht({type:Boolean,reflect:!0})],Oi.prototype,"disabled",2),Pi([Ht({reflect:!0})],Oi.prototype,"density",2),Pi([Ht()],Oi.prototype,"href",2),Pi([Ht({reflect:!0})],Oi.prototype,"role",1),Pi([Ht()],Oi.prototype,"appearance",2),Oi=Pi([Ut("gl-button")],Oi);var Ri=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Di=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Ti(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Ri(t,o,r),r};let Mi=class extends lit_element_s{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Et`<div class="skeleton" style=${e}></div>`}};Mi.styles=Re`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,Di([Ht({type:Number})],Mi.prototype,"lines",2),Mi=Di([Ut("skeleton-loader")],Mi);const Ii=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),Li=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Ni=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Ui=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Bi;const ji=new Map;let Hi,zi,Fi;function qi(e,t,o,i=!0){const n=`${o??""}:${t=t??void 0}`;let r=ji.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Ni.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Li))if(null!=t)for(const[e,i]of Object.entries(t))if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}return o}(t);let a;a=null==o?Hi:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),i&&ji.set(n,r)}if(null==t||Ni.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let n=ji.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Hi:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,r),i&&ji.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(Li,((t,o,i,n,r,c,d,h,u,p,g,m,f,b,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(v)){if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return Gi(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??i)?.value??""}`}return i?.value??""}return""}))}const Vi=["th","st","nd","rd"];function Gi(e){const t=e%100;return`${e}${Vi[(t-20)%10]??Vi[t]??Vi[0]}`}var Wi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Yi=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Ki(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Wi(t,o,r),r};let Zi=class extends lit_element_s{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date}render(){const e=qi(this.date,this.format??"MMMM Do, YYYY h:mma");return Et`<time datetime="${this.date.toISOString()}" title="${e}"
			>${"relative"===this.dateStyle?function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,i,n,r]of Ui){const a=Math.abs(o);if(a>=i||1e3===i)return t?(null==Bi&&(null!=Fi?Bi=Fi.resolvedOptions().locale:null!=zi?Bi=zi.resolvedOptions().locale:(Fi=new Intl.RelativeTimeFormat(Hi,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Bi=Fi.resolvedOptions().locale)),"en"===Bi||Bi?.startsWith("en-")?`${Math.round(a/n)}${r}`:(null==Fi&&(Fi=new Intl.RelativeTimeFormat(Hi,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Fi.format(Math.round(o/n),e))):(null==zi&&(zi=new Intl.RelativeTimeFormat(Hi,{localeMatcher:"best fit",numeric:"auto",style:"long"})),zi.format(Math.round(o/n),e))}return""}(this.date):e}</time
		>`}};Yi([Ht()],Zi.prototype,"format",2),Yi([Ht({attribute:"date-style"})],Zi.prototype,"dateStyle",2),Yi([Ht({converter:Ii(),reflect:!0})],Zi.prototype,"date",2),Zi=Yi([Ut("formatted-date")],Zi);var Ji=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,Qi=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Xi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Ji(t,o,r),r};let en=class extends lit_element_s{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}renderAvatar(){return this.showAvatar&&null!=this.avatarUrl&&this.avatarUrl.length>0?Et`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Et`<code-icon icon="person" size="18"></code-icon>`}render(){return Et`
			${Gt(null!=this.url,(()=>Et`<a class="avatar" href="${this.url}">${this.renderAvatar()}</a
						><a class="name" href="${this.url}">${this.name}</a>`),(()=>Et`<span class="avatar">${this.renderAvatar()}</span
						><span class="name" href="${this.url}">${this.name}</span>`))}
			<span class="date">
				${this.actionLabel}
				<formatted-date
					.date=${this.date}
					.format=${this.dateFormat}
					.dateStyle=${this.dateStyle}
				></formatted-date>
			</span>
		`}};en.styles=Re`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.date {
			flex: none;
			margin-inline-start: auto;
			font-size: 1.3rem;
			color: var(--color-foreground--50);
		}
	`,Qi([Ht()],en.prototype,"name",2),Qi([Ht()],en.prototype,"url",2),Qi([Ht({converter:Ii(),reflect:!0})],en.prototype,"date",2),Qi([Ht()],en.prototype,"avatarUrl",2),Qi([Ht({type:Boolean,attribute:"show-avatar",reflect:!0})],en.prototype,"showAvatar",2),Qi([Ht()],en.prototype,"dateFormat",2),Qi([Ht()],en.prototype,"dateStyle",2),Qi([Ht({type:Boolean})],en.prototype,"committer",2),Qi([Ht()],en.prototype,"actionLabel",2),en=Qi([Ut("commit-identity")],en);var tn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,nn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?on(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&tn(t,o,r),r};let rn=class extends lit_element_s{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Et`
			${Gt(null!=this.added,(()=>Et`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`))}
			${Gt(null!=this.modified,(()=>Et`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`))}
			${Gt(null!=this.removed,(()=>Et`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`))}
		`}};rn.styles=Re`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.stat code-icon {
			margin-right: 0.25rem;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.deleted {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
		}
	`,nn([Ht({type:Number})],rn.prototype,"added",2),nn([Ht({type:Number})],rn.prototype,"modified",2),nn([Ht({type:Number})],rn.prototype,"removed",2),rn=nn([Ut("commit-stats")],rn);var sn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,ln=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?an(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&sn(t,o,r),r};let cn=class extends lit_element_s{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.type="autolink",this.key=""}renderDate(){return""===this.date?Ot:Et`<formatted-date
			date="${this.date}"
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`}render(){let e;switch(this.type){case"issue":e="closed"===this.status?"pass":"issues";break;case"pr":switch(this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:e="link"}return Et`
			<span class="icon"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${this.status?this.status:Ot} ${this.renderDate()}</p>
		`}};cn.styles=Re`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
			text-align: center;
			padding-top: 0.1rem;
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
			font-size: 1.3rem;
		}
	`,ln([Ht()],cn.prototype,"url",2),ln([Ht()],cn.prototype,"name",2),ln([Ht()],cn.prototype,"date",2),ln([Ht()],cn.prototype,"dateFormat",2),ln([Ht()],cn.prototype,"dateStyle",2),ln([Ht()],cn.prototype,"status",2),ln([Ht()],cn.prototype,"type",2),ln([Ht()],cn.prototype,"key",2),cn=ln([Ut("issue-pull-request")],cn);var dn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,un=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?hn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&dn(t,o,r),r};let pn=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return null!=this.state?.commit?.stashNumber}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return Et`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="wip">Show Repo Status</gl-button>
					</span>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="pick-commit">Choose Commit...</gl-button>
						<gl-button
							density="compact"
							data-action="search-commit"
							aria-label="Search for Commit"
							title="Search for Commit"
							><code-icon icon="search"></code-icon
						></gl-button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){const e=this.state?.commit;if(null==e)return;const t=e.message,o=t.indexOf("\0\n\0");return Et`
			<div class="section section--message">
				${Gt(!this.isStash,(()=>Et`
						<commit-identity
							class="mb-1"
							name="${e.author.name}"
							url="${e.author.email?`mailto:${e.author.email}`:void 0}"
							date=${e.author.date}
							.dateFormat="${this.preferences?.dateFormat}"
							.avatarUrl="${e.author.avatar??""}"
							.showAvatar="${this.preferences?.avatars??!0}"
							.actionLabel="${e.sha===Un?"modified":"committed"}"
						></commit-identity>
					`))}
				<div class="message-block">
					${Gt(-1===o,(()=>Et`<p class="message-block__text scrollable" data-region="message">
								<strong>${Oo(t)}</strong>
							</p>`),(()=>Et`<p class="message-block__text scrollable" data-region="message">
								<strong>${Oo(t.substring(0,o))}</strong><br /><span
									>${Oo(t.substring(o+3))}</span
								>
							</p>`))}
				</div>
			</div>
		`}renderAutoLinks(){if(this.isUncommitted)return;const e=new Map;if(null!=this.state?.commit?.autolinks)for(const t of this.state.commit.autolinks)e.set(t.id,{type:"autolink",value:t});if(null!=this.state?.autolinkedIssues)for(const t of this.state.autolinkedIssues)e.set(t.id,{type:"issue",value:t});null!=this.state?.pullRequest&&e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest});const t=[],o=[],i=[];for(const n of e.values())switch(n.type){case"autolink":t.push(n.value);break;case"issue":o.push(n.value);break;case"pr":i.push(n.value)}return Et`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				${Gt(null==this.state,(()=>Et`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`),(()=>0===e.size?Et`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<a href="#" data-action="autolink-settings" title="Configure autolinks"
											>autolinks</a
										>
										to linkify external references, like Jira issues or Zendesk tickets, in commit
										messages.
									</p>
								</div>
							`:Et`
							<div class="section" data-region="autolinks">
								${t.length?Et`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${t.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),Et`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															key="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`}))}
											</section>
									  `:void 0}
								${i.length?Et`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${i.map((e=>Et`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																key="#${e.id}"
																status="${e.state}"
																date=${e.updatedDate}
																.dateFormat="${this.state.preferences.dateFormat}"
																.dateStyle="${this.state.preferences.dateStyle}"
															></issue-pull-request>
														</section>
									  				`))}
											</section>
									  `:void 0}
								${o.length?Et`
											<section class="issue" aria-label="Issue" data-region="issue">
												${o.map((e=>Et`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															key="${e.id}"
															status="${e.state}"
															date="${e.closed?e.closedDate:e.createdDate}"
															.dateFormat="${this.state.preferences.dateFormat}"
															.dateStyle="${this.state.preferences.dateStyle}"
														></issue-pull-request>
													`))}
											</section>
									  `:void 0}
							</div>
						`))}
			</webview-pane>
		`}renderExplainAi(){if(!1!==this.state?.orgSettings.ai)return Et`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":Ot}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin"></code-icon>Explain Changes</gl-button
							>
						</span>
					</p>
					${Gt(this.explain,(()=>Et`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="commit-explanation"
							>
								${Gt(this.explain?.error,(()=>Et`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${Gt(this.explain?.summary,(()=>Et`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}render(){return null==this.state?.commit?this.renderEmptyContent():Et`
			${this.renderCommitMessage()}
			<webview-pane-group flexible>
				${this.renderAutoLinks()}
				${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(this.state.commit.stats))}
				${this.renderExplainAi()}
			</webview-pane-group>
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}renderCommitStats(e){if(null==e?.changedFiles)return;if("number"==typeof e.changedFiles)return Et`<commit-stats added="?" modified="${e.changedFiles}" removed="?"></commit-stats>`;const{added:t,deleted:o,changed:i}=e.changedFiles;return Et`<commit-stats added="${t}" modified="${i}" removed="${o}"></commit-stats>`}getFileActions(e,t){const o=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(o.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||o.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"},{icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),o}};un([Ht({type:Object})],pn.prototype,"state",2),un([zt()],pn.prototype,"isStash",1),un([zt()],pn.prototype,"shortSha",1),un([zt()],pn.prototype,"explainBusy",2),un([Ht({type:Object})],pn.prototype,"explain",2),pn=un([Ut("gl-commit-details")],pn);var gn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor;let fn=class extends lit_element_s{render(){return Et`<slot></slot>`}};fn.styles=Re`
		:host {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}

		::slotted(webview-pane) {
			flex: none;
		}

		:host([flexible]) ::slotted(webview-pane[flexible][expanded]) {
			flex: 1;
		}
	`,fn=((e,t,o,i)=>{for(var n,r=i>1?void 0:i?mn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&gn(t,o,r),r})([Ut("webview-pane-group")],fn);const bn=Re`
	:host {
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1;
		text-transform: uppercase;
		color: var(--vscode-foreground);
		background-color: var(--vscode-editorWidget-background);
	}
`;var vn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,wn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?yn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&vn(t,o,r),r};let $n=class extends lit_element_s{constructor(){super(...arguments),this.ahead=0,this.behind=0}render(){return 0===this.ahead&&0===this.behind?Ot:Et`<span class="pill"
			>${Gt(this.behind>0,(()=>Et`<span class="state">${this.behind}<code-icon icon="arrow-down"></code-icon></span>`))}${Gt(this.ahead>0,(()=>Et`<span class="state">${this.ahead}<code-icon icon="arrow-up"></code-icon></span>`))}</span
		>`}};$n.styles=[bn,Re`
			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}
		`],wn([Ht({type:Number})],$n.prototype,"ahead",2),wn([Ht({type:Number})],$n.prototype,"behind",2),$n=wn([Ut("gl-tracking-pill")],$n);var _n=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,kn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?xn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&_n(t,o,r),r};let Cn=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="wip"}get isUnpublished(){const e=this.wip?.branch;return null==e?.upstream||!0===e.upstream.missing}get draftsEnabled(){return!0===this.orgSettings?.drafts}get filesCount(){return this.files?.length??0}get branchState(){const e=this.wip?.branch;if(null!=e)return{ahead:e.tracking?.ahead??0,behind:e.tracking?.behind??0}}get filesChangedPaneLabel(){return"Working Changes"}renderPrimaryAction(){if(this.draftsEnabled){const e="create-patch";return Et`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button full data-action="${e}" @click=${()=>this.onDataActionClick(e)}>
						<code-icon icon="gl-cloud-patch-share"></code-icon> ${"Share as Cloud Patch"}
					</gl-button>
				</span>
			</p>`}if(this.isUnpublished)return Et`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						full
						data-action="publish-branch"
						@click=${()=>this.onDataActionClick("publish-branch")}
					>
						<code-icon icon="cloud-upload"></code-icon> Publish Branch
					</gl-button>
				</span>
			</p>`;if(null==this.branchState)return;const{ahead:e,behind:t}=this.branchState;if(0===e&&0===t)return;const o=t>0?"Pull":e>0?"Push":"Fetch",i=t>0?"arrow-down":e>0?"arrow-up":"sync";return Et`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					full
					data-action="${o.toLowerCase()}"
					@click=${()=>this.onDataActionClick(o.toLowerCase())}
				>
					<code-icon icon="${i}"></code-icon> ${o}&nbsp;
					<gl-tracking-pill .ahead=${e} .behind=${t}></gl-tracking-pill>
				</gl-button>
			</span>
		</p>`}renderSecondaryAction(){const e=this.draftsEnabled;if(this.isUnpublished&&e)return Et`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						full
						appearance="secondary"
						data-action="publish-branch"
						@click=${()=>this.onDataActionClick("publish-branch")}
					>
						<code-icon icon="cloud-upload"></code-icon> Publish Branch
					</gl-button>
				</span>
			</p>`;if(!this.isUnpublished&&!e||null==this.branchState)return;const{ahead:t,behind:o}=this.branchState;if(0===t&&0===o)return;const i=o>0?"Pull":t>0?"Push":"Fetch",n=o>0?"arrow-down":t>0?"arrow-up":"sync";return Et`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					full
					appearance="secondary"
					data-action="${i.toLowerCase()}"
					@click=${()=>this.onDataActionClick(i.toLowerCase())}
				>
					<code-icon icon="${n}"></code-icon> ${i}&nbsp;
					<gl-tracking-pill .ahead=${t} .behind=${o}></gl-tracking-pill>
				</gl-button>
			</span>
		</p>`}renderActions(){const e=this.renderPrimaryAction(),t=this.renderSecondaryAction();return null==e&&null==t?Ot:Et`<div class="section section--actions">${e}${t}</div>`}renderSuggestedChanges(){return null==this.wip?.pullRequest?Ot:Et`
			<webview-pane collapsable flexible>
				<span slot="title">#${this.wip?.pullRequest?.id} Suggested Changes</span>
				<div class="section">
					<issue-pull-request
						type="pr"
						name="${this.wip.pullRequest.title}"
						url="${this.wip.pullRequest.url}"
						key="#${this.wip.pullRequest.id}"
						status="${this.wip.pullRequest.state}"
						.date=${this.wip.pullRequest.updatedDate}
						.dateFormat="${this.preferences?.dateFormat}"
						.dateStyle="${this.preferences?.dateStyle}"
					></issue-pull-request>
				</div>
			</webview-pane>
		`}renderIncomingOutgoing(){return null==this.branchState||0===this.branchState.ahead&&0===this.branchState.behind?Ot:Et`
			<webview-pane collapsable flexible>
				<span slot="title">Incoming / Outgoing</span>
				<gl-tree>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-down"></code-icon>
						Incoming Changes
						<span slot="decorations">${this.branchState.behind??0}</span>
					</gl-tree-item>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-up"></code-icon>
						Outgoing Changes
						<span slot="decorations">${this.branchState.ahead??0}</span>
					</gl-tree-item>
				</gl-tree>
			</webview-pane>
		`}render(){return null==this.wip?Ot:Et`
			${this.renderActions()}
			<webview-pane-group flexible>
				${Ot}
				${this.renderChangedFiles("wip")}
			</webview-pane-group>
		`}getFileActions(e,t){const o={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}onDataActionClick(e){this.dispatchEvent(new CustomEvent("data-action",{detail:{name:e}}))}};kn([Ht({type:Object})],Cn.prototype,"wip",2),kn([Ht({type:Object})],Cn.prototype,"orgSettings",2),Cn=kn([Ut("gl-wip-details")],Cn);const An=Re`
	.commit-action {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 21px;
		border-radius: 0.25em;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		gap: 0.2rem;
	}

	.commit-action > * {
		pointer-events: none;
	}

	.commit-action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.commit-action:hover {
		color: var(--vscode-foreground);
		text-decoration: none;
	}

	:host-context(.vscode-dark) .commit-action:hover {
		background-color: var(--color-background--lighten-15);
	}
	:host-context(.vscode-light) .commit-action:hover {
		background-color: var(--color-background--darken-15);
	}

	:host-context(.vscode-dark) .commit-action.is-active {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .commit-action.is-active {
		background-color: var(--color-background--darken-10);
	}

	.commit-action.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.commit-action.is-hidden {
		display: none;
	}

	.commit-action--emphasis-low:not(:hover, :focus, :active) {
		opacity: 0.5;
	}

	.pr {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var Sn=Object.defineProperty,En=Object.getOwnPropertyDescriptor,Pn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?En(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Sn(t,o,r),r};let On=class extends lit_element_s{constructor(){super(...arguments),this.pinned=!1,this.uncommitted=!1,this.shortSha=""}get navigationState(){if(null==this.navigation)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.navigation.count<=1?(e.back=!1,e.forward=!1):0===this.navigation.position?(e.back=!0,e.forward=!1):this.navigation.position===this.navigation.count-1&&(e.back=!1,e.forward=!0),e}handleAction(e){const t=e.target,o=t.dataset.action;if(null!=o)if("commit-actions"===o){const o=e instanceof MouseEvent&&e.altKey;this.fireEvent("commit-actions",{action:t.dataset.actionType,alt:o})}else this.fireEvent(o)}fireEvent(e,t){this.dispatchEvent(new CustomEvent(`gl-${e}`,{detail:t}))}render(){const e=this.pinned?"Unpin this Commit\nRestores Automatic Following":"Pin this Commit\nSuspends Automatic Following";let t="Forward",o="Back";return this.navigation?.hint&&(this.pinned?o+=` - ${this.navigation.hint}`:t+=` - ${this.navigation.hint}`),Et`
			<div class="group">
				${Gt(null!=this.stashNumber,(()=>Et`
						<span class="commit-action">
							<code-icon icon="gl-stashes-view"></code-icon>
							<span class="sha" data-region="shortsha">#${this.stashNumber}</span></span
						>
					`))}
				${Gt(!this.uncommitted&&null==this.stashNumber,(()=>Et`
						<a
							class="commit-action"
							href="#"
							data-action="commit-actions"
							data-action-type="sha"
							aria-label="Copy SHA
[⌥] Pick Commit..."
							title="Copy SHA
[⌥] Pick Commit..."
							@click=${this.handleAction}
						>
							<code-icon icon="git-commit"></code-icon>
							<span class="sha" data-region="shortsha">${this.shortSha}</span></a
						>
					`))}
			</div>
			<div class="group">
				<a
					class="commit-action${this.pinned?" is-active":""}"
					href="#"
					data-action="pin"
					aria-label="${e}"
					title="${e}"
					@click=${this.handleAction}
					><code-icon icon="${this.pinned?"gl-pinned-filled":"pin"}" data-region="commit-pin"></code-icon
				></a>
				<a
					class="commit-action${this.navigationState.back?"":" is-disabled"}"
					aria-disabled="${this.navigationState.back?"false":"true"}"
					href="#"
					data-action="back"
					aria-label="${o}"
					title="${o}"
					@click=${this.handleAction}
					><code-icon icon="arrow-left" data-region="commit-back"></code-icon
				></a>
				${Gt(this.navigationState.forward,(()=>Et`
						<a
							class="commit-action"
							href="#"
							data-action="forward"
							aria-label="${t}"
							title="${t}"
							@click=${this.handleAction}
							><code-icon icon="arrow-right" data-region="commit-forward"></code-icon
						></a>
					`))}
				<!-- TODO: add a spacer -->
				${Gt(this.uncommitted,(()=>Et`
						<a
							class="commit-action"
							href="#"
							data-action="commit-actions"
							data-action-type="scm"
							aria-label="Open SCM view"
							title="Open SCM view"
							@click=${this.handleAction}
							><code-icon icon="source-control"></code-icon
						></a>
					`))}
				<a
					class="commit-action"
					href="#"
					data-action="commit-actions"
					data-action-type="graph"
					aria-label="Open in Commit Graph"
					title="Open in Commit Graph"
					@click=${this.handleAction}
					><code-icon icon="gl-graph"></code-icon
				></a>
				${Gt(!this.uncommitted,(()=>Et`
						<a
							class="commit-action"
							href="#"
							data-action="commit-actions"
							data-action-type="more"
							aria-label="Show Commit Actions"
							title="Show Commit Actions"
							@click=${this.handleAction}
							><code-icon icon="kebab-vertical"></code-icon
						></a>
					`))}
			</div>
		`}};On.styles=[An,Re`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			:host([pinned]) {
				background-color: var(--color-alert-warningBackground);
				box-shadow: 0 0 0 0.1rem var(--color-alert-warningBorder);
				border-radius: 0.3rem;
			}

			:host([pinned]) .commit-action:hover,
			:host([pinned]) .commit-action.is-active {
				background-color: var(--color-alert-warningHoverBackground);
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				max-width: 100%;
			}

			.sha {
				margin: 0 0.5rem 0 0.25rem;
			}
		`],Pn([Ht({type:Boolean,reflect:!0})],On.prototype,"pinned",2),Pn([Ht({type:Boolean})],On.prototype,"uncommitted",2),Pn([Ht({type:Object})],On.prototype,"navigation",2),Pn([Ht()],On.prototype,"shortSha",2),Pn([Ht()],On.prototype,"stashNumber",2),On=Pn([Ut("gl-inspect-nav")],On);var Rn=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Dn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Tn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Rn(t,o,r),r};let Mn=class extends lit_element_s{constructor(){super(),ke(_e)}render(){if(null==this.wip)return Ot;const e=this.wip.changes,t=this.wip.branch;return null==e||null==t?Ot:Et`
			<div class="group">
				${Gt(null!=this.wip.pullRequest,(()=>Et`<gk-popover placement="bottom">
							<a href="#" class="commit-action" slot="trigger"
								><code-icon icon="git-pull-request" class="pr"></code-icon
								><span>#${this.wip.pullRequest.id}</span></a
							>
							<div class="popover-content">
								<issue-pull-request
									type="pr"
									name="${this.wip.pullRequest.title}"
									url="${this.wip.pullRequest.url}"
									key="#${this.wip.pullRequest.id}"
									status="${this.wip.pullRequest.state}"
									.date=${this.wip.pullRequest.updatedDate}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
								></issue-pull-request>
							</div>
						</gk-popover>`))}
				<a
					href="#"
					class="commit-action commit-action--overflowed"
					@click=${e=>this.handleAction(e,"switch")}
				>
					${Gt(null==this.wip.pullRequest,(()=>Et`<code-icon icon="git-branch"></code-icon>`))}<span
						class="branch"
						>${t.name}</span
					><code-icon icon="chevron-down" size="10"></code-icon
				></a>
			</div>
			<div class="group">
				<a
					href="#"
					class="commit-action"
					title="Fetch"
					@click=${e=>this.handleAction(e,"fetch")}
					><code-icon icon="sync"></code-icon
				></a>
			</div>
		`}handleAction(e,t){const o=e instanceof MouseEvent&&e.altKey;this.dispatchEvent(new CustomEvent("gl-branch-action",{detail:{action:t,alt:o}}))}};Mn.styles=[An,Re`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				/* flex-wrap: wrap; */
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			.commit-action--overflowed {
				min-width: 0;
			}

			.branch {
				min-width: 0;
				max-width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				min-width: 0;
				max-width: 100%;
			}

			.group:first-child {
				min-width: 0;
				flex: 0 1 auto;
			}

			.popover-content {
				background-color: var(--color-background--level-15);
				padding: 0.8rem 1.2rem;
			}
		`],Dn([Ht({type:Object})],Mn.prototype,"wip",2),Dn([Ht({type:Object})],Mn.prototype,"preferences",2),Mn=Dn([Ut("gl-status-nav")],Mn);var In=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Nn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Ln(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&In(t,o,r),r};const Un="0000000000000000000000000000000000000000";let Bn=class extends lit_element_s{constructor(){super(),this._disposables=[],this.indentPreference=16,ke(we)}get isUncommitted(){return this.state?.commit?.sha===Un}get isStash(){return null!=this.state?.commit?.stashNumber}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&this.updateDocumentProperties()}connectedCallback(){super.connectedCallback(),this._hostIpc=new Y("commit-details"),this._disposables=[this._hostIpc.onReceiveMessage((e=>this.onMessageReceived(e))),this._hostIpc,w.on("gl-inspect-nav","gl-commit-actions",(e=>this.onCommitActions(e))),w.on("gl-status-nav","gl-branch-action",(e=>this.onBranchAction(e.detail.action))),w.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),w.on('[data-action="wip"]',"click",(e=>this.onSwitchMode(e,"wip"))),w.on('[data-action="details"]',"click",(e=>this.onSwitchMode(e,"commit"))),w.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),w.on('[data-action="autolink-settings"]',"click",(e=>this.onAutolinkSettings(e))),w.on('[data-action="files-layout"]',"click",(e=>this.onToggleFilesLayout(e))),w.on("gl-inspect-nav","gl-pin",(()=>this.onTogglePin())),w.on("gl-inspect-nav","gl-back",(()=>this.onNavigate("back"))),w.on("gl-inspect-nav","gl-forward",(()=>this.onNavigate("forward"))),w.on('[data-action="create-patch"]',"click",(e=>this.onCreatePatchFromWip(!0))),w.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail))),w.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),w.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e))),w.on("gl-wip-details","create-patch",(e=>this.onCreatePatchFromWip(e.detail.checked))),w.on("gl-commit-details","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),w.on("gl-commit-details,gl-wip-details","file-open",(e=>this.onOpenFile(e.detail))),w.on("gl-commit-details","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),w.on("gl-commit-details,gl-wip-details","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),w.on("gl-commit-details","file-more-actions",(e=>this.onFileMoreActions(e.detail))),w.on("gl-wip-details","file-stage",(e=>this.onStageFile(e.detail))),w.on("gl-wip-details","file-unstage",(e=>this.onUnstageFile(e.detail))),w.on("gl-wip-details","data-action",(e=>this.onBranchAction(e.detail.name)))]}onMessageReceived(e){switch(e.method){case wo.method:f(wo,e,(e=>{e.state,this.state=e.state,this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}))}));break;case _o.method:f(_o,e,(e=>{this.state={...this.state,...e},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}))}))}}disconnectedCallback(){this._disposables.forEach((e=>e.dispose())),this._disposables=[],super.disconnectedCallback()}renderTopInspect(){return null==this.state?.commit?Ot:Et`<gl-inspect-nav
			?uncommitted=${this.isUncommitted}
			?pinned=${this.state?.pinned}
			.navigation=${this.state?.navigationStack}
			.shortSha=${this.state?.commit.shortSha??""}
			.stashNumber=${this.state?.commit.stashNumber}
		></gl-inspect-nav>`}renderTopWip(){return null==this.state?.wip?Ot:Et`<gl-status-nav .wip=${this.state.wip} .preferences=${this.state.preferences}></gl-status-nav>`}renderTopSection(){const e=this.isStash?"Stash":"Commit",t="wip"===this.state?.mode,o=this.state?.wip,i=o?.changes?.files.length?` - ${D("change",o.changes.files.length)} on ${o.repositoryCount>1?`${o.changes.repository.name}:${o.changes.branchName}`:o.changes.branchName}`:"";return Et`
			<div class="inspect-header">
				<nav class="inspect-header__tabs">
					<button
						class="inspect-header__tab${t?"":" is-active"}"
						data-action="details"
						title="${e}"
					>
						<code-icon icon="gl-inspect"></code-icon>
					</button>
					<button
						class="inspect-header__tab${t?" is-active":""}"
						data-action="wip"
						title="Repo Status${i}"
					>
						<code-icon icon="gl-repository-filled"></code-icon>
					</button>
				</nav>
				<div class="inspect-header__content">
					${Gt("wip"!==this.state?.mode,(()=>this.renderTopInspect()),(()=>this.renderTopWip()))}
				</div>
			</div>
		`}render(){const e=this.state?.wip;return Et`
			<div class="commit-detail-panel scrollable">
				${this.renderTopSection()}
				<main id="main" tabindex="-1">
					${Gt("commit"===this.state?.mode,(()=>Et`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`),(()=>Et`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
							></gl-wip-details>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}onBranchAction(e){switch(e){case"pull":this._hostIpc.sendCommand(mo,void 0);break;case"push":this._hostIpc.sendCommand(go,void 0);break;case"fetch":this._hostIpc.sendCommand(ho,void 0);break;case"publish-branch":this._hostIpc.sendCommand(uo,void 0);break;case"switch":this._hostIpc.sendCommand(fo,void 0)}}onCreatePatchFromWip(e=!0){null!=this.state?.wip?.changes&&this._hostIpc.sendCommand(co,{changes:this.state.wip.changes,checked:e})}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this._hostIpc.sendCommand(y,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{const e=await this._hostIpc.sendCommandWithCompletion(ro,void 0,xo);e.error?this.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.explain={summary:e.summary}:this.explain=void 0}catch(e){this.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.filesLayout??void 0;if(t===this.state?.preferences?.files?.layout)return;const o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this._hostIpc.sendCommand(lo,{files:o})}onExpandedChange(e){this.state={...this.state,preferences:{...this.state.preferences,autolinksExpanded:e.expanded}},this._hostIpc.sendCommand(lo,{autolinksExpanded:e.expanded})}onNavigate(e){this._hostIpc.sendCommand(ao,{direction:e})}onTogglePin(){this._hostIpc.sendCommand(so,{pin:!this.state.pinned})}onAutolinkSettings(e){e.preventDefault(),this._hostIpc.sendCommand(no,void 0)}onPickCommit(e){this._hostIpc.sendCommand(to,void 0)}onSearchCommit(e){this._hostIpc.sendCommand(oo,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this._hostIpc.sendCommand(io,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this._hostIpc.sendCommand(Zt,e)}onOpenFile(e){this._hostIpc.sendCommand(Yt,e)}onCompareFileWithWorking(e){this._hostIpc.sendCommand(Jt,e)}onCompareFileWithPrevious(e){this._hostIpc.sendCommand(Xt,e)}onFileMoreActions(e){this._hostIpc.sendCommand(Kt,e)}onStageFile(e){this._hostIpc.sendCommand(Qt,e)}onUnstageFile(e){this._hostIpc.sendCommand(eo,e)}onCommitActions(e){void 0!==this.state?.commit&&this._hostIpc.sendCommand(Wt,{action:e.detail.action,alt:e.detail.alt})}};Nn([Ht({type:Object})],Bn.prototype,"state",2),Nn([Ht({type:Object})],Bn.prototype,"explain",2),Nn([zt()],Bn.prototype,"isUncommitted",1),Nn([zt()],Bn.prototype,"isStash",1),Bn=Nn([Ut("gl-commit-details-app")],Bn);class CommitDetailsApp extends App{constructor(){super("CommitDetailsApp")}onInitialize(){const e=document.getElementById("app");e.state=this.state,w.on(e,"state-changed",(e=>{this.state=e.detail,this.setState(this.state)}))}}new CommitDetailsApp;var jn=t.L;export{jn as CommitDetailsApp};