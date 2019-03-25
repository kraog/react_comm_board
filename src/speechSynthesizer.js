let SpeechSynthesizer = window => {
  let synth = window.speechSynthesis;

  return {
    isAvailable() {
      return 'speechSynthesis' in window;
    },
    speak(text) {
      if (this.isAvailable() && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-Es';
        synth.speak(utterance);
      }
    }
  };
}

export default SpeechSynthesizer;