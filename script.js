let audioCtx = new AudioContext(); //open webaudio api
let oscillator = audioCtx.createOscillator(); //grab oscillator from api
let gainNode = audioCtx.createGain(); //grab gain from api

//connect all nodes
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.type = "sine";
oscillator.frequency.value = 440; //default frequency
gainNode.gain.value = 0; //start silent

const startOscillator = function () {
    gainNode.gain.value = 1;
}; //gate open (function that makes gain 1)
const stopOscillator = function () {
    gainNode.gain.value = 0;
}; //gate closed (function that makes gain 0)
oscillator.start(); //start oscillator

document.getElementById("startButton").addEventListener("click",startOscillator); //grab start button from html and make it interactive
document.getElementById("stopButton").addEventListener("click",stopOscillator); //grab stop button from html and make it interactive

const updateFrequency = function (event) {
    oscillator.frequency.value = event.target.value;
} //updates frequency based on user input
const updateGain = function (event) {
    gainNode.gain.value = event.target.value;
} //updates gain based on user input

document.getElementById("freqSlider").addEventListener("input", updateFrequency); //grab frequency slider from html and make it interactive
document.getElementById("gainSlider").addEventListener("input", updateGain); //grab gain slider from html and make it interactive


