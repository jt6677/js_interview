const sorted = [-1, 0, 1, 2, 3, 4, 6, 10, 22, 33]
//length=10
// return the index of a num in this array

function BinarySearch(arr, left, right, num) {
  //validate input
  if (left > right) {
    return -1
  }
  let mid = Math.floor((left + right) / 2)
  //   console.log(mid)
  if (num === arr[mid]) {
    return mid
  }
  if (num < arr[mid]) {
    return BinarySearch(arr, left, mid - 1, num)
  }
  return BinarySearch(arr, mid + 1, right, num)
}
const res = BinarySearch(sorted, 0, 9, 133)
console.log(res)
console.log(sorted[res])
// console.log(Math.floor(1.5))
