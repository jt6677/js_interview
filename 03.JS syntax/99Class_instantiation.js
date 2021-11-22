//==========context
console.log(this) //window

function a() {
  console.log(this)
} //window

// const obj = {
//   a: function () {
//     console.log(this) // this=obj
//   },
// }
const obj1 = {
  String:"bai"
  a: function () {
    console.log(this.String) // this=obj
  },
}
function as(a,b,c){
  return [].slice.call(arguments).length
}
//=======instantiation
class Player {
  constructor(name, type) {
    // constructor was ran first
    // create property name and type
    this.name = name
    this.type = type
  }
  introduce() {
    console.log(`hi . ${this.name},I am ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    //also need to run constructor
    super(name, type)
    //super runs constructor from Player
  }
  play() {
    console.log(`Wizard,${this.name},let us go ${this.type}`)
  }
}

const wizard1 = new Wizard('hb', 'super')
wizard1.play()
