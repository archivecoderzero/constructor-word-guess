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
                const rainbow1 = chalkAnimation.rainbow('Welcome to Word Guess Game ' + 
                inquirerResponse.username); // Animation starts
                setTimeout(() => {
                    rainbow1.start(); // Animation resumes
                }, 0)
                
                setTimeout(() => {
                    const rainbow = chalkAnimation.neon("Press a letter then press enter"); // Animation starts
                    setTimeout(() => {
                        rainbow.start(); // Animation resumes
                    }, 5000)
    



                }, 1000); 
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
    guessesLeft = 5;
}

function game() {

    if (!picked.allGuessed() && guessesLeft > 0) {
        console.log(picked + '');
    }

    inquirer.prompt(questions).then(answers => {
        if ('playAgain' in answers && !answers.playAgain) {
            const neon1 = chalkAnimation.pulse('GoodBye! Th      or Playing!\nGo   Bye! ThanksFo  Pla     \nGoodBye!     ks     Playing!\nGo  Bye!     ks     Pla    \nGoodBye!     ks     Playing!'); 

            setTimeout(() => {
                neon1.start(); 
            }, 0);    
            setTimeout(() => {
                process.exit();
            }, 5000); 
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
                console.log('YOU GUESSED THAT ALREADY', currentGuess);
            }
        }

        if (!picked.allGuessed()) {
            if (guessesLeft < 1) {
                console.log('NO MORE GUESS');
                console.log(pickedWord, ' IS THE WORD');
            } else {
                console.log('YOUR GUESS SO FAR ', guesses.join(' '));
                console.log('REMAINING GUESS ', guessesLeft);
            }
        } else {
            console.log(pickedWord, ' IS CORRECT!');
        }

        game();
    });
}


