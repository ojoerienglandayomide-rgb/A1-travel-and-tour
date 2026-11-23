
const galleryImages = document.querySelectorAll(".gallery-item img");

// Create image preview
galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const preview = document.createElement("div");

        preview.classList.add("image-preview");

        preview.innerHTML = `
            <span class="close-preview">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(preview);

        // Close preview
        preview.addEventListener("click", function() {
            preview.remove();
        });

    });

});
