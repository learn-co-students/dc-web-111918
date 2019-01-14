// //ES5 way to mimic classes in JS
// function Instructor(firstName, lastName){
//   //instance variables
//   this.firstName = firstName
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
//
// //instance methods
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is teaching`)
// }
//
// //class variables and class methods
// Instructor.all = []
// Instructor.goHome = function(){
//   console.log('Instructors are heading home')
// }
//
// let rob = new Instructor('Rob', 'Cobb')
// //let rob = Instructor.call({})
// let ann = new Instructor('Ann', 'Duong')
// let paul = new Instructor('Paul', 'Nicholsen')
Object.prototype.greet = function(){
  console.log('greetings from the Object prototype')
}

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  greet(){
    console.log(`${this.firstName} says hi`)
  }
  setBestFriend(friend){
    this.bff = friend
  }
}

//ES6 ways of writing classes
class Instructor extends Person{
  constructor(firstName, lastName){
    super(firstName, lastName)
    Instructor.all.push(this)
  }
  //instance methods
  teach(){
    console.log(`${this.firstName} is teaching`)
  }
  //class methods
  static goHome(){
    console.log('Instructors are heading home')
  }
}
//class instances, but not really a common pattern
Instructor.all = []
let jane = new Person('Jane', 'Doe')
let ann = new Instructor('Ann', 'Duong')
let paul = new Instructor('Paul', 'Nicholsen')




















//
