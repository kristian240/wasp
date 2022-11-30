"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),i=a(44996);const s=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,i.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption"},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(39960);a(44996);const s=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),o=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(i.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(s,null),n.createElement(i.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(s,null),n.createElement(i.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},28192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=a(87462),i=(a(67294),a(3905)),s=a(39960),o=a(44996),r=a(92908),l=a(70589),p=a(38610);const c={title:"How we built a Trello clone with Wasp - Waspello!",authors:["matijasos"],tags:["webdev","wasp"]},u=void 0,d={permalink:"/blog/2021/12/02/waspello",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2021-12-02-waspello.md",source:"@site/blog/2021-12-02-waspello.md",title:"How we built a Trello clone with Wasp - Waspello!",description:"Enter Waspello",date:"2021-12-02T00:00:00.000Z",formattedDate:"December 2, 2021",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:9.225,hasTruncateMarker:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],frontMatter:{title:"How we built a Trello clone with Wasp - Waspello!",authors:["matijasos"],tags:["webdev","wasp"]},prevItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"},nextItem:{title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",permalink:"/blog/2021/11/22/fundraising-learnings"}},h={authorsImageUrls:[void 0]},m=[{value:"Why Trello?",id:"why-trello",level:2},{value:"What works?",id:"what-works",level:2},{value:"It&#39;s alive \u26a1\ud83e\udd16 !!",id:"its-alive--",level:3},{value:"Under the hood \ud83d\ude98 \ud83d\udd27",id:"under-the-hood--",level:3},{value:"Entities",id:"entities",level:4},{value:"Queries and Actions (Operations)",id:"queries-and-actions-operations",level:4},{value:"Pages, routing &amp; components",id:"pages-routing--components",level:4},{value:"What doesn&#39;t work (yet)",id:"what-doesnt-work-yet",level:2},{value:"The solution",id:"the-solution",level:4},{value:"What&#39;s missing (next features)",id:"whats-missing-next-features",level:2},{value:"Become a Waspeller!",id:"become-a-waspeller",level:2}],g={toc:m};function f(e){let{components:t,...c}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enter Waspello",src:a(23596).Z,width:"1702",height:"774"})),(0,i.kt)("p",{align:"center"},(0,i.kt)(s.Z,{to:"https://waspello.netlify.app/",mdxType:"Link"},"Try Waspello here!")," | ",(0,i.kt)(s.Z,{to:"https://github.com/wasp-lang/wasp/blob/release/examples/waspello/main.wasp",mdxType:"Link"},"See the code")),(0,i.kt)("p",null,"We've built a Trello clone using Wasp! Read on to learn how it went and how you can contribute. "),(0,i.kt)(l.ZP,{mdxType:"WaspIntro"}),(0,i.kt)(r.Z,{mdxType:"InBlogCta"}),(0,i.kt)("h2",{id:"why-trello"},"Why Trello?"),(0,i.kt)("p",null,"While building Wasp, our goal is to use it as much as we can to build our projects and play with it, so we can learn what works and what we should do next. This is why Trello was a great choice of app to build with Wasp - it is one of the most well-known full-stack web apps, it's very simple and intuitive to use  but also covers a good portion of features used by today's modern web apps."),(0,i.kt)("p",null,"So let's dig in and see and how it went - what works, what doesn't and, what's missing/coming next!"),(0,i.kt)("h2",{id:"what-works"},"What works?"),(0,i.kt)("h3",{id:"its-alive--"},"It's alive \u26a1\ud83e\udd16 !!"),(0,i.kt)("p",null,"The good news is all the basic functionality is here - Waspello users can signup/log in which brings them to their project board where they can perform CRUD operations on lists and cards - create them, edit them, move them around, etc. Let's see it in action:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Waspello in action",src:a(97002).Z,width:"1682",height:"954"})),(0,i.kt)("p",{align:"center",class:"image-caption"},"Waspello in action!"),(0,i.kt)("p",null,"As you can see things work, but not everything is perfect (e.g. there is a delay when creating/moving a card) - we'll examine why is that so a bit later."),(0,i.kt)("h3",{id:"under-the-hood--"},"Under the hood \ud83d\ude98 \ud83d\udd27"),(0,i.kt)("p",null,"Here is a simple visual overview of Waspello's code anatomy (which applies to every Wasp app):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Waspello code anatomy",src:a(11501).Z,width:"731",height:"545"})),(0,i.kt)("p",{align:"center",class:"image-caption"},"Waspello code anatomy"),(0,i.kt)("p",null,"Let's now dig in a bit deeper and shortly examine each of the concepts Wasp supports (page, query, entity, ...) and learn through code samples how to use it to implement Waspello."),(0,i.kt)("h4",{id:"entities"},"Entities"),(0,i.kt)("p",null,"It all starts with a data model definition (called ",(0,i.kt)("inlineCode",{parentName:"p"},"entity")," in Wasp), which is defined via Prisma Schema Language:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Defining entities via Prisma Schema Language"',title:'"main.wasp',"|":!0,Defining:!0,entities:!0,via:!0,Prisma:!0,Schema:!0,'Language"':!0},"// Entities\n\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    username    String  @unique\n    password    String\n    lists       List[]\n    cards       Card[]\npsl=}\n\nentity List {=psl\n    id          Int     @id @default(autoincrement())\n    name        String\n    pos         Float\n\n    // List has a single author.\n    user        User    @relation(fields: [userId], references: [id])\n    userId      Int\n\n    cards       Card[]\npsl=}\n\nentity Card {=psl\n    id          Int     @id @default(autoincrement())\n    title       String\n    pos         Float\n\n    // Card belongs to a single list.\n    list        List    @relation(fields: [listId], references: [id])\n    listId      Int\n\n    // Card has a single author.\n    author      User    @relation(fields: [authorId], references: [id])\n    authorId    Int\npsl=}\n")),(0,i.kt)("p",null,"Those three entities are all we need! Wasp uses Prisma to create a database schema underneath and allows the developer to query it through its generated SDK."),(0,i.kt)("h4",{id:"queries-and-actions-operations"},"Queries and Actions (Operations)"),(0,i.kt)("p",null,"After we've defined our data models, the next step is to do something with them! We can read/create/update/delete an entity and that is what ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," mechanisms are for. Below follows an example from the Waspello code that demonstrates how it works."),(0,i.kt)("p",null,"The first step is to declare to Wasp there will be a query, point to the actual function containing the query logic, and state from which entities it will be reading information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Declaration of a query in Wasp"',title:'"main.wasp',"|":!0,Declaration:!0,of:!0,a:!0,query:!0,in:!0,'Wasp"':!0},'query getListsAndCards {\n    // Points to the function which contains query logic.\n    fn: import { getListsAndCards } from "@server/queries.js",\n\n    // This query depends on List and Card entities.\n    // If any of them changes this query will get re-fetched (cache invalidation).\n    entities: [List, Card]\n}\n')),(0,i.kt)("p",null,"The main point of this declaration is for Wasp to be aware of the query and thus be able to ",(0,i.kt)("strong",{parentName:"p"},"do a lot of heavy lifting for us - e.g. it will make the query available to the client without any extra code"),", all that developer needs to do is import it in their React component. ",(0,i.kt)("strong",{parentName:"p"},"Another big thing is cache invalidation / automatic re-fetching of the query once the data changes")," (this is why it is important to declare which entities it depends on)."),(0,i.kt)("p",null,"The remaining step is to write the function with the query logic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.js | Query logic, using Prisma SDK via Node.js"',title:'"src/server/queries.js',"|":!0,Query:!0,"logic,":!0,using:!0,Prisma:!0,SDK:!0,via:!0,'Node.js"':!0},"export const getListsAndCards = async (args, context) => {\n  // Only authenticated users can execute this query.\n  if (!context.user) { throw new HttpError(403) }\n\n  return context.entities.List.findMany({\n    // We want to make sure user can access only their own cards.\n    where: { user: { id: context.user.id } },\n    include: { cards: true }\n  })\n}\n")),(0,i.kt)("p",null,"This is just a regular Node.js function, there are no limits on what you can return! All the stuff provided by Wasp (user data, Prisma SDK for a specific entity) comes in a ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," variable."),(0,i.kt)("p",null,"The code for actions is very similar (we just need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," keyword instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),") so I won't repeat it here. You can check out the code for ",(0,i.kt)("inlineCode",{parentName:"p"},"updateCard")," action ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/release/examples/waspello/main.wasp#L103"},"here"),"."),(0,i.kt)("h4",{id:"pages-routing--components"},"Pages, routing & components"),(0,i.kt)("p",null,"To display all the nice data we have, we'll use React components. There are no limits to how you can use React components within Wasp, the only one is that each ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," has its root component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Declaration of a page & route in Wasp"',title:'"main.wasp',"|":!0,Declaration:!0,of:!0,a:!0,page:!0,"&":!0,route:!0,in:!0,'Wasp"':!0},'route MainRoute { path: "/", to: Main }\npage Main {\n    authRequired: true,\n    component: import Main from "@client/MainPage.js"\n}\n')),(0,i.kt)("p",null,"All pretty straightforward so far! As you can see here, Wasp also provides ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/features#authentication--authorization"},"authentication out-of-the-box"),"."),(0,i.kt)("p",null,"Currently, the majority of the client logic of Waspello is contained in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/client/MainPage.js")," (we should break it down a little \ud83d\ude05 - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/334"},"you can help us!"),"). Just to give you an idea, here's a quick glimpse into it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/MainPage.js | Using React component in Wasp"',title:'"src/client/MainPage.js',"|":!0,Using:!0,React:!0,component:!0,in:!0,'Wasp"':!0},"// \"Special\" imports provided by Wasp.\nimport { useQuery } from '@wasp/queries'\nimport getListsAndCards from '@wasp/queries/getListsAndCards'\nimport createList from '@wasp/actions/createList'\n\nconst MainPage = ({ user }) => {\n  // Fetching data via useQuery.\n  const { data: listsAndCards, isFetchingListsAndCards, errorListsAndCards }\n    = useQuery(getListsAndCards)\n\n  // A lot of data transformations and sub components.\n  ...\n\n  // Display lists and cards.\n  return (\n    ...\n  )\n}\n")),(0,i.kt)("p",null,"Once you've defined a query or action as described above, you can immediately import it into your client code as shown in the code sample, by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@wasp")," prefix in the import path. ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," ensures reactivity so once the data changes the query will get re-fetched. You can find more details about it ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/features#usequery"},"here"),"."),(0,i.kt)("p",null,"This is pretty much it from the stuff that works \ud83d\ude04 ! I kinda rushed a bit through things here - for more details on all Wasp features and to build your first app with Wasp, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"docs"),"."),(0,i.kt)("h2",{id:"what-doesnt-work-yet"},"What doesn't work (yet)"),(0,i.kt)("p",null,"The main problem of the current implementation of Waspello is the ",(0,i.kt)("strong",{parentName:"p"},"lack of support for optimistic UI updates in Wasp"),". What this means is that currently, when an entity-related change is made (e.g. a card is moved from one list to another), we have to wait until that change is fully executed on the server until it is visible in the UI, which causes a noticeable delay.",(0,i.kt)("br",{parentName:"p"}),"\n","In many cases that is not an issue, but when UI elements are all visible at once and it is expected from them to be updated immediately, then it is noticeable. This is also one of the main reasons why we chose to work on Waspello - to have a benchmark/sandbox for this feature! Due to this issue, here's how things currently look like:"),(0,i.kt)(p.Z,{alt:"Waspello - no optimistic UI update",source:"img/waspello-no-opt-UI-updates.gif",caption:"Without an optimistic UI update, there is a delay",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,'You can notice the delay between the moment the card is dropped on the "Done" list and the moment it becomes a part of that list. The reason is that at the moment of dropping the card on "Done" list, the API request with the change is sent to the server, and only when that change is fully processed on the server and saved to the database, the query ',(0,i.kt)("inlineCode",{parentName:"p"},"getListsAndCards")," returns the correct info and consequently, UI is updated to the correct state.",(0,i.kt)("br",{parentName:"p"}),"\n",'That is why upon dropping on "Done", the card first goes back to the original list (because the change is not saved in db yet, so ',(0,i.kt)("inlineCode",{parentName:"p"},"useQuery(getListsAndCards)"),' still returns the "old" state), it waits a bit until the API request is processed successfully, and just then the change gets reflected in the UI.'),(0,i.kt)("h4",{id:"the-solution"},"The solution"),(0,i.kt)("p",null,"A typical approach for solving this issue is to ",(0,i.kt)("strong",{parentName:"p"},"make the client a bit more self-confident, in a way that it doesn't wait for the confirmation from the server but rather immediately updates the UI, at the same time or even before the API request is fired"),". If it then turns out something went wrong on the server (which typically shouldn't happen), it reverses the change and shows an error message. Thus the name optimistic UI update, since the client assumes in advance that everything will go well to provide a nicer UX."),(0,i.kt)("p",{align:"center"},(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Waspello - the client being brave",src:(0,o.Z)("img/waspello-client-being-brave.gif")}),(0,i.kt)("figcaption",{class:"image-caption"},"The client when performing an optimistic UI update"))),(0,i.kt)("p",null,'This is one of the most complex and error-prone features when developing web apps today and that is why we are super excited to tackle it in Wasp and make the experience as smooth as possible! We are currently in the "figuring out the solution" stage and you can ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/63"},"track/join the discussion on GitHub"),"!"),(0,i.kt)("h2",{id:"whats-missing-next-features"},"What's missing (next features)"),(0,i.kt)("p",null,"Although it looks super simple at the first glance, Trello is in fact a huge app with lots and lots of cool features hidden under the surface! Here are some of the more obvious ones that are currently not supported in Waspello:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Users can have multiple boards"),', for different projects (currently we have no notion of a "Board" entity in Waspello at all, so there is implicitly only one)'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Detailed card view"),' - when clicked on a card, a "full" view with extra options opens'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search")," - user can search for a specific list/card"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Collaboration")," - multiple users can participate on the same board")),(0,i.kt)("p",null,"And many more - e.g. support for workspaces (next level of the hierarchy, a collection of boards), card labels, filters, ... . It is very helpful to have such a variety of features since we can use it as a testing ground for Wasp and use it as a guiding star towards Beta/1.0!"),(0,i.kt)("h2",{id:"become-a-waspeller"},"Become a Waspeller!"),(0,i.kt)("p",{align:"center"},(0,i.kt)("figure",{style:{width:"55%"}},(0,i.kt)("img",{alt:"Waspello propaganda",src:(0,o.Z)("img/waspello-propaganda.png")}),(0,i.kt)("figcaption",{class:"image-caption"},"Lightweight Waspello propaganda"))),(0,i.kt)("p",null," If you want to get involved with OSS and at the same time familiarize yourself with Wasp, this is a great way to get started - feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/337"},"choose one of the features listed here or add your own")," and help us make Waspello the best demo productivity app out there!"),(0,i.kt)("p",null,"Also, make sure to ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"join our community on Discord"),". We\u2019re always there and are looking forward to seeing what you build!"),(0,i.kt)(r.Z,{mdxType:"InBlogCta"}))}f.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),i=(a(67294),a(3905));const s={toc:[]};function o(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}o.isMDXComponent=!0},11501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspello-code-anatomy-9643f6079036dbb4e828275fe700f10f.png"},97002:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspello-in-action-6ba87b72af0af99a4c4acb9adf0cf3bb.gif"},23596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspello-screenshot-cfb8c8229fb035e7bbac6ca19cafd805.png"}}]);