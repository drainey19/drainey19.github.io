function changeColor(color) {
    document.body.style.background = color;
}

function changeTextColor(color2) {
    docuument.body.style.color = color2;
}

function original() {
    changeColor('lightblue');
    changeTextColor('black');
}

function lightMode() {
    changeColor('white');
    changeTextColor('black');
}

function darkMode() {
    changeColor('#121212');
    changeTextColor('white');
}

// song lyrics

function findLyrics () {
    $.get("https://api.lyrics.ovh/v1/" + document.getElementById("artist").value + "/" + 
    document.getElementById("title").value,
    function(data) {
        console.log(data);
        document.getElementById("output").innerHTML=data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    })
}

/*
function findLyrics() {
    let requestData = document.getElementById("artist").value + "/" + document.getElementById("title").value;
    $.ajax({
        url: "https://api.lyrics.ovh/v1/",
        method: "GET",
        data: requestData,
    })
    .done(function(data) {
        
        document.getElementById("output").innerHTML=data.lyrics.replace(new RegExp("\n", "g"), "<br>");
    });
}
*/