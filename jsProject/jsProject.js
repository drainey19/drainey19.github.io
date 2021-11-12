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

function changeAnimationImage(image2) {
    document.h1.style.image = image2;
}

// function to turn background to white
function lightMode() {
    changeColor('white');
    changeTextColor('black');
    document.getElementsByID('musicNote').src="musicNoteBlack.png";
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
$("#artist").keypress(findLyrics);
function findLyrics() {
    $("#output").hide();
    $("#songTitle").hide();
    $("#songArtist").hide();
    $("#error").html("");
    $("#searching").show();

    $.get("https://api.lyrics.ovh/v1/" + document.getElementById("artist").value + "/" + 
    document.getElementById("title").value,
    function(data) {
        console.log(data);
        $("#searching").hide();
        $("#songTitle").show();
        $("#songArtist").show();
        $("#output").show();
        document.getElementById("output").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    });
    // display song title
    let songTitle = document.querySelector("h2");
    songTitle.innerHTML = document.getElementById("title").value;

    // display song artist
    let songArtist = document.querySelector("h3");
    songArtist.innerHTML = ("By ") + document.getElementById("artist").value;
}

/*
function findLyrics() {
    // let requestData = document.getElementById("artist").val() + "/" + document.getElementById("title").val();
    let requestData = $("#artist").val() + "/" + $("#title").val();

    $.ajax({
        url: "https://api.lyrics.ovh/v1/",
        method: "GET",
        data: requestData
    }).done(function(data) {
        
        document.getElementById("output").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    });
}
*/