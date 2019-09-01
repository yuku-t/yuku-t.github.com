(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"83p3":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/grpc-proxy-for-grpc-web",function(){var e=a("h37B");return{page:e.default||e}}])},h37B:function(e,t,a){"use strict";a.r(t);var c=a("ln6h"),r=a.n(c),b=a("O40h"),p=a("q1tI"),n=a.n(p),l=a("Yp5c"),o=a("kOwS"),O=a("qNsG"),u=a("E/Ix"),g=(n.a.createElement,{}),i="wrapper";function j(e){var t=e.components,a=Object(O.a)(e,["components"]);return Object(u.a)(i,Object(o.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(u.a)("p",null,"gRPC-Web \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080\u3068\u3053\u308c\u3068\u8a00\u3063\u305f\u8aac\u660e\u3082\u306a\u304f\u5510\u7a81\u306b ",Object(u.a)("a",Object(o.a)({parentName:"p"},{href:"https://www.envoyproxy.io/"}),"Envoy")," \u304c\u51fa\u3066\u304d\u3066\u9762\u98df\u3089\u3044\u307e\u3059\uff08\u305d\u3082\u305d\u3082 Envoy \u3068\u306f\u306a\u3093\u305e\u3084\u3068\u3044\u3046\u306e\u306f\u5272\u611b\uff09"),Object(u.a)("blockquote",null,Object(u.a)("p",{parentName:"blockquote"},"In this example, we will use the ",Object(u.a)("a",Object(o.a)({parentName:"p"},{href:"https://www.envoyproxy.io/"}),"Envoy")," proxy to forward the gRPC browser request to the backend server. - ",Object(u.a)("a",Object(o.a)({parentName:"p"},{href:"https://grpc.io/docs/tutorials/basic/web.html"}),"gRPC Basics - Web"))),Object(u.a)("p",null,"gRPC \u306f HTTP/2 \u3092\u4f7f\u3044\u307e\u3059\u304c\u3001\u6700\u8fd1\u306e\u30d6\u30e9\u30a6\u30b6\u306f HTTP/2 \u3067\u901a\u4fe1\u3067\u304d\u308b\u306e\u3060\u304b\u3089\u30b5\u30dd\u30fc\u30c8\u30d6\u30e9\u30a6\u30b6\u3092\u9650\u5b9a\u3059\u308c\u3070\u308f\u3056\u308f\u3056\u30d7\u30ed\u30ad\u30b7\u3092\u7acb\u3066\u308b\u5fc5\u8981\u6027\u306f\u306a\u3055\u305d\u3046\u306a\u6c17\u304c\u3057\u307e\u3059\u3002\u306b\u3082\u95a2\u308f\u3089\u305a\u306a\u305c\u30d7\u30ed\u30ad\u30b7\u304c\u5fc5\u8981\u306a\u306e\u3067\u3057\u3087\u3046\uff1f"),Object(u.a)("h2",null,"\u30d6\u30e9\u30a6\u30b6\u306e\u5236\u7d04"),Object(u.a)("p",null,"gRPC-Web \u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u8aac\u660e\u3057\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u30d2\u30f3\u30c8\u304c\u3042\u308a\u307e\u3057\u305f:"),Object(u.a)("blockquote",null,Object(u.a)("p",{parentName:"blockquote"},"decouple from HTTP/2 framing which is not, and will never, be directly exposed by browsers - ",Object(u.a)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/grpc/grpc/blob/f0bfcd864c7a2395ad82ff9db8e39d0c51d49ee0/doc/PROTOCOL-WEB.md"}),"grpc/PROTOCOL-WEB.md at master \xb7 grpc/grpc"))),Object(u.a)("p",null,"\u3064\u307e\u308a"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u52d5\u4f5c\u3059\u308b JavaScript \u304b\u3089\u306f HTTP/2 \u3092\u5b8c\u5168\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044"),Object(u.a)("li",{parentName:"ul"},"gRPC \u306f\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u4e2d\u3067\u305d\u306e JavaScript \u304b\u3089\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u306a\u3044\u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u3044\u308b"),Object(u.a)("li",{parentName:"ul"},"\u306a\u306e\u3067\u30d7\u30ed\u30ad\u30b7\u304c\u5fc5\u8981")),Object(u.a)("p",null,"\u3068\u3044\u3046\u3053\u3068\u306e\u3088\u3046\u3067\u3059\u3002"),Object(u.a)("h2",null,"\u306a\u305c\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u306a\u3044"),Object(u.a)("p",null,"\u306a\u305c\u30d6\u30e9\u30a6\u30b6\u3067\u7d76\u5bfe\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3089\u306a\u3044\u3068\u8a00\u3044\u5207\u308c\u308b\u306e\u304b\u3002\u305d\u306e\u7406\u7531\u306f\u30d6\u30e9\u30a6\u30b6\u3068\u3044\u3046\u304b\u30d1\u30d6\u30ea\u30c3\u30af Web \u3067\u306e HTTP/2 \u306e\u7acb\u3061\u4f4d\u7f6e\u304c\u95a2\u4fc2\u3057\u3066\u3044\u307e\u3059\u3002"),Object(u.a)("p",null,"\u9577\u3044\u3053\u3068 Web \u3067\u306f HTTP/1.1 \u304c\u4f7f\u308f\u308c\u3066\u304d\u307e\u3057\u305f\u3002\u306a\u306e\u3067 Web \u30b5\u30fc\u30d0\u304c HTTP/1.1 \u3067\u901a\u4fe1\u3067\u304d\u308b\u3053\u3068\u306f\u671f\u5f85\u3067\u304d\u307e\u3059\uff08\u3068\u3044\u3046\u304b\u305d\u308c\u304c Web \u30b5\u30fc\u30d0\u306e\u5b9a\u7fa9\u304b\uff09\u304c\u3001 HTTP/2 \u3067\u901a\u4fe1\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u306f\u4e0d\u660e\u3067\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u306f HTTP/2 \u3067\u901a\u4fe1\u3067\u304d\u308c\u3070\u305d\u3046\u3057\u307e\u3059\u304c\u3001\u3067\u304d\u306a\u3044\u5834\u5408\u306f HTTP/1.1 \u3092\u52dd\u624b\u306b\u4f7f\u3044\u307e\u3059\u3002"),Object(u.a)("p",null,"\u307e\u305f\u901a\u4fe1\u30d7\u30ed\u30c8\u30b3\u30eb\u306f\u30ec\u30a4\u30e4\u30fc\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306a\u306e\u3067\u3001\u4e0a\u4f4d\u306b\u4f4d\u7f6e\u3059\u308b Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4e0b\u4f4d\u3067\u4f7f\u308f\u308c\u3066\u3044\u308b\u306e\u304c HTTP/2 \u306a\u306e\u304b\u3001\u3042\u308b\u3044\u306f HTTP/1.1 \u306a\u306e\u304b\u3092\u610f\u8b58\u3059\u308b\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3064\u307e\u308a HTTP/1.1 \u3068 HTTP/2 \u3092\u900f\u904e\u7684\u306b\u6271\u3048\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u4ee5\u4e0a\u3001\u7247\u65b9\u306b\u3057\u304b\u5b58\u5728\u3057\u306a\u3044\u6a5f\u80fd\u3092\u64cd\u4f5c\u3059\u308b API \u304c\u63d0\u4f9b\u3055\u308c\u308b\u3053\u3068\u306f\u306a\u3044\u3001\u305d\u3057\u3066 gRPC \u3067\u306f\u305d\u306e\u9818\u57df\u306b\u5c5e\u3059\u308b\u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u3044\u308b\u308f\u3051\u306a\u306e\u3067\u3059\u3002"),Object(u.a)("h2",null,"Envoy \u4ee5\u5916\u306e\u9078\u629e\u80a2"),Object(u.a)("p",null,"\u305d\u308c\u306f\u3055\u3066\u304a\u304d Envoy \u306f gRPC-Web \u7528\u306e\u30d7\u30ed\u30ad\u30b7\u5b9f\u88c5\u306e\u4e00\u3064\u306b\u904e\u304e\u307e\u305b\u3093\u3002\u4ed6\u306b\u3082\u3044\u308d\u3044\u308d\u3042\u308b\u306f\u305a\u3067\u3059\u3002"),Object(u.a)("p",null,"\u3067\u8abf\u3079\u3066\u307f\u305f\u306e\u3060\u3051\u3069\u3001\u7d50\u5c40\u307e\u3068\u3082\u306b\u4f7f\u3048\u305d\u3046\u306a\u306e\u304c ",Object(u.a)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/improbable-eng/grpc-web"}),"improbable-eng/grpc-web")," \u3057\u304b\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002improbable-eng/grpc-web \u306f Go \u3067\u66f8\u304b\u308c\u305f\u30d7\u30ed\u30ad\u30b7\u5b9f\u88c5\u3067\u3001 Go \u30d7\u30ed\u30b0\u30e9\u30e0\u304b\u3089\u6a19\u6e96\u306e ",Object(u.a)("inlineCode",{parentName:"p"},"http.Handler")," \u3092\u30e9\u30c3\u30d7\u3057\u3066\u4f7f\u3046\u304b\u3001 Envoy \u306e\u3088\u3046\u306b ",Object(u.a)("inlineCode",{parentName:"p"},"grpcwebproxy")," \u30b3\u30de\u30f3\u30c9\u3067\u30d7\u30ed\u30ad\u30b7\u3092\u7acb\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u3067\u3059\u3002\u3053\u308c\u3092\u4f7f\u3048\u3070 Go \u3067\u66f8\u3044\u305f gRPC \u30b5\u30fc\u30d0\u304c\u76f4\u63a5 gRPC-Web \u3068\u901a\u4fe1\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u305d\u3046\u3067\u3059\u3002"),Object(u.a)("h2",null,"GAE \u3067 gRPC-Web \u4f7f\u3046\u306b\u306f"),Object(u.a)("p",null,"\u305d\u3082\u305d\u3082\u306a\u3093\u3067 gRPC-Web \u3068\u30d7\u30ed\u30ad\u30b7\u306b\u3064\u3044\u3066\u8abf\u3079\u3066\u3044\u305f\u306e\u304b\u3068\u3044\u3046\u3068 GAE \u3067\u4f5c\u3063\u305f gRPC \u30b5\u30fc\u30d3\u30b9\u306b gRPC-Web \u304b\u3089\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u3068\u601d\u3063\u305f\u304b\u3089\u306a\u306e\u3067\u3057\u305f\u3002"),Object(u.a)("blockquote",{class:"twitter-tweet","data-lang":"ja"},Object(u.a)("p",{lang:"ja",dir:"ltr"},"GAE\u3067Next.js\u3068GraphQL\u3092\u305d\u308c\u305e\u308cservice\u3068\u3057\u3066\u7acb\u3066\u3066web\u30a2\u30d7\u30ea\u66f8\u3044\u3066\u307f\u3066\u3044\u305f\u3051\u3069\u3001\u4e00\u5ff5\u767a\u8d77\u3057\u3066gRPC-Web\u306b\u3057\u3066\u307f\u308b\u306e\u3082\u9762\u767d\u305d\u3046\u306a\u6c17\u304c\u3057\u3066\u304d\u305f"),"\u2014 \u3086\u3046\u304f (@yuku_t) ",Object(u.a)("a",{href:"https://twitter.com/yuku_t/status/1088703627521273856?ref_src=twsrc%5Etfw"},"2019\u5e741\u670825\u65e5")),Object(u.a)("p",null,"\u6d41\u77f3\u306b GAE \u306e\u524d\u306b Envoy \u3092\u7acb\u3066\u308b\u306e\u306f\u9762\u5012\u306a\u306e\u3067\u3001\u305d\u3082\u305d\u3082\u672c\u5f53\u306b\u30d7\u30ed\u30ad\u30b7\u5fc5\u8981\u306a\u306e\u304b\u3088\uff1f...\u5fc5\u8981\u3060\u3063\u305f\u3002\u4ed6\u306b\u3084\u308a\u65b9\u306a\u3044\u306e\u304b\uff1f...improbable-eng/grpc-web \u3092\u767a\u898b\u3068\u3044\u3046\u6b21\u7b2c\u3067\u3059\u3002\u3068\u3044\u3046\u308f\u3051\u3067 GAE Go \u3067 gRPC \u4f5c\u3063\u3066\u307f\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),Object(u.a)("h2",null,"\u53c2\u8003"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/grpc/grpc/blob/f0bfcd8/doc/PROTOCOL-WEB.md"}),"grpc/PROTOCOL-WEB.md \xb7 grpc/grpc")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/grpc/grpc/blob/f0bfcd864c7a2395ad82ff9db8e39d0c51d49ee0/doc/PROTOCOL-HTTP2.md"}),"grpc/PROTOCOL-HTTP2.md \xb7 grpc/grpc")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/grpc/grpc-web/issues/347"}),"Why is envoy proxy required? \xb7 Issue #347 \xb7 grpc/grpc-web")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/k2wanko/gae-grpc-web"}),"k2wanko/gae-grpc-web: Example: gRPC Web on Google App Engine / Go"))))}j.isMDXComponent=!0;var s=n.a.createElement,m=function(e){var t=e.meta;return s(l.a,{meta:t},s(j,null))};m.getInitialProps=Object(b.a)(r.a.mark(function e(){var t,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a("n1xW"),c=t.entries,e.abrupt("return",{meta:c["blog/2019/01/grpc-proxy-for-grpc-web"]});case 2:case"end":return e.stop()}},e)}));t.default=m}},[["83p3",1,0]]]);