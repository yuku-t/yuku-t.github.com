(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"HaE+":function(e,a,t){"use strict";function n(e,a,t,n,s,o,l){try{var i=e[o](l),r=i.value}catch(c){return void t(c)}i.done?a(r):Promise.resolve(r).then(n,s)}function s(e){return function(){var a=this,t=arguments;return new Promise((function(s,o){var l=e.apply(a,t);function i(e){n(l,s,o,i,r,"next",e)}function r(e){n(l,s,o,i,r,"throw",e)}i(void 0)}))}}t.d(a,"a",(function(){return s}))},Yp5c:function(e,a,t){"use strict";t.d(a,"a",(function(){return w})),t.d(a,"b",(function(){return T}));var n=t("q1tI"),s=t.n(n),o=t("8Kt/"),l=t.n(o),i=t("YFqc"),r=t.n(i),c=t("nOHt"),p=t("TSYQ"),u=t.n(p),m=t("wd/R"),d=t.n(m),h=t("IP2g"),b=t("he5r"),g=s.a.createElement,k=function(e){return g("aside",{className:u()("widget mb-4",e.className)},g("h1",{className:"title font-weight-bold"},e.title),e.children)},y=s.a.createElement,f=function(e){return e||"https://yuku.takahashi.coffee".concat(b.a)},N=Object(c.withRouter)((function(e){return y("div",{className:"blogpage container"},y(l.a,null,y("title",null,e.meta.title," - ",b.c),y("meta",{name:"description",content:e.meta.description}),y("meta",{name:"twitter:card",content:"summary"}),y("meta",{name:"twitter:creator",content:"@yuku_t"}),y("meta",{property:"fb:app_id",content:b.b}),y("meta",{property:"og:title",content:"".concat(e.meta.title," - ").concat(b.c)}),y("meta",{property:"og:type",content:"article"}),y("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(e.router.pathname)}),y("meta",{property:"og:image",content:f()}),y("meta",{property:"og:description",content:e.meta.description}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),y("div",{className:"row"},y("main",{className:u()("col-xl-8",e.className)},y("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},y("meta",{itemProp:"author",content:"Yuku Takahashi"}),y("meta",{itemProp:"datePublished",content:e.meta.publishedAt}),e.meta.modifiedAt&&y("meta",{itemProp:"dateModified",content:e.meta.modifiedAt}),y("meta",{itemProp:"image",content:f()}),y("header",{className:"mb-4 header"},y("h1",{className:"headline",itemProp:"headline"},e.meta.title),y("ul",{className:"list-inline text-dark font-weight-light"},y("li",{className:"list-inline-item"},y("span",{className:"ml-1"},d()(e.meta.publishedAt).format("YYYY-MM-DD HH:mm"))),y("li",{className:"list-inline-item"},e.meta.tags.map((function(e,a){return[a>0?",":null,y("span",{key:a,className:"ml-1"},"#",e)]}))))),y("section",{className:"mb-4 body",itemProp:"articleBody"},e.children))),y("div",{className:"col-xl-4"},y("div",{className:"pl-xl-2"},y(k,{title:"About Me"},y("div",null,y("img",{src:b.a,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),y("p",null,"Software Engineer at FLYWHEEL. Working mainly on recommendation systems in these days. Ex-Qiita CTO.",y(r.a,{href:"/about"},y("a",{href:"/about",style:{marginLeft:"4px"}},"Read more")),"."))),y(k,{title:"Follow"},y("ul",{className:"list-inline icons"},y("li",{className:"list-inline-item"},y("a",{href:"https://twitter.com/yuku_t"},y("span",{className:"fa-stack fa-lg"},y(h.a,{icon:"circle",className:"fa-stack-2x"}),y(h.a,{icon:["fab","twitter"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"https://github.com/yuku"},y("span",{className:"fa-stack fa-lg"},y(h.a,{icon:"circle",className:"fa-stack-2x"}),y(h.a,{icon:["fab","github"],inverse:!0,className:"fa-stack-1x"})))),y("li",{className:"list-inline-item"},y("a",{href:"/static/rss-feed.xml"},y("span",{className:"fa-stack fa-lg"},y(h.a,{icon:"circle",className:"fa-stack-2x"}),y(h.a,{icon:"rss",inverse:!0,className:"fa-stack-1x"}))))))))))})),v=s.a.createElement,w=function(e){var a=e.meta,t=e.children;return Object(n.useEffect)((function(){if(a.loadTwitterWidget){var e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}),[]),v(N,{className:"mdx",meta:a},t)},x=s.a.createElement,T=function(e){return x(N,{className:"notebook",meta:e.meta},e.children)}},aTI2:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),s=t.n(n),o=t("HaE+"),l=t("q1tI"),i=t.n(l),r=t("Yp5c"),c=i.a.createElement,p=function(){return c("div",{className:"nb-notebook"},c("div",{className:"nb-worksheet"},c("div",{className:"nb-cell nb-markdown-cell"},c("p",null,c("a",{href:"https://spark.apache.org"},"Apatch Spark")," is an open source distributed programming environment implemented on top of the JVM that has seen ",c("a",{href:"http://fortune.com/2015/09/25/apache-spark-survey/"},"a rapid rise in popularity in recent years"),". I will use Spark through ",c("a",{href:"https://spark.apache.org/docs/latest/api/python/index.html"},"pyspark")," at my next job, so I want to use pyspark, but it's hard to install Spark from scratch because I'm not familiar with the JVM."),c("p",null,"So in this article, I'll use Docker to build Spark and pyspark environments."),c("h2",null,"Set Up an Environment"),c("p",null,"There is a docker image named ",c("a",{href:"https://hub.docker.com/r/jupyter/pyspark-notebook/"},"jupyter/pyspark-notebook")," published by Jupyter Lab. For now, let's pull the latest version:"),c("pre",{className:"language-bash"},c("code",{className:"language-bash"},"docker pull jupyter/pyspark-notebook:87210526f381","\n")),c("p",null,"Run it:"),c("pre",{className:"language-bash"},c("code",{className:"language-bash"},"docker run --rm -w /app -p ",c("span",{className:"token number"},"8888"),":8888 ",c("span",{className:"token punctuation"},"\\"),"\n","    ","--mount ",c("span",{className:"token assign-left variable"},"type"),c("span",{className:"token operator"},"="),"bind,src",c("span",{className:"token operator"},"="),c("span",{className:"token variable"},c("span",{className:"token variable"},"$("),c("span",{className:"token builtin class-name"},"pwd"),c("span",{className:"token variable"},")")),",dst",c("span",{className:"token operator"},"="),"/app ",c("span",{className:"token punctuation"},"\\"),"\n","    ","jupyter/pyspark-notebook:87210526f381","\n")),c("p",null,"Then you will see several messages, among which is the URL. If you access that URL, you will see a Jupyter Notebook that you can use with pyspark:")),c("div",{className:"nb-cell nb-code-cell"},c("div",{className:"nb-input","data-prompt-number":1},c("pre",{className:"language-python"},c("code",{className:"language-python","data-language":"python"},c("span",{className:"token keyword"},"import")," pyspark","\n","pyspark",c("span",{className:"token punctuation"},"."),"version",c("span",{className:"token punctuation"},"."),"__version__"))),c("div",{className:"nb-output","data-prompt-number":1},c("pre",{className:"nb-text-output"},"'2.4.0'"))),c("div",{className:"nb-cell nb-markdown-cell"},c("p",null,"Note that this article is written using Jupyter Notebook, which was launched exactly in this way."),c("h2",null,"Launching a Spark Cluster"),c("p",null,"Spark usually creates a cluster in distributed environment, but creating a distributed cluster in development is not a big deal, so there is ",c("a",{href:"https://jaceklaskowski.gitbooks.io/mastering-apache-spark/spark-local.html"},"a local mode"),"."),c("p",null,"To start Spark in local mode via pyspark, call ",c("a",{href:"https://spark.apache.org/docs/latest/api/python/pyspark.html#pyspark.SparkContext"},c("code",null,"pyspark.SparkContext")),":")),c("div",{className:"nb-cell nb-code-cell"},c("div",{className:"nb-input","data-prompt-number":2},c("pre",{className:"language-python"},c("code",{className:"language-python","data-language":"python"},"sc ",c("span",{className:"token operator"},"=")," pyspark",c("span",{className:"token punctuation"},"."),"SparkContext",c("span",{className:"token punctuation"},"("),c("span",{className:"token string"},"'local[*]'"),c("span",{className:"token punctuation"},")"))))),c("div",{className:"nb-cell nb-markdown-cell"},c("p",null,"The string specifies the number available threads:"),c("ul",null,c("li",null,c("code",null,"local")," - 1 thread"),c("li",null,c("code",null,"local[n]")," - ",c("code",null,"n")," threads\uff08",c("code",null,"n")," is a number\uff09"),c("li",null,c("code",null,"local[*]")," - As many threads as available in JVM.\uff08",c("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#availableProcessors--"},c("code",null,"Runtime.getRuntime.availableProcessors()"))," is used internally\uff09")),c("p",null,"It seems that ",c("code",null,"local[*]")," is commonly used."),c("p",null,"Try to calculate the sum of the numbers from 0 to 10.")),c("div",{className:"nb-cell nb-code-cell"},c("div",{className:"nb-input","data-prompt-number":3},c("pre",{className:"language-python"},c("code",{className:"language-python","data-language":"python"},"rdd ",c("span",{className:"token operator"},"=")," sc",c("span",{className:"token punctuation"},"."),"parallelize",c("span",{className:"token punctuation"},"("),c("span",{className:"token builtin"},"range"),c("span",{className:"token punctuation"},"("),c("span",{className:"token number"},"10"),c("span",{className:"token punctuation"},")"),c("span",{className:"token punctuation"},")"),"\n","rdd",c("span",{className:"token punctuation"},"."),c("span",{className:"token builtin"},"sum"),c("span",{className:"token punctuation"},"("),c("span",{className:"token punctuation"},")")))),c("div",{className:"nb-output","data-prompt-number":3},c("pre",{className:"nb-text-output"},"45"))),c("div",{className:"nb-cell nb-markdown-cell"},c("p",null,"Stop the cluster when you are done using it.")),c("div",{className:"nb-cell nb-code-cell"},c("div",{className:"nb-input","data-prompt-number":4},c("pre",{className:"language-python"},c("code",{className:"language-python","data-language":"python"},"sc",c("span",{className:"token punctuation"},"."),"stop",c("span",{className:"token punctuation"},"("),c("span",{className:"token punctuation"},")"))))),c("div",{className:"nb-cell nb-markdown-cell"},c("h2",null,"Conclusion"),c("p",null,"In this article, I created a pyspark environment using Docker and launched a Spark cluster in a local mode. I don't know much about Spark yet, but I'll try to do more and more things little by little."),c("h2",null,"References"),c("ul",null,c("li",null,c("a",{href:"https://hub.docker.com/r/jupyter/pyspark-notebook/"},"jupyter/pyspark-notebook - Docker Hub")),c("li",null,c("a",{href:"https://jupyter-docker-stacks.readthedocs.io/en/latest/using/specifics.html#apache-spark"},"Image Specifics \u2014 docker-stacks latest documentation")),c("li",null,c("a",{href:"https://spark.apache.org/docs/latest/api/python/pyspark.html"},"pyspark package \u2014 PySpark 2.4.0 documentation")),c("li",null,c("a",{href:"https://blog.sicara.com/get-started-pyspark-jupyter-guide-tutorial-ae2fe84f594f"},"Get Started with PySpark and Jupyter Notebook in 3 Minutes")),c("li",null,c("a",{href:"https://jaceklaskowski.gitbooks.io/mastering-apache-spark/spark-local.html"},"Spark local (pseudo-cluster) \xb7 Mastering Apache Spark"))))))},u=i.a.createElement,m=function(e){var a=e.meta;return u(r.b,{meta:a},u(p,null))};m.getInitialProps=Object(o.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t("n1xW"),n=a.entries,e.abrupt("return",{meta:n["blog/2019/01/hello-pyspark"]});case 2:case"end":return e.stop()}}),e)})));a.default=m},eesI:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/hello-pyspark",function(){return t("aTI2")}])},n1xW:function(e,a,t){"use strict";t.r(a),t.d(a,"entries",(function(){return n}));var n={"blog/2020/01/poisson-generalized-linear-model":{description:"\u67b6\u7a7a\u690d\u7269\u306e\u30c7\u30fc\u30bf\u3092\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb\u3067\u3042\u308b\u30dd\u30a2\u30bd\u30f3\u56de\u5e30\u3092\u7528\u3044\u3066\u30e2\u30c7\u30ea\u30f3\u30b0\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-18T10:54:00+09:00",modifiedAt:"2020-01-18T11:25:00+09:00",tags:["julia"],title:"\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb - \u30dd\u30a2\u30bd\u30f3\u56de\u5e30"},"blog/2020/01/maximum-likelihood-estimation-of-probability-distribution-and-statistical-model":{description:"\u67b6\u7a7a\u306e\u690d\u7269\u306e\u96c6\u56e3\u3092\u8abf\u67fb\u3057\u3066\u5f97\u3089\u308c\u305f\u30c7\u30fc\u30bf\u3092\u8aac\u660e\u3059\u308b\u305f\u3081\u306b\u30dd\u30a2\u30bd\u30f3\u5206\u5e03\u3092\u3042\u3066\u306f\u3081\u3001\u6700\u5c24\u63a8\u5b9a\u3092\u7528\u3044\u3066\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u63a8\u5b9a\u3092\u884c\u3046\u3002",format:"ipynb",publishedAt:"2020-01-13T00:52:00+09:00",tags:["julia"],title:"\u78ba\u7387\u5206\u5e03\u3068\u7d71\u8a08\u30e2\u30c7\u30eb\u306e\u6700\u5c24\u63a8\u5b9a"},"blog/2020/01/als-for-matrix-factorization":{description:"\u5354\u8abf\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3067\u5e83\u304f\u4f7f\u308f\u308c\u308b MF \u306e\u5b9f\u88c5\u306e\u4e00\u3064\u3067\u3042\u308b ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u5b66\u7684\u306a\u80cc\u666f\u3092\u78ba\u8a8d\u3057\u3001 Julia \u3092\u4f7f\u3063\u3066\u5b9f\u88c5\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-06T10:09:00+09:00",modifiedAt:"2020-01-06T10:33:00+09:00",tags:["julia"],title:"Matrix Factorization \u306e\u305f\u3081\u306e ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u7406\u3068\u5b9f\u88c5"},"blog/2019/10/github-actions":{description:"\u30d6\u30ed\u30b0\u306e CI/CD \u3092 CircleCI \u304b\u3089 GitHub Actions \u306b\u79fb\u884c\u3057\u3066\u307f\u3066\u306e\u6240\u611f\u306a\u3069\u3002",format:"mdx",publishedAt:"2019-10-13T23:57:00+09:00",tags:["Blog dev"],title:"GitHub Actions \u306b\u79fb\u884c\u3057\u305f"},"blog/2019/08/rss-feed":{description:"\u30d6\u30ed\u30b0\u306b RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-30T19:10:00+09:00",tags:["Blog dev"],title:"RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u305f"},"blog/2019/08/ipynb-without-python":{description:"Python \u3092\u4f7f\u308f\u305a\u306b Jupyter Notebook \u5f62\u5f0f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-18T19:10:00+09:00",tags:["Blog dev"],title:"\u30d6\u30ed\u30b0\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u304b\u3089 Python \u3092\u6392\u9664\u3057\u305f"},"blog/2019/06/why-i-joined-flywheel":{description:"\u4f55\u3092\u9b45\u529b\u306b\u611f\u3058\u3066 FLYWHEEL \u306b\u5165\u793e\u3057\u3088\u3046\u3068\u6c7a\u3081\u305f\u306e\u304b\u306e\u8a18\u9332\u3067\u3059\u3002",format:"mdx",modifiedAt:"2019-06-18T09:52:00+09:00",publishedAt:"2019-06-17T22:28:00+09:00",tags:["essay"],title:"\u306a\u305c FLYWHEEL \u306b\u5165\u793e\u3057\u305f\u306e\u304b"},"blog/2019/04/pyspark-ml-vs-mllib":{description:"",format:"mdx",publishedAt:"2019-04-22T00:04:00+09:00",tags:["pyspark"],title:"pyspark.ml \u3068 pyspark.mllib \u306e\u3069\u3061\u3089\u3092\u4f7f\u3046\u3079\u304d\u304b"},"blog/2019/01/authorize-iap-by-nodejs":{description:"Cloud IAP \u3067\u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057 google-auth-library \u3092\u4f7f\u3063\u3066 Node.js \u3067\u8a8d\u8a3c\u3057\u30a2\u30af\u30bb\u30b9\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002",format:"mdx",publishedAt:"2019-01-28T14:54:00+09:00",tags:["GCP"],title:"Node.js \u304b\u3089 Cloud IAP \u3067\u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3092\u8a8d\u8a3c\u3059\u308b"},"blog/2019/01/grpc-proxy-for-grpc-web":{description:"In order for gRPC to communicate with gRPC-Web, you need to set up a proxy, such as Envoy. This article describes why gRPC-Web needs a proxy.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2019-01-25T23:26:00+09:00",publishedAt:"2019-01-25T22:30:00+09:00",tags:["gRPC"],title:"Why gRPC-Web Needs Proxy"},"blog/2019/01/deploy-app-engine-from-circleci":{description:"How to deploy ann app running on AppEngine Node.js standard environment using CircleCI",format:"mdx",modifiedAt:"2019-01-20T09:33:00+09:00",publishedAt:"2019-01-18T14:00:00+09:00",tags:["GCP"],title:"Deploy AppEngine Apps Using CircleCI"},"blog/2019/01/google-cloud-sdk-in-docker":{description:"This article explains how to install and use the Google Cloud SDK in Docker rather than on the local machine.",format:"mdx",modifiedAt:"2020-05-30T09:21:13+09:00",publishedAt:"2019-01-17T14:43:00+09:00",tags:["GCP"],title:"How to Use Google Cloud SDK Using Docker"},"blog/2019/01/hello-pyspark":{description:"An introduction to pyspark using the Docker image environment provided by Jupyter Lab.",format:"ipynb",modifiedAt:"2020-05-30T08:34:49+09:00",publishedAt:"2019-01-16T20:50:00+09:00",tags:["pyspark"],title:"Getting started with pyspark using Docker"},"blog/2019/01/hello-ipynb":{description:"Jupyter Notebook can now be displayed on this blog. I'm going to use it to publish my study records of machine learning and data analysis. This article describes the details of the implementation.",format:"ipynb",modifiedAt:"2020-05-30T00:43:29+09:00",publishedAt:"2019-01-15T20:17:00+09:00",tags:["Blog dev"],title:"Display Jupyter Notebook on Next.js"},"blog/2019/01/twitter-card-and-ogp":{description:"Twitter Card and Open Graph Protocol are now supported on the blog.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2020-05-29T23:41:46+09:00",publishedAt:"2019-01-07T22:40:00+09:00",tags:["Blog dev"],title:"Twitter Card and OGP Support"},"blog/2019/01/hello-new-blog":{description:"It's 2019 and I've created a new blog of my own. I will explain the motivation and the background of the selection of the tools I used.",format:"mdx",modifiedAt:"2020-05-24T16:15:21+09:00",ogImage:"https://yuku.takahashi.coffee/static/images/2019/01/next-vs-gatsby.png",publishedAt:"2019-01-05T13:52:00+09:00",tags:["Blog dev"],title:"Background on Blog Homebrewing and Tool Selection in 2019"}}}},[["eesI",0,1,4,2,3,5]]]);