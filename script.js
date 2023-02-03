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
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;

    if (fname == '' ) {
        setError(firstname, 'inputfield  cannot be empty')
    } else if(fname.length < 3){
        setError(firstname, 'firstname cannot be too short')
    }
    else {
        setSuccess(firstname)
    }
    if (lname == '' ) {
        setError(lastname, 'inputfield cannot be empty')
    } else if( lname.length < 3){
        setError(lastname,'lastname cannot be too short')
    }
    else {
        setSuccess(lastname)
    }
    if (emailField =='')  {
        setError(email, 'input field cannot be empty')
    }else if (!ValidateEmail(emailField)){
        setError(email,'invalid email')
    }else {
        setSuccess(email)
    }
    if (phonenumber.length === 10 && isNumberKey(phonenumber)) {
        setSuccess(phone)
    } else {
        setError(phone, 'wrong number')
    }
    if (passwordField === '') {
        setError(password, 'password cannot be empty')
    } else if (passwordField.length < 8) {
        setError(password, 'password cannot be too short')
    } else if (passwordField === !checkpassword(e)) {
        setError(password, 'weak password')
    } else {
        setSuccess(password)
    }
    if (cpasswordField === '') {
        setError(cPassword, "password cannot be empty")
    } else if (cpasswordField === !passwordField) {
        setError(cPassword, "passwords not matching")
    }
    else {
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

    
    function ValidateEmail(mail) {
        return emailRegex.test(mail);
    }

    function isNumberKey(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    phone.setAttribute("onkeypress", () => isNumberKey(evt));

    function checkpassword(e) {
        return strongRegex.test(e);
    }



}



