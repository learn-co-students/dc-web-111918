class Toy {

    constructor(id, name, image, likes){
        this.id = id;
        this.name = name;
        this.image = image;
        this.likes = likes ? likes : 0;
    }

    rendor(){
        const nameHeader = document.createElement('h2');
        nameHeader.innerText = this.name;

        const toyImg = document.createElement('img');
        toyImg.src = this.image;
        toyImg.classList.add('toy-avatar');

        const likesTag = document.createElement('p');
        likesTag.id = `like-tag-${this.id}`;
        likesTag.innerText = `Likes: ${this.likes}`;

        const likesButton = document.createElement('button')
        likesButton.innerText = "Like <3"
        likesButton.addEventListener('click', 
            () => {
                this.increaseLikes()
            }
        )

        const toyDiv = document.createElement('div');
        toyDiv.id = this.id
        toyDiv.classList.add('card')
        toyDiv.appendChild(nameHeader)
        toyDiv.appendChild(toyImg)
        toyDiv.appendChild(likesTag)
        toyDiv.appendChild(likesButton)

        const toyBox = document.getElementById('toy-collection')
        toyBox.appendChild(toyDiv)
    }

    increaseLikes(){
        fetch(`http://localhost:3000/toys/${this.id}`,{
            method: 'PATCH',
            headers: 
                {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({"likes": ++this.likes})       
        }).then(r => r.json())
        .then(updatedObj => {
            const likesToUpdate = document.getElementById(`like-tag-${updatedObj.id}`);
            likesToUpdate.innerText = `Likes: ${updatedObj.likes}`
        })
    }


}