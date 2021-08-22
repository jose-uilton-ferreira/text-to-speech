const voiceInput = document.querySelector('#voice');

const volumeInput = document.querySelector('#volume');
const volumeDisplay = document.querySelector('#volume-display');

const rateInput = document.querySelector('#rate');
const rateDisplay = document.querySelector('#rate-display');

const pitchInput = document.querySelector('#pitch');
const pitchDisplay = document.querySelector('#pitch-display');

const textSpeechInput = document.querySelector('#text-speech');
const startBtn = document.querySelector('#start');

let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {

  voices = window.speechSynthesis.getVoices();

  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceInput.options[i] = new Option(voice.name, i)));

};

voiceInput.addEventListener('change', () => {

  speech.voice = voices[voiceInput.value];

});

volumeInput.addEventListener('input', () => {

  let volume = (volumeInput.value / 10).toFixed(1);
  volumeDisplay.innerText = volume;
  speech.volume = volume;

});

rateInput.addEventListener('input', () => {

  let rate = (rateInput.value / 10).toFixed(1);
  rateDisplay.innerText = rate;
  speech.rate = rate;

});

pitchInput.addEventListener('input', () => {

  let pitch = (pitchInput.value / 10).toFixed(1);
  pitchDisplay.innerText = pitch;
  speech.pitch = pitch;

});

startBtn.addEventListener('click', () => {
  let textSpeech = textSpeechInput.value;
  speech.text = textSpeech;
  window.speechSynthesis.speak(speech);
});