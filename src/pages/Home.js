// src/pages/Home.js
import React from 'react';
import AudioRoom from '../components/VoiceChannel/AudioRoom';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center">Welcome to Voice Communication App</h1>
            <AudioRoom />
        </Container>
    );
};

export default Home;
