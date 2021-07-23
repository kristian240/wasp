(self.webpackChunkweb=self.webpackChunkweb||[]).push([[185],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(2263),o=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2561:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=r(4996),u=["components"],c={title:"The End"},s=void 0,l={unversionedId:"tutorials/todo-app/the-end",id:"tutorials/todo-app/the-end",isDocsHomePage:!1,title:"The End",description:'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!',source:"@site/docs/tutorials/todo-app/the-end.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/the-end",permalink:"/web/docs/tutorials/todo-app/the-end",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/docs/tutorials/todo-app/the-end.md",version:"current",frontMatter:{title:"The End"},sidebar:"docs",previous:{title:"Dependencies",permalink:"/web/docs/tutorials/todo-app/dependencies"},next:{title:"Overview",permalink:"/web/docs/language/overview"}},p=[{value:"Where next?",id:"where-next",children:[]}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!'),(0,i.kt)("img",{alt:"Yay we are done with the Todo App tutorial!",src:(0,a.Z)("img/todo-app-tutorial-end.gif"),style:{border:"1px solid black"}}),(0,i.kt)("p",null,"You can check out the whole code of the app that we just built ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/master/examples/tutorials/TodoApp"},"here"),"."),(0,i.kt)("p",null,"If you are interested in what is Wasp actually generating in the background, you can check ",(0,i.kt)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project."),(0,i.kt)("h2",{id:"where-next"},"Where next?"),(0,i.kt)("p",null,'Well, you could check the "Language" section of the docs for more details on specific parts of Wasp.',(0,i.kt)("br",{parentName:"p"}),"\n","Or, you could try to build something on your own with Wasp!  "),(0,i.kt)("p",null,"You are likely to find that some feature that you want is missing, since Wasp is still in Alpha.\nIn that case, please write to us on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," or create an issue on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Github"),", so we can learn which features to add next.",(0,i.kt)("br",{parentName:"p"}),"\n","Even beter, if you would like to contribute or help building the feature, let us know!\nYou can find more details on contributing ",(0,i.kt)("a",{parentName:"p",href:"/web/docs/contributing"},"here"),"."))}f.isMDXComponent=!0}}]);