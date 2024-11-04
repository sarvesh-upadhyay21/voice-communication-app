// src/components/VoiceChannel/AudioRecorder.js
import React, { useState, useEffect } from 'react';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    let mediaRecorder;

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = (event) => {
                    setAudioUrl(URL.createObjectURL(event.data));
                };
            });
        }
    }, []);

    const startRecording = () => {
        setIsRecording(true);
        mediaRecorder.start();
    };

    const stopRecording = () => {
        setIsRecording(false);
        mediaRecorder.stop();
    };

    return (
        <div className="audio-recorder">
            <button onClick={isRecording ? stopRecording : startRecording} className="btn btn-primary">
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {audioUrl && <audio controls src={audioUrl} />}
        </div>
    );
};

export default AudioRecorder;
