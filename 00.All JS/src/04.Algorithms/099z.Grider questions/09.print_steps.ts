// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

export function steps(n: number) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }

    console.log(stair)
  }
}

steps(4)
// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return
//   }

//   if (n === stair.length) {
//     console.log(stair)
//     return steps(n, row + 1)
//   }

//   const add = stair.length <= row ? '#' : ' '
//   steps(n, row, stair + add)
// }
function s(n: number, row: number = 0, stair: string = '') {
  if (n === row) return

  if (stair.length === 4) {
    console.log(stair)
    s(n, row + 1)
    return
  }
  const add = stair.length <= row ? '#' : ' '
  s(n, row, stair + add)
}
