'use strict';
// Prelim understanding
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// Get the value of the text field input
console.log(document.querySelector('.guess').value);

// Set the value of the text field input
document.querySelector('.guess').value = 23;

// Get the value of the text field input
console.log(document.querySelector('.guess').value);
*/



// Variable for secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Variable to store the score (initial value = 20)
let score = 20;

// Variable to store the highscore
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Select the button element (refer to HTML doc) 
// and add an event listener, which takes two arguments
// The element of said event, and a function which is the event handler

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');

      // When guess is correct
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
      
      // When the guess is wrong  
    } else if(guess !== secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 
            (guess > secretNumber) ? '📈 Too high!' : '📉 Too low!';

            score--;
            document.querySelector('.score').textContent = score;
        }
        
    } else {
        document.querySelector('.message').textContent = '💥 You lose!';
        document.querySelector('.score').textContent = 0;
    } 
});



document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

