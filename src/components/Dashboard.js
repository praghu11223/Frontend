import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Location from './Location';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Dashboard = () => {
  return (
    <Router>
      <Box>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              TurfKart
            </Typography>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/contact" color="inherit">Contact</Button>
            <Button component={Link} to="/location" color="inherit">Location</Button>
            <Button component={Link} to="/sign-in" color="inherit">Sign In</Button>
            <Button component={Link} to="/sign-up" color="inherit">Sign Up</Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default Dashboard;
