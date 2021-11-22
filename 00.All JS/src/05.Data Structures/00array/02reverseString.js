// const str = 'sdasdasdwdw'
// console.log(strArr)
function reverseStr(str) {
  let strArr = str.split('')
  if (!str || str.length < 2 || typeof str !== 'string') return 'input is not valid'
  for (let i = 0; i < strArr.length / 2; i++) {
    let targetIndex = strArr.length - 1 - i
    const element = strArr[i]
    const target = strArr[targetIndex]
    strArr[i] = target
    strArr[targetIndex] = element
  }

  return strArr.join('')
}

// console.log(reverseStr('abcdefgh')) //O(n)
// console.log(reverseStr('')) //O(n)

// console.log(Math.floor(4.9))
const name = (params) => {}
// console.log(typeof name === 'function')

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return 'input is not valid'
  const backward = []
  const maxIndex = str.length - 1
  for (let i = maxIndex; i >= 0; i--) {
    backward.push(str[i])
  }
  return backward.join('')
}
function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return 'input is not valid'
  return str.split('').reverse().join('')
}

const reverse3 = (str) => [...str].reverse().join('')

// console.log(reverse2('abcdefgh')) //O(n)
console.log(reverse3('abcdefgh')) //O(n)
let str = 'asdasdasd'
console.log([...str])
