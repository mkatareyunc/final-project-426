// Get references to the input elements and buttons
const usernameInput = document.getElementById("Name");
const passwordInput = document.getElementById("Password");
const loginBtn = document.getElementById("loginBtn");
const createAccountBtn = document.getElementById("createAccountBtn");

// Event listener for Login button
loginBtn.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Make a POST request to login endpoint
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            // Redirect or show success message
            return response.json();
        } else {
            // Handle login failure
            console.error("Login failed");
        }
    })
    .then(data => {
        //store userid in local storage
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('username', data.username);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

// Event listener for Create Account button
createAccountBtn.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log('Button clicked');
    // Make a POST request to registration endpoint
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            // Redirect or show success message
            console.log("Account created successfully");
        } else {
            // Handle registration failure
            console.error("Registration failed");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
