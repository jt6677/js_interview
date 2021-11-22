/**
 * Problem Statement #

Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
 */
export {}

function max_sub_array_of_size_k(k: number, arr: number[]): number {
  let maxSum = 0
  let windowSum = 0
  for (let i = 0; i < arr.length - k + 1; i) {
    windowSum = 0
    for (let j = i; j < k; j++) {
      windowSum += arr[j]
    }
    maxSum = Math.max(windowSum, maxSum)
  }
  return maxSum
}
console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]))

/**
 * Problem Statement #

Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
 */

function smallest_subarray_with_given_sum(s: number, arr: number[]) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] // add the next element
    // shrink the window as small as possible until the 'window_sum' is smalle
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
  if (minLength === Infinity) {
    return 0
  }
  return minLength
}
