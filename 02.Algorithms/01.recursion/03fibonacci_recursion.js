//anything can be solved by recursion CAN be solved by

//O(n)
function fibonacciIterative(index) {
  let fib = [0, 1]
  for (let i = 2; i <= index; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  //   console.log(fib)
  return fib[index]
}

//O(2^N) exponential
function fibonacciRecursive(index) {
  //   if (index === 0) return 0
  //   if (index === 1) return 1
  if (index < 2) return index
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2)
}

console.log(fibonacciIterative(8))
console.log(fibonacciRecursive(8))
