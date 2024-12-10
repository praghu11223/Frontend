import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BadmintonImage from '../assets/banu.jpg';

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

const BookBadminton = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [open, setOpen] = useState(false); // State to control the dialog

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpen(true); // Open the dialog after form submission
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Redirect to the home page after closing the dialog
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Book Your Badminton Court
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <BookPaper>
            <ImageContainer style={{ backgroundImage: `url(${BadmintonImage})` }} />
            <Typography variant="h6" gutterBottom>
              BOOK BADMINTON NOW!
            </Typography>
            <Typography paragraph>
              Our badminton courts are available for booking with flexible time slots. Enjoy high-quality nets and flooring for an excellent game experience.
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

      {/* Dialog for confirmation message */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your slot has been confirmed. We have mailed you the details.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
    </Container>
  );
};

export default BookBadminton;
