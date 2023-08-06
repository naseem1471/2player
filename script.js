var Player1Input = document.querySelector('.Player1');
var enterGameBtn = document.querySelector('.enterGame');
var playerInstructions = document.getElementById('playerInstructions');

// Check if Player 1 has already logged in
var player1LoggedIn = sessionStorage.getItem('player1LoggedIn');

if (player1LoggedIn) {
    // Hide Player 1's login interface
    playerInstructions.textContent = 'Enter name for Player 2 and click to enter the game, thanks';
    Player1Input.style.display = 'none';
    enterGameBtn.style.display = 'none';

    // Show Player 2's login interface
    var Player2Input = document.createElement('input');
    Player2Input.className = 'Player2';
    Player2Input.type = 'text';
    Player2Input.placeholder = 'Enter name for Player 2';
    
    var enterGameBtnPlayer2 = document.createElement('button');
    enterGameBtnPlayer2.className = 'enterGamePlayer2';
    enterGameBtnPlayer2.textContent = 'ENTER';

    var loginDiv = document.querySelector('.login');
    loginDiv.appendChild(Player2Input);
    loginDiv.appendChild(enterGameBtnPlayer2);

    Player2Input.style.display = 'block';
    enterGameBtnPlayer2.style.display = 'block';
}

enterGameBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    var playerName = Player1Input.value;
    
    window.location.href = 'page2.html';

    sessionStorage.setItem('playerName', playerName);
    sessionStorage.setItem('player1LoggedIn', 'true');
});
