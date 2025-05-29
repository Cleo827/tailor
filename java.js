
console.log("JavaScript is linked!");
// Hamburger menu toggle
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    menuIcon.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            navLinks.classList.toggle('active');
        }
    });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        const item = this.parentElement;
        item.classList.toggle('active');
        // Close others
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('active');
        });
    });
});

// Optional: Remove play overlay when video starts
const video = document.querySelector('.video-container video');
const playOverlay = document.querySelector('.play-overlay');
if (video && playOverlay) {
    video.addEventListener('play', () => {
        playOverlay.style.display = 'none';
    });
    video.addEventListener('pause', () => {
        playOverlay.style.display = '';
    });
    }

   