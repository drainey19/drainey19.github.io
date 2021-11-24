// function to snow games
function gameList() {
    $("#displayGameList").show();
    $("#snakeGame").hide();
    $("#blackjack").hide();
    $("#oregonTrail").hide();
    $("#pressStart").hide();
}

// add functions to show the games 
function playOregonTrail() {
    $("#snakeGame").hide();
    $("#blackjack").hide();
    $("#displayGameList").hide();
    $("#oregonTrail").show();
}

// snake game
function playSnakeGame() {
    $("#oregonTrail").hide();
    $("#blackjack").hide();
    $("#displayGameList").hide();
    $("#snakeGame").show();
}

/*
// draw bord
const boardBackground = 'white';
const boardBorder = 'black';
const snakeColor = 'red';
const snakeBorder = 'black';

// create board
const snakeBoard = document.getElementById("#snakeCanvas");
const snakeContext = snakeBoard.getContext("2d");

// create snake starting cordinates
let snake = [
    {x: 250, y: 250}, {x: 240, y: 250}, {x: 230, y:250}, {x: 220, y: 250}, {x:210,y:250},
];

// start game
main();

// Keeps the game going
function main() {
    drawCanvas();
    drawSnake();
}

function drawCanvas() {
    snakeContext.fillStyle = boardBackground;
    snakeContext.styleStroke = boardBorder;
    snakeContext.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
    snakeContext.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
}

// function to draw the snake
function drawSnake() {
    snake.foreach(drawSnakePart);
}

// function for each snake part
function drawSnakePart(snakePart) {
    snakeContext.fillStyle = snakeColor;
    snakeContext.styleStroke = snakeBorder;
    snakeContext.fillRect(snakePart, snakePart, 10, 10);
}

// make snake move automatically
*/

// api
    // playing card api make blackjack
function playBlackjack() {
    $("#snakeGame").hide();
    $("#oregonTrail").hide();
    $("#displayGameList").hide();
    $("#blackjack").show();

    $.ajax({
        url: "http://deckofcardsapi.com/api/",
        method: "GET",
        data: {

        }
    })
}
// call api

// use api to play blackjack