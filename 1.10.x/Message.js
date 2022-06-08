(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[32],{1367:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(561),i=n(563),a=n(41),c=n(1368),u=n.n(c),l=n(1369),f=n.n(l),h=Object(a.b)(u.a,f.a),p=[{name:"1-base",title:Object(a.b)("基本用法 \n Message 封装了一组全局函数，方便在任意地方调用，包括常规（不带/带icon）、Success、Warn、Error和关闭所有消息提醒。","Base \n Message has 6 static functions that are convenient to call anywhere, includes normal(with/without icon)、success、warn、error and close all messages"),component:n(1370).default,rawText:n(1371)},{name:"2-duration",title:Object(a.b)("显示时长 \n 通过 duration 属性可以控制消息显示的时长，默认为3秒；当设定为 0s 时，则需要用户手动关闭 Message","Duration \n Set duration property to control the duration of the message display. The default value is 3 seconds. \n When duration is set to 0, the message will not hide automatically."),component:n(1372).default,rawText:n(1373)},{name:"3-position",title:Object(a.b)("弹出位置 \n 设置 positoin 参数，修改显示位置，可以实现消息提醒展示位置，可选值：top, middle, top-left, top-right, bottom-left, bottom-right。","Notification \n Set position property to specify the pop-up layer location, optional value: top, middle, top-left, top-right, bottom-left, bottom-right."),component:n(1374).default,rawText:n(1375)},{name:"4-close",title:Object(a.b)("关闭回调 \n 通过第三个参数[options]的 onClose 属性处理消息关闭回调。以下用例将在 Message 关闭后弹出新的 Message。","Close \n Set onClose to handle close event."),component:n(1376).default,rawText:n(1377)},{name:"5-manual-close",title:Object(a.b)("手动关闭 \n Message 会异步返回一个关闭函数，调用它来关闭当前 Messsage","Close \n Message return close func async"),component:n(1378).default,rawText:n(1379)}];e.default=Object(s.a)(function(t){return r.a.createElement(i.b,Object.assign({},t,{codes:void 0,source:h,examples:p}))})},1368:function(t,e){t.exports="# Message 消息\n\n可用来展示操作反馈信息。\n\n- 为**成功**、**警告**、**错误**和**常规**信息展示。\n- 是一种轻量级、多位置展示和可自定义时间消失，且带有沉浸式交互体验的组件。\n\n<example />\n\n## API \n\n### Message\n\nMessage 提供了一组方法供全局调用\n\nMessage.show(content, \\[duration], \\[options])  // 不带有icon，纯 Message 展示\n\nMessage.info(content, \\[duration], \\[options])    // 带有基础样式和icon\n\nMessage.success(content, \\[duration], \\[options])\n\nMessage.warn(content, \\[duration], \\[options])\n\nMessage.error(content, \\[duration], \\[options])\n\nMessage.close() // 关闭所有消息\n\nMessage.setOptions() // 设置默认选项，优先级低于实际调用时的选项\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | ReactNode | 必填 | 消息内容 |\n| duration | number | 3 | 消息持续时间，单位秒；如果设置为 0，必须手动关闭 |\n\n\n### MessageOptions\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| onClose | function | 无 | 关闭后回调事件 |\n| position | string | top | 消息显示的位置，可选值 \\['top', 'middle', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] |\n| title | string | - | 标题文字 |\n| className | string | 无 | 类名 |\n| hideClose | boolean | false | 是否隐藏关闭按钮 |"},1369:function(t,e){t.exports="# Message\n\nDisplay message about operational feedback.\n\n- Displays **success**, **warnings**, **errors**, and **general** information\n- It is an immersive interactive experience that is lightweight, multi-location, and customizable.\n\n<example />\n\n## API \n\n### Message\n\nMessage provides a set of methods for global calls\n\nMessage.show(content, \\[duration], \\[options]) // No icon, pure message display\n\nMessage.info(content, \\[duration], \\[options])  // With basic style and icon\n\nMessage.success(content, \\[duration], \\[options])\n\nMessage.warn(content, \\[duration], \\[options])\n\nMessage.error(content, \\[duration], \\[options])\n\nMessage.close() // Close all messages\n\nMessage.setOptions() // set global options, priority is lower than the actual call option\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| content | ReactNode | required | The message content |\n| duration | number | 3 | Message duration, unit: s; If it is set to 0, it must be manually closed. |\n\n\n### MessageOptions\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| onClose | function | none | The callback function when the message is closed. |\n| position | string | 'top' | The position where the message display, options: \\['top', 'middle', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] |\n| title | string | | title |\n| className | string | none | class name |\n| hideClose | boolean | false | hide close button |"},1370:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(67),i=n(303);e.default=function(){return r.a.createElement("div",null,r.a.createElement(s.a,{onClick:function(){i.a.show("Some message.")}},"Show"),r.a.createElement(s.a,{onClick:function(){i.a.info("This is a message of info.")}},"Info"),r.a.createElement(s.a,{onClick:function(){i.a.success("This is a message of success.")}},"Success"),r.a.createElement(s.a,{onClick:function(){i.a.warn("This is a message of warning.")}},"Warn"),r.a.createElement(s.a,{onClick:function(){i.a.error("This is a message of error.")}},"Error"),r.a.createElement(s.a,{onClick:function(){i.a.close()}},"Close All"))}},1371:function(t,e){t.exports="/**\n * cn - 基本用法\n *    -- Message 封装了一组全局函数，方便在任意地方调用，包括常规（不带/带icon）、Success、Warn、Error和关闭所有消息提醒。\n * en - Base\n *    -- Message has 6 static functions that are convenient to call anywhere, includes normal(with/without icon)、success、warn、error and close all messages\n */\nimport React from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Message.show('Some message.')\n        }}\n      >\n        Show\n      </Button>\n      <Button\n        onClick={() => {\n          Message.info('This is a message of info.')\n        }}\n      >\n        Info\n      </Button>\n      <Button\n        onClick={() => {\n          Message.success('This is a message of success.')\n        }}\n      >\n        Success\n      </Button>\n      <Button\n        onClick={() => {\n          Message.warn('This is a message of warning.')\n        }}\n      >\n        Warn\n      </Button>\n      <Button\n        onClick={() => {\n          Message.error('This is a message of error.')\n        }}\n      >\n        Error\n      </Button>\n\n      <Button\n        onClick={() => {\n          Message.close()\n        }}\n      >\n        Close All\n      </Button>\n    </div>\n  )\n}\n"},1372:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(303),i=n(67),a=function(){return s.a.info("This message will close after 10 seconds.",10)},c=function(){return s.a.error("This message will not close utill click the close icon.",0)};e.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{onClick:a},"Duration 10 s."),r.a.createElement(i.a,{onClick:c},"Manually close"))}},1373:function(t,e){t.exports="/**\n * cn - 显示时长\n *    -- 通过 duration 属性可以控制消息显示的时长，默认为3秒；当设定为 0s 时，则需要用户手动关闭 Message\n * en - Duration\n *    -- Set duration property to control the duration of the message display. The default value is 3 seconds.\n *    -- When duration is set to 0, the message will not hide automatically.\n */\nimport React from 'react'\nimport { Button, Message } from 'shineout'\n\nconst s10 = () => Message.info('This message will close after 10 seconds.', 10)\nconst s0 = () => Message.error('This message will not close utill click the close icon.', 0)\n\nexport default function () {\n  return (\n    <div>\n      <Button onClick={s10}>Duration 10 s.</Button>\n      <Button onClick={s0}>Manually close</Button>\n    </div>\n  )\n}\n"},1374:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return m});var r=n(4),s=n(5),i=n(6),a=n(7),c=n(2),o=n(0),u=n.n(o),l=n(303),f=n(201),h=n(67);function p(o){return function(){var t,e=Object(c.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(c.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(a.a)(this,t)}}var m=function(t){Object(i.a)(o,t);var n=p(o);function o(t){var e;return Object(r.a)(this,o),(e=n.call(this,t)).setPosition=function(t){return e.setState({position:t})},e.show=function(){l.a.info(u.a.createElement("div",{style:{width:240}},"some message."),3,{position:e.state.position,title:"notify title"})},e.state={position:"top-right"},e}return Object(s.a)(o,[{key:"render",value:function(){return u.a.createElement("div",null,"position:",u.a.createElement(f.a,{keygen:!0,data:["top","middle","top-left","top-right","bottom-left","bottom-right"],onChange:this.setPosition,value:this.state.position,width:200,style:{margin:"0 20px"}}),u.a.createElement(h.a,{onClick:this.show},"Show message."))}}]),o}(u.a.Component)},1375:function(t,e){t.exports="/**\n * cn - 弹出位置\n *    -- 设置 positoin 参数，修改显示位置，可以实现消息提醒展示位置，可选值：top, middle, top-left, top-right, bottom-left, bottom-right。\n * en - Notification\n *    -- Set position property to specify the pop-up layer location, optional value: top, middle, top-left, top-right, bottom-left, bottom-right.\n */\nimport React from 'react'\nimport { Button, Message, Select } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { position: 'top-right' }\n  }\n\n  setPosition = position => this.setState({ position })\n\n  show = () => {\n    Message.info(<div style={{ width: 240 }}>some message.</div>, 3, {\n      position: this.state.position,\n      title: 'notify title',\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        position:\n        <Select\n          keygen\n          data={['top', 'middle', 'top-left', 'top-right', 'bottom-left', 'bottom-right']}\n          onChange={this.setPosition}\n          value={this.state.position}\n          width={200}\n          style={{ margin: '0 20px' }}\n        />\n        <Button onClick={this.show}>Show message.</Button>\n      </div>\n    )\n  }\n}\n"},1376:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(303),i=n(67);e.default=function(){return r.a.createElement(i.a,{onClick:function(){s.a.warn("Close this message will display another message.",0,{onClose:function(){s.a.info("You can close the message now.")}})}},"Close callback")}},1377:function(t,e){t.exports="/**\n * cn - 关闭回调\n *    -- 通过第三个参数[options]的 onClose 属性处理消息关闭回调。以下用例将在 Message 关闭后弹出新的 Message。\n * en - Close\n *    -- Set onClose to handle close event.\n */\nimport React from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function() {\n  const close = () => {\n    Message.warn('Close this message will display another message.', 0, {\n      onClose: () => {\n        Message.info('You can close the message now.')\n      },\n    })\n  }\n\n  return <Button onClick={close}>Close callback</Button>\n}\n"},1378:function(t,e,n){"use strict";n.r(e);var o=n(571),r=n.n(o),s=n(572),i=n(0),a=n.n(i),c=n(303),u=n(67);e.default=function(){var t=function(){var t=Object(s.a)(r.a.mark(function t(){var e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.success(a.a.createElement("div",null,"I will always show until",a.a.createElement("a",{onClick:function(){return e()}}," manually closed")),0);case 2:e=t.sent;case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return a.a.createElement(u.a,{onClick:t},"Manual Close")}},1379:function(t,e){t.exports="/**\n * cn - 手动关闭\n *    -- Message 会异步返回一个关闭函数，调用它来关闭当前 Messsage\n * en - Close\n *    -- Message return close func async\n */\nimport React from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default () => {\n  const msg = async () => {\n    const close = await Message.success(\n      <div>\n        I will always show until\n        <a onClick={() => close()}> manually closed</a>\n      </div>,\n      0\n    )\n  }\n  return <Button onClick={msg}>Manual Close</Button>\n}\n"},303:function(t,e,n){"use strict";var o=n(0),h=n.n(o),r=n(46),s=n.n(r),p=n(110),i=n(4),a=n(5),c=n(1),u=n(6),l=n(7),f=n(2),m=n(42),d=n(17),g=n(123),y=n(21);function v(o){return function(){var t,e=Object(f.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(f.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(l.a)(this,t)}}var w=function(t){Object(u.a)(o,t);var n=v(o);function o(t){var e;return Object(i.a)(this,o),(e=n.call(this,t)).state={messages:[]},e.removeMessage=e.removeMessage.bind(Object(c.a)(e)),e.handleClassName=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"top",e=1<arguments.length?arguments[1]:void 0;return Object(p.a)("item","item-".concat(e?"dismissed":"show","-").concat(t))},e.handleStyle=function(t,e,n){if(!t||null==e)return null;var o={};switch(n){case"bottom-right":case"bottom-left":break;default:o={zIndex:-1,opacity:0,marginTop:-e}}return o},e}return Object(a.a)(o,[{key:"addMessage",value:function(e){var t=this,n=Object(y.c)();return this.setState(Object(m.a)(function(t){t.messages.push(Object.assign({id:n},e))})),0<e.duration&&setTimeout(function(){t.setState(Object(m.a)(function(t){t.messages.forEach(function(t){t.id===n&&(t.dismiss=!0)})}))},1e3*e.duration),this.closeMessageForAnimation.bind(this,n,200,200)}},{key:"removeMessage",value:function(e){var n,t=this.state.messages.filter(function(t){return t.id!==e||(t.onClose&&(n=t.onClose),!1)});0===t.length?this.props.onDestory():this.setState({messages:t}),n&&n()}},{key:"closeMessageForAnimation",value:function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var r=n[0],s=n[1],i=n[2];s?(this.setState(Object(m.a)(function(t){t.messages.forEach(function(t){t.id===r&&(t.dismiss=!0,t.h=i+20)})})),setTimeout(function(){t.removeMessage(r)},s)):this.removeMessage(r)}},{key:"closeEvent",value:function(t,e){if(0===e)return this.removeMessage.bind(this,t)}},{key:"render",value:function(){var f=this;return[this.state.messages.map(function(t){var e=t.id,n=t.type,o=t.content,r=t.dismiss,s=t.h,i=t.title,a=t.top,c=t.className,u=t.position,l=t.hideClose;return h.a.createElement("div",{key:e,className:"".concat(f.handleClassName(u,r)," ").concat(c),style:f.handleStyle(r,s,u)},h.a.createElement(g.a,{outAnimation:!0,className:Object(p.a)("msg"),dismiss:r,hideClose:l,onClose:f.closeMessageForAnimation.bind(f,e),icon:!0,iconSize:i?20:14,style:{top:a},type:n},i&&h.a.createElement("h3",null,i),o))})]}}]),o}(d.b);w.displayName="ShineoutMessage";var b=w,M={},C={};function x(t){M[t]&&(s.a.unmountComponentAtNode(M[t]),document.body.removeChild(M[t]),delete M[t]),C[t]&&delete C[t]}function E(r){return new Promise(function(e){var t,n,o=C[r];o?e(o):s.a.render(h.a.createElement(b,{ref:function(t){C[r]=t,e(t)},onDestory:x.bind(null,r)}),(t=r,(n=document.createElement("div")).className=Object(p.a)("_",t),document.body.appendChild(n),M[t]=n))})}var k={},O=function(p){return function(e,n,t){var o=Object.assign({},k,t);n=[n,k.duration,3].find(function(t){return"number"==typeof t});var r=o.onClose,s=o.position,i=void 0===s?"top":s,a=o.title,c=o.className,u=void 0===c?"":c,l=o.top,f=void 0===l?"auto":l,h=o.hideClose;return E(i).then(function(t){return t.addMessage({content:e,duration:n,type:p,onClose:r,title:a,className:u,top:f,position:i,hideClose:h})})}};e.a={show:O("default"),success:O("success"),info:O("info"),warn:O("warning"),warning:O("warning"),danger:O("danger"),error:O("danger"),close:function(t){t?x(t):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(t){x(t)})},setOptions:function(t){k=t}}},571:function(t,e,n){t.exports=n(578)},572:function(t,e,n){"use strict";function c(t,e,n,o,r,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(o,r)}function o(a){return function(){var t=this,i=arguments;return new Promise(function(e,n){var o=a.apply(t,i);function r(t){c(o,e,n,r,s,"next",t)}function s(t){c(o,e,n,r,s,"throw",t)}r(void 0)})}}n.d(e,"a",function(){return o})},578:function(t,e,n){var o=function(i){"use strict";var c,t=Object.prototype,l=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function a(t,e,n,o){var s,i,a,c,r=e&&e.prototype instanceof y?e:y,u=Object.create(r.prototype),l=new S(o||[]);return u._invoke=(s=t,i=n,a=l,c=h,function(t,e){if(c===m)throw new Error("Generator is already running");if(c===d){if("throw"===t)throw e;return B()}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){var o=k(n,a);if(o){if(o===g)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===h)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=m;var r=f(s,i,a);if("normal"===r.type){if(c=a.done?d:p,r.arg===g)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c=d,a.method="throw",a.arg=r.arg)}}),u}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}i.wrap=a;var h="suspendedStart",p="suspendedYield",m="executing",d="completed",g={};function y(){}function u(){}function v(){}var w={};w[r]=function(){return this};var b=Object.getPrototypeOf,M=b&&b(b(T([])));M&&M!==t&&l.call(M,r)&&(w=M);var C=v.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(c,u){var e;this._invoke=function(n,o){function t(){return new u(function(t,e){!function e(t,n,o,r){var s=f(c[t],c,n);if("throw"!==s.type){var i=s.arg,a=i.value;return a&&"object"==typeof a&&l.call(a,"__await")?u.resolve(a.__await).then(function(t){e("next",t,o,r)},function(t){e("throw",t,o,r)}):u.resolve(a).then(function(t){i.value=t,o(i)},function(t){return e("throw",t,o,r)})}r(s.arg)}(n,o,t,e)})}return e=e?e.then(t,t):t()}}function k(t,e){var n=t.iterator[e.method];if(n===c){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=c,k(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=c),e.delegate=null,g):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(l.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=c,t.done=!0,t};return o.next=o}}return{next:B}}function B(){return{value:c,done:!0}}return u.prototype=C.constructor=v,(v.constructor=u).displayName=s(v,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,o,"GeneratorFunction")),t.prototype=Object.create(C),t},i.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[n]=function(){return this},i.AsyncIterator=E,i.async=function(t,e,n,o,r){void 0===r&&(r=Promise);var s=new E(a(t,e,n,o),r);return i.isGeneratorFunction(e)?s:s.next().then(function(t){return t.done?t.value:s.next()})},x(C),s(C,o,"Generator"),C[r]=function(){return this},C.toString=function(){return"[object Generator]"},i.keys=function(n){var o=[];for(var t in n)o.push(t);return o.reverse(),function t(){for(;o.length;){var e=o.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var o=this;function t(t,e){return s.type="throw",s.arg=n,o.next=t,e&&(o.method="next",o.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e],s=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var i=l.call(r,"catchLoc"),a=l.call(r,"finallyLoc");if(i&&a){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&l.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=c),g}},i}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}}}]);