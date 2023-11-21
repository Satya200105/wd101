// Function to validate the date of birth between 18 and 55 years
function validateDOB() {
    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const today = new Date();
    const minAge = 18;
    const maxAge = 55;

    const diffInMs = today - dob;
    const ageDate = new Date(diffInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (isNaN(dob.getTime())) {
        alert("Please enter a valid date of birth.");
        return false;
    }

    if (age < minAge || age > maxAge) {
        alert("Age must be between 18 and 55 years.");
        return false;
    }

    return true;
}

// Modify the existing form validation function to include date of birth validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!validateDOB()) {
        return false;
    }

    // Other validations such as email format, password strength, etc., can be added here

    return true;
}

// Add event listener to the form for submission
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
