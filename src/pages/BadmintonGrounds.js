import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import BadmintonCourt1 from '../assets/banu.jpg';
import BadmintonCourt2 from '../assets/baaanu.jpg';

const grounds = [
  { title: 'Badminton Court 1', image: BadmintonCourt1, description: 'Indoor court with high-quality nets.' },
  { title: 'Badminton Court 2', image: BadmintonCourt2, description: 'Outdoor court with excellent flooring.' }
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

const BadmintonGrounds = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Select Your Badminton Court
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
                onClick={() => navigate('/book-badminton', { state: { ground: ground.title } })}
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

export default BadmintonGrounds;