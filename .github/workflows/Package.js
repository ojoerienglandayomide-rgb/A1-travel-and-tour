
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const searchButton = document.getElementById("searchButton");

const packageCards = document.querySelectorAll(".package-card");
const noResults = document.getElementById("noResults");

// Function to filter packages
function filterPackages() {

    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedPrice = priceFilter.value;

    let foundPackages = 0;

    packageCards.forEach(function(card) {

        const cardText = card.textContent.toLowerCase();
        const cardPrice = card.dataset.price;

        const matchesSearch = cardText.includes(searchValue);

        const matchesPrice =
            selectedPrice === "all" ||
            cardPrice === selectedPrice;

        if (matchesSearch && matchesPrice) {
            card.style.display = "block";
            foundPackages++;
        } else {
            card.style.display = "none";
        }

    });

    // Display message if no package is found
    if (foundPackages === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

// Search button
searchButton.addEventListener("click", filterPackages);

// Search while typing
searchInput.addEventListener("input", filterPackages);

// Filter packages by price
priceFilter.addEventListener("change", filterPackages);
