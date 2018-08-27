JSX, props and our first React app
===

## Agenda
- [ ] Learn more about `props`
- [ ] React.Component
- [ ] Modular Components

## Lesson content

### Props

- what are they?
  - They are those JSX attributes. On Components, they are called `props`.
  - _Sidenote:_ JSX attributes are still props as we can see in Babel that they are placed in the argument for `props` in `React.createElement()`.
- how do we use them?
  - Same way as attributes on JSX.
  - They are then accessible in your Component via `this.props`.
- passing props down
  - In doing the above, we can see that `props` are passed down from the parent Component.
  - We also see that you can name your `props` **anything**!
    - You should be naming you props so they make sense within the Component as that is where they are used.
    - Remember that Components are reusable pieces of UI. When possible, they should be self-contained in a way that makes them reusable. Sometimes for different purposes.
- **My favorite analogy:** props are to components as arguments are to functions.

### React.Component

- class syntax review (mod 3)
  - `extends Component` <= what is this?
- Inherits:
  - `render()` <= is required!!
    - Must always return 1 JSX, an array of JSX, or one of the things that renders as nothing (`null`, `true`, `false`, `undefined`): [See React Docs](https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored)
  - `constructor()`
  - Among many many others.

### Modular Components

- Single Responsibility Principle is used to identify components (most of which are reusable)
- `import` / `export`
  - You can do everything in one file, but please don't!
- **Declarative vs. Imperative**
  - Declarative _declares_ what should happen.
  - Imperative is where you _instruct_ how to make things happen.
  - Abstraction, abstraction, abstraction.
    - Imperative is just abstraction on more lower level imperative stuff.
  - our renders should read like instructions on what to display to the screen

### Component Extras

`constructor()` vs `constructor(props)`
- https://github.com/facebook/react/issues/11671
