(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(2),l=c(8),i=c(1),d=(c(13),c(14),c(5)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,a=e.handleSelectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed,l=t===(null===c||void 0===c?void 0:c.id);return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":l}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-success":n,"has-text-danger":!n}),children:s})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":!l,"fa-eye-slash":l})})})})})]},t)}))})]})},u=function(e){var t=e.query,c=e.handleQuery,a=void 0===c?function(){}:c,s=e.resetQuery,n=void 0===s?function(){}:s,l=e.selectFilterChange,i=e.handleSelectFilter;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:l,onChange:i,children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:a}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:n})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var b=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m="Invalid data",O=function(e){var t=e.selectedTodo,c=e.handleSelectedTodo,a=Object(i.useState)(null),s=Object(n.a)(a,2),l=s[0],d=s[1],o=Object(i.useState)(!1),j=Object(n.a)(o,2),u=j[0],O=j[1];return Object(i.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then((function(e){return d(e)})).catch((function(){return m})).finally((function(){return O(!0)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]}):Object(r.jsx)(b,{})]})};var x=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(""),d=Object(n.a)(s,2),o=d[0],x=d[1],f=Object(i.useState)("all"),v=Object(n.a)(f,2),N=v[0],p=v[1],y=Object(i.useState)(!1),g=Object(n.a)(y,2),S=g[0],k=g[1],T=Object(i.useState)(null),C=Object(n.a)(T,2),w=C[0],F=C[1],_=function(e){return F(e)},E=function(e,t,c){var a=Object(l.a)(e);return a=a.filter((function(e){switch(c){case"active":return!e.completed;case"completed":return e.completed;default:return e}})),t&&(a=a.filter((function(e){var c=e.title.trim().toLowerCase(),a=t.trim().toLowerCase();return c.includes(a)}))),a}(c,o,N);return Object(i.useEffect)((function(){h("/todos").then(a).catch((function(){return m})).finally((function(){return k(!0)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{query:o,handleQuery:function(e){x(e.target.value)},resetQuery:function(){x("")},selectFilterChange:N,handleSelectFilter:function(e){p(e.target.value)}})}),Object(r.jsx)("div",{className:"block",children:S?Object(r.jsx)(j,{selectedTodo:w,todos:E,handleSelectedTodo:_}):Object(r.jsx)(b,{})})]})})}),w&&Object(r.jsx)(O,{selectedTodo:w,handleSelectedTodo:_})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fd45e616.chunk.js.map