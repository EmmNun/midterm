// Background color options
const colors = ["#f1faee", "#a8dadc", "#e63946"]; // light, teal, red

// Prompt for user input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for light, 1 for teal, 2 for red");

// Store input in an object
const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
};

// Array check
console.log("The first color in the array is:", colors[0]);

// Apply color to background
document.body.style.backgroundColor = userInfo.selectedColor;

// Welcome message
if (userName) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.bottom = '20px';
    welcomeMessage.style.right = '20px';
    welcomeMessage.style.backgroundColor = 'rgba(0,0,0,0.7)';
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.padding = '10px 20px';
    welcomeMessage.style.borderRadius = '5px';
    welcomeMessage.style.zIndex = '1000';
    welcomeMessage.textContent = `Welcome, ${userName}! Enjoy volleyball!`;
    document.body.appendChild(welcomeMessage);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 5000);
}