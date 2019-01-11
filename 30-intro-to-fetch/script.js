// //find out the hidden ability of a certain pokemon
//
// // getHttp('https://pokeapi.co/api/v2/pokemon/', function(){
// //   //when I have my data about all pokemon
// //   //find where the pokemon is bulbasaur
// //   let pURL = pokemon.url
// //   getHttp(pURL, function(){
// //     //when I have a single pokemon data
// //     let abilities = pokemon.abilities
// //     //fine where is_hidden == true
// //     let aURL = ability.url
// //     getHttp(aURL, function(){
// //       //when I have an ability's data
// //       //get effect_entries[0].effect
// //     })
// //   })
// // })
//
// //do thing1
// //do thing2
// //do thing3
//
//
// //This is what fetch aims to solve
// //fetch returns a promise object
//
// var p = new Promise(()=>{})
// //promise, that has no criteria to be fullied
//
// const resolveInFiveSeconds = (resolve) => {
//   setTimeout(function(){resolve('I am done')}, 5000)
// }
//
// var p = new Promise(resolveInFiveSeconds)
//
// var p = new Promise(resolveInFiveSeconds)
// .then(data => {console.log(data)})
//
// //working with a real API
// fetch('https://animal-farm-api.herokuapp.com/animals')
//
// //This is how you use fetch
// // fetch('https://animal-farm-api.herokuapp.com/animals')
// // .then(response => response.json())
// // .then(jsonData => {
// // 	//do stuff with our jsonData
// // 	console.log(jsonData)
// // })
document.addEventListener('DOMContentLoaded', function(){
  fetchAnimals()
})


function fetchAnimals(){
  fetch('https://animal-farm-api.herokuapp.com/animals')
  .then(response => response.json())
  .then(jsonData => {
  	//do stuff with our jsonData
    //jsonData is an Array
    //crawlDiv.innerHTML
  	jsonData.forEach(animal => {
      renderAnimaltoDOM(animal)
    })
  })
}

function renderAnimaltoDOM(animal){
  console.log('inside render function', animal)
  document.querySelector('.container').innerHTML += `
    <div>
      <h4>${animal.name} : ${animal.species}</h4>
      <img alt=${animal.name} src=${animal.img} />
    </div>
  `
}
