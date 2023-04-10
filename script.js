let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');
let submitBtn = document.getElementById('bottomBtn');
let invalidName = document.getElementById('invalidName');
let invalidLast = document.getElementById('invalidLast');
let invalidPassword = document.getElementById('invalidPassword');
let invalidEmail = document.getElementById('invalidEmail');

console.log('Hello');

let validateInput = () => {
    if(!firstName.value){
        console.log('No first name');
        setBorder(firstName);
        firstName.setAttribute('placeholder','First Name cannot be empty');
        

    } else if (!lastName.value){
        console.log('No last name');
        setBorder(lastName);
        lastName.setAttribute('placeholder', 'Last Name cannot be empty');
        

    } else if (!password.value){
        console.log('No password');
        setBorder(password);
        password.setAttribute('placeholder', 'Password cannot be empty');
      
    } else if (!email.value){
        console.log('No email');
        setBorder(email);
        email.setAttribute('placeholder', 'Looks like this is not an email');
    } else {
        return;
    }
}

const setBorder = (input) => {
    input.setAttribute('class', 'notValid');
}
submitBtn.addEventListener('click', validateInput);