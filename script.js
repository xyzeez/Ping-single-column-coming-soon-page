const form = document.querySelector('#form');
const emailInput = document.querySelector('#emailAddress');
const errorMessage = document.querySelector('#errorMessage');
const formBtn = document.querySelector('#formBtn');

let emailInputEmpty = true;
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

monitorEmailInput = () => {
    emailInput.addEventListener('blur', () => {
        validateEmailInput();
    })
    
    emailInput.addEventListener('input', () => {
        emailInput.removeAttribute("aria-invalid")
    })
}

checkEmailInput = () => {
    validateEmailInput();
}

validateEmailInput = () => {
    if (!(emailInput.value.match(emailPattern))) {
        emailInput.setAttribute("aria-invalid", true);
        emailInputEmpty = true;
        return;
    } else {
        emailInput.removeAttribute("aria-invalid")
        emailInputEmpty = false;
    }
}

clearInput = () => {
    emailInput.value = "";
}

submitForm = () => {
    const formData = new FormData(form);
    form.submit();
    clearInput();
}

monitorEmailInput();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInputEmpty) {
        checkEmailInput();
    }
    if (!emailInputEmpty) {
        submitForm();
    }
})