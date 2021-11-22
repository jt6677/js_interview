//find factorials

let answer = []
let counter = 1
function findFactorialRecursive(num) {
  // let answer = num
  if (num === 2) {
    return 2
  }

  return num * findFactorialRecursive(num - 1)
}

function findFactorialIterative(num) {
  let arr = []
  while (num > 0) {
    arr.push(num)
    num--
  }
  let answer = 1
  while (arr.length > 0) {
    answer = answer * arr.pop()
  }
  return answer
  /**
   * let answer=1
   * if (num===2){
   * answer=2
   * }
   * for(let i=2;i<=number;i++){
   * answer=answer*i
   * }
   * return answer
   */
}
//!9 =362880
// console.log(findFactorialIterative(9))

console.log(findFactorialRecursive(9))
