/**             binary search tree
 *      left node is smaller than its parent
 *      right node is bigger than its parent
 *      one node can only have two children
 */
class Node {
  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
    } else {
      // find the correct position in the
      // tree and add the node
      this.insertNode(this.root, newNode)
    }
  }
  //====================helper fn============================
  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node = this.root, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode)
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode)
    }
  }
  // Performs inorder traversal of a tree
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left)
      console.log(node.data)
      this.inorder(node.right)
    }
  }
  // Performs preorder traversal of a tree
  preorder(node) {
    if (node !== null) {
      console.log(node.data)
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }
  // Performs postorder traversal of a tree
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.data)
    }
  }
  //  finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node
    else return this.findMinNode(node.left)
  }

  // search for a node with given data, recursive
  searchRecursive(node, data) {
    // if trees is empty return null
    if (node === null) {
      return null
    }
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data)
    // if data is less than node's data
    // move left
    else if (data > node.data) return this.search(node.right, data)
    // if data is equal to the node data
    // return node
    else return node
  }
  // search for a node with given data,iterative
  searchIterative(data) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
        currentNode = currentNode.right
      } else if (currentNode.data === data) {
        return currentNode
      }
    }
    return null
  }
  remove(data) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (data < currentNode.data) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (currentNode.data === data) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            //if parent > current data, make current left child a child of parent
            if (currentNode.data < parentNode.data) {
              parentNode.left = currentNode.left

              //if parent < current data, make left child a right child of parent
            } else if (currentNode.data > parentNode.data) {
              parentNode.right = currentNode.left
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.data < parentNode.data) {
              parentNode.left = currentNode.right

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.data > parentNode.data) {
              parentNode.right = currentNode.right
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left
          leftmost.right = currentNode.right

          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (currentNode.data < parentNode.data) {
              parentNode.left = leftmost
            } else if (currentNode.data > parentNode.data) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
  }

  // helper method that calls the
  // removeNode with a given data
  removeRecursive(data) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data)
  }

  // Method to remove node with a
  // given data
  // it recur over the tree to find the
  // data and removes it
  removeNode(node, key) {
    // if the root is null then tree is
    // empty
    if (node === null) return null
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key)
      return node
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key)
      return node
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      var aux = this.findMinNode(node.right)
      node.data = aux.data

      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.removeRecursive(15)
tree.remove(170)
// console.log(tree.lookup(170))
// console.log(tree.root)
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { data: node.data }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
