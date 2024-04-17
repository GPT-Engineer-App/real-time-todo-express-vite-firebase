import React, { useState } from "react";

function VoiceRecorder({ onRecordComplete }) {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    console.log("Start recording");
    setIsRecording(true);
  };

  const stopRecording = () => {
    console.log("Stop recording");
    setIsRecording(false);
    onRecordComplete("https://example.com/audio.mp3");
  };

  return (
    <div>
      <>
        <button className="btn btn-secondary" onClick={isRecording ? stopRecording : startRecording}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
        {!isRecording && (
          <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls className="mt-2">
            Your browser does not support the audio element.
          </audio>
        )}
      </>
    </div>
  );
}

export default VoiceRecorder;
