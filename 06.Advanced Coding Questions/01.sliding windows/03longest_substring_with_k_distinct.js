/**
 * Problem Statement #

Given a string, find the length of the longest substring in it with no more than K distinct characters.

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 */

function longest_substring_with_k_distinct(str, k) {
  let mySet = new Set()
  let windowStart = 0
  let strLongest = 0
  let currentStr = ''
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //get the string from the windowStart to windowEnd+1 (not inclusive)
    currentStr = str.substring(windowStart, windowEnd + 1)
    //split the string into array
    let currentStrArr = [...currentStr.split('')]
    //add each character to a set, set contains unique value only
    currentStrArr.forEach((i) => mySet.add(i))

    // if size of set > k
    if (mySet.size > k) {
      //compare length, update strLongest
      strLongest = Math.max(
        str.substring(windowStart, windowEnd + 1).length,
        strLongest
      )
      //clear mySet for a new round
      mySet.clear()
      windowStart += 1
    }
  }
  //strLongest -1 because mySet.size>k, went over  by 1
  return strLongest - 1
}

const str = 'araxaxaxci'
const k = 1
console.log(longest_substring_with_k_distinct(str, k))

//=================standard answer===================
function longest_substring_with_k_distinct1(str, k) {
  let windowStart = 0
  let maxlength = 0
  let charFrequency = {}
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0
    }
    charFrequency[rightChar] += 1

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart]
      //reduce the frequency
      charFrequency[leftChar] -= 1
      //check which char is reduced to 0 first
      //then take it off the hash table
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar]
      }
      //shrink the window
      windowStart += 1
    }
    maxlength = Math.max(maxlength, windowEnd - windowStart + 1)
  }
  return maxlength
}

console.log(longest_substring_with_k_distinct1(str, k))
