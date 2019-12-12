console.clear();

class MIDIAccess {
  constructor(args = {}) {
    this.devices = {};
    this.onDeviceInput = args.onDeviceInput || console.log;
  }
  start() {
    this._requestAccess().then().catch();
  }
  _requestAccess() {
    return new Promise((resolve, reject) => {
      if(navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess()
        .then(resolve)
        .catch(reject);
      } else {
        reject();
      }
      //navigator.requestMIDIAccess().then(access => {const devices = access.inputs.values();for (let device of devices)device.onmidimessage = onMidiMessage;}).catch(console.error);
    });
  }
}


function onMidiMessage(message) {
  let [.., input, value] = message.data;
  console.log({input, value});
}
