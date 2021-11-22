const arr = [1, 2, 3, 4, 5, 6, 7]

function reverse(arr) {
  let newArr = []
  while (arr.length > 0) {
    newArr.push(arr.pop())
  }
  return newArr
}
console.log(reverse(arr))
