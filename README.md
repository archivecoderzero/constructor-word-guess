# constructor-word-guess-game

This is the Constructor-word-guess-game , a hangman style game that uses NodeJs technology.  This game is similar to hangman where the user will guess a word, based on the array that is provided by the developer, in this case for ease of demonstration purposes, we have (test one , test two , test three .. so on and so forth ...) ..

This node applications uses the following NPM : 
 - inquirer 
 - chalk-animation 

Please install the the package.json . 

## Introduction : Adding a username : 
the application starts with asking the player to add their name : 

![image](https://github.com/archivecoderzero/constructor-word-guess/blob/master/image/n2.PNG) 


## usage of chalk-animation NPM : 
Using chalk-animation NPM,  i was able to make the application have a livelier tone to it . 

![image](https://github.com/archivecoderzero/constructor-word-guess/blob/master/image/n3.PNG) 


## Main Game : 
After the set timeout for the animation , the game will ask the player to press a key . If the key is not a letter , it will ask the player to add in a letter , if the key is an upper case letter, it will automatically have the key to lowercase . (see the code at index.js at line 60 to 61 ) .

![image](https://github.com/archivecoderzero/constructor-word-guess/blob/master/image/n4.PNG) 

## Letter already guessed : 
If the letter is already guessed , just like in the prior hangman game , it would not deduct it on the "tries remaining " . 
![image](https://github.com/archivecoderzero/constructor-word-guess/blob/master/image/n5.PNG) 

## Win Condition :
Once the player guessed the answer, it will prompt them if they want to continue playing, if they picked Yes, then it will reload the main game again . 


![image](https://github.com/archivecoderzero/constructor-word-guess/blob/master/image/n6.PNG) 

## Loss Condition and Exit :

Loss Condition : 
- If the player runs out of tries, the game will prompt the user if they wanted to play again and it will display the answer that the player did not guess . 

Exit Condition :
-  If the player decided he has had enough and pressed , NO , the application will then exit out . Coded on this game is the delay before the exit message shows . 

![image](https://github.com/archivecoderzero/constructor-word-guess/blob/master/image/n1.PNG) 


## Watch the Demo Here (VIDEO ONLY NO SOUND)
https://drive.google.com/file/d/18GyjYAbk6-QdRntMfTidN08iLcTnufbY/view

## Watch the Demo Here (VIDEO WITH NARRATION)
https://drive.google.com/file/d/1HI_0RCnksII5V_5c1l3EYc42OhbN79lE/view


