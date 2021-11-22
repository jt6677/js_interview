// pointer
// let obj1 = { a: true }
// let obj2 = obj1
// obj2.a = false
// obj2 = { b: true }

// {a:"hahah"}
//= ==================Linked List=============
// linked list: scatter allover memory, with pointers pointing to each other
// pro: easy to increase in length

class LinkedNode<T> {
  private _elem: T

  public next: LinkedNode<T> | null

  constructor(value: T, next: LinkedNode<T> | null = null) {
    this._elem = value
    this.next = next
  }

  get elem(): T {
    return this._elem
  }
}

class LinkedList<T> {
  private head: LinkedNode<T> | null = null

  constructor(headElement?: LinkedNode<T>) {
    this.head = headElement || null
  }

  public insertFirst(elem: T) {
    this.head = new LinkedNode(elem, this.head)
  }

  get size(): number {
    let counter = 0
    if (this.head === null) {
      return counter
    }
    let currentNode: LinkedNode<T> | null = this.head
    while (currentNode) {
      counter += 1
      currentNode = currentNode.next
    }
    return counter
  }

  get first(): LinkedNode<T> | null {
    return this.head
  }

  get last(): LinkedNode<T> | null {
    if (this.head === null) {
      return null
    }
    let currentNode: LinkedNode<T> | null = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (this.head === null) {
      return
    }
    this.head = this.head.next
  }

  removeLast() {
    if (this.head === null) {
      return
    }
    let currentNode: LinkedNode<T> | null = this.head
    let prev: LinkedNode<T> | null = this.head
    while (currentNode.next) {
      prev = currentNode
      currentNode = currentNode.next
    }
    prev.next = null
  }

  insertLast(elem: T) {
    const newNode = new LinkedNode(elem)

    const lastNode = this.last
    if (lastNode) {
      lastNode.next = newNode
    } else {
      this.head = newNode
    }
  }

  getAt(index: number): LinkedNode<T> | null {
    if (index < 0 || index >= this.size) {
      return null
    }
    let currentNode: LinkedNode<T> | null = this.head
    let counter = 0
    while (currentNode) {
      if (counter === index) {
        return currentNode
      }
      currentNode = currentNode.next
      counter += 1
    }
    return null
  }

  removeAt(index: number): void {
    if (index < 0 || index >= this.size) {
      return
    }
    if (index === 0) {
      this.head = this.head!.next
      return
    }
    let currentNode: LinkedNode<T> | null = this.head
    let prev: LinkedNode<T> | null = this.head
    let counter = 0
    while (currentNode) {
      if (counter === index) {
        prev!.next = currentNode.next
        return
      }
      prev = currentNode
      currentNode = currentNode.next
      counter += 1
    }
  }

  insertAt(index: number, elem: any) {
    if (index < 0) {
      return
    }
    if (index === 0) {
      this.insertFirst(elem)
      return
    }
    if (index > this.size) {
      this.insertLast(elem)
    } else {
      const prev = this.getAt(index - 1)
      prev!.next = new LinkedNode(elem, prev!.next)
    }
  }

  search(elem: T): LinkedNode<T> | null {
    let result = null
    let currentNode: LinkedNode<T> | null = this.head
    while (currentNode) {
      if (currentNode.elem === elem) {
        result = currentNode
        break
      }
      currentNode = currentNode.next
    }
    return result
  }

  reverse() {
    if (this.head) {
      let currentNode = this.head.next
      let prev = this.head
      prev.next = null
      while (currentNode) {
        const { next } = currentNode
        currentNode.next = prev
        prev = currentNode
        currentNode = next
      }
      this.head = prev
      this.printList()
    } else {
      console.log('empty list')
    }
  }

  printList() {
    const arr = []
    let currnetNode = this.head
    while (currnetNode) {
      arr.push(currnetNode.elem)
      currnetNode = currnetNode.next
    }
    console.log(arr)
  }
}

export {}
const list = new LinkedList<number | string>(new LinkedNode(1))
list.insertFirst('2')
list.insertFirst('hui')
console.log(list)
// list.removeLast()
list.insertLast('3')
list.removeAt(2)
// list.insertAt(0, '3')
console.log(list)
list.printList()
list.reverse()
// console.log(list.getAt(2))
// console.log(list.last)

// list.head = new LinkedNode(1)
// class LinkedList {
//   constructor(value) {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   append(value) {
//     const newNode = new Node(value)
//     if (this.length === 0) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.tail.next = newNode
//       this.tail = newNode
//     }
//     this.length++
//     return this.printList()
//   }
//   prepend(value) {
//     const newNode = new Node(value)
//     newNode.next = this.head
//     this.head = newNode
//     this.length++
//     return this.printList()
//   }
//   insert(value, index) {
//     if (index === 0) {
//       return this.prepend(value)
//     }
//     if (index >= this.length) {
//       return this.append(value)
//     }
//     let newNode = new Node(value)
//     //===========method 1=============
//     // let currentNode = this.head
//     // for (let i = 0; i < index - 1; i++) {
//     //   currentNode = currentNode.next
//     // }
//     // newNode.next = currentNode.next
//     // currentNode.next = newNode
//     // this.length++
//     // return this.printList()
//     //===========method 2=============
//     //get the previous position
//     let leader = this.traverseToIndex(index - 1)
//     let temp = leader.next
//     leader.next = newNode
//     newNode.next = temp
//     this.length++
//     return this.printList()
//   }
//   remove(index) {
//     if (typeof index !== 'number' || index < 0) return this.printList()
//     if (index === 0) {
//       this.head = this.head.next
//       // return this.printList()
//     } else if (index >= this.length) {
//       let leader = this.traverseToIndex(this.length - 2)
//       leader.next = null
//       this.tail = leader
//     } else {
//       let leader = this.traverseToIndex(index - 1)
//       let unwantedNode = leader.next
//       leader.next = unwantedNode.next
//     }
//     this.length--
//     return this.printList()
//   }

//   search(value) {
//     let currentNode = this.head
//     let result = null
//     while (currentNode) {
//       if (currentNode.value === value) {
//         result = currentNode
//         break
//       }
//       currentNode = currentNode.next
//     }
//     return result
//   }
//   reverse() {
//     let prev = this.head
//     let currentNode = this.head.next
//     prev.next = null

//     while (currentNode) {
//       const next = currentNode.next
//       currentNode.next = prev
//       prev = currentNode
//       currentNode = next
//     }
//     this.tail = this.head
//     this.head = prev
//     return this.printList()
//   }

//   //=====================helper fns==================
//   traverseToIndex(index) {
//     if (typeof index !== 'number') return
//     let counter = 0
//     let currentNode = this.head
//     while (counter !== index) {
//       currentNode = currentNode.next
//       counter++
//     }
//     return currentNode
//   }

//   printList() {
//     const arr = []
//     let currentNode = this.head
//     while (currentNode != null) {
//       arr.push(currentNode.value)
//       currentNode = currentNode.next
//     }
//     return console.log(arr)
//   }
// }

// const myLinkedList = new LinkedList(0)
// myLinkedList.append(5)
// myLinkedList.append(30)
// myLinkedList.prepend(99)
// // myLinkedList.printList()
// myLinkedList.insert(889, 1)
// // myLinkedList.delete(4)
// // myLinkedList.remove(4)
// // console.log(myLinkedList.search(889))
// myLinkedList.reverse()
// console.log(myLinkedList.tail)
