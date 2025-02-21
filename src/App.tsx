import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import StudyCase from './pages/StudyCase';
import Footer from './components/Footer';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex minH="100vh" direction="column">
      <Router>
        <Navbar />
        <Flex flex="1" direction="column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/studyCase" element={<StudyCase />} />
          </Routes>
        </Flex>
        <Footer />
      </Router>
    </Flex>
  );
}

export default App;
