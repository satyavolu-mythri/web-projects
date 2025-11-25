const passwordField = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {
    if (passwordField.type === "password") {
        passwordField.type = "text";  // make visible
        toggleBtn.textContent = "Hide";
    } else {
        passwordField.type = "password"; // hide again
        toggleBtn.textContent = "Show";
    }
});
