(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{111:function(e,t,n){e.exports=n.p+"static/media/default-avatar.d2c893f5.png"},155:function(e,t,n){e.exports=n(295)},156:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);n(89),n(156),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(7),r=n(88),s=n(98),o=n(9),c=n.n(o),i=n(16),u=n(22),l=n(8),m=n(38),d=m.create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07","Access-Control-Allow-Origin":"*"},proxy:{host:"104.236.174.88",port:3128},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),f=function(e){return d.post("follow/".concat(e))},p=function(e,t){return d.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h="usersReducer/FOLLOW-CHANGE",g="usersReducer/SET-USERS",E="usersReducer/SET-COUNT",b={users:[],currentPage:1,countSize:5,totalCount:0,isLoading:!1,statusFollowing:[]},v=function(e){return{type:h,userID:e}},w=function(e){return{type:h,userID:e}},S=function(e){return{type:g,users:e}},O=function(e){return{type:E,count:e}},N=function(e){return{type:"usersReducer/SET-LOADING-STATUS",status:e}},A=function(e){return{type:"usersReducer/CHANGE-FOLLOWING-PROGRESS-STATUS",id:e}},j=function(){var e=Object(i.a)(c.a.mark((function e(t,n,a,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(n)),e.next=3,a;case 3:0===e.sent.data.resultCode&&t(r),t(A(n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(l.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)({},e,{followed:!e.followed}):e}))});case g:return Object(l.a)({},e,{users:[].concat(Object(u.a)(e.users),Object(u.a)(t.users))});case"usersReducer/SET-CURRENT-PAGE":return Object(l.a)({},e,{currentPage:t.currentPage+1});case E:return Object(l.a)({},e,{totalCount:t.count});case"usersReducer/CHANGE-FOLLOWING-PROGRESS-STATUS":return Object(l.a)({},e,{statusFollowing:e.statusFollowing.some((function(e){return e===t.id}))?e.statusFollowing.filter((function(e){return e!==t.id})):[].concat(Object(u.a)(e.statusFollowing),[t.id])});case"usersReducer/SET-LOADING-STATUS":return Object(l.a)({},e,{isLoading:t.status});default:return e}},y=m.create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07","Access-Control-Allow-Origin":"*"},proxy:{host:"104.236.174.88",port:3128},baseURL:"https://social-network.samuraijs.com/api/1.0/"});function R(){return y.get("auth/me")}var k={id:null,login:null,email:null,isAuth:null,pathRedirect:null},C=function(e,t,n,a){return{type:"authReducer/SET_AUTH_STATUS",data:{id:e,login:t,email:n,isAuth:a}}};var L,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"authReducer/SET_AUTH_STATUS":return Object(l.a)({},e,{},t.data,{isAuth:t.data.isAuth});case"authReducer/SET-SUCCESS-STATUS":return Object(l.a)({},e,{pathRedirect:t.pathRedirect});default:return e}},U=n(125),D=n(124),x=n(50),I="loginReducer/SET-LOADING",F={isLoading:!1},G=function(e){return{type:I,status:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(l.a)({},e,{isLoading:t.status});default:return e}},B=Object(a.c)({profilePage:r.b,messagesPage:s.b,usersPage:T,authPage:P,loginPage:M,form:D.a}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,J=Object(a.e)(B,Y(Object(a.a)(U.a))),K=n(0),W=n.n(K),Z=n(59),z=n.n(Z),H=n(13),Q=(n(242),n(10)),q=n(25),_=n(26),V=n(28),X=n(27),$=n(29),ee=(n(243),n(32)),te=(n(244),function(){return W.a.createElement("div",{className:"col-sm-4"},W.a.createElement("nav",{className:"section-menu"},W.a.createElement("ul",null,W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(Q.b,{className:"section-menu-li-url",to:"/home/profile"},"Profile")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(Q.b,{className:"section-menu-li-url",to:"/home/dialogs"},"Messages")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(Q.b,{className:"section-menu-li-url",to:"/home/users"},"Users")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(Q.b,{className:"section-menu-li-url",to:"/home/news"},"News")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(Q.b,{className:"section-menu-li-url",to:"/home/music"},"Music")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(Q.b,{className:"section-menu-li-url",to:"/home/groups"},"Groups")),W.a.createElement("li",{className:"section-menu-li"},W.a.createElement(Q.b,{className:"section-menu-li-url",to:"/home/settings"},"Setting")))))}),ne=(n(246),function(e){return W.a.createElement("div",{className:"section-news"},"aaa")}),ae=(n(247),function(e){return W.a.createElement("div",{className:"section-music"},"aaa")}),re=(n(248),function(e){return W.a.createElement("div",{className:"section-groups"},"aaa")}),se=(n(249),function(e){return W.a.createElement("div",{className:"section-settings"},"aaa")}),oe=(n(250),function(){return W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"col-sm-8"},W.a.createElement("div",{className:"section-intro"},W.a.createElement("div",{className:"section-intro-title"},"Places list"),W.a.createElement("div",{className:"section-intro-text"},"You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using a plugin.")))))}),ce=(n(251),n(111)),ie=n.n(ce),ue=n(60),le=function(e){var t=e.totalCount,n=e.users,a=e.isLoading,r=e.showMore,s=e.currentPage,o=e.followUser,c=e.unfollowUser,i=e.statusFollowing,u=n.map((function(e){return W.a.createElement("div",{key:e.id,className:"section-users-elements-item col-sm-12"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"section-users-elements-item-right col-sm-3"},W.a.createElement(Q.b,{to:"/home/users/"+e.id}," ",W.a.createElement("img",{src:null!=e.photos.small?e.photos.small:ie.a,alt:"",className:"img-responsive img-circle center-block"})),e.followed?W.a.createElement("button",{disabled:i.some((function(t){return t===e.id})),onClick:function(){c(e.id)}},"unfollow"):W.a.createElement("button",{disabled:i.some((function(t){return t===e.id})),onClick:function(){o(e.id)}},"follow")),W.a.createElement("div",{className:"section-users-elements-item-text col-sm-6"},W.a.createElement("h1",null,e.name),W.a.createElement("p",null,e.status)),W.a.createElement("div",{className:"section-users-elements-item-location col-sm-3"},W.a.createElement("h4",null,"user.location.city",", ","user.location.country"))))}));return W.a.createElement("div",{className:"section-users"},W.a.createElement("div",{className:"section-users-elements"},W.a.createElement("div",{className:"section-users-elements-header"},W.a.createElement("span",null,"\u0412\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",t)),W.a.createElement("div",{className:"row"},u,W.a.createElement("div",{className:"col-sm-12 section-users-elements-status"},W.a.createElement(ue.a,{isLoading:a})),W.a.createElement("div",{className:"section-users-elements-showbutton col-sm-12"},W.a.createElement("div",{className:"col-sm-4 col-sm-offset-4"},W.a.createElement("button",{onClick:function(){r(s)}},"Show more"))))))},me=function(e){return e.usersPage.users},de=function(e){return e.usersPage.currentPage},fe=function(e){return e.usersPage.countSize},pe=function(e){return e.usersPage.isLoading},he=function(e){return e.usersPage.statusFollowing},ge=function(e){return e.usersPage.totalCount},Ee=function(e){function t(){var e,n;Object(q.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(V.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).showMore=function(e){var t=e+1;n.props.showMore(t),n.props.getUsersThunk(t,n.props.countSize)},n}return Object($.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.countSize)}},{key:"render",value:function(){return W.a.createElement(le,{totalCount:this.props.totalCount,isLoading:this.props.isLoading,statusFollowing:this.props.statusFollowing,followUser:this.props.followUserThunk,unfollowUser:this.props.unfollowUserThunk,showMore:this.showMore,users:this.props.users,currentPage:this.props.currentPage})}}]),t}(W.a.Component),be=Object(H.b)((function(e){return{users:me(e),currentPage:de(e),countSize:fe(e),isLoading:pe(e),statusFollowing:he(e),totalCount:ge(e)}}),{followingCurrentProgress:A,getUsersThunk:function(e,t){return function(){var n=Object(i.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(N(!0)),n.next=3,p(e,t);case 3:r=n.sent,a(N(!1)),a(S(r.items)),a(O(r.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},unfollowUserThunk:function(e){return function(t){j(t,e,function(e){return d.delete("follow/".concat(e))}(e),w(e))}},followUserThunk:function(e){return function(t){j(t,e,f(e),v(e))}},followUser:f,follow:v,showMore:function(e){return{type:"usersReducer/SET-CURRENT-PAGE",currentPage:e}},unfollow:w,setUsers:S,setTotalUserCount:O,setPreloader:N})(Ee),ve=(n(252),n(63)),we=n.n(ve),Se=function(e){var t=e.profile,n=e.UserLogout;return W.a.createElement("div",{className:"section-outer"},W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"section-header"},W.a.createElement("div",{className:"section-header-logo"},W.a.createElement(Q.b,{to:"/home"},W.a.createElement("img",{className:"img-responsive",src:we.a,alt:""}))),W.a.createElement("div",{className:"section-header-button"},W.a.createElement("div",{className:"section-header-profile"},W.a.createElement(Q.b,{to:"/home/profile"},t.login)),W.a.createElement("button",{onClick:n},"Log out")))))},Oe=n(87),Ne=Object(H.b)((function(e){return{profile:Object(Oe.b)(e)}}),{UserLogout:function(e,t,n){return function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.delete("/auth/login");case 2:0===e.sent.data.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),Ae=n(39),je=n.n(Ae),Te=(n(253),function(e){var t=e.isLoading;return W.a.createElement("div",{className:"preloader"},t?W.a.createElement("img",{src:je.a,alt:""}):null)}),ye=W.a.lazy((function(){return n.e(4).then(n.bind(null,315))})),Re=W.a.lazy((function(){return n.e(3).then(n.bind(null,314))})),ke=function(e){function t(){return Object(q.a)(this,t),Object(V.a)(this,Object(X.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.history.push(this.props.url),"/login"===this.props.url&&this.props.history.push("/home")}},{key:"render",value:function(){return W.a.createElement("div",null,W.a.createElement(Ne,null),W.a.createElement(oe,null),W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"row"},W.a.createElement(te,null),W.a.createElement("div",{className:"col-sm-8"},W.a.createElement("div",{className:"section-inner"},W.a.createElement(W.a.Suspense,{fallback:W.a.createElement(Te,{isLoading:!0})},W.a.createElement(ee.a,{exact:!0,path:"/home/dialogs",render:function(){return W.a.createElement(ye,null)}}),W.a.createElement(ee.a,{exact:!0,path:"/home/profile",render:function(){return W.a.createElement(Re,null)}}),W.a.createElement(ee.a,{exact:!0,path:"/home/users/:userId",render:function(){return W.a.createElement(Re,null)}}),W.a.createElement(ee.a,{exact:!0,path:"/home/users",render:function(){return W.a.createElement(be,null)}}),W.a.createElement(ee.a,{exact:!0,path:"/home/news",component:ne}),W.a.createElement(ee.a,{exact:!0,path:"/home/music",component:ae}),W.a.createElement(ee.a,{exact:!0,path:"/home/groups",component:re}),W.a.createElement(ee.a,{exact:!0,path:"/home/settings",component:se})))))))}}]),t}(W.a.Component),Ce=Object(ee.e)(ke),Le=(n(254),n(122)),Pe=n(123),Ue=function(e){return e?void 0:"Field is required"},De=n(129),xe=(n(255),function(e){var t=e.input,n=e.element,a=e.meta,r=a.touched,s=a.error,o=Object(De.a)(e,["input","element","meta"]),c=function(){return W.a.createElement("".concat(n),Object(l.a)({},t,{},o),null)};return r&&s?W.a.createElement("div",{className:"formControl-error"},c(),W.a.createElement("span",null,s)):W.a.createElement("div",{className:"formControl"},c())}),Ie=function(e){return W.a.createElement(xe,Object.assign({element:"input"},e))},Fe=function(e){function t(){return Object(q.a)(this,t),Object(V.a)(this,Object(X.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.history.replace("/login")}},{key:"render",value:function(){return W.a.createElement("div",null,W.a.createElement(Be,this.props))}}]),t}(W.a.Component),Ge=(L=30,function(e){return e.length>L?"Must be ".concat(L," characters or less"):void 0}),Me=Object(Pe.a)({form:"login"})((function(e){return W.a.createElement("form",{onSubmit:e.handleSubmit,className:"section-login-form"},W.a.createElement(Le.a,{name:"email",validate:[Ue,Ge],component:Ie,placeholder:"Email",type:"text"}),W.a.createElement(Le.a,{name:"password",validate:[Ue,Ge],component:Ie,placeholder:"Password",type:"password"}),W.a.createElement("div",{className:"col-sm-12 section-login-form-checkbox"},W.a.createElement(Le.a,{name:"rememberMe",component:"input",type:"checkbox"}),W.a.createElement("h5",null,"Remember me")),e.error&&W.a.createElement("span",{className:"errorValidation"},e.error),W.a.createElement(ue.a,{isLoading:e.isLoading}),W.a.createElement("button",{disabled:e.isLoading},"Sign In"))})),Be=function(e){return W.a.createElement("div",{className:"main"},W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"col-sm-12 header"},W.a.createElement(Q.b,{to:"/"},W.a.createElement("img",{className:"img-responsive",src:we.a,alt:""})),W.a.createElement("div",{className:"header-button"},W.a.createElement("button",null,"Log in"))))),W.a.createElement("div",{className:"section-login"},W.a.createElement("div",{className:"container"},W.a.createElement("div",{className:"row"},W.a.createElement("div",{className:"col-sm-4 col-sm-offset-4"},W.a.createElement("div",{className:"section-login-title"},W.a.createElement("h2",null,"Login Form")),W.a.createElement(Me,{isLoading:e.isLoading,onSubmit:function(t){e.setLoadingStatus(!0),e.UserLogin(t.email,t.password,t.rememberMe)}}))))))},Ye=Fe,Je=Object(H.b)((function(e){return{isLoading:e.loginPage.isLoading}}),{setLoadingStatus:G,UserLogin:function(e,t,n){return function(a){a(G(!0)),function(e,t,n){return y.post("/auth/login",{email:e,password:t,rememberMe:n})}(e,t,n).then((function(e){0===e.data.resultCode?R().then((function(e){if(0===e.data.resultCode){var t=e.data.data,n=t.id,r=t.login,s=t.email;a(C(n,r,s,!0))}})):e.data.messages.length>0&&a(Object(x.a)("login",{_error:e.data.messages[0]})),a(G(!1))}))}}})(Object(ee.e)(Ye)),Ke=(n(294),function(e){var t=e.isLoading;return W.a.createElement("div",{className:"spinner-main"},t?W.a.createElement("img",{src:je.a,alt:""}):null)}),We=function(e){function t(){var e,n;Object(q.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(V.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={url:null},n}return Object($.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.getAuthStatusThunk(),null==this.props.isAuth&&this.setState({url:this.props.location.pathname})}},{key:"getAuthStatusThunk",value:function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getAuthStatusThunk();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.props.component;return e=null==this.props.isAuth?W.a.createElement(Ke,{isLoading:!0}):this.props.isAuth?W.a.createElement(Ce,{url:this.state.url}):W.a.createElement(Je,null),W.a.createElement(ee.a,{path:t,render:function(){return e}})}}]),t}(W.a.Component),Ze=Object(a.d)(ee.e,Object(H.b)((function(e){return{isAuth:e.authPage.isAuth}}),{setRedirectUrl:function(e){return{type:"authReducer/SET-SUCCESS-STATUS",pathRedirect:e}},getAuthStatusThunk:function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a,r,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:0===(n=e.sent).data.resultCode?(a=n.data.data,r=a.id,s=a.login,o=a.email,t(C(r,s,o,!0))):t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(We);z.a.render(W.a.createElement(Q.a,null,W.a.createElement(H.a,{store:J},W.a.createElement(Ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,n){e.exports=n.p+"static/media/spinner.5b11b33e.svg"},60:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(39),o=n.n(s);t.a=function(e){var t=e.isLoading;return r.a.createElement("div",null,t?r.a.createElement("img",{src:o.a,alt:""}):null)}},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAASCAYAAABRjFBCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAi5JREFUeNrcWNFxwjAMdXNdICtkBTqCGQFGCCMkI8AIYQQYIRkhjBBGICO4zlXuUSNZtqEE8+70E0zypKcnEYRSqlU/qHSIwFjouMD3zTWpbjGdyYl7tMj5JoKL4TPlMSD3nK6vHN/lMMC5SsWBypWquyTuU9g3KgMKVFjF4YTYehK7wL1DxJoa4uBZvAGeO4doIfmSNcQ+lJ5FGhBS14KiXWKdGwI6z8ftIShnEE3AFOEmS0k8P6dEU1AIl2C9g5RwJNcwxPpAwYpIwbAmepZoOcG5YJr5d7RTol0cwvUMKc5JknAq1yxYNASXChnDWJ4HD86tB4/QnYw1bOtoij88KdFMZxUec9YlmiTIVZ47j3OZChQea7h8BtGoWq4QF97sPE6I4SqpxtP+vm6gnuMb1QP2oZjJaa6mY3PKhBuFjlbHQUcp4lDrGB9wxsYCudaJdHCGvF046djZFzPP4qzuIDcy5I4QociJQqSEHcN5g13MnkRuT7hg9Oi2d8fGIegpRDRXIbvIMVRHdBrnYGycp4aOmDSkBplD5ZqYsesHFvkeYF3I7d2tDmVF/gLCBdUmY+ZtbRVp+Q/Fj8WREE06flSVyA4cU7Mmt9N2sI9eTTBTcEy4Fhx17aBKR4+4ap/iEvy8Y1G+Ampwli1GBcGJbkSTIDYGCWN0wkcKTkvhXSdmAoywm8cUk05dNLNrvwLe9To4f0o14XcQzThuDWJg/66Y98ElxDnlZL8FGABhrL5/IhE15wAAAABJRU5ErkJggg=="},87:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i}));var a=function(e){return e.profilePage.profile},r=function(e){return e.authPage.id},s=function(e){return e.profilePage.isLoading},o=function(e){return e.profilePage.status},c=function(e){return e.profilePage.postsData},i=function(e){return e.authPage}},88:function(e,t,n){"use strict";var a=n(9),r=n.n(a),s=n(16),o=n(22),c=n(8),i=n(38).create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07","Access-Control-Allow-Origin":"*"},proxy:{host:"104.236.174.88",port:3128},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),u=function(e){return i.get("profile/status/".concat(e))},l=function(e){return i.get("profile/".concat(e)).then((function(e){return e.data}))},m=function(e){return i.put("profile/status",{status:e})};n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"e",(function(){return w}));var d="profileReducer/ADD-POST",f="profileReducer/DELETE-POST",p={postsData:[{id:1,likesCount:232,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 1"},{id:2,likesCount:15,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 2"},{id:3,likesCount:24,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 3"},{id:4,likesCount:55,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 4"},{id:5,likesCount:125,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 5"}],profile:null,status:"",isLoading:!1},h=function(e){return{type:d,post:e}},g=function(e){return{type:"profileReducer/SET-LOADING-STATUS",status:e}},E=function(e){return{type:"profileReducer/SET-PROFILE-STATUS",status:e}},b=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g(!0)),t.next=3,l(e);case 3:a=t.sent,n(g(!1)),n({type:"profileReducer/SET-USER-PROFILE",profile:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:200===(a=t.sent).status&&n(E(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:0===t.sent.data.resultCode&&n(E(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(c.a)({},e,{postsData:[].concat(Object(o.a)(e.postsData),[{id:15,likesCount:0,message:t.post}])});case"profileReducer/SET-USER-PROFILE":return Object(c.a)({},e,{profile:t.profile});case"profileReducer/SET-LOADING-STATUS":return Object(c.a)({},e,{isLoading:t.status});case f:return Object(c.a)({},e,{postsData:Object(o.a)(e.postsData.filter((function(e){return e.id!==t.id})))});case"profileReducer/SET-PROFILE-STATUS":return Object(c.a)({},e,{status:t.status});default:return e}}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(22),r=n(8),s="dialogsReducer/SEND-MESSAGE",o={messagesData:[{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:2,message:"Andrei"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:4,message:"Kolya"},{id:5,message:"Sasha"},{id:6,message:"Andrei"},{id:7,message:"Nastya"},{id:8,message:"Lena"}],dialogsData:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}],membersData:[{id:1,name:"Sergei"},{id:2,name:"Andrei"},{id:3,name:"Dima"},{id:4,name:"Kolya"},{id:5,name:"Sasha"},{id:6,name:"Andrei"},{id:7,name:"Nastya"},{id:8,name:"Lena"}]},c=function(e){return{type:s,text:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(r.a)({},e,{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:1,message:t.text}])});default:return e}}}},[[155,1,2]]]);
//# sourceMappingURL=main.9c09455d.chunk.js.map