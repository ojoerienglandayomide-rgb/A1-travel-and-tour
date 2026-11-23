
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlide = 0;
let slideInterval;

// Function to display slides
function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

// Next slide
function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

// Previous slide
function previousSlide() {
    let previous = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(previous);
}

// Automatic slider
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlider() {
    clearInterval(slideInterval);
    startSlider();
}

// Button events
nextButton.addEventListener("click", () => {
    nextSlide();
    resetSlider();
});

prevButton.addEventListener("click", () => {
    previousSlide();
    resetSlider();
});

// Dot events
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        resetSlider();
    });
});

// Start slider
showSlide(0);
startSlider();
