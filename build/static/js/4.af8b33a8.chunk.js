(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[4],{299:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},320:function(e,a,t){"use strict";t.r(a);var n=t(5),s=t.n(n),c=t(11),r=t(71),i=t(0),o=t.n(i),l=(t(299),t(300),t(301),t(10)),m=function(e){var a=e.id,t=e.name,n=e.count;return o.a.createElement("li",{className:"section-dialogs-inner-members-li"},o.a.createElement(l.b,{className:"section-dialogs-inner-members-li-url",to:"/home/dialogs/"+a},t,o.a.createElement("div",{className:"new-message"},"\u041d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439: ",n)))},u={count:0};function d(e,a){switch(a.type){case"set":return{count:a.number};default:throw new Error}}var f=function(e){var a=e.instance,t=Object(i.useReducer)(d,u),n=Object(r.a)(t,2),l=n[0],f=n[1],v=Object(i.useState)([]),b=Object(r.a)(v,2),g=b[0],E=b[1],p=Object(i.useState)(!1),N=Object(r.a)(p,2),j=N[0],w=N[1],O=Object(i.useCallback)((function(e){f({type:"set",number:e})})),h=setTimeout((function(){w(!j)}),35e3);Object(i.useEffect)((function(){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get("/dialogs");case 2:200===(t=e.sent).status&&g!==t.data&&E(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get("/dialogs/messages/new/count");case 2:200===(t=e.sent).status&&O(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),e(),function(){clearTimeout(h)}}),[j]);var k=g.map((function(e){return o.a.createElement(m,{count:l.count,key:e.id,id:e.id,name:e.userName})}));return o.a.createElement("ul",{className:"section-dialogs-inner-members"},k)},v=(t(302),t(95)),b=t.n(v),g=t(34),E=(t(303),t(128)),p=t(129),N=Object(p.a)({form:"SendMessageFormn"})((function(e){var a=e.handleSubmit;return o.a.createElement("form",{onSubmit:a,name:"SendMessage"},o.a.createElement("div",{className:"section-dialogs-inner-newmessage"},o.a.createElement(E.a,{name:"message",component:"textarea",className:"section-dialogs-inner-newmessage-input",id:"",rows:"2"}),o.a.createElement("button",{className:"section-dialogs-inner-newmessage-button"},"Send Message")))})),j=function(e){var a=e.onSubmit;return o.a.createElement(N,{onSubmit:a})},w=t(53),O=function(e){var a=e.id,t=e.avatar,n=e.instance,l=Object(i.useState)(!1),m=Object(r.a)(l,2),u=m[0],d=m[1],f=Object(i.useState)([]),v=Object(r.a)(f,2),g=v[0],E=v[1],p=Object(i.useState)(!1),N=Object(r.a)(p,2),O=N[0],h=N[1],k=Object(i.useState)(!1),S=Object(r.a)(k,2),y=S[0],x=S[1],T=Object(i.useCallback)(function(){var e=Object(c.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.message,!O){e.next=3;break}return e.abrupt("return");case 3:return h(!0),e.next=6,n.post("/dialogs/".concat(a,"/messages"),{body:c});case 6:x(!y),h(!1);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[O]),L=setTimeout((function(){x(!y)}),35e3);if(Object(i.useEffect)((function(){return function(){var e=Object(c.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/dialogs/".concat(a,"/messages"));case 2:if(200===(t=e.sent).status)if(!1===u)E(t.data.items),d(!0);else for(t.data.items.length!==g.length&&(E(t.data.items),console.log("STATE UPDATE")),c=0;c<t.data.items.length;c++)t.data.items[0].id!==g[0].id&&(E(t.data.items),console.log("STATE UPDATE"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){clearTimeout(L)}}),[y,g]),!1===u)return o.a.createElement("div",{className:"MessagesLoader"},o.a.createElement(w.a,{isLoading:!0}));var A=g.map((function(e){return e.recipientId===a?o.a.createElement("div",{key:e.id,className:"section-dialogs-inner-active-message col-sm-6 col-sm-offset-6"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-10 col-centered"},o.a.createElement("div",{className:"section-dialogs-inner-active-message-item center-block"},o.a.createElement("p",{className:"wrapword"},e.body))),o.a.createElement("div",{className:"col-sm-2"},o.a.createElement("div",{className:"section-dialogs-inner-active-message-avatar"},o.a.createElement("img",{className:"rounded-circle",src:t||b.a,alt:""}))))):o.a.createElement("div",{key:e.id,className:"section-dialogs-inner-active-message col-sm-6"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-2"},o.a.createElement("div",{className:"section-dialogs-inner-active-message-avatar"},o.a.createElement("img",{className:"rounded-circle",src:t||b.a,alt:""}))),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("div",{className:"section-dialogs-inner-active-message-item center-block"},o.a.createElement("p",null,e.body)))))}));return o.a.createElement("div",{className:"section-dialogs-inner-active"},A,o.a.createElement(j,{onSubmit:T}))},h=function(e){var a=e.membersList,t=e.instance;if(null===a)return o.a.createElement("div",{className:"MessagesLoader"},o.a.createElement(w.a,{isLoading:!0}));var n=a.map((function(e){return o.a.createElement(g.b,{key:e.id,path:"/home/dialogs/".concat(e.id),render:function(){return o.a.createElement(O,{instance:t,key:e.id,avatar:e.photos.small,id:e.id})}})}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"section-dialogs-inner-active"},n))},k=t(22).create({withCredentials:!0,headers:{"API-KEY":"9832db98-b9d3-460c-9cab-5d06ff193b07"},baseURL:"https://social-network.samuraijs.com/api/1.0/"});a.default=function(){var e=Object(i.useState)([]),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(i.useEffect)((function(){return function(){var e=Object(c.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/dialogs");case 2:200===(a=e.sent).status&&n(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){n([])}}),[]),o.a.createElement(l.a,null,o.a.createElement("div",{className:"section-dialogs"},o.a.createElement("div",{className:"section-dialogs-inner"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement(f,{instance:k})),o.a.createElement(h,{instance:k,membersList:t}))))}}}]);
//# sourceMappingURL=4.af8b33a8.chunk.js.map