# The Browser (DOM)
* What is it?
  * The HTML you write?
  * The source code?
  * The Elements tab in Dev Tools?
* DOM (Document Object Model)
  * `document` object  
  * A tree structure starting at the document
  * Every element is a node in the tree
  * Every element is related in this structure to every other element
  * We can find elements by traversing the DOM
  * Each element has a parent (except one) and children (maybe)
  * Elements have properties that can be manipulated
* How does JavaScript work in the browser?
  * Browser code
  * JavaScript engine
  * JavaScript standard library
  * Browser APIs
    * Browser API (Functionality) vs Web API (Request)
  * Your code!
* Element interfaces
  * Different elements (`table`, `p`, `image`) support different methods
  * You have to look up the element (in documentation or in prototype chain) to know what properties are accessible to change and methods available to call
* Templating
  * We used to use ERB
  * Now we'll write templates for dynamically updating our web page without refreshing
  * Dynamically:
    * Creating and appending elements to the page
    * Finding elements (`getElementBy`... vs `querySelector`)
    * Setting attributes
    * Removing elements  
