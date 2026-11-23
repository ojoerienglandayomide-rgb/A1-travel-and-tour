
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// CLOSE MENU WHEN A LINK IS CLICKED

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// FOOD MENU FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button

        button.classList.add("active");

        // Get selected category

        const selectedCategory = button.dataset.category;

        // Filter food cards

        foodCards.forEach((card) => {

            const foodCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === foodCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

    } else {

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        contactForm.reset();

    }

});
