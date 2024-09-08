
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // Check if all fields are filled
    if (emailInput && passwordInput) {
      alert("Login successful! Redirecting to the dashboard...");
      window.location.href = "homepage.html"; // Redirect to dashboard or any other page
    } else {
      alert("Please fill in all fields.");
    }
  });



// Listen for form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const nameInput = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  // Check if all fields are filled
  if (nameInput && emailInput && passwordInput) {
      alert("Sign-up successful! Redirecting to the homepage...");
      window.location.href = "homepage.html"; // Redirect to homepage
  } else {
      alert("Please fill in all fields.");
  }
});


