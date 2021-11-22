//==============objects are pointer=============
// let obj1 = { a: true }
// let obj2 = obj1
// obj2.a = false
// obj2 = { b: true }

//{a:"hahah"}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
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
      this.tail = this.head
      // this.length ++
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this.printList()
  }
  prepend(value) {
    const newNode = new Node(value)
    this.head.prev = newNode
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
    let follower = leader.next
    leader.next = newNode
    newNode.next = follower
    newNode.prev = leader
    follower.prev = newNode
    this.length++
    return this.printList()
  }
  remove(index) {
    if (typeof index !== 'number' || index < 0) return this.printList()
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
      // return this.printList()
    } else if (index >= this.length - 1) {
      let leader = this.traverseToIndex(this.length - 2)
      leader.next = null
      this.tail = leader
    } else {
      let leader = this.traverseToIndex(index - 1)
      let unwantedNode = leader.next
      leader.next = unwantedNode.next
      leader.next.prev = leader
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
    return this.printList()
  }

  reverse() {
    let temp = null
    let currentNode = this.head
    while (currentNode !== null) {
      temp = currentNode.prev
      currentNode.prev = currentNode.next
      currentNode.next = temp
      currentNode = currentNode.prev
    }
    if (temp !== null) {
      this.tail = this.head
      this.head = temp.prev
    }
    return this.printList()
    // return this
  }

  reverse1() {
    let currentNode = this.head
    let arr = []
    while (currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    // console.log(arr)
    this.length = 0
    for (let i = arr.length - 1; i >= 0; i--) {
      this.append(arr[i])
    }
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

const myLinkedList = new LinkedList()
myLinkedList.append(5)
myLinkedList.append(30)
myLinkedList.append(888)
myLinkedList.reverse1()
console.log(myLinkedList)
//==================reverse arrary=========================
// const arr0 = [1, 2, 3, 4, 5, 6, 7, 100, 101, 0]

// function reverse(arr) {
//   let newArr = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i])
//   }
//   return newArr
// }
// ///==========
// //7
// function reverse2(arr) {
//   // let arrNew = [...arr]
//   for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i]
//     // console.log(temp)
//     arr[i] = arr[arr.length - i - 1]
//     arr[arr.length - i - 1] = temp
//   }
//   return arr
// }

// console.log(reverse2(arr0))
