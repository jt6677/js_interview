export {}
/**
 * 1.constraints
 * 2.test cases  [7,1,3,4,9] =7*(4-0)  [6,9,3,6,5,8]=math.max(6*(5-0),8*(5-1)) []=0 [7]=0
 *
 */

// double for loop
// time complexity: o(n*n)
// space complexity: o(1)
// function getMaxWaterContainer(height: number[]): number {
//   let max = 0

//   for (let i = 0; i < height.length; i++) {
//     for (let j = 1; j < height.length; j++) {
//       const area = Math.min(height[i], height[j]) * (j - i)
//       max = Math.max(max, area)
//     }
//   }
//   return max
// }
// console.log(getMaxWaterContainer([6, 9, 3, 6, 5, 8]))
function getMaxWaterContainer(height: number[]): number {
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, area)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}

console.log(getMaxWaterContainer([6, 9, 3, 6, 5, 8]))
