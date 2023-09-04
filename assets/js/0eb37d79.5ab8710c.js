"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"CLI Reference"},i=void 0,p={unversionedId:"general/cli",id:"general/cli",title:"CLI Reference",description:"This guide provides an overview of the Wasp CLI commands, arguments, and options.",source:"@site/docs/general/cli.md",sourceDirName:"general",slug:"/general/cli",permalink:"/docs/general/cli",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/general/cli.md",tags:[],version:"current",frontMatter:{title:"CLI Reference"},sidebar:"docs",previous:{title:"Wasp Language (.wasp)",permalink:"/docs/general/language"},next:{title:"Contributing",permalink:"/docs/contributing"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Commands",id:"commands",level:2},{value:"Creating a New Project",id:"creating-a-new-project",level:3},{value:"Project Commands",id:"project-commands",level:3},{value:"Database Commands",id:"database-commands",level:3},{value:"Bash Completion",id:"bash-completion",level:3},{value:"Miscellaneous Commands",id:"miscellaneous-commands",level:3}],m={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides an overview of the Wasp CLI commands, arguments, and options."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Once ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start"},"installed"),", you can use the wasp command from your command line."),(0,r.kt)("p",null,"If you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," command without any arguments, it will show you a list of available commands and their descriptions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  wasp <command> [command-args]\n\nCOMMANDS\n  GENERAL\n    new [<name>] [args]   Creates a new Wasp project. Run it without arguments for interactive mode.\n      OPTIONS:\n        -t|--template <template-name>\n           Check out the templates list here: https://github.com/wasp-lang/starters\n\n    version               Prints current version of CLI.\n    waspls                Run Wasp Language Server. Add --help to get more info.\n    completion            Prints help on bash completion.\n    uninstall             Removes Wasp from your system.\n  IN PROJECT\n    start                 Runs Wasp app in development mode, watching for file changes.\n    start db              Starts managed development database for you.\n    db <db-cmd> [args]    Executes a database command. Run 'wasp db' for more info.\n    clean                 Deletes all generated code and other cached artifacts.\n                          Wasp equivalent of 'have you tried closing and opening it again?'.\n    build                 Generates full web app code, ready for deployment. Use when deploying or ejecting.\n    deploy                Deploys your Wasp app to cloud hosting providers.\n    telemetry             Prints telemetry status.\n    deps                  Prints the dependencies that Wasp uses in your project.\n    dockerfile            Prints the contents of the Wasp generated Dockerfile.\n    info                  Prints basic information about current Wasp project.\n    test                  Executes tests in your project.\n\nEXAMPLES\n  wasp new MyApp\n  wasp start\n  wasp db migrate-dev\n\nDocs: https://wasp-lang.dev/docs\nDiscord (chat): https://discord.gg/rzdnErX\nNewsletter: https://wasp-lang.dev/#signup\n")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"creating-a-new-project"},"Creating a New Project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp new")," to start the interactive mode for setting up a new Wasp project."),(0,r.kt)("p",{parentName:"li"},"This will prompt you to input the project name and to select a template. The chosen template will then be used to generate the project directory with the specified name."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ wasp new\n Enter the project name (e.g. my-project) \u25b8 MyFirstProject\n Choose a starter template\n [1] basic (default)\n [2] saas\n [3] todo-ts\n \u25b8 1\n\n \ud83d\udc1d --- Creating your project from the basic template... ---------------------------\n\n Created new Wasp app in ./MyFirstProject directory!\n To run it, do:\n\n     cd MyFirstProject\n     wasp start\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To skip the interactive mode and create a new Wasp project with the default template, use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp new <project-name>"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ wasp new MyFirstProject\n \ud83d\udc1d --- Creating your project from the basic template... ---------------------------\n\n Created new Wasp app in ./MyFirstProject directory!\n To run it, do:\n\n     cd MyFirstProject\n     wasp start\n")))),(0,r.kt)("h3",{id:"project-commands"},"Project Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp start")," launches the Wasp app in development mode. It automatically opens a browser tab with your application running and watches for any changes to .wasp or files in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," to automatically reflect in the browser. It also shows messages from the web app, the server and the database on stdout/stderr.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp start db")," starts the database for you. This can be very handy since you don't need to spin up your own database or provide its connection URL to the Wasp app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp clean"),' removes all generated code and other cached artifacts. If using SQlite, it also deletes the SQlite database. Think of this as the Wasp version of the classic "turn it off and on again" solution.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ wasp clean\n\nDeleting .wasp/ directory...\nDeleted .wasp/ directory.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp build")," generates the complete web app code, which is ready for ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/deployment/overview"},"deployment"),". Use this command when you're deploying or ejecting. The generated code is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/build")," folder.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp deploy")," makes it easy to get your app hosted on the web."),(0,r.kt)("p",{parentName:"li"},"Currently, Wasp offers support for ",(0,r.kt)("a",{parentName:"p",href:"https://fly.io"},"Fly.io"),". If you prefer a different hosting provider, feel free to let us know on Discord or submit a PR by updating ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc/packages/deploy"},"this TypeScript app"),"."),(0,r.kt)("p",{parentName:"li"},"Read more about automatic deployment ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/deployment/cli"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp telemetry")," displays the status of ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/telemetry"},"telemetry"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ wasp telemetry\n\nTelemetry is currently: ENABLED\nTelemetry cache directory: /home/user/.cache/wasp/telemetry/\nLast time telemetry data was sent for this project: 2021-05-27 09:21:16.79537226 UTC\nOur telemetry is anonymized and very limited in its scope: check https://wasp-lang.dev/docs/telemetry for more details.\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp deps")," lists the dependencies that Wasp uses in your project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp info")," provides basic details about the current Wasp project."))),(0,r.kt)("h3",{id:"database-commands"},"Database Commands"),(0,r.kt)("p",null,"Wasp provides a suite of commands for managing the database. These commands all begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," and primarily execute Prisma commands behind the scenes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp db migrate-dev")," synchronizes the development database with the current state of the schema (entities). If there are any changes in the schema, it generates a new migration and applies any pending migrations to the database."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"--name foo")," option allows you to specify a name for the migration, while the ",(0,r.kt)("inlineCode",{parentName:"li"},"--create-only")," option lets you create an empty migration without applying it."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp db studio")," opens the GUI for inspecting your database."))),(0,r.kt)("h3",{id:"bash-completion"},"Bash Completion"),(0,r.kt)("p",null,"To set up Bash completion, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp completion")," command and follow the instructions."),(0,r.kt)("h3",{id:"miscellaneous-commands"},"Miscellaneous Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp version")," displays the current version of the CLI."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ wasp version\n\n0.11.1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp uninstall")," removes Wasp from your system."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ wasp uninstall\n\n\ud83d\udc1d --- Uninstalling Wasp ... ------------------------------------------------------\n\n We will remove the following directories:\n   {home}/.local/share/wasp-lang/\n   {home}/.cache/wasp/\n\n We will also remove the following files:\n   {home}/.local/bin/wasp\n\n Are you sure you want to continue? [y/N]\n y\n\n \u2705 --- Uninstalled Wasp -----------------------------------------------------------\n")))))}d.isMDXComponent=!0}}]);