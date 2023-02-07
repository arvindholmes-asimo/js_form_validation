"use strict";


let form = document.getElementById('form')
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let cPassword = document.getElementById('confirm_password');
let submit = document.getElementById('submit');

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");



console.log(form)
submit.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();
    validate(e);
})

function validate(e) {
    let fname = firstname.value.trim()
    let lname = lastname.value.trim()
    let emailField = email.value.trim()
    let phonenumber = phone.value.trim()
    let passwordField = password.value.trim()
    let cpasswordField = cPassword.value.trim()

    // Email regex test function
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
    function ValidateEmail(mail) {
        return emailRegex.test(mail);
    }

    // Password regex test function
    /*
        Password should have between 8 to 15 characters which contain at least 
        one lowercase letter, one uppercase letter, one numeric digit, 
        and one special character
    */
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    function checkpassword(e) {
        return passwordRegex.test(e);
    }

    if (fname == '') {
        setError(firstname, 'inputfield  cannot be empty')
    } else if (fname.length < 3) {
        setError(firstname, 'firstname cannot be too short')
    }
    else {
        setError(firstname, '');
        setSuccess(firstname);
    }
    if (lname == '') {
        setError(lastname, 'inputfield cannot be empty')
    } else if (lname.length < 3) {
        setError(lastname, 'lastname cannot be too short')
    }
    else {
        setError(lastname, '');
        setSuccess(lastname);
    }
    if (emailField == '') {
        setError(email, 'input field cannot be empty')
    } else if (!ValidateEmail(emailField)) {
        setError(email, 'invalid email')
    } else {
        setError(email, '');
        setSuccess(email)
    }
    if (phonenumber.length === 10) {
        setError(phone, '')
        setSuccess(phone)
    } else {
        setError(phone, 'Enter valid phone number')
    }
    if (passwordField === '') {
        setError(password, 'password cannot be empty')
    } else if (passwordField.length < 8) {
        setError(password, 'password cannot be too short')
    } else if (!checkpassword(passwordField)) {
        setError(password, 'weak password')
    } else {
        setError(password, '')
        setSuccess(password)
    }
    if (cpasswordField === '') {
        setError(cPassword, "password cannot be empty")
    } else if (cpasswordField !== passwordField) {
        setError(cPassword, "passwords not matching")
    }
    else {
        setError(cPassword, '')
        setSuccess(cPassword)
    }

    function setError(input, message) {

        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message;
        parent.classList.add('error')
        parent.classList.remove('success')

    }
    function setSuccess(input) {
        let parent = input.parentElement;
        parent.classList.remove('error');
        parent.classList.add('success')
    }







}



