/**
 * nearly sort and small data set
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      // console.log(array[i])
      array.unshift(array.splice(i, 1)[0])
      console.log(array)
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        console.log('f', array[i], array[i - 1])
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            console.log('s', array[i], array[j - 1], array[j])
            //move number to the right spot
            //array.splice(i, 1)[0]:
            // remove 1 item from index i
            //[0] give the value, instead of array

            //array.splice(j, 0,"xx")
            //insert 'xx' at j index, delete 0 item from index j
            array.splice(j, 0, array.splice(i, 1)[0])
            // console.log(array)
          }
        }
      }
    }
  }
}

// console.log(numbers.splice(2, 1)[0])
insertionSort(numbers)
console.log(numbers)
// console.log(numbers)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 300];

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
