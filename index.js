let cards =[];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message="";


let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards");

let player ={
    name: "Per",
    chips: 145,
    sayHello: function(){
        console.log("Heyy!")
    }
}
player.sayHello();


let playerEl=document.querySelector("#player-el")
playerEl.textContent = player.name +": $" + player.chips;

// rendom card function
function getRandomCard(){
    let num = Math.floor(Math.random()*13)+1;
    if(num===1){
        return 11;
    }
    else if(num>10){ 
        return 10;
    }
    else{
        return num;
    }
}

// render Game
function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i] +", ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum<=20){
        message = "do you want to draw a new card?";
    }
    else if(sum===21){
        message = "You've got BlackJack'!";
        hasBlackJack = true;
    }
    else if(sum>21){ 
        message = "You're out of the game";
        isAlive=false;
    }
    messageEl.textContent=message;
}

// startGame
function startGame(){
    isAlive = true;

    let firstCard=getRandomCard();
    let secondCard=getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

// button new Card
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}


