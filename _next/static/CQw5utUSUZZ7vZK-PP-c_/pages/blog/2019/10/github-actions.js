(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"7ljp":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"===typeof e?e(t):c(c({},t),e)),a},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,b=u["".concat(r,".").concat(d)]||u[d]||m[d]||o;return a?i.a.createElement(b,c(c({ref:t},l),{},{components:a})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"===typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},Ff2n:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}a.d(t,"a",(function(){return n}))},HQnG:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/10/github-actions",function(){return a("YfhH")}])},"HaE+":function(e,t,a){"use strict";function n(e,t,a,n,i,o,r){try{var c=e[o](r),s=c.value}catch(l){return void a(l)}c.done?t(s):Promise.resolve(s).then(n,i)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(i,o){var r=e.apply(t,a);function c(e){n(r,i,o,c,s,"next",e)}function s(e){n(r,i,o,c,s,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return i}))},YfhH:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),i=a.n(n),o=a("HaE+"),r=a("q1tI"),c=a.n(r),s=a("Yp5c"),l=a("wx14"),p=a("Ff2n"),u=a("7ljp"),m=(c.a.createElement,{}),d="wrapper";function b(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(u.a)(d,Object(l.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(u.a)("p",null,"\u4eca\u307e\u3067\u30d6\u30ed\u30b0\u306e CI \u3068 CD \u3092 ",Object(u.a)("a",Object(l.a)({parentName:"p"},{href:"https://circleci.com"}),"CircleCI")," \u3092\u4f7f\u3063\u3066\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3057\u305f\u304c\u3001 ",Object(u.a)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/features/actions"}),"GitHub Actions")," \u3092\u4f7f\u3048\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u306e\u3067\u4e57\u308a\u63db\u3048\u3066\u307f\u307e\u3057\u305f\u3002"),Object(u.a)("h2",null,"GitHub Actions \u3092\u4f7f\u3063\u3066\u307f\u3066\u306e\u6240\u611f"),Object(u.a)("p",null,"GitHub Actions \u306f\u4ed6\u306e\u4eba\u304c\u958b\u767a\u3057\u305f Action \u3092\u7d44\u307f\u8fbc\u3080\u3053\u3068\u3067\u7c21\u5358\u306b\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u8a18\u8ff0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3053\u306e\u30d6\u30ed\u30b0\u3067\u306f ",Object(u.a)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/peaceiris/actions-gh-pages"}),"peaceiris/actions-gh-pages")," \u3092\u4f7f\u3063\u3066\u30c7\u30d7\u30ed\u30a4\u3092\u884c\u3063\u3066\u3044\u307e\u3059\uff1a"),Object(u.a)("pre",{className:"language-yml"},Object(u.a)("code",Object(l.a)({parentName:"pre"},{className:"language-yml"}),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),":")," Deploy\n  ",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token key atrule"}),"uses"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),":")," peaceiris/actions",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),"-"),"gh",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),"-"),"pages@v2.5.0\n  ",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token key atrule"}),"env"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n    ",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token key atrule"}),"ACTIONS_DEPLOY_KEY"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),":")," $",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),"{")," secrets.ACTIONS_DEPLOY_KEY ",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token key atrule"}),"PUBLISH_BRANCH"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),":")," master\n    ",Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token key atrule"}),"PUBLISH_DIR"),Object(u.a)("span",Object(l.a)({parentName:"code"},{className:"token punctuation"}),":")," ./out\n")),Object(u.a)("p",null,"\u3053\u306e\u300c\u30bf\u30b9\u30af\u3092\u5171\u6709\u3059\u308b\u300d\u3068\u3044\u3046\u30a2\u30a4\u30c7\u30a3\u30a2\u306f CircleCI \u3067\u3082\u304d\u3063\u3068\u691c\u8a0e\u3055\u308c\u305f\u3053\u3068\u304c\u3042\u308b\u306f\u305a\u3002\u3057\u304b\u3057 CircleCI \u5c02\u7528\u306e\u4f55\u304b\u3092\u7686\u306b\u4f5c\u3063\u3066\u3082\u3089\u3046\u3068\u3044\u3046\u306e\u306f\u306a\u304b\u306a\u304b\u96e3\u3057\u3044\u306e\u3067\u3001\u307e\u305a\u306f\u6c4e\u7528\u7684\u306a\u30c4\u30fc\u30eb\u304c\u305d\u306e\u307e\u307e\u4f7f\u3048\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3092\u512a\u5148\u3057\u305f\u3093\u3058\u3083\u306a\u3044\u304b\u3068\u3002\u305d\u3057\u3066\u3001\u305d\u3093\u306a\u3053\u3068\u304a\u69cb\u3044\u306a\u3057\u306b\u521d\u624b\u3067\u3053\u3046\u3044\u3046\u6a5f\u80fd\u3092\u5165\u308c\u3066\u304f\u308b\u3042\u305f\u308a\u3001 GitHub \u306f\u6d41\u77f3\u306b\u6a2a\u7db1\u3060\u306a\u3068\u601d\u3044\u307e\u3057\u305f\u3002"),Object(u.a)("p",null,"\u9577\u3044\u3053\u3068\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u3067\u3082\u4ed5\u4e8b\u3067\u3082 CircleCI \u3092\u4f7f\u3063\u3066\u304d\u305f\u3057\u3001\u597d\u304d\u306a\u30b5\u30fc\u30d3\u30b9\u306a\u306e\u3067\u9811\u5f35\u3063\u3066\u6b32\u3057\u3044\u306e\u3067\u3059\u304c\u3001\u4eca\u5f8c\u306f GitHub Actions \u3092\u4f7f\u3046\u983b\u5ea6\u304c\u5897\u3048\u3066\u3044\u304d\u305d\u3046\u3002\u6b63\u76f4 GitHub \u516c\u5f0f\u3067\u3053\u308c\u3092\u3084\u3089\u308c\u3066\u3057\u307e\u3046\u3068\u76f8\u5f53\u53b3\u3057\u3044\u3067\u3059\u3088\u306d\u3002"),Object(u.a)("h2",null,"\u53c2\u8003"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/yuku/yuku.github.io/issues/5"}),"yuku/yuku.github.io#5"),": Use GitHub actions"),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/peaceiris/actions-gh-pages"}),"peaceiris/actions-gh-pages: GitHub Actions for GitHub Pages \ud83d\ude80 Deploy static files and publish your site easily. Static-Site-Generators-friendly."))))}b.isMDXComponent=!0;var f=c.a.createElement,g=function(e){var t=e.meta;return f(s.a,{meta:t},f(b,null))};g.getInitialProps=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a("n1xW"),n=t.entries,e.abrupt("return",{meta:n["blog/2019/10/github-actions"]});case 2:case"end":return e.stop()}}),e)})));t.default=g},Yp5c:function(e,t,a){"use strict";a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return v}));var n=a("q1tI"),i=a.n(n),o=a("8Kt/"),r=a.n(o),c=a("YFqc"),s=a.n(c),l=a("nOHt"),p=a("TSYQ"),u=a.n(p),m=a("wd/R"),d=a.n(m),b=a("IP2g"),f=a("he5r"),g=i.a.createElement,h=function(e){return g("aside",{className:u()("widget mb-4",e.className)},g("h1",{className:"title font-weight-bold"},e.title),e.children)},y=i.a.createElement,O=function(e){return e||"https://yuku.takahashi.coffee".concat(f.a)},j=Object(l.withRouter)((function(e){return y("div",{className:"blogpage container"},y(r.a,null,y("title",null,e.meta.title," - ",f.c),y("meta",{name:"description",content:e.meta.description}),y("meta",{name:"twitter:card",content:"summary"}),y("meta",{name:"twitter:creator",content:"@yuku_t"}),y("meta",{property:"fb:app_id",content:f.b}),y("meta",{property:"og:title",content:"".concat(e.meta.title," - ").concat(f.c)}),y("meta",{property:"og:type",content:"article"}),y("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(e.router.pathname)}),y("meta",{property:"og:image",content:O()}),y("meta",{property:"og:description",content:e.meta.description}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),y("div",{className:"row"},y("main",{className:u()("col-xl-8",e.className)},y("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},y("meta",{itemProp:"author",content:"Yuku Takahashi"}),y("meta",{itemProp:"datePublished",content:e.meta.publishedAt}),e.meta.modifiedAt&&y("meta",{itemProp:"dateModified",content:e.meta.modifiedAt}),y("meta",{itemProp:"image",content:O()}),y("header",{className:"mb-4 header"},y("h1",{className:"headline",itemProp:"headline"},e.meta.title),y("ul",{className:"list-inline text-dark font-weight-light"},y("li",{className:"list-inline-item"},y("span",{className:"ml-1"},d()(e.meta.publishedAt).format("YYYY-MM-DD HH:mm"))),y("li",{className:"list-inline-item"},e.meta.tags.map((function(e,t){return[t>0?",":null,y("span",{key:t,className:"ml-1"},"#",e)]}))))),y("section",{className:"mb-4 body",itemProp:"articleBody"},e.children))),y("div",{className:"col-xl-4"},y("div",{className:"pl-xl-2"},y(h,{title:"About Me"},y("div",null,y("img",{src:f.a,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),y("p",null,"Software Engineer at FLYWHEEL. Working mainly on recommendation systems in these days. Ex-Qiita CTO.",y(s.a,{href:"/about"},y("a",{href:"/about",style:{marginLeft:"4px"}},"Read more")),"."))),y(h,{title:"Follow"},y("ul",{className:"list-inline icons"},y("li",{className:"list-inline-item"},y("a",{href:"https://twitter.com/yuku_t"},y("span",{className:"fa-stack fa-lg"},y(b.a,{icon:"circle",className:"fa-stack-2x"}),y(b.a,{icon:["fab","twitter"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"https://github.com/yuku"},y("span",{className:"fa-stack fa-lg"},y(b.a,{icon:"circle",className:"fa-stack-2x"}),y(b.a,{icon:["fab","github"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"/static/rss-feed.xml"},y("span",{className:"fa-stack fa-lg"},y(b.a,{icon:"circle",className:"fa-stack-2x"}),y(b.a,{icon:"rss",inverse:!0,className:"fa-stack-1x"}))))))))))})),N=i.a.createElement,k=function(e){var t=e.meta,a=e.children;return Object(n.useEffect)((function(){if(t.loadTwitterWidget){var e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}),[]),N(j,{className:"mdx",meta:t},a)},w=i.a.createElement,v=function(e){return w(j,{className:"notebook",meta:e.meta},e.children)}},n1xW:function(e,t,a){"use strict";a.r(t),a.d(t,"entries",(function(){return n}));var n={"blog/2020/01/poisson-generalized-linear-model":{description:"\u67b6\u7a7a\u690d\u7269\u306e\u30c7\u30fc\u30bf\u3092\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb\u3067\u3042\u308b\u30dd\u30a2\u30bd\u30f3\u56de\u5e30\u3092\u7528\u3044\u3066\u30e2\u30c7\u30ea\u30f3\u30b0\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-18T10:54:00+09:00",modifiedAt:"2020-01-18T11:25:00+09:00",tags:["julia"],title:"\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb - \u30dd\u30a2\u30bd\u30f3\u56de\u5e30"},"blog/2020/01/maximum-likelihood-estimation-of-probability-distribution-and-statistical-model":{description:"\u67b6\u7a7a\u306e\u690d\u7269\u306e\u96c6\u56e3\u3092\u8abf\u67fb\u3057\u3066\u5f97\u3089\u308c\u305f\u30c7\u30fc\u30bf\u3092\u8aac\u660e\u3059\u308b\u305f\u3081\u306b\u30dd\u30a2\u30bd\u30f3\u5206\u5e03\u3092\u3042\u3066\u306f\u3081\u3001\u6700\u5c24\u63a8\u5b9a\u3092\u7528\u3044\u3066\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u63a8\u5b9a\u3092\u884c\u3046\u3002",format:"ipynb",publishedAt:"2020-01-13T00:52:00+09:00",tags:["julia"],title:"\u78ba\u7387\u5206\u5e03\u3068\u7d71\u8a08\u30e2\u30c7\u30eb\u306e\u6700\u5c24\u63a8\u5b9a"},"blog/2020/01/als-for-matrix-factorization":{description:"\u5354\u8abf\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3067\u5e83\u304f\u4f7f\u308f\u308c\u308b MF \u306e\u5b9f\u88c5\u306e\u4e00\u3064\u3067\u3042\u308b ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u5b66\u7684\u306a\u80cc\u666f\u3092\u78ba\u8a8d\u3057\u3001 Julia \u3092\u4f7f\u3063\u3066\u5b9f\u88c5\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-06T10:09:00+09:00",modifiedAt:"2020-01-06T10:33:00+09:00",tags:["julia"],title:"Matrix Factorization \u306e\u305f\u3081\u306e ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u7406\u3068\u5b9f\u88c5"},"blog/2019/10/github-actions":{description:"\u30d6\u30ed\u30b0\u306e CI/CD \u3092 CircleCI \u304b\u3089 GitHub Actions \u306b\u79fb\u884c\u3057\u3066\u307f\u3066\u306e\u6240\u611f\u306a\u3069\u3002",format:"mdx",publishedAt:"2019-10-13T23:57:00+09:00",tags:["Blog dev"],title:"GitHub Actions \u306b\u79fb\u884c\u3057\u305f"},"blog/2019/08/rss-feed":{description:"\u30d6\u30ed\u30b0\u306b RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-30T19:10:00+09:00",tags:["Blog dev"],title:"RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u305f"},"blog/2019/08/ipynb-without-python":{description:"Python \u3092\u4f7f\u308f\u305a\u306b Jupyter Notebook \u5f62\u5f0f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-18T19:10:00+09:00",tags:["Blog dev"],title:"\u30d6\u30ed\u30b0\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u304b\u3089 Python \u3092\u6392\u9664\u3057\u305f"},"blog/2019/06/why-i-joined-flywheel":{description:"\u4f55\u3092\u9b45\u529b\u306b\u611f\u3058\u3066 FLYWHEEL \u306b\u5165\u793e\u3057\u3088\u3046\u3068\u6c7a\u3081\u305f\u306e\u304b\u306e\u8a18\u9332\u3067\u3059\u3002",format:"mdx",modifiedAt:"2019-06-18T09:52:00+09:00",publishedAt:"2019-06-17T22:28:00+09:00",tags:["essay"],title:"\u306a\u305c FLYWHEEL \u306b\u5165\u793e\u3057\u305f\u306e\u304b"},"blog/2019/04/pyspark-ml-vs-mllib":{description:"",format:"mdx",publishedAt:"2019-04-22T00:04:00+09:00",tags:["pyspark"],title:"pyspark.ml \u3068 pyspark.mllib \u306e\u3069\u3061\u3089\u3092\u4f7f\u3046\u3079\u304d\u304b"},"blog/2019/01/authorize-iap-by-nodejs":{description:"Cloud IAP \u3067\u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057 google-auth-library \u3092\u4f7f\u3063\u3066 Node.js \u3067\u8a8d\u8a3c\u3057\u30a2\u30af\u30bb\u30b9\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002",format:"mdx",publishedAt:"2019-01-28T14:54:00+09:00",tags:["GCP"],title:"Node.js \u304b\u3089 Cloud IAP \u3067\u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3092\u8a8d\u8a3c\u3059\u308b"},"blog/2019/01/grpc-proxy-for-grpc-web":{description:"In order for gRPC to communicate with gRPC-Web, you need to set up a proxy, such as Envoy. This article describes why gRPC-Web needs a proxy.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2019-01-25T23:26:00+09:00",publishedAt:"2019-01-25T22:30:00+09:00",tags:["gRPC"],title:"Why gRPC-Web Needs Proxy"},"blog/2019/01/deploy-app-engine-from-circleci":{description:"How to deploy ann app running on AppEngine Node.js standard environment using CircleCI",format:"mdx",modifiedAt:"2019-01-20T09:33:00+09:00",publishedAt:"2019-01-18T14:00:00+09:00",tags:["GCP"],title:"Deploy AppEngine Apps Using CircleCI"},"blog/2019/01/google-cloud-sdk-in-docker":{description:"This article explains how to install and use the Google Cloud SDK in Docker rather than on the local machine.",format:"mdx",modifiedAt:"2020-05-30T09:21:13+09:00",publishedAt:"2019-01-17T14:43:00+09:00",tags:["GCP"],title:"How to Use Google Cloud SDK Using Docker"},"blog/2019/01/hello-pyspark":{description:"An introduction to pyspark using the Docker image environment provided by Jupyter Lab.",format:"ipynb",modifiedAt:"2020-05-30T08:34:49+09:00",publishedAt:"2019-01-16T20:50:00+09:00",tags:["pyspark"],title:"Getting started with pyspark using Docker"},"blog/2019/01/hello-ipynb":{description:"Jupyter Notebook can now be displayed on this blog. I'm going to use it to publish my study records of machine learning and data analysis. This article describes the details of the implementation.",format:"ipynb",modifiedAt:"2020-05-30T00:43:29+09:00",publishedAt:"2019-01-15T20:17:00+09:00",tags:["Blog dev"],title:"Display Jupyter Notebook on Next.js"},"blog/2019/01/twitter-card-and-ogp":{description:"Twitter Card and Open Graph Protocol are now supported on the blog.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2020-05-29T23:41:46+09:00",publishedAt:"2019-01-07T22:40:00+09:00",tags:["Blog dev"],title:"Twitter Card and OGP Support"},"blog/2019/01/hello-new-blog":{description:"It's 2019 and I've created a new blog of my own. I will explain the motivation and the background of the selection of the tools I used.",format:"mdx",modifiedAt:"2020-05-24T16:15:21+09:00",ogImage:"https://yuku.takahashi.coffee/static/images/2019/01/next-vs-gatsby.png",publishedAt:"2019-01-05T13:52:00+09:00",tags:["Blog dev"],title:"Background on Blog Homebrewing and Tool Selection in 2019"}}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))}},[["HQnG",0,1,4,2,3,5]]]);