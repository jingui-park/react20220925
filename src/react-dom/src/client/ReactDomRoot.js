// createContainer 创建的是一个 FiberRootNode 对象 { containerInfo: xxx }
import { createContainer} from 'react-reconciler/src/ReactFiberReconciler'

// internalRoot 内部的根
function ReactDomRoot(internalRoot) {
  this._internalRoot = internalRoot
}

// ! 入口
// 简单来说 FiberRootNode = containerInfo，它的本质就是一个真实的容器 DOM 节点 div#root
// { containerInfo: div#root }
// 其实就是一个真实的DOM

/**
 * @param {*} container  根节点 div#root
 * @returns
 * {
 *  _internalRoot: {
 *     containerInfo: div#root
 *   }
 * }
 */
export function createRoot(container) {
  const root = createContainer(container)
  return new ReactDomRoot(root)
}
