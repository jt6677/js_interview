//Map key value pair
let myObj = {}
let a = 'haha'
let b = 'hah'

myObj[a] = 'a'
myObj[b] = 't'
let myMap = new Map([
  [{}, 'a'],
  [a, 'b'],
])
myMap.set({}, 's')
myMap.delete(a)

console.log(myMap) //Map(2) { {} => 'a', {} => 's' }
console.log(myMap.size)
console.log(myMap.has(a))

//Set: non-duplicates,unordered value
const arr = [3, 3, 3, 4, 8]
let mySet = new Set(arr)
let items = mySet.values()
console.log('items', items)
// console.log('items', items.size)
for (let i = 0; i < mySet.size; i++) {
  console.log(items.next())
}
mySet.delete(3)
mySet.has(3)
mySet.add('StringStringString')
console.log(mySet.size)
//Set to Array
let arr1 = [...mySet]
console.log(arr1)
mySet.clear()
// console.log(mySet.has(3)) //Set(3) { 3, 4, 8 }

// let na = [1, 2, 3, 4]
// let newMap = new Map(na)
// console.log(newMap)
