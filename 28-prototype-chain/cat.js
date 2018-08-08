

all_cats = []

function Animal() {
  
}

Animal.prototype.die = function() {
  return "asafdfofiiipoopoipop"
}

function Cat(name) {
  this.name = name;
  all_cats.push(this);
}


Cat.all = function(){
  return all_cats
}

Cat.prototype = new Animal;


Cat.prototype.meow = function(){
  return `hello my name is ${ this.name } MEAOOOOOW`;
}

// class Animal {

//   die() {
//     return "aiiiigjgjhghfhfjkl;"
//   }
// }




// class Cat extends Animal {
  
//   constructor(name){
//     super()
//     this.name = name;
//   }

//   meow(){
//     return `hello my name is ${ this.name } MEAOOOOOW`;
//   }

// }



var fluffy = new Cat("fluffy")
var crookshanks = new Cat("crookshanks")






