(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{19:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(7),l=n.n(i),u=n(16),s=n(4),m=n.n(s),p=n(1),f=n.n(p),y=n(3),b=(n(61),function(e){return r.a.createElement("aside",{className:m()("widget mb-4",e.className)},r.a.createElement("h1",{className:"title font-weight-bold"},e.title),e.children)}),d=(n(62),function(e){return e||"https://yuku.takahashi.coffee".concat(y.a)}),h=Object(u.withRouter)(function(e){return r.a.createElement("div",{className:"blogpage container"},r.a.createElement(c.a,null,r.a.createElement("title",null,e.meta.title," - ",y.c),r.a.createElement("meta",{name:"description",content:e.meta.description}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@yuku_t"}),r.a.createElement("meta",{property:"fb:app_id",content:y.b}),r.a.createElement("meta",{property:"og:title",content:"".concat(e.meta.title," - ").concat(y.c)}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(e.router.pathname)}),r.a.createElement("meta",{property:"og:image",content:d()}),r.a.createElement("meta",{property:"og:description",content:e.meta.description}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:m()("col-xl-8",e.className)},r.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.a.createElement("meta",{itemProp:"author",content:"Yuku Takahashi"}),r.a.createElement("meta",{itemProp:"datePublished",content:e.meta.publishedAt}),e.meta.modifiedAt&&r.a.createElement("meta",{itemProp:"dateModified",content:e.meta.modifiedAt}),r.a.createElement("meta",{itemProp:"image",content:d()}),r.a.createElement("header",{className:"mb-4 header"},r.a.createElement("h1",{className:"headline",itemProp:"headline"},e.meta.title),r.a.createElement("ul",{className:"list-inline text-dark font-weight-light"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fas fa-calendar-day fa-fw"}),r.a.createElement("span",{className:"ml-1"},f()(e.meta.publishedAt).format("YYYY-MM-DD HH:mm"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fas fa-tags fa-fw"}),e.meta.tags.map(function(e,t){return[t>0?",":null,r.a.createElement("span",{key:t,className:"ml-1"},e)]})))),r.a.createElement("section",{className:"mb-4 body",itemProp:"articleBody"},e.children))),r.a.createElement("div",{className:"col-xl-4"},r.a.createElement("div",{className:"pl-xl-2"},r.a.createElement(b,{title:"About Me"},r.a.createElement("div",null,r.a.createElement("img",{src:y.a,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),r.a.createElement("p",null,"Increments 社最初の従業員として Qiita を開発したり CTO やったりしていました。現在有給消化中。",r.a.createElement(l.a,{href:"/about"},r.a.createElement("a",{href:"/about"},"もっと読む"))))),r.a.createElement(b,{title:"Follow"},r.a.createElement("ul",{className:"list-inline icons"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://twitter.com/yuku_t"},r.a.createElement("span",{className:"fa-stack fa-lg"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-twitter fa-stack-1x fa-inverse"})))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://github.com/yuku"},r.a.createElement("span",{className:"fa-stack fa-lg"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-github fa-stack-1x fa-inverse"}))))))))))});n(63);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,w(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){if(this.props.meta.loadTwitterWidget){var e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}},{key:"render",value:function(){return r.a.createElement(h,{className:"mdx",meta:this.props.meta},this.props.children)}}])&&g(n.prototype,a),o&&g(n,o),t}(),k=(n(64),function(e){return r.a.createElement(h,{className:"notebook",meta:e.meta},e.children)});n.d(t,"a",function(){return _}),n.d(t,"b",function(){return k})},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(91);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(48);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},386:function(e,t,n){__NEXT_REGISTER_PAGE("/blog/2019/01/twitter-card-and-ogp",function(){return e.exports=n(396),{page:e.exports.default}})},396:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),o=n(0),c=n.n(o),i=n(19),l=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,f(t).call(this,e))).layout=null,n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,c.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",components:t},c.a.createElement(l.MDXTag,{name:"p",components:t},"Commit: ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/yuku/yuku.github.io/commit/5fe34e4bee6893000c88db02e353c3ae69400876"}},"yuku/yuku.github.io@",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"5fe34e4"))),c.a.createElement(l.MDXTag,{name:"p",components:t},c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://ogp.me/"}},"Open Graph protocol (OGP)")," と ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started"}},"Twitter Card")," に対応して Twitter や Facebook でブログ記事の URL が共有されたときにリッチスニペットが表示されるようにしました。"),c.a.createElement("blockquote",{className:"twitter-tweet","data-lang":"ja"},c.a.createElement("p",{lang:"ja",dir:"ltr"},"ブログ書いてみた",c.a.createElement("a",{href:"https://t.co/Gehy21W69V"},"https://t.co/Gehy21W69V")),"— ゆうく (@yuku_t) ",c.a.createElement("a",{href:"https://twitter.com/yuku_t/status/1082265069449240578?ref_src=twsrc%5Etfw"},"2019年1月7日")),c.a.createElement(l.MDXTag,{name:"p",components:t},"開発時はそれぞれのリンク先のドキュメントを参照しつつ実装し、 Facebook と Twitter が用意しているデバッガーを使って動作確認をします:"),c.a.createElement(l.MDXTag,{name:"ul",components:t},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://cards-dev.twitter.com/validator"}},"Card Validator | Twitter Developers")),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://developers.facebook.com/tools/debug/sharing/"}},"シェアデバッガー - 開発者向け Facebook"))),c.a.createElement(l.MDXTag,{name:"p",components:t},c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developers.facebook.com/docs/sharing/webmasters"}},"Facebook の仕様"),"として ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fb:app_id")," が求められたので、新しく本ブログ用のプロジェクトを Facebook に作り、その ID を登録しました。 Web 上の古い情報によると昔は ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fb:admins")," などもサポートされていましたが、現在は ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fb:app_id")," に一本化されたようです。"))}}])&&m(n.prototype,a),r&&m(n,r),t}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,a,r,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(a,r)}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return O});var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,v(t).apply(this,arguments))}var a,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,c.a.Component),a=t,o=[{key:"render",value:function(){return c.a.createElement(i.a,{meta:this.props.meta},c.a.createElement(b,null))}}],l=[{key:"getInitialProps",value:function(){var e,t=(e=r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(47),a=t.entries,e.abrupt("return",{meta:a["blog/2019/01/twitter-card-and-ogp"]});case 2:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){h(o,a,r,c,i,"next",e)}function i(e){h(o,a,r,c,i,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}()}],o&&E(a.prototype,o),l&&E(a,l),t}()},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(0),c=(a=o)&&a.__esModule?a:{default:a};var i=c.default.createContext({}),l=i.Provider,u=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return c.default.createElement(u,null,function(t){return c.default.createElement(e,r({components:n||t},a))})}};t.default=function(e){var t=e.components,n=e.children;return c.default.createElement(l,{value:t},n)}},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),i=(a=c)&&a.__esModule?a:{default:a},l=n(48);var u={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,c=e.children,l=e.components,s=void 0===l?{}:l,m=e.Layout,p=e.layoutProps,f=s[n+"."+t]||s[t]||u[t]||t;return m?i.default.createElement(m,r({components:s},p),i.default.createElement(f,o,c)):i.default.createElement(f,o,c)}}]),t}();t.default=(0,l.withMDXComponents)(s)}},[[386,1,0,2]]]);