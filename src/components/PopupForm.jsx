import React, { useState, useEffect } from 'react';
import './PopupForm.css';
import axios from 'axios';

const PopupForm = ({ onSubmitData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const hiddenPages = ['/adminlogin', '/dashboard','/blogs'];

    // Check if the current page is one of the hidden pages
    const currentPath = window.location.pathname.toLowerCase();

    if (hiddenPages.includes(currentPath)) {
      setIsVisible(false);
      return;
    }

    // Set timer to show popup after 5 seconds
    const showTimer = setTimeout(() => {
      if (!hiddenPages.includes(currentPath)) {
        setIsVisible(true);
      }
    }, 5000); // 5 seconds delay

    // Cleanup timer
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      name.length > 50 ||
      !/^[0-9]{10}$/.test(mobile) ||
      !/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z]{2,}$/.test(email) ||
      course.length > 50 ||
      !isChecked
    ) {
      alert('Please check your input');
      return;
    }

    const formData = {
      name,
      contact: mobile,
      email,
      coursename: course,
      date: new Date().toISOString(),
    };

    console.log('Submitting form data:', formData); // Log form data

    try {
      const response = await axios.post(
        'https://serverbackend-0nvg.onrender.com/api/submit',
        formData
      );
      alert('Registration complete!');
      onSubmitData(formData);

      setName('');
      setMobile('');
      setEmail('');
      setCourse('');
      setIsChecked(false);
      setIsVisible(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <button
          className="close-button-pf-2"
          onClick={() => setIsVisible(false)}
        >
          X
        </button>
        <div className="header-container">
          <img
            src="https://i.imgur.com/zQll9tI.png"
            alt="Logo"
            className="logo-ppf"
          />
          <h2>Register now</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength="50"
          />
          <input
            type="email"
            placeholder="E-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z]+[a-z0-9._]+@[a-z]+\.[a-z]{2,}$"
            title="Email must be lowercase, contain '@', and end with a valid domain (e.g., .com, .org)."
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            pattern="[0-9]{10}"
            title="Mobile number must be exactly 10 digits."
          />
          <input
            type="text"
            placeholder="Which course are you looking for?*"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            maxLength="50"
          />
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              I hereby accept the{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                terms and conditions
              </a>{' '}
              and
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                {' '}
                privacy policy
              </a>{' '}
              of Connecting Dots ERP.
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
