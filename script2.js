// Get the player name from sessionStorage
var playerName = sessionStorage.getItem("playerName");

// Reference to the welcome message element
var welcomeMessage = document.getElementById("welcomeMessage");

// Display the welcome message with the player's name
if (playerName) {
    welcomeMessage.textContent = `Hello ${playerName}, welcome to the game!`;
} else {
    welcomeMessage.textContent = "Welcome to the game!";
}
