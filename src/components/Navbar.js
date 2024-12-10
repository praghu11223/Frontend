import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import NewLogo from '../assets/black_processed.png'; 

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'serif',  // Change to serif
  fontWeight: 'bold',
  '&:hover': {
    color: 'yellow',
  },
});

const NavbarButton = styled(Button)({
  fontSize: '16px',
  margin: '0 10px',
  color: 'inherit',
});

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '', 
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
        <NavbarButton>
          <StyledLink to="/">Home</StyledLink>
        </NavbarButton>
        <NavbarButton>
          <StyledLink to="/available-games">Available Games</StyledLink>
        </NavbarButton>
        <NavbarButton>
          <StyledLink to="/location">Location</StyledLink>
        </NavbarButton>
        <NavbarButton>
          <StyledLink to="/reviews">Reviews</StyledLink>
        </NavbarButton>
        <NavbarButton>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavbarButton>
        <NavbarButton>
          <StyledLink to="/sign-in">Sign In</StyledLink>
        </NavbarButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
