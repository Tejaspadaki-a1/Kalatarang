import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import Header from '../../components/Header/Header';

const ContactPage = () => {
  // Step 1: Manage form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Step 2: Handle input changes
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://kalatarang-backend.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setStatusMessage(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className={styles.contactPage}>
      <Header />
      <main>
        {/* --- Section 1: Get in Touch --- */}
        <AnimatedSection className={styles.getIntouchSection}>
          <h1 className={styles.pageTitle}>Get in Touch</h1>
          <p className={styles.pageSubtitle}>
            Feel free to reach out for inquiries, bookings, or collaborations.
            <br />
            I look forward to connecting with fellow art enthusiasts and sharing creativity.
          </p>
          <div className={styles.socialIcons}>
            <a href="mailto:mansikolhapurkar181@gmail.com" className={styles.iconLink}>
              <img src="/images/Email.png" alt="Email" />
            </a>
            <a href="tel:+919545518881" className={styles.iconLink}>
              <img src="/images/Phone.png" alt="Phone" />
            </a>
            <a href="https://maps.app.goo.gl/tALr11X1yGMnxCTY6" className={styles.iconLink}>
            
              <img src="/images/Address.png" alt="Location" />
            </a>
            <a href="https://www.instagram.com/kalakritibymansi/" className={styles.iconLink}>
              <img src="/images/Instagram.png" alt="Instagram" />
            </a>
          </div>
        </AnimatedSection>

        {/* --- Section 2: Contact Form --- */}
<main>
        {/* Section 2: Contact Form */}
        <AnimatedSection className={styles.formSection}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Contact us</h2>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
          {/* Show status message */}
          {statusMessage && <p>{statusMessage}</p>}
        </AnimatedSection>
      </main>

        {/* --- Section 3: Drop Us a Line --- */}
        <AnimatedSection className={styles.dropSection}>
          <h2 className={styles.dropTitle}>Drop Us a Line</h2>
          <div className={styles.feedbackText}>
            <h3>We Value Your Feedback</h3>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default ContactPage;