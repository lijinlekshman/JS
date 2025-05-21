'use restrict';

// Selecting Elements.
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    diceEl.classList.add('hidden');
    playerActive0.classList.remove('player--winner');
    playerActive1.classList.remove('player--winner');
    playerActive0.classList.add('player--active');
    playerActive1.classList.remove('player--active');
}
init();

const switchPlayer = function(){
     document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        playerActive0.classList.toggle('player--active');
        playerActive1.classList.toggle('player--active');
}

// Starting condition.

// Rolling dice functionality.
btnRoll.addEventListener('click', function() {
   if(playing){
     //Generating Random Dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolling
    if(dice !== 1){
        //adding dice to the current score.
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        //change the active player
       switchPlayer();
    }
   }
})

btnHold.addEventListener('click', function(){
    if(playing){
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
      if(scores[activePlayer] >= 100){
        //Finish the Game.
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         playing = false;  
         diceEl.classList.add('hidden');  
      }
      else{
        switchPlayer();
      }
    }
})

btnNew.addEventListener('click', init)


