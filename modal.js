function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

/// DOM Elements
const modalBgForm = document.querySelector('.bground.modal-form')
const modalBgConfirm = document.querySelector('.bground.modal-confirm')
// const modalBgFormSuccess = document.querySelector('modal-confirm')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
//*close modal*//
const modalClose1 = document.querySelectorAll('span.close')
const modalClose2 = document.querySelectorAll('button.btn-close')

const modalForm = document.querySelector('.modal-inscription-form')
modalForm.addEventListener('submit', (event) => validate(event))

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalBgForm.style.display = 'block'
}
// #1 TODO : close modal
// Close modal event
modalClose1.forEach((close) => close.addEventListener('click', closeModal1))
modalClose2.forEach((close) => close.addEventListener('click', closeModal2))

// close modal form
function closeModal1() {
  modalBgForm.style.display = 'none'
}
function closeModal2() {
  modalBgConfirm.style.display = 'none'
}

// #2 Implement form entries and all error message.
//Firstname --> Lastname --> Email --> Numbers tournaments
function validate(event) {
  // preventDefaut permet d'enlever le comportement par défaut de la proprieté event submit qui est sensé aller sur la page index.html
  event.preventDefault()
  // Les compteurs sont mis à zero dès le début.
  let formValid = true

  //messages d'erreurs en mode cachées
  console.log('Validate')
  const errorFirstNameLabel = document.querySelector('.firstName.error')
  errorFirstNameLabel.style.display = 'none'

  const errorLastNameLabel = document.querySelector('.lastName.error')
  errorLastNameLabel.style.display = 'none'

  const errormyEmailLabel = document.querySelector('.myEmail.error')
  errormyEmailLabel.style.display = 'none'

  const errormyLocationLabel = document.querySelector('.myLocation.error')
  errormyLocationLabel.style.display = 'none'

  const errorBirthdateLabel = document.querySelector('.mybirthdate.error')
  errorBirthdateLabel.style.display = 'none'

  const errorQuantityTournamentLabel = document.querySelector(
    '.myQuantityTournament.error',
  )
  errorQuantityTournamentLabel.style.display = 'none'

  const errorAcceptConditionLabel = document.querySelector(
    '.myAcceptCondition.error',
  )
  errorAcceptConditionLabel.style.display = 'none'

  //messages d'erreurs en mode visible

  // (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  const inputFirstName = document.querySelector('#first')
  const firstName = inputFirstName.value

  if (firstName.length < 2) {
    const errorLabel = document.querySelector('.firstName.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  // (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  const inputLastName = document.querySelector('#last')
  const lastName = inputLastName.value
  if (lastName.length < 2) {
    const errorLabel = document.querySelector('.lastName.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  // (3) L'adresse électronique est valide.
  const inputEmail = document.querySelector('#email')
  const email = inputEmail.value
  // https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
  // eslint-disable-next-line no-control-regex
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  if (regex.test(email) == false) {
    const errorLabel = document.querySelector('.myEmail.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  // (4) Pour le nombre de concours, une valeur numérique est saisie
  const inputQuantityNumber = document.querySelector('#quantity')
  const nbTournois = parseInt(inputQuantityNumber.value, 10)
  if (isNaN(nbTournois) || nbTournois < 0 || nbTournois > 99) {
    const errorLabel = document.querySelector('.myQuantityTournament.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  // (5) Un bouton radio est sélectionné.
  const checkedRadios = document.querySelectorAll('[name=location]:checked')
  if (checkedRadios.length < 1) {
    const errorLabel = document.querySelector('.myLocation.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  // (/) Vous devez entrer votre date de naissance.
  const inputBirthdate = document.querySelector('#birthdate')
  const birthdate = inputBirthdate.value
  if (birthdate.length < 1) {
    const errorLabel = document.querySelector('.mybirthdate.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  // (5) Un bouton radio est sélectionné.
  // debugger
  const condition = document.querySelectorAll('[name=checkbox1]:checked')
  if (condition.length < 1) {
    const errorLabel = document.querySelector('.myAcceptCondition.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  if (formValid) {
    const modalBodyForm = document.querySelector('.bground.modal-form')
    const modalBodyConfirm = document.querySelector('.bground.modal-confirm')
    modalBodyForm.style.display = 'none'
    modalBodyConfirm.style.display = 'block'
  }

  return formValid
}
