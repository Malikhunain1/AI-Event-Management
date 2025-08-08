import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password
      });

      setSuccess(res.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <button type="submit" className="auth-button">Register</button>
        <p className="auth-link" onClick={() => navigate('/login')}>
          Already have an account? <span>Login</span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
