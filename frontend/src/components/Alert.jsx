import React from "react";
import "../styles/Alert.css";

const Alert = ({ message, type, onClose }) => {
    return (
        <div className={`alert ${type}`} role="alert">
            <span>{message}</span>
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="loading-line"></div>
        </div>
    );
};

export default Alert;
