const gameContainer = document.getElementById("game");
const startGame = document.getElementById('button');
const flipLimit = 2;
let colorArr = [];
var count = 0;
var turnCount = 0;
let flippedCards = document.getElementsByClassName('flipped')


let noClicking = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    newDiv.setAttribute('id','color');

    // call a function handleCardClick when a div is clicked on

    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
// TODO: Implement this function!
function resetCountFlippedColorArr(){
  count = 0
  colorArr = []
  flippedCards[0].classList.remove('flipped')
  flippedCards[0].classList.remove('flipped')
};

function removeCardColor(){
  for ( let i = 0; i < 2; i++ ){
  flippedCards[i].style.removeProperty('background-color')
  }
}

function addMatchClass(){
  flippedCards[0].classList.add('match')
  flippedCards[1].classList.add('match')
}

// TODO: Implement this function!
function handleCardClick(event) {
  let card = event.target;
  let color = card.getAttribute('class'); 
  let matchedCards = document.getElementsByClassName('match');
 

if( count < flipLimit ){
  count ++;
  colorArr.push(color)
  console.log('count', count,colorArr)
  event.target.classList.add('flipped')
  card.style.backgroundColor = color
  if (count == flipLimit){
    turnCount ++
    console.log(turnCount)
    if( colorArr[0] != colorArr[1]){
      console.log('not a match', colorArr)
      setTimeout(function() {
        removeCardColor()
        resetCountFlippedColorArr()
    }, 500);
    } else {
      console.log('match', colorArr)
      addMatchClass()
      resetCountFlippedColorArr()
  }
}
  if(matchedCards.length === 10){
    alert(`Good Game! It took you ${turnCount} tries`)
  }
}
};

// when the DOM loads
createDivsForColors(shuffledColors);

