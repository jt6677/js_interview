const arr1 = [3, 1, 2, 45, 4, 65, 2, 55, 22, 55, 33, 1100, 99]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    let temp = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}

// let res = selectionSort(arr1)
// console.log(res)
console.log(selectionSort(arr1))
