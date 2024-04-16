document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Simulate login process (for demonstration)
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    if (email === "example@example.com" && password === "password123") {
        // Successful login
        alert("Login successful!");
        // Redirect to dashboard or another page
    } else {
        // Display error message
        document.getElementById("loginErrorMessage").textContent = "Invalid email or password.";
    }
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Simulate signup process (for demonstration)
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    // Validate email format and password length (you can add more validation if needed)
    if (email.trim() === "" || password.trim() === "") {
        // Display error message
        document.getElementById("signupErrorMessage").textContent = "Please fill in all fields.";
        return;
    }
    // Successful signup
    alert("Sign up successful!");
    // Redirect to dashboard or another page
});
