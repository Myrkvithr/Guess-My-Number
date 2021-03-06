'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'πΉπΉπΉ No number!';
        displayMessage('πΉπΉπΉ No number!');
        //When player wins
    } else if (guess === secretNumber) {

        // document.querySelector('.message').textContent =
        //     'ππππ    ππππππππππ Correct Number!';
        displayMessage('ππππ    ππππππππππ Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.guess', '.check').style.display = 'none';
        document.querySelector('.check').style.display = 'none';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'π»π»π» To high! π»π»π»' : 'πΊπΊπΊ To low! πΊπΊπΊ';
            displayMessage(guess > secretNumber ? 'π»π»π» To high! π»π»π»' : 'πΊπΊπΊ To low! πΊπΊπΊ');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent =
            //     'πππ You lost the game!!';
            displayMessage('πππ You lost the game!!');
            document.querySelector('.score').textContent = 0;

        }
    }


    //Refactoring
    //     //When guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'π»π»π» To high! π»π»π»';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             'πππ You lost the game!!';
    //         document.querySelector('.score').textContent = 0;

    //     }

    //     //When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             'πΊπΊπΊ To low! πΊπΊπΊ';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     } else {
    //         document.querySelector('.message').textContent =
    //             'πππ You lost the game!!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').style.display = 'block';
    document.querySelector('.guess').value = '';
    document.querySelector('.check').style.display = 'block';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.message').textContent =
    //     'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // console.log(score);
    // console.log(secretNumber);
});
