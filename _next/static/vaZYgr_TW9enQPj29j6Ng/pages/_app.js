(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"0b+E":function(e,t,n){"use strict";n.r(t),n.d(t,"initialize",(function(){return re})),n.d(t,"ga",(function(){return oe})),n.d(t,"set",(function(){return ie})),n.d(t,"send",(function(){return ae})),n.d(t,"pageview",(function(){return ce})),n.d(t,"modalview",(function(){return ue})),n.d(t,"timing",(function(){return se})),n.d(t,"event",(function(){return le})),n.d(t,"exception",(function(){return fe})),n.d(t,"plugin",(function(){return pe})),n.d(t,"outboundLink",(function(){return de})),n.d(t,"testModeAPI",(function(){return ge})),n.d(t,"OutboundLink",(function(){return he}));var r={};n.r(r),n.d(r,"initialize",(function(){return J})),n.d(r,"ga",(function(){return B})),n.d(r,"set",(function(){return G})),n.d(r,"send",(function(){return K})),n.d(r,"pageview",(function(){return W})),n.d(r,"modalview",(function(){return Y})),n.d(r,"timing",(function(){return $})),n.d(r,"event",(function(){return H})),n.d(r,"exception",(function(){return Z})),n.d(r,"plugin",(function(){return X})),n.d(r,"outboundLink",(function(){return V})),n.d(r,"testModeAPI",(function(){return Q})),n.d(r,"default",(function(){return ee}));var o=n("q1tI"),i=n.n(o),a=n("17x9"),c=n.n(a);function u(e){console.warn("[react-ga]",e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="_blank",b=1,v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=this,o=(e=d(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==s(o)&&"function"!==typeof o?g(r):o,y(g(n),"handleClick",(function(e){var r=n.props,o=r.target,i=r.eventLabel,a=r.to,c=r.onClick,u=r.trackerNames,s={label:i},l=o!==m,f=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===b);l&&f?(e.preventDefault(),t.trackLink(s,(function(){window.location.href=a}),u)):t.trackLink(s,(function(){}),u),c&&c(e)})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===m&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,i.a.createElement("a",n)}}])&&p(n.prototype,r),o&&p(n,o),t}(o.Component);function w(e){return e.replace(/^\s+|\s+$/g,"")}y(v,"trackLink",(function(){u("ga tracking not enabled")})),y(v,"propTypes",{eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)}),y(v,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var C=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var O="REDACTED (Potential Email Address)";function k(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(u("This arg looks like an email address, redacting."),O):t?w(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(C)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}var j=function(e){var t,n,r,o,i,a,c,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,i="ga",t.GoogleAnalyticsObject=i,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=n.createElement(r),c=n.getElementsByTagName(r)[0],a.async=1,a.src=o,c.parentNode.insertBefore(a,c)};function x(e){console.info("[react-ga]",e)}var P=[],F={calls:P,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P.push([].concat(t))},resetCalls:function(){P.length=0}};function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var N="undefined"===typeof window||"undefined"===typeof document,D=!1,I=!0,q=!1,R=!0,L=function(){var e;return q?F.ga.apply(F,arguments):!N&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function M(e){return k(e,I)}function z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof L){if("string"!==typeof o)return void u("ga command must be a string");!R&&Array.isArray(e)||L.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){L.apply(void 0,_(["".concat(e,".").concat(o)].concat(n.slice(1))))}))}}function U(e,t){e?t&&(t.debug&&!0===t.debug&&(D=!0),!1===t.titleCase&&(I=!1),t.useExistingGa)||(t&&t.gaOptions?L("create",e,t.gaOptions):L("create",e,"auto")):u("gaTrackingID is required in initialize()")}function J(e,t){if(t&&!0===t.testMode)q=!0;else{if(N)return!1;t&&!0===t.standardImplementation||j(t)}return R=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===T(e)?U(e.trackingId,e):u("All configs must be an object")})):U(e,t),!0}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(L.apply(void 0,t),D&&(x("called ga('arguments');"),x("with arguments: ".concat(JSON.stringify(t))))),window.ga}function G(e,t){e?"object"===T(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),z(t,"set",e),D&&(x("called ga('set', fieldsObject);"),x("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function K(e,t){z(t,"send",e),D&&(x("called ga('send', fieldObject);"),x("with fieldObject: ".concat(JSON.stringify(e))),x("with trackers: ".concat(JSON.stringify(t))))}function W(e,t,n){if(e){var r=w(e);if(""!==r){var o={};if(n&&(o.title=n),z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),D){x("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),x("with path: ".concat(r).concat(i))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function Y(e,t){if(e){var n,r="/"===(n=w(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);z(t,"send","pageview",o),D&&(x("called ga('send', 'pageview', path);"),x("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var a={hitType:"timing",timingCategory:M(t),timingVar:M(n),timingValue:r};o&&(a.timingLabel=M(o)),K(a,i)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=E(e,["category","action","label","value","nonInteraction","transport"]),s=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:M(t),eventAction:M(n)};r&&(l.eventLabel=M(r)),"undefined"!==typeof o&&("number"!==typeof o?u("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?u("`args.nonInteraction` must be a boolean."):l.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=c[e]})),K(l,s)}else u("args.category AND args.action are required in event()")}function Z(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=M(n)),"undefined"!==typeof r&&("boolean"!==typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),K(o,t)}var X={require:function(e,t,n){if(e){var r=w(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==T(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),B(o,r,t),D&&x("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else B(o,r),D&&x("called ga('require', '".concat(r,"');"))}else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)u("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(B(o,r,n),D&&(x("called ga('".concat(o,"');")),x('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(B(o,n),D&&(x("called ga('".concat(o,"');")),x("with payload: ".concat(JSON.stringify(n))))):(B(o),D&&x("called ga('".concat(o,"');")))}}};function V(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:M(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},K(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var Q=F,ee={initialize:J,ga:B,set:G,send:K,pageview:W,modalview:Y,timing:$,event:H,exception:Z,plugin:X,outboundLink:V,testModeAPI:F};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=J,oe=B,ie=G,ae=K,ce=W,ue=Y,se=$,le=H,fe=Z,pe=X,de=V,ge=Q;v.origTrackLink=v.trackLink,v.trackLink=V;var he=v;t.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:he})},"3JDX":function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function a(...e){if(!a.enabled)return;const t=a,o=Number(new Date),i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o,e[0]=r.coerce(e[0]),"string"!==typeof e[0]&&e.unshift("%O");let c=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;c++;const i=r.formatters[o];if("function"===typeof i){const r=e[c];n=i.call(t,r),e.splice(c,1),c--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return a.namespace=e,a.enabled=r.enabled(e),a.useColors=r.useColors(),a.color=t(e),a.destroy=o,a.extend=i,"function"===typeof r.init&&r.init(a),r.instances.push(a),a}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){const n=r(this.namespace+("undefined"===typeof t?":":t)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},r.disable=function(){const e=[...r.names.map(a),...r.skips.map(a).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"===typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n("FGiv"),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7Ycq":function(e,t,n){e.exports=n("D7Rg")},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new g(e,t)),1!==s.length||l||c(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},B5Ud:function(e,t,n){"use strict";var r=n("o0o1"),o=n("lwsE"),i=n("W8MJ"),a=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),s=n("yXPU");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var f=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var p=f(n("q1tI")),d=n("g/15");function g(e){return h.apply(this,arguments)}function h(){return(h=s(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps;var y=function(e){a(n,e);var t=l(n);function n(){return o(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return(p.default.createElement(n,Object.assign({},r,o||i?{}:{url:m(t)})))}}]),n}(p.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=y,y.origGetInitialProps=g,y.getInitialProps=g},D7Rg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("q1tI"),o=a(n("UBBO")),i=a(n("qocf"));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){for(var t=1;t<arguments.length;t++){var n=null==arguments[t]?{}:arguments[t],r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function f(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return location.hostname===e}t.default=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a=n.localhost,c=void 0===a?"localhost":a;return function(n){var a=function(a){function l(){var e,t;s(this,l);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return m(y(y(t=p(this,(e=d(l)).call.apply(e,[this].concat(r))))),"state",{analytics:void 0}),t}return g(l,a),f(l,[{key:"componentDidMount",value:function(){var n=b(c)||!1?i:o;n.init(e),n.pageview();var r=t.onRouteChangeComplete;t.onRouteChangeComplete=function(){"function"==typeof r&&r(),n.pageview()},this.setState({analytics:n})}},{key:"render",value:function(){return(0,r.createElement)(n,u({},this.props,{analytics:this.state.analytics}))}}]),l}(r.Component);return n.getInitialProps&&(a.getInitialProps=n.getInitialProps),a}}},FGiv:function(e,t){var n=1e3,r=60*n,o=60*r,i=24*o,a=7*i,c=365.25*i;function u(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var u=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return u*c;case"weeks":case"week":case"w":return u*a;case"days":case"day":case"d":return u*i;case"hours":case"hour":case"hrs":case"hr":case"h":return u*o;case"minutes":case"minute":case"mins":case"min":case"m":return u*r;case"seconds":case"second":case"secs":case"sec":case"s":return u*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}(e);if("number"===s&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=i)return u(e,t,i,"day");if(t>=o)return u(e,t,o,"hour");if(t>=r)return u(e,t,r,"minute");if(t>=n)return u(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=i)return Math.round(e/i)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},NOtv:function(e,t,n){(function(r){t.log=function(...e){return"object"===typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(n){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(n){}!e&&"undefined"!==typeof r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!==typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n("3JDX")(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}).call(this,n("8oxB"))},UBBO:function(e,t,n){"use strict";var r,o=(r=n("0b+E"))&&r.__esModule?r:{default:r};Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){i&&!window.GA_INITIALIZED&&e&&o.default.initialize(e)},t.pageview=function(){o.default.set({page:window.location.pathname}),o.default.pageview(window.location.pathname)},t.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";e&&t&&o.default.event({category:e,action:t})},t.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];e&&o.default.exception({description:e,fatal:t})};var i="undefined"!=typeof window},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),g=n("g/15"),h=s(n("nOHt")),y=n("elyg");function m(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var b=new Map,v=window.IntersectionObserver,w={};function C(){return f||(v?f=new v((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,y.addBasePath)(m(e)),as:t?(0,y.addBasePath)(m(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,d.resolve)(u,a),c=c?(0,d.resolve)(u,c):a,e.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=C();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);t.default=O},cha2:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t);var u=n("q1tI"),s=n.n(u),l=n("8Bbg"),f=n.n(l),p=n("8Kt/"),d=n.n(p),g=n("nOHt"),h=n.n(g),y=n("7Ycq"),m=n.n(y),b=(n("q+Kr"),n("7O5W")),v=n("wHSu"),w=n("8tEE");b.b.add(v.a,v.b,v.c,w.a,w.b);var C=n("he5r"),O=n("TSYQ"),k=n.n(O),j=n("YFqc"),x=n.n(j),P=n("IP2g"),F=s.a.createElement,E=function(e){return F("nav",{className:k()("topbar-mobile d-flex justify-content-between",e.className)},F(x.a,{href:"/"},F("a",{href:"/",className:"brand"},C.c)),F("button",{className:"border-0 bg-transparent text-black-50",onClick:e.onClickToggler},F(P.a,{icon:"bars"})))},S=s.a.createElement,A=Object(g.withRouter)((function(e){return S("div",{className:k()("side-menu",e.className)},S("div",{className:"side-menu-inner"},S(x.a,{href:"/"},S("a",{href:"/",className:"brand"},C.c)),S("p",{className:"text-muted font-weight-light pt-1"},S("small",null,"Study hard, play harder.")),S("ul",{className:"list list-unstyled"},S("li",{className:k()({"font-weight-bold":"/"===e.router.pathname})},S(x.a,{href:"/"},S("a",{href:"/"},"Home"))),S("li",{className:k()({"font-weight-bold":"/about"===e.router.pathname})},S(x.a,{href:"/about"},S("a",{href:"/about"},"About Me"))),S("li",{className:k()({"font-weight-bold":"/resume"===e.router.pathname})},S(x.a,{href:"/resume"},S("a",{href:"/resume"},"Resume"))))))})),T=s.a.createElement,_=(new Date).getFullYear(),N=function(){return T("footer",{className:"text-center mt-4"},T("p",{className:"mb-0 text-dark"},T("small",null,"\xa9 Yuku Takahashi ",_," - This work is licensed under a"," ",T("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY-NC-SA 4.0 "))))},D=s.a.createElement,I=function(e){var t=e.children,n=Object(u.useState)(!1),r=n[0],o=n[1],i=Object(u.useCallback)((function(){return o(!1)}),[]),a=Object(u.useCallback)((function(){return o(!r)}),[r]);return Object(u.useEffect)((function(){return h.a.events.on("routeChangeComplete",i),function(){return h.a.events.off("routeChangeComplete",i)}}),[i]),D("div",{className:k()("layout mx-md-auto d-md-flex",{expanded:r})},D(E,{className:"d-md-none py-4 px-3",onClickToggler:a}),D(A,{className:"d-md-block px-3 p-lg-5 py-4"}),D("div",{className:"flex-md-grow-1 bg-white px-sm-3 pt-lg-5 py-4 overflow-hidden",onClick:i},t,D(N,null)))},q=s.a.createElement;function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var L=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(c,e);var t,n,i,a=R(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return q(s.a.Fragment,null,q(d.a,null,q("meta",{charSet:"utf-8"}),q("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),q("title",null,C.c),q("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/icons/apple-icon-57x57.png"}),q("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/static/icons/apple-icon-60x60.png"}),q("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/icons/apple-icon-72x72.png"}),q("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/static/icons/apple-icon-76x76.png"}),q("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/icons/apple-icon-114x114.png"}),q("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/static/icons/apple-icon-120x120.png"}),q("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/icons/apple-icon-144x144.png"}),q("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/static/icons/apple-icon-152x152.png"}),q("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/icons/apple-icon-180x180.png"}),q("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/static/icons/android-icon-192x192.png"}),q("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/icons/favicon-32x32.png"}),q("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/static/icons/favicon-96x96.png"}),q("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/icons/favicon-16x16.png"}),q("link",{rel:"icon",href:"/static/icons/favicon.ico"}),q("link",{rel:"manifest",href:"/static/config/manifest.json"}),q("meta",{name:"msapplication-TileColor",content:"#00BCD4"}),q("meta",{name:"msapplication-TileImage",content:"/static/icons/ms-icon-144x144.png"}),q("meta",{name:"msapplication-config",content:"/static/config/browserconfig.xml"}),q("meta",{name:"google-site-verification",content:"uoCr1A890A-K8B7GkFUvLlQ5ihZlFyR6gzvt4F-62u0"}),q("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700|Damion",rel:"stylesheet"}),q("link",{rel:"alternate",type:"application/rss+xml",href:"/static/rss-feed.xml"})),q(I,null,q(t,n)))}}])&&r(t.prototype,n),i&&r(t,i),c}(f.a);t.default=m()("UA-4932407-15",h.a)(L)},"q+Kr":function(e,t,n){},qocf:function(e,t,n){"use strict";var r,o=(r=n("NOtv"))&&r.__esModule?r:{default:r};Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){i("Analytics init triggered for ".concat(e))},t.pageview=function(){i("Pageview triggered for ".concat(window.location.pathname))},t.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";i("Event for category ".concat(e," and action ").concat(t," triggered"))},t.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];i("".concat(t?"Fatal exception":"Exception"," with description ").concat(e))};var i=(0,o.default)("analytics")}},[[0,0,1,9,10,7,2,5]]]);