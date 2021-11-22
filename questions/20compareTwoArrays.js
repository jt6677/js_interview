const arr1 = ['a', 'b', 'c', 'd']
const arr2 = ['e', 'f', 'g']

// 1. can I assume the no repeate item in any of the array, always array?
// 2. output boolean?
// 3. time complexicy? space complexicty?
// 3. nested loop but O(a*b)
// 4. concat any set
function hasCommonItem(arr1, arr2) {
  // Set contains unique value only
  // compare set.size to arr1.length+arr1.length
  // var t0 = performance.now()
  // let arrCombined = [...arr1, ...arr2]
  let arrToSet = new Set([...arr1, ...arr2])
  // var t1 = performance.now()
  // console.log('call takes:' + (t1 - t0) + 'ms')
  // console.log(arrToSet.size)
  // console.log(arr1.length + arr2.length)
  return arrToSet.size === arr1.length + arr2.length
}

// console.log(hasCommonItem(arr1, arr2))
// console.log(hasCommonItem2(arr1, arr2))

function hasCommonItem2(arr1, arr2) {
  //nested loops
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return false
      }
    }
  }
  return true
}
function hasCommonItem3(arr1, arr2) {
  //loop through first array and create object  where properties===items in the array
  //loop through second array and check if item in second array exists on the created obj
  //not nested
  let map = {}

  // return true
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]] === true) return true
  }
  return false
}

function hasCommonItem4(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item))
}

console.log('has4', hasCommonItem4(arr1, arr2))
