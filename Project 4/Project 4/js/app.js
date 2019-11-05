/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//  const testPhrase = new Phrase("PHRASE SHOULD BE LOWER CASE");
//  console.log(testPhrase);

//  const testGame = new Game("GAME SHOULD BE LOWER CASE");
//  console.log(testGame);

//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//console.log(game.phrases[1]); //testing

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//Start Button Event Listener (initiates new game when button is clicked)
let game;
let startButton = document.getElementById("btn__reset"); //selects start button in the html file
startButton.addEventListener('click', function(e){ //on click 
    game = new Game(); // instantiates a new object in the Game class
    game.startGame(); // //hides the start screen, gets a phrase for the new game and displays gameboard for user
  });
  /*

*/

