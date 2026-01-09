import './App.css';
import React from 'react';
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
import { Route, Routes } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails';
import Form from './components/Form';
import HeroForm from './components/HeroForm';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formOpen, setFormOpen] = React.useState(false)
  const [formContext, setFormContext] = React.useState(null)

  React.useEffect(() => {
    const handler = (e) => {
      setFormContext(e?.detail ?? null)
      setFormOpen(true)
    }

    window.addEventListener('open-consultation-form', handler)
    return () => window.removeEventListener('open-consultation-form', handler)
  }, [])

  const HomePage = () => (
    <Box>
      <Container maxWidth="xl" sx={{ background: isMobile ? 'transparent' : 'linear-gradient(90deg, #fff 60%, #FFF3E6 100%)' }}>
        <Navbar />
        {!isMobile && <HeroSection />}
        {!isMobile && <HeroForm />}
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
  )

  const ServiceDetailsPage = () => (
    <Box>
      <Container maxWidth="xl" sx={{ background: isMobile ? 'transparent' : 'linear-gradient(90deg, #fff 60%, #FFF3E6 100%)' }}>
        <Navbar />
      </Container>
      <Container maxWidth="xl">
        <ServiceDetails />
      </Container>
      <Container maxWidth="xl">
        <Success />
      </Container>
      <Avaliable />
      <Footer />
    </Box>
  )

  return (
    <>
      <Form open={formOpen} onClose={() => setFormOpen(false)} context={formContext} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:slug" element={<ServiceDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
