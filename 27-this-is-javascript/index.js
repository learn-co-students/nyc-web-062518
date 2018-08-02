// `this` is the global scope is the `window` object (for the browser)
console.log(this)

const dolphin = {
  name: 'murd3rf4ce',
  talk: function() {
    console.log(this.name)
  }
}

const speak = dolphin.talk
speak()
// dolphin.talk()

const fixedArrowThis = {
  whatisThis: function() {
    return () => this
  },
  name: 'fixed this'
}
