/*My variables*/ 
var players= ["mario", "luigi", "wario", "peach", "toad", "waluigi", "donkey kong", "yoshi", "daisy", "bowser"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 11;


function startGame() {

    numGuesses = 11;

    chosenWord = players[Math.floor(Math.random() * players.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    console.log(players);
    blanksAndSuccesses = [];
    wrongGuesses = [];


    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    console.log(blanksAndSuccesses);



    document.getElementById("guessesLeft").innerHTML = numGuesses;


    document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" ");


    document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");



}



function checkLetters(letter) {

    var letterInWord = false;


    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] == letter) {
            letterInWord = true;
        }
    }


    if (letterInWord) {


        for (var i = 0; i < numBlanks; i++) {


            if (chosenWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}



function roundComplete() {


    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);


    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


    if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You win!");


        document.getElementById("winCounter").innerHTML = winCounter;
        startGame();
    } else if (numGuesses == 0) {
        lossCounter++;
        alert("You lose ");


        document.getElementById("lossCounter").innerHTML = lossCounter;
        startGame();
    }

}



startGame();


document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);
    roundComplete();
}
