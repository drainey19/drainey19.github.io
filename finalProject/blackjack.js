//create card deck
var suites = ["heart", "dimond", "spades", "clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();
var denck = new Array();

function createDeck() {
    deck = new Array();
    for (i = 0; i < values.length; i++) {
        for (x = 0; x < suites.length; x++) {
            // set face cards equal to 10
            var num = parseInt(values[i]);
            if (values[i] == "J" || values == "Q" || values[i] == "K") {
                num = 10;
            }
            else if (values[i] == "A") {
                num = 11;
            }
            let card = {values: values[i], suites: suites[x]}
            deck.push(card);
        }
    }
    return deck;
}

function shuffle() {
    for (var i = 0; i < 300; i++) {
        var x = Math.floor((Math.random * deck.length));
        var y = Math.floor((Math.random * deck.length));
        var temp = deck[x];
        deck[x] = deck[y];
        deck[y] = temp;
    }
}

// create players
function players(num) {
    players = new Array();
    for (i = 1; 1 >= 0; i++) {
        var hand = new Array();
        var player = {name: "Player " + i, Id: i, Hand: hand};
        players.push(player);
    }
}

//display players


// start the game
function playBlackjack() {
    $("#displayGameList").hide();
    $("#blackjack").show();
    createDeck();
    shuffle();
    console.log(deck);
}

// deal the hand
function dealCards() {

}

// render cards

// get card UI

//get points

//update points

// hit
function hit() {

}


// stay
function stay() {

}

// display winner
function results() {

}

//check

//update deck