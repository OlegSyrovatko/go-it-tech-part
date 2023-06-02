"use strict";(self.webpackChunkgo_it_tech_part=self.webpackChunkgo_it_tech_part||[]).push([[21],{21:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var i,o,t,l,a,d,s,c,x,p,u,f,g=r(2791),h=r(9434),b=r(1087),v=function(n){return n.filters.value},Z=r(8500),j=function(n){return n.tweets.isLoading},w=function(n){return n.tweets.items},m=function(n){return n.tweets.followers},k=r(3742),F=r(1429),_=r(168),y=r(225),C=y.Z.div(i||(i=(0,_.Z)(["\n  display: flex;\n  gap: 5px;\n  line-height: 0;\n"]))),I=r(9256),L=r(1175),z=r(4925),N=r(6362),B=r(3329),E=function(){var n=(0,h.v9)(v),e=(0,h.I0)();return(0,B.jsx)(C,{children:(0,B.jsxs)(N.Z,{variant:"outlined",sx:{minWidth:200},children:[(0,B.jsx)(z.Z,{id:"filter-label",children:"Filter"}),(0,B.jsxs)(L.Z,{labelId:"filter-label",id:"filter-select",value:n,onChange:function(n){var r=n.target.value;e((0,F.b)(r))},label:"Filter",children:[(0,B.jsx)(I.Z,{value:"",children:"All"}),(0,B.jsx)(I.Z,{value:"follow",children:"Follow"}),(0,B.jsx)(I.Z,{value:"followings",children:"Followings"})]})]})})},U=y.Z.p(o||(o=(0,_.Z)(["\n  line-height: 0;\n"]))),A=y.Z.button(t||(t=(0,_.Z)(["\n  background-color: #fff;\n  color: #000;\n  padding: 2px 5px 2px 5px;\n  height: 25px;\n  border-radius: 4px;\n  border: 1px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),R=function(n){var e=n.tweet,r=(0,h.I0)(),i=(0,h.v9)(m).includes(Number(e.id));return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(U,{children:e.user}),(0,B.jsx)(U,{children:e.avatar}),(0,B.jsx)(U,{children:e.tweets}),(0,B.jsx)(U,{children:e.followers}),i?(0,B.jsx)(A,{onClick:function(){r((0,Z.BR)(e))},children:"UnFollow"}):(0,B.jsx)(A,{onClick:function(){r((0,Z.gu)(e))},children:"Follow"})]})},W=(y.Z.div(l||(l=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n"]))),y.Z.img(a||(a=(0,_.Z)(["\n  margin-right: 4px;\n  margin-left: 4px;\n"]))),y.Z.span(d||(d=(0,_.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  margin-right: 12px;\n  @media (max-width: 767px) {\n    font-size: 12px;\n  }\n"]))),y.Z.div(s||(s=(0,_.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),y.Z.div(c||(c=(0,_.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;\n"])))),q=y.Z.button(x||(x=(0,_.Z)(["\n  font-size: 16px;\n  line-height: 26px;\n  background-color: #fff;\n  color: #000;\n  padding: 5px 15px 5px 15px;\n  height: 40px;\n  border-radius: 5px;\n  border: 2px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n  @media (max-width: 767px) {\n    padding: 5px 7px 5px 7px;\n  }\n"]))),D=(y.Z.button(p||(p=(0,_.Z)(["\n  background-color: #fff;\n  color: #000;\n  padding: 2px 5px 2px 5px;\n  height: 25px;\n  border-radius: 4px;\n  border: 1px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),y.Z.div(u||(u=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  margin-top: 10px;\n"])))),G=y.Z.div(f||(f=(0,_.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: baseline;\n"]))),H=function(){var n=(0,h.I0)(),e=(0,h.v9)(v),r=(0,h.v9)(w),i=(0,h.v9)(m),o=r;"follow"===e?o=r.filter((function(n){return!i.includes(Number(n.id))})):"followings"===e&&(o=r.filter((function(n){return i.includes(Number(n.id))})));var t=(0,h.v9)(j);return(0,g.useEffect)((function(){t?k.Loading.circle("Loading..."):k.Loading.remove()}),[t]),(0,g.useEffect)((function(){n((0,Z.u_)())}),[n]),(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(W,{children:[(0,B.jsx)(b.rU,{to:"/",children:(0,B.jsx)(q,{type:"button",children:"Back"})}),(0,B.jsx)("br",{}),(0,B.jsx)("br",{}),(0,B.jsx)(E,{}),o.length>0&&(0,B.jsx)(D,{children:o.map((function(n){return(0,B.jsx)(G,{children:(0,B.jsx)(R,{tweet:n})},n.id)}))})]})})}}}]);
//# sourceMappingURL=21.dfd8bd9c.chunk.js.map