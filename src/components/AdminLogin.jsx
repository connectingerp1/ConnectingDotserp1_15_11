import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const ADMIN_EMAILS = (process.env.VITE_ADMIN_EMAILS || '').split(',');
  const ADMIN_PASSWORDS = (process.env.VITE_ADMIN_PASSWORDS || '').split(',');
  
  console.log('Raw VITE_ADMIN_EMAILS:', process.env.VITE_ADMIN_EMAILS);
  console.log('Raw VITE_ADMIN_PASSWORDS:', process.env.VITE_ADMIN_PASSWORDS);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const userIndex = ADMIN_EMAILS.indexOf(email);
    console.log('Entered Email:', email);
    console.log('User Index:', userIndex); // Logs -1 if email not found

    if (userIndex !== -1) {
      console.log('Email found, checking password...');
      console.log('Expected Password:', ADMIN_PASSWORDS[userIndex]);
      console.log('Entered Password:', password);

      if (ADMIN_PASSWORDS[userIndex] === password) {
        onLogin();
        navigate('/Dashboard');
      } else {
        alert('Incorrect password!');
      }
    } else {
      alert('Incorrect email or password!');
    }
  };

  return (
    <section className="admin-login-section">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h2>Admin Log-In</h2>
          <div className="inputbox">
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="email"
              name="Email"
              id="EmailId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="EmailId">Email Address</label>
          </div>

          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              name="password"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="loginPassword">Password</label>
          </div>
          <button type="submit" className="adminbtn">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
