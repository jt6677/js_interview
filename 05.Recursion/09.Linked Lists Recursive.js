/**
 * Linked List Reversal
 */
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this.printList()
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this.printList()
  }
  insert(value, index) {
    if (index === 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }
    let newNode = new Node(value)
    //===========method 1=============
    // let currentNode = this.head
    // for (let i = 0; i < index - 1; i++) {
    //   currentNode = currentNode.next
    // }
    // newNode.next = currentNode.next
    // currentNode.next = newNode
    // this.length++
    // return this.printList()
    //===========method 2=============
    //get the previous position
    let leader = this.traverseToIndex(index - 1)
    let temp = leader.next
    leader.next = newNode
    newNode.next = temp
    this.length++
    return this.printList()
  }
  remove(index) {
    if (typeof index !== 'number' || index < 0) return this.printList()
    if (index === 0) {
      this.head = this.head.next
      // return this.printList()
    } else if (index >= this.length) {
      let leader = this.traverseToIndex(this.length - 2)
      leader.next = null
      this.tail = leader
    } else {
      let leader = this.traverseToIndex(index - 1)
      let unwantedNode = leader.next
      leader.next = unwantedNode.next
    }
    this.length--
    return this.printList()
  }

  search(value) {
    let currentNode = this.head
    let result = null
    while (currentNode) {
      if (currentNode.value === value) {
        result = currentNode
        break
      }
      currentNode = currentNode.next
    }
    return result
  }
  reverse() {
    let prev = this.head
    let currentNode = this.head.next
    prev.next = null

    while (currentNode) {
      const next = currentNode.next
      currentNode.next = prev
      prev = currentNode
      currentNode = next
    }
    this.tail = this.head
    this.head = prev
    return this.printList()
  }
  sort() {
    let currentNode = this.head
  }

  reverseRecursive(currentNode = this.head) {
    if (currentNode === null || currentNode.next === null) {
      this.tail = this.head
      //       console.log(this.tail)
      return currentNode
    }
    let p = this.reverseRecursive(currentNode.next)
    currentNode.next.next = currentNode
    currentNode.next = null
    this.head = p
    //     return this.printList()
    return p
  }

  //=====================helper fns==================
  traverseToIndex(index) {
    if (typeof index !== 'number') return
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  printList() {
    const arr = []
    let currentNode = this.head
    while (currentNode != null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return console.log(arr)
  }
}

const ll1 = new LinkedList()
// ll1.prepend(99)
ll1.append(-99)
ll1.append(5)
ll1.append(30)
// ll1.printList()
// ll1.insert(889, 1)
// ll1.delete(4)
// ll1.remove(4)
// console.log(ll1.search(889))
// ll1.reverse()
// console.log(ll1.reverseRecursive())
// console.log(ll1.head)
// console.log(ll1.tail)
const ll2 = new LinkedList()
ll2.append(1)
ll2.append(20)
ll2.append(23)
function sortedMerge(a, b) {
  if (a === null) return b
  if (b === null) return a
  if (a.value < b.value) {
    a.next = sortedMerge(a.next, b)
    return a
  } else {
    b.next = sortedMerge(a, b.next)
    return b
  }
}

console.log(sortedMerge(ll2.head, ll1.head))
