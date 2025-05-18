import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './AuthForm.css';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import CustomSocialIcons from '../CustomSocialIcons/CustomSocialIcons';

export default function AuthForm() {
  const [isSignup, setIsSignup] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const [error, setError] = React.useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setError('');
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
    });
  };
/*
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || (isSignup && !confirmPassword)) {
      setError('Please fill out all required fields.');
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Dummy authentication logic
    if (email === 'test@test.com' && password === 'password') {
      alert(`${isSignup ? 'Signup' : 'Login'} successful!`);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };
*/
  return (
    
  <div className="auth-wrapper">
    <div className="form-container">
      <form className="form">
        <h1 className="form-title">
          {isSignup ? 'Welcome!' : 'Welcome back!'}
        </h1>
        <p className="form-subtitle">
          {isSignup ? 'Set up your account to get started.' : 'Please login to your account.'}
        </p>

        {isSignup && (
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="firstname" className="hide-on-small">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="form-input"
                  placeholder="Jane"
                  autoComplete="given-name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="lastname" className="hide-on-small">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-input"
                  placeholder="Doe"
                  autoComplete="family-name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email" className="hide-on-small">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="hide-on-small">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {isSignup && (
          <div className="form-group">
            <label htmlFor="confirmPassword" className="hide-on-small">Re-enter password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              placeholder="Confirm password"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-row">
          <div className="form-col left">
            <label className="form-checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
          </div>
          {!isSignup && (
            <div className="form-col right">
              <ForgotPassword />
            </div>
          )}
        </div>

        {error && <div className="form-error">{error}</div>}
<Link to='/user'>
     {/**
       <button type="submit" className="form-button">
          {isSignup ? 'Register Now' : 'Login'}
        </button>
      */}   <button type="submit" className="form-button mt-3">
      Register Now
        </button>
        </Link>
        <div className="form-footer">
          <p>
            {isSignup
              ? 'Already have an account?'
              : 'Not a member?'}{' '}
            <a href="#!" className="form-link" onClick={toggleMode}>
              {isSignup ? 'Login' : 'Register'}
            </a>
          </p>
          <p>or sign up with:</p>
          <CustomSocialIcons />
        </div>
      </form>
    </div>
    </div>
  );
}
