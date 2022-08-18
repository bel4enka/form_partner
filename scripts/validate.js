
/**
 * Проверяет каждый инпун на валидность
 */
const isFormValid = (inputList) => {
  return inputList.every(inputElement => inputElement.validity.valid)
}

const getErrorElement = (inputElement, formElement) =>
    formElement.querySelector(`.${inputElement.id}-error`)

/**
 * Действия при валидной форме
 */
const hideInputError = (inputElement, formElement, enableValidation) => {
  const errorElement = getErrorElement(inputElement, formElement)
  inputElement.classList.remove(enableValidation.inputErrorClass)
  errorElement.classList.remove(enableValidation.errorClass)
  errorElement.textContent = '';
}
/**
 * Действия при НЕ валидной форме
 */
const showInputError = (inputElement, formElement, enableValidation) => {
  const errorElement = getErrorElement(inputElement, formElement)
  inputElement.classList.add(enableValidation.inputErrorClass)
  errorElement.classList.add(enableValidation.errorClass)
  errorElement.textContent = inputElement.validationMessage
}
/**
 * Действия с кнопкой
 */
const toggleButtonState = (submitButton, inputList, enableValidation) => {
  if (isFormValid(inputList)) {
    submitButton.classList.remove(enableValidation.inactiveButtonClass)
    submitButton.disabled = false
  } else {
    submitButton.classList.add(enableValidation.inactiveButtonClass)
    submitButton.disabled = true
  }
}
/**
 * Проверка на валидность
 */
const checkInputValidity = (inputElement, formElement, enableValidation) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, formElement, enableValidation)
  } else {
    showInputError(inputElement, formElement, enableValidation)
  }
}

const setEventListener = (formElement, enableValidation) => {
  formElement.addEventListener('submit', function (e) {
    e.preventDefault()
    
    setTimeout(() => {
      closePopup()
    },1000)
  })

  formElement.validate = function () {
    inputList.forEach(inputElement => {
      checkInputValidity(inputElement, formElement, enableValidation)
    })
    toggleButtonState(submitButton, inputList, enableValidation)
  }

  formElement.resetValidate = function () {
    formElement.reset()
    toggleButtonState(submitButton, inputList, enableValidation)
  }
  const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector))
  const submitButton = formElement.querySelector(enableValidation.submitButtonSelector)

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, formElement, enableValidation)
      toggleButtonState(submitButton, inputList, enableValidation)
    })
  })
  toggleButtonState(submitButton, inputList, enableValidation)
}

const enableValidation = (enableValidation) => {
  const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
  formList.forEach(formElement => {
    setEventListener(formElement, enableValidation)
  })
}
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active'
});