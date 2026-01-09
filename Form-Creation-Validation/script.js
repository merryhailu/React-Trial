
document.addEventListener('DOMContentLoaded', () => {


    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback')


    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push('your name should be more than 3 words');

        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('your email is not included @');

        }

        if (password.length < 8) {
            isValid = false;
            messages.push('your password should be atleast 8 charcters');

        }

        feedbackDiv.style.display = 'block';

        if (isValid) {

            feedbackDiv.textContent = 'Registration sucessful';
            feedbackDiv.style.color = '#28a745'

        }
        else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }


    })

});