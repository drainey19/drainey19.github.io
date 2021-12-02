//create card deck
var suites = ["H", "D", "S", "C"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
/*
var cardImage = [
    "2H.png", "2D.png", "2S.png", "2C.png",
    "3H.png", "3D.png", "3S.png", "3C.png",
    "4H.png", "4D.png", "4S.png", "4C.png",
    "5H.png", "5D.png", "5S.png", "5C.png",
    "6H.png", "6D.png", "6S.png", "6C.png",
    "7H.png", "7D.png", "7S.png", "7C.png",
    "8H.png", "8D.png", "8S.png", "8C.png",
    "9H.png", "9D.png", "9S.png", "9C.png",
    "TH.png", "TD.png", "TS.png", "TC.png",
    "JH.png", "JD.png", "JS.png", "JC.png",
    "QH.png", "QD.png", "QS.png", "QC.png",
    "KH.png", "KD.png", "KS.png", "KC.png",
    "AH.png", "AD.png", "AS.png", "AC.png"
];
*/
var deck = new Array();
//var players = new Array();
var playerHand = new Array();
var dealerHand = new Array();

function createDeck() {
    deck = new Array();
    for (i = 0; i < values.length; i++) {
        for (j = 0; j < suites.length; j++) {
            // set face cards equal to 10
            var cardVal = parseInt(values[i]);
            if (values[i] == "T" || values[i] == "J" || values[i] == "Q" || values[i] == "K") {
                cardVal = 10;
            }
            else if (values[i] == "A") {
                cardVal = 11;
            }
            let card = {values: values[i], suites: suites[j], cardImage: "playingCards/" + values[i] + suites[j] + ".png", Val: cardVal}
            deck.push(card);
        }
    }
    return deck;
}

function shuffle() {
    for (var i = 0; i < 300; i++) {
        var j = Math.floor((Math.random() * deck.length));
        var k = Math.floor((Math.random() * deck.length));
        var temp = deck[j];

        deck[j] = deck[k];
        deck[k] = temp;
    }
}

// create players
/*
function createPlayers(num) {
    var players = new Array();
    for (i = 1; i >= 0; i++) {
        var hand = new Array();
        var player = {name: "Player " + i, Id: i, Hand: hand};
        players.push(player);
    }
}*/

function createHand() {
    for (i = 0; i < 2; i++) {
        var j = deck.pop();
        playerHand.push(j);
        var k = deck.pop();
        dealerHand.push(k);
    }
    displayPlayerCards(0);
    displayDealerCards(0);
    points();
}

/*
function startBlackjack() {
    $("#startBlackjack").hide();
    $("#blackjackGame").show();
    createDeck();
    shuffle();
    createHand();

    console.log(deck);
    console.log(playerHand);
    console.log(dealerHand);
}
*/
// start the game
function playBlackjack() {
    $("#displayGameList").hide();
    $("#bust").hide();
    //$("#winner").hide();
    document.getElementById("winner").innerHTML = "";
    $("#blackjack").show();
    document.getElementById("hitBTN").disabled = false;
    clearBoard();
    createDeck();
    shuffle();
    createHand();

    //console.log(deck);
    //console.log(playerHand);
    console.log(dealerHand);
    /*
    var img = document.createElement("img");
    img.src = deck[36].cardImage;
    img.height = 150;

    var div = document.getElementById("player");
    div.appendChild(img);

    var img = document.createElement("img");
    img.src = deck[50].cardImage;
    img.height = 150;

    var div = document.getElementById("player");
    div.appendChild(img);
    //document.getElementById("player").innerHTML = deck[0];
    var img = document.createElement("img");
    img.src = deck[42].cardImage;
    img.height = 150;

    var div = document.getElementById("house");
    div.appendChild(img);
    */
}

// display the cards
function displayPlayerCards(cardsOut) {
    //console.log("test2: " + playerHand.length)
    for (i = cardsOut; i < playerHand.length; i++) {
        //var img = document.createElement("img");
        //img.appendChild()
        var img = document.createElement("img");
        img.src = playerHand[i].cardImage;
        // rezize
        img.height = 100;
    
        var div = document.getElementById("playerCards");
        div.appendChild(img);
    }
}

function displayDealerCards(numCards, start) {
    if (start != 1) {
        $("#dealerCards2").hide();
        $("#dealerCards").show();
        var img = document.createElement("img");
        img.src = dealerHand[0].cardImage;
        img.height = 100;
    
        var div = document.getElementById("dealerCards");
        div.appendChild(img);
    
        var img = document.createElement("img");
        img.src = "./playingCards/_back.png";
        img.height = 100;
    
        var div = document.getElementById("dealerCards");
        div.appendChild(img);

        document.getElementById("dealerTotal").innerHTML = "Total: ?";
    }
    else {
        $("#dealerCards").hide();
        $("#dealerCards2").show();
        console.log("dealer hand length: " + dealerHand.length);
        console.log(dealerHand);
        for (i = numCards; i < dealerHand.length; i++) {
            //var img = document.createElement("img");
            //img.appendChild()
            //dealerHand.filter();
            var img = document.createElement("img");
            img.src = dealerHand[i].cardImage;
            img.height = 100;
        
            var div = document.getElementById("dealerCards2");
            div.appendChild(img);
        }
        console.log("length2: " + dealerHand.length);
        dPoints();
    }

}

//get points
function points() {
     var total = 0;
     for (i = 0; i < playerHand.length; i++) {
         total += playerHand[i].Val;
         //console.log(playerHand[i].Val);
     }
     console.log("total: " + total);
     //updatePoints(total);
     document.getElementById("playerTotal").innerHTML = "Total: " + total;
     check(total);
     var pFinalPoints = total;
     return pFinalPoints;
}

// dealers points
function dPoints() {
    var dtotal = 0;
     for (i = 0; i < dealerHand.length; i++) {
         //console.log("val: " + dealerHand[i].val);
         dtotal += dealerHand[i].Val;
     }
     document.getElementById("dealerTotal").innerHTML = "Total: " + dtotal;
     //dcheck(dtotal);
     dealersMove(dtotal);
     var dFinalPoints = dtotal;
     return dFinalPoints;
}

function finalTotals() {
    var finalDPoints = 0;
    var finalPPoints = 0;
    for (i = 0; i < dealerHand.length; i++) {
        finalDPoints += dealerHand[i].Val;
    }
    for (j = 0; j < playerHand.length; j++) {
        finalPPoints += playerHand[j].Val;
    }
    console.log("final Points: player: " + finalPPoints + " dealer: " + finalDPoints);
    results(finalDPoints, finalPPoints);
}

//update points
/*
function updatePoints(total) {
    document.getElementById("playerTotal").innerHTML = "Total: " + total;
}*/

// hit
function hit() {
    var i = playerHand.length;
    var j = deck.pop();
    playerHand.push(j);
    points();
    displayPlayerCards(i);
}

// stand
function stand() {
    displayDealerCards(0, 1);
    //dealersMove();
    
}

// dealers turn
function dealersMove(total) {
    console.log("test total: " + total);
    if (total < 17) {
        var j = dealerHand.length;
        var k = deck.pop();
        dealerHand.push(k);
        dPoints();
        //console.log("I am here");
        displayDealerCards(j, 1);

        var nums = 0;
        nums =  nums + 1;
        //console.log("Times ran: " + nums)
    }
    else if (total > 21) {
        console.log("bust: " + total);
        finalTotals();
    }
    else {
        //results();
        finalTotals();
        //console.log("hmmm");
    }
    /*
    while (i < 1) {
        if (total <= 16) {
            var j = dealerHand.length;
            var k = deck.pop();
            dealerHand.push(k);
            dPoints();
            displayDealerCards(j);
        }
        else {
            //results();
            i++
        }
    }
    */
}

// display winner
function results(dResult, pResult) {
    //console.log("Now i am here!")
    if (((21 - dResult) >= 0) && ((21 - pResult) < 0)) {
        document.getElementById("winner").innerHTML = "Dealer wins!";
        // dealer won
        console.log("dealer won");
        //player bust
        console.log("player bust");
    }
    else if (((21 - dResult) < 0) && ((21 - pResult) >= 0)) {
        document.getElementById("winner").innerHTML = "Player wins!";
        //player  won
        console.log("player won");
        //dealer bust
        console.log("dealer bust");
    }
    else if ((21 - dResult) < (21 - pResult)) {
        // dealer won
        console.log("dealer won");
        document.getElementById("winner").innerHTML = "Dealer wins!";
    }
    else if ((21 - dResult) == (21 - pResult)) {
        console.log("dealer wins...I think");
        document.getElementById("winner").innerHTML = "Dealer wins...I think";
    }
    else {
        document.getElementById("winner").innerHTML = "Player wins!";
        // player won
        console.log("player won");
    }
}

//check
function check(total) {
    //console.log("I am here: " + total);
    if (total > 21) {
        document.getElementById("hitBTN").disabled = true;
        $("#bust").show();
        stand();
    }
}

/*
function dcheck(dtotal) {
    if (dtotal > 21) {
        console.log("dealer bust");
    }
}
*/

//update deck

//clear board
function clearBoard() {
    deck.length = 0;
    playerHand.length = 0;
    dealerHand.length = 0;
    document.getElementById("playerCards").innerHTML = "";
    document.getElementById("dealerCards").innerHTML = "";
    document.getElementById("dealerCards2").innerHTML = "";
    document.getElementById("playerTotal").innerHTML = "";
}