(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(n,e,t){"use strict";var o=t("q1tI"),r=t.n(o),c=(t("f3/d"),t("Wbzz")),u=t("a/Iw"),a=t("qKvR");function l(){var n="";return n=Object(u.c)()?"Hello "+Object(u.a)().name:"You are not logged in",Object(a.d)("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},Object(a.d)("span",null,n),Object(a.d)("nav",null,Object(a.d)(c.Link,{to:"/"},"Home")," ",Object(a.d)(c.Link,{to:"/app/profile"},"Profile")," ",Object(u.c)()?Object(a.d)("a",{href:"/",onClick:function(n){n.preventDefault(),Object(u.d)((function(){return Object(c.navigate)("/app/login")}))}},"Logout"):null))}e.a=function(n){var e=n.children;return Object(a.d)(r.a.Fragment,null,Object(a.d)(l,null),e)}},RXBc:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i}));t("f3/d");var o=t("q1tI"),r=t.n(o),c=t("Wbzz"),u=t("a/Iw"),a=t("Bl7J"),l=t("qKvR");function i(){return Object(l.d)(a.a,null,Object(l.d)("h1",null,"Hello ",Object(u.c)()?Object(u.a)().name:"world","!"),Object(l.d)("p",null,Object(u.c)()?Object(l.d)(r.a.Fragment,null,"You are logged in, so check your"," ",Object(l.d)(c.Link,{to:"/app/profile"},"profile")):Object(l.d)(r.a.Fragment,null,"You should ",Object(l.d)(c.Link,{to:"/app/login"},"log in")," to see restricted content")))}},"a/Iw":function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return u})),t.d(e,"d",(function(){return a}));var o=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},r=function(n){return window.localStorage.setItem("gatsbyUser",JSON.stringify(n))},c=function(n){var e=n.username,t=n.password;return"john"===e&&"pass"===t&&r({username:"john",name:"Johnny",email:"johnny@example.org"})},u=function(){return!!o().username},a=function(n){r({}),n()}}}]);
//# sourceMappingURL=component---src-pages-index-js-28634b522e2d2234ebb6.js.map