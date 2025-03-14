import { Box, Button, HStack, Image, Show, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import coffee from '../assets/coffee.png';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt="4"
      textAlign="center"
    >
      <Text fontSize="4xl" fontWeight="semibold">
        Hi Everyone, I am Mauricio Erazo.
      </Text>
      <Text fontSize="xl" mt="2">
        I am Full Stack Developer focusing on Frontend Development.
      </Text>
      <Text fontSize="lg" mt="2">
        I have experience in building web applications using modern technologies
        like React, TypeScript, Node.js, and more.
      </Text>

      <HStack gap="4" my="6" flexDirection={{ base: 'column', md: 'row' }}>
        <Link to="/projects">
          <Button colorPalette="teal" variant="outline">
            View Projects
          </Button>
        </Link>

        <Link to="/contact">
          <Button colorPalette="teal" variant="ghost">
            Contact Me
          </Button>
        </Link>
      </HStack>

      <Show when="md">
        <Image
          src={coffee}
          alt="Coffee"
          boxSize={{ base: '280px', md: '380px' }}
        />
      </Show>
    </Box>
  );
};

export default Home;
