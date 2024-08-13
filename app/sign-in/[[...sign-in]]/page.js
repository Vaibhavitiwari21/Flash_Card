"use client";

import { AppBar, Container, Typography, Box, Toolbar, Button } from "@mui/material";
import { useRouter } from 'next/navigation';
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
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
          Login to Your Account
        </Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
