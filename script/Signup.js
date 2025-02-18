document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    function renderForm(isSignup) {
        app.innerHTML = `
            <div class="container">
                <h2 id="form-title">${isSignup ? "Sign Up" : "Login"}</h2>
                <form id="auth-form">
                    ${isSignup ? '<input type="text" id="name" placeholder="First Name" required>' : ''}
                    ${isSignup ? '<input type="text" id="surname" placeholder="Surname" required>' : ''}
                    <input type="text" id="username" placeholder="Username" required>
                    ${isSignup ? '<input type="tel" id="mobile" placeholder="Mobile Number" required>' : ''}
                    <input type="password" id="password" placeholder="Password" required>
                    ${isSignup ? '<input type="password" id="confirmPassword" placeholder="Confirm Password" required>' : ''}
                    ${isSignup ? '<input type="email" id="email" placeholder="Email" required>' : ''}
                    <button type="submit">Submit</button>
                </form>
                <p class="toggle">${isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}</p>
            </div>

           
        `;

        document.querySelector(".toggle").addEventListener("click", () => {
            renderForm(!isSignup);
        });

        document.getElementById("auth-form").addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const email = isSignup ? document.getElementById("email").value : null;
            const name = isSignup ? document.getElementById("name").value : null;
            const surname = isSignup ? document.getElementById("surname").value : null;
            const mobile = isSignup ? document.getElementById("mobile").value : null;
            const confirmPassword = isSignup ? document.getElementById("confirmPassword").value : null;

            if (!username || !password || (isSignup && (!email || !name || !surname || !mobile || !confirmPassword))) {
                alert("All fields are required!");
                return;
            }

            if (isSignup && password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (isSignup) {
                localStorage.setItem("user", JSON.stringify({ username, password, email, name, surname, mobile }));
                showSuccessMessage("Signup successful! Please log in.", false);
            } else {
                const storedUser = JSON.parse(localStorage.getItem("user"));
                if (storedUser && storedUser.username === username && storedUser.password === password) {
                    showSuccessMessage("Login successful!", true);
                } else {
                    alert("Invalid username or password.");
                }
            }
        });
    }

    function showSuccessMessage(message, redirectToDashboard) {
        const modal = document.getElementById("success-modal");
        const messageElement = document.getElementById("success-message");
        const okButton = document.getElementById("ok-button");

        messageElement.innerText = message;
        modal.style.display = "flex"; // Show modal

        okButton.addEventListener("click", function () {
            modal.style.display = "none"; // Hide modal
            if (redirectToDashboard) {
                window.location.href = "BankApplication.html"; // Redirect to dashboard
            }
        }, { once: true }); // Ensure the event listener runs only once
    }

    renderForm(false);
});
