var name = 222
var a = {
  name: 111,
  say: function () {
    console.log(this.name)
  },
}

var fun = a.say
fun()
fun.call(window)
a.say()
a.say.call(a)
var b = {
  name: 333,
  say: function (fun) {
    fun()
    fun.call(window)
  },
}
b.say(a.say)
b.say = a.say
b.say()
b.say.call(b)

// 222
//  111
//  222
//  333
