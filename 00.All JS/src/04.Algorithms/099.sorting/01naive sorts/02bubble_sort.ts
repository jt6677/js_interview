const arr1 = [2, 3, 45, 4, 65, 2, 55, 22, 55, 33, 1100, 99]
// O(n^2)
// arr[j]>undefined ===false
// undefined > undefined ===false
function bubbleSort(array: number[]): number[] {
  const arr = array
  const { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      //       console.log(arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr1))
export {}
// const insertionSort1 = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     while (array[i] < array[i - 1]) {
//       let holdValue = array[i]
//       array[i] = array[i - 1]
//       array[i - 1] = holdValue
//       i--
//     }
//   }

//   return array
// }

// console.log(insertionSort1(numbers))

// console.log(undefined > undefined)
