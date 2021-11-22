/** Recursion
 *  1.identify the base case (when to stop)
 *  2.identify the recursive case(when keeps going)
 *  3.get closer and closer and return when needed. usually have 2 returns
 */
//===============wrong way=====================
//!!! base case returns nothing
//!!! error
let counter = 0
function recursion() {
  console.log(counter)
  if (counter > 3) return 'done'
  counter++
  recursion() // bottome call stack returns nothing
}
// recursion()

//===============correct way=====================
let counter1 = 0
function recursion2() {
  console.log(counter1)
  if (counter1 > 3) return 'done' + counter1
  counter1++
  return recursion2()
}
console.log(recursion2())
