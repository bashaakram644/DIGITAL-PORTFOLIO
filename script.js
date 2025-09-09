// Handle form submission

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent page reload

    // Get user input

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    // Check if any field is empty

    if (name && email && message) {

        // Display a success message

        document.getElementById("form-response").innerHTML = `

            <p>Thank you, ${name}! Your message has been received.</p>

        `;

        document.getElementById("contact-form").reset(); // Reset the form

    } else {

        // Display an error message

        document.getElementById("form-response").innerHTML = `

            <p style="color: red;">Please fill in all fields.</p>

        `;

    }

});