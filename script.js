const contIconEye = document.querySelector('.cust-container-icon-eye');
const contIconEye2 = document.querySelector('.cust-container-icon-eye2');
const usernameInput = document.querySelector('.cust-username-input');
const emailInput = document.querySelector('.cust-email-input');
const passInput = document.querySelector('.cust-pass-input');
const passInput2 = document.querySelector('.cust-pass-input2');
const iconEye = document.querySelector('.cust-eye-icon');
const iconEye2 = document.querySelector('.cust-eye-icon2');

const loginForm = document.querySelector('.cust-form-login');
const signUpForm = document.querySelector('.cust-form-signup');
const forgotPassForm = document.querySelector('.cust-form-forgot-pass');

const usernameVal = 'gnd';
const emailVal = 'gnd@gmail.com';
const passwordVal = 'Gnd12345!';
const messageWrong = document.querySelector('.cust-message-wrong-input');
const messageForUsername = document.querySelector('.cust-message-for-username');
const messageForEmail = document.querySelector('.cust-message-for-email');
const messageForPassword = document.querySelector('.cust-message-for-password');
const messageForPassword2 = document.querySelector('.cust-message-for-password2');

if (loginForm) {
    // iconEyeClass = iconEye.classList;
    contIconEye.addEventListener('click', function () {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            iconEye.classList.remove('fa-eye');
            iconEye.classList.add('fa-eye-slash');
        } else {
            passInput.type = 'password';
            iconEye.classList.remove('fa-eye-slash');
            iconEye.classList.add('fa-eye');
        }
    });
}

if (loginForm || signUpForm) {
    usernameInput.addEventListener('keyup', function () {
        messageForUsername.style.display = 'none';
        messageWrong.style.display = 'none';
    });
    emailInput.addEventListener('keyup', function () {
        messageForEmail.style.display = 'none';
        messageWrong.style.display = 'none';
    });
    passInput.addEventListener('keyup', function () {
        messageForPassword.style.display = 'none';
        messageWrong.style.display = 'none';
    });
}
if (signUpForm) {
    passInput2.addEventListener('keyup', function () {
        messageForPassword2.style.display = 'none';
        messageWrong.style.display = 'none';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        // console.log(event);
        if (event.target.username.value == '') {
            messageForUsername.style.display = 'flex';
            messageForUsername.innerText = 'Iinsert your Username!';
            if (event.target.email.value == '' || !(event.target.email.value.includes('@'))) {
                messageForEmail.style.display = 'flex';
                messageForEmail.innerText = 'Insert your valid Email!'
            }
            if (event.target.password.value == '') {
                messageForPassword.style.display = 'flex';
                messageForPassword.innerText = 'Insert your Password!'
            }
        } else if (event.target.email.value == '' || !(event.target.email.value.includes('@'))) {
            messageForEmail.style.display = 'flex';
            messageForEmail.innerText = 'Insert your valid Email!'
            if (event.target.password.value == '') {
                messageForPassword.style.display = 'flex';
                messageForPassword.innerText = 'Insert your Password!'
            }
        } else if (event.target.password.value == '') {
            messageForPassword.style.display = 'flex';
            messageForPassword.innerText = 'Insert your Password!'
        } else {
            if (event.target.username.value == usernameVal && event.target.email.value == emailVal && event.target.password.value == passwordVal) {
                window.location.href = './Home.html';
            } else {
                messageWrong.style.display = 'flex';
                messageWrong.innerText = 'Username or Email or Password Wrong!'
            }
        }
        event.preventDefault();
    });
}

if (signUpForm) {

    contIconEye.addEventListener('click', function () {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            iconEye.classList.remove('fa-eye');
            iconEye.classList.add('fa-eye-slash');
        } else {
            passInput.type = 'password';
            iconEye.classList.remove('fa-eye-slash');
            iconEye.classList.add('fa-eye');
        }
    });

    contIconEye2.addEventListener('click', function () {
        if (passInput2.type === 'password') {
            passInput2.type = 'text';
            iconEye2.classList.remove('fa-eye');
            iconEye2.classList.add('fa-eye-slash');
        } else {
            passInput2.type = 'password';
            iconEye2.classList.remove('fa-eye-slash');
            iconEye2.classList.add('fa-eye');
        }
    });
}


if (signUpForm) {
    const chkBox = document.getElementById('chkBox').checked = false;
    const btnSubmit = document.getElementById('buttonSubmit').disabled = true;
}
if (signUpForm) {
    const chkBox = document.getElementById('chkBox');
    const btnSubmit = document.getElementById('buttonSubmit');

    chkBox.addEventListener('click', function () {
        if (chkBox.checked === true) {
            btnSubmit.disabled = false;
            btnSubmit.className = 'shadow-for-all-button w-full h-14 rounded-xl  text-base font-semibold tracking-[1px] text-white bg-[#F23F9F]'
        } else {
            btnSubmit.disabled = true;
            btnSubmit.className = 'shadow-for-all-button w-full h-14 rounded-xl  text-base font-semibold tracking-[1px] text-white bg-[#ED65AB]'
        }
    })
}

if (signUpForm) {
    signUpForm.addEventListener('submit', function (event) {
        // console.log(event);
        event.preventDefault();
        // return

        const checkValPass = event.target.password.value;
        let uppcaseCheck = 0;
        let lowcaseCheck = 0;
        let numCheck = 0;
        for (let i = 0; i < checkValPass.length; i++) {
            if ('A' <= checkValPass[i] && checkValPass[i] <= 'Z') // check if you have an uppercase
                uppcaseCheck++;
            if ('a' <= checkValPass[i] && checkValPass[i] <= 'z') // check if you have a lowercase
                lowcaseCheck++;
            if ('0' <= checkValPass[i] && checkValPass[i] <= '9') // check if you have a numeric
                numCheck++;
        }
        const totalCheck = uppcaseCheck + lowcaseCheck + numCheck;


        if (event.target.username.value == '') {
            messageForUsername.style.display = 'flex';
            messageForUsername.innerText = 'Insert your Username!';

            if (event.target.email.value == '' || !(event.target.email.value.includes('@'))) {
                messageForEmail.style.display = 'flex';
                messageForEmail.innerText = 'Insert your valid Email!';
            }

            if (event.target.password.value == '' || event.target.password.value.length < 8) {
                messageForPassword.style.display = 'flex';
                messageForPassword.innerText = 'Insert Your Password with min 8 char';
            }

            if (event.target.password2.value == '') {
                messageForPassword2.style.display = 'flex';
                messageForPassword2.innerText = 'Insert Your Password Confirm';
            }

        } else if (event.target.email.value == '' || !(event.target.email.value.includes('@'))) {
            messageForEmail.style.display = 'flex';
            messageForEmail.innerText = 'Insert your valid Email!';

            if (event.target.password.value == '' || event.target.password.value.length < 8) {
                messageForPassword.style.display = 'flex';
                messageForPassword.innerText = 'Insert Your Password with min 8 char';
            }

            if (event.target.password2.value == '') {
                messageForPassword2.style.display = 'flex';
                messageForPassword2.innerText = 'Insert Your Password Confirm';
            }
        } else if (event.target.password.value == '' || event.target.password.value.length < 8) {
            messageForPassword.style.display = 'flex';
            messageForPassword.innerText = 'Insert Your Password with min 8 char';

            if (event.target.password2.value == '') {
                messageForPassword2.style.display = 'flex';
                messageForPassword2.innerText = 'Insert Your Password Confirm';
            }
        } else if (uppcaseCheck <= 0 || lowcaseCheck <= 0 || numCheck <= 0 || (event.target.password.value.length <= totalCheck)) {
            messageForPassword.style.display = 'flex';
            messageForPassword.innerText = 'Password must be contain Lowercase, Uppercase and Symbol!';

        } else if (event.target.password2.value == '') {
            messageForPassword2.style.display = 'flex';
            messageForPassword2.innerText = 'Insert Your Password Confirm';
        } else if (event.target.password.value != event.target.password2.value) {
            messageForPassword2.style.display = 'flex';
            messageForPassword2.innerText = 'The password not match';
        } else if (event.target.username.value == usernameVal) {
            messageForUsername.style.display = 'flex';
            messageForUsername.innerText = 'Username has been registered';
            if (event.target.email.value == emailVal) {
                messageForEmail.style.display = 'flex';
                messageForEmail.innerText = 'Email has been registered';
            }
        } else if (event.target.email.value == emailVal) {
            messageForEmail.style.display = 'flex';
            messageForEmail.innerText = 'Email has been registered';
        } else {
            window.location.href = './SignIn.html';
        }
    });
}