_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{YFqc:function(e,t,n){e.exports=n("cTJO")},ZHh6:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("YFqc"),l=n.n(a),u=r.a.createElement;t.a=function(){return u("header",null,u("ul",null,u("li",null,u(l.a,{href:"/"},u("a",null,"Home"))),u("li",null,u(l.a,{href:"/about"},u("a",null,"About"))),u("li",null,u(l.a,{href:"/post/[id]",as:"/post/first"},u("a",null,"First Post"))),u("li",null,u(l.a,{href:"/post/[id]",as:"/post/second"},u("a",null,"Second Post"))),u("li",null,u(l.a,{href:"/Dash"},u("a",null,"Dash")))))}},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,l=r(n("q1tI")),u=n("elyg"),c=n("nOHt"),s=new Map,i=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(i?a=new i((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,o){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=l.default.useState(),r=o(n,2),a=r[0],s=r[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",m=l.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href);return{href:t,as:e.as?(0,u.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),w=m.href,y=m.as;l.default.useEffect((function(){if(t&&i&&a&&a.tagName&&(0,u.isLocalURL)(w)&&!f[w+"%"+y])return p(a,(function(){d(h,w,y)}))}),[t,a,w,y,h]);var E=e.children,_=e.replace,g=e.shallow,b=e.scroll;"string"===typeof E&&(E=l.default.createElement("a",null,E));var q=l.Children.only(E),N={ref:function(e){e&&s(e),q&&"object"===typeof q&&q.ref&&("function"===typeof q.ref?q.ref(e):"object"===typeof q.ref&&(q.ref.current=e))},onClick:function(e){q.props&&"function"===typeof q.props.onClick&&q.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,y,_,g,b)}};return t&&(N.onMouseEnter=function(e){(0,u.isLocalURL)(w)&&(q.props&&"function"===typeof q.props.onMouseEnter&&q.props.onMouseEnter(e),d(h,w,y,{priority:!0}))}),(e.passHref||"a"===q.type&&!("href"in q.props))&&(N.href=(0,u.addBasePath)(y)),l.default.cloneElement(q,N)};t.default=h},cqRp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[id]",function(){return n("p3NI")}])},p3NI:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("nOHt"),l=n("YFqc"),u=n.n(l),c=n("ZHh6"),s=r.a.createElement;t.default=function(){var e=Object(a.useRouter)().query.id;return s(r.a.Fragment,null,s(c.a,null),s("h1",null,"Post: ",e),s("ul",null,s("li",null,s(u.a,{href:"/post/[id]/[comment]",as:"/post/".concat(e,"/first-comment")},s("a",null,"First comment"))),s("li",null,s(u.a,{href:"/post/[id]/[comment]",as:"/post/".concat(e,"/second-comment")},s("a",null,"Second comment")))))}}},[["cqRp",0,2,1]]]);