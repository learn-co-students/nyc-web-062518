const obj = {
  method: function() {
    return this
  }
}

console.log(obj.method()) // obj defined above

const method = obj.method
console.log(method === obj.method) //true
console.log(method()) // global window object

// `this` is the global scope is the `window` object (for the browser)
console.log(this) // window object

/////////////////////////////////////////////////////

const dolphin = {
  name: 'murd3rf4ce',
  talk: function() {
    return this.name
  }
}

const speak = dolphin.talk
console.log(speak === dolphin.talk) //true
console.log(speak()) // this will be browser window
console.log(dolphin.talk()) // murd3rf4ce -> dolphin.name

/////////////////////// ARROW FUNCTIONS ////////////

var car = function() {
  console.log('VROOMMM!!!!')
}
car() // VROOM!!!!

const truck = () => {
  console.log('BEEP BEEP')
}

const mapped = [1, 2, 3, 4, 5].map(num => num + 1)

// [1, 2, 3, 4, 5].map(function(e){
// 	return e + 1
// })

// const implicitReturn = () => 'pizza'
// no curly brackets means implicit return
const implicitReturn = () => 'pizza'
console.log(implicitReturn()) // 'pizza'

truck() // BEEP BEEP

const fixedArrowThis = {
  whatisThis: () => {
    return () => this.banana
  },
  banana: 'fixed this'
}

console.log(fixedArrowThis.whatisThis()()) //undefined

const thisArrow = {
  sayThis: () => {
    return this
  }
}
console.log(thisArrow.sayThis()) //window

// FROM MDN:
const test = {
  prop: 42,
  func: function() {
    return this.prop
  }
}
const mdnTest = test.func
console.log(mdnTest === test.func) //true
console.log(mdnTest()) //undefined; there is no Window.prop
console.log(test.func()) //42 because test.prop -> 42
//////////////////////////////////////////////////////

function Person(name, age) {
  this.name = name
  this.age = age
  console.log(this) // { name: 'andy', age: 600 }
}

let andrew = new Person('andy', 600)
// { name: 'andy', age: 600 } // -> plain old javascript object (pojo)
////////////////////////////////////////////////////////////
const hawaiianTShirt = {
  style: 'awesome and very colorful',
  wash: function() {
    return this.style
  }
}

console.log(hawaiianTShirt.wash()) //awesome very colorful

const otherObj = { style: 'SOME OTHER STYLE' }
// .bind changes the value of this and binds to otherObj
const boundShirt = hawaiianTShirt.wash.bind(otherObj)

console.log(boundShirt()) // SOME OTHER STYLE

const polo = {
  color: 'RED',
  wear: () => {
    return this
  }
}
console.log(polo.wear.call(polo))

console.log(polo.color)

const personOne = { name: 'andy' }
const personTwo = { name: 'daniel' }
const personThree = { name: 'luke' }

function sayName(location, time) {
  return `${this.name} says hello from ${location} at ${time}!`
}

// call will invoke AND bind the function; args to the function must be comma separated
console.log(sayName.call(personOne, 'Morocco', '3:00PM')) // andy says hello from Morocco at 3:00PM!
// apply will invoke AND bind the function; args to the function must be in an array
console.log(sayName.apply(personTwo, ['New York', '5:00PM'])) // daniel says hello from New York at 5:00PM!

// bind will set the value of this but DOES NOT INVOKE THE FUNCTION
const boundPersonThree = sayName.bind(personThree)
console.log(boundPersonThree('Los Angeles', '1:00PM')) //luke says hello from Los Angeles at 1:00PM!

console.log(sayName()) //browser window says hello from undefined at undefined!

console.log(personOne.sayName) //undefined

personOne.sayName = sayName // { name: 'andy', sayName: fn }
personOne
console.log(personOne.sayName()) //andy says hello from undefined at undefined!
///////////////////////////////////////////////////////
