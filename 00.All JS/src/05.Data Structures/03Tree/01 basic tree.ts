class TreeNode<T> {
  data: T

  children: TreeNode<T>[] = []

  constructor(data: T) {
    this.data = data
    this.children = []
  }

  add(data: T) {
    this.children.push(new TreeNode(data))
  }

  remove(data: T) {
    this.children = this.children.filter((node) => node.data !== data)
  }
}

class Tree {
  root: TreeNode<any> | null = null

  constructor() {
    this.root = null
  }

  traverseBF(callback: (node: TreeNode<any>) => void) {
    const queue = [this.root]

    while (queue.length) {
      const node = queue.shift()
      if (node) {
        queue.push(...node.children)
        callback(node)
      }
    }
  }

  traverseDF(callback: (node: TreeNode<any>) => void) {
    const stack = [this.root]

    while (stack.length) {
      const node = stack.shift()
      if (node) {
        stack.unshift(...node.children)
        callback(node)
      }
    }
  }
}

const node = new TreeNode(1)
node.add(2)
node.add(3)
node.add(4)
const tree = new Tree()
tree.root = node
tree.traverseBF((n) => {
  console.log(n.data + 1)
})
// console.log(tree)
export {}
