//List of possible words
var wordArray = [
  ["J", "S", "O", "N"],
  ["P","Y","T","H","O","N"],
  ["R","U","B","Y","O","N","R","A","I","L","S"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["D","E","V","O","P","S"],
  ["J","Q","U","E","R","Y"]
]

//Randomize words and set variables
var random = Math.floor((Math.random()*(wordArray.length-1))); 
var fullWord = wordArray[random]; 
var newWord= new Array(fullWord.length);
var error = 0;

//Underscores representing letters in word
for (var i = 0; i < newWord.length; i++){
	newWord[i] = "_ ";
}

//Print field
function printNewWord(){
	for (var i = 0; i < newWord.length; i++){
	var wordView = document.getElementById("wordView");
	var letter = document.createTextNode(newWord[i]);
	wordView.appendChild(letter);
	}
}

//Matching guessed letters to possible letters in word(s)
var checkLetter = function(){
	var f = document.letterInput; 
	var b = f.elements["inputBox"]; 
	var sign = b.value;
	sign = sign.toUpperCase();
	for (var i = 0; i < fullWord.length; i++){
		if(fullWord[i] === sign){
			newWord[i] = sign + " ";
			var hit = true;
		}
	b.value = "";
	}
	
//Replaces field
var wordView = document.getElementById("wordView");
wordView.innerHTML=""; 
printNewWord();
	
//Assigning incorrect choices to "Wrong Letters" and builds Hangman
if(!hit){
	var wrongLetters = document.getElementById("wrongLetters");
	var letter = document.createTextNode(" " + sign);
	wrongLetters.appendChild(letter); 
	error++;
	var hangman = document.getElementById("hangman");
	hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
	}
	
//Ensures all letters have been found/Game completed
var finished = true;
for (var i = 0; i < newWord.length; i++){
	if(newWord[i] === "_ "){
		finished = false;
	}
}
if(finished){
	window.alert("You win!");
}
	
//6 wrong letters, you lose
if(error === 6){
	window.alert("You Lose!");
}
}

function init(){
	printNewWord();
}

window.onload = init;