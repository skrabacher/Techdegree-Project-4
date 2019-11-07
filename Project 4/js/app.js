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
    game.resetGame();
  });
 
 
 
  /*
In the app.js file, add a "click" event listener to each of the onscreen keyboard buttons or use
event delegation and add a single event listenerthat listens for a click on any of the onscreen
keyboard buttons. If you use event delegation, make sure that clicking the space between and
around the onscreen keyboard buttons does not result in the `handleInteraction()` method being
called.
In the
*/

//On Screen Keyboard Event Listener (returns value of clicked screen keyboard letters)
let screenKeyboard = document.querySelectorAll(".key"); //selects the html buttonss that correspond to the keyboard on screen
console.log(screenKeyboard);
screenKeyboard.forEach(key => { //adds event listener to each individul keyboard button
    key.addEventListener('click', (event) => {
        console.log(event.target);
        clickedKey = event.target; //returns html of the keyboard button that was clicked(e.g. <button class="key">q</button>)
        game.handleInteraction(clickedKey);
    });
})

//Physical Keyboard Event Listener

// //Click Event and Keyup Listeners for the Search Bar and Search Button
// searchButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     performSearch(searchInput, names);
//     console.log('Search button is functional!');
    
//  });   
//  searchBoxInput.addEventListener('keyup', (event) => {
//     event.preventDefault();
//     performSearch(searchInput, names);
//     console.log('Search Box keyup is functional!');
//     console.log(event.target.value);
//     console.log('keyup event.target.value result above');
//  });
// // };


// <div id="qwerty" class="section">
// 				<div class="keyrow">
// 					<button class="key">q</button>
// 					<button class="key">w</button>
// 					<button class="key">e</button>
// 					<button class="key">r</button>
// 					<button class="key">t</button>
// 					<button class="key">y</button>
// 					<button class="key">u</button>
// 					<button class="key">i</button>
// 					<button class="key">o</button>
// 					<button class="key">p</button>
// 				</div>

// 				<div class="keyrow">
// 					<button class="key">a</button>
// 					<button class="key">s</button>
// 					<button class="key">d</button>
// 					<button class="key">f</button>
// 					<button class="key">g</button>
// 					<button class="key">h</button>
// 					<button class="key">j</button>
// 					<button class="key">k</button>
// 					<button class="key">l</button>
// 				</div>

// 				<div class="keyrow">
// 					<button class="key">z</button>
// 					<button class="key">x</button>
// 					<button class="key">c</button>
// 					<button class="key">v</button>
// 					<button class="key">b</button>
// 					<button class="key">n</button>
// 					<button class="key">m</button>
// 				</div>
// 			</div>


