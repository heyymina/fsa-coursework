document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Use fetch to submit the form data
  fetch(this.action, {
      method: this.method,
      body: new FormData(this)
  })
  .then(response => {
      if (response.ok) {
          // Redirect to success page
          window.location.href = "success.html"; // Replace with the actual path to your success page
      } else {
          alert("There was an issue submitting the form. Please try again.");
      }
  })
  .catch(error => console.error("Submission Error:", error));
});

