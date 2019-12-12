var seq;
var vol = new Tone.Volume().toMaster();
var mic = new Tone.UserMedia().connect(vol);
var p1 = new Tone.Players({
  "kick": 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3',
  "snare": 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/snare.mp3',
  "hh": 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/hh.mp3'
}, function() {
 console.log('loaded');
}).connect(vol);
var ampEnv = new Tone.AmplitudeEnvelope( { "attack": 0.1,"decay": 0.2,"sustain": 1.0,"release": 0.8 } ).connect(vol);
//create an oscillator and connect it
var osc = new Tone.Oscillator().connect(mic);
Tone.context.latencyHint = "balanced";

function go() {
   seq = new Tone.Sequence(function (time, idx) {
    eval(editor.getValue());
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15], "8n");
  seq.start();
  //Tone.Transport.start('+0.2');
}
function stop() {
  seq.stop();
  mic.close();
  osc.stop();
}
function micOn() {
  mic.open();
}
function micOff() {
  mic.close();
}

