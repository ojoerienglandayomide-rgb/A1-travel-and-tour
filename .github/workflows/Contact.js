
const messageForm = document.getElementById("messageForm");
const formMessage = document.getElementById("formMessage");

messageForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if fields are empty
    if (!name || !email || !phone || !subject || !message) {

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";

        return;
    }

    // Prepare the email
    const emailBody =
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Message:\n${message}`;

    const mailtoLink =
        `mailto:info@a1travel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    formMessage.textContent = "Opening your email application...";
    formMessage.style.color = "green";

    // Open the visitor's email application
    window.location.href = mailtoLink;

});
