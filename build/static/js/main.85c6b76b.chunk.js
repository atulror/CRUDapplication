(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{10:function(e,t,c){e.exports={card:"Card_card__1m44e"}},20:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(9),a=c.n(r),o=(c(20),c(11)),i=c(3),s=c(4),d=c.n(s),l=c(0),j=function(){return Object(l.jsx)(n.Fragment,{children:Object(l.jsxs)("div",{className:d.a.header,children:[Object(l.jsx)("a",{href:"/",className:d.a.logo,children:"Assignment"}),Object(l.jsxs)("div",{className:d.a.headerRight,children:[Object(l.jsx)("a",{className:d.a.active,href:"/",children:"Home"}),Object(l.jsx)("a",{href:"/",children:"Contact"}),Object(l.jsx)("a",{href:"/",children:"About"})]})]})})},u=c(10),b=c.n(u),h=function(e){return Object(l.jsx)("div",{className:b.a.card,children:e.children})},m=c(5),x=c.n(m),O=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],a=c[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),d=s[0],j=s[1];return Object(l.jsx)(h,{children:Object(l.jsxs)("form",{className:x.a.form,onSubmit:function(t){t.preventDefault(),e.addEnteredData({id:Math.random().toString(),enteredBookName:r,enteredBookDescription:d}),a(""),j("")},children:[Object(l.jsxs)("div",{className:x.a.control,children:[Object(l.jsx)("label",{htmlFor:"author",children:"Book Name"}),Object(l.jsx)("input",{type:"text",id:"author",value:r,onChange:function(e){a(e.target.value)}})]}),Object(l.jsxs)("div",{className:x.a.control,children:[Object(l.jsx)("label",{htmlFor:"text",children:"Book Description"}),Object(l.jsx)("textarea",{id:"text",rows:"5",value:d,onChange:function(e){j(e.target.value)}})]}),Object(l.jsx)("div",{className:x.a.actions,children:Object(l.jsx)("button",{type:"submit",className:"btn",children:"Add Book"})})]})})},_=c(7),f=c.n(_),p=function(e){var t=e.item,c=e.deleteItemProp;e.editItemProp;return Object(l.jsx)("ul",{className:f.a.list,children:Object(l.jsxs)("li",{className:f.a.item,children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("figcaption",{children:t.enteredBookName}),Object(l.jsx)("blockquote",{children:Object(l.jsx)("p",{children:t.enteredBookDescription})})]}),Object(l.jsx)("div",{className:f.a.btn,children:Object(l.jsx)("button",{onClick:function(){return c(t)},children:"Delete"})})]})})};var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=function(e){r(c.filter((function(t){return t.id!==e.id})))};return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)(O,{addEnteredData:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),c.map((function(e){return Object(l.jsx)(p,{item:e,deleteItemProp:a},e.id)}))]})};a.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(v,{}))},4:function(e,t,c){e.exports={header:"Header_header__1MOL-",logo:"Header_logo__3EvUy",active:"Header_active__11YnJ",headerRight:"Header_headerRight__Qhu32"}},5:function(e,t,c){e.exports={form:"BookDetailForm_form__3k0ak",control:"BookDetailForm_control__2gpJG",actions:"BookDetailForm_actions__3gC72"}},7:function(e,t,c){e.exports={list:"BooksList_list__b6nVU",item:"BooksList_item__3eq1l",btn:"BooksList_btn__1WHA1"}}},[[22,1,2]]]);
//# sourceMappingURL=main.85c6b76b.chunk.js.map