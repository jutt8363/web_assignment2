// script.js
const form = document.getElementById('contactForm');
if (form) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
      let isValid = true;

      if (nameInput.value.trim() === '') {
          document.getElementById('nameError').textContent = 'Name is required.';
          isValid = false;
      } else {
          document.getElementById('nameError').textContent = '';
      }

      if (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
          document.getElementById('emailError').textContent = 'Valid email is required.';
          isValid = false;
      } else {
          document.getElementById('emailError').textContent = '';
      }

      if (messageInput.value.trim() === '') {
          document.getElementById('messageError').textContent = 'Message is required.';
          isValid = false;
      } else {
          document.getElementById('messageError').textContent = '';
      }

      if (!isValid) {
          event.preventDefault();
      }
  });
}

const faqButtons = document.querySelectorAll('.faq-button');

faqButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});