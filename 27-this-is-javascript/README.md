# This in JavaScript

![](https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif)

## Objectives

- Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
- Leverage Ruby's `self` to frame our JS `this` conversation (will get us 40% of the way)
- Recognize and value the differences
- Answer why instrumenting `this` in even a thing in JS?
- When is the value of `this` set? When it's **NOT** set?

---

- The JS environment rules that govern `this`
  1.  `this` within a function called with the keyword `new` in front will point to the newly created object:

    ```javascript
      function Person(name, age) {
        this.name = name
        this.age = age
      }

      const andy = new Person('andy', 6000)
      andy //Person { name: 'andy', age: 6000 }
      typeof andy // "object"
    ```

  1.  `this` within a function called with `apply/call/bind` will be the object passed as the first parameter:

    ```javascript
      const personOne = { name: 'andy' }
      const personTwo = { name: 'daniel' }
      const personThree = { name: 'luke' }

      function sayName(location, time) {
        return `${this.name} says hello from ${location} at ${time}!`
      }

      // call will invoke AND bind the function; args to the function must be comma separated

      console.log(sayName.call(personOne, 'Morocco', '3:00PM'))
      // andy says hello from Morocco at 3:00PM!

      // apply will invoke AND bind the function; args to the function must be in an array
      console.log(sayName.apply(personTwo, ['New York', '5:00PM']))
      // daniel says hello from New York at 5:00PM!

      // bind will set the value of this but DOES NOT INVOKE THE FUNCTION
      const boundPersonThree = sayName.bind(personThree)
      console.log(boundPersonThree('Los Angeles', '1:00PM'))
      //luke says hello from Los Angeles at 1:00PM!

      console.log(sayName())
      //browser window says hello from undefined at undefined!
    ```

  1.  `this` within a function called with a context (i.e. Object.method()) will be the context/object.
    ```javascript
      const obj = {
        method: function() {
          return this
        }
      }

    console.log(obj.method()) // obj
    ```
  1.  `this` for a simple function call (fn()) will be the window (browser) or the global object (Node). If we are in strict mode this will be undefined for simple function calls
    ```javascript
      function sayThis() {
        return this
      }
      sayThis() //window
    ```
- P.S. arrow function, strict mode (class definitions) and arrow functions as methods
  1.  arrow functions will resolve `this` at the moment of execution. The lexical scope will be whatever `this` was at the moment of definition, NOT execution:
    ```javascript
      const thisArrow = {
        sayThis: () => {
          return this
        }
      }
      thisArrow.sayThis() //window

      const sampleArrow = () => this
      sampleArrow() //window

      const boundArrow = sampleArrow.bind(personOne)
      boundArrow() //window
      // arrow functions resolve `this` at the moment of definition, NOT execution
    ```

## Resources

- [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Lecture REPL](https://repl.it/repls/SlipperyColossalNumerators)
- [MPJ JS This Keyword](https://www.youtube.com/watch?v=GhbhD1HR5vk)
- [Arrow Functions in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
