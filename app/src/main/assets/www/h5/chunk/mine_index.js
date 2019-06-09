(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"280":function(e,t,n){"use strict";var a=n(2),o=n(19),i=n(8);t.a={"dispatchPreviewQrCode":function dispatchPreviewQrCode(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(i){i({"type":a.a.ROUTER_PARAM.ROUTER_PARAM_PREVIEW_QR_CODE,"data":{"content":e,"tip":t,"description":n}}),o.a.navigateTo(o.a.Pages.QrCodePreviewPage)}},"dispatchGotoCourseDetail":function dispatchGotoCourseDetail(e,t){return function(n){var i={"mode":e};0===e?i.courses=t:2===e&&(i.networkCourses=t),n({"type":a.a.ROUTER_PARAM.ROUTER_PARAM_COURSE_DETAIL,"data":i}),o.a.navigateTo(o.a.Pages.CourseDetailPage)}},"dispatchGoToPostDetail":function dispatchGoToPostDetail(e){return function(t){t({"type":a.a.ROUTER_PARAM.ROUTER_PARAM_POST_DETAIL,"data":e}),o.a.navigateTo(o.a.Pages.SleepTalkDetailPage,{"id":e.id})}},"dispatchGotoNoticeDetail":function dispatchGotoNoticeDetail(e){return function(t){t({"type":a.a.ROUTER_PARAM.ROUTER_PARAM_NOTICE_DETAIL,"data":e}),o.a.navigateTo(o.a.Pages.StuNoticeDetailPage,{"id":e.id})}},"dispatchGoToPersonDetail":function dispatchGoToPersonDetail(e){return function(t){t({"type":a.a.ROUTER_PARAM.ROUTER_PARAM_PERSON_DETAIL,"data":e}),o.a.navigateTo(o.a.Pages.PersonInfoPage,{"userId":e.id,"isOther":!i.a.userInfo||i.a.userInfo.id!==e.id})}},"dispatchPreviewImage":function dispatchPreviewImage(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){n({"type":a.a.ROUTER_PARAM.ROUTER_PARAM_PREVIEW_IMAGES,"data":{"urls":e,"index":t}}),o.a.navigateTo(o.a.Pages.ImagePreviewerPage)}}}},"558":function(e,t,n){},"678":function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(278),i=n(672),r=n(660),c=n(26),s=n(659),l=n(658),u=n(16),d=n(39),m=n(29),p=(n(558),n(277)),h=n(279),f=n(19),g=n(280),P=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e})({},g.a),_=n(8),b=n(40),k=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),M=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in a)return a.value;var i=a.get;return void 0!==i?i.call(n):void 0},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var v=function(e){function MinePage(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MinePage);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MinePage.__proto__||Object.getPrototypeOf(MinePage)).call(this,e));return t.handleHeaderClick=t.handleHeaderClick.bind(t),t.handleConfirm=t.handleConfirm.bind(t),t.onMineMenuItemClick=t.onMineMenuItemClick.bind(t),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MinePage,m["a"]),k(MinePage,[{"key":"onMineMenuItemClick","value":function onMineMenuItemClick(e){var t=this;switch(e){case"mine_collect":f.a.navigateTo(f.a.Pages.MyCollectionPage);break;case"mine_about":f.a.navigateTo(f.a.Pages.AboutPage);break;case"mine_notify":f.a.navigateTo(f.a.Pages.MineNotificationPage);break;case"mine_about_me":f.a.navigateTo(f.a.Pages.MineAboutMePage);break;case"mine_help":f.a.navigateTo(f.a.Pages.FeedbackPage);break;case"mine_exit":Object(i.c)({"title":"退出提示","content":"退出将会清空所有用户数据，确定退出？","success":function success(e){e.confirm&&t.handleConfirm()}})}}},{"key":"handleConfirm","value":function handleConfirm(){var e=this;f.a.redirectTo(f.a.Pages.LoginPage).then(function(){_.a.logout(e.props.dispatch),e.handleOnModalClose()})}},{"key":"componentDidShow","value":function componentDidShow(){_.a.socketIOHelper&&_.a.socketIOHelper.updateTabBarBargeState()}},{"key":"handleHeaderClick","value":function handleHeaderClick(e){_.a.token?this.props.dispatchGoToPersonDetail(e):f.a.redirectTo(f.a.Pages.LoginPage)}},{"key":"render","value":function render(){var e=p.a.Images.icon_mystore,t=p.a.Images.icon_myinfo,n=p.a.Images.mine_function,o=p.a.Images.icon_enter,i=p.a.Images.logo_header,u=p.a.Images,d=u.icon_notification,m=u.icon_subscribe,f=this.props,g=f.personInfo,P=f.showAboutMeRedDot,_=f.showNotificationRedDot;return a.k.createElement(r.a,null,a.k.createElement(h.b,{"title":"我的"}),a.k.createElement(h.j,null,a.k.createElement(c.a,{"id":"mine_header","className":"header-body","onClick":this.onMineMenuItemClick.bind(this,"mine_header")},a.k.createElement(s.a,{"className":"header-body-avatar","src":g&&g.head_img?g.head_img:i,"mode":"aspectFill"}),a.k.createElement(c.a,{"className":"header-info","onClick":this.handleHeaderClick.bind(this,g)},a.k.createElement(l.a,{"className":"header-name"},g&&g.real_name?g.real_name:"游客，点此登录"),a.k.createElement(l.a,{"className":"header-date"},Object(b.f)(this.props.week))),a.k.createElement(s.a,{"className":"header-body-errow","src":o,"mode":"aspectFit"})),a.k.createElement(c.a,{"className":"menu-1"},a.k.createElement(h.w,{"icon":e,"title":"我的收藏","showArrow":!0,"selectedId":"mine_collect","onMenuItemClick":this.onMineMenuItemClick.bind(this,"mine_collect"),"bodyStyle":""}),a.k.createElement(c.a,{"className":"divider-line"}),a.k.createElement(h.w,{"showRedDot":P,"icon":m,"title":"与我相关","showArrow":!0,"selectedId":"mine_about_me","onMenuItemClick":this.onMineMenuItemClick.bind(this,"mine_about_me"),"bodyStyle":""})),a.k.createElement(c.a,{"className":"menu-1"},a.k.createElement(h.w,{"showRedDot":_,"icon":d,"title":"通知","showArrow":!0,"selectedId":"mine_notify","onMenuItemClick":this.onMineMenuItemClick.bind(this,"mine_notify"),"bodyStyle":""})),a.k.createElement(c.a,{"className":"menu-1"},a.k.createElement(h.w,{"icon":t,"title":"关于","showArrow":!0,"selectedId":"mine_about","onMenuItemClick":this.onMineMenuItemClick.bind(this,"mine_about"),"bodyStyle":""}),a.k.createElement(c.a,{"className":"divider-line"}),a.k.createElement(h.w,{"icon":n,"title":"帮助与反馈","showArrow":!0,"selectedId":"mine_help","onMenuItemClick":this.onMineMenuItemClick.bind(this,"mine_help"),"bodyStyle":""}),a.k.createElement(c.a,{"className":"menu-1"},a.k.createElement(c.a,{"className":"mine-exit","id":"mine_exit","onClick":this.onMineMenuItemClick.bind(this,"mine_exit")},"退出")))))}},{"key":"componentDidMount","value":function componentDidMount(){M(MinePage.prototype.__proto__||Object.getPrototypeOf(MinePage.prototype),"componentDidMount",this)&&M(MinePage.prototype.__proto__||Object.getPrototypeOf(MinePage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){M(MinePage.prototype.__proto__||Object.getPrototypeOf(MinePage.prototype),"componentDidHide",this)&&M(MinePage.prototype.__proto__||Object.getPrototypeOf(MinePage.prototype),"componentDidHide",this).call(this)}}]),MinePage}();v=o.a([Object(d.b)(function mapStateToProps(e){return y({},e.MineReducer.toJS())},function mapDispatchToProps(e){return y({},Object(u.b)(P,e))})],v);t.default=v}}]);