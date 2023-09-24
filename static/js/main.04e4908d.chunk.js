(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),o=c(8),d=c(1),i=(c(13),c(14),c(5)),r=c.n(i),j=c(0),u=function(e){var t=e.todo,c=e.selectedTodo,s=e.onSelectedTodo,a=t.id,n=t.title,l=t.completed,o=a===(null===c||void 0===c?void 0:c.id);return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":o}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:a}),Object(j.jsx)("td",{className:"is-vcentered",children:l&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-success":l,"has-text-danger":!l}),children:n})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(t)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":!o,"fa-eye-slash":o})})})})})]})},b=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(u,{todo:e,selectedTodo:c,onSelectedTodo:s},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Complited="completed"}(s||(s={}));var h=function(e){var t=e.query,c=e.onQuery,a=void 0===c?function(){}:c,n=e.onResetQuery,l=void 0===n?function(){}:n,o=e.selectedSortType,d=e.handleSelectFilter;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsx)("select",{"data-cy":"statusSelect",value:o,onChange:d,children:Object.values(s).map((function(e){return Object(j.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e)}))})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:a}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:l})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var O=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},x="Invalid data",f=function(e){var t=e.selectedTodo,c=e.onSelectedTodo,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1],i=Object(d.useState)(!1),r=Object(l.a)(i,2),u=r[0],b=r[1];return Object(d.useEffect)((function(){var e;b(!0),(e=t.userId,m("/users/".concat(e))).then((function(e){return o(e)})).catch((function(){return console.error(x)})).finally((function(){return b(!1)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(O,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})};var v=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(""),i=Object(l.a)(n,2),r=i[0],u=i[1],v=Object(d.useState)(s.All),p=Object(l.a)(v,2),N=p[0],y=p[1],g=Object(d.useState)(!1),S=Object(l.a)(g,2),T=S[0],k=S[1],C=Object(d.useState)(null),w=Object(l.a)(C,2),A=w[0],_=w[1],E=function(e){return _(e)},I=function(e,t,c){var a=Object(o.a)(e);return a=a.filter((function(e){switch(c){case s.Active:return!e.completed;case s.Complited:return e.completed;case s.All:default:return e}})),t&&(a=a.filter((function(e){var c=e.title.trim().toLowerCase(),s=t.trim().toLowerCase();return c.includes(s)}))),a}(c,r,N);return Object(d.useEffect)((function(){k(!0),m("/todos").then(a).catch((function(){return console.error(x)})).finally((function(){return k(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{query:r,onQuery:function(e){u(e.target.value)},onResetQuery:function(){u("")},selectedSortType:N,handleSelectFilter:function(e){y(e.target.value)}})}),Object(j.jsx)("div",{className:"block",children:T?Object(j.jsx)(O,{}):Object(j.jsx)(b,{selectedTodo:A,todos:I,onSelectedTodo:E})})]})})}),A&&Object(j.jsx)(f,{selectedTodo:A,onSelectedTodo:E})]})};n.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.04e4908d.chunk.js.map