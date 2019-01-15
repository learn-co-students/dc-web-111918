// when the DOM is loaded render all the toys
// (write a function for that)
// show on page.
document.addEventListener(
    //here we know the DOM has been loaded
    "DOMContentLoaded", 
    () => {
        getAllToys()
        .then(response => response.json())
        .then(allToys => {
          //itterate over the array
          allToys.forEach(toy =>{
            //for each toy in the array render the toy
            renderToy(toy)
          })
      });

      addToyButton().addEventListener('click', () => {
        // hide & seek with the form
       
        if (toyFormDiv().style.display == 'none') {
          toyFormDiv().style.display = 'block'
          // submit listener here
          getNewToyForm().addEventListener('submit', handleNewToyFormSubmit)
      
        } else {
          toyFormDiv().style.display = 'none'
        }
      })
    }
)





//**********FETCH REQUEST***********/
// fetch all the toys
function getAllToys(){
  return fetch('http://localhost:3000/toys')
}

// fetch to increase the likes of a toy
function updateToyLikes(toyId, likesNumber){
  const data = {likes: likesNumber}
  return fetch(
    `http://localhost:3000/toys/${toyId}`,
    {
      method: "PATCH",
      headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
  })
}

function createNewToy(newToyInfo){
  const data = newToyInfo
    return fetch('http://localhost:3000/toys',{
      method: "POST",
      headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      body: JSON.stringify(data)
    })
}



//********** RENDER DOM ELEMENTS ***********/

// { Example of data
//   "id": 1,
//   "name": "Woody",
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 5
// }

function renderToy(toyObj){
//rendering toy:
      //         -make an h2 tag
  const headerTag = document.createElement('h2')
  headerTag.innerText = toyObj.name

      //         -make img tag 
  const imageTag = document.createElement('img')
  imageTag.src = toyObj.image
  imageTag.classList.add('toy-avatar')

      //         -make a p tag
  const pTag = document.createElement('p')
  pTag.innerText = `${toyObj.likes} Likes`
  pTag.id = `like-pTag-${toyObj.id}`

      //         -make a button tag
  const likesButton = document.createElement('button')
  likesButton.innerText = "Like <3"
  likesButton.classList.add("like-btn")
  likesButton.addEventListener('click', (e) => {handleLikesClick(toyObj)})

   //         -put in div 
   const toyDiv = document.createElement('div')
   toyDiv.classList.add('card')
   toyDiv.id = toyObj.id 

   toyDiv.appendChild(headerTag)
   toyDiv.appendChild(imageTag)
   toyDiv.appendChild(pTag)
   toyDiv.appendChild(likesButton)

   //append to toy collection and put on DOM
   getToyBox().appendChild(toyDiv)
}


//********** GET DOM ELEMENTS ***********/

function getToyBox(){
  return document.getElementById('toy-collection')
}
function getLikesPTag(id){
  return document.getElementById(`like-pTag-${id}`)
}

function toyFormDiv(){
  return document.querySelector('.container')
}
function addToyButton(){
  return document.querySelector('#new-toy-btn')
}
function getNewToyForm(){
  return document.getElementById('new-toy-form')
}

function getNewToyName(){
  return document.getElementById('new-toy-name')
}
function getNewToyImg(){
  return document.getElementById('new-toy-img')
}

//********** EVENT HANDLERS ***********/

function handleLikesClick(toyObj){
  updateToyLikes(toyObj.id, ++toyObj.likes)
  .then(r => r.json())
  .then(updatedToyObj => {
    
    //get the likes field
    //update it's innnerText
    getLikesPTag(updatedToyObj.id).innerText = `${updatedToyObj.likes} Likes`
  })
// option 1: e.target.parentElement.id is id of toy
}

    //e = event which is given to us by the event handler
function handleNewToyFormSubmit(e){
  //prevent default so that the page doesn't refresh on submit of form
  e.preventDefault()

  //get user input from form
  const newToy ={
    name: getNewToyName().value,
    image: getNewToyImg().value,
    likes: 0
  }
  //make a fetch request
  createNewToy(newToy)
  .then(r => r.json())
  .then(newToyObj => {
    //put the response on the dom. 
    renderToy(newToyObj)
  })

  //clear the form
  getNewToyForm().reset() 

}
