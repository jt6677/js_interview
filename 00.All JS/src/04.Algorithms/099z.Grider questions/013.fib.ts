// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

export function fib(n: number): number {
  const cache = {} as Record<number, number>
  if (n <= 1) {
    return n
  }
  if (n in cache) {
    return cache[n]
  }
  return fib(n - 1) + fib(n - 2)
}
// console.log(fib(7))
//= ========================================================

type Func<T> = (val: T) => T
const memoize = <T = any>(fn: Func<T>) => {
  const cache = new Map()
  const cached = function (this: any, val: T) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val)
  }
  cached.cache = cache
  return cached
}

function slowFib(n: number) {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

const fibMemoize = memoize(slowFib)
// console.log(fibMemoize(300))
console.log(fib(20))
