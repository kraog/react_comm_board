
import SpeechSynthesizer from '../speechSynthesizer'

const synthesizer = SpeechSynthesizer(window);
const saySomething = (text) => {
	if (synthesizer.isAvailable()) {
	  synthesizer.speak(text);
    } else {
      alert('SpeechSynthesizer not available');
    }
  };  

  export default saySomething;