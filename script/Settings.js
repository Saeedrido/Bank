document.getElementById("logoutButton").addEventListener("click", function() {
    document.getElementById("logoutModal").style.display = "block";
});

document.getElementById("confirmLogout").addEventListener("click", function() {
    // Redirect to login page
    window.location.href = "Signup.html"; 
});

document.getElementById("cancelLogout").addEventListener("click", function() {
    // Close the modal
    document.getElementById("logoutModal").style.display = "none";
});
