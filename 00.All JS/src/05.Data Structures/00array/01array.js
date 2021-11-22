//================Array==============
//array:dynamic or fixed sized array
//squential in memory
//con: dynamic array doubled in memory when new length exceeds old length

const arr = [1, 2, 3, 4, 5]
//4*4=16 bits
//++++++++++++++++
//fast lookups,push/pop,odered
//slow inserts deletes
//++++++++++++++++
//adds the item to the End
arr.push(6) //O(1)
//adds the item to the Beginning
arr.unshift('x') // O(n)

//removes the first Item
arr.shift() // O(n)
//removes the last Item
arr.pop() //O(1)

//(start index, count to delete, thing to add)
//original:[ 1, 2, 3, 4, 5 ]
arr.splice(2, 0, 'alien') // O(n)
//result:[ 1, 2,'alien', 3, 4, 5 ]
arr.splice(2, 1, 'alien')
//result:[ 1, 2,'alien', 4, 5 ]

//slice:return a new arr form (start, end) ,
var arr1 = arr.slice(1, 6)
// console.log(arr)
// console.log(arr1)

//=========reference type
//[]===[]  //false
//array and object are reference types

//var obj1={String:bai}
//var ojb2=obj1  // refer to the memory address
//var obj3={String:bai}
// obj3===obj1  false

//==============implementing Arrary
class MyArray {
  constructor(length = 0, data = {}) {
    this.length = length
    this.data = data
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const myArr = new MyArray()
// console.log(myArr)
myArr.push('hello baiString')
myArr.push('aaaaa')
myArr.push('bbbbaa')
console.log(myArr.data)
// console.log(myArr.pop())

myArr.delete(6)
console.log(myArr.data)
