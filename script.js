// // Form validation and submission
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const messageInput = document.getElementById('message');
//     const submitButton = form.querySelector('button[type="submit"]');

//     // Add smooth scroll effect
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Header animation on scroll
//     const header = document.querySelector('header');
//     let lastScroll = 0;

//     window.addEventListener('scroll', function () {
//         const currentScroll = window.pageYOffset;

//         if (currentScroll > 50) {
//             header.style.transform = 'translateY(-5px)';
//             header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
//         } else {
//             header.style.transform = 'translateY(0)';
//             header.style.boxShadow = 'none';
//         }

//         lastScroll = currentScroll;
//     });

//     // Input field focus effects
//     const inputs = [nameInput, emailInput, messageInput];

//     inputs.forEach(input => {
//         input.addEventListener('focus', function () {
//             this.style.borderColor = '#4CAF50';
//             this.style.boxShadow = '0 0 5px rgba(76, 175, 80, 0.3)';
//         });

//         input.addEventListener('blur', function () {
//             this.style.borderColor = '#ddd';
//             this.style.boxShadow = 'none';
//             validateField(this);
//         });

//         input.addEventListener('input', function () {
//             if (this.value.trim() !== '') {
//                 this.style.borderColor = '#4CAF50';
//             }
//         });
//     });

//     // Real-time validation
//     function validateField(field) {
//         const value = field.value.trim();
//         let isValid = true;
//         let errorMessage = '';

//         if (field === nameInput) {
//             if (value.length < 2) {
//                 isValid = false;
//                 errorMessage = 'Name must be at least 2 characters';
//             }
//         } else if (field === emailInput) {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(value)) {
//                 isValid = false;
//                 errorMessage = 'Please enter a valid email address';
//             }
//         } else if (field === messageInput) {
//             if (value.length < 10) {
//                 isValid = false;
//                 errorMessage = 'Message must be at least 10 characters';
//             }
//         }

//         // Remove existing error message
//         const existingError = field.parentElement.querySelector('.error-message');
//         if (existingError) {
//             existingError.remove();
//         }

//         if (!isValid) {
//             field.style.borderColor = '#f44336';
//             const errorDiv = document.createElement('div');
//             errorDiv.className = 'error-message';
//             errorDiv.style.color = '#f44336';
//             errorDiv.style.fontSize = '12px';
//             errorDiv.style.marginTop = '5px';
//             errorDiv.textContent = errorMessage;
//             field.parentElement.appendChild(errorDiv);
//         }

//         return isValid;
//     }

//     // Form submission handler
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         // Validate all fields
//         const isNameValid = validateField(nameInput);
//         const isEmailValid = validateField(emailInput);
//         const isMessageValid = validateField(messageInput);

//         if (isNameValid && isEmailValid && isMessageValid) {
//             // Show success message
//             submitButton.textContent = 'Submitting...';
//             submitButton.disabled = true;
//             submitButton.style.opacity = '0.7';

//             // Simulate form submission (replace with actual API call)
//             setTimeout(() => {
//                 showSuccessMessage();
//                 form.reset();
//                 submitButton.textContent = 'Submit';
//                 submitButton.disabled = false;
//                 submitButton.style.opacity = '1';

//                 // Reset input styles
//                 inputs.forEach(input => {
//                     input.style.borderColor = '#ddd';
//                 });
//             }, 1500);
//         } else {
//             // Shake animation for invalid form
//             form.style.animation = 'shake 0.5s';
//             setTimeout(() => {
//                 form.style.animation = '';
//             }, 500);
//         }
//     });

//     // Success message
//     function showSuccessMessage() {
//         const successDiv = document.createElement('div');
//         successDiv.className = 'success-message';
//         successDiv.style.cssText = `
//             background-color: #4CAF50;
//             color: white;
//             padding: 15px;
//             border-radius: 5px;
//             margin: 20px 0;
//             text-align: center;
//             animation: slideDown 0.5s ease-out;
//         `;
//         successDiv.textContent = '✓ Thank you! Your message has been sent successfully.';

//         form.parentElement.insertBefore(successDiv, form);

//         setTimeout(() => {
//             successDiv.style.animation = 'fadeOut 0.5s ease-out';
//             setTimeout(() => {
//                 successDiv.remove();
//             }, 500);
//         }, 3000);
//     }

//     // Add typing effect to header (optional)
//     const headerTitle = document.querySelector('header h1');
//     const originalText = headerTitle.textContent;

//     // Counter animation for footer
//     const footer = document.querySelector('footer p');
//     const currentYear = new Date().getFullYear();
//     footer.textContent = `Copyright ${currentYear}`;

//     // Add hover effect to form
//     form.addEventListener('mouseenter', function () {
//         this.style.transform = 'translateY(-2px)';
//         this.style.transition = 'transform 0.3s ease';
//     });

//     form.addEventListener('mouseleave', function () {
//         this.style.transform = 'translateY(0)';
//     });
// });

// // Add CSS animations via JavaScript
// const style = document.createElement('style');
// style.textContent = `
//     @keyframes shake {
//         0%, 100% { transform: translateX(0); }
//         25% { transform: translateX(-10px); }
//         75% { transform: translateX(10px); }
//     }

//     @keyframes slideDown {
//         from {
//             opacity: 0;
//             transform: translateY(-20px);
//         }
//         to {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     }

//     @keyframes fadeOut {
//         from {
//             opacity: 1;
//         }
//         to {
//             opacity: 0;
//         }
//     }

//     header {
//         transition: transform 0.3s ease, box-shadow 0.3s ease;
//     }

//     input, textarea {
//         transition: border-color 0.3s ease, box-shadow 0.3s ease;
//     }

//     button {
//         transition: all 0.3s ease;
//     }

//     button:active {
//         transform: scale(0.95);
//     }
// `;
// document.head.appendChild(style);


const name = "amina";
console.log("Hello", name);
console.log(name.length);