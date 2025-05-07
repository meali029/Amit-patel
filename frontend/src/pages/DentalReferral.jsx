import React, { useState } from 'react';
import '../styles/pages/DentalReferral.css'; // Assuming you'll create a separate CSS file for styling

const DentalReferral = () => {
  // State to manage form data
  const [referralData, setReferralData] = useState({
    patientName: '',
    patientAge: '',
    patientPhone: '',
    patientEmail: '',
    referringDentistName: '',
    referringDentistPhone: '',
    reasonForReferral: '',
  });

  // State for managing form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReferralData({
      ...referralData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);  // Set submitting state to true to disable the button
    setError(null); // Reset error before trying submission
  
    try {
      const response = await fetch('http://localhost:5000/submit-referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(referralData),
      });
  
      const textResponse = await response.text(); // Get raw text of the response
  
      // Log the response to see what's being returned
      console.log(textResponse);
  
      // Try to parse the response as JSON if it's valid
      const data = JSON.parse(textResponse);
  
      if (!response.ok) throw new Error(data.message || 'Failed to submit referral');
  
      alert('Referral submitted successfully!');
      setReferralData({
        patientName: '',
        patientAge: '',
        patientPhone: '',
        patientEmail: '',
        referringDentistName: '',
        referringDentistPhone: '',
        reasonForReferral: '',
      });
    } catch (err) {
      console.error('Error submitting referral:', err);
      setError(`Error: ${err.message}`);
    } finally {
      setIsSubmitting(false);  // Reset submitting state
    }
  };
  

  return (
    <div className="referral-container">
      <h1>Dental Referral Form</h1>
      <form onSubmit={handleSubmit} className="referral-form">
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={referralData.patientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientAge">Patient Age:</label>
          <input
            type="number"
            id="patientAge"
            name="patientAge"
            value={referralData.patientAge}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientPhone">Patient Phone:</label>
          <input
            type="tel"
            id="patientPhone"
            name="patientPhone"
            value={referralData.patientPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientEmail">Patient Email:</label>
          <input
            type="email"
            id="patientEmail"
            name="patientEmail"
            value={referralData.patientEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="referringDentistName">Referring Dentist Name:</label>
          <input
            type="text"
            id="referringDentistName"
            name="referringDentistName"
            value={referralData.referringDentistName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="referringDentistPhone">Referring Dentist Phone:</label>
          <input
            type="tel"
            id="referringDentistPhone"
            name="referringDentistPhone"
            value={referralData.referringDentistPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reasonForReferral">Reason for Referral:</label>
          <textarea
            id="reasonForReferral"
            name="reasonForReferral"
            value={referralData.reasonForReferral}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Referral'}
        </button>
      </form>
    </div>
  );
};

export default DentalReferral;
