(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{3247:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:u.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1539:function(e,t,n){"use strict";n.d(t,{w:function(){return E}});var r=n(2265);String(Math.round(1e10*Math.random()));let o=r.createContext(!1);function a(){return!1}function l(){return!0}function u(e){return()=>{}}"undefined"!=typeof window&&window.document&&window.document.createElement,new WeakMap,r.useId;let i=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),c=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function d(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script;return i.has(t)}let t=e.split("-")[0];return c.has(t)}function f(){let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:d(e)?"rtl":"ltr"}}let s=f(),p=new Set;function m(){for(let e of(s=f(),p))e(s)}let w=r.createContext(null);function _(e){let{locale:t,children:n}=e,i=function(){let e="function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(u,a,l):(0,r.useContext)(o),[t,n]=(0,r.useState)(s);return((0,r.useEffect)(()=>(0===p.size&&window.addEventListener("languagechange",m),p.add(n),()=>{p.delete(n),0===p.size&&window.removeEventListener("languagechange",m)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}(),c=t?{locale:t,direction:d(t)?"rtl":"ltr"}:i;return r.createElement(w.Provider,{value:c},n)}new WeakMap,n(4887),"undefined"!=typeof document&&window.visualViewport,new WeakMap,"undefined"!=typeof document&&window.visualViewport,"undefined"!=typeof document&&window.visualViewport;let v=r.createContext(null);function y(e){let{children:t}=e,n=(0,r.useContext)(v),[o,a]=(0,r.useState)(0),l=(0,r.useMemo)(()=>({parent:n,modalCount:o,addModal(){a(e=>e+1),n&&n.addModal()},removeModal(){a(e=>e-1),n&&n.removeModal()}}),[n,o]);return r.createElement(v.Provider,{value:l},t)}function S(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,r.useContext)(v))&&t.modalCount>0||null}};return r.createElement("div",{"data-overlay-container":!0,...e,...n})}function g(e){return r.createElement(y,null,r.createElement(S,e))}new WeakMap;var h=n(7437),E=({children:e,locale:t="en-US",...n})=>(0,h.jsx)(_,{locale:t,children:(0,h.jsx)(g,{...n,children:e})})}}]);