//========================================
//Last in to put in the end of array
//peek last item of array
//pop removes the last item of array
class Stack {
  constructor() {
    // this.top = null
    // this.bottom = null
    this.array = []
  }
  //peak gets the last item
  peek() {
    if (this.array.length === 0) return 'empty stack'
    return this.array[this.array.length - 1]
  }
  //push to the last item
  push(value) {
    // let oldArr = [...this.data]
    // this.array = [...this.array, value]
    this.array.push(value)
    return this.array
  }

  //pop removes
  pop() {
    if (this.array.length > 0) {
      this.array.pop()
    }
    return this
  }
  isEmpty() {
    return this.array.length === 0
  }
}

let myStack = new Stack()
console.log(myStack.push(1))
console.log(myStack.push(3))
console.log(myStack.pop())
console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())
