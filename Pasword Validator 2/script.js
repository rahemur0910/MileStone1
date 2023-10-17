document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const validationMessage = document.getElementById('validationMessage');
    const submitBtn = document.getElementById('submitBtn');
    const togglePasswordBtn = document.getElementById('togglePassword');

    togglePasswordBtn.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordBtn.textContent = 'Hide Password';
        } else {
            passwordInput.type = 'password';
            togglePasswordBtn.textContent = 'Show Password';
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        // Validate email and password
        const isEmailValid = emailValue.includes('@');
        const isPasswordValid = passwordValue.length >= 8;

        if (isEmailValid && isPasswordValid) {
            validationMessage.textContent = 'Email and password are valid!';
            validationMessage.style.color = 'green';
            alert('Validation Successful');
        } else if (!isEmailValid && !isPasswordValid) {
            validationMessage.textContent = 'Invalid email and password!';
            validationMessage.style.color = 'red';
            alert('Validation Error! Try Again');
        } else if (!isEmailValid) {
            validationMessage.textContent = 'Invalid email, password is too short.';
            validationMessage.style.color = 'red';
            alert('Validation Error! Try Again');
        } else {
            validationMessage.textContent = 'Email is valid, but the password is too short.';
            validationMessage.style.color = 'red';
            alert('Validation Error! Try Again');
        }
    });

    // Enable or disable the submit button based on input validity
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    function validateForm() {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        const isEmailValid = emailValue.includes('@gmail.com');
        const isPasswordValid = passwordValue.length >= 8;

        submitBtn.disabled = !(isEmailValid && isPasswordValid);
        
        // Change button styles based on enabled/disabled state
        if (submitBtn.disabled) {
            submitBtn.classList.add('disabled');
        } else {
            submitBtn.classList.remove('disabled');
        }
    }
});
