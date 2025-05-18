// LoginForm.jsx
import * as React from 'react';
import './LoginForm.css'; // Import CSS specific to this component
import ForgotPassword from '../ForgotPassword/ForgotPassword'; // Import ForgotPassword component
import CustomSocialIcons from '../CustomSocialIcons/CustomSocialIcons'; 



export default function LoginForm() {
  // Initialize state for form fields and errors
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [error, setError] = React.useState('');

  // Handle input changes (email, password, etc.)
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Form validation
    if (!formData.email || !formData.password) {
      setError('Please fill out both fields.');
      return;
    }

    // Dummy submit logic (You can replace this with your actual API call)
    if (formData.email === 'test@test.com' && formData.password === 'password') {
      alert('Form submitted successfully!');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Welcome back!</h1>
      <p className="form-subtitle">Please login to your account.</p>
      
        <div className="form-group">
          <label htmlFor="loginEmail"
          className='w3-hide-small w3-hide-medium'>Email address</label>
          <input
            type="email"
            id="loginEmail"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label 
          htmlFor="loginPassword"
          className='w3-hide-small w3-hide-medium'
          >Password</label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            className="form-input"
            autoComplete="current-password"
            autoFocus
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-col left">
            <label className="form-checkbox">
              <input
                type="checkbox"
                id="loginRememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
          </div>
          <div className="form-col right">
          <ForgotPassword />
          </div>
        </div>

        {error && <div className="form-error">{error}</div>}

        <button type="submit" className="form-button">Login</button>

        <div className="form-footer">
          <p>Not a member? <a href="#!" className="form-link">Register</a></p>
          <p>or sign up with:</p>
        <CustomSocialIcons /> {/* Include the CustomSocialIcons component */} 
        </div>
      </form>
      </div>
 
  );
}
