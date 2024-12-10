import React, { useState } from 'react';
import { Box, Typography, Container, Button, TextField, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import videoBackground from '../assets/field.mp4';

const VideoBackground = styled('video')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
  filter: 'brightness(0.7)',
});

const SearchBar = styled(TextField)({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '800px',
  '& .MuiInputBase-input': {
    padding: '15px 20px',
    fontSize: '1rem',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const searchRoutes = {
      cricket: '/select-cricket-ground',
      football: '/select-football-ground',
      badminton: '/select-badminton-ground',
      hockey: '/select-hockey-ground',
      golf: '/select-golf-ground',
      tennis: '/select-tennis-ground',
    };

    const matchedRoute = Object.keys(searchRoutes).find(game =>
      lowerCaseSearchTerm.includes(game)
    );

    if (matchedRoute) {
      navigate(searchRoutes[matchedRoute]);
    } else {
      alert('No matching game found.');
    }
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'black', overflow: 'hidden' }}>
      <VideoBackground autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </VideoBackground>

      <Container sx={{ position: 'absolute', top: '15%', zIndex: 2 }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <SearchBar
            variant="outlined"
            placeholder="Search for sports facilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSearch} sx={{ mt: 2 }}>
            Search
          </Button>
        </Box>
      </Container>

      <Container sx={{ zIndex: 1, mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '3rem', mb: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          IT'S OUR VERDANT!
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, fontSize: '1.2rem', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
          YOUR PREMIER DESTINATION FOR BOOKING
          SPORTS FACILITIES EFFORTLESSLY!
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>
          <strong>You Know why GreenWorld?</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 500, fontSize: '0.9rem', lineHeight: 1.4, mx: 'auto', color: '#ecf0f1' }}>
          - Discover a wide range of sports facilities including Cricket, Football, and Badminton.
        </Typography>
        <Button variant="outlined" color="primary" component={Link} to="/contact" sx={{ px: 3, py: 1, fontSize: '1rem', fontWeight: 'bold' }}>
          Reach Out
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
