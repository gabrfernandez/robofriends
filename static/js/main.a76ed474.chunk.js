(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(4),i=n.n(a),o=(n(10),n(3)),b=(n(11),n(12),function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})}),h=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},l=function(e){var t=e.children;return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:t})};var d=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),b=i[0],d=i[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return n.length?Object(c.jsxs)("div",{className:"App tc",children:[Object(c.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(c.jsx)(j,{searchChange:function(e){d(e.target.value)}}),Object(c.jsx)(l,{children:Object(c.jsx)(h,{robots:u})})]}):Object(c.jsx)("h1",{className:"tc",children:"Loading"})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.a76ed474.chunk.js.map