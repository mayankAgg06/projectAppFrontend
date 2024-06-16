// LoginPage.jsx

import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar'; // Import Navbar component
import '../styles/LoginPage.css'; // Import CSS file for styling

const LoginPage = () => {
  const { login, authState } = useContext(AuthContext);
  const { error } = authState;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate('/opportunities');
    }
  }, [authState.isAuthenticated, navigate]);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="login-page">
      <Navbar /> {/* Include Navbar component */}
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={onChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={onChange} required />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
