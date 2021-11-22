//stacks: Last in first Out  (browser history)
//queues: First in First Out

//=============Stacks===============
// newValue,3,2,1
// top gets removed first
//=============Queues===============
// linked list: never use index
// 1,2,3,4,newValue
// top gets removed first
// O(1): just remove the head, make head.next the new head
//===================================
//fast operation, fast peek,order
//slow lookup
//===================================

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  //peek gets the top item
  peek() {
    return this.top
  }
  push(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      let temp = this.top
      this.top = newNode
      this.top.next = temp
    }

    this.length++
    return this
  }

  //pop removes from the top
  pop() {
    if (!this.top) return 'stack is empty, nothing to do'
    if (this.top === this.bottom) this.bottom = null
    this.top = this.top.next
    this.length--
    return this
  }
  isEmpty() {
    return this.length === 0
  }
}

let myStack = new Stack()
console.log(myStack.push(1))
console.log(myStack.push(3))
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
// console.log(myStack.peek())
