import React, { useState } from 'react';
import '../styles/pages/blog.css';
import Alert from '../components/Alert'; 

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [alert, setAlert] = useState(null); // State for alert message

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const blogPosts = [
    {
      title: 'The Importance of Dental Implants',
      date: 'January 5, 2024',
      author: 'Dr. Amit Patel',
      content:
        'Dental implants are an effective solution for replacing missing teeth. They provide a long-term solution that mimics the look and function of natural teeth. In this post, we’ll discuss the benefits of dental implants and how they can restore your smile.',
      excerpt:
        'Dental implants not only improve your appearance, but they also provide functional benefits such as better speech, chewing ability, and jawbone preservation.',
    },
    {
      title: 'Periodontics: A Guide to Healthy Gums',
      date: 'January 10, 2024',
      author: 'Dr. Amit Patel',
      content:
        'Periodontal disease can lead to serious health issues if not treated in time. This post highlights the importance of gum health, the risk factors, and how periodontic treatments can help maintain healthy gums.',
      excerpt:
        'Healthy gums are the foundation of your oral health. Learn about the treatments and practices that will keep your gums in top condition.',
    },
    {
      title: 'What to Expect After Dental Implant Surgery',
      date: 'January 15, 2024',
      author: 'Dr. Amit Patel',
      content:
        'After dental implant surgery, you may experience some discomfort and swelling. This blog post will guide you through the recovery process, what to expect, and tips to ensure a smooth recovery.',
      excerpt:
        'Understanding the recovery process can ease your concerns. This post covers everything from post-surgery care to healing time for dental implants.',
    },
  ];

  const handleSubscription = async (e) => {
    e.preventDefault();

    if (!email) {
      setAlert({ message: 'Please enter your email address.', type: 'error' });
      setTimeout(() => setAlert(null), 3500);  // Hide alert after 3.5 seconds
      return;
    }

    if (isSubscribed) {
      await handleUnsubscribe();
    } else {
      await handleSubscribe();
    }
  };

  const handleSubscribe = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/subscribers", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true); // Set the subscription state to true
        setAlert({ message: 'Thank you for subscribing!', type: 'success' });
      } else {
        setAlert({ message: data.message || 'An error occurred while subscribing.', type: 'error' });
      }
    } catch (err) {
      console.error('Error subscribing:', err);
      setAlert({ message: 'An error occurred while subscribing.', type: 'error' });
    }

    setTimeout(() => setAlert(null), 3500);  // Hide alert after 3.5 seconds
  };

  const handleUnsubscribe = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/unsubscribe", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(false); // Set the subscription state to false
        setAlert({ message: 'You have successfully unsubscribed.', type: 'success' });
      } else {
        setAlert({ message: data.message || 'An error occurred while unsubscribing.', type: 'error' });
      }
    } catch (err) {
      console.error('Error unsubscribing:', err);
      setAlert({ message: 'An error occurred while unsubscribing.', type: 'error' });
    }

    setTimeout(() => setAlert(null), 3500);  // Hide alert after 3.5 seconds
  };

  const closeAlert = () => {
    setAlert(null); // Close the alert after user interaction
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Dental Care Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="blog-header" onClick={() => toggleAccordion(index)}>
              <h3>{post.title}</h3>
              <p className="blog-meta">
                <span>{post.date}</span> | <span>{post.author}</span>
              </p>
            </div>
            {activeIndex === index && (
              <div className="blog-content">
                <p>{post.content}</p>
              </div>
            )}
            <div className="blog-excerpt">
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="subscribe-form">
        <h2>{isSubscribed ? 'Unsubscribe from Our Blog' : 'Subscribe to Our Blog'}</h2>
        <p>{isSubscribed ? 'You are currently subscribed.' : 'Get the latest updates, tips, and news directly in your inbox.'}</p>
        <form onSubmit={handleSubscription}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>
        </form>
      </div>

      {alert && <Alert message={alert.message} type={alert.type} onClose={closeAlert} />}
    </div>
  );
};

export default Blog;
