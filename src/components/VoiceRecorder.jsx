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
      <button className="btn btn-secondary" onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
}

export default VoiceRecorder;
