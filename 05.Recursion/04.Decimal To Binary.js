function findBinary(decimal, result = '') {
  if (decimal === 0) {
    return result
  }
  result = (decimal % 2) + result
  return findBinary(decimal / 2, result)
}

console.log(findBinary(23))
