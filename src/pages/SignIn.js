import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import SignInImage from '../assets/blue.png';

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    
    try {
      // Sending a POST request to the backend with the email and password
      const response = await axios.get('http://localhost:8080/pragagetAll', formData);
      
      // Assuming the response contains some data to confirm success
      if (response.status === 200) {
        // Redirect to the home page or wherever you'd like
        navigate('/');
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An error occurred during sign in. Please try again.');
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',  // Ensure Box fills the viewport height
        backgroundColor: 'white', 
        overflow: 'hidden'  // Prevent scrolling
      }}
    >
      <Paper 
        elevation={6} 
        sx={{ 
          p: 4, 
          borderRadius: 2, 
          maxWidth: 400, 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'  // Prevent Paper from causing overflow
        }}
      >
        <img src={SignInImage} alt="Sign In" style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: '8px' }} />
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
          <Button variant="contained" color="primary" fullWidth type="submit">Sign In</Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Button component={Link} to="/sign-up" variant="text">Sign Up</Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;
