function changeColor(color) {
    document.body.style.background = color;
}

function changeTextColor(color2) {
    document.body.style.color = color2;
}

// function to turn background to white
function lightMode() {
    changeColor('white');
    changeTextColor('black')
}

// creates a function to turn background to dark grey
function darkMode() {
    changeColor('#121212');
    changeTextColor('white');
}