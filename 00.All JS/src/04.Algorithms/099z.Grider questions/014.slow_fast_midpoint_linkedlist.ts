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

function midpoint(list: LinkedList<any>): LinkedNode<any> | null {
  let slow = list.getAt(0)
  let fast = list.getAt(0)
  if (slow && fast) {
    while (fast.next && fast.next.next) {
      slow = slow.next!
      fast = fast.next.next
    }
  }
  return slow
}
const l = new LinkedList()
l.insertLast('a')
l.insertLast('b')
l.insertLast('c')
l.printList()
console.log(
  midpoint(l) // returns { data: 'b' }
)
export {}
