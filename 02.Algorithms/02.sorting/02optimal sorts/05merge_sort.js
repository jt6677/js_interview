/**
 * divide and conqure
 * time complexity:O(n log(n))
 * space complexity:O(n)
 */
const numbers = [99, 44, 6, 2, 1, 5, 63]

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  // console.log('left:', left)
  // console.log('right:', right)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0
  console.log('object', left, right)
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // console.log('merge:', left[leftIndex], left)
      result.push(left[leftIndex])
      leftIndex++
    } else {
      // console.log('merge:', right[rightIndex], right)
      // console.log(right[rightIndex])
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  // let concated = result
  //   .concat(left.slice(leftIndex))
  //   .concat(right.slice(rightIndex))
  // console.log('result: ', concated)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(numbers)
console.log(answer)
// merge([6], [1, 2])
// console.log(3 < undefined)
