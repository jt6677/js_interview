function twoSum(arr, sum) {
  const mySet = new Set()
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      //       return true
      return [arr.indexOf(sum - arr[i]), i]
    }
    mySet.add(sum - arr[i])
  }
  return false
}

console.log(twoSum([6, 2, 4, 2, 1, 7], 400))
