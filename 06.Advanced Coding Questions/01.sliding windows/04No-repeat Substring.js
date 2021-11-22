/**
 * Problem Statement #

Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:

Input: String="abccdeg"
Output: 3
 * 
 */

function non_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {}
  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    // if the map already contains the 'rightChar', shrink the window from the
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightCha
      // and if 'windowStart' is already ahead of the last index of 'rightChar
      //       console.log(windowStart > charIndexMap[rightChar] + 1)
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
    }
    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

const str = '1abccd12345'
console.log(non_repeat_substring(str))
