import React, { useState } from 'react';

const AudioPlayer = () => {
    const [audio] = useState(new Audio('./assets/your-audio-file.mp3')); // Update the path accordingly

    // Error handling
    audio.addEventListener('error', (e) => {
        console.error('Error loading audio:', e);
    });

    const startPlaying = () => {
        audio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    };

    const stopPlaying = () => {
        audio.pause();
        audio.currentTime = 0; // Reset playback
    };

    return (
        <div>
            <button onClick={startPlaying}>Play</button>
            <button onClick={stopPlaying}>Stop</button>
        </div>
    );
};

export default AudioPlayer;
