(this.webpackJsonpbitflix=this.webpackJsonpbitflix||[]).push([[0],{29:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},76:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),i=n.n(a),c=n(38),o=n.n(c),s=n(19),u=n(5),l=n(3),d=n(2);function j(){var t=Object(l.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return j=function(){return t},t}function p(){var t=Object(l.a)(["\n  width: 80px;\n  text-align: center;\n  height: 50px;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return p=function(){return t},t}function b(){var t=Object(l.a)(["\n  display: flex;\n"]);return b=function(){return t},t}function h(){var t=Object(l.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index: 10;\n"]);return h=function(){return t},t}var x=d.c.header(h()),g=d.c.ul(b()),f=d.c.li(p(),(function(t){return t.current?"#3498db":"transparent"})),v=Object(d.c)(s.b)(j()),O=Object(u.f)((function(t){var e=t.location.pathname;return Object(r.jsx)(x,{children:Object(r.jsxs)(g,{children:[Object(r.jsx)(f,{current:"/"===e,children:Object(r.jsx)(v,{to:"/",children:"\uc601\ud654"})}),Object(r.jsx)(f,{current:"/tv"===e,children:Object(r.jsx)(v,{to:"/tv",children:"TV"})}),Object(r.jsx)(f,{current:"/search"===e,children:Object(r.jsx)(v,{to:"/search",children:"\uac80\uc0c9"})})]})})})),m=n(10),y=n.n(m),_=n(13),w=n(14),k=n(15),S=n(17),T=n(16),R=n(12);function z(){var t=Object(l.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  gap: 25px;\n"]);return z=function(){return t},t}function I(){var t=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 600px;\n"]);return I=function(){return t},t}function M(){var t=Object(l.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return M=function(){return t},t}var U=d.c.div(M()),C=d.c.span(I()),F=d.c.div(z()),B=function(t){var e=t.title,n=t.children;return Object(r.jsxs)(U,{children:[Object(r.jsx)(C,{children:e}),Object(r.jsx)(F,{children:n})]})};function L(){var t=Object(l.a)(["\n  height: 100vh;\n  width: 100v2;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return L=function(){return t},t}var P=d.c.div(L()),D=function(){return Object(r.jsx)(P,{children:Object(r.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})};function V(){var t=Object(l.a)(["\n  color: ",";\n  font-weight: 600;\n"]);return V=function(){return t},t}function N(){var t=Object(l.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return N=function(){return t},t}var X=d.c.div(N()),q=d.c.span(V(),(function(t){return t.color})),J=function(t){var e=t.text,n=t.color;return Object(r.jsx)(X,{children:Object(r.jsx)(q,{color:n,children:e})})};function E(){var t=Object(l.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return E=function(){return t},t}function H(){var t=Object(l.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return H=function(){return t},t}function K(){var t=Object(l.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return K=function(){return t},t}function A(){var t=Object(l.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n"]);return A=function(){return t},t}function G(){var t=Object(l.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return G=function(){return t},t}function Q(){var t=Object(l.a)(["\n  font-size: 12px;\n"]);return Q=function(){return t},t}var W=d.c.div(Q()),Y=d.c.div(G(),(function(t){return"".concat(t.bgUrl)})),Z=d.c.span(A()),$=d.c.div(K(),Y,Z),tt=d.c.span(H()),et=d.c.span(E()),nt=function(t){var e=t.id,a=t.imageUrl,i=t.title,c=t.rating,o=t.year,u=t.isMovie,l=void 0!==u&&u;return Object(r.jsx)(s.b,{to:l?"/movie/".concat(e):"/show/".concat(e),children:Object(r.jsxs)(W,{children:[Object(r.jsxs)($,{children:[Object(r.jsx)(Y,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(29)}),Object(r.jsxs)(Z,{children:[Object(r.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"}),c," / 10"]})]}),Object(r.jsx)(tt,{children:i.length>15?"".concat(i.substring(0,15),"..."):i}),Object(r.jsx)(et,{children:o})]})})};function rt(){var t=Object(l.a)(["\n  padding: 20px;\n"]);return rt=function(){return t},t}var at=d.c.div(rt()),it=function(t){var e=t.nowPlaying,n=t.upcoming,a=t.popular,i=t.error,c=t.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R.a,{children:Object(r.jsx)("title",{children:"Movies | BITFLIX"})}),c?Object(r.jsx)(D,{}):Object(r.jsxs)(at,{children:[e&&e.length>0&&Object(r.jsx)(B,{title:"\ud604\uc7ac \uac1c\ubd09\uc791",children:e.map((function(t){return Object(r.jsx)(nt,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date&&t.release_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(J,{color:"#e74c3c",text:i})]}),c?Object(r.jsx)(D,{}):Object(r.jsxs)(at,{children:[n&&n.length>0&&Object(r.jsx)(B,{title:"\ucd94\ud6c4 \uac1c\ubd09\uc791",children:n.map((function(t){return Object(r.jsx)(nt,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date&&t.release_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(J,{color:"#e74c4c",text:i})]}),c?Object(r.jsx)(D,{}):Object(r.jsxs)(at,{children:[a&&a.length>0&&Object(r.jsx)(B,{title:"\uc778\uae30\uc791",children:a.map((function(t){return Object(r.jsx)(nt,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date&&t.release_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(J,{color:"#e74c4c",text:i})]})]})},ct=n(44),ot=n.n(ct).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"f02b39f36febafba0161b0cd7bb4e12f",language:"ko-KR"}}),st=function(){return ot.get("tv/top_rated")},ut=function(){return ot.get("tv/popular")},lt=function(){return ot.get("tv/airing_today")},dt=function(t){return ot.get("tv/".concat(t),{params:{append_to_response:"videos"}})},jt=function(t){return ot.get("search/tv",{params:{query:encodeURIComponent(t)}})},pt=function(){return ot.get("movie/now_playing")},bt=function(){return ot.get("movie/upcoming")},ht=function(){return ot.get("movie/popular")},xt=function(t){return ot.get("movie/".concat(t),{params:{append_to_response:"videos"}})},gt=function(t){return ot.get("search/movie",{params:{query:encodeURIComponent(t)}})},ft=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var r;return Object(w.a)(this,n),(r=e.call(this,t)).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},r}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var t=Object(_.a)(y.a.mark((function t(){var e,n,r,a,i,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.prev=1,t.next=4,pt();case 4:return e=t.sent,n=e.data.results,t.next=8,bt();case 8:return r=t.sent,a=r.data.results,t.next=12,ht();case 12:i=t.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),this.setState({error:"\uc601\ud654 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});case 20:return t.prev=20,this.setState({loading:!1}),t.finish(20);case 23:case"end":return t.stop()}}),t,this,[[1,17,20,23]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.nowPlaying,n=t.upcoming,a=t.popular,i=t.error,c=t.loading;return Object(r.jsx)(it,{nowPlaying:e,upcoming:n,popular:a,error:i,loading:c})}}]),n}(i.a.Component);function vt(){var t=Object(l.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return vt=function(){return t},t}function Ot(){var t=Object(l.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return Ot=function(){return t},t}function mt(){var t=Object(l.a)(["\n  padding: 20px;\n"]);return mt=function(){return t},t}var yt=d.c.div(mt()),_t=d.c.form(Ot()),wt=d.c.input(vt()),kt=function(t){var e=t.movieResults,n=t.tvResults,a=t.searchTerm,i=(t.error,t.loading),c=t.handleSubmit,o=t.updateTerm;return Object(r.jsxs)(yt,{children:[Object(r.jsx)(R.a,{children:Object(r.jsx)("title",{children:"Search : BITFLIX"})}),Object(r.jsx)(_t,{onSubmit:c,children:Object(r.jsx)(wt,{placeholder:"\uac80\uc0c9\ud560 \uc601\ud654\ub098 TV\ud504\ub85c\uadf8\ub7a8\uc744 \uc785\ub825\ud558\uc138\uc694.",value:a,onChange:o})}),i?Object(r.jsx)(D,{}):e&&e.length>0&&Object(r.jsx)(B,{title:"\uc601\ud654",children:e.map((function(t){return Object(r.jsx)(nt,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date&&t.release_date.substring(0,4)},t.id)}))}),n&&e&&0===n.length&&0===e.length&&Object(r.jsx)(J,{text:"\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",color:"#95a5a6"})]})},St=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var r;return Object(w.a)(this,n),(r=e.call(this,t)).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},r.handleSubmit=function(t){t.preventDefault(),""!==r.state.searchTerm&&r.searchByTerm()},r.updateTerm=function(t){var e=t.target.value;r.setState({searchTerm:e})},r.searchByTerm=Object(_.a)(y.a.mark((function t(){var e,n,a,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.state.searchTerm,r.setState({loading:!0}),t.prev=2,t.next=5,gt();case 5:return e=t.sent,n=e.data.results,t.next=9,jt();case 9:a=t.sent,i=a.data.results,r.setState({movieResults:n,tvResults:i}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),r.setState({error:"\uac80\uc0c9\ud558\uc2e0 \ud504\ub85c\uadf8\ub7a8\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."});case 17:return t.prev=17,r.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),r}return Object(k.a)(n,[{key:"render",value:function(){var t=this.state,e=t.movieResults,n=t.tvResults,a=t.searchTerm,i=t.error,c=t.loading;return Object(r.jsx)(kt,{movieResults:e,tvResults:n,searchTerm:a,error:i,loading:c,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(i.a.Component);function Tt(){var t=Object(l.a)(["\n  padding: 20px;\n"]);return Tt=function(){return t},t}var Rt=d.c.div(Tt()),zt=function(t){var e=t.topRated,n=t.popular,a=t.airingToday,i=t.error,c=t.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R.a,{children:Object(r.jsx)("title",{children:"TV Shows | BITFLIX"})}),c?Object(r.jsx)(D,{}):Object(r.jsxs)(Rt,{children:[e&&e.length>0&&Object(r.jsx)(B,{title:"\ucd5c\uace0\uc21c\uc704",children:e.map((function(t){return Object(r.jsx)(nt,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!1,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(J,{color:"#e74c3c",text:i})]}),c?Object(r.jsx)(D,{}):Object(r.jsxs)(Rt,{children:[n&&n.length>0&&Object(r.jsx)(B,{title:"\uc778\uae30\uc791",children:n.map((function(t){return Object(r.jsx)(nt,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!1,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(J,{color:"#e74c3c",text:i})]}),c?Object(r.jsx)(D,{}):Object(r.jsxs)(Rt,{children:[a&&a.length>0&&Object(r.jsx)(B,{title:"\uc624\ub298\ubc29\uc601",children:a.map((function(t){return Object(r.jsx)(nt,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!1,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(J,{color:"#e74c3c",text:i})]})]})},It=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var r;return Object(w.a)(this,n),(r=e.call(this,t)).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},r}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var t=Object(_.a)(y.a.mark((function t(){var e,n,r,a,i,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.prev=1,t.next=4,st();case 4:return e=t.sent,n=e.data.results,t.next=8,ut();case 8:return r=t.sent,a=r.data.results,t.next=12,lt();case 12:i=t.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),this.setState({error:"TV\uc1fc \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});case 20:return t.prev=20,this.setState({loading:!1}),t.finish(20);case 23:case"end":return t.stop()}}),t,this,[[1,17,20,23]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.topRated,n=t.popular,a=t.airingToday,i=t.error,c=t.loading;return Object(r.jsx)(zt,{topRated:e,popular:n,airingToday:a,error:i,loading:c})}}]),n}(i.a.Component);function Mt(){var t=Object(l.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return Mt=function(){return t},t}function Ut(){var t=Object(l.a)(["\n  margin: 0 10px;\n"]);return Ut=function(){return t},t}function Ct(){var t=Object(l.a)([""]);return Ct=function(){return t},t}function Ft(){var t=Object(l.a)(["\n  margin: 20px 0;\n"]);return Ft=function(){return t},t}function Bt(){var t=Object(l.a)(["\n  font-size: 32px;\n"]);return Bt=function(){return t},t}function Lt(){var t=Object(l.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Lt=function(){return t},t}function Pt(){var t=Object(l.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return Pt=function(){return t},t}function Dt(){var t=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return Dt=function(){return t},t}function Vt(){var t=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Vt=function(){return t},t}function Nt(){var t=Object(l.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Nt=function(){return t},t}var Xt=d.c.div(Nt()),qt=d.c.div(Vt(),(function(t){return t.bgImage})),Jt=d.c.div(Dt()),Et=d.c.div(Pt(),(function(t){return t.bgImage})),Ht=d.c.div(Lt()),Kt=d.c.h3(Bt()),At=d.c.div(Ft()),Gt=d.c.span(Ct()),Qt=d.c.span(Ut()),Wt=d.c.p(Mt()),Yt=function(t){var e=t.result,a=t.error;return t.loading?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R.a,{children:Object(r.jsx)("title",{children:"Loading | Ryanflix"})}),Object(r.jsx)(D,{})]}):a?Object(r.jsx)(J,{color:"#e74c3c",text:a}):Object(r.jsxs)(Xt,{children:[Object(r.jsx)(R.a,{children:Object(r.jsxs)("title",{children:[e.original_title?e.original_title:e.original_name," ","| Ryanflix"]})}),Object(r.jsx)(qt,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path)}),Object(r.jsxs)(Jt,{children:[Object(r.jsx)(Et,{bgImage:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):n(29)}),Object(r.jsxs)(Ht,{children:[Object(r.jsx)(Kt,{children:e.original_title?e.original_title:e.original_name}),Object(r.jsxs)(At,{children:[Object(r.jsx)(Gt,{children:e.release_date?e.release_date.substring(0,4):e.first_air_date.substring(0,4)}),Object(r.jsx)(Qt,{children:"\xb7"}),Object(r.jsxs)(Gt,{children:[e.runtime?e.runtime:e.episode_run_time[0]," min"]}),Object(r.jsx)(Qt,{children:"\xb7"}),Object(r.jsx)(Gt,{children:e.genres&&e.genres.map((function(t,n){return n===e.genres.length-1?"".concat(t.name):"".concat(t.name," / ")}))})]}),Object(r.jsx)(Wt,{children:e.overview})]})]})]})},Zt=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var r;Object(w.a)(this,n),r=e.call(this,t);var a=t.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var t=Object(_.a)(y.a.mark((function t(){var e,n,r,a,i,c,o,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props,n=e.match.params.id,r=e.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){t.next=5;break}return t.abrupt("return",r("/"));case 5:if(c=null,t.prev=6,!a){t.next=14;break}return t.next=10,xt(i);case 10:o=t.sent,c=o.data,t.next=18;break;case 14:return t.next=16,dt(i);case 16:s=t.sent,c=s.data;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(6),this.setState({error:"\ud504\ub85c\uadf8\ub7a8\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."});case 23:return t.prev=23,this.setState({loading:!1,result:c}),t.finish(23);case 26:case"end":return t.stop()}}),t,this,[[6,20,23,26]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.result,n=t.error,a=t.loading;return Object(r.jsx)(Yt,{result:e,error:n,loading:a})}}]),n}(i.a.Component),$t=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(O,{}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",exact:!0,component:ft}),Object(r.jsx)(u.a,{path:"/tv",exact:!0,component:It}),Object(r.jsx)(u.a,{path:"/search",exact:!0,component:St}),Object(r.jsx)(u.a,{path:"/movie/:id",exact:!0,component:Zt}),Object(r.jsx)(u.a,{path:"/show/:id",exact:!0,component:Zt})]})]})},te=n(45);function ee(){var t=Object(l.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20,20,20,1);\n        color:white;\n        padding-top:50px\n    }\n"]);return ee=function(){return t},t}var ne=Object(d.a)(ee(),te.a);var re=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ne,{}),Object(r.jsx)($t,{})]})};o.a.render(Object(r.jsx)(re,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.23ae07d3.chunk.js.map