import React from 'react';
import '../pages/css/About.css'; // Make sure to create a corresponding CSS file

const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>
                Welcome to the Voice Communication App! We are dedicated to providing innovative communication solutions that enhance your connectivity.
            </p>
            <div className="about-features">
                <h3>Our Features:</h3>
                <ul>
                    <li>Real-time voice communication</li>
                    <li>Group calls and conferencing</li>
                    <li>User-friendly interface</li>
                    <li>Secure and reliable</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
