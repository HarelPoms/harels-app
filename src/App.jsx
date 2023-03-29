import { Container, ThemeProvider,
  createTheme,
  CssBaseline, } from '@mui/material';
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Container>
        <header>
          <MuiNavbar />
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
