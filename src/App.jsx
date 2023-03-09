import { Container } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Router from "./routes/Router"

function App() {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <main>
        <Router />
      </main>
      <footer>

      </footer>
    </Container>
  );
}

export default App;
