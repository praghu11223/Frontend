import React from 'react';
import { TextField, Button, Box, Typography, Paper, Avatar } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link here
import SignUpImage from '../assets/grey.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SignUp = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'gray',marginTop:'75px'}}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 2, maxWidth: 350, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <Avatar sx={{ mb: 2, bgcolor: 'secondary.main' }}>
          <PersonAddIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom >Sign Up</Typography>
        <img src={SignUpImage} alt="Sign Up" style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: '8px' }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Confirm Password" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" color="secondary" fullWidth>Sign Up</Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <Button component={Link} to="/sign-in" variant="text">Sign In</Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
