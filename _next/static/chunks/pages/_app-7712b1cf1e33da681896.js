_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8AQk":function(e,t){},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,c=l.length;s<c;s++){var u=l[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var p=r.props[u],d=a[u]||new Set;d.has(p)?o=!1:(d.add(p),a[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),s=n("7W2i"),c=n("a1gu"),u=n("Nsbk");function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=!1,f=function(e){s(n,e);var t=p(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,l&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},hUgY:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),s=n("YFqc"),c=n.n(s),u=n("nOHt"),p=n.n(u),d=n("vOnD"),l=(n("8AQk"),n("HM7x")),f=r.a.createElement,h=String("/myportfolio");p.a.events.on("routeChangeComplete",(function(e){return function(e){window.gtag("config","UA-174249701-1",{page_path:e})}(e)}));t.default=function(e){var t,n,o,s=e.Component,p=e.pageProps,k=Object(u.useRouter)().pathname,M=k.substr(k.lastIndexOf("/")+1),C=!1;switch(M){case"about":t=!0;break;case"profile":n=!0;break;case"task":o=!0;break;case"others":C=!0}var I=Object(a.useState)(!1),j=I[0],N=I[1];Object(a.useEffect)((function(){console.log("click:"+j+":"+M)}),[j]);return f(r.a.Fragment,null,f(i.a,null,f("title",null,"akaboshinit")),f(d.a,{theme:g},f(v,null,f(m,{value:"anime",type:"button",onClick:function(){return function(){var e=document.getElementsByClassName("animated");if(0==j)for(var t=function(t){var n=Math.floor(Math.random()*e.length);setTimeout((function(){e[n].classList.add("hinge")}),250*t)},n=0;e.length>n;n++)t(n);if(1==j)for(var a=0;e.length>a;a++)e[a].classList.remove("hinge");N(!j)}()}}),f(b,null,f(y,null,f(l.f,{className:"animated",width:"180px",height:"180px",src:h+"/images/main_circle.png"}),f(l.c,{className:"animated"},"akaboshinit")),f(w,null,f(c.a,{href:"/category/about",as:h+"/category/about"},f(l.g,{className:"animated",currentpath:t},"About")),f("div",null),f(c.a,{href:"/category/profile",as:h+"/category/profile"},f(l.g,{className:"animated",currentpath:n},"Profile")),f("div",null),f(c.a,{href:"/category/task",as:h+"/category/task"},f(l.g,{className:"animated",currentpath:o},"Task")),f("div",null),f(c.a,{href:"/category/others",as:h+"/category/others"},f(l.g,{className:"animated",currentpath:C},"Others")),f("div",null)),f(x,null,f(l.a,{href:"https://www.instagram.com/akaboshinit/?hl=ja"},f(l.e,{className:"animated fab fa-2x fa-instagram"})),f(l.a,{href:"https://twitter.com/akaboshinit"},f(l.e,{className:"animated fab fa-2x fa-twitter"})),f(l.a,{href:"https://www.facebook.com/people/Akaboshi/100054261799304"},f(l.e,{className:"animated fab fa-2x fa-facebook"})),f(l.a,{href:"https://github.com/akaboshinit"},f(l.e,{className:"animated fab fa-2x fa-github"}))),f(_,{className:"animated"},f(l.b,null,f(s,p)))))))};var m=d.b.input.withConfig({displayName:"_app__Input",componentId:"sc-2rjc1s-0"})(["width:100px;height:100px;position:absolute;top:500px;z-index:10;"]),g={colors:{light:"white"}},v=d.b.article.withConfig({displayName:"_app__Article",componentId:"sc-2rjc1s-1"})(["overflow:hidden;width:100vw;height:100vh;background-color:#FDFAF7;display:grid;place-items:center;@media (max-width:750px){overflow:hidden;place-items:start;}"]),b=d.b.div.withConfig({displayName:"_app__Box",componentId:"sc-2rjc1s-2"})(["background-color:#FDFAF7;color:#525252;font-family:'Lato,Noto Sans Japanese, sans-serif';font-size:1em;cursor:default;display:grid;grid-template-columns:220px 550px;grid-template-rows:220px 220px 110px;@media (max-width:750px){width:100vw;display:inline;}"]),y=d.b.div.withConfig({displayName:"_app__Divpro",componentId:"sc-2rjc1s-3"})(["grid-column:1/2;grid-row:1/2;text-align:center;@media (max-width:750px){height:220px;padding-top:50px}"]),w=d.b.ul.withConfig({displayName:"_app__List",componentId:"sc-2rjc1s-4"})(["box-sizing:border-box;grid-column:0/1;grid-row:2/3;margin:30px 0px 0px 30px;@media (max-width:750px){display:flex;margin:40px 0;position:relative;left:50%;transform:translateX(-50%);width:80%;justify-content:space-around;}"]),x=d.b.ul.withConfig({displayName:"_app__Icons",componentId:"sc-2rjc1s-5"})(["grid-column:0/1;grid-row:3/4;display:flex;position:relative;left:50%;transform:translateX(-50%);width:150px;justify-content:space-around;@media (max-width:750px){margin:30px 0;width:80%;}"]),_=d.b.div.withConfig({displayName:"_app__Divprece",componentId:"sc-2rjc1s-6"})(["grid-column:2/3;grid-row:1/4;border:black 1px solid;width:550px;height:550px;background-color:#FDFAF7;@media (max-width:750px){width:100%;}"])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[[0,0,1,2,3,4]]]);