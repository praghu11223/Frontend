import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import FootballTurf1 from '../assets/pixel.jpg';
import FootballTurf2 from '../assets/haha.jpg';

const grounds = [
  { title: 'Football Turf 1', image: FootballTurf1, description: 'Top-quality turf.' },
  { title: 'Football Turf 2', image: FootballTurf2, description: 'Excellent lighting for night games.' }
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

const FootballGrounds = () => {
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
                onClick={() => navigate('/book-football', { state: { ground: ground.title } })}
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

export default FootballGrounds;