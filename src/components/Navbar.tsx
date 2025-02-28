import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  ColorModeButton,
  useColorMode,
  useColorModeValue,
} from './ui/color-mode';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoPic from '../assets/mauri-pic.jpeg';

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const color = useColorModeValue('gray.800', 'gray.400');

  return (
    <HStack justifyContent="space-between" p="4" color={color}>
      <Link to="/">
        <Flex
          align="center"
          gap="2"
          _hover={{ scale: '1.1' }}
          transition="scale 0.5s"
        >
          <Image
            src={logoPic}
            boxSize="40px"
            borderRadius="full"
            fit="cover"
            alt="Mauricio Erazo"
          />
          <Text
            fontSize="xl"
            fontWeight="bold"
            _hover={{ color: 'teal.600' }}
            transition="0.3s ease-in-out"
          >
            Mauricio Erazo
          </Text>
        </Flex>
      </Link>

      <Flex align="center">
        {/* Desktop Navigation */}
        <HStack
          gap="8"
          fontSize="xl"
          fontWeight="medium"
          display={{ base: 'none', md: 'flex' }}
        >
          <Link to="/">
            <Text _hover={{ color: 'teal.600' }} transition="0.2s ease-in-out">
              Home
            </Text>
          </Link>
          <Link to="/about">
            <Text _hover={{ color: 'teal.600' }} transition="0.2s ease-in-out">
              About
            </Text>
          </Link>
          <Link to="/projects">
            <Text _hover={{ color: 'teal.600' }} transition="0.2s ease-in-out">
              Projects
            </Text>
          </Link>
          <Link to="/contact">
            <Text _hover={{ color: 'teal.600' }} transition="0.2s ease-in-out">
              Contact
            </Text>
          </Link>
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
              mt={5}
            >
              <VStack align="start" gap="4">
                <Link to="/" onClick={onClose}>
                  <Text
                    fontWeight="semibold"
                    _hover={{ color: 'teal.600', fontWeight: 'semibold' }}
                    transition="0.2s ease-in-out"
                  >
                    Home
                  </Text>
                </Link>
                <Link to="/about" onClick={onClose}>
                  <Text
                    fontWeight="semibold"
                    _hover={{ color: 'teal.600', fontWeight: 'semibold' }}
                    transition="0.2s ease-in-out"
                  >
                    About
                  </Text>
                </Link>
                <Link to="/projects" onClick={onClose}>
                  <Text
                    fontWeight="semibold"
                    _hover={{ color: 'teal.600', fontWeight: 'semibold' }}
                    transition="0.2s ease-in-out"
                  >
                    Projects
                  </Text>
                </Link>
                <Link to="/contact" onClick={onClose}>
                  <Text
                    fontWeight="semibold"
                    _hover={{ color: 'teal.600', fontWeight: 'semibold' }}
                    transition="0.2s ease-in-out"
                  >
                    Contact
                  </Text>
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
