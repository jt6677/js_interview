// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let split = str.split('')
//   let newStrArr = []
//   for (let i = split.length - 1; i > -1; i--) {
//     newStrArr.push(split[i])
//   }
//   return newStrArr.join('')
// }
// reverse('Greetings!')

export function reverse1(str: string) {
  return str.split('').reverse().join('')
  // return str.split('').reduce((acc, current) => current + acc, '')
}
console.log(reverse1('Greetings!'))
// module.exports = reverse

// export {}
