(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7ljp":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"===typeof e?e(t):l(l({},t),e)),a},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return a?r.a.createElement(b,l(l({ref:t},s),{},{components:a})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"===typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},Ff2n:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},GtyO:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/deploy-app-engine-from-circleci",function(){return a("PC13")}])},PC13:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),o=a("HaE+"),c=a("q1tI"),l=a.n(c),i=a("Yp5c"),s=a("wx14"),u=a("Ff2n"),p=a("7ljp"),m=(l.a.createElement,{}),d="wrapper";function b(e){var t=e.components,a=Object(u.a)(e,["components"]);return Object(p.a)(d,Object(s.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(p.a)("p",null,"I have implemented continuous delivery of Google AppEngine applications using CircleCI:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"Deploy to staging on pushing to ",Object(p.a)("inlineCode",{parentName:"li"},"master")," branch."),Object(p.a)("li",{parentName:"ul"},"Deploy to production on pushing a tag matching ",Object(p.a)("inlineCode",{parentName:"li"},"/^v\\d+\\.\\d+\\.\\d+$/"),".")),Object(p.a)("p",null,"This configuration is quite useful and I'm sure I'll have a chance to reuse it. In this article I describe the implementation details."),Object(p.a)("h2",null,"Create a Service Account"),Object(p.a)("p",null,"At first, I created a service account that will be used to authenticate Cloud SDK in CircleCI:"),Object(p.a)("ol",null,Object(p.a)("li",{parentName:"ol"},"Create a new account at ",Object(p.a)("a",Object(s.a)({parentName:"li"},{href:"https://console.cloud.google.com/iam-admin/serviceaccounts"}),"Service Accounts")," of Google Cloud Platform Console:",Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},'Named "circleci" to make it easy to guess what is\'s for.'),Object(p.a)("li",{parentName:"ul"},"Created a key and download it in JSON."))),Object(p.a)("li",{parentName:"ol"},"Attach roles to the created service account at ",Object(p.a)("a",Object(s.a)({parentName:"li"},{href:"https://console.cloud.google.com/iam-admin/iam"}),"IAM")," page:",Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"App Engine Deployer (",Object(p.a)("inlineCode",{parentName:"li"},"appengine.deployer"),")"),Object(p.a)("li",{parentName:"ul"},"App Engine Service Admin (",Object(p.a)("inlineCode",{parentName:"li"},"appengine.serviceAdmin"),")"),Object(p.a)("li",{parentName:"ul"},"Cloud Build Editor (",Object(p.a)("inlineCode",{parentName:"li"},"cloudbuild.builds.editor"),")"),Object(p.a)("li",{parentName:"ul"},"Storage Object Creator (",Object(p.a)("inlineCode",{parentName:"li"},"storage.objectCreator"),")"),Object(p.a)("li",{parentName:"ul"},"Storage Object Viewer (",Object(p.a)("inlineCode",{parentName:"li"},"storage.objectViewer"),")")))),Object(p.a)("p",null,"Note that it may take a few minutes for the results to be reflected."),Object(p.a)("p",null,"When you create a new GCP project, a ",Object(p.a)("inlineCode",{parentName:"p"},"xxx@cloudbuild.gserviceaccount.com")," service account which has a Cloud Build Service Account role is created. You also need to attach the following role to the service account:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"Storage Object Viewer")),Object(p.a)("h2",null,"Configure CircleCI"),Object(p.a)("p",null,"My GAE application uses ",Object(p.a)("inlineCode",{parentName:"p"},"nodejs10")," runtime. I added following npm run scripts:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"npm run test"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Run tests"))),Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"npm run build"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Build project and put artifacts to the ",Object(p.a)("inlineCode",{parentName:"li"},"/build")," directory.")))),Object(p.a)("p",null,"And I implemented CD using those scripts."),Object(p.a)("h3",null,"Cloud SDK"),Object(p.a)("p",null,"I use ",Object(p.a)("a",Object(s.a)({parentName:"p"},{href:"https://hub.docker.com/r/google/cloud-sdk/"}),"google/cloud-sdk")," image which was described in ",Object(p.a)("a",Object(s.a)({parentName:"p"},{href:"/blog/2019/01/google-cloud-sdk-in-docker"}),"How to Use Google Cloud SDK Using Docker"),":"),Object(p.a)("p",null,"Set the downloaded JSON key as ",Object(p.a)("inlineCode",{parentName:"p"},"GCLOUD_SERVICE_KEY")," environment variable, then do following command to authenticate Cloud SDK:"),Object(p.a)("pre",{className:"language-bash"},Object(p.a)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),Object(p.a)("span",Object(s.a)({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(p.a)("span",Object(s.a)({parentName:"code"},{className:"token variable"}),"$GCLOUD_SERVICE_KEY")," ",Object(p.a)("span",Object(s.a)({parentName:"code"},{className:"token operator"}),"|")," gcloud auth activate-service-account --key-file",Object(p.a)("span",Object(s.a)({parentName:"code"},{className:"token operator"}),"="),"-\n")),Object(p.a)("h3",null,"workspace"),Object(p.a)("p",null,"Build artifacts (generated by ",Object(p.a)("inlineCode",{parentName:"p"},"npm run build"),") are required to deploy."),Object(p.a)("p",null,"Node.js is required to run ",Object(p.a)("inlineCode",{parentName:"p"},"npm")," command but the google/cloud-sdk image does not contain Node.js runtime. There are some way to solve this problem:"),Object(p.a)("ol",null,Object(p.a)("li",{parentName:"ol"},"Create a Docker image with both Node.js and Cloud SDK and use it."),Object(p.a)("li",{parentName:"ol"},"Store build artifacts somewhere and use it in the Cloud SDK container.")),Object(p.a)("p",null,"I started by 1. but finally found that ",Object(p.a)("a",Object(s.a)({parentName:"p"},{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}),"I can use workspaces to share files across jobs")," so adopted 2."),Object(p.a)("h3",null,"Deploy"),Object(p.a)("p",null,Object(p.a)("inlineCode",{parentName:"p"},"gcloud app deploy")," command deploys your application to GAE. I used the following options:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"--version"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Give the version name."),Object(p.a)("li",{parentName:"ul"},"You can replace an existing version by specifing the same version name."))),Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"--no-promote"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Don't route traffic to the newly created version after deployment.")))),Object(p.a)("h2",null,"Conclusion"),Object(p.a)("p",null,"You may think it's hard to set up continuous delivery in the early stages of a project. However, from a medium- to long-term perspective, I think these efforts are worthwhile."),Object(p.a)("h2",null,"References"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",Object(s.a)({parentName:"li"},{href:"https://circleci.com/docs/2.0/google-auth/"}),"Authorizing the Google Cloud SDK - CircleCI")),Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",Object(s.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/docs/authorizing#authorizing_with_a_service_account"}),"Authorizing Cloud SDK tools \xa0|\xa0 Cloud SDK Documentation \xa0|\xa0 Google Cloud")),Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",Object(s.a)({parentName:"li"},{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}),"Using Workflows to Schedule Jobs - CircleCI")),Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",Object(s.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/gcloud/reference/app/deploy"}),"gcloud app deploy \xa0|\xa0 Cloud SDK \xa0|\xa0 Google Cloud"))))}b.isMDXComponent=!0;var f=l.a.createElement,O=function(e){var t=e.meta;return f(i.a,{meta:t},f(b,null))};O.getInitialProps=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a("n1xW"),n=t.entries,e.abrupt("return",{meta:n["blog/2019/01/deploy-app-engine-from-circleci"]});case 2:case"end":return e.stop()}}),e)})));t.default=O},Yp5c:function(e,t,a){"use strict";a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return x}));var n=a("q1tI"),r=a.n(n),o=a("8Kt/"),c=a.n(o),l=a("YFqc"),i=a.n(l),s=a("nOHt"),u=a("TSYQ"),p=a.n(u),m=a("wd/R"),d=a.n(m),b=a("IP2g"),f=a("he5r"),O=r.a.createElement,j=function(e){return O("aside",{className:p()("widget mb-4",e.className)},O("h1",{className:"title font-weight-bold"},e.title),e.children)},h=a("7O5W"),g=a("wHSu"),N=a("8tEE");h.b.add(g.a,g.b,g.c,N.a,N.b);var y=r.a.createElement,w=function(e){return e||"https://yuku.takahashi.coffee".concat(f.a)},v=Object(s.withRouter)((function(e){return y("div",{className:"blogpage container"},y(c.a,null,y("title",null,e.meta.title," - ",f.c),y("meta",{name:"description",content:e.meta.description}),y("meta",{name:"twitter:card",content:"summary"}),y("meta",{name:"twitter:creator",content:"@yuku_t"}),y("meta",{property:"fb:app_id",content:f.b}),y("meta",{property:"og:title",content:"".concat(e.meta.title," - ").concat(f.c)}),y("meta",{property:"og:type",content:"article"}),y("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(e.router.pathname)}),y("meta",{property:"og:image",content:w()}),y("meta",{property:"og:description",content:e.meta.description}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),y("div",{className:"row"},y("main",{className:p()("col-xl-8",e.className)},y("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},y("meta",{itemProp:"author",content:"Yuku Takahashi"}),y("meta",{itemProp:"datePublished",content:e.meta.publishedAt}),e.meta.modifiedAt&&y("meta",{itemProp:"dateModified",content:e.meta.modifiedAt}),y("meta",{itemProp:"image",content:w()}),y("header",{className:"mb-4 header"},y("h1",{className:"headline",itemProp:"headline"},e.meta.title),y("ul",{className:"list-inline text-dark font-weight-light"},y("li",{className:"list-inline-item"},y("span",{className:"ml-1"},d()(e.meta.publishedAt).format("YYYY-MM-DD HH:mm"))),y("li",{className:"list-inline-item"},e.meta.tags.map((function(e,t){return[t>0?",":null,y("span",{key:t,className:"ml-1"},"#",e)]}))))),y("section",{className:"mb-4 body",itemProp:"articleBody"},e.children))),y("div",{className:"col-xl-4"},y("div",{className:"pl-xl-2"},y(j,{title:"About Me"},y("div",null,y("img",{src:f.a,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),y("p",null,"Software Engineer at FLYWHEEL. Working mainly on recommendation systems in these days. Ex-Qiita CTO.",y(i.a,{href:"/about"},y("a",{href:"/about",style:{marginLeft:"4px"}},"Read more")),"."))),y(j,{title:"Follow"},y("ul",{className:"list-inline icons"},y("li",{className:"list-inline-item"},y("a",{href:"https://twitter.com/yuku_t"},y("span",{className:"fa-stack fa-lg"},y(b.a,{icon:"circle",className:"fa-stack-2x"}),y(b.a,{icon:["fab","twitter"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"https://github.com/yuku"},y("span",{className:"fa-stack fa-lg"},y(b.a,{icon:"circle",className:"fa-stack-2x"}),y(b.a,{icon:["fab","github"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"/static/rss-feed.xml"},y("span",{className:"fa-stack fa-lg"},y(b.a,{icon:"circle",className:"fa-stack-2x"}),y(b.a,{icon:"rss",inverse:!0,className:"fa-stack-1x"}))))))))))})),C=r.a.createElement,k=function(e){var t=e.meta,a=e.children;return Object(n.useEffect)((function(){if(t.loadTwitterWidget){var e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}),[]),C(v,{className:"mdx",meta:t},a)},E=r.a.createElement,x=function(e){return E(v,{className:"notebook",meta:e.meta},e.children)}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))}},[["GtyO",0,1,3,7,6,2,5,4]]]);