(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(3723)}])},5634:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return s}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",a="fast-refresh",c="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7149:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(4648),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(5203),f=n(298),i=n(1024),a=n(5522),c=n(2208),s=n(5832),d=n(2497),p=n(7283),h=n(7149),y=n(9290),b=n(5634),_=new Set;function v(e,t,n,r,o,u){if(u||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(_.has(o))return;_.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let m=u.default.forwardRef(function(e,t){let n,r;let{href:i,as:_,children:m,prefetch:O=null,passHref:j,replace:x,shallow:C,scroll:E,locale:k,onClick:P,onMouseEnter:T,onTouchStart:M,legacyBehavior:R=!1,...A}=e;n=m,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=u.default.useContext(s.RouterContext),I=u.default.useContext(d.AppRouterContext),w=null!=N?N:I,L=!N,S=!1!==O,U=null===O?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:H,as:K}=u.default.useMemo(()=>{if(!N){let e=g(i);return{href:e,as:_?g(_):e}}let[e,t]=(0,l.resolveHref)(N,i,!0);return{href:e,as:_?(0,l.resolveHref)(N,_):t||e}},[N,i,_]),F=u.default.useRef(H),D=u.default.useRef(K);R&&(r=u.default.Children.only(n));let V=R?r&&"object"==typeof r&&r.ref:t,[z,B,X]=(0,p.useIntersection)({rootMargin:"200px"}),q=u.default.useCallback(e=>{(D.current!==K||F.current!==H)&&(X(),D.current=K,F.current=H),z(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[K,V,H,X,z]);u.default.useEffect(()=>{w&&B&&S&&v(w,H,K,{locale:k},{kind:U},L)},[K,H,B,k,S,null==N?void 0:N.locale,w,L,U]);let G={ref:q,onClick(e){R||"function"!=typeof P||P(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,n,r,o,l,i,a,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?u.default.startTransition(d):d()}(e,w,H,K,x,C,E,k,L)},onMouseEnter(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),w&&(S||!L)&&v(w,H,K,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),w&&(S||!L)&&v(w,H,K,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,a.isAbsoluteUrl)(K))G.href=K;else if(!R||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);G.href=t||(0,y.addBasePath)((0,c.addLocale)(K,e,null==N?void 0:N.defaultLocale))}return R?u.default.cloneElement(r,G):(0,o.jsx)("a",{...A,...G,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(9833),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(a||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3723:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1664),u=n.n(o);n(9182),t.default=()=>(0,r.jsxs)("div",{className:"flex h-screen flex-col items-center justify-center bg-primary-white text-primary-black dark:bg-zinc-900 dark:text-primary-white",children:[(0,r.jsx)("h1",{className:"text-6xl font-bold",children:"404"}),(0,r.jsx)("p",{className:"mt-4 text-lg",children:"Oops! The page you're looking for doesn't exist."}),(0,r.jsx)(u(),{href:"/",children:(0,r.jsx)("a",{className:"mt-8 rounded-md bg-primary-black px-6 py-3 text-sm font-medium text-primary-white hover:bg-gray-700 dark:bg-primary-white dark:text-primary-black dark:hover:bg-gray-300",children:"Back to Home"})})]})},9182:function(){},1664:function(e,t,n){e.exports=n(5494)}},function(e){e.O(0,[303,888,774,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);