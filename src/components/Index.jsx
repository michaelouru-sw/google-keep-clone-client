import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "@mui/system";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#fbbc05"),
  backgroundColor: "#fbbc05",
  "&:hover": {
    backgroundColor: "#fcd358",
  },
}));

const theme = createTheme();

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Take note
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Note taking forces you to pay attention and helps you focus in
              class (or while reading a textbook). It helps you learn. It helps
              you get organized.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <ColorButton variant="contained" className="button">
                <Link href="/login" underline="none">
                  Sign in
                </Link>
              </ColorButton>
              <ColorButton variant="contained" className="button">
                <Link href="/register" underline="none">
                  Sign Up
                </Link>
              </ColorButton>
            </Stack>
          </Container>
        </Box>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
