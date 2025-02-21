import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeButton } from './ui/color-mode';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <HStack justifyContent="space-between" p={4}>
      <Link to="/">
        <Text fontSize="2xl" fontWeight="bold">
          Mauricio's Portfolio
        </Text>
      </Link>

      <Flex align="center">
        {/* Desktop Navigation */}
        <HStack
          gap="8"
          fontSize="xl"
          fontWeight="medium"
          color="teal.500"
          display={{ base: 'none', md: 'flex' }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </HStack>

        {/* Mobile Menu Button */}
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Open Menu"
            onClick={open ? onClose : onOpen}
            variant="ghost"
            color="teal"
          >
            {open ? <FaTimes /> : <FaBars />}
          </IconButton>
        </Box>
      </Flex>

      {/* Mobile Navigation */}
      {open && (
        <Box
          position="absolute"
          top="60px"
          left="0"
          width="100%"
          bg="white"
          boxShadow="md"
          zIndex="10"
          color="teal"
        >
          <VStack align="start" gap="4" p="4">
            <Link to="/" onClick={onClose}>
              Home
            </Link>
            <Link to="/about" onClick={onClose}>
              About
            </Link>
            <Link to="/projects" onClick={onClose}>
              Projects
            </Link>
            <Link to="/contact" onClick={onClose}>
              Contact
            </Link>
          </VStack>
        </Box>
      )}

      <Box ml="2">
        <ColorModeButton />
      </Box>
    </HStack>
  );
};

export default Navbar;
