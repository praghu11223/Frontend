import React from 'react';
import { TextField, Button, Box, Typography, Paper, Avatar } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link here
import SignInImage from '../assets/blue.png';
import LockIcon from '@mui/icons-material/Lock';

const SignIn = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor:"gray",marginTop:'75px' }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 2, maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <Avatar sx={{ mb: 2, bgcolor: 'primary.main' }}>
          <LockIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom >Sign In</Typography>
        <img src={SignInImage} alt="Sign In" style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: '8px' }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" color="primary" fullWidth>Sign In</Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Button component={Link} to="/sign-up" variant="text">Sign Up</Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;
