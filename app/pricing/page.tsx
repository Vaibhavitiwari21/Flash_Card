// pages/pricing.tsx
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { NavBar } from '@/components/NavBar';

export default function PricingPage () {
  return (
    <><NavBar />
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Choose Your Plan
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary">
          Simple and affordable pricing to suit every need.
        </Typography>
      </Box>

      {/* Pricing Options */}
      <Grid container spacing={4}>
        {/* Free Plan */}
        <Grid item xs={12} sm={4}>
          <Card
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'background.paper',
              borderRadius: 2,
              textAlign: 'center',
              boxShadow: 2,
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Free
              </Typography>
              <Typography variant="h4" component="p" sx={{ mb: 2 }}>
                $0
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                Access to basic flashcards and learning tools.
              </Typography>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Subscription Plan */}
        <Grid item xs={12} sm={4}>
          <Card
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'primary.light',
              color: 'primary.contrastText',
              borderRadius: 2,
              textAlign: 'center',
              boxShadow: 2,
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Monthly
              </Typography>
              <Typography variant="h4" component="p" sx={{ mb: 2 }}>
                $0.99
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Full access to all features on a monthly basis.
              </Typography>
              <Button variant="contained" color="secondary">
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Yearly Subscription Plan */}
        <Grid item xs={12} sm={4}>
          <Card
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'secondary.light',
              color: 'secondary.contrastText',
              borderRadius: 2,
              textAlign: 'center',
              boxShadow: 2,
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Yearly
              </Typography>
              <Typography variant="h4" component="p" sx={{ mb: 2 }}>
                $1.99
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Best value! Full access to all features for a year.
              </Typography>
              <Button variant="contained" color="primary">
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container></>
  );
};
