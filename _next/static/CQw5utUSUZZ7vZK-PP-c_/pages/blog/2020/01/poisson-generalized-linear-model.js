(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"3qTf":function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2020/01/poisson-generalized-linear-model",function(){return i("p3Rs")}])},"HaE+":function(t,e,i){"use strict";function a(t,e,i,a,o,n,s){try{var l=t[n](s),r=l.value}catch(c){return void i(c)}l.done?e(r):Promise.resolve(r).then(a,o)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(o,n){var s=t.apply(e,i);function l(t){a(s,o,n,l,r,"next",t)}function r(t){a(s,o,n,l,r,"throw",t)}l(void 0)}))}}i.d(e,"a",(function(){return o}))},Yp5c:function(t,e,i){"use strict";i.d(e,"a",(function(){return T})),i.d(e,"b",(function(){return A}));var a=i("q1tI"),o=i.n(a),n=i("8Kt/"),s=i.n(n),l=i("YFqc"),r=i.n(l),c=i("nOHt"),d=i("TSYQ"),m=i.n(d),p=i("wd/R"),u=i.n(p),g=i("IP2g"),h=i("he5r"),f=o.a.createElement,b=function(t){return f("aside",{className:m()("widget mb-4",t.className)},f("h1",{className:"title font-weight-bold"},t.title),t.children)},y=o.a.createElement,k=function(t){return t||"https://yuku.takahashi.coffee".concat(h.a)},w=Object(c.withRouter)((function(t){return y("div",{className:"blogpage container"},y(s.a,null,y("title",null,t.meta.title," - ",h.c),y("meta",{name:"description",content:t.meta.description}),y("meta",{name:"twitter:card",content:"summary"}),y("meta",{name:"twitter:creator",content:"@yuku_t"}),y("meta",{property:"fb:app_id",content:h.b}),y("meta",{property:"og:title",content:"".concat(t.meta.title," - ").concat(h.c)}),y("meta",{property:"og:type",content:"article"}),y("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(t.router.pathname)}),y("meta",{property:"og:image",content:k()}),y("meta",{property:"og:description",content:t.meta.description}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),y("div",{className:"row"},y("main",{className:m()("col-xl-8",t.className)},y("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},y("meta",{itemProp:"author",content:"Yuku Takahashi"}),y("meta",{itemProp:"datePublished",content:t.meta.publishedAt}),t.meta.modifiedAt&&y("meta",{itemProp:"dateModified",content:t.meta.modifiedAt}),y("meta",{itemProp:"image",content:k()}),y("header",{className:"mb-4 header"},y("h1",{className:"headline",itemProp:"headline"},t.meta.title),y("ul",{className:"list-inline text-dark font-weight-light"},y("li",{className:"list-inline-item"},y("span",{className:"ml-1"},u()(t.meta.publishedAt).format("YYYY-MM-DD HH:mm"))),y("li",{className:"list-inline-item"},t.meta.tags.map((function(t,e){return[e>0?",":null,y("span",{key:e,className:"ml-1"},"#",t)]}))))),y("section",{className:"mb-4 body",itemProp:"articleBody"},t.children))),y("div",{className:"col-xl-4"},y("div",{className:"pl-xl-2"},y(b,{title:"About Me"},y("div",null,y("img",{src:h.a,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),y("p",null,"Software Engineer at FLYWHEEL. Working mainly on recommendation systems in these days. Ex-Qiita CTO.",y(r.a,{href:"/about"},y("a",{href:"/about",style:{marginLeft:"4px"}},"Read more")),"."))),y(b,{title:"Follow"},y("ul",{className:"list-inline icons"},y("li",{className:"list-inline-item"},y("a",{href:"https://twitter.com/yuku_t"},y("span",{className:"fa-stack fa-lg"},y(g.a,{icon:"circle",className:"fa-stack-2x"}),y(g.a,{icon:["fab","twitter"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"https://github.com/yuku"},y("span",{className:"fa-stack fa-lg"},y(g.a,{icon:"circle",className:"fa-stack-2x"}),y(g.a,{icon:["fab","github"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"/static/rss-feed.xml"},y("span",{className:"fa-stack fa-lg"},y(g.a,{icon:"circle",className:"fa-stack-2x"}),y(g.a,{icon:"rss",inverse:!0,className:"fa-stack-1x"}))))))))))})),x=o.a.createElement,T=function(t){var e=t.meta,i=t.children;return Object(a.useEffect)((function(){if(e.loadTwitterWidget){var t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}}),[]),x(w,{className:"mdx",meta:e},i)},N=o.a.createElement,A=function(t){return N(w,{className:"notebook",meta:t.meta},t.children)}},n1xW:function(t,e,i){"use strict";i.r(e),i.d(e,"entries",(function(){return a}));var a={"blog/2020/01/poisson-generalized-linear-model":{description:"\u67b6\u7a7a\u690d\u7269\u306e\u30c7\u30fc\u30bf\u3092\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb\u3067\u3042\u308b\u30dd\u30a2\u30bd\u30f3\u56de\u5e30\u3092\u7528\u3044\u3066\u30e2\u30c7\u30ea\u30f3\u30b0\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-18T10:54:00+09:00",modifiedAt:"2020-01-18T11:25:00+09:00",tags:["julia"],title:"\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb - \u30dd\u30a2\u30bd\u30f3\u56de\u5e30"},"blog/2020/01/maximum-likelihood-estimation-of-probability-distribution-and-statistical-model":{description:"\u67b6\u7a7a\u306e\u690d\u7269\u306e\u96c6\u56e3\u3092\u8abf\u67fb\u3057\u3066\u5f97\u3089\u308c\u305f\u30c7\u30fc\u30bf\u3092\u8aac\u660e\u3059\u308b\u305f\u3081\u306b\u30dd\u30a2\u30bd\u30f3\u5206\u5e03\u3092\u3042\u3066\u306f\u3081\u3001\u6700\u5c24\u63a8\u5b9a\u3092\u7528\u3044\u3066\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u63a8\u5b9a\u3092\u884c\u3046\u3002",format:"ipynb",publishedAt:"2020-01-13T00:52:00+09:00",tags:["julia"],title:"\u78ba\u7387\u5206\u5e03\u3068\u7d71\u8a08\u30e2\u30c7\u30eb\u306e\u6700\u5c24\u63a8\u5b9a"},"blog/2020/01/als-for-matrix-factorization":{description:"\u5354\u8abf\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3067\u5e83\u304f\u4f7f\u308f\u308c\u308b MF \u306e\u5b9f\u88c5\u306e\u4e00\u3064\u3067\u3042\u308b ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u5b66\u7684\u306a\u80cc\u666f\u3092\u78ba\u8a8d\u3057\u3001 Julia \u3092\u4f7f\u3063\u3066\u5b9f\u88c5\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-06T10:09:00+09:00",modifiedAt:"2020-01-06T10:33:00+09:00",tags:["julia"],title:"Matrix Factorization \u306e\u305f\u3081\u306e ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u7406\u3068\u5b9f\u88c5"},"blog/2019/10/github-actions":{description:"\u30d6\u30ed\u30b0\u306e CI/CD \u3092 CircleCI \u304b\u3089 GitHub Actions \u306b\u79fb\u884c\u3057\u3066\u307f\u3066\u306e\u6240\u611f\u306a\u3069\u3002",format:"mdx",publishedAt:"2019-10-13T23:57:00+09:00",tags:["Blog dev"],title:"GitHub Actions \u306b\u79fb\u884c\u3057\u305f"},"blog/2019/08/rss-feed":{description:"\u30d6\u30ed\u30b0\u306b RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-30T19:10:00+09:00",tags:["Blog dev"],title:"RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u305f"},"blog/2019/08/ipynb-without-python":{description:"Python \u3092\u4f7f\u308f\u305a\u306b Jupyter Notebook \u5f62\u5f0f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-18T19:10:00+09:00",tags:["Blog dev"],title:"\u30d6\u30ed\u30b0\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u304b\u3089 Python \u3092\u6392\u9664\u3057\u305f"},"blog/2019/06/why-i-joined-flywheel":{description:"\u4f55\u3092\u9b45\u529b\u306b\u611f\u3058\u3066 FLYWHEEL \u306b\u5165\u793e\u3057\u3088\u3046\u3068\u6c7a\u3081\u305f\u306e\u304b\u306e\u8a18\u9332\u3067\u3059\u3002",format:"mdx",modifiedAt:"2019-06-18T09:52:00+09:00",publishedAt:"2019-06-17T22:28:00+09:00",tags:["essay"],title:"\u306a\u305c FLYWHEEL \u306b\u5165\u793e\u3057\u305f\u306e\u304b"},"blog/2019/04/pyspark-ml-vs-mllib":{description:"",format:"mdx",publishedAt:"2019-04-22T00:04:00+09:00",tags:["pyspark"],title:"pyspark.ml \u3068 pyspark.mllib \u306e\u3069\u3061\u3089\u3092\u4f7f\u3046\u3079\u304d\u304b"},"blog/2019/01/authorize-iap-by-nodejs":{description:"Cloud IAP \u3067\u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057 google-auth-library \u3092\u4f7f\u3063\u3066 Node.js \u3067\u8a8d\u8a3c\u3057\u30a2\u30af\u30bb\u30b9\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002",format:"mdx",publishedAt:"2019-01-28T14:54:00+09:00",tags:["GCP"],title:"Node.js \u304b\u3089 Cloud IAP \u3067\u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3092\u8a8d\u8a3c\u3059\u308b"},"blog/2019/01/grpc-proxy-for-grpc-web":{description:"In order for gRPC to communicate with gRPC-Web, you need to set up a proxy, such as Envoy. This article describes why gRPC-Web needs a proxy.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2019-01-25T23:26:00+09:00",publishedAt:"2019-01-25T22:30:00+09:00",tags:["gRPC"],title:"Why gRPC-Web Needs Proxy"},"blog/2019/01/deploy-app-engine-from-circleci":{description:"How to deploy ann app running on AppEngine Node.js standard environment using CircleCI",format:"mdx",modifiedAt:"2019-01-20T09:33:00+09:00",publishedAt:"2019-01-18T14:00:00+09:00",tags:["GCP"],title:"Deploy AppEngine Apps Using CircleCI"},"blog/2019/01/google-cloud-sdk-in-docker":{description:"This article explains how to install and use the Google Cloud SDK in Docker rather than on the local machine.",format:"mdx",modifiedAt:"2020-05-30T09:21:13+09:00",publishedAt:"2019-01-17T14:43:00+09:00",tags:["GCP"],title:"How to Use Google Cloud SDK Using Docker"},"blog/2019/01/hello-pyspark":{description:"An introduction to pyspark using the Docker image environment provided by Jupyter Lab.",format:"ipynb",modifiedAt:"2020-05-30T08:34:49+09:00",publishedAt:"2019-01-16T20:50:00+09:00",tags:["pyspark"],title:"Getting started with pyspark using Docker"},"blog/2019/01/hello-ipynb":{description:"Jupyter Notebook can now be displayed on this blog. I'm going to use it to publish my study records of machine learning and data analysis. This article describes the details of the implementation.",format:"ipynb",modifiedAt:"2020-05-30T00:43:29+09:00",publishedAt:"2019-01-15T20:17:00+09:00",tags:["Blog dev"],title:"Display Jupyter Notebook on Next.js"},"blog/2019/01/twitter-card-and-ogp":{description:"Twitter Card and Open Graph Protocol are now supported on the blog.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2020-05-29T23:41:46+09:00",publishedAt:"2019-01-07T22:40:00+09:00",tags:["Blog dev"],title:"Twitter Card and OGP Support"},"blog/2019/01/hello-new-blog":{description:"It's 2019 and I've created a new blog of my own. I will explain the motivation and the background of the selection of the tools I used.",format:"mdx",modifiedAt:"2020-05-24T16:15:21+09:00",ogImage:"https://yuku.takahashi.coffee/static/images/2019/01/next-vs-gatsby.png",publishedAt:"2019-01-05T13:52:00+09:00",tags:["Blog dev"],title:"Background on Blog Homebrewing and Tool Selection in 2019"}}},p3Rs:function(t,e,i){"use strict";i.r(e);var a=i("o0o1"),o=i.n(a),n=i("HaE+"),s=i("q1tI"),l=i.n(s),r=i("Yp5c"),c=i("BV7F"),d=l.a.createElement,m=function(t){var e=t.meta;return d(r.b,{meta:e},d(c.a,null))};m.getInitialProps=Object(n.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i("n1xW"),a=e.entries,t.abrupt("return",{meta:a["blog/2020/01/poisson-generalized-linear-model"]});case 2:case"end":return t.stop()}}),t)}))),e.default=m}},[["3qTf",0,1,4,11,2,3,5]]]);