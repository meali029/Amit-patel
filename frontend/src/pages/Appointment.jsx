
import Alert from "../components/Alert";
import "../styles/pages/appointment.css";
import React, { useState, useEffect } from "react";

const RequestAppointment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
    });
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false); // To track loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading line when submission starts

        try {
            const response = await fetch("http://localhost:5000/api/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setAlert({
                    message: "Your appointment request has been submitted!",
                    type: "success",
                });
                setFormData({ name: "", email: "", phone: "", date: "", time: "", reason: "" });
            } else {
                const errorData = await response.json();
                setAlert({
                    message: `Error: ${errorData.message}`,
                    type: "error",
                });
            }
        } catch (error) {
            console.error("Error submitting appointment:", error);
            setAlert({
                message: "An error occurred. Please try again.",
                type: "error",
            });
        }
    };

    const closeAlert = () => {
        setAlert(null);
        setLoading(false); // Hide loading line when alert is closed
    };

    // Auto-close the alert after 3-4 seconds
    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(null); // Close the alert after 3 seconds
                setLoading(false); // Hide loading line
            }, 3500); // 3000 ms = 3 seconds
            return () => clearTimeout(timer); // Cleanup timeout on component unmount
        }
    }, [alert]);

    return (
        <div className="appointment-container">
            <h1>Request an Appointment</h1>
            {alert && <Alert message={alert.message} type={alert.type} onClose={closeAlert} />}
            {loading && !alert && <div className="loading-line"></div>} {/* Show loading line while waiting */}
            <form className="appointment-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                <textarea name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RequestAppointment;