"use client";

import { AppBar, Container, Typography, TextField, Button, Box, Toolbar } from "@mui/material";
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleLoginClick = () => {
    router.push('/sign-in'); // Ensure the leading slash for routing
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Learn in a Flash
          </Typography>
          <Button color="inherit" onClick={handleHomeClick}>
            Home
          </Button>
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 4,
          p: 3,
          border: 1,
          borderColor: 'grey.300',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Create an Account
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            required
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}
