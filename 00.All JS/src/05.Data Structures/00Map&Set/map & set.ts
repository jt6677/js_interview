export {}
// Map holds key-value pairs, where the keys are uique and the values can be any type.
// if using objects as keys, it is using referrence
// Map keeps order of insertion
const myMap = new Map()
myMap.set('key1', 'values')
myMap.set('key1', 'value1')
myMap.set({}, 'values2')
myMap.set({}, 'values3')
myMap.delete('key1')
myMap.has('key1')
for (const m of myMap) {
  console.log(m)
}
// console.log(myMap)

// Set holds unique values of any type
const arr = [1, 2, 3, 4, 5, 4, 5, 3]
const mySet = new Set(arr)
mySet.add(6)
mySet.has(6)
// mySet.forEach(m=>console.log(m))
for (const m of mySet) {
  console.log(m)
}
console.log(mySet)
