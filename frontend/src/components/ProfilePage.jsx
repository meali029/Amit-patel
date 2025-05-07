import React, { useEffect, useState } from "react";
import Alert from "../components/Alert"; // Import the Alert component
import "../styles/profile.css";

const Profile = () => {
    const [appointments, setAppointments] = useState([]);
    const [consultations, setConsultations] = useState([]);
    const [editData, setEditData] = useState(null);
    const [editType, setEditType] = useState(null); // "appointment" or "consultation"
    const [alert, setAlert] = useState(null); // State to manage the alert

    // Fetch appointments
    const fetchAppointments = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/appointments");
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    // Fetch consultations
    const fetchConsultations = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/consultations");
            const data = await response.json();
            setConsultations(data);
        } catch (error) {
            console.error("Error fetching consultations:", error);
        }
    };

    useEffect(() => {
        fetchAppointments();
        fetchConsultations();
    }, []);

    // Handle delete
    const handleDelete = async (id, type) => {
        try {
            await fetch(`http://localhost:5000/api/${type}/${id}`, { method: "DELETE" });
            if (type === "appointments") fetchAppointments();
            if (type === "consultations") fetchConsultations();

            // Show alert and hide after 3.5 seconds
            setAlert({ message: `${type.slice(0, -1)} deleted successfully!`, type: "success" });
            setTimeout(() => setAlert(null), 3500);
        } catch (error) {
            console.error(`Error deleting ${type}:`, error);
            setAlert({ message: `Failed to delete ${type}. Please try again.`, type: "error" });
            setTimeout(() => setAlert(null), 3500);
        }
    };

    // Handle input changes for editing
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    // Handle update
    const handleUpdate = async () => {
        try {
            await fetch(`http://localhost:5000/api/${editType}/${editData._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editData),
            });
            setEditData(null);
            setEditType(null);
            if (editType === "appointments") fetchAppointments();
            if (editType === "consultations") fetchConsultations();

            // Show alert and hide after 3.5 seconds
            setAlert({ message: `${editType.slice(0, -1)} updated successfully!`, type: "success" });
            setTimeout(() => setAlert(null), 3500);
        } catch (error) {
            console.error(`Error updating ${editType}:`, error);
            setAlert({ message: `Failed to update ${editType}. Please try again.`, type: "error" });
            setTimeout(() => setAlert(null), 3500);
        }
    };

    return (
        <div className="profile-container">
            <h1>Manage Appointments and Consultations</h1>

            {/* Display the alert */}
            {alert && <Alert message={alert.message} type={alert.type} />}

            {/* Appointments Section */}
            <div className="appointments">
                <h2>Appointments</h2>
                {appointments.map((appointment) => (
                    <div key={appointment._id} className="appointment-card">
                        {editData && editData._id === appointment._id && editType === "appointments" ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={editData.name}
                                    onChange={handleEditChange}
                                    placeholder="Name"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleEditChange}
                                    placeholder="Email"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={editData.phone}
                                    onChange={handleEditChange}
                                    placeholder="Phone"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={editData.date}
                                    onChange={handleEditChange}
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={editData.time}
                                    onChange={handleEditChange}
                                />
                                <textarea
                                    name="reason"
                                    value={editData.reason}
                                    onChange={handleEditChange}
                                    placeholder="Reason"
                                />
                                <button className="SaveBtn" onClick={handleUpdate}>Save</button>
                                <button className="CancelBtn" onClick={() => setEditData(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <p><strong>Name:</strong> {appointment.name}</p>
                                <p><strong>Email:</strong> {appointment.email}</p>
                                <p><strong>Phone:</strong> {appointment.phone}</p>
                                <p><strong>Date:</strong> {appointment.date}</p>
                                <p><strong>Time:</strong> {appointment.time}</p>
                                <p><strong>Reason:</strong> {appointment.reason}</p>
                                <button className="EditBtn" onClick={() => { setEditData(appointment); setEditType("appointments"); }}>Edit</button>
                                <button className="DeleteBtn" onClick={() => handleDelete(appointment._id, "appointments")}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Consultations Section */}
            <div className="consultations">
                <h2>Consultations</h2>
                {consultations.map((consultation) => (
                    <div key={consultation._id} className="consultation-card">
                        {editData && editData._id === consultation._id && editType === "consultations" ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={editData.name}
                                    onChange={handleEditChange}
                                    placeholder="Name"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleEditChange}
                                    placeholder="Email"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={editData.phone}
                                    onChange={handleEditChange}
                                    placeholder="Phone"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={editData.date}
                                    onChange={handleEditChange}
                                />
                                <textarea
                                    name="message"
                                    value={editData.message}
                                    onChange={handleEditChange}
                                    placeholder="Message"
                                />
                                <button className="SaveBtn" onClick={handleUpdate}>Save</button>
                                <button className="DeleteBtn" onClick={() => setEditData(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <p><strong>Name:</strong> {consultation.name}</p>
                                <p><strong>Email:</strong> {consultation.email}</p>
                                <p><strong>Phone:</strong> {consultation.phone}</p>
                                <p><strong>Date:</strong> {consultation.date}</p>
                                <p><strong>Message:</strong> {consultation.message}</p>
                                <button className="EditBtn" onClick={() => { setEditData(consultation); setEditType("consultations"); }}>Edit</button>
                                <button className="DeleteBtn" onClick={() => handleDelete(consultation._id, "consultations")}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
