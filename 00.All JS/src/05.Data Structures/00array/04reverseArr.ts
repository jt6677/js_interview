function reverse(array: Array<any>): Array<any> {
  const newArr = []
  while (array.length > 0) {
    newArr.push(array.pop())
  }
  return newArr
}
const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(reverse(arr))
console.log([1, 2, 3, 4, 5, 6, 7].reverse())
export {}
