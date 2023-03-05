import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@mui/material';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Container>
      <Navbar />
      {/* <FirstComponent /> */}
      {/* <SecondComponent /> */}
      <HomePage />
    </Container>
  );
}

export default App;
