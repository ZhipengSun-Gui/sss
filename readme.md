### Basic Functionality
 - letter tiles in the player’s “hand” are selected randomly from a data structure with the 
proper distribution of the letters 
   - put the word in array and use the Math.random to get a random number as the index then get a word info
 - letter tiles can be dragged-and-dropped onto target Scrabble squares
    - use the JQuery dropable and dragable to make a drap area the the letter dragable
 - program identifies which letter tile is dropped onto which Scrabble square
    - use the array to record the letter, and the letter will mark index by the dataset when put the letter into the square,
    record the letter in the array by index
 - board includes bonus squares
    - mark the second squares and other square 
 - score is tallied correctly, including consideration of bonus square multipliers
    - caluclate when the letter put in area, take the value by the letter element dataset, and sum up.
### Additional Functionality
 - any number of words can be played until the player wishes to quit or depletes all tiles
    - complete
 - the board is cleared after each round so that a new word can be played
    - complete
 - after playing a word, only the number of letter tiles needed to bring the player’s “hand” 
back to 7 tiles are selected
 - score is kept for multiple words
    - use the window.localstorage to keep the score.
 - Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them 
anywhere else, they will be bounced back to the “rack”.
 - Once the tile is placed on the Scrabble board, it can not be removed.
 - Except for the first letter, all sub-subsequent letters must be placed directly next to or 
above/below another letter with no space. Else, they will bounce back to the “rack”.

### Extra Credit
 - Full Scrabble board lines are implemented
 - Validating to see if a word that the user enters is valid 
    - use $.ajax get the dict, loop the line in the hash table, when check the words,
     just get the attr whether in the hash table.