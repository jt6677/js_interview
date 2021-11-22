//cache--memoization

function addTo80(n) {
  console.log('long time')
  return n + 80
}
//global scope === bad
let cache = {}
function meoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    console.log('long long time')
    cache[n] = 5 + 80
    return cache[n]
  }
}
console.log(meoizedAddTo80(5))
console.log(meoizedAddTo80(5))
