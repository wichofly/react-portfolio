import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <HStack justifyContent="space-between" >
      <Link href="/">
        <Text textStyle="2xl" fontWeight="bold" padding="1">
          Mauricio's Portfolio
        </Text>
      </Link>

      <Flex justifyContent="space-around" alignItems="center" width="35%">
        <HStack
          gap="8"
          textStyle="lg"
          fontWeight="medium"
          colorPalette="teal"
          display={{ base: 'none', md: 'flex' }}
        >
          <Link href="/" padding="1">
            Home
          </Link>
          <Link href="/about" padding="1">
            About
          </Link>
          <Link href="/projects" padding="1">
            Projects
          </Link>
          <Link href="/contact" padding="1">
            Contact
          </Link>
        </HStack>

        <Box display={{ base: 'flex', md: 'none' }} position="relative">
          <IconButton
            size="md"
            aria-label="Open Menu"
            display={{ md: 'none' }}
            colorPalette="teal"
            onClick={open ? onClose : onOpen}
          >
            {open ? <FaTimes /> : <FaBars />}
          </IconButton>
          {open && (
            <Box
              position="absolute"
              top="100%"
              left={-4}
              padding="3"
              textStyle="lg"
            >
              <VStack align="start" gap="4" colorPalette="teal">
                <Link href="/" onClick={onClose} padding="1">
                  Home
                </Link>
                <Link href="/about" onClick={onClose} padding="1">
                  About
                </Link>
                <Link href="/projects" onClick={onClose} padding="1">
                  Projects
                </Link>
                <Link href="/contact" onClick={onClose} padding="1">
                  Contact
                </Link>
              </VStack>
            </Box>
          )}
        </Box>

        <ColorModeButton />
      </Flex>
    </HStack>
  );
};

export default Navbar;
