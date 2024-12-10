import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import BookHockey from './BookHockey';
import hoc from '../assets/hoc.jpg';
import hoc1 from '../assets/hoc1.jpg';
import hoc2 from '../assets/hoc2.jpg';
import hoc3 from '../assets/hoc3.jpg';
import hoc4 from '../assets/hoc4.jpg';
import hoc5 from '../assets/hoc5.jpg';
import hoc6 from '../assets/hoc6.jpg';
import hoc7 from '../assets/hoc7.jpg';
import hoc8 from '../assets/hoc8.jpg';
import hoc9 from '../assets/hoc9.jpg';
import hoc10 from '../assets/hoc10.jpg';
import hoc11 from '../assets/hoc11.jpg';

const grounds = [
  { title: 'Hocky Turf 1', image: hoc, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 2', image: hoc1, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 3', image: hoc2, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 4', image: hoc3, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 5', image: hoc4, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 6', image: hoc5, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 7', image: hoc6, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 8', image: hoc7, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 9', image: hoc8, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 10', image: hoc9, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 11', image: hoc10, description: 'Excellent lighting for night games.' },
  { title: 'Hocky Turf 12', image: hoc11, description: 'Excellent lighting for night games.' }
];

const HoverPaper = styled(Paper)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  }
}));

const HoverImage = styled('img')({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  }
});

const HockyGrounds = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Select Your Hocky Turf
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {grounds.map((ground, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HoverPaper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <HoverImage src={ground.image} alt={ground.title} style={{ width: '100%', height: '200px', borderRadius: '8px', marginBottom: 16, objectFit: 'cover' }} />
              <Typography variant="h6" gutterBottom>{ground.title}</Typography>
              <Typography paragraph sx={{ flexGrow: 1 }}>{ground.description}</Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/book-hockey', { state: { ground: ground.title } })}
              >
                Book {ground.title}
              </Button>
            </HoverPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HockyGrounds;