//cache--memoization

function addTo80(n) {
  console.log('long time')
  return n + 80
}

function meoizedAddTo80() {
  //closure to avoid global scope
  let cache = {}
  return function (n) {
    if (n in cache) {
      return cache[n]
    } else {
      cache[n] = n + 80
      return cache[n]
    }
  }
}
const meoized = meoizedAddTo80()
console.log(meoized(5))
// console.log(meoized(5))
// console.log(meoized(52))
// console.log(meoized(52))
// console.log(meoized)
