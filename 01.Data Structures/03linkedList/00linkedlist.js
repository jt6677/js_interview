//pointer
// let obj1 = { a: true }
// let obj2 = obj1
// obj2.a = false
// obj2 = { b: true }

//{a:"hahah"}
//===================Linked List=============
// linked list: scatter allover memory, with pointers pointing to each other
//pro: easy to increase in length
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

const myLinkedList = new LinkedList(0)
myLinkedList.append(5)
myLinkedList.append(30)
myLinkedList.prepend(99)
// myLinkedList.printList()
myLinkedList.insert(889, 1)
// myLinkedList.delete(4)
// myLinkedList.remove(4)
// console.log(myLinkedList.search(889))
myLinkedList.reverse()
console.log(myLinkedList.tail)
