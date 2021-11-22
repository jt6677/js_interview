const val = [1, 9, 0, null, undefined, false, '']
console.log(val.filter((i) => i !== null && i !== undefined && i !== false))
//[ 1, 9, 0, '' ]

console.log(val.filter(Boolean)) //[ 1, 9 ]

const hasEmptyVals = val.some(Boolean)
console.log(hasEmptyVals) //true
