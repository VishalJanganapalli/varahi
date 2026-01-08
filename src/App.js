import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { Box, Container } from '@mui/material';
import ServicesSection from './components/ServicesSection';
import Trusted from './components/Trusted';
import Decision from './components/Decision';
import Success from './components/Success';
import Avaliable from './components/Avaliable';
import Footer from './components/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box>
      <Container maxWidth="xl" sx={{ background: isMobile ? 'transparent' : 'linear-gradient(90deg, #fff 60%, #FFF3E6 100%)' }}>
        <Navbar />
        {!isMobile && <HeroSection />}
      </Container>
      <Container maxWidth="xl">
        <ServicesSection />
        <Trusted />
      </Container>
      <Box sx={{ backgroundColor: '#000000' }}>
        <Container maxWidth="xl">
          <Decision />
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Success />
      </Container>
      <Avaliable />
      <Footer />
    </Box>
  );
}

export default App;
