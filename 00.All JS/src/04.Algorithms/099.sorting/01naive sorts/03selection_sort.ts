const arr1 = [3, 1, 2, 45, 4, 65, 2, 55, 22, 55, 33, 1100, 99]

function selectionSort(array: number[]): number[] {
  const arr = array
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i
    const temp = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    arr[i] = arr[indexOfMin]
    arr[indexOfMin] = temp
  }
  return arr
}

// let res = selectionSort(arr1)
// console.log(res)
console.log(selectionSort(arr1))
export {}
