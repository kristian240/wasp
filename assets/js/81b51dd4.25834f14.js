(self.webpackChunkweb=self.webpackChunkweb||[]).push([[783],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2908:function(e,t,n){"use strict";var r=n(7294),o=n(6742),a=(n(4996),function(){return r.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")});t.Z=function(){return r.createElement("p",null,r.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),r.createElement(a,null),r.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),r.createElement(a,null),r.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),o=n(7294),a=n(3727),i=n(2263),u=n(3919),c=n(412),s=(0,o.createContext)({collectLink:function(){}}),l=n(4996),p=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var t,n,d=e.isNavLink,m=e.to,h=e.href,g=e.activeClassName,b=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,k=void 0===y||y,w=(0,r.Z)(e,f),O=(0,i.Z)().siteConfig,j=O.trailingSlash,E=O.baseUrl,Z=(0,l.C)().withBaseUrl,C=(0,o.useContext)(s),P=m||h,N=(0,u.Z)(P),W=null==P?void 0:P.replace("pathname://",""),T=void 0!==W?(n=W,k&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;T&&N&&(T=(0,p.applyTrailingSlash)(T,{trailingSlash:j,baseUrl:E}));var S,U=(0,o.useRef)(!1),D=d?a.OL:a.rU,x=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!x&&N&&null!=T&&window.docusaurus.prefetch(T),function(){x&&S&&S.disconnect()}}),[T,x,N]);var M=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,A=!T||!N||M;return T&&N&&!M&&!v&&C.collectLink(T),A?o.createElement("a",Object.assign({href:T},P&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(D,Object.assign({},w,{onMouseEnter:function(){U.current||null==T||(window.docusaurus.preload(T),U.current=!0)},innerRef:function(e){var t,n;x&&e&&N&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(S=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))}))).observe(t))},to:T||""},d&&{isActive:b,activeClassName:g}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,a=e.split(/[#?]/)[0],i="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(a,i)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3630:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(2908),n(589),["components"]),u={title:"How to win a hackathon. Brief manual.",authors:["maksym36ua"],tags:["wasp","gitpod","hackathon"]},c=void 0,s={permalink:"/blog/2022/06/01/gitpod-hackathon-guide",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-06-01-gitpod-hackathon-guide.md",source:"@site/blog/2022-06-01-gitpod-hackathon-guide.md",title:"How to win a hackathon. Brief manual.",description:"Wasp app deploye to Gitpod",date:"2022-06-01T00:00:00.000Z",formattedDate:"June 1, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"gitpod",permalink:"/blog/tags/gitpod"},{label:"hackathon",permalink:"/blog/tags/hackathon"}],readingTime:3.81,truncated:!0,authors:[{name:"Maksym Khamrovskyi",title:"DevRel @ Wasp",key:"maksym36ua"}],nextItem:{title:"Meet the team - Filip Sodi\u0107, Founding Engineer",permalink:"/blog/2022/05/31/filip-intro"}},l={authorsImageUrls:[void 0]},p=[],f={toc:p};function d(e){var t=e.components,u=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wasp app deploye to Gitpod",src:n(468).Z})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},'"All good thoughts and ideas mean nothing without the proper tools to achieve them."'),(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Jason Statham"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TL;DR:")," Wasp allows you to build and deploy a full-stack JS web app with a single config file. ",(0,a.kt)("a",{parentName:"p",href:"https://gitpod.io/"},"Gitpod")," spins up fresh, automated developer environments in the cloud, in seconds. A perfect tandem to win a hackathon and enjoy free pizza even before other teams even started to set up their coding env and realized they need to update their node version."))}d.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],u={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}c.isMDXComponent=!0},468:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gitpod-hackathon-preview-cff1d9f6eb48c32d5736ebd859b1c63f.png"}}]);