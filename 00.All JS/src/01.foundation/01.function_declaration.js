/**
 * The function declaration causes its identifier to be bound before anything in its code-block* is executed.
 * an assignment with a function expression, which is evaluated in normal top-down order.
 */

function fn(a, c) {
  console.log(a)
  var a = 123
  console.log(a)
  console.log(c)
  function a() {}
  if (false) {
    var d = 678
  }
  console.log(d)
  console.log(b)
  var b = function () {}
  console.log(b)
  function c() {}
  //   var c = function () {}
  console.log(c)
}

fn(1, 2)
// [Function: a]
// 123
// [Function: c]
// undefined
// undefined
// [Function: b]
// [Function: c]
