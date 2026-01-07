import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <HeroSection />
    </Container>
  );
}

export default App;
