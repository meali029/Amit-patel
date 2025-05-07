import React, { useState } from 'react';
import '../styles/pages/faqs.css';
import Alert from '../components/Alert'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questionData, setQuestionData] = useState({
    name: '',
    email: '',
    question: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState(null); // State for alert message

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionData),
      });

      if (response.ok) {
        setSubmitted(true);
        setQuestionData({ name: '', email: '', question: '' });
        setAlert({ message: 'Thank you for submitting your question! We will get back to you soon.', type: 'success' });
      } else {
        const data = await response.json();
        setAlert({ message: data.message || 'Error submitting your question. Please try again.', type: 'error' });
      }

      // Hide the alert after 3.5 seconds
      setTimeout(() => setAlert(null), 3500);
    } catch (error) {
      console.error('Error submitting the question:', error);
      setAlert({ message: 'An error occurred while submitting your question. Please try again later.', type: 'error' });
      setTimeout(() => setAlert(null), 3500);
    }
  };

  const faqData = [
    {
      question: 'What are dental implants?',
      answer:
        'Dental implants are artificial tooth roots placed in the jawbone to support a dental crown or bridge, helping restore the appearance and functionality of your teeth.',
    },
    {
      question: 'How long do dental implants last?',
      answer:
        'With proper care, dental implants can last a lifetime. The crown placed on the implant may need replacement after several years depending on wear and tear.',
    },
    {
      question: 'Are dental implants painful?',
      answer:
        'The procedure is done under local anesthesia, so you won’t feel any pain during the implant placement. Post-surgery discomfort is usually mild and can be managed with over-the-counter pain relief.',
    },
    {
      question: 'How long does the dental implant procedure take?',
      answer:
        'The implant procedure usually takes 1-2 hours depending on the complexity. Full recovery and healing typically take 3-6 months, but the final crown placement will depend on individual circumstances.',
    },
    {
      question: 'Are there any risks associated with dental implants?',
      answer:
        'As with any surgical procedure, dental implants come with some risks, including infection, nerve damage, or implant failure. However, these complications are rare when done by a skilled specialist.',
    },
    {
      question: 'How do I care for my dental implants?',
      answer:
        'After the implant is placed, maintaining good oral hygiene is crucial. Regular brushing, flossing, and dental checkups will ensure the longevity of your implants.',
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.question}</h3>
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit a Question Form */}
      <div className="submit-question">
        <h2>Have a Question? Ask Us!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={questionData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={questionData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="question"
            placeholder="Your Question"
            value={questionData.question}
            onChange={handleInputChange}
            rows="4"
            required
          />
          <button type="submit">Submit Question</button>
        </form>

        {/* Display the alert */}
        {alert && <Alert message={alert.message} type={alert.type} />}
      </div>
    </div>
  );
};

export default FAQs;
