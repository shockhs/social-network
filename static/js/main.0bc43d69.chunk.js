(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n(27),a=n(6),i="dialogsReducer/SEND-MESSAGE",c={messagesData:[{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:1,message:"Sergei"},{id:2,message:"Andrei"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:3,message:"Dima"},{id:4,message:"Kolya"},{id:5,message:"Sasha"},{id:6,message:"Andrei"},{id:7,message:"Nastya"},{id:8,message:"Lena"}],dialogsData:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}],membersData:[{id:1,name:"Sergei"},{id:2,name:"Andrei"},{id:3,name:"Dima"},{id:4,name:"Kolya"},{id:5,name:"Sasha"},{id:6,name:"Andrei"},{id:7,name:"Nastya"},{id:8,name:"Lena"}]},r=function(e){return{type:i,text:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(a.a)({},e,{messagesData:[].concat(Object(s.a)(e.messagesData),[{id:1,message:t.text}])});default:return e}}},160:function(e,t,n){e.exports=n(297)},246:function(e,t,n){},247:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},28:function(e,t,n){e.exports=n.p+"static/media/news-blocker.28978814.jpg"},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);n(95),n(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(9),a=n(93),i=n(105),c=n(8),r=n.n(c),o=n(13),l=n(27),m=n(6),u=n(40),d=u.create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),p=function(e,t){return d.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},f="usersReducer/FOLLOW-CHANGE",w="usersReducer/SET-USERS",E="usersReducer/SET-COUNT",g={users:[],currentPage:1,countSize:5,totalCount:null,isLoading:!1,statusFollowing:[]},h=function(e){return{type:f,userID:e}},v=function(e){return{type:f,userID:e}},b=function(e){return{type:w,users:e}},N=function(e){return{type:E,count:e}},O=function(e){return{type:"usersReducer/SET-LOADING-STATUS",status:e}},S=function(e){return{type:"usersReducer/CHANGE-FOLLOWING-PROGRESS-STATUS",id:e}},j=function(){var e=Object(o.a)(r.a.mark((function e(t,n,s,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S(n)),e.next=3,s;case 3:0===e.sent.data.resultCode&&t(a),t(S(n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,a){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(m.a)({},e,{followed:!e.followed}):e}))});case w:return Object(m.a)({},e,{users:[].concat(Object(l.a)(e.users),Object(l.a)(t.users))});case"usersReducer/SET-DEFAULT-PAGE":return{users:[],currentPage:1,countSize:5,totalCount:null,isLoading:!1,statusFollowing:[]};case"usersReducer/SET-CURRENT-PAGE":return Object(m.a)({},e,{currentPage:t.currentPage});case E:return Object(m.a)({},e,{totalCount:t.count});case"usersReducer/CHANGE-FOLLOWING-PROGRESS-STATUS":return Object(m.a)({},e,{statusFollowing:e.statusFollowing.some((function(e){return e===t.id}))?e.statusFollowing.filter((function(e){return e!==t.id})):[].concat(Object(l.a)(e.statusFollowing),[t.id])});case"usersReducer/SET-LOADING-STATUS":return Object(m.a)({},e,{isLoading:t.status});default:return e}},T=u.create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"});function L(){return T.get("auth/me")}var C={id:null,login:null,email:null,isAuth:null,pathRedirect:null},P=function(e,t,n,s){return{type:"authReducer/SET_AUTH_STATUS",data:{id:e,login:t,email:n,isAuth:s}}};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"authReducer/SET_AUTH_STATUS":return Object(m.a)({},e,{},t.data,{isAuth:t.data.isAuth});case"authReducer/SET-SUCCESS-STATUS":return Object(m.a)({},e,{pathRedirect:t.pathRedirect});default:return e}},R=n(131),U=n(130),k=n(37),x="loginReducer/SET-LOADING",D="loginReducer/SET-CAPTCHA",F={isLoading:!1,captcha:null},I=function(e){return{type:x,status:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(m.a)({},e,{isLoading:t.status});case D:return Object(m.a)({},e,{captcha:t.url});default:return e}},G=Object(s.c)({profilePage:a.b,messagesPage:i.b,usersPage:y,authPage:A,loginPage:M,form:U.a}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,_=Object(s.e)(G,H(Object(s.a)(R.a)));window.store=_;var z=_,W=n(0),K=n.n(W),V=n(62),Y=n.n(V),B=n(14),J=n(10),X=n(21),$=n(22),q=n(24),Q=n(23),Z=n(25),ee=(n(246),n(33)),te=(n(247),function(){return K.a.createElement("div",{className:"col-sm-3 fixed-left"},K.a.createElement("nav",{className:"section-menu"},K.a.createElement("ul",null,K.a.createElement("li",{className:"section-menu-li"},K.a.createElement(J.d,{className:"section-menu-li-url",to:"/home/profile"},"Profile")),K.a.createElement("li",{className:"section-menu-li"},K.a.createElement(J.d,{className:"section-menu-li-url",to:"/home/dialogs"},"Messages")),K.a.createElement("li",{className:"section-menu-li"},K.a.createElement(J.d,{className:"section-menu-li-url",to:"/home/users"},"Users")),K.a.createElement("li",{className:"section-menu-li"},K.a.createElement(J.d,{className:"section-menu-li-url",to:"/home/news"},"News")),K.a.createElement("li",{className:"section-menu-li"},K.a.createElement(J.d,{className:"section-menu-li-url",to:"/home/music"},"Music")),K.a.createElement("li",{className:"section-menu-li"},K.a.createElement(J.d,{className:"section-menu-li-url",to:"/home/groups"},"Groups")),K.a.createElement("li",{className:"section-menu-li"},K.a.createElement(J.d,{className:"section-menu-li-url",to:"/home/settings"},"Setting")))))}),ne=(n(249),n(28)),se=n.n(ne),ae=function(e){return K.a.createElement("div",{className:"section-news"},K.a.createElement("div",{className:"section-news-header"},K.a.createElement("span",null,"News")),K.a.createElement("div",{className:"section-news-elements"},K.a.createElement("div",{className:"row"},K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""}))),K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""})),K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))),K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""}))),K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""})),K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))),K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""}))),K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""})),K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))),K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem"))),K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""}))),K.a.createElement("div",{className:"col-sm-12 section-news-elements-item"},K.a.createElement("div",{className:"col-sm-3 section-news-elements-item-image"},K.a.createElement("img",{className:"img-responsive",src:se.a,alt:""})),K.a.createElement("div",{className:"col-sm-9 section-news-elements-item-content"},K.a.createElement("div",{className:"section-news-elements-item-content-title"},"Hello world"),K.a.createElement("div",{className:"section-news-elements-item-content-description"},K.a.createElement("p",null,"section-news-elements-itemsection-news-elements-itemsection-news-elements-itemsection-news-elemite msection-news-elements-iteitemsection-news-elements-itemsection-news-elements-itemsection-news-elem msection-news-elements-itemsection-news-elements-iitemsection-news-elements-itemsection-news-elements-itemsection-news-elemtem")))))))},ie=(n(250),function(e){return K.a.createElement("div",{className:"section-music"},K.a.createElement("h1",null,"Soon"))}),ce=(n(251),function(e){return K.a.createElement("div",{className:"section-groups"},K.a.createElement("h1",null,"Soon"))}),re=(n(252),function(e){return K.a.createElement("div",{className:"section-settings"},K.a.createElement("h1",null,"Soon"))}),oe=(n(253),n(94)),le=n.n(oe),me=n(53),ue=function(e){function t(){return Object(X.a)(this,t),Object(q.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setDefaultPage()}},{key:"render",value:function(){var e=this,t=this.props.users.map((function(t){return K.a.createElement("div",{key:t.id+Math.random(),className:"section-users-elements-item col-sm-12"},K.a.createElement("div",{className:"row"},K.a.createElement("div",{className:"section-users-elements-item-right col-sm-3"},K.a.createElement(J.d,{to:"/home/users/"+t.id}," ",K.a.createElement("img",{src:null!=t.photos.small?t.photos.small:le.a,alt:"",className:"img-responsive img-circle center-block"})),t.followed?K.a.createElement("button",{disabled:e.props.statusFollowing.some((function(e){return e===t.id})),onClick:function(){e.props.unfollowUser(t.id)}},"unfollow"):K.a.createElement("button",{disabled:e.props.statusFollowing.some((function(e){return e===t.id})),onClick:function(){e.props.followUser(t.id)}},"follow")),K.a.createElement("div",{className:"section-users-elements-item-text col-sm-6"},K.a.createElement("h1",null,t.name),K.a.createElement("p",null,t.status)),K.a.createElement("div",{className:"section-users-elements-item-location col-sm-3"},K.a.createElement("h4",null,"user.location.city",", ","user.location.country"))))}));return K.a.createElement("div",{className:"section-users"},K.a.createElement("div",{className:"section-users-elements"},K.a.createElement("div",{className:"section-users-elements-header"},K.a.createElement("span",null,"\u0412\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",this.props.totalCount)),K.a.createElement("div",{className:"row"},t,K.a.createElement("div",{className:"col-sm-12 section-users-elements-status"},K.a.createElement(me.a,{isLoading:this.props.isLoading})),K.a.createElement("div",{className:"section-users-elements-showbutton col-sm-12"},K.a.createElement("div",{className:"col-sm-4 col-sm-offset-4"},K.a.createElement("button",{onClick:function(){e.props.showMore(e.props.currentPage)}},"Show more"))))))}}]),t}(K.a.Component),de=function(e){return e.usersPage.users},pe=function(e){return e.usersPage.currentPage},fe=function(e){return e.usersPage.countSize},we=function(e){return e.usersPage.isLoading},Ee=function(e){return e.usersPage.statusFollowing},ge=function(e){return e.usersPage.totalCount},he=function(e){function t(){var e,n;Object(X.a)(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(n=Object(q.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(a)))).showMore=function(e){var t=e+1;n.props.showMore(t),n.props.getUsers(t,n.props.countSize)},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(1,this.props.countSize)}},{key:"render",value:function(){return K.a.createElement(ue,{totalCount:this.props.totalCount,isLoading:this.props.isLoading,statusFollowing:this.props.statusFollowing,followUser:this.props.followUser,unfollowUser:this.props.unfollowUser,setDefaultPage:this.props.setDefaultPage,showMore:this.showMore,users:this.props.users,currentPage:this.props.currentPage})}}]),t}(K.a.Component),ve=Object(B.b)((function(e){return{users:de(e),currentPage:pe(e),countSize:fe(e),isLoading:we(e),statusFollowing:Ee(e),totalCount:ge(e)}}),{followingCurrentProgress:S,setDefaultPage:function(){return{type:"usersReducer/SET-DEFAULT-PAGE"}},getUsers:function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(s){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(O(!0)),n.next=3,p(e,t);case 3:a=n.sent,s(O(!1)),s(b(a.items)),s(N(a.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},unfollowUser:function(e){return function(t){j(t,e,function(e){return d.delete("follow/".concat(e))}(e),v(e))}},followUser:function(e){return function(t){j(t,e,function(e){return d.post("follow/".concat(e))}(e),h(e))}},follow:h,showMore:function(e){return{type:"usersReducer/SET-CURRENT-PAGE",currentPage:e}},unfollow:v,setUsers:b,setTotalUserCount:N,setPreloader:O})(he),be=(n(254),n(66)),Ne=n.n(be),Oe=function(e){var t=e.profile,n=e.UserLogout;return K.a.createElement("div",{className:"section-outer"},K.a.createElement("div",{className:"container"},K.a.createElement("div",{className:"section-header"},K.a.createElement("div",{className:"section-header-logo"},K.a.createElement(J.d,{to:"/home"},K.a.createElement("img",{className:"img-responsive",src:Ne.a,alt:""}))),K.a.createElement("div",{className:"section-header-button"},K.a.createElement("div",{className:"section-header-profile"},K.a.createElement(J.d,{to:"/home/profile"},t.login)),K.a.createElement("button",{onClick:n},"Log out")))))},Se=n(92),je=Object(B.b)((function(e){return{profile:Object(Se.b)(e)}}),{UserLogout:function(e,t,n){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.delete("/auth/login");case 2:0===e.sent.data.resultCode&&t(P(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),ye=n(41),Te=n.n(ye),Le=(n(255),function(e){var t=e.isLoading;return K.a.createElement("div",{className:"preloader"},t?K.a.createElement("img",{src:Te.a,alt:""}):null)}),Ce=K.a.lazy((function(){return n.e(4).then(n.bind(null,319))})),Pe=K.a.lazy((function(){return n.e(3).then(n.bind(null,318))})),Ae=function(e){function t(){return Object(X.a)(this,t),Object(q.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.history.push(this.props.url),"/login"===this.props.url&&this.props.history.push("/home")}},{key:"render",value:function(){return K.a.createElement(K.a.Fragment,null,K.a.createElement(je,null),K.a.createElement("div",{className:"outer-section"},K.a.createElement("div",{className:"container"},K.a.createElement("div",{className:"row"},K.a.createElement(te,null),K.a.createElement("div",{className:"col-sm-8 relative-content"},K.a.createElement("div",{className:"section-inner"},K.a.createElement(K.a.Suspense,{fallback:K.a.createElement(Le,{isLoading:!0})},K.a.createElement(ee.a,{exact:!0,path:"/home/dialogs",render:function(){return K.a.createElement(Ce,null)}}),K.a.createElement(ee.a,{exact:!0,path:"/home",render:function(){return K.a.createElement(Pe,null)}}),K.a.createElement(ee.a,{exact:!0,path:"/home/profile",render:function(){return K.a.createElement(Pe,null)}}),K.a.createElement(ee.a,{exact:!0,path:"/home/users/:userId",render:function(){return K.a.createElement(Pe,null)}}),K.a.createElement(ee.a,{exact:!0,path:"/home/users",render:function(){return K.a.createElement(ve,null)}}),K.a.createElement(ee.a,{exact:!0,path:"/home/news",component:ae}),K.a.createElement(ee.a,{exact:!0,path:"/home/music",component:ie}),K.a.createElement(ee.a,{exact:!0,path:"/home/groups",component:ce}),K.a.createElement(ee.a,{exact:!0,path:"/home/settings",component:re}))))))))}}]),t}(K.a.Component),Re=Object(ee.e)(Ae),Ue=(n(256),n(128)),ke=n(129),xe=n(51),De=n(67),Fe=function(e){function t(){return Object(X.a)(this,t),Object(q.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.history.replace("/login")}},{key:"render",value:function(){return K.a.createElement("div",null,K.a.createElement(Ge,this.props))}}]),t}(K.a.Component),Ie=Object(xe.a)(30),Me=Object(ke.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,s=e.captcha,a=e.isLoading;return K.a.createElement("form",{onSubmit:t,className:"section-login-form"},K.a.createElement(Ue.a,{name:"email",validate:[xe.b,Ie],component:De.a,placeholder:"Email",type:"text"}),K.a.createElement(Ue.a,{name:"password",validate:[xe.b,Ie],component:De.a,placeholder:"Password",type:"password"}),K.a.createElement("div",{className:"col-sm-12 section-login-form-checkbox"},K.a.createElement(Ue.a,{name:"rememberMe",component:"input",type:"checkbox"}),K.a.createElement("h5",null,"Remember me")),n&&K.a.createElement("span",{className:"errorValidation"},n),s?K.a.createElement(K.a.Fragment,null,K.a.createElement("img",{className:"captchaLogin",src:s,alt:""}),K.a.createElement(Ue.a,{name:"captcha",validate:[xe.b],component:De.a,className:"captchaInput"})):null,K.a.createElement(me.a,{isLoading:a}),K.a.createElement("button",{disabled:a},"Sign In"))})),Ge=function(e){var t=e.setLoadingStatus,n=e.UserLogin,s=e.isLoading,a=e.captcha;return K.a.createElement("div",{className:"main"},K.a.createElement("div",{className:"container"},K.a.createElement("div",{className:"row"},K.a.createElement("div",{className:"col-sm-12 header"},K.a.createElement(J.d,{to:"/login"},K.a.createElement("img",{className:"img-responsive",src:Ne.a,alt:""})),K.a.createElement("div",{className:"header-button"},K.a.createElement("a",{href:"https://social-network.samuraijs.com/signUp"},K.a.createElement("button",null,"Sign Up")))))),K.a.createElement("div",{className:"section-login"},K.a.createElement("div",{className:"container"},K.a.createElement("div",{className:"row"},K.a.createElement("div",{className:"col-sm-4 col-sm-offset-4"},K.a.createElement("div",{className:"section-login-title"},K.a.createElement("h2",null,"Login Form")),K.a.createElement(Me,{captcha:a,isLoading:s,onSubmit:function(e){t(!0),n(e)}}))))))},He=Fe,_e=Object(B.b)((function(e){return{isLoading:e.loginPage.isLoading,captcha:e.loginPage.captcha}}),{setLoadingStatus:I,UserLogin:function(e){var t=e.email,n=e.password,s=e.rememberMe,a=e.captcha;return function(e){e(I(!0)),function(e,t,n,s){return T.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:s})}(t,n,s,a).then((function(t){0===t.data.resultCode?L().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.login,i=n.email;e(P(s,a,i,!0))}})):10===t.data.resultCode?T.post("/security/get-captcha-url").then((function(t){var n;e((n=t.data.url,{type:D,url:n}))})):t.data.messages.length>0&&e(Object(k.a)("login",{_error:t.data.messages[0]})),e(I(!1))}))}}})(Object(ee.e)(He)),ze=(n(296),function(e){var t=e.isLoading;return K.a.createElement("div",{className:"spinner-main"},t?K.a.createElement("img",{src:Te.a,alt:""}):null)}),We=function(e){function t(){var e,n;Object(X.a)(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(n=Object(q.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(a)))).state={url:null},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.getAuthStatus(),null==this.props.isAuth&&this.setState({url:this.props.location.pathname})}},{key:"getAuthStatus",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getAuthStatus();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.props.component;return e=null==this.props.isAuth?K.a.createElement(ze,{isLoading:!0}):this.props.isAuth?K.a.createElement(Re,{url:this.state.url}):K.a.createElement(_e,null),K.a.createElement(ee.a,{path:t,render:function(){return e}})}}]),t}(K.a.Component),Ke=Object(s.d)(ee.e,Object(B.b)((function(e){return{isAuth:e.authPage.isAuth}}),{setRedirectUrl:function(e){return{type:"authReducer/SET-SUCCESS-STATUS",pathRedirect:e}},getAuthStatus:function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,s,a,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:0===(n=e.sent).data.resultCode?(s=n.data.data,a=s.id,i=s.login,c=s.email,t(P(a,i,c,!0))):t(P(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(We);Y.a.render(K.a.createElement(J.b,null,K.a.createElement(B.a,{store:z},K.a.createElement(Ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){e.exports=n.p+"static/media/spinner.5b11b33e.svg"},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c}));var s=function(e){return e?void 0:"Field is empty"},a=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," symbols or less"):void 0}},i=function(e){return e&&"true"!==e&&"false"!==e?"Must be 'true' or 'false'":void 0},c=function(e){return e&&(e.includes("http://")||e.includes("https://"))?"Wrong format of domain (\u0431\u0435\u0437 http(s)://)":void 0}},53:function(e,t,n){"use strict";var s=n(0),a=n.n(s),i=n(41),c=n.n(i);t.a=function(e){var t=e.isLoading;return a.a.createElement("div",null,t?a.a.createElement("img",{src:c.a,alt:""}):null)}},66:function(e,t,n){e.exports=n.p+"static/media/logoin.ff1e30d7.png"},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var s=n(6),a=n(85),i=n(0),c=n.n(i),r=(n(257),function(e){var t=e.input,n=e.element,i=e.meta,r=i.touched,o=i.error,l=Object(a.a)(e,["input","element","meta"]),m=function(){return c.a.createElement("".concat(n),Object(s.a)({},t,{},l),null)};return r&&o?c.a.createElement("div",{className:"formControl-error"},m(),c.a.createElement("span",null,o)):c.a.createElement("div",{className:"formControl"},m())}),o=function(e){return c.a.createElement(r,Object.assign({element:"input"},e))},l=function(e){var t=e.input,n=e.meta,i=n.touched,r=n.error,o=Object(a.a)(e,["input","meta"]),l=function(){return c.a.createElement("input",Object(s.a)({},t,{},o),null)};return i&&r?c.a.createElement("div",{className:"formControlEdit-error"},l(),c.a.createElement("span",null,r)):c.a.createElement("div",{className:"formControlEdit"},l())}},92:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return l}));var s=function(e){return e.profilePage.profile},a=function(e){return e.authPage.id},i=function(e){return e.profilePage.isLoading},c=function(e){return e.profilePage.status},r=function(e){return e.profilePage.postsData},o=function(e){return e.profilePage.profile.photos},l=function(e){return e.authPage}},93:function(e,t,n){"use strict";var s=n(65),a=n(8),i=n.n(a),c=n(13),r=n(27),o=n(6),l=n(40).create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),m=function(e){return l.get("profile/status/".concat(e))},u=function(e){var t=new FormData;return t.append("image",e),l.put("profile/photo",t,{"Content-Type":"multipart/form-data"})},d=function(e){return l.get("profile/".concat(e)).then((function(e){return e.data}))},p=function(e){return l.put("profile/status",{status:e})},f=n(37);n.d(t,"a",(function(){return v})),n.d(t,"g",(function(){return S})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return y})),n.d(t,"d",(function(){return T})),n.d(t,"f",(function(){return L}));var w="profileReducer/ADD-POST",E="profileReducer/DELETE-POST",g="profileReducer/SET-AVATAR",h={postsData:[{id:1,likesCount:232,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 1"},{id:2,likesCount:15,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 2"},{id:3,likesCount:24,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 3"},{id:4,likesCount:55,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 4"},{id:5,likesCount:125,message:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 5"}],profile:null,status:"",isLoading:!1},v=function(e){return{type:w,post:e}},b=function(e){return{type:"profileReducer/SET-USER-PROFILE",profile:e}},N=function(e){return{type:"profileReducer/SET-LOADING-STATUS",status:e}},O=function(e){return{type:"profileReducer/SET-PROFILE-STATUS",status:e}},S=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:0===(s=t.sent).data.resultCode&&n((a=s.data.data.photos,{type:g,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(N(!0)),t.next=3,d(e);case 3:s=t.sent,n(N(!1)),n(b(s));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n,a){var c,r,m,u,p,w,E;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().authPage.id,t.next=3,i=e,l.put("profile",i);case 3:if(0!==(r=t.sent).data.resultCode){t.next=11;break}return t.next=7,d(c);case 7:m=t.sent,n(b(m)),t.next=15;break;case 11:for(u={contacts:{}},p=0;p<r.data.messages.length;p++)w=r.data.messages[p].replace("(Contacts->","").replace(")",""),E=(E=w.replace("Invalid url format ","")).toLowerCase(),u={contacts:Object(o.a)({},u.contacts,Object(s.a)({},E,w))};return n(Object(f.a)("edit",u)),t.abrupt("return",Promise.reject());case 15:case"end":return t.stop()}var i}),t)})));return function(e,n){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:200===(s=t.sent).status&&n(O(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,p(e);case 4:0===t.sent.data.resultCode&&n(O(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)({},e,{postsData:[].concat(Object(r.a)(e.postsData),[{id:1e3*Math.random(0),likesCount:0,message:t.post}])});case"profileReducer/SET-USER-PROFILE":return Object(o.a)({},e,{profile:t.profile});case"profileReducer/SET-LOADING-STATUS":return Object(o.a)({},e,{isLoading:t.status});case g:return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});case E:return Object(o.a)({},e,{postsData:Object(r.a)(e.postsData.filter((function(e){return e.id!==t.id})))});case"profileReducer/SET-PROFILE-STATUS":return Object(o.a)({},e,{status:t.status});default:return e}}},94:function(e,t,n){e.exports=n.p+"static/media/default-avatar.d2c893f5.png"},96:function(e,t,n){}},[[160,1,2]]]);
//# sourceMappingURL=main.0bc43d69.chunk.js.map