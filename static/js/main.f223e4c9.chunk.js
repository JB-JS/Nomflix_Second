(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{69:function(t,e,n){"use strict";n.r(e);var r,i,a,c,o,s,l,d,b,j,u,g,p,h,x,O,m=n(1),f=n.n(m),v=n(33),y=n.n(v),_=n(13),w=n(5),S=n(6),k=n(34),R=n.n(k).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"75e2f509822ffcb4ae81e278d706af54",language:"ko"}}),T=function(){return R.get("movie/now_playing")},U=function(){return R.get("movie/upcoming")},M=function(){return R.get("movie/popular")},z=function(t){return R.get("search/movie",{params:{query:t}})},P=function(){return R.get("tv/top_rated")},N=function(){return R.get("tv/popular")},F=function(){return R.get("tv/airing_today")},C=function(t){return R.get("search/tv",{params:{query:t}})},V=n(3),I=n(4),q=n.n(I),E=n(12),B=n(2),J=n(0),$=Object(B.d)(r||(r=Object(V.a)(["\n  0% {\n    transform: rotate(0deg)\n  }\n\n  100% {\n    transform: rotate(360deg)\n  }\n\n"]))),A=B.c.div(i||(i=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: calc(100vh - 50px);\n"]))),D=B.c.div(a||(a=Object(V.a)(["\n  position: relative;\n  border: 3px solid rgb(50, 50, 50);\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n"]))),H=B.c.svg(c||(c=Object(V.a)(["\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 60px;\n  height: 60px;\n  fill: transparent;\n  stroke: rgb(129, 107, 255);\n  stroke-width: 4px;\n  stroke-dasharray: calc(29 * 3.14);\n  transform: rotate(-90deg);\n  animation: 1s "," infinite forwards;\n"])),$),L=function(){return Object(J.jsx)(A,{children:Object(J.jsx)(D,{children:Object(J.jsx)(H,{children:Object(J.jsx)("circle",{cx:"30",cy:"30",r:"29"})})})})},G=B.c.div(o||(o=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n"]))),K=B.c.span(s||(s=Object(V.a)(["\n  color: ",";\n"])),(function(t){return t.color})),Q=function(t){var e=t.text,n=t.color;return Object(J.jsx)(G,{children:Object(J.jsx)(K,{color:n,children:e})})},W=n.p+"static/media/noPosterSmall.ea2ad102.png",X=B.c.div(l||(l=Object(V.a)([""]))),Y=B.c.div(d||(d=Object(V.a)(["\n  height: 180px;\n  background: url(",") no-repeat center / cover;\n  transition: opacity 0.3s ease-in-out;\n"])),(function(t){return t.bgUrl})),Z=B.c.span(b||(b=Object(V.a)(["\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0;\n"]))),tt=B.c.div(j||(j=Object(V.a)(["\n  position: relative;\n  margin-bottom: 15px;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),Y,Z),et=B.c.div(u||(u=Object(V.a)(["\n  margin-bottom: 5px;\n"]))),nt=B.c.span(g||(g=Object(V.a)(["\n  font-size: 8px;\n"]))),rt=function(t){var e=t.id,n=t.imageUrl,r=t.title,i=t.rating,a=t.year,c=t.isMovie,o=void 0!==c&&c;return Object(J.jsx)(_.b,{to:o?"/movie/".concat(e):"/tv/".concat(e),children:Object(J.jsxs)(X,{children:[Object(J.jsxs)(tt,{children:[Object(J.jsx)(Y,{bgUrl:n?"https://image.tmdb.org/t/p/w500".concat(n):W}),Object(J.jsxs)(Z,{children:[Object(J.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"}),i,"/10"]})]}),Object(J.jsx)(et,{children:r}),Object(J.jsxs)(nt,{children:[a," "]})]})})},it=B.c.div(p||(p=Object(V.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),at=B.c.span(h||(h=Object(V.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),ct=B.c.div(x||(x=Object(V.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  margin-top: 25px;\n  grid-gap: 25px;\n"]))),ot=function(t){var e=t.title,n=t.children;return Object(J.jsxs)(it,{children:[Object(J.jsx)(at,{children:e}),Object(J.jsx)(ct,{children:n})]})},st=B.c.div(O||(O=Object(V.a)(["\n  padding: 20px;\n"]))),lt=function(t){var e=t.movies,n=e.nowPlaying,r=e.popular,i=e.upcoming,a=t.loading,c=t.error;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(E.b,{children:Object(J.jsx)("title",{children:"Movies - \uc601\ud654 \uc81c\uacf5 \uc11c\ube44\uc2a4 Nomflix"})}),a?Object(J.jsx)(L,{}):Object(J.jsxs)(st,{children:[n&&n.length>0&&Object(J.jsx)(ot,{title:"Now Playing",children:n.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),r&&r.length>0&&Object(J.jsx)(ot,{title:"Popular Movies",children:r.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),i&&i.length>0&&Object(J.jsx)(ot,{title:"Upcoming Movies",children:i.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),c&&Object(J.jsx)(Q,{text:c,color:"rgb(233, 30, 0)"})]})]})};lt.propTyeps={movies:q.a.object,loading:q.a.bool.isRequired,error:q.a.string};var dt,bt=lt,jt=function(){var t=Object(m.useState)({nowPlaying:null,upcoming:null,popular:null}),e=Object(S.a)(t,2),n=e[0],r=e[1],i=Object(m.useState)(!0),a=Object(S.a)(i,2),c=a[0],o=a[1],s=Object(m.useState)(null),l=Object(S.a)(s,2),d=l[0],b=l[1];return Object(m.useEffect)((function(){try{Promise.all([T(),U(),M()]).then((function(t){var e=Object(S.a)(t,3),n=e[0].data.results,i=e[1].data.results,a=e[2].data.results;r({nowPlaying:n,upcoming:i,popular:a})}))}catch(d){b("Can't find movie information")}finally{o(!1)}}),[]),Object(J.jsx)(bt,{movies:n,loading:c,error:d})},ut=B.c.div(dt||(dt=Object(V.a)(["\n  padding: 20px;\n"]))),gt=function(t){var e=t.TV,n=e.topRated,r=e.popular,i=e.airingToday,a=t.loading,c=t.error;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(E.a,{children:Object(J.jsx)("title",{children:"TV Shows - \uc601\ud654 \uc81c\uacf5 \uc11c\ube44\uc2a4 NomFlix"})}),a?Object(J.jsx)(L,{}):Object(J.jsxs)(ut,{children:[n&&n.length>0&&Object(J.jsx)(ot,{title:"Top Rated Shows",children:n.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),r&&r.length>0&&Object(J.jsx)(ot,{title:"Popular Shows",children:r.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),i&&i.length>0&&Object(J.jsx)(ot,{title:"Airing Today",children:i.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),c&&Object(J.jsx)(Q,{text:c,color:"rgb(233, 30, 0)"})]})]})};gt.propTyeps={TV:q.a.object,loading:q.a.bool.isRequired,error:q.a.string};var pt,ht,xt,Ot,mt,ft,vt,yt,_t,wt,St,kt,Rt,Tt,Ut,Mt,zt,Pt,Nt,Ft,Ct,Vt,It,qt,Et,Bt=gt,Jt=function(){var t=Object(m.useState)({topRated:null,popular:null,ariringToday:null}),e=Object(S.a)(t,2),n=e[0],r=e[1],i=Object(m.useState)(!0),a=Object(S.a)(i,2),c=a[0],o=a[1],s=Object(m.useState)(null),l=Object(S.a)(s,2),d=l[0],b=l[1];return Object(m.useEffect)((function(){try{Promise.all([P(),N(),F()]).then((function(t){var e=Object(S.a)(t,3),n=e[0].data.results,i=e[1].data.results,a=e[2].data.results;r({topRated:n,popular:i,airingToday:a})}))}catch(d){b("Can't find movie information")}finally{o(!1)}}),[]),Object(J.jsx)(Bt,{TV:n,loading:c,error:d})},$t=(n(21),n(40),B.c.div(pt||(pt=Object(V.a)(["\n  position: relative;\n  min-height: calc(100vh - 50px);\n  padding: 50px;\n"]))),B.c.div(ht||(ht=Object(V.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: url(",") no-repeat center / cover;\n  height: 100%;\n  &::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(20, 20, 20, 0.7);\n  }\n"])),(function(t){return t.bgImage})),B.c.div(xt||(xt=Object(V.a)(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n"]))),B.c.div(Ot||(Ot=Object(V.a)(["\n  width: 30%;\n  background: url(",") no-repeat center / cover;\n"])),(function(t){return t.bgImage})),B.c.div(mt||(mt=Object(V.a)(["\n  width: 70%;\n  margin-left: 2.5rem;\n"]))),B.c.div(ft||(ft=Object(V.a)(["\n  margin: 1.5rem 0;\n"]))),B.c.div(vt||(vt=Object(V.a)(["\n  margin: 1.25rem 0;\n"]))),B.c.span(yt||(yt=Object(V.a)([""]))),B.c.span(_t||(_t=Object(V.a)(["\n  margin: 0 10px;\n"]))),B.c.p(wt||(wt=Object(V.a)(["\n  width: 50%;\n  opacity: 0.7;\n  line-height: 1.5;\n  font-size: 12px;\n  text-align: justify;\n"]))),B.c.h2(St||(St=Object(V.a)(["\n  margin-bottom: 1.25rem;\n  font-size: ",";\n"])),(function(t){return t.fontSize?t.fontSize:"2.5rem"})),B.c.div(kt||(kt=Object(V.a)(["\n  display: inline-flex;\n  max-width: 100%;\n  padding: 1.25rem;\n  background: rgba(255, 255, 255, 0.4);\n  overflow: scroll;\n"]))),B.c.div(Rt||(Rt=Object(V.a)(["\n  width: 300px;\n  & + div {\n    margin-left: 1.25rem;\n  }\n"]))),B.c.div(Tt||(Tt=Object(V.a)(["\n  margin-bottom: 2rem;\n  font-size: 1rem;\n"]))),Object(B.c)(_.b)(Ut||(Ut=Object(V.a)(["\n  padding: 0 0.5rem 0.5rem;\n  border-bottom: ",";\n  color: ",";\n"])),(function(t){return t.$current?"4px solid rgb(129, 107, 255)":"transparent"}),(function(t){return t.$current?"rgb(129, 107, 255)":"#fff"})),B.c.div(Mt||(Mt=Object(V.a)(["\n  & + div {\n    margin-left: 1.25rem;\n  }\n"]))),B.c.div(zt||(zt=Object(V.a)(["\n  width: ",";\n  height: ",";\n  background: url(",") no-repeat center / cover;\n  margin-bottom: 1rem;\n"])),(function(t){return t.width?t.width:"250px"}),(function(t){return t.height?t.height:"350px"}),(function(t){return t.bgImage})),B.c.div(Pt||(Pt=Object(V.a)(["\n  padding: 20px;\n"])))),At=B.c.form(Nt||(Nt=Object(V.a)(["\n  width: 100%;\n  margin-bottom: 50px;\n"]))),Dt=B.c.input(Ft||(Ft=Object(V.a)(["\n  all: unset;\n  width: 100%;\n  font-size: 28px;\n"]))),Ht=function(t){var e=t.result,n=e.movieResults,r=e.tvResults,i=t.onSubmit,a=t.onChange,c=t.searchTerm,o=t.loading,s=t.error;return Object(J.jsxs)($t,{children:[Object(J.jsx)(E.a,{children:Object(J.jsx)("title",{children:"Search - \uc601\ud654 \uc81c\uacf5 \uc11c\ube44\uc2a4 NomFlix"})}),Object(J.jsx)(At,{onSubmit:i,children:Object(J.jsx)(Dt,{onChange:a,placeholder:"Search Movies or TV Shows...",value:c})}),o?Object(J.jsx)(L,{}):Object(J.jsxs)(J.Fragment,{children:[n&&n.length>0&&Object(J.jsx)(ot,{title:"Movie Results",children:n.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),r&&r.length>0&&Object(J.jsx)(ot,{title:"Tv Show Results",children:r.map((function(t){return Object(J.jsx)(rt,{id:t.id,title:t.name,rating:t.vote_average,imageUrl:t.poster_path,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),s&&Object(J.jsx)(Q,{text:s,color:"rgb(233, 30, 0)"}),r&&n&&0===r.length&&0===n.length&&Object(J.jsx)(Q,{text:"Nothing Found",color:"rgb(255, 199, 100)"})]})]})},Lt=function(){var t=Object(m.useState)({movieResults:null,tvResults:null}),e=Object(S.a)(t,2),n=e[0],r=e[1],i=Object(m.useState)(""),a=Object(S.a)(i,2),c=a[0],o=a[1],s=Object(m.useState)(!1),l=Object(S.a)(s,2),d=l[0],b=l[1],j=Object(m.useState)(null),u=Object(S.a)(j,2),g=u[0],p=u[1],h=function(){b(!0);try{Promise.all([z(c),C(c)]).then((function(t){var e=Object(S.a)(t,2),n=e[0].data.results,i=e[1].data.results;r({movieResults:n,tvResults:i})}))}catch(t){p("Can't find results")}finally{b(!1)}};return Object(J.jsx)(Ht,{result:n,onSubmit:function(t){t.preventDefault(),""!==c&&h()},onChange:function(t){var e=t.target.value;o(e)},searchTerm:c,loading:d,error:g})},Gt=B.c.header(Ct||(Ct=Object(V.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);\n  color: white;\n  z-index: 10;\n"]))),Kt=B.c.ul(Vt||(Vt=Object(V.a)(["\n  display: flex;\n"]))),Qt=B.c.li(It||(It=Object(V.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  color: ",";\n  border-bottom: 4px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(t){return t.current?"rgb(127, 109, 255)":"#fff"}),(function(t){return t.current?"rgb(127, 109, 255)":"transparent"})),Wt=Object(B.c)(_.b)(qt||(qt=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),Xt=Object(w.f)((function(t){var e=t.location.pathname;return Object(J.jsx)(Gt,{children:Object(J.jsxs)(Kt,{children:[Object(J.jsx)(Qt,{current:"/"===e,children:Object(J.jsx)(Wt,{to:"/",children:"Movies"})}),Object(J.jsx)(Qt,{current:"/tv"===e,children:Object(J.jsx)(Wt,{to:"/tv",children:"TV"})}),Object(J.jsx)(Qt,{current:"/search"===e,children:Object(J.jsx)(Wt,{to:"/search",children:"Search"})})]})})})),Yt=function(){return Object(J.jsxs)(_.a,{children:[Object(J.jsx)(Xt,{}),Object(J.jsxs)(w.c,{children:[Object(J.jsx)(w.a,{path:"https://jb-js.github.io/Nomflix_Second",exact:!0,component:jt}),Object(J.jsx)(w.a,{path:"https://jb-js.github.io/Nomflix_Second/tv",exact:!0,component:Jt}),Object(J.jsx)(w.a,{path:"https://jb-js.github.io/Nomflix_Second/search",component:Lt})]})]})},Zt=n(41),te=Object(B.a)(Et||(Et=Object(V.a)(["\n    ",";\n\n    *,\n    *::after,\n    *::before {\n        box-sizing: border-box;\n    }\n\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"])),Zt.a);var ee=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Yt,{}),Object(J.jsx)(te,{})]})};y.a.render(Object(J.jsx)(f.a.StrictMode,{children:Object(J.jsx)(ee,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.f223e4c9.chunk.js.map