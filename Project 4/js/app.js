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

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();


