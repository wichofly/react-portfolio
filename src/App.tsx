import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';

import { useColorModeValue } from './components/ui/color-mode';
import { Toaster } from './components/ui/toaster';

function App() {
  const color = useColorModeValue('gray.800', 'gray.400');
  const bgColor = useColorModeValue('gray.50', 'gray.950');

  return (
    <Flex minH="100vh" display="flex" flexDirection="column" p="4" bg={bgColor}>
      <Router>
        <Navbar />
        <Box flex="1" color={color} p="4">
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Flex>
  );
}

export default App;
