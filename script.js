let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');
let submitBtn = document.getElementById('bottomBtn');

console.log('Hello');



let validateInput = () => {
    if(!firstName.value && !lastName.value && !password.value && !email.value){
        setBorder(firstName);
        firstName.setAttribute('placeholder','First Name cannot be empty');
        setBorder(lastName);
        lastName.setAttribute('placeholder', 'Last Name cannot be empty');
        setBorder(password);
        password.setAttribute('placeholder', 'Password cannot be empty');
        setBorder(email);
        email.setAttribute('placeholder', 'Looks like this is not an email');
        return;
    }
     else if(!firstName.value){
        console.log('No first name');
        setBorder(firstName);
        firstName.setAttribute('placeholder','First Name cannot be empty');
        return;

    } else if (!lastName.value){
        console.log('No last name');
        setBorder(lastName);
        lastName.setAttribute('placeholder', 'Last Name cannot be empty');
        return;

    } else if (!password.value){
        console.log('No password');
        setBorder(password);
        password.setAttribute('placeholder', 'Password cannot be empty');
        return;
      
    } else if (!email.value){
        console.log('No email');
        setBorder(email);
        email.setAttribute('placeholder', 'Looks like this is not an email');
        return;
    } else {
        return;
    }
}

// Function to get the border:
const setBorder = (input) => {
    input.setAttribute('class', 'notValid');
}
// On submit it starts the validation check
submitBtn.addEventListener('click', validateInput);