_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"4JYB":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("LixI")}])},LixI:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=n("HM7x"),c=n("vOnD"),f=n("jIl4"),l=o.a.createElement,s=c.b.div.withConfig({displayName:"_error__C",componentId:"olavui-0"})(["position:'relative';"]),p=c.b.div.withConfig({displayName:"_error__Center",componentId:"olavui-1"})(["position:'absolute';top:'50%';left:'50%';transform:'translate(-50%,-50%)';font-size:'1.5em';text-align:'center';"]);t.default=function(e){return console.log("Render!!"),l(s,null,l(p,null,l("div",null,"404.",l("br",null),"\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u307e\u3057\u305f",l("br",null),"\u30da\u30fc\u30b8\u304c\u3042\u308a\u307e\u305b\u3093"),l(i.a,{href:"/category/about",as:f.a+"/category/about"},l(u.e,null,l("br",null),"TOP\u30da\u30fc\u30b8\u306b\u623b\u308b\u3001\u3001"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),u=n("elyg"),c=(n("g/15"),n("nOHt")),f=new Map,l=window.IntersectionObserver,s={};var p=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),s[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],f=o[1],v=(0,c.useRouter)(),h=v&&v.pathname||"/",_=i.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href);return{href:t,as:e.as?(0,u.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),w=_.href,g=_.as;i.default.useEffect((function(){if(t&&l&&a&&a.tagName&&(0,u.isLocalURL)(w)&&!s[w+"%"+g])return p(a,(function(){d(v,w,g)}))}),[t,a,w,g,v]);var y=e.children,b=e.replace,m=e.shallow,E=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var L=i.Children.only(y),I={ref:function(e){e&&f(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,w,g,b,m,E)}};return t&&(I.onMouseEnter=function(e){(0,u.isLocalURL)(w)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(v,w,g,{priority:!0}))}),!e.passHref&&("a"!==L.type||"href"in L.props)||(I.href=(0,u.addBasePath)(g)),i.default.cloneElement(L,I)};t.default=v}},[["4JYB",0,1,2,3,4]]]);