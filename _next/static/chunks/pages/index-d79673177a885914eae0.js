_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),u=n.n(a),c=o.a.createElement;function f(){return c("div",null,"Hello World."," ",c(u.a,{href:"/about",as:"/myportfolio/about"},c("a",null,"About")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,u=o(n("q1tI")),c=n("elyg"),f=(n("g/15"),n("nOHt")),i=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=u.default.useState(),o=r(n,2),a=o[0],i=o[1],v=(0,f.useRouter)(),h=v&&v.pathname||"/",w=u.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),y=w.href,E=w.as;u.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,c.isLocalURL)(y)&&!l[y+"%"+E])return p(a,(function(){d(v,y,E)}))}),[t,a,y,E,v]);var _=e.children,g=e.replace,b=e.shallow,m=e.scroll;"string"===typeof _&&(_=u.default.createElement("a",null,_));var R=u.Children.only(_),N={ref:function(e){e&&i(e),R&&"object"===typeof R&&R.ref&&("function"===typeof R.ref?R.ref(e):"object"===typeof R.ref&&(R.ref.current=e))},onClick:function(e){R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,y,E,g,b,m)}};return t&&(N.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),d(v,y,E,{priority:!0}))}),!e.passHref&&("a"!==R.type||"href"in R.props)||(N.href=(0,c.addBasePath)(E)),u.default.cloneElement(R,N)};t.default=v},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);