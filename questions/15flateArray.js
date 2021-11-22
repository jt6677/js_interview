const a = [1, 2, 3, 4, 5, [6, 7, [9, 11]]]
let ap = []
// function flatArray(arr) {
//   if (!Array.isArray(arr)) return

//   for (let i in arr) {
//     if (Array.isArray(arr[i])) {
//       flatArray(arr[i])
//     } else {
//       ap.push(arr[i])
//     }
//   }
// }

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}

// const flatten = (arr) =>
//   arr.reduce(
//     (flat, toFlatten) =>
//       flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
//     []
//   )

// const flatArray = (arr) => {
//   return arr.reduce((flatedArray, item) => {
//     return flatedArray.concat(Array.isArray(item) ? flatArray(item) : item)
//   }, [])
// }

const flatArray = (arr) => {
  return arr.reduce(
    (flatedArray, item) =>
      flatedArray.concat(Array.isArray(item) ? flatArray(item) : item),
    []
  )
}

const xx = flatArray(a)
console.log(xx)
