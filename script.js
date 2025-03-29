// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply saved theme
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggleIcon.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Page Transition Loading Effect
const pageTransition = document.querySelector('.page-transition');
const navLinks = document.querySelectorAll('nav a');

// Show loading when navigating between pages
navLinks.forEach(link => {
    if (link.href.includes('.html') && !link.classList.contains('active')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = link.href;
            const pageName = link.textContent.trim();
            
            // Update loading message
            document.querySelector('.loading-message').textContent = `Loading ${pageName} page...`;
            
            // Show loading overlay
            pageTransition.style.display = 'flex';
            
            // After a short delay, proceed to the page
            setTimeout(() => {
                window.location.href = destination;
            }, 800);
        });
    }
});

// Hide loading when page is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        pageTransition.style.opacity = '0';
        setTimeout(() => {
            pageTransition.style.display = 'none';
            pageTransition.style.opacity = '1';
        }, 300);
    }, 500);
});