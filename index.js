document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Example logic (can be replaced with real backend call)
  if (email === "test@example.com" && password === "123456") {
    alert("Login successful ✅ Redirecting to dashboard...");
    window.location.href = "dashboard.html"; // example redirect
  } else {
    alert("Invalid credentials ❌ Please try again.");
  }
});
