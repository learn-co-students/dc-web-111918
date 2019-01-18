class Cat {
  constructor(id, name, fluffiness, mean, picture, hobbies){
    this.id = id
    this.name = name
    this.fluffiness = fluffiness
    this.mean = mean
    this.picture = picture
    this.hobbies = hobbies
    Cat.all.push(this)
    this.render()
  }

  render(){
    let ul = document.querySelector('ul')
    let div = document.createElement('div')
    div.id = `cat-${this.id}`

    let header = document.createElement('h2')
    header.innerText = this.name

    let img = document.createElement('img')
    img.src = this.picture

    let p = document.createElement('p')
    p.innerText = `Fluffiness: ${this.fluffiness}; Mean: ${this.mean}`

    div.appendChild(header)
    div.appendChild(img)
    div.appendChild(p)
    ul.appendChild(div)

    let hobbiesUl = document.createElement('ul')
    div.appendChild(hobbiesUl)
    //render all hobbies for each cat instance
    if(this.hobbies){
      this.hobbies.forEach((hobby) => {
        let li = document.createElement('li')
        li.innerText = `${hobby.name} for ${hobby.duration} minutes`
        hobbiesUl.appendChild(li)
      })
    }
  }
}
Cat.all = []
