function toggleVisibility(showId, hideId) {
  document.getElementById(hideId).style.display = "none";
  document.getElementById(showId).style.display = "block";
}

document.getElementById("signup-link").addEventListener("click", function (e) {
  e.preventDefault();
  toggleVisibility("signup-section", "login-section");
});

document.getElementById("login-link").addEventListener("click", function (e) {
  e.preventDefault();
  toggleVisibility("login-section", "signup-section");
});
