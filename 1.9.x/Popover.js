(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[35],{1406:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(560),a=n(562),c=n(41),l=n(1407),s=n.n(l),u=n(1408),p=n.n(u),d=Object(c.b)(s.a,p.a),f=[{name:"1-base",title:Object(c.b)("基本用法 \n Popover 放置在一个组件内部弹出","Base \n The basic usage."),component:n(1409).default,rawText:n(1410)},{name:"1-controll",title:Object(c.b)("受控 \n 可以通过 visible 去控制","controll \n Use cisible to controll the show/hidden"),component:n(1411).default,rawText:n(1412)},{name:"10-container",title:Object(c.b)("自定义容器 \n 使用 getPopupContainer 指定渲染的目标容器","Custom container \n use getPopupContainer return target container"),component:n(1413).default,rawText:n(1414)},{name:"11-disabled",title:Object(c.b)("禁用元素 \n 当父元素被禁用，可以将 Popver 和禁用元素置于同一层级，并用元素将他们包裹","Disabled \n When the parent element is disabled, you can place the Popver and the disabled element in the same hierarchy and wrap them with the element"),component:n(1415).default,rawText:n(1416)},{name:"12-content.tsx",title:Object(c.b)("默认样式 \n Popover.Content 添加 padding 和  maxLength 的默认样式","default style \n Popover.Content adds default styles for padding and maxLength"),component:n(1417).default,rawText:n(1418)},{name:"2-delay",title:Object(c.b)("延迟 \n 可以设置展示延时和关闭延时","delay \n the hidden/show delay"),component:n(1419).default,rawText:n(1420)},{name:"2-position",title:Object(c.b)("弹出位置 \n 内置了十二个弹出的位置","Position \n Twelve pop-up positions are built in."),component:n(1421).default,rawText:n(1422)},{name:"3-click",title:Object(c.b)("点击触发 \n 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发","Trigger \n Set the trigger property to change the trigger event to 'click'."),component:n(1423).default,rawText:n(1424)},{name:"4-confirm",title:Object(c.b)("确认 \n Popover.Confirm 提供弹出气泡式的确认框","Confirm \n Popover.Confirm provide popover confirm."),component:n(1425).default,rawText:n(1426)},{name:"5-func",title:Object(c.b)("关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件","Close \n Set the content property to a function, you can handle the close event inside the popup panel."),component:n(1427).default,rawText:n(1428)},{name:"6-type",title:Object(c.b)("样式 \n 内置四种样式","Type \n Four styles are built in."),component:n(1429).default,rawText:n(1430)},{name:"7-type",title:Object(c.b)(" \n 如果内置样式不满足需求，可以通过 background 和 border 自定义样式"," \n Customize the style with background and border."),component:n(1431).default,rawText:n(1432)},{name:"8-old",title:Object(c.b)("旧API \n 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐","Old API \n Old API, is out of date."),component:n(1433).default,rawText:n(1434)},{name:"9-event",title:Object(c.b)("事件 \n 提供了onOpen 和 onClose 事件","Events \n provider onOpen and onClose event"),component:n(1435).default,rawText:n(1436)}];t.default=Object(i.a)(function(e){return r.a.createElement(a.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})},1407:function(e,t){e.exports="# Popover *气泡*\n\n<example />\n\n## API\n\n### Popover\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#fff' | 弹出层背景色（含箭头） |\n| visible | boolean | 无 | 是否显示(受控) |\n| onVisibleChange | (visible: boolean) => void | 无 | 显示隐藏改变时事件 |\n| mouseEnterDelay | number | 0 | 移入显示延迟(毫秒) |\n| mouseLeaveDelay | number | 0 | 移除隐藏延迟(毫秒) |\n| border | string | '#dee2e6' | 弹出层边框颜色（含箭头） |\n| className | string | 无 | 扩展className |\n| children | ReactNode | 必填 | 弹出显示内容 |\n| onClose | () => void | 无 | Popover 关闭时回调事件 |\n| onOpen | () => void | 无 | Popover 弹出回调事件 |\n| position | 'top-left' \\| 'top' \\| 'top-right' \\| 'left-top' \\| 'left' \\| 'left-bottom' \\| 'right-top' \\| 'right' \\| 'right-bottom' \\| 'bottom-left' \\| 'bottom' \\| 'bottom-right' | 'top' | 弹出层位置 |\n| style | object | 无 | 最外层扩展样式 |\n| trigger | 'click' \\| 'hover' | 'hover' | 触发方式 |\n| type | 'success' \\| 'info' \\| 'warning' \\| 'danger' | 无 | 类型 |\n| content | (close: () => void) => void \\| ReactNode | 无 | 旧接口，如果content为空，父组件作为触发元素 |\n| priorityDirection | string | 'vertical' | 弹出位置优先级, 默认为左右优先, 只在未设置 position 时生效, 可选值\\['vertical', 'horizontal'] |\n| getPopupContainer | () => HTMLElement | 无 | 自定义Popover容器，覆盖默认渲染在body下的行为, () => DOMElement |\n| scrollDismiss | () => HTMLElement \\| boolean | false | 滚动来关闭气泡框，如果需要指定滚动元素，则通过函数返回 |\n| showArrow | boolean | true | 是否显示箭头 |\n| zIndex | number | 1060 | popover 层级 |\n| clickToCancelDelay | boolean | false | 在mouseEnterDelay内点击元素后取消弹出 |\n\n### Popover.Confirm\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| onOk | () => void | 无 | 点击确定按钮时触发事件，返回 Promise 时，会在 Promise resolve 后关闭 Tooltip |\n| onCancel | () => void | 无 | 点击取消按钮时触发事件，返回 Promise 时，会在 Promise resolve 后关闭 Tooltip |\n| text | object | { ok: 'Ok', cancel: 'Cancel' } | 按钮文字 |\n| type | string | *confirmwarning* |  icon的类型，5 选 1，\\[*success*, *info*, *warning*, *danger(error)*, *confirmwarning*] |\n| okType | string | *primary* |  确认按钮类型，与Button类型相同 |\n| icon | ReactNode | 无 |  自定义Icon |\n\n### Popover.Content\n属性和 Popover 一致，但不支持 *content* 属性\n\n## 注意\n请确保 Popover 的父元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。\n"},1408:function(e,t){e.exports="# Popover\n\n<example />\n\n## API\n\n### Popover\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#fff' | Pop-up background-color(with arrows) |\n| visible | boolean | - | is visible (controlled) |\n| onVisibleChange | (visible: boolean) => void | - | the event of visible change |\n| mouseEnterDelay | number | 0 | the show delay of mouseenter(ms) |\n| mouseLeaveDelay | number | 0 | the hidden delay of mouseleave (ms) |\n| border | string | '#dee2e6' | The color of pop-up border(with arrows) |\n| className | string | - | Extend className |\n| children | ReactNode | required | Pop-up content. |\n| onClose | () => void | - | Callback event when close. |\n| onOpen | () => void | - | Callback event when open. |\n| position | 'top-left' \\| 'top' \\| 'top-right' \\| 'left-top' \\| 'left' \\| 'left-bottom' \\| 'right-top' \\| 'right' \\| 'right-bottom' \\| 'bottom-left' \\| 'bottom' \\| 'bottom-right' | 'top' | The position of pop-up layer |\n| style | object | - | The pop-up container style |\n| trigger | 'click' \\| 'hover' | 'hover' | type of show |\n| type | 'success' \\| 'info' \\| 'warning' \\| 'danger' | none | type of popover |\n| content | (close: () => void) => void \\| ReactNode | - | Old API, out of date. |\n| priorityDirection | string | 'vertical' | Popup location priority, default is left and right priority, only valid when position is not set, Options: \\['vertical', 'horizontal'] |\n| getPopupContainer | () => HTMLElement | none | Custom Popover container, override the default behavior which is rendering under the body, () => DOMElement |\n| scrollDismiss |  () => HTMLElement \\| boolean| false | scroll to dismiss, return el to order scroller |\n| showArrow | boolean | true | show arrow |\n| okType | string | *primary* |  ok button's type, same with Button type |\n| zIndex | number | 1060 | z-index of popover |\n| clickToCancelDelay | boolean | false | Cancel the popup after clicking the element in mouseEnterDelay |\n\n### Popover.Confirm\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| onOk | () => void | none | ok button click callback, will close tooltip while returned promise resolve |\n| onCancel | () => void | none | cancel button click callback, will close tooltip while returned promise resolve |\n| text | object | { ok: 'Ok', cancel: 'Cancel' } | button text |\n| type | string |  *confirmwarning* |  icon type \\[*success*, *info*, *warning*, *danger(error)*, *confirmwarning*] |\n| icon | ReactNode | none |  custom icon |\n\n### Popover.Content\nThe property is the same as Popover, but does not support the *content* property\n\n### PopoverNote\nPlease ensure that the parent node of `Popover` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.\n"},1409:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{style:{padding:"4px 8px"}},"Some text"),"Hover")}},1410:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Popover 放置在一个组件内部弹出\n * en - Base\n *    -- The basic usage.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover style={{ padding: '4px 8px' }}>Some text</Popover>\n      Hover\n    </Button>\n  )\n}\n"},1411:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n(4),i=n(5),a=n(6),c=n(7),l=n(2),o=n(0),s=n.n(o),u=n(67),p=n(83);function d(o){return function(){var e,t=Object(l.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(l.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(c.a)(this,e)}}var f=function(e){Object(a.a)(o,e);var n=d(o);function o(e){var t;return Object(r.a)(this,o),(t=n.call(this,e)).state={visible:!1},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this,e=this.state.visible;return s.a.createElement(u.a,null,s.a.createElement(p.a,{visible:e,onVisibleChange:function(e){return t.setState({visible:e})},style:{width:200,padding:20}},"Some text"),"Hover")}}]),o}(s.a.Component)},1412:function(e,t){e.exports="/**\n * cn - 受控\n *    -- 可以通过 visible 去控制\n * en -  controll\n *    -- Use cisible to controll the show/hidden\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n  }\n\n  render() {\n    const { visible } = this.state\n    return (\n      <Button>\n        <Popover\n          visible={visible}\n          onVisibleChange={v => this.setState({ visible: v })}\n          style={{ width: 200, padding: 20 }}\n        >\n          Some text\n        </Popover>\n        Hover\n      </Button>\n    )\n  }\n}\n"},1413:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83);t.default=function(){return r.a.createElement("div",{id:"popup-target",style:{height:200,overflowY:"auto",position:"relative"}},r.a.createElement(i.a,{style:{margin:"100px 0"}},"Scrollable",r.a.createElement(a.a,{trigger:"click",style:{padding:"8px 16px"},getPopupContainer:function(){return document.querySelector("#popup-target")}},"render in parent element")))}},1414:function(e,t){e.exports="/**\n * cn - 自定义容器\n *    -- 使用 getPopupContainer 指定渲染的目标容器\n * en - Custom container\n *    -- use getPopupContainer return target container\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <div id=\"popup-target\" style={{ height: 200, overflowY: 'auto', position: 'relative' }}>\n      <Button style={{ margin: '100px 0' }}>\n        Scrollable\n        <Popover\n          trigger=\"click\"\n          style={{ padding: '8px 16px' }}\n          getPopupContainer={() => document.querySelector('#popup-target')}\n        >\n          render in parent element\n        </Popover>\n      </Button>\n    </div>\n  )\n}\n"},1415:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(83),a=n(67);t.default=function(){return r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(i.a,{style:{padding:"8px 16px"}},"Disabled parent"),r.a.createElement(a.a,{disabled:!0},"Disabled"))}},1416:function(e,t){e.exports="/**\n * cn - 禁用元素\n *    -- 当父元素被禁用，可以将 Popver 和禁用元素置于同一层级，并用元素将他们包裹\n * en - Disabled\n *    -- When the parent element is disabled, you can place the Popver and the disabled element in the same hierarchy and wrap them with the element\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ display: 'inline-block' }}>\n      <Popover style={{ padding: '8px 16px' }}>Disabled parent</Popover>\n      <Button disabled>Disabled</Button>\n    </div>\n  )\n}\n"},1417:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a.Content,null,r.a.createElement("span",null," hello world ")),"content")}},1418:function(e,t){e.exports="/**\n * cn - 默认样式\n *    -- Popover.Content 添加 padding 和  maxLength 的默认样式\n * en - default style\n *    -- Popover.Content adds default styles for padding and maxLength\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover.Content>\n        <span> hello world </span>\n      </Popover.Content>\n      content\n    </Button>\n  )\n}\n"},1419:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{mouseEnterDelay:1e3,mouseLeaveDelay:1e3,style:{width:200,padding:20}},"Some text"),"Hover")}},1420:function(e,t){e.exports="/**\n * cn - 延迟\n *    -- 可以设置展示延时和关闭延时\n * en - delay\n *    -- the hidden/show delay\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover mouseEnterDelay={1000} mouseLeaveDelay={1000} style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      Hover\n    </Button>\n  )\n}\n"},1421:function(e,t,n){"use strict";n.r(t);var o=n(14),r=n(0),i=n.n(r),a=n(83),c=[[null,"bottom-left","bottom","bottom-right",null],["right-top",null,null,null,"left-top"],["right",null,null,null,"left"],["right-bottom",null,null,null,"left-bottom"],[null,"top-left","top","top-right",null]],l={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee",cursor:"pointer"};t.default=function(){return c.map(function(e,t){return i.a.createElement("div",{key:t},e.map(function(e,t){return e?i.a.createElement("div",{key:t,style:l},i.a.createElement(a.a,{trigger:"click",position:e},i.a.createElement("div",{style:{width:240,padding:30}},"Some text")),e):i.a.createElement("div",{key:t,style:Object(o.a)(Object(o.a)({},l),{},{border:0})})}))})}},1422:function(e,t){e.exports="/**\n * cn - 弹出位置\n *    -- 内置了十二个弹出的位置\n * en - Position\n *    -- Twelve pop-up positions are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst positions = [\n  [null, 'bottom-left', 'bottom', 'bottom-right', null],\n  ['right-top', null, null, null, 'left-top'],\n  ['right', null, null, null, 'left'],\n  ['right-bottom', null, null, null, 'left-bottom'],\n  [null, 'top-left', 'top', 'top-right', null],\n]\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n  cursor: 'pointer',\n}\n\nexport default function() {\n  return positions.map((row, i) => (\n    <div key={i}>\n      {row.map((p, j) =>\n        p ? (\n          <div key={j} style={style}>\n            <Popover trigger=\"click\" position={p}>\n              <div style={{ width: 240, padding: 30 }}>Some text</div>\n            </Popover>\n            {p}\n          </div>\n        ) : (\n          <div key={j} style={{ ...style, border: 0 }} />\n        )\n      )}\n    </div>\n  ))\n}\n"},1423:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83),c=n(298);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{style:{marginRight:12},trigger:"click"},r.a.createElement(c.a,{style:{width:300,border:0,background:"transparent"}},r.a.createElement(c.a.Header,null,"Header"),r.a.createElement(c.a.Body,{style:{height:80}},"Body"))),"Click me")}},1424:function(e,t){e.exports="/**\n * cn - 点击触发\n *    -- 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发\n * en - Trigger\n *    -- Set the trigger property to change the trigger event to 'click'.\n */\nimport React from 'react'\nimport { Button, Popover, Card } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover style={{ marginRight: 12 }} trigger=\"click\">\n        <Card style={{ width: 300, border: 0, background: 'transparent' }}>\n          <Card.Header>Header</Card.Header>\n          <Card.Body style={{ height: 80 }}>Body</Card.Body>\n        </Card>\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1425:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a.Confirm,{onCancel:function(){console.log("cancel")},onOk:function(){return new Promise(function(e){console.log("ok"),setTimeout(function(){return e(!0)},2e3)})},text:{ok:"Yes",cancel:"No"}},"Are you sure delete ?"),"Delete")}},1426:function(e,t){e.exports="/**\n * cn - 确认\n *    -- Popover.Confirm 提供弹出气泡式的确认框\n * en - Confirm\n *    -- Popover.Confirm provide popover confirm.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover.Confirm\n        onCancel={() => {\n          console.log('cancel')\n        }}\n        onOk={() =>\n          new Promise(resolve => {\n            console.log('ok')\n            setTimeout(() => resolve(true), 2000)\n          })\n        }\n        text={{ ok: 'Yes', cancel: 'No' }}\n      >\n        Are you sure delete ?\n      </Popover.Confirm>\n      Delete\n    </Button>\n  )\n}\n"},1427:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83),c=n(302);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{trigger:"click"},function(e){return r.a.createElement("div",{style:{padding:20}},r.a.createElement("div",null,"Are you sure you want to close this panel?"),r.a.createElement("div",{style:{marginTop:30,textAlign:"right"}},r.a.createElement(i.a,{size:"small",onClick:function(){e(),c.a.success("Popover panel closed.")}},"close")))}),"Click me")}},1428:function(e,t){e.exports="/**\n * cn - 关闭事件\n *    -- content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件\n * en - Close\n *    -- Set the content property to a function, you can handle the close event inside the popup panel.\n */\nimport React from 'react'\nimport { Button, Popover, Message } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover trigger=\"click\">\n        {close => (\n          <div style={{ padding: 20 }}>\n            <div>Are you sure you want to close this panel?</div>\n            <div style={{ marginTop: 30, textAlign: 'right' }}>\n              <Button\n                size=\"small\"\n                onClick={() => {\n                  close()\n                  Message.success('Popover panel closed.')\n                }}\n              >\n                close\n              </Button>\n            </div>\n          </div>\n        )}\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1429:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(83),a=["success","info","warning","danger"],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){return a.map(function(e,t){return r.a.createElement("div",{style:c,key:t},r.a.createElement(i.a,{type:e,style:{width:200,padding:20}},"Some text"),e)})}},1430:function(e,t){e.exports="/**\n * cn - 样式\n *    -- 内置四种样式\n * en - Type\n *    -- Four styles are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst types = ['success', 'info', 'warning', 'danger']\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n}\n\nexport default function() {\n  return types.map((t, i) => (\n    <div style={style} key={i}>\n      <Popover type={t} style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      {t}\n    </div>\n  ))\n}\n"},1431:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{background:"#555",border:"gold",style:{width:200,padding:20,color:"gold"}},"Some text"),"Hover")}},1432:function(e,t){e.exports="/**\n * cn -\n *    -- 如果内置样式不满足需求，可以通过 background 和 border 自定义样式\n * en -\n *    -- Customize the style with background and border.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover background=\"#555\" border=\"gold\" style={{ width: 200, padding: 20, color: 'gold' }}>\n        Some text\n      </Popover>\n      Hover\n    </Button>\n  )\n}\n"},1433:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(83),a=n(67);t.default=function(){var e=r.a.createElement("div",{style:{width:200,padding:20}},"Some text");return r.a.createElement(i.a,{content:e},r.a.createElement(a.a,null,"Hover"))}},1434:function(e,t){e.exports="/**\n * cn - 旧API\n *    -- 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐\n * en - Old API\n *    -- Old API, is out of date.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return (\n    <Popover content={content}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},1435:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(67),a=n(83);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{onOpen:function(){return console.log("popover open")},onClose:function(){return console.log("popover close")},trigger:"click",style:{width:200,padding:20}},"Some text"),"Click me.")}},1436:function(e,t){e.exports="/**\n * cn - 事件\n *    -- 提供了onOpen 和 onClose 事件\n * en - Events\n *    -- provider onOpen and onClose event\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const open = () => console.log('popover open')\n  const close = () => console.log('popover close')\n  return (\n    <Button>\n      <Popover onOpen={open} onClose={close} trigger=\"click\" style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      Click me.\n    </Button>\n  )\n}\n"},298:function(e,t,n){"use strict";var o=n(14),r=n(4),i=n(5),a=n(1),c=n(6),l=n(7),s=n(2),u=n(0),p=n.n(u),d=n(13),f=n.n(d),m=n(29),h=n(24),v=n(45),b=n(186),g=n(21),y=n(189),O=n(188);function C(o){return function(){var e,t=Object(s.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(s.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var P=function(e){Object(c.a)(o,e);var n=C(o);function o(e){var t;return Object(r.a)(this,o),(t=n.call(this,e)).state={collapsed:e.defaultCollapsed,formStatus:""},t.bindElement=t.bindElement.bind(Object(a.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(a.a)(t)),t.handleCollapse=t.handleCollapse.bind(Object(a.a)(t)),t.setFormStatus=t.setFormStatus.bind(Object(a.a)(t)),t}return Object(i.a)(o,[{key:"getCollapsed",value:function(){var e=this.props,t=e.collapsible,n=e.collapsed;if(t)return void 0!==n?n:this.state.collapsed}},{key:"setFormStatus",value:function(e){e!==this.state.formStatus&&this.setState({formStatus:e})}},{key:"bindElement",value:function(e){this.element=e;var t=this.props.forwardedRef;t&&t(e)}},{key:"handleCollapse",value:function(){var e=!this.getCollapsed();this.props.onCollapse?this.props.onCollapse(e):this.setState({collapsed:e})}},{key:"handleSubmit",value:function(e){var t=this.element.querySelector("form");t?Object(h.dispatchEvent)(t,"submit",e):console.error(new Error("No form found."))}},{key:"render",value:function(){var e=this.props.collapsible,t=this.getCollapsed(),n=!0===this.props.shadow?"shadow":this.props.shadow,o=f()(Object(v.a)("_",n,e&&"collapsible",t&&"collapsed"),this.props.className),r={onCollapse:this.handleCollapse,collapsible:e,collapsed:t,formStatus:this.state.formStatus,onSubmit:this.handleSubmit,setFormStatus:this.setFormStatus};return p.a.createElement("div",{className:o,ref:this.bindElement,style:this.props.style},p.a.createElement(b.a,{value:r},this.props.children))}}]),o}(u.PureComponent);P.defaultProps=Object(o.a)(Object(o.a)({},m.a),{},{defaultCollapsed:!0,collapsible:!1});var j=Object(g.compose)(Object(O.a)(".".concat(Object(v.a)("header"))),y.a)(P),x=n(15),k=n(67);function w(o){return function(){var e,t=Object(s.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(s.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var E=function(e){Object(c.a)(o,e);var n=w(o);function o(e){var t;return Object(r.a)(this,o),(t=n.call(this,e)).handleClick=t.handleClick.bind(Object(a.a)(t)),t}return Object(i.a)(o,[{key:"handleClick",value:function(e){var t=this;e.persist(),setTimeout(function(){t.props.onSubmit(e.target)},50)}},{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.loading),n=e.children,o=e.formStatus,r=Object(x.a)(e,["onSubmit","loading","children","formStatus"]);return p.a.createElement(k.a,Object.assign({type:"primary"},r,{disabled:r.disabled||"disabled"===o,loading:"pending"===o||t,onClick:this.handleClick}),n)}}]),o}(u.PureComponent),S=n(53);function R(o){return function(){var e,t=Object(s.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(s.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var B=function(e){Object(c.a)(n,e);var t=R(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"renderIndicator",value:function(){if(void 0!==this.props.collapsed){var e=Object(v.a)("indicator");return p.a.createElement("span",{className:e},S.a.AngleRight)}}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.align,o=e.className,r=e.children,i=e.onCollapse,a=e.collapsed,c=f()(Object(v.a)("header",n),o),l="boolean"==typeof a?i:void 0;return p.a.createElement("div",{style:t,onClick:l,className:c},this.renderIndicator(),r)}}]),n}(u.PureComponent),D=n(70);function T(o){return function(){var e,t=Object(s.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(s.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var N=Object(D.a)(["collapse"],"fast"),A=function(e){Object(c.a)(n,e);var t=T(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.collapsed,o=e.collapsible,r=e.onCollapse,i=Object(x.a)(e,["className","collapsed","collapsible","onCollapse"]),a=f()(Object(v.a)("body"),t);if(!o)return p.a.createElement("div",Object.assign({},i,{className:a}));var c="boolean"==typeof n?r:void 0;return p.a.createElement(N,{show:!n},p.a.createElement("div",Object.assign({},i,{className:a}),i.children,"bottom"===o&&p.a.createElement("div",{className:Object(v.a)("foldup"),onClick:c},p.a.createElement("span",null))))}}]),n}(u.PureComponent);function H(o){return function(){var e,t=Object(s.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(s.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var M=function(e){Object(c.a)(n,e);var t=H(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.align,n=e.className,o=Object(x.a)(e,["align","className"]),r=f()(Object(v.a)("footer",t),n);return p.a.createElement("div",Object.assign({},o,{className:r}))}}]),n}(u.PureComponent),I=n(17);function L(o){return function(){var e,t=Object(s.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(s.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var F=function(e){Object(c.a)(o,e);var n=L(o);function o(e){var t;return Object(r.a)(this,o),(t=n.call(this,e)).state={active:e.active||e.defaultActive},t}return Object(i.a)(o,[{key:"getActive",value:function(){return void 0!==this.props.active?this.props.active:this.state.active}},{key:"handleActive",value:function(e){e===this.state.active&&(e=null),this.setState({active:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var a=this,c=this.getActive();return u.Children.toArray(this.props.children).map(function(e,t){var n,o,r=(o=t,(n=e)&&n.props&&void 0!==n.props.id?n.props.id:o),i={collapsed:c!==r,collapsible:!0,className:f()("object"==typeof e&&e.className,Object(v.a)("accordion")),onCollapse:a.handleActive.bind(a,r)};return Object(u.cloneElement)(e,i)})}}]),o}(I.b);F.defaultProps={defaultActive:0};var z=F;j.Header=Object(b.b)(B,["collapsed","onCollapse"]),j.Body=Object(b.b)(A,["collapsed","collapsible","onCollapse"]),j.Footer=M,j.Submit=Object(b.b)(E,["onSubmit","formStatus"]),j.Accordion=z,j.Body.displayName="ShineoutCardBody",j.Header.displayName="ShineoutCardHeader",j.displayName="ShineoutCard";t.a=j},302:function(e,t,n){"use strict";var o=n(0),d=n.n(o),r=n(46),i=n.n(r),f=n(109),a=n(4),c=n(5),l=n(1),s=n(6),u=n(7),p=n(2),m=n(42),h=n(17),v=n(122),b=n(22);function g(o){return function(){var e,t=Object(p.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(p.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var y=function(e){Object(s.a)(o,e);var n=g(o);function o(e){var t;return Object(a.a)(this,o),(t=n.call(this,e)).state={messages:[]},t.removeMessage=t.removeMessage.bind(Object(l.a)(t)),t.handleClassName=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"top",t=1<arguments.length?arguments[1]:void 0;return Object(f.a)("item","item-".concat(t?"dismissed":"show","-").concat(e))},t.handleStyle=function(e,t,n){if(!e||null==t)return null;var o={};switch(n){case"bottom-right":case"bottom-left":break;default:o={zIndex:-1,opacity:0,marginTop:-t}}return o},t}return Object(c.a)(o,[{key:"addMessage",value:function(t){var e=this,n=Object(b.c)();return this.setState(Object(m.a)(function(e){e.messages.push(Object.assign({id:n},t))})),0<t.duration&&setTimeout(function(){e.setState(Object(m.a)(function(e){e.messages.forEach(function(e){e.id===n&&(e.dismiss=!0)})}))},1e3*t.duration),this.closeMessageForAnimation.bind(this,n,200,200)}},{key:"removeMessage",value:function(t){var n,e=this.state.messages.filter(function(e){return e.id!==t||(e.onClose&&(n=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),n&&n()}},{key:"closeMessageForAnimation",value:function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var r=n[0],i=n[1],a=n[2];i?(this.setState(Object(m.a)(function(e){e.messages.forEach(function(e){e.id===r&&(e.dismiss=!0,e.h=a+20)})})),setTimeout(function(){e.removeMessage(r)},i)):this.removeMessage(r)}},{key:"closeEvent",value:function(e,t){if(0===t)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var p=this;return[this.state.messages.map(function(e){var t=e.id,n=e.type,o=e.content,r=e.dismiss,i=e.h,a=e.title,c=e.top,l=e.className,s=e.position,u=e.hideClose;return d.a.createElement("div",{key:t,className:"".concat(p.handleClassName(s,r)," ").concat(l),style:p.handleStyle(r,i,s)},d.a.createElement(v.a,{outAnimation:!0,className:Object(f.a)("msg"),dismiss:r,hideClose:u,onClose:p.closeMessageForAnimation.bind(p,t),icon:!0,iconSize:a?20:14,style:{top:c},type:n},a&&d.a.createElement("h3",null,a),o))})]}}]),o}(h.b);y.displayName="ShineoutMessage";var O=y,C={},P={};function j(e){C[e]&&(i.a.unmountComponentAtNode(C[e]),document.body.removeChild(C[e]),delete C[e]),P[e]&&delete P[e]}function x(r){return new Promise(function(t){var e,n,o=P[r];o?t(o):i.a.render(d.a.createElement(O,{ref:function(e){P[r]=e,t(e)},onDestory:j.bind(null,r)}),(e=r,(n=document.createElement("div")).className=Object(f.a)("_",e),document.body.appendChild(n),C[e]=n))})}var k={},w=function(f){return function(t,n,e){var o=Object.assign({},k,e);n=[n,k.duration,3].find(function(e){return"number"==typeof e});var r=o.onClose,i=o.position,a=void 0===i?"top":i,c=o.title,l=o.className,s=void 0===l?"":l,u=o.top,p=void 0===u?"auto":u,d=o.hideClose;return x(a).then(function(e){return e.addMessage({content:t,duration:n,type:f,onClose:r,title:c,className:s,top:p,position:a,hideClose:d})})}};t.a={show:w("default"),success:w("success"),info:w("info"),warn:w("warning"),warning:w("warning"),danger:w("danger"),error:w("danger"),close:function(e){e?j(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){j(e)})},setOptions:function(e){k=e}}}}]);