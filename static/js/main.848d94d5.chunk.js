(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a.n(n),r=a(3),i=a(1),s=a(6),l=a(7),o=a(9),u=a(8),g=a(2),j=a.n(g),b=(a(14),a(0)),p=function(e){var t=e.pagesArr,a=e.onPageChange,n=e.currentPage,c=e.pages;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{"aria-label":"Page navigation example",children:Object(b.jsxs)("ul",{className:"pagination",children:[Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("button",{type:"button",name:"previous",className:"page-link",disabled:1===n,onClick:a,children:"<<"})}),t.map((function(e){return Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("button",{type:"button",name:e.toString(),className:"page-link",onClick:a,children:e})},e)})),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("button",{type:"button",name:"next",className:"page-link",disabled:n===c,onClick:a,children:">>"})})]})})})},h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={totalItems:42,perPage:5,currentPage:1},e.setPage=function(t){return+t?+t:e.state.currentPage+("previous"===t?-1:1)},e.onPageChange=function(t){var a=t.currentTarget.name;e.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.setPage(a)})}))},e.handleChange=function(t){var a=t.target,n=a.value,c=a.name;e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},c,n))}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.totalItems,a=e.perPage,n=e.currentPage,c=Math.ceil(t/(a||5)),r=Object.keys(Array(c).fill(1)).map((function(e){return Number(e)+1})),s="".concat((n-1)*a+1)+"-".concat(Math.min(n*a,t))+" of ".concat(t);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:["Total items:",Object(b.jsx)("input",{type:"number",value:t,max:900,min:1,placeholder:"total items",name:"totalItems",onChange:this.handleChange})]}),Object(b.jsxs)("div",{children:["Items per page:",Object(b.jsx)("input",{type:"number",value:a,max:t,min:1,placeholder:"per page (default = 5)",name:"perPage",onChange:this.handleChange})]}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Showing: ".concat(s," (page ").concat(n,")")}),Object(b.jsx)(p,Object(i.a)(Object(i.a)({},this.state),{},{pagesArr:r,pages:c,onPageChange:this.onPageChange}))]})}}]),a}(j.a.Component),m=h;c.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.848d94d5.chunk.js.map