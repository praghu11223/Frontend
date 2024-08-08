import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: 'white',
  boxShadow: theme.shadows[3],
}));

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

// const CustomWhatsAppIcon = styled(WhatsAppIcon)(({ theme }) => ({
//   color: '#25D366',
//   fontSize: '2.5rem',
//   '&:hover': {
//     color: '#128C7E',
//     transform: 'scale(1.2)',
//     transition: 'transform 0.2s',
//   },
// }));

const CustomInstagramIcon = styled(InstagramIcon)(({ theme }) => ({
  color: '#E4405F',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#C13584',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const CustomEmailIcon = styled(EmailIcon)(({ theme }) => ({
  color: '#D44638',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#BB001B',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const CustomFacebookIcon = styled(FacebookIcon)(({ theme }) => ({
  color: '#1877F2',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#165FA9',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const CustomTwitterIcon = styled(TwitterIcon)(({ theme }) => ({
  color: '#1DA1F2',
  fontSize: '2.5rem',
  '&:hover': {
    color: '#0D8BDF',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s',
  },
}));

const Contact = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom paddingTop='75px'>CONTACT US</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormPaper>
            <Typography variant="h5" gutterBottom>Get in Touch</Typography>
            <form noValidate autoComplete="off">
              <TextField label="Name" variant="outlined" fullWidth margin="normal" />
              <TextField label="Email" variant="outlined" fullWidth margin="normal" />
              <TextField label="Phone" variant="outlined" fullWidth margin="normal" />
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth margin="normal" />
              <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">Send Message</Button>
            </form>
          </FormPaper>
        </Grid>
        <Grid item xs={12}>
          <FormPaper>
            <Typography variant="h5" gutterBottom>Follow Us</Typography>
            <IconContainer>
              {/* <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
                <CustomWhatsAppIcon />
              </a> */}
              <a href="https://www.instagram.com/_jaya.surya._/" target="_blank" rel="noopener noreferrer">
                <CustomInstagramIcon />
              </a>
              <a href="mailto:jayasuryams28@gmail.com">
                <CustomEmailIcon />
              </a>
              <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
                <CustomFacebookIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <CustomTwitterIcon />
              </a>
            </IconContainer>
          </FormPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
