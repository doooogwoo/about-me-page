(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function c(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=c(s);fetch(s.href,d)}})();function R0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ko={exports:{}},Cu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function lb(){if(Bp)return Cu;Bp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(o,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var b in s)b!=="key"&&(d[b]=s[b])}else d=s;return s=d.ref,{$$typeof:a,type:o,key:m,ref:s!==void 0?s:null,props:d}}return Cu.Fragment=i,Cu.jsx=c,Cu.jsxs=c,Cu}var Up;function ab(){return Up||(Up=1,Ko.exports=lb()),Ko.exports}var $=ab(),Jo={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function nb(){if(kp)return ve;kp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),E=Symbol.iterator;function T(x){return x===null||typeof x!="object"?null:(x=E&&x[E]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,j={};function k(x,Y,J){this.props=x,this.context=Y,this.refs=j,this.updater=J||B}k.prototype.isReactComponent={},k.prototype.setState=function(x,Y){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,Y,"setState")},k.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function R(){}R.prototype=k.prototype;function L(x,Y,J){this.props=x,this.context=Y,this.refs=j,this.updater=J||B}var Q=L.prototype=new R;Q.constructor=L,O(Q,k.prototype),Q.isPureReactComponent=!0;var P=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function te(x,Y,J,q,K,ae){return J=ae.ref,{$$typeof:a,type:x,key:Y,ref:J!==void 0?J:null,props:ae}}function de(x,Y){return te(x.type,Y,void 0,void 0,void 0,x.props)}function he(x){return typeof x=="object"&&x!==null&&x.$$typeof===a}function _e(x){var Y={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(J){return Y[J]})}var Oe=/\/+/g;function ge(x,Y){return typeof x=="object"&&x!==null&&x.key!=null?_e(""+x.key):Y.toString(36)}function Qe(){}function ke(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Qe,Qe):(x.status="pending",x.then(function(Y){x.status==="pending"&&(x.status="fulfilled",x.value=Y)},function(Y){x.status==="pending"&&(x.status="rejected",x.reason=Y)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function xe(x,Y,J,q,K){var ae=typeof x;(ae==="undefined"||ae==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(ae){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case a:case i:ee=!0;break;case S:return ee=x._init,xe(ee(x._payload),Y,J,q,K)}}if(ee)return K=K(x),ee=q===""?"."+ge(x,0):q,P(K)?(J="",ee!=null&&(J=ee.replace(Oe,"$&/")+"/"),xe(K,Y,J,"",function(Z){return Z})):K!=null&&(he(K)&&(K=de(K,J+(K.key==null||x&&x.key===K.key?"":(""+K.key).replace(Oe,"$&/")+"/")+ee)),Y.push(K)),1;ee=0;var oe=q===""?".":q+":";if(P(x))for(var pe=0;pe<x.length;pe++)q=x[pe],ae=oe+ge(q,pe),ee+=xe(q,Y,J,ae,K);else if(pe=T(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(q=x.next()).done;)q=q.value,ae=oe+ge(q,pe++),ee+=xe(q,Y,J,ae,K);else if(ae==="object"){if(typeof x.then=="function")return xe(ke(x),Y,J,q,K);throw Y=String(x),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ee}function N(x,Y,J){if(x==null)return x;var q=[],K=0;return xe(x,q,"","",function(ae){return Y.call(J,ae,K++)}),q}function W(x){if(x._status===-1){var Y=x._result;Y=Y(),Y.then(function(J){(x._status===0||x._status===-1)&&(x._status=1,x._result=J)},function(J){(x._status===0||x._status===-1)&&(x._status=2,x._result=J)}),x._status===-1&&(x._status=0,x._result=Y)}if(x._status===1)return x._result.default;throw x._result}var F=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ie(){}return ve.Children={map:N,forEach:function(x,Y,J){N(x,function(){Y.apply(this,arguments)},J)},count:function(x){var Y=0;return N(x,function(){Y++}),Y},toArray:function(x){return N(x,function(Y){return Y})||[]},only:function(x){if(!he(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ve.Component=k,ve.Fragment=c,ve.Profiler=s,ve.PureComponent=L,ve.StrictMode=o,ve.Suspense=v,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ve.__COMPILER_RUNTIME={__proto__:null,c:function(x){return V.H.useMemoCache(x)}},ve.cache=function(x){return function(){return x.apply(null,arguments)}},ve.cloneElement=function(x,Y,J){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var q=O({},x.props),K=x.key,ae=void 0;if(Y!=null)for(ee in Y.ref!==void 0&&(ae=void 0),Y.key!==void 0&&(K=""+Y.key),Y)!I.call(Y,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&Y.ref===void 0||(q[ee]=Y[ee]);var ee=arguments.length-2;if(ee===1)q.children=J;else if(1<ee){for(var oe=Array(ee),pe=0;pe<ee;pe++)oe[pe]=arguments[pe+2];q.children=oe}return te(x.type,K,void 0,void 0,ae,q)},ve.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},ve.createElement=function(x,Y,J){var q,K={},ae=null;if(Y!=null)for(q in Y.key!==void 0&&(ae=""+Y.key),Y)I.call(Y,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(K[q]=Y[q]);var ee=arguments.length-2;if(ee===1)K.children=J;else if(1<ee){for(var oe=Array(ee),pe=0;pe<ee;pe++)oe[pe]=arguments[pe+2];K.children=oe}if(x&&x.defaultProps)for(q in ee=x.defaultProps,ee)K[q]===void 0&&(K[q]=ee[q]);return te(x,ae,void 0,void 0,null,K)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(x){return{$$typeof:b,render:x}},ve.isValidElement=he,ve.lazy=function(x){return{$$typeof:S,_payload:{_status:-1,_result:x},_init:W}},ve.memo=function(x,Y){return{$$typeof:p,type:x,compare:Y===void 0?null:Y}},ve.startTransition=function(x){var Y=V.T,J={};V.T=J;try{var q=x(),K=V.S;K!==null&&K(J,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(ie,F)}catch(ae){F(ae)}finally{V.T=Y}},ve.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ve.use=function(x){return V.H.use(x)},ve.useActionState=function(x,Y,J){return V.H.useActionState(x,Y,J)},ve.useCallback=function(x,Y){return V.H.useCallback(x,Y)},ve.useContext=function(x){return V.H.useContext(x)},ve.useDebugValue=function(){},ve.useDeferredValue=function(x,Y){return V.H.useDeferredValue(x,Y)},ve.useEffect=function(x,Y,J){var q=V.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(x,Y)},ve.useId=function(){return V.H.useId()},ve.useImperativeHandle=function(x,Y,J){return V.H.useImperativeHandle(x,Y,J)},ve.useInsertionEffect=function(x,Y){return V.H.useInsertionEffect(x,Y)},ve.useLayoutEffect=function(x,Y){return V.H.useLayoutEffect(x,Y)},ve.useMemo=function(x,Y){return V.H.useMemo(x,Y)},ve.useOptimistic=function(x,Y){return V.H.useOptimistic(x,Y)},ve.useReducer=function(x,Y,J){return V.H.useReducer(x,Y,J)},ve.useRef=function(x){return V.H.useRef(x)},ve.useState=function(x){return V.H.useState(x)},ve.useSyncExternalStore=function(x,Y,J){return V.H.useSyncExternalStore(x,Y,J)},ve.useTransition=function(){return V.H.useTransition()},ve.version="19.1.0",ve}var jp;function As(){return jp||(jp=1,Jo.exports=nb()),Jo.exports}var g=As();const M=R0(g);var Wo={exports:{}},zu={},Fo={exports:{}},Io={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function ub(){return Hp||(Hp=1,function(a){function i(N,W){var F=N.length;N.push(W);e:for(;0<F;){var ie=F-1>>>1,x=N[ie];if(0<s(x,W))N[ie]=W,N[F]=x,F=ie;else break e}}function c(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var W=N[0],F=N.pop();if(F!==W){N[0]=F;e:for(var ie=0,x=N.length,Y=x>>>1;ie<Y;){var J=2*(ie+1)-1,q=N[J],K=J+1,ae=N[K];if(0>s(q,F))K<x&&0>s(ae,q)?(N[ie]=ae,N[K]=F,ie=K):(N[ie]=q,N[J]=F,ie=J);else if(K<x&&0>s(ae,F))N[ie]=ae,N[K]=F,ie=K;else break e}}return W}function s(N,W){var F=N.sortIndex-W.sortIndex;return F!==0?F:N.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var m=Date,b=m.now();a.unstable_now=function(){return m.now()-b}}var v=[],p=[],S=1,E=null,T=3,B=!1,O=!1,j=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function P(N){for(var W=c(p);W!==null;){if(W.callback===null)o(p);else if(W.startTime<=N)o(p),W.sortIndex=W.expirationTime,i(v,W);else break;W=c(p)}}function V(N){if(j=!1,P(N),!O)if(c(v)!==null)O=!0,I||(I=!0,ge());else{var W=c(p);W!==null&&xe(V,W.startTime-N)}}var I=!1,te=-1,de=5,he=-1;function _e(){return k?!0:!(a.unstable_now()-he<de)}function Oe(){if(k=!1,I){var N=a.unstable_now();he=N;var W=!0;try{e:{O=!1,j&&(j=!1,L(te),te=-1),B=!0;var F=T;try{t:{for(P(N),E=c(v);E!==null&&!(E.expirationTime>N&&_e());){var ie=E.callback;if(typeof ie=="function"){E.callback=null,T=E.priorityLevel;var x=ie(E.expirationTime<=N);if(N=a.unstable_now(),typeof x=="function"){E.callback=x,P(N),W=!0;break t}E===c(v)&&o(v),P(N)}else o(v);E=c(v)}if(E!==null)W=!0;else{var Y=c(p);Y!==null&&xe(V,Y.startTime-N),W=!1}}break e}finally{E=null,T=F,B=!1}W=void 0}}finally{W?ge():I=!1}}}var ge;if(typeof Q=="function")ge=function(){Q(Oe)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,ke=Qe.port2;Qe.port1.onmessage=Oe,ge=function(){ke.postMessage(null)}}else ge=function(){R(Oe,0)};function xe(N,W){te=R(function(){N(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(N){switch(T){case 1:case 2:case 3:var W=3;break;default:W=T}var F=T;T=W;try{return N()}finally{T=F}},a.unstable_requestPaint=function(){k=!0},a.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=T;T=N;try{return W()}finally{T=F}},a.unstable_scheduleCallback=function(N,W,F){var ie=a.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ie+F:ie):F=ie,N){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=F+x,N={id:S++,callback:W,priorityLevel:N,startTime:F,expirationTime:x,sortIndex:-1},F>ie?(N.sortIndex=F,i(p,N),c(v)===null&&N===c(p)&&(j?(L(te),te=-1):j=!0,xe(V,F-ie))):(N.sortIndex=x,i(v,N),O||B||(O=!0,I||(I=!0,ge()))),N},a.unstable_shouldYield=_e,a.unstable_wrapCallback=function(N){var W=T;return function(){var F=T;T=W;try{return N.apply(this,arguments)}finally{T=F}}}}(Io)),Io}var Lp;function ib(){return Lp||(Lp=1,Fo.exports=ub()),Fo.exports}var Po={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function rb(){if(Qp)return mt;Qp=1;var a=As();function i(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(v,p,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:E==null?null:""+E,children:v,containerInfo:p,implementation:S}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,mt.createPortal=function(v,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return d(v,p,null,S)},mt.flushSync=function(v){var p=m.T,S=o.p;try{if(m.T=null,o.p=2,v)return v()}finally{m.T=p,o.p=S,o.d.f()}},mt.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(v,p))},mt.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},mt.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var S=p.as,E=b(S,p.crossOrigin),T=typeof p.integrity=="string"?p.integrity:void 0,B=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?o.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:B}):S==="script"&&o.d.X(v,{crossOrigin:E,integrity:T,fetchPriority:B,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},mt.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=b(p.as,p.crossOrigin);o.d.M(v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(v)},mt.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,E=b(S,p.crossOrigin);o.d.L(v,S,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},mt.preloadModule=function(v,p){if(typeof v=="string")if(p){var S=b(p.as,p.crossOrigin);o.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(v)},mt.requestFormReset=function(v){o.d.r(v)},mt.unstable_batchedUpdates=function(v,p){return v(p)},mt.useFormState=function(v,p,S){return m.H.useFormState(v,p,S)},mt.useFormStatus=function(){return m.H.useHostTransitionStatus()},mt.version="19.1.0",mt}var Yp;function D0(){if(Yp)return Po.exports;Yp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Po.exports=rb(),Po.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function cb(){if(qp)return zu;qp=1;var a=ib(),i=As(),c=D0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(o(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,n=t;;){var u=l.return;if(u===null)break;var r=u.alternate;if(r===null){if(n=u.return,n!==null){l=n;continue}break}if(u.child===r.child){for(r=u.child;r;){if(r===l)return b(u),e;if(r===n)return b(u),t;r=r.sibling}throw Error(o(188))}if(l.return!==n.return)l=u,n=r;else{for(var f=!1,h=u.child;h;){if(h===l){f=!0,l=u,n=r;break}if(h===n){f=!0,n=u,l=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===l){f=!0,l=r,n=u;break}if(h===n){f=!0,n=r,l=u;break}h=h.sibling}if(!f)throw Error(o(189))}}if(l.alternate!==n)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,E=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),Oe=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=Oe&&e[Oe]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case k:return"Profiler";case j:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case Q:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var xe=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ie=[],x=-1;function Y(e){return{current:e}}function J(e){0>x||(e.current=ie[x],ie[x]=null,x--)}function q(e,t){x++,ie[x]=e.current,e.current=t}var K=Y(null),ae=Y(null),ee=Y(null),oe=Y(null);function pe(e,t){switch(q(ee,t),q(ae,e),q(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?op(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=op(t),e=sp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(K),q(K,e)}function Z(){J(K),J(ae),J(ee)}function fe(e){e.memoizedState!==null&&q(oe,e);var t=K.current,l=sp(t,e.type);t!==l&&(q(ae,e),q(K,l))}function me(e){ae.current===e&&(J(K),J(ae)),oe.current===e&&(J(oe),wu._currentValue=F)}var Te=Object.prototype.hasOwnProperty,Ne=a.unstable_scheduleCallback,Ke=a.unstable_cancelCallback,Je=a.unstable_shouldYield,bt=a.unstable_requestPaint,Ie=a.unstable_now,cl=a.unstable_getCurrentPriorityLevel,Gt=a.unstable_ImmediatePriority,Na=a.unstable_UserBlockingPriority,Ol=a.unstable_NormalPriority,aa=a.unstable_LowPriority,Mn=a.unstable_IdlePriority,Gs=a.log,Hm=a.unstable_setDisableYieldValue,Nn=null,Tt=null;function Cl(e){if(typeof Gs=="function"&&Hm(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Nn,e)}catch{}}var wt=Math.clz32?Math.clz32:Ym,Lm=Math.log,Qm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Lm(e)/Qm|0)|0}var qu=256,Gu=4194304;function na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vu(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var u=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~r,n!==0?u=na(n):(f&=h,f!==0?u=na(f):l||(l=h&~e,l!==0&&(u=na(l))))):(h=n&~r,h!==0?u=na(h):f!==0?u=na(f):l||(l=n&~e,l!==0&&(u=na(l)))),u===0?0:t!==0&&t!==u&&(t&r)===0&&(r=u&-u,l=t&-t,r>=l||r===32&&(l&4194048)!==0)?t:u}function $n(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vs(){var e=qu;return qu<<=1,(qu&4194048)===0&&(qu=256),e}function Xs(){var e=Gu;return Gu<<=1,(Gu&62914560)===0&&(Gu=4194304),e}function Ur(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Bn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gm(e,t,l,n,u,r){var f=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,_=e.hiddenUpdates;for(l=f&~l;0<l;){var U=31-wt(l),G=1<<U;h[U]=0,y[U]=-1;var C=_[U];if(C!==null)for(_[U]=null,U=0;U<C.length;U++){var z=C[U];z!==null&&(z.lane&=-536870913)}l&=~G}n!==0&&Zs(e,n,0),r!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Zs(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-wt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&4194090}function Ks(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-wt(l),u=1<<n;u&t|e[n]&t&&(e[n]|=t),l&=~u}}function kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Js(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Op(e.type))}function Vm(e,t){var l=W.p;try{return W.p=e,t()}finally{W.p=l}}var zl=Math.random().toString(36).slice(2),ht="__reactFiber$"+zl,yt="__reactProps$"+zl,$a="__reactContainer$"+zl,Hr="__reactEvents$"+zl,Xm="__reactListeners$"+zl,Zm="__reactHandles$"+zl,Ws="__reactResources$"+zl,Un="__reactMarker$"+zl;function Lr(e){delete e[ht],delete e[yt],delete e[Hr],delete e[Xm],delete e[Zm]}function Ba(e){var t=e[ht];if(t)return t;for(var l=e.parentNode;l;){if(t=l[$a]||l[ht]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=pp(e);e!==null;){if(l=e[ht])return l;e=pp(e)}return t}e=l,l=e.parentNode}return null}function Ua(e){if(e=e[ht]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function kn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ka(e){var t=e[Ws];return t||(t=e[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Un]=!0}var Fs=new Set,Is={};function ua(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(Is[e]=t,e=0;e<t.length;e++)Fs.add(t[e])}var Km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ps={},ef={};function Jm(e){return Te.call(ef,e)?!0:Te.call(Ps,e)?!1:Km.test(e)?ef[e]=!0:(Ps[e]=!0,!1)}function Xu(e,t,l){if(Jm(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Zu(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function ol(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}var Qr,tf;function Ha(e){if(Qr===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Qr=t&&t[1]||"",tf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qr+e+tf}var Yr=!1;function qr(e,t){if(!e||Yr)return"";Yr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(z){var C=z}Reflect.construct(e,[],G)}else{try{G.call()}catch(z){C=z}e.call(G.prototype)}}else{try{throw Error()}catch(z){C=z}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(z){if(z&&C&&typeof z.stack=="string")return[z.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var y=f.split(`
`),_=h.split(`
`);for(u=n=0;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;for(;u<_.length&&!_[u].includes("DetermineComponentFrameRoot");)u++;if(n===y.length||u===_.length)for(n=y.length-1,u=_.length-1;1<=n&&0<=u&&y[n]!==_[u];)u--;for(;1<=n&&0<=u;n--,u--)if(y[n]!==_[u]){if(n!==1||u!==1)do if(n--,u--,0>u||y[n]!==_[u]){var U=`
`+y[n].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=n&&0<=u);break}}}finally{Yr=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Ha(l):""}function Wm(e){switch(e.tag){case 26:case 27:case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return qr(e.type,!1);case 11:return qr(e.type.render,!1);case 1:return qr(e.type,!0);case 31:return Ha("Activity");default:return""}}function lf(e){try{var t="";do t+=Wm(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fm(e){var t=af(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ku(e){e._valueTracker||(e._valueTracker=Fm(e))}function nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=af(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Ju(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Im=/[\n"\\]/g;function Bt(e){return e.replace(Im,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gr(e,t,l,n,u,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Vr(e,f,$t(t)):l!=null?Vr(e,f,$t(l)):n!=null&&e.removeAttribute("value"),u==null&&r!=null&&(e.defaultChecked=!!r),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+$t(h):e.removeAttribute("name")}function uf(e,t,l,n,u,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||l!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;l=l!=null?""+$t(l):"",t=t!=null?""+$t(t):l,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??u,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Vr(e,t,l){t==="number"&&Ju(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function La(e,t,l,n){if(e=e.options,t){t={};for(var u=0;u<l.length;u++)t["$"+l[u]]=!0;for(l=0;l<e.length;l++)u=t.hasOwnProperty("$"+e[l].value),e[l].selected!==u&&(e[l].selected=u),u&&n&&(e[l].defaultSelected=!0)}else{for(l=""+$t(l),t=null,u=0;u<e.length;u++){if(e[u].value===l){e[u].selected=!0,n&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function rf(e,t,l){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+$t(l):""}function cf(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(o(92));if(xe(n)){if(1<n.length)throw Error(o(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=$t(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n)}function Qa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function of(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||Pm.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function sf(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var u in t)n=t[u],t.hasOwnProperty(u)&&l[u]!==n&&of(e,u,n)}else for(var r in t)t.hasOwnProperty(r)&&of(e,r,t[r])}function Xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wu(e){return tv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zr=null;function Kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,qa=null;function ff(e){var t=Ua(e);if(t&&(e=t.stateNode)){var l=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gr(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var u=n[yt]||null;if(!u)throw Error(o(90));Gr(n,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&nf(n)}break e;case"textarea":rf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&La(e,!!l.multiple,t,!1)}}}var Jr=!1;function df(e,t,l){if(Jr)return e(t,l);Jr=!0;try{var n=e(t);return n}finally{if(Jr=!1,(Ya!==null||qa!==null)&&(Bi(),Ya&&(t=Ya,e=qa,qa=Ya=null,ff(t),e)))for(t=0;t<e.length;t++)ff(e[t])}}function jn(e,t){var l=e.stateNode;if(l===null)return null;var n=l[yt]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var sl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wr=!1;if(sl)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Wr=!1}var Ml=null,Fr=null,Fu=null;function hf(){if(Fu)return Fu;var e,t=Fr,l=t.length,n,u="value"in Ml?Ml.value:Ml.textContent,r=u.length;for(e=0;e<l&&t[e]===u[e];e++);var f=l-e;for(n=1;n<=f&&t[l-n]===u[r-n];n++);return Fu=u.slice(e,1<n?1-n:void 0)}function Iu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pu(){return!0}function pf(){return!1}function xt(e){function t(l,n,u,r,f){this._reactName=l,this._targetInst=u,this.type=n,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(l=e[h],this[h]=l?l(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Pu:pf,this.isPropagationStopped=pf,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pu)},persist:function(){},isPersistent:Pu}),t}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=xt(ia),Ln=S({},ia,{view:0,detail:0}),lv=xt(Ln),Ir,Pr,Qn,ti=S({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Ir=e.screenX-Qn.screenX,Pr=e.screenY-Qn.screenY):Pr=Ir=0,Qn=e),Ir)},movementY:function(e){return"movementY"in e?e.movementY:Pr}}),mf=xt(ti),av=S({},ti,{dataTransfer:0}),nv=xt(av),uv=S({},Ln,{relatedTarget:0}),ec=xt(uv),iv=S({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=xt(iv),cv=S({},ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ov=xt(cv),sv=S({},ia,{data:0}),vf=xt(sv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hv[e])?!!t[e]:!1}function tc(){return pv}var mv=S({},Ln,{key:function(e){if(e.key){var t=fv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Iu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?Iu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Iu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vv=xt(mv),gv=S({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gf=xt(gv),bv=S({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),yv=xt(bv),xv=S({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=xt(xv),Av=S({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=xt(Av),Tv=S({},ia,{newState:0,oldState:0}),wv=xt(Tv),Rv=[9,13,27,32],lc=sl&&"CompositionEvent"in window,Yn=null;sl&&"documentMode"in document&&(Yn=document.documentMode);var Dv=sl&&"TextEvent"in window&&!Yn,bf=sl&&(!lc||Yn&&8<Yn&&11>=Yn),yf=" ",xf=!1;function Sf(e,t){switch(e){case"keyup":return Rv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ga=!1;function _v(e,t){switch(e){case"compositionend":return Af(t);case"keypress":return t.which!==32?null:(xf=!0,yf);case"textInput":return e=t.data,e===yf&&xf?null:e;default:return null}}function Ov(e,t){if(Ga)return e==="compositionend"||!lc&&Sf(e,t)?(e=hf(),Fu=Fr=Ml=null,Ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bf&&t.locale!=="ko"?null:t.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cv[e.type]:t==="textarea"}function Tf(e,t,l,n){Ya?qa?qa.push(n):qa=[n]:Ya=n,t=Qi(t,"onChange"),0<t.length&&(l=new ei("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var qn=null,Gn=null;function zv(e){np(e,0)}function li(e){var t=kn(e);if(nf(t))return e}function wf(e,t){if(e==="change")return t}var Rf=!1;if(sl){var ac;if(sl){var nc="oninput"in document;if(!nc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),nc=typeof Df.oninput=="function"}ac=nc}else ac=!1;Rf=ac&&(!document.documentMode||9<document.documentMode)}function _f(){qn&&(qn.detachEvent("onpropertychange",Of),Gn=qn=null)}function Of(e){if(e.propertyName==="value"&&li(Gn)){var t=[];Tf(t,Gn,e,Kr(e)),df(zv,t)}}function Mv(e,t,l){e==="focusin"?(_f(),qn=t,Gn=l,qn.attachEvent("onpropertychange",Of)):e==="focusout"&&_f()}function Nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Gn)}function $v(e,t){if(e==="click")return li(t)}function Bv(e,t){if(e==="input"||e==="change")return li(t)}function Uv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Uv;function Vn(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var u=l[n];if(!Te.call(t,u)||!Rt(e[u],t[u]))return!1}return!0}function Cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var l=Cf(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Cf(l)}}function Mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ju(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Ju(e.document)}return t}function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kv=sl&&"documentMode"in document&&11>=document.documentMode,Va=null,ic=null,Xn=null,rc=!1;function $f(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;rc||Va==null||Va!==Ju(n)||(n=Va,"selectionStart"in n&&uc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xn&&Vn(Xn,n)||(Xn=n,n=Qi(ic,"onSelect"),0<n.length&&(t=new ei("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=Va)))}function ra(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Xa={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},cc={},Bf={};sl&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function ca(e){if(cc[e])return cc[e];if(!Xa[e])return e;var t=Xa[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Bf)return cc[e]=t[l];return e}var Uf=ca("animationend"),kf=ca("animationiteration"),jf=ca("animationstart"),jv=ca("transitionrun"),Hv=ca("transitionstart"),Lv=ca("transitioncancel"),Hf=ca("transitionend"),Lf=new Map,oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oc.push("scrollEnd");function Vt(e,t){Lf.set(e,t),ua(t,[e])}var Qf=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var l=Qf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:lf(t)},Qf.set(e,t),t)}return{value:e,source:t,stack:lf(t)}}var kt=[],Za=0,sc=0;function ai(){for(var e=Za,t=sc=Za=0;t<e;){var l=kt[t];kt[t++]=null;var n=kt[t];kt[t++]=null;var u=kt[t];kt[t++]=null;var r=kt[t];if(kt[t++]=null,n!==null&&u!==null){var f=n.pending;f===null?u.next=u:(u.next=f.next,f.next=u),n.pending=u}r!==0&&Yf(l,u,r)}}function ni(e,t,l,n){kt[Za++]=e,kt[Za++]=t,kt[Za++]=l,kt[Za++]=n,sc|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function fc(e,t,l,n){return ni(e,t,l,n),ui(e)}function Ka(e,t){return ni(e,null,null,t),ui(e)}function Yf(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var u=!1,r=e.return;r!==null;)r.childLanes|=l,n=r.alternate,n!==null&&(n.childLanes|=l),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(u=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,u&&t!==null&&(u=31-wt(l),e=r.hiddenUpdates,n=e[u],n===null?e[u]=[t]:n.push(t),t.lane=l|536870912),r):null}function ui(e){if(50<gu)throw gu=0,bo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ja={};function Qv(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,l,n){return new Qv(e,t,l,n)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fl(e,t){var l=e.alternate;return l===null?(l=Dt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function qf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,l,n,u,r){var f=0;if(n=e,typeof e=="function")dc(e)&&(f=1);else if(typeof e=="string")f=qg(e,l,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=Dt(31,l,t,u),e.elementType=he,e.lanes=r,e;case O:return oa(l.children,u,r,t);case j:f=8,u|=24;break;case k:return e=Dt(12,l,t,u|2),e.elementType=k,e.lanes=r,e;case V:return e=Dt(13,l,t,u),e.elementType=V,e.lanes=r,e;case I:return e=Dt(19,l,t,u),e.elementType=I,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:case Q:f=10;break e;case L:f=9;break e;case P:f=11;break e;case te:f=14;break e;case de:f=16,n=null;break e}f=29,l=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=Dt(f,l,t,u),t.elementType=e,t.type=n,t.lanes=r,t}function oa(e,t,l,n){return e=Dt(7,e,n,t),e.lanes=l,e}function hc(e,t,l){return e=Dt(6,e,null,t),e.lanes=l,e}function pc(e,t,l){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wa=[],Fa=0,ri=null,ci=0,jt=[],Ht=0,sa=null,dl=1,hl="";function fa(e,t){Wa[Fa++]=ci,Wa[Fa++]=ri,ri=e,ci=t}function Gf(e,t,l){jt[Ht++]=dl,jt[Ht++]=hl,jt[Ht++]=sa,sa=e;var n=dl;e=hl;var u=32-wt(n)-1;n&=~(1<<u),l+=1;var r=32-wt(t)+u;if(30<r){var f=u-u%5;r=(n&(1<<f)-1).toString(32),n>>=f,u-=f,dl=1<<32-wt(t)+u|l<<u|n,hl=r+e}else dl=1<<r|l<<u|n,hl=e}function mc(e){e.return!==null&&(fa(e,1),Gf(e,1,0))}function vc(e){for(;e===ri;)ri=Wa[--Fa],Wa[Fa]=null,ci=Wa[--Fa],Wa[Fa]=null;for(;e===sa;)sa=jt[--Ht],jt[Ht]=null,hl=jt[--Ht],jt[Ht]=null,dl=jt[--Ht],jt[Ht]=null}var gt=null,Ve=null,De=!1,da=null,It=!1,gc=Error(o(519));function ha(e){var t=Error(o(418,""));throw Jn(Ut(t,e)),gc}function Vf(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[ht]=e,t[yt]=n,l){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(l=0;l<yu.length;l++)Ee(yu[l],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),uf(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ku(t);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),cf(t,n.value,n.defaultValue,n.children),Ku(t)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||cp(t.textContent,l)?(n.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),n.onScroll!=null&&Ee("scroll",t),n.onScrollEnd!=null&&Ee("scrollend",t),n.onClick!=null&&(t.onclick=Yi),t=!0):t=!1,t||ha(e)}function Xf(e){for(gt=e.return;gt;)switch(gt.tag){case 5:case 13:It=!1;return;case 27:case 3:It=!0;return;default:gt=gt.return}}function Zn(e){if(e!==gt)return!1;if(!De)return Xf(e),De=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||$o(e.type,e.memoizedProps)),l=!l),l&&Ve&&ha(e),Xf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Ve=Zt(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Ve=null}}else t===27?(t=Ve,Kl(e.type)?(e=jo,jo=null,Ve=e):Ve=t):Ve=gt?Zt(e.stateNode.nextSibling):null;return!0}function Kn(){Ve=gt=null,De=!1}function Zf(){var e=da;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),da=null),e}function Jn(e){da===null?da=[e]:da.push(e)}var bc=Y(null),pa=null,pl=null;function Nl(e,t,l){q(bc,t._currentValue),t._currentValue=l}function ml(e){e._currentValue=bc.current,J(bc)}function yc(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function xc(e,t,l,n){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var r=u.dependencies;if(r!==null){var f=u.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=u;for(var y=0;y<t.length;y++)if(h.context===t[y]){r.lanes|=l,h=r.alternate,h!==null&&(h.lanes|=l),yc(r.return,l,e),n||(f=null);break e}r=h.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(o(341));f.lanes|=l,r=f.alternate,r!==null&&(r.lanes|=l),yc(f,l,e),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===e){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function Wn(e,t,l,n){e=null;for(var u=t,r=!1;u!==null;){if(!r){if((u.flags&524288)!==0)r=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var h=u.type;Rt(u.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(u===oe.current){if(f=u.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wu):e=[wu])}u=u.return}e!==null&&xc(t,e,l,n),t.flags|=262144}function oi(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){pa=e,pl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return Kf(pa,e)}function si(e,t){return pa===null&&ma(e),Kf(e,t)}function Kf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},pl===null){if(e===null)throw Error(o(308));pl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pl=pl.next=t;return l}var Yv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},qv=a.unstable_scheduleCallback,Gv=a.unstable_NormalPriority,lt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sc(){return{controller:new Yv,data:new Map,refCount:0}}function Fn(e){e.refCount--,e.refCount===0&&qv(Gv,function(){e.controller.abort()})}var In=null,Ac=0,Ia=0,Pa=null;function Vv(e,t){if(In===null){var l=In=[];Ac=0,Ia=wo(),Pa={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Ac++,t.then(Jf,Jf),t}function Jf(){if(--Ac===0&&In!==null){Pa!==null&&(Pa.status="fulfilled");var e=In;In=null,Ia=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xv(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var u=0;u<l.length;u++)(0,l[u])(t)},function(u){for(n.status="rejected",n.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),n}var Wf=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vv(e,t),Wf!==null&&Wf(e,t)};var va=Y(null);function Ec(){var e=va.current;return e!==null?e:He.pooledCache}function fi(e,t){t===null?q(va,va.current):q(va,t.pool)}function Ff(){var e=Ec();return e===null?null:{parent:lt._currentValue,pool:e}}var Pn=Error(o(460)),If=Error(o(474)),di=Error(o(542)),Tc={then:function(){}};function Pf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hi(){}function ed(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(hi,hi),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ld(e),e;default:if(typeof t.status=="string")t.then(hi,hi);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=n}},function(n){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ld(e),e}throw eu=t,Pn}}var eu=null;function td(){if(eu===null)throw Error(o(459));var e=eu;return eu=null,e}function ld(e){if(e===Pn||e===di)throw Error(o(483))}var $l=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ul(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ze&2)!==0){var u=n.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),n.pending=t,t=ui(e),Yf(e,null,l),t}return ni(e,n,t,l),ui(e)}function tu(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Ks(e,l)}}function Dc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var u=null,r=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};r===null?u=r=f:r=r.next=f,l=l.next}while(l!==null);r===null?u=r=t:r=r.next=t}else u=r=t;l={baseState:n.baseState,firstBaseUpdate:u,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var _c=!1;function lu(){if(_c){var e=Pa;if(e!==null)throw e}}function au(e,t,l,n){_c=!1;var u=e.updateQueue;$l=!1;var r=u.firstBaseUpdate,f=u.lastBaseUpdate,h=u.shared.pending;if(h!==null){u.shared.pending=null;var y=h,_=y.next;y.next=null,f===null?r=_:f.next=_,f=y;var U=e.alternate;U!==null&&(U=U.updateQueue,h=U.lastBaseUpdate,h!==f&&(h===null?U.firstBaseUpdate=_:h.next=_,U.lastBaseUpdate=y))}if(r!==null){var G=u.baseState;f=0,U=_=y=null,h=r;do{var C=h.lane&-536870913,z=C!==h.lane;if(z?(we&C)===C:(n&C)===C){C!==0&&C===Ia&&(_c=!0),U!==null&&(U=U.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var se=e,re=h;C=t;var Ue=l;switch(re.tag){case 1:if(se=re.payload,typeof se=="function"){G=se.call(Ue,G,C);break e}G=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=re.payload,C=typeof se=="function"?se.call(Ue,G,C):se,C==null)break e;G=S({},G,C);break e;case 2:$l=!0}}C=h.callback,C!==null&&(e.flags|=64,z&&(e.flags|=8192),z=u.callbacks,z===null?u.callbacks=[C]:z.push(C))}else z={lane:C,tag:h.tag,payload:h.payload,callback:h.callback,next:null},U===null?(_=U=z,y=G):U=U.next=z,f|=C;if(h=h.next,h===null){if(h=u.shared.pending,h===null)break;z=h,h=z.next,z.next=null,u.lastBaseUpdate=z,u.shared.pending=null}}while(!0);U===null&&(y=G),u.baseState=y,u.firstBaseUpdate=_,u.lastBaseUpdate=U,r===null&&(u.shared.lanes=0),Gl|=f,e.lanes=f,e.memoizedState=G}}function ad(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function nd(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)ad(l[e],t)}var en=Y(null),pi=Y(0);function ud(e,t){e=Al,q(pi,e),q(en,t),Al=e|t.baseLanes}function Oc(){q(pi,Al),q(en,en.current)}function Cc(){Al=pi.current,J(en),J(pi)}var kl=0,ye=null,$e=null,Pe=null,mi=!1,tn=!1,ga=!1,vi=0,nu=0,ln=null,Zv=0;function We(){throw Error(o(321))}function zc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Rt(e[l],t[l]))return!1;return!0}function Mc(e,t,l,n,u,r){return kl=r,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Yd:qd,ga=!1,r=l(n,u),ga=!1,tn&&(r=rd(t,l,n,u)),id(e),r}function id(e){N.H=Ai;var t=$e!==null&&$e.next!==null;if(kl=0,Pe=$e=ye=null,mi=!1,nu=0,ln=null,t)throw Error(o(300));e===null||ut||(e=e.dependencies,e!==null&&oi(e)&&(ut=!0))}function rd(e,t,l,n){ye=e;var u=0;do{if(tn&&(ln=null),nu=0,tn=!1,25<=u)throw Error(o(301));if(u+=1,Pe=$e=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=eg,r=t(l,n)}while(tn);return r}function Kv(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?uu(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(ye.flags|=1024),t}function Nc(){var e=vi!==0;return vi=0,e}function $c(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Bc(e){if(mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mi=!1}kl=0,Pe=$e=ye=null,tn=!1,nu=vi=0,ln=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ye.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function et(){if($e===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Pe===null?ye.memoizedState:Pe.next;if(t!==null)Pe=t,$e=e;else{if(e===null)throw ye.alternate===null?Error(o(467)):Error(o(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Pe===null?ye.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uu(e){var t=nu;return nu+=1,ln===null&&(ln=[]),e=ed(ln,e,t),t=ye,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Yd:qd),e}function gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uu(e);if(e.$$typeof===Q)return pt(e)}throw Error(o(438,String(e)))}function kc(e){var t=null,l=ye.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=ye.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Uc(),ye.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=_e;return t.index++,l}function vl(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=et();return jc(t,$e,e)}function jc(e,t,l){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=l;var u=e.baseQueue,r=n.pending;if(r!==null){if(u!==null){var f=u.next;u.next=r.next,r.next=f}t.baseQueue=u=r,n.pending=null}if(r=e.baseState,u===null)e.memoizedState=r;else{t=u.next;var h=f=null,y=null,_=t,U=!1;do{var G=_.lane&-536870913;if(G!==_.lane?(we&G)===G:(kl&G)===G){var C=_.revertLane;if(C===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),G===Ia&&(U=!0);else if((kl&C)===C){_=_.next,C===Ia&&(U=!0);continue}else G={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},y===null?(h=y=G,f=r):y=y.next=G,ye.lanes|=C,Gl|=C;G=_.action,ga&&l(r,G),r=_.hasEagerState?_.eagerState:l(r,G)}else C={lane:G,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},y===null?(h=y=C,f=r):y=y.next=C,ye.lanes|=G,Gl|=G;_=_.next}while(_!==null&&_!==t);if(y===null?f=r:y.next=h,!Rt(r,e.memoizedState)&&(ut=!0,U&&(l=Pa,l!==null)))throw l;e.memoizedState=r,e.baseState=f,e.baseQueue=y,n.lastRenderedState=r}return u===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Hc(e){var t=et(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var n=l.dispatch,u=l.pending,r=t.memoizedState;if(u!==null){l.pending=null;var f=u=u.next;do r=e(r,f.action),f=f.next;while(f!==u);Rt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),l.lastRenderedState=r}return[r,n]}function cd(e,t,l){var n=ye,u=et(),r=De;if(r){if(l===void 0)throw Error(o(407));l=l()}else l=t();var f=!Rt(($e||u).memoizedState,l);f&&(u.memoizedState=l,ut=!0),u=u.queue;var h=fd.bind(null,n,u,e);if(iu(2048,8,h,[e]),u.getSnapshot!==t||f||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,an(9,yi(),sd.bind(null,n,u,l,t),null),He===null)throw Error(o(349));r||(kl&124)!==0||od(n,t,l)}return l}function od(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ye.updateQueue,t===null?(t=Uc(),ye.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function sd(e,t,l,n){t.value=l,t.getSnapshot=n,dd(t)&&hd(e)}function fd(e,t,l){return l(function(){dd(t)&&hd(e)})}function dd(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Rt(e,l)}catch{return!0}}function hd(e){var t=Ka(e,2);t!==null&&Mt(t,e,2)}function Lc(e){var t=St();if(typeof e=="function"){var l=e;if(e=l(),ga){Cl(!0);try{l()}finally{Cl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:e},t}function pd(e,t,l,n){return e.baseState=l,jc(e,$e,typeof n=="function"?n:vl)}function Jv(e,t,l,n,u){if(Si(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};N.T!==null?l(!0):r.isTransition=!1,n(r),l=t.pending,l===null?(r.next=t.pending=r,md(t,r)):(r.next=l.next,t.pending=l.next=r)}}function md(e,t){var l=t.action,n=t.payload,u=e.state;if(t.isTransition){var r=N.T,f={};N.T=f;try{var h=l(u,n),y=N.S;y!==null&&y(f,h),vd(e,t,h)}catch(_){Qc(e,t,_)}finally{N.T=r}}else try{r=l(u,n),vd(e,t,r)}catch(_){Qc(e,t,_)}}function vd(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){gd(e,t,n)},function(n){return Qc(e,t,n)}):gd(e,t,l)}function gd(e,t,l){t.status="fulfilled",t.value=l,bd(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,md(e,l)))}function Qc(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,bd(t),t=t.next;while(t!==n)}e.action=null}function bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yd(e,t){return t}function xd(e,t){if(De){var l=He.formState;if(l!==null){e:{var n=ye;if(De){if(Ve){t:{for(var u=Ve,r=It;u.nodeType!==8;){if(!r){u=null;break t}if(u=Zt(u.nextSibling),u===null){u=null;break t}}r=u.data,u=r==="F!"||r==="F"?u:null}if(u){Ve=Zt(u.nextSibling),n=u.data==="F!";break e}}ha(n)}n=!1}n&&(t=l[0])}}return l=St(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yd,lastRenderedState:t},l.queue=n,l=Hd.bind(null,ye,n),n.dispatch=l,n=Lc(!1),r=Xc.bind(null,ye,!1,n.queue),n=St(),u={state:t,dispatch:null,action:e,pending:null},n.queue=u,l=Jv.bind(null,ye,u,r,l),u.dispatch=l,n.memoizedState=e,[t,l,!1]}function Sd(e){var t=et();return Ad(t,$e,e)}function Ad(e,t,l){if(t=jc(e,t,yd)[0],e=bi(vl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=uu(t)}catch(f){throw f===Pn?di:f}else n=t;t=et();var u=t.queue,r=u.dispatch;return l!==t.memoizedState&&(ye.flags|=2048,an(9,yi(),Wv.bind(null,u,l),null)),[n,r,e]}function Wv(e,t){e.action=t}function Ed(e){var t=et(),l=$e;if(l!==null)return Ad(t,l,e);et(),t=t.memoizedState,l=et();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function an(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=ye.updateQueue,t===null&&(t=Uc(),ye.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function yi(){return{destroy:void 0,resource:void 0}}function Td(){return et().memoizedState}function xi(e,t,l,n){var u=St();n=n===void 0?null:n,ye.flags|=e,u.memoizedState=an(1|t,yi(),l,n)}function iu(e,t,l,n){var u=et();n=n===void 0?null:n;var r=u.memoizedState.inst;$e!==null&&n!==null&&zc(n,$e.memoizedState.deps)?u.memoizedState=an(t,r,l,n):(ye.flags|=e,u.memoizedState=an(1|t,r,l,n))}function wd(e,t){xi(8390656,8,e,t)}function Rd(e,t){iu(2048,8,e,t)}function Dd(e,t){return iu(4,2,e,t)}function _d(e,t){return iu(4,4,e,t)}function Od(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,l){l=l!=null?l.concat([e]):null,iu(4,4,Od.bind(null,t,e),l)}function Yc(){}function zd(e,t){var l=et();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&zc(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function Md(e,t){var l=et();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&zc(t,n[1]))return n[0];if(n=e(),ga){Cl(!0);try{e()}finally{Cl(!1)}}return l.memoizedState=[n,t],n}function qc(e,t,l){return l===void 0||(kl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=Bh(),ye.lanes|=e,Gl|=e,l)}function Nd(e,t,l,n){return Rt(l,t)?l:en.current!==null?(e=qc(e,l,n),Rt(e,t)||(ut=!0),e):(kl&42)===0?(ut=!0,e.memoizedState=l):(e=Bh(),ye.lanes|=e,Gl|=e,t)}function $d(e,t,l,n,u){var r=W.p;W.p=r!==0&&8>r?r:8;var f=N.T,h={};N.T=h,Xc(e,!1,t,l);try{var y=u(),_=N.S;if(_!==null&&_(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var U=Xv(y,n);ru(e,t,U,zt(e))}else ru(e,t,n,zt(e))}catch(G){ru(e,t,{then:function(){},status:"rejected",reason:G},zt())}finally{W.p=r,N.T=f}}function Fv(){}function Gc(e,t,l,n){if(e.tag!==5)throw Error(o(476));var u=Bd(e).queue;$d(e,u,t,F,l===null?Fv:function(){return Ud(e),l(n)})}function Bd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:F},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ud(e){var t=Bd(e).next.queue;ru(e,t,{},zt())}function Vc(){return pt(wu)}function kd(){return et().memoizedState}function jd(){return et().memoizedState}function Iv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=zt();e=Bl(l);var n=Ul(t,e,l);n!==null&&(Mt(n,t,l),tu(n,t,l)),t={cache:Sc()},e.payload=t;return}t=t.return}}function Pv(e,t,l){var n=zt();l={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Si(e)?Ld(t,l):(l=fc(e,t,l,n),l!==null&&(Mt(l,e,n),Qd(l,t,n)))}function Hd(e,t,l){var n=zt();ru(e,t,l,n)}function ru(e,t,l,n){var u={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Si(e))Ld(t,u);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,l);if(u.hasEagerState=!0,u.eagerState=h,Rt(h,f))return ni(e,t,u,0),He===null&&ai(),!1}catch{}finally{}if(l=fc(e,t,u,n),l!==null)return Mt(l,e,n),Qd(l,t,n),!0}return!1}function Xc(e,t,l,n){if(n={lane:2,revertLane:wo(),action:n,hasEagerState:!1,eagerState:null,next:null},Si(e)){if(t)throw Error(o(479))}else t=fc(e,l,n,2),t!==null&&Mt(t,e,2)}function Si(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Ld(e,t){tn=mi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Qd(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Ks(e,l)}}var Ai={readContext:pt,use:gi,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We},Yd={readContext:pt,use:gi,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:wd,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,xi(4194308,4,Od.bind(null,t,e),l)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){xi(4,2,e,t)},useMemo:function(e,t){var l=St();t=t===void 0?null:t;var n=e();if(ga){Cl(!0);try{e()}finally{Cl(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=St();if(l!==void 0){var u=l(t);if(ga){Cl(!0);try{l(t)}finally{Cl(!1)}}}else u=t;return n.memoizedState=n.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},n.queue=e,e=e.dispatch=Pv.bind(null,ye,e),[n.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Lc(e);var t=e.queue,l=Hd.bind(null,ye,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Yc,useDeferredValue:function(e,t){var l=St();return qc(l,e,t)},useTransition:function(){var e=Lc(!1);return e=$d.bind(null,ye,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=ye,u=St();if(De){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),He===null)throw Error(o(349));(we&124)!==0||od(n,t,l)}u.memoizedState=l;var r={value:l,getSnapshot:t};return u.queue=r,wd(fd.bind(null,n,r,e),[e]),n.flags|=2048,an(9,yi(),sd.bind(null,n,r,l,t),null),l},useId:function(){var e=St(),t=He.identifierPrefix;if(De){var l=hl,n=dl;l=(n&~(1<<32-wt(n)-1)).toString(32)+l,t="«"+t+"R"+l,l=vi++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=Zv++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Vc,useFormState:xd,useActionState:xd,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Xc.bind(null,ye,!0,l),l.dispatch=t,[e,t]},useMemoCache:kc,useCacheRefresh:function(){return St().memoizedState=Iv.bind(null,ye)}},qd={readContext:pt,use:gi,useCallback:zd,useContext:pt,useEffect:Rd,useImperativeHandle:Cd,useInsertionEffect:Dd,useLayoutEffect:_d,useMemo:Md,useReducer:bi,useRef:Td,useState:function(){return bi(vl)},useDebugValue:Yc,useDeferredValue:function(e,t){var l=et();return Nd(l,$e.memoizedState,e,t)},useTransition:function(){var e=bi(vl)[0],t=et().memoizedState;return[typeof e=="boolean"?e:uu(e),t]},useSyncExternalStore:cd,useId:kd,useHostTransitionStatus:Vc,useFormState:Sd,useActionState:Sd,useOptimistic:function(e,t){var l=et();return pd(l,$e,e,t)},useMemoCache:kc,useCacheRefresh:jd},eg={readContext:pt,use:gi,useCallback:zd,useContext:pt,useEffect:Rd,useImperativeHandle:Cd,useInsertionEffect:Dd,useLayoutEffect:_d,useMemo:Md,useReducer:Hc,useRef:Td,useState:function(){return Hc(vl)},useDebugValue:Yc,useDeferredValue:function(e,t){var l=et();return $e===null?qc(l,e,t):Nd(l,$e.memoizedState,e,t)},useTransition:function(){var e=Hc(vl)[0],t=et().memoizedState;return[typeof e=="boolean"?e:uu(e),t]},useSyncExternalStore:cd,useId:kd,useHostTransitionStatus:Vc,useFormState:Ed,useActionState:Ed,useOptimistic:function(e,t){var l=et();return $e!==null?pd(l,$e,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:kc,useCacheRefresh:jd},nn=null,cu=0;function Ei(e){var t=cu;return cu+=1,nn===null&&(nn=[]),ed(nn,e,t)}function ou(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ti(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gd(e){var t=e._init;return t(e._payload)}function Vd(e){function t(w,A){if(e){var D=w.deletions;D===null?(w.deletions=[A],w.flags|=16):D.push(A)}}function l(w,A){if(!e)return null;for(;A!==null;)t(w,A),A=A.sibling;return null}function n(w){for(var A=new Map;w!==null;)w.key!==null?A.set(w.key,w):A.set(w.index,w),w=w.sibling;return A}function u(w,A){return w=fl(w,A),w.index=0,w.sibling=null,w}function r(w,A,D){return w.index=D,e?(D=w.alternate,D!==null?(D=D.index,D<A?(w.flags|=67108866,A):D):(w.flags|=67108866,A)):(w.flags|=1048576,A)}function f(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function h(w,A,D,H){return A===null||A.tag!==6?(A=hc(D,w.mode,H),A.return=w,A):(A=u(A,D),A.return=w,A)}function y(w,A,D,H){var ne=D.type;return ne===O?U(w,A,D.props.children,H,D.key):A!==null&&(A.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===de&&Gd(ne)===A.type)?(A=u(A,D.props),ou(A,D),A.return=w,A):(A=ii(D.type,D.key,D.props,null,w.mode,H),ou(A,D),A.return=w,A)}function _(w,A,D,H){return A===null||A.tag!==4||A.stateNode.containerInfo!==D.containerInfo||A.stateNode.implementation!==D.implementation?(A=pc(D,w.mode,H),A.return=w,A):(A=u(A,D.children||[]),A.return=w,A)}function U(w,A,D,H,ne){return A===null||A.tag!==7?(A=oa(D,w.mode,H,ne),A.return=w,A):(A=u(A,D),A.return=w,A)}function G(w,A,D){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=hc(""+A,w.mode,D),A.return=w,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case T:return D=ii(A.type,A.key,A.props,null,w.mode,D),ou(D,A),D.return=w,D;case B:return A=pc(A,w.mode,D),A.return=w,A;case de:var H=A._init;return A=H(A._payload),G(w,A,D)}if(xe(A)||ge(A))return A=oa(A,w.mode,D,null),A.return=w,A;if(typeof A.then=="function")return G(w,Ei(A),D);if(A.$$typeof===Q)return G(w,si(w,A),D);Ti(w,A)}return null}function C(w,A,D,H){var ne=A!==null?A.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return ne!==null?null:h(w,A,""+D,H);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case T:return D.key===ne?y(w,A,D,H):null;case B:return D.key===ne?_(w,A,D,H):null;case de:return ne=D._init,D=ne(D._payload),C(w,A,D,H)}if(xe(D)||ge(D))return ne!==null?null:U(w,A,D,H,null);if(typeof D.then=="function")return C(w,A,Ei(D),H);if(D.$$typeof===Q)return C(w,A,si(w,D),H);Ti(w,D)}return null}function z(w,A,D,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return w=w.get(D)||null,h(A,w,""+H,ne);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case T:return w=w.get(H.key===null?D:H.key)||null,y(A,w,H,ne);case B:return w=w.get(H.key===null?D:H.key)||null,_(A,w,H,ne);case de:var Se=H._init;return H=Se(H._payload),z(w,A,D,H,ne)}if(xe(H)||ge(H))return w=w.get(D)||null,U(A,w,H,ne,null);if(typeof H.then=="function")return z(w,A,D,Ei(H),ne);if(H.$$typeof===Q)return z(w,A,D,si(A,H),ne);Ti(A,H)}return null}function se(w,A,D,H){for(var ne=null,Se=null,ue=A,ce=A=0,rt=null;ue!==null&&ce<D.length;ce++){ue.index>ce?(rt=ue,ue=null):rt=ue.sibling;var Re=C(w,ue,D[ce],H);if(Re===null){ue===null&&(ue=rt);break}e&&ue&&Re.alternate===null&&t(w,ue),A=r(Re,A,ce),Se===null?ne=Re:Se.sibling=Re,Se=Re,ue=rt}if(ce===D.length)return l(w,ue),De&&fa(w,ce),ne;if(ue===null){for(;ce<D.length;ce++)ue=G(w,D[ce],H),ue!==null&&(A=r(ue,A,ce),Se===null?ne=ue:Se.sibling=ue,Se=ue);return De&&fa(w,ce),ne}for(ue=n(ue);ce<D.length;ce++)rt=z(ue,w,ce,D[ce],H),rt!==null&&(e&&rt.alternate!==null&&ue.delete(rt.key===null?ce:rt.key),A=r(rt,A,ce),Se===null?ne=rt:Se.sibling=rt,Se=rt);return e&&ue.forEach(function(Pl){return t(w,Pl)}),De&&fa(w,ce),ne}function re(w,A,D,H){if(D==null)throw Error(o(151));for(var ne=null,Se=null,ue=A,ce=A=0,rt=null,Re=D.next();ue!==null&&!Re.done;ce++,Re=D.next()){ue.index>ce?(rt=ue,ue=null):rt=ue.sibling;var Pl=C(w,ue,Re.value,H);if(Pl===null){ue===null&&(ue=rt);break}e&&ue&&Pl.alternate===null&&t(w,ue),A=r(Pl,A,ce),Se===null?ne=Pl:Se.sibling=Pl,Se=Pl,ue=rt}if(Re.done)return l(w,ue),De&&fa(w,ce),ne;if(ue===null){for(;!Re.done;ce++,Re=D.next())Re=G(w,Re.value,H),Re!==null&&(A=r(Re,A,ce),Se===null?ne=Re:Se.sibling=Re,Se=Re);return De&&fa(w,ce),ne}for(ue=n(ue);!Re.done;ce++,Re=D.next())Re=z(ue,w,ce,Re.value,H),Re!==null&&(e&&Re.alternate!==null&&ue.delete(Re.key===null?ce:Re.key),A=r(Re,A,ce),Se===null?ne=Re:Se.sibling=Re,Se=Re);return e&&ue.forEach(function(tb){return t(w,tb)}),De&&fa(w,ce),ne}function Ue(w,A,D,H){if(typeof D=="object"&&D!==null&&D.type===O&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case T:e:{for(var ne=D.key;A!==null;){if(A.key===ne){if(ne=D.type,ne===O){if(A.tag===7){l(w,A.sibling),H=u(A,D.props.children),H.return=w,w=H;break e}}else if(A.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===de&&Gd(ne)===A.type){l(w,A.sibling),H=u(A,D.props),ou(H,D),H.return=w,w=H;break e}l(w,A);break}else t(w,A);A=A.sibling}D.type===O?(H=oa(D.props.children,w.mode,H,D.key),H.return=w,w=H):(H=ii(D.type,D.key,D.props,null,w.mode,H),ou(H,D),H.return=w,w=H)}return f(w);case B:e:{for(ne=D.key;A!==null;){if(A.key===ne)if(A.tag===4&&A.stateNode.containerInfo===D.containerInfo&&A.stateNode.implementation===D.implementation){l(w,A.sibling),H=u(A,D.children||[]),H.return=w,w=H;break e}else{l(w,A);break}else t(w,A);A=A.sibling}H=pc(D,w.mode,H),H.return=w,w=H}return f(w);case de:return ne=D._init,D=ne(D._payload),Ue(w,A,D,H)}if(xe(D))return se(w,A,D,H);if(ge(D)){if(ne=ge(D),typeof ne!="function")throw Error(o(150));return D=ne.call(D),re(w,A,D,H)}if(typeof D.then=="function")return Ue(w,A,Ei(D),H);if(D.$$typeof===Q)return Ue(w,A,si(w,D),H);Ti(w,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,A!==null&&A.tag===6?(l(w,A.sibling),H=u(A,D),H.return=w,w=H):(l(w,A),H=hc(D,w.mode,H),H.return=w,w=H),f(w)):l(w,A)}return function(w,A,D,H){try{cu=0;var ne=Ue(w,A,D,H);return nn=null,ne}catch(ue){if(ue===Pn||ue===di)throw ue;var Se=Dt(29,ue,null,w.mode);return Se.lanes=H,Se.return=w,Se}finally{}}}var un=Vd(!0),Xd=Vd(!1),Lt=Y(null),Pt=null;function jl(e){var t=e.alternate;q(at,at.current&1),q(Lt,e),Pt===null&&(t===null||en.current!==null||t.memoizedState!==null)&&(Pt=e)}function Zd(e){if(e.tag===22){if(q(at,at.current),q(Lt,e),Pt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Pt=e)}}else Hl()}function Hl(){q(at,at.current),q(Lt,Lt.current)}function gl(e){J(Lt),Pt===e&&(Pt=null),J(at)}var at=Y(0);function wi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||ko(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Zc(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:S({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Kc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=zt(),u=Bl(n);u.payload=t,l!=null&&(u.callback=l),t=Ul(e,u,n),t!==null&&(Mt(t,e,n),tu(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=zt(),u=Bl(n);u.tag=1,u.payload=t,l!=null&&(u.callback=l),t=Ul(e,u,n),t!==null&&(Mt(t,e,n),tu(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=zt(),n=Bl(l);n.tag=2,t!=null&&(n.callback=t),t=Ul(e,n,l),t!==null&&(Mt(t,e,l),tu(t,e,l))}};function Kd(e,t,l,n,u,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,f):t.prototype&&t.prototype.isPureReactComponent?!Vn(l,n)||!Vn(u,r):!0}function Jd(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&Kc.enqueueReplaceState(t,t.state,null)}function ba(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=S({},l));for(var u in e)l[u]===void 0&&(l[u]=e[u])}return l}var Ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Wd(e){Ri(e)}function Fd(e){console.error(e)}function Id(e){Ri(e)}function Di(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Pd(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Jc(e,t,l){return l=Bl(l),l.tag=3,l.payload={element:null},l.callback=function(){Di(e,t)},l}function eh(e){return e=Bl(e),e.tag=3,e}function th(e,t,l,n){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var r=n.value;e.payload=function(){return u(r)},e.callback=function(){Pd(t,l,n)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Pd(t,l,n),typeof u!="function"&&(Vl===null?Vl=new Set([this]):Vl.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function tg(e,t,l,n,u){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&Wn(t,l,u,!0),l=Lt.current,l!==null){switch(l.tag){case 13:return Pt===null?xo():l.alternate===null&&Xe===0&&(Xe=3),l.flags&=-257,l.flags|=65536,l.lanes=u,n===Tc?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),Ao(e,n,u)),!1;case 22:return l.flags|=65536,n===Tc?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),Ao(e,n,u)),!1}throw Error(o(435,l.tag))}return Ao(e,n,u),xo(),!1}if(De)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,n!==gc&&(e=Error(o(422),{cause:n}),Jn(Ut(e,l)))):(n!==gc&&(t=Error(o(423),{cause:n}),Jn(Ut(t,l))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,n=Ut(n,l),u=Jc(e.stateNode,n,u),Dc(e,u),Xe!==4&&(Xe=2)),!1;var r=Error(o(520),{cause:n});if(r=Ut(r,l),vu===null?vu=[r]:vu.push(r),Xe!==4&&(Xe=2),t===null)return!0;n=Ut(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=u&-u,l.lanes|=e,e=Jc(l.stateNode,n,e),Dc(l,e),!1;case 1:if(t=l.type,r=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Vl===null||!Vl.has(r))))return l.flags|=65536,u&=-u,l.lanes|=u,u=eh(u),th(u,e,l,n),Dc(l,u),!1}l=l.return}while(l!==null);return!1}var lh=Error(o(461)),ut=!1;function ot(e,t,l,n){t.child=e===null?Xd(t,null,l,n):un(t,e.child,l,n)}function ah(e,t,l,n,u){l=l.render;var r=t.ref;if("ref"in n){var f={};for(var h in n)h!=="ref"&&(f[h]=n[h])}else f=n;return ma(t),n=Mc(e,t,l,f,r,u),h=Nc(),e!==null&&!ut?($c(e,t,u),bl(e,t,u)):(De&&h&&mc(t),t.flags|=1,ot(e,t,n,u),t.child)}function nh(e,t,l,n,u){if(e===null){var r=l.type;return typeof r=="function"&&!dc(r)&&r.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=r,uh(e,t,r,n,u)):(e=ii(l.type,null,n,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ao(e,u)){var f=r.memoizedProps;if(l=l.compare,l=l!==null?l:Vn,l(f,n)&&e.ref===t.ref)return bl(e,t,u)}return t.flags|=1,e=fl(r,n),e.ref=t.ref,e.return=t,t.child=e}function uh(e,t,l,n,u){if(e!==null){var r=e.memoizedProps;if(Vn(r,n)&&e.ref===t.ref)if(ut=!1,t.pendingProps=n=r,ao(e,u))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,bl(e,t,u)}return Wc(e,t,l,n,u)}function ih(e,t,l){var n=t.pendingProps,u=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|l:l,e!==null){for(u=t.child=e.child,r=0;u!==null;)r=r|u.lanes|u.childLanes,u=u.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return rh(e,t,n,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fi(t,r!==null?r.cachePool:null),r!==null?ud(t,r):Oc(),Zd(t);else return t.lanes=t.childLanes=536870912,rh(e,t,r!==null?r.baseLanes|l:l,l)}else r!==null?(fi(t,r.cachePool),ud(t,r),Hl(),t.memoizedState=null):(e!==null&&fi(t,null),Oc(),Hl());return ot(e,t,u,l),t.child}function rh(e,t,l,n){var u=Ec();return u=u===null?null:{parent:lt._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&fi(t,null),Oc(),Zd(t),e!==null&&Wn(e,t,n,!0),null}function _i(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Wc(e,t,l,n,u){return ma(t),l=Mc(e,t,l,n,void 0,u),n=Nc(),e!==null&&!ut?($c(e,t,u),bl(e,t,u)):(De&&n&&mc(t),t.flags|=1,ot(e,t,l,u),t.child)}function ch(e,t,l,n,u,r){return ma(t),t.updateQueue=null,l=rd(t,n,l,u),id(e),n=Nc(),e!==null&&!ut?($c(e,t,r),bl(e,t,r)):(De&&n&&mc(t),t.flags|=1,ot(e,t,l,r),t.child)}function oh(e,t,l,n,u){if(ma(t),t.stateNode===null){var r=Ja,f=l.contextType;typeof f=="object"&&f!==null&&(r=pt(f)),r=new l(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},wc(t),f=l.contextType,r.context=typeof f=="object"&&f!==null?pt(f):Ja,r.state=t.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(Zc(t,l,f,n),r.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Kc.enqueueReplaceState(r,r.state,null),au(t,n,r,u),lu(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,y=ba(l,h);r.props=y;var _=r.context,U=l.contextType;f=Ja,typeof U=="object"&&U!==null&&(f=pt(U));var G=l.getDerivedStateFromProps;U=typeof G=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,U||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||_!==f)&&Jd(t,r,n,f),$l=!1;var C=t.memoizedState;r.state=C,au(t,n,r,u),lu(),_=t.memoizedState,h||C!==_||$l?(typeof G=="function"&&(Zc(t,l,G,n),_=t.memoizedState),(y=$l||Kd(t,l,y,n,C,_,f))?(U||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=_),r.props=n,r.state=_,r.context=f,n=y):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Rc(e,t),f=t.memoizedProps,U=ba(l,f),r.props=U,G=t.pendingProps,C=r.context,_=l.contextType,y=Ja,typeof _=="object"&&_!==null&&(y=pt(_)),h=l.getDerivedStateFromProps,(_=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==G||C!==y)&&Jd(t,r,n,y),$l=!1,C=t.memoizedState,r.state=C,au(t,n,r,u),lu();var z=t.memoizedState;f!==G||C!==z||$l||e!==null&&e.dependencies!==null&&oi(e.dependencies)?(typeof h=="function"&&(Zc(t,l,h,n),z=t.memoizedState),(U=$l||Kd(t,l,U,n,C,z,y)||e!==null&&e.dependencies!==null&&oi(e.dependencies))?(_||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,z,y),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,z,y)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=z),r.props=n,r.state=z,r.context=y,n=U):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,_i(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=un(t,e.child,null,u),t.child=un(t,null,l,u)):ot(e,t,l,u),t.memoizedState=r.state,e=t.child):e=bl(e,t,u),e}function sh(e,t,l,n){return Kn(),t.flags|=256,ot(e,t,l,n),t.child}var Fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ic(e){return{baseLanes:e,cachePool:Ff()}}function Pc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Qt),e}function fh(e,t,l){var n=t.pendingProps,u=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),f&&(u=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(u?jl(t):Hl(),De){var h=Ve,y;if(y=h){e:{for(y=h,h=It;y.nodeType!==8;){if(!h){h=null;break e}if(y=Zt(y.nextSibling),y===null){h=null;break e}}h=y}h!==null?(t.memoizedState={dehydrated:h,treeContext:sa!==null?{id:dl,overflow:hl}:null,retryLane:536870912,hydrationErrors:null},y=Dt(18,null,null,0),y.stateNode=h,y.return=t,t.child=y,gt=t,Ve=null,y=!0):y=!1}y||ha(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return ko(h)?t.lanes=32:t.lanes=536870912,null;gl(t)}return h=n.children,n=n.fallback,u?(Hl(),u=t.mode,h=Oi({mode:"hidden",children:h},u),n=oa(n,u,l,null),h.return=t,n.return=t,h.sibling=n,t.child=h,u=t.child,u.memoizedState=Ic(l),u.childLanes=Pc(e,f,l),t.memoizedState=Fc,n):(jl(t),eo(t,h))}if(y=e.memoizedState,y!==null&&(h=y.dehydrated,h!==null)){if(r)t.flags&256?(jl(t),t.flags&=-257,t=to(e,t,l)):t.memoizedState!==null?(Hl(),t.child=e.child,t.flags|=128,t=null):(Hl(),u=n.fallback,h=t.mode,n=Oi({mode:"visible",children:n.children},h),u=oa(u,h,l,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,un(t,e.child,null,l),n=t.child,n.memoizedState=Ic(l),n.childLanes=Pc(e,f,l),t.memoizedState=Fc,t=u);else if(jl(t),ko(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var _=f.dgst;f=_,n=Error(o(419)),n.stack="",n.digest=f,Jn({value:n,source:null,stack:null}),t=to(e,t,l)}else if(ut||Wn(e,t,l,!1),f=(l&e.childLanes)!==0,ut||f){if(f=He,f!==null&&(n=l&-l,n=(n&42)!==0?1:kr(n),n=(n&(f.suspendedLanes|l))!==0?0:n,n!==0&&n!==y.retryLane))throw y.retryLane=n,Ka(e,n),Mt(f,e,n),lh;h.data==="$?"||xo(),t=to(e,t,l)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Ve=Zt(h.nextSibling),gt=t,De=!0,da=null,It=!1,e!==null&&(jt[Ht++]=dl,jt[Ht++]=hl,jt[Ht++]=sa,dl=e.id,hl=e.overflow,sa=t),t=eo(t,n.children),t.flags|=4096);return t}return u?(Hl(),u=n.fallback,h=t.mode,y=e.child,_=y.sibling,n=fl(y,{mode:"hidden",children:n.children}),n.subtreeFlags=y.subtreeFlags&65011712,_!==null?u=fl(_,u):(u=oa(u,h,l,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,n=u,u=t.child,h=e.child.memoizedState,h===null?h=Ic(l):(y=h.cachePool,y!==null?(_=lt._currentValue,y=y.parent!==_?{parent:_,pool:_}:y):y=Ff(),h={baseLanes:h.baseLanes|l,cachePool:y}),u.memoizedState=h,u.childLanes=Pc(e,f,l),t.memoizedState=Fc,n):(jl(t),l=e.child,e=l.sibling,l=fl(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=l,t.memoizedState=null,l)}function eo(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=Dt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function to(e,t,l){return un(t,e.child,null,l),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dh(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),yc(e.return,t,l)}function lo(e,t,l,n,u){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:u}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=l,r.tailMode=u)}function hh(e,t,l){var n=t.pendingProps,u=n.revealOrder,r=n.tail;if(ot(e,t,n.children,l),n=at.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dh(e,l,t);else if(e.tag===19)dh(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(q(at,n),u){case"forwards":for(l=t.child,u=null;l!==null;)e=l.alternate,e!==null&&wi(e)===null&&(u=l),l=l.sibling;l=u,l===null?(u=t.child,t.child=null):(u=l.sibling,l.sibling=null),lo(t,!1,u,l,r);break;case"backwards":for(l=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&wi(e)===null){t.child=u;break}e=u.sibling,u.sibling=l,l=u,u=e}lo(t,!0,l,null,r);break;case"together":lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bl(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Wn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=fl(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=fl(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function ao(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&oi(e)))}function lg(e,t,l){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Nl(t,lt,e.memoizedState.cache),Kn();break;case 27:case 5:fe(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Nl(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(jl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?fh(e,t,l):(jl(t),e=bl(e,t,l),e!==null?e.sibling:null);jl(t);break;case 19:var u=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(Wn(e,t,l,!1),n=(l&t.childLanes)!==0),u){if(n)return hh(e,t,l);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),q(at,at.current),n)break;return null;case 22:case 23:return t.lanes=0,ih(e,t,l);case 24:Nl(t,lt,e.memoizedState.cache)}return bl(e,t,l)}function ph(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!ao(e,l)&&(t.flags&128)===0)return ut=!1,lg(e,t,l);ut=(e.flags&131072)!==0}else ut=!1,De&&(t.flags&1048576)!==0&&Gf(t,ci,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,u=n._init;if(n=u(n._payload),t.type=n,typeof n=="function")dc(n)?(e=ba(n,e),t.tag=1,t=oh(null,t,n,e,l)):(t.tag=0,t=Wc(null,t,n,e,l));else{if(n!=null){if(u=n.$$typeof,u===P){t.tag=11,t=ah(null,t,n,e,l);break e}else if(u===te){t.tag=14,t=nh(null,t,n,e,l);break e}}throw t=ke(n)||n,Error(o(306,t,""))}}return t;case 0:return Wc(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,u=ba(n,t.pendingProps),oh(e,t,n,u,l);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));n=t.pendingProps;var r=t.memoizedState;u=r.element,Rc(e,t),au(t,n,null,l);var f=t.memoizedState;if(n=f.cache,Nl(t,lt,n),n!==r.cache&&xc(t,[lt],l,!0),lu(),n=f.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=sh(e,t,n,l);break e}else if(n!==u){u=Ut(Error(o(424)),t),Jn(u),t=sh(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=Zt(e.firstChild),gt=t,De=!0,da=null,It=!0,l=Xd(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Kn(),n===u){t=bl(e,t,l);break e}ot(e,t,n,l)}t=t.child}return t;case 26:return _i(e,t),e===null?(l=bp(t.type,null,t.pendingProps,null))?t.memoizedState=l:De||(l=t.type,e=t.pendingProps,n=qi(ee.current).createElement(l),n[ht]=t,n[yt]=e,ft(n,l,e),nt(n),t.stateNode=n):t.memoizedState=bp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&De&&(n=t.stateNode=mp(t.type,t.pendingProps,ee.current),gt=t,It=!0,u=Ve,Kl(t.type)?(jo=u,Ve=Zt(n.firstChild)):Ve=u),ot(e,t,t.pendingProps.children,l),_i(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((u=n=Ve)&&(n=Cg(n,t.type,t.pendingProps,It),n!==null?(t.stateNode=n,gt=t,Ve=Zt(n.firstChild),It=!1,u=!0):u=!1),u||ha(t)),fe(t),u=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,n=r.children,$o(u,r)?n=null:f!==null&&$o(u,f)&&(t.flags|=32),t.memoizedState!==null&&(u=Mc(e,t,Kv,null,null,l),wu._currentValue=u),_i(e,t),ot(e,t,n,l),t.child;case 6:return e===null&&De&&((e=l=Ve)&&(l=zg(l,t.pendingProps,It),l!==null?(t.stateNode=l,gt=t,Ve=null,e=!0):e=!1),e||ha(t)),null;case 13:return fh(e,t,l);case 4:return pe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=un(t,null,n,l):ot(e,t,n,l),t.child;case 11:return ah(e,t,t.type,t.pendingProps,l);case 7:return ot(e,t,t.pendingProps,l),t.child;case 8:return ot(e,t,t.pendingProps.children,l),t.child;case 12:return ot(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,Nl(t,t.type,n.value),ot(e,t,n.children,l),t.child;case 9:return u=t.type._context,n=t.pendingProps.children,ma(t),u=pt(u),n=n(u),t.flags|=1,ot(e,t,n,l),t.child;case 14:return nh(e,t,t.type,t.pendingProps,l);case 15:return uh(e,t,t.type,t.pendingProps,l);case 19:return hh(e,t,l);case 31:return n=t.pendingProps,l=t.mode,n={mode:n.mode,children:n.children},e===null?(l=Oi(n,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=fl(e.child,n),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return ih(e,t,l);case 24:return ma(t),n=pt(lt),e===null?(u=Ec(),u===null&&(u=He,r=Sc(),u.pooledCache=r,r.refCount++,r!==null&&(u.pooledCacheLanes|=l),u=r),t.memoizedState={parent:n,cache:u},wc(t),Nl(t,lt,u)):((e.lanes&l)!==0&&(Rc(e,t),au(t,null,null,l),lu()),u=e.memoizedState,r=t.memoizedState,u.parent!==n?(u={parent:n,cache:n},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Nl(t,lt,n)):(n=r.cache,Nl(t,lt,n),n!==u.cache&&xc(t,[lt],l,!0))),ot(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function yl(e){e.flags|=4}function mh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ep(t)){if(t=Lt.current,t!==null&&((we&4194048)===we?Pt!==null:(we&62914560)!==we&&(we&536870912)===0||t!==Pt))throw eu=Tc,If;e.flags|=8192}}function Ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xs():536870912,e.lanes|=t,sn|=t)}function su(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var u=e.child;u!==null;)l|=u.lanes|u.childLanes,n|=u.subtreeFlags&65011712,n|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)l|=u.lanes|u.childLanes,n|=u.subtreeFlags,n|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function ag(e,t,l){var n=t.pendingProps;switch(vc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ml(lt),Z(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?yl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zf())),qe(t),null;case 26:return l=t.memoizedState,e===null?(yl(t),l!==null?(qe(t),mh(t,l)):(qe(t),t.flags&=-16777217)):l?l!==e.memoizedState?(yl(t),qe(t),mh(t,l)):(qe(t),t.flags&=-16777217):(e.memoizedProps!==n&&yl(t),qe(t),t.flags&=-16777217),null;case 27:me(t),l=ee.current;var u=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&yl(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return qe(t),null}e=K.current,Zn(t)?Vf(t):(e=mp(u,n,l),t.stateNode=e,yl(t))}return qe(t),null;case 5:if(me(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&yl(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return qe(t),null}if(e=K.current,Zn(t))Vf(t);else{switch(u=qi(ee.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?u.createElement(l,{is:n.is}):u.createElement(l)}}e[ht]=t,e[yt]=n;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=e;e:switch(ft(e,l,n),l){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yl(t)}}return qe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&yl(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=ee.current,Zn(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,u=gt,u!==null)switch(u.tag){case 27:case 5:n=u.memoizedProps}e[ht]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||cp(e.nodeValue,l)),e||ha(t)}else e=qi(e).createTextNode(n),e[ht]=t,t.stateNode=e}return qe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[ht]=t}else Kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),u=!1}else u=Zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(gl(t),t):(gl(t),null)}if(gl(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=n!==null,e=e!==null&&e.memoizedState!==null,l){n=t.child,u=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(u=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==u&&(n.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Ci(t,t.updateQueue),qe(t),null;case 4:return Z(),e===null&&Oo(t.stateNode.containerInfo),qe(t),null;case 10:return ml(t.type),qe(t),null;case 19:if(J(at),u=t.memoizedState,u===null)return qe(t),null;if(n=(t.flags&128)!==0,r=u.rendering,r===null)if(n)su(u,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=wi(e),r!==null){for(t.flags|=128,su(u,!1),e=r.updateQueue,t.updateQueue=e,Ci(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)qf(l,e),l=l.sibling;return q(at,at.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ie()>Ni&&(t.flags|=128,n=!0,su(u,!1),t.lanes=4194304)}else{if(!n)if(e=wi(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ci(t,e),su(u,!0),u.tail===null&&u.tailMode==="hidden"&&!r.alternate&&!De)return qe(t),null}else 2*Ie()-u.renderingStartTime>Ni&&l!==536870912&&(t.flags|=128,n=!0,su(u,!1),t.lanes=4194304);u.isBackwards?(r.sibling=t.child,t.child=r):(e=u.last,e!==null?e.sibling=r:t.child=r,u.last=r)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ie(),t.sibling=null,e=at.current,q(at,n?e&1|2:e&1),t):(qe(t),null);case 22:case 23:return gl(t),Cc(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),l=t.updateQueue,l!==null&&Ci(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&J(va),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ml(lt),qe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ng(e,t){switch(vc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ml(lt),Z(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return me(t),null;case 13:if(gl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(at),null;case 4:return Z(),null;case 10:return ml(t.type),null;case 22:case 23:return gl(t),Cc(),e!==null&&J(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ml(lt),null;case 25:return null;default:return null}}function vh(e,t){switch(vc(t),t.tag){case 3:ml(lt),Z();break;case 26:case 27:case 5:me(t);break;case 4:Z();break;case 13:gl(t);break;case 19:J(at);break;case 10:ml(t.type);break;case 22:case 23:gl(t),Cc(),e!==null&&J(va);break;case 24:ml(lt)}}function fu(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){n=void 0;var r=l.create,f=l.inst;n=r(),f.destroy=n}l=l.next}while(l!==u)}}catch(h){je(t,t.return,h)}}function Ll(e,t,l){try{var n=t.updateQueue,u=n!==null?n.lastEffect:null;if(u!==null){var r=u.next;n=r;do{if((n.tag&e)===e){var f=n.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,u=t;var y=l,_=h;try{_()}catch(U){je(u,y,U)}}}n=n.next}while(n!==r)}}catch(U){je(t,t.return,U)}}function gh(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{nd(t,l)}catch(n){je(e,e.return,n)}}}function bh(e,t,l){l.props=ba(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){je(e,t,n)}}function du(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(u){je(e,t,u)}}function el(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(u){je(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){je(e,t,u)}else l.current=null}function yh(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(u){je(e,e.return,u)}}function no(e,t,l){try{var n=e.stateNode;wg(n,e.type,l,t),n[yt]=t}catch(u){je(e,e.return,u)}}function xh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kl(e.type)||e.tag===4}function uo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Yi));else if(n!==4&&(n===27&&Kl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(io(e,t,l),e=e.sibling;e!==null;)io(e,t,l),e=e.sibling}function zi(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Kl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(zi(e,t,l),e=e.sibling;e!==null;)zi(e,t,l),e=e.sibling}function Sh(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);ft(t,n,l),t[ht]=e,t[yt]=l}catch(r){je(e,e.return,r)}}var xl=!1,Fe=!1,ro=!1,Ah=typeof WeakSet=="function"?WeakSet:Set,it=null;function ug(e,t){if(e=e.containerInfo,Mo=Ji,e=Nf(e),uc(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var u=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var f=0,h=-1,y=-1,_=0,U=0,G=e,C=null;t:for(;;){for(var z;G!==l||u!==0&&G.nodeType!==3||(h=f+u),G!==r||n!==0&&G.nodeType!==3||(y=f+n),G.nodeType===3&&(f+=G.nodeValue.length),(z=G.firstChild)!==null;)C=G,G=z;for(;;){if(G===e)break t;if(C===l&&++_===u&&(h=f),C===r&&++U===n&&(y=f),(z=G.nextSibling)!==null)break;G=C,C=G.parentNode}G=z}l=h===-1||y===-1?null:{start:h,end:y}}else l=null}l=l||{start:0,end:0}}else l=null;for(No={focusedElem:e,selectionRange:l},Ji=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,l=t,u=r.memoizedProps,r=r.memoizedState,n=l.stateNode;try{var se=ba(l.type,u,l.elementType===l.type);e=n.getSnapshotBeforeUpdate(se,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(re){je(l,l.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Uo(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function Eh(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:Ql(e,l),n&4&&fu(5,l);break;case 1:if(Ql(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(f){je(l,l.return,f)}else{var u=ba(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){je(l,l.return,f)}}n&64&&gh(l),n&512&&du(l,l.return);break;case 3:if(Ql(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{nd(e,t)}catch(f){je(l,l.return,f)}}break;case 27:t===null&&n&4&&Sh(l);case 26:case 5:Ql(e,l),t===null&&n&4&&yh(l),n&512&&du(l,l.return);break;case 12:Ql(e,l);break;case 13:Ql(e,l),n&4&&Rh(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=pg.bind(null,l),Mg(e,l))));break;case 22:if(n=l.memoizedState!==null||xl,!n){t=t!==null&&t.memoizedState!==null||Fe,u=xl;var r=Fe;xl=n,(Fe=t)&&!r?Yl(e,l,(l.subtreeFlags&8772)!==0):Ql(e,l),xl=u,Fe=r}break;case 30:break;default:Ql(e,l)}}function Th(e){var t=e.alternate;t!==null&&(e.alternate=null,Th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,At=!1;function Sl(e,t,l){for(l=l.child;l!==null;)wh(e,t,l),l=l.sibling}function wh(e,t,l){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Nn,l)}catch{}switch(l.tag){case 26:Fe||el(l,t),Sl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Fe||el(l,t);var n=Ye,u=At;Kl(l.type)&&(Ye=l.stateNode,At=!1),Sl(e,t,l),Su(l.stateNode),Ye=n,At=u;break;case 5:Fe||el(l,t);case 6:if(n=Ye,u=At,Ye=null,Sl(e,t,l),Ye=n,At=u,Ye!==null)if(At)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(l.stateNode)}catch(r){je(l,t,r)}else try{Ye.removeChild(l.stateNode)}catch(r){je(l,t,r)}break;case 18:Ye!==null&&(At?(e=Ye,hp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ou(e)):hp(Ye,l.stateNode));break;case 4:n=Ye,u=At,Ye=l.stateNode.containerInfo,At=!0,Sl(e,t,l),Ye=n,At=u;break;case 0:case 11:case 14:case 15:Fe||Ll(2,l,t),Fe||Ll(4,l,t),Sl(e,t,l);break;case 1:Fe||(el(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&bh(l,t,n)),Sl(e,t,l);break;case 21:Sl(e,t,l);break;case 22:Fe=(n=Fe)||l.memoizedState!==null,Sl(e,t,l),Fe=n;break;default:Sl(e,t,l)}}function Rh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ou(e)}catch(l){je(t,t.return,l)}}function ig(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ah),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ah),t;default:throw Error(o(435,e.tag))}}function co(e,t){var l=ig(e);t.forEach(function(n){var u=mg.bind(null,e,n);l.has(n)||(l.add(n),n.then(u,u))})}function _t(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var u=l[n],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Kl(h.type)){Ye=h.stateNode,At=!1;break e}break;case 5:Ye=h.stateNode,At=!1;break e;case 3:case 4:Ye=h.stateNode.containerInfo,At=!0;break e}h=h.return}if(Ye===null)throw Error(o(160));wh(r,f,u),Ye=null,At=!1,r=u.alternate,r!==null&&(r.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Dh(t,e),t=t.sibling}var Xt=null;function Dh(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),Ot(e),n&4&&(Ll(3,e,e.return),fu(3,e),Ll(5,e,e.return));break;case 1:_t(t,e),Ot(e),n&512&&(Fe||l===null||el(l,l.return)),n&64&&xl&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var u=Xt;if(_t(t,e),Ot(e),n&512&&(Fe||l===null||el(l,l.return)),n&4){var r=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,u=u.ownerDocument||u;t:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Un]||r[ht]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),ft(r,n,l),r[ht]=e,nt(r),n=r;break e;case"link":var f=Sp("link","href",u).get(n+(l.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&r.getAttribute("rel")===(l.rel==null?null:l.rel)&&r.getAttribute("title")===(l.title==null?null:l.title)&&r.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(h,1);break t}}r=u.createElement(n),ft(r,n,l),u.head.appendChild(r);break;case"meta":if(f=Sp("meta","content",u).get(n+(l.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(l.content==null?null:""+l.content)&&r.getAttribute("name")===(l.name==null?null:l.name)&&r.getAttribute("property")===(l.property==null?null:l.property)&&r.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&r.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(h,1);break t}}r=u.createElement(n),ft(r,n,l),u.head.appendChild(r);break;default:throw Error(o(468,n))}r[ht]=e,nt(r),n=r}e.stateNode=n}else Ap(u,e.type,e.stateNode);else e.stateNode=xp(u,n,e.memoizedProps);else r!==n?(r===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):r.count--,n===null?Ap(u,e.type,e.stateNode):xp(u,n,e.memoizedProps)):n===null&&e.stateNode!==null&&no(e,e.memoizedProps,l.memoizedProps)}break;case 27:_t(t,e),Ot(e),n&512&&(Fe||l===null||el(l,l.return)),l!==null&&n&4&&no(e,e.memoizedProps,l.memoizedProps);break;case 5:if(_t(t,e),Ot(e),n&512&&(Fe||l===null||el(l,l.return)),e.flags&32){u=e.stateNode;try{Qa(u,"")}catch(z){je(e,e.return,z)}}n&4&&e.stateNode!=null&&(u=e.memoizedProps,no(e,u,l!==null?l.memoizedProps:u)),n&1024&&(ro=!0);break;case 6:if(_t(t,e),Ot(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(z){je(e,e.return,z)}}break;case 3:if(Xi=null,u=Xt,Xt=Gi(t.containerInfo),_t(t,e),Xt=u,Ot(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Ou(t.containerInfo)}catch(z){je(e,e.return,z)}ro&&(ro=!1,_h(e));break;case 4:n=Xt,Xt=Gi(e.stateNode.containerInfo),_t(t,e),Ot(e),Xt=n;break;case 12:_t(t,e),Ot(e);break;case 13:_t(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(mo=Ie()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,co(e,n)));break;case 22:u=e.memoizedState!==null;var y=l!==null&&l.memoizedState!==null,_=xl,U=Fe;if(xl=_||u,Fe=U||y,_t(t,e),Fe=U,xl=_,Ot(e),n&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(l===null||y||xl||Fe||ya(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){y=l=t;try{if(r=y.stateNode,u)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=y.stateNode;var G=y.memoizedProps.style,C=G!=null&&G.hasOwnProperty("display")?G.display:null;h.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(z){je(y,y.return,z)}}}else if(t.tag===6){if(l===null){y=t;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(z){je(y,y.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,co(e,l))));break;case 19:_t(t,e),Ot(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,co(e,n)));break;case 30:break;case 21:break;default:_t(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(xh(n)){l=n;break}n=n.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var u=l.stateNode,r=uo(e);zi(e,r,u);break;case 5:var f=l.stateNode;l.flags&32&&(Qa(f,""),l.flags&=-33);var h=uo(e);zi(e,h,f);break;case 3:case 4:var y=l.stateNode.containerInfo,_=uo(e);io(e,_,y);break;default:throw Error(o(161))}}catch(U){je(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _h(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_h(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ql(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Eh(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ll(4,t,t.return),ya(t);break;case 1:el(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&bh(t,t.return,l),ya(t);break;case 27:Su(t.stateNode);case 26:case 5:el(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function Yl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,u=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Yl(u,r,l),fu(4,r);break;case 1:if(Yl(u,r,l),n=r,u=n.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(_){je(n,n.return,_)}if(n=r,u=n.updateQueue,u!==null){var h=n.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)ad(y[u],h)}catch(_){je(n,n.return,_)}}l&&f&64&&gh(r),du(r,r.return);break;case 27:Sh(r);case 26:case 5:Yl(u,r,l),l&&n===null&&f&4&&yh(r),du(r,r.return);break;case 12:Yl(u,r,l);break;case 13:Yl(u,r,l),l&&f&4&&Rh(u,r);break;case 22:r.memoizedState===null&&Yl(u,r,l),du(r,r.return);break;case 30:break;default:Yl(u,r,l)}t=t.sibling}}function oo(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Fn(l))}function so(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fn(e))}function tl(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oh(e,t,l,n),t=t.sibling}function Oh(e,t,l,n){var u=t.flags;switch(t.tag){case 0:case 11:case 15:tl(e,t,l,n),u&2048&&fu(9,t);break;case 1:tl(e,t,l,n);break;case 3:tl(e,t,l,n),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fn(e)));break;case 12:if(u&2048){tl(e,t,l,n),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){je(t,t.return,y)}}else tl(e,t,l,n);break;case 13:tl(e,t,l,n);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?tl(e,t,l,n):hu(e,t):r._visibility&2?tl(e,t,l,n):(r._visibility|=2,rn(e,t,l,n,(t.subtreeFlags&10256)!==0)),u&2048&&oo(f,t);break;case 24:tl(e,t,l,n),u&2048&&so(t.alternate,t);break;default:tl(e,t,l,n)}}function rn(e,t,l,n,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=l,y=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:rn(r,f,h,y,u),fu(8,f);break;case 23:break;case 22:var U=f.stateNode;f.memoizedState!==null?U._visibility&2?rn(r,f,h,y,u):hu(r,f):(U._visibility|=2,rn(r,f,h,y,u)),u&&_&2048&&oo(f.alternate,f);break;case 24:rn(r,f,h,y,u),u&&_&2048&&so(f.alternate,f);break;default:rn(r,f,h,y,u)}t=t.sibling}}function hu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,u=n.flags;switch(n.tag){case 22:hu(l,n),u&2048&&oo(n.alternate,n);break;case 24:hu(l,n),u&2048&&so(n.alternate,n);break;default:hu(l,n)}t=t.sibling}}var pu=8192;function cn(e){if(e.subtreeFlags&pu)for(e=e.child;e!==null;)Ch(e),e=e.sibling}function Ch(e){switch(e.tag){case 26:cn(e),e.flags&pu&&e.memoizedState!==null&&Vg(Xt,e.memoizedState,e.memoizedProps);break;case 5:cn(e);break;case 3:case 4:var t=Xt;Xt=Gi(e.stateNode.containerInfo),cn(e),Xt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=pu,pu=16777216,cn(e),pu=t):cn(e));break;default:cn(e)}}function zh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];it=n,Nh(n,e)}zh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mh(e),e=e.sibling}function Mh(e){switch(e.tag){case 0:case 11:case 15:mu(e),e.flags&2048&&Ll(9,e,e.return);break;case 3:mu(e);break;case 12:mu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mi(e)):mu(e);break;default:mu(e)}}function Mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];it=n,Nh(n,e)}zh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ll(8,t,t.return),Mi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Mi(t));break;default:Mi(t)}e=e.sibling}}function Nh(e,t){for(;it!==null;){var l=it;switch(l.tag){case 0:case 11:case 15:Ll(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Fn(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,it=n;else e:for(l=e;it!==null;){n=it;var u=n.sibling,r=n.return;if(Th(n),n===l){it=null;break e}if(u!==null){u.return=r,it=u;break e}it=r}}}var rg={getCacheForType:function(e){var t=pt(lt),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},cg=typeof WeakMap=="function"?WeakMap:Map,ze=0,He=null,Ae=null,we=0,Me=0,Ct=null,ql=!1,on=!1,fo=!1,Al=0,Xe=0,Gl=0,xa=0,ho=0,Qt=0,sn=0,vu=null,Et=null,po=!1,mo=0,Ni=1/0,$i=null,Vl=null,st=0,Xl=null,fn=null,dn=0,vo=0,go=null,$h=null,gu=0,bo=null;function zt(){if((ze&2)!==0&&we!==0)return we&-we;if(N.T!==null){var e=Ia;return e!==0?e:wo()}return Js()}function Bh(){Qt===0&&(Qt=(we&536870912)===0||De?Vs():536870912);var e=Lt.current;return e!==null&&(e.flags|=32),Qt}function Mt(e,t,l){(e===He&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(hn(e,0),Zl(e,we,Qt,!1)),Bn(e,l),((ze&2)===0||e!==He)&&(e===He&&((ze&2)===0&&(xa|=l),Xe===4&&Zl(e,we,Qt,!1)),ll(e))}function Uh(e,t,l){if((ze&6)!==0)throw Error(o(327));var n=!l&&(t&124)===0&&(t&e.expiredLanes)===0||$n(e,t),u=n?fg(e,t):So(e,t,!0),r=n;do{if(u===0){on&&!n&&Zl(e,t,0,!1);break}else{if(l=e.current.alternate,r&&!og(l)){u=So(e,t,!1),r=!1;continue}if(u===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;u=vu;var y=h.current.memoizedState.isDehydrated;if(y&&(hn(h,f).flags|=256),f=So(h,f,!1),f!==2){if(fo&&!y){h.errorRecoveryDisabledLanes|=r,xa|=r,u=4;break e}r=Et,Et=u,r!==null&&(Et===null?Et=r:Et.push.apply(Et,r))}u=f}if(r=!1,u!==2)continue}}if(u===1){hn(e,0),Zl(e,t,0,!0);break}e:{switch(n=e,r=u,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Zl(n,t,Qt,!ql);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=mo+300-Ie(),10<u)){if(Zl(n,t,Qt,!ql),Vu(n,0,!0)!==0)break e;n.timeoutHandle=fp(kh.bind(null,n,l,Et,$i,po,t,Qt,xa,sn,ql,r,2,-0,0),u);break e}kh(n,l,Et,$i,po,t,Qt,xa,sn,ql,r,0,-0,0)}}break}while(!0);ll(e)}function kh(e,t,l,n,u,r,f,h,y,_,U,G,C,z){if(e.timeoutHandle=-1,G=t.subtreeFlags,(G&8192||(G&16785408)===16785408)&&(Tu={stylesheets:null,count:0,unsuspend:Gg},Ch(t),G=Xg(),G!==null)){e.cancelPendingCommit=G(Gh.bind(null,e,t,r,l,n,u,f,h,y,U,1,C,z)),Zl(e,r,f,!_);return}Gh(e,t,r,l,n,u,f,h,y)}function og(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var u=l[n],r=u.getSnapshot;u=u.value;try{if(!Rt(r(),u))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zl(e,t,l,n){t&=~ho,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var u=t;0<u;){var r=31-wt(u),f=1<<r;n[r]=-1,u&=~f}l!==0&&Zs(e,l,t)}function Bi(){return(ze&6)===0?(bu(0),!1):!0}function yo(){if(Ae!==null){if(Me===0)var e=Ae.return;else e=Ae,pl=pa=null,Bc(e),nn=null,cu=0,e=Ae;for(;e!==null;)vh(e.alternate,e),e=e.return;Ae=null}}function hn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Dg(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),yo(),He=e,Ae=l=fl(e.current,null),we=t,Me=0,Ct=null,ql=!1,on=$n(e,t),fo=!1,sn=Qt=ho=xa=Gl=Xe=0,Et=vu=null,po=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var u=31-wt(n),r=1<<u;t|=e[u],n&=~r}return Al=t,ai(),l}function jh(e,t){ye=null,N.H=Ai,t===Pn||t===di?(t=td(),Me=3):t===If?(t=td(),Me=4):Me=t===lh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,Ae===null&&(Xe=1,Di(e,Ut(t,e.current)))}function Hh(){var e=N.H;return N.H=Ai,e===null?Ai:e}function Lh(){var e=N.A;return N.A=rg,e}function xo(){Xe=4,ql||(we&4194048)!==we&&Lt.current!==null||(on=!0),(Gl&134217727)===0&&(xa&134217727)===0||He===null||Zl(He,we,Qt,!1)}function So(e,t,l){var n=ze;ze|=2;var u=Hh(),r=Lh();(He!==e||we!==t)&&($i=null,hn(e,t)),t=!1;var f=Xe;e:do try{if(Me!==0&&Ae!==null){var h=Ae,y=Ct;switch(Me){case 8:yo(),f=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var _=Me;if(Me=0,Ct=null,pn(e,h,y,_),l&&on){f=0;break e}break;default:_=Me,Me=0,Ct=null,pn(e,h,y,_)}}sg(),f=Xe;break}catch(U){jh(e,U)}while(!0);return t&&e.shellSuspendCounter++,pl=pa=null,ze=n,N.H=u,N.A=r,Ae===null&&(He=null,we=0,ai()),f}function sg(){for(;Ae!==null;)Qh(Ae)}function fg(e,t){var l=ze;ze|=2;var n=Hh(),u=Lh();He!==e||we!==t?($i=null,Ni=Ie()+500,hn(e,t)):on=$n(e,t);e:do try{if(Me!==0&&Ae!==null){t=Ae;var r=Ct;t:switch(Me){case 1:Me=0,Ct=null,pn(e,t,r,1);break;case 2:case 9:if(Pf(r)){Me=0,Ct=null,Yh(t);break}t=function(){Me!==2&&Me!==9||He!==e||(Me=7),ll(e)},r.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Pf(r)?(Me=0,Ct=null,Yh(t)):(Me=0,Ct=null,pn(e,t,r,7));break;case 5:var f=null;switch(Ae.tag){case 26:f=Ae.memoizedState;case 5:case 27:var h=Ae;if(!f||Ep(f)){Me=0,Ct=null;var y=h.sibling;if(y!==null)Ae=y;else{var _=h.return;_!==null?(Ae=_,Ui(_)):Ae=null}break t}}Me=0,Ct=null,pn(e,t,r,5);break;case 6:Me=0,Ct=null,pn(e,t,r,6);break;case 8:yo(),Xe=6;break e;default:throw Error(o(462))}}dg();break}catch(U){jh(e,U)}while(!0);return pl=pa=null,N.H=n,N.A=u,ze=l,Ae!==null?0:(He=null,we=0,ai(),Xe)}function dg(){for(;Ae!==null&&!Je();)Qh(Ae)}function Qh(e){var t=ph(e.alternate,e,Al);e.memoizedProps=e.pendingProps,t===null?Ui(e):Ae=t}function Yh(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=ch(l,t,t.pendingProps,t.type,void 0,we);break;case 11:t=ch(l,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Bc(t);default:vh(l,t),t=Ae=qf(t,Al),t=ph(l,t,Al)}e.memoizedProps=e.pendingProps,t===null?Ui(e):Ae=t}function pn(e,t,l,n){pl=pa=null,Bc(t),nn=null,cu=0;var u=t.return;try{if(tg(e,u,t,l,we)){Xe=1,Di(e,Ut(l,e.current)),Ae=null;return}}catch(r){if(u!==null)throw Ae=u,r;Xe=1,Di(e,Ut(l,e.current)),Ae=null;return}t.flags&32768?(De||n===1?e=!0:on||(we&536870912)!==0?e=!1:(ql=e=!0,(n===2||n===9||n===3||n===6)&&(n=Lt.current,n!==null&&n.tag===13&&(n.flags|=16384))),qh(t,e)):Ui(t)}function Ui(e){var t=e;do{if((t.flags&32768)!==0){qh(t,ql);return}e=t.return;var l=ag(t.alternate,t,Al);if(l!==null){Ae=l;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Xe===0&&(Xe=5)}function qh(e,t){do{var l=ng(e.alternate,e);if(l!==null){l.flags&=32767,Ae=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=l}while(e!==null);Xe=6,Ae=null}function Gh(e,t,l,n,u,r,f,h,y){e.cancelPendingCommit=null;do ki();while(st!==0);if((ze&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=sc,Gm(e,l,r,f,h,y),e===He&&(Ae=He=null,we=0),fn=t,Xl=e,dn=l,vo=r,go=u,$h=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vg(Ol,function(){return Jh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,u=W.p,W.p=2,f=ze,ze|=4;try{ug(e,t,l)}finally{ze=f,W.p=u,N.T=n}}st=1,Vh(),Xh(),Zh()}}function Vh(){if(st===1){st=0;var e=Xl,t=fn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=N.T,N.T=null;var n=W.p;W.p=2;var u=ze;ze|=4;try{Dh(t,e);var r=No,f=Nf(e.containerInfo),h=r.focusedElem,y=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&Mf(h.ownerDocument.documentElement,h)){if(y!==null&&uc(h)){var _=y.start,U=y.end;if(U===void 0&&(U=_),"selectionStart"in h)h.selectionStart=_,h.selectionEnd=Math.min(U,h.value.length);else{var G=h.ownerDocument||document,C=G&&G.defaultView||window;if(C.getSelection){var z=C.getSelection(),se=h.textContent.length,re=Math.min(y.start,se),Ue=y.end===void 0?re:Math.min(y.end,se);!z.extend&&re>Ue&&(f=Ue,Ue=re,re=f);var w=zf(h,re),A=zf(h,Ue);if(w&&A&&(z.rangeCount!==1||z.anchorNode!==w.node||z.anchorOffset!==w.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var D=G.createRange();D.setStart(w.node,w.offset),z.removeAllRanges(),re>Ue?(z.addRange(D),z.extend(A.node,A.offset)):(D.setEnd(A.node,A.offset),z.addRange(D))}}}}for(G=[],z=h;z=z.parentNode;)z.nodeType===1&&G.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<G.length;h++){var H=G[h];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Ji=!!Mo,No=Mo=null}finally{ze=u,W.p=n,N.T=l}}e.current=t,st=2}}function Xh(){if(st===2){st=0;var e=Xl,t=fn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=N.T,N.T=null;var n=W.p;W.p=2;var u=ze;ze|=4;try{Eh(e,t.alternate,t)}finally{ze=u,W.p=n,N.T=l}}st=3}}function Zh(){if(st===4||st===3){st=0,bt();var e=Xl,t=fn,l=dn,n=$h;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,fn=Xl=null,Kh(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Vl=null),jr(l),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Nn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=N.T,u=W.p,W.p=2,N.T=null;try{for(var r=e.onRecoverableError,f=0;f<n.length;f++){var h=n[f];r(h.value,{componentStack:h.stack})}}finally{N.T=t,W.p=u}}(dn&3)!==0&&ki(),ll(e),u=e.pendingLanes,(l&4194090)!==0&&(u&42)!==0?e===bo?gu++:(gu=0,bo=e):gu=0,bu(0)}}function Kh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fn(t)))}function ki(e){return Vh(),Xh(),Zh(),Jh()}function Jh(){if(st!==5)return!1;var e=Xl,t=vo;vo=0;var l=jr(dn),n=N.T,u=W.p;try{W.p=32>l?32:l,N.T=null,l=go,go=null;var r=Xl,f=dn;if(st=0,fn=Xl=null,dn=0,(ze&6)!==0)throw Error(o(331));var h=ze;if(ze|=4,Mh(r.current),Oh(r,r.current,f,l),ze=h,bu(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Nn,r)}catch{}return!0}finally{W.p=u,N.T=n,Kh(e,t)}}function Wh(e,t,l){t=Ut(l,t),t=Jc(e.stateNode,t,2),e=Ul(e,t,2),e!==null&&(Bn(e,2),ll(e))}function je(e,t,l){if(e.tag===3)Wh(e,e,l);else for(;t!==null;){if(t.tag===3){Wh(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vl===null||!Vl.has(n))){e=Ut(l,e),l=eh(2),n=Ul(t,l,2),n!==null&&(th(l,n,t,e),Bn(n,2),ll(n));break}}t=t.return}}function Ao(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new cg;var u=new Set;n.set(t,u)}else u=n.get(t),u===void 0&&(u=new Set,n.set(t,u));u.has(l)||(fo=!0,u.add(l),e=hg.bind(null,e,t,l),t.then(e,e))}function hg(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,He===e&&(we&l)===l&&(Xe===4||Xe===3&&(we&62914560)===we&&300>Ie()-mo?(ze&2)===0&&hn(e,0):ho|=l,sn===we&&(sn=0)),ll(e)}function Fh(e,t){t===0&&(t=Xs()),e=Ka(e,t),e!==null&&(Bn(e,t),ll(e))}function pg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Fh(e,l)}function mg(e,t){var l=0;switch(e.tag){case 13:var n=e.stateNode,u=e.memoizedState;u!==null&&(l=u.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),Fh(e,l)}function vg(e,t){return Ne(e,t)}var ji=null,mn=null,Eo=!1,Hi=!1,To=!1,Sa=0;function ll(e){e!==mn&&e.next===null&&(mn===null?ji=mn=e:mn=mn.next=e),Hi=!0,Eo||(Eo=!0,bg())}function bu(e,t){if(!To&&Hi){To=!0;do for(var l=!1,n=ji;n!==null;){if(e!==0){var u=n.pendingLanes;if(u===0)var r=0;else{var f=n.suspendedLanes,h=n.pingedLanes;r=(1<<31-wt(42|e)+1)-1,r&=u&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(l=!0,tp(n,r))}else r=we,r=Vu(n,n===He?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||$n(n,r)||(l=!0,tp(n,r));n=n.next}while(l);To=!1}}function gg(){Ih()}function Ih(){Hi=Eo=!1;var e=0;Sa!==0&&(Rg()&&(e=Sa),Sa=0);for(var t=Ie(),l=null,n=ji;n!==null;){var u=n.next,r=Ph(n,t);r===0?(n.next=null,l===null?ji=u:l.next=u,u===null&&(mn=l)):(l=n,(e!==0||(r&3)!==0)&&(Hi=!0)),n=u}bu(e)}function Ph(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,u=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-wt(r),h=1<<f,y=u[f];y===-1?((h&l)===0||(h&n)!==0)&&(u[f]=qm(h,t)):y<=t&&(e.expiredLanes|=h),r&=~h}if(t=He,l=we,l=Vu(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ke(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||$n(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Ke(n),jr(l)){case 2:case 8:l=Na;break;case 32:l=Ol;break;case 268435456:l=Mn;break;default:l=Ol}return n=ep.bind(null,e),l=Ne(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Ke(n),e.callbackPriority=2,e.callbackNode=null,2}function ep(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(ki()&&e.callbackNode!==l)return null;var n=we;return n=Vu(e,e===He?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Uh(e,n,t),Ph(e,Ie()),e.callbackNode!=null&&e.callbackNode===l?ep.bind(null,e):null)}function tp(e,t){if(ki())return null;Uh(e,t,!0)}function bg(){_g(function(){(ze&6)!==0?Ne(Gt,gg):Ih()})}function wo(){return Sa===0&&(Sa=Vs()),Sa}function lp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wu(""+e)}function ap(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function yg(e,t,l,n,u){if(t==="submit"&&l&&l.stateNode===u){var r=lp((u[yt]||null).action),f=n.submitter;f&&(t=(t=f[yt]||null)?lp(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new ei("action","action",null,n,u);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Sa!==0){var y=f?ap(u,f):new FormData(u);Gc(l,{pending:!0,data:y,method:u.method,action:r},null,y)}}else typeof r=="function"&&(h.preventDefault(),y=f?ap(u,f):new FormData(u),Gc(l,{pending:!0,data:y,method:u.method,action:r},r,y))},currentTarget:u}]})}}for(var Ro=0;Ro<oc.length;Ro++){var Do=oc[Ro],xg=Do.toLowerCase(),Sg=Do[0].toUpperCase()+Do.slice(1);Vt(xg,"on"+Sg)}Vt(Uf,"onAnimationEnd"),Vt(kf,"onAnimationIteration"),Vt(jf,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(jv,"onTransitionRun"),Vt(Hv,"onTransitionStart"),Vt(Lv,"onTransitionCancel"),Vt(Hf,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yu));function np(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],u=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var f=n.length-1;0<=f;f--){var h=n[f],y=h.instance,_=h.currentTarget;if(h=h.listener,y!==r&&u.isPropagationStopped())break e;r=h,u.currentTarget=_;try{r(u)}catch(U){Ri(U)}u.currentTarget=null,r=y}else for(f=0;f<n.length;f++){if(h=n[f],y=h.instance,_=h.currentTarget,h=h.listener,y!==r&&u.isPropagationStopped())break e;r=h,u.currentTarget=_;try{r(u)}catch(U){Ri(U)}u.currentTarget=null,r=y}}}}function Ee(e,t){var l=t[Hr];l===void 0&&(l=t[Hr]=new Set);var n=e+"__bubble";l.has(n)||(up(t,e,2,!1),l.add(n))}function _o(e,t,l){var n=0;t&&(n|=4),up(l,e,n,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function Oo(e){if(!e[Li]){e[Li]=!0,Fs.forEach(function(l){l!=="selectionchange"&&(Ag.has(l)||_o(l,!1,e),_o(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,_o("selectionchange",!1,t))}}function up(e,t,l,n){switch(Op(t)){case 2:var u=Jg;break;case 8:u=Wg;break;default:u=qo}l=u.bind(null,t,l,e),u=void 0,!Wr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),n?u!==void 0?e.addEventListener(t,l,{capture:!0,passive:u}):e.addEventListener(t,l,!0):u!==void 0?e.addEventListener(t,l,{passive:u}):e.addEventListener(t,l,!1)}function Co(e,t,l,n,u){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var h=n.stateNode.containerInfo;if(h===u)break;if(f===4)for(f=n.return;f!==null;){var y=f.tag;if((y===3||y===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;h!==null;){if(f=Ba(h),f===null)return;if(y=f.tag,y===5||y===6||y===26||y===27){n=r=f;continue e}h=h.parentNode}}n=n.return}df(function(){var _=r,U=Kr(l),G=[];e:{var C=Lf.get(e);if(C!==void 0){var z=ei,se=e;switch(e){case"keypress":if(Iu(l)===0)break e;case"keydown":case"keyup":z=vv;break;case"focusin":se="focus",z=ec;break;case"focusout":se="blur",z=ec;break;case"beforeblur":case"afterblur":z=ec;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=yv;break;case Uf:case kf:case jf:z=rv;break;case Hf:z=Sv;break;case"scroll":case"scrollend":z=lv;break;case"wheel":z=Ev;break;case"copy":case"cut":case"paste":z=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=gf;break;case"toggle":case"beforetoggle":z=wv}var re=(t&4)!==0,Ue=!re&&(e==="scroll"||e==="scrollend"),w=re?C!==null?C+"Capture":null:C;re=[];for(var A=_,D;A!==null;){var H=A;if(D=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||D===null||w===null||(H=jn(A,w),H!=null&&re.push(xu(A,H,D))),Ue)break;A=A.return}0<re.length&&(C=new z(C,se,null,l,U),G.push({event:C,listeners:re}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",C&&l!==Zr&&(se=l.relatedTarget||l.fromElement)&&(Ba(se)||se[$a]))break e;if((z||C)&&(C=U.window===U?U:(C=U.ownerDocument)?C.defaultView||C.parentWindow:window,z?(se=l.relatedTarget||l.toElement,z=_,se=se?Ba(se):null,se!==null&&(Ue=d(se),re=se.tag,se!==Ue||re!==5&&re!==27&&re!==6)&&(se=null)):(z=null,se=_),z!==se)){if(re=mf,H="onMouseLeave",w="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(re=gf,H="onPointerLeave",w="onPointerEnter",A="pointer"),Ue=z==null?C:kn(z),D=se==null?C:kn(se),C=new re(H,A+"leave",z,l,U),C.target=Ue,C.relatedTarget=D,H=null,Ba(U)===_&&(re=new re(w,A+"enter",se,l,U),re.target=D,re.relatedTarget=Ue,H=re),Ue=H,z&&se)t:{for(re=z,w=se,A=0,D=re;D;D=vn(D))A++;for(D=0,H=w;H;H=vn(H))D++;for(;0<A-D;)re=vn(re),A--;for(;0<D-A;)w=vn(w),D--;for(;A--;){if(re===w||w!==null&&re===w.alternate)break t;re=vn(re),w=vn(w)}re=null}else re=null;z!==null&&ip(G,C,z,re,!1),se!==null&&Ue!==null&&ip(G,Ue,se,re,!0)}}e:{if(C=_?kn(_):window,z=C.nodeName&&C.nodeName.toLowerCase(),z==="select"||z==="input"&&C.type==="file")var ne=wf;else if(Ef(C))if(Rf)ne=Bv;else{ne=Nv;var Se=Mv}else z=C.nodeName,!z||z.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?_&&Xr(_.elementType)&&(ne=wf):ne=$v;if(ne&&(ne=ne(e,_))){Tf(G,ne,l,U);break e}Se&&Se(e,C,_),e==="focusout"&&_&&C.type==="number"&&_.memoizedProps.value!=null&&Vr(C,"number",C.value)}switch(Se=_?kn(_):window,e){case"focusin":(Ef(Se)||Se.contentEditable==="true")&&(Va=Se,ic=_,Xn=null);break;case"focusout":Xn=ic=Va=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,$f(G,l,U);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":$f(G,l,U)}var ue;if(lc)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Ga?Sf(e,l)&&(ce="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ce="onCompositionStart");ce&&(bf&&l.locale!=="ko"&&(Ga||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Ga&&(ue=hf()):(Ml=U,Fr="value"in Ml?Ml.value:Ml.textContent,Ga=!0)),Se=Qi(_,ce),0<Se.length&&(ce=new vf(ce,e,null,l,U),G.push({event:ce,listeners:Se}),ue?ce.data=ue:(ue=Af(l),ue!==null&&(ce.data=ue)))),(ue=Dv?_v(e,l):Ov(e,l))&&(ce=Qi(_,"onBeforeInput"),0<ce.length&&(Se=new vf("onBeforeInput","beforeinput",null,l,U),G.push({event:Se,listeners:ce}),Se.data=ue)),yg(G,e,_,l,U)}np(G,t)})}function xu(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Qi(e,t){for(var l=t+"Capture",n=[];e!==null;){var u=e,r=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||r===null||(u=jn(e,l),u!=null&&n.unshift(xu(e,u,r)),u=jn(e,t),u!=null&&n.push(xu(e,u,r))),e.tag===3)return n;e=e.return}return[]}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ip(e,t,l,n,u){for(var r=t._reactName,f=[];l!==null&&l!==n;){var h=l,y=h.alternate,_=h.stateNode;if(h=h.tag,y!==null&&y===n)break;h!==5&&h!==26&&h!==27||_===null||(y=_,u?(_=jn(l,r),_!=null&&f.unshift(xu(l,_,y))):u||(_=jn(l,r),_!=null&&f.push(xu(l,_,y)))),l=l.return}f.length!==0&&e.push({event:t,listeners:f})}var Eg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function rp(e){return(typeof e=="string"?e:""+e).replace(Eg,`
`).replace(Tg,"")}function cp(e,t){return t=rp(t),rp(e)===t}function Yi(){}function Be(e,t,l,n,u,r){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Qa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Qa(e,""+n);break;case"className":Zu(e,"class",n);break;case"tabIndex":Zu(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Zu(e,l,n);break;case"style":sf(e,n,r);break;case"data":if(t!=="object"){Zu(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Wu(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(l==="formAction"?(t!=="input"&&Be(e,t,"name",u.name,u,null),Be(e,t,"formEncType",u.formEncType,u,null),Be(e,t,"formMethod",u.formMethod,u,null),Be(e,t,"formTarget",u.formTarget,u,null)):(Be(e,t,"encType",u.encType,u,null),Be(e,t,"method",u.method,u,null),Be(e,t,"target",u.target,u,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Wu(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Yi);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Wu(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Xu(e,"popover",n);break;case"xlinkActuate":ol(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ol(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ol(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ol(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ol(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ol(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ol(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ol(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ol(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xu(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ev.get(l)||l,Xu(e,l,n))}}function zo(e,t,l,n,u,r){switch(l){case"style":sf(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof n=="string"?Qa(e,n):(typeof n=="number"||typeof n=="bigint")&&Qa(e,""+n);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),t=l.slice(2,u?l.length-7:void 0),r=e[yt]||null,r=r!=null?r[l]:null,typeof r=="function"&&e.removeEventListener(t,r,u),typeof n=="function")){typeof r!="function"&&r!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,u);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Xu(e,l,n)}}}function ft(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var n=!1,u=!1,r;for(r in l)if(l.hasOwnProperty(r)){var f=l[r];if(f!=null)switch(r){case"src":n=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Be(e,t,r,f,l,null)}}u&&Be(e,t,"srcSet",l.srcSet,l,null),n&&Be(e,t,"src",l.src,l,null);return;case"input":Ee("invalid",e);var h=r=f=u=null,y=null,_=null;for(n in l)if(l.hasOwnProperty(n)){var U=l[n];if(U!=null)switch(n){case"name":u=U;break;case"type":f=U;break;case"checked":y=U;break;case"defaultChecked":_=U;break;case"value":r=U;break;case"defaultValue":h=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Be(e,t,n,U,l,null)}}uf(e,r,h,y,_,f,u,!1),Ku(e);return;case"select":Ee("invalid",e),n=f=r=null;for(u in l)if(l.hasOwnProperty(u)&&(h=l[u],h!=null))switch(u){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":n=h;default:Be(e,t,u,h,l,null)}t=r,l=f,e.multiple=!!n,t!=null?La(e,!!n,t,!1):l!=null&&La(e,!!n,l,!0);return;case"textarea":Ee("invalid",e),r=u=n=null;for(f in l)if(l.hasOwnProperty(f)&&(h=l[f],h!=null))switch(f){case"value":n=h;break;case"defaultValue":u=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Be(e,t,f,h,l,null)}cf(e,n,u,r),Ku(e);return;case"option":for(y in l)if(l.hasOwnProperty(y)&&(n=l[y],n!=null))switch(y){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Be(e,t,y,n,l,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(n=0;n<yu.length;n++)Ee(yu[n],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in l)if(l.hasOwnProperty(_)&&(n=l[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Be(e,t,_,n,l,null)}return;default:if(Xr(t)){for(U in l)l.hasOwnProperty(U)&&(n=l[U],n!==void 0&&zo(e,t,U,n,l,void 0));return}}for(h in l)l.hasOwnProperty(h)&&(n=l[h],n!=null&&Be(e,t,h,n,l,null))}function wg(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,r=null,f=null,h=null,y=null,_=null,U=null;for(z in l){var G=l[z];if(l.hasOwnProperty(z)&&G!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":y=G;default:n.hasOwnProperty(z)||Be(e,t,z,null,n,G)}}for(var C in n){var z=n[C];if(G=l[C],n.hasOwnProperty(C)&&(z!=null||G!=null))switch(C){case"type":r=z;break;case"name":u=z;break;case"checked":_=z;break;case"defaultChecked":U=z;break;case"value":f=z;break;case"defaultValue":h=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==G&&Be(e,t,C,z,n,G)}}Gr(e,f,h,y,_,U,r,u);return;case"select":z=f=h=C=null;for(r in l)if(y=l[r],l.hasOwnProperty(r)&&y!=null)switch(r){case"value":break;case"multiple":z=y;default:n.hasOwnProperty(r)||Be(e,t,r,null,n,y)}for(u in n)if(r=n[u],y=l[u],n.hasOwnProperty(u)&&(r!=null||y!=null))switch(u){case"value":C=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==y&&Be(e,t,u,r,n,y)}t=h,l=f,n=z,C!=null?La(e,!!l,C,!1):!!n!=!!l&&(t!=null?La(e,!!l,t,!0):La(e,!!l,l?[]:"",!1));return;case"textarea":z=C=null;for(h in l)if(u=l[h],l.hasOwnProperty(h)&&u!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Be(e,t,h,null,n,u)}for(f in n)if(u=n[f],r=l[f],n.hasOwnProperty(f)&&(u!=null||r!=null))switch(f){case"value":C=u;break;case"defaultValue":z=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==r&&Be(e,t,f,u,n,r)}rf(e,C,z);return;case"option":for(var se in l)if(C=l[se],l.hasOwnProperty(se)&&C!=null&&!n.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Be(e,t,se,null,n,C)}for(y in n)if(C=n[y],z=l[y],n.hasOwnProperty(y)&&C!==z&&(C!=null||z!=null))switch(y){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Be(e,t,y,C,n,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in l)C=l[re],l.hasOwnProperty(re)&&C!=null&&!n.hasOwnProperty(re)&&Be(e,t,re,null,n,C);for(_ in n)if(C=n[_],z=l[_],n.hasOwnProperty(_)&&C!==z&&(C!=null||z!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,t));break;default:Be(e,t,_,C,n,z)}return;default:if(Xr(t)){for(var Ue in l)C=l[Ue],l.hasOwnProperty(Ue)&&C!==void 0&&!n.hasOwnProperty(Ue)&&zo(e,t,Ue,void 0,n,C);for(U in n)C=n[U],z=l[U],!n.hasOwnProperty(U)||C===z||C===void 0&&z===void 0||zo(e,t,U,C,n,z);return}}for(var w in l)C=l[w],l.hasOwnProperty(w)&&C!=null&&!n.hasOwnProperty(w)&&Be(e,t,w,null,n,C);for(G in n)C=n[G],z=l[G],!n.hasOwnProperty(G)||C===z||C==null&&z==null||Be(e,t,G,C,n,z)}var Mo=null,No=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function op(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bo=null;function Rg(){var e=window.event;return e&&e.type==="popstate"?e===Bo?!1:(Bo=e,!0):(Bo=null,!1)}var fp=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(e){return dp.resolve(null).then(e).catch(Og)}:fp;function Og(e){setTimeout(function(){throw e})}function Kl(e){return e==="head"}function hp(e,t){var l=t,n=0,u=0;do{var r=l.nextSibling;if(e.removeChild(l),r&&r.nodeType===8)if(l=r.data,l==="/$"){if(0<n&&8>n){l=n;var f=e.ownerDocument;if(l&1&&Su(f.documentElement),l&2&&Su(f.body),l&4)for(l=f.head,Su(l),f=l.firstChild;f;){var h=f.nextSibling,y=f.nodeName;f[Un]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=h}}if(u===0){e.removeChild(r),Ou(t);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:n=l.charCodeAt(0)-48;else n=0;l=r}while(l);Ou(t)}function Uo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Uo(l),Lr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Cg(e,t,l,n){for(;e.nodeType===1;){var u=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function zg(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Zt(e.nextSibling),e===null))return null;return e}function ko(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Mg(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var jo=null;function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function mp(e,t,l){switch(t=qi(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Su(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lr(e)}var Yt=new Map,vp=new Set;function Gi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var El=W.d;W.d={f:Ng,r:$g,D:Bg,C:Ug,L:kg,m:jg,X:Lg,S:Hg,M:Qg};function Ng(){var e=El.f(),t=Bi();return e||t}function $g(e){var t=Ua(e);t!==null&&t.tag===5&&t.type==="form"?Ud(t):El.r(e)}var gn=typeof document>"u"?null:document;function gp(e,t,l){var n=gn;if(n&&typeof t=="string"&&t){var u=Bt(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),vp.has(u)||(vp.add(u),e={rel:e,crossOrigin:l,href:t},n.querySelector(u)===null&&(t=n.createElement("link"),ft(t,"link",e),nt(t),n.head.appendChild(t)))}}function Bg(e){El.D(e),gp("dns-prefetch",e,null)}function Ug(e,t){El.C(e,t),gp("preconnect",e,t)}function kg(e,t,l){El.L(e,t,l);var n=gn;if(n&&e&&t){var u='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Bt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Bt(l.imageSizes)+'"]')):u+='[href="'+Bt(e)+'"]';var r=u;switch(t){case"style":r=bn(e);break;case"script":r=yn(e)}Yt.has(r)||(e=S({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Yt.set(r,e),n.querySelector(u)!==null||t==="style"&&n.querySelector(Au(r))||t==="script"&&n.querySelector(Eu(r))||(t=n.createElement("link"),ft(t,"link",e),nt(t),n.head.appendChild(t)))}}function jg(e,t){El.m(e,t);var l=gn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Bt(n)+'"][href="'+Bt(e)+'"]',r=u;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=yn(e)}if(!Yt.has(r)&&(e=S({rel:"modulepreload",href:e},t),Yt.set(r,e),l.querySelector(u)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Eu(r)))return}n=l.createElement("link"),ft(n,"link",e),nt(n),l.head.appendChild(n)}}}function Hg(e,t,l){El.S(e,t,l);var n=gn;if(n&&e){var u=ka(n).hoistableStyles,r=bn(e);t=t||"default";var f=u.get(r);if(!f){var h={loading:0,preload:null};if(f=n.querySelector(Au(r)))h.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Yt.get(r))&&Ho(e,l);var y=f=n.createElement("link");nt(y),ft(y,"link",e),y._p=new Promise(function(_,U){y.onload=_,y.onerror=U}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Vi(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:h},u.set(r,f)}}}function Lg(e,t){El.X(e,t);var l=gn;if(l&&e){var n=ka(l).hoistableScripts,u=yn(e),r=n.get(u);r||(r=l.querySelector(Eu(u)),r||(e=S({src:e,async:!0},t),(t=Yt.get(u))&&Lo(e,t),r=l.createElement("script"),nt(r),ft(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(u,r))}}function Qg(e,t){El.M(e,t);var l=gn;if(l&&e){var n=ka(l).hoistableScripts,u=yn(e),r=n.get(u);r||(r=l.querySelector(Eu(u)),r||(e=S({src:e,async:!0,type:"module"},t),(t=Yt.get(u))&&Lo(e,t),r=l.createElement("script"),nt(r),ft(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(u,r))}}function bp(e,t,l,n){var u=(u=ee.current)?Gi(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=bn(l.href),l=ka(u).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=bn(l.href);var r=ka(u).hoistableStyles,f=r.get(e);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=u.querySelector(Au(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Yt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Yt.set(e,l),r||Yg(u,e,l,f.state))),t&&n===null)throw Error(o(528,""));return f}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yn(l),l=ka(u).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bn(e){return'href="'+Bt(e)+'"'}function Au(e){return'link[rel="stylesheet"]['+e+"]"}function yp(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Yg(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ft(t,"link",l),nt(t),e.head.appendChild(t))}function yn(e){return'[src="'+Bt(e)+'"]'}function Eu(e){return"script[async]"+e}function xp(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Bt(l.href)+'"]');if(n)return t.instance=n,nt(n),n;var u=S({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),nt(n),ft(n,"style",u),Vi(n,l.precedence,e),t.instance=n;case"stylesheet":u=bn(l.href);var r=e.querySelector(Au(u));if(r)return t.state.loading|=4,t.instance=r,nt(r),r;n=yp(l),(u=Yt.get(u))&&Ho(n,u),r=(e.ownerDocument||e).createElement("link"),nt(r);var f=r;return f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),ft(r,"link",n),t.state.loading|=4,Vi(r,l.precedence,e),t.instance=r;case"script":return r=yn(l.src),(u=e.querySelector(Eu(r)))?(t.instance=u,nt(u),u):(n=l,(u=Yt.get(r))&&(n=S({},l),Lo(n,u)),e=e.ownerDocument||e,u=e.createElement("script"),nt(u),ft(u,"link",n),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Vi(n,l.precedence,e));return t.instance}function Vi(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=n.length?n[n.length-1]:null,r=u,f=0;f<n.length;f++){var h=n[f];if(h.dataset.precedence===t)r=h;else if(r!==u)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Ho(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xi=null;function Sp(e,t,l){if(Xi===null){var n=new Map,u=Xi=new Map;u.set(l,n)}else u=Xi,n=u.get(l),n||(n=new Map,u.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),u=0;u<l.length;u++){var r=l[u];if(!(r[Un]||r[ht]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=n.get(f);h?h.push(r):n.set(f,[r])}}return n}function Ap(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function qg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ep(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Tu=null;function Gg(){}function Vg(e,t,l){if(Tu===null)throw Error(o(475));var n=Tu;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=bn(l.href),r=e.querySelector(Au(u));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Zi.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,nt(r);return}r=e.ownerDocument||e,l=yp(l),(u=Yt.get(u))&&Ho(l,u),r=r.createElement("link"),nt(r);var f=r;f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),ft(r,"link",l),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Zi.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Xg(){if(Tu===null)throw Error(o(475));var e=Tu;return e.stylesheets&&e.count===0&&Qo(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Zi(){if(this.count--,this.count===0){if(this.stylesheets)Qo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Qo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Zg,e),Ki=null,Zi.call(e))}function Zg(e,t){if(!(t.state.loading&4)){var l=Ki.get(e);if(l)var n=l.get(null);else{l=new Map,Ki.set(e,l);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<u.length;r++){var f=u[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),n=f)}n&&l.set(null,n)}u=t.instance,f=u.getAttribute("data-precedence"),r=l.get(f)||n,r===n&&l.set(null,u),l.set(f,u),this.count++,n=Zi.bind(this),u.addEventListener("load",n),u.addEventListener("error",n),r?r.parentNode.insertBefore(u,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var wu={$$typeof:Q,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Kg(e,t,l,n,u,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.hiddenUpdates=Ur(null),this.identifierPrefix=n,this.onUncaughtError=u,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Tp(e,t,l,n,u,r,f,h,y,_,U,G){return e=new Kg(e,t,l,f,h,y,_,G),t=1,r===!0&&(t|=24),r=Dt(3,null,null,t),e.current=r,r.stateNode=e,t=Sc(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:l,cache:t},wc(r),e}function wp(e){return e?(e=Ja,e):Ja}function Rp(e,t,l,n,u,r){u=wp(u),n.context===null?n.context=u:n.pendingContext=u,n=Bl(t),n.payload={element:l},r=r===void 0?null:r,r!==null&&(n.callback=r),l=Ul(e,n,t),l!==null&&(Mt(l,e,t),tu(l,e,t))}function Dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Yo(e,t){Dp(e,t),(e=e.alternate)&&Dp(e,t)}function _p(e){if(e.tag===13){var t=Ka(e,67108864);t!==null&&Mt(t,e,67108864),Yo(e,67108864)}}var Ji=!0;function Jg(e,t,l,n){var u=N.T;N.T=null;var r=W.p;try{W.p=2,qo(e,t,l,n)}finally{W.p=r,N.T=u}}function Wg(e,t,l,n){var u=N.T;N.T=null;var r=W.p;try{W.p=8,qo(e,t,l,n)}finally{W.p=r,N.T=u}}function qo(e,t,l,n){if(Ji){var u=Go(n);if(u===null)Co(e,t,n,Wi,l),Cp(e,n);else if(Ig(u,e,t,l,n))n.stopPropagation();else if(Cp(e,n),t&4&&-1<Fg.indexOf(e)){for(;u!==null;){var r=Ua(u);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=na(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var y=1<<31-wt(f);h.entanglements[1]|=y,f&=~y}ll(r),(ze&6)===0&&(Ni=Ie()+500,bu(0))}}break;case 13:h=Ka(r,2),h!==null&&Mt(h,r,2),Bi(),Yo(r,2)}if(r=Go(n),r===null&&Co(e,t,n,Wi,l),r===u)break;u=r}u!==null&&n.stopPropagation()}else Co(e,t,n,null,l)}}function Go(e){return e=Kr(e),Vo(e)}var Wi=null;function Vo(e){if(Wi=null,e=Ba(e),e!==null){var t=d(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=m(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function Op(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cl()){case Gt:return 2;case Na:return 8;case Ol:case aa:return 32;case Mn:return 268435456;default:return 32}default:return 32}}var Xo=!1,Jl=null,Wl=null,Fl=null,Ru=new Map,Du=new Map,Il=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cp(e,t){switch(e){case"focusin":case"focusout":Jl=null;break;case"dragenter":case"dragleave":Wl=null;break;case"mouseover":case"mouseout":Fl=null;break;case"pointerover":case"pointerout":Ru.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Du.delete(t.pointerId)}}function _u(e,t,l,n,u,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:r,targetContainers:[u]},t!==null&&(t=Ua(t),t!==null&&_p(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Ig(e,t,l,n,u){switch(t){case"focusin":return Jl=_u(Jl,e,t,l,n,u),!0;case"dragenter":return Wl=_u(Wl,e,t,l,n,u),!0;case"mouseover":return Fl=_u(Fl,e,t,l,n,u),!0;case"pointerover":var r=u.pointerId;return Ru.set(r,_u(Ru.get(r)||null,e,t,l,n,u)),!0;case"gotpointercapture":return r=u.pointerId,Du.set(r,_u(Du.get(r)||null,e,t,l,n,u)),!0}return!1}function zp(e){var t=Ba(e.target);if(t!==null){var l=d(t);if(l!==null){if(t=l.tag,t===13){if(t=m(l),t!==null){e.blockedOn=t,Vm(e.priority,function(){if(l.tag===13){var n=zt();n=kr(n);var u=Ka(l,n);u!==null&&Mt(u,l,n),Yo(l,n)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Go(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Zr=n,l.target.dispatchEvent(n),Zr=null}else return t=Ua(l),t!==null&&_p(t),e.blockedOn=l,!1;t.shift()}return!0}function Mp(e,t,l){Fi(e)&&l.delete(t)}function Pg(){Xo=!1,Jl!==null&&Fi(Jl)&&(Jl=null),Wl!==null&&Fi(Wl)&&(Wl=null),Fl!==null&&Fi(Fl)&&(Fl=null),Ru.forEach(Mp),Du.forEach(Mp)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Xo||(Xo=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Pg)))}var Pi=null;function Np(e){Pi!==e&&(Pi=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],u=e[t+2];if(typeof n!="function"){if(Vo(n||l)===null)continue;break}var r=Ua(l);r!==null&&(e.splice(t,3),t-=3,Gc(r,{pending:!0,data:u,method:l.method,action:n},n,u))}}))}function Ou(e){function t(y){return Ii(y,e)}Jl!==null&&Ii(Jl,e),Wl!==null&&Ii(Wl,e),Fl!==null&&Ii(Fl,e),Ru.forEach(t),Du.forEach(t);for(var l=0;l<Il.length;l++){var n=Il[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Il.length&&(l=Il[0],l.blockedOn===null);)zp(l),l.blockedOn===null&&Il.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var u=l[n],r=l[n+1],f=u[yt]||null;if(typeof r=="function")f||Np(l);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(u=r,f=r[yt]||null)h=f.formAction;else if(Vo(u)!==null)continue}else h=f.action;typeof h=="function"?l[n+1]=h:(l.splice(n,3),n-=3),Np(l)}}}function Zo(e){this._internalRoot=e}er.prototype.render=Zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,n=zt();Rp(l,n,e,t,null,null)},er.prototype.unmount=Zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rp(e.current,2,null,e,null,null),Bi(),t[$a]=null}};function er(e){this._internalRoot=e}er.prototype.unstable_scheduleHydration=function(e){if(e){var t=Js();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Il.length&&t!==0&&t<Il[l].priority;l++);Il.splice(l,0,e),l===0&&zp(e)}};var $p=i.version;if($p!=="19.1.0")throw Error(o(527,$p,"19.1.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var eb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{Nn=tr.inject(eb),Tt=tr}catch{}}return zu.createRoot=function(e,t){if(!s(e))throw Error(o(299));var l=!1,n="",u=Wd,r=Fd,f=Id,h=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=Tp(e,1,!1,null,null,l,n,u,r,f,h,null),e[$a]=t.current,Oo(e),new Zo(t)},zu.hydrateRoot=function(e,t,l){if(!s(e))throw Error(o(299));var n=!1,u="",r=Wd,f=Fd,h=Id,y=null,_=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(r=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(h=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(y=l.unstable_transitionCallbacks),l.formState!==void 0&&(_=l.formState)),t=Tp(e,1,!0,t,l??null,n,u,r,f,h,y,_),t.context=wp(null),l=t.current,n=zt(),n=kr(n),u=Bl(n),u.callback=null,Ul(l,u,n),l=n,t.current.lanes=l,Bn(t,l),ll(t),e[$a]=t.current,Oo(e),new er(t)},zu.version="19.1.0",zu}var Gp;function ob(){if(Gp)return Wo.exports;Gp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Wo.exports=cb(),Wo.exports}var sb=ob(),_0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vp=M.createContext&&M.createContext(_0),fb=["attr","size","title"];function db(a,i){if(a==null)return{};var c=hb(a,i),o,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(s=0;s<d.length;s++)o=d[s],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(c[o]=a[o])}return c}function hb(a,i){if(a==null)return{};var c={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;c[o]=a[o]}return c}function vr(){return vr=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var o in c)Object.prototype.hasOwnProperty.call(c,o)&&(a[o]=c[o])}return a},vr.apply(this,arguments)}function Xp(a,i){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),c.push.apply(c,o)}return c}function gr(a){for(var i=1;i<arguments.length;i++){var c=arguments[i]!=null?arguments[i]:{};i%2?Xp(Object(c),!0).forEach(function(o){pb(a,o,c[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):Xp(Object(c)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(c,o))})}return a}function pb(a,i,c){return i=mb(i),i in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,a}function mb(a){var i=vb(a,"string");return typeof i=="symbol"?i:i+""}function vb(a,i){if(typeof a!="object"||!a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var o=c.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function O0(a){return a&&a.map((i,c)=>M.createElement(i.tag,gr({key:c},i.attr),O0(i.child)))}function Es(a){return i=>M.createElement(gb,vr({attr:gr({},a.attr)},i),O0(a.child))}function gb(a){var i=c=>{var{attr:o,size:s,title:d}=a,m=db(a,fb),b=s||c.size||"1em",v;return c.className&&(v=c.className),a.className&&(v=(v?v+" ":"")+a.className),M.createElement("svg",vr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,o,m,{className:v,style:gr(gr({color:a.color||c.color},c.style),a.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),d&&M.createElement("title",null,d),a.children)};return Vp!==void 0?M.createElement(Vp.Consumer,null,c=>i(c)):i(_0)}function bb(a){return Es({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(a)}function yb(a){return Es({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function xb(a){return Es({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}const Sb=()=>$.jsxs("div",{className:" flex font-noto text-white flex-col gap-4",children:[$.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-end gap-2",children:[$.jsx("h1",{className:"text-6xl",children:"蘇洺錚"}),$.jsx("h2",{className:"text-2xl",children:"Ming-Jheng Su"})]}),$.jsx("h3",{className:"text-4xl",children:"後端 Java工程師"}),$.jsxs("p",{className:"text-2xl",children:[$.jsx("span",{className:"text-green-400",children:"Spring Boot "}),"x ",$.jsx("span",{className:"text-blue-500",children:"React"})]}),$.jsxs("div",{className:"flex gap-4 text-white",children:[$.jsx("a",{href:"https://github.com/你的帳號",target:"_blank",rel:"noopener noreferrer",children:$.jsx(yb,{className:"w-6 h-6 hover:text-purple-500"})}),$.jsx("a",{href:"https://linkedin.com/in/你的帳號",target:"_blank",rel:"noopener noreferrer",children:$.jsx(xb,{className:"w-6 h-6 hover:text-blue-400"})}),$.jsx("a",{href:"https://facebook.com/你的帳號",target:"_blank",rel:"noopener noreferrer",children:$.jsx(bb,{className:"w-6 h-6 hover:text-blue-500"})})]})]}),Ab=({src:a,overlayOpacity:i="bg-black/60",children:c})=>$.jsxs("div",{className:"relative w-full min-h-screen overflow-x-hidden",children:[$.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover -z-10",children:$.jsx("source",{src:a,type:"video/mp4"})}),$.jsx("div",{className:`absolute inset-0 ${i} -z-5`}),$.jsx("div",{className:"relative z-10 w-full",children:c})]});var vt=function(){return vt=Object.assign||function(i){for(var c,o=1,s=arguments.length;o<s;o++){c=arguments[o];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(i[d]=c[d])}return i},vt.apply(this,arguments)};function br(a,i,c){if(c||arguments.length===2)for(var o=0,s=i.length,d;o<s;o++)(d||!(o in i))&&(d||(d=Array.prototype.slice.call(i,0,o)),d[o]=i[o]);return a.concat(d||Array.prototype.slice.call(i))}var Le="-ms-",Uu="-moz-",Ce="-webkit-",C0="comm",Rr="rule",Ts="decl",Eb="@import",z0="@keyframes",Tb="@layer",M0=Math.abs,ws=String.fromCharCode,cs=Object.assign;function wb(a,i){return ct(a,0)^45?(((i<<2^ct(a,0))<<2^ct(a,1))<<2^ct(a,2))<<2^ct(a,3):0}function N0(a){return a.trim()}function wl(a,i){return(a=i.exec(a))?a[0]:a}function be(a,i,c){return a.replace(i,c)}function cr(a,i,c){return a.indexOf(i,c)}function ct(a,i){return a.charCodeAt(i)|0}function wn(a,i,c){return a.slice(i,c)}function al(a){return a.length}function $0(a){return a.length}function Bu(a,i){return i.push(a),a}function Rb(a,i){return a.map(i).join("")}function Zp(a,i){return a.filter(function(c){return!wl(c,i)})}var Dr=1,Rn=1,B0=0,qt=0,tt=0,Cn="";function _r(a,i,c,o,s,d,m,b){return{value:a,root:i,parent:c,type:o,props:s,children:d,line:Dr,column:Rn,length:m,return:"",siblings:b}}function ea(a,i){return cs(_r("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function xn(a){for(;a.root;)a=ea(a.root,{children:[a]});Bu(a,a.siblings)}function Db(){return tt}function _b(){return tt=qt>0?ct(Cn,--qt):0,Rn--,tt===10&&(Rn=1,Dr--),tt}function Kt(){return tt=qt<B0?ct(Cn,qt++):0,Rn++,tt===10&&(Rn=1,Dr++),tt}function wa(){return ct(Cn,qt)}function or(){return qt}function Or(a,i){return wn(Cn,a,i)}function os(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ob(a){return Dr=Rn=1,B0=al(Cn=a),qt=0,[]}function Cb(a){return Cn="",a}function es(a){return N0(Or(qt-1,ss(a===91?a+2:a===40?a+1:a)))}function zb(a){for(;(tt=wa())&&tt<33;)Kt();return os(a)>2||os(tt)>3?"":" "}function Mb(a,i){for(;--i&&Kt()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return Or(a,or()+(i<6&&wa()==32&&Kt()==32))}function ss(a){for(;Kt();)switch(tt){case a:return qt;case 34:case 39:a!==34&&a!==39&&ss(tt);break;case 40:a===41&&ss(a);break;case 92:Kt();break}return qt}function Nb(a,i){for(;Kt()&&a+tt!==57;)if(a+tt===84&&wa()===47)break;return"/*"+Or(i,qt-1)+"*"+ws(a===47?a:Kt())}function $b(a){for(;!os(wa());)Kt();return Or(a,qt)}function Bb(a){return Cb(sr("",null,null,null,[""],a=Ob(a),0,[0],a))}function sr(a,i,c,o,s,d,m,b,v){for(var p=0,S=0,E=m,T=0,B=0,O=0,j=1,k=1,R=1,L=0,Q="",P=s,V=d,I=o,te=Q;k;)switch(O=L,L=Kt()){case 40:if(O!=108&&ct(te,E-1)==58){cr(te+=be(es(L),"&","&\f"),"&\f",M0(p?b[p-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:te+=es(L);break;case 9:case 10:case 13:case 32:te+=zb(O);break;case 92:te+=Mb(or()-1,7);continue;case 47:switch(wa()){case 42:case 47:Bu(Ub(Nb(Kt(),or()),i,c,v),v);break;default:te+="/"}break;case 123*j:b[p++]=al(te)*R;case 125*j:case 59:case 0:switch(L){case 0:case 125:k=0;case 59+S:R==-1&&(te=be(te,/\f/g,"")),B>0&&al(te)-E&&Bu(B>32?Jp(te+";",o,c,E-1,v):Jp(be(te," ","")+";",o,c,E-2,v),v);break;case 59:te+=";";default:if(Bu(I=Kp(te,i,c,p,S,s,b,Q,P=[],V=[],E,d),d),L===123)if(S===0)sr(te,i,I,I,P,d,E,b,V);else switch(T===99&&ct(te,3)===110?100:T){case 100:case 108:case 109:case 115:sr(a,I,I,o&&Bu(Kp(a,I,I,0,0,s,b,Q,s,P=[],E,V),V),s,V,E,b,o?P:V);break;default:sr(te,I,I,I,[""],V,0,b,V)}}p=S=B=0,j=R=1,Q=te="",E=m;break;case 58:E=1+al(te),B=O;default:if(j<1){if(L==123)--j;else if(L==125&&j++==0&&_b()==125)continue}switch(te+=ws(L),L*j){case 38:R=S>0?1:(te+="\f",-1);break;case 44:b[p++]=(al(te)-1)*R,R=1;break;case 64:wa()===45&&(te+=es(Kt())),T=wa(),S=E=al(Q=te+=$b(or())),L++;break;case 45:O===45&&al(te)==2&&(j=0)}}return d}function Kp(a,i,c,o,s,d,m,b,v,p,S,E){for(var T=s-1,B=s===0?d:[""],O=$0(B),j=0,k=0,R=0;j<o;++j)for(var L=0,Q=wn(a,T+1,T=M0(k=m[j])),P=a;L<O;++L)(P=N0(k>0?B[L]+" "+Q:be(Q,/&\f/g,B[L])))&&(v[R++]=P);return _r(a,i,c,s===0?Rr:b,v,p,S,E)}function Ub(a,i,c,o){return _r(a,i,c,C0,ws(Db()),wn(a,2,-2),0,o)}function Jp(a,i,c,o,s){return _r(a,i,c,Ts,wn(a,0,o),wn(a,o+1,-1),o,s)}function U0(a,i,c){switch(wb(a,i)){case 5103:return Ce+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+a+a;case 4789:return Uu+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+a+Uu+a+Le+a+a;case 5936:switch(ct(a,i+11)){case 114:return Ce+a+Le+be(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ce+a+Le+be(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ce+a+Le+be(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Ce+a+Le+a+a;case 6165:return Ce+a+Le+"flex-"+a+a;case 5187:return Ce+a+be(a,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Le+"flex-$1$2")+a;case 5443:return Ce+a+Le+"flex-item-"+be(a,/flex-|-self/g,"")+(wl(a,/flex-|baseline/)?"":Le+"grid-row-"+be(a,/flex-|-self/g,""))+a;case 4675:return Ce+a+Le+"flex-line-pack"+be(a,/align-content|flex-|-self/g,"")+a;case 5548:return Ce+a+Le+be(a,"shrink","negative")+a;case 5292:return Ce+a+Le+be(a,"basis","preferred-size")+a;case 6060:return Ce+"box-"+be(a,"-grow","")+Ce+a+Le+be(a,"grow","positive")+a;case 4554:return Ce+be(a,/([^-])(transform)/g,"$1"+Ce+"$2")+a;case 6187:return be(be(be(a,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),a,"")+a;case 5495:case 3959:return be(a,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return be(be(a,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+a+a;case 4200:if(!wl(a,/flex-|baseline/))return Le+"grid-column-align"+wn(a,i)+a;break;case 2592:case 3360:return Le+be(a,"template-","")+a;case 4384:case 3616:return c&&c.some(function(o,s){return i=s,wl(o.props,/grid-\w+-end/)})?~cr(a+(c=c[i].value),"span",0)?a:Le+be(a,"-start","")+a+Le+"grid-row-span:"+(~cr(c,"span",0)?wl(c,/\d+/):+wl(c,/\d+/)-+wl(a,/\d+/))+";":Le+be(a,"-start","")+a;case 4896:case 4128:return c&&c.some(function(o){return wl(o.props,/grid-\w+-start/)})?a:Le+be(be(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return be(a,/(.+)-inline(.+)/,Ce+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(al(a)-1-i>6)switch(ct(a,i+1)){case 109:if(ct(a,i+4)!==45)break;case 102:return be(a,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Uu+(ct(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~cr(a,"stretch",0)?U0(be(a,"stretch","fill-available"),i,c)+a:a}break;case 5152:case 5920:return be(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,d,m,b,v,p){return Le+s+":"+d+p+(m?Le+s+"-span:"+(b?v:+v-+d)+p:"")+a});case 4949:if(ct(a,i+6)===121)return be(a,":",":"+Ce)+a;break;case 6444:switch(ct(a,ct(a,14)===45?18:11)){case 120:return be(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(ct(a,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Le+"$2box$3")+a;case 100:return be(a,":",":"+Le)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(a,"scroll-","scroll-snap-")+a}return a}function yr(a,i){for(var c="",o=0;o<a.length;o++)c+=i(a[o],o,a,i)||"";return c}function kb(a,i,c,o){switch(a.type){case Tb:if(a.children.length)break;case Eb:case Ts:return a.return=a.return||a.value;case C0:return"";case z0:return a.return=a.value+"{"+yr(a.children,o)+"}";case Rr:if(!al(a.value=a.props.join(",")))return""}return al(c=yr(a.children,o))?a.return=a.value+"{"+c+"}":""}function jb(a){var i=$0(a);return function(c,o,s,d){for(var m="",b=0;b<i;b++)m+=a[b](c,o,s,d)||"";return m}}function Hb(a){return function(i){i.root||(i=i.return)&&a(i)}}function Lb(a,i,c,o){if(a.length>-1&&!a.return)switch(a.type){case Ts:a.return=U0(a.value,a.length,c);return;case z0:return yr([ea(a,{value:be(a.value,"@","@"+Ce)})],o);case Rr:if(a.length)return Rb(c=a.props,function(s){switch(wl(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(ea(a,{props:[be(s,/:(read-\w+)/,":"+Uu+"$1")]})),xn(ea(a,{props:[s]})),cs(a,{props:Zp(c,o)});break;case"::placeholder":xn(ea(a,{props:[be(s,/:(plac\w+)/,":"+Ce+"input-$1")]})),xn(ea(a,{props:[be(s,/:(plac\w+)/,":"+Uu+"$1")]})),xn(ea(a,{props:[be(s,/:(plac\w+)/,Le+"input-$1")]})),xn(ea(a,{props:[s]})),cs(a,{props:Zp(c,o)});break}return""})}}var Qb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Dn=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",k0="active",j0="data-styled-version",Cr="6.1.19",Rs=`/*!sc*/
`,xr=typeof window<"u"&&typeof document<"u",Yb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),zr=Object.freeze([]),_n=Object.freeze({});function qb(a,i,c){return c===void 0&&(c=_n),a.theme!==c.theme&&a.theme||i||c.theme}var H0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vb=/(^-|-$)/g;function Wp(a){return a.replace(Gb,"-").replace(Vb,"")}var Xb=/(a)(d)/gi,lr=52,Fp=function(a){return String.fromCharCode(a+(a>25?39:97))};function fs(a){var i,c="";for(i=Math.abs(a);i>lr;i=i/lr|0)c=Fp(i%lr)+c;return(Fp(i%lr)+c).replace(Xb,"$1-$2")}var ts,L0=5381,En=function(a,i){for(var c=i.length;c;)a=33*a^i.charCodeAt(--c);return a},Q0=function(a){return En(L0,a)};function Zb(a){return fs(Q0(a)>>>0)}function Kb(a){return a.displayName||a.name||"Component"}function ls(a){return typeof a=="string"&&!0}var Y0=typeof Symbol=="function"&&Symbol.for,q0=Y0?Symbol.for("react.memo"):60115,Jb=Y0?Symbol.for("react.forward_ref"):60112,Wb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ib=((ts={})[Jb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ts[q0]=G0,ts);function Ip(a){return("type"in(i=a)&&i.type.$$typeof)===q0?G0:"$$typeof"in a?Ib[a.$$typeof]:Wb;var i}var Pb=Object.defineProperty,ey=Object.getOwnPropertyNames,Pp=Object.getOwnPropertySymbols,ty=Object.getOwnPropertyDescriptor,ly=Object.getPrototypeOf,e0=Object.prototype;function V0(a,i,c){if(typeof i!="string"){if(e0){var o=ly(i);o&&o!==e0&&V0(a,o,c)}var s=ey(i);Pp&&(s=s.concat(Pp(i)));for(var d=Ip(a),m=Ip(i),b=0;b<s.length;++b){var v=s[b];if(!(v in Fb||c&&c[v]||m&&v in m||d&&v in d)){var p=ty(i,v);try{Pb(a,v,p)}catch{}}}}return a}function Da(a){return typeof a=="function"}function Ds(a){return typeof a=="object"&&"styledComponentId"in a}function Ea(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function t0(a,i){if(a.length===0)return"";for(var c=a[0],o=1;o<a.length;o++)c+=a[o];return c}function ku(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function ds(a,i,c){if(c===void 0&&(c=!1),!c&&!ku(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)a[o]=ds(a[o],i[o]);else if(ku(i))for(var o in i)a[o]=ds(a[o],i[o]);return a}function _s(a,i){Object.defineProperty(a,"toString",{value:i})}function _a(a){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var ay=function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var c=0,o=0;o<i;o++)c+=this.groupSizes[o];return c},a.prototype.insertRules=function(i,c){if(i>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,d=s;i>=d;)if((d<<=1)<0)throw _a(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var m=s;m<d;m++)this.groupSizes[m]=0}for(var b=this.indexOfGroup(i+1),v=(m=0,c.length);m<v;m++)this.tag.insertRule(b,c[m])&&(this.groupSizes[i]++,b++)},a.prototype.clearGroup=function(i){if(i<this.length){var c=this.groupSizes[i],o=this.indexOfGroup(i),s=o+c;this.groupSizes[i]=0;for(var d=o;d<s;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(i){var c="";if(i>=this.length||this.groupSizes[i]===0)return c;for(var o=this.groupSizes[i],s=this.indexOfGroup(i),d=s+o,m=s;m<d;m++)c+="".concat(this.tag.getRule(m)).concat(Rs);return c},a}(),fr=new Map,Sr=new Map,dr=1,ar=function(a){if(fr.has(a))return fr.get(a);for(;Sr.has(dr);)dr++;var i=dr++;return fr.set(a,i),Sr.set(i,a),i},ny=function(a,i){dr=i+1,fr.set(a,i),Sr.set(i,a)},uy="style[".concat(Dn,"][").concat(j0,'="').concat(Cr,'"]'),iy=new RegExp("^".concat(Dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ry=function(a,i,c){for(var o,s=c.split(","),d=0,m=s.length;d<m;d++)(o=s[d])&&a.registerName(i,o)},cy=function(a,i){for(var c,o=((c=i.textContent)!==null&&c!==void 0?c:"").split(Rs),s=[],d=0,m=o.length;d<m;d++){var b=o[d].trim();if(b){var v=b.match(iy);if(v){var p=0|parseInt(v[1],10),S=v[2];p!==0&&(ny(S,p),ry(a,S,v[3]),a.getTag().insertRules(p,s)),s.length=0}else s.push(b)}}},l0=function(a){for(var i=document.querySelectorAll(uy),c=0,o=i.length;c<o;c++){var s=i[c];s&&s.getAttribute(Dn)!==k0&&(cy(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function oy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var X0=function(a){var i=document.head,c=a||i,o=document.createElement("style"),s=function(b){var v=Array.from(b.querySelectorAll("style[".concat(Dn,"]")));return v[v.length-1]}(c),d=s!==void 0?s.nextSibling:null;o.setAttribute(Dn,k0),o.setAttribute(j0,Cr);var m=oy();return m&&o.setAttribute("nonce",m),c.insertBefore(o,d),o},sy=function(){function a(i){this.element=X0(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,s=0,d=o.length;s<d;s++){var m=o[s];if(m.ownerNode===c)return m}throw _a(17)}(this.element),this.length=0}return a.prototype.insertRule=function(i,c){try{return this.sheet.insertRule(c,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var c=this.sheet.cssRules[i];return c&&c.cssText?c.cssText:""},a}(),fy=function(){function a(i){this.element=X0(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,c){if(i<=this.length&&i>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a}(),dy=function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,c){return i<=this.length&&(this.rules.splice(i,0,c),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a}(),a0=xr,hy={isServer:!xr,useCSSOMInjection:!Yb},Z0=function(){function a(i,c,o){i===void 0&&(i=_n),c===void 0&&(c={});var s=this;this.options=vt(vt({},hy),i),this.gs=c,this.names=new Map(o),this.server=!!i.isServer,!this.server&&xr&&a0&&(a0=!1,l0(this)),_s(this,function(){return function(d){for(var m=d.getTag(),b=m.length,v="",p=function(E){var T=function(R){return Sr.get(R)}(E);if(T===void 0)return"continue";var B=d.names.get(T),O=m.getGroup(E);if(B===void 0||!B.size||O.length===0)return"continue";var j="".concat(Dn,".g").concat(E,'[id="').concat(T,'"]'),k="";B!==void 0&&B.forEach(function(R){R.length>0&&(k+="".concat(R,","))}),v+="".concat(O).concat(j,'{content:"').concat(k,'"}').concat(Rs)},S=0;S<b;S++)p(S);return v}(s)})}return a.registerId=function(i){return ar(i)},a.prototype.rehydrate=function(){!this.server&&xr&&l0(this)},a.prototype.reconstructWithOptions=function(i,c){return c===void 0&&(c=!0),new a(vt(vt({},this.options),i),this.gs,c&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=function(c){var o=c.useCSSOMInjection,s=c.target;return c.isServer?new dy(s):o?new sy(s):new fy(s)}(this.options),new ay(i)));var i},a.prototype.hasNameForId=function(i,c){return this.names.has(i)&&this.names.get(i).has(c)},a.prototype.registerName=function(i,c){if(ar(i),this.names.has(i))this.names.get(i).add(c);else{var o=new Set;o.add(c),this.names.set(i,o)}},a.prototype.insertRules=function(i,c,o){this.registerName(i,c),this.getTag().insertRules(ar(i),o)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(ar(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a}(),py=/&/g,my=/^\s*\/\/.*$/gm;function K0(a,i){return a.map(function(c){return c.type==="rule"&&(c.value="".concat(i," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(i," ")),c.props=c.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=K0(c.children,i)),c})}function vy(a){var i,c,o,s=_n,d=s.options,m=d===void 0?_n:d,b=s.plugins,v=b===void 0?zr:b,p=function(T,B,O){return O.startsWith(c)&&O.endsWith(c)&&O.replaceAll(c,"").length>0?".".concat(i):T},S=v.slice();S.push(function(T){T.type===Rr&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(py,c).replace(o,p))}),m.prefix&&S.push(Lb),S.push(kb);var E=function(T,B,O,j){B===void 0&&(B=""),O===void 0&&(O=""),j===void 0&&(j="&"),i=j,c=B,o=new RegExp("\\".concat(c,"\\b"),"g");var k=T.replace(my,""),R=Bb(O||B?"".concat(O," ").concat(B," { ").concat(k," }"):k);m.namespace&&(R=K0(R,m.namespace));var L=[];return yr(R,jb(S.concat(Hb(function(Q){return L.push(Q)})))),L};return E.hash=v.length?v.reduce(function(T,B){return B.name||_a(15),En(T,B.name)},L0).toString():"",E}var gy=new Z0,hs=vy(),J0=M.createContext({shouldForwardProp:void 0,styleSheet:gy,stylis:hs});J0.Consumer;M.createContext(void 0);function n0(){return g.useContext(J0)}var by=function(){function a(i,c){var o=this;this.inject=function(s,d){d===void 0&&(d=hs);var m=o.name+d.hash;s.hasNameForId(o.id,m)||s.insertRules(o.id,m,d(o.rules,m,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=c,_s(this,function(){throw _a(12,String(o.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=hs),this.name+i.hash},a}(),yy=function(a){return a>="A"&&a<="Z"};function u0(a){for(var i="",c=0;c<a.length;c++){var o=a[c];if(c===1&&o==="-"&&a[0]==="-")return a;yy(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var W0=function(a){return a==null||a===!1||a===""},F0=function(a){var i,c,o=[];for(var s in a){var d=a[s];a.hasOwnProperty(s)&&!W0(d)&&(Array.isArray(d)&&d.isCss||Da(d)?o.push("".concat(u0(s),":"),d,";"):ku(d)?o.push.apply(o,br(br(["".concat(s," {")],F0(d),!1),["}"],!1)):o.push("".concat(u0(s),": ").concat((i=s,(c=d)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in Qb||i.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function Ra(a,i,c,o){if(W0(a))return[];if(Ds(a))return[".".concat(a.styledComponentId)];if(Da(a)){if(!Da(d=a)||d.prototype&&d.prototype.isReactComponent||!i)return[a];var s=a(i);return Ra(s,i,c,o)}var d;return a instanceof by?c?(a.inject(c,o),[a.getName(o)]):[a]:ku(a)?F0(a):Array.isArray(a)?Array.prototype.concat.apply(zr,a.map(function(m){return Ra(m,i,c,o)})):[a.toString()]}function xy(a){for(var i=0;i<a.length;i+=1){var c=a[i];if(Da(c)&&!Ds(c))return!1}return!0}var Sy=Q0(Cr),Ay=function(){function a(i,c,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&xy(i),this.componentId=c,this.baseHash=En(Sy,c),this.baseStyle=o,Z0.registerId(c)}return a.prototype.generateAndInjectStyles=function(i,c,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))s=Ea(s,this.staticRulesId);else{var d=t0(Ra(this.rules,i,c,o)),m=fs(En(this.baseHash,d)>>>0);if(!c.hasNameForId(this.componentId,m)){var b=o(d,".".concat(m),void 0,this.componentId);c.insertRules(this.componentId,m,b)}s=Ea(s,m),this.staticRulesId=m}else{for(var v=En(this.baseHash,o.hash),p="",S=0;S<this.rules.length;S++){var E=this.rules[S];if(typeof E=="string")p+=E;else if(E){var T=t0(Ra(E,i,c,o));v=En(v,T+S),p+=T}}if(p){var B=fs(v>>>0);c.hasNameForId(this.componentId,B)||c.insertRules(this.componentId,B,o(p,".".concat(B),void 0,this.componentId)),s=Ea(s,B)}}return s},a}(),Ar=M.createContext(void 0);Ar.Consumer;function I0(a){var i=M.useContext(Ar),c=g.useMemo(function(){return function(o,s){if(!o)throw _a(14);if(Da(o)){var d=o(s);return d}if(Array.isArray(o)||typeof o!="object")throw _a(8);return s?vt(vt({},s),o):o}(a.theme,i)},[a.theme,i]);return a.children?M.createElement(Ar.Provider,{value:c},a.children):null}var as={};function Ey(a,i,c){var o=Ds(a),s=a,d=!ls(a),m=i.attrs,b=m===void 0?zr:m,v=i.componentId,p=v===void 0?function(P,V){var I=typeof P!="string"?"sc":Wp(P);as[I]=(as[I]||0)+1;var te="".concat(I,"-").concat(Zb(Cr+I+as[I]));return V?"".concat(V,"-").concat(te):te}(i.displayName,i.parentComponentId):v,S=i.displayName,E=S===void 0?function(P){return ls(P)?"styled.".concat(P):"Styled(".concat(Kb(P),")")}(a):S,T=i.displayName&&i.componentId?"".concat(Wp(i.displayName),"-").concat(i.componentId):i.componentId||p,B=o&&s.attrs?s.attrs.concat(b).filter(Boolean):b,O=i.shouldForwardProp;if(o&&s.shouldForwardProp){var j=s.shouldForwardProp;if(i.shouldForwardProp){var k=i.shouldForwardProp;O=function(P,V){return j(P,V)&&k(P,V)}}else O=j}var R=new Ay(c,T,o?s.componentStyle:void 0);function L(P,V){return function(I,te,de){var he=I.attrs,_e=I.componentStyle,Oe=I.defaultProps,ge=I.foldedComponentIds,Qe=I.styledComponentId,ke=I.target,xe=M.useContext(Ar),N=n0(),W=I.shouldForwardProp||N.shouldForwardProp,F=qb(te,xe,Oe)||_n,ie=function(ae,ee,oe){for(var pe,Z=vt(vt({},ee),{className:void 0,theme:oe}),fe=0;fe<ae.length;fe+=1){var me=Da(pe=ae[fe])?pe(Z):pe;for(var Te in me)Z[Te]=Te==="className"?Ea(Z[Te],me[Te]):Te==="style"?vt(vt({},Z[Te]),me[Te]):me[Te]}return ee.className&&(Z.className=Ea(Z.className,ee.className)),Z}(he,te,F),x=ie.as||ke,Y={};for(var J in ie)ie[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&ie.theme===F||(J==="forwardedAs"?Y.as=ie.forwardedAs:W&&!W(J,x)||(Y[J]=ie[J]));var q=function(ae,ee){var oe=n0(),pe=ae.generateAndInjectStyles(ee,oe.styleSheet,oe.stylis);return pe}(_e,ie),K=Ea(ge,Qe);return q&&(K+=" "+q),ie.className&&(K+=" "+ie.className),Y[ls(x)&&!H0.has(x)?"class":"className"]=K,de&&(Y.ref=de),g.createElement(x,Y)}(Q,P,V)}L.displayName=E;var Q=M.forwardRef(L);return Q.attrs=B,Q.componentStyle=R,Q.displayName=E,Q.shouldForwardProp=O,Q.foldedComponentIds=o?Ea(s.foldedComponentIds,s.styledComponentId):"",Q.styledComponentId=T,Q.target=o?s.target:a,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=o?function(V){for(var I=[],te=1;te<arguments.length;te++)I[te-1]=arguments[te];for(var de=0,he=I;de<he.length;de++)ds(V,he[de],!0);return V}({},s.defaultProps,P):P}}),_s(Q,function(){return".".concat(Q.styledComponentId)}),d&&V0(Q,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function i0(a,i){for(var c=[a[0]],o=0,s=i.length;o<s;o+=1)c.push(i[o],a[o+1]);return c}var r0=function(a){return Object.assign(a,{isCss:!0})};function le(a){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];if(Da(a)||ku(a))return r0(Ra(i0(zr,br([a],i,!0))));var o=a;return i.length===0&&o.length===1&&typeof o[0]=="string"?Ra(o):r0(Ra(i0(o,i)))}function ps(a,i,c){if(c===void 0&&(c=_n),!i)throw _a(1,i);var o=function(s){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return a(i,c,le.apply(void 0,br([s],d,!1)))};return o.attrs=function(s){return ps(a,i,vt(vt({},c),{attrs:Array.prototype.concat(c.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return ps(a,i,vt(vt({},c),s))},o}var P0=function(a){return ps(Ey,a)},X=P0;H0.forEach(function(a){X[a]=P0(a)});const Os="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Cs="inset 2px 2px 3px rgba(0,0,0,0.2)",Jt=()=>le`
  -webkit-text-fill-color: ${({theme:a})=>a.materialTextDisabled};
  color: ${({theme:a})=>a.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:a})=>a.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Wt=({background:a="material",color:i="materialText"}={})=>le`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:c})=>c[a]};
  color: ${({theme:c})=>c[i]};
`,Hu=({mainColor:a="black",secondaryColor:i="transparent",pixelSize:c=2})=>le`
  background-image: ${[`linear-gradient(
      45deg,
      ${a} 25%,
      transparent 25%,
      transparent 75%,
      ${a} 75%
    )`,`linear-gradient(
      45deg,
      ${a} 25%,
      transparent 25%,
      transparent 75%,
      ${a} 75%
    )`].join(",")};
  background-color: ${i};
  background-size: ${`${c*2}px ${c*2}px`};
  background-position: 0 0, ${`${c}px ${c}px`};
`,Oa=()=>le`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:a})=>a.materialText};
  background: ${({$disabled:a,theme:i})=>a?i.flatLight:i.canvas};
  border: 2px solid ${({theme:a})=>a.canvas};
  outline: 2px solid ${({theme:a})=>a.flatDark};
  outline-offset: -4px;
`,Sn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Ty=({theme:a,topLeftInner:i,bottomRightInner:c,hasShadow:o=!1,hasInsetShadow:s=!1})=>[o?Os:!1,s?Cs:!1,i!==null?`inset 1px 1px 0px 1px ${a[i]}`:!1,c!==null?`inset -1px -1px 0 1px ${a[c]}`:!1].filter(Boolean).join(", "),Ze=({invert:a=!1,style:i="button"}={})=>{const c={topLeftOuter:a?"bottomRightOuter":"topLeftOuter",topLeftInner:a?"bottomRightInner":"topLeftInner",bottomRightInner:a?"topLeftInner":"bottomRightInner",bottomRightOuter:a?"topLeftOuter":"bottomRightOuter"};return le`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o[Sn[i][c.topLeftOuter]]};
    border-top-color: ${({theme:o})=>o[Sn[i][c.topLeftOuter]]};
    border-right-color: ${({theme:o})=>o[Sn[i][c.bottomRightOuter]]};
    border-bottom-color: ${({theme:o})=>o[Sn[i][c.bottomRightOuter]]};
    box-shadow: ${({theme:o,shadow:s})=>Ty({theme:o,topLeftInner:Sn[i][c.topLeftInner],bottomRightInner:Sn[i][c.bottomRightInner],hasShadow:s})};
  `},On=()=>le`
  outline: 2px dotted ${({theme:a})=>a.materialText};
`,wy=a=>Buffer.from(a).toString("base64"),Ry=typeof btoa<"u"?btoa:wy,nr=(a,i=0)=>{const c=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${i} 13 13)">
      <polygon fill="${a}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ry(c)})`},zs=(a="default")=>le`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:i})=>Hu({mainColor:a==="flat"?i.flatLight:i.material,secondaryColor:a==="flat"?i.canvas:i.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Wt()}
    ${a==="flat"?Oa():Ze({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:i})=>i.material};
  }
  ::-webkit-scrollbar-button {
    ${Wt()}
    ${a==="flat"?Oa():Ze({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${a==="default"?Ze({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:i})=>nr(i.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:i})=>nr(i.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:i})=>nr(i.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:i})=>nr(i.materialText,0)};
  }
`,Dy=X.a`
  color: ${({theme:a})=>a.anchor};
  font-size: inherit;
  text-decoration: ${({underline:a})=>a?"underline":"none"};
  &:visited {
    color: ${({theme:a})=>a.anchorVisited};
  }
`,_y=g.forwardRef(({children:a,underline:i=!0,...c},o)=>M.createElement(Dy,{ref:o,underline:i,...c},a));_y.displayName="Anchor";const Oy=X.header`
  ${Ze()};
  ${Wt()};

  position: ${a=>{var i;return(i=a.position)!==null&&i!==void 0?i:a.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,em=g.forwardRef(({children:a,fixed:i=!0,position:c="fixed",...o},s)=>M.createElement(Oy,{fixed:i,position:i!==!1?c:void 0,ref:s,...o},a));em.displayName="AppBar";const Ca=()=>{};function Ta(a,i,c){return c!==null&&a>c?c:i!==null&&a<i?i:a}function Cy(a){if(Math.abs(a)<1){const c=a.toExponential().split("e-"),o=c[0].split(".")[1];return(o?o.length:0)+parseInt(c[1],10)}const i=a.toString().split(".")[1];return i?i.length:0}function c0(a,i,c){const o=Math.round((a-c)/i)*i+c;return Number(o.toFixed(Cy(i)))}function ta(a){return typeof a=="number"?`${a}px`:a}const zy=X.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:a})=>`
    height: ${a};
    width: ${a};
    `}
  border-radius: ${({square:a})=>a?0:"50%"};
  overflow: hidden;
  ${({noBorder:a,theme:i})=>!a&&`
    border-top: 2px solid ${i.borderDark};
    border-left: 2px solid ${i.borderDark};
    border-bottom: 2px solid ${i.borderLightest};
    border-right: 2px solid ${i.borderLightest};
    background: ${i.material};
  `}
  ${({src:a})=>!a&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,My=X.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Ny=g.forwardRef(({alt:a="",children:i,noBorder:c=!1,size:o=35,square:s=!1,src:d,...m},b)=>M.createElement(zy,{noBorder:c,ref:b,size:ta(o),square:s,src:d,...m},d?M.createElement(My,{src:d,alt:a}):i));Ny.displayName="Avatar";const dt={sm:"28px",md:"36px",lg:"44px"},$y=le`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:a="md"})=>dt[a]};
  width: ${({fullWidth:a,size:i="md",square:c})=>a?"100%":c?dt[i]:"auto"};
  padding: ${({square:a})=>a?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:a})=>!a&&"2px"};
  }
  padding-top: ${({active:a,disabled:i})=>a&&!i&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Mr=X.button`
  ${({active:a,disabled:i,primary:c,theme:o,variant:s})=>s==="flat"?le`
          ${Oa()}
          ${c?`
          border: 2px solid ${o.checkmark};
            outline: 2px solid ${o.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${o.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!a&&!i&&On}
            outline-offset: -4px;
          }
        `:s==="menu"||s==="thin"?le`
          ${Wt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!i&&!a&&Ze({style:"buttonThin"})}
          }
          &:active {
            ${!i&&Ze({style:"buttonThinPressed"})}
          }
          ${a&&Ze({style:"buttonThinPressed"})}
          ${i&&Jt()}
        `:le`
          ${Wt()};
          border: none;
          ${i&&Jt()}
          ${a?Hu({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${c?le`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:le`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Ze(a?{style:s==="raised"?"window":"button",invert:!0}:{style:s==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!i&&Ze({style:s==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!a&&!i&&On}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${a?"0":"1px"};
          }
        `}
  ${$y}
`,nl=g.forwardRef(({onClick:a,disabled:i=!1,children:c,type:o="button",fullWidth:s=!1,size:d="md",square:m=!1,active:b=!1,onTouchStart:v=Ca,primary:p=!1,variant:S="default",...E},T)=>M.createElement(Mr,{active:b,disabled:i,$disabled:i,fullWidth:s,onClick:i?void 0:a,onTouchStart:v,primary:p,ref:T,size:d,square:m,type:o,variant:S,...E},c));nl.displayName="Button";function la({defaultValue:a,onChange:i,onChangePropName:c="onChange",readOnly:o,value:s,valuePropName:d="value"}){const m=s!==void 0,[b,v]=g.useState(a),p=g.useCallback(S=>{m||v(S)},[m]);if(m&&typeof i!="function"&&!o){const S=`Warning: You provided a \`${d}\` prop to a component without an \`${c}\` handler.${d==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${c}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${c}\` function that updates \`${d}\`.`}`;console.warn(S)}return[m?s:b,p]}const ms=X.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${a=>dt[a.size]};
  width: ${a=>a.square?dt[a.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${a=>a.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${a=>dt[a.size]};
  color: ${({theme:a})=>a.materialText};
  pointer-events: ${({$disabled:a})=>a?"none":"auto"};
  font-weight: ${({primary:a})=>a?"bold":"normal"};
  &:hover {
    ${({theme:a,$disabled:i})=>!i&&`
        color: ${a.materialTextInvert};
        background: ${a.hoverBackground};
      `}

    cursor: default;
  }
  ${a=>a.$disabled&&Jt()}
`,By=g.forwardRef(({size:a="lg",disabled:i,square:c,children:o,onClick:s,primary:d,...m},b)=>M.createElement(ms,{$disabled:i,size:a,square:c,onClick:i?void 0:s,primary:d,role:"menuitem",ref:b,"aria-disabled":i,...m},o));By.displayName="MenuListItem";const Uy=X.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${a=>a.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ze({style:"window"})}
  ${Wt()}
  ${a=>a.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Uy.displayName="MenuList";const ul=20,Er=X.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ul}px;
  height: ${ul}px;
  opacity: 0;
  z-index: -1;
`,Ms=X.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:a})=>a?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:a})=>a.materialText};
  ${a=>a.$disabled&&Jt()}

  ${ms} & {
    margin: 0;
    height: 100%;
  }
  ${ms}:hover & {
    ${({$disabled:a,theme:i})=>!a&&le`
        color: ${i.materialTextInvert};
      `};
  }
`,Ns=X.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Er}:focus ~ & {
    ${On}
  }
  ${Er}:not(:disabled) ~ &:active {
    ${On}
  }
`,il=X.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:a})=>a.borderDark};
  border-top-color: ${({theme:a})=>a.borderDark};
  border-right-color: ${({theme:a})=>a.borderLightest};
  border-bottom-color: ${({theme:a})=>a.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:a})=>a.borderDarkest};
    border-top-color: ${({theme:a})=>a.borderDarkest};
    border-right-color: ${({theme:a})=>a.borderLight};
    border-bottom-color: ${({theme:a})=>a.borderLight};

    pointer-events: none;
    ${a=>a.shadow&&`box-shadow:${Cs};`}
  }
`,ky=X.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${zs()}
`,tm=g.forwardRef(({children:a,shadow:i=!0,...c},o)=>M.createElement(il,{ref:o,shadow:i,...c},M.createElement(ky,null,a)));tm.displayName="ScrollView";const lm=le`
  width: ${ul}px;
  height: ${ul}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,jy=X(il)`
  ${lm}
  width: ${ul}px;
  height: ${ul}px;
  background: ${({$disabled:a,theme:i})=>a?i.material:i.canvas};
  &:before {
    box-shadow: none;
  }
`,Hy=X.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:a,theme:i})=>a?i.flatLight:i.canvas};
  ${lm}
  width: ${ul-4}px;
  height: ${ul-4}px;
  outline: none;
  border: 2px solid ${({theme:a})=>a.flatDark};
  background: ${({$disabled:a,theme:i})=>a?i.flatLight:i.canvas};
`,Ly=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:a,theme:i})=>a?i.checkmarkDisabled:i.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${a=>a.$disabled?a.theme.checkmarkDisabled:a.theme.checkmark};
  }
`,Qy=X.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:a,theme:i})=>Hu({mainColor:a?i.checkmarkDisabled:i.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Yy={flat:Hy,default:jy},qy=g.forwardRef(({checked:a,className:i="",defaultChecked:c=!1,disabled:o=!1,indeterminate:s=!1,label:d="",onChange:m=Ca,style:b={},value:v,variant:p="default",...S},E)=>{var T;const[B,O]=la({defaultValue:c,onChange:m,readOnly:(T=S.readOnly)!==null&&T!==void 0?T:o,value:a}),j=g.useCallback(L=>{const Q=L.target.checked;O(Q),m(L)},[m,O]),k=Yy[p];let R=null;return s?R=Qy:B&&(R=Ly),M.createElement(Ms,{$disabled:o,className:i,style:b},M.createElement(Er,{disabled:o,onChange:o?void 0:j,readOnly:o,type:"checkbox",value:v,checked:B,"data-indeterminate":s,ref:E,...S}),M.createElement(k,{$disabled:o,role:"presentation"},R&&M.createElement(R,{$disabled:o,variant:p})),d&&M.createElement(Ns,null,d))});qy.displayName="Checkbox";const am=X.div`
  ${({orientation:a,theme:i,size:c="100%"})=>a==="vertical"?`
    height: ${ta(c)};
    border-left: 2px solid ${i.borderDark};
    border-right: 2px solid ${i.borderLightest};
    margin: 0;
    `:`
    width: ${ta(c)};
    border-bottom: 2px solid ${i.borderLightest};
    border-top: 2px solid ${i.borderDark};
    margin: 0;
    `}
`;am.displayName="Separator";const Gy=X(Mr)`
  padding-left: 8px;
`,Vy=X(am)`
  height: 21px;
  position: relative;
  top: 0;
`,nm=X.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Xy=X.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:a})=>a};

  ${({$disabled:a})=>a?le`
          border: 2px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:le`
          border: 2px solid ${({theme:i})=>i.materialText};
        `}
  ${nm}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${On}
    outline-offset: -8px;
  }
`,Zy=X.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:a})=>a?le`
          border-top: 6px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:le`
          border-top: 6px solid ${({theme:i})=>i.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:a})=>a==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Ky=g.forwardRef(({value:a,defaultValue:i,onChange:c=Ca,disabled:o=!1,variant:s="default",...d},m)=>{var b;const[v,p]=la({defaultValue:i,onChange:c,readOnly:(b=d.readOnly)!==null&&b!==void 0?b:o,value:a}),S=E=>{const T=E.target.value;p(T),c(E)};return M.createElement(Gy,{disabled:o,as:"div",variant:s,size:"md"},M.createElement(nm,{onChange:S,readOnly:o,disabled:o,value:v??"#008080",type:"color",ref:m,...d}),M.createElement(Xy,{$disabled:o,color:v??"#008080",role:"presentation"}),s==="default"&&M.createElement(Vy,{orientation:"vertical"}),M.createElement(Zy,{$disabled:o,variant:s}))});Ky.displayName="ColorInput";const Jy=X.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:a})=>le`
    width: ${11*a}px;
    height: ${21*a}px;
    margin: ${a}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Hu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:a})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${a}px;
      border-left: ${a}px solid var(--react95-digit-bg-color);
      border-right: ${a}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${a}px;
      border-left: ${a}px solid var(--react95-digit-primary-color);
      border-right: ${a}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${a}px;
      width: ${9*a}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${a}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${a*2}px);
      top: ${2*a}px;
      left: ${a}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${a}px;
      border-left: ${a}px solid var(--react95-digit-bg-color);
      border-right: ${a}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${a}px solid var(--react95-digit-primary-color);
      border-right: ${a}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${a}px;
      width: ${9*a}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${a}px;
    }
    span.center:after {
      bottom: ${a}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${a}px;
      border-top: ${a}px solid var(--react95-digit-bg-color);
      border-bottom: ${a}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*a}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${a}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${a*2}px);
      top: ${a}px;
      left: ${a*2}px;
    }
  `}
`,o0=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Wy=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Fy({digit:a=0,pixelSize:i=2,...c}){const o=Wy[Number(a)].map((s,d)=>s?`${o0[d]} active`:o0[d]);return M.createElement(Jy,{pixelSize:i,...c},o.map((s,d)=>M.createElement("span",{className:s,key:d})))}const Iy=X.div`
  ${Ze({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Py={sm:1,md:2,lg:3,xl:4},e1=g.forwardRef(({value:a=0,minLength:i=3,size:c="md",...o},s)=>{const d=g.useMemo(()=>a.toString().padStart(i,"0").split(""),[i,a]);return M.createElement(Iy,{ref:s,...o},d.map((m,b)=>M.createElement(Fy,{digit:m,pixelSize:Py[c],key:b})))});e1.displayName="Counter";const um=le`
  display: flex;
  align-items: center;
  width: ${({fullWidth:a})=>a?"100%":"auto"};
  min-height: ${dt.md};
`,t1=X(il).attrs({"data-testid":"variant-default"})`
  ${um}
  background: ${({$disabled:a,theme:i})=>a?i.material:i.canvas};
`,l1=X.div.attrs({"data-testid":"variant-flat"})`
  ${Oa()}
  ${um}
  position: relative;
`,im=le`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:a})=>a.canvasText};
  ${({disabled:a,variant:i})=>i!=="flat"&&a&&Jt()}
`,a1=X.input`
  ${im}
  padding: 0 8px;
`,n1=X.textarea`
  ${im}
  padding: 8px;
  resize: none;
  ${({variant:a})=>zs(a)}
`,rm=g.forwardRef(({className:a,disabled:i=!1,fullWidth:c,onChange:o=Ca,shadow:s=!0,style:d,variant:m="default",...b},v)=>{const p=m==="flat"?l1:t1,S=g.useMemo(()=>{var E;return b.multiline?M.createElement(n1,{disabled:i,onChange:i?void 0:o,readOnly:i,ref:v,variant:m,...b}):M.createElement(a1,{disabled:i,onChange:i?void 0:o,readOnly:i,ref:v,type:(E=b.type)!==null&&E!==void 0?E:"text",variant:m,...b})},[i,o,b,v,m]);return M.createElement(p,{className:a,fullWidth:c,$disabled:i,shadow:s,style:d},S)});rm.displayName="TextInput";const u1=X.div`
  display: inline-flex;
  align-items: center;
`,vs=X(nl)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:a})=>a==="flat"?le`
          height: calc(50% - 1px);
        `:le`
          height: 50%;
        `}
`,i1=X.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:a})=>a==="flat"?le`
          height: calc(${dt.md} - 4px);
        `:le`
          height: ${dt.md};
          margin-left: 2px;
        `}
`,s0=X.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:a})=>a?le`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:i})=>i.materialText};
        `:le`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:i})=>i.materialText};
        `}
  ${vs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:a})=>a.materialTextDisabledShadow}
    );
    ${({invert:a})=>a?le`
            border-bottom-color: ${({theme:i})=>i.materialTextDisabled};
          `:le`
            border-top-color: ${({theme:i})=>i.materialTextDisabled};
          `}
  }
`,cm=g.forwardRef(({className:a,defaultValue:i,disabled:c=!1,max:o,min:s,onChange:d,readOnly:m,step:b=1,style:v,value:p,variant:S="default",width:E,...T},B)=>{const[O,j]=la({defaultValue:i,onChange:d,readOnly:m,value:p}),k=g.useCallback(I=>{const te=parseFloat(I.target.value);j(te)},[j]),R=g.useCallback(I=>{const te=Ta(parseFloat(((O??0)+I).toFixed(2)),s??null,o??null);j(te),d?.(te)},[o,s,d,j,O]),L=g.useCallback(()=>{O!==void 0&&d?.(O)},[d,O]),Q=g.useCallback(()=>{R(b)},[R,b]),P=g.useCallback(()=>{R(-b)},[R,b]),V=S==="flat"?"flat":"raised";return M.createElement(u1,{className:a,style:{...v,width:E!==void 0?ta(E):"auto"},...T},M.createElement(rm,{value:O,variant:S,onChange:k,disabled:c,type:"number",readOnly:m,ref:B,fullWidth:!0,onBlur:L}),M.createElement(i1,{variant:S},M.createElement(vs,{"data-testid":"increment",variant:V,disabled:c||m,onClick:Q},M.createElement(s0,{invert:!0})),M.createElement(vs,{"data-testid":"decrement",variant:V,disabled:c||m,onClick:P},M.createElement(s0,null))))});cm.displayName="NumberInput";function r1(){const a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(let c=0;c<10;c+=1)i+=a[Math.floor(Math.random()*a.length)];return i}const om=a=>g.useMemo(()=>r1(),[a]),sm=le`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,fm=le`
  background: ${({theme:a})=>a.hoverBackground};
  color: ${({theme:a})=>a.canvasTextInvert};
`,$s=X.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,c1=X.div`
  ${sm}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${$s}:focus & {
    ${fm}
    border: 2px dotted ${({theme:a})=>a.focusSecondary};
  }
`,dm=le`
  height: ${dt.md};
  display: inline-block;
  color: ${({$disabled:a=!1,theme:i})=>a?Jt():i.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:a})=>a?"default":"pointer"};
`,o1=X(il)`
  ${dm}
  background: ${({$disabled:a=!1,theme:i})=>a?i.material:i.canvas};
  &:focus {
    outline: 0;
  }
`,s1=X.div`
  ${Oa()}
  ${dm}
  background: ${({$disabled:a=!1,theme:i})=>a?i.flatLight:i.canvas};
`,f1=X.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${sm}
  cursor: pointer;
  &:disabled {
    ${Jt()};
    background: ${({theme:a})=>a.material};
    cursor: default;
  }
`,hm=X(Mr).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:a="default"})=>a==="flat"?le`
          height: 100%;
          margin-right: 0;
        `:le`
          height: 100%;
        `}
  ${({native:a=!1,variant:i="default"})=>a&&(i==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:a=!1,native:i=!1})=>a||i?"none":"auto"}
`,d1=X.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:a=!1,theme:i})=>a?i.materialTextDisabled:i.materialText};
  ${({$disabled:a=!1,theme:i})=>a&&`
    filter: drop-shadow(1px 1px 0px ${i.materialTextDisabledShadow});
    border-top-color: ${i.materialTextDisabled};
    `}
  ${hm}:active & {
    margin-top: 2px;
  }
`,h1=X.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:a})=>a.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Os};
  ${({variant:a="default"})=>a==="flat"?le`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:i})=>i.flatDark};
        `:le`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:i})=>i.borderDarkest};
        `}
  ${({variant:a="default"})=>zs(a)}
`,p1=X.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${dt.md} - 4px);
  line-height: calc(${dt.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:a})=>a.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:a})=>a?fm:""}
  user-select: none;
`,m1=[],pm=({className:a,defaultValue:i,disabled:c,native:o,onChange:s,options:d=m1,readOnly:m,style:b,value:v,variant:p,width:S})=>{var E;const T=g.useMemo(()=>d.filter(Boolean),[d]),[B,O]=la({defaultValue:i??((E=T?.[0])===null||E===void 0?void 0:E.value),onChange:s,readOnly:m,value:v}),j=!(c||m),k=g.useMemo(()=>({className:a,style:{...b,width:S}}),[a,b,S]),R=g.useMemo(()=>M.createElement(hm,{as:"div","data-testid":"select-button",$disabled:c,native:o,tabIndex:-1,variant:p==="flat"?"flat":"raised"},M.createElement(d1,{"data-testid":"select-icon",$disabled:c})),[c,o,p]),L=g.useMemo(()=>p==="flat"?s1:o1,[p]);return g.useMemo(()=>({isEnabled:j,options:T,value:B,setValue:O,wrapperProps:k,DropdownButton:R,Wrapper:L}),[R,L,j,T,O,B,k])},v1={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},g1=1e3,b1=({onBlur:a,onChange:i,onClose:c,onFocus:o,onKeyDown:s,onMouseDown:d,onOpen:m,open:b,options:v,readOnly:p,value:S,selectRef:E,setValue:T,wrapperRef:B})=>{const O=g.useRef(null),j=g.useRef([]),k=g.useRef(0),R=g.useRef(0),L=g.useRef(),Q=g.useRef("search"),P=g.useRef(""),V=g.useRef(),[I,te]=la({defaultValue:!1,onChange:m,onChangePropName:"onOpen",readOnly:p,value:b,valuePropName:"open"}),de=g.useMemo(()=>{const Z=v.findIndex(fe=>fe.value===S);return k.current=Ta(Z,0,null),v[Z]},[v,S]),[he,_e]=g.useState(v[0]),Oe=g.useCallback(Z=>{const fe=O.current,me=j.current[Z];if(!me||!fe){L.current=Z;return}L.current=void 0;const Te=fe.clientHeight,Ne=fe.scrollTop,Ke=fe.scrollTop+Te,Je=me.offsetTop,bt=me.offsetHeight,Ie=me.offsetTop+me.offsetHeight;Je<Ne&&fe.scrollTo(0,Je),Ie>Ke&&fe.scrollTo(0,Je-Te+bt),me.focus({preventScroll:!0})},[O]),ge=g.useCallback((Z,{scroll:fe}={})=>{var me;const Te=v.length-1;let Ne;switch(Z){case"first":{Ne=0;break}case"last":{Ne=Te;break}case"next":{Ne=Ta(R.current+1,0,Te);break}case"previous":{Ne=Ta(R.current-1,0,Te);break}case"selected":{Ne=Ta((me=k.current)!==null&&me!==void 0?me:0,0,Te);break}default:Ne=Z}R.current=Ne,_e(v[Ne]),fe&&Oe(Ne)},[R,v,Oe]),Qe=g.useCallback(({fromEvent:Z})=>{te(!0),ge("selected",{scroll:!0}),m?.({fromEvent:Z})},[ge,m,te]),ke=g.useCallback(()=>{Q.current="search",P.current="",clearTimeout(V.current)},[]),xe=g.useCallback(({focusSelect:Z,fromEvent:fe})=>{var me;c?.({fromEvent:fe}),te(!1),_e(v[0]),ke(),L.current=void 0,Z&&((me=E.current)===null||me===void 0||me.focus())},[ke,c,v,E,te]),N=g.useCallback(({fromEvent:Z})=>{I?xe({focusSelect:!1,fromEvent:Z}):Qe({fromEvent:Z})},[xe,Qe,I]),W=g.useCallback((Z,{fromEvent:fe})=>{k.current!==Z&&(k.current=Z,T(v[Z].value),i?.(v[Z],{fromEvent:fe}))},[i,v,T]),F=g.useCallback(({focusSelect:Z,fromEvent:fe})=>{W(R.current,{fromEvent:fe}),xe({focusSelect:Z,fromEvent:fe})},[xe,W]),ie=g.useCallback((Z,{fromEvent:fe,select:me})=>{var Te;switch(Q.current==="cycleFirstLetter"&&Z!==P.current&&(Q.current="search"),Z===P.current?Q.current="cycleFirstLetter":P.current+=Z,Q.current){case"search":{let Ne=v.findIndex(Ke=>{var Je;return((Je=Ke.label)===null||Je===void 0?void 0:Je.toLocaleUpperCase().indexOf(P.current))===0});Ne<0&&(Ne=v.findIndex(Ke=>{var Je;return((Je=Ke.label)===null||Je===void 0?void 0:Je.toLocaleUpperCase().indexOf(Z))===0}),P.current=Z),Ne>=0&&(me?W(Ne,{fromEvent:fe}):ge(Ne,{scroll:!0}));break}case"cycleFirstLetter":{const Ne=me?(Te=k.current)!==null&&Te!==void 0?Te:-1:R.current;let Ke=v.findIndex((Je,bt)=>{var Ie;return bt>Ne&&((Ie=Je.label)===null||Ie===void 0?void 0:Ie.toLocaleUpperCase().indexOf(Z))===0});Ke<0&&(Ke=v.findIndex(Je=>{var bt;return((bt=Je.label)===null||bt===void 0?void 0:bt.toLocaleUpperCase().indexOf(Z))===0})),Ke>=0&&(me?W(Ke,{fromEvent:fe}):ge(Ke,{scroll:!0}));break}}clearTimeout(V.current),V.current=setTimeout(()=>{Q.current==="search"&&(P.current="")},g1)},[ge,v,W]),x=g.useCallback(Z=>{var fe;Z.button===0&&(Z.preventDefault(),(fe=E.current)===null||fe===void 0||fe.focus(),N({fromEvent:Z}),d?.(Z))},[d,E,N]),Y=g.useCallback(Z=>{F({focusSelect:!0,fromEvent:Z})},[F]),J=g.useCallback(Z=>{const{altKey:fe,code:me,ctrlKey:Te,metaKey:Ne,shiftKey:Ke}=Z,{ARROW_DOWN:Je,ARROW_UP:bt,END:Ie,ENTER:cl,ESC:Gt,HOME:Na,SPACE:Ol,TAB:aa}=v1,Mn=fe||Te||Ne||Ke;if(!(me===aa&&(fe||Te||Ne)||me!==aa&&Mn))switch(me){case Je:{if(Z.preventDefault(),!I){Qe({fromEvent:Z});return}ge("next",{scroll:!0});break}case bt:{if(Z.preventDefault(),!I){Qe({fromEvent:Z});return}ge("previous",{scroll:!0});break}case Ie:{if(Z.preventDefault(),!I){Qe({fromEvent:Z});return}ge("last",{scroll:!0});break}case cl:{if(!I)return;Z.preventDefault(),F({focusSelect:!0,fromEvent:Z});break}case Gt:{if(!I)return;Z.preventDefault(),xe({focusSelect:!0,fromEvent:Z});break}case Na:{if(Z.preventDefault(),!I){Qe({fromEvent:Z});return}ge("first",{scroll:!0});break}case Ol:{Z.preventDefault(),I?F({focusSelect:!0,fromEvent:Z}):Qe({fromEvent:Z});break}case aa:{if(!I)return;Ke||Z.preventDefault(),F({focusSelect:!Ke,fromEvent:Z});break}default:!Mn&&me.match(/^Key/)&&(Z.preventDefault(),Z.stopPropagation(),ie(me.replace(/^Key/,""),{select:!I,fromEvent:Z}))}},[ge,xe,I,Qe,ie,F]),q=g.useCallback(Z=>{J(Z),s?.(Z)},[J,s]),K=g.useCallback(Z=>{ge(Z)},[ge]),ae=g.useCallback(Z=>{I||(ke(),a?.(Z))},[ke,a,I]),ee=g.useCallback(Z=>{ke(),o?.(Z)},[ke,o]),oe=g.useCallback(Z=>{O.current=Z,L.current!==void 0&&Oe(L.current)},[Oe]),pe=g.useCallback((Z,fe)=>{j.current[fe]=Z,L.current===fe&&Oe(L.current)},[Oe]);return g.useEffect(()=>{if(!I)return()=>{};const Z=fe=>{var me;const Te=fe.target;!((me=B.current)===null||me===void 0)&&me.contains(Te)||(fe.preventDefault(),xe({focusSelect:!1,fromEvent:fe}))};return document.addEventListener("mousedown",Z),()=>{document.removeEventListener("mousedown",Z)}},[xe,I,B]),g.useMemo(()=>({activeOption:he,handleActivateOptionIndex:K,handleBlur:ae,handleButtonKeyDown:q,handleDropdownKeyDown:J,handleFocus:ee,handleMouseDown:x,handleOptionClick:Y,handleSetDropdownRef:oe,handleSetOptionRef:pe,open:I,selectedOption:de}),[he,K,ae,q,ee,J,x,Y,oe,pe,I,de])},y1=g.forwardRef(({className:a,defaultValue:i,disabled:c,onChange:o,options:s,readOnly:d,style:m,value:b,variant:v,width:p,...S},E)=>{const{isEnabled:T,options:B,setValue:O,value:j,DropdownButton:k,Wrapper:R}=pm({defaultValue:i,disabled:c,native:!0,onChange:o,options:s,readOnly:d,value:b,variant:v}),L=g.useCallback(Q=>{const P=B.find(V=>V.value===Q.target.value);P&&(O(P.value),o?.(P,{fromEvent:Q}))},[o,B,O]);return M.createElement(R,{className:a,style:{...m,width:p}},M.createElement($s,null,M.createElement(f1,{...S,disabled:c,onChange:T?L:Ca,ref:E,value:j},B.map((Q,P)=>{var V;return M.createElement("option",{key:`${Q.value}-${P}`,value:Q.value},(V=Q.label)!==null&&V!==void 0?V:Q.value)})),k))});y1.displayName="SelectNative";function x1({activateOptionIndex:a,active:i,index:c,onClick:o,option:s,selected:d,setRef:m}){const b=g.useCallback(()=>{a(c)},[a,c]),v=g.useCallback(S=>{m(S,c)},[c,m]),p=om();return M.createElement(p1,{active:i,"aria-selected":d?"true":void 0,"data-value":s.value,id:p,onClick:o,onMouseEnter:b,ref:v,role:"option",tabIndex:0},s.label)}function S1({"aria-label":a,"aria-labelledby":i,className:c,defaultValue:o,disabled:s=!1,formatDisplay:d,inputProps:m,labelId:b,menuMaxHeight:v,name:p,onBlur:S,onChange:E,onClose:T,onFocus:B,onKeyDown:O,onMouseDown:j,onOpen:k,open:R,options:L,readOnly:Q,shadow:P=!0,style:V,variant:I="default",value:te,width:de="auto",...he},_e){const{isEnabled:Oe,options:ge,setValue:Qe,value:ke,wrapperProps:xe,DropdownButton:N,Wrapper:W}=pm({className:c,defaultValue:o,disabled:s,native:!1,onChange:E,options:L,style:V,readOnly:Q,value:te,variant:I,width:de}),F=g.useRef(null),ie=g.useRef(null),x=g.useRef(null),{activeOption:Y,handleActivateOptionIndex:J,handleBlur:q,handleButtonKeyDown:K,handleDropdownKeyDown:ae,handleFocus:ee,handleMouseDown:oe,handleOptionClick:pe,handleSetDropdownRef:Z,handleSetOptionRef:fe,open:me,selectedOption:Te}=b1({onBlur:S,onChange:E,onClose:T,onFocus:B,onKeyDown:O,onMouseDown:j,onOpen:k,open:R,options:ge,value:ke,selectRef:ie,setValue:Qe,wrapperRef:x});g.useImperativeHandle(_e,()=>({focus:cl=>{var Gt;(Gt=ie.current)===null||Gt===void 0||Gt.focus(cl)},node:F.current,value:String(ke)}),[ke]);const Ne=g.useMemo(()=>Te?typeof d=="function"?d(Te):Te.label:"",[d,Te]),Ke=Oe?1:void 0,Je=g.useMemo(()=>v?{overflow:"auto",maxHeight:v}:void 0,[v]),bt=om(),Ie=g.useMemo(()=>ge.map((cl,Gt)=>{const Na=`${ke}-${Gt}`,Ol=cl===Y,aa=cl===Te;return M.createElement(x1,{activateOptionIndex:J,active:Ol,index:Gt,key:Na,onClick:pe,option:cl,selected:aa,setRef:fe})}),[Y,J,pe,fe,ge,Te,ke]);return M.createElement(W,{...xe,$disabled:s,ref:x,shadow:P,style:{...V,width:de}},M.createElement("input",{name:p,ref:F,type:"hidden",value:String(ke),...m}),M.createElement($s,{"aria-disabled":s,"aria-expanded":me,"aria-haspopup":"listbox","aria-label":a,"aria-labelledby":i??b,"aria-owns":Oe&&me?bt:void 0,onBlur:q,onFocus:ee,onKeyDown:K,onMouseDown:Oe?oe:j,ref:ie,role:"button",tabIndex:Ke,...he},M.createElement(c1,null,Ne),N),Oe&&me&&M.createElement(h1,{id:bt,onKeyDown:ae,ref:Z,role:"listbox",style:Je,tabIndex:0,variant:I},Ie))}const mm=g.forwardRef(S1);mm.displayName="Select";const A1=X.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${a=>a.noPadding?"0":"4px"};
`,Tr=g.forwardRef(function({children:i,noPadding:c=!1,...o},s){return M.createElement(A1,{noPadding:c,ref:s,...o},i)});Tr.displayName="Toolbar";const E1=X.div`
  padding: 16px;
`,Bs=g.forwardRef(function({children:i,...c},o){return M.createElement(E1,{ref:o,...c},i)});Bs.displayName="WindowContent";const T1=X.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:a})=>a.material};
  ${({active:a})=>a===!1?le`
          background: ${({theme:i})=>i.headerNotActiveBackground};
          color: ${({theme:i})=>i.headerNotActiveText};
        `:le`
          background: ${({theme:i})=>i.headerBackground};
          color: ${({theme:i})=>i.headerText};
        `}

  ${Mr} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Us=g.forwardRef(function({active:i=!0,children:c,...o},s){return M.createElement(T1,{active:i,ref:s,...o},c)});Us.displayName="WindowHeader";const w1=X.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ze({style:"window"})}
  ${Wt()}
`,R1=X.span`
  ${({theme:a})=>le`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${a.borderLightest} 16.67%,
      ${a.material} 16.67%,
      ${a.material} 33.33%,
      ${a.borderDark} 33.33%,
      ${a.borderDark} 50%,
      ${a.borderLightest} 50%,
      ${a.borderLightest} 66.67%,
      ${a.material} 66.67%,
      ${a.material} 83.33%,
      ${a.borderDark} 83.33%,
      ${a.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,ks=g.forwardRef(({children:a,resizable:i=!1,resizeRef:c,shadow:o=!0,...s},d)=>M.createElement(w1,{ref:d,shadow:o,...s},a,i&&M.createElement(R1,{"data-testid":"resizeHandle",ref:c})));ks.displayName="Window";const D1=X(tm)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:a})=>a.canvas};
`,_1=X.div`
  display: flex;
  background: ${({theme:a})=>a.materialDark};
  color: #dfe0e3;
`,O1=X.div`
  display: flex;
  flex-wrap: wrap;
`,Tl=X.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,C1=X.span`
  cursor: pointer;

  background: ${({active:a,theme:i})=>a?i.hoverBackground:"transparent"};
  color: ${({active:a,theme:i})=>a?i.canvasTextInvert:i.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:a,active:i})=>i?"none":a.materialDark};
  }
`,z1=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function M1(a,i){return new Date(a,i+1,0).getDate()}function N1(a,i,c){return new Date(a,i,c).getDay()}function $1(a){const i=new Date(Date.parse(a)),c=i.getUTCDate(),o=i.getUTCMonth(),s=i.getUTCFullYear();return{day:c,month:o,year:s}}const B1=g.forwardRef(({className:a,date:i=new Date().toISOString(),onAccept:c,onCancel:o,shadow:s=!0},d)=>{const[m,b]=g.useState(()=>$1(i)),{year:v,month:p,day:S}=m,E=g.useCallback(({value:k})=>{b(R=>({...R,month:k}))},[]),T=g.useCallback(k=>{b(R=>({...R,year:k}))},[]),B=g.useCallback(k=>{b(R=>({...R,day:k}))},[]),O=g.useCallback(()=>{const k=[m.year,m.month+1,m.day].map(R=>String(R).padStart(2,"0")).join("-");c?.(k)},[m.day,m.month,m.year,c]),j=g.useMemo(()=>{const k=Array.from({length:42}),R=N1(v,p,1);let L=S;const Q=M1(v,p);return L=L<Q?L:Q,k.forEach((P,V)=>{if(V>=R&&V<Q+R){const I=V-R+1;k[V]=M.createElement(Tl,{key:V,onClick:()=>{B(I)}},M.createElement(C1,{active:I===L},I))}else k[V]=M.createElement(Tl,{key:V})}),k},[S,B,p,v]);return M.createElement(ks,{className:a,ref:d,shadow:s,style:{margin:20}},M.createElement(Us,null,M.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),M.createElement(Bs,null,M.createElement(Tr,{noPadding:!0,style:{justifyContent:"space-between"}},M.createElement(mm,{options:z1,value:p,onChange:E,width:128,menuMaxHeight:200}),M.createElement(cm,{value:v,onChange:T,width:100})),M.createElement(D1,null,M.createElement(_1,null,M.createElement(Tl,null,"S"),M.createElement(Tl,null,"M"),M.createElement(Tl,null,"T"),M.createElement(Tl,null,"W"),M.createElement(Tl,null,"T"),M.createElement(Tl,null,"F"),M.createElement(Tl,null,"S")),M.createElement(O1,null,j)),M.createElement(Tr,{noPadding:!0,style:{justifyContent:"space-between"}},M.createElement(nl,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),M.createElement(nl,{fullWidth:!0,onClick:c?O:void 0,disabled:!c},"OK"))))});B1.displayName="DatePicker";const U1=a=>{switch(a){case"status":case"well":return le`
        ${Ze({style:"status"})}
      `;case"window":case"outside":return le`
        ${Ze({style:"window"})}
      `;case"field":return le`
        ${Ze({style:"field"})}
      `;default:return le`
        ${Ze()}
      `}},k1=X.div`
  position: relative;
  font-size: 1rem;
  ${({variant:a})=>U1(a)}
  ${({variant:a})=>Wt(a==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,hr=g.forwardRef(({children:a,shadow:i=!1,variant:c="window",...o},s)=>M.createElement(k1,{ref:s,shadow:i,variant:c,...o},a));hr.displayName="Frame";const j1=X.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:a,variant:i})=>i==="flat"?a.flatDark:a.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:a})=>a.materialText};
  ${({variant:a})=>a!=="flat"&&le`
      box-shadow: -1px -1px 0 1px ${({theme:i})=>i.borderDark},
        inset -1px -1px 0 1px ${({theme:i})=>i.borderDark};
    `}
  ${a=>a.$disabled&&Jt()}
`,H1=X.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:a,variant:i})=>i==="flat"?a.canvas:a.material};
`,L1=g.forwardRef(({label:a,disabled:i=!1,variant:c="default",children:o,...s},d)=>M.createElement(j1,{"aria-disabled":i,$disabled:i,variant:c,ref:d,...s},a&&M.createElement(H1,{variant:c},a),o));L1.displayName="GroupBox";const Q1=X.div`
  ${({theme:a,size:i="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${ta(i)};
  width: 5px;
  border-top: 2px solid ${a.borderLightest};
  border-left: 2px solid ${a.borderLightest};
  border-bottom: 2px solid ${a.borderDark};
  border-right: 2px solid ${a.borderDark};
  background: ${a.material};
`}
`;Q1.displayName="Handle";const Y1="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",q1=X.div`
  display: inline-block;
  height: ${({size:a})=>ta(a)};
  width: ${({size:a})=>ta(a)};
`,G1=X.span`
  display: block;
  background: ${Y1};
  background-size: cover;
  width: 100%;
  height: 100%;
`,V1=g.forwardRef(({size:a=30,...i},c)=>M.createElement(q1,{size:a,ref:c,...i},M.createElement(G1,null)));V1.displayName="Hourglass";const X1=X.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Z1=X.div`
  position: relative;
`,K1=X.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:a})=>a.material};
  border-top: 4px solid ${({theme:a})=>a.borderLightest};
  border-left: 4px solid ${({theme:a})=>a.borderLightest};
  border-bottom: 4px solid ${({theme:a})=>a.borderDark};
  border-right: 4px solid ${({theme:a})=>a.borderDark};

  outline: 1px dotted ${({theme:a})=>a.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:a})=>a.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:a})=>a.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,J1=X(il).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,W1=X.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:a})=>a.material};
  border-left: 2px solid ${({theme:a})=>a.borderLightest};
  border-bottom: 2px solid ${({theme:a})=>a.borderDarkest};
  border-right: 2px solid ${({theme:a})=>a.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:a})=>a.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:a})=>a.material};
    border-left: 2px solid ${({theme:a})=>a.borderLightest};
    border-right: 2px solid ${({theme:a})=>a.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:a})=>a.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:a})=>a.material};
    border: 2px solid ${({theme:a})=>a.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:a})=>a.borderLightest},
      1px 1px 0 1px ${({theme:a})=>a.borderDarkest};
  }
`,F1=g.forwardRef(({backgroundStyles:a,children:i,...c},o)=>M.createElement(X1,{ref:o,...c},M.createElement(Z1,null,M.createElement(K1,null,M.createElement(J1,{style:a},i)),M.createElement(W1,null))));F1.displayName="Monitor";const I1=X.div`
  display: inline-block;
  height: ${dt.md};
  width: 100%;
`,P1=X(il)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,vm=le`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,ex=X.div`
  position: relative;
  top: 4px;
  ${vm}
  background: ${({theme:a})=>a.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:a})=>a.materialText};
`,tx=X.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${vm}
  color: ${({theme:a})=>a.materialTextInvert};
  background: ${({theme:a})=>a.progress};
  clip-path: polygon(
    0 0,
    ${({value:a=0})=>a}% 0,
    ${({value:a=0})=>a}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,lx=X.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,gm=17,ax=X.span`
  display: inline-block;
  width: ${gm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:a})=>a.progress};
  border-color: ${({theme:a})=>a.material};
  border-width: 0px 1px;
  border-style: solid;
`,nx=g.forwardRef(({hideValue:a=!1,shadow:i=!0,value:c,variant:o="default",...s},d)=>{const m=a?null:`${c}%`,b=g.useRef(null),[v,p]=g.useState([]),S=g.useCallback(()=>{if(!b.current||c===void 0)return;const E=b.current.getBoundingClientRect().width,T=Math.round(c/100*E/gm);p(Array.from({length:T}))},[c]);return g.useEffect(()=>(S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)),[S]),M.createElement(I1,{"aria-valuenow":c!==void 0?Math.round(c):void 0,ref:d,role:"progressbar",variant:o,...s},M.createElement(P1,{variant:o,shadow:i},o==="default"?M.createElement(M.Fragment,null,M.createElement(ex,{"data-testid":"defaultProgress1"},m),M.createElement(tx,{"data-testid":"defaultProgress2",value:c},m)):M.createElement(lx,{ref:b,"data-testid":"tileProgress"},v.map((E,T)=>M.createElement(ax,{key:T})))))});nx.displayName="ProgressBar";const bm=le`
  width: ${ul}px;
  height: ${ul}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ux=X(il)`
  ${bm}
  background: ${({$disabled:a,theme:i})=>a?i.material:i.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,ix=X.div`
  ${Oa()}
  ${bm}
  outline: none;
  background: ${({$disabled:a,theme:i})=>a?i.flatLight:i.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:a})=>a.flatDark};
    border-radius: 50%;
  }
`,rx=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${a=>a.$disabled?a.theme.checkmarkDisabled:a.theme.checkmark};
`,cx={flat:ix,default:ux},ox=g.forwardRef(({checked:a,className:i="",disabled:c=!1,label:o="",onChange:s,style:d={},variant:m="default",...b},v)=>{const p=cx[m];return M.createElement(Ms,{$disabled:c,className:i,style:d},M.createElement(p,{$disabled:c,role:"presentation"},a&&M.createElement(rx,{$disabled:c,variant:m})),M.createElement(Er,{disabled:c,onChange:c?void 0:s,readOnly:c,type:"radio",checked:a,ref:v,...b}),o&&M.createElement(Ns,null,o))});ox.displayName="Radio";const sx=typeof window<"u"?g.useLayoutEffect:g.useEffect;function Aa(a){const i=g.useRef(a);return sx(()=>{i.current=a}),g.useCallback((...c)=>(0,i.current)(...c),[])}function f0(a,i){typeof a=="function"?a(i):a&&(a.current=i)}function d0(a,i){return g.useMemo(()=>a==null&&i==null?null:c=>{f0(a,c),f0(i,c)},[a,i])}var fx=D0();let Nr=!0,gs=!1,h0;const dx={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function hx(a){if("type"in a){const{type:i,tagName:c}=a;if(c==="INPUT"&&dx[i]&&!a.readOnly||c==="TEXTAREA"&&!a.readOnly)return!0}return!!("isContentEditable"in a&&a.isContentEditable)}function px(a){a.metaKey||a.altKey||a.ctrlKey||(Nr=!0)}function ns(){Nr=!1}function mx(){this.visibilityState==="hidden"&&gs&&(Nr=!0)}function vx(a){a.addEventListener("keydown",px,!0),a.addEventListener("mousedown",ns,!0),a.addEventListener("pointerdown",ns,!0),a.addEventListener("touchstart",ns,!0),a.addEventListener("visibilitychange",mx,!0)}function gx(a){const{target:i}=a;try{return i.matches(":focus-visible")}catch{}return Nr||hx(i)}function bx(){gs=!0,window.clearTimeout(h0),h0=window.setTimeout(()=>{gs=!1},100)}function yx(){const a=g.useCallback(i=>{const c=fx.findDOMNode(i);c!=null&&vx(c.ownerDocument)},[]);return{isFocusVisible:gx,onBlurVisible:bx,ref:a}}function xx(a,i,c){return(c-i)*a+i}function ur(a,i){if(i!==void 0&&"changedTouches"in a){for(let c=0;c<a.changedTouches.length;c+=1){const o=a.changedTouches[c];if(o.identifier===i)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in a?{x:a.clientX,y:a.clientY}:!1}function ir(a){return a&&a.ownerDocument||document}function Sx(a,i){var c;const{index:o}=(c=a.reduce((s,d,m)=>{const b=Math.abs(i-d);return s===null||b<s.distance||b===s.distance?{distance:b,index:m}:s},null))!==null&&c!==void 0?c:{};return o??-1}const Ax=X.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:a})=>a?"41px":"39px"};
    ${({isFocused:a,theme:i})=>a&&`
        outline: 2px dotted ${i.materialText};
        `}
  }

  ${({orientation:a,size:i})=>a==="vertical"?le`
          height: ${i};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `:le`
          width: ${i};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:a})=>a?"none":"auto"};
`,ym=()=>le`
  position: absolute;
  ${({orientation:a})=>a==="vertical"?le`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:le`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Ex=X(il)`
  ${ym()}
`,Tx=X(il)`
  ${ym()}

  border-left-color: ${({theme:a})=>a.flatLight};
  border-top-color: ${({theme:a})=>a.flatLight};
  border-right-color: ${({theme:a})=>a.canvas};
  border-bottom-color: ${({theme:a})=>a.canvas};
  &:before {
    border-left-color: ${({theme:a})=>a.flatDark};
    border-top-color: ${({theme:a})=>a.flatDark};
    border-right-color: ${({theme:a})=>a.flatLight};
    border-bottom-color: ${({theme:a})=>a.flatLight};
  }
`,wx=X.span`
  position: relative;
  ${({orientation:a})=>a==="vertical"?le`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:le`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:a})=>a==="flat"?le`
          ${Oa()}
          outline: 2px solid ${({theme:i})=>i.flatDark};
          background: ${({theme:i})=>i.flatLight};
        `:le`
          ${Wt()}
          ${Ze()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:a,theme:i})=>a&&Hu({mainColor:i.material,secondaryColor:i.borderLightest})}
`,Tn=6,Rx=X.span`
  display: inline-block;
  position: absolute;

  ${({orientation:a})=>a==="vertical"?le`
          right: ${-Tn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Tn}px;
          border-bottom: 2px solid ${({theme:i})=>i.materialText};
        `:le`
          bottom: ${-Tn}px;
          height: ${Tn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:i})=>i.materialText};
          border-right: 1px solid ${({theme:i})=>i.materialText};
        `}

  color:  ${({theme:a})=>a.materialText};
  ${({$disabled:a,theme:i})=>a&&le`
      ${Jt()}
      box-shadow: 1px 1px 0px ${i.materialTextDisabledShadow};
      border-color: ${i.materialTextDisabled};
    `}
`,Dx=X.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:a})=>a==="vertical"?le`
          transform: translate(${Tn+2}px, ${Tn+1}px);
        `:le`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,_x=g.forwardRef(({defaultValue:a,disabled:i=!1,marks:c=!1,max:o=100,min:s=0,name:d,onChange:m,onChangeCommitted:b,onMouseDown:v,orientation:p="horizontal",size:S="100%",step:E=1,value:T,variant:B="default",...O},j)=>{const k=B==="flat"?Tx:Ex,R=p==="vertical",[L=s,Q]=la({defaultValue:a,onChange:m??b,value:T}),{isFocusVisible:P,onBlurVisible:V,ref:I}=yx(),[te,de]=g.useState(!1),he=g.useRef(),_e=g.useRef(null),Oe=d0(I,he),ge=d0(j,Oe),Qe=Aa(q=>{P(q)&&de(!0)}),ke=Aa(()=>{te!==!1&&(de(!1),V())}),xe=g.useRef(),N=g.useMemo(()=>c===!0&&Number.isFinite(E)?[...Array(Math.round((o-s)/E)+1)].map((q,K)=>({label:void 0,value:s+E*K})):Array.isArray(c)?c:[],[c,o,s,E]),W=Aa(q=>{const K=(o-s)/10,ae=N.map(pe=>pe.value),ee=ae.indexOf(L);let oe=0;switch(q.key){case"Home":oe=s;break;case"End":oe=o;break;case"PageUp":E&&(oe=L+K);break;case"PageDown":E&&(oe=L-K);break;case"ArrowRight":case"ArrowUp":E?oe=L+E:oe=ae[ee+1]||ae[ae.length-1];break;case"ArrowLeft":case"ArrowDown":E?oe=L-E:oe=ae[ee-1]||ae[0];break;default:return}q.preventDefault(),E&&(oe=c0(oe,E,s)),oe=Ta(oe,s,o),Q(oe),de(!0),m?.(oe),b?.(oe)}),F=g.useCallback(q=>{if(!he.current)return 0;const K=he.current.getBoundingClientRect();let ae;R?ae=(K.bottom-q.y)/K.height:ae=(q.x-K.left)/K.width;let ee;if(ee=xx(ae,s,o),E)ee=c0(ee,E,s);else{const oe=N.map(Z=>Z.value),pe=Sx(oe,ee);ee=oe[pe]}return ee=Ta(ee,s,o),ee},[N,o,s,E,R]),ie=Aa(q=>{var K;const ae=ur(q,xe.current);if(!ae)return;const ee=F(ae);(K=_e.current)===null||K===void 0||K.focus(),Q(ee),de(!0),m?.(ee)}),x=Aa(q=>{const K=ur(q,xe.current);if(!K)return;const ae=F(K);b?.(ae),xe.current=void 0;const ee=ir(he.current);ee.removeEventListener("mousemove",ie),ee.removeEventListener("mouseup",x),ee.removeEventListener("touchmove",ie),ee.removeEventListener("touchend",x)}),Y=Aa(q=>{var K;v?.(q),q.preventDefault(),(K=_e.current)===null||K===void 0||K.focus(),de(!0);const ae=ur(q,xe.current);if(ae){const oe=F(ae);Q(oe),m?.(oe)}const ee=ir(he.current);ee.addEventListener("mousemove",ie),ee.addEventListener("mouseup",x)}),J=Aa(q=>{var K;q.preventDefault();const ae=q.changedTouches[0];ae!=null&&(xe.current=ae.identifier),(K=_e.current)===null||K===void 0||K.focus(),de(!0);const ee=ur(q,xe.current);if(ee){const pe=F(ee);Q(pe),m?.(pe)}const oe=ir(he.current);oe.addEventListener("touchmove",ie),oe.addEventListener("touchend",x)});return g.useEffect(()=>{const{current:q}=he;q?.addEventListener("touchstart",J);const K=ir(q);return()=>{q?.removeEventListener("touchstart",J),K.removeEventListener("mousemove",ie),K.removeEventListener("mouseup",x),K.removeEventListener("touchmove",ie),K.removeEventListener("touchend",x)}},[x,ie,J]),M.createElement(Ax,{$disabled:i,hasMarks:!!N.length,isFocused:te,onMouseDown:Y,orientation:p,ref:ge,size:ta(S),...O},M.createElement("input",{disabled:i,name:d,type:"hidden",value:L??0}),N&&N.map(q=>M.createElement(Rx,{$disabled:i,"data-testid":"tick",key:q.value/(o-s)*100,orientation:p,style:{[R?"bottom":"left"]:`${(q.value-s)/(o-s)*100}%`}},q.label&&M.createElement(Dx,{"aria-hidden":!0,"data-testid":"mark",orientation:p},q.label))),M.createElement(k,{orientation:p,variant:B}),M.createElement(wx,{$disabled:i,"aria-disabled":i?!0:void 0,"aria-orientation":p,"aria-valuemax":o,"aria-valuemin":s,"aria-valuenow":L,onBlur:ke,onFocus:Qe,onKeyDown:W,orientation:p,ref:_e,role:"slider",style:{[R?"bottom":"left"]:`${(R?-100:0)+100*(L-s)/(o-s)}%`},tabIndex:i?void 0:0,variant:B}))});_x.displayName="Slider";const Ox=X.tbody`
  background: ${({theme:a})=>a.canvas};
  display: table-row-group;
  box-shadow: ${Cs};
  overflow-y: auto;
`,Cx=g.forwardRef(function({children:i,...c},o){return M.createElement(Ox,{ref:o,...c},i)});Cx.displayName="TableBody";const zx=X.td`
  padding: 0 8px;
`,Mx=g.forwardRef(function({children:i,...c},o){return M.createElement(zx,{ref:o,...c},i)});Mx.displayName="TableDataCell";const Nx=X.thead`
  display: table-header-group;
`,$x=g.forwardRef(function({children:i,...c},o){return M.createElement(Nx,{ref:o,...c},i)});$x.displayName="TableHead";const Bx=X.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:a})=>a.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ze()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:a})=>!a&&le`
      &:active {
        &:before {
          ${Ze({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:a})=>a.materialText};
  ${({$disabled:a})=>a&&Jt()}
  &:hover {
    color: ${({theme:a})=>a.materialText};
    ${({$disabled:a})=>a&&Jt()}
  }
`,Ux=g.forwardRef(function({disabled:i=!1,children:c,onClick:o,onTouchStart:s=Ca,sort:d,...m},b){const v=d==="asc"?"ascending":d==="desc"?"descending":void 0;return M.createElement(Bx,{$disabled:i,"aria-disabled":i,"aria-sort":v,onClick:i?void 0:o,onTouchStart:i?void 0:s,ref:b,...m},M.createElement("div",null,c))});Ux.displayName="TableHeadCell";const kx=X.tr`
  color: inherit;
  display: table-row;
  height: calc(${dt.md} - 2px);
  line-height: calc(${dt.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:a})=>a.canvasText};
  &:hover {
    background: ${({theme:a})=>a.hoverBackground};
    color: ${({theme:a})=>a.canvasTextInvert};
  }
`,jx=g.forwardRef(function({children:i,...c},o){return M.createElement(kx,{ref:o,...c},i)});jx.displayName="TableRow";const Hx=X.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Lx=X(il)`
  &:before {
    box-shadow: none;
  }
`,Qx=g.forwardRef(({children:a,...i},c)=>M.createElement(Lx,null,M.createElement(Hx,{ref:c,...i},a)));Qx.displayName="Table";const Yx=X.button`
  ${Wt()}
  ${Ze()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${dt.md};
  line-height: ${dt.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:a})=>a.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${On}
    outline-offset: -6px;
  }
  ${a=>a.selected&&`
    z-index: 1;
    height: calc(${dt.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:a})=>a.material};
    bottom: -4px;
    left: 2px;
  }
`,qx=g.forwardRef(({value:a,onClick:i,selected:c=!1,children:o,...s},d)=>M.createElement(Yx,{"aria-selected":c,selected:c,onClick:m=>i?.(a,m),ref:d,role:"tab",...s},o));qx.displayName="Tab";const Gx=X.div`
  ${Wt()}
  ${Ze()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Vx=g.forwardRef(({children:a,...i},c)=>M.createElement(Gx,{ref:c,...i},a));Vx.displayName="TabBody";const Xx=X.div`
  position: relative;
  ${({isMultiRow:a,theme:i})=>a&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${i.borderDark};
  }
  `}
`,Zx=X.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:a})=>a.borderDarkest};
    border-left: 2px solid ${({theme:a})=>a.borderLightest};
  }
`;function Kx(a,i){const c=[];for(let o=i;o>0;o-=1)c.push(a.splice(0,Math.ceil(a.length/o)));return c}const Jx=g.forwardRef(({value:a,onChange:i=Ca,children:c,rows:o=1,...s},d)=>{const m=g.useMemo(()=>{var b;const v=(b=M.Children.map(c,E=>{if(!M.isValidElement(E))return null;const T={selected:E.props.value===a,onClick:i};return M.cloneElement(E,T)}))!==null&&b!==void 0?b:[],p=Kx(v,o).map((E,T)=>({key:T,tabs:E})),S=p.findIndex(E=>E.tabs.some(T=>T.props.selected));return p.push(p.splice(S,1)[0]),p},[c,i,o,a]);return M.createElement(Xx,{...s,isMultiRow:o>1,role:"tablist",ref:d},m.map(b=>M.createElement(Zx,{key:b.key},b.tabs)))});Jx.displayName="Tabs";const Wx=["blur","focus"],Fx=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function p0(a){return"nativeEvent"in a&&Wx.includes(a.type)}function m0(a){return"nativeEvent"in a&&Fx.includes(a.type)}const Ix={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Px=X.span`
  position: absolute;

  z-index: 1;
  display: ${a=>a.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:a})=>a.borderDarkest};
  background: ${({theme:a})=>a.tooltip};
  box-shadow: ${Os};
  text-align: center;
  font-size: 1rem;
  ${a=>Ix[a.position]}
`,eS=X.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,tS=g.forwardRef(({className:a,children:i,disableFocusListener:c=!1,disableMouseListener:o=!1,enterDelay:s=1e3,leaveDelay:d=0,onBlur:m,onClose:b,onFocus:v,onMouseEnter:p,onMouseLeave:S,onOpen:E,style:T,text:B,position:O="top",...j},k)=>{const[R,L]=g.useState(!1),[Q,P]=g.useState(),[V,I]=g.useState(),te=!c,de=!o,he=F=>{window.clearTimeout(Q),window.clearTimeout(V);const ie=window.setTimeout(()=>{L(!0),E?.(F)},s);P(ie)},_e=F=>{F.persist(),p0(F)?v?.(F):m0(F)&&p?.(F),he(F)},Oe=F=>{window.clearTimeout(Q),window.clearTimeout(V);const ie=window.setTimeout(()=>{L(!1),b?.(F)},d);I(ie)},ge=F=>{F.persist(),p0(F)?m?.(F):m0(F)&&S?.(F),Oe(F)},Qe=te?ge:void 0,ke=te?_e:void 0,xe=de?_e:void 0,N=de?ge:void 0,W=te?0:void 0;return M.createElement(eS,{"data-testid":"tooltip-wrapper",onBlur:Qe,onFocus:ke,onMouseEnter:xe,onMouseLeave:N,tabIndex:W},M.createElement(Px,{className:a,"data-testid":"tooltip",position:O,ref:k,show:R,style:T,...j},B),i)});tS.displayName="Tooltip";const bs=X(Ns)`
  white-space: nowrap;
`,xm=le`
  :focus {
    outline: none;
  }

  ${({$disabled:a})=>a?"cursor: default;":le`
          cursor: pointer;

          :focus {
            ${bs} {
              background: ${({theme:i})=>i.hoverBackground};
              color: ${({theme:i})=>i.materialTextInvert};
              outline: 2px dotted ${({theme:i})=>i.focusSecondary};
            }
          }
        `}
`,lS=X.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:a})=>a&&le`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:i})=>i.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:a})=>a.borderDark};
      font-size: 12px;
    }
  }
`,aS=X.li`
  position: relative;
  padding-left: ${({hasItems:a})=>a?"0":"13px"};

  ${({isRootLevel:a})=>a?le`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `:le`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:a})=>a.borderDark};
    }
  }
`,nS=X.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,uS=X.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:a})=>a.materialText};
  user-select: none;
  padding-left: 18px;
  ${xm};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,v0=X(Ms)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${xm};
`,iS=X.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function g0(a,i){return a.includes(i)?a.filter(c=>c!==i):[...a,i]}function b0(a){a.preventDefault()}function Sm({className:a,disabled:i,expanded:c,innerRef:o,level:s,select:d,selected:m,style:b,tree:v=[]}){const p=s===0,S=g.useCallback(E=>{var T,B;const O=!!(E.items&&E.items.length>0),j=c.includes(E.id),k=(T=i||E.disabled)!==null&&T!==void 0?T:!1,R=k?b0:V=>d(V,E),L=k?b0:V=>d(V,E),Q=m===E.id,P=M.createElement(iS,{"aria-hidden":!0},E.icon);return M.createElement(aS,{key:E.label,isRootLevel:p,role:"treeitem","aria-expanded":j,"aria-selected":Q,hasItems:O},O?M.createElement(nS,{open:j},M.createElement(uS,{onClick:R,$disabled:k},M.createElement(v0,{$disabled:k},P,M.createElement(bs,null,E.label))),j&&M.createElement(Sm,{className:a,disabled:k,expanded:c,level:s+1,select:d,selected:m,style:b,tree:(B=E.items)!==null&&B!==void 0?B:[]})):M.createElement(v0,{as:"button",$disabled:k,onClick:L},P,M.createElement(bs,null,E.label)))},[a,i,c,p,s,d,m,b]);return M.createElement(lS,{className:p?a:void 0,style:p?b:void 0,ref:p?o:void 0,role:p?"tree":"group",isRootLevel:p},v.map(S))}function rS({className:a,defaultExpanded:i=[],defaultSelected:c,disabled:o=!1,expanded:s,onNodeSelect:d,onNodeToggle:m,selected:b,style:v,tree:p=[]},S){const[E,T]=la({defaultValue:i,onChange:m,onChangePropName:"onNodeToggle",value:s,valuePropName:"expanded"}),[B,O]=la({defaultValue:c,onChange:d,onChangePropName:"onNodeSelect",value:b,valuePropName:"selected"}),j=g.useCallback((L,Q)=>{if(m){const P=g0(E,Q);m(L,P)}T(P=>g0(P,Q))},[E,m,T]),k=g.useCallback((L,Q)=>{O(Q),d&&d(L,Q)},[d,O]),R=g.useCallback((L,Q)=>{L.preventDefault(),k(L,Q.id),Q.items&&Q.items.length&&j(L,Q.id)},[k,j]);return M.createElement(Sm,{className:a,disabled:o,expanded:E,level:0,innerRef:S,select:R,selected:B,style:v,tree:p})}const cS=g.forwardRef(rS);cS.displayName="TreeView";var us,y0;function oS(){if(y0)return us;y0=1;var a={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return us=a,us}var sS=oS();const Am=R0(sS),Mu=({videoUrl:a,thumbnailSrc:i,altText:c="YouTube Thumbnail",statusText:o="This is the default status bar text.",children:s})=>$.jsx(I0,{theme:Am,children:$.jsxs("div",{className:"flex justify-center items-center w-[900px] gap-4",children:[$.jsx(hr,{variant:"outside",shadow:!0,className:"p-4 w-[450px] flex",children:$.jsxs("div",{className:"w-[400px]",children:[$.jsx(hr,{variant:"field",className:"h-[300px] w-full overflow-hidden",children:$.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"block w-full h-full",children:$.jsx("img",{src:i,alt:c,className:"w-full h-full object-cover"})})}),$.jsx(hr,{variant:"well",className:"mt-2 px-2 py-[0.1rem] w-full text-sm",children:o})]})}),$.jsx("div",{className:"flex-1 bg-[#C4C4C4] p-4 h-[250px]",children:s})]})}),fS=({text:a,speed:i=100,onFinish:c,className:o=""})=>{const[s,d]=g.useState([]),[m,b]=g.useState([]),[v,p]=g.useState(0);return g.useEffect(()=>{if(!a)return;const S=a.split(`
`);d(S),b([]),p(0)},[a]),g.useEffect(()=>{if(s.length===0)return;const E=setTimeout(()=>{v<s.length?(b(T=>[...T,s[v]]),p(T=>T+1)):c&&c()},i);return()=>clearTimeout(E)},[s,v,i]),$.jsx("pre",{className:`font-mono text-sm leading-[1.2em] whitespace-pre overflow-hidden ${o}`,children:m.map((S,E)=>$.jsx("div",{children:S},E))})},dS=`
               ,---------------------------,                                                                                  
               |  /---------------------\\  |                                                                                  
               | |                       | |                                                                                  
               | |     Computer          | |                                                                                  
               | |      Services         | |                  ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗      
               | |       Company         | |                  ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝      
               | |                       | |                  ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║         
               |  \\_____________________/  |                  ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║         
               |___________________________|                  ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║         
             ,---\\_____     []     _______/------,            ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝         
           /         /______________\\           /|                                                                            
         /___________________________________ /  | ___        ███████╗██╗  ██╗ ██████╗ ██╗    ██╗ ██████╗ █████╗ ████╗███████╗
         |                                   |   |    )       ██╔════╝██║  ██║██╔═══██╗██║    ██║██╔════╝██╔══██╗██╔═╝██╔════╝
         |  _ _ _                 [-------]  |   |   (        ███████╗███████║██║   ██║██║ █╗ ██║██║     ███████║████╗█████╗  
         |  o o o                 [-------]  |  /    _)_      ╚════██║██╔══██║██║   ██║██║███╗██║██║     ██╔══██║╚═══║██╔══╝  
         |__________________________________ |/     /  /      ███████║██║  ██║╚██████╔╝╚███╔███╔╝╚██████╗██║  ██║████║███████╗
     /-------------------------------------/|      ( )/       ╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝  ╚═════╝╚═╝  ╚═╝╚═══╝╚══════╝
   /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /                                                                                  
 /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /                                                                                    
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                                      
`,hS=()=>{const[a,i]=g.useState(!1);return g.useEffect(()=>{const c=o=>{o.key==="Escape"&&i(!1)};return a&&document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[a]),$.jsxs(I0,{theme:Am,children:[$.jsxs("div",{className:`min-h-screen bg-black text-green-600 flex flex-col\r
       items-center justify-start pt-[48px] relative`,children:[$.jsx(em,{className:"fixed top-0 left-0 right-0 z-50",children:$.jsxs(Tr,{children:[$.jsx(nl,{variant:"menu",children:"File"}),$.jsx(nl,{variant:"menu",onClick:()=>i(!0),children:"About Me"}),$.jsx(nl,{variant:"menu",children:"Note"}),$.jsx(nl,{variant:"menu",children:"Terminal"}),$.jsx(nl,{variant:"menu",children:"Credits"})]})}),$.jsx("div",{className:"p-5 border-black rounded-lg border-4 bg-black mt-12",children:$.jsx(fS,{text:dS})}),$.jsx("div",{className:"w-[95%] max-w-full p-2 bg-[#008080] text-black flex flex-col gap-6",children:$.jsxs("div",{className:"flex justify-center items-center flex-col gap-8 mt-10 mb-10",children:[$.jsxs(Mu,{videoUrl:"https://www.youtube.com/watch?v=MDRbR9FZO6k",thumbnailSrc:"/img/todo.jpg",altText:"待辦事項縮圖",statusText:"🟢 Ready | 最後更新：2025/06/27",children:[$.jsx("h3",{className:"text-lg font-bold",children:"Todo List 小專案"}),$.jsx("p",{children:"一個結合 React、WebSocket、Tailwind 打造的 CLI 風格代辦系統，支援即時狀態更新與視覺特效。"}),$.jsx("p",{children:" -CICD -AWS"})]}),$.jsx(Mu,{thumbnailSrc:"/img/lot-2.jpg"}),$.jsx(Mu,{thumbnailSrc:"/img/ecom.jpg"}),$.jsx(Mu,{videoUrl:"https://doooogwoo.github.io/0605/",thumbnailSrc:"/img/hex.jpg",children:$.jsx("p",{children:"部屬至GitHub Pages"})}),$.jsx(Mu,{thumbnailSrc:"/img/project-web.jpg"})]})}),a&&$.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center",onClick:()=>i(!1),children:$.jsxs(ks,{className:"relative z-50 w-[90%] max-w-3xl",onClick:c=>c.stopPropagation(),children:[$.jsxs(Us,{className:"flex justify-between items-center",children:[$.jsx("span",{children:"AboutMe.exe"}),$.jsx(nl,{size:"sm",onClick:()=>i(!1),children:"X"})]}),$.jsxs(Bs,{className:"max-h-[70vh] overflow-y-auto space-y-4 leading-relaxed",children:[$.jsx("p",{children:"來自社會學背景，過去的學習歷程培養了我結構化思考與問題分析的能力。"}),$.jsx("p",{children:"2020年畢業後，我曾在服務業工作數年，直到2023年參加政府開辦的 AIoT 職訓課程，正式踏入程式開發的領域。"}),$.jsx("p",{children:"（略，請自行補入其餘介紹）"})]})]})})]}),$.jsx("footer",{className:"w-full text-center text-xs text-gray-400",children:"© 2025 Ming-Jheng Su. All rights reserved."})]})};var Nu={},x0;function pS(){if(x0)return Nu;x0=1,Object.defineProperty(Nu,"__esModule",{value:!0}),Nu.parse=m,Nu.serialize=p;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,d=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function m(T,B){const O=new d,j=T.length;if(j<2)return O;const k=B?.decode||S;let R=0;do{const L=T.indexOf("=",R);if(L===-1)break;const Q=T.indexOf(";",R),P=Q===-1?j:Q;if(L>P){R=T.lastIndexOf(";",L-1)+1;continue}const V=b(T,R,L),I=v(T,L,V),te=T.slice(V,I);if(O[te]===void 0){let de=b(T,L+1,P),he=v(T,P,de);const _e=k(T.slice(de,he));O[te]=_e}R=P+1}while(R<j);return O}function b(T,B,O){do{const j=T.charCodeAt(B);if(j!==32&&j!==9)return B}while(++B<O);return O}function v(T,B,O){for(;B>O;){const j=T.charCodeAt(--B);if(j!==32&&j!==9)return B+1}return O}function p(T,B,O){const j=O?.encode||encodeURIComponent;if(!a.test(T))throw new TypeError(`argument name is invalid: ${T}`);const k=j(B);if(!i.test(k))throw new TypeError(`argument val is invalid: ${B}`);let R=T+"="+k;if(!O)return R;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);R+="; Max-Age="+O.maxAge}if(O.domain){if(!c.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);R+="; Domain="+O.domain}if(O.path){if(!o.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);R+="; Path="+O.path}if(O.expires){if(!E(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);R+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&(R+="; HttpOnly"),O.secure&&(R+="; Secure"),O.partitioned&&(R+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":R+="; Priority=Low";break;case"medium":R+="; Priority=Medium";break;case"high":R+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":R+="; SameSite=Strict";break;case"lax":R+="; SameSite=Lax";break;case"none":R+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return R}function S(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function E(T){return s.call(T)==="[object Date]"}return Nu}pS();var S0="popstate";function mS(a={}){function i(s,d){let{pathname:m="/",search:b="",hash:v=""}=za(s.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),ys("",{pathname:m,search:b,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(s,d){let m=s.document.querySelector("base"),b="";if(m&&m.getAttribute("href")){let v=s.location.href,p=v.indexOf("#");b=p===-1?v:v.slice(0,p)}return b+"#"+(typeof d=="string"?d:ju(d))}function o(s,d){Ft(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return gS(i,c,o,a)}function Ge(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function Ft(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function vS(){return Math.random().toString(36).substring(2,10)}function A0(a,i){return{usr:a.state,key:a.key,idx:i}}function ys(a,i,c=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?za(i):i,state:c,key:i&&i.key||o||vS()}}function ju({pathname:a="/",search:i="",hash:c=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),c&&c!=="#"&&(a+=c.charAt(0)==="#"?c:"#"+c),a}function za(a){let i={};if(a){let c=a.indexOf("#");c>=0&&(i.hash=a.substring(c),a=a.substring(0,c));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function gS(a,i,c,o={}){let{window:s=document.defaultView,v5Compat:d=!1}=o,m=s.history,b="POP",v=null,p=S();p==null&&(p=0,m.replaceState({...m.state,idx:p},""));function S(){return(m.state||{idx:null}).idx}function E(){b="POP";let k=S(),R=k==null?null:k-p;p=k,v&&v({action:b,location:j.location,delta:R})}function T(k,R){b="PUSH";let L=ys(j.location,k,R);c&&c(L,k),p=S()+1;let Q=A0(L,p),P=j.createHref(L);try{m.pushState(Q,"",P)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;s.location.assign(P)}d&&v&&v({action:b,location:j.location,delta:1})}function B(k,R){b="REPLACE";let L=ys(j.location,k,R);c&&c(L,k),p=S();let Q=A0(L,p),P=j.createHref(L);m.replaceState(Q,"",P),d&&v&&v({action:b,location:j.location,delta:0})}function O(k){return bS(k)}let j={get action(){return b},get location(){return a(s,m)},listen(k){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(S0,E),v=k,()=>{s.removeEventListener(S0,E),v=null}},createHref(k){return i(s,k)},createURL:O,encodeLocation(k){let R=O(k);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:T,replace:B,go(k){return m.go(k)}};return j}function bS(a,i=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(c,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:ju(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function Em(a,i,c="/"){return yS(a,i,c,!1)}function yS(a,i,c,o){let s=typeof i=="string"?za(i):i,d=Dl(s.pathname||"/",c);if(d==null)return null;let m=Tm(a);xS(m);let b=null;for(let v=0;b==null&&v<m.length;++v){let p=zS(d);b=OS(m[v],p,o)}return b}function Tm(a,i=[],c=[],o=""){let s=(d,m,b)=>{let v={relativePath:b===void 0?d.path||"":b,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};v.relativePath.startsWith("/")&&(Ge(v.relativePath.startsWith(o),`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(o.length));let p=Rl([o,v.relativePath]),S=c.concat(v);d.children&&d.children.length>0&&(Ge(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Tm(d.children,i,S,p)),!(d.path==null&&!d.index)&&i.push({path:p,score:DS(p,d.index),routesMeta:S})};return a.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))s(d,m);else for(let b of wm(d.path))s(d,m,b)}),i}function wm(a){let i=a.split("/");if(i.length===0)return[];let[c,...o]=i,s=c.endsWith("?"),d=c.replace(/\?$/,"");if(o.length===0)return s?[d,""]:[d];let m=wm(o.join("/")),b=[];return b.push(...m.map(v=>v===""?d:[d,v].join("/"))),s&&b.push(...m),b.map(v=>a.startsWith("/")&&v===""?"/":v)}function xS(a){a.sort((i,c)=>i.score!==c.score?c.score-i.score:_S(i.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var SS=/^:[\w-]+$/,AS=3,ES=2,TS=1,wS=10,RS=-2,E0=a=>a==="*";function DS(a,i){let c=a.split("/"),o=c.length;return c.some(E0)&&(o+=RS),i&&(o+=ES),c.filter(s=>!E0(s)).reduce((s,d)=>s+(SS.test(d)?AS:d===""?TS:wS),o)}function _S(a,i){return a.length===i.length&&a.slice(0,-1).every((o,s)=>o===i[s])?a[a.length-1]-i[i.length-1]:0}function OS(a,i,c=!1){let{routesMeta:o}=a,s={},d="/",m=[];for(let b=0;b<o.length;++b){let v=o[b],p=b===o.length-1,S=d==="/"?i:i.slice(d.length)||"/",E=wr({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},S),T=v.route;if(!E&&p&&c&&!o[o.length-1].route.index&&(E=wr({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},S)),!E)return null;Object.assign(s,E.params),m.push({params:s,pathname:Rl([d,E.pathname]),pathnameBase:BS(Rl([d,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(d=Rl([d,E.pathnameBase]))}return m}function wr(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[c,o]=CS(a.path,a.caseSensitive,a.end),s=i.match(c);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),b=s.slice(1);return{params:o.reduce((p,{paramName:S,isOptional:E},T)=>{if(S==="*"){let O=b[T]||"";m=d.slice(0,d.length-O.length).replace(/(.)\/+$/,"$1")}const B=b[T];return E&&!B?p[S]=void 0:p[S]=(B||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:m,pattern:a}}function CS(a,i=!1,c=!0){Ft(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,b,v)=>(o.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(o.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),o]}function zS(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Ft(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function Dl(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let c=i.endsWith("/")?i.length-1:i.length,o=a.charAt(c);return o&&o!=="/"?null:a.slice(c)||"/"}function MS(a,i="/"){let{pathname:c,search:o="",hash:s=""}=typeof a=="string"?za(a):a;return{pathname:c?c.startsWith("/")?c:NS(c,i):i,search:US(o),hash:kS(s)}}function NS(a,i){let c=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?c.length>1&&c.pop():s!=="."&&c.push(s)}),c.length>1?c.join("/"):"/"}function is(a,i,c,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $S(a){return a.filter((i,c)=>c===0||i.route.path&&i.route.path.length>0)}function Rm(a){let i=$S(a);return i.map((c,o)=>o===i.length-1?c.pathname:c.pathnameBase)}function Dm(a,i,c,o=!1){let s;typeof a=="string"?s=za(a):(s={...a},Ge(!s.pathname||!s.pathname.includes("?"),is("?","pathname","search",s)),Ge(!s.pathname||!s.pathname.includes("#"),is("#","pathname","hash",s)),Ge(!s.search||!s.search.includes("#"),is("#","search","hash",s)));let d=a===""||s.pathname==="",m=d?"/":s.pathname,b;if(m==null)b=c;else{let E=i.length-1;if(!o&&m.startsWith("..")){let T=m.split("/");for(;T[0]==="..";)T.shift(),E-=1;s.pathname=T.join("/")}b=E>=0?i[E]:"/"}let v=MS(s,b),p=m&&m!=="/"&&m.endsWith("/"),S=(d||m===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(p||S)&&(v.pathname+="/"),v}var Rl=a=>a.join("/").replace(/\/\/+/g,"/"),BS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),US=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,kS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function jS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var _m=["POST","PUT","PATCH","DELETE"];new Set(_m);var HS=["GET",..._m];new Set(HS);var zn=g.createContext(null);zn.displayName="DataRouter";var $r=g.createContext(null);$r.displayName="DataRouterState";var Om=g.createContext({isTransitioning:!1});Om.displayName="ViewTransition";var LS=g.createContext(new Map);LS.displayName="Fetchers";var QS=g.createContext(null);QS.displayName="Await";var rl=g.createContext(null);rl.displayName="Navigation";var Lu=g.createContext(null);Lu.displayName="Location";var _l=g.createContext({outlet:null,matches:[],isDataRoute:!1});_l.displayName="Route";var js=g.createContext(null);js.displayName="RouteError";function YS(a,{relative:i}={}){Ge(Qu(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=g.useContext(rl),{hash:s,pathname:d,search:m}=Yu(a,{relative:i}),b=d;return c!=="/"&&(b=d==="/"?c:Rl([c,d])),o.createHref({pathname:b,search:m,hash:s})}function Qu(){return g.useContext(Lu)!=null}function Ma(){return Ge(Qu(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(Lu).location}var Cm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(a){g.useContext(rl).static||g.useLayoutEffect(a)}function qS(){let{isDataRoute:a}=g.useContext(_l);return a?lA():GS()}function GS(){Ge(Qu(),"useNavigate() may be used only in the context of a <Router> component.");let a=g.useContext(zn),{basename:i,navigator:c}=g.useContext(rl),{matches:o}=g.useContext(_l),{pathname:s}=Ma(),d=JSON.stringify(Rm(o)),m=g.useRef(!1);return zm(()=>{m.current=!0}),g.useCallback((v,p={})=>{if(Ft(m.current,Cm),!m.current)return;if(typeof v=="number"){c.go(v);return}let S=Dm(v,JSON.parse(d),s,p.relative==="path");a==null&&i!=="/"&&(S.pathname=S.pathname==="/"?i:Rl([i,S.pathname])),(p.replace?c.replace:c.push)(S,p.state,p)},[i,c,d,s,a])}g.createContext(null);function Yu(a,{relative:i}={}){let{matches:c}=g.useContext(_l),{pathname:o}=Ma(),s=JSON.stringify(Rm(c));return g.useMemo(()=>Dm(a,JSON.parse(s),o,i==="path"),[a,s,o,i])}function VS(a,i){return Mm(a,i)}function Mm(a,i,c,o){Ge(Qu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=g.useContext(rl),{matches:d}=g.useContext(_l),m=d[d.length-1],b=m?m.params:{},v=m?m.pathname:"/",p=m?m.pathnameBase:"/",S=m&&m.route;{let R=S&&S.path||"";Nm(v,!S||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let E=Ma(),T;if(i){let R=typeof i=="string"?za(i):i;Ge(p==="/"||R.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),T=R}else T=E;let B=T.pathname||"/",O=B;if(p!=="/"){let R=p.replace(/^\//,"").split("/");O="/"+B.replace(/^\//,"").split("/").slice(R.length).join("/")}let j=Em(a,{pathname:O});Ft(S||j!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Ft(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=WS(j&&j.map(R=>Object.assign({},R,{params:Object.assign({},b,R.params),pathname:Rl([p,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:Rl([p,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),d,c,o);return i&&k?g.createElement(Lu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},k):k}function XS(){let a=tA(),i=jS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),c=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",a),m=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:d},"ErrorBoundary")," or"," ",g.createElement("code",{style:d},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},i),c?g.createElement("pre",{style:s},c):null,m)}var ZS=g.createElement(XS,null),KS=class extends g.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?g.createElement(_l.Provider,{value:this.props.routeContext},g.createElement(js.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JS({routeContext:a,match:i,children:c}){let o=g.useContext(zn);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),g.createElement(_l.Provider,{value:a},c)}function WS(a,i=[],c=null,o=null){if(a==null){if(!c)return null;if(c.errors)a=c.matches;else if(i.length===0&&!c.initialized&&c.matches.length>0)a=c.matches;else return null}let s=a,d=c?.errors;if(d!=null){let v=s.findIndex(p=>p.route.id&&d?.[p.route.id]!==void 0);Ge(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,v+1))}let m=!1,b=-1;if(c)for(let v=0;v<s.length;v++){let p=s[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(b=v),p.route.id){let{loaderData:S,errors:E}=c,T=p.route.loader&&!S.hasOwnProperty(p.route.id)&&(!E||E[p.route.id]===void 0);if(p.route.lazy||T){m=!0,b>=0?s=s.slice(0,b+1):s=[s[0]];break}}}return s.reduceRight((v,p,S)=>{let E,T=!1,B=null,O=null;c&&(E=d&&p.route.id?d[p.route.id]:void 0,B=p.route.errorElement||ZS,m&&(b<0&&S===0?(Nm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,O=null):b===S&&(T=!0,O=p.route.hydrateFallbackElement||null)));let j=i.concat(s.slice(0,S+1)),k=()=>{let R;return E?R=B:T?R=O:p.route.Component?R=g.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=v,g.createElement(JS,{match:p,routeContext:{outlet:v,matches:j,isDataRoute:c!=null},children:R})};return c&&(p.route.ErrorBoundary||p.route.errorElement||S===0)?g.createElement(KS,{location:c.location,revalidation:c.revalidation,component:B,error:E,children:k(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):k()},null)}function Hs(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FS(a){let i=g.useContext(zn);return Ge(i,Hs(a)),i}function IS(a){let i=g.useContext($r);return Ge(i,Hs(a)),i}function PS(a){let i=g.useContext(_l);return Ge(i,Hs(a)),i}function Ls(a){let i=PS(a),c=i.matches[i.matches.length-1];return Ge(c.route.id,`${a} can only be used on routes that contain a unique "id"`),c.route.id}function eA(){return Ls("useRouteId")}function tA(){let a=g.useContext(js),i=IS("useRouteError"),c=Ls("useRouteError");return a!==void 0?a:i.errors?.[c]}function lA(){let{router:a}=FS("useNavigate"),i=Ls("useNavigate"),c=g.useRef(!1);return zm(()=>{c.current=!0}),g.useCallback(async(s,d={})=>{Ft(c.current,Cm),c.current&&(typeof s=="number"?a.navigate(s):await a.navigate(s,{fromRouteId:i,...d}))},[a,i])}var T0={};function Nm(a,i,c){!i&&!T0[a]&&(T0[a]=!0,Ft(!1,c))}g.memo(aA);function aA({routes:a,future:i,state:c}){return Mm(a,void 0,c,i)}function xs(a){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nA({basename:a="/",children:i=null,location:c,navigationType:o="POP",navigator:s,static:d=!1}){Ge(!Qu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=a.replace(/^\/*/,"/"),b=g.useMemo(()=>({basename:m,navigator:s,static:d,future:{}}),[m,s,d]);typeof c=="string"&&(c=za(c));let{pathname:v="/",search:p="",hash:S="",state:E=null,key:T="default"}=c,B=g.useMemo(()=>{let O=Dl(v,m);return O==null?null:{location:{pathname:O,search:p,hash:S,state:E,key:T},navigationType:o}},[m,v,p,S,E,T,o]);return Ft(B!=null,`<Router basename="${m}"> is not able to match the URL "${v}${p}${S}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:g.createElement(rl.Provider,{value:b},g.createElement(Lu.Provider,{children:i,value:B}))}function uA({children:a,location:i}){return VS(Ss(a),i)}function Ss(a,i=[]){let c=[];return g.Children.forEach(a,(o,s)=>{if(!g.isValidElement(o))return;let d=[...i,s];if(o.type===g.Fragment){c.push.apply(c,Ss(o.props.children,d));return}Ge(o.type===xs,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!o.props.index||!o.props.children,"An index route cannot have child routes.");let m={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=Ss(o.props.children,d)),c.push(m)}),c}var pr="get",mr="application/x-www-form-urlencoded";function Br(a){return a!=null&&typeof a.tagName=="string"}function iA(a){return Br(a)&&a.tagName.toLowerCase()==="button"}function rA(a){return Br(a)&&a.tagName.toLowerCase()==="form"}function cA(a){return Br(a)&&a.tagName.toLowerCase()==="input"}function oA(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function sA(a,i){return a.button===0&&(!i||i==="_self")&&!oA(a)}var rr=null;function fA(){if(rr===null)try{new FormData(document.createElement("form"),0),rr=!1}catch{rr=!0}return rr}var dA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rs(a){return a!=null&&!dA.has(a)?(Ft(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mr}"`),null):a}function hA(a,i){let c,o,s,d,m;if(rA(a)){let b=a.getAttribute("action");o=b?Dl(b,i):null,c=a.getAttribute("method")||pr,s=rs(a.getAttribute("enctype"))||mr,d=new FormData(a)}else if(iA(a)||cA(a)&&(a.type==="submit"||a.type==="image")){let b=a.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||b.getAttribute("action");if(o=v?Dl(v,i):null,c=a.getAttribute("formmethod")||b.getAttribute("method")||pr,s=rs(a.getAttribute("formenctype"))||rs(b.getAttribute("enctype"))||mr,d=new FormData(b,a),!fA()){let{name:p,type:S,value:E}=a;if(S==="image"){let T=p?`${p}.`:"";d.append(`${T}x`,"0"),d.append(`${T}y`,"0")}else p&&d.append(p,E)}}else{if(Br(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=pr,o=null,s=mr,m=a}return d&&s==="text/plain"&&(m=d,d=void 0),{action:o,method:c.toLowerCase(),encType:s,formData:d,body:m}}function Qs(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}async function pA(a,i){if(a.id in i)return i[a.id];try{let c=await import(a.module);return i[a.id]=c,c}catch(c){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mA(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function vA(a,i,c){let o=await Promise.all(a.map(async s=>{let d=i.routes[s.route.id];if(d){let m=await pA(d,c);return m.links?m.links():[]}return[]}));return xA(o.flat(1).filter(mA).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function w0(a,i,c,o,s,d){let m=(v,p)=>c[p]?v.route.id!==c[p].route.id:!0,b=(v,p)=>c[p].pathname!==v.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==v.params["*"];return d==="assets"?i.filter((v,p)=>m(v,p)||b(v,p)):d==="data"?i.filter((v,p)=>{let S=o.routes[v.route.id];if(!S||!S.hasLoader)return!1;if(m(v,p)||b(v,p))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function gA(a,i,{includeHydrateFallback:c}={}){return bA(a.map(o=>{let s=i.routes[o.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),c&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function bA(a){return[...new Set(a)]}function yA(a){let i={},c=Object.keys(a).sort();for(let o of c)i[o]=a[o];return i}function xA(a,i){let c=new Set;return new Set(i),a.reduce((o,s)=>{let d=JSON.stringify(yA(s));return c.has(d)||(c.add(d),o.push({key:d,link:s})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var SA=new Set([100,101,204,205]);function AA(a,i){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname="_root.data":i&&Dl(c.pathname,i)==="/"?c.pathname=`${i.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function $m(){let a=g.useContext(zn);return Qs(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function EA(){let a=g.useContext($r);return Qs(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Ys=g.createContext(void 0);Ys.displayName="FrameworkContext";function Bm(){let a=g.useContext(Ys);return Qs(a,"You must render this element inside a <HydratedRouter> element"),a}function TA(a,i){let c=g.useContext(Ys),[o,s]=g.useState(!1),[d,m]=g.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:p,onMouseLeave:S,onTouchStart:E}=i,T=g.useRef(null);g.useEffect(()=>{if(a==="render"&&m(!0),a==="viewport"){let j=R=>{R.forEach(L=>{m(L.isIntersecting)})},k=new IntersectionObserver(j,{threshold:.5});return T.current&&k.observe(T.current),()=>{k.disconnect()}}},[a]),g.useEffect(()=>{if(o){let j=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(j)}}},[o]);let B=()=>{s(!0)},O=()=>{s(!1),m(!1)};return c?a!=="intent"?[d,T,{}]:[d,T,{onFocus:$u(b,B),onBlur:$u(v,O),onMouseEnter:$u(p,B),onMouseLeave:$u(S,O),onTouchStart:$u(E,B)}]:[!1,T,{}]}function $u(a,i){return c=>{a&&a(c),c.defaultPrevented||i(c)}}function wA({page:a,...i}){let{router:c}=$m(),o=g.useMemo(()=>Em(c.routes,a,c.basename),[c.routes,a,c.basename]);return o?g.createElement(DA,{page:a,matches:o,...i}):null}function RA(a){let{manifest:i,routeModules:c}=Bm(),[o,s]=g.useState([]);return g.useEffect(()=>{let d=!1;return vA(a,i,c).then(m=>{d||s(m)}),()=>{d=!0}},[a,i,c]),o}function DA({page:a,matches:i,...c}){let o=Ma(),{manifest:s,routeModules:d}=Bm(),{basename:m}=$m(),{loaderData:b,matches:v}=EA(),p=g.useMemo(()=>w0(a,i,v,s,o,"data"),[a,i,v,s,o]),S=g.useMemo(()=>w0(a,i,v,s,o,"assets"),[a,i,v,s,o]),E=g.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let O=new Set,j=!1;if(i.forEach(R=>{let L=s.routes[R.route.id];!L||!L.hasLoader||(!p.some(Q=>Q.route.id===R.route.id)&&R.route.id in b&&d[R.route.id]?.shouldRevalidate||L.hasClientLoader?j=!0:O.add(R.route.id))}),O.size===0)return[];let k=AA(a,m);return j&&O.size>0&&k.searchParams.set("_routes",i.filter(R=>O.has(R.route.id)).map(R=>R.route.id).join(",")),[k.pathname+k.search]},[m,b,o,s,p,i,a,d]),T=g.useMemo(()=>gA(S,s),[S,s]),B=RA(S);return g.createElement(g.Fragment,null,E.map(O=>g.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...c})),T.map(O=>g.createElement("link",{key:O,rel:"modulepreload",href:O,...c})),B.map(({key:O,link:j})=>g.createElement("link",{key:O,...j})))}function _A(...a){return i=>{a.forEach(c=>{typeof c=="function"?c(i):c!=null&&(c.current=i)})}}var Um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Um&&(window.__reactRouterVersion="7.6.2")}catch{}function OA({basename:a,children:i,window:c}){let o=g.useRef();o.current==null&&(o.current=mS({window:c,v5Compat:!0}));let s=o.current,[d,m]=g.useState({action:s.action,location:s.location}),b=g.useCallback(v=>{g.startTransition(()=>m(v))},[m]);return g.useLayoutEffect(()=>s.listen(b),[s,b]),g.createElement(nA,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:s})}var km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qs=g.forwardRef(function({onClick:i,discover:c="render",prefetch:o="none",relative:s,reloadDocument:d,replace:m,state:b,target:v,to:p,preventScrollReset:S,viewTransition:E,...T},B){let{basename:O}=g.useContext(rl),j=typeof p=="string"&&km.test(p),k,R=!1;if(typeof p=="string"&&j&&(k=p,Um))try{let he=new URL(window.location.href),_e=p.startsWith("//")?new URL(he.protocol+p):new URL(p),Oe=Dl(_e.pathname,O);_e.origin===he.origin&&Oe!=null?p=Oe+_e.search+_e.hash:R=!0}catch{Ft(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=YS(p,{relative:s}),[Q,P,V]=TA(o,T),I=NA(p,{replace:m,state:b,target:v,preventScrollReset:S,relative:s,viewTransition:E});function te(he){i&&i(he),he.defaultPrevented||I(he)}let de=g.createElement("a",{...T,...V,href:k||L,onClick:R||d?i:te,ref:_A(B,P),target:v,"data-discover":!j&&c==="render"?"true":void 0});return Q&&!j?g.createElement(g.Fragment,null,de,g.createElement(wA,{page:L})):de});qs.displayName="Link";var CA=g.forwardRef(function({"aria-current":i="page",caseSensitive:c=!1,className:o="",end:s=!1,style:d,to:m,viewTransition:b,children:v,...p},S){let E=Yu(m,{relative:p.relative}),T=Ma(),B=g.useContext($r),{navigator:O,basename:j}=g.useContext(rl),k=B!=null&&jA(E)&&b===!0,R=O.encodeLocation?O.encodeLocation(E).pathname:E.pathname,L=T.pathname,Q=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;c||(L=L.toLowerCase(),Q=Q?Q.toLowerCase():null,R=R.toLowerCase()),Q&&j&&(Q=Dl(Q,j)||Q);const P=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let V=L===R||!s&&L.startsWith(R)&&L.charAt(P)==="/",I=Q!=null&&(Q===R||!s&&Q.startsWith(R)&&Q.charAt(R.length)==="/"),te={isActive:V,isPending:I,isTransitioning:k},de=V?i:void 0,he;typeof o=="function"?he=o(te):he=[o,V?"active":null,I?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let _e=typeof d=="function"?d(te):d;return g.createElement(qs,{...p,"aria-current":de,className:he,ref:S,style:_e,to:m,viewTransition:b},typeof v=="function"?v(te):v)});CA.displayName="NavLink";var zA=g.forwardRef(({discover:a="render",fetcherKey:i,navigate:c,reloadDocument:o,replace:s,state:d,method:m=pr,action:b,onSubmit:v,relative:p,preventScrollReset:S,viewTransition:E,...T},B)=>{let O=UA(),j=kA(b,{relative:p}),k=m.toLowerCase()==="get"?"get":"post",R=typeof b=="string"&&km.test(b),L=Q=>{if(v&&v(Q),Q.defaultPrevented)return;Q.preventDefault();let P=Q.nativeEvent.submitter,V=P?.getAttribute("formmethod")||m;O(P||Q.currentTarget,{fetcherKey:i,method:V,navigate:c,replace:s,state:d,relative:p,preventScrollReset:S,viewTransition:E})};return g.createElement("form",{ref:B,method:k,action:j,onSubmit:o?v:L,...T,"data-discover":!R&&a==="render"?"true":void 0})});zA.displayName="Form";function MA(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jm(a){let i=g.useContext(zn);return Ge(i,MA(a)),i}function NA(a,{target:i,replace:c,state:o,preventScrollReset:s,relative:d,viewTransition:m}={}){let b=qS(),v=Ma(),p=Yu(a,{relative:d});return g.useCallback(S=>{if(sA(S,i)){S.preventDefault();let E=c!==void 0?c:ju(v)===ju(p);b(a,{replace:E,state:o,preventScrollReset:s,relative:d,viewTransition:m})}},[v,b,p,c,o,i,a,s,d,m])}var $A=0,BA=()=>`__${String(++$A)}__`;function UA(){let{router:a}=jm("useSubmit"),{basename:i}=g.useContext(rl),c=eA();return g.useCallback(async(o,s={})=>{let{action:d,method:m,encType:b,formData:v,body:p}=hA(o,i);if(s.navigate===!1){let S=s.fetcherKey||BA();await a.fetch(S,c,s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:p,formMethod:s.method||m,formEncType:s.encType||b,flushSync:s.flushSync})}else await a.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:p,formMethod:s.method||m,formEncType:s.encType||b,replace:s.replace,state:s.state,fromRouteId:c,flushSync:s.flushSync,viewTransition:s.viewTransition})},[a,i,c])}function kA(a,{relative:i}={}){let{basename:c}=g.useContext(rl),o=g.useContext(_l);Ge(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),d={...Yu(a||".",{relative:i})},m=Ma();if(a==null){d.search=m.search;let b=new URLSearchParams(d.search),v=b.getAll("index");if(v.some(S=>S==="")){b.delete("index"),v.filter(E=>E).forEach(E=>b.append("index",E));let S=b.toString();d.search=S?`?${S}`:""}}return(!a||a===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:Rl([c,d.pathname])),ju(d)}function jA(a,i={}){let c=g.useContext(Om);Ge(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=jm("useViewTransitionState"),s=Yu(a,{relative:i.relative});if(!c.isTransitioning)return!1;let d=Dl(c.currentLocation.pathname,o)||c.currentLocation.pathname,m=Dl(c.nextLocation.pathname,o)||c.nextLocation.pathname;return wr(s.pathname,m)!=null||wr(s.pathname,d)!=null}[...SA];const An=({imageSrc:a,title:i,imageAlt:c="i am lost",children:o})=>$.jsxs("li",{className:"flex flex-col gap-4 md:flex-row md:gap-5",children:[$.jsx("img",{src:a,alt:c,className:"w-[150px] h-[150px] mx-auto md:w-[200px] md:h-[200px] md:mx-0"}),$.jsxs("div",{className:"flex flex-col justify-center gap-2 text-center md:text-left",children:[$.jsx("strong",{className:"text-xl md:text-2xl",children:i}),$.jsx("div",{className:"text-sm md:text-base",children:o})]})]}),HA=()=>$.jsx($.Fragment,{children:$.jsxs("div",{className:"bg-black/45 text-white px-6",children:[$.jsxs("section",{children:[$.jsx("h2",{className:"text-3xl",children:"個人簡介"}),$.jsx("p",{className:"text-gray-300",children:"來自社會學背景，擁有結構化思考與問題分析的能力。"}),$.jsxs("p",{className:"text-gray-300",children:["2023 年起接觸程式，從職訓局（Python、AIoT）起步，熟悉",$.jsx("span",{className:"text-[#1BFFFF]",children:" Git"}),"、",$.jsx("span",{className:"text-[#1BFFFF]",children:"VS Code"}),"、",$.jsx("span",{className:"text-[#1BFFFF]",children:"Terminal"}),"與基本協作流程。"]}),$.jsxs("p",{className:"text-gray-300",children:["後轉向大數智能教育學習 Java，並於 2024 年結訓後持續自學",$.jsx("span",{className:"text-[#39FF14]",children:" Spring Boot"}),"，同年底擔任助教，協助學員理解核心概念與實作。期間同步接觸",$.jsx("span",{className:"text-[#1BFFFF]",children:"Docker"}),"、",$.jsx("span",{className:"text-[#1BFFFF]",children:"MySQL"}),"，建立",$.jsx("span",{className:"text-[#1BFFFF]",children:"DevOps"}),"、",$.jsx("span",{className:"text-[#1BFFFF]",children:"K8s "}),"與",$.jsx("span",{className:"text-[#1BFFFF]",children:" CI/CD "}),"的初步認知。"]}),$.jsx("p",{}),$.jsxs("p",{className:"text-gray-300",children:["2025 年起開始進行個人專案 —— 模擬經營型停車場遊戲，整合設計模式、",$.jsx("span",{className:"text-[#1BFFFF]",children:"WebSocket"}),"、排程任務與 CLI 模擬。"]}),$.jsxs("p",{className:"text-gray-300",children:["為補足前端能力，自學",$.jsx("span",{className:"text-blue-500",children:" React "}),"並參加六角學院 CSS 前端體驗營，強化排版與視覺實作能力。"]}),$.jsx("p",{className:"text-gray-300",children:"目前正專注於 GitLab CI/CD、Spring Security 驗證設計與專案功能擴充，持續朝向實務導向的後端工程之路邁進。"})]}),$.jsxs("section",{children:[$.jsx("br",{}),$.jsx("h2",{className:"text-3xl",children:"技能摘要"}),$.jsxs("ul",{className:"space-y-4 text-base leading-relaxed ",children:[$.jsx(An,{imageSrc:"Developer.svg",imageAlt:"後端開發圖示",title:"Java 開發：",children:$.jsx("p",{children:"具備使用 Spring Boot 建構 RESTful API 的實作經驗，熟悉 JPA 進行資料庫操作與關聯設計"})}),$.jsxs(An,{imageSrc:"Software-code.svg",imageAlt:"系統架構圖示",title:"系統架構與設計模式：",children:[$.jsx("p",{children:"具備 MVC 架構實作經驗，熟悉模組化 Service 拆分。"}),$.jsx("p",{children:"實際運用 Command、Observer、Factory 等設計模式於遊戲模擬與商業邏輯中。"})]}),$.jsxs(An,{imageSrc:"Advanced.svg",imageAlt:"前端開發圖示",title:"前端整合：",children:[$.jsx("p",{children:"熟悉使用 React（Hooks、Component 架構）"}),$.jsx("p",{children:" Tailwind CSS 開發響應式畫面。"}),$.jsx("p",{children:" 具備整合 WebSocket 以實作即時資料推播功能之實務經驗。"})]}),$.jsxs(An,{imageSrc:"points-rafiki.svg",imageAlt:"資料庫圖示",title:"資料庫技術：",children:[$.jsx("p",{children:"熟悉 MySQL 與 H2 等關聯式資料庫。"}),$.jsx("p",{children:"理解資料正規化、索引設計與 SQL 查詢語法。"})]}),$.jsxs(An,{imageSrc:"Server.svg",imageAlt:"開發工具圖示",title:"開發工具與環境：",children:[$.jsx("p",{children:"熟悉 IntelliJ IDEA、Git 版本控制、Postman API 測試工具。"}),$.jsx("p",{children:"具備使用 Docker / Docker Compose 進行容器化佈署的實作經驗，目前可參考範例模板完成前後端打包，並正持續熟悉 Dockerfile 指令與最佳實踐。"})]}),$.jsxs(An,{imageSrc:"progress-bro.svg",imageAlt:"進階技能圖示",title:"進階技能（持續強化中）：",children:[$.jsx("p",{children:"具備 Spring Security 架構概念，理解 JWT、Cookie 與 OAuth 驗證流程。"}),$.jsx("p",{children:"熟悉 JUnit 5 與 Mockito 測試框架，持續優化單元測試與整合測試能力。"})]}),$.jsxs("li",{className:"flex flex-col gap-2",children:[$.jsx("strong",{children:" 點擊看更多:"}),$.jsx(qs,{to:"/panel",children:$.jsx("button",{className:"px-4 py-1 text-lg bg-white text-black rounded-full hover:bg-cyan-800 hover:text-white transition",children:"歷程作品介紹"})})]})]})]}),$.jsx("footer",{className:"w-full text-center text-xs text-gray-400 py-4",children:"© 2025 Ming-Jheng Su. All rights reserved."})]})}),LA="/about-me-page/assets/code-DHiOV_Yk.mp4";function QA(){return $.jsx(OA,{children:$.jsxs(uA,{children:[$.jsx(xs,{path:"/",element:$.jsx(Ab,{src:LA,children:$.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center px-4 md:px-8 py-10",children:[$.jsx("aside",{className:"w-full md:w-[420px]",children:$.jsx(Sb,{})}),$.jsx("main",{className:"w-full md:flex-1 md:max-h-[500px] md:overflow-y-auto",children:$.jsx(HA,{})})]})})}),$.jsx(xs,{path:"/panel",element:$.jsx(hS,{})})]})})}sb.createRoot(document.getElementById("root")).render($.jsx(g.StrictMode,{children:$.jsx(QA,{})}));
