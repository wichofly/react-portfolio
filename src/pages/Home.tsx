import { LinkButton } from '@/components/ui/link-button';
import { Box, HStack, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box textAlign="center" mt="4">
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
      <HStack
        gap="4"
        my="6"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'center'}
      >
        <LinkButton colorPalette="teal" variant="outline" href="/projects">
          View Projects
        </LinkButton>

        <LinkButton colorPalette="teal" variant="ghost" href="/contact">
          Contact Me
        </LinkButton>
      </HStack>
    </Box>
  );
};

export default Home;
