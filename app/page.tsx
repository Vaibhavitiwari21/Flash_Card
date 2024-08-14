import Image from "next/image";
import getStripe from '@/utils/get-stripe';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Typography, Container, Toolbar, Button, Box, Grid } from "@mui/material";
import "@/app/globals.css"; // Ensure this path is correct
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <Box className="container-content">
        <Typography variant="h2">Welcome to Learn in a Flash</Typography>
        <Typography variant="h5">Easiest way to make flashcards from text</Typography>
        <Button variant="contained" className="button-primary">
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Customizable Flashcards
              </Typography>
              <Typography>
                Create flashcards with text, images, and audio. Customize formatting for better learning.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Flashcard Organization
              </Typography>
              <Typography>
                Organize flashcards into decks and categories. Tag flashcards for easy retrieval.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Spaced Repetition System
              </Typography>
              <Typography>
                Optimize review sessions with a spaced repetition algorithm for better retention.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Quiz and Test Mode
              </Typography>
              <Typography>
                Engage with interactive quizzes and tests. Get instant feedback and track progress.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Progress Tracking and Analytics
              </Typography>
              <Typography>
                Monitor your study sessions with detailed statistics and analytics.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Collaborative Features
              </Typography>
              <Typography>
                Share decks with friends and study groups. Collaborate on flashcard creation.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Multi-Platform Syncing
              </Typography>
              <Typography>
                Access your flashcards on web, mobile, and tablet devices seamlessly.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Gamification
              </Typography>
              <Typography>
                Earn achievements and badges. Compete on leaderboards to motivate learning.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
              <Typography variant="h6" gutterBottom>
                Integration with External Resources
              </Typography>
              <Typography>
                Enhance flashcards with external content from encyclopedias and educational videos.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6 }}>
  <Typography variant="h4" component="h2" align="center" gutterBottom>
    Pricing
  </Typography>
  <Grid container spacing={4} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
      <Box p={3} border={1} borderRadius={2} borderColor="grey.300" textAlign="center">
        <Typography variant="h6" gutterBottom>
          Basic Plan
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          Free
        </Typography>
        <Typography variant="body1" gutterBottom >
          Access to basic features, create up to 50 flashcards, and join one study group.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Box p={3} border={1} borderRadius={2} borderColor="grey.300" textAlign="center">
        <Typography variant="h6" gutterBottom>
          Pro Plan
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          $10/month
        </Typography>
        <Typography variant="body1" gutterBottom>
          Unlimited flashcards, advanced analytics, and priority support.
        </Typography>
        <Button variant="contained" color="primary">
          Upgrade Now
        </Button>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Box p={3} border={1} borderRadius={2} borderColor="grey.300" textAlign="center">
        <Typography variant="h6" gutterBottom>
          Team Plan
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          $29.99/month
        </Typography>
        <Typography variant="body1" gutterBottom>
          Collaborate with your team, share decks, and access exclusive content.
        </Typography>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Box>
    </Grid>
  </Grid>
</Box>

</>
  );
}
