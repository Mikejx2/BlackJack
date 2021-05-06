// 

var suits = ["spades", "diamonds", "spades", "clubs"];
var rank = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
var deck = [];
var playerContainer = document.querySelector('#player-hand');
var dealerContainer = document.querySelector('#dealer-hand');
let deal = document.querySelector('#deal-button');
let hit = document.querySelector('#hit-button');
let stand = document.querySelector('#stand-button');
let playerHand = [];
let dealerHand = [];



// Create Deck
for (var suitCounter = 0; suitCounter < 4; suitCounter++){
  for (var rankCounter = 0; rankCounter < 13; rankCounter++){
    var card = {}
    card.rank = rankCounter + 1
    card.suits = suits[suitCounter]
    card.image = `images/${rank[rankCounter]}_of_${suits[suitCounter]}.png`
    deck.push(card)
  
   
  }
 
}

deck = shuffleArray(deck)


// shuffle
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}


// Dealing Cards

function dealHand(){
  let card1 = deck.pop();
  let card2 = deck.pop();
  playerHand.push(card1);
  playerHand.push(card2);
 getCardImage(card1, playerContainer)
 getCardImage(card2, playerContainer)

 
  let card3 = deck.pop();
  let card4 = deck.pop();
  dealerHand.push(card3);
  dealerHand.push(card4);
  getCardImage(card3, dealerContainer)
  getCardImage(card4, dealerContainer)

for (i=0; i < dealerHand.length; i++){
  console.log(dealerHand[i].image)
  console.log(dealerHand[i].rank)
    
  
}
  for (i=0; i < playerHand.length; i++){
    console.log(playerHand[i].image)
    console.log(playerHand[i].rank)
    
  
}

let st = document.querySelector('.score-table')
let div1 = createDivision ('div1', 'div1', 'Dealer Score: ');
let div2 = createDivision ('div2', 'div2', `${calculatePoints(dealerHand)}`);

let div3 = createDivision ('div3', 'div3', 'Player Score: ');
let div4 = createDivision ('div4', 'div4', `${calculatePoints(playerHand)}`);

st.append(div1);
st.append(div3);
div1.append(div2);
div3.append(div4);

console.log(calculatePoints(dealerHand)) 
console.log(calculatePoints(playerHand)) 

}

deal.addEventListener("click", dealHand);


// Place Card Image

function getCardImage(card, player){
  let img = document.createElement("img")
  img.setAttribute("src", card.image)
  player.append(img);

}

// Hit Cards

function hitCard(){
  let hitCard1 = deck.pop();
  playerHand.push(hitCard1);
  getCardImage(hitCard1, playerContainer)

for (i=0; i < playerHand.length; i++){
    console.log(playerHand[i].image)
}
console.log(playerUpdate())

}

hit.addEventListener("click", hitCard);

// Stand

function standCard(){
  
  let stand1 = deck.pop();
  dealerHand.push(stand1);
  getCardImage(stand1, dealerContainer)
  

for (i=0; i < dealerHand.length; i++){
  console.log(dealerHand[i].image)
    
  
}
console.log(dealerUpdate())
}

stand.addEventListener("click", standCard);


// Create Calcuation div's

function createDivision(css, id, text){

  var division = document.createElement('div');
  division.setAttribute("class",css);
  division.setAttribute("id", id);
  division.textContent = text;
  
  return division
  
}


// Calculate Points
function calculatePoints(hand){
  let points = 0
  for (let index = 0; index < hand.length; index++){
    if(hand[index].rank >=11 && hand[index].rank <=13){
       hand.rank += 10
} 

// else if (hand[index].rank === 1){

// }
points = points + hand[index].rank
};
  return points
            
}

console.log(calculatePoints(dealerHand))  

// Update Score
function playerUpdate(){
  let update = document.getElementById('div4')
    update.remove();
    let st = document.querySelector('.score-table')
    let div4 = createDivision ('div4', 'div4', `${calculatePoints(playerHand)}`);
    div3.append(div4);
    st.append(div3);
    
    
}

function dealerUpdate(){
  let update = document.getElementById('div2')
    update.remove();
    let st = document.querySelector('.score-table')
    let div2 = createDivision ('div2', 'div2', `${calculatePoints(dealerHand)}`);
    div1.append(div2);
    st.append(div1);
    st.insertBefore(div1,div3)
}



// function buildDeck() {
//   for (var i = 0; i < rank.length; i++) {
//     for (var x = 0; x < suits.length; x++) {
//       var weight = parseInt(rank[i]);
//       if (rank[i] == "jack" ) {
//         weight = 10;
//       }
//       if (rank[i] == "queen") {
//         weight = 12;
//       }
//       if (rank[i] == "king") {
//         weight = 13;
//       }
//       if (rank[i] == "ace") {
//         weight = 11;
//       }
//       var card = {
//         Rank: rank[i],
//         Suit: suits[x],
//         Weight: weight,
//         Image: `images/${rank[i]}_of_${suits[x]}.png`,
//       };
//       deck.push(card);
//     }
//   }
//   return deck;
// }






// function removeCard(c){
// for (j=c; j<= numberOfcards -2; j++)

// {
//   deck[j] = deck[j+1];
// }

//     numberOfcards--;

// };





// function dealClick (event){
//   shuffleArray(deck)
//   for (i=0; i<2; i++)
//  
//   var card1 = deck.pop()
//   var card2 = deck.pop()
//   card1.push(pHand)
//   card2.push(dHand)
  
// }

// console.log(pHand)

// deal.addEventListener("click, dealClick");

// window.addEventListener('DOMContentLoaded', function() {
//   Execute after page load
// })

