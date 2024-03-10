const moodElements = document.querySelectorAll('.mood');
const lightbox = document.querySelector('.lightbox');

// Add event listeners to each mood element
moodElements.forEach(moodElement => {
    moodElement.addEventListener('click', () => {
        lightbox.style.display = 'block'; // Show the lightbox
    });
});

// Close the lightbox when clicking on the close button
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});