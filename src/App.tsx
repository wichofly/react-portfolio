import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import StudyCase from './pages/StudyCase';
import Footer from './components/Footer';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from './components/ui/color-mode';

function App() {
  const bgColor = useColorModeValue('gray.100', 'gray.900'); // light gray for light mode, darker gray for dark mode

  return (
    <Box minH="100vh" bg={bgColor} display="flex" flexDirection="column">
      <Router>
        <Navbar />
        <Box flex="1">
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
    </Box>
  );
}

export default App;
