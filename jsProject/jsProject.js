function changeColor(color) {
    document.body.style.background = color;
}

function changeTextColor(color2) {
    docuument.body.style.color = color2;
}

function original() {

}

function lightMode() {
    changeColor('white');
    changeTextColor('black');
}

function darkMode() {
    changeColor('#121212');
    changeTextColor('white');
}