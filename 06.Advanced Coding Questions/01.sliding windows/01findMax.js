/**
 * Problem Statement #

Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].


Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
 */

const arr = [2, 3, 4, 1, 5]
function findMax(arr, k) {
  //   let windowStart = 0
  let windowStart = 0
  let windowSum = 0
  let maxSum = 0
  let maxSubArr = []
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //     console.log(windowEnd)
    windowSum += arr[windowEnd]
    if (windowEnd >= k - 1) {
      // if (maxSum !== Math.max(maxSum, windowSum)) {
      //   maxSum = Math.max(maxSum, windowSum)
      //   maxSubArr = [arr[windowEnd - 2], arr[windowEnd - 1], arr[windowEnd]]
      // }
      maxsum = Math.max(maxSum, windowSum)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }
  //   console.log(max.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))[0])
  // console.log(maxSum)
  // console.log(maxSubArr)
  return maxSum
}
findMax(arr, 2)
