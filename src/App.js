// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import AvailableGames from './pages/AvailableGames';
import Location from './pages/Location';
import Review from './pages/Review';
import Contact from './pages/Contact';
import BookCricket from './pages/BookCricket';
import BookFootball from './pages/BookFootball';
import BookBadminton from './pages/BookBadminton';
import BookHockey from './pages/BookHockey';
import BookGolf from './pages/BookGolf';
import BookTennis from './pages/BookTennis';
import CricketGrounds from './pages/CricketGrounds'; // Import new component
import FootballGrounds from './pages/FootballGrounds'; // Import new component
import BadmintonGrounds from './pages/BadmintonGrounds'; // Import new component
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/available-games" element={<AvailableGames />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reviews" element={<Review/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-cricket" element={<BookCricket />} />
          <Route path="/book-football" element={<BookFootball />} />
          <Route path="/book-badminton" element={<BookBadminton />} />
          <Route path="/book-hockey" element={<BookHockey />} />
          <Route path="/book-golf" element={<BookGolf />} />
          <Route path="/book-tennis" element={<BookTennis />} />
          <Route path="/select-cricket-ground" element={<CricketGrounds />} /> {/* New route */}
          <Route path="/select-football-ground" element={<FootballGrounds />} /> {/* New route */}
          <Route path="/select-badminton-ground" element={<BadmintonGrounds />} /> {/* New route */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/review" element={<Review />} /> */}
        </Routes>
        <Footer /> {/* Add Footer */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
