// src/components/VoiceChannel/AudioRoom.js
import React from 'react';
import AudioPlayer from './AudioPlayer';
import AudioRecorder from './AudioRecorder';
import './VoiceChannel.css';
import { Container, Button } from 'react-bootstrap';

const AudioRoom = () => {
    return (
        <Container className="audio-room">
            <h2 className="text-center my-4">Voice Channel Room</h2>
            <AudioRecorder />
            <AudioPlayer />
            <Button variant="primary" className="mt-3">Join Room</Button>
        </Container>
    );
};

export default AudioRoom;
