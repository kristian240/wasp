"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3189],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),f=l(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,i(i({ref:e},p),{},{components:r})):n.createElement(b,i({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:function(t,e,r){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,{Z:function(){return o},b:function(){return n}})},4996:function(t,e,r){r.d(e,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return e+r;var p=r.startsWith(e)?r:e+r.replace(/^\//,"");return l?t+p:p}(a,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},8552:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4996),u=["components"],c={title:"Journey to YCombinator",authors:["martinsos"],tags:["startup","wasp"]},l=void 0,p={permalink:"/blog/2021/02/23/journey-to-ycombinator",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2021-02-23-journey-to-ycombinator.md",source:"@site/blog/2021-02-23-journey-to-ycombinator.md",title:"Journey to YCombinator",description:'<img alt="Martin & Matija at YCombinator HQ"',date:"2021-02-23T00:00:00.000Z",formattedDate:"February 23, 2021",tags:[{label:"startup",permalink:"/blog/tags/startup"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:3.185,truncated:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],prevItem:{title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",permalink:"/blog/2021/03/02/wasp-alpha"},nextItem:{title:"Hello Wasp!",permalink:"/blog/2019/09/01/hello-wasp"}},s={authorsImageUrls:[void 0]},f=[],m={toc:f};function b(t){var e=t.components,r=(0,o.Z)(t,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Martin & Matija at YCombinator HQ",src:(0,i.Z)("img/us-at-ycombinator.jpg"),height:"400px"})),(0,a.kt)("p",null,"Wasp became part of Winter 2021 YCombinator batch!"),(0,a.kt)("p",null,"Here we describe our journey and how we got in after applying for the third time."))}b.isMDXComponent=!0}}]);