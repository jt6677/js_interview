/** 
 * Problem Statement #

Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
 */

//TODO:
//1. all of  subarray.sum ===s
//2. find the smallest

function findMin(arr, s) {
  let minArr = []
  let windowEnd = 0
  //   let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    //   const element = arr[i];
    for (let windowStart = i; windowStart < arr.length; windowStart++) {
      sum += arr[windowStart]
      //       console.log(sum)
      if (sum >= s) {
        let newArr = []
        // console.log(sum)
        for (let j = i; j <= windowStart; j++) {
          //   console.log('ss', arr[j])
          newArr.push(arr[j])
        }
        // console.log(newArr)
        minArr.push(newArr)
        // sum = 0
        break
      }
    }
  }
  //   console.log(minArr)
  if (minArr.length > 0) {
    let shortestArr = minArr[0]
    for (let k = 0; k < minArr.length; k++) {
      if (
        shortestArr.length !== Math.min(shortestArr.length, minArr[k].length)
      ) {
        shortestArr = minArr[k]
      }
    }
    //     console.log(shortestArr)
    return shortestArr.length
  } else {
    return 0
  }
}

// const arr = [3, 4, 1, 1, 6]
// console.log(findMin(arr, 8))
//================================================================
function findSmallestSbuArray(arr, s) {
  let windowSum = 0
  let minLength = Infinity
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    while (windowSum >= s) {
      console.log(arr[windowEnd])
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
  if (minLength === Infinity) return 0
  return minLength
}
const arr = [3, 4, 1, 1, 6]
console.log(findSmallestSbuArray(arr, 8))
