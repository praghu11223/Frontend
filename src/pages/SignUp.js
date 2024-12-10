import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import SignUpImage from '../assets/grey.png';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Send the POST request to the backend
      const response = await axios.post('http://localhost:8080/shashPost', {
        email: formData.email,
        password: formData.password
      });

      // Check the response status or data to confirm success
      if (response.status === 200) {
        // Redirect to the home page or another route upon successful sign-up
        navigate('/');
      } else {
        alert('Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('An error occurred during sign-up. Please try again.');
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',  // Set to 100vh to fill the viewport height exactly
        backgroundColor: 'white', 
        overflow: 'hidden'  // Prevent scrolling
      }}
    >
      <Paper 
        elevation={6} 
        sx={{ 
          p: 4, 
          borderRadius: 2, 
          maxWidth: 350, 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img src={SignUpImage} alt="Sign Up" style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: '8px' }} />
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button variant="contained" color="secondary" fullWidth type="submit">Sign Up</Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <Button component={Link} to="/sign-in" variant="text">Sign In</Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
