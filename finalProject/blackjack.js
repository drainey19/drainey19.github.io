var suites = ["H", "D", "S", "C"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
var deck = new Array();
var playerHand = new Array();
var dealerHand = new Array();

//create card deck
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

//shuffle cards
function shuffle() {
    for (var i = 0; i < 300; i++) {
        var j = Math.floor((Math.random() * deck.length));
        var k = Math.floor((Math.random() * deck.length));
        var temp = deck[j];

        deck[j] = deck[k];
        deck[k] = temp;
    }
}

//create hand
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

    console.log(deck);
    console.log(playerHand);
    console.log(dealerHand);
}

// display the cards
function displayPlayerCards(cardsOut) {
    for (i = cardsOut; i < playerHand.length; i++) {
        var img = document.createElement("img");
        img.src = playerHand[i].cardImage;
        // rezize
        //img.height = 100;
    
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
        //img.height = 100;
    
        var div = document.getElementById("dealerCards");
        div.appendChild(img);
    
        var img = document.createElement("img");
        img.src = "_back.png";
        //img.height = 100;
    
        var div = document.getElementById("dealerCards");
        div.appendChild(img);

        document.getElementById("dealerTotal").innerHTML = "Total: ?";
    }
    else {
        $("#dealerCards").hide();
        $("#dealerCards2").show();

        for (i = numCards; i < dealerHand.length; i++) {
            var img = document.createElement("img");
            img.src = dealerHand[i].cardImage;
            //img.height = 100;
        
            var div = document.getElementById("dealerCards2");
            div.appendChild(img);
            console.log("Hand: " + dealerHand[i].Val);
            console.log("card image: " + dealerHand[i].cardImage);
        }
        //console.log("length2: " + dealerHand.length);
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
     //console.log("total: " + total);
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
    //console.log("final Points: player: " + finalPPoints + " dealer: " + finalDPoints);
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
    //console.log("test total: " + total);
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
        //console.log("bust: " + total);
        finalTotals();
    }
    else {
        //results();
        finalTotals();
        //console.log("hmmm");
    }
}

// display winner
function results(dResult, pResult) {
    //console.log("Now i am here!")
    if (((21 - dResult) >= 0) && ((21 - pResult) < 0)) {
        document.getElementById("winner").innerHTML = "Dealer wins!";
        //$("#playerTotal")
        // dealer won
        //console.log("dealer won");
        //player bust
        //console.log("player bust");
    }
    else if (((21 - dResult) < 0) && ((21 - pResult) >= 0)) {
        document.getElementById("winner").innerHTML = "Player wins!";
        //player  won
        //console.log("player won");
        //dealer bust
        //console.log("dealer bust");
    }
    else if ((21 - dResult) < (21 - pResult)) {
        // dealer won
        //console.log("dealer won");
        document.getElementById("winner").innerHTML = "Dealer wins!";
    }
    else if ((21 - dResult) == (21 - pResult)) {
        //console.log("dealer wins...I think");
        document.getElementById("winner").innerHTML = "Dealer wins...I think";
    }
    else {
        document.getElementById("winner").innerHTML = "Player wins!";
        // player won
        //console.log("player won");
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