// toggleVisibility function to handle showing and hiding sections
function toggleVisibility(showId, hideIds) {
  hideIds.forEach((hideId) => {
    document.getElementById(hideId).style.display = "none";
  });
  document.getElementById(showId).style.display = "block";
}

// Add event listeners for toggling between sections
document.getElementById("signup-link").addEventListener("click", function (e) {
  e.preventDefault();
  toggleVisibility("signup-section", [
    "login-section",
    "verification-email-section",
    "dashboard-section",
    "forgot-password-section",
  ]);
});

document.getElementById("login-link").addEventListener("click", function (e) {
  e.preventDefault();
  toggleVisibility("login-section", [
    "signup-section",
    "verification-email-section",
    "dashboard-section",
    "forgot-password-section",
  ]);
});

document
  .getElementById("forgot-password-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    toggleVisibility("forgot-password-section", [
      "login-section",
      "signup-section",
      "verification-email-section",
      "dashboard-section",
    ]);
  });

document
  .getElementById("back-to-login-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    toggleVisibility("login-section", [
      "forgot-password-section",
      "signup-section",
      "verification-email-section",
      "dashboard-section",
    ]);
  });


// Handle user registration
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("new-email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, gender, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Handle success, e.g., show a success message or navigate to email verification
      toggleVisibility("verification-email-section", [
        "signup-section",
        "login-section",
        "dashboard-section",
        "forgot-password-section",
      ]);
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error, e.g., show an error message
    });
});

// Handle user login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const id = document.getElementById("id").value;
  console.log(email,id)
  const credentials = {email, id}
  fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Handle success, e.g., redirect to dashboard or show a success message
      toggleVisibility("dashboard-section", [
        "login-section",
        "signup-section",
        "verification-email-section",
        "forgot-password-section",
      ]);

      window.location.href = "../homepage/home.html";

    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error, e.g., show an error message
    });
});

// Handle email verification
document
  .getElementById("email-verification")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const verificationCode = document.getElementById("verification-code").value;

    fetch("http://localhost:5000/api/auth/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ verificationCode }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success, e.g., navigate to dashboard
        toggleVisibility("dashboard-section", [
          "verification-email-section",
          "signup-section",
          "login-section",
          "forgot-password-section",
        ]);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, e.g., show an error message
      });
  });



// Handle forgot password
document
  .getElementById("reset-password")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const resetEmail = document.getElementById("reset-email").value;

    fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resetEmail }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success, e.g., show a message that reset link is sent
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, e.g., show an error message
      });
  });


 