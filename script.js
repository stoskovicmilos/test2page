document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const errorMessage = document.getElementById("error-message");
  
  // Simple email validation check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.match(emailPattern)) {
      errorMessage.style.display = "none";
      alert("Thank you for subscribing!");
      emailInput.value = ""; // Clear the input field
  } else {
      errorMessage.style.display = "block";
  }
});
