class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  //peak gets the first item
  peek() {
    return this.first;
  }
  //enqueue adds to the queue
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  //dequeue removes from the queue
  dequeue() {
    if (!this.first) return "stack is empty, nothing to do";
    if (this.first === this.last) this.last = null;
    //     let temp = this.first.next
    this.first = this.first.next;
    //loop to the node before last
    //     this.last
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

let myQueue = new Queue();
console.log(myQueue.enqueue("String"));
console.log(myQueue.enqueue("bai"));
console.log(myQueue.enqueue("hi"));

console.log(myQueue.peek());
//"String" is removed from memory since nothing is pointing to 'String'
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

// console.log(myStack.peek())
