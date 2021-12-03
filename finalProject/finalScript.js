// function to show games
function gameList() {
    $("#displayGameList").show();
    $("#snakeGame").hide();
    $("#blackjack").hide();
    $("#oregonTrail").hide();
    $("#2048").hide();
    $("#pressStart").hide();
    $("#jokes").hide();
    $("#cards").hide();
    animation();
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

//play 2048
function play2048() {
    $("#displayGameList").hide();
    $("#2048").show();
}

function playJoke() {
    $("#displayGameList").hide();
    $("#jokes").show();
}

function getJoke() {
    $("#output").hide();
    $("#output2").hide();
    $.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit",
    function(data) {
        console.log(data);;
        if (data.type == "single") {
            $("#output").show();
            document.getElementById("output").innerHTML = data.joke;
        }
        else if (data.type == "twopart") {
            $("#output").show();
            document.getElementById("output").innerHTML = data.setup;
            $("#output2").show();
            document.getElementById("output2").innerHTML = data.delivery;
        }
        else {
            $("#output").show();
            document.getElementById("output").innerHTML = "please try again";
        }
    });
}

function getJoke2() {
    $("#output").hide();
    $("#output2").hide();
    $.get("https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit",
    function(data) {
        console.log(data);;
        if (data.type == "single") {
            $("#output").show();
            document.getElementById("output").innerHTML = data.joke;
        }
        else if (data.type == "twopart") {
            $("#output").show();
            document.getElementById("output").innerHTML = data.setup;
            $("#output2").show();
            document.getElementById("output2").innerHTML = data.delivery;
        }
        else {
            $("#output").show();
            document.getElementById("output").innerHTML = "please try again";
        }
    });
}

//animate
/*
function animation() {
    anime({
        targets: "#gameBTN",
        translatex: 250,
        rotatez: 360,
        duration: 3000
    });
    anime({
        targets: '#gameBTN',
        translateX: 270,
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      });
}
*/