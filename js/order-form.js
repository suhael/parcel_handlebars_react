const firstnameField = document.querySelector('.firstname-field');
const lastnameField = document.querySelector('.lastname-field');
const emailField = document.querySelector('.email-field');
const errorFieldClass = 'order-form__input__error';
const errorLabelClass = 'form__element-message--invalid';
const nameRegex = {
    regex: /^[A-Za-z\s'-]+$/,
    error: 'We only allow letters and the following characters: \' and -'
};
const emailRegex = {
    regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    error: 'Enter a valid email address'
};


function validateField(inputField, regexObject) {
    const errorDisplayed = inputField.nextElementSibling.classList.contains(errorLabelClass);
    const validInput = regexObject.regex.test(inputField.value);
    
    if(!validInput && !errorDisplayed) {
        displayFieldError(inputField, regexObject.error);
    } else if(validInput && errorDisplayed) {
        removeFieldError(inputField);
    }
}

function removeFieldError(target) {
    target.classList.remove(errorFieldClass);
    target.parentNode.removeChild(target.nextElementSibling);
}

function displayFieldError(target, message) {
    var errorMessage = document.createElement('label');
    errorMessage.classList.add(errorLabelClass);
    errorMessage.innerHTML = message;
    
    target.classList.add(errorFieldClass);
    target.parentNode.insertBefore(errorMessage, target.nextElementSibling);
}

firstnameField.addEventListener('change', (e) => validateField(e.target, nameRegex));
lastnameField.addEventListener('change', (e) => validateField(e.target, nameRegex));
emailField.addEventListener('change', (e) => validateField(e.target, emailRegex));