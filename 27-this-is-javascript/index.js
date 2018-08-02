// `this` is the global scope is the `window` object (for the browser)
console.log(this)

const fixedArrowThis = {
  whatisThis: function() {
    return () => this
  },
  name: 'fixed this'
}
