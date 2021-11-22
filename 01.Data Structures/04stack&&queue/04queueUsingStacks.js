/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = [1]
  // console.log('object')
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  const newStack = []
  // console.log('object')
  while (stack.length > 0) {
    // console.log(stack.pop())
    //while loop, keep moving last item of stack to the front of newStack
    newStack.push(stack.pop())
  }
  newStack.push(x)
  while (newStack.length > 0) {
    //while loop, keep moving last item of newStack to the front of this.stack
    //now last item is in the last
    stack.push(newStack.pop())
  }
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return stack.length > 0 ? stack.pop() : undefined
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return stack.length > 0 ? stack[stack.length - 1] : undefined
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return stack.length === 0
}
MyQueue()
console.log(stack)
MyQueue.prototype.push(2)
console.log(stack)
// MyQueue.prototype.push(2)
