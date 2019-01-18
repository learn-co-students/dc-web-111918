document.addEventListener('DOMContentLoaded', function(){
  getAllCats()
})

function getAllCats(){
  fetch(`http://localhost:3000/cats`)
  .then(res => res.json())
  .then(cats => {
    cats.forEach((cat) => {
      // console.log(cat)
      let catInstance = new Cat(
        cat.id, cat.name, cat.fluffiness, cat.mean, cat.picture, cat.hobbies)
      // catInstance.render()
    })
  })
}

//create a form and create
//cat = {name: "some name", fluffiness: 1, mean: boolean, picture: "http://"}
//
function createCat(cat){
  fetch(`http://localhost:3000/cats`, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify(cat)
  }).then(res => res.json())
  .then(cat => {
    console.log(cat)
    //what do we do with that data?
    let newCat = new Cat(cat.id, cat.name, cat.fluffiness, cat.mean, cat.picture)
    // newCat.render()
  })
}

//catToUpdate = {id: 1, name: "some name", fluffiness: 1, mean: boolean, picture: "http://"}
function updateCat(catToUpdate){
  fetch(`http://localhost:3000/cats/${catToUpdate.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify(catToUpdate)
  }).then(res => res.json())
  .then(updatedCat => {
    console.log(updatedCat)

  })
}

//id = 1
function deleteCat(id){
  fetch(`http://localhost:3000/cats/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(cat => {
    document.querySelector(`#cat-${id}`).remove()
  })
}
