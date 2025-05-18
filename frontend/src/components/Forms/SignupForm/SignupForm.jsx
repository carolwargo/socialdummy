// SignupForm.jsx
import * as React from 'react';
import './SignupForm.css';
import CustomSocialIcons from '../CustomSocialIcons/CustomSocialIcons';

export default function SignupForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = formData;

    if (!email || !password) {
      setError('Please fill out both email and password fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Dummy logic – replace with API call
    if (email === 'test@test.com' && password === 'password') {
      alert('Form submitted successfully!');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Welcome!</h1>
        <p className="form-subtitle">Set up your account to get started.</p>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="signupFirstname" className="hide-on-small">First Name</label>
              <input
                type="text"
                id="signupFirstname"
                name="firstname"
                className="form-input"
                placeholder="Jane"
                autoComplete="given-name"
                autoFocus
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label htmlFor="signupLastname" className="hide-on-small">Last Name</label>
              <input
                type="text"
                id="signupLastname"
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

        <div className="form-group">
          <label htmlFor="signupEmail" className="hide-on-small">Email address</label>
          <input
            type="email"
            id="signupEmail"
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
          <label htmlFor="signupPassword" className="hide-on-small">Password</label>
          <input
            type="password"
            id="signupPassword"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signupConfirmPassword" className="hide-on-small">Re-enter password</label>
          <input
            type="password"
            id="signupConfirmPassword"
            name="confirmPassword"
            className="form-input"
            placeholder="Confirm password"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-col left">
            <label className="form-checkbox">
              <input
                type="checkbox"
                id="signupRememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
          </div>
        </div>

        {error && <div className="form-error">{error}</div>}

        <button type="submit" className="form-button">Register Now</button>

        <div className="form-footer">
          <p>Already have an account? <a href="#!" className="form-link">Login</a></p>
          <p>or sign up with:</p>
          <CustomSocialIcons />
        </div>
      </form>
    </div>
    </div>
  );
}
