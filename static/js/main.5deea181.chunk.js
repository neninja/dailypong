(this.webpackJsonpdailypong=this.webpackJsonpdailypong||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(14),i=n.n(o),s=(n(25),n(5)),a=n(11),l=n(4),j=Object(c.createContext)({});function u(e){var t=e.children,n=Object(c.useState)([]),r=Object(a.a)(n,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){var e,t=null!==(e=localStorage.getItem("@dailypong:colegas"))&&void 0!==e?e:"[]";i(JSON.parse(t))}),[]),Object(c.useEffect)((function(){localStorage.setItem("@dailypong:colegas",JSON.stringify(o))}),[o]),Object(l.jsx)(j.Provider,{value:{colegas:o,setColegas:i},children:t})}function d(){return Object(c.useContext)(j)}var b=n(20);function O(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],o=d(),i=o.colegas,j=o.setColegas;return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=[].concat(Object(b.a)(i),[n]).sort();j(t),r("")},children:Object(l.jsxs)(s.Form.Field,{kind:"addons",children:[Object(l.jsx)(s.Form.Control,{children:Object(l.jsx)(s.Form.Input,{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Nome"})}),Object(l.jsx)(s.Form.Control,{children:Object(l.jsx)(s.Button,{color:"primary",submit:!0,children:"Cadastrar colega"})})]})})}n(149);function x(){var e=d(),t=e.colegas,n=e.setColegas;return Object(l.jsx)(s.Columns,{renderAs:"ul",breakpoint:"mobile",children:t.map((function(e,c){return Object(l.jsx)(s.Columns.Column,{narrow:!0,renderAs:"li",children:Object(l.jsx)(s.Card,{children:Object(l.jsx)(s.Card.Header,{children:Object(l.jsxs)(s.Card.Header.Title,{children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{children:e})]}),Object(l.jsx)("span",{onClick:function(e){return r=c,void n(t.filter((function(e,t){return t!==r})));var r}})]})})})})}))})}var h=function(){return Object(l.jsx)("main",{children:Object(l.jsx)(u,{children:Object(l.jsxs)(s.Container,{children:[Object(l.jsx)(s.Section,{children:Object(l.jsx)(x,{})}),Object(l.jsx)(s.Section,{children:Object(l.jsx)(O,{})})]})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()}},[[150,1,2]]]);
//# sourceMappingURL=main.5deea181.chunk.js.map