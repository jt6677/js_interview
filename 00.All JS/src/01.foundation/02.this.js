// method:function in a obj -> this=> obj
// function:this=>global(window,global)

const video = {
  title: 'a',
  tags: [1, 2, 3, 4],
  play() {
    console.log(this.title) // a
  },
  showTags() {
    this.tags.forEach((t) => console.log(this.title, t), this)
    // forEach(cb,arg) arg= this.obj
    // otherwise t=>clg(this) is a regular function, this =global
  },
  say: (something) => {
    this.something = something // assgin global["something"]=something
    console.log(this.something) // this is a function, this =window, window has no title
  },
}
video.play()
video.showTags()
video.say('hiString')

// video.stop is a method
video.stop = function () {
  console.log(this)
}
video.stop() // video

// Hi is a function with this to global window
function Hi(title) {
  this.title = title // assgin global["title"]=title
  console.log(this)
  console.log(this.title)
}
Hi('hi')

// new Hi assigned empty{}, instead of global
const v = new Hi('xx')
// v // 'a' scope to v only
