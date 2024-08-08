import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const StyledMapContainer = styled(MapContainer)({
  height: '100%',
  width: '100%',
  borderRadius: '8px',
  overflow: 'hidden',
});

const Location = () => {
  const coimbatoreCoordinates = [11.0168, 76.9558];

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom paddingTop='75px' align="center">FIND US TO KNOW MORE!</Typography>
      <StyledPaper elevation={3}>
        <Typography variant="h6" gutterBottom>OUR PLACE</Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <StyledMapContainer center={coimbatoreCoordinates} zoom={13}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
          </StyledMapContainer>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Location;
