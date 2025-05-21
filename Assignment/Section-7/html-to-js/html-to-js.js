'use strict';

 //document.querySelector('.message').textContent = 'Wow you made changes 🎉';

 let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



document.querySelector('#btn').addEventListener('click', function(){
  let field =  Number(document.querySelector('#input').value); 


    // When no input
   if (!field) {
     document.querySelector('.message').textContent = '⛔️ No Number! ';
   }
  
   // When player wins
   else if (field === secretNumber) {
    document.querySelector('.container').style = 'background-color: #60b347';

    document.querySelector('.guessNumber').style = 'background-color: #60b347; color: #FFF; Border-color:red;';

    document.querySelector('.message').
    textContent = '🎉 Correct Number! ';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highScore').textContent = highscore;
    }

   }
    // When guess is too high
   else if(field > secretNumber) {
    if(score > 1){
    document.querySelector('.message').textContent = '📈 Too High! ';
        score=score - 1;
        document.querySelector('.score').textContent = Number(score);

    }
    else{
        document.querySelector('.container').style = 'background-color: #FF0000';
        document.querySelector('.message').textContent = '😥 You Lost the Game! ';
        score = 0;
        document.querySelector('.score').textContent = Number(score);
    }
   }
   
    // When guess is too low
   else if (field < secretNumber) {
    if(score > 1){
    document.querySelector('.message').textContent = '📉 Too Low! ';
        score--;
        document.querySelector('.score').textContent = Number(score);
    }
    else{
        document.querySelector('.container').style = 'background-color: #FF0000';

        document.querySelector('.message').textContent = '😥 You Lost the Game! ';
        score = 0;
        document.querySelector('.score').textContent = Number(score);
    }
   }    
});

document.querySelector('#reset').addEventListener('click', function(){

    console.log("Play again clicked");
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
     document.querySelector('.message').textContent = 'Start Guessing...!';
     document.querySelector('.score').textContent = score;
     document.querySelector('#input').value = "";    
    document.querySelector(".container").style = "background:#000;"
    document.querySelector('.guessNumber').textContent = '?';
     document.querySelector('.guessNumber').style= 'background:#FFF; border-color:#000;';

});