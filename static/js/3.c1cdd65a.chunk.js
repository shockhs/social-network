(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[3],{303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){e.exports=a.p+"static/media/facebook.d99368ca.svg"},306:function(e,t,a){e.exports=a.p+"static/media/youtube.e571414b.svg"},307:function(e,t,a){e.exports=a.p+"static/media/twitter.1db9e9c3.svg"},308:function(e,t,a){e.exports=a.p+"static/media/vk.d4b26e2e.svg"},309:function(e,t,a){e.exports=a.p+"static/media/instagram.5b23a837.svg"},310:function(e,t,a){e.exports=a.p+"static/media/website.4e84a27e.svg"},311:function(e,t,a){e.exports=a.p+"static/media/mainlink.e93d5761.svg"},312:function(e,t,a){e.exports=a.p+"static/media/github.192a6620.svg"},313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(21),l=a(22),s=a(24),i=a(23),c=a(25),r=a(0),o=a.n(r),m=a(93),u=(a(303),a(6));function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,l=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(r){l=!0,s=r}finally{try{n||null==c.return||c.return()}finally{if(l)throw s}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a(304);var f=a(53),d=a(305),E=a.n(d),v=a(306),b=a.n(v),g=a(307),N=a.n(g),h=a(308),k=a.n(h),y=a(309),j=a.n(y),O=a(310),S=a.n(O),w=a(311),x=a.n(w),A=a(312),P=a.n(A),F=a(14),I=function(e){var t=e.authStatus,a=e.status,n=e.setUserProfileStatus,l=p(Object(r.useState)(a),2),s=l[0],i=l[1],c=p(Object(r.useState)(!1),2),m=c[0],u=c[1];Object(r.useEffect)((function(){return i(a),function(){i(null)}}),[a]);var f=function(){m&&n(s),u(!m)};return o.a.createElement("div",null,m&&t?o.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:f,value:s}):o.a.createElement("span",{onClick:f},s||"No status here"))},L=a(92),U=Object(F.b)((function(e){return{status:Object(L.g)(e)}}),{setUserProfileStatus:m.f})(I),D=(a(313),a(117)),J=a.n(D),C=function(e){var t=e.photo,a=e.authStatus,n=e.updateUserProfileAvatar;return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:t||J.a,alt:"",className:"img-responsive img-circle"}),a?o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"file-upload",className:"custom-file-upload"},o.a.createElement("span",null,"UPLOAD AVATAR"))," ",o.a.createElement("input",{onChange:function(e){e.target.files.length&&n(e.target.files[0])},id:"file-upload",type:"file"})):null)},T=Object(F.b)((function(e){return{photos:Object(L.f)(e)}}),{updateUserProfileAvatar:m.g})(C),M=function(e){var t=e.profile,a=e.isLoading,n=e.authStatus;return t?o.a.createElement("div",{className:"section-profile-inner-about"},a?o.a.createElement("div",{className:"col-sm-2 col-sm-offset-5"},o.a.createElement(f.a,{isLoading:a})):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 section-profile-inner-about-avatar"},o.a.createElement(T,{authStatus:n,photo:t.photos.large})),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"section-profile-inner-about-description col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-main col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-main-name"},o.a.createElement("h1",null,t.fullName)),o.a.createElement("div",{className:"section-profile-inner-about-description-main-status"},o.a.createElement(U,{authStatus:n}))),o.a.createElement("div",{className:"section-profile-inner-about-description-about col-sm-12"},o.a.createElement("div",{className:"liprofile"},"\u041e\u0431\u043e \u043c\u043d\u0435: "),t.aboutMe?o.a.createElement("h5",null,t.aboutMe):o.a.createElement("h5",null,"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438")),o.a.createElement("div",{className:"section-profile-inner-about-description-job col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-job-looking"},o.a.createElement("div",{className:"liprofile"},"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "),t.lookingForAJob?o.a.createElement("h5",null,"\u0414\u0430"):o.a.createElement("h5",null,"\u041d\u0435\u0442")),t.lookingForAJob?o.a.createElement("div",{className:"section-profile-inner-about-description-job-looking"},o.a.createElement("div",{className:"liprofile"},"\u041a\u0430\u043a\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438\u0449\u0443: "),o.a.createElement("h5",null,t.lookingForAJobDescription)," "):null),o.a.createElement("div",{className:"col-sm-12 section-profile-inner-about-description-contacts"},null===t.contacts.website?o.a.createElement("img",{className:"img-responsive",src:S.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.website},o.a.createElement("img",{className:"img-responsive fill-svg",src:S.a,alt:""}))),null===t.contacts.facebook?o.a.createElement("img",{className:"img-responsive",src:E.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.facebook},o.a.createElement("img",{className:"img-responsive fill-svg",src:E.a,alt:""}))),null===t.contacts.twitter?o.a.createElement("img",{className:"img-responsive",src:N.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.twitter},o.a.createElement("img",{className:"img-responsive fill-svg",src:N.a,alt:""}))),null===t.contacts.youtube?o.a.createElement("img",{className:"img-responsive",src:b.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.youtube},o.a.createElement("img",{className:"img-responsive fill-svg",src:b.a,alt:""}))),null===t.contacts.github?o.a.createElement("img",{className:"img-responsive",src:P.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.github},o.a.createElement("img",{className:"img-responsive fill-svg",src:P.a,alt:""}))),null===t.contacts.instagram?o.a.createElement("img",{className:"img-responsive",src:j.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.instagram},o.a.createElement("img",{className:"img-responsive fill-svg",src:j.a,alt:""}))),null===t.contacts.vk?o.a.createElement("img",{className:"img-responsive",src:k.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.vk},o.a.createElement("img",{className:"img-responsive fill-svg",src:k.a,alt:""}))),null===t.contacts.mainLink?o.a.createElement("img",{className:"img-responsive",src:x.a,alt:""}):o.a.createElement("div",null,o.a.createElement("a",{href:"http://"+t.contacts.mainlink},o.a.createElement("img",{className:"img-responsive fill-svg",src:x.a,alt:""}))))))))):o.a.createElement(f.a,null)},V=a(87),R=(a(314),a(51)),_=a(128),B=a(129),G=a(67),H=Object(R.a)(30),W=Object(B.a)({form:"edit"})((function(e){var t=e.profile,a=e.isLoading,n=e.authStatus,l=e.handleSubmit,s=Object(V.a)(e,["profile","isLoading","authStatus","handleSubmit"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:l},o.a.createElement("div",{className:"section-profile-inner-about"},a?o.a.createElement("div",{className:"col-sm-2 col-sm-offset-5"},o.a.createElement(f.a,{isLoading:a})):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 section-profile-inner-about-avatar"},o.a.createElement(T,{authStatus:n,photo:t.photos.large})),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"section-profile-inner-about-description col-sm-12"},o.a.createElement("div",{className:"section-profile-inner-about-description-main col-sm-12"},o.a.createElement("div",{className:"fullname-style"},o.a.createElement(_.a,{name:"fullName",validate:[R.b,H],value:t.fullName?t.fullName:"",component:G.b,type:"text"})),o.a.createElement("div",{className:"section-profile-inner-about-description-main-status"},o.a.createElement(U,{authStatus:n}))),o.a.createElement("div",{className:"section-profile-inner-about-description-about col-sm-12"},o.a.createElement("div",{className:"style-form-item"},o.a.createElement("div",{className:"edit-liprofile"},"\u041e\u0431\u043e \u043c\u043d\u0435: "),o.a.createElement(_.a,{name:"aboutMe",validate:[H],component:G.b,type:"text"}))),o.a.createElement("div",{className:"section-profile-inner-about-description-job col-sm-12"},o.a.createElement("div",{className:"style-form-item"},o.a.createElement("div",{className:"edit-liprofile"},"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "),o.a.createElement(_.a,{autoFocus:!0,name:"lookingForAJob",validate:[R.b,R.c],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item"},o.a.createElement("div",{className:"liprofile"},"\u041a\u0430\u043a\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438\u0449\u0443: "),o.a.createElement(_.a,{name:"lookingForAJobDescription",validate:[H],component:G.b,type:"text"}))),o.a.createElement("div",{className:"col-sm-12 section-profile-inner-about-description-contacts"},s.error&&o.a.createElement("span",{className:"errorValidation"},s.error),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Website: "),o.a.createElement(_.a,{name:"contacts.website",validate:[R.d],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Facebook: "),o.a.createElement(_.a,{name:"contacts.facebook",validate:[R.d],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Twitter: "),o.a.createElement(_.a,{name:"contacts.twitter",validate:[R.d],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"YouTube: "),o.a.createElement(_.a,{name:"contacts.youtube",validate:[R.d],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"GitHub: "),o.a.createElement(_.a,{name:"contacts.github",validate:[R.d],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Instagram: "),o.a.createElement(_.a,{name:"contacts.instagram",validate:[R.d],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"Vkontakte: "),o.a.createElement(_.a,{name:"contacts.vk",validate:[R.d],component:G.b,type:"text"})),o.a.createElement("div",{className:"style-form-item-social"},o.a.createElement("div",{className:"edit-liprofile"},"MainLink: "),o.a.createElement(_.a,{name:"contacts.mainlink",validate:[R.d],component:G.b,type:"text"})))))))),o.a.createElement("div",{className:"main-button"},o.a.createElement("button",null,"SAVE EDITS"))))})),Y=function(e){var t=e.onSubmit,a=Object(V.a)(e,["onSubmit"]);return o.a.createElement(W,Object.assign({onSubmit:t},a))},q=function(e){var t=e.profile,a=e.saveProfileEdits,n=e.isLoading,l=e.authId,s=p(Object(r.useState)(!1),2),i=s[0],c=s[1];Object(r.useEffect)((function(){return c(i),function(){c(null)}}),[i]);if(!t)return o.a.createElement(f.a,null);var m=l===t.userId;return o.a.createElement(o.a.Fragment,null,i&null!=m?o.a.createElement(Y,{initialValues:t,onSubmit:function(e){e=Object(u.a)({},e,{lookingForAJob:"true"===e.lookingForAJob,contacts:{website:""===e.contacts.website?null:e.contacts.website,facebook:""===e.contacts.facebook?null:e.contacts.facebook,twitter:""===e.contacts.twitter?null:e.contacts.twitter,youtube:""===e.contacts.youtube?null:e.contacts.youtube,github:""===e.contacts.github?null:e.contacts.github,instagram:""===e.contacts.instagram?null:e.contacts.instagram,vk:""===e.contacts.vk?null:e.contacts.vk,mainlink:""===e.contacts.mainlink?null:e.contacts.mainlink}}),a(e).then((function(){c(!i)}))},profile:t,isLoading:n,authStatus:m}):o.a.createElement(o.a.Fragment,null,o.a.createElement(M,{profile:t,isLoading:n,authStatus:m}),m?o.a.createElement("div",{className:"main-button"},o.a.createElement("button",{onClick:function(){c(!i)}},"EDIT PROFILE")):null))},z=(a(315),Object(B.a)({form:"InputForm"})((function(e){var t=e.handleSubmit;return o.a.createElement("form",{onSubmit:t,name:"Post"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("div",{className:"section-profile-inner-posts-form-area"},o.a.createElement(_.a,{name:"postsend",component:"textarea",className:"section-profile-inner-posts-form-area-input",rows:"5"}))),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("div",{className:"section-profile-inner-posts-form-functions"},o.a.createElement("button",{className:"section-profile-inner-posts-form-functions-button"},"Add post")))))}))),K=function(e){var t=e.addPostActionCreater;return o.a.createElement("div",{className:"section-profile-inner-posts"},o.a.createElement("div",{className:"section-profile-inner-posts-form"},o.a.createElement(z,{onSubmit:function(e){t(e.postsend)}})))},Q=Object(F.b)((function(e){return{postsData:Object(L.d)(e)}}),{addPostActionCreater:m.a})(K),X=(a(316),a(317),function(e){var t=e.message,a=e.likes_count;return o.a.createElement("div",{className:"section-profile-inner-posts-elements-item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-2"},o.a.createElement("img",{className:"img-responsive img-circle section-profile-inner-posts-elements-item-avatar-image",src:"https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg",alt:""})),o.a.createElement("div",{className:"col-sm-7"},o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-message"},o.a.createElement("p",null,t))),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-social"},o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-social-counter"},o.a.createElement("span",null,a)),o.a.createElement("div",{className:"section-profile-inner-posts-elements-item-social-buttons"},o.a.createElement("a",{href:"#"},"like"),o.a.createElement("a",{href:"#"},"dislike"))))))}),Z=o.a.memo((function(e){var t=e.postsData.map((function(e){return o.a.createElement(X,{key:e.id,likes_count:e.likesCount,message:e.message})}));return o.a.createElement("div",{className:"section-profile-inner-posts-elements"},t)})),$=Object(F.b)((function(e){return{postsData:Object(L.d)(e)}}))(Z),ee=function(e){var t=e.authId,a=e.saveProfileEdits,n=e.isLoading,l=e.profile;return o.a.createElement("div",{className:"section-profile"},o.a.createElement("div",{className:"section-profile-inner"},o.a.createElement(q,{saveProfileEdits:a,authId:t,isLoading:n,profile:l}),o.a.createElement(Q,null),o.a.createElement($,null)))},te=a(33),ae=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){null!=this.props.match.params.userId?(this.props.getUserProfileStatus(this.props.match.params.userId),this.props.getUserProfile(this.props.match.params.userId)):(this.props.getUserProfileStatus(this.props.authId),this.props.getUserProfile(this.props.authId))}},{key:"render",value:function(){return o.a.createElement(ee,Object.assign({},this.props,{profile:this.props.profile}))}}]),t}(o.a.Component);t.default=Object(F.b)((function(e){return{profile:Object(L.e)(e),authId:Object(L.a)(e),isLoading:Object(L.c)(e)}}),{saveProfileEdits:m.e,getUserProfileStatus:m.d,getUserProfile:m.c})(Object(te.e)(ae))}}]);
//# sourceMappingURL=3.c1cdd65a.chunk.js.map