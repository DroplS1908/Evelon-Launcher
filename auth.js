window.onload = function() {
    setTimeout(() => {
        let loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.opacity = "0";  // Smooth fade-out
        setTimeout(() => {
            loadingScreen.style.display = "none";  // Hide after transition
        }, 500); // Matches the CSS transition duration
    }, 2000); // Delay before hiding loader
};

document.getElementById("toggle-link").addEventListener("click", function(event) {
    event.preventDefault();
    let container = document.querySelector(".container");
    let formTitle = document.getElementById("form-title");
    let confirmPasswordGroup = document.getElementById("confirm-password-group");
    let submitButton = document.querySelector(".btn");

    if (!container.classList.contains("sign-up-mode")) {
        container.classList.add("sign-up-mode");
        formTitle.innerHTML = "Create Your Account";
        confirmPasswordGroup.style.display = "block";
        submitButton.innerText = "Sign Up";
        this.innerText = "Already have an account? Login";
    } else {
        container.classList.remove("sign-up-mode");
        formTitle.innerHTML = "Welcome Back";
        confirmPasswordGroup.style.display = "none";
        submitButton.innerText = "Login";
        this.innerText = "Don't have an account? Sign up";
    }
});
