"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[37],{6420:function(n,e,t){t.d(e,{NH:function(){return l},Y1:function(){return f},fV:function(){return p},gn:function(){return d},qQ:function(){return u}});var r=t(5861),c=t(4687),a=t.n(c),o=t(1243),i="https://api.themoviedb.org/3/",s="dc938579c590d583322532c91001c2e3",u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"trending/movie/day?api_key=").concat(s));case 3:return e=n.sent,console.log(e.data.results),n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},6810:function(n,e,t){t.d(e,{Eq:function(){return d},Fg:function(){return x},aV:function(){return h},ck:function(){return v},f4:function(){return f}});var r,c,a,o,i,s,u=t(168),l=t(7402),p=t(1087),d=l.Z.div(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n"]))),f=l.Z.div(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  /* align-items: center;\n  justify-content: start; */\n"]))),h=(l.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),l.Z.ul(o||(o=(0,u.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 80%;\n"])))),v=l.Z.li(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid whitesmoke;\n  justify-content: space-around;\n  padding: 10px;\n  width: calc(((80%-80px) / 4));\n"]))),x=(0,l.Z)(p.OL)(s||(s=(0,u.Z)(["\n  color: whitesmoke;\n  :hover {\n    color: orangered;\n  }\n"])))},3037:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,c=t(9439),a=t(6420),o=t(7689),i=t(168),s=t(7402),u=t(1087),l=(0,s.Z)(u.OL)(r||(r=(0,i.Z)(["\n  font-size: 22px;\n  margin-bottom: 14px;\n  color: whitesmoke;\n  :hover {\n    color: orangered;\n  }\n"]))),p=t(2791),d=t(7275),f=t(184),h=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("ul",{children:[(0,f.jsx)("h2",{children:"Additional informathion"}),(0,f.jsx)("li",{children:(0,f.jsx)(l,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(p.Suspense,{fallback:(0,f.jsx)(d.Z,{}),children:(0,f.jsx)(o.j3,{})})]})},v=t(6810),x=function(){var n,e,t=(0,p.useState)(""),r=(0,c.Z)(t,2),i=r[0],s=r[1],l=(0,o.UO)().movieId,d=(0,o.TH)(),x=(0,p.useRef)(null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,p.useEffect)((function(){l&&(0,a.fV)(l).then((function(n){return s(n)})).catch((function(n){return console.log(n)}))}),[l]);var g=new Date(i.release_date).getFullYear(),m=Math.round(i.vote_average),j=i.original_title,w=i.overview,Z=i.poster_path,k=i.genres;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{type:"button",children:(0,f.jsx)(u.rU,{to:x.current,children:"On the main"})}),(0,f.jsxs)(v.Eq,{children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:Z?"https://image.tmdb.org/t/p/w500/".concat(Z):"Sorry",alt:"original_title",width:"250"})}),(0,f.jsxs)(v.f4,{children:[(0,f.jsxs)("h2",{children:[j,(0,f.jsxs)("span",{children:["(",g,")"]})]}),(0,f.jsxs)("p",{children:["User score: ",10*m,"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsxs)("p",{children:[" ",w]}),(0,f.jsx)("p",{children:(0,f.jsx)("b",{children:"Genres"})}),k&&k.map((function(n){return n.name})).join(", "),(0,f.jsx)("p",{})]})]}),(0,f.jsx)(h,{})]})}}}]);
//# sourceMappingURL=37.bb613cc0.chunk.js.map