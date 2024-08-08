import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterContainer = styled('footer')({
  backgroundColor: '#333', 
  color: '#fff', 
  padding: '40px 0',
  position: 'relative',
  bottom: 0,
  width: '100%',
});

const FooterLink = styled(Link)({
  color: '#ddd', 
  textDecoration: 'none',
  '&:hover': {
    color: '#ff4081', 
    textDecoration: 'underline',
  },
});

const SocialIcon = styled(Link)({
  color: '#fff', 
  margin: '0 10px',
  '&:hover': {
    color: '#ff4081', 
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>About Us</Typography>
            <FooterLink href="/company" variant="body2">Company</FooterLink><br />
            <FooterLink href="/team" variant="body2">Team</FooterLink><br />
            <FooterLink href="/careers" variant="body2">Careers</FooterLink><br />
            <FooterLink href="/contact" variant="body2">Contact Us</FooterLink>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>Help</Typography>
            <FooterLink href="/faqs" variant="body2">FAQs</FooterLink><br />
            <FooterLink href="/terms-of-service" variant="body2">Terms of Service</FooterLink><br />
            <FooterLink href="/privacy-policy" variant="body2">Privacy Policy</FooterLink><br />
            <FooterLink href="/support" variant="body2">Support</FooterLink>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>Explore</Typography>
            <FooterLink href="/events" variant="body2">Events</FooterLink><br />
            <FooterLink href="/movies" variant="body2">Movies</FooterLink><br />
            <FooterLink href="/sports" variant="body2">Sports</FooterLink><br />
            <FooterLink href="/news" variant="body2">News</FooterLink>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box>
              <SocialIcon href="https://facebook.com/yourprofile" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="https://twitter.com/yourprofile" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="https://instagram.com/yourprofile" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://youtube.com/yourprofile" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} GoTurf.All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
