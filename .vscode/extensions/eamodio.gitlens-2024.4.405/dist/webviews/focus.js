var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{i:()=>FocusApp});class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function o(e,t,o){e.method===t.method&&o(t.params,e)}const i=new IpcCommandType("webview/ready"),n=new IpcCommandType("webview/focus");new IpcCommandType("command/execute"),new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const r=new IpcCommandType("focus/pr/openWorktree"),a=new IpcCommandType("focus/pr/openBranch"),l=new IpcCommandType("focus/pr/switchToBranch"),c=new IpcCommandType("focus/pr/snooze"),d=new IpcCommandType("focus/pr/pin"),u=new IpcCommandType("focus/issue/snooze"),h=new IpcCommandType("focus/issue/pin"),p=new IpcNotificationType("focus/didChange",!0);function f(e,t,o){let i,n,r,a,l;function c(e){const o=e-(n??0);return null==n||o>=t||o<0}function d(){const e=Date.now();if(c(e))u();else{l=setTimeout(d,t-(e-(n??0)))}}function u(){return l=void 0,i?function(){const t=i,o=r;return i=r=void 0,a=e.apply(o,t),a}():(i=void 0,r=void 0,a)}function h(...e){const u=Date.now(),h=c(u);return i=null!=o&&i?o(i,e):e,r=this,n=u,h&&null==l?(l=setTimeout(d,t),a):(null==l&&(l=setTimeout(d,t)),a)}return h.cancel=function(){null!=l&&clearTimeout(l),i=void 0,n=void 0,r=void 0,l=void 0},h.flush=function(){return null==l?a:(clearTimeout(l),u())},h.pending=function(){return null!=l},h}const g=",",b="=",m="{",v="(",y=")",w=/\(([\s\S]*)\)/,_=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,k=/\s?=.*$/;const x=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=A(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=A(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function A(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function S(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const C={enabled:e=>x.enabled(e)||x.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":x.error("",t,o,...i);break;case"warn":x.warn(t,o,...i);break;case"info":x.log(t,o,...i);break;default:x.debug(t,o,...i)}}};var E,T;(T=E||(E={})).on=function(e,t,o,i){let n=!1;if("string"==typeof e){const r=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,r,i??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,r,i??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,i??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,r,i??!1))}}},T.insertTemplate=function(e,t,o){const i=document.getElementById(e);if(t.replaceChildren(i?.content.cloneNode(!0)),t.className=i.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const i=o.bindings[e];null!=i&&(t.textContent=String(i))}}},T.resetSlot=function(e){e.replaceChildren(),e.className=""};function P(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}function R(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}const O=500,M=P(),B=new Map;function N(e){B.delete(e)}function D(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=M.next();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}Error;Error;var L=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(L||{});const{fromCharCode:z}=String;new TextEncoder;function I(e){const[t,o]=R(e);return 1e3*t+Math.floor(o/1e6)}const H=Symbol("logInstanceNameFn");function F(e){return function(e,t=!1){let o,i,n,r,a,l=0,c=!1,d=!1,u=!0;null!=e&&({args:o,if:i,enter:n,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:u=!0}=e);l>0&&(d=!0,u=!0);u&&(c=!0);const h=x.isDebugging,p=t?x.debug:x.log,f=h?"debug":"info";return(e,t,A)=>{let C,E;if("function"==typeof A.value?(C=A.value,E="value"):"function"==typeof A.get&&(C=A.get,E="get"),null==C||null==E)throw new Error("Not supported");const T=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(_,"")||t,t=t.slice(0,t.indexOf(m));let o=t.indexOf(v),i=t.indexOf(y);o=o>=0?o+1:0,i=i>0?i:t.indexOf(b),t=t.slice(o,i),t=`(${t})`;const n=w.exec(t);return null!=n?n[1].split(g).map((e=>e.trim().replace(k,""))):[]}(C):[];A[E]=function(...e){if(!h&&!x.enabled(f)||null!=i&&!i.apply(this,e))return C.apply(this,e);const g=M.next(),b=null!=this?this.constructor?.[H]?.(this,S(this))??S(this):void 0;let m,v=b?c?`[${g.toString(16).padStart(5)}] ${b}.${t}`:`${b}.${t}`:t;null!=a&&(v=a({id:g,instance:this,instanceName:b??"",name:t,prefix:v},...e)),c&&(m={scopeId:g,prefix:v},function(e,t){B.set(e,t)}(g,m));const y=null!=n?n(...e):"";let w;if(!1===o||0===e.length)w="",d||p.call(x,`${v}${y}`);else{let t;w="";let i,n,r,a=-1;for(r of e){if(i=T[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(w.length>0&&(w+=", "),"string"==typeof t){w+=t;continue}n=String(t(r))}else w.length>0&&(w+=", "),n=x.toLoggable(r);w+=i?`${i}=${n}`:n}d||p.call(x,w?`${v}${y}(${w})`:`${v}${y}`)}if(d||u||null!=r){const t=u?R():void 0,o=e=>{const o=void 0!==t?` [${I(t)}ms]`:"";d?x.error(e,w?`${v}${y}(${w})`:`${v}${y}`,m?.exitDetails?`failed${m.exitDetails}${o}`:`failed${o}`):x.error(e,v,m?.exitDetails?`failed${m.exitDetails}${o}`:`failed${o}`),c&&N(g)};let i;try{i=C.apply(this,e)}catch(e){throw o(e),e}const n=e=>{let o,i,n,a;if(null!=t?(o=I(t),o>O?(i=x.warn,n=` [*${o}ms] (slow)`):(i=p,n=` [${o}ms]`)):(n="",i=p),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${x.toLoggable(e)}`);else m?.exitFailed?(a=m.exitFailed,i=x.error):a="completed";d?(0===l||o>l)&&i.call(x,w?`${v}${y}(${w}) ${a}${m?.exitDetails||""}${n}`:`${v}${y} ${a}${m?.exitDetails||""}${n}`):i.call(x,w?`${v}(${w}) ${a}${m?.exitDetails||""}${n}`:`${v} ${a}${m?.exitDetails||""}${n}`),c&&N(g)};return null!=i&&(null!=(_=i)&&(_ instanceof Promise||"function"==typeof _?.then))?i.then(n,o):n(i),i}var _;return C.apply(this,e)}}}(e,!0)}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:D(e??""),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??C,this._time=R(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=R(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=R(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=R(this._time),n=1e3*o+Math.floor(i/1e6),r=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${n}ms]${e?.suffix??""}`)}}const U=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};U._noop=function(){};let j=U;const q={done:!0,value:void 0},W=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};W.Undefined=new W(void 0);let G=W;class LinkedList{constructor(){this._first=G.Undefined,this._last=G.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===G.Undefined}clear(){this._first=G.Undefined,this._last=G.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new G(e);if(this._first===G.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===G.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===G.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==G.Undefined&&e.next!==G.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===G.Undefined&&e.next===G.Undefined?(this._first=G.Undefined,this._last=G.Undefined):e.next===G.Undefined?(this._last=this._last.prev,this._last.next=G.Undefined):e.prev===G.Undefined&&(this._first=this._first.next,this._first.prev=G.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===G.Undefined?q:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==G.Undefined;t=t.next)e.push(t.element);return e}}var Y=Object.defineProperty,J=Object.getOwnPropertyDescriptor,K=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?J(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Y(t,o,r),r};let Z;function X(){return Z??=acquireVsCodeApi()}const ee=P();function te(){return`webview:${ee.next()}`}let oe=class{constructor(e){this.appName=e,this._onReceiveMessage=new j,this._api=X(),this._disposable=E.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=B.get(M.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??C).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(D(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}this._onReceiveMessage.fire(o)}sendCommand(e,t){const o=te();this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,i){const n=te(),r=new Promise(((e,t)=>{let r;const a=[E.on(window,"message",(t=>{o(i,t.data,(o=>{t.data.completionId===n&&(a.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,a.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${i.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ie;function se(e,t){const o=e+t,i=t<0?o<0?0:o:o>255?255:o;return Math.round(i)}function ne(e,t){return re(e,-t)}function re(e,t){const o=function(e){const t=be(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[i,n,r,a]=o,l=255*t/100;return`rgba(${se(i,l)}, ${se(n,l)}, ${se(r,l)}, ${a})`}function ae(e,t){const o=ue.from(e);return null==o?e:o.transparent(t/100).toString()}K([F({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],oe.prototype,"onMessageReceived",1),K([F({args:{0:e=>e.method,1:!1}})],oe.prototype,"sendCommand",1),K([F({args:{0:e=>e.method,1:!1,2:!1}})],oe.prototype,"sendCommandWithCompletion",1),K([F({args:{0:e=>`${e.id}, method=${e.method}`}})],oe.prototype,"postMessage",1),oe=K([(ie=(e,t)=>`${e.appName}(${t})`,e=>{e[H]=ie})],oe);function le(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=le(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=le(Math.max(Math.min(1,t),0),3),this.l=le(Math.max(Math.min(1,o),0),3),this.a=le(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,n=e.a,r=Math.max(t,o,i),a=Math.min(t,o,i);let l=0,c=0;const d=(a+r)/2,u=r-a;if(u>0){switch(c=Math.min(d<=.5?u/(2*d):u/(2-2*d),1),r){case t:l=(o-i)/u+(o<i?6:0);break;case o:l=(i-t)/u+2;break;case i:l=(t-o)/u+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,n)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:i,a:n}=e;let r,a,l;if(0===o)r=a=l=i;else{const e=i<.5?i*(1+o):i+o-i*o,n=2*i-e;r=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,o,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=le(Math.max(Math.min(1,t),0),3),this.v=le(Math.max(Math.min(1,o),0),3),this.a=le(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,n=Math.max(t,o,i),r=n-Math.min(t,o,i),a=0===n?0:r/n;let l;return l=0===r?0:n===t?((o-i)/r%6+6)%6:n===o?(i-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:o,v:i,a:n}=e,r=i*o,a=r*(1-Math.abs(t/60%2-1)),l=i-r;let[c,d,u]=[0,0,0];return t<60?(c=r,d=a):t<120?(c=a,d=r):t<180?(d=r,u=a):t<240?(d=a,u=r):t<300?(c=a,u=r):t<=360&&(c=r,u=a),c=Math.round(255*(c+l)),d=Math.round(255*(d+l)),u=Math.round(255*(u+l)),new RGBA(c,d,u,n)}}function ce(e,t){return t.getPropertyValue(e).trim()}const de=class _Color{static from(e){return e instanceof _Color?e:be(e)||_Color.red}static fromCssVariable(e,t){return be(ce(e,t))||_Color.red}static fromHex(e){return me(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return le(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ue(new RGBA(0,0,0,e.rgba.a));if(1===t)return new ue(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let i=20;const n=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!i--?r:a>t?n(e,r):n(r,o)},r=(o>t?n(ue.black,e):n(e,ue.white)).rgba;return new ue(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:i,a:n}=this.rgba;return new _Color(new RGBA(t,o,i,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,i=t.a,n=o+i*(1-o);if(n<1e-6)return _Color.transparent;const r=this.rgba.r*o/n+t.r*i*(1-o)/n,a=this.rgba.g*o/n+t.g*i*(1-o)/n,l=this.rgba.b*o/n+t.b*i*(1-o)/n;return new _Color(new RGBA(r,a,l,n))}mix(e,t){return function(e,t,o){const i=e.rgba,n=t.rgba;return new ue(new RGBA(i.r+o*(n.r-i.r),i.g+o*(n.g-i.g),i.b+o*(n.b-i.b),i.a+o*(n.a-i.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:i,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-i),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return fe(e);return he(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const i=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-i)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const i=e.getRelativeLuminance();return o=o*(i-t.getRelativeLuminance())/i,e.darken(o)}};de.white=new de(new RGBA(255,255,255,1)),de.black=new de(new RGBA(0,0,0,1)),de.red=new de(new RGBA(255,0,0,1)),de.blue=new de(new RGBA(0,0,255,1)),de.green=new de(new RGBA(0,255,0,1)),de.cyan=new de(new RGBA(0,255,255,1)),de.lightgrey=new de(new RGBA(211,211,211,1)),de.transparent=new de(new RGBA(0,0,0,0));let ue=de;function he(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function pe(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function fe(e){return`#${pe(e.rgba.r)}${pe(e.rgba.g)}${pe(e.rgba.b)}`}const ge=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function be(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===L.Hash)return me(e);const t=ge.exec(e);if(null==t)return null;const o=t[1];let i;switch(o){case"rgb":case"hsl":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new ue(new RGBA(i[0],i[1],i[2],i[3]));case"hsl":case"hsla":return new ue(new HSLA(i[0],i[1],i[2],i[3]))}return ue.red}function me(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==L.Hash)return null;switch(t){case 7:{const t=16*ve(e.charCodeAt(1))+ve(e.charCodeAt(2)),o=16*ve(e.charCodeAt(3))+ve(e.charCodeAt(4)),i=16*ve(e.charCodeAt(5))+ve(e.charCodeAt(6));return new ue(new RGBA(t,o,i,1))}case 9:{const t=16*ve(e.charCodeAt(1))+ve(e.charCodeAt(2)),o=16*ve(e.charCodeAt(3))+ve(e.charCodeAt(4)),i=16*ve(e.charCodeAt(5))+ve(e.charCodeAt(6)),n=16*ve(e.charCodeAt(7))+ve(e.charCodeAt(8));return new ue(new RGBA(t,o,i,n/255))}case 4:{const t=ve(e.charCodeAt(1)),o=ve(e.charCodeAt(2)),i=ve(e.charCodeAt(3));return new ue(new RGBA(16*t+t,16*o+o,16*i+i))}case 5:{const t=ve(e.charCodeAt(1)),o=ve(e.charCodeAt(2)),i=ve(e.charCodeAt(3)),n=ve(e.charCodeAt(4));return new ue(new RGBA(16*t+t,16*o+o,16*i+i,(16*n+n)/255))}default:return null}}function ve(e){switch(e){case L.Digit0:return 0;case L.Digit1:return 1;case L.Digit2:return 2;case L.Digit3:return 3;case L.Digit4:return 4;case L.Digit5:return 5;case L.Digit6:return 6;case L.Digit7:return 7;case L.Digit8:return 8;case L.Digit9:return 9;case L.a:case L.A:return 10;case L.b:case L.B:return 11;case L.c:case L.C:return 12;case L.d:case L.D:return 13;case L.e:case L.E:return 14;case L.f:case L.F:return 15}return 0}const ye=new j,we=ye.event;function _e(e){const t=document.documentElement,o=window.getComputedStyle(t),i=document.body.classList,n=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),r=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=t.style,l=ce("--vscode-editor-background",o);let c=ce("--vscode-editor-foreground",o);c||(c=ce("--vscode-foreground",o));let d=ce("--color-background",o);return a.setProperty("--color-background--lighten-05",re(d,5)),a.setProperty("--color-background--darken-05",ne(d,5)),a.setProperty("--color-background--lighten-075",re(d,7.5)),a.setProperty("--color-background--darken-075",ne(d,7.5)),a.setProperty("--color-background--lighten-10",re(d,10)),a.setProperty("--color-background--darken-10",ne(d,10)),a.setProperty("--color-background--lighten-15",re(d,15)),a.setProperty("--color-background--darken-15",ne(d,15)),a.setProperty("--color-background--lighten-30",re(d,30)),a.setProperty("--color-background--darken-30",ne(d,30)),a.setProperty("--color-background--lighten-50",re(d,50)),a.setProperty("--color-background--darken-50",ne(d,50)),d=ce("--color-button-background",o),a.setProperty("--color-button-background--darken-30",ne(d,30)),d=ce("--color-highlight",o),a.setProperty("--color-highlight--75",ae(d,75)),a.setProperty("--color-highlight--50",ae(d,50)),a.setProperty("--color-highlight--25",ae(d,25)),d=ce("--color-button-secondary-background",o),a.setProperty("--color-button-secondary-background--darken-30",ne(d,30)),d=ce("--color-foreground",o),a.setProperty("--color-foreground--85",ae(d,85)),a.setProperty("--color-foreground--75",ae(d,75)),a.setProperty("--color-foreground--65",ae(d,65)),a.setProperty("--color-foreground--50",ae(d,50)),d=ce("--color-link-foreground",o),a.setProperty("--color-link-foreground--darken-20",ne(d,20)),a.setProperty("--color-link-foreground--lighten-20",re(d,20)),d=ce("--color-alert-infoBackground",o),a.setProperty("--color-alert-infoHoverBackground",n?ne(d,5):re(d,5)),d=ce("--color-alert-warningBackground",o),a.setProperty("--color-alert-warningHoverBackground",n?ne(d,5):re(d,5)),d=ce("--color-alert-errorBackground",o),a.setProperty("--color-alert-errorHoverBackground",n?ne(d,5):re(d,5)),d=n?ne(l,5):re(l,5),a.setProperty("--color-alert-neutralBackground",d),a.setProperty("--color-alert-neutralHoverBackground",n?ne(d,5):re(d,5)),{colors:{background:l,foreground:c},computedStyle:o,isLightTheme:n,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=_e();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(we(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",x.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=X(),this._hostIpc=new oe(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{ye.fire(_e(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>this.onMessageReceived(e)))),this.sendCommand(i,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(E.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=f((e=>{this.sendCommand(n,e)}),150);this.bindDisposables.push(E.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),E.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?x.log(e,...t):x.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendCommandWithCompletion(e,t,o){return this._hostIpc.sendCommandWithCompletion(e,t,o)}setState(e){this._api.setState(e)}}var ke={408:(e,t)=>{var o=Symbol.for("react.element"),i=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,m={};function v(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||g}function y(){}function w(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var _=w.prototype=new y;_.constructor=w,b(_,v.prototype),_.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,A={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,i){var n,r={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,n)&&!S.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(1===c)r.children=i;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];r.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===r[n]&&(r[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:l,props:r,_owner:A.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+P(c,0):r,k(a)?(n="",null!=e&&(n=e.replace(T,"$&/")+"/"),R(a,t,n,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",k(e))for(var d=0;d<e.length;d++){var u=r+P(l=e[d],d);c+=R(l,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),d=0;!(l=e.next()).done;)c+=R(l=l.value,t,n,u=r+P(l,d++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,o){if(null==e)return e;var i=[],n=0;return R(e,i,"","",(function(e){return t.call(o,e,n++)})),i}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},N={transition:null},D={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:N,ReactCurrentOwner:A};t.Children={map:O,forEach:function(e,t,o){O(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=n,t.Profiler=a,t.PureComponent=w,t.StrictMode=r,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=b({},e.props),r=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=A.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)x.call(t,d)&&!S.hasOwnProperty(d)&&(n[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)n.children=i;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];n.children=c}return{$$typeof:o,type:e.type,key:r,ref:a,props:n,_owner:l}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,o){return B.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,o){return B.current.useReducer(e,t,o)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return B.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},Ae={};function Ce(e){var t=Ae[e];if(void 0!==t)return t.exports;var o=Ae[e]={exports:{}};return ke[e](o,o.exports,Ce),o.exports}Ce.d=(e,t)=>{for(var o in t)Ce.o(t,o)&&!Ce.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},Ce.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Ee={};(()=>{Ce.d(Ee,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Bt,ud:()=>zt,wt:()=>It,ne:()=>Ft,Ku:()=>qt,FU:()=>Gt,XO:()=>co,Ze:()=>uo,K$:()=>ho,cX:()=>Ao,Js:()=>So,J9:()=>Co,si:()=>no,sg:()=>To,hW:()=>Po,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Oo,WV:()=>ae,h4:()=>re,kZ:()=>ne});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=i.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(o,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new s(i,e,o)},r=(o,i)=>{if(t)o.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,f=globalThis,g=f.trustedTypes,b=g?g.emptyScript:"",m=f.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},w=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...u(e),...h(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,i=!1,n){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??w)(i?n:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.0");const k=globalThis,x=k.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,E="?"+C,T=`<${E}>`,P=document,R=()=>P.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,B="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,L=/>/g,z=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,U=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),j=U(1),q=(U(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),G=new WeakMap,Y=P.createTreeWalker(P,129);function J(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=((e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",a=N;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,u=0;for(;u<o.length&&(a.lastIndex=u,c=a.exec(o),null!==c);)u=a.lastIndex,a===N?"!--"===c[1]?a=D:void 0!==c[1]?a=L:void 0!==c[2]?(F.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=z):void 0!==c[3]&&(a=z):a===z?">"===c[0]?(a=n??N,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?z:'"'===c[3]?H:I):a===H||a===I?a=z:a===D||a===L?a=N:(a=z,n=void 0);const h=a===z&&e[t+1].startsWith("/>")?" ":"";r+=a===N?o+T:d>=0?(i.push(l),o.slice(0,d)+S+o.slice(d)+C+h):o+C+(-2===d?t:h)}return[J(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]})(e,t);if(this.el=Q.createElement(c,o),Y.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Y.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(S)){const t=d[r++],o=i.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?it:"?"===a[1]?rt:"@"===a[1]?st:nt}),i.removeAttribute(e)}else e.startsWith(C)&&(l.push({type:6,index:n}),i.removeAttribute(e));if(F.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],R()),Y.nextNode(),l.push({type:2,index:++n});i.append(e[t],R())}}}else if(8===i.nodeType)if(i.data===E)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)l.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function K(e,t,o=e,i){if(t===q)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=O(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=K(e,n._$AS(e,t.values),n,i)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??P).importNode(t,!0);Y.currentNode=i;let n=Y.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new ot(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new at(n,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(n=Y.nextNode(),r++)}return Y.currentNode=P,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),O(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(J(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new et(i,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Q(e)),t}T(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new ot(this.k(R()),this.k(R()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=W}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=K(this,e,t,0),r=!O(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const i=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=K(this,i[o+a],t,a),l===q&&(l=this._$AH[a]),r||=!O(l)||l!==this._$AH[a],l===W?e=W:e!==W&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class st extends nt{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??W)===q)return;const o=this._$AH,i=e===W&&o!==W||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==W&&(o===W||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const Z=k.litHtmlPolyfillSupport;Z?.(Q,ot),(k.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new ot(t.insertBefore(R(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const X=globalThis.litElementPolyfillSupport;X?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ee={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},te=(e=ee,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function oe(e){return(t,o)=>"object"==typeof o?te(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ie=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function se(e,t){return(o,i,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:a}="object"==typeof i?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ie(o,i,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),a.call(this,t)),t}return r(this)}})}return ie(o,i,{get(){return r(this)}})}}class gt extends ct{}const ne=n`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,re=n``,ae=n`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,le=Math.min,ce=Math.max,de=Math.round,ue=(Math.floor,e=>({x:e,y:e})),he={left:"right",right:"left",bottom:"top",top:"bottom"},pe={start:"end",end:"start"};function fe(e,t,o){return ce(e,le(t,o))}function ge(e,t){return"function"==typeof e?e(t):e}function be(e){return e.split("-")[0]}function me(e){return e.split("-")[1]}function ve(e){return"x"===e?"y":"x"}function ye(e){return"y"===e?"height":"width"}function we(e){return["top","bottom"].includes(be(e))?"y":"x"}function _e(e){return ve(we(e))}function ke(e){return e.replace(/start|end/g,(e=>pe[e]))}function Ae(e){return e.replace(/left|right|bottom|top/g,(e=>he[e]))}function Te(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Pe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Re(e,t,o){let{reference:i,floating:n}=e;const r=we(t),a=_e(t),l=ye(a),c=be(t),d="y"===r,u=i.x+i.width/2-n.width/2,h=i.y+i.height/2-n.height/2,p=i[l]/2-n[l]/2;let f;switch(c){case"top":f={x:u,y:i.y-n.height};break;case"bottom":f={x:u,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:h};break;case"left":f={x:i.x-n.width,y:h};break;default:f={x:i.x,y:i.y}}switch(me(t)){case"start":f[a]-=p*(o&&d?-1:1);break;case"end":f[a]+=p*(o&&d?-1:1)}return f}async function Oe(e,t){var o;void 0===t&&(t={});const{x:i,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:p=!1,padding:f=0}=ge(t,e),g=Te(f),b=l[p?"floating"===h?"reference":"floating":h],m=Pe(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(b)))||o?b:b.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),v="floating"===h?{...a.floating,x:i,y:n}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},_=Pe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:c}):v);return{top:(m.top-_.top+g.top)/w.y,bottom:(_.bottom-m.bottom+g.bottom)/w.y,left:(m.left-_.left+g.left)/w.x,right:(_.right-m.right+g.right)/w.x}}const Me=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...m}=ge(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const v=be(n),y=be(l)===l,w=await(null==c.isRTL?void 0:c.isRTL(d.floating)),_=p||(y||!b?[Ae(l)]:function(e){const t=Ae(e);return[ke(e),t,ke(t)]}(l));p||"none"===g||_.push(...function(e,t,o,i){const n=me(e);let r=function(e,t,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:i:t?i:n;case"left":case"right":return t?r:a;default:return[]}}(be(e),"start"===o,i);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(ke)))),r}(l,b,g,w));const k=[l,..._],x=await Oe(t,m),A=[];let S=(null==(i=r.flip)?void 0:i.overflows)||[];if(u&&A.push(x[v]),h){const e=function(e,t,o){void 0===o&&(o=!1);const i=me(e),n=_e(e),r=ye(n);let a="x"===n?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ae(a)),[a,Ae(a)]}(n,a,w);A.push(x[e[0]],x[e[1]])}if(S=[...S,{placement:n,overflows:A}],!A.every((e=>e<=0))){var C,E;const e=((null==(C=r.flip)?void 0:C.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let o=null==(E=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!o)switch(f){case"bestFit":{var T;const e=null==(T=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:T[0];e&&(o=e);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}},Ne=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:i}=t,n=await async function(e,t){const{placement:o,platform:i,elements:n}=e,r=await(null==i.isRTL?void 0:i.isRTL(n.floating)),a=be(o),l=me(o),c="y"===we(o),d=["left","top"].includes(a)?-1:1,u=r&&c?-1:1,h=ge(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:g}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof g&&(f="end"===l?-1*g:g),c?{x:f*u,y:p*d}:{x:p*d,y:f*u}}(t,e);return{x:o+n.x,y:i+n.y,data:n}}}};function De(e){return Fe(e)?(e.nodeName||"").toLowerCase():"#document"}function ze(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ie(e){var t;return null==(t=(Fe(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Fe(e){return e instanceof Node||e instanceof ze(e).Node}function Ue(e){return e instanceof Element||e instanceof ze(e).Element}function je(e){return e instanceof HTMLElement||e instanceof ze(e).HTMLElement}function qe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ze(e).ShadowRoot)}function Ve(e){const{overflow:t,overflowX:o,overflowY:i,display:n}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(n)}function We(e){return["table","td","th"].includes(De(e))}function Ye(e){const t=Qe(),o=Ze(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Qe(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(De(e))}function Ze(e){return ze(e).getComputedStyle(e)}function Xe(e){return Ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){if("html"===De(e))return e;const t=e.assignedSlot||e.parentNode||qe(e)&&e.host||Ie(e);return qe(t)?t.host:t}function lt(e){const t=tt(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:je(t)&&Ve(t)?t:lt(t)}function dt(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const n=lt(e),r=n===(null==(i=e.ownerDocument)?void 0:i.body),a=ze(n);return r?t.concat(a,a.visualViewport||[],Ve(n)?n:[],a.frameElement&&o?dt(a.frameElement):[]):t.concat(n,dt(n,[],o))}function ut(e){const t=Ze(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=je(e),r=n?e.offsetWidth:o,a=n?e.offsetHeight:i,l=de(o)!==r||de(i)!==a;return l&&(o=r,i=a),{width:o,height:i,$:l}}function ht(e){return Ue(e)?e:e.contextElement}function pt(e){const t=ht(e);if(!je(t))return ue(1);const o=t.getBoundingClientRect(),{width:i,height:n,$:r}=ut(t);let a=(r?de(o.width):o.width)/i,l=(r?de(o.height):o.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const ft=ue(0);function bt(e){const t=ze(e);return Qe()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ft}function mt(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const n=e.getBoundingClientRect(),r=ht(e);let a=ue(1);t&&(i?Ue(i)&&(a=pt(i)):a=pt(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==ze(e))&&t}(r,o,i)?bt(r):ue(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,u=n.width/a.x,h=n.height/a.y;if(r){const e=ze(r),t=i&&Ue(i)?ze(i):i;let o=e.frameElement;for(;o&&i&&t!==e;){const e=pt(o),t=o.getBoundingClientRect(),i=Ze(o),n=t.left+(o.clientLeft+parseFloat(i.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,d*=e.y,u*=e.x,h*=e.y,c+=n,d+=r,o=ze(o).frameElement}}return Pe({width:u,height:h,x:c,y:d})}function vt(e){return mt(Ie(e)).left+Xe(e).scrollLeft}function yt(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=ze(e),i=Ie(e),n=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=Qe();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=Ie(e),o=Xe(e),i=e.ownerDocument.body,n=ce(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=ce(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+vt(e);const l=-o.scrollTop;return"rtl"===Ze(i).direction&&(a+=ce(t.clientWidth,i.clientWidth)-n),{width:n,height:r,x:a,y:l}}(Ie(e));else if(Ue(t))i=function(e,t){const o=mt(e,!0,"fixed"===t),i=o.top+e.clientTop,n=o.left+e.clientLeft,r=je(e)?pt(e):ue(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:i*r.y}}(t,o);else{const o=bt(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Pe(i)}function wt(e,t){const o=tt(e);return!(o===t||!Ue(o)||Ke(o))&&("fixed"===Ze(o).position||wt(o,t))}function _t(e,t,o){const i=je(t),n=Ie(t),r="fixed"===o,a=mt(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=ue(0);if(i||!i&&!r)if(("body"!==De(t)||Ve(n))&&(l=Xe(t)),i){const e=mt(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=vt(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function kt(e,t){return je(e)&&"fixed"!==Ze(e).position?t?t(e):e.offsetParent:null}function $t(e,t){const o=ze(e);if(!je(e))return o;let i=kt(e,t);for(;i&&We(i)&&"static"===Ze(i).position;)i=kt(i,t);return i&&("html"===De(i)||"body"===De(i)&&"static"===Ze(i).position&&!Ye(i))?o:i||function(e){let t=tt(e);for(;je(t)&&!Ke(t);){if(Ye(t))return t;t=tt(t)}return null}(e)||o}const xt={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:i}=e;const n=je(o),r=Ie(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},l=ue(1);const c=ue(0);if((n||!n&&"fixed"!==i)&&(("body"!==De(o)||Ve(r))&&(a=Xe(o)),je(o))){const e=mt(o);l=pt(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+c.x,y:t.y*l.y-a.scrollTop*l.y+c.y}},getDocumentElement:Ie,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:n}=e;const r=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let i=dt(e,[],!1).filter((e=>Ue(e)&&"body"!==De(e))),n=null;const r="fixed"===Ze(e).position;let a=r?tt(e):e;for(;Ue(a)&&!Ke(a);){const t=Ze(a),o=Ye(a);o||"fixed"!==t.position||(n=null),(r?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Ve(a)&&!o&&wt(e,a))?i=i.filter((e=>e!==a)):n=t,a=tt(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=r[0],l=r.reduce(((e,o)=>{const i=yt(t,o,n);return e.top=ce(i.top,e.top),e.right=le(i.right,e.right),e.bottom=le(i.bottom,e.bottom),e.left=ce(i.left,e.left),e}),yt(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:$t,getElementRects:async function(e){let{reference:t,floating:o,strategy:i}=e;const n=this.getOffsetParent||$t,r=this.getDimensions;return{reference:_t(t,await n(o),i),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return ut(e)},getScale:pt,isElement:Ue,isRTL:function(e){return"rtl"===Ze(e).direction}},At=n`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var St=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ae,ne,At]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Ne(6),Me(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=ge(t,e),d={x:o,y:i},u=await Oe(e,c),h=we(be(n)),p=ve(h);let f=d[p],g=d[h];if(r){const e="y"===p?"bottom":"right";f=fe(f+u["y"===p?"top":"left"],f,f-u[e])}if(a){const e="y"===h?"bottom":"right";g=fe(g+u["y"===h?"top":"left"],g,g-u[e])}const b=l.fn({...e,[p]:f,[h]:g});return{...b,data:{x:b.x-o,y:b.y-i}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:u=0}=ge(e,t)||{};if(null==d)return{};const h=Te(u),p={x:o,y:i},f=_e(n),g=ye(f),b=await a.getDimensions(d),m="y"===f,v=m?"top":"left",y=m?"bottom":"right",w=m?"clientHeight":"clientWidth",_=r.reference[g]+r.reference[f]-p[f]-r.floating[g],k=p[f]-r.reference[f],x=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let A=x?x[w]:0;A&&await(null==a.isElement?void 0:a.isElement(x))||(A=l.floating[w]||r.floating[g]);const S=_/2-k/2,C=A/2-b[g]/2-1,E=le(h[v],C),T=le(h[y],C),P=E,R=A-b[g]-T,O=A/2-b[g]/2+S,M=fe(P,O,R),B=!c.arrow&&null!=me(n)&&O!=M&&r.reference[g]/2-(O<P?E:T)-b[g]/2<0,N=B?O<P?O-P:O-R:0;return{[f]:p[f]+N,data:{[f]:M,centerOffset:O-M-N,...B&&{alignmentOffset:N}},reset:B}}}))({element:this.arrowEl})),await((e,t,o)=>{const i=new Map,n={platform:xt,...o},r={...n.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:h}=Re(d,i,c),p=i,f={},g=0;for(let o=0;o<l.length;o++){const{name:r,fn:b}=l[o],{x:m,y:v,data:y,reset:w}=await b({x:u,y:h,initialPlacement:i,placement:p,strategy:n,middlewareData:f,rects:d,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,h=null!=v?v:h,f={...f,[r]:{...f[r],...y}},w&&g<=50&&(g++,"object"==typeof w&&(w.placement&&(p=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:u,y:h}=Re(d,p,c))),o=-1)}return{x:u,y:h,placement:p,strategy:n,middlewareData:f}})(e,t,{...n,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:i})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=i.arrow?.x,t=i.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?j`<div part="arrow" class="arrow"></div>`:""}render(){return j`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}St([oe({type:Boolean})],xe.prototype,"arrow",void 0),St([oe({type:Boolean})],xe.prototype,"hover",void 0),St([oe()],xe.prototype,"placement",void 0),St([oe({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),St([oe({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),St([se('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),St([se(".popover")],xe.prototype,"popoverEl",void 0),St([se(".arrow")],xe.prototype,"arrowEl",void 0),St([oe({state:!0,attribute:!1})],xe.prototype,"open",void 0);const Ct=n`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ae,ne,Ct]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return j`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Et=n`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Et}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return j`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Tt=new Set(["children","localName","ref","style","className"]),Pt=new WeakMap,Rt=(e,t,o,i,n)=>{const r=n?.[t];void 0===r||o===i?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let i=Pt.get(e);void 0===i&&Pt.set(e,i=new Map);let n=i.get(t);void 0!==o?void 0===n?(i.set(t,n={handleEvent:o}),e.addEventListener(t,n)):n.handleEvent=o:void 0!==n&&(i.delete(t),e.removeEventListener(t,n))})(e,r,o)},Ot=({react:e,tagName:t,elementClass:o,events:i,displayName:n})=>{const r=new Set(Object.keys(i??{})),a=e.forwardRef(((n,a)=>{const l=e.useRef(null),c=e.useRef(null),d={},u={};for(const[e,t]of Object.entries(n))Tt.has(e)?d["className"===e?"class":e]=t:r.has(e)||e in o.prototype?u[e]=t:d[e]=t;return e.useLayoutEffect((()=>{if(null!==c.current){for(const e in u)Rt(c.current,e,n[e],l.current?l.current[e]:void 0,i);l.current=n}})),e.useLayoutEffect((()=>{c.current?.removeAttribute("defer-hydration")}),[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e=>{c.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}})}));return a.displayName=n??o.name,a};var Mt=Ce(294);const Bt=Ot({react:Mt,tagName:Se.elementName,elementClass:Se}),Nt=n`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Dt=n`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Lt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class He extends gt{static{this.styles=[ae,Nt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?j`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:j`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Lt([oe()],He.prototype,"src",void 0),Lt([oe()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ae,Dt]}render(){return j`<slot class="avatar-group" part="base"></slot>`}}const zt=Ot({react:Mt,tagName:He.elementName,elementClass:He}),It=Ot({react:Mt,tagName:Le.elementName,elementClass:Le}),Ht=n`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Ht}static{this.elementName="gk-badge"}render(){return j`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Be.prototype,"variant",void 0);const Ft=Ot({react:Mt,tagName:Be.elementName,elementClass:Be}),Ut=n`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var jt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ut}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return j`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}jt([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),jt([oe({reflect:!0})],Ge.prototype,"type",void 0),jt([oe()],Ge.prototype,"variant",void 0);const qt=Ot({react:Mt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Vt=n`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Wt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ae,ne,Vt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return j`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>j`<span class="complexity-indicator__box"></span>`))}</div>`}}Wt([oe({type:Number})],Je.prototype,"level",void 0),Wt([oe()],Je.prototype,"label",void 0);const Gt=Ot({react:Mt,tagName:Je.elementName,elementClass:Je}),Yt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Qt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Jt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Kt;const Zt=new Map;let Xt,eo,to;new Map;const oo=["th","st","nd","rd"];function io(e){const t=e%100;return`${e}${oo[(t-20)%10]??oo[t]??oo[0]}`}var so=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ae]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,i,n]of Jt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Kt&&(null!=to?Kt=to.resolvedOptions().locale:null!=eo?Kt=eo.resolvedOptions().locale:(to=new Intl.RelativeTimeFormat(Xt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Kt=to.resolvedOptions().locale)),"en"===Kt||Kt?.startsWith("en-")?`${Math.round(r/i)}${n}`:(null==to&&(to=new Intl.RelativeTimeFormat(Xt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),to.format(Math.round(o/i),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return j`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,i=!0){const n=`${o??""}:${t=t??void 0}`;let r=Zt.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Qt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Yt))if(null!=t)for(const e in t){const i=t[e];if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}}return o}(t);let a;a=null==o?Xt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),i&&Zt.set(n,r)}if(null==t||Qt.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let n=Zt.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Xt:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,r),i&&Zt.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(Yt,((t,o,i,n,r,c,d,u,h,p,f,g,b,m,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in v){const o=v[t];if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return io(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??i)?.value??""}`}return i?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}so([oe({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),so([oe()],po.prototype,"format",void 0);const no=Ot({react:Mt,tagName:po.elementName,elementClass:po}),ro=n`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ao=n`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,lo=n`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[ae,lo]}static{this.elementName="gk-focus-item"}render(){return j`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[ae,ao]}static{this.elementName="gk-focus-row"}render(){return j`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[ae,ao,lo,ro]}static{this.elementName="gk-focus-container"}render(){return j`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const co=Ot({react:Mt,tagName:yo.elementName,elementClass:yo}),uo=Ot({react:Mt,tagName:vo.elementName,elementClass:vo}),ho=Ot({react:Mt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const fo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return q}}),go=e=>e??W,mo=n`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var wo=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ae,ne,mo]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return j`<div class="field"><label class="${fo({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${fo({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${go(this.autocomplete)}" autocorrect="${go(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${go(this.name)}" part="input" placeholder="${go(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}wo([oe()],Ro.prototype,"autocomplete",void 0),wo([oe()],Ro.prototype,"autocorrect",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),wo([oe()],Ro.prototype,"label",void 0),wo([oe({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),wo([oe()],Ro.prototype,"name",void 0),wo([oe()],Ro.prototype,"placeholder",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),wo([oe({reflect:!0})],Ro.prototype,"type",void 0),wo([oe()],Ro.prototype,"value",void 0);const _o=n`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,ko=n`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,xo=n`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ae,_o]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let i=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?i=(i-1+o)%o:"ArrowDown"===e.key?i=(i+1)%o:"Home"===e.key?i=0:"End"===e.key&&(i=o-1),this._setCurrentItem(t[i]),t[i].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return j`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([function(e){return(t,o)=>{const{slot:i,selector:n}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return ie(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===n?o:o.filter((e=>e.matches(n)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ae,ko]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return j`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[ae,xo]}static{this.elementName="gk-menu-label"}render(){return j`<slot class="menu-label" part="base"></slot>`}}const Ao=Ot({react:Mt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),So=Ot({react:Mt,tagName:Do.elementName,elementClass:Do}),Co=Ot({react:Mt,tagName:Ho.elementName,elementClass:Ho}),Eo=n`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[ae,Eo]}static{this.elementName="gk-tag"}render(){return j`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Bo.prototype,"variant",void 0);const To=Ot({react:Mt,tagName:Bo.elementName,elementClass:Bo}),Po=Ot({react:Mt,tagName:$e.elementName,elementClass:$e});function Oo(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Oo(...e.components))}))}})();var Te=Ee.Tn,Pe=Ee.qE,Re=Ee.HE,Oe=Ee.Ct,Me=Ee.zx,Ne=Ee.sX,De=Ee.D0,ze=Ee.fs,Ie=Ee.II,Fe=Ee.v2,Ue=Ee.sN,je=Ee.J2,qe=Ee.$$,Ve=Ee.Vp,We=Ee.u,Ye=Ee.fW;const Qe=globalThis,Ke=Qe.ShadowRoot&&(void 0===Qe.ShadyCSS||Qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),Xe=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ke&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Xe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Xe.set(t,e))}return e}toString(){return this.cssText}}const tt=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Ze),lt=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new css_tag_n(o,e,Ze)},dt=Ke?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return tt(t)})(e):e,{is:ut,defineProperty:ht,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ft,getOwnPropertySymbols:bt,getPrototypeOf:mt}=Object,vt=globalThis,yt=vt.trustedTypes,wt=yt?yt.emptyScript:"",_t=vt.reactiveElementPolyfillSupport,kt=(e,t)=>e,$t={toAttribute(e,t){switch(t){case Boolean:e=e?wt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},xt=(e,t)=>!ut(e,t),At={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:xt};Symbol.metadata??=Symbol("metadata"),vt.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=At){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&ht(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=pt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??At}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;const e=mt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){const e=this.properties,t=[...ft(e),...bt(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(dt(e))}else void 0!==e&&t.push(dt(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ke)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=Qe.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:$t).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$t;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??xt)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[kt("elementProperties")]=new Map,reactive_element_b[kt("finalized")]=new Map,_t?.({ReactiveElement:reactive_element_b}),(vt.reactiveElementVersions??=[]).push("2.0.4");const St=globalThis,Ct=St.trustedTypes,Et=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,Tt="$lit$",Pt=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+Pt,Ot=`<${Rt}>`,Mt=document,Bt=()=>Mt.createComment(""),Nt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Dt=Array.isArray,Lt=e=>Dt(e)||"function"==typeof e?.[Symbol.iterator],zt="[ \t\n\f\r]",It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Ft=/>/g,Ut=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,qt=/"/g,Vt=/^(?:script|style|textarea|title)$/i,Wt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Gt=Wt(1),Yt=(Wt(2),Symbol.for("lit-noChange")),Qt=Symbol.for("lit-nothing"),Jt=new WeakMap,Kt=Mt.createTreeWalker(Mt,129);function Zt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Et?Et.createHTML(t):t}const Xt=(e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",a=It;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,u=0;for(;u<o.length&&(a.lastIndex=u,c=a.exec(o),null!==c);)u=a.lastIndex,a===It?"!--"===c[1]?a=Ht:void 0!==c[1]?a=Ft:void 0!==c[2]?(Vt.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=Ut):void 0!==c[3]&&(a=Ut):a===Ut?">"===c[0]?(a=n??It,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?Ut:'"'===c[3]?qt:jt):a===qt||a===jt?a=Ut:a===Ht||a===Ft?a=It:(a=Ut,n=void 0);const h=a===Ut&&e[t+1].startsWith("/>")?" ":"";r+=a===It?o+Ot:d>=0?(i.push(l),o.slice(0,d)+Tt+o.slice(d)+Pt+h):o+Pt+(-2===d?t:h)}return[Zt(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]};class V{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=Xt(e,t);if(this.el=V.createElement(c,o),Kt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Kt.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(Tt)){const t=d[r++],o=i.getAttribute(e).split(Pt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?lit_html_k:"?"===a[1]?lit_html_H:"@"===a[1]?lit_html_I:lit_html_R}),i.removeAttribute(e)}else e.startsWith(Pt)&&(l.push({type:6,index:n}),i.removeAttribute(e));if(Vt.test(i.tagName)){const e=i.textContent.split(Pt),t=e.length-1;if(t>0){i.textContent=Ct?Ct.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],Bt()),Kt.nextNode(),l.push({type:2,index:++n});i.append(e[t],Bt())}}}else if(8===i.nodeType)if(i.data===Rt)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(Pt,e+1));)l.push({type:7,index:n}),e+=Pt.length-1}n++}}static createElement(e,t){const o=Mt.createElement("template");return o.innerHTML=e,o}}function eo(e,t,o=e,i){if(t===Yt)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=Nt(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=eo(e,n._$AS(e,t.values),n,i)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??Mt).importNode(t,!0);Kt.currentNode=i;let n=Kt.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new lit_html_M(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new lit_html_L(n,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(n=Kt.nextNode(),r++)}return Kt.currentNode=Mt,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class lit_html_M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=Qt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=eo(this,e,t),Nt(e)?e===Qt||null==e||""===e?(this._$AH!==Qt&&this._$AR(),this._$AH=Qt):e!==this._$AH&&e!==Yt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Lt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Qt&&Nt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Zt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new lit_html_S(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Jt.get(e.strings);return void 0===t&&Jt.set(e.strings,t=new V(e)),t}k(e){Dt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new lit_html_M(this.S(Bt()),this.S(Bt()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=Qt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Qt}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=eo(this,e,t,0),r=!Nt(e)||e!==this._$AH&&e!==Yt,r&&(this._$AH=e);else{const i=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=eo(this,i[o+a],t,a),l===Yt&&(l=this._$AH[a]),r||=!Nt(l)||l!==this._$AH[a],l===Qt?e=Qt:e!==Qt&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===Qt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_k extends lit_html_R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qt?void 0:e}}class lit_html_H extends lit_html_R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Qt)}}class lit_html_I extends lit_html_R{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=eo(this,e,t,0)??Qt)===Yt)return;const o=this._$AH,i=e===Qt&&o!==Qt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Qt&&(o===Qt||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lit_html_L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eo(this,e)}}const to={P:Tt,A:Pt,C:Rt,M:1,L:Xt,R:lit_html_S,D:Lt,V:eo,I:lit_html_M,H:lit_html_R,N:lit_html_H,U:lit_html_I,B:lit_html_k,F:lit_html_L},oo=St.litHtmlPolyfillSupport;oo?.(V,lit_html_M),(St.litHtmlVersions??=[]).push("3.1.2");class lit_element_s extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new lit_html_M(t.insertBefore(Bt(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const io=globalThis.litElementPolyfillSupport;io?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.4");const so=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},no={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:xt},ro=(e=no,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function ao(e){return(t,o)=>"object"==typeof o?ro(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function lo(e){return ao({...e,state:!0,attribute:!1})}const co=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function uo(e,t){return(o,i,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return co(o,i,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return co(o,i,{get(){return r(this)}})}}function*ho(e,t){if(void 0!==e){let o=0;for(const i of e)yield t(i,o++)}}const fo=2;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:go}=to,mo=()=>document.createComment(""),wo=(e,t,o)=>{const i=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(mo(),n),r=i.insertBefore(mo(),n);o=new go(t,r,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,a=r!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==n||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,n),e=t}}}return o},_o=(e,t,o=e)=>(e._$AI(t,o),e),ko={},xo=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},Ao=(e,t,o)=>{const i=new Map;for(let n=t;n<=o;n++)i.set(e[n],n);return i},So=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==fo)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const n=[],r=[];let a=0;for(const t of e)n[a]=i?i(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,i]){const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,o,i);if(!Array.isArray(n))return this.ut=a,r;const l=this.ut??=[],c=[];let d,u,h=0,p=n.length-1,f=0,g=r.length-1;for(;h<=p&&f<=g;)if(null===n[h])h++;else if(null===n[p])p--;else if(l[h]===a[f])c[f]=_o(n[h],r[f]),h++,f++;else if(l[p]===a[g])c[g]=_o(n[p],r[g]),p--,g--;else if(l[h]===a[g])c[g]=_o(n[h],r[g]),wo(e,c[g+1],n[h]),h++,g--;else if(l[p]===a[f])c[f]=_o(n[p],r[f]),wo(e,n[h],n[p]),p--,f++;else if(void 0===d&&(d=Ao(a,f,g),u=Ao(l,h,p)),d.has(l[h]))if(d.has(l[p])){const t=u.get(a[f]),o=void 0!==t?n[t]:null;if(null===o){const t=wo(e,n[h]);_o(t,r[f]),c[f]=t}else c[f]=_o(o,r[f]),wo(e,n[h],o),n[t]=null;f++}else xo(n[p]),p--;else xo(n[h]),h++;for(;f<=g;){const t=wo(e,c[g+1]);_o(t,r[f]),c[f++]=t}for(;h<=p;){const e=n[h++];null!==e&&xo(e)}return this.ut=a,((e,t=ko)=>{e._$AH=t})(e,c),Yt}});function Co(e,t,o){return e?t(e):o?.(e)}const Eo=lt`
	:host {
		--focus-color: var(--vscode-focusBorder);
		--gk-focus-border-color: var(--focus-color);

		--gk-additions-color: var(--vscode-gitDecoration-addedResourceForeground);
		--gk-deletions-color: var(--vscode-gitDecoration-deletedResourceForeground);

		--gk-avatar-background-color: var(--background-10);
		--gk-tag-background-color: var(--background-10);
		--gk-text-secondary-color: var(--color-foreground--85);

		--gk-menu-border-color: var(--vscode-menu-border);
		--gk-menu-background-color: var(--vscode-menu-background);
		--gk-menu-item-background-color-hover: var(--vscode-menu-selectionBackground);
		--gk-menu-item-background-color-active: var(--vscode-menu-background);

		--gk-button-ghost-color: var(--color-foreground);
		--gk-button-ghost-color-active: var(--color-foreground--85);
		--gk-button-ghost-color-disabled: var(--color-foreground--50);
		--gk-button-outline-color: var(--color-foreground);
		--gk-button-outline-color-active: var(--background-10);
		--gk-button-outline-color-disabled: var(--color-foreground--50);

		--gk-tooltip-background-color: var(--popover-bg); // var(--vscode-editorHoverWidget-background);
		--gk-tooltip-font-color: var(--color-foreground); // var(--vscode-editorHoverWidget-foreground);
		--gk-tooltip-font-weight: normal;
		--gk-tooltip-font-size: 1.2rem;
	}
`,To=(lt`
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
`,lt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),Po=lt`
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
`;lt`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${To}
	}
	a:hover {
		text-decoration: underline;
	}
`,lt`
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
`;var Oo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Lo=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?No(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Oo(t,o,r),r};let zo=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return null!=this.href?Gt`<a class="control" part="base" tabindex="${!1===this.disabled?-1:0}" href=${this.href}
				><slot></slot
			></a>`:Gt`<button class="control" part="base" ?disabled=${this.disabled}><slot></slot></button>`}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};zo.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},zo.styles=[Po,lt`
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
				${To}
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
		`],Lo([uo(".control")],zo.prototype,"control",2),Lo([ao({type:Boolean,reflect:!0})],zo.prototype,"full",2),Lo([ao({type:Boolean,reflect:!0})],zo.prototype,"disabled",2),Lo([ao({reflect:!0})],zo.prototype,"density",2),Lo([ao()],zo.prototype,"href",2),Lo([ao({reflect:!0})],zo.prototype,"role",1),Lo([ao()],zo.prototype,"appearance",2),zo=Lo([so("gl-button")],zo);var Io=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Uo=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Fo(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Io(t,o,r),r};const jo=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-arrow-up-force":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b"});let qo=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};qo.styles=lt`
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

		${tt(Object.entries(jo).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,Uo([ao()],qo.prototype,"icon",2),Uo([ao()],qo.prototype,"modifier",2),Uo([ao({type:Number})],qo.prototype,"size",2),qo=Uo([so("code-icon")],qo);const Vo=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Wo;let Go,Yo,Qo;function Jo(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,i,n,r]of Vo){const a=Math.abs(o);if(a>=i||1e3===i){if(t){if(null==Wo&&(null!=Qo?Wo=Qo.resolvedOptions().locale:null!=Yo?Wo=Yo.resolvedOptions().locale:(Qo=new Intl.RelativeTimeFormat(Go,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Wo=Qo.resolvedOptions().locale)),"en"===Wo||Wo?.startsWith("en-")){return`${Math.round(a/n)}${r}`}return null==Qo&&(Qo=new Intl.RelativeTimeFormat(Go,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Qo.format(Math.round(o/n),e)}return null==Yo&&(Yo=new Intl.RelativeTimeFormat(Go,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Yo.format(Math.round(o/n),e)}}return""}var Ko=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Ko||{});function Zo(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Xo(e,t){return ei(e.plan.effective.expiresOn,t)}function ei(e,t){return null!=e?function(e,t,o,i){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=i??Math.floor;switch(o){case"days":return r(n/864e5);case"hours":return r(n/36e5);case"minutes":return r(n/6e4);case"seconds":return r(n/1e3);default:return n}}(Date.now(),new Date(e),t,Math.round):void 0}function ti(e){return null!=e&&(6===e||1===e||3===e)}function oi(e){return null!=e&&(1===e||3===e)}const ii=lt`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var si=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,ri=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?ni(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&si(t,o,r),r};let ai=class extends lit_element_s{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Qt,t=new Date("2023-12-31T07:59:00.000Z").getTime(),o=Date.now()<t;switch(this.state){case Ko.VerificationRequired:return Gt`
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
					<p>You must verify your email before you can continue.</p>
				`;case Ko.Free:return Gt`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Pro</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.signUp">sign up</a> to start a full 7-day GitLens Pro trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Ko.FreePreviewTrialExpired:return Gt`
					<gl-button appearance="${e}" href="command:gitlens.plus.signUp">Try Pro</gl-button>
					<p>
						Your 3-day preview has ended. Start a free GitLens Pro trial to get an additional 7 days, or
						<a href="command:gitlens.plus.login">sign in</a>.
					</p>
				`;case Ko.FreePlusTrialExpired:return Gt`
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Get GitLens Pro</gl-button
					>
					<p>
						Your GitLens Pro trial has ended. Please upgrade to continue to use this on privately hosted
						repos.
					</p>
					${Co(o,(()=>Gt`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/hs23?utm_source=holiday_special&utm_medium=gitlens_banner&utm_campaign=holiday_special_2023"}
									>Holiday Special: <b>50% off first seat of Pro</b> — only $4/month!<br
								/></a>
							</p>`),(()=>Gt`<p style="text-align: center;">
								Special: <b>50% off first seat of Pro</b> — only $4/month!<br />
							</p>`))}
				`;case Ko.FreePlusTrialReactivationEligible:return Gt`
					<gl-button appearance="${e}" href="command:gitlens.plus.reactivateProTrial"
						>Try Pro</gl-button
					>
					<p>
						You're eligible to reactivate your GitLens Pro trial and experience all the new Pro features —
						free for another 7 days!
					</p>
				`}}};ai.styles=[ii,lt`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],ri([ao({type:String})],ai.prototype,"appearance",2),ri([ao({attribute:!1,type:Number})],ai.prototype,"state",2),ai=ri([so("gk-feature-gate-plus-state")],ai);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,di=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?ci(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&li(t,o,r),r};let ui=class extends lit_element_s{render(){if(!this.visible||null!=this.state&&ti(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,Gt`
			<section>
				<slot></slot>
				<slot name="feature"></slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};ui.styles=lt`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,di([ao({reflect:!0})],ui.prototype,"appearance",2),di([ao({attribute:!1,type:Number})],ui.prototype,"state",2),di([ao({type:Boolean})],ui.prototype,"visible",2),ui=di([so("gk-feature-gate")],ui);const hi=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===hi.trustedTypes&&(hi.trustedTypes={createPolicy:(e,t)=>t});const pi={configurable:!1,enumerable:!1,writable:!1};void 0===hi.FAST&&Reflect.defineProperty(hi,"FAST",Object.assign({value:Object.create(null)},pi));const fi=hi.FAST;if(void 0===fi.getById){const e=Object.create(null);Reflect.defineProperty(fi,"getById",Object.assign({value(t,o){let i=e[t];return void 0===i&&(i=o?e[t]=o():null),i}},pi))}const gi=Object.freeze([]);function bi(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let i=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==i;)o=e.get(i),i=Reflect.getPrototypeOf(i);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const mi=hi.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function i(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function n(){let t=0;for(;t<e.length;)if(i(e[t]),t++,t>1024){for(let o=0,i=e.length-t;o<i;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&hi.requestAnimationFrame(n),e.push(t)},process:n})})),vi=hi.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let yi=vi;const wi=`fast-${Math.random().toString(36).substring(2,8)}`,_i=`${wi}{`,ki=`}${wi}`,$i=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(yi!==vi)throw new Error("The HTML policy can only be set once.");yi=e},createHTML:e=>yi.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(wi),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${wi}:`,"")),createInterpolationPlaceholder:e=>`${_i}${e}${ki}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${wi}:${e}--\x3e`,queueUpdate:mi.enqueue,processUpdates:mi.process,nextUpdate:()=>new Promise(mi.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class SubscriberSet{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,i=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==i&&i.handleChange(o,e)}else for(let i=0,n=t.length;i<n;++i)t[i].handleChange(o,e)}}class PropertyChangeNotifier{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new SubscriberSet(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new SubscriberSet(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const xi=fi.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=$i.queueUpdate;let i,n=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=n(e):t.set(e,o=new PropertyChangeNotifier(e))),o}const a=bi();class DefaultObservableAccessor{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==i&&i.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,i=e[o];if(i!==t){e[o]=t;const n=e[this.callback];"function"==typeof n&&n.call(e,i,t),r(e).notify(this.name)}}}class BindingObserverImplementation extends SubscriberSet{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const n=this.binding(e,t);return i=o,n}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,n=r(e),a=null===o?this.first:{};if(a.propertySource=e,a.propertyName=t,a.notifier=n,n.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;i=void 0,t=o.propertySource[o.propertyName],i=this,e===t&&(this.needsRefresh=!0)}o.next=a}this.last=a}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){n=e},getNotifier:r,track(e,t){void 0!==i&&i.watch(e,t)},trackVolatile(){void 0!==i&&(i.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new DefaultObservableAccessor(t)),a(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:a,binding(e,t,o=this.isVolatileBinding(e)){return new BindingObserverImplementation(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function Ai(e,t){xi.defineProperty(e,t)}function Si(e,t,o){return Object.assign({},o,{get:function(){return xi.trackVolatile(),o.get.apply(this)}})}const Ci=fi.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class ExecutionContext{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Ci.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Ci.set(e)}}xi.defineProperty(ExecutionContext.prototype,"index"),xi.defineProperty(ExecutionContext.prototype,"length");const Ei=Object.seal(new ExecutionContext);class HTMLDirective{constructor(){this.targetIndex=0}}class TargetedHTMLDirective extends HTMLDirective{constructor(){super(...arguments),this.createPlaceholder=$i.createInterpolationPlaceholder}}class AttachedBehaviorHTMLDirective extends HTMLDirective{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return $i.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Ti(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=xi.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Pi(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Ri(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Oi(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Mi(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Bi(e){$i.setAttribute(this.target,this.targetName,e)}function Ni(e){$i.setBooleanAttribute(this.target,this.targetName,e)}function Di(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Li(e){this.target[this.targetName]=e}function zi(e){const t=this.classVersions||Object.create(null),o=this.target;let i=this.version||0;if(null!=e&&e.length){const n=e.split(/\s+/);for(let e=0,r=n.length;e<r;++e){const r=n[e];""!==r&&(t[r]=i,o.classList.add(r))}}if(this.classVersions=t,this.version=i+1,0!==i){i-=1;for(const e in t)t[e]===i&&o.classList.remove(e)}}class HTMLBindingDirective extends TargetedHTMLDirective{constructor(e){super(),this.binding=e,this.bind=Ti,this.unbind=Ri,this.updateTarget=Bi,this.isBindingVolatile=xi.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Li,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>$i.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Ni;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Pi,this.unbind=Mi;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=zi)}}targetAtContent(){this.updateTarget=Di,this.unbind=Oi}createBehavior(e){return new BindingBehavior(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class BindingBehavior{constructor(e,t,o,i,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){ExecutionContext.setEvent(e);const t=this.binding(this.source,this.context);ExecutionContext.setEvent(null),!0!==t&&e.preventDefault()}}let Ii=null;class CompilationContext{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Ii=this}static borrow(e){const t=Ii||new CompilationContext;return t.directives=e,t.reset(),Ii=null,t}}function Hi(e){if(1===e.length)return e[0];let t;const o=e.length,i=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),n=new HTMLBindingDirective(((e,t)=>{let n="";for(let r=0;r<o;++r)n+=i[r](e,t);return n}));return n.targetName=t,n}const Fi=ki.length;function Ui(e,t){const o=t.split(_i);if(1===o.length)return null;const i=[];for(let t=0,n=o.length;t<n;++t){const n=o[t],r=n.indexOf(ki);let a;if(-1===r)a=n;else{const t=parseInt(n.substring(0,r));i.push(e.directives[t]),a=n.substring(r+Fi)}""!==a&&i.push(a)}return i}function ji(e,t,o=!1){const i=t.attributes;for(let n=0,r=i.length;n<r;++n){const a=i[n],l=a.value,c=Ui(e,l);let d=null;null===c?o&&(d=new HTMLBindingDirective((()=>l)),d.targetName=a.name):d=Hi(c),null!==d&&(t.removeAttributeNode(a),n--,r--,e.addFactory(d))}}function qi(e,t,o){const i=Ui(e,t.textContent);if(null!==i){let n=t;for(let r=0,a=i.length;r<a;++r){const a=i[r],l=0===r?t:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);"string"==typeof a?l.textContent=a:(l.textContent=" ",e.captureContentBinding(a)),n=l,e.targetIndex++,l!==t&&o.nextNode()}e.targetIndex--}}const Vi=document.createRange();class HTMLView{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let i,n=this.firstChild;for(;n!==t;)i=n.nextSibling,o.insertBefore(n,e),n=i;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,i=this.firstChild;for(;i!==t;)o=i.nextSibling,e.appendChild(i),i=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,i=this.firstChild;for(;i!==t;)o=i.nextSibling,e.removeChild(i),i=o;e.removeChild(t);const n=this.behaviors,r=this.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(r)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const i=this.source;this.source=e,this.context=t;for(let n=0,r=o.length;n<r;++n){const r=o[n];r.unbind(i),r.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,n=o.length;i<n;++i)o[i].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Vi.setStartBefore(e[0].firstChild),Vi.setEndAfter(e[e.length-1].lastChild),Vi.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],i=o.behaviors,n=o.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(n)}}}}class ViewTemplate{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=$i.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const i=CompilationContext.borrow(t);ji(i,e,!0);const n=i.behaviorFactories;i.reset();const r=$i.createTemplateWalker(o);let a;for(;a=r.nextNode();)switch(i.targetIndex++,a.nodeType){case 1:ji(i,a);break;case 3:qi(i,a,r);break;case 8:$i.isMarker(a)&&i.addFactory(t[$i.extractDirectiveIndexFromMarker(a)])}let l=0;($i.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),l=-1);const c=i.behaviorFactories;return i.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:n,targetOffset:l}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),n=$i.createTemplateWalker(t);let r=0,a=this.targetOffset,l=n.nextNode();for(let e=o.length;r<e;++r){const e=o[r],t=e.targetIndex;for(;null!==l;){if(a===t){i[r]=e.createBehavior(l);break}l=n.nextNode(),a++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,n=t.length;o<n;++o,++r)i[r]=t[o].createBehavior(e)}return new HTMLView(t,i)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const i=this.create(o);return i.bind(e,Ei),i.appendTo(t),i}}const Wi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Gi(e,...t){const o=[];let i="";for(let n=0,r=e.length-1;n<r;++n){const r=e[n];let a=t[n];if(i+=r,a instanceof ViewTemplate){const e=a;a=()=>e}if("function"==typeof a&&(a=new HTMLBindingDirective(a)),a instanceof TargetedHTMLDirective){const e=Wi.exec(r);null!==e&&(a.targetName=e[2])}a instanceof HTMLDirective?(i+=a.createPlaceholder(o.length),o.push(a)):i+=a}return i+=e[e.length-1],new ViewTemplate(i,o)}class NodeObservationBehavior{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=xi.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(gi),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class SlottedBehavior extends NodeObservationBehavior{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Yi(e){return"string"==typeof e&&(e={property:e}),new AttachedBehaviorHTMLDirective("fast-slotted",SlottedBehavior,e)}const Qi=e=>"function"==typeof e,Ji=()=>null;function Ki(e){return void 0===e?Ji:Qi(e)?e:()=>e}class CSSDirective{createCSS(){return""}createBehavior(){}}class ElementStyles{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Zi(e){return e.map((e=>e instanceof ElementStyles?Zi(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function Xi(e){return e.map((e=>e instanceof ElementStyles?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}ElementStyles.create=(()=>{if($i.supportsAdoptedStyleSheets){const e=new Map;return t=>new AdoptedStyleSheetsStyles(t,e)}return e=>new StyleElementStyles(e)})();let es=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},ts=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if($i.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),es=(e,t)=>{e.adoptedStyleSheets.push(...t)},ts=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(Ae){}class AdoptedStyleSheetsStyles extends ElementStyles{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Xi(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Zi(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){es(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){ts(e,this.styleSheets),super.removeStylesFrom(e)}}let os=0;class StyleElementStyles extends ElementStyles{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Xi(e),this.styleSheets=Zi(e),this.styleClass="fast-style-class-"+ ++os}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){const n=document.createElement("style");n.innerHTML=t[i],n.className=o,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function is(e,t){const o=[];let i="";const n=[];for(let r=0,a=e.length-1;r<a;++r){i+=e[r];let a=t[r];if(a instanceof CSSDirective){const e=a.createBehavior();a=a.createCSS(),e&&n.push(e)}a instanceof ElementStyles||a instanceof CSSStyleSheet?(""!==i.trim()&&(o.push(i),i=""),o.push(a)):i+=a}return i+=e[e.length-1],""!==i.trim()&&o.push(i),{styles:o,behaviors:n}}function ss(e,...t){const{styles:o,behaviors:i}=is(e,t),n=ElementStyles.create(o);return i.length&&n.withBehaviors(...i),n}const ns=Object.freeze({locate:bi()}),rs={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class AttributeDefinition{constructor(e,t,o=t.toLowerCase(),i="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===i&&void 0===n&&(this.converter=rs)}setValue(e,t){const o=e[this.fieldName],i=this.converter;void 0!==i&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return xi.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||$i.queueUpdate((()=>{o.add(e);const i=e[this.fieldName];switch(t){case"reflect":const t=this.converter;$i.setAttribute(e,this.attribute,void 0!==t?t.toView(i):i);break;case"boolean":$i.setBooleanAttribute(e,this.attribute,i)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(ns.locate(e));for(let i=0,n=t.length;i<n;++i){const n=t[i];if(void 0!==n)for(let t=0,i=n.length;t<i;++t){const i=n[t];"string"==typeof i?o.push(new AttributeDefinition(e,i)):o.push(new AttributeDefinition(e,i.property,i.attribute,i.mode,i.converter))}}return o}}function as(e,t){let o;function i(e,t){arguments.length>1&&(o.property=t),ns.locate(e.constructor).push(o)}return arguments.length>1?(o={},void i(e,t)):(o=void 0===e?{}:e,i)}const ls={mode:"open"},cs={},ds=fi.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class FASTElementDefinition{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=AttributeDefinition.collect(e,t.attributes),i=new Array(o.length),n={},r={};for(let e=0,t=o.length;e<t;++e){const t=o[e];i[e]=t.attribute,n[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=i,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?ls:null===t.shadowOptions?void 0:Object.assign(Object.assign({},ls),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?cs:Object.assign(Object.assign({},cs),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?ElementStyles.create(t.styles):t.styles instanceof ElementStyles?t.styles:ElementStyles.create([t.styles])}get isDefined(){return!!ds.getByType(this.type)}define(e=customElements){const t=this.type;if(ds.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,i=e.length;t<i;++t)xi.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}FASTElementDefinition.forType=ds.getByType;const us=new WeakMap,hs={bubbles:!0,composed:!0,cancelable:!0};function ps(e){return e.shadowRoot||us.get(e)||null}class Controller extends PropertyChangeNotifier{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&us.set(e,t)}const i=xi.getAccessors(e);if(i.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,n=i.length;o<n;++o){const n=i[o].name,r=e[n];void 0!==r&&(delete e[n],t[n]=r)}}}get isConnected(){return xi.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,xi.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=ps(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=ps(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let n=0;n<o;++n){const o=e[n];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),i.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].bind(e,Ei)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const i=e.length,n=[];for(let r=0;r<i;++r){const i=e[r];if(o.has(i)){const e=o.get(i)-1;0===e||t?o.delete(i)&&n.push(i):o.set(i,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,Ei);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,Ei);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const i=this.definition.attributeLookup[e];void 0!==i&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},hs),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let i=0,n=o.length;i<n;++i){const n=o[i];e[n]=t[n]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=ps(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||$i.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=FASTElementDefinition.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Controller(e,o)}}function fs(e){return class extends e{constructor(){super(),Controller.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const gs=Object.assign(fs(HTMLElement),{from:e=>fs(e),define:(e,t)=>new FASTElementDefinition(e,t).define().type});function bs(...e){return e.some((e=>(e?.length??0)>0))}const ms=ss`
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
`;var vs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,ws=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?ys(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&vs(t,o,r),r};const _s=Gi`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${Yi("typeNodes")} name="type"></slot>
			<slot ${Yi("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${Yi("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${function(e,t,o){const i=Qi(e)?e:()=>e,n=Ki(t),r=Ki(o);return(e,t)=>i(e,t)?n(e,t):r(e,t)}((e=>e.caret),Gi`<span class="caret"></span>`)}
	</template>
`,ks=ss`
	${ms}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let $s=class extends gs{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return bs(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return bs(this.headingNodes)}};var xs;ws([as({mode:"boolean"})],$s.prototype,"open",2),ws([as({mode:"boolean"})],$s.prototype,"caret",2),ws([as],$s.prototype,"placement",2),ws([Ai],$s.prototype,"typeNodes",2),ws([Ai],$s.prototype,"actionsNodes",2),ws([Ai],$s.prototype,"headingNodes",2),ws([Si],$s.prototype,"hasTopNodes",1),ws([Si],$s.prototype,"hasHeadingNodes",1),$s=ws([(xs={name:"pop-over",template:_s,styles:ks},function(e){new FASTElementDefinition(e,xs).define()})],$s);var As=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Cs=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Ss(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&As(t,o,r),r};let Es=class extends lit_element_s{constructor(){super(...arguments),this.placement="top end"}render(){const e=ti(this.subscription?.state),t=oi(this.subscription?.state);return Gt`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?Gt`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:case 5:return Zo("free+");case 1:return`${Zo("pro")} (Trial)`;case 3:return`${Zo(t??"pro")} (Trial)`;case-1:return"GitKraken (Unverified)";case 6:return Zo(t??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!oi(this.subscription?.state))return Qt;const e=Xo(this.subscription,"days")??0;return Gt`<span class="badge-trial-left">${e<1?"<1 day":function(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;return o.only?i:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${i}`}("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case Ko.VerificationRequired:case Ko.Free:case Ko.FreePreviewTrialExpired:return Gt`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case Ko.FreePlusTrialExpired:case Ko.FreeInPreviewTrial:case Ko.FreePlusInTrial:case Ko.FreePlusTrialReactivationEligible:return Gt`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case Ko.Paid:return Gt`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return Qt}}};Es.styles=[Po,lt`
			:host {
				position: relative;
			}

			:host(:focus) {
				${To}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],Cs([ao({reflect:!0})],Es.prototype,"placement",2),Cs([ao({attribute:!1})],Es.prototype,"subscription",2),Es=Cs([so("gk-feature-gate-badge")],Es);const Ts=lt`
	.repo-branch {
		display: flex;
		flex-direction: column;
		gap: 0 0.4rem;
	}

	@media (max-width: 720px) {
		.repo-branch {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.repo-branch__tag {
		cursor: pointer;
	}
`,Ps=lt`
	:host {
		display: block;
	}

	p {
		margin: 0;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.actions gk-tooltip {
		display: inline-block;
	}

	.actions a {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 3.2rem;
		height: 3.2rem;
		border-radius: 0.5rem;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		cursor: pointer;
	}
	.actions a:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.actions a:active {
		background-color: var(--vscode-toolbar-activeBackground);
	}
	.actions a[tabindex='-1'] {
		opacity: 0.5;
		cursor: default;
	}

	.actions a code-icon {
		font-size: 1.6rem;
	}

	.indicator-info {
		color: var(--vscode-problemsInfoIcon-foreground);
	}
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-error {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
	.indicator-neutral {
		color: var(--color-alert-neutralBorder);
	}

	.row-type {
		--gk-badge-outline-padding: 0.3rem 0.8rem;
		--gk-badge-font-size: 1.1rem;
		opacity: 0.4;
		vertical-align: middle;
	}

	.title {
		font-size: 1.4rem;
	}

	.add-delete {
		margin-left: 0.4rem;
		margin-right: 0.2rem;
	}

	.key {
		z-index: 1;
		position: relative;
	}

	.date {
		display: inline-block;
		min-width: 1.6rem;
		line-height: 2.4rem;
	}

	gk-focus-row:not(:hover):not(:focus-within) gl-snooze:not([snoozed]),
	gk-focus-row:not(:hover):not(:focus-within) .pin:not(.is-active) {
		opacity: 0;
	}
`,Rs=lt`
	.icon {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.4rem;
		height: 2.4rem;
	}

	.pin {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
		opacity: 0.4;
	}

	.pin:hover {
		opacity: 0.64;
		text-decoration: none;
	}

	.pin:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.pin.is-active {
		opacity: 1;
	}

	.pin-menu {
		width: max-content;
	}

	gk-tooltip gk-menu {
		z-index: 10;
	}
`,Os=lt`
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-danger {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
`;function Ms(e,t=new Date){const o=Math.floor((t.getTime()-e.getTime())/1e3);let i="ok";return Math.floor(o/31536e3)>=1||Math.floor(o/2592e3)>=1||Math.floor(o/604800)>=1?i="danger":Math.floor(o/86400)>=1&&(i="warning"),{label:Jo(e,!0),tooltip:Jo(e),status:i}}var Bs=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,Ds=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Ns(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Bs(t,o,r),r};const Ls=36e5;let zs=class extends lit_element_s{constructor(){super(),Ye(Fe,Ue,je,We)}render(){return this.snoozed?Gt`
				<gk-tooltip>
					<a href="#" class="icon pin is-active" slot="trigger" @click=${this.onUnsnoozeClick}
						><code-icon icon="bell"></code-icon
					></a>
					<span>Unsnooze</span>
				</gk-tooltip>
			`:Gt`
			<gk-popover placement="bottom-start">
				<a href="#" class="icon pin" slot="trigger"><code-icon icon="bell-slash"></code-icon></a>
				<gk-menu class="pin-menu" @select=${this.onSelectDuration}>
					<gk-menu-item data-value="unlimited">Snooze</gk-menu-item>
					<gk-menu-item data-value="1hr">Snooze for 1 hour</gk-menu-item>
					<gk-menu-item data-value="4hr">Snooze for 4 hours</gk-menu-item>
					<gk-menu-item data-value="tomorrow-9am">Snooze until tomorrow at 9:00 AM</gk-menu-item>
				</gk-menu>
			</gk-popover>
		`}onSnoozeActionCore(e){this.dispatchEvent(new CustomEvent("gl-snooze-action",{detail:{expiresAt:e,snooze:this.snoozed}}))}onUnsnoozeClick(e){e.preventDefault(),this.onSnoozeActionCore()}onSelectDuration(e){e.preventDefault();const t=e.detail.target.dataset.value;if(!t)return;if("unlimited"===t)return void this.onSnoozeActionCore();const o=new Date;let i=o.getTime();switch(t){case"1hr":i+=Ls;break;case"4hr":i+=4*Ls;break;case"tomorrow-9am":o.setDate(o.getDate()+1),o.setHours(9,0,0,0),i=o.getTime()}this.onSnoozeActionCore(new Date(i).toISOString())}};zs.styles=[Eo,Rs],Ds([ao({reflect:!0})],zs.prototype,"snoozed",2),zs=Ds([so("gl-snooze")],zs);var Is=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,Fs=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Hs(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Is(t,o,r),r};let Us=class extends lit_element_s{constructor(){super(),this.isCurrentBranch=!1,this.isCurrentWorktree=!1,this.hasWorktree=!1,this.hasLocalBranch=!1,Ye(Ve,ze,De,Re,Pe,qe,Te,We)}get lastUpdatedDate(){return new Date(this.pullRequest.updatedDate)}get assignees(){const e=this.pullRequest?.assignees;if(null==e)return[];const t=this.pullRequest.author;return null!=t?e.filter((e=>e.name!==t.name)):e}get indicator(){return null==this.pullRequest?"":"ChangesRequested"===this.pullRequest.reviewDecision?"changes":"Approved"===this.pullRequest.reviewDecision&&"Mergeable"===this.pullRequest.mergeableState?"ready":"Conflicting"===this.pullRequest.mergeableState?"conflicting":""}get dateStyle(){return`indicator-${Ms(this.lastUpdatedDate).status}`}get participants(){const e=[];function t(t,o){const i=e.find((e=>e.member.name===t.name));null!=i?i.roles.push(o):e.push({member:t,roles:[o]})}return null!=this.pullRequest?.author&&t(this.pullRequest.author,"author"),null!=this.pullRequest?.assignees&&this.pullRequest.assignees.forEach((e=>t(e,"assigned"))),null!=this.pullRequest?.reviewRequests&&this.pullRequest.reviewRequests.forEach((e=>t(e.reviewer,"reviewer"))),e}render(){if(this.pullRequest)return Gt`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gl-snooze .snoozed=${this.snoozed} @gl-snooze-action=${this.onSnoozeAction}></gl-snooze>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key" class="key">
					${Co("changes"===this.indicator,(()=>Gt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="request-changes"></code-icon
								></span>
								<span>changes requested</span>
							</gk-tooltip>`))}
					${Co("ready"===this.indicator,(()=>Gt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-info" icon="pass"></code-icon
								></span>
								<span>approved and ready to merge</span>
							</gk-tooltip>`))}
					${Co("conflicting"===this.indicator,(()=>Gt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="bracket-error"></code-icon
								></span>
								<span>cannot be merged due to merge conflicts</span>
							</gk-tooltip>`))}
				</span>
				<gk-focus-item>
					<p>
						<span class="title"
							>${this.pullRequest.title}
							<a href="${this.pullRequest.url}">#${this.pullRequest.id}</a></span
						>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">PR</gk-badge>
						<gk-additions-deletions class="add-delete">
							<span slot="additions">${this.pullRequest.additions}</span>
							<span slot="deletions">${this.pullRequest.deletions}</span>
						</gk-additions-deletions>
						<gk-tooltip>
							<gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.pullRequest.commentsCount}
							</gk-tag>
							<span>Comments</span>
						</gk-tooltip>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${Co(this.participants.length>0,(()=>Gt`
									${So(this.participants,(e=>e.member.url),(e=>Gt`<gk-avatar
												src="${e.member.avatarUrl}"
												title="${`${e.member.name?`${e.member.name} `:""}(${e.roles.join(", ")})`}"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<div slot="repo" class="repo-branch">
						<gk-tag class="repo-branch__tag" full @click=${this.onOpenBranchClick}>
							<span slot="prefix"><code-icon icon="source-control"></code-icon></span>
							${!0===this.pullRequest.refs?.isCrossRepository?Gt`${this.pullRequest.refs?.head.owner}:${this.pullRequest.refs?.head.branch}`:this.pullRequest.refs?.head.branch}
						</gk-tag>
						<gk-tag variant="ghost" class="repo-branch__tag" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.pullRequest.refs?.base.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.isCurrentWorktree||this.isCurrentBranch?-1:Qt}"
								aria-label="${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}"
								@click="${this.onOpenWorktreeClick}"
								><code-icon icon="gl-worktrees-view"></code-icon
							></a>
							<span
								>${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}</span
							> </gk-tooltip
						><gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.hasWorktree||this.isCurrentBranch?-1:Qt}"
								aria-label="${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}"
								@click="${this.onSwitchBranchClick}"
								><code-icon icon="gl-switch"></code-icon
							></a>
							<span
								>${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}</span
							>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onOpenBranchClick(e){this.dispatchEvent(new CustomEvent("open-branch",{detail:this.pullRequest}))}onOpenWorktreeClick(e){if(this.isCurrentWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("open-worktree",{detail:this.pullRequest}))}onSwitchBranchClick(e){if(this.isCurrentBranch||this.hasWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("switch-branch",{detail:this.pullRequest}))}onSnoozeAction(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.pullRequest,expiresAt:e.detail.expiresAt,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.pullRequest,pin:this.pinned}}))}};Us.styles=[Eo,Po,Os,Ts,Rs,Ps,lt``],Fs([ao({type:Number})],Us.prototype,"rank",2),Fs([ao({type:Object})],Us.prototype,"pullRequest",2),Fs([ao({type:Boolean})],Us.prototype,"isCurrentBranch",2),Fs([ao({type:Boolean})],Us.prototype,"isCurrentWorktree",2),Fs([ao({type:Boolean})],Us.prototype,"hasWorktree",2),Fs([ao({type:Boolean})],Us.prototype,"hasLocalBranch",2),Fs([ao()],Us.prototype,"pinned",2),Fs([ao()],Us.prototype,"snoozed",2),Us=Fs([so("gk-pull-request-row")],Us);var js=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,Vs=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?qs(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&js(t,o,r),r};let Ws=class extends lit_element_s{constructor(){super(),Ye(Ve,ze,De,Re,Pe,qe,We)}get lastUpdatedDate(){return new Date(this.issue.updatedDate)}get dateStyle(){return`indicator-${Ms(this.lastUpdatedDate).status}`}get assignees(){const e=this.issue?.assignees;if(null==e)return[];const t=this.issue.author;return null!=t?e.filter((e=>e.avatarUrl!==t.avatarUrl)):e}render(){if(this.issue)return Gt`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gl-snooze .snoozed=${this.snoozed} @gl-snooze-action=${this.onSnoozeAction}></gl-snooze>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key"></span>
				<gk-focus-item>
					<p>
						<span class="title">${this.issue.title} <a href="${this.issue.url}">#${this.issue.id}</a></span>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">Issue</gk-badge>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.issue.commentsCount} </gk-tag
							><span>Comments</span></gk-tooltip
						>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="thumbsup"></code-icon></span>
								${this.issue.thumbsUpCount} </gk-tag
							><span>Thumbs Up</span></gk-tooltip
						>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${Co(null!=this.issue.author,(()=>Gt`<gk-avatar
										src="${this.issue.author.avatarUrl}"
										title="${this.issue.author.name} (author)"
									></gk-avatar>`))}
							${Co(this.assignees.length>0,(()=>Gt`
									${So(this.assignees,(e=>e.url),(e=>Gt`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} `:""}(assignee)"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<div slot="repo">
						<gk-tag variant="ghost" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.issue.repository?.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a slot="trigger" href="${this.issue.url}"><code-icon icon="globe"></code-icon></a>
							<span>Open issue on remote</span>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onSnoozeAction(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.issue,expiresAt:e.detail.expiresAt,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.issue,pin:this.pinned}}))}};Ws.styles=[Eo,Po,Os,Ts,Rs,Ps,lt``],Vs([ao({type:Number})],Ws.prototype,"rank",2),Vs([ao({type:Object})],Ws.prototype,"issue",2),Vs([ao()],Ws.prototype,"pinned",2),Vs([ao()],Ws.prototype,"snoozed",2),Ws=Vs([so("gk-issue-row")],Ws);var Gs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Qs=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Ys(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Gs(t,o,r),r};let Js=class extends lit_element_s{constructor(){super(),this.tabFilters=["prs","issues","snoozed"],this.tabFilterOptions=[{label:"Pull Requests",value:"prs"},{label:"Issues",value:"issues"},{label:"All",value:""},{label:"Snoozed",value:"snoozed"}],this.mineFilters=["authored","assigned","review-requested","mentioned"],this.mineFilterOptions=[{label:"Mine",value:""},{label:"Opened by Me",value:"authored"},{label:"Assigned to Me",value:"assigned"},{label:"Needs my Review",value:"review-requested"},{label:"Mentions Me",value:"mentioned"}],this.selectedTabFilter="prs",Ye(Me,Oe,Ie,Ne,je,Fe,Ue)}get subscriptionState(){return this.state?.access.subscription.current}get showSubscriptionGate(){return!1===this.state?.access.allowed}get showFeatureGate(){return!0!==this.state?.access.allowed}get showConnectionGate(){return!0===this.state?.access.allowed&&!this.state?.repos?.some((e=>e.isConnected))}get mineFilterMenuLabel(){return null!=this.selectedMineFilter&&""!==this.selectedMineFilter?this.mineFilterOptions.find((e=>e.value===this.selectedMineFilter))?.label:this.mineFilterOptions[0].label}get items(){if(this.isLoading)return[];const e=[];return this.state?.pullRequests?.forEach((({pullRequest:t,reasons:o,isCurrentBranch:i,isCurrentWorktree:n,hasWorktree:r,hasLocalBranch:a,rank:l,enriched:c})=>{const d=c?.find((e=>"pin"===e.type))?.id,u=c?.find((e=>"snooze"===e.type))?.id;e.push({isPullrequest:!0,state:{pullRequest:t,isCurrentBranch:i,isCurrentWorktree:n,hasWorktree:r,hasLocalBranch:a},rank:l??0,tags:o,isPinned:d,isSnoozed:u})})),this.state?.issues?.forEach((({issue:t,reasons:o,rank:i,enriched:n})=>{const r=n?.find((e=>"pin"===e.type))?.id,a=n?.find((e=>"snooze"===e.type))?.id;e.push({isPullrequest:!1,rank:i??0,state:{issue:t},tags:o,isPinned:r,isSnoozed:a})})),e}get tabFilterOptionsWithCounts(){const e={};return this.tabFilters.forEach((t=>e[t]=0)),this.items.forEach((({isPullrequest:t,isSnoozed:o})=>{const i=o?"snoozed":t?"prs":"issues";null!=e[i]&&e[i]++})),this.tabFilterOptions.map((t=>({...t,count:""===t.value?this.items.length:e[t.value]})))}get filteredItems(){if(0===this.items.length)return this.items;const e=null!=this.searchText&&""!==this.searchText,t=null!=this.selectedMineFilter&&""!==this.selectedMineFilter,o=null!=this.selectedTabFilter&&""!==this.selectedTabFilter;if(!e&&!t&&!o)return this.items.filter((e=>null==e.isSnoozed));const i=this.searchText?.toLowerCase();return this.items.filter((n=>{if(o){if(null!=n.isSnoozed&&"snoozed"!==this.selectedTabFilter||null==n.isSnoozed&&"snoozed"==this.selectedTabFilter||!0===n.isPullrequest&&"issues"===this.selectedTabFilter||!1===n.isPullrequest&&"prs"===this.selectedTabFilter)return!1}else if(null!=n.isSnoozed)return!1;if(t&&!n.tags.includes(this.selectedMineFilter))return!1;if(e){if(n.state.issue&&!n.state.issue.title.toLowerCase().includes(i))return!1;if(n.state.pullRequest&&!n.state.pullRequest.title.toLowerCase().includes(i))return!1}return!0}))}get sortedItems(){return this.filteredItems.sort(((e,t)=>e.isPinned===t.isPinned?0:e.isPinned?-1:1))}get isLoading(){return null==this.state?.pullRequests||null==this.state?.issues}loadingContent(){return Gt`
			<div class="alert">
				<span class="alert__content"><code-icon modifier="spin" icon="loading"></code-icon> Loading</span>
			</div>
		`}focusItemsContent(){return this.isLoading?this.loadingContent():0===this.sortedItems.length?Gt`
				<div class="alert">
					<span class="alert__content">None found</span>
				</div>
			`:Gt`
			${So(this.sortedItems,((e,t)=>`item-${t}-${e.isPullrequest?`pr-${e.state.pullRequest.id}`:`issue-${e.state.issue.id}`}`),(({isPullrequest:e,rank:t,state:o,isPinned:i,isSnoozed:n})=>Co(e,(()=>Gt`<gk-pull-request-row
								.rank=${t}
								.pullRequest=${o.pullRequest}
								.isCurrentBranch=${o.isCurrentBranch}
								.isCurrentWorktree=${o.isCurrentWorktree}
								.hasWorktree=${o.hasWorktree}
								.hasLocalBranch=${o.hasLocalBranch}
								.pinned=${i}
								.snoozed=${n}
								.enrichedId=${o.enrichedId}
							></gk-pull-request-row>`),(()=>Gt`<gk-issue-row
								.rank=${t}
								.issue=${o.issue}
								.pinned=${i}
								.snoozed=${n}
								.enrichedId=${o.enrichedId}
							></gk-issue-row>`))))}
		`}render(){return null==this.state?this.loadingContent():Gt`
			<div class="app">
				<div class="app__toolbar">
					<span class="preview">Preview</span>
					<gk-feature-gate-badge
						.subscription=${this.subscriptionState}
						id="subscription-gate-badge"
					></gk-feature-gate-badge>
					<gl-button
						class="feedback"
						appearance="toolbar"
						href="https://github.com/gitkraken/vscode-gitlens/discussions/2535"
						title="Focus Feedback"
						aria-label="Focus Feedback"
						><code-icon icon="feedback"></code-icon
					></gl-button>
				</div>

				<div class="app__content">
					<gk-feature-gate
						.state=${this.subscriptionState?.state}
						.visible=${this.showFeatureGate}
						id="subscription-gate"
						class="scrollable"
						><p slot="feature">
							<a href="https://help.gitkraken.com/gitlens/gitlens-features/#focus-view-%e2%9c%a8"
								>Focus View</a
							>
							&mdash; effortlessly view all of your GitHub pull requests and issues in a unified,
							actionable view.
						</p></gk-feature-gate
					>
					<gk-feature-gate .visible=${this.showConnectionGate} id="connection-gate" class="scrollable">
						<h3>No GitHub remotes are connected</h3>
						<p>
							This enables access to Pull Requests and Issues as well as provide additional information
							inside hovers and the Inspect view, such as auto-linked issues and pull requests and
							avatars.
						</p>
						<gl-button appearance="alert" href="command:gitlens.connectRemoteProvider"
							>Connect to GitHub</gl-button
						>
					</gk-feature-gate>

					<div class="app__focus">
						<header class="app__header">
							<div class="app__header-group">
								<nav class="tab-filter" id="filter-focus-items">
									${ho(this.tabFilterOptionsWithCounts,(({label:e,value:t,count:o},i)=>Gt`
											<button
												class="tab-filter__tab ${(this.selectedTabFilter?t===this.selectedTabFilter:0===i)?"is-active":""}"
												type="button"
												data-tab="${t}"
												@click=${()=>this.selectedTabFilter=t}
											>
												${e} <gk-badge variant="filled">${o}</gk-badge>
											</button>
										`))}
								</nav>
								<gk-popover>
									<gk-button slot="trigger"
										><code-icon icon="list-filter"></code-icon> ${this.mineFilterMenuLabel}
										<code-icon icon="chevron-down"></code-icon
									></gk-button>
									<gk-menu class="mine-menu" @select=${this.onSelectMineFilter}>
										${ho(this.mineFilterOptions,(({label:e,value:t},o)=>Gt`
												<gk-menu-item
													data-value="${t}"
													?disabled=${this.selectedMineFilter?t===this.selectedMineFilter:0===o}
													>${e}</gk-menu-item
												>
											`))}
									</gk-menu>
								</gk-popover>
							</div>
							<div class="app__header-group">
								<gk-input
									class="app__search"
									label="Search field"
									label-visibility="sr-only"
									placeholder="Search"
									@input=${f(this.onSearchInput.bind(this),200)}
								>
									<code-icon slot="prefix" icon="search"></code-icon>
								</gk-input>
							</div>
						</header>
						<main class="app__main">
							<gk-focus-container id="list-focus-items">
								<span slot="pin">
									<code-icon icon="pinned"></code-icon>
								</span>
								<span slot="key"><code-icon icon="circle-large-outline"></code-icon></span>
								<span slot="date"><code-icon icon="gl-clock"></code-icon></span>
								<span slot="repo">Repo / Branch</span>
								${this.focusItemsContent()}
							</gk-focus-container>
						</main>
					</div>
				</div>
			</div>
		`}onSearchInput(e){const t=e.target.value;""===t||t.length<3?this.searchText=void 0:this.searchText=t}onSelectMineFilter(e){const t=e.detail?.target;if(null!=t?.dataset?.value){this.selectedMineFilter=t.dataset.value;const e=t.closest("gk-popover");e?.hidePopover()}}createRenderRoot(){return this}};Js.styles=[Eo],Qs([uo("#subscription-gate",!0)],Js.prototype,"subscriptionEl",2),Qs([uo("#connection-gate",!0)],Js.prototype,"connectionEl",2),Qs([uo("#subscription-gate-badge",!0)],Js.prototype,"subScriptionBadgeEl",2),Qs([lo()],Js.prototype,"selectedTabFilter",2),Qs([lo()],Js.prototype,"selectedMineFilter",2),Qs([lo()],Js.prototype,"searchText",2),Qs([ao({type:Object})],Js.prototype,"state",2),Js=Qs([so("gl-focus-app")],Js);class FocusApp extends App{constructor(){super("FocusApp")}onInitialize(){this.attachState()}onBind(){const e=super.onBind?.()??[];return e.push(E.on("gk-pull-request-row","open-worktree",((e,t)=>this.onOpenWorktree(e,t))),E.on("gk-pull-request-row","open-branch",((e,t)=>this.onOpenBranch(e,t))),E.on("gk-pull-request-row","switch-branch",((e,t)=>this.onSwitchBranch(e,t))),E.on("gk-pull-request-row","snooze-item",((e,t)=>this.onSnoozeItem(e,!1))),E.on("gk-pull-request-row","pin-item",((e,t)=>this.onPinItem(e,!1))),E.on("gk-issue-row","snooze-item",((e,t)=>this.onSnoozeItem(e,!0))),E.on("gk-issue-row","pin-item",((e,t)=>this.onPinItem(e,!0)))),e}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}onOpenBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(a,{pullRequest:e.detail})}onSwitchBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(l,{pullRequest:e.detail})}onOpenWorktree(e,t){null!=e.detail?.refs?.head&&this.sendCommand(r,{pullRequest:e.detail})}onSnoozeItem(e,t){t?this.sendCommand(u,{issue:e.detail.item,expiresAt:e.detail.expiresAt,snooze:e.detail.snooze}):this.sendCommand(c,{pullRequest:e.detail.item,expiresAt:e.detail.expiresAt,snooze:e.detail.snooze})}onPinItem(e,t){t?this.sendCommand(h,{issue:e.detail.item,pin:e.detail.pin}):this.sendCommand(d,{pullRequest:e.detail.item,pin:e.detail.pin})}onMessageReceived(e){if(e.method===p.method)o(p,e,(e=>{this.state=e.state,this.setState(this.state),this.attachState()}));else super.onMessageReceived?.(e)}}new FocusApp;var Ks=t.i;export{Ks as FocusApp};