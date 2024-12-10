import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import CricketImage from '../assets/harshath.jpg';
import axios from 'axios';

const BookPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ImageContainer = styled('div')({
  width: '100%',
  height: '250px',
  marginBottom: '20px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',
});

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontFamily: 'serif',
  textAlign: 'center',
}));

const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  fontFamily: 'serif',
  textAlign: 'center',
}));

const BookCricket = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '',
    participants: '',
    requests: ''
  });

  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log(formData);
    try {
      const fetch = async () => {
      const response = await axios.post("http://localhost:8080/pragapostAll",formData);
      console.log("posted successfully");
    }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/'); // Redirect to homepage
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Book Your Cricket Field
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <BookPaper>
            <ImageContainer style={{ backgroundImage: `url(${CricketImage})` }} />
            <Typography variant="h5" gutterBottom>
              BOOK CRICKET NOW!
            </Typography>
            <Typography paragraph>
              Our cricket fields are available for booking with flexible time slots. Enjoy well-maintained pitches and facilities.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <TextField
                label="Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                label="Time"
                variant="outlined"
                fullWidth
                margin="normal"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                label="Duration (in hours)"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                Book Now
              </Button>
            </form>
          </BookPaper>
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <CustomDialogTitle>
          Congratulations!
        </CustomDialogTitle>
        <CustomDialogContent>
          Your slot has been confirmed! We have mailed you the details.
        </CustomDialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BookCricket;
