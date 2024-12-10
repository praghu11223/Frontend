import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Container, Grid, Paper, Avatar, Rating, TextField, Button, Divider } from '@mui/material';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [newComments, setNewComments] = useState({});
  const [userRating, setUserRating] = useState(null);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewImage, setReviewImage] = useState('');

  useEffect(() => {
    // Fetch reviews from the backend
    axios.get('http://localhost:8080/tharungetAll')
      .then(response => {
        setReviewsData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  const handleCommentChange = (reviewId, event) => {
    setNewComments({
      ...newComments,
      [reviewId]: event.target.value
    });
  };

  const handleCommentSubmit = (reviewId) => {
    const updatedReviews = reviewsData.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          comments: [...(review.comments || []), newComments[reviewId] || '']
        };
      }
      return review;
    });
    setReviewsData(updatedReviews);
    setNewComments({ ...newComments, [reviewId]: '' });
  };

  const handleRatingChange = (event, newValue) => {
    setUserRating(newValue);
  };

  const handleRatingSubmit = (reviewId) => {
    const updatedReviews = reviewsData.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          userRatings: [...(review.userRatings || []), userRating]
        };
      }
      return review;
    });
    setReviewsData(updatedReviews);
    setUserRating(null);
    setSelectedReviewId(null);
  };

  const handleReviewSubmit = () => {
    const newReview = {
      name: 'New User', // Replace with actual user name if available
      rating: userRating,
      text: reviewText,
      image: reviewImage,
      comments: [],
      userRatings: []
    };

    axios.post('http://localhost:8080/tharunpostAll', newReview)  // Use the Axios instance
      .then(response => {
        setReviewsData([...reviewsData, newReview]);
        setReviewTitle('');
        setReviewText('');
        setReviewImage('');
        setUserRating(null);
        alert(response.data);
      })
      .catch(error => {
        console.error('There was an error posting the review!', error);
      });
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'white', py: 4 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom padding="5%">Customers Review</Typography>

        {/* New Review Form */}
        <Box sx={{ mb: 4, p: 2, backgroundColor: '#fff', borderRadius: 5, boxShadow: 10 }}>
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'serif' }}>SUBMIT YOUR REVIEW</Typography>
          <TextField
            fullWidth
            label="Review Title"
            variant="outlined"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Rating
            value={userRating}
            onChange={handleRatingChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Review Text"
            variant="outlined"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Upload your image"
            variant="outlined"
            value={reviewImage}
            onChange={(e) => setReviewImage(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleReviewSubmit}
            disabled={!reviewText.trim() || userRating === null}
          >
            Submit Review
          </Button>
        </Box>

        {/* Display Reviews */}
        <Grid container spacing={4} justifyContent="center">
        {reviewsData.map((review) => (
  <Grid item xs={12} sm={6} md={4} key={review.id}>
    <Paper
      elevation={3}
      className="reviewCard"
      sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
    >
      <Avatar src={review.image || ''} alt={review.name || 'No Name'} sx={{ width: 150, height: 110, mb: 2 }} />
      <Typography variant="h6" gutterBottom>{review.name || 'No Name'}</Typography>
      <Rating value={review.rating || 0} readOnly sx={{ mb: 2 }} />
      <Typography paragraph sx={{ fontFamily: 'serif' }}>{review.text || 'No review text'}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>Comments:</Typography>
      {Array.isArray(review.comments) && review.comments.length === 0 ? (
        <Typography variant="body2" color="textSecondary">No comments yet.</Typography>
      ) : (
        Array.isArray(review.comments) && review.comments.map((comment, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <Typography variant="body2" sx={{ bgcolor: '#fff', p: 1, borderRadius: 2, boxShadow: 1 }}>
              {comment}
            </Typography>
          </Box>
        ))
      )}
      <Box sx={{ mt: 2, width: '100%' }}>
        <TextField
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          placeholder="Add a comment"
          value={newComments[review.id] || ''}
          onChange={(event) => handleCommentChange(review.id, event)}
          sx={{ mb: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleCommentSubmit(review.id)}
          disabled={!newComments[review.id]?.trim()}
        >
          Submit Comment
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ mt: 2, width: '90%' }}>
        {selectedReviewId === review.id ? (
          <>
            <Typography variant="h6">Rate this review:</Typography>
            <Rating
              value={userRating || 0}
              onChange={handleRatingChange}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRatingSubmit(review.id)}
              disabled={userRating === null}
            >
              Submit Rating
            </Button>
          </>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setSelectedReviewId(review.id)}
            sx={{ mt: 2 }}
          >
            Rate This Review
          </Button>
        )}
        <Typography variant="h6" sx={{ mt: 2 }}>User Ratings:</Typography>
        {Array.isArray(review.userRatings) && review.userRatings.length === 0 ? (
          <Typography variant="body2" color="textSecondary">No ratings yet.</Typography>
        ) : (
          Array.isArray(review.userRatings) && review.userRatings.map((rating, index) => (
            <Typography key={index} variant="body2">
              Rating: {rating}
            </Typography>
          ))
        )}
      </Box>
    </Paper>
  </Grid>
))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReviewPage;