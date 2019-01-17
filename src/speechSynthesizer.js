let SpeechSynthesizer = window => {
  let synth = window.speechSynthesis;

  return {
    isAvailable() {
      return 'speechSynthesis' in window;
    },
    speak(text) {
      if (this.isAvailable() && text) {
        synth.speak(new SpeechSynthesisUtterance(text));
      }
    }
  };
}

export default SpeechSynthesizer;