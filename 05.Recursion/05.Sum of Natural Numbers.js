let calculation = 0
function sumNaturalNums(num) {
  if (num <= 1) {
    return num
  }
  calculation++
  return num + sumNaturalNums(num - 1)
}

console.log(sumNaturalNums(50))
console.log(calculation)

// let calc = 0
// function sumNaturalNumsCache() {
//   let cache = {}
//   return function sumNN(num) {
//     if (num in cache) {
//       return cache[num]
//     } else {
//       calc++
//       if (num <= 1) {
//         return num
//       } else {
//         cache[num] = num + sumNN(num - 1)
//         return cache[num]
//       }
//     }
//   }
// // }

// const snn = sumNaturalNumsCache()
// console.log(snn(50))
// console.log(calc)
