//with caching, 39 calculations
//use cache, 18 times
let calculations = 0
function fibonacci() {
  let cache = {}
  return function fib(n) {
    if (n in cache) {
      calculations++
      return cache[n]
    } else {
      if (n < 2) {
        cache[n] = n
        return cache[n]
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}
const fib = fibonacci()
console.log(fib(10))
console.log(calculations)

//without caching, 21891 calculations
let calculationsWithCache = 0
function fibonacciNotCache(n) {
  calculationsWithCache++
  if (n < 2) {
    return n
  }
  return fibonacciNotCache(n - 1) + fibonacciNotCache(n - 2)
}
console.log(fibonacciNotCache(10))
console.log(calculationsWithCache)
