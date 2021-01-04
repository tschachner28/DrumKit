function playAudio(sound){
    var audio = new Audio(sound);
    if (audio != undefined) {
        audio.play();
    }
}

function wDrumEventListener() {
    playAudio("sounds/tom-1.mp3");
}

function aDrumEventListener() {
    playAudio("sounds/tom-2.mp3");
}

function sDrumEventListener() {
    playAudio("sounds/tom-3.mp3");
}

function dDrumEventListener() {
    playAudio("sounds/tom-4.mp3");
}

function jDrumEventListener() {
    playAudio("sounds/snare.mp3");
}

function kDrumEventListener() {
    playAudio("sounds/crash.mp3");
}

function lDrumEventListener() {
    playAudio("sounds/kick-bass.mp3");
}

document.getElementById("wdrum").addEventListener("mousedown", wDrumEventListener);
document.getElementById("adrum").addEventListener("mousedown", aDrumEventListener);
document.getElementById("sdrum").addEventListener("mousedown", sDrumEventListener);
document.getElementById("ddrum").addEventListener("mousedown", dDrumEventListener);
document.getElementById("jdrum").addEventListener("mousedown", jDrumEventListener);
document.getElementById("kdrum").addEventListener("mousedown", kDrumEventListener);
document.getElementById("ldrum").addEventListener("mousedown", lDrumEventListener);
