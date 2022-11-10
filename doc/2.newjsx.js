// 在 react17 之前，babel转换是老的写法
const babel = require("@babel/core")

const sourceCode = `
<h1>
  hello <span style={{ color: 'red' }}>world</span>
</h1>
`

const result = babel.transform(sourceCode, {
  plugins: [
    ["@babel/plugin-transform-react-jsx", {runtime: "automatic"}]
  ]
})

console.log('result',result)
// 执行结果
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
_jsxs("h1", {
  children: ["hello ", /*#__PURE__*/_jsx("span", {
    style: {
      color: 'red',
    },
    children: "world"
  })]
});

// React.createElement 约等于 _jsxs
// 新版里面子元素放到 children 里面了 => 老版本不包括 children

// === 对比
// 以前需要在代码中手动引入 React，现在不需要手动引入 React 了。
