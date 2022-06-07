"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[185],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:function(){return o},b:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8293:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(4996),u=["components"],c={title:"The End"},l=void 0,p={unversionedId:"tutorials/todo-app/the-end",id:"tutorials/todo-app/the-end",isDocsHomePage:!1,title:"The End",description:'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!',source:"@site/docs/tutorials/todo-app/the-end.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/the-end",permalink:"/docs/tutorials/todo-app/the-end",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/the-end.md",tags:[],version:"current",frontMatter:{title:"The End"},sidebar:"docs",previous:{title:"Dependencies",permalink:"/docs/tutorials/todo-app/dependencies"},next:{title:"Overview",permalink:"/docs/language/overview"}},s=[{value:"Where next?",id:"where-next",children:[]}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!'),(0,a.kt)("img",{alt:"Yay we are done with the Todo App tutorial!",src:(0,i.Z)("img/todo-app-tutorial-end.gif"),style:{border:"1px solid black"}}),(0,a.kt)("p",null,"You can check out the whole code of the app that we just built ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/examples/tutorials/TodoApp"},"here"),"."),(0,a.kt)("p",null,"If you are interested in what is Wasp actually generating in the background, you can check ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project."),(0,a.kt)("h2",{id:"where-next"},"Where next?"),(0,a.kt)("p",null,'Well, you could check the "Language" section of the docs for more details on specific parts of Wasp.',(0,a.kt)("br",{parentName:"p"}),"\n","Or, you could try to build something on your own with Wasp!  "),(0,a.kt)("p",null,"You are likely to find that some feature that you want is missing, since Wasp is still in Alpha.\nIn that case, please write to us on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," or create an issue on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Github"),", so we can learn which features to add next.",(0,a.kt)("br",{parentName:"p"}),"\n","Even beter, if you would like to contribute or help building the feature, let us know!\nYou can find more details on contributing ",(0,a.kt)("a",{parentName:"p",href:"/docs/contributing"},"here"),"."))}f.isMDXComponent=!0}}]);