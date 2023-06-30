"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(a),g=o,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},71582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={title:"Auth UI"},l="Auth UI",r={unversionedId:"guides/auth-ui",id:"guides/auth-ui",title:"Auth UI",description:"Auth UI",source:"@site/docs/guides/auth-ui.md",sourceDirName:"guides",slug:"/guides/auth-ui",permalink:"/docs/guides/auth-ui",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/guides/auth-ui.md",tags:[],version:"current",frontMatter:{title:"Auth UI"},sidebar:"docs",previous:{title:"Examples",permalink:"/docs/examples"},next:{title:"GitHub",permalink:"/docs/integrations/github"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"The UI changes dynamically as you update the config",id:"the-ui-changes-dynamically-as-you-update-the-config",level:3},{value:"Available components",id:"available-components",level:2},{value:"Login form",id:"login-form",level:3},{value:"Signup form",id:"signup-form",level:3},{value:"Forgot password form",id:"forgot-password-form",level:3},{value:"Reset password form",id:"reset-password-form",level:3},{value:"Verify email form",id:"verify-email-form",level:3},{value:"Customization",id:"customization",level:2},{value:"Theme colors override",id:"theme-colors-override",level:3},{value:"Adding your logo",id:"adding-your-logo",level:3},{value:"Social buttons layout",id:"social-buttons-layout",level:3},{value:"Example of a custom login form",id:"example-of-a-custom-login-form",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"auth-ui"},"Auth UI"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Auth UI",src:a(23507).Z,width:"1068",height:"464"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"the-ui-changes-dynamically-as-you-update-the-config"},"The UI changes dynamically as you update the config"),(0,o.kt)("p",null,"Based on your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasp")," file on the authentication providers you enabled, the Auth UI will show the corresponding buttons. "),(0,o.kt)("p",null,"For example, if you only enabled e-mail authentication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  //...\n  auth: {\n    methods: {\n      email: {},\n    },\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"We'll get this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Auth UI",src:a(75118).Z,width:"1068",height:"464"})),(0,o.kt)("p",null,"And then we enable Google and Github:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp" {7-8}',title:'"main.wasp"',"{7-8}":!0},'app MyApp {\n  title: "My app",\n  //...\n  auth: {\n    methods: {\n      email: {},\n      google: {},\n      github: {},\n    },\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"The form will automatically update itself to look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Auth UI",src:a(53924).Z,width:"1271",height:"565"})),(0,o.kt)("h2",{id:"available-components"},"Available components"),(0,o.kt)("p",null,"Let's take a look at the components that are available for you to use."),(0,o.kt)("h3",{id:"login-form"},"Login form"),(0,o.kt)("p",null,"Useful for ",(0,o.kt)("span",{className:"pill pill-username-password"},"username & password")," and ",(0,o.kt)("span",{className:"pill pill-email"},"email")," authentication."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Login form",src:a(75118).Z,width:"1068",height:"464"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginForm")," component to build your own login form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/LoginPage.tsx"',title:'"client/LoginPage.tsx"'},"import { LoginForm } from '@wasp/auth/forms/Login'\n\n// Use it like this\n<LoginForm />\n")),(0,o.kt)("h3",{id:"signup-form"},"Signup form"),(0,o.kt)("p",null,"Useful for ",(0,o.kt)("span",{className:"pill pill-username-password"},"username & password")," and ",(0,o.kt)("span",{className:"pill pill-email"},"email")," authentication."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Signup form",src:a(6219).Z,width:"1017",height:"435"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignupForm")," component to build your signup form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/SignupPage.tsx"',title:'"client/SignupPage.tsx"'},"import { SignupForm } from '@wasp/auth/forms/Signup'\n\n// Use it like this\n<SignupForm />\n")),(0,o.kt)("h3",{id:"forgot-password-form"},"Forgot password form"),(0,o.kt)("p",null,"Useful for ",(0,o.kt)("span",{className:"pill pill-email"},"email")," authentication."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Forgot password form",src:a(76117).Z,width:"1007",height:"430"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgotPasswordForm")," component to build your own forgot password form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/ForgotPasswordPage.tsx"',title:'"client/ForgotPasswordPage.tsx"'},"import { ForgotPasswordForm } from '@wasp/auth/forms/ForgotPassword'\n\n// Use it like this\n<ForgotPasswordForm />\n")),(0,o.kt)("h3",{id:"reset-password-form"},"Reset password form"),(0,o.kt)("p",null,"Useful for ",(0,o.kt)("span",{className:"pill pill-email"},"email")," authentication."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reset password form",src:a(61048).Z,width:"1037",height:"492"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResetPasswordForm")," component to build your reset password form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/ResetPasswordPage.tsx"',title:'"client/ResetPasswordPage.tsx"'},"import { ResetPasswordForm } from '@wasp/auth/forms/ResetPassword'\n\n// Use it like this\n<ResetPasswordForm />\n")),(0,o.kt)("h3",{id:"verify-email-form"},"Verify email form"),(0,o.kt)("p",null,"Useful for ",(0,o.kt)("span",{className:"pill pill-email"},"email")," authentication."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Verify email form",src:a(57392).Z,width:"1036",height:"381"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyEmailForm")," component to build your own verify email form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/VerifyEmailPage.tsx"',title:'"client/VerifyEmailPage.tsx"'},"import { VerifyEmailForm } from '@wasp/auth/forms/VerifyEmail'\n\n// Use it like this\n<VerifyEmailForm />\n")),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"You customize all of the available forms by passing props to them. "),(0,o.kt)("p",null,"Props you can pass to all of the forms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appearance")," - appearance of the form, see below (optional)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logo")," - path to your logo (optional)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"socialLayout")," - layout of the social buttons, which can be ",(0,o.kt)("inlineCode",{parentName:"li"},"vertical")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"horizontal")," (optional)")),(0,o.kt)("h3",{id:"theme-colors-override"},"Theme colors override"),(0,o.kt)("p",null,"We used ",(0,o.kt)("a",{parentName:"p",href:"https://stitches.dev/"},"Stitches")," to style the Auth UI. You can customize the styles by overriding the default theme tokens. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/LoginPage.tsx"',title:'"client/LoginPage.tsx"'},"import { LoginForm } from '@wasp/auth/forms/Login'\n\n// Define your appearance\nconst appearance = {\n  colors: {\n    brand: '#5969b8', // blue\n    brandAccent: '#de5998', // pink\n    submitButtonText: 'white',\n  },\n}\n\n// Use it like this\n<LoginForm appearance={appearance} />\n")),(0,o.kt)("p",null,"See the list of all available tokens ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/main/waspc/data/Generator/templates/react-app/src/stitches.config.js"},"here"),". We'll be adding more tokens soon \ud83d\ude42"),(0,o.kt)("h3",{id:"adding-your-logo"},"Adding your logo"),(0,o.kt)("p",null,"You can add your logo to the Auth UI by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"logo")," prop to any of the components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/LoginPage.tsx"',title:'"client/LoginPage.tsx"'},"import { LoginForm } from '@wasp/auth/forms/Login'\n\n// Use it like this\n<LoginForm logo=\"/img/logo.png\" />\n")),(0,o.kt)("h3",{id:"social-buttons-layout"},"Social buttons layout"),(0,o.kt)("p",null,"You can change the layout of the social buttons by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"socialLayout")," prop to any of the components."),(0,o.kt)("p",null,"If we pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"vertical"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/LoginPage.tsx"',title:'"client/LoginPage.tsx"'},"import { LoginForm } from '@wasp/auth/forms/Login'\n\n// Use it like this\n<LoginForm\n  socialLayout=\"vertical\"\n/>\n")),(0,o.kt)("p",null,"We get this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Vertical social buttons",src:a(86676).Z,width:"1337",height:"664"})),(0,o.kt)("h3",{id:"example-of-a-custom-login-form"},"Example of a custom login form"),(0,o.kt)("p",null,"If we provide the logo and custom colors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/LoginPage.tsx"',title:'"client/LoginPage.tsx"'},"import { LoginForm } from '@wasp/auth/forms/Login'\n\nimport { appearance } from './appearance'\nimport todoLogo from '../../todoLogo.png'\n\n// Use it like this\n<LoginForm\n  appearance={appearance}\n  logo={todoLogo}\n/>\n")),(0,o.kt)("p",null,"We get this:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/authui/custom_login.gif",alt:"Custom login form"})))}c.isMDXComponent=!0},23507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/all_screens-4474bfaf188590d975e11d5b4e04b0ae.gif"},57392:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/email_verification-b1919c242edc678175636485f6fc2264.png"},76117:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/forgot_password-493aa5ed988f04edef5cf4d400d51b95.png"},75118:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-1dad984cebbef0e4bd2bc0c008d2d2ff.png"},53924:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multiple_providers-68bde90e9254bf20b979986b6fd37c13.png"},61048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reset_password-fe01997060cbe04a86c134098b59df46.png"},6219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/signup-4362e29083e15457eb5a16990f57819a.png"},86676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vertical_social_buttons-98a5bea6f132202b7a94711a661267c0.png"}}]);