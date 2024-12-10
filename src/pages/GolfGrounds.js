import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import FootballTurf1 from '../assets/pixel.jpg';
import gol from '../assets/gol.jpg';
import gol1 from '../assets/gol1.jpeg';
import gol2 from '../assets/gol2.jpeg';
import gol3 from '../assets/gol3.jpeg';
import gol4 from '../assets/gol4.jpeg';
import gol5 from '../assets/gol5.jpeg';
import gol6 from '../assets/gol6.jpg';
import gol7 from '../assets/gol7.webp';
import gol8 from '../assets/gol8.jpeg';
import gol9 from '../assets/gol9.jpeg';
import gol10 from '../assets/gol10.jpeg';
import gol11 from '../assets/gol11.jpeg';

const grounds = [
  { title: 'Golf Turf 1', image: gol, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 2', image: gol1, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 3', image: gol2, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 4', image: gol3, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 5', image: gol4, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 6', image: gol5, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 7', image: gol6, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 8', image: gol7, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 9', image: gol8, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 10', image: gol9, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 11', image: gol10, description: 'Excellent lighting for night games.' },
  { title: 'Golf Turf 12', image: gol11, description: 'Excellent lighting for night games.' }
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

const GolfGrounds = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Select Your Football Turf
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
                onClick={() => navigate('/book-golf', { state: { ground: ground.title } })}
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

export default GolfGrounds;