//===============Call Stack================
/**
 * last in, first out
 *      console.log("two")      removed first
 *              two()           removed second
 *                      one()   removed last
 */

const one = () => {
  const two = () => console.log('two')
  two()
}
one()

//===============Asynchronous================
// call stack, web api, callback queue, event loop
console.log('1')
//from call stack to web api
//setTimeout
setTimeout(() => {
  console.log('setTimeout trigger web api')
}, 2000)
//in 2000ms,console.log adds to callback queue
//event loop check if call stack is empty, check if callback queue is empty
//event loop puts the callback(console.log) into call stack
console.log('3')

//onClick, onLoad, onDone is callback queue, then to event loop
