// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you! Your message has been sent.');
      form.reset(); // Reset the form
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    alert('Oops! Something went wrong. Please try again.');
  });
});