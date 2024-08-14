// pages/about.tsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { NavBar } from '@/components/NavBar';

export default function AboutPage() {
  return (
    <>
    <NavBar />
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Math Learner
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary">
          Revolutionizing math education through interactive flashcards.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'primary.light',
              color: 'primary.contrastText',
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              At Math Learner, our mission is to make math accessible and enjoyable for everyone. We believe in the power of flashcards to simplify complex concepts and help students retain information effectively.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'secondary.light',
              color: 'secondary.contrastText',
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1">
              We offer an innovative learning experience with customizable flashcards, progress tracking, and a focus on mastering fundamental math skills. Our platform is designed for learners of all ages and skill levels.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Features
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom>
              Interactive Flashcards
            </Typography>
            <Typography variant="body1">
              Engage with flashcards that include hints, explanations, and examples to deepen your understanding.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom>
              Customizable Decks
            </Typography>
            <Typography variant="body1">
              Create and organize your own flashcard decks to focus on the topics that matter most to you.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom>
              Progress Tracking
            </Typography>
            <Typography variant="body1">
              Track your learning progress and see your improvement over time with detailed analytics.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Closing Statement */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" component="p">
          Join us on the journey to mastering math, one flashcard at a time.
        </Typography>
      </Box>
    </Container></>
  );
};