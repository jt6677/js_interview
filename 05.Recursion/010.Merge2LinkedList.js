function SortedMerge(a, b) {
  if (a === null) return b
  if (b === null) return a
  if (a.value < b.value) {
    a.next = SortedMerge(a.next, b)
    return a
  } else {
    b.next = SortedMerge(a, b.next)
    return b
  }
}
