// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

export function reverseInt(n: number) {
  const arr = n.toString().split('')
  if (arr[0] === '-') {
    return -parseInt(arr.reverse().join(''))
  } else {
    return parseInt(arr.reverse().join(''))
  }
}
function reverseInt1(n: number) {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt(-90))
console.log(reverseInt(981))
