const hasSameElements = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

console.log(hasSameElements([1, 2, 3], [1, 3, 2]))
console.log(hasSameElements([1, 2, 3], [1, 2, 3]))
console.log(hasSameElements([1, 2, 3], [1, 3]))
