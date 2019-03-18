
import SpeechSynthesizer from '../speechSynthesizer'

const synthesizer = SpeechSynthesizer(window);
const say = (text) => {
	if (synthesizer.isAvailable()) {
	  synthesizer.speak(text);
    } else {
      alert('SpeechSynthesizer not available');
    }
  };  

  export default say;