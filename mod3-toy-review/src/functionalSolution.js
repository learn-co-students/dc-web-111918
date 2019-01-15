document.addEventListener(
    'DOMContentLoaded', 
    () =>{
      getNewToyBtn().addEventListener('click', handleHideShowNewToyForm);
      displayToys();
    }
  )
  
  
  // YOUR CODE HERE
  
  //DOM Selctors
  function getToyBox(){
    return document.getElementById('toy-collection')
  }
  
  function getNewToyForm(){
    return document.getElementsByClassName('add-toy-form')[0]
  }
  
  function getNameInput(){
    return document.getElementById(`name-input`)
  }
  
  function getImageInput(){
    return document.getElementById(`image-input`)
  }
  
  function getToyLikesPTag(toyId){
    return document.getElementById(`toy-likes-${toyId}`)
  }
  
  function getNewToyBtn(){
    return document.querySelector('#new-toy-btn')
  }
  
  function getNewToyDiv(){
    return document.querySelector('.container')
  }
  
  
  
  
  
  // fetch functions
  
  function getAllToys(){
    return fetch('http://localhost:3000/toys')
  }
  
  function saveNewToy(newToyInfo){
    return fetch(`http://localhost:3000/toys`,{
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newToyInfo)    
    });
  }
  
  function increaseLikes(toyId, data){
    return fetch(`http://localhost:3000/toys/${toyId}`,{
      method: "PATCH",
      headers: 
          {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
      body: JSON.stringify(data)
    })
  }
  
  
  
  //sample api data:
  // id: 1
  // image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
  // likes: 5
  // name: "Woody"
  
  //HTML Creation Functions
  function toyCard(toyObj){
  console.log(toyObj)
    const nameTag = document.createElement('h1');
    nameTag.innerText = toyObj.name;
  
    const imgTag = document.createElement('img');
    imgTag.src = toyObj.image;
    imgTag.classList.add('toy-avatar')
  
    const pTag = document.createElement('p');
    pTag.id = `toy-likes-${toyObj.id}`
    pTag.innerText = `Likes: ${toyObj.likes}`;
  
    const buttonTag = document.createElement('button');
    buttonTag.classList.add('like-btn');
    buttonTag.id = `toy-button-${toyObj.id}`;
    buttonTag.innerText = 'Like <3';
    buttonTag.addEventListener('click', () => handleLikes(toyObj.id) )
  
  
    const toyDiv = document.createElement('div');
    toyDiv.id = `toy-${toyObj.id}`;
    toyDiv.classList.add('card');
    toyDiv.append(nameTag);
    toyDiv.append(imgTag);
    toyDiv.append(pTag);
    toyDiv.append(buttonTag);
  
    return toyDiv;
  }
  
  function displayToys(){
    getAllToys()
      .then(r => r.json())
      .then(toys => {
        toys.forEach( toy => {
          getToyBox().append(toyCard(toy))
        })
      })
  }
  
  function updateToyLikes(toyObj){
    getToyLikesPTag(toyObj.id).innerText = `Likes: ${toyObj.likes}` 
  }
  
  //Event Listeners 
  
  function handleHideShowNewToyForm(){
      // hide & seek with the form
      switch (getNewToyDiv().style.display){
        case 'none':
        getNewToyDiv().style.display = 'block'
        // submit listener here
        getNewToyDiv().addEventListener('submit', handleCreateToySubmit)
        break;
        case 'block':
        getNewToyDiv().style.display = 'none'
        break;
        default:   
      }
  }
  function handleCreateToySubmit(e){
    console.log(e)
    e.preventDefault();
    const newToyInfo = {name: getNameInput().value, image: getImageInput().value, likes: 0}
    saveNewToy(newToyInfo)
    .then(r => r.json())
    .then(newToy => {
      getToyBox().append(toyCard(newToy));
      //reset the form:
      getNewToyForm().reset();
  
    })
  }
  
  function handleLikes(toyId){
    let numberOfLikes = parseInt(getToyLikesPTag(toyId).innerText.split(" ")[1])
    const data = { likes: (++numberOfLikes)}
    
    increaseLikes(toyId, data)
    .then(r => r.json())
    .then(toyObj => updateToyLikes(toyObj))
  
  }
  
  
  
  