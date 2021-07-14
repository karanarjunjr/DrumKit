function w() {
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
}
function a() {
    var sound = new Audio("sounds/tom-2.mp3");
    sound.play();
}
function s() {
    var sound = new Audio("sounds/tom-3.mp3");
    sound.play();
}
function d() {
    var sound = new Audio("sounds/tom-4.mp3");
    sound.play();
}
function j() {
    var sound = new Audio("sounds/crash.mp3");
    sound.play();
}
function k() {
    var sound = new Audio("sounds/kick-bass.mp3");
    sound.play();
}
function l() {
    var sound = new Audio("sounds/snare.mp3");
    sound.play();
}

function buttonAnimation(key) {
    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");

    setTimeout(function () {
        currentButton.classList.remove("pressed");
    }, 100);
}

function handleClick() {
    var textName = this.innerHTML;
    switch (textName) {
        case "w": w(); break;
        case "a": a(); break;
        case "s": s(); break;
        case "l": l(); break;
        case "d": d(); break;
        case "j": j(); break;
        case "k": k(); break;
    }

    buttonAnimation(textName);
}

function handleKeyDown(e) {
    switch (e.key) {
        case "w": w(); break;
        case "a": a(); break;
        case "s": s(); break;
        case "l": l(); break;
        case "d": d(); break;
        case "j": j(); break;
        case "k": k(); break;
    }

    buttonAnimation(e.key)
}

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}

// document.addEventListener("keypress", function (e) {
//     handleKeyDown(e.key);
// });
document.addEventListener("keypress", handleKeyDown);


