const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError (input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

function showSuccess (input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isEmailValid (value) {
  return String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
/**
 * @param fieldId {string}
 */
function getFieldName (fieldId) {
  return fieldId.charAt(0).toUpperCase() + fieldId.slice(1)
}

/**
 * @param inputArr {[]HTMLElement}
 **/
function checkRequired (inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input.id)} is required`)
    } else {
      if (input.id === 'email' && !isEmailValid(input.value)) {
        return showError(input, 'email is not valid')
      }
      showSuccess(input)
    }
  })
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  checkRequired([username, email, password, password2])
})
