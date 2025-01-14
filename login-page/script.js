function toggleVisibility(showId, hideIds) {
  hideIds.forEach((hideId) => {
    document.getElementById(hideId).style.display = "none";
  });
  document.getElementById(showId).style.display = "block";
}

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
