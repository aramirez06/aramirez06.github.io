// Clear form after submission
document.getElementById('contactForm').addEventListener('submit', function() {
    setTimeout(function() {
        document.getElementById('contactForm').reset();
    }, 1000);
});

window.addEventListener('load', function() {
    document.getElementById('contactForm').reset();
});
