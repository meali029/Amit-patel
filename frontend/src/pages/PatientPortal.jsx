import React, { useState } from 'react';
import Profile from '../components/ProfilePage';
import Alert from '../components/Alert'; 
import "../styles/pages/patientPortal.css";

const PatientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [profileData, setProfileData] = useState(null);
  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        setIsLoggedIn(true);
        setAlert({ message: "Login successful!", type: "success" });

        // Hide the alert after 3.5 seconds
        setTimeout(() => setAlert(null), 3500);
      } else {
        setAlert({ message: "Invalid credentials!", type: "error" });

        // Hide the alert after 3.5 seconds
        setTimeout(() => setAlert(null), 3500);
      }
    } catch (error) {
      console.error('Login failed', error);
      setAlert({ message: "Login failed! Please try again.", type: "error" });

      // Hide the alert after 3.5 seconds
      setTimeout(() => setAlert(null), 3500);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        setIsLoggedIn(true);
        setAlert({ message: "Signup successful!", type: "success" });

        // Hide the alert after 3.5 seconds
        setTimeout(() => setAlert(null), 3500);
      } else {
        setAlert({ message: "Signup failed! Please try again.", type: "error" });

        // Hide the alert after 3.5 seconds
        setTimeout(() => setAlert(null), 3500);
      }
    } catch (error) {
      console.error('Signup failed', error);
      setAlert({ message: "Signup failed! Please try again.", type: "error" });

      // Hide the alert after 3.5 seconds
      setTimeout(() => setAlert(null), 3500);
    }
  };

  const closeAlert = () => {
    setAlert(null); // Close the alert after user interaction
  };

  if (isLoggedIn && profileData) {
    return <Profile profileData={profileData} />;
  }

  return (
    <div className="portal-container">
      {alert && <Alert message={alert.message} type={alert.type} onClose={closeAlert} />}
      {!isSignup ? (
        <div className="login">
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setIsSignup(true)}>New user? Sign up</p>
        </div>
      ) : (
        <div className="signup">
          <h2>Signup</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button onClick={handleSignup}>Sign Up</button>
          <p onClick={() => setIsSignup(false)}>Already have an account? Login</p>
        </div>
      )}
    </div>
  );
};

export default PatientPortal;
