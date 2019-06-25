/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer, gamePlaying= true;

initGame();
var lastDice;


//  document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';




document.querySelector('.btn-roll').addEventListener('click', function () {

    if(gamePlaying){
    //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';


    if(lastDice === 6 && dice ===6){
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();

    }

    //3. Update the roundScore if the score is not equals to 1

   else if (dice !== 1) {
        //Add Score
        roundScore += dice;  //roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
    }
    lastDice = dice;
}
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if(gamePlaying){
    //Add current player score to his global score
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



    //check if the player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner !!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('activePlayer');
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    } else {
        nextPlayer();
    }
}
});

document.querySelector('.btn-new').addEventListener('click', initGame);


function nextPlayer() {


    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    /*document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');*/

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

function initGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}






























