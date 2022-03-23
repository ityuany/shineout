(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[21],{305:function(e,t,n){"use strict";var a=n(21),r=n(190),o=n(191),i=n(60),l=n(82),f=n(15),s=n(4),u=n(5),c=n(7),h=n(23),d=n(2),p=n(6),b=n(1),v=n(0),m=n.n(v),g=n(13),j=n.n(g),O=n(17),y=n(36),w=n(194),E=n(91),C=n(64),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).defaultInfo=function(e){if(!e||0===e.length)return null;var t=a.props.info,n="".concat(e.length," / ").concat(t);return e.length<=t?n:new Error(n)},a.state={height:0},a.bindShadow=a.bindShadow.bind(Object(b.a)(Object(b.a)(a))),a.handleBlur=a.handleBlur.bind(Object(b.a)(Object(b.a)(a))),a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.handleKeyUp=a.handleKeyUp.bind(Object(b.a)(Object(b.a)(a))),a.resize=a.resize.bind(Object(b.a)(Object(b.a)(a))),a.defaultInfo=a.defaultInfo.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){Object(h.a)(Object(d.a)(t.prototype),"componentDidMount",this).call(this),this.props.autosize&&this.resize()}},{key:"componentDidUpdate",value:function(e){this.props.autosize&&e.value!==this.props.value&&this.resize(this.props.value)}},{key:"bindShadow",value:function(e){this.shadow=e}},{key:"resize",value:function(e){(e||""===e)&&(this.shadow.value=e);var t=this.shadow?this.shadow.scrollHeight:0;this.setState({height:t})}},{key:"handleChange",value:function(e){this.props.onChange(e.target.value),this.props.autosize&&this.resize(e.target.value)}},{key:"handleKeyUp",value:function(e){var t=this.props.onEnterPress;13===e.keyCode&&t&&t(e.target.value,e)}},{key:"handleBlur",value:function(e){var t=e.target.value,n=this.props,a=n.forceChange,r=n.onBlur;r&&r(e),a(t)}},{key:"renderFooter",value:function(){var e=this.props,t=e.renderFooter,n=e.value;return t&&"function"==typeof t?m.a.createElement("div",{key:"footer",className:Object(y.a)("footer")},t(n)):null}},{key:"renderInfo",value:function(){var e=this.props.info,t="number"!=typeof e;if("function"!=typeof e&&t)return null;var n=(t?e:this.defaultInfo)(this.props.value);if(!n)return null;var a=n instanceof Error,r=a?n.message:n;return m.a.createElement("div",{key:"info",style:{minWidth:"auto"},className:Object(y.a)("bottom-right",a?"error":"tip")},r)}},{key:"render",value:function(){var e=this.props,t=e.autosize,n=(e.onChange,e.maxHeight),a=(e.info,e.onEnterPress,e.resize),r=(e.renderFooter,e.inputFocus),o=e.innerTitle,i=e.placeTitle,l=Object(f.a)(e,["autosize","onChange","maxHeight","info","onEnterPress","resize","renderFooter","inputFocus","innerTitle","placeTitle"]),s=null==l.value?"":l.value,u=this.state.height||"auto",c=this.renderFooter(),h=t?Object(y.a)("auto-size"):Object(y.a)(a&&"textarea-resize"),d=j()(h,o&&Object(C.a)("hidable","item")),p=[m.a.createElement("textarea",Object.assign({},Object(w.a)(l),{key:"t",value:s,className:d,style:{height:u,maxHeight:n,overflow:"auto"},onChange:this.handleChange,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur})),c,this.renderInfo()],b=j()(Object(y.a)("shadow"),o&&Object(C.a)("hidable","item"));return t&&p.push(m.a.createElement("textarea",{key:"s",ref:this.bindShadow,className:b,rows:l.rows,defaultValue:s})),m.a.createElement(E.a,{innerTitle:o,open:!!s||!!r,placeTitle:i},p)}}]),t}(O.b);x.defaultProps={rows:4,resize:!1};var T=x,k=Object(a.compose)(i.a,Object(l.a)({className:function(e){var t=e.value,n=e.renderFooter,a=null;return n&&"function"==typeof n&&(a=n(t)),a&&Object(y.a)("with-footer")}}),Object(r.a)(400),o.a)(T);k.displayName="ShineoutTextarea";t.a=k},324:function(e,t,n){"use strict";var a=n(21),r=n(190),o=n(191),i=n(60),l=n(4),s=n(5),u=n(7),c=n(2),h=n(6),d=n(1),p=n(0),b=n.n(p),f=n(13),v=n.n(f),m=n(305),g=n(126),j=n(83),O=(n(32),n(852)),y=n.n(O),w=n(10),E=Object(w.a)(y.a,"editableArea"),C=n(53),x=n(24),T=n(36),k=n(91),P=n(64),F=function(){};var S=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(u.a)(this,Object(c.a)(n).call(this,e))).state={showTextarea:!1},t.bindContainer=t.bindElement.bind(Object(d.a)(Object(d.a)(t)),"container"),t.bindInput=t.bindElement.bind(Object(d.a)(Object(d.a)(t)),"input"),t.renderInput=t.renderInput.bind(Object(d.a)(Object(d.a)(t))),t.renderPlace=t.renderPlace.bind(Object(d.a)(Object(d.a)(t))),t.renderTextarea=t.renderTextarea.bind(Object(d.a)(Object(d.a)(t))),t.onChange=t.onChange.bind(Object(d.a)(Object(d.a)(t))),t.onBlur=t.onBlur.bind(Object(d.a)(Object(d.a)(t))),t.autoFocus=t.autoFocus.bind(Object(d.a)(Object(d.a)(t))),t.handleFocus=t.handleFocus.bind(Object(d.a)(Object(d.a)(t))),t.showPop=t.updateShowTextarea.bind(Object(d.a)(Object(d.a)(t)),!0),t.hidePop=t.updateShowTextarea.bind(Object(d.a)(Object(d.a)(t)),!1),t.handleClear=t.onChange.bind(Object(d.a)(Object(d.a)(t)),""),t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.state.showTextarea;t.showTextarea!==n&&n&&this.autoFocus()}},{key:"onChange",value:function(e){var t=this.props.onChange;"function"==typeof t&&t(e)}},{key:"onBlur",value:function(e){var t=this.props.onBlur;this.hidePop(),"function"==typeof t&&t(e)}},{key:"getErrorProps",value:function(){var e={};return"error"in this.props&&(e.error=this.props.error),e}},{key:"updateShowTextarea",value:function(e){e&&this.input&&(this.width=Object(x.getParent)(this.input,".".concat(E("input"))).offsetWidth),this.setState({showTextarea:e}),this.props.onShowTextareaChange&&this.props.onShowTextareaChange(e)}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;"function"==typeof t&&t(e)}},{key:"bindElement",value:function(e,t){this[e]=t}},{key:"autoFocus",value:function(){if(this.container){var e=this.container.querySelector(".".concat(E("text-area")," textarea.so-input-auto-size"));e&&x.focusElement.end(e)}}},{key:"renderTextarea",value:function(){var e=this.state.showTextarea,t=this.props,n=t.placeholder,a=t.maxHeight,r=t.value,o=t.innerTitle,i=t.placeTitle,l=t.renderFooter;return e?b.a.createElement("div",{ref:this.bindContainer},b.a.createElement(m.a,Object.assign({className:E("text-area"),autosize:!0,innerTitle:o,placeTitle:i,value:r,rows:1,delay:0,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.handleFocus,placeholder:n,maxHeight:a,renderFooter:l},this.getErrorProps()))):null}},{key:"renderResult",value:function(){var e=this.props,t=e.placeholder,n=e.disabled,a=e.value,r=e.renderResult,o=e.placeTitle,i=e.innerTitle,l=e.error,s=r(a);return b.a.createElement("div",{tabIndex:n?void 0:0,className:v()(E("input"),Object(T.a)("_",l&&"invalid",n&&"disabled")),onFocus:this.showPop},b.a.createElement(k.a,{placeTitle:o,innerTitle:i,open:!!a},b.a.createElement("div",{className:v()(Object(T.a)("spare"),i&&Object(P.a)("hidable","item")),ref:this.bindInput},s||b.a.createElement("div",{className:Object(T.a)("placeholder")},t||b.a.createElement("br",null)))))}},{key:"renderInput",value:function(){var e=this.props,t=e.placeholder,n=e.disabled,a=e.value,r=e.innerTitle,o=e.placeTitle;return b.a.createElement(g.a,Object.assign({innerTitle:r,placeTitle:o,forwardedRef:this.bindInput,placeholder:t,value:function(e){if(!e&&0!==e)return"";var t=String(e).split("\n");return 1<t.length?"".concat(t[0],"..."):String(e)}(a),onChange:F,className:E("input"),onFocus:this.showPop,disabled:n},this.getErrorProps()))}},{key:"renderPlace",value:function(){var e=this.props.renderResult;return e&&"function"==typeof e?this.renderResult():this.renderInput()}},{key:"render",value:function(){var e=this.state.showTextarea,t=this.props,n=t.width,a=t.style,r=t.className,o=t.bordered,i=t.clearable,l=t.getPopupContainer,s=t.value,u=v()(r,E("_",!o&&"none-bordered")),c=Object.assign({width:n},a),h={width:this.width};return b.a.createElement("div",{className:u,style:c},this.renderPlace(),b.a.createElement(j.a,{visible:e,showArrow:!1,className:E("popover"),position:"cover",style:h,getPopupContainer:l},this.renderTextarea()),i&&s?b.a.createElement("div",{className:E("clear"),onClick:this.handleClear},C.a.CloseCircle):null)}}]),n}(b.a.PureComponent);S.defaultProps={bordered:!1};var B=S,N=Object(a.compose)(i.a,Object(r.a)(400),o.a)(B);N.displayName="ShineoutEditableArea";t.a=N},848:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(560),i=n(562),l=n(41),s=n(849),u=n.n(s),c=n(850),h=n.n(c),d=Object(l.b)(u.a,h.a),p=[{name:"01-base",title:Object(l.b)("基本用法 \n EditableArea 默认展示一行，超过一行的内容用...代替","Base \n Editablearea displays one line by default, and more than one line is replaced by ..."),component:n(851).default,rawText:n(853)},{name:"02-controlled",title:Object(l.b)("受控 \n 传递value, onChange使组件受控","Controlled \n Pass value and onChange props to make the component controlled"),component:n(854).default,rawText:n(855)},{name:"03-container",title:Object(l.b)("自定义容器 \n 在内滚容器中使用此组件，可使用 getPopupContainer 指定渲染的目标容器，使之随之滚动","Custom container \n use getPopupContainer return target container"),component:n(856).default,rawText:n(857)}];t.default=Object(o.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},849:function(e,t){e.exports="# EditableArea *可编辑域*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string | 无 | 设置初始值 |\n| value | string | 无 | 受控时，传入的value |\n| className | string | 无 | 扩展外层className |\n| onChange | (value: string) => void | 无 | 值改变时的回调函数，和value一起设置时使组件受控 |\n| style | object | 无 | 组件最外层的扩展样式 |\n| bordered | boolean | false | 是否显示外边框 |\n| disabled | boolean | false | 是否禁用 |\n| clearable | boolean | true | 是否展示清除按钮 |\n| placeholder | string | 无 | 同原生 textarea 标签的 placeholder |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒 |\n| trim | boolean | false | trim 为 true 时，失去焦点时会自动删除空白字符 |\n| onBlur | (e: MouseEvent) => void | 无 | 失去焦点事件 |\n| onFocus | (e: MouseEvent) => void | 无 | 聚焦事件 |\n| maxHeight | number \\| string | 无 | 输入框的最大高度, 超过之后会出现滚动条 |\n| getPopupContainer | () => HTMLElement | 无 | 自定义Popover容器，覆盖默认渲染在body下的行为, () => DOMElement |\n| width | number \\| string | 无 | 编辑域宽度 |\n| innerTitle | string | - | 内嵌标题 |\n"},850:function(e,t){e.exports="# EditableArea\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string | none | Set initial value |\n| value | string | none | The value passed in when controlled |\n| className | string | none | The outermost extension className of a component |\n| onChange | (value: string) => void | none | Callback function when the value changes, making the component controlled when set with value |\n| style | object | none | The outermost extension style of a component |\n| bordered | boolean | false | Whether to show the border |\n| disabled | boolean | false | Whether to disable |\n| clearable | boolean | true | Whether to show the clear button |\n| placeholder | string | none | The same as the native placeholder tag |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms. |\n| trim | boolean | false | When trim is true, blank characters are automatically deleted when lose focus |\n| onBlur | (e: MouseEvent) => void | none | blur event |\n| onFocus | (e: MouseEvent) => void | none | focus event |\n| maxHeight | number \\| string | - | the maxHeight of the textarea, scroll bars appear after more than |\n| getPopupContainer | () => HTMLElement | none | Custom Popover container, override the default behavior which is rendering under the body, () => DOMElement |\n| width | number \\| string | none | width of the editablearea |\n| innerTitle | string | - | inner title |\n"},851:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(324);t.default=function(){return r.a.createElement(o.a,{bordered:!0,placeholder:"input something"})}},852:function(e,t){},853:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- EditableArea 默认展示一行，超过一行的内容用...代替\n * en - Base\n *    -- Editablearea displays one line by default, and more than one line is replaced by ...\n */\n\nimport React from 'react'\nimport { EditableArea } from 'shineout'\n\nexport default function() {\n  return <EditableArea bordered placeholder=\"input something\" />\n}\n"},854:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(0),i=n.n(o),l=n(324);t.default=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];return i.a.createElement(l.a,{value:n,placeholder:"Input something",onChange:function(e){a(e)},width:400,onBlur:function(){console.log("EditableArea: onBlur")}})}},855:function(e,t){e.exports="/**\n * cn - 受控\n *    -- 传递value, onChange使组件受控\n * en - Controlled\n *    -- Pass value and onChange props to make the component controlled\n */\n\nimport React, { useState } from 'react'\nimport { EditableArea } from 'shineout'\n\nexport default function() {\n  const [value, setValue] = useState('')\n  return (\n    <EditableArea\n      value={value}\n      placeholder=\"Input something\"\n      onChange={val => {\n        setValue(val)\n      }}\n      width={400}\n      onBlur={() => {\n        console.log('EditableArea: onBlur')\n      }}\n    />\n  )\n}\n"},856:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(324);t.default=function(){return r.a.createElement("div",{id:"popup-target",style:{height:200,overflow:"auto",position:"relative",padding:10}},r.a.createElement("div",{style:{height:100}}),r.a.createElement(o.a,{bordered:!0,placeholder:"scroll in container",getPopupContainer:function(){return document.querySelector("#popup-target")},maxHeight:100}),r.a.createElement("div",{style:{height:140}}))}},857:function(e,t){e.exports="/**\n * cn - 自定义容器\n *    -- 在内滚容器中使用此组件，可使用 getPopupContainer 指定渲染的目标容器，使之随之滚动\n * en - Custom container\n *    -- use getPopupContainer return target container\n */\nimport React from 'react'\nimport { EditableArea } from 'shineout'\n\nexport default function() {\n  return (\n    <div id=\"popup-target\" style={{ height: 200, overflow: 'auto', position: 'relative', padding: 10 }}>\n      <div style={{ height: 100 }} />\n      <EditableArea\n        bordered\n        placeholder=\"scroll in container\"\n        getPopupContainer={() => document.querySelector('#popup-target')}\n        maxHeight={100}\n      />\n      <div style={{ height: 140 }} />\n    </div>\n  )\n}\n"}}]);