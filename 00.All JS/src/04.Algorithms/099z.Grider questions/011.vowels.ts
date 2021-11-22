// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

export function vowels1(str: string) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

export function vowels(str: string) {
  let set = new Set<string>()
  const vowles = ['a', 'e', 'i', 'o', 'u']
  str.split('').forEach((c) => {
    if (vowles.includes(c.toLocaleLowerCase())) {
      set.add(c.toLocaleLowerCase())
    }
  })
  return set.size
}
console.log(vowels('Why do you ask?'))
