import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token } = res.data;
      localStorage.setItem('token', token);

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google-login', {
        token: credentialResponse.credential,
      });

      const { token } = res.data;
      localStorage.setItem('token', token);

      navigate('/dashboard');
    } catch (err) {
      console.error('Google Login Error:', err);
    }
  };

  const handleGoogleError = () => {
    console.error('Google Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId="538100585264-4ila8d9vmr07pg1d15t2ctj0o5r0gc6c.apps.googleusercontent.com">
      <div className="auth-container">
        <h2 className="auth-title">Login</h2>

        <form onSubmit={handleLogin} className="auth-form">
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

          <button type="submit" className="auth-button">Login</button>
        </form>

        <div className="google-login">
          <p style={{ margin: '10px 0' }}>or</p>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </div>

        <p className="auth-link" onClick={() => navigate('/register')}>
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
