const arr1 = [1, 2, 3, 4, 5]
const arr2 = [4, 22, 44, 51, 72]

//1.inputs are array? all numbers?repeated value?
//2.  concat and sort

//=======solution for loop

function mergeSortedArrays1(arr1, arr2) {
  let numArray = [...arr1, ...arr2]
  for (var i = 0; i < numArray.length - 1; i++) {
    var min = i
    //finding the minium
    for (var j = i + 1; j < numArray.length; j++) {
      if (numArray[j] < numArray[min]) {
        min = j
      }
    }
    if (min != i) {
      var target = numArray[i]
      numArray[i] = numArray[min]
      numArray[min] = target
    }
  }
  return numArray
}
//======Array.sort()
function mergeSortedArrays2(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
}

//===============
function mergeSortedArrays3(arr1, arr2) {
  const mergedArr = []
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]
  let i,
    j = 1
  //check input
  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1
  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      mergedArr.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }
  return mergedArr
}

// console.log(mergeSortedArrays1(arr1, arr2).reverse())
console.log(mergeSortedArrays3(arr1, arr2))
