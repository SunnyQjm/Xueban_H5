(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"253":function(e,t,n){"use strict";n(16);var o=n(3),a=n(30),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(e){function Textarea(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Textarea);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Textarea.__proto__||Object.getPrototypeOf(Textarea)).apply(this,arguments));return e.onChange=e.onChange.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Textarea,o["e"].Component),c(Textarea,[{"key":"onChange","value":function onChange(e){var t=this.props,n=t.onChange,onChange=void 0===n?"":n,o=t.onInput,a=void 0===o?"":o;return Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onChange?onChange&&onChange(e):a?a&&a(e):void 0}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=void 0===t?"":t,c=e.placeholder,i=void 0===c?"":c,l=e.disabled,u=e.maxlength,s=void 0===u?140:u,p=e.autoFocus,d=void 0!==p&&p;return o.e.createElement("textarea",r({},Object(a.a)(this.props,["className","placeholder","disabled","maxlength","onChange","onInput","onFocus","onBlur","autofocus"]),{"className":n,"placeholder":i,"disabled":l,"maxlength":s,"autofocus":d,"onChange":this.onChange,"onFocus":this.onFocus,"onBlur":this.onBlur}))}}]),Textarea}();t.a=i},"575":function(e,t,n){},"629":function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(230),r=n(6),c=n(596),i=n(17),l=n(595),u=n(253),s=n(594),p=n(601),d=n(27),f=n(13),b=n(20),h={},g=n(231),y=(n(575),n(229)),v=n(9),m=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),k=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0},P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var _=function(e){function FeedbackPage(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FeedbackPage);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FeedbackPage.__proto__||Object.getPrototypeOf(FeedbackPage)).call(this,e));return t.config={},t.state={"contact":"","content":""},t.onSendFeedback=t.onSendFeedback.bind(t),t.onContactChange=t.onContactChange.bind(t),t.onContentChange=t.onContentChange.bind(t),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FeedbackPage,b["a"]),m(FeedbackPage,[{"key":"onContentChange","value":function onContentChange(e){this.setState({"content":e.detail.value})}},{"key":"onContactChange","value":function onContactChange(e){this.setState({"contact":e.detail.value})}},{"key":"onSendFeedback","value":function onSendFeedback(){var e=this.state,t=e.contact,n=e.content;n?(v.a.feedBack(n,t).then(function(){b.a.successMessage("反馈成功")}).catch(function(){b.a.errorMessage("反馈失败")}),this.setState({"content":"","contact":""})):b.a.waringMessage("请输入要反馈的内容")}},{"key":"render","value":function render(){var e=y.a.Images,t=e.logo_header,n=e.icon_save,a=this.state,d=a.content,f=a.contact;return o.e.createElement(c.a,null,o.e.createElement(g.b,{"title":"帮助与反馈","leftIconVisible":!0}),o.e.createElement(g.j,{"fullScreen":!0},o.e.createElement(i.a,{"className":"help-and-feedback-header"},o.e.createElement(i.a,{"className":"help-and-feedback-info"},o.e.createElement(l.a,{"className":"help-and-feedback-info-image","src":t}),o.e.createElement(i.a,{"className":"help-and-feedback-info-text"},o.e.createElement(i.a,null,"您的建议，"),o.e.createElement(i.a,null,"是我们不断前进的动力"))),o.e.createElement(i.a,{"className":"help-and-feedback-tip"},"无论是小小的吐槽，还是宝贵的意见，或者是新奇的点子，我们统统接受！")),o.e.createElement(u.a,{"className":"feedback-content","maxlength":200,"style":"margin-top: "+r.a.pxTransform(50),"placeholder":"请输入遇到的问题或建议（可输入200字）","autoHeight":!0,"onInput":this.onContentChange,"value":d}),o.e.createElement(i.a,{"className":"help-and-feedback-concat"},o.e.createElement(s.a,{"className":"help-and-feedback-concat-text"},"联系方式"),o.e.createElement(p.a,{"placeholder":"选填，方便我们联系您","onInput":this.onContactChange,"className":"help-and-feedback-concat-input","value":f}))),o.e.createElement(g.n,{"onClick":this.onSendFeedback.bind(this),"icon":n,"backgroundColor":"#fff"}))}},{"key":"componentDidMount","value":function componentDidMount(){k(FeedbackPage.prototype.__proto__||Object.getPrototypeOf(FeedbackPage.prototype),"componentDidMount",this)&&k(FeedbackPage.prototype.__proto__||Object.getPrototypeOf(FeedbackPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){k(FeedbackPage.prototype.__proto__||Object.getPrototypeOf(FeedbackPage.prototype),"componentDidShow",this)&&k(FeedbackPage.prototype.__proto__||Object.getPrototypeOf(FeedbackPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){k(FeedbackPage.prototype.__proto__||Object.getPrototypeOf(FeedbackPage.prototype),"componentDidHide",this)&&k(FeedbackPage.prototype.__proto__||Object.getPrototypeOf(FeedbackPage.prototype),"componentDidHide",this).call(this)}}]),FeedbackPage}();_.defaultProps={},_=a.a([Object(d.b)(function mapStateToProps(e){return P({},e.FeedbackReducer.toJS())},function mapDispatchToProps(e){return P({},Object(f.b)(h,e))})],_);t.default=_}}]);