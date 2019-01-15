class Controller {

    constructor(){
        this.formDiv = document.querySelector('.container');
        this.formButton = document.querySelector('#new-toy-btn');
        this.newToyForm = document.getElementsByClassName('add-toy-form')[0];
    }

    getToys(){
        fetch('http://localhost:3000/toys')
        .then(r=> r.json())
        .then(allToys => {
            allToys.forEach( toy =>{
                const newToy = new Toy (toy.id, toy.name, toy.image, 
                                        toy.likes != undefined ? toy.likes : null);
                newToy.rendor()

            });
        })
    }

    toggleForm(){
        switch (this.formDiv.style.display){
            case 'none':
            this.formDiv.style.display = 'block'
            // submit listener here
            this.formDiv.addEventListener('submit', this.handleCreateToySubmit.bind(this))
            break;
            case 'block':
            this.formDiv.style.display = 'none'
            break;
            default:   
          }
    }

    handleCreateToySubmit(e){
        e.preventDefault()
       const data = {
           name: e.target[0].value,
           image: e.target[1].value,
           likes: 0
        }
        fetch(`http://localhost:3000/toys`,{
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(r=> r.json())
        .then(newToyRecord => {
            const newToy = new Toy (newToyRecord.id, newToyRecord.name, newToyRecord.image, 
                newToyRecord.likes != undefined ? newToyRecord.likes : null);
            newToy.rendor()
        })
        this.newToyForm.reset() 
    }

}