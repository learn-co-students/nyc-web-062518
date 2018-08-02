// `this` is the global scope is the `window` object (for the browser)
console.log(this)

// #4 Default rule:  in a simple function call this will point to the global object. (Unless we are in strict mode)
function consoleLogThis() {
  return this
}

consoleLogThis()

const obj = {
  consoleLogThis
}

console.log(consoleLogThis())
console.log(obj.consoleLogThis())

consoleLogThis() // `this` for simple function calls will point to the window

// #3 Function called on an object (fn will have a context) obj.fn()

var courseModule = {
  name: 'JS',
  consoleLogThis: function consoleLogThis() {
    console.log(this.name)
  }
}

courseModule.consoleLogThis() // when provided a context (function called on an object) `this` will point to the context (object in which it is called)
var directReferenceToAFunction = courseModule.consoleLogThis
directReferenceToAFunction() // this is a simple function now. `this` inside the consoleLogThis function will point to the window

// #2 Function called using apply or call (or bind which leveraged apply)
// We can fix the fact that we lost the reference to `this` in directReferenceToAFunction using call or apply
directReferenceToAFunction.apply(courseModule)
directReferenceToAFunction.call(courseModule)
directReferenceToAFunction.bind(courseModule)()
// call will receive function parameters as values separated by commas c(omma)all
// apply will receive function parameters as an array a(rray)pply

// #1 Function called by `new`
function Person(name) {
  this.name = name
}
new Person('Laura') // this inside a function used as a constructor will point to the newly created object passed in by new

// p.s. arrow function, strict mode and arrow functions as methods
// arrow functions do not have the concept about this. They will resolve `this` using the lexical scope. Meaning this will be what ever `this`
// was at the moment of definition
// in strict mode this will be undefined for simple function calls
// it does not make sense to use arrow functions as methods because they will bind to the lexical `this`
/******************************************************************************************************************/
/******************************************************************************************************************/
/******************************************************************************************************************/

name = 'browser window'

const matt = {
  name: 'Matt'
}

const brooke = {
  name: 'Brook'
}

const does = function() {
  console.log(`${this.name} helps students learn JS`)
}

//does()

matt.hobby = does

// matt.hobby()

// does.call(matt)
// does.apply(matt)

function mattDoesMath(x, y, z) {
  console.log(`${this.name} is calculating the sum.... The sume is ${x + y + z}`)
}

mattDoesMath.call(matt, 1, 2, 3)
//mattDoesMath.apply(matt,[1,2,3])
mattDoesMathAndItsAlwaysMatt = mattDoesMath.bind(matt)
mattDoesMathAndItsAlwaysMatt(1, 2, 3)
console.log(mattDoesMathAndItsAlwaysMatt.name)

brooke.does = mattDoesMathAndItsAlwaysMatt
brooke.does(1, 2, 3)

function generateAStubbernFn() {
  return that => {
    return this === that
  }
}

const fn = generateAStubbernFn()
console.log(fn(this))

const fn2 = generateAStubbernFn.call(brooke)
console.log(fn2(brooke))
