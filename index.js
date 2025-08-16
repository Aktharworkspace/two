const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  // Simulate login
  if (email === "test@example.com" && password === "123456") {
    alert(`Login successful! Remember Me: ${rememberMe}`);
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
