const arr0 = [4, 5, 5, 1, 4, 3, 5, 1, 2, 4]
//return
const arr1 = [2, 1, 4, 5, 1, 2, 3, 5, 1, 2, 4]
//return 1
const arr2 = [2, 1, 4]
function RecurringNum0(arr) {
  let indx = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        // return arr[i]
        indx.push(j)
      }
    }
  }
  if (indx.length) {
    indx.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    return arr[indx[0]]
  } else {
    return undefined
  }
}
function RecurringNum(arr) {
  if (!arr.length) return
  //   console.log(arr.length)
  let map = {}
  //   let firstRecurringNum = undefined
  for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i]

    if (!map[arr[i]]) {
      map[arr[i]] = true
      //       console.log(map)
    } else {
      //       console.log(arr[i])
      return arr[i]
    }
  }
  return undefined
}

// console.log(RecurringNum0([1, 2, 3, 4, 9, 9]))
// console.log(RecurringNum(arr0))
console.log(RecurringNum0(arr0))
