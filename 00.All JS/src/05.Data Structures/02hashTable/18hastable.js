const arr = [3, 3, 3, 4, 8]
// arr.splice(0, 3)
// arr1 = arr.slice(0, 3)
function removeItemWithSlice(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
// function twoSum(nums, target) {
//   // nums.length - 1 because our second for loop is scanning all the elements to right of i
//   for (let i = 0; i < nums.length - 1; i++) {
//     // j is +1 of i because we need to scan every element to the right of the first for loop
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }
function twoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // the tricky forumla used to check if the value is already inside the map
    const complement = target - nums[i]

    if (map.has(complement)) {
      // console.log(map.get(complement))
      return [i, map.get(complement)]
    }
    map.set(nums[i], i)
  }
}
console.log(twoSum(arr, 6))
