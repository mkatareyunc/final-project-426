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
            window.location.assign("page2.html");
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
        if (response.status === 400) {
            // User already exists, show alert
            alert("User already exists. Use login button.");
        } else if (response.ok) {
            window.location.assign("page2.html");
            console.log("Account created successfully");
            return response.json();
        } else {
            // Handle registration failure
            console.error("Registration failed");
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
