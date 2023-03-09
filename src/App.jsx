import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@mui/material';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Container>
      <Navbar />
      <LoginPage />
    </Container>
  );
}

export default App;
