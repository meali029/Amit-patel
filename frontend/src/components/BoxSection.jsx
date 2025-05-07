import React, { useState } from 'react';
import '../styles/boxSection.css';
import { NavLink } from 'react-router-dom';
import Alert from './Alert'; // Import the Alert component

const BoxSection = () => {
    // Define state to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(null); // State for managing alert visibility

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if required fields are filled
        if (!name || !email || !message) {
            setAlert({ type: 'error', message: 'Please fill out all required fields.' });
            setTimeout(() => setAlert(null), 3500); // Hide the alert after 3.5 seconds
            return;
        }

        const formData = {
            name,
            email,
            phone,
            message
        };

        try {
            // Send data to the backend API
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setAlert({ type: 'success', message: 'Your message has been submitted successfully. We will get back to you soon!' });
                // Reset form fields after successful submission
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                setAlert({ type: 'error', message: data.message || 'An error occurred while sending your message.' });
            }
        } catch (err) {
            console.error('Error submitting contact message:', err);
            setAlert({ type: 'error', message: 'An error occurred while submitting your message.' });
        }

        // Hide the alert after 3.5 seconds
        setTimeout(() => setAlert(null), 3500);
    };

    return (
        <section className="box-section">
            {/* Display Alert if there is one */}
            {alert && <Alert type={alert.type} message={alert.message} />}

            {/* Meet the Doctor */}
            <div className="box box1">
                <h3>Meet Dr. Amit Patel</h3>
                <p>
                    Dr. Amit Patel is a leading specialist in periodontics and dental implants, 
                    dedicated to restoring smiles with precision and care. With over 15 years of 
                    experience, he combines advanced techniques with a patient-focused approach to 
                    deliver exceptional results.
                </p>
                <button className="read-more">
                    <NavLink to='/aboutme'>Learn More</NavLink>
                </button>
            </div>

            {/* About Me */}
            <div className="box box2">
                <h3>About Me</h3>
                <img className="box2img" src="/imgs/Rectangle 4.png" alt="Dr. Amit Patel" />
                <p>
                    Passionate about dental health, Dr. Amit Patel specializes in gum health and 
                    implant solutions that transform lives. He enjoys educating patients to make informed decisions for their oral health.
                </p>
                <button className="read-more2">
                    <NavLink to='/aboutme'>Explore My Story</NavLink>
                </button>
            </div>

            {/* Contact Us */}
            <div className="box box3">
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Phone Number" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                    <textarea 
                        placeholder="How can we assist you?" 
                        rows="5" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        required
                    ></textarea>
                    <button className="submit" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default BoxSection;
