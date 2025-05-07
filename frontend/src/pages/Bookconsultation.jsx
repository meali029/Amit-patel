import React, { useState } from "react";
import "../styles/pages/bookConsultation.css";
import Alert from "../components/Alert";  // Import the Alert component

const BookConsultation = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
    });
    const [alert, setAlert] = useState({ message: "", type: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any required field is missing
        if (!formData.name || !formData.email || !formData.phone || !formData.date) {
            setAlert({ message: "Please fill in all the required fields.", type: "error" });
            setTimeout(() => setAlert({ message: "", type: "" }), 4000);  // Hide alert after 4 seconds
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/consultations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setAlert({ message: "Your consultation request has been submitted successfully!", type: "success" });
                setFormData({ name: "", email: "", phone: "", date: "", message: "" });
            } else {
                const errorData = await response.json();
                setAlert({ message: `Failed to submit the consultation request. Error: ${errorData.message}`, type: "error" });
            }
        } catch (error) {
            console.error("Error submitting consultation:", error);
            setAlert({ message: "An error occurred while submitting your request. Please try again later.", type: "error" });
        }

        setTimeout(() => setAlert({ message: "", type: "" }), 3500);  // Hide alert after 4 seconds
    };

    const handleAlertClose = () => {
        setAlert({ message: "", type: "" });
    };

    return (
        <div className="consultation-container">
            <h1>Book a Consultation</h1>
            <p>Fill out the form below to schedule your consultation with us.</p>
            {alert.message && (
                <Alert message={alert.message} type={alert.type} onClose={handleAlertClose} />
            )}
            <form className="consultation-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additional Information (Optional)"
                    rows="4"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookConsultation;
