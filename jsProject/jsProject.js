// change page theme
function changeColor(color) {
    document.body.style.background = color;
}

function changeTextColor(color2) {
    document.body.style.color = color2;
}

function changeBackgroundImage(image) {
    document.body.style.backgroundImage = image;
}

// function to turn background to white
function lightMode() {
    changeColor('white');
    changeTextColor('black');
}

// creates a function to turn background to dark grey
function darkMode() {
    changeColor('#121212');
    changeTextColor('white');
}

// return style to the original style
function original() {
    changeBackgroundImage("url(guitar.jpg)");
    changeTextColor('white');
}

// display song lyrics

function findLyrics() {
    $.get("https://api.lyrics.ovh/v1/" + document.getElementById("artist").value + "/" + 
    document.getElementById("title").value,
    function(data) {
        console.log(data);
        document.getElementById("output").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    });
    // display song title
    let songTitle = document.querySelector("h3");
    songTitle.innerHTML = document.getElementById("title").value;

    // display song artist
    let songArtist = document.querySelector("h4");
    songArtist.innerHTML = ("By ") + document.getElementById("artist").value;
}

/*
function findLyrics() {
    let requestData = document.getElementById("artist").value + "/" + document.getElementById("title").value;

    $.ajax({
        url: "https://api.lyrics.ovh/v1/",
        method: "GET",
        data: requestData,
        dataType: "json"
    }).done(function(data) {
        
        document.getElementById("output").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    });
}
*/