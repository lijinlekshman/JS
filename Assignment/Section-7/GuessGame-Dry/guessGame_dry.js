'use strict';

 let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score){
    document.querySelector('.score').textContent = score;
}


document.querySelector('#btn').addEventListener('click', function(){
  let field =  Number(document.querySelector('#input').value); 


    // When no input
   if (!field) {
    displayMessage('⛔️ No Number! ');
   }
  
   // When player wins
   else if (field === secretNumber) {
    document.querySelector('.container').style = 'background-color: #60b347';

    document.querySelector('.guessNumber').style = 'background-color: #60b347; color: #FFF; Border-color:red;';
    document.querySelector('.guessNumber').textContent = Number(secretNumber);

    displayMessage('🎉 Correct Number! ');

    if(score > highscore){
      highscore = score;
      document.querySelector('.highScore').textContent = highscore;
    }

   }
// When player Loss
    else if(field !== secretNumber){

        if(score > 1){
            displayMessage(field > secretNumber ? '📈 Too High! ' : '📉 Too Low! ');
        score=score - 1;
        displayScore(Number(score));

    }
    else{
        document.querySelector('.container').style = 'background-color: #FF0000';
        displayMessage('😥 You Lost the Game! ');
        score = 0;
        displayScore(Number(score));
    }

       
    }

});

document.querySelector('#reset').addEventListener('click', function(){

    console.log("Play again clicked");
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
     displayMessage('Start Guessing...!');
     displayScore(Number(score));
     document.querySelector('#input').value = "";    
    document.querySelector(".container").style = "background:#000;"
    document.querySelector('.guessNumber').textContent = '?';
     document.querySelector('.guessNumber').style= 'background:#FFF; border-color:#000;';

});