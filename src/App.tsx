import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import StudyCase from './pages/StudyCase';
import { useColorModeValue } from './components/ui/color-mode';

function App() {
  const color = useColorModeValue('gray.800', 'gray.400');
  
  return (
    <Flex minH="100vh" display="flex" flexDirection="column">
      <Router>
        <Navbar />
        <Box flex="1" color={color}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/studyCase" element={<StudyCase />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Flex>
  );
}

export default App;
