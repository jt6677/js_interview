function fibonacci(num) {
  if (num === 0 || num === 1) return num

  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(10))

//with cache
function fibonacciWithCache() {
  let cache = {}
  return function fib(num) {
    if (num === 0 || num === 1) {
      return num
    } else {
      if (num in cache) {
        return cache[num]
      } else {
        cache[num] = fib(num - 1) + fib(num - 2)
        return cache[num]
      }
    }
  }
}

let fib = fibonacciWithCache()

console.log(fib(9))
