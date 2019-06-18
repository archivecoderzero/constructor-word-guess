# liri-node-app
This is the Liri Node Application which is powered by NodeJS , using NPM technology , to get information from the Spotify to find information of a music using Spotify API, Bands-In-Town API to find out if there are any concerts depending on input of the user , then the OMDB API to find out information regarding the movie ., 

## This application stands for LIRI is a Language Interpretation and Recognition . It uses the command line to search for the data . 

![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/liri1.PNG) 

## This application takes the following command line : 

### "concert-this" command
- Returns the information depending on the input, If the input has a result (ie : a concert based on the Bands-In-Town API) it will return a result . If the band / artist does not have any result, then it would let the user know .

This command, outputs unlimited results depending on 

 > WITH RESULT : 
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/liri2concert.PNG) 
- Shows the formatted results , and a clickable link to buy a ticket .

 > WITHOUT RESULT : 
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/liriconcertnoresult.PNG) 
- Shows that the search keywords did not turn up any results.



### "spotify-this-song" command
- This command line outputs results depending on the users input, this command line uses the spotify API to look for a song and return the information regarding it . By default , it will look for the song "First Date - Blink 182" .

 > DEFUALT RESULT : 
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/lirispotifydefault.PNG) 
- Shows the default result "Blink 182 - First Date" if the user has no input

> RESULT WITH THE NAME OF THE SONG ONLY
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/lirispotify.PNG) 
- Shows the results of when ONLY the name of the song is inputed .

> RESULT WITH THE NAME OF THE SONG AND ARTIST
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/lirispotifysongandartist.PNG) 
- When the user defines the song and the artist , the app will have a more specific result . 

### "movie-this" command

- This command line for the Liri App is design to look for the movie information depending on the input of the user. This command line uses the OMDB API to search and output the information .

 > DEFUALT RESULT : 
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/lirimoviedef.PNG) 
- Shows the default result which is set to "Mr. Nobody"

> RESULT with valid query
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/lirimovieres.PNG) 
- Shows the result if the query has a valid result .

> RESULT WITH THE NAME OF THE SONG AND ARTIST
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/lirimovienores.PNG) 
- When the result does not have any values to return , it will console log the error the user . 


### "do-what-it-says" command 

- This command line for the Liri App is made to pull the command from the text file , then run it . As of now , it uses the "spotify-this-song,I Want it That Way" , as the random command . 

 > DEFUALT RESULT : 
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/dowhat.PNG) 
- Pulls from the random.txt , then run the command line and the on it . 

 > OTHER RESULT : 
![image](https://github.com/archivecoderzero/liri-node-app/blob/master/image/liri111.PNG) 
- I put another example, i edited the random.txt to "movie-this,The Avengers" and it still works




