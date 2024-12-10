import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import CricketGround1 from '../assets/vjsiddhu.jpg';
import CricketGround2 from '../assets/harshath.jpg';
import cricground2 from '../assets/cricground2.jpg'
import cricground3 from '../assets/cricground3.jpg'
import cricground4 from '../assets/cricground4.jpg'
import cricground5 from '../assets/cricground5.jpg'
import cricground6 from '../assets/cricground6.jpg'
import cricground7 from '../assets/cricground7.jpg'
import cricground8 from '../assets/cricground8.jpg'
import cricground9 from '../assets/cricground9.jpg'
import cricground10 from '../assets/cricground10.jpg'
import cricground11 from '../assets/cricground11.jpg'


const grounds = [
  { title: 'Cricket Ground 1', image: CricketGround2, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 2', image: cricground2, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 3', image: cricground11, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 4', image: cricground7, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 5', image: cricground3, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 6', image: cricground4, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 7', image: cricground5, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 8', image: cricground6, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 9', image: cricground8, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 10', image: cricground9, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 11', image: cricground10, description: 'Spacious and well-maintained.' },
  { title: 'Cricket Ground 12', image: cricground2, description: 'Spacious and well-maintained.' }
  
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

const CricketGrounds = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Select Your Cricket Ground
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
                onClick={() => navigate('/book-cricket', { state: { ground: ground.title } })}
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

export default CricketGrounds;