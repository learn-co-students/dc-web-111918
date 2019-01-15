
// original  file start
// const addBtn = document.querySelector('#new-toy-btn')
// const toyForm = document.querySelector('.container')
// let addToy = false

// // YOUR CODE HERE

// addBtn.addEventListener('click', () => {
//   // hide & seek with the form
//   addToy = !addToy
//   if (addToy) {
//     toyForm.style.display = 'block'
//     // submit listener here
//   } else {
//     toyForm.style.display = 'none'
//   }
// })
// original  file end

// OR HERE!


// First thing I like to do is remove all the global variables I can:

// const addBtn = document.querySelector('#new-toy-btn') becomes:
function getNewToyButton(){return document.querySelector('#new-toy-btn')}

// and

// const toyForm = document.querySelector('.container') becomes: 
function getToyForm(){return document.querySelector('.container')}






// I tend to cluster my method calls to keep my file organized:


// DOM selecting functions:

function getNewToyButton(){return document.querySelector('#new-toy-btn')}

function getToyFormDiv(){return document.querySelector('.container')}


// FETCH functions:





// Event Handlers:

// addBtn.addEventListener('click', () => {
//   // hide & seek with the form
//   addToy = !addToy
//   if (addToy) {
//     toyForm.style.display = 'block'
//     // submit listener here
//   } else {
//     toyForm.style.display = 'none'
//   }
// })

refactor: 

getNewToyButton().addEventListener('click', () => {
  // if (addToy) {

  // ?- what is this changing? 
        // a- toyForm is actually refering to the div that wraps the form
        // r- updated getToyForm() to be getToyFormDiv()
    //     toyForm.style.display = 'block'
    //     // submit listener here
    //   } else {
    //     toyForm.style.display = 'none'
    //   }

})

