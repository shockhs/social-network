(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[3],{313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){e.exports=a.p+"static/media/facebook.d99368ca.svg"},316:function(e,t,a){e.exports=a.p+"static/media/youtube.e571414b.svg"},317:function(e,t,a){e.exports=a.p+"static/media/twitter.1db9e9c3.svg"},318:function(e,t,a){e.exports=a.p+"static/media/vk.d4b26e2e.svg"},319:function(e,t,a){e.exports=a.p+"static/media/instagram.5b23a837.svg"},320:function(e,t,a){e.exports=a.p+"static/media/website.4e84a27e.svg"},321:function(e,t,a){e.exports=a.p+"static/media/mainlink.e93d5761.svg"},322:function(e,t,a){e.exports=a.p+"static/media/github.192a6620.svg"},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(23),s=a(24),i=a(26),l=a(25),c=a(0),o=a.n(c),r=a(93),m=(a(313),a(6)),u=a(91),d=(a(314),a(54)),p=a(315),f=a.n(p),E=a(316),b=a.n(E),v=a(317),g=a.n(v),N=a(318),h=a.n(N),k=a(319),j=a.n(k),O=a(320),y=a.n(O),w=a(321),P=a.n(w),S=a(322),I=a.n(S),x=a(13),F=function(e){var t=e.authStatus,a=e.status,n=e.setUserProfileStatus,s=Object(c.useState)(a),i=Object(u.a)(s,2),l=i[0],r=i[1],m=Object(c.useState)(!1),d=Object(u.a)(m,2),p=d[0],f=d[1];Object(c.useEffect)((function(){return r(a),function(){r(null)}}),[a]);var E=function(){p&&n(l),f(!p)};return o.a.createElement("div",null,p&&t?o.a.createElement("input",{onChange:function(e){r(e.currentTarget.value)},autoFocus:!0,onBlur:E,value:l}):o.a.createElement("span",{onClick:E},l||"No status here"))},D=a(92),A=Object(x.b)((function(e){return{status:Object(D.g)(e)}}),{setUserProfileStatus:r.i})(F),L=a(5),M=a.n(L),C=a(10),U=(a(323),a(94)),J=a.n(U),T=a(33),V=function(e){var t=e.photo,a=e.authStatus,n=e.updateUserProfileAvatar,s=e.id,i=e.addNewDialogsMember,l=Object(c.useState)(!1),r=Object(u.a)(l,2),m=r[0],d=r[1],p=function(){var e=Object(C.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(s);case 2:d(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:t||J.a,alt:"",className:"img-responsive img-circle"}),a?o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"file-upload",className:"custom-file-upload"},o.a.createElement("span",null,"UPLOAD AVATAR"))," ",o.a.createElement("input",{onChange:function(e){e.target.files.length&&n(e.target.files[0])},id:"file-upload",type:"file"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:p,className:"custom-send-message"},"send message")),m?o.a.createElement(T.a,{to:"/home/dialogs"}):null)},R=Object(x.b)((function(e){return{photos:Object(D.f)(e)}}),{updateUserProfileAvatar:r.j})(V),_=function(e){var t=e.profile,a=e.isLoading,n=e.authStatus,s=e.addNewDialogsMember;return t?o.a.createElement("div",{className:"section-profile-inner-about"},a?o.a.createElement("div",{className:"col-sm-2 col-sm-offset-5"},o.a.createElement(d.a,{isLoading:a})):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 section-profile-inner-about-avatar"},o.a.createElement(R,{addNewDialogsMember:s,id:t.userId,authStatus:n,photo:t.photos.large})),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"section-profile-inner-about-description col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-main col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-main-name"},o.a.createElement("h1",null,t.fullName)),o.a.createElement("div",{className:"section-profile-inner-about-description-main-status"},o.a.createElement(A,{authStatus:n}))),o.a.createElement("div",{className:"section-profile-inner-about-description-about col-sm-12"},o.a.createElement("div",{className:"liprofile"},"\u041e\u0431\u043e \u043c\u043d\u0435: "),t.aboutMe?o.a.createElement("h5",null,t.aboutMe):o.a.createElement("h5",null,"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438")),o.a.createElement("div",{className:"section-profile-inner-about-description-job col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-job-looking"},o.a.createElement("div",{className:"liprofile"},"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "),t.lookingForAJob?o.a.createElement("h5",null,"\u0414\u0430"):o.a.createElement("h5",null,"\u041d\u0435\u0442")),t.lookingForAJob?o.a.createElement("div",{className:"section-profile-inner-about-description-job-looking"},o.a.createElement("div",{className:"liprofile"},"\u041a\u0430\u043a\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438\u0449\u0443: "),o.a.createElement("h5",null,t.lookingForAJobDescription)," "):null),o.a.createElement("div",{className:"col-sm-12 section-profile-inner-about-description-contacts"},null===t.contacts.website?o.a.createElement("img",{className:"img-responsive",src:y.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.website},o.a.createElement("img",{className:"img-responsive fill-svg",src:y.a,alt:""}))),null===t.contacts.facebook?o.a.createElement("img",{className:"img-responsive",src:f.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.facebook},o.a.createElement("img",{className:"img-responsive fill-svg",src:f.a,alt:""}))),null===t.contacts.twitter?o.a.createElement("img",{className:"img-responsive",src:g.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.twitter},o.a.createElement("img",{className:"img-responsive fill-svg",src:g.a,alt:""}))),null===t.contacts.youtube?o.a.createElement("img",{className:"img-responsive",src:b.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.youtube},o.a.createElement("img",{className:"img-responsive fill-svg",src:b.a,alt:""}))),null===t.contacts.github?o.a.createElement("img",{className:"img-responsive",src:I.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.github},o.a.createElement("img",{className:"img-responsive fill-svg",src:I.a,alt:""}))),null===t.contacts.instagram?o.a.createElement("img",{className:"img-responsive",src:j.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.instagram},o.a.createElement("img",{className:"img-responsive fill-svg",src:j.a,alt:""}))),null===t.contacts.vk?o.a.createElement("img",{className:"img-responsive",src:h.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.vk},o.a.createElement("img",{className:"img-responsive fill-svg",src:h.a,alt:""}))),null===t.contacts.mainLink?o.a.createElement("img",{className:"img-responsive",src:P.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.mainlink},o.a.createElement("img",{className:"img-responsive fill-svg",src:P.a,alt:""}))))))))):o.a.createElement(d.a,null)},B=a(86),G=(a(324),a(52)),H=a(127),W=a(128),Y=a(67),q=Object(G.a)(30),z=Object(W.a)({form:"edit"})((function(e){var t=e.profile,a=e.isLoading,n=e.authStatus,s=e.handleSubmit,i=Object(B.a)(e,["profile","isLoading","authStatus","handleSubmit"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:s},o.a.createElement("div",{className:"section-profile-inner-about"},a?o.a.createElement("div",{className:"col-sm-2 col-sm-offset-5"},o.a.createElement(d.a,{isLoading:a})):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 section-profile-inner-about-avatar"},o.a.createElement(R,{authStatus:n,photo:t.photos.large})),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"section-profile-inner-about-description col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-main col-sm-12"},o.a.createElement("div",{className:"fullname-style"},o.a.createElement(H.a,{name:"fullName",validate:[G.b,q],component:Y.b,type:"text"})),o.a.createElement("div",{className:"section-profile-inner-about-description-main-status"},o.a.createElement(A,{authStatus:n}))),o.a.createElement("div",{className:"section-profile-inner-about-description-about col-sm-12"},o.a.createElement("div",{className:"style-form-item"},o.a.createElement("div",{className:"edit-liprofile"},"\u041e\u0431\u043e \u043c\u043d\u0435: "),o.a.createElement(H.a,{name:"aboutMe",validate:[q],component:Y.b,type:"text"}))),o.a.createElement("div",{className:"section-profile-inner-about-description-job col-sm-12"},o.a.createElement("div",{className:"style-form-item"},o.a.createElement("div",{className:"edit-liprofile"},"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "),o.a.createElement(H.a,{autoFocus:!0,name:"lookingForAJob",validate:[G.b,G.c],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item"},o.a.createElement("div",{className:"liprofile"},"\u041a\u0430\u043a\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438\u0449\u0443: "),o.a.createElement(H.a,{name:"lookingForAJobDescription",validate:[q],component:Y.b,type:"text"}))),o.a.createElement("div",{className:"col-sm-12 section-profile-inner-about-description-contacts"},i.error&&o.a.createElement("span",{className:"errorValidation"},i.error),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Website: "),o.a.createElement(H.a,{name:"contacts.website",validate:[G.d],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Facebook: "),o.a.createElement(H.a,{name:"contacts.facebook",validate:[G.d],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Twitter: "),o.a.createElement(H.a,{name:"contacts.twitter",validate:[G.d],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"YouTube: "),o.a.createElement(H.a,{name:"contacts.youtube",validate:[G.d],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"GitHub: "),o.a.createElement(H.a,{name:"contacts.github",validate:[G.d],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Instagram: "),o.a.createElement(H.a,{name:"contacts.instagram",validate:[G.d],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Vkontakte: "),o.a.createElement(H.a,{name:"contacts.vk",validate:[G.d],component:Y.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"MainLink: "),o.a.createElement(H.a,{name:"contacts.mainlink",validate:[G.d],component:Y.b,type:"text"})))))))),o.a.createElement("div",{className:"main-button"},o.a.createElement("button",null,"SAVE EDITS"))))})),K=function(e){var t=e.onSubmit,a=Object(B.a)(e,["onSubmit"]);return o.a.createElement(z,Object.assign({onSubmit:t},a))},Q=function(e){var t=e.profile,a=e.saveProfileEdits,n=e.isLoading,s=e.authId,i=e.addNewDialogsMember,l=Object(c.useState)(!1),r=Object(u.a)(l,2),p=r[0],f=r[1];Object(c.useEffect)((function(){return f(p),function(){f(null)}}),[p]);if(!t)return o.a.createElement(d.a,null);var E=s===t.userId;return o.a.createElement(o.a.Fragment,null,p&null!=E?o.a.createElement(K,{initialValues:t,onSubmit:function(e){e=Object(m.a)({},e,{lookingForAJob:"true"===e.lookingForAJob,contacts:{website:""===e.contacts.website?null:e.contacts.website,facebook:""===e.contacts.facebook?null:e.contacts.facebook,twitter:""===e.contacts.twitter?null:e.contacts.twitter,youtube:""===e.contacts.youtube?null:e.contacts.youtube,github:""===e.contacts.github?null:e.contacts.github,instagram:""===e.contacts.instagram?null:e.contacts.instagram,vk:""===e.contacts.vk?null:e.contacts.vk,mainlink:""===e.contacts.mainlink?null:e.contacts.mainlink}}),a(e).then((function(){f(!p)}))},profile:t,isLoading:n,authStatus:E}):o.a.createElement(o.a.Fragment,null,o.a.createElement(_,{addNewDialogsMember:i,profile:t,isLoading:n,authStatus:E}),E?o.a.createElement("div",{className:"main-button"},o.a.createElement("button",{onClick:function(){f(!p)}},"EDIT PROFILE")):null))},X=(a(325),Object(W.a)({form:"InputForm"})((function(e){var t=e.handleSubmit;e.post;return o.a.createElement("form",{onSubmit:t},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("div",{className:"section-profile-inner-posts-form-area"},o.a.createElement(H.a,{name:"postsend",component:"textarea",className:"section-profile-inner-posts-form-area-input",rows:"5"}))),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("div",{className:"section-profile-inner-posts-form-functions"},o.a.createElement("button",{className:"section-profile-inner-posts-form-functions-button"},"Add post")))))}))),Z=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){setTimeout((function(){s(!1)}),1e3)}),[n]);return o.a.createElement(o.a.Fragment,null,n?o.a.createElement("div",{className:"section-users-elements-status"},o.a.createElement(d.a,{isLoading:!0})):o.a.createElement("div",{className:"section-profile-inner-posts"},o.a.createElement("div",{className:"section-profile-inner-posts-form"},o.a.createElement(X,{initialValues:{postsend:""},onSubmit:function(t){e.addPostActionCreater(t.postsend),s(!0)}}))))},$=Object(x.b)((function(e){return{postsData:Object(D.d)(e)}}),{addPostActionCreater:r.a})(Z),ee=(a(326),a(327),function(e){var t=e.message,a=e.likes_count,n=e.authId,s=e.blockedId,i=e.postId,l=e.dislikePost,c=e.likePost,r=e.deletePost,m=function(){s.includes(n)?l(i,n):c(i,n)};return o.a.createElement("div",{className:"section-profile-inner-posts-elements-item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-2"},o.a.createElement("img",{className:"img-responsive img-circle section-profile-inner-posts-elements-item-avatar-image",src:J.a,alt:""})),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-message"},o.a.createElement("p",null,t))),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-social"},o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-social-counter"},o.a.createElement("span",null,a)),o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-social-buttons"},s.includes(n)?o.a.createElement("button",{onClick:m,className:"section-profile-inner-posts-form-functions-button dislike"},"Dislike"):o.a.createElement("button",{onClick:m,className:"section-profile-inner-posts-form-functions-button like"},"Like"),o.a.createElement("button",{onClick:function(){r(i)},className:"section-profile-inner-posts-form-functions-button delete"},"Delete"))))))}),te=o.a.memo((function(e){var t=e.postsData,a=e.likePost,n=e.authId,s=e.dislikePost,i=e.deletePost,l=t.map((function(e){return o.a.createElement(ee,{key:e.id,authId:n,blockedId:e.blockedId,postId:e.id,likePost:a,dislikePost:s,deletePost:i,likes_count:e.likesCount,message:e.message})}));return o.a.createElement("div",{className:"section-profile-inner-posts-elements"},l)})),ae=Object(x.b)((function(e){return{postsData:Object(D.d)(e),authId:e.authPage.isAuth}}),{likePost:r.g,dislikePost:r.d,deletePost:r.c})(te),ne=function(e){var t=e.authId,a=e.saveProfileEdits,n=e.addNewDialogsMember,s=e.isLoading,i=e.profile;e.dislikePost,e.likePost;return o.a.createElement("div",{className:"section-profile"},o.a.createElement("div",{className:"section-profile-inner"},o.a.createElement(Q,{addNewDialogsMember:n,saveProfileEdits:a,authId:t,isLoading:s,profile:i}),o.a.createElement($,null),o.a.createElement(ae,null)))},se=a(130),ie=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){null!=this.props.match.params.userId?(this.props.getUserProfileStatus(this.props.match.params.userId),this.props.getUserProfile(this.props.match.params.userId)):(this.props.getUserProfileStatus(this.props.authId),this.props.getUserProfile(this.props.authId))}},{key:"render",value:function(){return o.a.createElement(ne,Object.assign({},this.props,{profile:this.props.profile}))}}]),a}(o.a.Component);t.default=Object(x.b)((function(e){return{profile:Object(D.e)(e),authId:Object(D.a)(e),isLoading:Object(D.c)(e)}}),{saveProfileEdits:r.h,addNewDialogsMember:se.a,getUserProfileStatus:r.f,getUserProfile:r.e})(Object(T.f)(ie))}}]);
//# sourceMappingURL=3.e2a1d34f.chunk.js.map