import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';

  emailjs.init('bTDQ8wwM6acE6pVRV'); // tu public key

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_zypzjj5', 'template_ypny4vr', this)
      .then(function() {
        document.getElementById('form-status').textContent = "Message sent successfully!";
        document.getElementById('contact-form').reset();
      }, function(error) {
        document.getElementById('form-status').textContent = "Failed to send message. Please try again.";
      });
  });