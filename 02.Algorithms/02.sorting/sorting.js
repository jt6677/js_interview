// naive sort : O(n*n) [bubble,insertion,selection sort]
// optimal sorts :O(n * log n) [merge,quick,heap sort]

// The stability of a sorting algorithm is concerned with how the algorithm treats equal (or repeated) elements. Stable sorting algorithms preserve the relative order of equal elements,
const letters = ['a', 'z', 'l', 'k', 'g']
console.log(letters.sort())

const basket = [2, 3, 45, 4, 65, 2, 55, 22, 55, 33, 99]
// console.log(basket.sort())
// console.log(basket.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)))
// [
//         2,  2, 22,  3, 33,
//         4, 45, 55, 55, 65,
//        99
//      ]
//!!!sort convert number to string
// array.unshift(array.splice(i, 1)[0])

console.log(basket.splice(1, 0, '22'))
console.log(basket)
// console.log(basket.unshift(1))
