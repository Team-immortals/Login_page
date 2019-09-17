const button = document.querySelector('.submit-btn');
const myForm = document.querySelector('#form');
const first_name = document.querySelector('#fname');
const last_name = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const phone_number = document.querySelector('#number');
const password_input = document.querySelector('#password');
const message = document.querySelector('#msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(first_name.value === '' && last_name.value === '') {
        message.classList.add('error');
        message.innerHTML = 'Please enter all fields';

        setTimeout(() => message.remove(), 5000);
    } else {
        console.log('success');
    }
}
    