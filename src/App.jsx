import { Container, ThemeProvider,
  createTheme,
  CssBaseline, } from '@mui/material';
import { useState } from "react";

import './App.css';
import Router from "./routes/Router"
import MuiNavbar from './components/Navbar/MuiNavbar';

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};



function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme); //localhost:3000/edit/123213
  };
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>
        <header>
          <MuiNavbar setIsDarkThemeFromApp={handleToggle} />
        </header>
        <main>
          <Router />
        </main>
        <footer>

        </footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
