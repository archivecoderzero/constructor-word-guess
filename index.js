var Word = require('./Word.js');
var inquirer = require('inquirer');
var chalkAnimation = require("chalk-animation");

var picked;
var pickedWord;
var guesses;
var guessesLeft;
var wordBank = ["test one", "test two", "test three", "test four", "test five", "test six", "test seven", "test eight",];

initialize();

function initialize() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "username"
            },
        ])
        .then(function (inquirerResponse) {
            function intro() {
                const rainbow = chalkAnimation.rainbow('Welcome to Word Guess Game ' + inquirerResponse.username); // Animation starts
                setTimeout(() => {
                    rainbow.start(); // Animation resumes
                }, 0);
            }
            intro();

            resetGame();
            game();
        
        });

}



function randomWord(wordBank) {
    var index = Math.floor(Math.random() * wordBank.length);
    return wordBank[index];

}
var questions = [
    {
        name: 'letterGuessed',
        message: 'Guess a letter',
        validate: function (value) {
            var valid = (value.length === 1) && ('abcdefghijklmnopqrstuvwxyz'.indexOf(value.charAt(0).toLowerCase()) !== -1);
            return valid || 'Please enter a letter';
        },
        when: function () {
            return (!picked.allGuessed() && guessesLeft > 0);
        }
    },
    {
        type: 'confirm',
        name: 'playAgain',
        message: 'You want to play again?',

        when: function () {
            return (picked.allGuessed() || guessesLeft <= 0);
        }
    }
];
function resetGame() {
    pickedWord = randomWord(wordBank);
    picked = new Word(pickedWord);
    picked.makeGuess(' ');
    guesses = [];
    guessesLeft = 10;
}

function game() {
    if (!picked.allGuessed() && guessesLeft > 0) {
        console.log(picked + '');
    }

    inquirer.prompt(questions).then(answers => {
        if ('playAgain' in answers && !answers.playAgain) {
            const glitch = chalkAnimation.glitch('Good Bye! Thanks For Playing!'); 
            const glitch2 = chalkAnimation.glitch('Good Bye! Thanks For Playing!'); 
            const glitch3 = chalkAnimation.glitch('Good Bye! Thanks For Playing!'); 
            const glitch4 = chalkAnimation.glitch('Good Bye! Thanks For Playing!'); 
            setTimeout(() => {
                glitch.start(); 
            }, 0);    
            setTimeout(() => {
                process.exit();
            }, 3000); 
        }
        if (answers.playAgain) {
            resetGame();
        }
        if (answers.hasOwnProperty('letterGuessed')) {
            var currentGuess = answers.letterGuessed.toLowerCase();

            if (guesses.indexOf(currentGuess) === -1) {
                guesses.push(currentGuess);
                picked.makeGuess(currentGuess);
                if (pickedWord.toLowerCase().indexOf(currentGuess.toLowerCase()) === -1) {
                    guessesLeft--;
                }
            } else {
                console.log('You already guessed', currentGuess);
            }
        }

        if (!picked.allGuessed()) {
            if (guessesLeft < 1) {
                console.log('no more guesses');
                console.log(pickedWord, 'was correct.');

            } else {
                console.log('guesses so far:', guesses.join(' '));
                console.log('guesses remainig:', guessesLeft);
            }
        } else {
            console.log(pickedWord, 'is correct!');
        }

        game();
    });
}


