// This is the javascript code for the Customer Feedback Portal to provide dynamic interaction

//U94741303

// Implement form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Get field values
        const name = document.getElementById("customerName").value;
        const rating = document.getElementById("customerRating").value;
        const comments = document.getElementById("customerComments").value;

        // Validate all fields filled out
        if (!name || !rating || !comments) {
            alert("Please fill out all fields.");
            return;
        }

        // Display feedback upon submission
        const feedback = document.getElementById('feedback');
        feedback.innerHTML += `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Rating:</strong> ${rating} Stars</p>
            <p><strong>Comments:</strong> ${comments}</p>
            <hr>
        `;

        form.reset();
    });
});