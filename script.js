// ============================
// PAGE PROTECTION (runs on home.html)
// ============================

if (window.location.pathname.includes("home.html")) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
}

// ============================
// LOGIN LOGIC (runs on index.html)
// ============================

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

const validID = "S10234";
const validPassword = "planner123";

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredID = document.getElementById("student-id").value.trim();
    const enteredPassword = document.getElementById("password").value;

    if (enteredID === validID && enteredPassword === validPassword) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("studentID", enteredID);
      window.location.href = "home.html";
    } else {
      errorMessage.style.display = "block";
    }
  });
}

// ============================
// LOGOUT LOGIC (runs on home.html)
// ============================

const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("studentID");
    window.location.href = "index.html";
  });
}
const welcomeText = document.getElementById("welcome-text");

if (welcomeText) {
  const studentID = localStorage.getItem("studentID");
  welcomeText.textContent = "Logged in as: " + studentID;
}