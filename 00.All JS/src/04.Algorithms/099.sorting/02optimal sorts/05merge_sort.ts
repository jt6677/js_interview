/**
 * divide and conqure
 * time complexity:O(n log(n))
 * space complexity:O(n)
 */
const numbers = [99, 44, 6, 2, 1, 5, 63]

function merge(left: number[], right: number[]): number[] {
  const result: number[] = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()!)
    } else {
      result.push(right.shift()!)
    }
  }
  return [...result, ...left, ...right]
}

function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array
  }
  const { length } = array
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

const answer = mergeSort(numbers)
console.log(answer)

export {}
// merge([6], [1, 2])
// console.log(3 < undefined)
