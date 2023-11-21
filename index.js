// Function to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptTerms = document.getElementById("acceptTerms").checked;

    // Add form data to the table
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = password;
    cell4.innerHTML = dob;
    cell5.innerHTML = acceptTerms ? "Yes" : "No";

    // Clear form fields after submission
    document.getElementById("registrationForm").reset();
});
