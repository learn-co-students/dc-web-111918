document.addEventListener("DOMContentLoaded", function(){
  let form = document.querySelector('form')
  form.addEventListener('submit', onSubmitForm)
  //When DOMContentLoaded, I want to make a GET fetch, and render all pokemon
  getAllPokemon()
});

//When a submit event happens for the form, I want to make a POST fetch, and render the new Pokemon
function onSubmitForm(event){
  event.preventDefault()
  postNewPokemon()
  event.target.reset()
}

function getAllPokemon(){
  fetch('http://localhost:3000/pokemon')
  .then(res => res.json())
  .then(pokemons => {
    pokemons.forEach(pokemon => {
      renderPokemon(pokemon)
    })
  })
}

function postNewPokemon(){
  //grab name and url form the form, and send it along in the POST request
  let name = document.querySelector('#name-input').value
  let url = document.querySelector('#sprite-input').value
  fetch('http://localhost:3000/pokemon', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify({
      name: name,
      sprite: url
    })
  }).then(res => res.json())
  .then(pokemon => {
    //render pokemon
    renderPokemon(pokemon)
  })
}

//given a pokemon, render it inside #pokemon-container
function renderPokemon(pokemon){
  let pokemonContainer = document.querySelector('#pokemon-container')

  let pokemonDiv = document.createElement('div')
  pokemonDiv.classList.add('card')
  pokemonContainer.appendChild(pokemonDiv)
  pokemonDiv.id = `pokemon-${pokemon.id}`
  pokemonDiv.addEventListener('click', onClickPokemon)

  let header = document.createElement('h4')
  header.innerText = pokemon.name
  pokemonDiv.appendChild(header)

  let image = document.createElement('img')
  image.src = pokemon.sprite
  pokemonDiv.appendChild(image)
}

function onClickPokemon(event){
  let id = event.currentTarget.id.split('-')[1]
  deletePokemon(id)
}

function deletePokemon(id){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(() => {
    document.querySelector(`#pokemon-${id}`).remove()
  })
}

//When I click on a pokemon, I want to make a DELETE fetch and remove that pokemon from the DOM













//
