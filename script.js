// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Clear form on page load
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.reset();
        
        // Clear form after submission
        contactForm.addEventListener('submit', function() {
            setTimeout(function() {
                contactForm.reset();
            }, 1000);
        });
    }
    
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
});
