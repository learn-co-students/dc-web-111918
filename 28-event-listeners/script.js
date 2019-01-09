document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM has loaded')
  document.addEventListener('click', function(){console.log('click in the doc')})
  document.querySelector('table').addEventListener('click',
    function(event){
      event.stopPropagation()

      console.log('click in the table')
    }
  )
  let emailNodes = document.querySelectorAll('.email')
  emailNodes.forEach((node) => {
    node.addEventListener('click', sendEmail)
  })

  let formElement = document.querySelector('form')
  formElement.addEventListener('submit', submitForm)

  let rowNodes = document.querySelectorAll('.person')
  rowNodes.forEach((row) => {
    row.addEventListener('click', viewProfile, true)
  })
})

function sendEmail(event){
  console.log('sending email to', event.target.innerText )
}

function viewProfile(event){
  console.log('viewing profile for ', event.currentTarget.innerText)

}
//event.target is the node that triggers the event (the smaller node)
//event.currentTarget is the node that is attached to the event listener

function submitForm(event){
  event.preventDefault()
  let fn = document.querySelector('#firstNameInput').value
  let ln = document.querySelector('#lastNameInput').value
  let em = document.querySelector('#emailInput').value
  addNewInstructor(4, fn, ln, em)
}

function addNewInstructor(num, fn, ln, email){
  let tr = document.createElement('tr')
  tr.addEventListener('click', viewProfile)
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
  tdEmail.addEventListener('click', sendEmail)
  tr.appendChild(tdEmail)
  tdEmail.innerText = email
  tdEmail.classList.add('email')
}

function getTbody(){
  return document.querySelector('tbody')
}
