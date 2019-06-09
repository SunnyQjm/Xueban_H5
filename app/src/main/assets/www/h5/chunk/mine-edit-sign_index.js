(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"300":function(e,t,n){"use strict";n(21);var o=n(3),r=n(42),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var u=function(e){function Textarea(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Textarea);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Textarea.__proto__||Object.getPrototypeOf(Textarea)).apply(this,arguments));return e.onChange=e.onChange.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Textarea,o["k"].Component),i(Textarea,[{"key":"onChange","value":function onChange(e){var t=this.props,n=t.onChange,onChange=void 0===n?"":n,o=t.onInput,r=void 0===o?"":o;return Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onChange?onChange&&onChange(e):r?r&&r(e):void 0}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=void 0===t?"":t,i=e.placeholder,u=void 0===i?"":i,c=e.disabled,l=e.maxlength,p=void 0===l?140:l,s=e.autoFocus,d=void 0!==s&&s;return o.k.createElement("textarea",a({},Object(r.a)(this.props,["className","placeholder","disabled","maxlength","onChange","onInput","onFocus","onBlur","autofocus"]),{"className":n,"placeholder":u,"disabled":c,"maxlength":p,"autofocus":d,"onChange":this.onChange,"onFocus":this.onFocus,"onBlur":this.onBlur}))}}]),Textarea}();t.a=u},"633":function(e,t,n){},"696":function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(278),a=n(660),i=n(300),u=n(39),c=n(16),l=n(29),p=n(8),s=n(2),d={"dispatchUpdateSign":function dispatchUpdateSign(e){return function(t){return new Promise(function(n,o){t({"type":s.a.GLOBAL.UPDATE_SIGN_BEGIN}),p.a.updateSign(e).then(function(o){t({"type":s.a.GLOBAL.UPDATE_SIGN_SUCCESS,"data":e}),n(o)}).catch(function(e){t({"type":s.a.GLOBAL.UPDATE_SIGN_FAIL}),o(e)})})}}},f=n(279),g=(n(633),n(277)),h=n(19),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),y=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var P=function(e){function EditSignPage(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EditSignPage);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EditSignPage.__proto__||Object.getPrototypeOf(EditSignPage)).call(this,e));return t.config={},t.state={"value":""},t.handleInputChange=t.handleInputChange.bind(t),t.handleOnEditSign=t.handleOnEditSign.bind(t),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EditSignPage,l["a"]),b(EditSignPage,[{"key":"handleInputChange","value":function handleInputChange(e){this.setState({"value":e.detail.value})}},{"key":"handleOnEditSign","value":function handleOnEditSign(){this.state.value?this.props.dispatchUpdateSign(this.state.value).then(function(){h.a.navigateBack()}).catch(function(e){l.a.errorMessage("更新签名失败"),console.log(e)}):l.a.normalMessage("签名内容不能为空")}},{"key":"render","value":function render(){var e=this.state.value,t=g.a.Images.icon_save;return o.k.createElement(a.a,null,o.k.createElement(f.b,{"title":"设置签名","leftIconVisible":!0}),o.k.createElement(f.j,{"fullScreen":!0},o.k.createElement(i.a,{"placeholder":"说点什么吧...","className":"mine-edit-sign-text-area","autoFocus":!0,"autoHeight":!0,"onInput":this.handleInputChange,"value":e}),o.k.createElement(f.n,{"onClick":this.handleOnEditSign,"icon":t,"backgroundColor":"#fff"})))}},{"key":"componentDidMount","value":function componentDidMount(){y(EditSignPage.prototype.__proto__||Object.getPrototypeOf(EditSignPage.prototype),"componentDidMount",this)&&y(EditSignPage.prototype.__proto__||Object.getPrototypeOf(EditSignPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){y(EditSignPage.prototype.__proto__||Object.getPrototypeOf(EditSignPage.prototype),"componentDidShow",this)&&y(EditSignPage.prototype.__proto__||Object.getPrototypeOf(EditSignPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){y(EditSignPage.prototype.__proto__||Object.getPrototypeOf(EditSignPage.prototype),"componentDidHide",this)&&y(EditSignPage.prototype.__proto__||Object.getPrototypeOf(EditSignPage.prototype),"componentDidHide",this).call(this)}}]),EditSignPage}();P.defaultProps={},P=r.a([Object(u.b)(function mapStateToProps(e){return v({},e.EditSignReducer.toJS())},function mapDispatchToProps(e){return v({},Object(c.b)(d,e))})],P);t.default=P}}]);