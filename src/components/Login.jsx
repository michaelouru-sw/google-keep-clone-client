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

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#fbbc05"),
  backgroundColor: "#fbbc05",
  "&:hover": {
    backgroundColor: "#fcd358",
  },
}));

const theme = createTheme();

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const handleChange = (event) => {
    setUser((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(user);
    fetch("http://127.0.0.1:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(user));
          setUserAuthenticated(true);
          localStorage.setItem("userAuthenticated", userAuthenticated);
          window.location.href = "/home";
        }
      });
    // const response = await fetch("http://127.0.0.1:3000/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: user.username,
    //     password: user.password,
    //   }),
    // });
    // if (response.status === 200) {
    //   console.log(await response.json());
    //   const { token, user } = response.json();
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("user", user);
    //   // window.location.href = "/home";
    // } else {
    //   alert(response.statusText);
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header userAuthenticated={userAuthenticated} />
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="button"
            >
              Sign In
            </ColorButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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
