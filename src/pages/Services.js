import React from 'react';
import '../pages/css/Services.css'; // Make sure to create a corresponding CSS file

const Services = () => {
    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <p>We offer a range of services to enhance your communication experience:</p>
            <div className="service-list">
                <div className="service-item">
                    <h3>Voice Calls</h3>
                    <p>High-quality voice calls with minimal latency.</p>
                </div>
                <div className="service-item">
                    <h3>Video Conferencing</h3>
                    <p>Engage in productive meetings with our video conferencing tools.</p>
                </div>
                <div className="service-item">
                    <h3>Collaboration Tools</h3>
                    <p>Share screens and collaborate seamlessly in real-time.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
