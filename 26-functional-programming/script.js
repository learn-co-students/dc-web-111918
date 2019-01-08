// //with function declarative way
// function timesTwo(num){
//   return num * 2
// }
//
// //anonymous functions
// var timesThree = function(num){
//   return num * 3
// }
//
//
// //arrow functions
// var timesFour = num => num * 4
//
// var arr = [1,2,3,4,5]
//
//
// //creating the function obj first
// //arr.map(timesFour)
// let myFunc = (num1, num2) => num1+num2
//
//
//
// //.map
// function myMap(arr, func){
//   let newArray = []
//   for(let i = 0; i<arr.length; i++){
//     let oldValue = arr[i]
//     let newValue = func(oldValue)
//     newArray.push(newValue)
//   }
//   return newArray
// }

//function returned from another function

//function factories
// function welcomeStudentToModFactory(student){
//   return function(modNum){
//     console.log(`Welcome ${student} to Mod ${modNum}`)
//   }
// }
//
// let welcomeStudentToMod1 = welcomeStudentToModFactory(1)
// let welcomeStudentToMod2 = welcomeStudentToModFactory(2)
// let welcomeStudentToMod3 = welcomeStudentToModFactory(3)
// let welcomeStudentToMod4 = welcomeStudentToModFactory(4)
// let welcomeStudentToMod5 = welcomeStudentToModFactory(5)
//
//
// function genericWelcome(studentName, modNum){
//   console.log(`Welcome ${studentName} to Mod ${modNum}`)
// }

//var, let, const

//var is the least safe
//you can re-declare and re-define as many times as you want
//var has functional scope

//let
//you cannot re-declare, but you can re-defined/re-assign the value

//const is constant
//you cannot re-declare and you cannot re-assign

//scope
// function myFunc(){
//   var teacher = 'Paul'
//   if(true){
//     var teacher = 'Ann'
//     console.log("inner scope", teacher)
//   }
//   console.log("outter scope", teacher)
// }
//
// myFunc()


function callMe(location){
  (function setUpDCCampus(date, location){
    console.log(`setting up DC campus on ${date} at ${location}`)
  })('Feb 2018', location)
}



//
//
//
//
// function createCounter(){
//   let count = 0
//   return function(name){
//     console.log(`${name} has id ${count}`)
//     count ++
//   }
//}










//
