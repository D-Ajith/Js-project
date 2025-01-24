const signup = document.querySelector("form");

signup.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  let isValid = true;

  // Clear all error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("pswdError").textContent = "";
  document.getElementById("CpswdError").textContent = "";

  // Name validation
  if (nameValue === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else if (nameValue.length <= 3) {
    document.getElementById("nameError").textContent = "Name must be more than 3 characters long";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailValue === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  // Password validation
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (passwordValue === "") {
    document.getElementById("pswdError").textContent = "Password is required";
    isValid = false;
  } else if (!passwordPattern.test(passwordValue)) {
    document.getElementById("pswdError").textContent = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)";
    isValid = false;
  }

  // Confirm Password validation
  if (confirmPasswordValue === "") {
    document.getElementById("CpswdError").textContent = "Confirm Password is required";
    isValid = false;
  } else if (passwordValue !== confirmPasswordValue) {
    document.getElementById("CpswdError").textContent = "Passwords do not match";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    // Clear the form fields
    name.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";

    // Save user data to localStorage
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    allUsers.push({name: nameValue,email: emailValue,password: passwordValue,confirmPassword:confirmPasswordValue});
    localStorage.setItem("users", JSON.stringify(allUsers));

    // Redirect to login page
    window.location.href = "../login/login.html";
  }
});