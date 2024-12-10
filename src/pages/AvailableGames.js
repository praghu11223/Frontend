import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import CricketImage from '../assets/rcb.avif';
import FootballImage from '../assets/ronaldo.jpg';
import BadmintonImage from '../assets/BadmintonImage.jpg';
import HockeyImage from '../assets/HockeyImage.jpg';
import GolfImage from '../assets/GolfImage.jpg';
import TennisImage from '../assets/TennisImage.jpg';
import TurfBackground from '../assets/avalback.jpg';

const games = [
  { title: 'CRICKET', image: CricketImage, description: 'Professional grade and well-maintained!', link: '/select-cricket-ground' },
  { title: 'FOOTBALL', image: FootballImage, description: 'Top-quality turf with excellent lighting!', link: '/select-football-ground' },
  { title: 'BADMINTON', image: BadmintonImage, description: 'Indoor and outdoor courts!', link: '/select-badminton-ground' },
  { title: 'HOCKEY', image: HockeyImage, description: 'Professional-grade and Well-Maintained!', link: '/select-hockey-ground' },
  { title: 'GOLF', image: GolfImage, description: 'Top-quality turf with excellent lighting!', link: '/select-golf-ground' },
  { title: 'TENNIS', image: TennisImage, description: 'Indoor and outdoor courts!', link: '/select-tennis-ground' }
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

const HoverButton = styled(Button)(({ theme }) => ({
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#d32f2f',
    color: '#fff',
  }
}));

const AvailableGames = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 4,
        backgroundImage: `url(${TurfBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // This makes the background static
      }}
    >
      <Container>
      <Typography 
  variant="h3" 
  align="center" 
  paddingTop="105px" 
  gutterBottom 
  sx={{ fontFamily: 'serif' }}
>
  Available Games
</Typography>

        <Grid container spacing={4} justifyContent="center">
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <HoverPaper
                elevation={3}
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <HoverImage
                  src={game.image}
                  alt={game.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '8px',
                    marginBottom: 16,
                    objectFit: 'cover',
                  }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {game.title}
                </Typography>
                <Typography paragraph sx={{ flexGrow: 1 }} fontStyle={'bold'}>
                  {game.description}
                </Typography>
                <HoverButton variant="contained" color="primary" href={game.link}>
                  Book {game.title}
                </HoverButton>
              </HoverPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AvailableGames;
