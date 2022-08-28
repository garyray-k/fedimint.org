"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[4001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Continued Operation Risk",s={unversionedId:"TradeOffs/Transaction-Contract-Fulfilment",id:"TradeOffs/Transaction-Contract-Fulfilment",title:"Continued Operation Risk",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/TradeOffs/06-Transaction-Contract-Fulfilment.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/Transaction-Contract-Fulfilment",permalink:"/wiki_fedimint/docs/TradeOffs/Transaction-Contract-Fulfilment",draft:!1,editUrl:"https://github.com/fedimint/fedimint.org/tree/main/docs/TradeOffs/06-Transaction-Contract-Fulfilment.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LN Gateway Risk",permalink:"/wiki_fedimint/docs/TradeOffs/TrustLNGateways"},next:{title:"Backup Privacy Risks",permalink:"/wiki_fedimint/docs/TradeOffs/BackupDeanonymization"}},c={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"continued-operation-risk"},"Continued Operation Risk"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,o.kt)("p",null,"The user must trust a majority quorum of federation members to custody funds, redeem funds and enforce contracts within the mint.  "),(0,o.kt)("p",null,"This is in effect an operational risk.  The idea that once I have committed my funds to the Federation, there is a risk that I will be unable to redeem or spend my coins at my discretion. "),(0,o.kt)("p",null,"This would be a failure of the mint to operate either through (1) operational failure or (2)\nmalice."),(0,o.kt)("p",null,"With regards to (1) this is mitigated through the deployment of a federation as only a sub group of guardians have to be online at any point in time in order to transact. This allows for some hardware failure, downtime or reboots to occur. "),(0,o.kt)("p",null,'Considering (2) this needs to be mitigated through a process of "knowing your federation". Please only commit funds to guardians you believe you can trust.'))}d.isMDXComponent=!0}}]);