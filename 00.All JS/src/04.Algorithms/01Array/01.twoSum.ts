export {}

function twoSum(array: number[], target: number): number[] | [] {
  const map: Map<number, number> = new Map()
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    if (map.has(complement)) {
      return [map.get(complement)!, i]
    }
    map.set(array[i], i)
  }
  return []
}

console.log(twoSum([2, 3, 11, 7], 9))
