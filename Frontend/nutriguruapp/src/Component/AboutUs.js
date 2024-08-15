import React from 'react';
import '../Css/AboutUs.css';

const About = () => {
    return (
        <div className="about-background">
            <div className="about-container">
                <h3 className="py-3">About Us</h3>
                <p className="about-text">
                    MeetYourDoctor is a platform for booking medical consultations with specialist doctors in your city online. Patients can book an appointment by selecting any of the time slots given by the doctor.
                </p>
                <p className="about-text-muted">Regards, from creators:
                    <ul className="about-ul">
                        <li className="about-li">Jui Chavan</li>
                        <li className="about-li">Vaishnvai Sawant</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default About;
