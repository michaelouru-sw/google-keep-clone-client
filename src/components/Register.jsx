import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { styled } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Michael Ouru
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#fbbc05"),
  backgroundColor: "#fbbc05",
  "&:hover": {
    backgroundColor: "#fcd358",
  },
}));

const theme = createTheme();

export default function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  function handleChange(event) {
    setUser((prevDetail) => {
      return {
        ...prevDetail,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(user);
    const response = await fetch("http://127.0.0.1:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
      }),
    });
    setUser({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    });
    if (response.status === 200) {
      window.location.href = "/login";
      alert(response.statusText);
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#fbbc05" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </ColorButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
