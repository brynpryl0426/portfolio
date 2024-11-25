import{r as o,j as e}from"./index-BSN27Gx1.js";import{z as p}from"./index-Dq50hdgL.js";import{l as x,n as y,o as f,p as S,_ as j,O as w,M as g,L as k,S as v}from"./components-CEGUhC9c.js";/**
 * @remix-run/react v2.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function b({getKey:t,...l}){let{isSpaMode:c}=x(),n=y(),u=f();S({getKey:t,storageKey:a});let d=o.useMemo(()=>{if(!t)return null;let s=t(n,u);return s!==n.key?s:null},[]);if(c)return null;let m=((s,h)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return o.createElement("script",j({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}const M="/static/tailwind-hvCELkKp.css",E=()=>[{rel:"stylesheet",href:M}];function I({children:t}){return e.jsxs("html",{lang:"en",suppressHydrationWarning:!0,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(g,{}),e.jsx(k,{})]}),e.jsx("body",{style:{fontFamily:"Inter, sans-serif"},children:e.jsxs(p,{attribute:"class",defaultTheme:"dark",enableSystem:!0,disableTransitionOnChange:!0,children:[e.jsx("div",{"vaul-drawer-wrapper":"",children:e.jsx("div",{className:"relative flex min-h-screen flex-col bg-background",children:e.jsx("main",{className:"flex-1",children:t})})}),e.jsx(b,{}),e.jsx(v,{})]})})]})}function R(){return e.jsx(w,{})}export{I as Layout,R as default,E as links};
