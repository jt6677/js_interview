class TreeNode<T> {
  data: T

  left: TreeNode<T> | null = null

  right: TreeNode<T> | null = null

  constructor(data: T) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data: T) {
    if (data < this.data && this.left) {
      this.left.insert(data)
    } else if (data < this.data) {
      this.left = new TreeNode(data)
    } else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if (data > this.data) {
      this.right = new TreeNode(data)
    }
  }

  search(data: T): boolean {
    if (data === this.data) {
      return true
    }
    if (data < this.data && this.left) {
      return this.left.search(data)
    }
    if (data > this.data && this.right) {
      return this.right.search(data)
    }
    return false
  }

  isValidBST(node: TreeNode<T>, min = null, max = null): boolean {
    if (max !== null && node.data > max) {
      return false
    }
    if (min !== null && node.data < min) {
      return false
    }
    if (node.left && !this.isValidBST(node.left, min, node.data)) {
      return false
    }
    if (node.right && !this.isValidBST(node.right, node.data, max)) {
      return false
    }
    return true
  }
}
// console.log(tree)
export {}
