# Scope and closures

![](https://media.giphy.com/media/CSTm8aWG0PGE0/giphy.gif)

## Objectives

### Variables scope

- Define key terms (scope resolution, lexical scope and execution context)
- Relationship between `Lexical Scope` and `Scope Resolution`
  - Each scope is like its own bucket
- JS scopes: `Global`, `Function` and `Block` (p.s. `{}` can be a function body, block or object literal)
- A tour of JS variables: `var`, `let`, `const`
- Variable properties (scope, definition rules, 'hoisting' and debugger quirks)
- `var` variable overview
- `let` overview
- `const` overview
- Comparing 'hoisting' for `var` vs `let`/`const`

### Closures

- First class functions
- Functions that return functions (like any other value)
- Closures as the natural outcome of first class functions and Lexical scope
- Debugger and closures

---

**First class functions**:

- A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. [From MDN](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

---

**Lexical scope**:

- Lexical scope means that scope is defined by author-time decisions of where functions are declared. [From You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

---

**Closure**:

- A closure is the combination of a function and the lexical environment within which that function was declared. [From MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- Definition from [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/31e1d4ff600d88cc2ce243903ab8a3a9d15cce15/scope%20%26%20closures/ch5.md): Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

---

### External Resources

- [MDN Article on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MPJ Video on Closures](https://www.youtube.com/watch?v=CQqwU2Ixu-U)
- [Temporal Dead Zone](https://wesbos.com/temporal-dead-zone/)
- [You Don't Know JS Scope and Closures](https://github.com/getify/You-Dont-Know-JS/tree/31e1d4ff600d88cc2ce243903ab8a3a9d15cce15/scope%20%26%20closures)
- [Air BnB JS StyleGuide](https://github.com/airbnb/javascript)
