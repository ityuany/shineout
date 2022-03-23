(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[6],{1611:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(560),i=n(562),s=n(41),c=n(1612),u=n.n(c),l=n(1613),d=n.n(l),m=Object(s.b)(u.a,d.a),f=[{name:"1-base",title:Object(s.b)("基本用法 \n 组件调用通过 json 数据配置","Base \n The basic usage."),component:n(1614).default,rawText:n(1616)},{name:"2-separator",title:Object(s.b)("分隔符 \n 默认的分隔符为 '/'，可以通过 separator 属性自定义","separator \n The default separator is '/'."),component:n(1617).default,rawText:n(1618)},{name:"3-icon",title:Object(s.b)("图标 \n 带图标的面包屑","icon \n Breadcrumbs with icons"),component:n(1619).default,rawText:n(1620)}];t.default=Object(o.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:m,examples:f}))})},1612:function(e,t){e.exports="# Breadcrumb  *面包屑*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| data | any[] | [] | 面包屑对象数组，见 data |\n| separator | string \\| ReactNode | \"/\" | 面包屑分隔符,可以是字符串或自定义的元素|\n| keygen | ((data: any) => string) \\| string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n\n### BreadcrumbData\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| title | string \\| ReactElement | 无 | 显示内容 |\n| url | string | 无 | 链接地址，onClick 属性二选一 |\n| onClick | () => void | 无 | 点击事件 |\n"},1613:function(e,t){e.exports="# Breadcrumb\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| data | any[] | [] | The array of breadcrumb objects, see data |\n| separator | string \\| ReactNode | \"/\" | A breadcrumb separator which can be strings or custom elements |\n| keygen | ((data: any) => any) \\| string \\| boolean | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n\n### BreadcrumbData\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| title | string\\|ReactElement | - | Displayed content |\n| url | string | - | Link address |\n| onClick | () => void | - | The click event |\n"},1614:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(110),i=n(302),s=n(328),c=[[{title:"Home",url:"#home"},{title:"aaa",url:"#aaa"},{title:"bbb",url:"#bbb"}],{title:r.a.createElement(o.b,{to:"/components/Button"},"Button")},{title:"Self",onClick:function(){return i.a.show("Clicked self")}}];t.default=function(){return r.a.createElement(s.a,{data:c})}},1615:function(e,t){},1616:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 组件调用通过 json 数据配置\n * en - Base\n *    -- The basic usage.\n */\n\nimport React from 'react'\nimport { Link } from 'react-router-dom'\nimport { Breadcrumb, Message } from 'shineout'\n\nconst data = [\n  [{ title: 'Home', url: '#home' }, { title: 'aaa', url: '#aaa' }, { title: 'bbb', url: '#bbb' }],\n  { title: <Link to=\"/components/Button\">Button</Link> },\n  { title: 'Self', onClick: () => Message.show('Clicked self') },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},1617:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(328);function i(){return r.a.createElement("span",null,"~")}var s=[{title:"Home",url:"/"},{title:"Self"}];t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{data:s,separator:"|"}),r.a.createElement(o.a,{data:s,separator:r.a.createElement(i,null)}))}},1618:function(e,t){e.exports="/**\n * cn - 分隔符\n *    -- 默认的分隔符为 '/'，可以通过 separator 属性自定义\n * en - separator\n *    -- The default separator is '/'.\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\n\nfunction Separator() {\n  return <span>~</span>\n}\n\nconst data = [{ title: 'Home', url: '/' }, { title: 'Self' }]\n\nexport default function() {\n  return (\n    <div>\n      <Breadcrumb data={data} separator=\"|\" />\n      <Breadcrumb data={data} separator={<Separator />} />\n    </div>\n  )\n}\n"},1619:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(328),i=n(183),s=[{icon:r.a.createElement(i.a,{name:"home"}),title:"Home",url:"#home"},{title:"Menu"},{title:"Self",url:"https://www.google.com"}];t.default=function(){return r.a.createElement(o.a,{data:s})}},1620:function(e,t){e.exports="/**\n * cn - 图标\n *    -- 带图标的面包屑\n * en - icon\n *    -- Breadcrumbs with icons\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst data = [\n  { icon: <FontAwesome name=\"home\" />, title: 'Home', url: '#home' },\n  { title: 'Menu' },\n  { title: 'Self', url: 'https://www.google.com' },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},302:function(e,t,n){"use strict";var a=n(0),m=n.n(a),r=n(46),o=n.n(r),f=n(109),i=n(4),s=n(5),c=n(1),u=n(6),l=n(7),d=n(2),p=n(42),h=n(17),b=n(122),v=n(22);function g(a){return function(){var e,t=Object(d.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(d.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var y=function(e){Object(u.a)(a,e);var n=g(a);function a(e){var t;return Object(i.a)(this,a),(t=n.call(this,e)).state={messages:[]},t.removeMessage=t.removeMessage.bind(Object(c.a)(t)),t.handleClassName=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"top",t=1<arguments.length?arguments[1]:void 0;return Object(f.a)("item","item-".concat(t?"dismissed":"show","-").concat(e))},t.handleStyle=function(e,t,n){if(!e||null==t)return null;var a={};switch(n){case"bottom-right":case"bottom-left":break;default:a={zIndex:-1,opacity:0,marginTop:-t}}return a},t}return Object(s.a)(a,[{key:"addMessage",value:function(t){var e=this,n=Object(v.c)();return this.setState(Object(p.a)(function(e){e.messages.push(Object.assign({id:n},t))})),0<t.duration&&setTimeout(function(){e.setState(Object(p.a)(function(e){e.messages.forEach(function(e){e.id===n&&(e.dismiss=!0)})}))},1e3*t.duration),this.closeMessageForAnimation.bind(this,n,200,200)}},{key:"removeMessage",value:function(t){var n,e=this.state.messages.filter(function(e){return e.id!==t||(e.onClose&&(n=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),n&&n()}},{key:"closeMessageForAnimation",value:function(){for(var e=this,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=n[0],o=n[1],i=n[2];o?(this.setState(Object(p.a)(function(e){e.messages.forEach(function(e){e.id===r&&(e.dismiss=!0,e.h=i+20)})})),setTimeout(function(){e.removeMessage(r)},o)):this.removeMessage(r)}},{key:"closeEvent",value:function(e,t){if(0===t)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var d=this;return[this.state.messages.map(function(e){var t=e.id,n=e.type,a=e.content,r=e.dismiss,o=e.h,i=e.title,s=e.top,c=e.className,u=e.position,l=e.hideClose;return m.a.createElement("div",{key:t,className:"".concat(d.handleClassName(u,r)," ").concat(c),style:d.handleStyle(r,o,u)},m.a.createElement(b.a,{outAnimation:!0,className:Object(f.a)("msg"),dismiss:r,hideClose:l,onClose:d.closeMessageForAnimation.bind(d,t),icon:!0,iconSize:i?20:14,style:{top:s},type:n},i&&m.a.createElement("h3",null,i),a))})]}}]),a}(h.b);y.displayName="ShineoutMessage";var j=y,k={},w={};function O(e){k[e]&&(o.a.unmountComponentAtNode(k[e]),document.body.removeChild(k[e]),delete k[e]),w[e]&&delete w[e]}function E(r){return new Promise(function(t){var e,n,a=w[r];a?t(a):o.a.render(m.a.createElement(j,{ref:function(e){w[r]=e,t(e)},onDestory:O.bind(null,r)}),(e=r,(n=document.createElement("div")).className=Object(f.a)("_",e),document.body.appendChild(n),k[e]=n))})}var C={},S=function(f){return function(t,n,e){var a=Object.assign({},C,e);n=[n,C.duration,3].find(function(e){return"number"==typeof e});var r=a.onClose,o=a.position,i=void 0===o?"top":o,s=a.title,c=a.className,u=void 0===c?"":c,l=a.top,d=void 0===l?"auto":l,m=a.hideClose;return E(i).then(function(e){return e.addMessage({content:t,duration:n,type:f,onClose:r,title:s,className:u,top:d,position:i,hideClose:m})})}};t.a={show:S("default"),success:S("success"),info:S("info"),warn:S("warning"),warning:S("warning"),danger:S("danger"),error:S("danger"),close:function(e){e?O(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){O(e)})},setOptions:function(e){C=e}}},328:function(e,t,n){"use strict";var a=n(14),r=n(4),o=n(5),i=n(6),s=n(7),c=n(2),u=n(0),l=n.n(u),d=n(13),m=n.n(d),f=n(83),p=n(29),h=(n(32),n(1615)),b=n.n(h),v=n(10),g=Object(v.a)(b.a,"breadcrumb"),y=n(22),j=n(125);function k(a){return function(){var e,t=Object(c.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(c.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(s.a)(this,e)}}var w=function(e){Object(i.a)(n,e);var t=k(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderArray",value:function(e){var n=this,t=e[0];return l.a.createElement("span",null,this.renderItem(t),l.a.createElement("span",{className:g("down")},l.a.createElement(j.a,null)),l.a.createElement(f.a,{position:"bottom"},e.slice(1).map(function(e,t){return l.a.createElement("div",{className:g("dropdown-item"),key:t},n.renderItem(e))})))}},{key:"renderItem",value:function(e){var t=this.props.renderItem,n=e.title;if(!l.a.isValidElement(n))if(e.onClick||e.url){var a={onClick:e.onClick};e.url&&(a.href=e.url),n=l.a.createElement("a",a,e.icon," ",e.title)}else n=l.a.createElement("b",null,e.title);return t?t(e):n}},{key:"render",value:function(){var n=this,e=this.props,a=e.data,r=e.separator,o=e.keygen,t=m()(g("_"),this.props.className);return l.a.createElement("div",{className:t,style:this.props.style},a.map(function(e,t){return l.a.createElement("span",{key:o?Object(y.b)(e,o,t):t},Array.isArray(e)?n.renderArray(e):n.renderItem(e),t!==a.length-1?l.a.createElement("span",{className:g("separator")},r):null)}))}}]),n}(l.a.PureComponent);w.defaultProps=Object(a.a)(Object(a.a)({},p.a),{},{data:[],separator:"/"}),w.displayName="ShineoutBreadcrumb";t.a=w}}]);