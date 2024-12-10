import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Footer from '../components/Footer'; // Import the Footer component

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: 'white',
  boxShadow: theme.shadows[3],
}));

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

const CustomInstagramIcon = styled(InstagramIcon)(({ theme }) => ({
  color: '#E4405F',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#C13584',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const CustomEmailIcon = styled(EmailIcon)(({ theme }) => ({
  color: '#D44638',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#BB001B',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const CustomFacebookIcon = styled(FacebookIcon)(({ theme }) => ({
  color: '#1877F2',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#165FA9',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const CustomTwitterIcon = styled(TwitterIcon)(({ theme }) => ({
  color: '#1DA1F2',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#0D8BDF',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/suripostAll', formData)
      .then(response => {
        alert('Message sent successfully!');
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };

  return (
    <>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom paddingTop='75px'>CONTACT US</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormPaper>
              <Typography variant="h5" gutterBottom>Get in Touch</Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
                  Send Message
                </Button>
              </form>
            </FormPaper>
          </Grid>
          <Grid item xs={12}>
            <FormPaper>
              <Typography variant="h5" gutterBottom>Follow Us</Typography>
              <IconContainer>
                <a href="https://www.instagram.com/_jaya.surya._/" target="_blank" rel="noopener noreferrer">
                  <CustomInstagramIcon />
                </a>
                <a href="mailto:jayasuryams28@gmail.com">
                  <CustomEmailIcon />
                </a>
                <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
                  <CustomFacebookIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <CustomTwitterIcon />
                </a>
              </IconContainer>
            </FormPaper>
          </Grid>
        </Grid>
      </Container>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
};

export default Contact;
