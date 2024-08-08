import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import NewLogo from '../assets/black_processed.png'; 

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  '&:hover': {
    color: 'yellow',
  },
});

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'blue', 
        boxShadow: 'none', 
        height: '80px',
        zIndex: 2
      }}
    >
      <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={NewLogo} alt="Your Brand Logo" style={{ height: '60px', marginRight: '10px' }} />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontSize: '24px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
          <StyledLink to="/">GREENWORLD!</StyledLink>
        </Typography>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/">Home</StyledLink>
        </Button>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/available-games">Available Games</StyledLink>
        </Button>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/location">Location</StyledLink>
        </Button>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/reviews">Reviews</StyledLink>
        </Button>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/contact">Contact</StyledLink>
        </Button>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/sign-in">Sign In</StyledLink>
        </Button>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/sign-up">Sign Up</StyledLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
