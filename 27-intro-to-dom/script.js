document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM is loaded')
  console.log(document.querySelector('tbody'))
  // let arr = [{num:4, fn:"s", ln: "s", e: "@gmail.com"},
  //   {num:5, fn:"a", ln: "a", e: "a@gmail.com"}]
  // arr.forEach(teacher => {
  //   addNewInstructor(teacher.num, teacher.fn, teacher.ln, teacher.e)
  //
  // })
  // addNewInstructor(4, "Sam", "Smith", "sam@gmail.com")
  addNewInstructorTemplate(4, "Sam", "Smith", "sam@gmail.com")
})

function addNewInstructorTemplate(num, fn, ln, e){
  getTbody().innerHTML += `<tr id="row-${num}">
            <td class="firstName">${fn}</td>
            <td class="lastName">${ln}</td>
            <td class="email">${e}</td>
          </tr>`
}

function addNewInstructor(num, fn, ln, email){
  let tr = document.createElement('tr')
  getTbody().appendChild(tr)
  tr.id = `row-${num}`

  let tdFirstName = document.createElement('td')
  tr.appendChild(tdFirstName)
  tdFirstName.innerText = fn
  tdFirstName.classList.add('firstName')

  let tdLastName = document.createElement('td')
  tr.appendChild(tdLastName)
  tdLastName.innerText = ln
  tdLastName.classList.add('lastName')

  let tdEmail = document.createElement('td')
  tr.appendChild(tdEmail)
  tdEmail.innerText = email
  tdEmail.classList.add('email')


}

function getTbody(){
  return document.querySelector('tbody')
}
