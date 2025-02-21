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
import { ColorModeButton, useColorMode } from './ui/color-mode';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" p="4">
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
        <Box ml="4">
          <ColorModeButton />
        </Box>
      </Flex>

      {/* Mobile Navigation */}
      {open && (
        <>
          {/* Backdrop effect */}
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="blackAlpha.600"
            backdropFilter="blur(5px)"
            zIndex="10"
            onClick={onClose} // Close menu when clicking outside
          />

          {/* Animated Menu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }} // 1-second transition
          >
            <Box
              position="absolute"
              top="50px"
              right="0"
              width="200px"
              bg={colorMode === 'dark' ? 'gray.800' : 'white'}
              boxShadow="md"
              zIndex="20"
              p={4}
              borderRadius="md"
              color="teal.500"
              mt={5}
            >
              <VStack align="start" gap="4">
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
          </motion.div>
        </>
      )}
    </HStack>
  );
};

export default Navbar;
