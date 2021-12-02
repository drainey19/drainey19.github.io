// function to show games
function gameList() {
    $("#displayGameList").show();
    $("#snakeGame").hide();
    $("#blackjack").hide();
    $("#oregonTrail").hide();
    $("#minesweeper").hide();
    $("#pressStart").hide();
    $("#forzaCar").hide();
    $("#cards").hide();
}

// play oregin trail game
function playOregonTrail() {
    $("#displayGameList").hide();
    $("#oregonTrail").show();
}

// play snake game
function playSnakeGame() {
    $("#displayGameList").hide();
    $("#snakeGame").show();
}

//play minesweeper
function playMinesweeper() {
    $("#displayGameList").hide();
    $("#minesweeper").show();
    minesweeper();
}

// minesweeper api
/*
function minesweeper() {
    $("#displayGameList").hide();

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://minesweeper1.p.rapidapi.com/boards/new?r=1&c=1&bombs=1",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "minesweeper1.p.rapidapi.com",
            "x-rapidapi-key": "ab6c19b129mshcacc10d5ea76639p14eb4fjsnb031d725f462"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById("minesweeper").innerHTML = response;
        console.log("I am here");
    });
}
*/

//free to play game list
let requestData;


function forzaCar() {
    $("#displayGameList").hide();

    $("#forzaCar").show();
    $.ajax({
        url: "https://forza-api.tk/", 
        method: "GET",
        data: requestData,
        dataType: "json"
    }).done(function(data) {
        $('#forzaCar').html("<img src=\"" + data["image"] + "\">");
        console.log(data);
        return data; 
    });
}

function card() {
    $("#displayGameList").hide();
    $("#cards").show();
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
/*
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
*/
// call api

// use api to play blackjack