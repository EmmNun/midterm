// Color Options Array
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Prompt for User Input
    const userName = prompt("What is your name?");
    const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");
    
    // Store Input in an Object
    const userInfo = {
        name: userName,
        selectedColor: colors[colorChoice]
    };
    
    // Array Check (Required)
    console.log("The first color in the array is:", colors[0]); // should output grey HEX
    
    // Apply Color to Background
    document.body.style.backgroundColor = userInfo.selectedColor;
    
    // Welcome message
    if (userName) {
        // Create welcome element
        const welcomeMessage = document.createElement('div');
        welcomeMessage.style.position = 'fixed';
        welcomeMessage.style.top = '100px';
        welcomeMessage.style.right = '20px';
        welcomeMessage.style.background = 'rgba(0, 86, 179, 0.9)';
        welcomeMessage.style.color = 'white';
        welcomeMessage.style.padding = '10px 20px';
        welcomeMessage.style.borderRadius = '5px';
        welcomeMessage.style.zIndex = '1000';
        welcomeMessage.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        welcomeMessage.innerHTML = `<p>Welcome to Volleyball World, ${userName}!</p>`;
        
        // Add to the DOM
        document.body.appendChild(welcomeMessage);
        
        // Remove after 5 seconds
        setTimeout(() => {
            welcomeMessage.style.transition = 'opacity 1s';
            welcomeMessage.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(welcomeMessage);
            }, 1000);
        }, 5000);
    }
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Interactive player cards
    const playerCards = document.querySelectorAll('.player-card');
    
    playerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });
});