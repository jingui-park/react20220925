// 执行结果
// import { jsx as _jsx } from "react/jsx-runtime";
// import { jsxs as _jsxs } from "react/jsx-runtime";
// _jsxs("h1", {
//   children: ["hello ", /*#__PURE__*/_jsx("span", {
//     style: {
//       color: 'red',
//     },
//     children: "world"
//   })]
// });
import hasOwnProperty from 'shared/hasOwnPropery'
import {REACT_ELEMENT_TYPE} from 'shared/ReactSymbols'
// 保留属性，这些属性不会放到 props 上
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
}
// 第一个值是 type “h1” "span"
// 第二个值是 config
export function jsxDEV(type, config) {
  let propName; // 属性名
  const props = {}; // 属性对象
  let key = null; // 每个虚拟DOM可以有一个可选的 key 属性，用来区分一个父节点下的不同子节点
  let ref = null; // 引入，后面可以通过它获取到真实dom的需求
  if(hasValidKey(config)) {
    key = config.key
  }
  if(hasValidRef(config)) {
    ref = config.ref
  }
  // 循环遍历 config 对象(将 config 上的属性拷贝到 props 上)
  for(let key in config) {
    // config 上的属性赋值给 props
    if(hasOwnProperty.call(config, key)) {
      // 保留属性上不存在对应的 key
      if(!RESERVED_PROPS.hasOwnProperty(key)) {
        props[key] = config[key]
      }
    }
  }

  // 赋值完成 => 工厂方法 ReactElement
  return ReactElement(type, key, ref, props)
}

function hasValidKey(config) {
  return config.key !== undefined
}
function hasValidRef(config) {
  return config.ref !== undefined
}

// 工厂方法，最终返回一个对象
function ReactElement(type, key, ref, props) {
  // 这就是 React 元素，也被称为 虚拟dom
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type, // h1, span
    key, // 唯一标识，没给
    ref, // 用来获取真实 dom 元素
    props, // 属性 children id style
  }
}
