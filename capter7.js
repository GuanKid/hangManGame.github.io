// // Create an array of words
// var words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake"
//     ];
//     // Pick a random word
//     var word = words[Math.floor(Math.random() * words.length)];
//     // Set up the answer array
//     var answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//     }
//     var remainingLetters = word.length;
//     // The game loop
//     while (remainingLetters > 0) {
//     // Show the player their progress
//     alert(answerArray.join(" "));
//     // Get a guess from the player
//     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if (guess === null) {
//     // Exit the game loop
//     break;
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     // Update the game state with the guess
//     for (var j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//     answerArray[j] = guess;
//     remainingLetters--;
//     }
//     }
//     }
//     // The end of the game loop
// }
// // Show the answer and congratulate the player
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);




let words =
    [
        "javascript",
        "monkey",
        "amazing",
        "pancake"
    ];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

let guess = "";
let guesses = word.length;
while (remainingLetters > 0 && guesses > 0) {
    alert("Your progress: " + answerArray.join(""));
    alert("You have " + guesses + " tries left");
    guess = prompt("Guess a letter or click Cancel");
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("Please enter a single letter!")
    }
    else {
        guesses--;
        for (let j = 0; j < word.length; j++) 
        {
            
            if (word[j] === guess.toLowerCase()) 
            {
                answerArray[j] = guess;
                remainingLetters--;

            }
        }
    }
}
if (guess === null) {
    alert("Sorry to see you leave, the word was: " + word)

}
else {
    alert("Your final result is " + answerArray.join(""))
    alert("Good job the word was: " + word)
}

