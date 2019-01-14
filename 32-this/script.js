// 'use strict'
//will make the value of this inside a function be undefined



// let ann = {
//   firstName: "Ann",
//   lastName: "Duong",
//   greet: greet,
//   setName: setName
// }

// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen",
//
//   greet: function(name){
//     console.log(`${this.firstName} says hi`)
//     let setFullName = () => {
//       this.fullName = `${this.firstName} ${this.lastName}`
//     }
//     setFullName()
//   }
// }

// function setName(name){
//   //in sloppy mode, the value of this can = window
//   debugger
//   this.firstName = name
// }

// ann.greet()
// paul.greet()





let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

function greet(person1, person2){
  console.log(`${this.firstName} says hi to
    ${person1} and ${person2}`)
}

//.bind() returns a copy of some function with the value
//of this binded to some obj

// let boundedGreet = greet.bind(ann)
// let anotherGreet = boundedGreet.bind(paul)
// Function Factories
let annGreet = greet.bind(ann)
let annGreetWill = greet.bind(ann, "Will")
let paulGreet = greet.bind(paul)


//.call() is invoked right away
// greet.call(ann, 'Will', 'Bruno')

//.apply() is invoked right away, but only takes in a
//max of two parameters
greet.apply(paul, ['Will', 'Bruno'])





















//
