// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export function maxChar(str: string) {
  let cache = {} as Record<string, number>
  const arr = str.split('')
  for (const c of arr) {
    if (cache[c]) {
      cache[c]++
    } else {
      cache[c] = 1
    }
  }
  for (const key in cache) {
    if (cache[key] === Math.max(...Object.values<number>(cache))) {
      return key
    }
  }
}

console.log(maxChar('apple 1231111'))
console.log(maxChar('abcccccccd'))
