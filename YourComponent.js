import React from 'react';
import SpeechRecognition from 'react-speech-recognition';

function YourComponent(props) {
  const { transcript, startListening, stopListening } = props;

  function handleStartListening() {
    startListening();
    console.log('Speech recognition started');
  }

  function handleStopListening() {
    stopListening();
    console.log('Speech recognition stopped');
  }

  return (
    <div>
      <button onClick={handleStartListening}>Start Listening</button>
      <button onClick={handleStopListening}>Stop Listening</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
}

const options = {
  // Additional options for the SpeechRecognition HOC
};

export default SpeechRecognition(options)(YourComponent);
